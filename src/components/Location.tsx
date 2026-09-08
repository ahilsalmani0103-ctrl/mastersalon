import Icon from "./Icon";
import WhatsAppIcon from "./WhatsAppIcon";
import InstagramIcon from "./InstagramIcon";
import FacebookIcon from "./FacebookIcon";
import Reveal from "./Reveal";
import {
  addressFull,
  addressLine1,
  addressLine2,
  facebookUrl,
  googleMapsUrl,
  instagramUrl,
  phoneDisplay,
  phoneTel,
  whatsappUrl,
} from "../data/content";

const mapsEmbedUrl = `https://www.google.com/maps?q=${encodeURIComponent(addressFull)}&z=16&output=embed`;

export default function Location() {
  return (
    <section className="w-full py-space-4xl px-container-padding-mobile lg:px-container-padding-desktop" id="location-hours">
      <div className="max-w-[1440px] mx-auto flex flex-col gap-space-3xl">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-space-xl">
          <Reveal direction="left" className="lg:col-span-6 flex flex-col gap-space-lg bg-surface-container-low p-space-xl rounded-2xl">
            <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-space-sm">
              <div className="flex flex-col gap-space-xs">
                <span className="font-label-caps text-label-caps text-primary tracking-widest uppercase font-semibold">
                  Flagship Destination
                </span>
                <h2 className="font-headline-md text-headline-md text-on-surface">Find Us in Sahakara Nagar</h2>
              </div>
              <div className="flex items-center gap-space-xs">
                <a
                  href={instagramUrl}
                  target="_blank"
                  rel="noreferrer"
                  aria-label="Follow Master Salon on Instagram"
                  className="flex items-center justify-center w-11 h-11 hover:scale-110 hover:opacity-90 transition-all"
                >
                  <InstagramIcon className="w-9 h-9" />
                </a>
                <a
                  href={facebookUrl}
                  target="_blank"
                  rel="noreferrer"
                  aria-label="Follow Master Salon on Facebook"
                  className="flex items-center justify-center w-11 h-11 hover:scale-110 hover:opacity-90 transition-all"
                >
                  <FacebookIcon className="w-9 h-9" />
                </a>
              </div>
            </div>
            <div className="flex flex-col gap-space-md">
              <div className="flex items-start gap-space-sm">
                <div className="w-10 h-10 rounded-full bg-surface-container-highest flex items-center justify-center shrink-0">
                  <Icon name="location_on" className="text-primary text-[20px]" />
                </div>
                <div className="flex flex-col">
                  <span className="font-label-md text-label-md text-on-surface font-semibold">Flagship Address</span>
                  <p className="font-body-md text-body-md text-on-surface-variant">
                    {addressLine1}
                    <br />
                    {addressLine2}
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-space-sm">
                <div className="w-10 h-10 rounded-full bg-surface-container-highest flex items-center justify-center shrink-0">
                  <Icon name="schedule" className="text-primary text-[20px]" />
                </div>
                <div className="flex flex-col">
                  <span className="font-label-md text-label-md text-on-surface font-semibold">
                    Salon &amp; Sanctuary Hours
                  </span>
                  <p className="font-body-md text-body-md text-on-surface-variant">Monday to Sunday: 9:00 AM – 9:30 PM</p>
                </div>
              </div>
              <div className="flex items-start gap-space-sm">
                <div className="w-10 h-10 rounded-full bg-surface-container-highest flex items-center justify-center shrink-0">
                  <Icon name="support_agent" className="text-primary text-[20px]" />
                </div>
                <div className="flex flex-col">
                  <span className="font-label-md text-label-md text-on-surface font-semibold">Concierge &amp; Bookings</span>
                  <a className="font-body-md text-body-md text-primary font-medium hover:underline" href={phoneTel}>
                    {phoneDisplay}
                  </a>
                  <span className="font-caption text-caption text-on-surface-variant">
                    Also available on WhatsApp for bookings.
                  </span>
                </div>
              </div>
            </div>
            <div className="flex flex-wrap items-center gap-space-sm pt-space-xs">
              <a
                className="px-space-md py-2.5 rounded-full bg-inverse-surface text-inverse-on-surface hover:bg-primary transition-colors flex items-center gap-space-xxs font-label-md text-label-md"
                href={googleMapsUrl}
                target="_blank"
                rel="noreferrer"
              >
                <Icon name="directions" className="text-[18px]" />
                <span>Open in Google Maps</span>
              </a>
              <a
                className="px-space-md py-2.5 rounded-full bg-surface-container-highest text-on-surface hover:bg-primary hover:text-on-primary transition-colors flex items-center gap-space-xxs font-label-md text-label-md"
                href={phoneTel}
              >
                <Icon name="call" className="text-[18px]" />
                <span>Call Concierge</span>
              </a>
              <a
                className="px-space-md py-2.5 rounded-full bg-[#25D366] text-white hover:bg-[#1ebe57] transition-colors flex items-center gap-space-xxs font-label-md text-label-md"
                href={whatsappUrl}
                target="_blank"
                rel="noreferrer"
              >
                <WhatsAppIcon className="w-[18px] h-[18px]" />
                <span>WhatsApp Us</span>
              </a>
            </div>
          </Reveal>
          <Reveal direction="right" delayMs={120} className="lg:col-span-6 flex flex-col h-full min-h-[380px]">
            <a
              href={googleMapsUrl}
              target="_blank"
              rel="noreferrer"
              aria-label="Open Master Salon's exact location in Google Maps"
              className="group block w-full h-full rounded-2xl overflow-hidden shadow-lg relative min-h-[380px] cursor-pointer"
            >
              <iframe
                src={mapsEmbedUrl}
                title="Map showing Master Salon's location in Sahakara Nagar"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="absolute inset-0 w-full h-full border-0 pointer-events-none grayscale-[10%] group-hover:grayscale-0 transition-all duration-300"
              />
              {/* Highlighted marker pinned at the geocoded address, dead-center of the embed */}
              <div className="absolute inset-0 flex items-center justify-center pointer-events-none -translate-y-3">
                <span className="relative flex items-center justify-center">
                  <span className="absolute w-9 h-9 rounded-full bg-primary/40 animate-ping" />
                  <span className="relative w-5 h-5 rounded-full bg-primary border-2 border-surface-container-lowest shadow-[0_2px_8px_rgba(0,0,0,0.35)]" />
                </span>
              </div>
              <div className="absolute top-4 right-4 bg-surface-container-lowest/95 backdrop-blur px-space-sm py-1.5 rounded-full font-caption text-caption text-on-surface flex items-center gap-1 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
                <Icon name="open_in_new" className="text-[14px]" />
                <span>View on Google Maps</span>
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-inverse-surface/80 via-transparent to-transparent flex flex-col justify-end p-space-lg pointer-events-none">
                <div className="bg-surface-container-lowest/95 backdrop-blur-md p-space-md rounded-xl max-w-sm flex items-center justify-between">
                  <div className="flex items-center gap-space-sm">
                    <div className="w-8 h-8 rounded-full bg-primary text-on-primary flex items-center justify-center">
                      <Icon name="pin_drop" className="text-[18px]" />
                    </div>
                    <div>
                      <h5 className="font-label-md text-label-md text-on-surface font-semibold">Master Salon Bangalore</h5>
                      <p className="font-caption text-caption text-on-surface-variant">Sahakara Nagar Flagship</p>
                    </div>
                  </div>
                  <span className="text-primary font-bold text-xs">4.9 ★</span>
                </div>
              </div>
            </a>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
