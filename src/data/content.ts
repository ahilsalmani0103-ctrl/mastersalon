export type RitualCategory = "hair" | "skin" | "grooming" | "bridal";

export interface Ritual {
  id: string;
  category: RitualCategory;
  badge: string;
  image: string;
  title: string;
  duration: string;
  description: string;
  price: string;
  cta: string;
}

export const rituals: Ritual[] = [
  {
    id: "french-glossing",
    category: "hair",
    badge: "Signature",
    image:
      "https://images.unsplash.com/photo-1629397685944-7073f5589754?auto=format&fit=crop&w=900&q=80",
    title: "French Glossing & Balayage",
    duration: "120m",
    description:
      "Bespoke freehand lightening followed by nourishing chromatic gloss for multidimensional shine and zero root line.",
    price: "From ₹4,500",
    cta: "Book Now",
  },
  {
    id: "hair-botox",
    category: "hair",
    badge: "Restorative",
    image:
      "https://images.unsplash.com/photo-1717160675489-7779f2c91999?auto=format&fit=crop&w=900&q=80",
    title: "Cysteine & Hair Botox Therapy",
    duration: "90m",
    description:
      "Formaldehyde-free intensive nano-infusion that fills hair cortex fissures, banishing humidity frizz for up to 4 months.",
    price: "From ₹5,800",
    cta: "Book Now",
  },
  {
    id: "hydrafacial",
    category: "skin",
    badge: "Dermal Tech",
    image:
      "https://images.unsplash.com/photo-1643684391140-c5056cfd3436?auto=format&fit=crop&w=900&q=80",
    title: "Hydra-Facial Infusion 360°",
    duration: "60m",
    description:
      "Vortex suction extraction followed by deep hyaluronic peptide saturation and custom LED phototherapy for instant glow.",
    price: "From ₹3,900",
    cta: "Book Now",
  },
  {
    id: "gold-facial",
    category: "skin",
    badge: "Luminance",
    image:
      "https://images.unsplash.com/photo-1616394584738-fc6e612e71b9?auto=format&fit=crop&w=900&q=80",
    title: "24K Gold Luminance Facial",
    duration: "75m",
    description:
      "Pure elemental gold micro-foils combined with botanical collagen boosters to reduce cellular fatigue and plump fine lines.",
    price: "From ₹4,200",
    cta: "Book Now",
  },
  {
    id: "beard-cut",
    category: "grooming",
    badge: "Executive",
    image:
      "https://images.unsplash.com/photo-1599011176306-4a96f1516d4d?auto=format&fit=crop&w=900&q=80",
    title: "Men's Signature Beard & Cut",
    duration: "45m",
    description:
      "Scissor architecture, steam towel infusion, organic eucalyptus oil beard softening, and invigorating head massage.",
    price: "From ₹1,200",
    cta: "Book Now",
  },
  {
    id: "scalp-detox",
    category: "grooming",
    badge: "Wellness",
    image:
      "https://images.unsplash.com/photo-1757066033634-bbbf874ce525?auto=format&fit=crop&w=900&q=80",
    title: "Scalp Charcoal Detox Therapy",
    duration: "50m",
    description:
      "Exfoliating bamboo charcoal scrub to clear pollution buildup, stimulate microcirculation, and promote thicker hair growth.",
    price: "From ₹1,650",
    cta: "Book Now",
  },
  {
    id: "bridal-glow",
    category: "bridal",
    badge: "Couture",
    image:
      "https://images.unsplash.com/photo-1610173827043-9db50e0d8ef9?auto=format&fit=crop&w=900&q=80",
    title: "Royal Bridal Glow Suite",
    duration: "180m",
    description:
      "High-definition airbrush makeup, bespoke bridal updo artistry, pure silk saree draping, and customized pearl body glow.",
    price: "From ₹14,500",
    cta: "Inquire Suite",
  },
  {
    id: "fusio-dose",
    category: "hair",
    badge: "Kérastase",
    image:
      "https://images.unsplash.com/photo-1779492907379-0894f8807533?auto=format&fit=crop&w=900&q=80",
    title: "Kérastase Fusio-Dose Ritual",
    duration: "35m",
    description:
      "Custom concentrated booster mixed fresh before your eyes to resolve dullness, breakage, or color fade.",
    price: "From ₹1,800",
    cta: "Book Now",
  },
];

export const ritualFilters: { id: "all" | RitualCategory; label: string }[] = [
  { id: "all", label: "All Rituals" },
  { id: "hair", label: "Hair Couture" },
  { id: "skin", label: "Dermal Therapies" },
  { id: "grooming", label: "Men's Executive" },
  { id: "bridal", label: "Bridal Suite" },
];

export interface Stylist {
  id: string;
  name: string;
  credential: string;
  role: string;
  rating: string;
  bio: string;
  tags: string[];
  image: string;
}

