import Icon from "./Icon";
import Reveal from "./Reveal";
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
        <Reveal className="flex flex-col gap-space-xs max-w-xl">
          <span className="font-label-caps text-label-caps text-primary tracking-widest uppercase font-semibold">
            Haute Coiffure &amp; Dermal Science
          </span>
          <h2 className="font-headline-lg text-headline-lg text-on-surface">Curated Service Menus &amp; Rituals</h2>
          <p className="font-body-md text-body-md text-on-surface-variant">
            Our full service menu. Message us on WhatsApp for current pricing and availability.
          </p>
        </Reveal>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-space-lg">
          {serviceMenu.map((category, index) => (
            <Reveal key={category.id} delayMs={(index % 4) * 80} className="bg-surface-container-low rounded-xl p-space-md">
              <div className="flex items-center gap-space-xs pb-space-sm border-b border-surface-container-highest mb-space-xs">
                <div className="w-8 h-8 rounded-full bg-surface-container-high flex items-center justify-center shrink-0">
                  <Icon name={categoryIcons[category.id] ?? "spa"} className="text-primary text-[16px]" />
                </div>
                <h3 className="font-headline-sm text-headline-sm text-on-surface">{category.label}</h3>
              </div>
              <div className="grid grid-cols-2 gap-x-space-sm">
                {category.items.map((item) => (
                  <a
                    key={item.name}
                    href={waLink(`Hi! I'd like to book "${item.name}" from your ${category.label} menu.`)}
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center justify-between gap-space-xs py-1.5 px-space-xs rounded-lg hover:bg-surface-container-high transition-colors group"
                  >
                    <span className="font-body-sm text-body-sm text-on-surface">{item.name}</span>
                    <Icon
                      name="arrow_outward"
                      className="text-[14px] text-on-surface-variant opacity-0 group-hover:opacity-100 group-hover:text-primary transition-opacity shrink-0"
                    />
                  </a>
                ))}
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal className="flex justify-center">
          <a
            className="px-space-lg py-3 rounded-full bg-primary text-on-primary font-label-md text-label-md hover:opacity-90 transition-opacity"
            href={waLink("Hi! I'd like to know more about your services and book an appointment.")}
            target="_blank"
            rel="noreferrer"
          >
            Book on WhatsApp
          </a>
        </Reveal>
      </div>
    </section>
  );
}
