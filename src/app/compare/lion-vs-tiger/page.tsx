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
  title: "Lion vs Tiger — Size, Strength, Habitat & Key Differences",
  description:
    "Lion vs Tiger: direct comparison of size, weight, habitat, social behavior, and conservation status. Clear facts, no speculation.",
  path: "/compare/lion-vs-tiger",
  publishedTime: "2025-05-07",
  modifiedTime: "2025-05-07",
});

const tableRows = [
  { attribute: "Scientific Name", a: "Panthera leo", b: "Panthera tigris" },
  { attribute: "Natural Habitat", a: "African savannas, grasslands, open woodlands; small Asiatic population in India", b: "Asian forests, grasslands, mangroves (India, Southeast Asia, Russian Far East)" },
  { attribute: "Typical Male Weight", a: "Approximately 150–250 kg (varies by subspecies)", b: "Approximately 140–300 kg (largest in Siberian/Amur subspecies)" },
  { attribute: "Body Length (head to tail)", a: "Approximately 2.5–3.3 m total", b: "Approximately 2.5–3.9 m total (largest subspecies)" },
  { attribute: "Social Structure", a: "Social — lives in prides of related females and coalition males", b: "Solitary — territory-marking, lone hunters (except mothers with cubs)" },
  { attribute: "Primary Prey", a: "Wildebeest, zebra, buffalo, antelope", b: "Deer, wild boar, gaur, sambar; varies by region" },
  { attribute: "IUCN Status (approximate)", a: "Vulnerable (verify with current IUCN Red List)", b: "Endangered (verify with current IUCN Red List)" },
  { attribute: "Geographic Range", a: "Sub-Saharan Africa (majority); small Asiatic lion population in Gir Forest, India", b: "Fragmented range across South and Southeast Asia and Russian Far East" },
];

const faqItems = [
  {
    question: "Do lions and tigers live in the same areas?",
    answer: "In the wild, lions and tigers occupy different continents and ecosystems. Lions are primarily found in sub-Saharan Africa; tigers inhabit parts of Asia. The only geographic overlap is a small Asiatic lion population in Gujarat, India, where tigers are not present in the same forests. Natural encounters between the two species in the wild do not occur in modern times.",
  },
  {
    question: "Which is heavier — a lion or a tiger?",
    answer: "On average, large tiger subspecies such as the Amur (Siberian) tiger can be heavier than lions. Male Amur tigers can exceed 200–300 kg, while most male African lions weigh approximately 150–250 kg. However, there is significant overlap, and individual variation is substantial. Neither species is universally larger than the other across all subspecies.",
  },
  {
    question: "Are lions or tigers more endangered?",
    answer: "According to the IUCN Red List (always verify current status directly), tigers are generally classified as Endangered while lions are classified as Vulnerable. Tiger populations are more severely fragmented, with some subspecies considered Critically Endangered. Both species face significant threats from habitat loss, human conflict, and prey depletion.",
  },
  {
    question: "Can lions and tigers interbreed?",
    answer: "In captivity, lions and tigers have been crossbred, producing offspring known as 'ligers' (lion father, tiger mother) or 'tigons' (tiger father, lion mother). These hybrids do not occur in the wild due to geographic separation and behavioral differences. Ligers tend to be very large due to disrupted growth-inhibiting genes. These crossings are controversial in conservation biology.",
  },
];

