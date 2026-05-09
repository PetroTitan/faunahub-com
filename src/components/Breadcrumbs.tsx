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
      className="flex items-center gap-1.5 text-sm text-[#5E6B63] flex-wrap py-3"
    >
      <Link
        href="/"
        className="hover:text-[#063F2A] hover:no-underline transition-colors"
      >
        Home
      </Link>
      {items.map((item, index) => (
        <span key={index} className="flex items-center gap-1.5">
          <span aria-hidden="true" className="text-[#8A958E]">
            /
          </span>
          {item.href ? (
            <Link
              href={item.href}
              className="hover:text-[#063F2A] hover:no-underline transition-colors"
            >
              {item.label}
            </Link>
          ) : (
            <span
              className="text-[#17211B] font-medium"
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
