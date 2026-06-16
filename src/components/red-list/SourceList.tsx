import type { RedListSpeciesRecord } from "@/lib/red-list/types";

interface SourceListProps {
  record: Pick<RedListSpeciesRecord, "sourceUrls" | "iucnUrl" | "commonName">;
  /** Compact inline variant for cards. */
  compact?: boolean;
}

/** Friendly label for a source URL, derived from its host. */
function sourceLabel(url: string): string {
  try {
    const host = new URL(url).hostname.replace(/^www\./, "");
    if (host.includes("animaldiversity")) return "Animal Diversity Web";
    if (host.includes("fisheries.noaa")) return "NOAA Fisheries";
    if (host.includes("fws.gov")) return "U.S. Fish & Wildlife Service";
    if (host.includes("nationalzoo") || host.includes("si.edu"))
      return "Smithsonian's National Zoo";
    if (host.includes("iucnredlist")) return "IUCN Red List";
    if (host.includes("iucn.org")) return "IUCN";
    if (host.includes("xerces")) return "Xerces Society";
    if (host.includes("birdlife")) return "BirdLife International";
    if (host.includes("fishbase")) return "FishBase";
    if (host.includes("amphibiaweb")) return "AmphibiaWeb (UC Berkeley)";
    if (host.includes("zoo.org.au")) return "Zoos Victoria";
    if (host.includes("snowleopard")) return "Snow Leopard Trust";
    if (host.includes("doc.govt.nz")) return "New Zealand DOC";
    return host;
  } catch {
    return "Source";
  }
}

const linkClass =
  "underline decoration-dotted underline-offset-2 hover:text-[#063F2A] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#7BAA35] focus-visible:ring-offset-1 rounded-sm";

/**
 * Renders the authoritative source links for a species record, with the IUCN
 * Red List lookup surfaced first. Source links open in a new tab and carry
 * descriptive labels (no bare "click here").
 */
export default function SourceList({ record, compact }: SourceListProps) {
  const { sourceUrls, iucnUrl, commonName } = record;

  if (compact) {
    return (
      <p className="text-[11px] text-[#5E6B63] leading-snug">
        <span className="font-medium text-[#2C3A2F]">Sources: </span>
        {iucnUrl && (
          <>
            <a
              href={iucnUrl}
              target="_blank"
              rel="noopener noreferrer"
              className={linkClass}
            >
              IUCN Red List
            </a>
            {sourceUrls.length > 0 && ", "}
          </>
        )}
        {sourceUrls.map((url, i) => (
          <span key={url}>
            <a
              href={url}
              target="_blank"
              rel="noopener noreferrer"
              className={linkClass}
            >
              {sourceLabel(url)}
            </a>
            {i < sourceUrls.length - 1 ? ", " : ""}
          </span>
        ))}
      </p>
    );
  }

  return (
    <div className="text-sm text-[#2C3A2F]">
      <p className="font-medium text-[#17211B] mb-1.5">
        Sources for {commonName}
      </p>
      <ul className="space-y-1 list-none">
        {iucnUrl && (
          <li>
            <a
              href={iucnUrl}
              target="_blank"
              rel="noopener noreferrer"
              className={linkClass}
            >
              IUCN Red List — look up {commonName}
            </a>{" "}
            <span className="text-[#8A958E]">(authoritative status)</span>
          </li>
        )}
        {sourceUrls.map((url) => (
          <li key={url}>
            <a
              href={url}
              target="_blank"
              rel="noopener noreferrer"
              className={linkClass}
            >
              {sourceLabel(url)}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}
