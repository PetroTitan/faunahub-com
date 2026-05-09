import type { Metadata } from "next";
import Link from "next/link";
import ComparisonTable from "@/components/ComparisonTable";
import FAQBlock from "@/components/FAQBlock";
import SourceNote from "@/components/SourceNote";
import LastUpdated from "@/components/LastUpdated";
import RelatedLinks from "@/components/RelatedLinks";
import { buildArticleMetadata } from "@/lib/metadata";
import { breadcrumbSchema, articleSchema, faqSchema } from "@/lib/schema";

export const metadata: Metadata = buildArticleMetadata({
  title: "Wolf vs Dog — Differences, Similarities & Shared Ancestry",
  description:
    "Wolf vs Dog: how they differ in behavior, anatomy, social structure, and domestication history. Clear facts about Canis lupus and Canis lupus familiaris.",
  path: "/compare/wolf-vs-dog",
  publishedTime: "2025-05-07",
  modifiedTime: "2025-05-07",
});

const tableRows = [
  { attribute: "Scientific Name", a: "Canis lupus", b: "Canis lupus familiaris" },
  { attribute: "Classification", a: "Wild species (Gray Wolf)", b: "Domesticated subspecies of gray wolf" },
  { attribute: "Social Structure", a: "Lives in family packs; typically 2–15 individuals", b: "Lives with humans; social hierarchy varies by household and breed" },
  { attribute: "Diet in Natural Conditions", a: "Carnivore; cooperative hunter of large prey (deer, elk, moose, bison)", b: "Omnivore; adapted to human food environments over millennia" },
  { attribute: "Average Lifespan", a: "Approximately 6–8 years in the wild; up to ~13 in captivity", b: "Varies by breed: approximately 10–13 years average" },
  { attribute: "Natural Habitat", a: "Forests, tundra, mountains, grasslands across North America, Europe, Asia", b: "Human environments worldwide; no natural habitat independent of humans" },
  { attribute: "Domestication History", a: "Wild species", b: "Estimated 15,000–40,000+ years of domestication (research estimates vary)" },
  { attribute: "Skull and Dentition", a: "Larger skull; stronger bite force relative to size; longer muzzle", b: "Highly variable by breed; generally reduced jaw size relative to body; shorter muzzle in many breeds" },
  { attribute: "Behavior Toward Humans", a: "Generally avoids humans; fearful in most populations", b: "Bonded to humans; selectively bred for responsiveness and docility" },
];

const faqItems = [
  {
    question: "Are dogs descended from wolves?",
    answer: "Yes. Domestic dogs (Canis lupus familiaris) are a domesticated subspecies of the gray wolf (Canis lupus). Modern genetic research confirms that dogs diverged from a now-extinct wolf population — not from any living wolf species. The exact timing and geographic location of domestication is still an active area of research, with estimates ranging from approximately 15,000 to over 40,000 years ago.",
  },
  {
    question: "Can dogs and wolves interbreed?",
    answer: "Biologically, dogs and gray wolves can interbreed and produce fertile offspring, as they are closely related subspecies. However, behavioral differences, geographic separation in the wild, and the domestic nature of dogs make natural crossings rare. Some dog breeds carry wolf heritage from historical interbreeding (e.g., certain sled dog breeds). 'Wolf-dog hybrids' are occasionally kept as exotic pets but are controversial due to unpredictable behavior.",
  },
  {
    question: "Do dogs and wolves behave the same way?",
    answer: "No. Thousands of years of selective breeding have produced profound behavioral differences. Dogs have evolved a unique ability to read human social and emotional cues — a capability wolves do not demonstrate equally. Dogs seek human approval and direction; wolves maintain strong independent instincts. Even wolf-raised dogs behave differently from wild wolves. The differences go well beyond training.",
  },
  {
    question: "How long have dogs been domesticated?",
    answer: "Research estimates vary, but dogs are generally considered to have been domesticated for at least 15,000 years, with some genetic studies suggesting the divergence may have begun 30,000–40,000 years ago. This makes dogs the oldest domesticated animal. The exact time, location, and mechanism of domestication remain areas of active scientific discussion.",
  },
];

