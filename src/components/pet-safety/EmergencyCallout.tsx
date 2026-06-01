import { PET_SAFETY_EMERGENCY_DISCLAIMER } from "@/lib/pet-safety/data";

interface EmergencyCalloutProps {
  /** Optional smaller, sidebar-friendly variant */
  compact?: boolean;
}

/**
 * Prominent-but-calm emergency notice used across the Pet Safety cluster.
 * Not color-only: it carries an explicit heading and icon plus the full
 * text, so the meaning does not depend on the amber styling alone.
 */
export default function EmergencyCallout({ compact = false }: EmergencyCalloutProps) {
  if (compact) {
    return (
      <aside
        role="note"
        aria-label="Emergency reminder"
        className="rounded-xl border border-amber-200 bg-amber-50 p-4 text-sm text-amber-900"
      >
        <p className="font-semibold mb-1 flex items-center gap-2">
          <span aria-hidden="true">⚠</span> In an emergency
        </p>
        <p className="leading-relaxed">
          If your pet may be poisoned, collapsed, struggling to breathe,
          bleeding heavily, seizing, unable to urinate, in severe pain, or
          rapidly worsening, contact a licensed veterinarian or emergency
          animal clinic immediately.
        </p>
      </aside>
    );
  }

  return (
    <aside
      role="note"
      aria-label="Emergency and veterinary disclaimer"
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
            If this looks like an emergency
          </p>
          <p className="text-sm sm:text-base text-amber-900 leading-relaxed">
            {PET_SAFETY_EMERGENCY_DISCLAIMER}
          </p>
        </div>
      </div>
    </aside>
  );
}