export const stylists: Stylist[] = [
  {
    id: "arjun",
    name: "Arjun Verma",
    credential: "Vidal Sassoon London Trained",
    role: "Creative Art Director • 12+ Years Experience",
    rating: "4.98",
    bio: "Specializes in precision geometric dry cutting, European balayage transitions, and corrective color sculpting.",
    tags: ["Balayage", "Precision Cuts"],
    image:
      "https://images.unsplash.com/photo-1717700921740-a1440f3b89a4?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: "meera",
    name: "Meera Rao",
    credential: "CIDESCO Certified Aesthetician",
    role: "Senior Dermal Specialist • 9+ Years Experience",
    rating: "5.0",
    bio: "Expert in holistic barrier repair, non-invasive collagen induction, and bride radiance regimes with clinical botanicals.",
    tags: ["HydraFacials", "Anti-Pigment"],
    image:
      "https://images.unsplash.com/photo-1594824476967-48c8b964273f?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: "zoya",
    name: "Zoya Khan",
    credential: "Celebrity Bridal Stylist",
    role: "Head of Bridal Couture • 8+ Years Experience",
    rating: "4.95",
    bio: "Master of flawless HD airbrush textures, contemporary floral hair braiding, and soft glam trousseau palettes.",
    tags: ["HD Bridal", "Airbrush"],
    image:
      "https://images.unsplash.com/photo-1653130029149-9109b115ab9a?auto=format&fit=crop&w=800&q=80",
  },
];

export interface Testimonial {
  id: string;
  rating: number;
  quote: string;
  initials: string;
  name: string;
  location: string;
}

export const testimonials: Testimonial[] = [
  {
    id: "panchami",
    rating: 5,
    quote:
      "There's a reason all the reviews say so many good things about Ali. He knows what he's doing. His experience speaks for itself. He's so quick yet so precise - excellent at what he does. The prices are so reasonable. I just discovered this salon and there's no going back!",
    initials: "PP",
    name: "Panchami Prabhu",
    location: "9 Reviews • Google Verified",
  },
  {
    id: "chandana",
    rating: 5,
    quote:
      "Good hairstyling service offered at affordable prices. Really happy with the look. Thank you Ali and Master Salon for giving me the best haircut and color.",
    initials: "C",
    name: "Chandana",
    location: "Local Guide • Google Verified",
  },
  {
    id: "syeda",
    rating: 5,
    quote:
      "Firstly the ambience of this place is great, it's very comfortable and the staff are way more better at their services - they actually understand what their clients are in need of, and the transformation we get is unbelievable. Great job Ali, keep up the good work Ali and team.",
    initials: "SZ",
    name: "Syeda Zeba",
    location: "Local Guide • Google Verified",
  },
];

export const galleryImages: { alt: string; image: string }[] = [
  {
    alt: "Client with glossy blonde balayage waves at a modern salon",
    image:
      "https://images.unsplash.com/photo-1605980766335-d3a41c7332a1?auto=format&fit=crop&w=700&q=80",
  },
  {
    alt: "Elegant salon reception with warm interior design",
    image:
      "https://images.unsplash.com/photo-1763873993447-1d0be71a96d9?auto=format&fit=crop&w=700&q=80",
  },
  {
    alt: "Traditional Indian bride with ornate gold jewelry and radiant makeup",
    image:
      "https://images.unsplash.com/photo-1600685890506-593fdf55949b?auto=format&fit=crop&w=700&q=80",
  },
  {
    alt: "Coffee cup on a marble table with flowers at the salon lounge",
    image:
      "https://images.unsplash.com/photo-1552956363-eb0a782bdfee?auto=format&fit=crop&w=700&q=80",
  },
];

export const heroImage =
  "https://images.unsplash.com/photo-1706629503650-cade709d15e3?auto=format&fit=crop&w=1600&q=80";

export const atmosphereImage =
  "https://images.unsplash.com/photo-1773904215697-e6c21fc27ac2?auto=format&fit=crop&w=1400&q=80";

export const phoneDisplay = "+91 77957 46616";
export const phoneTel = "tel:+917795746616";
export const whatsappUrl = "https://wa.me/917795746616";
export const waLink = (message: string) => `${whatsappUrl}?text=${encodeURIComponent(message)}`;
export const reserveWaLink = waLink("Hi Master Salon! I'd like to reserve an appointment.");
export const addressLine1 = "2621, 14th Main Road, E Block";
export const addressLine2 = "Sahakara Nagar, Byatarayanapura, Bangalore 560092";
export const addressFull = `${addressLine1}, ${addressLine2}`;
export const googleMapsUrl = "https://maps.app.goo.gl/aq7ZMKa5jT7mss9B6";

export const instagramUrl = "https://www.instagram.com/mastersalon.sahakarnagar/";
export const facebookUrl = "https://www.facebook.com/profile.php?id=100063982964903&mibextid=LQQJ4d";
export const instagramHandle = "@mastersalon.sahakarnagar";