export default function WolfVsDogPage() {
  const schemas = [
    breadcrumbSchema([
      { name: "Home", url: "https://faunahub.com" },
      { name: "Compare", url: "https://faunahub.com/compare" },
      { name: "Wolf vs Dog", url: "https://faunahub.com/compare/wolf-vs-dog" },
    ]),
    articleSchema({
      title: "Wolf vs Dog — Differences, Similarities & Shared Ancestry",
      description: "How wolves and domestic dogs differ in behavior, anatomy, social structure, and domestication history.",
      path: "/compare/wolf-vs-dog",
      datePublished: "2025-05-07",
    }),
    faqSchema(faqItems),
  ];

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemas) }}
      />
      <main id="main-content">
        <div className="container-content py-10">
          <nav aria-label="Breadcrumb" className="text-sm text-[#8A958E] mb-6 flex gap-2 items-center flex-wrap">
            <Link href="/" className="hover:text-[#063F2A] hover:no-underline">Home</Link>
            <span aria-hidden="true">/</span>
            <Link href="/compare" className="hover:text-[#063F2A] hover:no-underline">Compare</Link>
            <span aria-hidden="true">/</span>
            <span className="text-[#17211B] font-medium" aria-current="page">Wolf vs Dog</span>
          </nav>

          <div className="grid lg:grid-cols-[1fr_280px] gap-10">
            <article>
              <span className="tag mb-4 inline-block">Animal Comparison</span>
              <h1 className="text-3xl sm:text-4xl font-bold text-[#17211B] mb-6">
                Wolf vs Dog
              </h1>

              <section aria-labelledby="quick-answer-heading">
                <h2 id="quick-answer-heading" className="text-2xl font-bold text-[#17211B] mt-2 mb-4 pb-2 border-b border-[#DDE6DD]">
                  Quick Answer
                </h2>
                <p className="text-[#2C3A2F] text-base leading-relaxed mb-4">
                  Dogs (<em>Canis lupus familiaris</em>) are a domesticated subspecies of the gray wolf
                  (<em>Canis lupus</em>). Despite sharing common ancestry, thousands of years of selective
                  breeding for life alongside humans have created profound differences in behavior,
                  anatomy, social structure, and dependence on humans. A domestic dog is not simply a
                  tame wolf — it is a distinct biological form shaped by one of the oldest human-animal
                  relationships in history.
                </p>
              </section>

              <section aria-labelledby="comparison-table-heading">
                <h2 id="comparison-table-heading" className="text-2xl font-bold text-[#17211B] mt-10 mb-4 pb-2 border-b border-[#DDE6DD]">
                  Wolf vs Dog Comparison
                </h2>
                <ComparisonTable
                  labelA="Wolf"
                  labelB="Dog"
                  rows={tableRows}
                  caption="Domestication timeline estimates vary across research studies. Behavioral data reflects general species-level patterns."
                />
              </section>

              <section aria-labelledby="differences-heading">
                <h2 id="differences-heading" className="text-2xl font-bold text-[#17211B] mt-10 mb-4 pb-2 border-b border-[#DDE6DD]">
                  Key Differences
                </h2>
                <ul className="space-y-3 text-[#2C3A2F] text-base">
                  <li className="flex gap-2"><span className="text-[#063F2A] flex-shrink-0 mt-0.5">●</span><span><strong className="text-[#17211B]">Human orientation:</strong> Dogs have a uniquely evolved ability to read human social cues and communicate with people. Wolves do not exhibit this behavior, even when raised by humans from birth.</span></li>
                  <li className="flex gap-2"><span className="text-[#063F2A] flex-shrink-0 mt-0.5">●</span><span><strong className="text-[#17211B]">Independence:</strong> Wolves are strongly independent and maintain complex social hierarchies within packs. Dogs typically defer to humans as their social reference point.</span></li>
                  <li className="flex gap-2"><span className="text-[#063F2A] flex-shrink-0 mt-0.5">●</span><span><strong className="text-[#17211B]">Diet:</strong> Wolves are obligate carnivores in practice, adapted to large prey. Dogs have evolved digestive adaptations to process starchy foods — a result of living alongside grain-farming humans.</span></li>
                  <li className="flex gap-2"><span className="text-[#063F2A] flex-shrink-0 mt-0.5">●</span><span><strong className="text-[#17211B]">Physical variation:</strong> All wolves within a subspecies have relatively similar body size and structure. Dogs show extraordinary physical variation — from 1 kg Chihuahuas to 90 kg mastiffs — all shaped by selective breeding.</span></li>
                </ul>
              </section>

              <section aria-labelledby="similarities-heading">
                <h2 id="similarities-heading" className="text-2xl font-bold text-[#17211B] mt-10 mb-4 pb-2 border-b border-[#DDE6DD]">
                  Similarities
                </h2>
                <ul className="space-y-3 text-[#2C3A2F] text-base">
                  <li className="flex gap-2"><span className="text-[#075FA8] flex-shrink-0 mt-0.5">●</span><span>Both retain many aspects of pack social behavior — dogs display hierarchy, greeting rituals, and cooperative play that reflect wolf social patterns.</span></li>
                  <li className="flex gap-2"><span className="text-[#075FA8] flex-shrink-0 mt-0.5">●</span><span>Both communicate using posture, tail position, ear orientation, vocalization, and scent marking.</span></li>
                  <li className="flex gap-2"><span className="text-[#075FA8] flex-shrink-0 mt-0.5">●</span><span>Both are highly intelligent, capable of problem-solving, and responsive to social learning.</span></li>
                  <li className="flex gap-2"><span className="text-[#075FA8] flex-shrink-0 mt-0.5">●</span><span>Both are carnivore-lineage mammals with similar basic anatomy, reproductive patterns, and dental structures (though dogs show significant breed variation).</span></li>
                </ul>
              </section>

              <section aria-labelledby="domestication-heading">
                <h2 id="domestication-heading" className="text-2xl font-bold text-[#17211B] mt-10 mb-4 pb-2 border-b border-[#DDE6DD]">
                  The Science of Dog Domestication
                </h2>
                <p className="text-[#2C3A2F] text-base leading-relaxed mb-4">
                  Dogs were domesticated from a now-extinct wolf population — not from any living wolf
                  species. The process is believed to have involved gradual self-selection of less fearful
                  wolves that were able to live near human settlements, followed by intentional selective
                  breeding over thousands of generations.
                </p>
                <p className="text-[#2C3A2F] text-base leading-relaxed mb-4">
                  This process produced genetic changes affecting not only behavior but also physiology —
                  including the ability to digest starch (via increased copies of the AMY2B gene), reduced
                  stress hormone responses, and changes in facial muscle anatomy that allow dogs to make
                  expressions that humans find appealing.
                </p>
              </section>

              <div className="mt-10">
                <FAQBlock items={faqItems} />
              </div>
            </article>

            <aside aria-label="Comparison sidebar" className="space-y-5 lg:pt-14">
              <RelatedLinks
                title="Related Pages"
                links={[
                  { label: "Wolf Profile", href: "/animals/wolf", description: "Full Canis lupus profile" },
                  { label: "Dog Care Guides", href: "/dogs", description: "Practical guides for dog owners" },
                  { label: "Lion vs Tiger", href: "/compare/lion-vs-tiger", description: "Big cat comparison" },
                  { label: "Animal Encyclopedia", href: "/animal-encyclopedia/mammals", description: "Mammal species profiles" },
                  { label: "All Comparisons", href: "/compare", description: "Browse all animal comparisons" },
                ]}
              />
              <SourceNote pending />
              <LastUpdated date="2025-05-07" />
            </aside>
          </div>
        </div>
      </main>
    </>
  );
}
