import WhatsAppIcon from "./WhatsAppIcon";
import { whatsappUrl } from "../data/content";

export default function WhatsAppButton() {
  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noreferrer"
      aria-label="Chat with us on WhatsApp"
      className="fixed bottom-6 right-6 z-40 flex items-center justify-center w-14 h-14 rounded-full bg-[#25D366] text-white shadow-[0_8px_24px_rgba(37,211,102,0.45)] hover:scale-105 hover:shadow-[0_10px_28px_rgba(37,211,102,0.55)] transition-all duration-300"
    >
      <span className="absolute inset-0 rounded-full bg-[#25D366] opacity-60 animate-ping" />
      <WhatsAppIcon className="relative w-7 h-7" />
    </a>
  );
}
