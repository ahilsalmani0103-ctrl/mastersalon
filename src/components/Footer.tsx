import Icon from "./Icon";
import InstagramIcon from "./InstagramIcon";
import FacebookIcon from "./FacebookIcon";
import {
  addressLine1,
  addressLine2,
  facebookUrl,
  instagramHandle,
  instagramUrl,
  phoneDisplay,
  phoneTel,
  reserveWaLink,
} from "../data/content";

const socialLinks = [
  { label: "Instagram", href: instagramUrl, Icon: InstagramIcon },
  { label: "Facebook", href: facebookUrl, Icon: FacebookIcon },
];

const ritualLinks = [
  "Hair Care & Styling",
  "Aesthetic Skin Rituals",
  "Keratin & Hair Botox",
  "Luxe Nail Studio",
  "Men's Royal Grooming",
  "Bridal Suite & Trousseau",
];

const loungeLinks = [
  { label: "Meet The Owner", href: "#owner" },
  { label: "Curated Packages", href: "#curated-rituals" },
  { label: "Client Journals", href: "#client-stories" },
  { label: "Valet & Directions", href: "#location-hours" },
  { label: "Appointment Protocol", href: reserveWaLink, external: true },
];

export default function Footer() {
  return (
    <footer className="w-full bg-surface-container-low pt-space-3xl pb-space-2xl px-container-padding-mobile lg:px-container-padding-desktop shadow-[0_-1px_10px_rgba(23,23,23,0.02)]">
      <div className="max-w-[1440px] mx-auto flex flex-col gap-space-3xl">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-space-xl">
          <div className="lg:col-span-6 flex flex-col gap-space-md">
            <div className="flex items-center gap-space-sm">
              <div className="w-9 h-9 rounded-full bg-surface-container-highest flex items-center justify-center font-display-hero text-headline-sm text-primary">
                M
              </div>
              <span className="font-headline-sm text-headline-sm text-on-surface tracking-tight">Master Salon</span>
            </div>
            <p className="font-body-md text-body-md text-on-surface-variant max-w-sm">
              An elite unisex sanctuary dedicated to haute hair artistry, bespoke skin therapies, and holistic
              wellness in North Bengaluru.
            </p>
            <div className="flex flex-col gap-space-xs font-body-sm text-body-sm text-on-surface-variant">
              <div className="flex items-start gap-space-xs">
                <Icon name="location_on" className="text-primary text-[18px] mt-0.5" />
                <span>
                  {addressLine1}, {addressLine2}
                </span>
              </div>
              <div className="flex items-center gap-space-xs">
                <Icon name="schedule" className="text-primary text-[18px]" />
                <span>Mon - Sun: 9:00 AM - 9:30 PM</span>
              </div>
              <div className="flex items-center gap-space-xs">
                <Icon name="call" className="text-primary text-[18px]" />
                <a className="hover:text-primary transition-colors" href={phoneTel}>
                  {phoneDisplay}
                </a>
              </div>
              <div className="flex items-center gap-space-xs">
                <Icon name="alternate_email" className="text-primary text-[18px]" />
                <a className="hover:text-primary transition-colors" href={instagramUrl} target="_blank" rel="noreferrer">
                  {instagramHandle}
                </a>
              </div>
            </div>
            <div className="inline-flex items-center gap-space-sm p-space-sm rounded-xl bg-surface-container max-w-xs">
              <div className="flex items-center gap-1 text-primary">
                <Icon name="star" className="text-[20px]" />
                <span className="font-label-md text-label-md text-on-surface font-bold">4.9</span>
              </div>
              <div className="h-4 w-px bg-outline-variant" />
              <span className="font-caption text-caption text-on-surface-variant">650+ Verified Google Reviews</span>
            </div>
            <div className="flex items-center gap-space-xs">
              {socialLinks.map(({ label, href, Icon: SocialIcon }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={label}
                  className="flex items-center justify-center w-11 h-11 hover:scale-110 hover:opacity-90 transition-all"
                >
                  <SocialIcon className="w-9 h-9" />
                </a>
              ))}
            </div>
          </div>
          <div className="lg:col-span-3 flex flex-col gap-space-sm">
            <span className="font-title-editorial text-title-editorial text-on-surface">Atelier Rituals</span>
            <ul className="flex flex-col gap-space-xs font-body-sm text-body-sm text-on-surface-variant">
              {ritualLinks.map((label) => (
                <li key={label}>
                  <a className="hover:text-primary transition-colors" href="#curated-rituals">
                    {label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div className="lg:col-span-3 flex flex-col gap-space-sm">
            <span className="font-title-editorial text-title-editorial text-on-surface">Salon Lounge</span>
            <ul className="flex flex-col gap-space-xs font-body-sm text-body-sm text-on-surface-variant">
              {loungeLinks.map((link) => (
                <li key={link.label}>
                  <a
                    className="hover:text-primary transition-colors"
                    href={link.href}
                    target={link.external ? "_blank" : undefined}
                    rel={link.external ? "noreferrer" : undefined}
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="flex flex-col sm:flex-row items-center justify-between gap-space-md pt-space-lg bg-surface-container-high/40 px-space-md py-space-sm rounded-xl">
          <span className="font-caption text-caption text-on-surface-variant">
            © 2026 Master Salon Sahakar Nagar. All rights reserved. Designed for mindful luxury.
          </span>
          <div className="flex items-center gap-space-md font-caption text-caption text-on-surface-variant">
            <a className="hover:text-primary transition-colors" href="#">
              Privacy Policy
            </a>
            <a className="hover:text-primary transition-colors" href="#">
              Sanitation Protocols
            </a>
            <a className="hover:text-primary transition-colors" href="#">
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
