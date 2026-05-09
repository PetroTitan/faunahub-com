import Link from "next/link";
import Image from "next/image";

const footerLinks = {
  "Pet Care": [
    { label: "Dogs", href: "/dogs" },
    { label: "Cats", href: "/cats" },
    { label: "Small Pets", href: "/small-pets" },
    { label: "Birds", href: "/birds" },
    { label: "Fish", href: "/fish" },
    { label: "Reptiles", href: "/reptiles" },
  ],
  Encyclopedia: [
    { label: "Animal Encyclopedia", href: "/animal-encyclopedia" },
    { label: "Mammals", href: "/animal-encyclopedia/mammals" },
    { label: "Birds", href: "/animal-encyclopedia/birds" },
    { label: "Marine Animals", href: "/animal-encyclopedia/marine-animals" },
  ],
  Tools: [
    { label: "All Tools", href: "/tools" },
    { label: "Pet Cost Calculator", href: "/tools/pet-cost-calculator" },
    { label: "Dog Age Calculator", href: "/tools/dog-age-calculator" },
    { label: "Cat Age Calculator", href: "/tools/cat-age-calculator" },
  ],
  Legal: [
    { label: "About", href: "/about" },
    { label: "Editorial Policy", href: "/editorial-policy" },
    { label: "Privacy Policy", href: "/privacy-policy" },
    { label: "Cookie Policy", href: "/cookie-policy" },
    { label: "Affiliate Disclosure", href: "/affiliate-disclosure" },
    { label: "Contact", href: "/contact" },
  ],
};

export default function SiteFooter() {
  return (
    <footer className="bg-[#17211B] text-white mt-20">
      <div className="container-content py-12">
        {/* Brand */}
        <div className="mb-10 flex items-start gap-4">
          <Link
            href="/"
            className="hover:no-underline shrink-0"
            aria-label="FaunaHub — home"
          >
            <Image
              src="/brand/faunahub-logo-mark.png"
              alt="FaunaHub"
              width={500}
              height={500}
              className="h-12 w-12 rounded-md bg-white p-1"
            />
          </Link>
          <div>
            <p className="text-base font-semibold text-white">FaunaHub</p>
            <p className="mt-1 text-sm text-[#B0BFB7] max-w-sm">
              Pet care, animal facts, and wildlife intelligence.
            </p>
          </div>
        </div>

        {/* Link grid */}
        <nav
          aria-label="Footer navigation"
          className="grid grid-cols-2 sm:grid-cols-4 gap-8 mb-10"
        >
          {Object.entries(footerLinks).map(([section, links]) => (
            <div key={section}>
              <h3 className="text-xs font-semibold uppercase tracking-wider text-[#8A958E] mb-3">
                {section}
              </h3>
              <ul className="space-y-2">
                {links.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-sm text-[#B0BFB7] hover:text-white hover:no-underline transition-colors"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </nav>

        {/* Bottom bar */}
        <div className="pt-6 border-t border-[#2E3F50] flex flex-col sm:flex-row justify-between items-start sm:items-center gap-3 text-xs text-[#5E6B63]">
          <p>
            © {new Date().getFullYear()} FaunaHub. All rights reserved.
          </p>
          <p className="max-w-md text-right text-[11px]">
            FaunaHub is an independent educational platform. Content is not a
            substitute for professional veterinary advice. Always consult a
            licensed veterinarian for your pet&apos;s health.
          </p>
        </div>
      </div>
    </footer>
  );
}
