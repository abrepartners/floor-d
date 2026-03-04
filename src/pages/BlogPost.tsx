import { useParams, Link, Navigate } from "react-router-dom";
import { ArrowLeft, Calendar, Clock } from "lucide-react";
import ReactMarkdown from "react-markdown";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { getBlogPost, blogPosts, formatDate } from "@/data/blogPosts";

export default function BlogPost() {
  const { slug } = useParams<{ slug: string }>();
  const post = slug ? getBlogPost(slug) : undefined;

  if (!post) {
    return <Navigate to="/blog" replace />;
  }

  // Get related posts (exclude current)
  const related = blogPosts.filter((p) => p.slug !== post.slug).slice(0, 2);

  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* Article Header */}
      <section className="pt-32 pb-12 section-warm">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <Link
              to="/blog"
              className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors mb-8"
            >
              <ArrowLeft className="w-4 h-4" />
              Back to Blog
            </Link>

            <span className="inline-block text-[11px] font-semibold tracking-wider uppercase text-primary bg-primary/10 px-3 py-1 rounded-full mb-4">
              {post.category}
            </span>

            <h1 className="font-heading text-3xl md:text-4xl lg:text-5xl text-foreground mb-4 leading-tight">
              {post.title}
            </h1>

            <div className="gold-divider mb-6" />

            <div className="flex items-center gap-6 text-sm text-muted-foreground">
              <div className="flex items-center gap-2">
                <Calendar className="w-4 h-4" />
                <span>{formatDate(post.date)}</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4" />
                <span>{post.readTime}</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Article Body */}
      <section className="py-12 lg:py-16">
        <div className="container mx-auto px-4">
          <article className="max-w-3xl mx-auto prose prose-lg prose-stone prose-headings:font-heading prose-headings:text-foreground prose-p:text-muted-foreground prose-p:leading-relaxed prose-strong:text-foreground prose-a:text-primary hover:prose-a:text-primary/80 prose-li:text-muted-foreground prose-th:text-foreground prose-td:text-muted-foreground prose-hr:border-border">
            <ReactMarkdown>{post.content}</ReactMarkdown>
          </article>
        </div>
      </section>

      {/* CTA */}
      <section className="py-12 section-cream">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="font-heading text-2xl md:text-3xl text-foreground mb-3">
              Ready to Get Started?
            </h2>
            <p className="text-muted-foreground mb-6">
              Visit Floor'd Flooring + Finishes in Little Rock, AR — no
              appointment needed, no pressure, just good flooring and good
              people.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <Button variant="default" size="lg" asChild>
                <a href="/#contact">Get a Free Estimate</a>
              </Button>
              <Button variant="outline" size="lg" asChild>
                <a href="tel:+15015551234">Call (501) 555-1234</a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Related Posts */}
      {related.length > 0 && (
        <section className="py-12 lg:py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto">
              <h3 className="font-heading text-2xl text-foreground mb-8">
                More from the Blog
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {related.map((rp) => (
                  <Link
                    key={rp.slug}
                    to={`/blog/${rp.slug}`}
                    className="group block"
                  >
                    <article className="bg-card border border-border rounded-xl p-6 card-hover">
                      <span className="inline-block text-[10px] font-semibold tracking-wider uppercase text-primary mb-2">
                        {rp.category}
                      </span>
                      <h4 className="font-heading text-lg font-semibold text-foreground group-hover:text-primary transition-colors mb-2 leading-snug">
                        {rp.title}
                      </h4>
                      <p className="text-muted-foreground text-sm line-clamp-2">
                        {rp.excerpt}
                      </p>
                    </article>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </section>
      )}

      <Footer />
    </div>
  );
}
