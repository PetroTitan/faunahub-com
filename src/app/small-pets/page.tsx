import type { Metadata } from "next";
import Link from "next/link";
import RelatedLinks from "@/components/RelatedLinks";
import { buildMetadata } from "@/lib/metadata";
import { breadcrumbSchema } from "@/lib/schema";

export const metadata: Metadata = buildMetadata({
  title: "Small Pet Care Guides — Rabbits, Hamsters, Guinea Pigs & More",
  description:
    "Practical care guides for small companion animals including rabbits, hamsters, guinea pigs, gerbils, and other small pets.",
  path: "/small-pets",
});

const careHubLinks = [
  {
    href: "/dogs",
    label: "Dog Care Guides",
    desc: "Breeds, health, nutrition, and behavior guides for dog owners.",
  },
  {
    href: "/cats",
    label: "Cat Care Guides",
    desc: "Feline care resources covering health, feeding, and behavior.",
  },
  {
    href: "/birds",
    label: "Pet Bird Care Guides",
    desc: "Species guides and care basics for parrots, canaries, and cockatiels.",
  },
  {
    href: "/fish",
    label: "Pet Fish & Aquarium Guides",
    desc: "Aquarium setup, freshwater and saltwater species profiles, and fishkeeping basics.",
  },
];

export default function SmallPetsPage() {
  const breadcrumb = breadcrumbSchema([
    { name: "Home", url: "https://faunahub.com" },
    { name: "Small Pets", url: "https://faunahub.com/small-pets" },
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
              <span className="text-[#17211B] font-medium" aria-current="page">Small Pets</span>
            </nav>
            <span className="tag mb-3 inline-block">Pet Care</span>
            <h1 className="text-3xl sm:text-4xl font-bold text-[#17211B] mb-3">
              Small Pet Care Guides
            </h1>
            <p className="text-base text-[#2C3A2F] leading-relaxed max-w-2xl">
              Small companion animals like rabbits, guinea pigs, hamsters, and gerbils can be deeply
              rewarding pets, but each species has distinct habitat, dietary, and social requirements.
              Understanding their specific needs helps ensure they live healthy, enriched lives in
              your care.
            </p>
          </div>
        </header>

        <div className="container-content py-10">
          <section aria-labelledby="about-heading">
            <h2 id="about-heading" className="section-title">About This Section</h2>
            <p className="section-subtitle max-w-2xl">
              Small pets vary greatly in lifespan, social behavior, and space requirements — a
              rabbit may live 8 to 12 years and needs space to run, while a hamster is largely
              solitary and crepuscular. Species-specific knowledge is essential before bringing any
              small animal home.
            </p>

            <div className="grid sm:grid-cols-2 gap-4 mt-8">
              {careHubLinks.map((link) => (
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

            <div className="mt-8 rounded-2xl border border-[#CFE0A8] bg-[#F7FAF0] p-5 sm:p-6">
              <p className="text-xs uppercase tracking-wider text-[#063F2A] font-semibold mb-1">
                Responsible care planning
              </p>
              <h3 className="text-lg font-bold text-[#17211B] mb-2">
                <Link href="/small-pets/care" className="hover:underline text-[#17211B]">
                  Small Pets Care — rabbits, guinea pigs &amp; hamsters →
                </Link>
              </h3>
              <p className="text-sm text-[#2C3A2F] mb-3 max-w-2xl">
                Housing, feeding, handling, enrichment, vet care, and warning
                signs. Small pets are not low-effort — plan carefully.
              </p>
              <div className="flex flex-wrap gap-2">
                {[
                  { href: "/small-pets/rabbit-care", label: "Rabbit care" },
                  { href: "/small-pets/guinea-pig-care", label: "Guinea pig care" },
                  { href: "/small-pets/hamster-care", label: "Hamster care" },
                  { href: "/tools/small-pet-setup-checklist", label: "Setup checklist" },
                ].map((l) => (
                  <Link
                    key={l.href}
                    href={l.href}
                    className="text-xs px-3 py-1.5 rounded-full border border-[#CFE0A8] bg-white text-[#063F2A] hover:border-[#0F5A3A] hover:no-underline transition focus:outline-none focus-visible:ring-2 focus-visible:ring-[#063F2A] focus-visible:ring-offset-2"
                  >
                    {l.label} →
                  </Link>
                ))}
              </div>
            </div>
          </section>

          <div className="mt-10 grid gap-6 lg:grid-cols-2">
            <RelatedLinks
              title="Planning and care resources for small pets"
              links={[
                {
                  label: "Rabbit care guides",
                  href: "/small-pets/rabbits",
                  description: "Species-specific care framework for rabbits",
                },
                {
                  label: "Hamster care guides",
                  href: "/small-pets/hamsters",
                  description: "Species-specific care framework for hamsters",
                },
                {
                  label: "Guinea pig care guides",
                  href: "/small-pets/guinea-pigs",
                  description: "Species-specific care framework for guinea pigs",
                },
                {
                  label: "How much does a rabbit cost?",
                  href: "/small-pets/rabbits/how-much-does-a-rabbit-cost",
                  description: "Honest setup and recurring-cost framework",
                },
                {
                  label: "How much does a hamster cost?",
                  href: "/small-pets/hamsters/how-much-does-a-hamster-cost",
                  description: "Honest setup and recurring-cost framework",
                },
                {
                  label: "How much does a guinea pig cost?",
                  href: "/small-pets/guinea-pigs/how-much-does-a-guinea-pig-cost",
                  description: "Honest setup and recurring-cost framework",
                },
                {
                  label: "Pet Cost Calculator",
                  href: "/tools/pet-cost-calculator",
                  description: "Run monthly, annual, and first-year scenarios",
                },
              ]}
            />
            <RelatedLinks
              title="Age tools and vet care"
              links={[
                {
                  label: "Rabbit Age Calculator",
                  href: "/tools/rabbit-age-calculator",
                  description: "Approximate human-age equivalent",
                },
                {
                  label: "Hamster Age Calculator",
                  href: "/tools/hamster-age-calculator",
                  description: "Approximate human-age equivalent",
                },
                {
                  label: "Guinea Pig Age Calculator",
                  href: "/tools/guinea-pig-age-calculator",
                  description: "Approximate human-age equivalent",
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
                  label: "Low-maintenance pets",
                  href: "/guides/low-maintenance-pets",
                  description: "What 'low-maintenance' really means",
                },
              ]}
            />
          </div>
        </div>
      </main>
    </>
  );
}
