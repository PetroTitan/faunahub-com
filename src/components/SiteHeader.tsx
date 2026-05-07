import Link from "next/link";

const navItems = [
  { label: "Dogs", href: "/dogs" },
  { label: "Cats", href: "/cats" },
  { label: "Encyclopedia", href: "/animal-encyclopedia" },
  { label: "Compare", href: "/compare" },
  { label: "Tools", href: "/tools" },
];

export default function SiteHeader() {
  return (
    <header className="bg-white border-b border-[#E4E8ED] sticky top-0 z-50">
      <div className="container-content">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link
            href="/"
            className="flex items-center gap-2 font-bold text-xl text-[#1C2B3A] hover:no-underline hover:text-[#2A7A4B] transition-colors"
            aria-label="FaunaHub — home"
          >
            <span className="text-[#2A7A4B]" aria-hidden="true">
              ◆
            </span>
            FaunaHub
          </Link>

          {/* Desktop nav */}
          <nav
            aria-label="Main navigation"
            className="hidden md:flex items-center gap-1"
          >
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="px-3 py-2 rounded-md text-sm font-medium text-[#3E4F60] hover:text-[#2A7A4B] hover:bg-[#f0faf4] transition-colors hover:no-underline"
              >
                {item.label}
              </Link>
            ))}
          </nav>

          {/* Mobile nav toggle — functional via CSS checkbox hack for zero-JS */}
          <label
            htmlFor="mobile-menu-toggle"
            className="md:hidden flex items-center justify-center w-10 h-10 rounded-md text-[#3E4F60] hover:bg-[#f4f4f1] cursor-pointer"
            aria-label="Open navigation menu"
          >
            <svg
              width="20"
              height="20"
              viewBox="0 0 20 20"
              fill="currentColor"
              aria-hidden="true"
            >
              <path
                fillRule="evenodd"
                d="M3 5h14a1 1 0 010 2H3a1 1 0 010-2zm0 4h14a1 1 0 010 2H3a1 1 0 010-2zm0 4h14a1 1 0 010 2H3a1 1 0 010-2z"
                clipRule="evenodd"
              />
            </svg>
          </label>
        </div>

        {/* Mobile nav — requires JS toggle in production; here as accessible fallback */}
        <nav
          aria-label="Mobile navigation"
          className="md:hidden border-t border-[#E4E8ED] py-3 hidden"
          id="mobile-nav"
        >
          <ul className="space-y-1">
            {navItems.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className="block px-3 py-2 rounded-md text-sm font-medium text-[#3E4F60] hover:text-[#2A7A4B] hover:bg-[#f0faf4] hover:no-underline"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
}
