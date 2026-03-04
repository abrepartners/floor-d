import { useParams, Link, Navigate } from "react-router-dom";
import { ArrowLeft, Check, ChevronDown, ChevronUp } from "lucide-react";
import { useState } from "react";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { ContactForm } from "@/components/ContactForm";
import { SEO } from "@/components/SEO";
import { Helmet } from "react-helmet-async";
import { Button } from "@/components/ui/button";
import { getFlooringCategory } from "@/data/flooringCategories";

import hardwoodImg from "@/assets/flooring-hardwood.jpg";
import vinylImg from "@/assets/flooring-vinyl.jpg";
import tileImg from "@/assets/flooring-tile.jpg";
import laminateImg from "@/assets/flooring-laminate.jpg";
import carpetImg from "@/assets/flooring-carpet.jpg";

const imageMap: Record<string, string> = {
  hardwood: hardwoodImg,
  vinyl: vinylImg,
  tile: tileImg,
  laminate: laminateImg,
  carpet: carpetImg,
};

function FAQItem({ question, answer }: { question: string; answer: string }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="border border-border rounded-xl overflow-hidden">
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between p-5 text-left hover:bg-secondary/30 transition-colors"
      >
        <span className="font-heading text-lg text-foreground pr-4">
          {question}
        </span>
        {open ? (
          <ChevronUp className="w-5 h-5 text-primary shrink-0" />
        ) : (
          <ChevronDown className="w-5 h-5 text-muted-foreground shrink-0" />
        )}
      </button>
      {open && (
        <div className="px-5 pb-5 text-muted-foreground leading-relaxed animate-fade-in">
          {answer}
        </div>
      )}
    </div>
  );
}

export default function FlooringCategory() {
  const { slug } = useParams<{ slug: string }>();
  const category = slug ? getFlooringCategory(slug) : undefined;

  if (!category) {
    return <Navigate to="/" replace />;
  }

  const heroImage = imageMap[category.image] || hardwoodImg;

  // Map slug to form default flooring type value
  const formTypeMap: Record<string, string> = {
    hardwood: "hardwood",
    "luxury-vinyl": "vinyl",
    tile: "tile",
    laminate: "laminate",
    carpet: "carpet",
  };

  return (
    <div className="min-h-screen bg-background">
      <SEO
        title={category.seoTitle}
        description={category.seoDescription}
        canonical={`/flooring/${category.slug}`}
        schema={{
          "@context": "https://schema.org",
          "@type": "Product",
          name: category.title,
          description: category.description,
          brand: {
            "@type": "Brand",
            name: "Floor'd Flooring + Finishes",
          },
          offers: {
            "@type": "AggregateOffer",
            priceCurrency: "USD",
            availability: "https://schema.org/InStock",
            offerCount: "50+",
          },
          provider: {
            "@type": "LocalBusiness",
            name: "Floor'd Flooring + Finishes",
            address: {
              "@type": "PostalAddress",
              streetAddress: "11915 I-30 Frontage Rd, Suite D",
              addressLocality: "Little Rock",
              addressRegion: "AR",
              postalCode: "72209",
            },
          },
        }}
      />
      <Helmet>
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: category.faqs.map((faq) => ({
              "@type": "Question",
              name: faq.question,
              acceptedAnswer: {
                "@type": "Answer",
                text: faq.answer,
              },
            })),
          })}
        </script>
      </Helmet>
      <Header />

      {/* Hero */}
      <section className="relative pt-20">
        <div className="relative h-[50vh] min-h-[400px] overflow-hidden">
          <img
            src={heroImage}
            alt={`${category.title} available at Floor'd in Little Rock, AR`}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-foreground/80 via-foreground/40 to-foreground/20" />
          <div className="absolute inset-0 flex items-end">
            <div className="container mx-auto px-4 pb-12">
              <Link
                to="/"
                className="inline-flex items-center gap-2 text-sm text-white/70 hover:text-white transition-colors mb-6"
              >
                <ArrowLeft className="w-4 h-4" />
                Back to Home
              </Link>
              <span className="block text-xs font-semibold tracking-[0.2em] uppercase text-primary mb-3">
                {category.badge}
              </span>
              <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl text-white mb-3">
                {category.title}
              </h1>
              <p className="text-white/80 text-lg md:text-xl max-w-2xl">
                {category.tagline}
              </p>
              <p className="text-primary font-semibold text-lg mt-4">
                {category.priceRange}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Description */}
      <section className="py-16 lg:py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <p className="text-muted-foreground text-lg leading-relaxed">
              {category.description}
            </p>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-16 lg:py-20 section-cream">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="font-heading text-3xl md:text-4xl text-foreground mb-4">
              What You Get
            </h2>
            <div className="gold-divider mx-auto" />
          </div>
          <div className="max-w-2xl mx-auto">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {category.features.map((feature) => (
                <div
                  key={feature}
                  className="flex items-center gap-3 bg-white rounded-xl p-4 border border-border/50"
                >
                  <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                    <Check className="w-4 h-4 text-primary" />
                  </div>
                  <span className="text-foreground font-medium">{feature}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-16 lg:py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="font-heading text-3xl md:text-4xl text-foreground mb-4">
              Why Choose {category.title}
            </h2>
            <div className="gold-divider mx-auto" />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {category.benefits.map((benefit) => (
              <div
                key={benefit.title}
                className="bg-card border border-border rounded-xl p-6"
              >
                <h3 className="font-heading text-xl text-foreground mb-2">
                  {benefit.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {benefit.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Best For */}
      <section className="py-16 lg:py-20 section-warm">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="font-heading text-3xl md:text-4xl text-foreground mb-4">
              Best For
            </h2>
            <div className="gold-divider mx-auto mb-8" />
            <div className="flex flex-wrap justify-center gap-3">
              {category.bestFor.map((item) => (
                <span
                  key={item}
                  className="inline-flex items-center px-4 py-2 rounded-full bg-white border border-border text-sm font-medium text-foreground shadow-sm"
                >
                  {item}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section className="py-16 lg:py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="font-heading text-3xl md:text-4xl text-foreground mb-4">
                Common Questions
              </h2>
              <div className="gold-divider mx-auto" />
            </div>
            <div className="space-y-4">
              {category.faqs.map((faq) => (
                <FAQItem
                  key={faq.question}
                  question={faq.question}
                  answer={faq.answer}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <ContactForm
        heading={`Get a Free ${category.title} Estimate`}
        subheading={`Interested in ${category.title.toLowerCase()} for your home? Tell us about your project and we'll get back to you quick.`}
        defaultFlooringType={formTypeMap[category.slug] || ""}
      />

      <Footer />
    </div>
  );
}
