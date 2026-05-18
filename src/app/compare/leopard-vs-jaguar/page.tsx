import type { Metadata } from "next";
import ComparisonPageLayout from "@/components/ComparisonPageLayout";
import { COMPARISON_SOURCES } from "@/lib/educational/animal-sources";
import { buildArticleMetadata } from "@/lib/metadata";

const PUBLISHED = "2026-05-12";
const MODIFIED = "2026-05-18";

const title = "Leopard vs Jaguar";
const pageTitle = "Leopard vs Jaguar — Size, Range, Rosettes & Key Differences";
const description =
  "Leopard vs Jaguar: how to tell them apart by build, rosette pattern, and range. Compare habitat, hunting, and conservation status of the two species.";

export const metadata: Metadata = buildArticleMetadata({
  title: pageTitle,
  description,
  path: "/compare/leopard-vs-jaguar",
  publishedTime: PUBLISHED,
  modifiedTime: MODIFIED,
});

export default function LeopardVsJaguarPage() {
  return (
    <ComparisonPageLayout
      title={title}
      pageTitle={pageTitle}
      description={description}
      path="/compare/leopard-vs-jaguar"
      labelA="Leopard"
      labelB="Jaguar"
      sources={COMPARISON_SOURCES["leopard-vs-jaguar"]}
      publishedDate={PUBLISHED}
      modifiedDate={MODIFIED}
      quickAnswer={
        <>
          <p>
            Leopards (<em>Panthera pardus</em>) and jaguars (<em>Panthera onca</em>) are
            closely related big cats with superficially similar coats but distinct ranges,
            builds, and rosette patterns. Jaguars are larger and more powerfully built;
            their rosettes typically contain one or more small spots. Leopards are more
            slender; their rosettes are usually plain inside. The two species do not
            naturally share any geographic range — leopards live in Africa and Asia,
            jaguars in the Americas.
          </p>
          <p>
            &quot;Which would win&quot; comparisons have no meaningful biological answer:
            the two species never meet in the wild and have very different ecologies.
          </p>
        </>
      }
      table={[
        { attribute: "Scientific name", a: "Panthera pardus", b: "Panthera onca" },
        { attribute: "Native range", a: "Sub-Saharan Africa and parts of Asia", b: "Central & South America (mainly Amazon, Pantanal)" },
        { attribute: "Build", a: "Slender, longer-legged", b: "Stockier, broader head, shorter legs" },
        { attribute: "Rosettes", a: "Usually plain inside (no inner spots)", b: "Often contain one or more inner spots" },
        { attribute: "Bite force (relative)", a: "Strong but lower than jaguar", b: "Generally cited as the strongest of any big cat for its size" },
        { attribute: "Habitat", a: "Forest, savanna, mountain, scrub — highly adaptable", b: "Tropical forest, wetland, gallery forest" },
        { attribute: "Water use", a: "Will swim; not strongly aquatic", b: "Strongly associated with water; hunts aquatic prey" },
        { attribute: "Tree use", a: "Frequently caches kills in trees", b: "Climbs but less commonly caches kills in trees" },
        { attribute: "IUCN Status (approx.)", a: "Vulnerable (verify)", b: "Near Threatened (verify)" },
      ]}
      keyDifferences={[
        {
          heading: "Geographic range",
          body: "Leopards are found across Africa and parts of Asia. Jaguars are found in the Americas. The two species do not naturally co-occur.",
        },
        {
          heading: "Rosettes",
          body: "Jaguar rosettes typically contain one or more small dark spots inside the larger rosette outline. Leopard rosettes are typically plain inside. This is the most reliable visual diagnostic for adult animals.",
        },
        {
          heading: "Build",
          body: "Jaguars are stockier and more heavily muscled for their length, with broader heads and proportionally shorter limbs. Leopards are more lithe and longer-limbed.",
        },
        {
          heading: "Hunting ecology",
          body: "Leopards are generalist solitary hunters across an unusually wide prey range. Jaguars are particularly associated with water and are documented taking aquatic prey including caimans, often killing by piercing the skull.",
        },
        {
          heading: "Habitat",
          body: "Leopards occupy a notably wider range of habitats — including arid mountain terrain — than jaguars, which are more closely tied to tropical forest and wetland.",
        },
      ]}
      similarities={[
        <span key="genus">
          Both belong to the genus <em>Panthera</em> and are capable of roaring.
        </span>,
        <span key="solitary">
          Both are solitary, territorial apex predators in their respective ecosystems.
        </span>,
        <span key="melanism">
          Both species include melanistic individuals — popularly called &quot;black panthers&quot; — which retain rosettes visible under appropriate lighting.
        </span>,
        <span key="threats">
          Both face pressures from habitat loss, prey depletion, and conflict with livestock or human settlements.
        </span>,
      ]}
      confusionPoints={[
        <span key="black-panther">
          The term &quot;black panther&quot; is not a separate species. It refers to a melanistic colour morph of either leopard (in Africa/Asia) or jaguar (in the Americas).
        </span>,
        <span key="size">
          Casual size comparisons can be misleading because both species vary substantially across their ranges. Jaguars are generally larger on average, but individual variation is significant.
        </span>,
        <span key="range">
          A &quot;black leopard&quot; in the Amazon is almost certainly a misidentification of a black jaguar — leopards do not naturally occur in the Americas.
        </span>,
      ]}
      faqs={[
        {
          question: "How do you actually tell a leopard from a jaguar?",
          answer:
            "Range is the most reliable starting point: leopards are Old World (Africa, Asia), jaguars are New World (the Americas). If you have a clear view of the coat, jaguar rosettes typically contain small inner spots while leopard rosettes do not. Jaguars are also stockier and have broader heads.",
        },
        {
          question: "Are jaguars stronger than leopards?",
          answer:
            "On average, jaguars are larger and more heavily built, and their bite force is generally cited as higher. But direct strength comparisons are difficult to standardise. The species occupy different ecosystems and are not natural competitors.",
        },
        {
          question: "Do leopards and jaguars ever fight in the wild?",
          answer:
            "No. They occupy different continents and have never had overlapping ranges in modern times. Comparisons between the two species are purely conceptual.",
        },
        {
          question: "Are both species endangered?",
          answer:
            "Both are listed at levels of conservation concern on the IUCN Red List, though differently — leopards are commonly listed as Vulnerable and jaguars as Near Threatened, with some subspecies of leopard listed as Critically Endangered. Always verify current designations on the IUCN Red List.",
        },
        {
          question: "Why do both species have black ('panther') colour morphs?",
          answer:
            "Melanism — a genetic variant that produces excess dark pigment — has evolved independently in both leopard and jaguar lineages. In good light the rosette pattern is still visible under the dark coat. Because the two species occupy different continents, every wild 'black panther' is genetically a black leopard (in Africa or Asia) or a black jaguar (in the Americas) — never the other.",
        },
      ]}
      relatedLinks={[
        { label: "Leopard Profile", href: "/animals/leopard", description: "Panthera pardus — full species profile" },
        { label: "Jaguar Profile", href: "/animals/jaguar", description: "Panthera onca — full species profile" },
        { label: "Tiger Profile", href: "/animals/tiger", description: "Panthera tigris — the largest cat" },
        { label: "Lion vs Tiger", href: "/compare/lion-vs-tiger", description: "Another big cat comparison" },
        { label: "Cheetah vs Leopard", href: "/compare/cheetah-vs-leopard", description: "Distinguish similar-looking African cats" },
        { label: "All Comparisons", href: "/compare" },
      ]}
    />
  );
}
