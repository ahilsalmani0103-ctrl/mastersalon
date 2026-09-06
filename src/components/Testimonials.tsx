import Icon from "./Icon";
import InstagramIcon from "./InstagramIcon";
import { galleryImages, instagramHandle, instagramUrl, testimonials } from "../data/content";

export default function Testimonials() {
  return (
    <section className="w-full bg-surface-container-low py-space-4xl px-container-padding-mobile lg:px-container-padding-desktop" id="client-stories">
      <div className="max-w-[1440px] mx-auto flex flex-col gap-space-3xl">
        <div className="text-center max-w-2xl mx-auto flex flex-col gap-space-xs">
          <span className="font-label-caps text-label-caps text-primary tracking-widest uppercase font-semibold">
            Verified Endorsements
          </span>
          <h2 className="font-headline-lg text-headline-lg text-on-surface">Loved by Sahakar Nagar &amp; North Bangalore</h2>
          <p className="font-body-md text-body-md text-on-surface-variant">
            From corporate leaders in Manyata Tech Park to brides from Sadashivanagar and Jakkur.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-space-lg">
          {testimonials.map((review) => (
            <div key={review.id} className="p-space-lg rounded-xl bg-surface-container-lowest flex flex-col justify-between shadow-sm">
              <div className="flex flex-col gap-space-sm">
                <div className="flex text-primary">
                  {Array.from({ length: review.rating }).map((_, i) => (
                    <Icon key={i} name="star" className="text-[18px]" />
                  ))}
                </div>
                <p className="font-body-md text-body-md text-on-surface italic">"{review.quote}"</p>
              </div>
              <div className="flex items-center gap-space-sm pt-space-md mt-space-sm">
                <div className="w-10 h-10 rounded-full bg-primary-fixed flex items-center justify-center font-bold text-on-primary-fixed text-sm">
                  {review.initials}
                </div>
                <div className="flex flex-col">
                  <span className="font-label-md text-label-md text-on-surface font-semibold">{review.name}</span>
                  <span className="font-caption text-caption text-on-surface-variant">{review.location}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="flex flex-col gap-space-lg pt-space-lg">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-space-xs">
            <div className="flex items-center gap-space-xs">
              <Icon name="photo_camera" className="text-primary" />
              <span className="font-title-editorial text-title-editorial text-on-surface">Live From The Atelier</span>
              <a
                className="font-caption text-caption text-on-surface-variant hover:text-primary transition-colors"
                href={instagramUrl}
                target="_blank"
                rel="noreferrer"
              >
                {instagramHandle}
              </a>
            </div>
            <a
              className="font-label-md text-label-md text-primary hover:underline flex items-center gap-1"
              href={instagramUrl}
              target="_blank"
              rel="noreferrer"
            >
              <InstagramIcon className="w-4 h-4" />
              <span>Follow on Instagram</span>
            </a>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-space-md">
            {galleryImages.map((item) => (
              <div key={item.alt} className="aspect-square rounded-lg overflow-hidden relative group cursor-pointer">
                <img
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  alt={item.alt}
                  src={item.image}
                  loading="lazy"
                  decoding="async"
                />
                <div className="absolute inset-0 bg-on-surface/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center text-on-secondary">
                  <Icon name="favorite" className="text-[24px]" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
