import { Ruler, Palette, Wrench, Award } from "lucide-react";

const services = [
  {
    icon: Ruler,
    title: "Free Consultation",
    description: "Expert design advice tailored to your space, style, and budget.",
  },
  {
    icon: Palette,
    title: "Wide Selection",
    description: "Premium hardwood, luxury vinyl, tile, and specialty finishes.",
  },
  {
    icon: Wrench,
    title: "Pro Installation",
    description: "Certified installers ensuring flawless results every time.",
  },
  {
    icon: Award,
    title: "Quality Guarantee",
    description: "Industry-leading warranties on all products and workmanship.",
  },
];

export function Services() {
  return (
    <section className="py-20 lg:py-28 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl text-foreground mb-4">
            why choose floor'd
          </h2>
          <div className="w-16 h-0.5 bg-primary mx-auto mb-6" />
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            From selection to installation, we make transforming your floors effortless.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <div
              key={service.title}
              className="group text-center p-8 rounded-lg bg-card border border-border card-hover"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="w-16 h-16 mx-auto mb-6 rounded-full bg-secondary flex items-center justify-center group-hover:bg-primary transition-colors duration-300">
                <service.icon className="w-7 h-7 text-primary group-hover:text-primary-foreground transition-colors duration-300" />
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
