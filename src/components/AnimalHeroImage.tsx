import Image from "next/image";
import type { AnimalImage } from "@/lib/images/types";
import ImageCredit from "./ImageCredit";

interface AnimalHeroImageProps {
  image: AnimalImage;
  /** Mark as the LCP candidate. Set true for the visible top-of-page image. */
  priority?: boolean;
}

/**
 * Premium-feeling hero image card for an animal profile.
 *
 * Uses Next.js Image for automatic WebP/AVIF delivery and lazy loading.
 * Reserves layout space via aspect-ratio to prevent CLS, while still
 * letting Next.js pick the best size from `sizes`.
 */
export default function AnimalHeroImage({
  image,
  priority,
}: AnimalHeroImageProps) {
  return (
    <figure className="not-prose mb-8 overflow-hidden rounded-xl border border-[#DDE6DD] bg-[#EFF1EB] shadow-sm">
      <div
        className="relative w-full"
        style={{ aspectRatio: `${image.width} / ${image.height}` }}
      >
        <Image
          src={image.localPath}
          alt={image.alt}
          fill
          priority={priority}
          sizes="(min-width: 1024px) 760px, 100vw"
          className="object-cover"
        />
      </div>
      <figcaption className="px-4 py-3 sm:px-5 sm:py-4 bg-white border-t border-[#DDE6DD]">
        <p className="text-sm text-[#2C3A2F] leading-relaxed">
          {image.caption}
        </p>
        <ImageCredit image={image} className="mt-1.5" />
      </figcaption>
    </figure>
  );
}
