import { notFound } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { PortableText } from "@portabletext/react";
import { getPost, getPostSlugs, urlFor } from "@/lib/sanity";
import type { Metadata } from "next";

export const revalidate = 60;

export async function generateStaticParams() {
  const slugs = await getPostSlugs();
  return slugs.map((s) => ({ slug: s.slug.current }));
}

export async function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Promise<Metadata> {
  const post = await getPost(params.slug);
  if (!post) return {};
  return {
    title: `${post.title} | Generation Beta`,
    description: post.excerpt,
  };
}

const portableTextComponents = {
  block: {
    h2: ({ children }: { children?: React.ReactNode }) => (
      <h2
        className="font-display text-cream font-light mt-12 mb-4 leading-tight"
        style={{ fontSize: "clamp(1.6rem, 3vw, 2.2rem)" }}
      >
        {children}
      </h2>
    ),
    h3: ({ children }: { children?: React.ReactNode }) => (
      <h3 className="font-display text-cream font-light text-xl mt-8 mb-3">
        {children}
      </h3>
    ),
    normal: ({ children }: { children?: React.ReactNode }) => (
      <p className="font-body text-cream/70 text-base leading-relaxed mb-5">
        {children}
      </p>
    ),
    blockquote: ({ children }: { children?: React.ReactNode }) => (
      <blockquote className="border-l-2 border-gold pl-6 my-8 font-display text-cream/80 italic text-xl font-light leading-relaxed">
        {children}
      </blockquote>
    ),
  },
  list: {
    bullet: ({ children }: { children?: React.ReactNode }) => (
      <ul className="list-none space-y-2 mb-6 pl-0">{children}</ul>
    ),
    number: ({ children }: { children?: React.ReactNode }) => (
      <ol className="list-decimal pl-5 space-y-2 mb-6 font-body text-cream/70">
        {children}
      </ol>
    ),
  },
  listItem: {
    bullet: ({ children }: { children?: React.ReactNode }) => (
      <li className="font-body text-cream/70 text-base flex items-start gap-3">
        <span className="mt-2 w-1 h-1 rounded-full bg-gold flex-shrink-0" />
        <span>{children}</span>
      </li>
    ),
  },
  marks: {
    strong: ({ children }: { children?: React.ReactNode }) => (
      <strong className="font-medium text-cream">{children}</strong>
    ),
    em: ({ children }: { children?: React.ReactNode }) => (
      <em className="italic text-cream/80">{children}</em>
    ),
    link: ({ value, children }: { value?: { href: string }; children?: React.ReactNode }) => (
      <a
        href={value?.href}
        target="_blank"
        rel="noopener noreferrer"
        className="text-gold hover:text-gold-light underline underline-offset-2 transition-colors duration-200"
      >
        {children}
      </a>
    ),
  },
  types: {
    image: ({ value }: { value: { asset?: unknown; alt?: string; caption?: string } }) => {
      if (!value?.asset) return null;
      return (
        <figure className="my-10">
          <div className="relative aspect-video overflow-hidden">
            <Image
              src={urlFor(value).width(1200).url()}
              alt={value.alt || ""}
              fill
              className="object-cover"
            />
          </div>
          {value.caption && (
            <figcaption className="mt-3 text-center font-body text-xs text-cream/35 tracking-wide">
              {value.caption}
            </figcaption>
          )}
        </figure>
      );
    },
  },
};

function formatDate(dateString: string) {
  return new Date(dateString).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

export default async function PostPage({
  params,
}: {
  params: { slug: string };
}) {
  const post = await getPost(params.slug);
  if (!post) notFound();

  return (
    <main className="pt-20">
      {/* Hero */}
      <section className="max-w-7xl mx-auto px-6 lg:px-12 py-16 lg:py-24">
        <Link
          href="/blog"
          className="inline-flex items-center gap-2 font-body text-xs text-cream/40 hover:text-gold transition-colors duration-200 mb-12 tracking-[0.1em] uppercase"
        >
          <svg width="14" height="10" viewBox="0 0 14 10" fill="none">
            <path d="M13 5H1M5 1L1 5L5 9" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round"/>
          </svg>
          All posts
        </Link>

        <div className="max-w-3xl">
          <div className="flex items-center gap-3 mb-6">
            <div className="h-px w-8 bg-gold" />
            <time className="font-body text-gold text-xs tracking-[0.2em] uppercase">
              {formatDate(post.publishedAt)}
            </time>
          </div>

          <h1
            className="font-display text-cream leading-[0.95] tracking-tight mb-6"
            style={{ fontSize: "clamp(2.4rem, 5vw, 4.5rem)" }}
          >
            {post.title}
          </h1>

          {post.excerpt && (
            <p className="font-body text-cream/55 text-lg leading-relaxed mb-6">
              {post.excerpt}
            </p>
          )}

          <div className="flex items-center gap-3">
            <div className="w-6 h-px bg-gold/40" />
            <span className="font-body text-xs text-cream/35">{post.author}</span>
          </div>
        </div>
      </section>

      {/* Main image */}
      {post.mainImage && (
        <section className="max-w-7xl mx-auto px-6 lg:px-12 mb-16">
          <div className="relative aspect-[16/7] overflow-hidden border border-gold/10">
            <Image
              src={urlFor(post.mainImage).width(1600).url()}
              alt={(post.mainImage as { alt?: string }).alt || post.title}
              fill
              className="object-cover"
              priority
            />
          </div>
        </section>
      )}

      {/* Body */}
      <section className="max-w-7xl mx-auto px-6 lg:px-12 pb-32">
        <div className="max-w-3xl">
          <div className="border-t border-gold/10 pt-12">
            {post.body && (
              <PortableText
                value={post.body as Parameters<typeof PortableText>[0]["value"]}
                components={portableTextComponents}
              />
            )}
          </div>

          {/* Back link */}
          <div className="mt-16 pt-8 border-t border-gold/10">
            <Link
              href="/blog"
              className="inline-flex items-center gap-3 font-body text-sm text-gold hover:text-gold-light transition-colors duration-200"
            >
              <svg width="16" height="10" viewBox="0 0 16 10" fill="none">
                <path d="M15 5H1M5 1L1 5L5 9" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round"/>
              </svg>
              Back to all posts
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
