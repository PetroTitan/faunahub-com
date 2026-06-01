import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumbs from "@/components/Breadcrumbs";
import FAQBlock from "@/components/FAQBlock";
import LastUpdated from "@/components/LastUpdated";
import SourcesSection from "@/components/educational/SourcesSection";
import EarlyCareDisclaimer from "@/components/puppy-kitten/EarlyCareDisclaimer";
import { buildMetadata } from "@/lib/metadata";
import { breadcrumbSchema, faqSchema } from "@/lib/schema";
import { EARLY_CARE_SOURCE_NOTE } from "@/lib/puppy-kitten/data";
import type { SourceLink } from "@/lib/educational/types";
import PuppyKittenFirstWeekChecklistClient from "./PuppyKittenFirstWeekChecklistClient";

const SITE = "https://faunahub.com";
const PUBLISHED = "2026-06-01";
const MODIFIED = "2026-06-01";

const title = "Puppy & Kitten First-Week Checklist — Free Planner";
const description =
  "Build a tailored first-week checklist for a new puppy or kitten — setup, vet questions, home safety, and feeding planning. No vaccine dates or medical advice. Runs in your browser; nothing is stored.";

export const metadata: Metadata = buildMetadata({
  title,
  description,
  path: "/tools/puppy-kitten-first-week-checklist",
});

const FAQS = [
  {
    question: "Does this tool create a vaccine or medical schedule?",
    answer:
      "No. It produces a planning checklist, vet questions to ask, and safety reminders only — never vaccine or deworming dates, medical schedules, treatment, or dosage. Those are decisions for your veterinarian, based on your pet's age, health, history, and local risks.",
  },
  {
    question: "Is my input saved or sent anywhere?",
    answer:
      "No. The checklist runs entirely in your browser. Your selections and tick marks are not sent to a server, not saved to a database, and not recorded by analytics. Refreshing the page resets everything.",
  },
  {
    question: "Can it tell me if my puppy or kitten is sick?",
    answer:
      "No. It does not diagnose or assess health. If your puppy or kitten shows vomiting, diarrhoea, refusal to eat, breathing trouble, collapse, seizures, injury, or suspected poisoning, contact a licensed veterinarian or emergency clinic immediately.",
  },
  {
    question: "How do I keep my checklist?",
    answer:
      "Tick items off as you go during your visit. Because nothing is stored, you can also use your browser's print or screenshot to keep a copy. The checklist is a starting point — adapt it to your home and your veterinarian's guidance.",
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
    label: "AVMA — Selecting a Pet That's Right for You",
    url: "https://www.avma.org/resources-tools/pet-owners/petcare/selecting-pet-thats-right-you",
    type: "veterinary",
    note: "Choosing and preparing for a new pet responsibly",
  },
  {
    label: "ASPCA — General Dog Care",
    url: "https://www.aspca.org/pet-care/dog-care/general-dog-care",
    type: "veterinary",
    note: "General dog and puppy care guidance",
  },
  {
    label: "ASPCA — General Cat Care",
    url: "https://www.aspca.org/pet-care/cat-care/general-cat-care",
    type: "veterinary",
    note: "General cat and kitten care guidance",
  },
];

export default function PuppyKittenFirstWeekChecklistPage() {
  const schemas = [
    breadcrumbSchema([
      { name: "Home", url: SITE },
      { name: "Tools", url: `${SITE}/tools` },
      {
        name: "Puppy & Kitten First-Week Checklist",
        url: `${SITE}/tools/puppy-kitten-first-week-checklist`,
      },
    ]),
    {
      "@context": "https://schema.org",
      "@type": "SoftwareApplication",
      name: "FaunaHub Puppy & Kitten First-Week Checklist",
      url: `${SITE}/tools/puppy-kitten-first-week-checklist`,
      applicationCategory: "EducationalApplication",
      operatingSystem: "Web",
      description:
        "Free, privacy-safe tool that builds a tailored first-week planning checklist, vet questions, and safety reminders for a new puppy or kitten. No medical schedules; no data leaves the browser.",
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
                { label: "Puppy & Kitten First-Week Checklist" },
              ]}
            />
            <div className="max-w-2xl mt-2">
              <span className="tag mb-3 inline-block">Free tool · No login · No storage</span>
              <h1 className="text-3xl sm:text-4xl font-bold text-[#17211B] mb-4 leading-tight">
                Puppy &amp; Kitten First-Week Checklist
              </h1>
              <p className="text-base sm:text-lg text-[#2C3A2F] leading-relaxed">
                Tell us a little about your new puppy or kitten and your home,
                and this builds a tailored first-week checklist, questions to
                ask your veterinarian, and home-safety reminders. It is a
                planning aid only — no vaccine dates or medical advice — and
                everything stays in your browser.
              </p>
            </div>
          </div>
        </header>

        <div className="container-content py-10">
          <div className="grid lg:grid-cols-[1fr_300px] gap-10">
            <article className="prose-content min-w-0">
              <div className="not-prose mb-8">
                <EarlyCareDisclaimer />
              </div>

              <h2>How to use this checklist</h2>
              <p>
                Choose your pet type, where they came from, your home setup, and
                where you are with supplies and vet planning. The checklist,
                vet questions, and safety reminders update to match. Tick items
                off as you go. For deeper guidance, see the{" "}
                <Link href="/puppy-care">puppy care</Link> and{" "}
                <Link href="/kitten-care">kitten care</Link> foundations.
              </p>

              <PuppyKittenFirstWeekChecklistClient />

              <div className="mt-10">
                <FAQBlock
                  items={FAQS}
                  title="First-Week Checklist — frequently asked questions"
                />
              </div>
              <div className="mt-10">
                <SourcesSection sources={SOURCES} intro={EARLY_CARE_SOURCE_NOTE} />
              </div>
            </article>

            <aside
              aria-label="Tool sidebar"
              className="space-y-6 lg:sticky lg:top-6 self-start"
            >
              <EarlyCareDisclaimer compact />

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
                    <dd className="text-[#17211B] font-medium">Planning checklist</dd>
                  </div>
                  <div className="px-5 py-3 flex flex-col gap-0.5">
                    <dt className="text-[#8A958E] text-xs uppercase tracking-wide font-medium">
                      Medical schedules
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
                <p className="font-medium text-[#17211B]">Care foundations</p>
                <ul className="text-xs flex flex-col gap-1.5">
                  <li>
                    <Link href="/puppy-care" className="underline decoration-dotted underline-offset-2 text-[#063F2A]">
                      Puppy care foundation →
                    </Link>
                  </li>
                  <li>
                    <Link href="/kitten-care" className="underline decoration-dotted underline-offset-2 text-[#063F2A]">
                      Kitten care foundation →
                    </Link>
                  </li>
                  <li>
                    <Link href="/pet-safety/pet-emergency-contact-list" className="underline decoration-dotted underline-offset-2 text-[#063F2A]">
                      Emergency contact list →
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
