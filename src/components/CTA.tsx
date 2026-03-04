import { Button } from "@/components/ui/button";
import { MapPin, Phone, Clock, ArrowRight } from "lucide-react";

export function CTA() {
  return (
    <section id="contact" className="py-24 lg:py-32 bg-foreground text-background relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-primary/5 rounded-full -translate-x-1/2 -translate-y-1/2" />
      <div className="absolute bottom-0 right-0 w-72 h-72 bg-primary/5 rounded-full translate-x-1/3 translate-y-1/3" />

      <div className="container mx-auto px-4 relative">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left Content */}
          <div>
            <p className="text-primary font-medium text-sm tracking-widest uppercase mb-4">Get Started</p>
            <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl mb-6">
              let's find your floor
            </h2>
            <div className="gold-divider mb-8" style={{ background: "linear-gradient(90deg, hsl(38 65% 50%), hsl(40 60% 70%))" }} />
            <p className="text-background/80 text-lg mb-10 leading-relaxed max-w-lg">
              Stop by our showroom &mdash; no appointment needed. Walk on real floors, get honest advice, and leave with a plan (and maybe a free estimate).
            </p>

            <div className="space-y-5 mb-10">
              <div className="flex items-start gap-4 group">
                <div className="w-10 h-10 rounded-xl bg-background/10 flex items-center justify-center shrink-0 group-hover:bg-primary/20 transition-colors">
                  <MapPin className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <p className="font-heading text-lg">Visit Our Showroom</p>
                  <p className="text-background/60 text-sm">11915 I-30 Frontage Rd, Little Rock, AR 72209</p>
                </div>
              </div>
              <div className="flex items-start gap-4 group">
                <div className="w-10 h-10 rounded-xl bg-background/10 flex items-center justify-center shrink-0 group-hover:bg-primary/20 transition-colors">
                  <Phone className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <p className="font-heading text-lg">Give Us a Call</p>
                  <a href="tel:+15015551234" className="text-background/60 text-sm hover:text-primary transition-colors">
                    (501) 555-1234
                  </a>
                </div>
              </div>
              <div className="flex items-start gap-4 group">
                <div className="w-10 h-10 rounded-xl bg-background/10 flex items-center justify-center shrink-0 group-hover:bg-primary/20 transition-colors">
                  <Clock className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <p className="font-heading text-lg">Showroom Hours</p>
                  <p className="text-background/60 text-sm">Mon–Sat: 9AM–6PM &nbsp;|&nbsp; Sun: 11AM–5PM</p>
                </div>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button variant="default" size="lg" className="group/btn">
                Get a Free Estimate
                <ArrowRight className="w-4 h-4 transition-transform group-hover/btn:translate-x-1" />
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="border-background/30 text-background hover:bg-background hover:text-foreground"
              >
                Get Directions
              </Button>
            </div>
          </div>

          {/* Right Content - Form */}
          <div className="bg-background/5 backdrop-blur-sm rounded-xl p-8 lg:p-10 border border-background/10">
            <h3 className="font-heading text-2xl mb-2">Get a Free Estimate</h3>
            <p className="text-background/60 text-sm mb-8">
              Tell us about your project and we'll get back to you quick.
            </p>
            <form className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <input
                  type="text"
                  placeholder="First Name"
                  className="w-full px-4 py-3.5 bg-background/10 border border-background/20 rounded-xl text-background placeholder:text-background/40 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary/30 transition-all"
                />
                <input
                  type="text"
                  placeholder="Last Name"
                  className="w-full px-4 py-3.5 bg-background/10 border border-background/20 rounded-xl text-background placeholder:text-background/40 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary/30 transition-all"
                />
              </div>
              <input
                type="email"
                placeholder="Email Address"
                className="w-full px-4 py-3.5 bg-background/10 border border-background/20 rounded-xl text-background placeholder:text-background/40 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary/30 transition-all"
              />
              <input
                type="tel"
                placeholder="Phone Number"
                className="w-full px-4 py-3.5 bg-background/10 border border-background/20 rounded-xl text-background placeholder:text-background/40 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary/30 transition-all"
              />
              <select
                className="w-full px-4 py-3.5 bg-background/10 border border-background/20 rounded-xl text-background/70 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary/30 transition-all"
              >
                <option value="" className="text-foreground">Select Flooring Type</option>
                <option value="hardwood" className="text-foreground">Hardwood</option>
                <option value="vinyl" className="text-foreground">Luxury Vinyl (LVP)</option>
                <option value="tile" className="text-foreground">Tile &amp; Stone</option>
                <option value="laminate" className="text-foreground">Laminate</option>
                <option value="carpet" className="text-foreground">Carpet</option>
                <option value="other" className="text-foreground">Not Sure / Other</option>
              </select>
              <textarea
                placeholder="Tell us about your project..."
                rows={4}
                className="w-full px-4 py-3.5 bg-background/10 border border-background/20 rounded-xl text-background placeholder:text-background/40 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary/30 transition-all resize-none"
              />
              <Button variant="default" size="lg" className="w-full">
                Send It Over
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
