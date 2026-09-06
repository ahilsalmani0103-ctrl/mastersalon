import { useEffect, useState } from "react";
import Icon from "./Icon";
import { phoneDisplay, phoneTel, reserveWaLink } from "../data/content";

const navLinks = [
  { label: "Services", full: "Services", href: "#curated-rituals" },
  { label: "Stylists", full: "Stylists & Artistry", href: "#stylists" },
  { label: "Bridal", full: "Bridal & Couture", href: "#curated-rituals" },
  { label: "Atmosphere", full: "Atmosphere", href: "#atmosphere" },
  { label: "Reviews", full: "Client Stories", href: "#client-stories" },
  { label: "Visit Us", full: "Location & Hours", href: "#location-hours" },
];

function Logo() {
  return (
    <a className="flex items-center gap-3 group shrink-0" href="#top">
      <img src="/mastersalonlogo.png" alt="Master Salon" className="h-14 w-auto object-contain shrink-0" />
      <div className="flex flex-col leading-tight">
        <span className="font-title-editorial text-title-editorial text-inverse-on-surface tracking-tight leading-none uppercase whitespace-nowrap">
          Master Salon
        </span>
        <span className="font-label-caps text-label-caps text-inverse-on-surface/75 tracking-widest text-[9px] uppercase mt-0.5 whitespace-nowrap">
          Sahakar Nagar • Bengaluru
        </span>
      </div>
    </a>
  );
}

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  return (
    <header className="fixed top-0 left-0 w-full z-50 transition-all duration-300">
      <div className="h-20 w-full bg-inverse-surface/95 backdrop-blur-xl shadow-[0_2px_16px_rgba(0,0,0,0.25)] px-container-padding-mobile lg:px-container-padding-desktop">
        <div className="max-w-[1440px] mx-auto h-full flex items-center justify-between gap-space-sm">
          <Logo />

          <nav className="hidden xl:flex items-center gap-6 2xl:gap-8">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                title={link.full}
                className="group relative whitespace-nowrap font-label-md text-label-md text-inverse-on-surface/75 hover:text-inverse-primary transition-colors duration-200 py-1"
              >
                {link.label}
                <span className="absolute left-1/2 -bottom-0.5 h-[1.5px] w-full -translate-x-1/2 scale-x-0 bg-inverse-primary transition-transform duration-300 ease-out group-hover:scale-x-100" />
              </a>
            ))}
          </nav>

          <div className="hidden xl:flex items-center gap-3 shrink-0">
            <a
              className="flex items-center gap-space-xs px-space-sm py-space-xs rounded-full font-label-md text-label-md text-inverse-on-surface/90 hover:text-inverse-primary transition-colors whitespace-nowrap"
              href={phoneTel}
            >
              <Icon name="call" className="text-[18px]" />
              <span className="font-medium">{phoneDisplay}</span>
            </a>
            <a
              className="px-space-md py-2.5 rounded-full bg-primary text-on-primary hover:bg-tertiary transition-all duration-300 font-label-md text-label-md shadow-[0_4px_16px_rgba(197,160,89,0.35)] flex items-center gap-space-xs whitespace-nowrap"
              href={reserveWaLink}
              target="_blank"
              rel="noreferrer"
            >
              <span>Reserve Appointment</span>
            </a>
          </div>

          <button
            className="xl:hidden flex items-center justify-center w-11 h-11 rounded-full bg-inverse-on-surface/10 text-inverse-on-surface hover:bg-inverse-on-surface/20 transition-colors shrink-0"
            onClick={() => setMenuOpen((open) => !open)}
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            aria-expanded={menuOpen}
            type="button"
          >
            <Icon name={menuOpen ? "close" : "menu"} className="text-[24px]" />
          </button>
        </div>
      </div>

      {menuOpen && (
        <div className="xl:hidden w-full bg-surface border-t border-outline-variant/40 shadow-lg max-h-[calc(100vh-80px)] overflow-y-auto">
          <nav className="flex flex-col px-container-padding-mobile py-space-md gap-space-xs">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setMenuOpen(false)}
                className="py-space-sm font-label-md text-label-md text-on-surface border-b border-outline-variant/30"
              >
                {link.full}
              </a>
            ))}
            <div className="flex flex-col gap-space-sm pt-space-md">
              <a
                className="flex items-center justify-center gap-space-xs px-space-md py-3 rounded-full bg-surface-container-high text-on-surface font-label-md text-label-md"
                href={phoneTel}
              >
                <Icon name="call" className="text-[18px] text-primary" />
                <span>{phoneDisplay}</span>
              </a>
              <a
                className="flex items-center justify-center gap-space-xs px-space-md py-3 rounded-full bg-inverse-surface text-inverse-on-surface font-label-md text-label-md"
                href={reserveWaLink}
                target="_blank"
                rel="noreferrer"
                onClick={() => setMenuOpen(false)}
              >
                <span>Reserve Appointment</span>
              </a>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
