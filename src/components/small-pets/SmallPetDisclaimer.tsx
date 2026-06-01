import { SMALL_PET_DISCLAIMER } from "@/lib/small-pets/data";

interface SmallPetDisclaimerProps {
  /** Optional smaller, sidebar-friendly variant */
  compact?: boolean;
}

/**
 * Small-pet veterinary disclaimer used across the Small Pets Care cluster.
 * Clear but not panic-driven: an amber callout (small pets can become ill
 * quickly) with an explicit heading and icon, so meaning does not depend on
 * colour alone.
 */
export default function SmallPetDisclaimer({ compact = false }: SmallPetDisclaimerProps) {
  if (compact) {
    return (
      <aside
        role="note"
        aria-label="Small-pet veterinary reminder"
        className="rounded-xl border border-amber-200 bg-amber-50 p-4 text-sm text-amber-900"
      >
        <p className="font-semibold mb-1 flex items-center gap-2">
          <span aria-hidden="true">⚠</span> Small pets can change fast
        </p>
        <p className="leading-relaxed">
          For refusal to eat, breathing difficulty, severe diarrhoea, injury,
          collapse, or suspected poisoning, contact a qualified veterinarian or
          emergency clinic immediately.
        </p>
      </aside>
    );
  }

  return (
    <aside
      role="note"
      aria-label="Small-pet and veterinary disclaimer"
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
            Educational care guide — and when to act
          </p>
          <p className="text-sm sm:text-base text-amber-900 leading-relaxed">
            {SMALL_PET_DISCLAIMER}
          </p>
        </div>
      </div>
    </aside>
  );
}
