import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumbs from "@/components/Breadcrumbs";
import FAQBlock from "@/components/FAQBlock";
import LastUpdated from "@/components/LastUpdated";
import SourcesSection from "@/components/educational/SourcesSection";
import EmergencyCallout from "@/components/pet-safety/EmergencyCallout";
import { buildMetadata } from "@/lib/metadata";
import { breadcrumbSchema, faqSchema } from "@/lib/schema";
import { PET_SAFETY_SOURCE_NOTE } from "@/lib/pet-safety/data";
import type { SourceLink } from "@/lib/educational/types";
import PetEmergencyContactListClient from "./PetEmergencyContactListClient";

const SITE = "https://faunahub.com";
const PUBLISHED = "2026-06-01";
const MODIFIED = "2026-06-01";

const title = "Pet Emergency Contact List Generator — Free & Private";
const description =
  "Build a printable pet emergency contact list — vet, emergency clinic, poison control, microchip, insurance, and caretaker. Runs entirely in your browser; nothing is stored or sent.";

export const metadata: Metadata = buildMetadata({
  title,
  description,
  path: "/tools/pet-emergency-contact-list",
});

const FAQS = [
  {
    question: "Is my information saved or sent anywhere?",
    answer:
      "No. The builder runs entirely in your browser. Your entries are not sent to a server, not saved to a database, not stored in your browser, and not recorded by analytics. Closing or refreshing the page clears everything.",
  },
  {
    question: "How do I keep a copy?",
    answer:
      "Use the Print / Save as PDF button, which opens your browser's print dialog. You can print a paper copy for the fridge or a travel bag, or save it as a PDF. You can also print it blank to fill in by hand.",
  },
  {
    question: "What should I put in the medical notes field?",
    answer:
      "Only free-form notes you would want to tell your veterinarian — for example, known conditions, current medications, or allergies. Do not treat it as a dosing or treatment plan; that guidance comes from your vet.",
  },
  {
    question: "Does this replace calling a vet in an emergency?",
    answer:
      "No. It is an organisational aid that puts the right numbers in one place so you can act quickly. In an emergency, contact a licensed veterinarian or emergency animal clinic immediately.",
  },
];

const SOURCES: SourceLink[] = [
  {
    label: "Ready.gov — Prepare Your Pets for Disasters",
    url: "https://www.ready.gov/pets",
    type: "government",
    note: "US government emergency-preparedness guidance for pet owners",
  },
  {
    label: "ASPCA Animal Poison Control Center",
    url: "https://www.aspca.org/pet-care/aspca-poison-control",
    type: "veterinary",
    note: "24/7 emergency animal-poisoning helpline (US)",
  },
  {
    label: "AVMA — Microchipping FAQ",
    url: "https://www.avma.org/resources-tools/pet-owners/petcare/microchips-reunite-pets-families/microchipping-faq",
    type: "veterinary",
    note: "How microchips help reunite lost pets with families",
  },
];

