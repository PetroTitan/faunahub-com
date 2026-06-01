import { EARLY_CARE_DISCLAIMER } from "@/lib/puppy-kitten/data";

interface EarlyCareDisclaimerProps {
  /** Optional smaller, sidebar-friendly variant */
  compact?: boolean;
}

/**
 * Early-care veterinary disclaimer used across the Puppy & Kitten Care
 * cluster. Warm but clear: an amber callout (puppies and kittens can become
 * ill quickly) with an explicit heading and icon, so meaning does not depend
 * on colour alone. Not panic-driven.
 */
export default function EarlyCareDisclaimer({ compact = false }: EarlyCareDisclaimerProps) {
  if (compact) {
    return (
      <aside
        role="note"
        aria-label="Early-care veterinary reminder"
        className="rounded-xl border border-amber-200 bg-amber-50 p-4 text-sm text-amber-900"
      >
        <p className="font-semibold mb-1 flex items-center gap-2">
          <span aria-hidden="true">⚠</span> Young animals can change fast
        </p>
        <p className="leading-relaxed">
          For vomiting, diarrhoea, refusal to eat, breathing trouble, collapse,
          seizures, injury, or suspected poisoning, contact a licensed
          veterinarian or emergency clinic immediately.
        </p>
      </aside>
    );
  }

  return (
    <aside
      role="note"
      aria-label="Early-care and veterinary disclaimer"
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
            Educational guide — and when to act
          </p>
          <p className="text-sm sm:text-base text-amber-900 leading-relaxed">
            {EARLY_CARE_DISCLAIMER}
          </p>
        </div>
      </div>
    </aside>
  );
}
