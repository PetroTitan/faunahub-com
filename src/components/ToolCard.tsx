import Link from "next/link";

interface ToolCardProps {
  title: string;
  description: string;
  href: string;
  icon?: string;
  badge?: string;
}

export default function ToolCard({
  title,
  description,
  href,
  icon,
  badge,
}: ToolCardProps) {
  return (
    <Link
      href={href}
      className="card p-6 flex flex-col gap-3 hover:shadow-md hover:border-[#c6e8d4] transition-all duration-150 group hover:no-underline"
    >
      <div className="flex items-start justify-between gap-2">
        {icon && (
          <span className="text-3xl" role="img" aria-hidden="true">
            {icon}
          </span>
        )}
        {badge && <span className="tag flex-shrink-0">{badge}</span>}
      </div>
      <div>
        <h3 className="text-base font-semibold text-[#1C2B3A] group-hover:text-[#2A7A4B] transition-colors mb-1">
          {title}
        </h3>
        <p className="text-sm text-[#6B7684] leading-snug">{description}</p>
      </div>
      <span className="text-xs font-medium text-[#2A7A4B] flex items-center gap-1 mt-auto">
        Open tool{" "}
        <span
          aria-hidden="true"
          className="group-hover:translate-x-0.5 transition-transform"
        >
          →
        </span>
      </span>
    </Link>
  );
}
