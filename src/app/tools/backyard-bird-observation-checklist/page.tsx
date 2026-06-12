import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumbs from "@/components/Breadcrumbs";
import FAQBlock from "@/components/FAQBlock";
import LastUpdated from "@/components/LastUpdated";
import SourcesSection from "@/components/educational/SourcesSection";
import BirdDisclaimer from "@/components/birds/BirdDisclaimer";
import { buildMetadata } from "@/lib/metadata";
import { breadcrumbSchema, faqSchema } from "@/lib/schema";
import { BIRD_SOURCE_NOTE } from "@/lib/birds/guide-types";
import type { SourceLink } from "@/lib/educational/types";
import BackyardBirdObservationChecklistClient from "./BackyardBirdObservationChecklistClient";

const SITE = "https://faunahub.com";
const MODIFIED = "2026-06-12";

const title = "Backyard Bird Observation Checklist — Watch Ethically";
const description =
  "Build a tailored ethical backyard bird-watching checklist with ID notes and what-not-to-do reminders. No wildlife handling or feeding prescriptions. Runs in your browser; nothing is stored.";

export const metadata: Metadata = buildMetadata({
  title,
  description,
  path: "/tools/backyard-bird-observation-checklist",
});

const FAQS = [
  {
    question: "Does this tool give wildlife-handling or feeding instructions?",
    answer:
      "No. It produces an ethical observation checklist, ID notes, and what-not-to-do reminders only — never instructions to handle wild birds, feeding prescriptions, species-certainty claims, or product brands. For an injured wild bird, contact a licensed wildlife rehabilitator or local authority.",
  },
  {
    question: "Is my input saved or sent anywhere?",
    answer:
      "No. The checklist runs entirely in your browser. Your selections and tick marks are not sent to a server, not saved to a database, and not recorded by analytics. Refreshing the page resets everything.",
  },
  {
    question: "Can it identify a bird for me?",
    answer:
      "No. It helps you note useful identification clues, but it does not identify birds or claim certainty. Identification is about probability, not guarantees — use a regional guide or reputable app as a starting point and accept uncertainty.",
  },
];

const SOURCES: SourceLink[] = [
  {
    label: "Cornell Lab of Ornithology — All About Birds",
    url: "https://www.allaboutbirds.org/",
    type: "university",
    note: "Cornell University ornithology reference and birdwatching guidance",
  },
  {
    label: "National Audubon Society",
    url: "https://www.audubon.org/",
    type: "wildlife",
    note: "Bird identification, conservation, and observation guidance",
  },
  {
    label: "RSPB — Birds and Wildlife",
    url: "https://www.rspb.org.uk/birds-and-wildlife",
    type: "wildlife",
    note: "UK bird charity guidance on watching, feeding, and helping birds",
  },
];

