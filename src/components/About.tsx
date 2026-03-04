import { MapPin, Heart, Users } from "lucide-react";

const stats = [
  { icon: Heart, value: "500+", label: "Happy Homes" },
  { icon: Users, value: "15+", label: "Years Experience" },
  { icon: MapPin, value: "100%", label: "Locally Owned" },
];

export function About() {
  return (
    <section id="about" className="py-24 lg:py-32 bg-background">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left - Story */}
          <div>
            <p className="text-primary font-medium text-sm tracking-widest uppercase mb-4">Our Story</p>
            <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl text-foreground mb-6">
              hey, we're floor'd
            </h2>
            <div className="gold-divider mb-8" />

            <div className="space-y-5 text-muted-foreground text-lg leading-relaxed">
              <p>
                We started Floor'd because we thought buying floors should feel good &mdash; not stressful, not confusing, and definitely not judgy.
              </p>

              <p>
                Whether you're renovating your first apartment or building your dream home, we're here to help you find floors you'll love at a price that works. We serve homeowners across Little Rock, North Little Rock, Benton, Bryant, Conway, and all of Central Arkansas.
              </p>

              <p>
                Our showroom is designed to feel welcoming. Bring your partner, bring your kids, bring your dog (seriously). Grab some coffee, ask a million questions, and take as long as you need. We're in no rush.
              </p>

              <p>
                We believe great flooring shouldn't just look good &mdash; it should fit your life. And we believe every customer deserves the same respect, whether you're spending $2,000 or $20,000.
              </p>

              <p className="font-heading text-foreground text-xl">
                That's the Floor'd way.
              </p>
            </div>
          </div>

          {/* Right - Stats + Visual */}
          <div className="space-y-8">
            {/* Stats Grid */}
            <div className="grid grid-cols-3 gap-4">
              {stats.map((stat) => (
                <div
                  key={stat.label}
                  className="bg-white rounded-xl p-6 text-center border border-border/50 card-hover"
                >
                  <stat.icon className="w-6 h-6 text-primary mx-auto mb-3" />
                  <p className="font-heading text-3xl text-foreground mb-1">{stat.value}</p>
                  <p className="text-muted-foreground text-xs tracking-wide uppercase">{stat.label}</p>
                </div>
              ))}
            </div>

            {/* Testimonial Card */}
            <div className="bg-foreground rounded-xl p-8 text-white relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-primary/10 rounded-full -translate-y-1/2 translate-x-1/2" />
              <div className="relative">
                <div className="flex gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} className="w-5 h-5 text-primary fill-current" viewBox="0 0 20 20">
                      <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
                    </svg>
                  ))}
                </div>
                <p className="text-white/90 text-lg italic leading-relaxed mb-4">
                  "They made the whole process so easy. No pressure, great advice, and our floors look amazing. Honestly the best experience we've had with any home project."
                </p>
                <p className="text-white/60 text-sm">&mdash; Sarah M., Little Rock</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
