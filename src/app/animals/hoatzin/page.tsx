import type { Metadata } from "next";
import AnimalProfileLayout from "@/components/AnimalProfileLayout";
import { ANIMAL_SOURCES } from "@/lib/educational/animal-sources";
import { getAnimalGalleryImages, getAnimalImage, getAnimalOgImage } from "@/lib/images/animal-images";
import { buildArticleMetadata } from "@/lib/metadata";

const PATH = "/animals/hoatzin";
const TITLE = "Hoatzin — Profile, the 'Stinkbird' That Ferments Leaves";
const DESC =
  "Explore the hoatzin (Opisthocomus hoazin): a strange crested Amazonian bird that digests leaves by fermentation like a cow — and whose chicks have claws on their wings.";

export const metadata: Metadata = buildArticleMetadata({
  title: TITLE,
  description: DESC,
  path: PATH,
  publishedTime: "2026-06-20",
  modifiedTime: "2026-06-20",
  ogImage: getAnimalOgImage("hoatzin"),
});

export default function HoatzinPage() {
  return (
    <AnimalProfileLayout
      commonName="Hoatzin"
      scientificName="Opisthocomus hoazin"
      pageTitle={TITLE}
      description={DESC}
      path={PATH}
      parentCategory="Birds"
      parentCategoryHref="/animal-encyclopedia/birds"
      tags={["Bird", "Amazon", "Folivore"]}
      image={getAnimalImage("hoatzin") ?? undefined}
      galleryImages={getAnimalGalleryImages("hoatzin")}
      sources={ANIMAL_SOURCES.hoatzin}
      publishedDate="2026-06-20"
      modifiedDate="2026-06-20"
      overview={
        <>
          <p>
            The hoatzin (<em>Opisthocomus hoazin</em>) is one of the most peculiar birds in
            the world — a turkey-sized, spiky-crested bird of South American swamps and
            riverbanks, with a small blue face, red eyes, and a ragged crest. It is so
            unusual that it is placed in its own family, and its exact relationships to
            other birds have long puzzled scientists.
          </p>
          <p>
            Its strangest feature is its digestion: the hoatzin is the only bird known to
            ferment its food in an enlarged foregut, the way cattle and other ruminants do —
            which is also why it has earned the nickname &ldquo;stinkbird.&rdquo;
          </p>
          <p>
            <strong>Note:</strong> the hoatzin&apos;s evolutionary placement is still
            debated; treat statements about its relationships as ongoing science and verify
            against authoritative sources.
          </p>
        </>
      }
      habitat={
        <p>
          Hoatzins live in the swamps, flooded forests, and riverside and lakeside
          vegetation of the Amazon and Orinoco basins in tropical South America. They keep
          to dense waterside thickets, clambering through branches over the water rather
          than ranging widely, and they are usually found in noisy social groups.
        </p>
      }
      diet={
        <p>
          The hoatzin is a folivore — a rare diet among birds — feeding mainly on leaves,
          along with some flowers and fruit. To handle this tough, low-energy food, it
          ferments the plant material with the help of microbes in a greatly enlarged crop
          and lower oesophagus, breaking down cellulose much as a cow&apos;s stomach does.
          This foregut fermentation is unique among birds.
        </p>
      }
      behavior={
        <p>
          Because so much of the hoatzin&apos;s body is given over to its fermentation
          chamber, it is a clumsy, weak flier that mostly clambers about in waterside
          vegetation. The fermentation also gives the bird a distinctive manure-like smell,
          hence &ldquo;stinkbird.&rdquo; Most remarkably, hoatzin chicks have two functional
          claws on each wing, which they use to clamber through branches and to climb back
          up after dropping into the water to escape predators — the claws are lost as they
          mature. Hoatzins are social and very vocal.
        </p>
      }
      humanInteraction={
        <p>
          The hoatzin is widespread in suitable habitat and is generally not considered
          threatened, helped by its unpleasant smell and stringy flesh making it a poor
          target for hunting. It is a favourite of Amazon wildlife tours and a scientific
          curiosity. As with much Amazonian life, large-scale habitat change is the broad
          long-term concern. Consult authoritative sources for current status.
        </p>
      }
      faqs={[
        {
          question: "Why is the hoatzin called the 'stinkbird'?",
          answer:
            "Because it smells. The hoatzin ferments leaves in an enlarged foregut, much like a cow's stomach, and this digestive process gives the bird a distinctive, manure-like odour. The smell, combined with stringy meat, also makes it unappealing to hunters.",
        },
        {
          question: "How is the hoatzin's digestion unusual?",
          answer:
            "It is the only bird known to use foregut fermentation. The hoatzin breaks down tough leaves using microbes in a greatly enlarged crop and lower oesophagus, extracting nutrients from cellulose the way ruminants such as cattle do — a digestive strategy found in no other bird.",
        },
        {
          question: "Do baby hoatzins really have claws on their wings?",
          answer:
            "Yes. Hoatzin chicks have two working claws on each wing that let them clamber around branches and, if they fall or jump into the water to escape a predator, climb back up to the nest. These wing claws are lost as the birds grow up, and they often fascinate people for evoking ancient birds.",
        },
        {
          question: "What does the hoatzin eat?",
          answer:
            "Mainly leaves, plus some flowers and fruit — an unusual, largely leaf-based (folivorous) diet for a bird. Processing this tough food requires its special fermenting gut, and the heavy digestive system is part of why the hoatzin is such a poor flier.",
        },
      ]}
      quickFacts={[
        { label: "Scientific name", value: "Opisthocomus hoazin" },
        { label: "Class", value: "Aves (its own family)" },
        { label: "Diet", value: "Folivore (mainly leaves)" },
        { label: "Unique trait", value: "Foregut fermentation (only bird)" },
        { label: "Nickname", value: "'Stinkbird'" },
        { label: "Chicks", value: "Have claws on their wings" },
        { label: "Habitat", value: "Amazon & Orinoco wetlands" },
        { label: "Status", value: "Widespread (verify)" },
      ]}
      relatedLinks={[
        { label: "Potoo Profile", href: "/animals/potoo", description: "Another unusual neotropical bird" },
        { label: "Toucan Profile", href: "/animals/toucan", description: "An iconic Amazonian bird" },
        { label: "Turaco Profile", href: "/animals/turaco", description: "Another leaf- and fruit-eating bird" },
        { label: "Fauna by Continent", href: "/fauna/continents", description: "South American fauna in context" },
        { label: "Bird Encyclopedia", href: "/animal-encyclopedia/birds" },
      ]}
    />
  );
}
