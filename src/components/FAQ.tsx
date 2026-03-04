import { useState } from "react";
import { ChevronDown } from "lucide-react";

const faqs = [
  {
    question: "What types of flooring does Floor'd carry?",
    answer:
      "Floor'd carries hardwood, luxury vinyl plank (LVP), porcelain and ceramic tile, laminate, carpet, and specialty finishes. We have options for every style and budget, starting at $2/sq ft.",
  },
  {
    question: "Does Floor'd offer free estimates?",
    answer:
      "Yes. Floor'd offers free in-home estimates for all flooring projects in Central Arkansas. We'll measure your space, discuss your options, and provide a transparent quote with no hidden fees.",
  },
  {
    question: "What areas does Floor'd serve?",
    answer:
      "Floor'd serves the greater Little Rock metro and all of Central Arkansas, including North Little Rock, Benton, Bryant, Conway, Cabot, Jacksonville, Maumelle, and surrounding communities.",
  },
  {
    question: "Does Floor'd install the flooring too?",
    answer:
      "Yes. Floor'd provides professional installation with every purchase. Our installers are vetted local professionals who specialize in Arkansas homes — no subcontractors.",
  },
  {
    question: "How long does flooring installation take?",
    answer:
      "Most single-room installations take 1-2 days. A full-house project typically takes 3-5 days depending on the flooring type and square footage. We'll give you a clear timeline during your estimate.",
  },
];

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section id="faq" className="py-24 lg:py-32 section-cream">
      <div className="container mx-auto px-4">
        <div className="text-center mb-20">
          <p className="text-primary font-medium text-sm tracking-widest uppercase mb-4">Common Questions</p>
          <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl text-foreground mb-6">
            questions? we got you
          </h2>
          <div className="gold-divider mx-auto mb-6" />
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Here are the ones we hear most. Don't see yours? Just ask.
          </p>
        </div>

        <div className="max-w-3xl mx-auto space-y-3">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className={`bg-white border rounded-xl overflow-hidden transition-all duration-200 ${
                openIndex === index ? "border-primary/30 shadow-soft" : "border-border/50"
              }`}
            >
              <button
                className="w-full flex items-center justify-between p-6 text-left hover:bg-secondary/30 transition-colors"
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                aria-expanded={openIndex === index}
              >
                <span className="font-heading text-lg text-foreground pr-4">
                  {faq.question}
                </span>
                <ChevronDown
                  className={`w-5 h-5 text-primary shrink-0 transition-transform duration-300 ${
                    openIndex === index ? "rotate-180" : ""
                  }`}
                />
              </button>
              <div
                className={`overflow-hidden transition-all duration-300 ${
                  openIndex === index ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
                }`}
              >
                <div className="px-6 pb-6 text-muted-foreground leading-relaxed">
                  {faq.answer}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
