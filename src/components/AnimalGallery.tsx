import Image from "next/image";
import type { AnimalImage } from "@/lib/images/types";
import ImageCredit from "./ImageCredit";

interface AnimalGalleryProps {
  images: AnimalImage[];
  commonName: string;
}

/**
 * Visible photo gallery rendered below the hero / overview on an animal
 * profile page. Renders nothing if there are no gallery images, so callers
 * can include it unconditionally and animals without gallery photos stay
 * clean.
 *
 * Layout: 1 column on mobile, 2 on >=sm screens. Each image is a card with
 * a fixed aspect ratio so the grid never shifts under load.
 */
export default function AnimalGallery({
  images,
  commonName,
}: AnimalGalleryProps) {
  if (!images.length) return null;
  return (
    <section
      aria-labelledby="animal-gallery-heading"
      className="not-prose mt-10 mb-8"
    >
      <h2
        id="animal-gallery-heading"
        className="text-xl sm:text-2xl font-semibold text-[#17211B] mb-4"
      >
        More photos of the {commonName.toLowerCase()}
      </h2>
      <div
        className={`grid gap-4 sm:gap-5 ${
          images.length === 1 ? "sm:grid-cols-1" : "sm:grid-cols-2"
        }`}
      >
        {images.map((img) => (
          <figure
            key={img.id}
            className="overflow-hidden rounded-xl border border-[#DDE6DD] bg-[#EFF1EB] shadow-sm flex flex-col"
          >
            <div
              className="relative w-full"
              style={{ aspectRatio: `${img.width} / ${img.height}` }}
            >
              <Image
                src={img.localPath}
                alt={img.alt}
                fill
                loading="lazy"
                sizes={
                  images.length === 1
                    ? "(min-width: 1024px) 760px, 100vw"
                    : "(min-width: 1024px) 380px, (min-width: 640px) 50vw, 100vw"
                }
                className="object-cover"
              />
            </div>
            <figcaption className="px-4 py-3 sm:px-5 sm:py-4 bg-white border-t border-[#DDE6DD]">
              <p className="text-sm text-[#2C3A2F] leading-relaxed">
                {img.caption}
              </p>
              <ImageCredit image={img} className="mt-1.5" />
            </figcaption>
          </figure>
        ))}
      </div>
    </section>
  );
}
