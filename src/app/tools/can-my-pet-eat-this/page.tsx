import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumbs from "@/components/Breadcrumbs";
import DisclaimerBlock from "@/components/DisclaimerBlock";
import LastUpdated from "@/components/LastUpdated";
import RelatedLinks from "@/components/RelatedLinks";
import { buildMetadata } from "@/lib/metadata";
import { breadcrumbSchema } from "@/lib/schema";
import CanMyPetEatThisClient from "./CanMyPetEatThisClient";

const LAST_UPDATED = "2026-05-18";

export const metadata: Metadata = buildMetadata({
  title: "Can My Pet Eat This? — Quick Pet Food Lookup",
  description:
    "Search a food and find FaunaHub's cautious educational guidance for dogs and cats. This tool does not diagnose — it points you to the right detailed page and, where needed, to a veterinarian.",
  path: "/tools/can-my-pet-eat-this",
});

export default function CanMyPetEatThisPage() {
  const schema = breadcrumbSchema([
    { name: "Home", url: "https://faunahub.com" },
    { name: "Tools", url: "https://faunahub.com/tools" },
    {
      name: "Can my pet eat this?",
      url: "https://faunahub.com/tools/can-my-pet-eat-this",
    },
  ]);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />
      <main id="main-content">
        <div className="container-content py-8">
          <Breadcrumbs
            items={[
              { label: "Tools", href: "/tools" },
              { label: "Can my pet eat this?" },
            ]}
          />

          <div className="grid lg:grid-cols-[1fr_300px] gap-10 mt-2">
            <article className="prose-content min-w-0">
              <p className="mb-3">
                <span className="tag">Free Tool</span>{" "}
                <span className="tag ml-1">Food Safety</span>
              </p>
              <h1 className="text-3xl sm:text-4xl font-bold text-[#17211B] mb-3 leading-tight">
                Can my pet eat this?
              </h1>
              <p className="text-base text-[#2C3A2F] leading-relaxed">
                A quick way to look up whether a common food is in FaunaHub&apos;s
                pet food safety guides for dogs and cats. Type a food, choose a
                species if you want to narrow the list, and open the relevant
                page for a careful, educational overview.
              </p>

              <div className="not-prose mt-6 rounded-xl border border-red-200 bg-red-50 p-4 text-sm text-red-900 leading-relaxed">
                <p>
                  <strong>This tool does not diagnose toxicity.</strong> If your
                  pet has eaten something potentially dangerous, or is showing
                  vomiting, diarrhea, weakness, tremors, breathing problems,
                  collapse, seizures, bleeding, or sudden behaviour changes —
                  contact a licensed veterinarian or emergency animal clinic
                  immediately. Do not wait for the search results below.
                </p>
              </div>

              <CanMyPetEatThisClient />

              <div className="mt-10">
                <h2>How this tool works</h2>
                <p>
                  The lookup searches FaunaHub&apos;s published dog and cat food
                  safety pages by food name and common alternative names. It is
                  intentionally narrow: it returns links to detailed pages, not
                  numeric &quot;safe&quot; amounts, and it does not generate
                  novel medical advice.
                </p>
                <p>
                  Every food page on FaunaHub is reviewed for tone and caution.
                  We use three broad categories — <em>usually safe in plain
                  small amounts</em>, <em>depends — caution</em>, and{" "}
                  <em>usually unsafe</em> — together with a low/moderate/high
                  risk level. None of these labels is a substitute for advice
                  from a licensed veterinarian who knows your specific pet.
                </p>
                <h2>When this tool is not enough</h2>
                <p>
                  Pet food safety can depend on the animal&apos;s size, age,
                  health, the amount eaten, how the food was prepared, and
                  individual sensitivity. If you have already given your pet
                  something and are worried, or if the food is not in our
                  current guides, the right next step is professional veterinary
                  advice rather than further searching.
                </p>
              </div>

              <div className="mt-10">
                <DisclaimerBlock type="veterinary" />
              </div>
            </article>

            <aside
              aria-label="Tool sidebar"
              className="space-y-6 lg:sticky lg:top-6 self-start"
            >
              <RelatedLinks
                title="Browse food safety guides"
                links={[
                  {
                    label: "Dog food safety",
                    href: "/dogs/food",
                    description: "All dog food guides",
                  },
                  {
                    label: "Cat food safety",
                    href: "/cats/food",
                    description: "All cat food guides",
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
                    label: "All tools",
                    href: "/tools",
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
