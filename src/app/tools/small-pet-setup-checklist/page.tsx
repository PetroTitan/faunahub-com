import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumbs from "@/components/Breadcrumbs";
import FAQBlock from "@/components/FAQBlock";
import LastUpdated from "@/components/LastUpdated";
import SourcesSection from "@/components/educational/SourcesSection";
import SmallPetDisclaimer from "@/components/small-pets/SmallPetDisclaimer";
import { buildMetadata } from "@/lib/metadata";
import { breadcrumbSchema, faqSchema } from "@/lib/schema";
import { SMALL_PET_SOURCE_NOTE } from "@/lib/small-pets/data";
import type { SourceLink } from "@/lib/educational/types";
import SmallPetSetupChecklistClient from "./SmallPetSetupChecklistClient";

const SITE = "https://faunahub.com";
const PUBLISHED = "2026-06-01";
const MODIFIED = "2026-06-01";

const title = "Small Pet Setup Checklist — Rabbit, Guinea Pig, Hamster";
const description =
  "Build a tailored setup checklist for a rabbit, guinea pig, or hamster — housing, vet questions, and safety reminders. No medical advice or feeding amounts. Runs in your browser; nothing is stored.";

export const metadata: Metadata = buildMetadata({
  title,
  description,
  path: "/tools/small-pet-setup-checklist",
});

const FAQS = [
  {
    question: "Does this tool give medical or feeding advice?",
    answer:
      "No. It produces a setup and planning checklist, vet questions, and safety reminders only — never diagnosis, treatment, medication, feeding quantities, or cage-size legal claims. Those depend on the individual animal and your veterinarian and local welfare guidance.",
  },
  {
    question: "Is my input saved or sent anywhere?",
    answer:
      "No. The checklist runs entirely in your browser. Your selections and tick marks are not sent to a server, not saved to a database, and not recorded by analytics. Refreshing the page resets everything.",
  },
  {
    question: "Why doesn't it tell me an exact cage size?",
    answer:
      "Recommended minimum sizes vary by species, country, and welfare organisation, and bigger is generally better. Rather than a single number, the checklist points you to current welfare guidance and a knowledgeable veterinarian.",
  },
  {
    question: "Can it tell me if my pet is sick?",
    answer:
      "No. It does not diagnose or assess health. If your small pet shows refusal to eat, breathing difficulty, severe diarrhoea, injury, collapse, or rapid worsening, contact a qualified veterinarian or emergency clinic immediately.",
  },
];

const SOURCES: SourceLink[] = [
  {
    label: "AVMA — Pet Care Resources",
    url: "https://www.avma.org/resources-tools/pet-owners/petcare",
    type: "veterinary",
    note: "American Veterinary Medical Association consumer pet-care hub",
  },
  {
    label: "RSPCA — Rabbit Care",
    url: "https://www.rspca.org.uk/adviceandwelfare/pets/rabbits",
    type: "animal-welfare",
    note: "Welfare-based rabbit care guidance (UK)",
  },
  {
    label: "RSPCA — Guinea Pig Care",
    url: "https://www.rspca.org.uk/adviceandwelfare/pets/rodents/guineapigs",
    type: "animal-welfare",
    note: "Welfare-based guinea pig care guidance (UK)",
  },
  {
    label: "RSPCA — Hamster Care",
    url: "https://www.rspca.org.uk/adviceandwelfare/pets/rodents/hamsters",
    type: "animal-welfare",
    note: "Welfare-based hamster care guidance (UK)",
  },
];

