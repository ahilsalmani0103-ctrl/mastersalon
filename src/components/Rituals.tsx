import { useMemo, useState } from "react";
import { ritualFilters, rituals, waLink, type RitualCategory } from "../data/content";

export default function Rituals() {
  const [activeFilter, setActiveFilter] = useState<"all" | RitualCategory>("all");

  const filteredRituals = useMemo(
    () => (activeFilter === "all" ? rituals : rituals.filter((r) => r.category === activeFilter)),
    [activeFilter]
  );

  return (
    <section className="w-full py-space-4xl px-container-padding-mobile lg:px-container-padding-desktop" id="curated-rituals">
      <div className="max-w-[1440px] mx-auto flex flex-col gap-space-3xl">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-space-md">
          <div className="flex flex-col gap-space-xs max-w-xl">
            <span className="font-label-caps text-label-caps text-primary tracking-widest uppercase font-semibold">
              Haute Coiffure &amp; Dermal Science
            </span>
            <h2 className="font-headline-lg text-headline-lg text-on-surface">Curated Service Menus &amp; Rituals</h2>
            <p className="font-body-md text-body-md text-on-surface-variant">
              Each experience is customized to individual bone structure, hair porosity, and skin bio-markers.
            </p>
          </div>
          <div className="flex items-center gap-space-xs overflow-x-auto pb-2 scrollbar-none">
            {ritualFilters.map((filter) => {
              const isActive = filter.id === activeFilter;
              return (
                <button
                  key={filter.id}
                  className={`px-space-md py-2 rounded-full font-label-md text-label-md transition-all whitespace-nowrap ${
                    isActive
                      ? "bg-primary text-on-primary"
                      : "bg-surface-container-high text-on-surface hover:bg-surface-container-highest"
                  }`}
                  onClick={() => setActiveFilter(filter.id)}
                  type="button"
                >
                  {filter.label}
                </button>
              );
            })}
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-space-lg">
          {filteredRituals.map((ritual) => (
            <div
              key={ritual.id}
              className="flex flex-col justify-between bg-surface-container-low rounded-xl p-space-lg hover:shadow-lg transition-all duration-300"
            >
              <div className="flex flex-col gap-space-sm">
                <div className="w-full h-44 rounded-lg overflow-hidden relative">
                  <img
                    className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-500"
                    alt={ritual.title}
                    src={ritual.image}
                    loading="lazy"
                    decoding="async"
                  />
                  <span className="absolute top-2 left-2 px-space-xs py-1 rounded bg-surface-container-lowest/90 backdrop-blur font-label-caps text-label-caps text-primary uppercase font-bold">
                    {ritual.badge}
                  </span>
                </div>
                <div className="flex justify-between items-start pt-space-xs">
                  <h3 className="font-headline-sm text-headline-sm text-on-surface">{ritual.title}</h3>
                  <span className="font-caption text-caption text-on-surface-variant bg-surface-container px-2 py-0.5 rounded">
                    {ritual.duration}
                  </span>
                </div>
                <p className="font-body-sm text-body-sm text-on-surface-variant">{ritual.description}</p>
              </div>
              <div className="flex items-center justify-end pt-space-md mt-space-sm">
                <a
                  className="px-space-md py-2 rounded-full bg-surface-container-highest text-on-surface font-label-md text-label-md hover:bg-primary hover:text-on-primary transition-colors"
                  href={waLink(`Hi! I'd like to book the "${ritual.title}" ritual.`)}
                  target="_blank"
                  rel="noreferrer"
                >
                  {ritual.cta}
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
