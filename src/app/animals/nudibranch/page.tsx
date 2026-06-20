import type { Metadata } from "next";
import AnimalProfileLayout from "@/components/AnimalProfileLayout";
import { ANIMAL_SOURCES } from "@/lib/educational/animal-sources";
import { getAnimalGalleryImages, getAnimalImage, getAnimalOgImage } from "@/lib/images/animal-images";
import { buildArticleMetadata } from "@/lib/metadata";

const PATH = "/animals/nudibranch";
const TITLE = "Nudibranch — Profile, Colours, Diet & Defences";
const DESC =
  "Explore nudibranchs (order Nudibranchia): dazzling shell-less sea slugs whose bright colours warn of borrowed stings and toxins, beloved by divers and photographers.";

export const metadata: Metadata = buildArticleMetadata({
  title: TITLE,
  description: DESC,
  path: PATH,
  publishedTime: "2026-06-19",
  modifiedTime: "2026-06-19",
  ogImage: getAnimalOgImage("nudibranch"),
});

export default function NudibranchPage() {
  return (
    <AnimalProfileLayout
      commonName="Nudibranch"
      scientificName="order Nudibranchia"
      pageTitle={TITLE}
      description={DESC}
      path={PATH}
      parentCategory="Marine Animals"
      parentCategoryHref="/animal-encyclopedia/marine-animals"
      tags={["Marine invertebrate", "Mollusc", "Sea slug"]}
      image={getAnimalImage("nudibranch") ?? undefined}
      galleryImages={getAnimalGalleryImages("nudibranch")}
      sources={ANIMAL_SOURCES.nudibranch}
      publishedDate="2026-06-19"
      modifiedDate="2026-06-19"
      overview={
        <>
          <p>
            Nudibranchs (order Nudibranchia) are soft-bodied marine molluscs — a kind of
            shell-less sea slug — famous for their extraordinary colours and shapes.
            Despite being gastropods (relatives of snails), adult nudibranchs have no
            shell, and many are jewel-like in appearance. The reference shown here is a
            <em> Chromodoris</em> nudibranch.
          </p>
          <p>
            Their dazzling colours are usually a warning: many nudibranchs are
            distasteful or defended, and some perform a remarkable trick — eating
            stinging or toxic animals and recycling those defences for their own
            protection.
          </p>
          <p>
            <strong>Note:</strong> nudibranchs are hugely diverse (thousands of species),
            so habits and colours vary enormously. Treat general statements as
            approximate and verify against authoritative sources.
          </p>
        </>
      }
      habitat={
        <p>
          Nudibranchs are found in seas all over the world, from warm coral reefs to
          cold and even polar waters, and from the intertidal zone to the deep sea. Most
          live on the seabed, crawling over reefs, rocks, sand, and the very organisms
          they feed on.
        </p>
      }
      diet={
        <p>
          Nudibranchs are carnivores, and many are specialists: different species feed on
          sponges, hydroids, anemones, corals, bryozoans, or even other sea slugs.
          Remarkably, some that eat stinging cnidarians can store the prey&apos;s
          undischarged stinging cells in their own bodies for defence, while others
          retain toxins or even photosynthetic algae from their food.
        </p>
      }
      behavior={
        <p>
          Nudibranchs glide slowly on a muscular foot, sensing their surroundings with a
          pair of head tentacles (rhinophores) that detect chemicals in the water. Many
          breathe through feathery gills or other projections on the back. They are
          hermaphrodites — each individual has both male and female organs — and a pair
          will exchange sperm when they mate.
        </p>
      }
      humanInteraction={
        <p>
          Nudibranchs are among the most photographed animals in the sea and are a
          favourite of divers for their colour and variety. Scientists also study their
          chemistry for natural compounds. They are sensitive to reef and ocean health,
          so the broad concerns relate to habitat condition. Consult authoritative
          sources for specifics.
        </p>
      }
      faqs={[
        {
          question: "Is a nudibranch a slug or a snail?",
          answer:
            "Both, in a sense. Nudibranchs are gastropod molluscs — the same class as snails and land slugs — but adults have lost the shell, so they are a type of \"sea slug.\" The name nudibranch means \"naked gills,\" referring to the exposed breathing structures many of them carry on the back.",
        },
        {
          question: "Why are nudibranchs so brightly coloured?",
          answer:
            "Their vivid colours are usually a warning (aposematic) signal that the animal is distasteful or defended. Bright, conspicuous patterns tell predators to keep away, which works best when the nudibranch really does carry toxins or stings.",
        },
        {
          question: "Can nudibranchs really use other animals' stings?",
          answer:
            "Some can. Certain nudibranchs eat stinging cnidarians (like hydroids or anemones) and store the prey's undischarged stinging cells in projections on their own backs, effectively borrowing those defences. Others retain toxins from their food, or even keep working algae from what they eat.",
        },
        {
          question: "What do nudibranchs eat?",
          answer:
            "They are carnivores, and many are highly specialised — feeding on sponges, hydroids, anemones, corals, bryozoans, or other sea slugs depending on the species. This specialised diet is closely tied to their defences and sometimes their colours.",
        },
      ]}
      quickFacts={[
        { label: "Group", value: "Order Nudibranchia" },
        { label: "Reference", value: "Chromodoris (a colourful genus)" },
        { label: "Class", value: "Gastropoda (molluscs)" },
        { label: "Type", value: "Shell-less sea slug" },
        { label: "Colours", value: "Often aposematic (warning)" },
        { label: "Diet", value: "Carnivore; often specialised" },
        { label: "Reproduction", value: "Hermaphrodite" },
        { label: "Habitat", value: "Seas worldwide (shallow to deep)" },
      ]}
      relatedLinks={[
        { label: "Sea Anemone Profile", href: "/animals/sea-anemone", description: "Prey for some nudibranchs" },
        { label: "Cuttlefish Profile", href: "/animals/cuttlefish", description: "Another striking mollusc" },
        { label: "Octopus Profile", href: "/animals/octopus", description: "A cephalopod mollusc" },
        { label: "Animal Taxonomy — Invertebrates", href: "/animal-taxonomy/invertebrates", description: "How invertebrates are grouped" },
        { label: "Marine Animals", href: "/animal-encyclopedia/marine-animals" },
      ]}
    />
  );
}
