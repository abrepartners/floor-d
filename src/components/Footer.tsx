import { Link } from "react-router-dom";
import { Facebook, Instagram, Twitter, Phone, MapPin } from "lucide-react";

const footerLinks = {
  products: [
    { name: "Hardwood", href: "#flooring" },
    { name: "Luxury Vinyl", href: "#flooring" },
    { name: "Tile & Stone", href: "#flooring" },
    { name: "Laminate", href: "#flooring" },
    { name: "Carpet", href: "#flooring" },
  ],
  company: [
    { name: "About Us", href: "#about" },
    { name: "Blog", href: "#blog" },
    { name: "Contact", href: "#contact" },
  ],
  support: [
    { name: "FAQ", href: "#faq" },
    { name: "Warranty", href: "#" },
    { name: "Care Guide", href: "#" },
  ],
};

export function Footer() {
  return (
    <footer className="bg-foreground text-background/80">
      <div className="container mx-auto px-4 py-16 lg:py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10">
          {/* Brand */}
          <div className="lg:col-span-2">
            <Link to="/" className="flex items-center gap-3 mb-5">
              <img
                src="/logo.svg"
                alt="Floor'd Flooring + Finishes"
                className="h-10 w-auto brightness-0 invert"
              />
            </Link>
            <p className="text-background/50 text-sm max-w-xs mb-6 leading-relaxed">
              Your friendly neighborhood flooring store in Little Rock, AR. Every style, every budget, every customer treated right.
            </p>

            {/* Contact info */}
            <div className="space-y-3 mb-6">
              <div className="flex items-center gap-3">
                <Phone className="w-4 h-4 text-primary shrink-0" />
                <a href="tel:+15015551234" className="text-background/60 text-sm hover:text-primary transition-colors">
                  (501) 555-1234
                </a>
              </div>
              <div className="flex items-center gap-3">
                <MapPin className="w-4 h-4 text-primary shrink-0" />
                <span className="text-background/60 text-sm">
                  11915 I-30 Frontage Rd, Little Rock, AR 72209
                </span>
              </div>
            </div>

            <div className="flex gap-3">
              <a
                href="#"
                aria-label="Facebook"
                className="w-10 h-10 rounded-xl bg-background/10 flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-all duration-200"
              >
                <Facebook className="w-4 h-4" />
              </a>
              <a
                href="#"
                aria-label="Instagram"
                className="w-10 h-10 rounded-xl bg-background/10 flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-all duration-200"
              >
                <Instagram className="w-4 h-4" />
              </a>
              <a
                href="#"
                aria-label="Twitter"
                className="w-10 h-10 rounded-xl bg-background/10 flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-all duration-200"
              >
                <Twitter className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Products */}
          <div>
            <h4 className="font-heading text-lg text-background mb-5">Products</h4>
            <ul className="space-y-3">
              {footerLinks.products.map((link) => (
                <li key={link.name}>
                  <a href={link.href} className="text-background/50 text-sm hover:text-primary transition-colors">
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="font-heading text-lg text-background mb-5">Company</h4>
            <ul className="space-y-3">
              {footerLinks.company.map((link) => (
                <li key={link.name}>
                  <a href={link.href} className="text-background/50 text-sm hover:text-primary transition-colors">
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Support */}
          <div>
            <h4 className="font-heading text-lg text-background mb-5">Support</h4>
            <ul className="space-y-3">
              {footerLinks.support.map((link) => (
                <li key={link.name}>
                  <a href={link.href} className="text-background/50 text-sm hover:text-primary transition-colors">
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-background/10 mt-14 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-background/40 text-sm">
            &copy; {new Date().getFullYear()} Floor'd Flooring + Finishes. All rights reserved.
          </p>
          <div className="flex gap-6 text-sm">
            <a href="#" className="text-background/40 hover:text-primary transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="text-background/40 hover:text-primary transition-colors">
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
