import type { Metadata } from "next";
import AnimalProfileLayout from "@/components/AnimalProfileLayout";
import { ANIMAL_SOURCES } from "@/lib/educational/animal-sources";
import { getAnimalGalleryImages, getAnimalImage, getAnimalOgImage } from "@/lib/images/animal-images";
import { buildArticleMetadata } from "@/lib/metadata";

const PATH = "/animals/moth";
const TITLE = "Moth — Profile, Diversity, Life Cycle & Role";
const DESC =
  "Explore moths (order Lepidoptera): a vast, mostly night-flying group of insects — far more numerous than butterflies — that pollinate plants and feed much of the food web.";

export const metadata: Metadata = buildArticleMetadata({
  title: TITLE,
  description: DESC,
  path: PATH,
  publishedTime: "2026-06-20",
  modifiedTime: "2026-06-20",
  ogImage: getAnimalOgImage("moth"),
});

export default function MothPage() {
  return (
    <AnimalProfileLayout
      commonName="Moth"
      scientificName="order Lepidoptera"
      pageTitle={TITLE}
      description={DESC}
      path={PATH}
      parentCategory="Insects & Invertebrates"
      parentCategoryHref="/animal-encyclopedia/insects"
      tags={["Invertebrate", "Insect", "Pollinator"]}
      image={getAnimalImage("moth") ?? undefined}
      galleryImages={getAnimalGalleryImages("moth")}
      sources={ANIMAL_SOURCES.moth}
      publishedDate="2026-06-20"
      modifiedDate="2026-06-20"
      overview={
        <>
          <p>
            Moths are insects of the order Lepidoptera — the same order as butterflies —
            and they vastly outnumber butterflies in species. Most moths are active at
            night, with scaled wings, feathery or thread-like antennae, and a coiled
            feeding tube (proboscis) in many species. The reference shown here is the
            luna moth (<em>Actias luna</em>), a large, pale-green moth with long
            hindwing tails.
          </p>
          <p>
            Moths range from tiny species to giants with broad wings, and they are a
            cornerstone of ecosystems — as pollinators, and as food (especially their
            caterpillars) for countless other animals.
          </p>
          <p>
            <strong>Note:</strong> moths are extraordinarily diverse, so habits vary
            enormously between species. Treat general statements as approximate and
            verify against authoritative sources.
          </p>
        </>
      }
      habitat={
        <p>
          Moths live almost everywhere on land, from forests and grasslands to deserts,
          wetlands, mountains, and gardens, on every continent except Antarctica. Their
          caterpillars are usually tied to particular food plants, so moth diversity is
          closely linked to the variety of vegetation in a place.
        </p>
      }
      diet={
        <p>
          The caterpillars are the main feeding stage, and most eat plants — leaves,
          stems, seeds, or other plant parts — though some specialise on materials like
          fungi, and a few unusual ones eat other things. Adult moths often feed on
          nectar through a coiled proboscis (pollinating flowers as they do), while some
          adults do not feed at all and live only to reproduce.
        </p>
      }
      behavior={
        <p>
          Moths undergo complete metamorphosis — egg, caterpillar, pupa (often in a
          cocoon), and winged adult. Most are nocturnal and navigate partly by light and
          scent; males of many species detect females&apos; airborne pheromones from
          great distances using their feathery antennae. Many moths rest by day,
          camouflaged against bark or leaves.
        </p>
      }
      humanInteraction={
        <p>
          Moths are ecologically vital as pollinators (especially of night-blooming
          plants) and as a huge food source for birds, bats, and other wildlife. A small
          number are crop or stored-product pests, but the great majority are harmless
          and beneficial, and many populations are declining due to habitat loss,
          pesticides, and light pollution. Consult authoritative sources for specifics.
        </p>
      }
      faqs={[
        {
          question: "What is the difference between a moth and a butterfly?",
          answer:
            "Both are Lepidoptera, and the line between them is not sharp. In general, moths tend to be active at night, have feathery or thread-like antennae, and often rest with wings spread or folded roof-like, while butterflies are usually day-flying with club-tipped antennae. There are exceptions to all of these, and moths are far more numerous in species.",
        },
        {
          question: "Why are moths attracted to light?",
          answer:
            "Many night-flying moths are drawn to artificial lights, and the exact reason is still studied. Leading ideas involve moths becoming disoriented by bright lights when they normally use natural light cues (like the moon) to steer. Whatever the cause, artificial light at night can disrupt their behaviour.",
        },
        {
          question: "Are moths pollinators?",
          answer:
            "Yes — many are important pollinators, especially of flowers that open or release scent at night. As adult moths visit blooms to drink nectar through their proboscis, they carry pollen between flowers, making them valuable to many wild and cultivated plants.",
        },
        {
          question: "Do all moths eat clothes?",
          answer:
            "No — that is a misconception about a few species. The vast majority of moths never go near clothing. Only a small number of \"clothes moth\" species have caterpillars that feed on natural fibres like wool, and even then it's the larvae, not the adult moths, that do the damage.",
        },
      ]}
      quickFacts={[
        { label: "Group", value: "Order Lepidoptera" },
        { label: "Reference species", value: "Actias luna (luna moth)" },
        { label: "Class", value: "Insecta" },
        { label: "Diversity", value: "Far outnumber butterflies" },
        { label: "Life cycle", value: "Complete metamorphosis" },
        { label: "Activity", value: "Mostly nocturnal" },
        { label: "Role", value: "Pollinators; key food source" },
        { label: "Status", value: "Many declining (verify)" },
      ]}
      relatedLinks={[
        { label: "Butterfly Profile", href: "/animals/butterfly", description: "A close day-flying relative" },
        { label: "Bee Profile", href: "/animals/bee", description: "Another key pollinator" },
        { label: "Beetle Profile", href: "/animals/beetle", description: "The most diverse insect group" },
        { label: "Animal Taxonomy — Invertebrates", href: "/animal-taxonomy/invertebrates", description: "How invertebrates are grouped" },
        { label: "Insects & Invertebrates", href: "/animal-encyclopedia/insects" },
      ]}
    />
  );
}
