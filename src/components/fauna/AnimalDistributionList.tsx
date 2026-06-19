import Image from "next/image";
import Link from "next/link";
import HabitatTag from "./HabitatTag";
import FaunaConfidenceBadge from "./FaunaConfidenceBadge";
import { faunaImage, faunaSourceLinks } from "@/lib/fauna/helpers";
import type { FaunaContinentRecord } from "@/lib/fauna/types";

const linkClass =
  "underline decoration-dotted underline-offset-2 hover:text-[#063F2A] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#7BAA35] focus-visible:ring-offset-1 rounded-sm";

/**
 * Mobile-safe grid of continent distribution records. Each card links to the
 * existing /animals/[slug] profile and shows a cautious distribution note,
 * habitat tags, a confidence badge, and authoritative sources.
 */
export default function AnimalDistributionList({
  records,
}: {
  records: readonly FaunaContinentRecord[];
}) {
  if (records.length === 0) {
    return (
      <p className="text-sm text-[#5E6B63] border border-dashed border-[#DDE6DD] rounded-xl p-6 text-center">
        No featured animal profiles in this view yet.
      </p>
    );
  }

  return (
    <ul className="grid gap-4 sm:grid-cols-2">
      {records.map((r) => {
        const img = faunaImage(r.animalSlug);
        const sources = faunaSourceLinks(r.animalSlug).slice(0, 3);
        return (
          <li key={r.animalSlug} className="card p-4 flex gap-4 h-full">
            {img && (
              <Link
                href={`/animals/${r.animalSlug}`}
                className="relative w-24 h-24 flex-shrink-0 rounded-lg overflow-hidden border border-[#DDE6DD] bg-[#EFF1EB] hover:no-underline"
                aria-hidden="true"
                tabIndex={-1}
              >
                <Image
                  src={img.localPath}
                  alt=""
                  fill
                  sizes="96px"
                  className="object-cover"
                  loading="lazy"
                />
              </Link>
            )}
            <div className="min-w-0 flex-1 flex flex-col gap-1.5">
              <div className="flex items-start justify-between gap-2">
                <h3 className="text-base font-semibold text-[#17211B] leading-snug">
                  <Link
                    href={`/animals/${r.animalSlug}`}
                    className="hover:text-[#063F2A] hover:underline"
                  >
                    {r.commonName}
                  </Link>
                </h3>
              </div>
              <p className="text-sm text-[#2C3A2F] leading-snug">
                {r.distributionNote}
              </p>
              <div className="flex flex-wrap gap-1.5">
                {r.habitatTags.slice(0, 4).map((t) => (
                  <HabitatTag key={t} tag={t} />
                ))}
              </div>
              <div className="flex flex-wrap items-center gap-2 mt-0.5">
                <FaunaConfidenceBadge confidence={r.confidence} />
                {r.isIntroducedRange && (
                  <span className="text-[11px] text-[#8A958E]">
                    Introduced in places
                  </span>
                )}
                {r.isDomesticContext && (
                  <span className="text-[11px] text-[#8A958E]">
                    Domestic / livestock
                  </span>
                )}
              </div>
              {sources.length > 0 && (
                <p className="text-[11px] text-[#5E6B63] leading-snug mt-0.5">
                  <span className="font-medium text-[#2C3A2F]">Source: </span>
                  {sources.map((s, i) => (
                    <span key={s.url}>
                      <a
                        href={s.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={linkClass}
                      >
                        {s.label.replace(/ —.*$/, "")}
                      </a>
                      {i < sources.length - 1 ? ", " : ""}
                    </span>
                  ))}
                </p>
              )}
            </div>
          </li>
        );
      })}
    </ul>
  );
}
