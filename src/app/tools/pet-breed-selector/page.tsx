import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumbs from "@/components/Breadcrumbs";
import FAQBlock from "@/components/FAQBlock";
import LastUpdated from "@/components/LastUpdated";
import RelatedLinks from "@/components/RelatedLinks";
import { buildMetadata } from "@/lib/metadata";
import {
  breadcrumbSchema,
  faqSchema,
} from "@/lib/schema";
import {
  SELECTOR_DISCLAIMER,
  SELECTOR_FAQS,
} from "@/lib/pet-breed-selector/data";
import PetBreedSelectorClient from "./PetBreedSelectorClient";

const LAST_UPDATED = "2026-05-18";

export const metadata: Metadata = buildMetadata({
  title: "Pet Breed Selector — Practical Pet Decision Support",
  description:
    "A cautious, educational tool that suggests pet and breed categories to read about based on your home, schedule, experience, and preferences. Not a prescription.",
  path: "/tools/pet-breed-selector",
});

export default function PetBreedSelectorPage() {
  const breadcrumb = breadcrumbSchema([
    { name: "Home", url: "https://faunahub.com" },
    { name: "Tools", url: "https://faunahub.com/tools" },
    {
      name: "Pet Breed Selector",
      url: "https://faunahub.com/tools/pet-breed-selector",
    },
  ]);

  const softwareApplication = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name: "FaunaHub Pet Breed Selector",
    url: "https://faunahub.com/tools/pet-breed-selector",
    applicationCategory: "LifestyleApplication",
    operatingSystem: "Web",
    description:
      "Educational decision-support tool that surfaces pet and breed-category pages to read about based on user-provided lifestyle inputs.",
    offers: { "@type": "Offer", price: "0", priceCurrency: "USD" },
  };

  const faqLd = faqSchema(SELECTOR_FAQS);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify([breadcrumb, softwareApplication, faqLd]),
        }}
      />
      <main id="main-content">
        <div className="container-content py-8">
          <Breadcrumbs
            items={[
              { label: "Tools", href: "/tools" },
              { label: "Pet Breed Selector" },
            ]}
          />

          <div className="grid lg:grid-cols-[1fr_300px] gap-10 mt-2">
            <article className="prose-content min-w-0">
              <p className="mb-3">
                <span className="tag">Free Tool</span>{" "}
                <span className="tag ml-1">Decision Support</span>
              </p>
              <h1 className="text-3xl sm:text-4xl font-bold text-[#17211B] mb-3 leading-tight">
                Pet Breed Selector
              </h1>
              <p className="text-base text-[#2C3A2F] leading-relaxed">
                A short, cautious tool that suggests pet and breed{" "}
                <em>categories</em> to read about based on your home, schedule,
                experience, and preferences. It does not pretend to make a
                perfect pet choice for you. It guides you toward better
                questions and to the relevant FaunaHub pages.
              </p>

              <div className="not-prose mt-6 rounded-xl border border-amber-200 bg-amber-50 p-4 text-sm text-amber-900 leading-relaxed">
                <p>
                  <strong>Read this first.</strong> {SELECTOR_DISCLAIMER}
                </p>
              </div>

              <PetBreedSelectorClient />

              <div className="mt-10">
                <h2>How this tool works</h2>
                <p>
                  The selector scores 13 pet and breed{" "}
                  <em>categories</em> against your inputs using simple, fixed
                  weights, then returns the top-ranking categories with links to
                  detailed pages. Each result is a starting point for honest
                  research — not a prescription.
                </p>
                <p>
                  We deliberately do not match users to individual breeds or
                  individual animals. Individual temperament, health, training,
                  socialisation, and environment shape behaviour far more than
                  any category label, and matching real animals to households is
                  the job of reputable shelters, breeders, trainers, and
                  veterinarians.
                </p>
                <h2>When this tool is not enough</h2>
                <p>
                  This tool does not assess allergies, household budget, local
                  pet laws, building rules, or the individual animal you are
                  considering. If you are close to a decision, talk to a
                  reputable shelter, breeder, trainer, or veterinarian, and
                  spend time with the specific animal before committing.
                </p>
              </div>

              <div className="mt-10">
                <FAQBlock
                  items={SELECTOR_FAQS}
                  title="Pet Breed Selector — Frequently Asked Questions"
                />
              </div>
            </article>

            <aside
              aria-label="Selector sidebar"
              className="space-y-6 lg:sticky lg:top-6 self-start"
            >
              <RelatedLinks
                title="Browse decision guides"
                links={[
                  {
                    label: "Dog breed guides",
                    href: "/dogs/breeds",
                    description: "Apartment, family, low-maintenance",
                  },
                  {
                    label: "Cat breed guides",
                    href: "/cats/breeds",
                    description: "Apartment, first-time, family",
                  },
                  {
                    label: "Pet choice guides",
                    href: "/guides",
                    description: "Apartments, families, beginners",
                  },
                ]}
              />
              <RelatedLinks
                title="Related tools"
                links={[
                  {
                    label: "Pet Life Stage Calculator",
                    href: "/tools/pet-life-stage-calculator",
                    description: "Care focus by life stage",
                  },
                  {
                    label: "Dog Age Calculator",
                    href: "/tools/dog-age-calculator",
                  },
                  {
                    label: "Cat Age Calculator",
                    href: "/tools/cat-age-calculator",
                  },
                  {
                    label: "Can my pet eat this?",
                    href: "/tools/can-my-pet-eat-this",
                    description: "Pet food safety lookup",
                  },
                ]}
              />
              <LastUpdated date={LAST_UPDATED} />

              <p>
                <Link
                  href="/tools"
                  className="text-sm font-medium text-[#063F2A] hover:underline"
                >
                  ← Back to all tools
                </Link>
              </p>
            </aside>
          </div>
        </div>
      </main>
    </>
  );
}
