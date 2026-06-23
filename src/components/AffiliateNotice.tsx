import Link from "next/link";

interface AffiliateNoticeProps {
  /** Optional extra classes for spacing in a given layout. */
  className?: string;
  /**
   * "block" (default) renders a bordered callout for placing directly above a
   * group of product links. "inline" renders a single compact sentence for use
   * right next to an individual link.
   */
  variant?: "block" | "inline";
}

/**
 * Reusable, FTC-style inline affiliate disclosure.
 *
 * Place this CLEAR AND CONSPICUOUS notice immediately above (or next to) any
 * affiliate / commercial links on a page — a footer disclosure alone is not
 * sufficient under FTC guidance. Inert until a page actually contains affiliate
 * links; it only states the relationship and links to the full disclosure.
 *
 * Usage:
 *   <AffiliateNotice />                       // block callout above a product list
 *   <AffiliateNotice variant="inline" />      // compact sentence beside one link
 */
export default function AffiliateNotice({ className = "", variant = "block" }: AffiliateNoticeProps) {
  if (variant === "inline") {
    return (
      <span className={`text-xs text-[#8A958E] ${className}`}>
        (Affiliate link — we may earn a commission at no extra cost to you.{" "}
        <Link href="/affiliate-disclosure" className="underline hover:text-[#063F2A]">
          Disclosure
        </Link>
        .)
      </span>
    );
  }

  return (
    <aside
      className={`rounded-lg border border-[#DDE6DD] bg-[#F4F8F4] px-4 py-3 text-sm text-[#2C3A2F] ${className}`}
      aria-label="Affiliate disclosure"
    >
      <span aria-hidden="true" className="mr-1.5">
        ℹ️
      </span>
      Some links below are affiliate links. If you buy through them, FaunaHub may earn a small
      commission <strong>at no additional cost to you</strong>. This never changes our
      recommendations — see our{" "}
      <Link href="/affiliate-disclosure" className="font-medium underline hover:text-[#063F2A]">
        Affiliate Disclosure
      </Link>{" "}
      and{" "}
      <Link href="/editorial-policy" className="font-medium underline hover:text-[#063F2A]">
        Editorial Policy
      </Link>
      .
    </aside>
  );
}
