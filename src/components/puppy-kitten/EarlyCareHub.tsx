import Link from "next/link";
import Breadcrumbs from "@/components/Breadcrumbs";
import FAQBlock from "@/components/FAQBlock";
import LastUpdated from "@/components/LastUpdated";
import SourcesSection from "@/components/educational/SourcesSection";
import EarlyCareDisclaimer from "@/components/puppy-kitten/EarlyCareDisclaimer";
import {
  EARLY_CARE_ARTICLES,
  EARLY_CARE_SOURCE_NOTE,
  HUB_META,
  type EarlyCareSpecies,
} from "@/lib/puppy-kitten/data";
import type { SourceLink } from "@/lib/educational/types";
import { breadcrumbSchema, faqSchema, itemListSchema } from "@/lib/schema";

const SITE = "https://faunahub.com";

export interface HubTheme {
  id: string;
  title: string;
  intro: string;
  slugs: string[];
  extraLinks?: { label: string; href: string; description: string }[];
}

export interface EarlyCareHubConfig {
  species: EarlyCareSpecies;
  intro: string;
  themes: HubTheme[];
  whenToCallSlug: string;
  whenToCallIntro: string;
  toolsAndGuides: { label: string; href: string; description: string; badge: string }[];
  sources: SourceLink[];
  faqs: { question: string; answer: string }[];
  lastUpdated: string;
}

export default function EarlyCareHub({ config }: { config: EarlyCareHubConfig }) {
  const hub = HUB_META[config.species];
  const speciesArticles = EARLY_CARE_ARTICLES.filter(
    (a) => a.species === config.species
  );
  const bySlug = Object.fromEntries(speciesArticles.map((a) => [a.slug, a]));
  const whenToCall = bySlug[config.whenToCallSlug];

  const breadcrumb = breadcrumbSchema([
    { name: "Home", url: SITE },
    { name: hub.label, url: `${SITE}${hub.hub}` },
  ]);
  const itemList = itemListSchema(
    speciesArticles.map((a, i) => ({
      name: a.pageHeading,
      url: `${SITE}${a.path}`,
      position: i + 1,
    }))
  );
  const faqLd = faqSchema(config.faqs);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify([breadcrumb, itemList, faqLd]),
        }}
      />
      <main id="main-content">
        <header className="bg-white border-b border-[#DDE6DD] py-10 sm:py-14">
          <div className="container-content">
            <Breadcrumbs items={[{ label: hub.label }]} />
            <p className="mb-3">
              <span className="tag">{hub.label}</span>{" "}
              <span className="tag ml-1">Early-care foundation</span>
            </p>
            <h1 className="text-3xl sm:text-4xl font-bold text-[#17211B] mb-3">
              {hub.label} — Early-Care Foundation
            </h1>
            <p className="text-base text-[#2C3A2F] leading-relaxed max-w-2xl">
              {config.intro}
            </p>
          </div>
        </header>

        <div className="container-content py-10 space-y-14">
          <EarlyCareDisclaimer />

          {config.themes.map((theme) => (
            <section key={theme.id} aria-labelledby={`${theme.id}-heading`}>
              <h2 id={`${theme.id}-heading`} className="section-title">
                {theme.title}
              </h2>
              <p className="section-subtitle max-w-3xl">{theme.intro}</p>
              <ul className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {theme.slugs.map((slug) => {
                  const a = bySlug[slug];
                  if (!a) return null;
                  return (
                    <li key={slug}>
                      <Link
                        href={a.path}
                        className="block h-full rounded-xl border border-[#DDE6DD] bg-white p-5 hover:border-[#0F5A3A] hover:shadow-sm transition focus:outline-none focus:ring-2 focus:ring-[#063F2A] focus:ring-offset-2 hover:no-underline"
                      >
                        <p className="text-base font-semibold text-[#17211B] mb-2 leading-snug">
                          {a.pageHeading}
                        </p>
                        <p className="text-sm text-[#2C3A2F] leading-relaxed">
                          {a.description}
                        </p>
                      </Link>
                    </li>
                  );
                })}
                {theme.extraLinks?.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="block h-full rounded-xl border border-dashed border-[#DDE6DD] bg-[#F7F8F3] p-5 hover:border-[#0F5A3A] hover:shadow-sm transition focus:outline-none focus:ring-2 focus:ring-[#063F2A] focus:ring-offset-2 hover:no-underline"
                    >
                      <p className="text-base font-semibold text-[#063F2A] mb-2 leading-snug">
                        {link.label} →
                      </p>
                      <p className="text-sm text-[#5E6B63] leading-relaxed">
                        {link.description}
                      </p>
                    </Link>
                  </li>
                ))}
              </ul>
            </section>
          ))}

          <section aria-labelledby="when-to-call-heading">
            <h2 id="when-to-call-heading" className="section-title">
              When to Call a Veterinarian
            </h2>
            <p className="section-subtitle max-w-3xl">{config.whenToCallIntro}</p>
            {whenToCall && (
              <div className="rounded-xl border border-[#DDE6DD] bg-white border-l-4 border-l-[#063F2A] p-5">
                <p className="text-sm sm:text-base text-[#2C3A2F] leading-relaxed mb-4">
                  {whenToCall.directAnswer}
                </p>
                <div className="flex flex-wrap gap-3">
                  <Link href={whenToCall.path} className="btn-primary">
                    {whenToCall.pageHeading} →
                  </Link>
                  <Link
                    href="/pet-safety/when-to-go-to-emergency-vet"
                    className="btn-secondary"
                  >
                    When to go to the emergency vet →
                  </Link>
                </div>
              </div>
            )}
          </section>

          <section aria-labelledby="tools-heading">
            <h2 id="tools-heading" className="section-title">
              Related Tools and Guides
            </h2>
            <p className="section-subtitle max-w-3xl">
              Pair this early-care plan with FaunaHub&apos;s free tools and
              planning hubs.
            </p>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {config.toolsAndGuides.map((t) => (
                <Link
                  key={t.href}
                  href={t.href}
                  className="rounded-xl border border-[#DDE6DD] bg-[#EFF1EB] p-5 hover:border-[#0F5A3A] hover:no-underline transition focus:outline-none focus:ring-2 focus:ring-[#063F2A] focus:ring-offset-2"
                >
                  <p className="text-xs uppercase tracking-wider text-[#8A958E] mb-1">
                    {t.badge}
                  </p>
                  <p className="text-base font-semibold text-[#17211B]">
                    {t.label} →
                  </p>
                  <p className="text-sm text-[#5E6B63] mt-1 leading-relaxed">
                    {t.description}
                  </p>
                </Link>
              ))}
            </div>
          </section>

          <section aria-labelledby="sources-heading">
            <SourcesSection
              sources={config.sources}
              intro={EARLY_CARE_SOURCE_NOTE}
              headingId="sources-heading"
            />
          </section>

          <FAQBlock items={config.faqs} title={`${hub.label} — Frequently Asked Questions`} />

          <LastUpdated date={config.lastUpdated} />
        </div>
      </main>
    </>
  );
}
