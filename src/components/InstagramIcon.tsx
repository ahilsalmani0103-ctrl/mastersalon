import { useId } from "react";

interface IconSvgProps {
  className?: string;
}

export default function InstagramIcon({ className = "" }: IconSvgProps) {
  const gradientId = useId();

  return (
    <svg viewBox="0 0 48 48" className={className} aria-hidden="true">
      <defs>
        <linearGradient id={gradientId} x1="2" y1="46" x2="46" y2="2" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#FFDD55" />
          <stop offset="35%" stopColor="#FF543E" />
          <stop offset="65%" stopColor="#C837AB" />
          <stop offset="100%" stopColor="#5B51D8" />
        </linearGradient>
      </defs>
      <rect x="2" y="2" width="44" height="44" rx="12" fill={`url(#${gradientId})`} />
      <rect x="13.5" y="13.5" width="21" height="21" rx="6" fill="none" stroke="#fff" strokeWidth="2.6" />
      <circle cx="24" cy="24" r="6.4" fill="none" stroke="#fff" strokeWidth="2.6" />
      <circle cx="31.8" cy="16.2" r="1.7" fill="#fff" />
    </svg>
  );
}
