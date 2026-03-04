import { Coffee, Heart, Wrench, ShieldCheck } from "lucide-react";

const services = [
  {
    icon: Coffee,
    title: "Come Hang Out",
    description:
      "Our showroom feels like a friend's living room, not a warehouse. Bring the kids. Ask questions. Take your time. No pressure, ever.",
  },
  {
    icon: Heart,
    title: "Every Budget Welcome",
    description:
      "From $2/sq ft laminate to $11/sq ft designer hardwood — we treat every customer the same. Your budget is your business, not ours to judge.",
  },
  {
    icon: Wrench,
    title: "Real Local Pros",
    description:
      "Our installers know Central Arkansas homes inside and out. No subcontractors, no strangers — just skilled pros who take pride in their craft.",
  },
  {
    icon: ShieldCheck,
    title: "We Stand Behind It",
    description:
      "Industry-leading warranties on products and installation. If something's not right, we make it right. We're just down the road.",
  },
];

export function Services() {
  return (
    <section className="py-24 lg:py-32 section-warm">
      <div className="container mx-auto px-4">
        <div className="text-center mb-20">
          <p className="text-primary font-medium text-sm tracking-widest uppercase mb-4">Why People Choose Us</p>
          <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl text-foreground mb-6">
            why people love floor'd
          </h2>
          <div className="gold-divider mx-auto mb-6" />
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            We're not your typical flooring store. Here's what makes us different.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <div
              key={service.title}
              className="group relative bg-white rounded-xl p-8 card-hover border border-border/50"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="w-14 h-14 mb-6 rounded-xl bg-secondary flex items-center justify-center group-hover:bg-primary group-hover:shadow-gold transition-all duration-300">
                <service.icon className="w-6 h-6 text-primary group-hover:text-primary-foreground transition-colors duration-300" />
              </div>
              <h3 className="font-heading text-xl text-foreground mb-3">
                {service.title}
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
