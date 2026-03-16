import { useState } from "react";
import { Button } from "@/components/ui/button";
import { MapPin, Phone, Clock, ArrowRight } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const FLOORING_LABELS: Record<string, string> = {
  hardwood: "Hardwood",
  vinyl: "Luxury Vinyl (LVP)",
  tile: "Tile & Stone",
  laminate: "Laminate",
  carpet: "Carpet",
  other: "Not Sure / Other",
};

function buildMailto(data: {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  flooringType: string;
  message: string;
}) {
  const flooringLabel = FLOORING_LABELS[data.flooringType] || data.flooringType || "Not specified";
  const subject = `New Floor'd Lead: ${flooringLabel} — ${data.firstName} ${data.lastName}`;
  const timestamp = new Date().toLocaleString("en-US", { dateStyle: "full", timeStyle: "short" });
  const body = `
═══════════════════════════════════
  NEW LEAD FROM FLOOR'D WEBSITE
═══════════════════════════════════

CONTACT INFORMATION
───────────────────
Name:           ${data.firstName} ${data.lastName}
Email:          ${data.email}
Phone:          ${data.phone}

PROJECT DETAILS
───────────────
Flooring Type:  ${flooringLabel}

Project Description:
${data.message || "No details provided."}

───────────────
Submitted:      ${timestamp}
Source:         floord.lovable.app
═══════════════════════════════════
`.trim();

  return `mailto:miket@floordarkansas.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
}

export function CTA() {
  const { toast } = useToast();
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [flooringType, setFlooringType] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!firstName || !lastName || !email || !phone) {
      toast({ title: "Please fill in all required fields.", variant: "destructive" });
      return;
    }
    const url = buildMailto({ firstName, lastName, email, phone, flooringType, message });
    window.location.href = url;
    toast({ title: "Opening your email client…", description: "Send the pre-filled email to complete your request." });
  };

  return (
    <section id="contact" className="py-24 lg:py-32 bg-foreground text-background relative overflow-hidden">
      <div className="absolute top-0 left-0 w-96 h-96 bg-primary/5 rounded-full -translate-x-1/2 -translate-y-1/2" />
      <div className="absolute bottom-0 right-0 w-72 h-72 bg-primary/5 rounded-full translate-x-1/3 translate-y-1/3" />

      <div className="container mx-auto px-4 relative">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left Content */}
          <div>
            <p className="text-primary font-medium text-sm tracking-widest uppercase mb-4">Get Started</p>
            <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl mb-6">let's find your floor</h2>
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
                  <p className="text-background/60 text-sm">11915 I-30 Frontage Rd, Suite D, Little Rock, AR 72209</p>
                </div>
              </div>
              <div className="flex items-start gap-4 group">
                <div className="w-10 h-10 rounded-xl bg-background/10 flex items-center justify-center shrink-0 group-hover:bg-primary/20 transition-colors">
                  <Phone className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <p className="font-heading text-lg">Give Us a Call</p>
                  <a href="tel:+15012993871" className="text-background/60 text-sm hover:text-primary transition-colors">(501) 299-3871</a>
                </div>
              </div>
              <div className="flex items-start gap-4 group">
                <div className="w-10 h-10 rounded-xl bg-background/10 flex items-center justify-center shrink-0 group-hover:bg-primary/20 transition-colors">
                  <Clock className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <p className="font-heading text-lg">Showroom Hours</p>
                  <p className="text-background/60 text-sm">Mon–Sat: 8AM–8PM &nbsp;|&nbsp; Sun: Closed</p>
                </div>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button variant="default" size="lg" className="group/btn" onClick={() => document.getElementById('cta-form')?.scrollIntoView({ behavior: 'smooth' })}>
                Get a Free Estimate
                <ArrowRight className="w-4 h-4 transition-transform group-hover/btn:translate-x-1" />
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="border-background/30 text-background hover:bg-background hover:text-foreground"
                asChild
              >
                <a href="https://maps.google.com/?q=11915+I-30+Frontage+Rd+Suite+D+Little+Rock+AR+72209" target="_blank" rel="noopener noreferrer">
                  Get Directions
                </a>
              </Button>
            </div>
          </div>

          {/* Right Content - Form */}
          <div id="cta-form" className="bg-background/5 backdrop-blur-sm rounded-xl p-8 lg:p-10 border border-background/10">
            <h3 className="font-heading text-2xl mb-2">Get a Free Estimate</h3>
            <p className="text-background/60 text-sm mb-8">Tell us about your project and we'll get back to you quick.</p>
            <form className="space-y-4" onSubmit={handleSubmit}>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <input type="text" placeholder="First Name *" value={firstName} onChange={(e) => setFirstName(e.target.value)} className="w-full px-4 py-3.5 bg-background/10 border border-background/20 rounded-xl text-background placeholder:text-background/40 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary/30 transition-all" />
                <input type="text" placeholder="Last Name *" value={lastName} onChange={(e) => setLastName(e.target.value)} className="w-full px-4 py-3.5 bg-background/10 border border-background/20 rounded-xl text-background placeholder:text-background/40 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary/30 transition-all" />
              </div>
              <input type="email" placeholder="Email Address *" value={email} onChange={(e) => setEmail(e.target.value)} className="w-full px-4 py-3.5 bg-background/10 border border-background/20 rounded-xl text-background placeholder:text-background/40 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary/30 transition-all" />
              <input type="tel" placeholder="Phone Number *" value={phone} onChange={(e) => setPhone(e.target.value)} className="w-full px-4 py-3.5 bg-background/10 border border-background/20 rounded-xl text-background placeholder:text-background/40 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary/30 transition-all" />
              <select value={flooringType} onChange={(e) => setFlooringType(e.target.value)} className="w-full px-4 py-3.5 bg-background/10 border border-background/20 rounded-xl text-background/70 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary/30 transition-all">
                <option value="" className="text-foreground">Select Flooring Type</option>
                <option value="hardwood" className="text-foreground">Hardwood</option>
                <option value="vinyl" className="text-foreground">Luxury Vinyl (LVP)</option>
                <option value="tile" className="text-foreground">Tile &amp; Stone</option>
                <option value="laminate" className="text-foreground">Laminate</option>
                <option value="carpet" className="text-foreground">Carpet</option>
                <option value="other" className="text-foreground">Not Sure / Other</option>
              </select>
              <textarea placeholder="Tell us about your project..." rows={4} value={message} onChange={(e) => setMessage(e.target.value)} className="w-full px-4 py-3.5 bg-background/10 border border-background/20 rounded-xl text-background placeholder:text-background/40 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary/30 transition-all resize-none" />
              <Button variant="default" size="lg" className="w-full">Send It Over</Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