export default function BackyardBirdObservationChecklistPage() {
  const schemas = [
    breadcrumbSchema([
      { name: "Home", url: SITE },
      { name: "Tools", url: `${SITE}/tools` },
      {
        name: "Backyard Bird Observation Checklist",
        url: `${SITE}/tools/backyard-bird-observation-checklist`,
      },
    ]),
    {
      "@context": "https://schema.org",
      "@type": "SoftwareApplication",
      name: "FaunaHub Backyard Bird Observation Checklist",
      url: `${SITE}/tools/backyard-bird-observation-checklist`,
      applicationCategory: "EducationalApplication",
      operatingSystem: "Web",
      description:
        "Free, privacy-safe tool that builds a tailored ethical backyard bird-observation checklist with ID notes and what-not-to-do reminders. No wildlife handling or feeding prescriptions; no data leaves the browser.",
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
                { label: "Backyard Bird Observation Checklist" },
              ]}
            />
            <div className="max-w-2xl mt-2">
              <span className="tag mb-3 inline-block">Free tool · No login · No storage</span>
              <h1 className="text-3xl sm:text-4xl font-bold text-[#17211B] mb-4 leading-tight">
                Backyard Bird Observation Checklist
              </h1>
              <p className="text-base sm:text-lg text-[#2C3A2F] leading-relaxed">
                Tell us about your planned bird watching and this builds a
                tailored ethical observation checklist, identification notes, and
                what-not-to-do reminders. It is a planning aid only — no wildlife
                handling, feeding prescriptions, or species-certainty claims — and
                everything stays in your browser.
              </p>
            </div>
          </div>
        </header>

        <div className="container-content py-10">
          <div className="grid lg:grid-cols-[1fr_300px] gap-10">
            <article className="prose-content min-w-0">
              <div className="not-prose mb-8">
                <BirdDisclaimer />
              </div>

              <h2>How to use this checklist</h2>
              <p>
                Choose your location, time of day, goal, and whether you have
                checked local rules or are considering feeding. The checklist and
                reminders update to match. Tick items off as you plan. For deeper
                guidance, see the{" "}
                <Link href="/birdwatching">birdwatching hub</Link>.
              </p>

              <BackyardBirdObservationChecklistClient />

              <div className="mt-10">
                <FAQBlock
                  items={FAQS}
                  title="Backyard Bird Observation Checklist — frequently asked questions"
                />
              </div>
              <div className="mt-10">
                <SourcesSection sources={SOURCES} intro={BIRD_SOURCE_NOTE} />
              </div>
            </article>

            <aside aria-label="Tool sidebar" className="space-y-6 lg:sticky lg:top-6 self-start">
              <BirdDisclaimer compact />

              <div className="bg-white border border-[#DDE6DD] rounded-xl overflow-hidden">
                <div className="bg-[#EFF4E0] px-5 py-3 border-b border-[#DDE6DD]">
                  <p className="text-sm font-semibold text-[#063F2A] uppercase tracking-wider">About this tool</p>
                </div>
                <dl className="divide-y divide-[#EAF0EA] text-sm">
                  <div className="px-5 py-3 flex flex-col gap-0.5">
                    <dt className="text-[#8A958E] text-xs uppercase tracking-wide font-medium">Output</dt>
                    <dd className="text-[#17211B] font-medium">Ethical observation checklist</dd>
                  </div>
                  <div className="px-5 py-3 flex flex-col gap-0.5">
                    <dt className="text-[#8A958E] text-xs uppercase tracking-wide font-medium">Wildlife handling</dt>
                    <dd className="text-[#17211B] font-medium">Never — ask an authority</dd>
                  </div>
                  <div className="px-5 py-3 flex flex-col gap-0.5">
                    <dt className="text-[#8A958E] text-xs uppercase tracking-wide font-medium">Privacy</dt>
                    <dd className="text-[#17211B] font-medium">Stays in your browser</dd>
                  </div>
                </dl>
              </div>

              <div className="border border-[#DDE6DD] rounded-xl p-4 bg-[#EFF1EB] text-sm text-[#2C3A2F] space-y-2">
                <p className="font-medium text-[#17211B]">Birdwatching guides</p>
                <ul className="text-xs flex flex-col gap-1.5">
                  <li>
                    <Link href="/birdwatching" className="underline decoration-dotted underline-offset-2 text-[#063F2A]">
                      Birdwatching hub
                    </Link>
                  </li>
                  <li>
                    <Link href="/birdwatching/how-to-watch-birds-ethically" className="underline decoration-dotted underline-offset-2 text-[#063F2A]">
                      Watch birds ethically
                    </Link>
                  </li>
                  <li>
                    <Link href="/animal-encyclopedia/birds" className="underline decoration-dotted underline-offset-2 text-[#063F2A]">
                      Bird encyclopedia
                    </Link>
                  </li>
                </ul>
              </div>

              <LastUpdated date={MODIFIED} />
            </aside>
          </div>
        </div>
      </main>
    </>
  );
}
