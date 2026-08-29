"use client";

/**
 * One animal in the results grid.
 *
 * The hero image is the one the profile itself renders, taken from the
 * licence-verified image registry — it is never composed from the slug, and the
 * build fails if the file is not in `public/`. It carries `alt=""` because the
 * animal's name is the very next thing in the same link: giving the image its
 * own alt text would make a screen reader announce the name twice, and writing
 * a description of a photograph nobody on this branch has looked at would be
 * inventing content.
 *
 * It goes through `next/image` with an explicit `sizes`, exactly as the ocean
 * animal list does. That is not a stylistic preference. These files are 1600 px
 * heroes averaging 229 KB — correct for the top of a profile page, absurd in a
 * 300 px card — and a plain `<img>` shipped the originals: **10.15 MB for the
 * default 48-card page**, 2.19 MB of it eagerly above the fold, and another
 * gridful on every filter change. That is 33x the index this whole layer
 * fetches lazily to stay small. `sizes` makes Next serve a derivative matched
 * to the slot.
 *
 * `prefetch={false}` is deliberate and matches the search panel. With Next's
 * default prefetching, a results grid rebuilt on every keystroke speculatively
 * fetches an RSC payload for every card scrolled past — measured at 43 requests
 * and 2.8 MB across ten queries in the search sprint. Every destination is a
 * prerendered static page, so navigation stays fast without it.
 */
import Link from "next/link";
import Image from "next/image";
import type { FinderAnimalDocument } from "@/lib/finder/types";

export interface FinderResultCardProps {
  document: FinderAnimalDocument;
  groupLabel?: string;
  /** 1-based position in the full result list, for the click event. */
  position: number;
  onSelect: (document: FinderAnimalDocument, position: number) => void;
  /** Only the first screenful is eager; everything else defers. */
  eager: boolean;
}

export default function FinderResultCard({
  document,
  groupLabel,
  position,
  onSelect,
  eager,
}: FinderResultCardProps) {
  return (
    <li>
      <Link
        href={document.url}
        prefetch={false}
        data-wmid-cta="animal-finder-result"
        onClick={() => onSelect(document, position)}
        className="group flex h-full flex-col overflow-hidden rounded-xl border border-[#DDE6DD] bg-white transition-colors hover:border-[#CFE0A8] hover:bg-[#F7F8F3] hover:no-underline focus:outline-none focus-visible:ring-2 focus-visible:ring-[#063F2A] focus-visible:ring-offset-2"
      >
        {document.image && (
          <span className="relative block aspect-[3/2] w-full overflow-hidden bg-[#EFF1EB]">
            {/* The aspect ratio is fixed on the wrapper rather than taken from
                the file, so the box is reserved before anything loads and the
                grid cannot shift — the 642 heroes span 172 distinct intrinsic
                ratios, none of which the card uses. */}
            <Image
              src={document.image.src}
              alt=""
              fill
              sizes="(min-width: 1280px) 300px, (min-width: 640px) 46vw, 92vw"
              loading={eager ? "eager" : "lazy"}
              className="object-cover"
            />
          </span>
        )}

        <span className="flex flex-1 flex-col p-3.5">
          <span className="text-[15px] font-bold leading-snug text-[#17211B]">
            {document.name}
          </span>

          {document.scientificName && (
            <span className="mt-0.5 text-xs italic leading-snug text-[#5E6B63]">
              {document.scientificName}
            </span>
          )}

          {document.description && (
            <span className="mt-1.5 line-clamp-3 text-xs leading-relaxed text-[#2C3A2F]">
              {document.description}
            </span>
          )}

          {/* Only real labels are rendered. An animal with no recorded group
              shows no group chip rather than an "Unknown" badge, because
              "unknown" here is a statement about FaunaHub's records, not about
              the animal, and a badge would read as the latter. */}
          <span className="mt-auto flex flex-wrap items-center gap-1.5 pt-2.5">
            {groupLabel && (
              <span className="rounded-full border border-[#CFE0A8] bg-[#EFF4E0] px-2 py-0.5 text-[11px] font-semibold text-[#063F2A]">
                {groupLabel}
              </span>
            )}
            {document.comparisonCount > 0 && (
              <span className="rounded-full border border-[#DDE6DD] bg-[#EFF1EB] px-2 py-0.5 text-[11px] font-medium text-[#2C3A2F]">
                {document.comparisonCount === 1
                  ? "1 comparison"
                  : `${document.comparisonCount} comparisons`}
              </span>
            )}
          </span>
        </span>
      </Link>
    </li>
  );
}
