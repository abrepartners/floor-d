import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import hardwoodImg from "@/assets/flooring-hardwood.jpg";
import vinylImg from "@/assets/flooring-vinyl.jpg";
import tileImg from "@/assets/flooring-tile.jpg";
import laminateImg from "@/assets/flooring-laminate.jpg";
import carpetImg from "@/assets/flooring-carpet.jpg";

const products = [
  {
    slug: "hardwood",
    title: "Hardwood",
    description:
      "There's nothing like real wood. Timeless warmth with character you can feel. Oak, maple, walnut — classic beauty that adds value to your home.",
    image: hardwoodImg,
    features: ["Solid & Engineered", "Custom Staining", "25+ Year Warranty"],
    badge: "Timeless",
  },
  {
    slug: "luxury-vinyl",
    title: "Luxury Vinyl (LVP)",
    description:
      "Waterproof. Scratch-proof. Kid-proof. Pet-proof. LVP looks like hardwood and handles everything life throws at it.",
    image: vinylImg,
    features: ["100% Waterproof", "Pet Friendly", "Easy Maintenance"],
    badge: "Most Popular",
  },
  {
    slug: "tile",
    title: "Tile & Stone",
    description:
      "Beautiful and basically indestructible. Porcelain, ceramic, natural stone — perfect for kitchens, bathrooms, and anywhere you want flooring that lasts forever.",
    image: tileImg,
    features: ["Heated Floor Ready", "Indoor & Outdoor", "Endless Styles"],
    badge: "Lasts Forever",
  },
  {
    slug: "laminate",
    title: "Laminate",
    description:
      "Great looks without breaking the bank. Modern laminate is tough, stylish, and way better than you remember. The smart choice for budget-conscious homeowners.",
    image: laminateImg,
    features: ["Budget Friendly", "Scratch Resistant", "Quick Install"],
    badge: "Best Value",
  },
  {
    slug: "carpet",
    title: "Carpet",
    description:
      "Soft, warm, and cozy. Perfect for bedrooms, playrooms, and anywhere you want to sink your toes in. More colors and textures than you can imagine.",
    image: carpetImg,
    features: ["Ultra Comfortable", "Sound Absorbing", "Stain Resistant Options"],
    badge: "Cozy Pick",
  },
];

export function Products() {
  return (
    <section id="flooring" className="py-24 lg:py-32 section-cream">
      <div className="container mx-auto px-4">
        <div className="text-center mb-20">
          <p className="text-primary font-medium text-sm tracking-widest uppercase mb-4">Our Products</p>
          <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl text-foreground mb-6">
            find your perfect floor
          </h2>
          <div className="gold-divider mx-auto mb-6" />
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Tap a category to explore. Not sure where to start? That's what we're here for.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product) => (
            <Link
              to={`/flooring/${product.slug}`}
              key={product.title}
              className="group block"
            >
              <article className="bg-white rounded-xl overflow-hidden card-hover border border-border/50 h-full flex flex-col">
                <div className="relative h-64 overflow-hidden">
                  <img
                    src={product.image}
                    alt={`${product.title} flooring samples available at Floor'd in Little Rock, AR`}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-foreground/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                  {/* Badge */}
                  <div className="absolute top-4 left-4">
                    <span className="inline-flex items-center px-3 py-1 rounded-full bg-white/90 backdrop-blur-sm text-xs font-semibold text-foreground tracking-wide shadow-sm">
                      {product.badge}
                    </span>
                  </div>
                </div>

                <div className="p-6 flex-1 flex flex-col">
                  <h3 className="font-heading text-2xl text-foreground mb-3 group-hover:text-primary transition-colors">
                    {product.title}
                  </h3>
                  <p className="text-muted-foreground text-sm mb-5 leading-relaxed flex-1">
                    {product.description}
                  </p>

                  <ul className="space-y-2 mb-6">
                    {product.features.map((feature) => (
                      <li key={feature} className="flex items-center gap-2.5 text-sm text-foreground">
                        <span className="w-1.5 h-1.5 bg-primary rounded-full shrink-0" />
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
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
