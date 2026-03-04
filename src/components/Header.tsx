import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Menu, X, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";

const navLinks = [
  { name: "Flooring", href: "#flooring" },
  { name: "About", href: "#about" },
  { name: "FAQ", href: "#faq" },
  { name: "Contact", href: "#contact" },
];

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-background/95 backdrop-blur-md border-b border-border shadow-soft"
          : "bg-transparent border-b border-transparent"
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-3 group">
            <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center shadow-sm group-hover:shadow-gold transition-shadow duration-300">
              <span className="text-primary-foreground font-heading text-xl font-bold">F</span>
            </div>
            <div className="flex flex-col">
              <span
                className={`font-heading text-2xl font-semibold tracking-tight transition-colors duration-300 ${
                  scrolled ? "text-foreground" : "text-white"
                }`}
              >
                Floor'd
              </span>
              <span
                className={`text-[10px] tracking-[0.2em] uppercase font-medium -mt-1 transition-colors duration-300 ${
                  scrolled ? "text-primary" : "text-white/80"
                }`}
              >
                Flooring + Finishes
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className={`text-sm font-medium transition-colors duration-200 tracking-wide uppercase hover:text-primary ${
                  scrolled ? "text-muted-foreground" : "text-white/85 hover:text-white"
                }`}
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* CTA area */}
          <div className="hidden lg:flex items-center gap-4">
            <a
              href="tel:+15015551234"
              className={`flex items-center gap-2 text-sm transition-colors ${
                scrolled
                  ? "text-muted-foreground hover:text-primary"
                  : "text-white/80 hover:text-white"
              }`}
            >
              <Phone className="w-4 h-4" />
              <span>(501) 555-1234</span>
            </a>
            <Button variant="default" size="default" asChild>
              <a href="#contact">Let's Talk Floors</a>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className={`lg:hidden p-2 transition-colors ${scrolled ? "text-foreground" : "text-white"}`}
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="lg:hidden py-4 border-t border-border bg-background rounded-b-xl animate-fade-in">
            <nav className="flex flex-col gap-1">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="text-base font-medium text-foreground hover:text-primary hover:bg-secondary/50 transition-colors py-3 px-4 rounded-lg"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {link.name}
                </a>
              ))}
              <div className="pt-4 mt-2 border-t border-border flex flex-col gap-3 px-4">
                <a
                  href="tel:+15015551234"
                  className="flex items-center gap-2 text-base text-foreground hover:text-primary transition-colors py-2"
                >
                  <Phone className="w-5 h-5" />
                  <span>(501) 555-1234</span>
                </a>
                <Button variant="default" size="lg" className="w-full" asChild>
                  <a href="#contact">Let's Talk Floors</a>
                </Button>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}