export default function SmallPetSetupChecklistPage() {
  const schemas = [
    breadcrumbSchema([
      { name: "Home", url: SITE },
      { name: "Tools", url: `${SITE}/tools` },
      {
        name: "Small Pet Setup Checklist",
        url: `${SITE}/tools/small-pet-setup-checklist`,
      },
    ]),
    {
      "@context": "https://schema.org",
      "@type": "SoftwareApplication",
      name: "FaunaHub Small Pet Setup Checklist",
      url: `${SITE}/tools/small-pet-setup-checklist`,
      applicationCategory: "EducationalApplication",
      operatingSystem: "Web",
      description:
        "Free, privacy-safe tool that builds a tailored setup checklist, vet questions, and safety reminders for a rabbit, guinea pig, or hamster. No medical advice; no data leaves the browser.",
      offers: { "@type": "Offer", price: "0", priceCurrency: "USD" },
    },
    faqSchema(FAQS),
  ];

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemas) }}
      />
      <main id="main-content">
        <header className="bg-white border-b border-[#DDE6DD] py-12">
          <div className="container-content">
            <Breadcrumbs
              items={[
                { label: "Tools", href: "/tools" },
                { label: "Small Pet Setup Checklist" },
              ]}
            />
            <div className="max-w-2xl mt-2">
              <span className="tag mb-3 inline-block">Free tool · No login · No storage</span>
              <h1 className="text-3xl sm:text-4xl font-bold text-[#17211B] mb-4 leading-tight">
                Small Pet Setup Checklist
              </h1>
              <p className="text-base sm:text-lg text-[#2C3A2F] leading-relaxed">
                Tell us about your rabbit, guinea pig, or hamster and your home,
                and this builds a tailored setup checklist, questions to ask your
                veterinarian, and safety reminders. It is a planning aid only —
                no medical advice or feeding amounts — and everything stays in
                your browser.
              </p>
            </div>
          </div>
        </header>

        <div className="container-content py-10">
          <div className="grid lg:grid-cols-[1fr_300px] gap-10">
            <article className="prose-content min-w-0">
              <div className="not-prose mb-8">
                <SmallPetDisclaimer />
              </div>

              <h2>How to use this checklist</h2>
              <p>
                Choose your species, where you are in the process, your home
                setup, and your vet and budget status. The checklist, vet
                questions, and safety reminders update to match. Tick items off
                as you plan. For deeper guidance, see the{" "}
                <Link href="/small-pets/care">small pets care hub</Link>.
              </p>

              <SmallPetSetupChecklistClient />

              <div className="mt-10">
                <FAQBlock
                  items={FAQS}
                  title="Small Pet Setup Checklist — frequently asked questions"
                />
              </div>
              <div className="mt-10">
                <SourcesSection sources={SOURCES} intro={SMALL_PET_SOURCE_NOTE} />
              </div>
            </article>

            <aside
              aria-label="Tool sidebar"
              className="space-y-6 lg:sticky lg:top-6 self-start"
            >
              <SmallPetDisclaimer compact />

              <div className="bg-white border border-[#DDE6DD] rounded-xl overflow-hidden">
                <div className="bg-[#EFF4E0] px-5 py-3 border-b border-[#DDE6DD]">
                  <p className="text-sm font-semibold text-[#063F2A] uppercase tracking-wider">
                    About this tool
                  </p>
                </div>
                <dl className="divide-y divide-[#EAF0EA] text-sm">
                  <div className="px-5 py-3 flex flex-col gap-0.5">
                    <dt className="text-[#8A958E] text-xs uppercase tracking-wide font-medium">
                      Output
                    </dt>
                    <dd className="text-[#17211B] font-medium">Setup checklist</dd>
                  </div>
                  <div className="px-5 py-3 flex flex-col gap-0.5">
                    <dt className="text-[#8A958E] text-xs uppercase tracking-wide font-medium">
                      Medical advice
                    </dt>
                    <dd className="text-[#17211B] font-medium">Never — ask your vet</dd>
                  </div>
                  <div className="px-5 py-3 flex flex-col gap-0.5">
                    <dt className="text-[#8A958E] text-xs uppercase tracking-wide font-medium">
                      Privacy
                    </dt>
                    <dd className="text-[#17211B] font-medium">Stays in your browser</dd>
                  </div>
                </dl>
              </div>

              <div className="border border-[#DDE6DD] rounded-xl p-4 bg-[#EFF1EB] text-sm text-[#2C3A2F] space-y-2">
                <p className="font-medium text-[#17211B]">Care guides</p>
                <ul className="text-xs flex flex-col gap-1.5">
                  <li>
                    <Link href="/small-pets/care" className="underline decoration-dotted underline-offset-2 text-[#063F2A]">
                      Small pets care hub →
                    </Link>
                  </li>
                  <li>
                    <Link href="/small-pets/rabbit-care" className="underline decoration-dotted underline-offset-2 text-[#063F2A]">
                      Rabbit care →
                    </Link>
                  </li>
                  <li>
                    <Link href="/small-pets/guinea-pig-care" className="underline decoration-dotted underline-offset-2 text-[#063F2A]">
                      Guinea pig care →
                    </Link>
                  </li>
                  <li>
                    <Link href="/small-pets/hamster-care" className="underline decoration-dotted underline-offset-2 text-[#063F2A]">
                      Hamster care →
                    </Link>
                  </li>
                </ul>
              </div>

              <LastUpdated date={MODIFIED} />
              <p className="text-[10px] text-[#8A958E]">Published {PUBLISHED}.</p>
            </aside>
          </div>
        </div>
      </main>
    </>
  );
}
