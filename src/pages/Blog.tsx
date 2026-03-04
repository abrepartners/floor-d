import { Link } from "react-router-dom";
import { ArrowRight, Calendar, Clock } from "lucide-react";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { blogPosts, formatDate } from "@/data/blogPosts";

export default function Blog() {
  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* Hero */}
      <section className="pt-32 pb-16 section-warm">
        <div className="container mx-auto px-4 text-center">
          <span className="inline-block text-xs font-semibold tracking-[0.2em] uppercase text-primary mb-4">
            Floor'd Blog
          </span>
          <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl text-foreground mb-4">
            Flooring Tips & Guides
          </h1>
          <div className="gold-divider mx-auto mb-6" />
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Honest advice, real pricing, and practical guides from your
            neighborhood flooring store in Little Rock, Arkansas.
          </p>
        </div>
      </section>

      {/* Posts Grid */}
      <section className="py-16 lg:py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post) => (
              <Link
                key={post.slug}
                to={`/blog/${post.slug}`}
                className="group block"
              >
                <article className="h-full bg-card border border-border rounded-2xl overflow-hidden card-hover flex flex-col">
                  {/* Category Badge */}
                  <div className="px-6 pt-6 pb-0">
                    <span className="inline-block text-[11px] font-semibold tracking-wider uppercase text-primary bg-primary/10 px-3 py-1 rounded-full">
                      {post.category}
                    </span>
                  </div>

                  {/* Content */}
                  <div className="px-6 py-5 flex-1 flex flex-col">
                    <h2 className="font-heading text-xl font-semibold text-foreground mb-3 group-hover:text-primary transition-colors leading-tight">
                      {post.title}
                    </h2>
                    <p className="text-muted-foreground text-sm leading-relaxed mb-4 flex-1 line-clamp-3">
                      {post.excerpt}
                    </p>
                    <div className="flex items-center justify-between text-xs text-muted-foreground/70 pt-4 border-t border-border">
                      <div className="flex items-center gap-1.5">
                        <Calendar className="w-3.5 h-3.5" />
                        <span>{formatDate(post.date)}</span>
                      </div>
                      <div className="flex items-center gap-1.5">
                        <Clock className="w-3.5 h-3.5" />
                        <span>{post.readTime}</span>
                      </div>
                    </div>
                  </div>

                  {/* Read More */}
                  <div className="px-6 pb-6">
                    <span className="inline-flex items-center gap-2 text-sm font-medium text-primary group-hover:gap-3 transition-all">
                      Read Article
                      <ArrowRight className="w-4 h-4" />
                    </span>
                  </div>
                </article>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
