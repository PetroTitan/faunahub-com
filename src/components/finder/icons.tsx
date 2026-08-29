/**
 * Inline icons for the Animal Finder.
 *
 * Inline SVG rather than an icon package, matching the search UI: the site has
 * no icon dependency and adding one for three glyphs would cost more than the
 * glyphs. Each is `aria-hidden` — the accessible name always comes from the
 * control that owns the icon, never from the icon itself.
 */

interface IconProps {
  size?: number;
  className?: string;
}

function base(size: number, className?: string) {
  return {
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 2.2,
    strokeLinecap: "round" as const,
    strokeLinejoin: "round" as const,
    "aria-hidden": true,
    focusable: "false" as const,
    className,
  };
}

export function FilterIcon({ size = 16, className }: IconProps) {
  return (
    <svg {...base(size, className)}>
      <path d="M3 5h18M6 12h12M10 19h4" />
    </svg>
  );
}

export function CloseIcon({ size = 16, className }: IconProps) {
  return (
    <svg {...base(size, className)}>
      <path d="M6 6l12 12M18 6 6 18" />
    </svg>
  );
}

export function SearchIcon({ size = 16, className }: IconProps) {
  return (
    <svg {...base(size, className)}>
      <circle cx="11" cy="11" r="7" />
      <path d="m20 20-3.5-3.5" />
    </svg>
  );
}

/** A tick, drawn inside the checkbox square. Never the only signal: the box
 * also changes border and background, and the control is a real checkbox with
 * a real label, so the state is announced regardless of colour. */
export function CheckIcon({ size = 12, className }: IconProps) {
  return (
    <svg {...base(size, className)} strokeWidth={3}>
      <path d="m5 12 5 5L19 7" />
    </svg>
  );
}
