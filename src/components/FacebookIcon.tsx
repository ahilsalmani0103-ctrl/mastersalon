interface IconSvgProps {
  className?: string;
}

export default function FacebookIcon({ className = "" }: IconSvgProps) {
  return (
    <svg viewBox="0 0 48 48" className={className} aria-hidden="true">
      <circle cx="24" cy="24" r="22" fill="#1877F2" />
      <path
        d="M27.5 42V25.5h5.4l.8-6.6h-6.2v-4.2c0-1.9.5-3.2 3.2-3.2h3.4V5.8c-.6-.1-2.6-.3-4.9-.3-4.9 0-8.2 3-8.2 8.4v4.6H15.5v6.6h5.5V42h6.5Z"
        fill="#fff"
      />
    </svg>
  );
}
