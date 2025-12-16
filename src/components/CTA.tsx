import { Button } from "@/components/ui/button";
import { MapPin, Phone, Clock } from "lucide-react";

export function CTA() {
  return (
    <section id="contact" className="py-20 lg:py-28 bg-foreground text-background">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left Content */}
          <div>
            <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl mb-6">
              ready to transform your space?
            </h2>
            <div className="w-16 h-0.5 bg-primary mb-6" />
            <p className="text-background/80 text-lg mb-8 leading-relaxed">
              Visit our showroom to experience our flooring collections firsthand. 
              Our design experts are ready to help you find the perfect solution for your home.
            </p>

            <div className="space-y-4 mb-8">
              <div className="flex items-start gap-4">
                <MapPin className="w-5 h-5 text-primary mt-1 shrink-0" />
                <div>
                  <p className="font-medium">Visit Our Showroom</p>
                  <p className="text-background/70 text-sm">123 Design District, Your City, ST 12345</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <Phone className="w-5 h-5 text-primary mt-1 shrink-0" />
                <div>
                  <p className="font-medium">Call Us Today</p>
                  <p className="text-background/70 text-sm">(123) 456-7890</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <Clock className="w-5 h-5 text-primary mt-1 shrink-0" />
                <div>
                  <p className="font-medium">Showroom Hours</p>
                  <p className="text-background/70 text-sm">Mon-Sat: 9AM-6PM | Sun: 11AM-5PM</p>
                </div>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button variant="default" size="lg">
                Schedule Consultation
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
          <div className="bg-background/5 backdrop-blur-sm rounded-lg p-8 border border-background/10">
            <h3 className="font-heading text-2xl mb-6">Get a Free Estimate</h3>
            <form className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <input
                  type="text"
                  placeholder="First Name"
                  className="w-full px-4 py-3 bg-background/10 border border-background/20 rounded-md text-background placeholder:text-background/50 focus:outline-none focus:border-primary transition-colors"
                />
                <input
                  type="text"
                  placeholder="Last Name"
                  className="w-full px-4 py-3 bg-background/10 border border-background/20 rounded-md text-background placeholder:text-background/50 focus:outline-none focus:border-primary transition-colors"
                />
              </div>
              <input
                type="email"
                placeholder="Email Address"
                className="w-full px-4 py-3 bg-background/10 border border-background/20 rounded-md text-background placeholder:text-background/50 focus:outline-none focus:border-primary transition-colors"
              />
              <input
                type="tel"
                placeholder="Phone Number"
                className="w-full px-4 py-3 bg-background/10 border border-background/20 rounded-md text-background placeholder:text-background/50 focus:outline-none focus:border-primary transition-colors"
              />
              <select
                className="w-full px-4 py-3 bg-background/10 border border-background/20 rounded-md text-background/70 focus:outline-none focus:border-primary transition-colors"
              >
                <option value="" className="text-foreground">Select Flooring Type</option>
                <option value="hardwood" className="text-foreground">Hardwood</option>
                <option value="vinyl" className="text-foreground">Luxury Vinyl</option>
                <option value="tile" className="text-foreground">Tile & Stone</option>
                <option value="other" className="text-foreground">Not Sure / Other</option>
              </select>
              <textarea
                placeholder="Tell us about your project..."
                rows={4}
                className="w-full px-4 py-3 bg-background/10 border border-background/20 rounded-md text-background placeholder:text-background/50 focus:outline-none focus:border-primary transition-colors resize-none"
              />
              <Button variant="default" size="lg" className="w-full">
                Request Free Estimate
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
