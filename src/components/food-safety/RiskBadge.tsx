import type {
  RiskLevel,
  SafetyClassification,
} from "@/lib/food-safety/data";

const SAFETY_LABEL: Record<SafetyClassification, string> = {
  "usually-safe": "Usually safe in plain small amounts",
  depends: "Depends — caution",
  "usually-unsafe": "Usually unsafe",
};

const SAFETY_SHORT_LABEL: Record<SafetyClassification, string> = {
  "usually-safe": "Usually safe",
  depends: "Depends / caution",
  "usually-unsafe": "Usually unsafe",
};

const SAFETY_STYLES: Record<SafetyClassification, string> = {
  "usually-safe":
    "bg-emerald-50 border-emerald-200 text-emerald-800",
  depends:
    "bg-amber-50 border-amber-200 text-amber-800",
  "usually-unsafe":
    "bg-red-50 border-red-200 text-red-800",
};

const SAFETY_ICON: Record<SafetyClassification, string> = {
  "usually-safe": "●",
  depends: "▲",
  "usually-unsafe": "■",
};

const RISK_LABEL: Record<RiskLevel, string> = {
  low: "Low risk",
  moderate: "Moderate risk",
  high: "High risk",
};

const RISK_STYLES: Record<RiskLevel, string> = {
  low: "bg-emerald-100 text-emerald-900 border-emerald-200",
  moderate: "bg-amber-100 text-amber-900 border-amber-200",
  high: "bg-red-100 text-red-900 border-red-200",
};

interface SafetyBadgeProps {
  classification: SafetyClassification;
  size?: "sm" | "md";
}

export function SafetyBadge({ classification, size = "md" }: SafetyBadgeProps) {
  const label =
    size === "sm"
      ? SAFETY_SHORT_LABEL[classification]
      : SAFETY_LABEL[classification];
  const padding = size === "sm" ? "px-2.5 py-1" : "px-3 py-1.5";
  const text = size === "sm" ? "text-xs" : "text-sm";
  return (
    <span
      className={`inline-flex items-center gap-1.5 ${padding} rounded-full border ${text} font-semibold ${SAFETY_STYLES[classification]}`}
    >
      <span aria-hidden="true" className="leading-none">
        {SAFETY_ICON[classification]}
      </span>
      <span>{label}</span>
    </span>
  );
}

interface RiskLevelBadgeProps {
  level: RiskLevel;
  size?: "sm" | "md";
}

export function RiskLevelBadge({ level, size = "md" }: RiskLevelBadgeProps) {
  const padding = size === "sm" ? "px-2.5 py-1" : "px-3 py-1.5";
  const text = size === "sm" ? "text-xs" : "text-sm";
  return (
    <span
      className={`inline-flex items-center gap-1.5 ${padding} rounded-full border ${text} font-semibold ${RISK_STYLES[level]}`}
      aria-label={`Risk level: ${level}`}
    >
      <span aria-hidden="true">⚑</span>
      {RISK_LABEL[level]}
    </span>
  );
}

export {
  SAFETY_LABEL,
  SAFETY_SHORT_LABEL,
  SAFETY_STYLES,
  RISK_LABEL,
  RISK_STYLES,
};
