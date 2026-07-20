/**
 * Inline, dependency-free SVG glyphs for the ecosystem UI.
 *
 * All icons are decorative (`aria-hidden`); every place they appear also
 * carries a visible text label, so no meaning is conveyed by icon alone.
 * Icons inherit `currentColor` so they follow the design system's text colors.
 */
import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & { size?: number };

function base({ size = 16, ...props }: IconProps) {
  return {
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: "none",
    "aria-hidden": true,
    focusable: false,
    ...props,
  } as SVGProps<SVGSVGElement>;
}

/** Generic "opens in a new tab" indicator. */
export function ExternalLinkIcon(props: IconProps) {
  return (
    <svg {...base({ size: 14, ...props })}>
      <path
        d="M14 4h6m0 0v6m0-6L10 14"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M18 14v4a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h4"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function ChevronDownIcon(props: IconProps) {
  return (
    <svg {...base(props)}>
      <path
        d="m6 9 6 6 6-6"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function CloseIcon(props: IconProps) {
  return (
    <svg {...base(props)}>
      <path
        d="M6 6l12 12M18 6 6 18"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function GridIcon(props: IconProps) {
  return (
    <svg {...base(props)}>
      <rect x="3" y="3" width="7" height="7" rx="1.5" fill="currentColor" />
      <rect x="14" y="3" width="7" height="7" rx="1.5" fill="currentColor" />
      <rect x="3" y="14" width="7" height="7" rx="1.5" fill="currentColor" />
      <rect x="14" y="14" width="7" height="7" rx="1.5" fill="currentColor" />
    </svg>
  );
}

/** Simple Apple glyph — a platform indicator, always paired with a text label. */
export function AppleIcon(props: IconProps) {
  return (
    <svg {...base(props)}>
      <path
        d="M16.4 12.9c0-2 1.6-3 1.7-3.1-.9-1.4-2.4-1.5-2.9-1.6-1.2-.1-2.4.7-3 .7-.6 0-1.6-.7-2.6-.7-1.3 0-2.6.8-3.3 2-1.4 2.5-.4 6.1 1 8.1.7 1 1.4 2.1 2.5 2 1-.04 1.3-.65 2.5-.65 1.2 0 1.5.65 2.5.63 1-.02 1.7-1 2.4-2 .5-.7.8-1.4 1-2.2-2.3-.9-2.3-3.5-1.3-3.5Z"
        fill="currentColor"
      />
      <path
        d="M14.6 6.9c.5-.7.9-1.6.8-2.5-.8 0-1.7.5-2.3 1.2-.5.6-.9 1.5-.8 2.4.9.05 1.7-.45 2.3-1.1Z"
        fill="currentColor"
      />
    </svg>
  );
}

/** Simple Play-triangle glyph — paired with a "Google Play" text label. */
export function GooglePlayIcon(props: IconProps) {
  return (
    <svg {...base(props)}>
      <path
        d="M4.5 3.3c-.3.2-.5.6-.5 1.1v15.2c0 .5.2.9.5 1.1l8.2-8.7L4.5 3.3Z"
        fill="currentColor"
      />
      <path
        d="m15.7 9.2-2.9-1.7-2.5 2.7 2.5 2.6 3-1.7c.8-.5.8-1.5-.1-1.9Z"
        fill="currentColor"
        opacity="0.75"
      />
      <path
        d="m5 3.1 7.8 4.4 1.9-2L6.3 2.6c-.5-.3-1-.2-1.3.5Z"
        fill="currentColor"
        opacity="0.55"
      />
      <path
        d="M12.8 12.9 5 17.3c.3.7.8.8 1.3.5l8.4-4.8-1.9-2.1Z"
        fill="currentColor"
        opacity="0.9"
      />
    </svg>
  );
}

export function GlobeIcon(props: IconProps) {
  return (
    <svg {...base(props)}>
      <circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="1.7" />
      <path
        d="M3 12h18M12 3c2.5 2.5 2.5 15.5 0 18M12 3c-2.5 2.5-2.5 15.5 0 18"
        stroke="currentColor"
        strokeWidth="1.7"
        strokeLinecap="round"
      />
    </svg>
  );
}
