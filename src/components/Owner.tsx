import { owner, reserveWaLink } from "../data/content";

export default function Owner() {
  return (
    <section className="w-full py-space-4xl px-container-padding-mobile lg:px-container-padding-desktop" id="owner">
      <div className="max-w-[1440px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-space-3xl items-stretch">
        <div className="w-full rounded-xl overflow-hidden">
          <img
            className="w-full h-full max-h-[640px] object-cover"
            alt={owner.name}
            src={owner.image}
            loading="lazy"
            decoding="async"
          />
        </div>
        <div className="flex flex-col justify-center gap-space-md bg-surface-container-low rounded-xl p-space-2xl">
          <span className="font-label-caps text-label-caps text-primary tracking-widest uppercase font-semibold">
            Meet The Owner
          </span>
          <h2 className="font-headline-lg text-headline-lg text-on-surface">{owner.name}</h2>
          <p className="font-label-md text-label-md text-on-surface-variant">{owner.title}</p>
          <p className="font-body-lg text-body-lg text-on-surface-variant pt-space-xs">{owner.bio}</p>
          <div className="flex gap-2 flex-wrap pt-space-sm">
            {owner.tags.map((tag) => (
              <span
                key={tag}
                className="px-space-md py-1.5 rounded-full bg-surface-container-high font-caption text-caption text-on-surface"
              >
                {tag}
              </span>
            ))}
          </div>
          <div className="pt-space-lg">
            <a
              className="px-space-lg py-3 rounded-full bg-on-surface text-surface font-label-md text-label-md hover:bg-primary hover:text-on-primary transition-colors inline-block"
              href={reserveWaLink}
              target="_blank"
              rel="noreferrer"
            >
              Book with {owner.name}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
