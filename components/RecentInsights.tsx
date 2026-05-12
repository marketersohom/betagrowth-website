"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { client, type Post } from "@/lib/sanity";
import ScrollReveal from "@/components/ScrollReveal";

function formatDate(dateString: string) {
  return new Date(dateString).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

export default function RecentInsights() {
  const [posts, setPosts] = useState<Post[] | null>(null);

  useEffect(() => {
    let cancelled = false;
    client
      .fetch<Post[]>(
        `*[_type == "post" && defined(publishedAt)] | order(publishedAt desc)[0...3] {
          _id,
          title,
          slug,
          publishedAt,
          excerpt
        }`
      )
      .then((data) => {
        if (!cancelled) setPosts(data);
      })
      .catch(() => {
        if (!cancelled) setPosts([]);
      });
    return () => {
      cancelled = true;
    };
  }, []);

  if (!posts || posts.length === 0) return null;

  return (
    <section className="max-w-7xl mx-auto px-6 lg:px-12 py-24 lg:py-32">
      <ScrollReveal className="mb-14 max-w-3xl">
        <div className="flex items-center gap-3 mb-6">
          <div className="h-px w-8 bg-gold" />
          <span className="font-body text-gold text-xs tracking-[0.2em] uppercase">
            Recent insights
          </span>
        </div>
        <h2
          className="font-display text-cream leading-[1.05]"
          style={{ fontSize: "clamp(2rem, 4vw, 3.2rem)" }}
        >
          Writing on revenue architecture.
        </h2>
      </ScrollReveal>

      <div className="grid md:grid-cols-3 gap-8 lg:gap-12">
        {posts.map((post, i) => (
          <ScrollReveal key={post._id} delay={i * 0.1}>
            <Link
              href={`/insights/${post.slug.current}`}
              className="group block border-t border-gold/15 pt-5 hover:border-gold/40 transition-colors duration-300 h-full"
            >
              <time className="font-body text-xs text-cream/40 tracking-[0.1em] block mb-3">
                {formatDate(post.publishedAt)}
              </time>
              <h3 className="font-display text-cream text-xl font-light leading-snug mb-3 group-hover:text-gold transition-colors duration-200">
                {post.title}
              </h3>
              {post.excerpt && (
                <p className="font-body text-cream/55 text-sm leading-relaxed mb-5">
                  {post.excerpt}
                </p>
              )}
              <div className="inline-flex items-center gap-2 text-gold">
                <span className="font-body text-xs tracking-[0.1em]">Read</span>
                <svg width="14" height="10" viewBox="0 0 14 10" fill="none">
                  <path
                    d="M1 5H13M9 1L13 5L9 9"
                    stroke="currentColor"
                    strokeWidth="1.2"
                    strokeLinecap="round"
                  />
                </svg>
              </div>
            </Link>
          </ScrollReveal>
        ))}
      </div>

      <ScrollReveal delay={0.2} className="mt-14">
        <Link
          href="/insights"
          className="inline-flex items-center gap-3 font-body text-sm text-gold hover:text-gold-light transition-colors duration-200"
        >
          All insights
          <svg width="16" height="10" viewBox="0 0 16 10" fill="none">
            <path
              d="M1 5H15M11 1L15 5L11 9"
              stroke="currentColor"
              strokeWidth="1.2"
              strokeLinecap="round"
            />
          </svg>
        </Link>
      </ScrollReveal>
    </section>
  );
}
