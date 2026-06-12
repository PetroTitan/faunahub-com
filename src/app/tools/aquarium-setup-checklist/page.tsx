import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumbs from "@/components/Breadcrumbs";
import FAQBlock from "@/components/FAQBlock";
import LastUpdated from "@/components/LastUpdated";
import SourcesSection from "@/components/educational/SourcesSection";
import AquariumDisclaimer from "@/components/aquarium/AquariumDisclaimer";
import { buildMetadata } from "@/lib/metadata";
import { breadcrumbSchema, faqSchema } from "@/lib/schema";
import { AQUARIUM_SOURCE_NOTE } from "@/lib/aquarium/data";
import type { SourceLink } from "@/lib/educational/types";
import AquariumSetupChecklistClient from "./AquariumSetupChecklistClient";

const SITE = "https://faunahub.com";
const MODIFIED = "2026-06-12";

const title = "Aquarium Setup Checklist — Freshwater & Marine Planning";
const description =
  "Build a tailored beginner aquarium setup checklist with water-quality, species-research, and maintenance reminders. No diagnosis, chemical dosing, or feeding amounts. Runs in your browser; nothing is stored.";

export const metadata: Metadata = buildMetadata({
  title,
  description,
  path: "/tools/aquarium-setup-checklist",
});

const FAQS = [
  {
    question: "Does this tool give medical advice or chemical doses?",
    answer:
      "No. It produces a setup and planning checklist with water-quality, species, and maintenance reminders only — never diagnosis, treatment, medication, chemical doses, tank-size legal claims, or feeding amounts. Those depend on the species and setup and should follow qualified aquatic guidance.",
  },
  {
    question: "Is my input saved or sent anywhere?",
    answer:
      "No. The checklist runs entirely in your browser. Your selections and tick marks are not sent to a server, not saved to a database, and not recorded by analytics. Refreshing the page resets everything.",
  },
  {
    question: "Why doesn't it tell me an exact tank size?",
    answer:
      "Recommended tank sizes vary by species, number of fish, and setup, and bigger is generally more stable. Rather than a single number or a legal claim, the checklist points you to species research and qualified guidance.",
  },
  {
    question: "Can it tell me if my fish is sick?",
    answer:
      "No. It does not diagnose or assess fish health. For severe distress, injury, rapid worsening, mass illness, or unexplained deaths, seek a qualified aquatic veterinarian or specialist.",
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
    label: "World Aquatic Veterinary Medical Association",
    url: "https://wavma.org/",
    type: "veterinary",
    note: "Professional body for aquatic-animal veterinary medicine",
  },
  {
    label: "RSPCA — Fish Welfare",
    url: "https://www.rspca.org.uk/adviceandwelfare/pets/fish",
    type: "animal-welfare",
    note: "Welfare-based guidance on keeping fish (UK)",
  },
];

export default function AquariumSetupChecklistPage() {
  const schemas = [
    breadcrumbSchema([
      { name: "Home", url: SITE },
      { name: "Tools", url: `${SITE}/tools` },
      {
        name: "Aquarium Setup Checklist",
        url: `${SITE}/tools/aquarium-setup-checklist`,
      },
    ]),
    {
      "@context": "https://schema.org",
      "@type": "SoftwareApplication",
      name: "FaunaHub Aquarium Setup Checklist",
      url: `${SITE}/tools/aquarium-setup-checklist`,
      applicationCategory: "EducationalApplication",
      operatingSystem: "Web",
      description:
        "Free, privacy-safe tool that builds a tailored beginner aquarium setup checklist with water-quality, species-research, and maintenance reminders. No medical advice or chemical dosing; no data leaves the browser.",
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
                { label: "Aquarium Setup Checklist" },
              ]}
            />
            <div className="max-w-2xl mt-2">
              <span className="tag mb-3 inline-block">Free tool · No login · No storage</span>
              <h1 className="text-3xl sm:text-4xl font-bold text-[#17211B] mb-4 leading-tight">
                Aquarium Setup Checklist
              </h1>
              <p className="text-base sm:text-lg text-[#2C3A2F] leading-relaxed">
                Tell us about your planned aquarium and this builds a tailored
                setup checklist with water-quality, species-research, and
                maintenance reminders. It is a planning aid only — no diagnosis,
                medication, chemical doses, or feeding amounts — and everything
                stays in your browser.
              </p>
            </div>
          </div>
        </header>

        <div className="container-content py-10">
          <div className="grid lg:grid-cols-[1fr_300px] gap-10">
            <article className="prose-content min-w-0">
              <div className="not-prose mb-8">
                <AquariumDisclaimer />
              </div>

              <h2>How to use this checklist</h2>
              <p>
                Choose your aquarium type, experience, setup status, species
                interest, and water-testing and maintenance readiness. The
                checklist and reminders update to match. Tick items off as you
                plan. For deeper guidance, see the{" "}
                <Link href="/aquarium-care">aquarium care hub</Link>.
              </p>

              <AquariumSetupChecklistClient />

              <div className="mt-10">
                <FAQBlock
                  items={FAQS}
                  title="Aquarium Setup Checklist — frequently asked questions"
                />
              </div>
              <div className="mt-10">
                <SourcesSection sources={SOURCES} intro={AQUARIUM_SOURCE_NOTE} />
              </div>
            </article>

            <aside
              aria-label="Tool sidebar"
              className="space-y-6 lg:sticky lg:top-6 self-start"
            >
              <AquariumDisclaimer compact />

              <div className="bg-white border border-[#DDE6DD] rounded-xl overflow-hidden">
                <div className="bg-[#EFF4E0] px-5 py-3 border-b border-[#DDE6DD]">
                  <p className="text-sm font-semibold text-[#063F2A] uppercase tracking-wider">
                    About this tool
                  </p>
                </div>
                <dl className="divide-y divide-[#EAF0EA] text-sm">
                  <div className="px-5 py-3 flex flex-col gap-0.5">
                    <dt className="text-[#8A958E] text-xs uppercase tracking-wide font-medium">Output</dt>
                    <dd className="text-[#17211B] font-medium">Setup checklist</dd>
                  </div>
                  <div className="px-5 py-3 flex flex-col gap-0.5">
                    <dt className="text-[#8A958E] text-xs uppercase tracking-wide font-medium">Medical advice</dt>
                    <dd className="text-[#17211B] font-medium">Never — ask an aquatic vet</dd>
                  </div>
                  <div className="px-5 py-3 flex flex-col gap-0.5">
                    <dt className="text-[#8A958E] text-xs uppercase tracking-wide font-medium">Privacy</dt>
                    <dd className="text-[#17211B] font-medium">Stays in your browser</dd>
                  </div>
                </dl>
              </div>

              <div className="border border-[#DDE6DD] rounded-xl p-4 bg-[#EFF1EB] text-sm text-[#2C3A2F] space-y-2">
                <p className="font-medium text-[#17211B]">Aquarium guides</p>
                <ul className="text-xs flex flex-col gap-1.5">
                  <li>
                    <Link href="/aquarium-care" className="underline decoration-dotted underline-offset-2 text-[#063F2A]">
                      Aquarium care hub
                    </Link>
                  </li>
                  <li>
                    <Link href="/aquarium-care/fish-tank-setup-basics" className="underline decoration-dotted underline-offset-2 text-[#063F2A]">
                      Fish tank setup basics
                    </Link>
                  </li>
                  <li>
                    <Link href="/animal-encyclopedia/fish" className="underline decoration-dotted underline-offset-2 text-[#063F2A]">
                      Fish encyclopedia
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
