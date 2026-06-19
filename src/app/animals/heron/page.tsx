import type { Metadata } from "next";
import AnimalProfileLayout from "@/components/AnimalProfileLayout";
import { ANIMAL_SOURCES } from "@/lib/educational/animal-sources";
import { getAnimalGalleryImages, getAnimalImage, getAnimalOgImage } from "@/lib/images/animal-images";
import { buildArticleMetadata } from "@/lib/metadata";

const PATH = "/animals/heron";
const TITLE = "Heron — Profile, Habitat, Diet & Behavior";
const DESC =
  "Explore herons (family Ardeidae): tall, long-legged wading birds that hunt fish and other prey at the water's edge, with the grey heron as a familiar reference species.";

export const metadata: Metadata = buildArticleMetadata({
  title: TITLE,
  description: DESC,
  path: PATH,
  publishedTime: "2026-06-19",
  modifiedTime: "2026-06-19",
  ogImage: getAnimalOgImage("heron"),
});

export default function HeronPage() {
  return (
    <AnimalProfileLayout
      commonName="Heron"
      scientificName="family Ardeidae"
      pageTitle={TITLE}
      description={DESC}
      path={PATH}
      parentCategory="Birds"
      parentCategoryHref="/animal-encyclopedia/birds"
      tags={["Bird", "Wading bird", "Carnivore"]}
      image={getAnimalImage("heron") ?? undefined}
      galleryImages={getAnimalGalleryImages("heron")}
      sources={ANIMAL_SOURCES.heron}
      publishedDate="2026-06-19"
      modifiedDate="2026-06-19"
      overview={
        <>
          <p>
            Herons are tall, long-legged wading birds of the family Ardeidae,
            found near water across much of the world. With long necks and
            dagger-like bills, they are patient hunters of fish and other small
            animals at the water&apos;s edge. The animal shown here is the grey
            heron (<em>Ardea cinerea</em>), a widespread and familiar reference
            species.
          </p>
          <p>
            The family also includes egrets and bitterns. Herons typically fly
            with the neck folded back into an S-shape, which helps distinguish them
            from storks and cranes in flight.
          </p>
          <p>
            <strong>Conservation note:</strong> many herons are widespread and
            common, while some species are more localised. Verify any particular
            species&apos; status at iucnredlist.org.
          </p>
        </>
      }
      habitat={
        <p>
          Herons live in a wide range of wetland habitats — rivers, lakes,
          marshes, estuaries, and coasts — and some also forage in fields and
          grassland. They are found on most continents and adapt well to
          human-altered wetlands, parks, and waterways.
        </p>
      }
      diet={
        <p>
          Herons are carnivores. They feed mainly on fish, caught with a swift
          strike of the bill, along with amphibians, insects, crustaceans, small
          mammals, and other prey depending on the species and habitat. They often
          hunt by standing still or wading slowly and waiting to ambush prey.
        </p>
      }
      behavior={
        <p>
          Many herons hunt alone but nest together in colonies called heronries,
          often in trees near water. They are most active around dawn and dusk,
          though some feed through the day. Their slow, deliberate stalking and
          sudden strike are characteristic, and in flight the folded neck and
          trailing legs are distinctive.
        </p>
      }
      humanInteraction={
        <p>
          Herons are a familiar sight at wetlands and are generally tolerant of
          people. The main pressures on herons relate to wetland loss and water
          quality, though many species remain common. For current status, consult
          authoritative sources such as the IUCN Red List.
        </p>
      }
      faqs={[
        {
          question: "What is the difference between a heron and a crane or stork?",
          answer:
            "Herons, cranes, and storks are all tall wading birds but belong to different families. A key field clue is flight: herons fly with the neck folded back in an S-shape, while cranes and storks usually fly with the neck outstretched. Herons also tend to be ambush fishers at the water's edge.",
        },
        {
          question: "What do herons eat?",
          answer:
            "Herons are carnivores that feed mainly on fish, plus amphibians, insects, crustaceans, and small mammals depending on the species. They typically hunt by waiting motionless or wading slowly, then striking quickly with the bill.",
        },
        {
          question: "Are egrets herons?",
          answer:
            "Yes. Egrets are members of the heron family (Ardeidae) and are essentially herons, often (though not always) those with white plumage. Bitterns are also part of this family.",
        },
        {
          question: "Do herons nest alone?",
          answer:
            "Herons often hunt alone but commonly breed in colonies known as heronries, frequently in trees near water, where many pairs nest close together.",
        },
      ]}
      quickFacts={[
        { label: "Group", value: "Family Ardeidae" },
        { label: "Reference species", value: "Ardea cinerea (grey heron)" },
        { label: "Class", value: "Aves" },
        { label: "Diet", value: "Carnivore (mainly fish)" },
        { label: "Hunting style", value: "Ambush at the water's edge" },
        { label: "In flight", value: "Neck folded in an S-shape" },
        { label: "Habitat", value: "Wetlands, rivers, lakes, coasts" },
        { label: "IUCN Status", value: "Varies by species (verify)" },
      ]}
      relatedLinks={[
        { label: "Flamingo Profile", href: "/animals/flamingo", description: "Another long-legged wading bird" },
        { label: "Pelican Profile", href: "/animals/pelican", description: "A fish-catching waterbird" },
        { label: "Stork Profile", href: "/animals/stork", description: "A tall wading relative-in-habit" },
        { label: "Ocean fauna by depth", href: "/fauna/ocean", description: "Aquatic habitats in context" },
        { label: "Bird Encyclopedia", href: "/animal-encyclopedia/birds" },
      ]}
    />
  );
}
