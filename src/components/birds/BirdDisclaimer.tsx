import { BIRD_DISCLAIMER } from "@/lib/birds/guide-types";

interface BirdDisclaimerProps {
  /** Optional smaller, sidebar-friendly variant */
  compact?: boolean;
}

/**
 * Shared bird/wildlife disclaimer for the Birdwatching and Bird Care clusters.
 * Clear but not panic-driven: an amber callout with an explicit heading and
 * icon, so meaning does not depend on colour alone.
 */
export default function BirdDisclaimer({ compact = false }: BirdDisclaimerProps) {
  if (compact) {
    return (
      <aside
        role="note"
        aria-label="Bird and wildlife reminder"
        className="rounded-xl border border-amber-200 bg-amber-50 p-4 text-sm text-amber-900"
      >
        <p className="font-semibold mb-1 flex items-center gap-2">
          <span aria-hidden="true">⚠</span> Do not handle wild birds
        </p>
        <p className="leading-relaxed">
          For injured, sick, nesting, or protected wild birds, contact a
          licensed wildlife rehabilitator or local authority. For a pet bird in
          distress, contact an avian veterinarian immediately.
        </p>
      </aside>
    );
  }

  return (
    <aside
      role="note"
      aria-label="Bird, wildlife, and veterinary disclaimer"
      className="not-prose rounded-2xl border border-amber-200 bg-amber-50 p-5 sm:p-6"
    >
      <div className="flex gap-3">
        <span
          aria-hidden="true"
          className="flex-shrink-0 text-amber-600 text-lg leading-none mt-0.5"
        >
          ⚠
        </span>
        <div>
          <p className="text-sm font-semibold uppercase tracking-wider text-amber-800 mb-1.5">
            Educational guide — and when to get qualified help
          </p>
          <p className="text-sm sm:text-base text-amber-900 leading-relaxed">
            {BIRD_DISCLAIMER}
          </p>
        </div>
      </div>
    </aside>
  );
}
