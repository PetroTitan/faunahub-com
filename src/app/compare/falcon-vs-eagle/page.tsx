import type { Metadata } from "next";
import ComparisonPageLayout from "@/components/ComparisonPageLayout";
import { buildArticleMetadata } from "@/lib/metadata";

const PUBLISHED = "2026-05-12";
const MODIFIED = "2026-05-12";

const title = "Falcon vs Eagle";
const pageTitle = "Falcon vs Eagle — Family, Flight Style & Key Differences";
const description =
  "Falcon vs eagle: different families, different hunting styles. Compare anatomy, flight, prey, and conservation context of these two well-known raptor groups.";

export const metadata: Metadata = buildArticleMetadata({
  title: pageTitle,
  description,
  path: "/compare/falcon-vs-eagle",
  publishedTime: PUBLISHED,
  modifiedTime: MODIFIED,
});

export default function FalconVsEaglePage() {
  return (
    <ComparisonPageLayout
      title={title}
      pageTitle={pageTitle}
      description={description}
      path="/compare/falcon-vs-eagle"
      labelA="Falcon"
      labelB="Eagle"
      publishedDate={PUBLISHED}
      modifiedDate={MODIFIED}
      quickAnswer={
        <>
          <p>
            Falcons and eagles are both diurnal birds of prey, but they belong to different
            families and are not as closely related as they appear. Falcons (family
            Falconidae) tend to be smaller, with long pointed wings designed for fast
            powered flight and the famous high-speed stoops of species such as the
            peregrine falcon. Eagles (within the family Accipitridae) include several
            large-bodied raptors built for soaring and for taking medium-to-large prey,
            usually via a stoop or a powerful talons-first strike.
          </p>
          <p>
            Recent molecular phylogenies have shown that falcons are more closely related
            to parrots and passerines than to eagles, hawks, and other Accipitridae. The
            similarity is a result of convergent evolution toward a predatory raptor body
            plan.
          </p>
        </>
      }
      table={[
        { attribute: "Family", a: "Falconidae", b: "Accipitridae" },
        { attribute: "Order", a: "Falconiformes", b: "Accipitriformes" },
        { attribute: "Wing shape", a: "Long, pointed — built for speed", b: "Broad, slotted primaries — built for soaring" },
        { attribute: "Typical hunting strategy", a: "High-speed pursuit and aerial stoop (e.g. peregrine)", b: "Soaring, scanning from height, stoop or talons-first strike" },
        { attribute: "Killing method", a: "Notched beak (\"tomial tooth\") used to dispatch prey", b: "Primarily heavy taloned feet" },
        { attribute: "Typical prey size", a: "Small to medium birds, insects, small mammals (varies by species)", b: "Medium to large mammals, fish, reptiles, birds (varies by species)" },
        { attribute: "Body size", a: "Generally smaller", b: "Generally larger" },
        { attribute: "Closest broader relatives", a: "Parrots and passerines (per recent molecular work)", b: "Hawks, kites, harriers, and other Accipitridae" },
        { attribute: "IUCN Status", a: "Varies by species (verify per species)", b: "Varies by species (verify per species)" },
      ]}
      keyDifferences={[
        {
          heading: "Taxonomic family",
          body: "Falcons are in family Falconidae. Eagles are part of family Accipitridae. The two groups are not as closely related as their similar appearance suggests.",
        },
        {
          heading: "Wing structure",
          body: "Falcons have long, pointed wings adapted for fast, powered flight and high-speed dives. Eagle wings are typically broader with slotted primary feathers, optimised for soaring on thermals.",
        },
        {
          heading: "Killing method",
          body: "Falcons typically dispatch prey with a notched 'tomial tooth' on the upper beak. Eagles rely primarily on their powerful taloned feet.",
        },
        {
          heading: "Prey",
          body: "Falcons commonly take small to medium birds, insects, and small mammals. Eagles include species specialised for fish, large mammals, reptiles, or arboreal primates depending on the species.",
        },
        {
          heading: "Body size",
          body: "Eagles include the largest of the diurnal raptors. Falcons are generally smaller and have a stockier, compact build relative to body length.",
        },
      ]}
      similarities={[
        <span key="raptor">
          Both are diurnal birds of prey with hooked beaks, sharp talons, and forward-facing eyes adapted for active hunting.
        </span>,
        <span key="vision">
          Both groups have highly acute vision — among the sharpest in the animal kingdom — used to detect prey from a distance.
        </span>,
        <span key="topcons">
          Many species in both groups are apex avian predators or important meso-predators in their ecosystems.
        </span>,
        <span key="conservation">
          Both contain species of significant conservation concern. Several falcons and eagles have been the focus of major conservation programmes, including the peregrine falcon&apos;s recovery from DDT-era declines.
        </span>,
      ]}
      confusionPoints={[
        <span key="raptor-group">
          &quot;Raptor&quot; or &quot;bird of prey&quot; is an ecological grouping rather than a single evolutionary lineage. Falcons, eagles, hawks, owls, and vultures share predatory adaptations but do not all share a recent common ancestor.
        </span>,
        <span key="size-overlap">
          Some smaller eagles overlap in body size with some larger falcons, so size alone is not a reliable diagnostic.
        </span>,
        <span key="hawks">
          Many smaller broad-winged raptors casually called &quot;hawks&quot; or &quot;buzzards&quot; are also in family Accipitridae, the same family as eagles.
        </span>,
      ]}
      faqs={[
        {
          question: "Is a falcon a type of eagle?",
          answer:
            "No. Falcons (family Falconidae) and eagles (family Accipitridae) are different families. Recent molecular phylogenies place falcons closer to parrots and passerines than to eagles, despite the superficial similarity.",
        },
        {
          question: "Which is faster — a falcon or an eagle?",
          answer:
            "Falcons are generally faster in level powered flight and in the high-speed dive. The peregrine falcon is famously among the fastest animals on the planet in its hunting stoop. Eagles soar very efficiently and can be fast in a stoop, but are not built for the same sustained powered speed.",
        },
        {
          question: "Are eagles stronger than falcons?",
          answer:
            "Eagles are generally larger and can take larger prey using their powerful talons. Strength comparisons between groups of birds with such different hunting strategies are difficult to standardise, but in absolute terms larger eagles are capable of taking heavier prey than falcons.",
        },
        {
          question: "Do falcons and eagles ever compete?",
          answer:
            "They sometimes share habitat. Direct conflict is rare; the species typically target different prey sizes and use different flight styles, which reduces ecological overlap.",
        },
      ]}
      relatedLinks={[
        { label: "Eagle Profile", href: "/animals/eagle" },
        { label: "Owl Profile", href: "/animals/owl", description: "Nocturnal raptors" },
        { label: "Bird Encyclopedia", href: "/animal-encyclopedia/birds" },
        { label: "All Comparisons", href: "/compare" },
      ]}
    />
  );
}
