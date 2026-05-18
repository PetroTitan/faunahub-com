import Link from "next/link";
import Image from "next/image";

const navItems = [
  { label: "Dogs", href: "/dogs" },
  { label: "Cats", href: "/cats" },
  { label: "Animals", href: "/animal-encyclopedia" },
  { label: "Guides", href: "/guides" },
  { label: "Tools", href: "/tools" },
];

// On small screens we show a tighter set; the rest are reachable from
// homepage hero buttons, hub pages, and the footer.
const compactNavItems = [
  { label: "Dogs", href: "/dogs" },
  { label: "Cats", href: "/cats" },
  { label: "Animals", href: "/animal-encyclopedia" },
  { label: "Tools", href: "/tools" },
];

export default function SiteHeader() {
  return (
    <header className="bg-white border-b border-[#DDE6DD] sticky top-0 z-50">
      <div className="container-content">
        <div className="flex items-center justify-between h-16 sm:h-[68px]">
          {/* Logo */}
          <Link
            href="/"
            className="flex items-center hover:no-underline"
            aria-label="FaunaHub — home"
          >
            {/* Compact mark for the smallest screens */}
            <Image
              src="/brand/faunahub-logo-mark.png"
              alt="FaunaHub"
              width={500}
              height={500}
              priority
              className="h-10 w-10 sm:hidden"
            />
            {/* Full horizontal logo for sm and up */}
            <Image
              src="/brand/faunahub-logo-horizontal.png"
              alt="FaunaHub — Pet Care, Animal Facts & Wildlife Intelligence"
              width={1600}
              height={900}
              priority
              className="hidden sm:block h-11 w-auto"
            />
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
                className="px-3 py-2 rounded-md text-sm font-medium text-[#2C3A2F] hover:text-[#063F2A] hover:bg-[#EFF4E0] transition-colors hover:no-underline focus:outline-none focus-visible:ring-2 focus-visible:ring-[#063F2A] focus-visible:ring-offset-2"
              >
                {item.label}
              </Link>
            ))}
          </nav>

          {/* Compact nav for small screens */}
          <nav
            aria-label="Compact navigation"
            className="md:hidden flex items-center gap-0.5 -mr-2"
          >
            {compactNavItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="px-2 py-2 rounded-md text-xs font-medium text-[#2C3A2F] hover:text-[#063F2A] hover:no-underline focus:outline-none focus-visible:ring-2 focus-visible:ring-[#063F2A] focus-visible:ring-offset-2"
              >
                {item.label}
              </Link>
            ))}
          </nav>
        </div>
      </div>
    </header>
  );
}
