export interface ServiceItem {
  name: string;
  price?: string;
}

export interface ServiceCategory {
  id: string;
  label: string;
  items: ServiceItem[];
}

export const serviceMenu: ServiceCategory[] = [
  {
    id: "hair-care-men",
    label: "Hair Care – Men's",
    items: [
      { name: "Men's Hair Cut" },
      { name: "Men's Hair Wash with Style" },
      { name: "Beard Trim" },
      { name: "Shave" },
      { name: "Hair Colour" },
      { name: "Hair Highlights" },
    ],
  },
  {
    id: "hair-care-women",
    label: "Hair Care – Women's",
    items: [
      { name: "Hair Cut" },
      { name: "Kid's Hair Cut" },
      { name: "Hair Wash & Conditioner" },
      { name: "Hair Wash & Blow Dry" },
      { name: "Straight Blow Dry" },
      { name: "Soft Curls Blow Dry" },
      { name: "Tong Curls Hair Style" },
      { name: "Hair Ironing" },
    ],
  },
  {
    id: "hair-colour-women",
    label: "Hair Colour – Women's",
    items: [
      { name: "Women's Global Hair Colour" },
      { name: "Global Highlights" },
      { name: "Crown Area" },
      { name: "Root Touch-up" },
      { name: "Highlights (Per Streak)" },
    ],
  },
  {
    id: "keratin-therapy",
    label: "Keratin Therapy – Women's",
    items: [
      { name: "Keratin Therapy" },
      { name: "Hair Botox Treatment" },
      { name: "Nanoplastia Treatment" },
    ],
  },
  {
    id: "hair-spa",
    label: "Hair Spa – Men's & Women's",
    items: [
      { name: "Hair Spa (Men's)" },
      { name: "Dandruff Treatment" },
      { name: "L'Oréal Spa (Women's)" },
      { name: "Keratin Spa" },
      { name: "Dandruff Treatment (Women's)" },
      { name: "Hair Fall Treatment (Women's)" },
    ],
  },
  {
    id: "massage",
    label: "Massage Therapy – Men's & Women's",
    items: [
      { name: "Head Massage" },
      { name: "Head Massage (Women's)" },
      { name: "Shoulder Massage" },
      { name: "Foot Massage (30 mins)" },
    ],
  },
  {
    id: "pedicure-manicure",
    label: "Pedicure & Manicure",
    items: [
      { name: "Pedicure Basic" },
      { name: "Manicure Basic" },
      { name: "Pedicure Spa" },
      { name: "Manicure Spa" },
      { name: "Pedicure Spa Raga" },
      { name: "Manicure" },
    ],
  },
  {
    id: "facials",
    label: "Facials – Men's & Women's",
    items: [
      { name: "Fruit Facial" },
      { name: "Herbal Facial" },
      { name: "Nature's Gold" },
      { name: "VLCC Gold" },
      { name: "Nature's Whitening" },
      { name: "VLCC Whitening" },
      { name: "Pearl Whitening" },
      { name: "Nature's Banana" },
      { name: "Nature's Papaya" },
    ],
  },
  {
    id: "advance-facial",
    label: "Advance Facial – Men's & Women's",
    items: [
      { name: "Nature's Acne Facial" },
      { name: "Shahnaz Husain Whitening Facial" },
      { name: "Raga Whitening" },
      { name: "Lotus Whitening" },
      { name: "O3 Whitening" },
      { name: "HydraFacial" },
    ],
  },
  {
    id: "bikini-wax-brazilian",
    label: "Bikini Wax & Brazilian",
    items: [{ name: "Bikini Wax" }, { name: "Brazilian" }],
  },
  {
    id: "cleanup",
    label: "Cleanup",
    items: [
      { name: "Fruit Cleanup" },
      { name: "Nature's Gold" },
      { name: "O3 Cleanup" },
      { name: "Vitamin C" },
    ],
  },
  {
    id: "threading",
    label: "Threading",
    items: [
      { name: "Eyebrows" },
      { name: "Forehead" },
      { name: "Upper Lips" },
      { name: "Chin" },
      { name: "Sides / Cheeks" },
      { name: "Full Face" },
    ],
  },
];

export interface Owner {
  name: string;
  title: string;
  bio: string;
  tags: string[];
  image: string;
}

export const owner: Owner = {
  name: "Murshad Ali",
  title: "Owner & Master Stylist",
  bio: "With years of hands-on experience across cutting, coloring, and skincare, Murshad Ali leads the Master Salon team with a personal, detail-focused approach — making sure every client leaves looking and feeling their best.",
  tags: ["Hair Styling", "Colour Specialist", "Client Care"],
  image: "/ownerimage.png",
};

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

export const colourGallery: { alt: string; image: string }[] = [
  { alt: "Hair color transformation before and after", image: "/colour/colour-1.jpeg" },
  { alt: "Colorist applying premium hair color at the salon", image: "/colour/colour-2.jpeg" },
  { alt: "Highlights and fashion shades application close-up", image: "/colour/colour-3.jpeg" },
  { alt: "Client relaxing during a premium hair color service", image: "/colour/colour-4.jpeg" },
  { alt: "Global hair color service in progress", image: "/colour/colour-5.jpeg" },
  { alt: "Balayage and ombre color application close-up", image: "/colour/colour-6.jpeg" },
];

export const heroImage =
  "https://images.unsplash.com/photo-1706629503650-cade709d15e3?auto=format&fit=crop&w=1600&q=80";

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
