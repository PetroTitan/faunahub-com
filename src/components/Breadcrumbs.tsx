import Link from "next/link";

export interface BreadcrumbItem {
  label: string;
  href?: string;
}

interface BreadcrumbsProps {
  items: BreadcrumbItem[];
}

export default function Breadcrumbs({ items }: BreadcrumbsProps) {
  return (
    <nav
      aria-label="Breadcrumb"
      className="flex items-center gap-1.5 text-sm text-[#6B7684] flex-wrap py-3"
    >
      <Link
        href="/"
        className="hover:text-[#2A7A4B] hover:no-underline transition-colors"
      >
        Home
      </Link>
      {items.map((item, index) => (
        <span key={index} className="flex items-center gap-1.5">
          <span aria-hidden="true" className="text-[#9CA5AF]">
            /
          </span>
          {item.href ? (
            <Link
              href={item.href}
              className="hover:text-[#2A7A4B] hover:no-underline transition-colors"
            >
              {item.label}
            </Link>
          ) : (
            <span
              className="text-[#1C2B3A] font-medium"
              aria-current="page"
            >
              {item.label}
            </span>
          )}
        </span>
      ))}
    </nav>
  );
}
