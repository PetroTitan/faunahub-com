import type { Metadata } from "next";
import AnimalProfileLayout from "@/components/AnimalProfileLayout";
import { ANIMAL_SOURCES } from "@/lib/educational/animal-sources";
import { getAnimalGalleryImages, getAnimalImage, getAnimalOgImage } from "@/lib/images/animal-images";
import { buildArticleMetadata } from "@/lib/metadata";

const PATH = "/animals/bee-eater";
const TITLE = "Bee-eater — Profile, Habitat, Diet & Behavior";
const DESC =
  "Explore bee-eaters (family Meropidae): brilliantly coloured birds that catch bees and other flying insects in mid-air, with the European bee-eater as a dazzling reference species.";

export const metadata: Metadata = buildArticleMetadata({
  title: TITLE,
  description: DESC,
  path: PATH,
  publishedTime: "2026-06-19",
  modifiedTime: "2026-06-19",
  ogImage: getAnimalOgImage("bee-eater"),
});

export default function BeeEaterPage() {
  return (
    <AnimalProfileLayout
      commonName="Bee-eater"
      scientificName="family Meropidae"
      pageTitle={TITLE}
      description={DESC}
      path={PATH}
      parentCategory="Birds"
      parentCategoryHref="/animal-encyclopedia/birds"
      tags={["Bird", "Insectivore", "Migratory"]}
      image={getAnimalImage("bee-eater") ?? undefined}
      galleryImages={getAnimalGalleryImages("bee-eater")}
      sources={ANIMAL_SOURCES["bee-eater"]}
      publishedDate="2026-06-19"
      modifiedDate="2026-06-19"
      overview={
        <>
          <p>
            Bee-eaters are slender, brilliantly coloured birds of the family
            Meropidae, found across Africa, Europe, Asia, and Australia. As their
            name suggests, they specialise in catching bees, wasps, and other flying
            insects on the wing. The animal shown here is the European bee-eater
            (<em>Merops apiaster</em>), a dazzling, long-distance migrant.
          </p>
          <p>
            With pointed wings, a slim down-curved bill, and often jewel-like
            plumage, bee-eaters are agile aerial hunters and a favourite of
            birdwatchers wherever they occur.
          </p>
          <p>
            <strong>Conservation note:</strong> many bee-eaters, including the
            European bee-eater, are widespread and not of conservation concern, while
            some species are more localised. Verify a particular species&apos; status
            at iucnredlist.org.
          </p>
        </>
      }
      habitat={
        <p>
          Bee-eaters favour warm, open country — grassland, savanna, farmland,
          riverbanks, and open woodland — with perches for hunting and earth banks
          for nesting. Migratory species such as the European bee-eater breed in
          temperate regions and winter in warmer areas, covering long distances.
        </p>
      }
      diet={
        <p>
          Bee-eaters are insectivores that catch flying insects — especially bees,
          wasps, and dragonflies — in mid-air. For stinging prey, a bee-eater
          typically returns to a perch and removes the sting by beating and rubbing
          the insect against the branch before swallowing it, reducing the risk of
          being stung.
        </p>
      }
      behavior={
        <p>
          Bee-eaters are social, often seen in groups, and many nest colonially in
          tunnels dug into sandy banks or flat ground. They hunt from exposed
          perches, sallying out to seize passing insects with quick, graceful flight.
          Some species are cooperative breeders, with helpers assisting a pair in
          raising young.
        </p>
      }
      humanInteraction={
        <p>
          Bee-eaters are admired for their colours and aerial skill and are popular
          with birdwatchers. They occasionally come into minor conflict with
          beekeeping, though their overall impact is generally limited. The main
          concerns for some species are habitat change and loss of nesting banks. For
          current status, consult authoritative sources.
        </p>
      }
      faqs={[
        {
          question: "Do bee-eaters really eat bees?",
          answer:
            "Yes. Bee-eaters specialise in catching bees, wasps, and other flying insects in mid-air. To deal with stinging prey, a bee-eater usually carries it back to a perch and rubs and beats it against the branch to remove the sting before eating it.",
        },
        {
          question: "How do bee-eaters avoid being stung?",
          answer:
            "They handle stinging insects carefully: after catching a bee or wasp, a bee-eater returns to a perch and repeatedly strikes and rubs the insect against the branch, which removes or discharges the sting before the bird swallows the prey.",
        },
        {
          question: "Where do bee-eaters nest?",
          answer:
            "Most bee-eaters nest in tunnels they excavate into sandy banks or sometimes flat ground, and many breed in colonies. Some species are cooperative breeders, with extra adults helping to raise the chicks.",
        },
        {
          question: "Do bee-eaters migrate?",
          answer:
            "Many do. The European bee-eater, for example, is a long-distance migrant that breeds in temperate regions and spends the non-breeding season in warmer areas, while some tropical bee-eaters are more sedentary.",
        },
      ]}
      quickFacts={[
        { label: "Group", value: "Family Meropidae" },
        { label: "Reference species", value: "Merops apiaster (European bee-eater)" },
        { label: "Class", value: "Aves" },
        { label: "Diet", value: "Flying insects (bees, wasps, dragonflies)" },
        { label: "Hunting style", value: "Aerial sallies from a perch" },
        { label: "Nesting", value: "Tunnels in banks; often colonial" },
        { label: "Range", value: "Africa, Europe, Asia, Australia" },
        { label: "IUCN Status", value: "Varies by species (verify)" },
      ]}
      relatedLinks={[
        { label: "Kingfisher Profile", href: "/animals/kingfisher", description: "A related, vivid waterside bird" },
        { label: "Hummingbird Profile", href: "/animals/hummingbird", description: "Another small, colourful bird" },
        { label: "Bee Profile", href: "/animals/bee", description: "A key prey of bee-eaters" },
        { label: "Birdwatching", href: "/birdwatching", description: "Tips for observing colourful birds" },
        { label: "Bird Encyclopedia", href: "/animal-encyclopedia/birds" },
      ]}
    />
  );
}
