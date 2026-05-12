import type { Metadata } from "next";
import ComparisonPageLayout from "@/components/ComparisonPageLayout";
import { buildArticleMetadata } from "@/lib/metadata";

const PUBLISHED = "2026-05-12";
const MODIFIED = "2026-05-12";

const title = "Cheetah vs Leopard";
const pageTitle = "Cheetah vs Leopard — Build, Spots, Hunting & Key Differences";
const description =
  "Cheetah vs leopard: spotted vs rosetted, sprint vs ambush, diurnal vs nocturnal. Distinguish two often-confused African cats by anatomy and behaviour.";

export const metadata: Metadata = buildArticleMetadata({
  title: pageTitle,
  description,
  path: "/compare/cheetah-vs-leopard",
  publishedTime: PUBLISHED,
  modifiedTime: MODIFIED,
});

export default function CheetahVsLeopardPage() {
  return (
    <ComparisonPageLayout
      title={title}
      pageTitle={pageTitle}
      description={description}
      path="/compare/cheetah-vs-leopard"
      labelA="Cheetah"
      labelB="Leopard"
      publishedDate={PUBLISHED}
      modifiedDate={MODIFIED}
      quickAnswer={
        <>
          <p>
            Cheetahs (<em>Acinonyx jubatus</em>) and leopards (<em>Panthera pardus</em>) are
            both spotted African cats but they differ substantially in build, coat pattern,
            and behaviour. Cheetahs are slender, sprint-adapted, diurnal hunters with solid
            round spots and characteristic black &quot;tear lines&quot; on the face. Leopards
            are stockier, more powerful, largely nocturnal ambush hunters with rosette
            patterns rather than solid spots.
          </p>
          <p>
            They also belong to different genera. Cheetahs are not part of the &quot;big
            cats&quot; in genus <em>Panthera</em> — leopards are. Cheetahs cannot roar; they
            chirp, purr, and produce a range of softer vocalisations.
          </p>
        </>
      }
      table={[
        { attribute: "Scientific name", a: "Acinonyx jubatus", b: "Panthera pardus" },
        { attribute: "Build", a: "Slender, long-legged, sprint-adapted", b: "Stockier, powerful, ambush-adapted" },
        { attribute: "Coat pattern", a: "Solid round black spots", b: "Rosettes (rings of spots, usually plain inside)" },
        { attribute: "Facial markings", a: "Distinctive black 'tear lines'", b: "No prominent tear lines" },
        { attribute: "Claws", a: "Semi-retractile (for traction at speed)", b: "Fully retractile" },
        { attribute: "Hunting style", a: "High-speed pursuit over short distances", b: "Stalk-and-ambush; often climbs trees with kills" },
        { attribute: "Activity", a: "Largely diurnal (avoids larger nocturnal predators)", b: "Largely nocturnal/crepuscular" },
        { attribute: "Vocalisation", a: "Cannot roar; chirps, purrs, hisses", b: "Capable of roaring (genus Panthera)" },
        { attribute: "IUCN Status (approx.)", a: "Vulnerable (verify)", b: "Vulnerable (verify)" },
      ]}
      keyDifferences={[
        {
          heading: "Body build",
          body: "Cheetahs are slim, long-legged, and built for speed. Leopards are heavier, more powerfully muscled, and built for grappling with prey.",
        },
        {
          heading: "Coat pattern",
          body: "Cheetahs have solid black round spots scattered across the coat. Leopards have rosettes — clusters of spots arranged in a ring around a centre that is typically plain.",
        },
        {
          heading: "Tear lines",
          body: "Cheetahs have distinctive black lines running from the inner corner of each eye down the face. Leopards do not.",
        },
        {
          heading: "Hunting strategy",
          body: "Cheetahs rely on a short, very high-speed sprint to catch fast prey. Leopards rely on stalking and ambush, often using cover or trees and storing kills in trees to avoid scavengers.",
        },
        {
          heading: "Activity period",
          body: "Cheetahs are mostly diurnal — hunting in daylight in part to avoid being displaced by larger nocturnal predators. Leopards are largely nocturnal or crepuscular.",
        },
        {
          heading: "Vocalisation",
          body: "Leopards can roar; cheetahs cannot. Cheetahs make distinctive chirping calls, purrs, and other softer sounds.",
        },
      ]}
      similarities={[
        <span key="africa">
          Both species occur in sub-Saharan Africa, though their detailed habitat preferences differ; leopards have a much broader range that also extends into Asia.
        </span>,
        <span key="carnivore">
          Both are obligate carnivores and apex or near-apex predators in many of the systems they inhabit.
        </span>,
        <span key="solitary">
          Adult females of both species are largely solitary outside of raising cubs.
        </span>,
        <span key="threats">
          Both face pressures from habitat loss, prey depletion, and human-wildlife conflict.
        </span>,
      ]}
      confusionPoints={[
        <span key="spots-vs-rosettes">
          The terms &quot;spots&quot; and &quot;rosettes&quot; are commonly used interchangeably by casual observers, but they describe different patterns and are reliable diagnostics.
        </span>,
        <span key="big-cats">
          Cheetahs are often called &quot;big cats&quot; in casual usage, but technically the term refers to genus <em>Panthera</em>. Cheetahs are in their own genus and cannot roar.
        </span>,
        <span key="speed">
          Cheetahs are not the only fast cat, but they are the fastest land animal. Leopards are quick over short distances but are nowhere near cheetah top speeds.
        </span>,
      ]}
      faqs={[
        {
          question: "How fast is a cheetah compared with a leopard?",
          answer:
            "Cheetahs are substantially faster than leopards over short distances. Top cheetah speeds are commonly cited around 100–115 km/h in short sprints. Leopards are quick over short distances but are nowhere near cheetah top speeds.",
        },
        {
          question: "How do you tell a cheetah from a leopard?",
          answer:
            "Look at build, coat pattern, and face. Cheetahs are slim and long-legged with solid round spots and distinctive black 'tear lines' on the face. Leopards are stockier with rosettes (rings of spots) and no prominent tear lines.",
        },
        {
          question: "Can leopards outrun cheetahs?",
          answer:
            "No. Leopards are not adapted for the kind of high-speed sprint that cheetahs perform. Leopards rely on stealth and a powerful short charge rather than sustained speed.",
        },
        {
          question: "Are cheetahs and leopards ever found in the same area?",
          answer:
            "Yes, in parts of sub-Saharan Africa their ranges overlap. The two species use overlapping habitats but partition resources by behaviour — leopards being largely nocturnal and cheetahs largely diurnal — and by prey selection.",
        },
      ]}
      relatedLinks={[
        { label: "Cheetah Profile", href: "/animals/cheetah" },
        { label: "Leopard Profile", href: "/animals/leopard" },
        { label: "Leopard vs Jaguar", href: "/compare/leopard-vs-jaguar" },
        { label: "Mammal Encyclopedia", href: "/animal-encyclopedia/mammals" },
        { label: "All Comparisons", href: "/compare" },
      ]}
    />
  );
}
