import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-living-room.jpg";

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src={heroImage}
          alt="Luxury living room with premium hardwood flooring"
          className="w-full h-full object-cover"
        />
        <div className="hero-overlay absolute inset-0" />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 text-center">
        <div className="max-w-4xl mx-auto">
          <h1 className="font-heading text-4xl md:text-5xl lg:text-7xl text-background mb-6 animate-fade-in-up opacity-0 text-balance">
            premium flooring & finishes
          </h1>
          
          <div className="w-24 h-0.5 bg-gold mx-auto mb-6 animate-fade-in opacity-0 delay-200" />
          
          <p className="text-lg md:text-xl text-background/90 mb-10 max-w-2xl mx-auto animate-fade-in-up opacity-0 delay-300 font-light">
            Your destination for expert design help and professional installation. 
            Transform your space with quality that lasts.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in-up opacity-0 delay-400">
            <Button variant="hero" size="xl">
              Get a Free Estimate
            </Button>
            <Button variant="heroOutline" size="xl">
              Explore Products
            </Button>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-background/50 rounded-full flex justify-center pt-2">
          <div className="w-1.5 h-3 bg-background/70 rounded-full" />
        </div>
      </div>
    </section>
  );
}
