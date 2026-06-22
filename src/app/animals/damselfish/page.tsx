import type { Metadata } from "next";
import AnimalProfileLayout from "@/components/AnimalProfileLayout";
import { ANIMAL_SOURCES } from "@/lib/educational/animal-sources";
import { getAnimalGalleryImages, getAnimalImage, getAnimalOgImage } from "@/lib/images/animal-images";
import { buildArticleMetadata } from "@/lib/metadata";

const PATH = "/animals/damselfish";
const TITLE = "Damselfish — Profile, the Bold Little Reef Fish That Farms Algae";
const DESC =
  "Explore damselfish (family Pomacentridae): small, colourful, famously feisty reef fish — clownfish are among them — and some 'farm' and fiercely defend patches of algae on the coral.";

export const metadata: Metadata = buildArticleMetadata({
  title: TITLE,
  description: DESC,
  path: PATH,
  publishedTime: "2026-06-22",
  modifiedTime: "2026-06-22",
  ogImage: getAnimalOgImage("damselfish"),
});

export default function DamselfishPage() {
  return (
    <AnimalProfileLayout
      commonName="Damselfish"
      scientificName="family Pomacentridae"
      pageTitle={TITLE}
      description={DESC}
      path={PATH}
      parentCategory="Fish"
      parentCategoryHref="/animal-encyclopedia/fish"
      tags={["Fish", "Coral reef", "Marine"]}
      image={getAnimalImage("damselfish") ?? undefined}
      galleryImages={getAnimalGalleryImages("damselfish")}
      sources={ANIMAL_SOURCES.damselfish}
      publishedDate="2026-06-22"
      modifiedDate="2026-06-22"
      overview={
        <>
          <p>
            Damselfish (family Pomacentridae) are small, often brightly coloured fish that are
            among the most abundant and conspicuous residents of coral reefs. They come in a huge
            range of colours — blues, yellows, browns, and the bold-barred &ldquo;sergeant
            majors&rdquo; — and, famously, the clownfish (anemonefish) are part of this same family.
            For their modest size, damselfish are remarkably bold and pugnacious, often standing
            their ground against much larger intruders.
          </p>
          <p>
            Many damselfish are dedicated farmers: they tend, weed, and aggressively defend small
            patches (&ldquo;gardens&rdquo;) of algae on the reef, driving off other fish — and even
            nipping at divers — to protect their crop.
          </p>
          <p>
            <strong>Note:</strong> &ldquo;damselfish&rdquo; covers a large family; details here
            describe the group broadly. Treat general statements as approximate and verify against
            authoritative sources.
          </p>
        </>
      }
      habitat={
        <p>
          Damselfish live mainly on tropical and subtropical coral and rocky reefs in the Indian,
          Pacific, and Atlantic Oceans, with the greatest variety in the Indo-Pacific; some occur in
          cooler or deeper waters. Most are shallow-water reef fish closely tied to coral and rocky
          structure, which provides shelter, feeding territory, and nesting sites.
        </p>
      }
      diet={
        <p>
          Damselfish have varied diets. Many feed on algae — some are the famous &ldquo;farmer&rdquo;
          species that cultivate algal turf — while others feed largely on plankton, picking tiny
          drifting animals from the water, and some take small invertebrates. The plankton-feeders
          often hover in shoals above the reef, darting back to cover when threatened, while the
          algae-farmers stay close to their tended patches.
        </p>
      }
      behavior={
        <p>
          Damselfish are best known for their feistiness and their farming. Algae-farming species
          defend a territory on the reef, weeding out unwanted seaweeds to encourage the algae they
          eat and vigorously chasing off intruders — including fish many times their size, and
          sometimes nipping at human divers who stray too close. Their farming can even shape the
          local reef community. Many damselfish are also devoted parents: a male typically guards a
          nest of eggs laid on a cleaned surface, fanning them with his fins and protecting them
          until they hatch. The clownfish, a specialised damselfish, takes this further by living
          among the stinging tentacles of sea anemones for protection.
        </p>
      }
      humanInteraction={
        <p>
          Damselfish are familiar to anyone who snorkels or dives on a reef, and many — including
          clownfish and the vivid blue damsels — are popular marine-aquarium fish, though their
          boldness can make some scrappy tankmates. As key reef residents they are important in reef
          food webs and ecology. They depend on healthy coral reefs, so reef degradation is the main
          long-term threat, while most species remain common. Consult authoritative sources for
          status.
        </p>
      }
      faqs={[
        {
          question: "Are clownfish damselfish?",
          answer:
            "Yes. Clownfish (also called anemonefish) belong to the damselfish family, Pomacentridae. They're a specialised group of damselfish famous for living among the stinging tentacles of sea anemones, but they share the family's small size, bold nature, and devoted egg-guarding — so the celebrity clownfish is really a kind of damselfish.",
        },
        {
          question: "Do damselfish really farm algae?",
          answer:
            "Many do. 'Farmer' damselfish tend small patches of algae on the reef, weeding out species they don't want to encourage the algal turf they eat, and they fiercely defend these gardens from other fish. This active cultivation and defence is genuine farming behaviour, and it can noticeably shape which algae and animals thrive in that part of the reef.",
        },
        {
          question: "Why are damselfish so aggressive?",
          answer:
            "Mostly to defend resources. Algae-farming damselfish protect their food patches, and nesting males guard their eggs, so they aggressively chase off intruders — often fish far larger than themselves, and occasionally nipping at divers. For a small fish, this bold territoriality is an effective way to hold onto food and protect the next generation.",
        },
        {
          question: "Do damselfish look after their eggs?",
          answer:
            "Yes, many are attentive parents. Typically a male prepares and guards a nest of eggs laid on a cleaned hard surface, fanning them with his fins to keep them oxygenated and clean and defending them from predators until they hatch. This parental care is a hallmark of the family, taken to an extreme by their clownfish relatives.",
        },
      ]}
      quickFacts={[
        { label: "Group", value: "Family Pomacentridae (damselfish)" },
        { label: "Includes", value: "Clownfish / anemonefish" },
        { label: "Class", value: "Actinopterygii (ray-finned fish)" },
        { label: "Size", value: "Small, often vividly coloured" },
        { label: "Behaviour", value: "Bold & territorial; some farm algae" },
        { label: "Diet", value: "Algae and/or plankton; small invertebrates" },
        { label: "Parenting", value: "Males guard egg nests" },
        { label: "Habitat", value: "Coral & rocky reefs (esp. Indo-Pacific)" },
      ]}
      relatedLinks={[
        { label: "Clownfish Profile", href: "/animals/clownfish", description: "A specialised damselfish" },
        { label: "Butterflyfish Profile", href: "/animals/butterflyfish", description: "Another colourful reef fish" },
        { label: "Sea Anemone Profile", href: "/animals/sea-anemone", description: "The clownfish's partner" },
        { label: "Ocean fauna by depth", href: "/fauna/ocean", description: "Reef habitats in context" },
        { label: "Fish Encyclopedia", href: "/animal-encyclopedia/fish" },
      ]}
    />
  );
}
