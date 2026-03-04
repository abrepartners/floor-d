export interface FlooringCategory {
  slug: string;
  title: string;
  tagline: string;
  badge: string;
  description: string;
  priceRange: string;
  image: string;
  features: string[];
  benefits: {
    title: string;
    description: string;
  }[];
  bestFor: string[];
  faqs: {
    question: string;
    answer: string;
  }[];
  seoTitle: string;
  seoDescription: string;
}

export const flooringCategories: FlooringCategory[] = [
  {
    slug: "hardwood",
    title: "Hardwood Flooring",
    tagline: "Timeless warmth with character you can feel",
    badge: "Timeless",
    description:
      "There's nothing quite like real hardwood. Whether you're drawn to the classic warmth of oak, the rich depth of walnut, or the clean look of maple, hardwood flooring adds beauty and value that lasts generations. At Floor'd, we carry both solid and engineered hardwood options so you can get the look and performance that fits your home — and your budget.",
    priceRange: "$5–$11/sq ft installed",
    image: "hardwood",
    features: [
      "Solid & Engineered Options",
      "Custom Staining Available",
      "25+ Year Warranty",
      "Professional Installation",
      "Sanding & Refinishing Services",
    ],
    benefits: [
      {
        title: "Adds Home Value",
        description:
          "Real hardwood floors are one of the top features homebuyers look for. They can increase your home's resale value by up to 2.5%.",
      },
      {
        title: "Lasts a Lifetime",
        description:
          "Solid hardwood can be sanded and refinished multiple times. Your floors can literally outlast you — in the best way possible.",
      },
      {
        title: "Timeless Style",
        description:
          "Trends come and go, but hardwood never goes out of style. It works with farmhouse, modern, traditional — you name it.",
      },
      {
        title: "Better Air Quality",
        description:
          "Unlike carpet, hardwood doesn't trap allergens, dust, or pet dander. Great for families with allergies.",
      },
    ],
    bestFor: [
      "Living rooms & great rooms",
      "Dining areas",
      "Bedrooms",
      "Hallways & entryways",
      "Home offices",
    ],
    faqs: [
      {
        question: "What's the difference between solid and engineered hardwood?",
        answer:
          "Solid hardwood is a single piece of wood throughout — it can be sanded and refinished many times. Engineered hardwood has a real hardwood top layer over plywood, making it more stable in humid climates like Arkansas. Both look identical once installed.",
      },
      {
        question: "Is hardwood good for homes with pets?",
        answer:
          "Yes, but choose wisely. Harder species like hickory and oak handle pet traffic well. We also offer scratch-resistant finishes. We'll help you pick the right option for your furry family members.",
      },
      {
        question: "How long does hardwood flooring last?",
        answer:
          "With proper care, hardwood floors can last 50–100+ years. Solid hardwood can be refinished 6–10 times over its lifetime, and engineered hardwood 1–3 times depending on the wear layer thickness.",
      },
    ],
    seoTitle: "Hardwood Flooring in Little Rock, AR | Floor'd Flooring + Finishes",
    seoDescription:
      "Shop hardwood floors at Floor'd in Little Rock. Solid & engineered hardwood, custom staining, professional installation. Free estimates. Mon-Sat 8AM-8PM.",
  },
  {
    slug: "luxury-vinyl",
    title: "Luxury Vinyl Plank (LVP)",
    tagline: "Waterproof. Scratch-proof. Life-proof.",
    badge: "Most Popular",
    description:
      "LVP is the hottest thing in flooring right now — and for good reason. It gives you the gorgeous look of hardwood or stone but handles water, scratches, kids, and pets like a champ. At Floor'd, our LVP collection starts at just $2/sq ft and goes up to premium rigid-core options that'll fool even the flooring snobs.",
    priceRange: "$2–$7/sq ft installed",
    image: "vinyl",
    features: [
      "100% Waterproof",
      "Pet & Kid Friendly",
      "Easy Maintenance",
      "Click-Lock Installation",
      "Realistic Wood & Stone Looks",
    ],
    benefits: [
      {
        title: "Totally Waterproof",
        description:
          "Spills, splashes, even standing water — LVP handles it all. Install it in kitchens, bathrooms, laundry rooms, and basements without worrying.",
      },
      {
        title: "Scratch & Dent Resistant",
        description:
          "Got dogs? Got kids? Got both? LVP's wear layer shrugs off scratches, scuffs, and dents that would destroy real hardwood.",
      },
      {
        title: "Budget Friendly",
        description:
          "Get the high-end look of hardwood or stone at a fraction of the price. Our LVP options start at just $2/sq ft.",
      },
      {
        title: "Comfortable Underfoot",
        description:
          "Modern LVP has built-in padding and gives a warmer, softer feel than tile or stone. Your feet will thank you.",
      },
    ],
    bestFor: [
      "Kitchens & bathrooms",
      "Basements & laundry rooms",
      "High-traffic areas",
      "Homes with pets & kids",
      "Rental properties",
    ],
    faqs: [
      {
        question: "What's the difference between LVP and regular vinyl?",
        answer:
          "LVP (Luxury Vinyl Plank) is thicker, more rigid, and has a realistic texture that mimics real wood. Old-school sheet vinyl is thin and looks like… vinyl. LVP looks and feels premium — most people can't tell it from real hardwood.",
      },
      {
        question: "Can I put LVP in my bathroom?",
        answer:
          "Absolutely. LVP is 100% waterproof, making it perfect for bathrooms, kitchens, laundry rooms, and basements. It's one of the best bathroom flooring options available.",
      },
      {
        question: "How long does luxury vinyl plank last?",
        answer:
          "Quality LVP lasts 15–25 years with normal use. Premium rigid-core options can last even longer. The wear layer thickness is the biggest factor — we'll help you pick the right level for your traffic.",
      },
    ],
    seoTitle: "Luxury Vinyl Plank (LVP) Flooring in Little Rock, AR | Floor'd",
    seoDescription:
      "Waterproof luxury vinyl plank flooring starting at $2/sq ft at Floor'd in Little Rock, AR. Pet-friendly, scratch-resistant, professional installation. Free estimates.",
  },
  {
    slug: "tile",
    title: "Tile & Stone",
    tagline: "Beautiful and basically indestructible",
    badge: "Lasts Forever",
    description:
      "When you want flooring that can handle anything and still look stunning decades later, tile and stone are it. From sleek porcelain to natural marble, we've got a selection that'll make your Pinterest board jealous. Plus, tile is perfect for Arkansas's warm, humid summers — it stays cool and handles moisture like nothing else.",
    priceRange: "$4–$10/sq ft installed",
    image: "tile",
    features: [
      "Porcelain, Ceramic & Natural Stone",
      "Heated Floor Compatible",
      "Indoor & Outdoor Options",
      "Endless Styles & Patterns",
      "Water & Stain Resistant",
    ],
    benefits: [
      {
        title: "Incredibly Durable",
        description:
          "Tile and stone are the toughest flooring options available. They resist scratches, stains, water, and heavy traffic. Many tile floors last 50+ years.",
      },
      {
        title: "Stays Cool",
        description:
          "In Arkansas summers, tile floors keep your home feeling cool and comfortable. Pair with radiant heating for year-round comfort.",
      },
      {
        title: "Design Flexibility",
        description:
          "From subway tile to large-format porcelain to natural travertine — the style options are literally endless. Create anything from farmhouse to ultra-modern.",
      },
      {
        title: "Low Maintenance",
        description:
          "Sweep and mop — that's about it. Tile doesn't need refinishing, special cleaners, or gentle treatment. It just keeps looking great.",
      },
    ],
    bestFor: [
      "Kitchens & backsplashes",
      "Bathrooms & showers",
      "Entryways & mudrooms",
      "Outdoor patios & porches",
      "Laundry rooms",
    ],
    faqs: [
      {
        question: "What's the difference between porcelain and ceramic tile?",
        answer:
          "Porcelain is denser and more water-resistant — it's fired at higher temperatures. Ceramic is slightly softer and a bit more budget-friendly. Both are great choices; we'll help you pick the right one for your space.",
      },
      {
        question: "Can I install heated floors under tile?",
        answer:
          "Yes! Tile is actually the best conductor for radiant floor heating. It's a popular upgrade for bathrooms and kitchens. We can set up the whole system for you.",
      },
      {
        question: "Is natural stone more expensive than porcelain?",
        answer:
          "Generally yes. Natural stone (marble, travertine, slate) costs more and requires more maintenance, but it has a unique beauty you can't fully replicate. Porcelain now comes in stone-look options that are incredibly realistic and more affordable.",
      },
    ],
    seoTitle: "Tile & Stone Flooring in Little Rock, AR | Floor'd Flooring + Finishes",
    seoDescription:
      "Shop tile and stone flooring at Floor'd in Little Rock. Porcelain, ceramic, natural stone. Heated floor ready. Professional installation. Free estimates.",
  },
  {
    slug: "laminate",
    title: "Laminate Flooring",
    tagline: "Great looks without breaking the bank",
    badge: "Best Value",
    description:
      "Today's laminate is not your grandma's laminate. Modern laminate flooring is tough, stylish, and incredibly realistic. It's the smart choice when you want beautiful floors on a budget — and it installs fast, which means less disruption to your life. Floor'd carries top brands with scratch-resistant, water-resistant options that look way more expensive than they are.",
    priceRange: "$2–$5/sq ft installed",
    image: "laminate",
    features: [
      "Budget Friendly Starting at $2/sq ft",
      "Scratch & Fade Resistant",
      "Quick Click-Lock Install",
      "Realistic Wood Looks",
      "Easy to Clean & Maintain",
    ],
    benefits: [
      {
        title: "Affordable Beauty",
        description:
          "Get the look of hardwood or stone at a fraction of the cost. Laminate is the most budget-friendly option that still looks great.",
      },
      {
        title: "Fast Installation",
        description:
          "Click-lock laminate installs quickly — often in just a day or two. Less time waiting, more time enjoying your new floors.",
      },
      {
        title: "Tough & Durable",
        description:
          "Modern laminate resists scratches, fading, and stains. It's rated for heavy residential traffic and holds up beautifully.",
      },
      {
        title: "DIY Friendly",
        description:
          "Laminate's floating click-lock system is one of the easiest to install. Want pro installation? We do that too.",
      },
    ],
    bestFor: [
      "Living rooms & bedrooms",
      "Home offices",
      "Rental properties",
      "Budget-conscious projects",
      "Quick remodels",
    ],
    faqs: [
      {
        question: "Is laminate waterproof?",
        answer:
          "Traditional laminate is water-resistant, not waterproof — prolonged moisture can cause damage. However, newer water-resistant laminate options handle spills well. For wet areas like bathrooms, we'd recommend LVP instead.",
      },
      {
        question: "How long does laminate flooring last?",
        answer:
          "Quality laminate lasts 15–25 years with normal residential use. It can't be refinished like hardwood, but it's easy and affordable to replace when you're ready for a change.",
      },
      {
        question: "Can you tell it's laminate and not real hardwood?",
        answer:
          "Modern laminate has come a long way. High-quality options with embossed textures are remarkably realistic. Most guests won't be able to tell the difference — seriously.",
      },
    ],
    seoTitle: "Laminate Flooring in Little Rock, AR | Floor'd Flooring + Finishes",
    seoDescription:
      "Affordable laminate flooring starting at $2/sq ft at Floor'd in Little Rock, AR. Scratch-resistant, realistic wood looks, fast installation. Free estimates.",
  },
  {
    slug: "carpet",
    title: "Carpet",
    tagline: "Soft, warm, and cozy — the way floors should feel",
    badge: "Cozy Pick",
    description:
      "Sometimes you just want to sink your toes into something soft. Carpet brings warmth, comfort, and coziness that hard surfaces can't match. At Floor'd, we carry everything from budget-friendly polyester to premium wool and nylon options — in more colors and textures than you can imagine. Perfect for bedrooms, playrooms, and anywhere comfort matters.",
    priceRange: "$2–$8/sq ft installed",
    image: "carpet",
    features: [
      "Ultra Soft & Comfortable",
      "Sound Absorbing",
      "Stain-Resistant Options",
      "Hypoallergenic Varieties",
      "Wide Color & Texture Selection",
    ],
    benefits: [
      {
        title: "Maximum Comfort",
        description:
          "Nothing beats the feeling of soft carpet under your feet. It adds warmth and cushion that makes bedrooms and family rooms feel extra cozy.",
      },
      {
        title: "Noise Reduction",
        description:
          "Carpet absorbs sound better than any other flooring type. Great for upstairs rooms, playrooms, and multi-story homes.",
      },
      {
        title: "Safety & Warmth",
        description:
          "Carpet provides a non-slip surface and insulation. It's the safest choice for kids' rooms and adds warmth in cooler months.",
      },
      {
        title: "Budget Options Available",
        description:
          "Quality carpet starts at just $2/sq ft installed. It's one of the most affordable ways to refresh a room.",
      },
    ],
    bestFor: [
      "Bedrooms",
      "Playrooms & nurseries",
      "Basements",
      "Home theaters",
      "Stairs & hallways",
    ],
    faqs: [
      {
        question: "What carpet fiber is best for homes with pets?",
        answer:
          "Nylon is the most durable and stain-resistant fiber — it's our top pick for pet owners. We also carry SmartStrand and other pet-specific options with built-in stain protection.",
      },
      {
        question: "How often should carpet be replaced?",
        answer:
          "Most carpet lasts 10–15 years depending on quality and traffic. Higher-end nylon carpet in lower-traffic rooms can last 20+ years. We'll help you pick the right quality level for each room.",
      },
      {
        question: "Is carpet bad for allergies?",
        answer:
          "It depends. Carpet can trap allergens, but that's actually a pro — it keeps them out of the air you breathe. Regular vacuuming with a HEPA filter keeps allergies in check. We also carry hypoallergenic options.",
      },
    ],
    seoTitle: "Carpet Flooring in Little Rock, AR | Floor'd Flooring + Finishes",
    seoDescription:
      "Shop carpet at Floor'd in Little Rock. Soft, stain-resistant, budget-friendly. Nylon, polyester, wool options. Professional installation. Free estimates. Mon-Sat 8AM-8PM.",
  },
];

export function getFlooringCategory(slug: string): FlooringCategory | undefined {
  return flooringCategories.find((c) => c.slug === slug);
}
