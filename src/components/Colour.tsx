import Reveal from "./Reveal";
import { colourGallery, waLink } from "../data/content";

export default function Colour() {
  return (
    <section className="w-full py-space-4xl px-container-padding-mobile lg:px-container-padding-desktop" id="hair-colour">
      <div className="max-w-[1440px] mx-auto flex flex-col gap-space-3xl">
        <Reveal className="flex flex-col gap-space-xs max-w-xl">
          <span className="font-label-caps text-label-caps text-primary tracking-widest uppercase font-semibold">
            Hair Colour
          </span>
          <h2 className="font-headline-lg text-headline-lg text-on-surface">Colour Transformations</h2>
          <p className="font-body-md text-body-md text-on-surface-variant">
            Global colour, highlights, balayage, and fashion shades crafted for a rich, natural finish.
          </p>
        </Reveal>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-space-md">
          {colourGallery.map((item, index) => (
            <Reveal key={item.image} delayMs={(index % 3) * 100}>
              <div className="aspect-[3/4] rounded-xl overflow-hidden bg-surface-container-low">
                <img
                  className="w-full h-full object-cover"
                  alt={item.alt}
                  src={item.image}
                  loading="lazy"
                  decoding="async"
                />
              </div>
            </Reveal>
          ))}
        </div>

        <div className="flex justify-center">
          <a
            className="px-space-lg py-3 rounded-full bg-primary text-on-primary font-label-md text-label-md hover:opacity-90 transition-opacity"
            href={waLink("Hi! I'd like to know more about your hair colour services.")}
            target="_blank"
            rel="noreferrer"
          >
            Book on WhatsApp
          </a>
        </div>
      </div>
    </section>
  );
}
