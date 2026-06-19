import type { Metadata } from "next";
import AnimalProfileLayout from "@/components/AnimalProfileLayout";
import { ANIMAL_SOURCES } from "@/lib/educational/animal-sources";
import { getAnimalGalleryImages, getAnimalImage, getAnimalOgImage } from "@/lib/images/animal-images";
import { buildArticleMetadata } from "@/lib/metadata";

const PATH = "/animals/ostrich";
const TITLE = "Ostrich — Profile, Habitat, Diet & Speed";
const DESC =
  "Explore the ostrich (Struthio camelus): the world's largest and heaviest living bird, a fast-running flightless ratite of African grasslands and semi-deserts.";

export const metadata: Metadata = buildArticleMetadata({
  title: TITLE,
  description: DESC,
  path: PATH,
  publishedTime: "2026-06-19",
  modifiedTime: "2026-06-19",
  ogImage: getAnimalOgImage("ostrich"),
});

export default function OstrichPage() {
  return (
    <AnimalProfileLayout
      commonName="Ostrich"
      scientificName="Struthio camelus"
      pageTitle={TITLE}
      description={DESC}
      path={PATH}
      parentCategory="Birds"
      parentCategoryHref="/animal-encyclopedia/birds"
      tags={["Bird", "Ratite", "Flightless"]}
      image={getAnimalImage("ostrich") ?? undefined}
      galleryImages={getAnimalGalleryImages("ostrich")}
      sources={ANIMAL_SOURCES.ostrich}
      publishedDate="2026-06-19"
      modifiedDate="2026-06-19"
      overview={
        <>
          <p>
            The ostrich (<em>Struthio camelus</em>) is the largest and heaviest
            living bird in the world. It is a flightless ratite of African
            grasslands and semi-deserts, built not for flight but for running —
            the fastest bird on land and one of the fastest land animals over
            distance.
          </p>
          <p>
            With its long neck and legs, large eyes, and distinctive plumage,
            the ostrich is unmistakable. Males are largely black with white
            wing and tail feathers, while females are brownish-grey.
          </p>
          <p>
            <strong>Conservation note:</strong> the common ostrich is widespread
            across much of sub-Saharan Africa and is generally assessed in a
            lower category of concern, though some populations are more
            restricted. Verify current status at iucnredlist.org.
          </p>
        </>
      }
      habitat={
        <p>
          Ostriches inhabit open country across sub-Saharan Africa — savanna,
          grassland, scrub, and semi-desert. They favour open landscapes where
          their excellent eyesight and running speed help them detect and escape
          predators.
        </p>
      }
      diet={
        <p>
          Ostriches are mainly herbivores, feeding on seeds, grasses, leaves,
          flowers, and fruit, and also taking some insects and small animals. Like
          other birds, they swallow grit and small stones that help grind food in
          the gizzard, and they can go without drinking for periods by using
          moisture from plants.
        </p>
      }
      behavior={
        <p>
          Ostriches are social, often seen in groups, and rely on speed and
          powerful kicks for defense. They can sprint at high speed over open
          ground and maintain fast running over distance. Several females may lay
          eggs in a single communal nest, which the dominant pair incubates — the
          male typically at night and the female by day. The popular belief that
          ostriches bury their heads in sand is a myth.
        </p>
      }
      humanInteraction={
        <p>
          Ostriches are farmed in many countries for feathers, leather, meat, and
          eggs, and wild populations are affected by habitat change and hunting in
          parts of their range. The species remains widespread overall; for current
          status and any regional concerns, consult authoritative sources such as
          the IUCN Red List.
        </p>
      }
      faqs={[
        {
          question: "Can ostriches fly?",
          answer:
            "No. Ostriches are flightless. They are ratites — a group of large flightless birds — and instead of flying they are superbly adapted for running, with long, powerful legs. Their wings are used for balance, display, and shade rather than flight.",
        },
        {
          question: "How fast can an ostrich run?",
          answer:
            "The ostrich is the fastest bird on land and can sprint at high speed in short bursts, while sustaining fast running over longer distances. Its long legs and two-toed feet are specialised for speed across open ground.",
        },
        {
          question: "Do ostriches really bury their heads in the sand?",
          answer:
            "No — this is a myth. Ostriches sometimes lower their heads to the ground to tend eggs or to stay inconspicuous, which from a distance can look like burying, but they do not put their heads in sand.",
        },
        {
          question: "What do ostriches eat?",
          answer:
            "Ostriches are mainly herbivorous, eating seeds, grasses, leaves, flowers, and fruit, with some insects and small animals. They swallow grit to help grind food internally.",
        },
      ]}
      quickFacts={[
        { label: "Scientific name", value: "Struthio camelus" },
        { label: "Class", value: "Aves" },
        { label: "Group", value: "Ratite (flightless)" },
        { label: "Claim to fame", value: "World's largest living bird" },
        { label: "Diet", value: "Mainly herbivore" },
        { label: "Flight", value: "Flightless; fastest bird on land" },
        { label: "Habitat", value: "Savanna, grassland, semi-desert" },
        { label: "Range", value: "Sub-Saharan Africa" },
        { label: "IUCN Status", value: "Verify before publication" },
      ]}
      relatedLinks={[
        { label: "Emu Profile", href: "/animals/emu", description: "Australia's large ratite" },
        { label: "Cassowary Profile", href: "/animals/cassowary", description: "A powerful tropical ratite" },
        { label: "Flamingo Profile", href: "/animals/flamingo", description: "Another striking large bird" },
        { label: "Fauna by Continent", href: "/fauna/continents", description: "African fauna in context" },
        { label: "Bird Encyclopedia", href: "/animal-encyclopedia/birds" },
      ]}
    />
  );
}