export default function LionVsTigerPage() {
  const schemas = [
    breadcrumbSchema([
      { name: "Home", url: "https://faunahub.com" },
      { name: "Compare", url: "https://faunahub.com/compare" },
      { name: "Lion vs Tiger", url: "https://faunahub.com/compare/lion-vs-tiger" },
    ]),
    articleSchema({
      title: "Lion vs Tiger — Size, Strength, Habitat & Key Differences",
      description: "Direct comparison of lions and tigers covering size, habitat, social behavior, and conservation status.",
      path: "/compare/lion-vs-tiger",
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
          {/* Breadcrumb */}
          <nav aria-label="Breadcrumb" className="text-sm text-[#9CA5AF] mb-6 flex gap-2 items-center flex-wrap">
            <Link href="/" className="hover:text-[#2A7A4B] hover:no-underline">Home</Link>
            <span aria-hidden="true">/</span>
            <Link href="/compare" className="hover:text-[#2A7A4B] hover:no-underline">Compare</Link>
            <span aria-hidden="true">/</span>
            <span className="text-[#1C2B3A] font-medium" aria-current="page">Lion vs Tiger</span>
          </nav>

          <div className="grid lg:grid-cols-[1fr_280px] gap-10">
            <article>
              <span className="tag mb-4 inline-block">Animal Comparison</span>
              <h1 className="text-3xl sm:text-4xl font-bold text-[#1C2B3A] mb-6">
                Lion vs Tiger
              </h1>

              {/* Quick Answer */}
              <section aria-labelledby="quick-answer-heading">
                <h2 id="quick-answer-heading" className="text-2xl font-bold text-[#1C2B3A] mt-2 mb-4 pb-2 border-b border-[#E4E8ED]">
                  Quick Answer
                </h2>
                <p className="text-[#3E4F60] text-base leading-relaxed mb-4">
                  Lions and tigers are the two largest wild cat species. The largest tiger subspecies —
                  particularly the Amur (Siberian) tiger — can be heavier than most lions on average,
                  though individual variation is significant. The two species occupy entirely different
                  parts of the world: lions primarily in sub-Saharan Africa, tigers in fragmented
                  habitats across Asia. They do not naturally encounter each other in the wild.
                </p>
                <p className="text-[#3E4F60] text-base leading-relaxed mb-4">
                  Questions about &quot;who would win&quot; are not meaningful in biological terms —
                  these animals have never competed in nature, and captive encounters are not a reliable
                  measure of natural behavior or capability.
                </p>
              </section>

              {/* Comparison Table */}
              <section aria-labelledby="comparison-table-heading">
                <h2 id="comparison-table-heading" className="text-2xl font-bold text-[#1C2B3A] mt-10 mb-4 pb-2 border-b border-[#E4E8ED]">
                  Lion vs Tiger Comparison
                </h2>
                <ComparisonTable
                  labelA="Lion"
                  labelB="Tiger"
                  rows={tableRows}
                  caption="Data is approximate. Verify conservation status with current IUCN Red List."
                />
              </section>

              {/* Key Differences */}
              <section aria-labelledby="differences-heading">
                <h2 id="differences-heading" className="text-2xl font-bold text-[#1C2B3A] mt-10 mb-4 pb-2 border-b border-[#E4E8ED]">
                  Key Differences
                </h2>
                <ul className="space-y-3 text-[#3E4F60] text-base">
                  <li className="flex gap-2"><span className="text-[#2A7A4B] flex-shrink-0 mt-0.5">●</span><span><strong className="text-[#1C2B3A]">Social structure:</strong> Lions are the only truly social wild cat, living in prides. Tigers are solitary, establishing and defending individual territories.</span></li>
                  <li className="flex gap-2"><span className="text-[#2A7A4B] flex-shrink-0 mt-0.5">●</span><span><strong className="text-[#1C2B3A]">Habitat:</strong> Lions favor open savannas and grasslands. Tigers are adapted to dense forest, grassland, and mangrove environments across Asia.</span></li>
                  <li className="flex gap-2"><span className="text-[#2A7A4B] flex-shrink-0 mt-0.5">●</span><span><strong className="text-[#1C2B3A]">Coat:</strong> Lions have a tawny, unmarked coat; males develop a mane. Tigers have distinctive orange-and-black striped coats used as camouflage in forest environments.</span></li>
                  <li className="flex gap-2"><span className="text-[#2A7A4B] flex-shrink-0 mt-0.5">●</span><span><strong className="text-[#1C2B3A]">Hunting style:</strong> Lions often hunt cooperatively in groups. Tigers are solitary ambush hunters relying on stealth and a powerful short charge.</span></li>
                  <li className="flex gap-2"><span className="text-[#2A7A4B] flex-shrink-0 mt-0.5">●</span><span><strong className="text-[#1C2B3A]">Conservation threat:</strong> Both species are threatened; tigers are generally considered more critically endangered due to greater habitat fragmentation and smaller global population.</span></li>
                </ul>
              </section>

              {/* Similarities */}
              <section aria-labelledby="similarities-heading">
                <h2 id="similarities-heading" className="text-2xl font-bold text-[#1C2B3A] mt-10 mb-4 pb-2 border-b border-[#E4E8ED]">
                  Similarities
                </h2>
                <ul className="space-y-3 text-[#3E4F60] text-base">
                  <li className="flex gap-2"><span className="text-[#3B72A8] flex-shrink-0 mt-0.5">●</span><span>Both belong to the genus <em>Panthera</em> and are capable of roaring — a trait shared only by lions, tigers, leopards, and jaguars among wild cats.</span></li>
                  <li className="flex gap-2"><span className="text-[#3B72A8] flex-shrink-0 mt-0.5">●</span><span>Both are apex predators in their respective ecosystems with no natural predators as adults.</span></li>
                  <li className="flex gap-2"><span className="text-[#3B72A8] flex-shrink-0 mt-0.5">●</span><span>Both face significant threats from habitat loss, human-wildlife conflict, and poaching.</span></li>
                  <li className="flex gap-2"><span className="text-[#3B72A8] flex-shrink-0 mt-0.5">●</span><span>Both are keystone species whose presence significantly shapes the ecological balance of their environments.</span></li>
                </ul>
              </section>

              {/* FAQ */}
              <div className="mt-10">
                <FAQBlock items={faqItems} />
              </div>
            </article>

            {/* Sidebar */}
            <aside aria-label="Comparison sidebar" className="space-y-5 lg:pt-14">
              <RelatedLinks
                title="Related Pages"
                links={[
                  { label: "Lion Profile", href: "/animals/lion", description: "Full Panthera leo profile" },
                  { label: "Wolf vs Dog", href: "/compare/wolf-vs-dog", description: "Comparing wolves and domestic dogs" },
                  { label: "Animal Encyclopedia", href: "/animal-encyclopedia", description: "Wildlife profiles" },
                  { label: "Mammals", href: "/animal-encyclopedia/mammals", description: "Mammal species profiles" },
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
