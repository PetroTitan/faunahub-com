import Link from "next/link";

interface HeroSectionProps {
  title: string;
  subtitle?: string;
  description?: string;
  ctaLabel?: string;
  ctaHref?: string;
  secondaryCtaLabel?: string;
  secondaryCtaHref?: string;
  tag?: string;
  variant?: "home" | "hub";
}

export default function HeroSection({
  title,
  subtitle,
  description,
  ctaLabel,
  ctaHref,
  secondaryCtaLabel,
  secondaryCtaHref,
  tag,
  variant = "hub",
}: HeroSectionProps) {
  const isHome = variant === "home";

  return (
    <section
      className={`${
        isHome
          ? "py-16 sm:py-24 bg-gradient-to-b from-[#f0faf4] to-[#FAFAF8]"
          : "py-12 sm:py-16 bg-white border-b border-[#E4E8ED]"
      }`}
    >
      <div className="container-content">
        <div className={isHome ? "max-w-2xl" : "max-w-3xl"}>
          {tag && (
            <span className="tag mb-4 inline-block">{tag}</span>
          )}
          <h1
            className={`font-bold text-[#1C2B3A] leading-tight mb-4 ${
              isHome
                ? "text-4xl sm:text-5xl lg:text-6xl"
                : "text-3xl sm:text-4xl"
            }`}
          >
            {title}
          </h1>
          {subtitle && (
            <p
              className={`font-medium text-[#2A7A4B] mb-3 ${
                isHome ? "text-lg sm:text-xl" : "text-base sm:text-lg"
              }`}
            >
              {subtitle}
            </p>
          )}
          {description && (
            <p
              className={`text-[#3E4F60] leading-relaxed ${
                isHome ? "text-lg sm:text-xl mb-8" : "text-base sm:text-lg mb-6"
              }`}
            >
              {description}
            </p>
          )}
          {(ctaLabel || secondaryCtaLabel) && (
            <div className="flex flex-wrap gap-3">
              {ctaLabel && ctaHref && (
                <Link href={ctaHref} className="btn-primary">
                  {ctaLabel}
                </Link>
              )}
              {secondaryCtaLabel && secondaryCtaHref && (
                <Link href={secondaryCtaHref} className="btn-secondary">
                  {secondaryCtaLabel}
                </Link>
              )}
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
