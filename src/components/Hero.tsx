import Icon from "./Icon";
import { heroImage, reserveWaLink } from "../data/content";

const trustPoints = [
  {
    icon: "stars",
    title: "4.9 ★ on Google Maps",
    subtitle: "680+ Verified Sahakar Nagar Clients",
  },
  {
    icon: "verified",
    title: "Kérastase & Olaplex Partner",
    subtitle: "Certified Luxury Hair Care Protocol",
  },
  {
    icon: "spa",
    title: "100% Organic Dermal Botanicals",
    subtitle: "Cruelty-Free & Dermatologically Proven",
  },
];

export default function Hero() {
  return (
    <section className="relative w-full overflow-hidden" id="top">
      <div className="relative w-full min-h-[600px] lg:min-h-[calc(100vh-5rem)] flex items-center">
        <div className="absolute inset-0 z-0">
          <img
            alt="Master Salon Sahakar Nagar Interior Sanctuary"
            className="w-full h-full object-cover object-center transform scale-105 transition-transform duration-1000 ease-out"
            src={heroImage}
            loading="eager"
            fetchPriority="high"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-background/95 via-background/80 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-background/30" />
        </div>
        <div className="relative z-10 max-w-[1440px] mx-auto w-full px-container-padding-mobile lg:px-container-padding-desktop py-space-3xl flex flex-col justify-between">
          <div className="max-w-2xl flex flex-col gap-space-md">
            <div className="inline-flex items-center gap-space-xs px-space-sm py-1.5 rounded-full bg-surface-container-highest/80 backdrop-blur-md w-fit">
              <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
              <span className="font-label-caps text-label-caps text-on-surface tracking-widest uppercase font-semibold">
                Sahakar Nagar's Haute Atelier
              </span>
            </div>
            <h1 className="font-display-hero text-display-hero-mobile lg:text-display-hero text-on-surface font-normal leading-tight tracking-tight">
              The Pinnacle of Hair Artistry &amp;{" "}
              <span className="italic font-display-hero text-primary">Aesthetic Wellness</span>
            </h1>
            <p className="font-body-lg text-body-lg text-on-surface-variant max-w-xl font-light">
              Where bespoke craftsmanship meets tailored pampering. Experience Bangalore's premier unisex destination
              for transformative hair couture, restorative dermal therapies, and curated bridal glam.
            </p>
            <div className="flex flex-wrap items-center gap-space-md pt-space-xs">
              <a
                className="px-space-xl py-space-sm rounded-full bg-inverse-surface text-inverse-on-surface font-label-md text-label-md hover:bg-primary transition-all duration-300 shadow-xl flex items-center gap-space-xs group"
                href={reserveWaLink}
                target="_blank"
                rel="noreferrer"
              >
                <span>Reserve Appointment</span>
                <Icon name="arrow_forward" className="text-[18px] group-hover:translate-x-1 transition-transform" />
              </a>
              <a
                className="px-space-lg py-space-sm rounded-full bg-surface-container-high/60 backdrop-blur-md text-on-surface font-label-md text-label-md hover:bg-surface-container-highest transition-all duration-200"
                href="#curated-rituals"
              >
                Explore Atelier Rituals
              </a>
            </div>
          </div>
          <div className="mt-space-3xl grid grid-cols-1 sm:grid-cols-3 gap-space-md pt-space-lg bg-surface-container-low/70 backdrop-blur-xl rounded-xl p-space-md">
            {trustPoints.map((point) => (
              <div className="flex items-center gap-space-sm" key={point.title}>
                <div className="w-10 h-10 rounded-full bg-primary-fixed flex items-center justify-center shrink-0">
                  <Icon name={point.icon} className="text-on-primary-fixed text-[20px]" />
                </div>
                <div className="flex flex-col">
                  <span className="font-label-md text-label-md text-on-surface font-semibold">{point.title}</span>
                  <span className="font-caption text-caption text-on-surface-variant">{point.subtitle}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
