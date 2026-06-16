import Link from "next/link";
import { RED_LIST_CORE_DISCLAIMER } from "@/lib/red-list/methodology";

interface MethodologyNoteProps {
  /** When set, shows the record/page last-verified date. */
  lastVerified?: string;
  /** Extra context sentence appended to the standard disclaimer. */
  extra?: string;
  className?: string;
}

/**
 * The shared, calm conservation-data disclaimer. Reused across the hub,
 * category, and profile pages so the educational, non-authoritative posture is
 * always visible — deliberately neutral, never alarmist.
 */
export default function MethodologyNote({
  lastVerified,
  extra,
  className,
}: MethodologyNoteProps) {
  return (
    <aside
      role="note"
      aria-label="How to read this conservation data"
      className={`border border-[#DDE6DD] rounded-xl bg-[#EFF1EB] p-4 sm:p-5 text-sm text-[#2C3A2F] leading-relaxed ${className ?? ""}`}
    >
      <p className="font-semibold text-[#17211B] mb-1.5">
        How to read this conservation data
      </p>
      <p>{RED_LIST_CORE_DISCLAIMER}</p>
      {extra && <p className="mt-2">{extra}</p>}
      <p className="mt-3 flex flex-wrap items-center gap-x-4 gap-y-1 text-[13px] text-[#5E6B63]">
        {lastVerified && (
          <span>
            <span aria-hidden="true">🗓</span> Last verified:{" "}
            <time dateTime={lastVerified}>{lastVerified}</time>
          </span>
        )}
        <Link
          href="/endangered-animals/red-list-data-methodology"
          className="font-medium text-[#063F2A] hover:underline"
        >
          Read the full data methodology →
        </Link>
      </p>
    </aside>
  );
}
