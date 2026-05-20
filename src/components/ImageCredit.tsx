import type { AnimalImage } from "@/lib/images/types";

interface ImageCreditProps {
  image: Pick<
    AnimalImage,
    "author" | "license" | "licenseUrl" | "sourceName" | "sourceUrl"
  >;
  /** When true, hide visually but keep in accessibility tree (rare). */
  srOnly?: boolean;
  className?: string;
}

/**
 * Compact image credit line. Satisfies Creative Commons attribution
 * requirements: shows the author, the license (with link when available),
 * and a link back to the source.
 */
export default function ImageCredit({
  image,
  srOnly,
  className,
}: ImageCreditProps) {
  const base = "text-[11px] leading-snug text-[#5E6B63]";
  const cls = srOnly ? "sr-only" : `${base} ${className ?? ""}`.trim();

  return (
    <p className={cls}>
      <span className="font-medium text-[#2C3A2F]">Image:</span>{" "}
      <span>{image.author}</span>
      {", "}
      {image.licenseUrl ? (
        <a
          href={image.licenseUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="underline decoration-dotted underline-offset-2 hover:text-[#063F2A] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#7BAA35] focus-visible:ring-offset-1 rounded-sm"
          aria-label={`${image.license} license — opens in a new tab`}
        >
          {image.license}
        </a>
      ) : (
        <span>{image.license}</span>
      )}
      {", via "}
      <a
        href={image.sourceUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="underline decoration-dotted underline-offset-2 hover:text-[#063F2A] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#7BAA35] focus-visible:ring-offset-1 rounded-sm"
        aria-label={`${image.sourceName} source page — opens in a new tab`}
      >
        {image.sourceName}
      </a>
      .
    </p>
  );
}