export default function PetEmergencyContactListToolPage() {
  const schemas = [
    breadcrumbSchema([
      { name: "Home", url: SITE },
      { name: "Tools", url: `${SITE}/tools` },
      {
        name: "Pet Emergency Contact List",
        url: `${SITE}/tools/pet-emergency-contact-list`,
      },
    ]),
    {
      "@context": "https://schema.org",
      "@type": "SoftwareApplication",
      name: "FaunaHub Pet Emergency Contact List Generator",
      url: `${SITE}/tools/pet-emergency-contact-list`,
      applicationCategory: "UtilitiesApplication",
      operatingSystem: "Web",
      description:
        "Free, privacy-safe tool that helps pet owners build a printable emergency contact list in the browser. No account, no storage, no data leaves the browser.",
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
        <header className="bg-white border-b border-[#DDE6DD] py-12 print:hidden">
          <div className="container-content">
            <Breadcrumbs
              items={[
                { label: "Tools", href: "/tools" },
                { label: "Pet Emergency Contact List" },
              ]}
            />
            <div className="max-w-2xl mt-2">
              <span className="tag mb-3 inline-block">Free tool · No login · No storage</span>
              <h1 className="text-3xl sm:text-4xl font-bold text-[#17211B] mb-4 leading-tight">
                Pet Emergency Contact List Generator
              </h1>
              <p className="text-base sm:text-lg text-[#2C3A2F] leading-relaxed">
                Put the numbers you might need in a crisis in one place — your
                vet, an emergency clinic, poison control, your microchip
                registry, insurance, and a trusted caretaker. It builds a
                printable card entirely in your browser. Nothing is stored or
                sent anywhere.
              </p>
            </div>
          </div>
        </header>

        <div className="container-content py-10">
          <div className="grid lg:grid-cols-[1fr_300px] gap-10">
            <article className="prose-content min-w-0">
              <div className="not-prose mb-8 print:hidden">
                <EmergencyCallout />
              </div>

              <div className="print:hidden">
                <h2>Why keep an emergency contact list?</h2>
                <p>
                  In an emergency, minutes spent searching for a phone number
                  are minutes lost. A simple, up-to-date contact list — kept
                  somewhere easy to find and saved in your phone — lets you and
                  anyone caring for your pet act quickly and reach professional
                  help. This tool helps you assemble one; it is an
                  organisational aid, not medical advice.
                </p>
                <p>
                  For background on what to include and why, see the{" "}
                  <Link href="/pet-safety/pet-emergency-contact-list">
                    pet emergency contact list guide
                  </Link>{" "}
                  and the{" "}
                  <Link href="/pet-safety/pet-emergency-checklist">
                    pet emergency checklist
                  </Link>
                  .
                </p>
              </div>

              <PetEmergencyContactListClient />

              <div className="print:hidden">
                <div className="mt-10">
                  <FAQBlock
                    items={FAQS}
                    title="Pet Emergency Contact List — frequently asked questions"
                  />
                </div>
                <div className="mt-10">
                  <SourcesSection sources={SOURCES} intro={PET_SAFETY_SOURCE_NOTE} />
                </div>
              </div>
            </article>

            <aside
              aria-label="Tool sidebar"
              className="space-y-6 lg:sticky lg:top-6 self-start print:hidden"
            >
              <EmergencyCallout compact />

              <div className="bg-white border border-[#DDE6DD] rounded-xl overflow-hidden">
                <div className="bg-[#EFF4E0] px-5 py-3 border-b border-[#DDE6DD]">
                  <p className="text-sm font-semibold text-[#063F2A] uppercase tracking-wider">
                    About this tool
                  </p>
                </div>
                <dl className="divide-y divide-[#EAF0EA] text-sm">
                  <div className="px-5 py-3 flex flex-col gap-0.5">
                    <dt className="text-[#8A958E] text-xs uppercase tracking-wide font-medium">
                      Privacy
                    </dt>
                    <dd className="text-[#17211B] font-medium">
                      Stays in your browser
                    </dd>
                  </div>
                  <div className="px-5 py-3 flex flex-col gap-0.5">
                    <dt className="text-[#8A958E] text-xs uppercase tracking-wide font-medium">
                      Account
                    </dt>
                    <dd className="text-[#17211B] font-medium">Not required</dd>
                  </div>
                  <div className="px-5 py-3 flex flex-col gap-0.5">
                    <dt className="text-[#8A958E] text-xs uppercase tracking-wide font-medium">
                      Output
                    </dt>
                    <dd className="text-[#17211B] font-medium">
                      Print or save as PDF
                    </dd>
                  </div>
                </dl>
              </div>

              <div className="border border-[#DDE6DD] rounded-xl p-4 bg-[#EFF1EB] text-sm text-[#2C3A2F] space-y-2">
                <p className="font-medium text-[#17211B]">Related safety pages</p>
                <ul className="text-xs flex flex-col gap-1.5">
                  <li>
                    <Link
                      href="/pet-safety/pet-emergency-contact-list"
                      className="underline decoration-dotted underline-offset-2 text-[#063F2A]"
                    >
                      Pet emergency contact list guide →
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/pet-safety/pet-emergency-checklist"
                      className="underline decoration-dotted underline-offset-2 text-[#063F2A]"
                    >
                      Pet emergency checklist →
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/pet-safety"
                      className="underline decoration-dotted underline-offset-2 text-[#063F2A]"
                    >
                      Pet safety hub →
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
