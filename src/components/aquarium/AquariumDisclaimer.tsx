import { AQUARIUM_DISCLAIMER } from "@/lib/aquarium/data";

interface AquariumDisclaimerProps {
  /** Optional smaller, sidebar-friendly variant */
  compact?: boolean;
}

/**
 * Aquatic-care disclaimer used across the Aquarium Care cluster. Clear but not
 * panic-driven: an amber callout with an explicit heading and icon, so meaning
 * does not depend on colour alone.
 */
export default function AquariumDisclaimer({ compact = false }: AquariumDisclaimerProps) {
  if (compact) {
    return (
      <aside
        role="note"
        aria-label="Aquatic-care reminder"
        className="rounded-xl border border-amber-200 bg-amber-50 p-4 text-sm text-amber-900"
      >
        <p className="font-semibold mb-1 flex items-center gap-2">
          <span aria-hidden="true">⚠</span> Fish problems can worsen fast
        </p>
        <p className="leading-relaxed">
          For severe distress, injury, rapid worsening, mass illness, or
          unexplained deaths, seek qualified aquatic veterinary or specialist
          guidance.
        </p>
      </aside>
    );
  }

  return (
    <aside
      role="note"
      aria-label="Aquatic-care and veterinary disclaimer"
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
            Educational care guide — and when to get help
          </p>
          <p className="text-sm sm:text-base text-amber-900 leading-relaxed">
            {AQUARIUM_DISCLAIMER}
          </p>
        </div>
      </div>
    </aside>
  );
}
