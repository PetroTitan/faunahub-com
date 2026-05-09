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
      className="bg-[#EFF1EB] rounded-xl p-5 border border-[#DDE6DD]"
      aria-label={title}
    >
      <h3 className="text-sm font-semibold text-[#17211B] uppercase tracking-wider mb-3">
        {title}
      </h3>
      <ul className="space-y-2">
        {links.map((link) => (
          <li key={link.href}>
            <Link
              href={link.href}
              className="text-sm font-medium text-[#063F2A] hover:text-[#0F5A3A] hover:no-underline flex items-start gap-1.5 group"
            >
              <span
                aria-hidden="true"
                className="text-[#8A958E] group-hover:text-[#063F2A] transition-colors mt-0.5 flex-shrink-0"
              >
                →
              </span>
              <span>
                <span className="block">{link.label}</span>
                {link.description && (
                  <span className="text-[#8A958E] text-xs font-normal">
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
