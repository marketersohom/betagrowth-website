import Link from "next/link";
import { getPosts } from "@/lib/sanity";

export const revalidate = 60;

function formatDate(dateString: string) {
  return new Date(dateString).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

export default async function BlogPage() {
  const posts = await getPosts();

  return (
    <main className="pt-20">
      <section className="max-w-7xl mx-auto px-6 lg:px-12 py-24 lg:py-32">
        {/* Header */}
        <div className="flex items-center gap-3 mb-8">
          <div className="h-px w-8 bg-gold" />
          <span className="font-body text-gold text-xs tracking-[0.2em] uppercase">
            Insights
          </span>
        </div>

        <h1
          className="font-display text-cream leading-[0.95] tracking-tight mb-8"
          style={{ fontSize: "clamp(2.8rem, 6vw, 5.5rem)" }}
        >
          Insights
        </h1>

        <p className="font-body text-cream/60 text-lg leading-relaxed max-w-2xl mb-20">
          Writing on revenue architecture, growth systems, and premium brand strategy. Published when there is something worth saying.
        </p>

        {/* Posts */}
        {posts.length === 0 ? (
          <div className="border-t border-gold/10 pt-16 max-w-2xl">
            <p className="font-body text-cream/30 text-sm">
              No posts yet. Check back soon.
            </p>
          </div>
        ) : (
          <div className="divide-y divide-gold/10">
            {posts.map((post, i) => (
              <article
                key={post._id}
                className="py-10 group"
                style={{ animationDelay: `${i * 80}ms` }}
              >
                <Link href={`/blog/${post.slug.current}`} className="block">
                  <div className="grid lg:grid-cols-12 gap-6 lg:gap-12 items-start">
                    <div className="lg:col-span-3">
                      <time className="font-body text-xs text-cream/35 tracking-[0.1em]">
                        {formatDate(post.publishedAt)}
                      </time>
                    </div>
                    <div className="lg:col-span-9">
                      <h2
                        className="font-display text-cream font-light group-hover:text-gold transition-colors duration-200 mb-3 leading-tight"
                        style={{ fontSize: "clamp(1.4rem, 2.5vw, 2rem)" }}
                      >
                        {post.title}
                      </h2>
                      {post.excerpt && (
                        <p className="font-body text-cream/50 text-sm leading-relaxed mb-4 max-w-2xl">
                          {post.excerpt}
                        </p>
                      )}
                      <div className="flex items-center gap-2 text-gold">
                        <span className="font-body text-xs tracking-[0.1em]">
                          Read
                        </span>
                        <svg width="14" height="10" viewBox="0 0 14 10" fill="none">
                          <path d="M1 5H13M9 1L13 5L9 9" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round"/>
                        </svg>
                      </div>
                    </div>
                  </div>
                </Link>
              </article>
            ))}
          </div>
        )}
      </section>
    </main>
  );
}
