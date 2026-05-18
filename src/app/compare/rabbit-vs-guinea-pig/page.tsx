import type { Metadata } from "next";
import ComparisonPageLayout from "@/components/ComparisonPageLayout";
import { COMPARISON_SOURCES } from "@/lib/educational/animal-sources";
import { buildArticleMetadata } from "@/lib/metadata";

const PUBLISHED = "2026-05-12";
const MODIFIED = "2026-05-12";

const title = "Rabbit vs Guinea Pig";
const pageTitle = "Rabbit vs Guinea Pig — Biology, Care Needs & Key Differences";
const description =
  "Rabbit vs guinea pig: two different orders, different sizes, different care needs. Compare biology, diet, social needs, and which suits which household.";

export const metadata: Metadata = buildArticleMetadata({
  title: pageTitle,
  description,
  path: "/compare/rabbit-vs-guinea-pig",
  publishedTime: PUBLISHED,
  modifiedTime: MODIFIED,
});

export default function RabbitVsGuineaPigPage() {
  return (
    <ComparisonPageLayout
      title={title}
      pageTitle={pageTitle}
      description={description}
      path="/compare/rabbit-vs-guinea-pig"
      labelA="Rabbit"
      labelB="Guinea Pig"
      sources={COMPARISON_SOURCES["rabbit-vs-guinea-pig"]}
      publishedDate={PUBLISHED}
      modifiedDate={MODIFIED}
      quickAnswer={
        <>
          <p>
            Rabbits and guinea pigs are both popular small companion animals, but they
            belong to different mammalian orders, differ substantially in size and
            behaviour, and have distinct care requirements. Rabbits are lagomorphs (order
            Lagomorpha) — closer to hares than to rodents — while guinea pigs are rodents
            (order Rodentia) native to South America. They are both herbivores that thrive
            on hay-based diets, but the two species should generally not be housed together.
          </p>
          <p>
            For health-specific decisions about either species, consult a veterinarian
            experienced with exotic small mammals. FaunaHub provides general care context,
            not veterinary diagnosis or treatment.
          </p>
        </>
      }
      table={[
        { attribute: "Order", a: "Lagomorpha", b: "Rodentia" },
        { attribute: "Family", a: "Leporidae", b: "Caviidae" },
        { attribute: "Native origin (wild ancestor)", a: "European rabbit (Oryctolagus cuniculus)", b: "Andean South America" },
        { attribute: "Typical adult size", a: "Larger; varies by breed", b: "Smaller; varies by breed but generally smaller than rabbits" },
        { attribute: "Diet basis", a: "Unlimited high-quality grass hay + leafy greens + measured pellets", b: "Unlimited high-quality grass hay + leafy greens + measured pellets + vitamin C source" },
        { attribute: "Vitamin C", a: "Synthesises its own", b: "Cannot synthesise vitamin C; must obtain via diet" },
        { attribute: "Activity pattern", a: "Crepuscular (dawn/dusk active)", b: "Active in shorter bouts throughout the day" },
        { attribute: "Social needs", a: "Strongly social; usually best in bonded same-species pair", b: "Strongly social; usually best in bonded same-species group" },
        { attribute: "Lifespan in care", a: "Often around 8–12 years (varies by breed and care)", b: "Often around 5–8 years (varies by breed and care)" },
      ]}
      keyDifferences={[
        {
          heading: "Taxonomic group",
          body: "Rabbits are lagomorphs and guinea pigs are rodents. They are not closely related, despite both being small herbivorous mammals.",
        },
        {
          heading: "Size",
          body: "Rabbits are generally larger and stronger than guinea pigs. Even smaller rabbit breeds are typically comparable to or larger than most guinea pig breeds.",
        },
        {
          heading: "Vitamin C metabolism",
          body: "Guinea pigs cannot synthesise vitamin C and must obtain it from the diet daily. Rabbits synthesise their own vitamin C. This single physiological difference drives major differences in diet planning.",
        },
        {
          heading: "Communication",
          body: "Guinea pigs are notably vocal, with a recognised repertoire of squeaks, wheeks and other calls. Rabbits communicate more via body posture and silent signals.",
        },
        {
          heading: "Housing recommendations",
          body: "Both species should be kept with their own species, not paired together. A rabbit can physically injure a guinea pig (intentionally or not), and the two species have different communication systems, dietary needs, and disease risks.",
        },
      ]}
      similarities={[
        <span key="herbivore">
          Both are herbivores and benefit from a diet built around unlimited high-quality grass hay, supplemented by leafy greens and measured pellets.
        </span>,
        <span key="dentition">
          Both have continuously growing teeth and need fibrous diets and chew opportunities to wear teeth down naturally.
        </span>,
        <span key="social">
          Both are highly social and generally do better in same-species pairs or groups than alone, with attention to bonding and appropriate housing.
        </span>,
        <span key="exercise">
          Both need a substantially larger enclosure than is sometimes assumed — small &quot;starter cages&quot; sold for either species are usually too small.
        </span>,
      ]}
      confusionPoints={[
        <span key="rodent">
          A common misconception is that rabbits are rodents. They are not — they belong to a different order (Lagomorpha) and were separated from rodents in modern taxonomic schemes some time ago.
        </span>,
        <span key="together">
          Rabbits and guinea pigs are sometimes housed together. This is generally discouraged by modern small-mammal veterinary guidance because of the size mismatch, different social systems, and disease-transmission risk.
        </span>,
        <span key="diet">
          Although both eat hay-based diets, the vitamin C requirement makes guinea-pig-specific pellets necessary; rabbit pellets are not a substitute.
        </span>,
      ]}
      faqs={[
        {
          question: "Can rabbits and guinea pigs live together?",
          answer:
            "Modern small-mammal veterinary guidance generally advises against housing rabbits and guinea pigs together. The two species do not communicate the same way, rabbits can injure guinea pigs even unintentionally, and they have different dietary and social needs. Each species is best paired with another of its own kind.",
        },
        {
          question: "Are guinea pigs easier to care for than rabbits?",
          answer:
            "Neither is a 'low-maintenance' pet. Both need substantial space, daily care, social companionship, and species-appropriate diets. Guinea pigs have the additional consideration of needing dietary vitamin C; rabbits are physically stronger and can be more demanding in housing requirements.",
        },
        {
          question: "Which is better for a child?",
          answer:
            "Neither species is a good 'starter pet' if that implies low responsibility. Both require careful adult supervision of housing, diet, handling, and vet care. Guinea pigs are sometimes more tolerant of handling than many rabbits, but individual temperaments vary in both species.",
        },
        {
          question: "Do rabbits and guinea pigs need a vet?",
          answer:
            "Yes. Both species benefit from being seen by a vet experienced with exotic small mammals. They have species-specific health issues — including dental problems, gastrointestinal stasis (rabbits), vitamin-C deficiency (guinea pigs), and respiratory infection — that benefit from informed care.",
        },
      ]}
      relatedLinks={[
        { label: "Small Pets Hub", href: "/small-pets", description: "Care guides for small companion animals" },
        { label: "Rabbit Age Calculator", href: "/tools/rabbit-age-calculator" },
        { label: "Guinea Pig Age Calculator", href: "/tools/guinea-pig-age-calculator" },
        { label: "All Comparisons", href: "/compare" },
      ]}
    />
  );
}
