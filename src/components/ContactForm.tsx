import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Phone, MapPin, Clock } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

interface ContactFormProps {
  heading?: string;
  subheading?: string;
  compact?: boolean;
  dark?: boolean;
  defaultFlooringType?: string;
}

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
  const timestamp = new Date().toLocaleString("en-US", {
    dateStyle: "full",
    timeStyle: "short",
  });
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

export function ContactForm({
  heading = "Get a Free Estimate",
  subheading = "Tell us about your project and we'll get back to you quick.",
  compact = false,
  dark = false,
  defaultFlooringType = "",
}: ContactFormProps) {
  const { toast } = useToast();
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [flooringType, setFlooringType] = useState(defaultFlooringType);
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

  const inputClass = (isDark: boolean) =>
    `w-full px-4 py-3.5 rounded-xl transition-all focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary/30 ${
      isDark
        ? "bg-background/10 border border-background/20 text-background placeholder:text-background/40"
        : "bg-secondary/30 border border-border text-foreground placeholder:text-muted-foreground/60"
    }`;

  const formBlock = (
    <div
      className={`rounded-xl p-8 lg:p-10 border ${
        dark
          ? "bg-background/5 backdrop-blur-sm border-background/10"
          : "bg-white border-border shadow-soft"
      }`}
    >
      <h3 className={`font-heading text-2xl mb-2 ${dark ? "text-background" : "text-foreground"}`}>
        {heading}
      </h3>
      <p className={`text-sm mb-8 ${dark ? "text-background/60" : "text-muted-foreground"}`}>
        {subheading}
      </p>
      <form className="space-y-4" onSubmit={handleSubmit}>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <input type="text" placeholder="First Name *" value={firstName} onChange={(e) => setFirstName(e.target.value)} className={inputClass(dark)} />
          <input type="text" placeholder="Last Name *" value={lastName} onChange={(e) => setLastName(e.target.value)} className={inputClass(dark)} />
        </div>
        <input type="email" placeholder="Email Address *" value={email} onChange={(e) => setEmail(e.target.value)} className={inputClass(dark)} />
        <input type="tel" placeholder="Phone Number *" value={phone} onChange={(e) => setPhone(e.target.value)} className={inputClass(dark)} />
        <select
          value={flooringType}
          onChange={(e) => setFlooringType(e.target.value)}
          className={`w-full px-4 py-3.5 rounded-xl transition-all focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary/30 ${
            dark
              ? "bg-background/10 border border-background/20 text-background/70"
              : "bg-secondary/30 border border-border text-muted-foreground"
          }`}
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
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          className={`w-full px-4 py-3.5 rounded-xl resize-none transition-all focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary/30 ${
            dark
              ? "bg-background/10 border border-background/20 text-background placeholder:text-background/40"
              : "bg-secondary/30 border border-border text-foreground placeholder:text-muted-foreground/60"
          }`}
        />
        <Button variant="default" size="lg" className="w-full">
          Send It Over
        </Button>
      </form>
    </div>
  );

  if (compact) {
    return (
      <section className={`py-16 lg:py-20 ${dark ? "" : "section-cream"}`}>
        <div className="container mx-auto px-4">
          <div className="max-w-xl mx-auto">{formBlock}</div>
        </div>
      </section>
    );
  }

  return (
    <section id="contact-form" className={`py-16 lg:py-20 ${dark ? "" : "section-cream"}`}>
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          <div>
            <p className="text-primary font-medium text-sm tracking-widest uppercase mb-4">Get In Touch</p>
            <h2 className="font-heading text-3xl md:text-4xl text-foreground mb-4">let's find your floor</h2>
            <div className="gold-divider mb-6" />
            <p className="text-muted-foreground text-lg mb-8 leading-relaxed max-w-lg">
              Stop by our showroom — no appointment needed. Walk on real floors, get honest advice, and leave with a plan (and maybe a free estimate).
            </p>
            <div className="space-y-5">
              <div className="flex items-start gap-4 group">
                <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center shrink-0 group-hover:bg-primary/20 transition-colors">
                  <MapPin className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <p className="font-heading text-lg text-foreground">Visit Our Showroom</p>
                  <p className="text-muted-foreground text-sm">11915 I-30 Frontage Rd, Suite D, Little Rock, AR 72209</p>
                </div>
              </div>
              <div className="flex items-start gap-4 group">
                <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center shrink-0 group-hover:bg-primary/20 transition-colors">
                  <Phone className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <p className="font-heading text-lg text-foreground">Give Us a Call</p>
                  <a href="tel:+15012993871" className="text-muted-foreground text-sm hover:text-primary transition-colors">(501) 299-3871</a>
                </div>
              </div>
              <div className="flex items-start gap-4 group">
                <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center shrink-0 group-hover:bg-primary/20 transition-colors">
                  <Clock className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <p className="font-heading text-lg text-foreground">Showroom Hours</p>
                  <p className="text-muted-foreground text-sm">Mon–Sat: 8AM–8PM &nbsp;|&nbsp; Sun: Closed</p>
                </div>
              </div>
            </div>
          </div>
          {formBlock}
        </div>
      </div>
    </section>
  );
}
