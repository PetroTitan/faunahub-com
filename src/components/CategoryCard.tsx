import Link from "next/link";

export interface CategoryCardProps {
  title: string;
  description: string;
  href: string;
  icon?: string;
  count?: string;
}

export default function CategoryCard({
  title,
  description,
  href,
  icon,
  count,
}: CategoryCardProps) {
  return (
    <Link
      href={href}
      className="card p-6 flex flex-col gap-3 hover:shadow-md hover:border-[#c6e8d4] transition-all duration-150 group hover:no-underline"
    >
      {icon && (
        <span className="text-3xl" role="img" aria-hidden="true">
          {icon}
        </span>
      )}
      <div>
        <h3 className="text-base font-semibold text-[#1C2B3A] group-hover:text-[#2A7A4B] transition-colors mb-1">
          {title}
        </h3>
        <p className="text-sm text-[#6B7684] leading-snug">{description}</p>
      </div>
      {count && (
        <span className="text-xs text-[#9CA5AF] mt-auto">{count}</span>
      )}
      <span className="text-xs font-medium text-[#2A7A4B] flex items-center gap-1 mt-1">
        Explore{" "}
        <span aria-hidden="true" className="group-hover:translate-x-0.5 transition-transform">
          →
        </span>
      </span>
    </Link>
  );
}
