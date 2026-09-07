import Icon from "./Icon";
import { serviceMenu, waLink } from "../data/content";

const categoryIcons: Record<string, string> = {
  "hair-care-men": "content_cut",
  "hair-care-women": "brush",
  "hair-colour-women": "palette",
  "keratin-therapy": "auto_awesome",
  "hair-spa": "water_drop",
  massage: "self_improvement",
  "pedicure-manicure": "clean_hands",
  facials: "face",
  "advance-facial": "face_retouching_natural",
  "bikini-wax-brazilian": "healing",
  cleanup: "cleaning_services",
  threading: "gesture",
};

export default function Rituals() {
  return (
    <section className="w-full py-space-4xl px-container-padding-mobile lg:px-container-padding-desktop" id="curated-rituals">
      <div className="max-w-[1440px] mx-auto flex flex-col gap-space-3xl">
        <div className="flex flex-col gap-space-xs max-w-xl">
          <span className="font-label-caps text-label-caps text-primary tracking-widest uppercase font-semibold">
            Haute Coiffure &amp; Dermal Science
          </span>
          <h2 className="font-headline-lg text-headline-lg text-on-surface">Curated Service Menus &amp; Rituals</h2>
          <p className="font-body-md text-body-md text-on-surface-variant">
            Our full service menu, organized by category. Message us on WhatsApp for current pricing and availability.
          </p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-space-md">
          {serviceMenu.map((category) => (
            <a
              key={category.id}
              href={waLink(`Hi! I'd like to know more about your ${category.label} services.`)}
              target="_blank"
              rel="noreferrer"
              className="flex flex-col items-center text-center gap-space-sm bg-surface-container-low rounded-xl p-space-lg hover:bg-primary-container/40 transition-colors group"
            >
              <div className="w-14 h-14 rounded-full bg-surface-container-high flex items-center justify-center group-hover:bg-primary-container/60 transition-colors">
                <Icon name={categoryIcons[category.id] ?? "spa"} className="text-[26px] text-primary transition-colors" />
              </div>
              <span className="font-label-md text-label-md text-on-surface transition-colors">
                {category.label}
              </span>
            </a>
          ))}
        </div>

        <div className="flex justify-center">
          <a
            className="px-space-lg py-3 rounded-full bg-primary text-on-primary font-label-md text-label-md hover:opacity-90 transition-opacity"
            href={waLink("Hi! I'd like to know more about your services and book an appointment.")}
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
