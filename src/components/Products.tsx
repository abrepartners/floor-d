import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import hardwoodImg from "@/assets/flooring-hardwood.jpg";
import vinylImg from "@/assets/flooring-vinyl.jpg";
import tileImg from "@/assets/flooring-tile.jpg";

const products = [
  {
    title: "Hardwood",
    description: "Timeless elegance with natural warmth. Oak, maple, walnut, and exotic species available.",
    image: hardwoodImg,
    features: ["Solid & Engineered", "Custom Staining", "25+ Year Warranty"],
  },
  {
    title: "Luxury Vinyl",
    description: "Waterproof durability meets stunning design. Perfect for any room in your home.",
    image: vinylImg,
    features: ["100% Waterproof", "Pet Friendly", "Easy Maintenance"],
  },
  {
    title: "Tile & Stone",
    description: "Natural beauty and lasting performance. Porcelain, ceramic, and natural stone options.",
    image: tileImg,
    features: ["Heated Floor Compatible", "Indoor & Outdoor", "Endless Designs"],
  },
];

export function Products() {
  return (
    <section id="flooring" className="py-20 lg:py-28 bg-secondary/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl text-foreground mb-4">
            our flooring collection
          </h2>
          <div className="w-16 h-0.5 bg-primary mx-auto mb-6" />
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Discover premium flooring options to match every style and budget.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {products.map((product, index) => (
            <article
              key={product.title}
              className="group bg-card rounded-lg overflow-hidden border border-border card-hover"
            >
              <div className="relative h-64 overflow-hidden">
                <img
                  src={product.image}
                  alt={`${product.title} flooring`}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-foreground/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
              
              <div className="p-6">
                <h3 className="font-heading text-2xl text-foreground mb-3">
                  {product.title}
                </h3>
                <p className="text-muted-foreground text-sm mb-4 leading-relaxed">
                  {product.description}
                </p>
                
                <ul className="space-y-2 mb-6">
                  {product.features.map((feature) => (
                    <li key={feature} className="flex items-center gap-2 text-sm text-foreground">
                      <span className="w-1.5 h-1.5 bg-primary rounded-full" />
                      {feature}
                    </li>
                  ))}
                </ul>

                <Button variant="outline" className="w-full group/btn">
                  Explore {product.title}
                  <ArrowRight className="w-4 h-4 transition-transform group-hover/btn:translate-x-1" />
                </Button>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
