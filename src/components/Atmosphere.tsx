import Icon from "./Icon";
import { atmosphereImage } from "../data/content";

const amenities = [
  {
    icon: "coffee",
    title: "Curated Coffee Bar",
    description: "Freshly brewed single-origin coffee and calming herbal teas served throughout your visit.",
  },
  {
    icon: "meeting_room",
    title: "Private Styling Suites",
    description: "Discreet suites for bridal prep or clients who prefer a quieter, more personal setting.",
  },
  {
    icon: "sanitizer",
    title: "Hospital-Grade Hygiene",
    description: "Every tool is autoclave-sterilized and UV-treated before it ever touches your skin or hair.",
  },
  {
    icon: "local_parking",
    title: "Complimentary Valet",
    description: "Hassle-free valet parking right outside our 14th Main Road entrance.",
  },
];

export default function Atmosphere() {
  return (
    <section className="w-full bg-surface-container-low py-space-4xl px-container-padding-mobile lg:px-container-padding-desktop" id="atmosphere">
      <div className="max-w-[1440px] mx-auto flex flex-col gap-space-3xl">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-space-xl items-center">
          <div className="lg:col-span-7 relative">
            <div className="w-full h-[480px] rounded-xl overflow-hidden shadow-2xl relative">
              <img
                alt="Sunlit interior styling area at Master Salon Sahakara Nagar"
                className="w-full h-full object-cover"
                src={atmosphereImage}
                loading="lazy"
                decoding="async"
              />
              <div className="absolute bottom-6 left-6 right-6 bg-surface-container-lowest/90 backdrop-blur-md p-space-md rounded-xl flex items-center justify-between">
                <div className="flex items-center gap-space-sm">
                  <Icon name="architecture" className="text-primary text-[28px]" />
                  <div>
                    <h4 className="font-title-editorial text-title-editorial text-on-surface leading-tight">
                      Sunlit Interiors, Hushed Acoustics
                    </h4>
                    <p className="font-caption text-caption text-on-surface-variant">
                      Fluted walls, brass accents, and diffused daylight throughout
                    </p>
                  </div>
                </div>
                <span className="px-space-sm py-1 rounded bg-primary-fixed font-label-caps text-label-caps text-on-primary-fixed uppercase font-semibold">
                  Signature Space
                </span>
              </div>
            </div>
          </div>
          <div className="lg:col-span-5 flex flex-col gap-space-md">
            <span className="font-label-caps text-label-caps text-primary tracking-widest uppercase font-semibold">
              Design &amp; Ambience
            </span>
            <h2 className="font-headline-lg text-headline-lg text-on-surface">An Interior Built For Stillness</h2>
            <p className="font-body-md text-body-md text-on-surface-variant">
              Tucked away from the everyday rush of Byatarayanapura and Sahakara Nagar, our studio was designed as a
              quiet retreat - soft daylight, warm timber textures, and Italian styling chairs set the tone for every
              appointment.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-space-md pt-space-xs">
              {amenities.map((amenity) => (
                <div className="flex flex-col gap-1 p-space-sm bg-surface rounded-lg" key={amenity.title}>
                  <Icon name={amenity.icon} className="text-primary text-[22px]" />
                  <span className="font-label-md text-label-md text-on-surface font-semibold">{amenity.title}</span>
                  <span className="font-caption text-caption text-on-surface-variant">{amenity.description}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
