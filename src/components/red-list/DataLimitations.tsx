import Link from "next/link";
import { RED_LIST_LAST_REVIEW } from "@/lib/red-list/methodology";

interface DataLimitationsProps {
  /** Adds a region-specific caveat about national legal status. */
  regional?: boolean;
  className?: string;
}

/**
 * Standard, calm "data limitations" panel reused across Red List category and
 * region pages. States the educational scope, that status changes, that
 * national status differs from global IUCN status, and where to verify — never
 * alarmist, never a fundraising pitch.
 */
export default function DataLimitations({
  regional,
  className,
}: DataLimitationsProps) {
  return (
    <section
      aria-labelledby="data-limitations-heading"
      className={`border border-[#DDE6DD] rounded-xl bg-[#F7F8F3] p-5 sm:p-6 ${className ?? ""}`}
    >
      <h2
        id="data-limitations-heading"
        className="text-base font-semibold text-[#17211B] mb-3"
      >
        Data limitations
      </h2>
      <ul className="space-y-2 text-sm text-[#2C3A2F] leading-relaxed list-none">
        <li className="flex gap-2">
          <span aria-hidden="true" className="text-[#7BAA35]">
            •
          </span>
          <span>
            These are educational summaries, not the official assessment.
            Conservation status can change as new science and threats emerge.
          </span>
        </li>
        <li className="flex gap-2">
          <span aria-hidden="true" className="text-[#7BAA35]">
            •
          </span>
          <span>
            We show the <strong>global IUCN Red List category</strong>.
            {regional
              ? " A species' national or local legal status can differ from its global category — national Red Books and protected-species laws vary by country."
              : " National and local status can differ from the global category."}
          </span>
        </li>
        <li className="flex gap-2">
          <span aria-hidden="true" className="text-[#7BAA35]">
            •
          </span>
          <span>
            Each record shows a <strong>last-verified date</strong> and a{" "}
            <strong>data-confidence flag</strong> so you can see how current and
            how checked it is.
          </span>
        </li>
        <li className="flex gap-2">
          <span aria-hidden="true" className="text-[#7BAA35]">
            •
          </span>
          <span>
            Always verify the current status on the official{" "}
            <a
              href="https://www.iucnredlist.org/"
              target="_blank"
              rel="noopener noreferrer"
              className="underline decoration-dotted underline-offset-2 hover:text-[#063F2A]"
            >
              IUCN Red List
            </a>{" "}
            and the relevant national wildlife authority. FaunaHub does not
            replace conservation authorities.
          </span>
        </li>
      </ul>
      <p className="mt-3 text-[13px] text-[#5E6B63] flex flex-wrap items-center gap-x-4 gap-y-1">
        <span>
          <span aria-hidden="true">🗓</span> Dataset last reviewed:{" "}
          <time dateTime={RED_LIST_LAST_REVIEW}>{RED_LIST_LAST_REVIEW}</time>
        </span>
        <Link
          href="/endangered-animals/red-list-data-methodology"
          className="font-medium text-[#063F2A] hover:underline"
        >
          Full data methodology →
        </Link>
      </p>
    </section>
  );
}
