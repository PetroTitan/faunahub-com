import type { Metadata } from "next";
import Link from "next/link";
import RelatedLinks from "@/components/RelatedLinks";
import { buildMetadata } from "@/lib/metadata";
import { breadcrumbSchema } from "@/lib/schema";

export const metadata: Metadata = buildMetadata({
  title: "Pet Bird Care Guides — Species, Housing & Health",
  description:
    "Pet bird care guides covering popular species like parrots, canaries, and cockatiels, plus housing, nutrition, and health basics.",
  path: "/birds",
});

const links = [
  {
    href: "/animal-encyclopedia/birds",
    label: "Wild Bird Species Encyclopedia",
    desc: "Profiles of eagles, owls, parrots in the wild — habitat, ecology, and behavior.",
  },
  {
    href: "/dogs",
    label: "Dog Care Guides",
    desc: "Breed profiles, health advice, and nutrition guides for dog owners.",
  },
  {
    href: "/cats",
    label: "Cat Care Guides",
    desc: "Feline care resources covering health, feeding, and enrichment.",
  },
];

export default function BirdsPage() {
  const breadcrumb = breadcrumbSchema([
    { name: "Home", url: "https://faunahub.com" },
    { name: "Birds", url: "https://faunahub.com/birds" },
  ]);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }}
      />

      <main id="main-content">
        <header className="bg-white border-b border-[#DDE6DD] py-10 sm:py-14">
          <div className="container-content">
            <nav aria-label="Breadcrumb" className="text-sm text-[#8A958E] mb-4 flex gap-2">
              <Link href="/" className="hover:text-[#063F2A] hover:no-underline">Home</Link>
              <span aria-hidden="true">/</span>
              <span className="text-[#17211B] font-medium" aria-current="page">Birds</span>
            </nav>
            <span className="tag mb-3 inline-block">Pet Care</span>
            <h1 className="text-3xl sm:text-4xl font-bold text-[#17211B] mb-3">
              Pet Bird Care Guides
            </h1>
            <p className="text-base text-[#2C3A2F] leading-relaxed max-w-2xl">
              Pet birds range from low-maintenance canaries and finches to highly intelligent parrots
              that require extensive mental stimulation and social interaction. Matching a species to
              your lifestyle and experience level is the single most important step before bringing a
              bird home.
            </p>
          </div>
        </header>

        <div className="container-content py-10">
          <section aria-labelledby="about-heading">
            <h2 id="about-heading" className="section-title">About This Section</h2>
            <p className="section-subtitle max-w-2xl">
              Pet bird care varies enormously by species — a cockatiel has different housing,
              dietary, and socialization needs than a large macaw. Guides on this site cover housing
              requirements, safe and unsafe foods, common illnesses, and species-specific behavioral
              traits to help owners provide informed care.
            </p>

            <div className="grid sm:grid-cols-2 gap-4 mt-8">
              {links.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="card p-5 hover:shadow-md hover:border-[#CFE0A8] transition-all group hover:no-underline"
                >
                  <h3 className="text-sm font-semibold text-[#17211B] group-hover:text-[#063F2A] transition-colors mb-1">
                    {link.label}
                  </h3>
                  <p className="text-xs text-[#5E6B63]">{link.desc}</p>
                </Link>
              ))}
            </div>
          </section>

          <div className="mt-10 grid gap-6 lg:grid-cols-2">
            <RelatedLinks
              title="Planning and care resources for pet birds"
              links={[
                {
                  label: "How much does a pet bird cost?",
                  href: "/birds/how-much-does-a-bird-cost",
                  description: "Cage, vet, and lifespan-cost framework",
                },
                {
                  label: "Pet Cost Calculator",
                  href: "/tools/pet-cost-calculator",
                  description: "Run monthly, annual, and first-year scenarios",
                },
                {
                  label: "Vet care hub",
                  href: "/vet-care",
                  description: "Routine and emergency planning for any pet",
                },
                {
                  label: "When to call an emergency vet",
                  href: "/vet-care/when-to-call-an-emergency-vet",
                  description: "Common warning signs and what to say",
                },
                {
                  label: "Best pets for beginners",
                  href: "/guides/best-pets-for-beginners",
                  description: "Honest pet-choice guide",
                },
                {
                  label: "Best pets for apartments",
                  href: "/guides/best-pets-for-apartments",
                  description: "Apartment-fit considerations across pet categories",
                },
              ]}
            />
            <RelatedLinks
              title="Wildlife & encyclopedia profiles (educational, not pet recommendations)"
              links={[
                {
                  label: "Wild bird encyclopedia",
                  href: "/animal-encyclopedia/birds",
                  description: "Educational profiles — not pet-care guidance",
                },
                {
                  label: "Eagle profile (wildlife)",
                  href: "/animals/eagle",
                  description: "Educational profile of wild eagles",
                },
                {
                  label: "Owl profile (wildlife)",
                  href: "/animals/owl",
                  description: "Educational profile of wild owls",
                },
                {
                  label: "Penguin profile (wildlife)",
                  href: "/animals/penguin",
                  description: "Educational profile of wild penguins",
                },
                {
                  label: "Falcon vs Eagle (wildlife comparison)",
                  href: "/compare/falcon-vs-eagle",
                  description: "Educational comparison of wild raptors",
                },
              ]}
            />
          </div>

          <p className="mt-8 text-sm text-[#5E6B63]">
            Detailed pet bird species guides covering housing, diet, and health are in development.
            The wildlife and encyclopedia profiles linked above are educational resources about
            wild species and are not pet-care or pet-ownership recommendations.
          </p>
        </div>
      </main>
    </>
  );
}
