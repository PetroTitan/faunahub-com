import { PET_NUTRITION_DISCLAIMER } from "@/lib/pet-nutrition/data";

interface NutritionDisclaimerProps {
  /** Optional smaller, sidebar-friendly variant */
  compact?: boolean;
}

/**
 * Calm, non-medicalized nutrition/veterinary disclaimer used across the Pet
 * Nutrition cluster. Visible but not panic-driven: a soft brand-green
 * treatment with an explicit heading and icon, so meaning does not depend on
 * colour alone.
 */
export default function NutritionDisclaimer({ compact = false }: NutritionDisclaimerProps) {
  if (compact) {
    return (
      <aside
        role="note"
        aria-label="Nutrition disclaimer"
        className="rounded-xl border border-[#CFE0A8] bg-[#F7FAF0] p-4 text-sm text-[#2C3A2F]"
      >
        <p className="font-semibold mb-1 flex items-center gap-2 text-[#063F2A]">
          <span aria-hidden="true">🌿</span> Educational, not a diet prescription
        </p>
        <p className="leading-relaxed">
          Feeding needs vary by pet. For puppies, kittens, seniors, pregnancy,
          weight concerns, or any health condition, consult a licensed
          veterinarian.
        </p>
      </aside>
    );
  }

  return (
    <aside
      role="note"
      aria-label="Nutrition and veterinary disclaimer"
      className="not-prose rounded-2xl border border-[#CFE0A8] bg-[#F7FAF0] p-5 sm:p-6"
    >
      <div className="flex gap-3">
        <span
          aria-hidden="true"
          className="flex-shrink-0 text-[#0F5A3A] text-lg leading-none mt-0.5"
        >
          🌿
        </span>
        <div>
          <p className="text-sm font-semibold uppercase tracking-wider text-[#063F2A] mb-1.5">
            Educational nutrition guidance
          </p>
          <p className="text-sm sm:text-base text-[#2C3A2F] leading-relaxed">
            {PET_NUTRITION_DISCLAIMER}
          </p>
        </div>
      </div>
    </aside>
  );
}
