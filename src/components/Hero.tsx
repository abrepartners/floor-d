import { Button } from "@/components/ui/button";
import { Star, Users, Home, Award } from "lucide-react";
import heroImage from "@/assets/hero-living-room.jpg";

const trustItems = [
  { icon: Star, label: "5-Star Rated" },
  { icon: Users, label: "500+ Happy Homes" },
  { icon: Home, label: "Locally Owned" },
  { icon: Award, label: "Licensed & Insured" },
];

export function Hero() {
  return (
    <section className="relative min-h-screen flex flex-col">
      {/* Main Hero */}
      <div className="relative flex-1 flex items-center justify-center overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0">
          <img
            src={heroImage}
            alt="Beautiful living room with modern flooring in a Little Rock, Arkansas home"
            className="w-full h-full object-cover"
          />
          <div className="hero-overlay absolute inset-0" />
        </div>

        {/* Content */}
        <div className="relative z-10 container mx-auto px-4 text-center pt-20">
          <div className="max-w-4xl mx-auto">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 mb-8 animate-fade-in opacity-0">
              <span className="w-2 h-2 bg-primary rounded-full animate-pulse" />
              <span className="text-sm text-white/90 font-medium tracking-wide">Little Rock's Friendliest Flooring Store</span>
            </div>

            <h1 className="font-heading text-4xl md:text-5xl lg:text-7xl text-white mb-6 animate-fade-in-up opacity-0 text-balance leading-tight">
              your floors,{" "}
              <span className="italic text-primary">your way</span>
            </h1>

            <div className="gold-divider mx-auto mb-8 animate-fade-in opacity-0 delay-200" />

            <p className="text-lg md:text-xl text-white/85 mb-12 max-w-2xl mx-auto animate-fade-in-up opacity-0 delay-300 font-light leading-relaxed">
              Every style, every budget, zero judgment. Walk on real floors in our showroom and leave with a plan you'll love.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in-up opacity-0 delay-400">
              <Button variant="hero" size="xl" asChild>
                <a href="#contact">Get a Free Estimate</a>
              </Button>
              <Button variant="heroOutline" size="xl" asChild>
                <a href="#flooring">Browse Our Floors</a>
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Trust Bar */}
      <div className="relative z-10 trust-bar">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 divide-x divide-white/10">
            {trustItems.map((item) => (
              <div key={item.label} className="flex items-center justify-center gap-3 py-4 md:py-5">
                <item.icon className="w-5 h-5 text-primary shrink-0" />
                <span className="text-sm font-medium text-white/90 tracking-wide">{item.label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
