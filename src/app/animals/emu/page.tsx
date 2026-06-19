import type { Metadata } from "next";
import AnimalProfileLayout from "@/components/AnimalProfileLayout";
import { ANIMAL_SOURCES } from "@/lib/educational/animal-sources";
import { getAnimalGalleryImages, getAnimalImage, getAnimalOgImage } from "@/lib/images/animal-images";
import { buildArticleMetadata } from "@/lib/metadata";

const PATH = "/animals/emu";
const TITLE = "Emu — Profile, Habitat, Diet & Behavior";
const DESC =
  "Explore the emu (Dromaius novaehollandiae): Australia's largest bird, a tall flightless ratite of grassland and bush, second only to the ostrich in size.";

export const metadata: Metadata = buildArticleMetadata({
  title: TITLE,
  description: DESC,
  path: PATH,
  publishedTime: "2026-06-19",
  modifiedTime: "2026-06-19",
  ogImage: getAnimalOgImage("emu"),
});

export default function EmuPage() {
  return (
    <AnimalProfileLayout
      commonName="Emu"
      scientificName="Dromaius novaehollandiae"
      pageTitle={TITLE}
      description={DESC}
      path={PATH}
      parentCategory="Birds"
      parentCategoryHref="/animal-encyclopedia/birds"
      tags={["Bird", "Ratite", "Flightless"]}
      image={getAnimalImage("emu") ?? undefined}
      galleryImages={getAnimalGalleryImages("emu")}
      sources={ANIMAL_SOURCES.emu}
      publishedDate="2026-06-19"
      modifiedDate="2026-06-19"
      overview={
        <>
          <p>
            The emu (<em>Dromaius novaehollandiae</em>) is the largest bird native
            to Australia and the second-tallest living bird after the ostrich. A
            flightless ratite, it is a familiar sight across much of the Australian
            mainland, striding through grassland, bush, and open woodland on long,
            powerful legs.
          </p>
          <p>
            Emus have soft, shaggy grey-brown plumage and can travel long distances
            in search of food and water, sometimes moving widely in response to
            rainfall.
          </p>
          <p>
            <strong>Conservation note:</strong> the emu is widespread across
            mainland Australia and is generally assessed in a lower category of
            concern, although some island forms historically went extinct. Verify
            current status at iucnredlist.org.
          </p>
        </>
      }
      habitat={
        <p>
          Emus occur across most of mainland Australia, in habitats from grassland,
          scrub, and open woodland to the edges of arid country. They avoid dense
          forest and the driest deserts, and their movements often track seasonal
          food and water availability.
        </p>
      }
      diet={
        <p>
          Emus are omnivores with a varied, opportunistic diet of plants —
          including seeds, fruit, flowers, shoots, and grasses — along with insects
          and other small invertebrates. Like other ratites, they swallow stones
          that help grind food in the gizzard.
        </p>
      }
      behavior={
        <p>
          Emus are mostly nomadic and can be solitary or form loose groups,
          especially around food and water. In a notable reversal of roles, the
          male incubates the eggs and raises the striped chicks. Emus are strong
          runners and can also swim when needed. They make distinctive deep
          drumming and grunting sounds, produced in part by an inflatable neck sac.
        </p>
      }
      humanInteraction={
        <p>
          Emus are farmed in Australia and elsewhere for meat, oil, and leather, and
          they feature prominently in Australian culture. Wild emus are widespread,
          though they can come into conflict with agriculture in some areas. For
          current status and regional context, consult authoritative sources.
        </p>
      }
      faqs={[
        {
          question: "Can emus fly?",
          answer:
            "No. Like ostriches and cassowaries, emus are flightless ratites. They have small, reduced wings and are adapted instead for walking and running long distances on powerful legs.",
        },
        {
          question: "Which parent raises emu chicks?",
          answer:
            "The male. After the female lays the eggs, the male incubates them for around eight weeks — often without eating much during that time — and then cares for and protects the striped chicks once they hatch.",
        },
        {
          question: "How big is an emu?",
          answer:
            "The emu is Australia's tallest bird and the second-tallest living bird in the world after the ostrich. Exact size varies with sex, age, and condition, with females generally somewhat larger than males.",
        },
        {
          question: "What do emus eat?",
          answer:
            "Emus are omnivores, eating a wide range of plant material — seeds, fruit, flowers, shoots, and grasses — along with insects and other small invertebrates, depending on what is available.",
        },
      ]}
      quickFacts={[
        { label: "Scientific name", value: "Dromaius novaehollandiae" },
        { label: "Class", value: "Aves" },
        { label: "Group", value: "Ratite (flightless)" },
        { label: "Claim to fame", value: "Largest bird native to Australia" },
        { label: "Diet", value: "Omnivore" },
        { label: "Incubation", value: "By the male" },
        { label: "Habitat", value: "Grassland, scrub, open woodland" },
        { label: "Range", value: "Mainland Australia" },
        { label: "IUCN Status", value: "Verify before publication" },
      ]}
      relatedLinks={[
        { label: "Ostrich Profile", href: "/animals/ostrich", description: "The world's largest bird" },
        { label: "Cassowary Profile", href: "/animals/cassowary", description: "A powerful tropical ratite" },
        { label: "Kiwi Profile", href: "/animals/kiwi", description: "A small flightless relative" },
        { label: "Fauna by Continent", href: "/fauna/continents", description: "Australian fauna in context" },
        { label: "Bird Encyclopedia", href: "/animal-encyclopedia/birds" },
      ]}
    />
  );
}
