import Icon from "./Icon";
import { reserveWaLink, stylists, waLink } from "../data/content";

export default function Stylists() {
  return (
    <section className="w-full py-space-4xl px-container-padding-mobile lg:px-container-padding-desktop" id="stylists">
      <div className="max-w-[1440px] mx-auto flex flex-col gap-space-3xl">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-space-md">
          <div className="flex flex-col gap-space-xs max-w-xl">
            <span className="font-label-caps text-label-caps text-primary tracking-widest uppercase font-semibold">
              Certified Artisans
            </span>
            <h2 className="font-headline-lg text-headline-lg text-on-surface">Meet The Master Artists</h2>
            <p className="font-body-md text-body-md text-on-surface-variant">
              Trained across London, Paris, and Mumbai academies, our artists hold continuous international
              certifications.
            </p>
          </div>
          <a
            className="font-label-md text-label-md text-primary hover:text-tertiary flex items-center gap-space-xxs"
            href={reserveWaLink}
            target="_blank"
            rel="noreferrer"
          >
            <span>View All 14 Stylists &amp; Therapists</span>
            <Icon name="arrow_forward" className="text-[16px]" />
          </a>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-space-xl">
          {stylists.map((stylist) => (
            <div
              key={stylist.id}
              className="flex flex-col bg-surface-container-low rounded-xl overflow-hidden group hover:shadow-xl transition-all duration-300"
            >
              <div className="w-full h-80 overflow-hidden relative">
                <img
                  className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
                  alt={stylist.name}
                  src={stylist.image}
                  loading="lazy"
                  decoding="async"
                />
                <div className="absolute top-3 right-3 bg-surface-container-lowest/90 backdrop-blur px-2.5 py-1 rounded-full flex items-center gap-1">
                  <Icon name="star" className="text-primary text-[14px]" />
                  <span className="font-caption text-caption text-on-surface font-bold">{stylist.rating}</span>
                </div>
              </div>
              <div className="p-space-lg flex flex-col gap-space-sm flex-1 justify-between">
                <div className="flex flex-col gap-space-xxs">
                  <span className="font-label-caps text-label-caps text-primary uppercase font-bold tracking-wider">
                    {stylist.credential}
                  </span>
                  <h3 className="font-headline-sm text-headline-sm text-on-surface">{stylist.name}</h3>
                  <p className="font-caption text-caption text-on-surface-variant">{stylist.role}</p>
                  <p className="font-body-sm text-body-sm text-on-surface-variant pt-space-xs">{stylist.bio}</p>
                </div>
                <div className="pt-space-md flex items-center justify-between">
                  <div className="flex gap-1 flex-wrap">
                    {stylist.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-2 py-0.5 rounded bg-surface-container font-caption text-caption text-on-surface"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  <a
                    className="px-space-md py-1.5 rounded-full bg-on-surface text-surface font-label-md text-label-md hover:bg-primary hover:text-on-primary transition-colors whitespace-nowrap"
                    href={waLink(`Hi! I'd like to book an appointment with ${stylist.name}.`)}
                    target="_blank"
                    rel="noreferrer"
                  >
                    Book {stylist.name.split(" ")[0]}
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
