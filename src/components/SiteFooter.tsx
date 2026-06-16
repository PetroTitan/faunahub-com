import Link from "next/link";
import Image from "next/image";

const footerLinks: Record<string, { label: string; href: string }[]> = {
  "Pet Care": [
    { label: "Dogs", href: "/dogs" },
    { label: "Cats", href: "/cats" },
    { label: "Puppy Care", href: "/puppy-care" },
    { label: "Kitten Care", href: "/kitten-care" },
    { label: "Small Pets", href: "/small-pets" },
    { label: "Food Safety", href: "/dogs/food" },
    { label: "Pet Nutrition", href: "/pet-nutrition" },
    { label: "Pet Costs", href: "/costs" },
  ],
  "Animal Encyclopedia": [
    { label: "Animal Encyclopedia", href: "/animal-encyclopedia" },
    { label: "Wildlife & Biodiversity", href: "/wildlife" },
    { label: "Endangered Animals", href: "/endangered-animals" },
    { label: "Mammals", href: "/animal-encyclopedia/mammals" },
    { label: "Birds", href: "/animal-encyclopedia/birds" },
    { label: "Reptiles & Amphibians", href: "/animal-encyclopedia/reptiles" },
    { label: "Fish", href: "/animal-encyclopedia/fish" },
    { label: "Marine Animals", href: "/animal-encyclopedia/marine-animals" },
    { label: "Insects & Invertebrates", href: "/animal-encyclopedia/insects" },
  ],
  Tools: [
    { label: "All Tools", href: "/tools" },
    { label: "Pet Age Calculator", href: "/tools/pet-age-calculator" },
    { label: "Pet Life Stage Calculator", href: "/tools/pet-life-stage-calculator" },
    { label: "Pet Cost Calculator", href: "/tools/pet-cost-calculator" },
    { label: "Pet Breed Selector", href: "/tools/pet-breed-selector" },
  ],
  "Planning & Safety": [
    { label: "Pet Safety & Emergencies", href: "/pet-safety" },
    { label: "Pet Insurance", href: "/pet-insurance" },
    { label: "Vet Care", href: "/vet-care" },
    { label: "Pet Budget Checklist", href: "/guides/pet-budget-checklist" },
    { label: "First-Year Pet Costs", href: "/guides/first-year-pet-costs" },
    { label: "Hidden Costs of Pet Ownership", href: "/guides/hidden-costs-of-pet-ownership" },
  ],
  Legal: [
    { label: "About", href: "/about" },
    { label: "Editorial Policy", href: "/editorial-policy" },
    { label: "Image Credits", href: "/image-credits" },
    { label: "Privacy Policy", href: "/privacy-policy" },
    { label: "Cookie Policy", href: "/cookie-policy" },
    { label: "Affiliate Disclosure", href: "/affiliate-disclosure" },
    { label: "Contact", href: "/contact" },
  ],
};

export default function SiteFooter() {
  return (
    <footer className="bg-[#17211B] text-white mt-20 print:hidden print:mt-0">
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

        {/* Link grid — 2 cols on phone, 3 on tablet, 5 on desktop */}
        <nav
          aria-label="Footer navigation"
          className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-x-8 gap-y-10 mb-10"
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
                      className="text-sm text-[#B0BFB7] hover:text-white hover:no-underline transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-[#7BAA35] focus-visible:ring-offset-2 focus-visible:ring-offset-[#17211B] rounded"
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
          <p>© {new Date().getFullYear()} FaunaHub. All rights reserved.</p>
          <p className="max-w-md text-right text-[11px] leading-relaxed">
            FaunaHub is an independent educational platform. Content is not a
            substitute for professional veterinary advice. Always consult a
            licensed veterinarian for your pet&apos;s health.
          </p>
        </div>
      </div>
    </footer>
  );
}
