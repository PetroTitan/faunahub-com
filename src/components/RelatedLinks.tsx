import Link from "next/link";

interface RelatedLink {
  label: string;
  href: string;
  description?: string;
}

interface RelatedLinksProps {
  title?: string;
  links: RelatedLink[];
}

export default function RelatedLinks({
  title = "Related Pages",
  links,
}: RelatedLinksProps) {
  return (
    <aside
      className="bg-[#f4f4f1] rounded-xl p-5 border border-[#E4E8ED]"
      aria-label={title}
    >
      <h3 className="text-sm font-semibold text-[#1C2B3A] uppercase tracking-wider mb-3">
        {title}
      </h3>
      <ul className="space-y-2">
        {links.map((link) => (
          <li key={link.href}>
            <Link
              href={link.href}
              className="text-sm font-medium text-[#2A7A4B] hover:text-[#1E5C38] hover:no-underline flex items-start gap-1.5 group"
            >
              <span
                aria-hidden="true"
                className="text-[#9CA5AF] group-hover:text-[#2A7A4B] transition-colors mt-0.5 flex-shrink-0"
              >
                →
              </span>
              <span>
                <span className="block">{link.label}</span>
                {link.description && (
                  <span className="text-[#9CA5AF] text-xs font-normal">
                    {link.description}
                  </span>
                )}
              </span>
            </Link>
          </li>
        ))}
      </ul>
    </aside>
  );
}
