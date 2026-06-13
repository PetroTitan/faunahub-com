import type { Metadata } from "next";
import AnimalProfileLayout from "@/components/AnimalProfileLayout";
import { ANIMAL_SOURCES } from "@/lib/educational/animal-sources";
import {
  getAnimalGalleryImages,
  getAnimalImage,
  getAnimalOgImage,
} from "@/lib/images/animal-images";
import { buildArticleMetadata } from "@/lib/metadata";

const PUBLISHED = "2026-06-12";
const MODIFIED = "2026-06-12";

const title = "Anaconda — Profile, Habitat, Diet & Behavior";
const description =
  "The green anaconda (Eunectes murinus) is one of the world's largest snakes. An educational profile of these aquatic, non-venomous constrictors — habitat, diet, and behaviour.";

export const metadata: Metadata = buildArticleMetadata({
  title,
  description,
  path: "/animals/anaconda",
  publishedTime: PUBLISHED,
  modifiedTime: MODIFIED,
  ogImage: getAnimalOgImage("anaconda"),
});

export default function AnacondaPage() {
  return (
    <AnimalProfileLayout
      commonName="Anaconda"
      pageTitle={title}
      description={description}
      path="/animals/anaconda"
      parentCategory="Reptiles & Amphibians"
      parentCategoryHref="/animal-encyclopedia/reptiles"
      tags={["Reptile", "Snake", "Wild"]}
      image={getAnimalImage("anaconda") ?? undefined}
      galleryImages={getAnimalGalleryImages("anaconda")}
      factsHeaderNote="“Anaconda” refers to several South American snakes; the reference is the green anaconda (Eunectes murinus), among the largest snakes. This is an educational wildlife profile — not a pet-ownership guide, and not a source of sensational attack claims."
      overview={
        <>
          <p>
            Anacondas are large, heavy-bodied, semi-aquatic snakes of South
            America. This page is a group-level overview; the green anaconda
            (<em>Eunectes murinus</em>) is used as a reference — one of the
            largest and heaviest snakes in the world, alongside the longer but
            more slender reticulated python. Anacondas are non-venomous
            constrictors that spend much of their lives in or near water.
          </p>
        </>
      }
      habitat={
        <>
          <p>
            Green anacondas live in the swamps, marshes, and slow rivers of
            tropical South America, especially the Amazon and Orinoco basins.
            Their bulky bodies are well suited to water, which supports their
            weight and aids ambush hunting; they are far less agile on land.
            Other anaconda species occupy related wetland habitats. Range varies
            by species.
          </p>
        </>
      }
      diet={
        <>
          <p>
            Anacondas are carnivorous constrictors that ambush prey at the
            water&apos;s edge, seizing and coiling around animals such as fish,
            birds, reptiles, and mammals, with larger individuals taking larger
            prey. They are non-venomous, subduing prey by constriction. This page
            describes general feeding ecology and avoids exaggerated or
            sensational claims.
          </p>
        </>
      }
      behavior={
        <>
          <p>
            Anacondas are mostly solitary and often lie submerged with only the
            eyes and nostrils, set high on the head, above the surface. They are
            ambush predators, relying on stealth rather than speed. Females are
            typically much larger than males and give birth to live young.
            Reports of their size and behaviour are often exaggerated in popular
            culture; this page keeps to a cautious, educational account.
          </p>
        </>
      }
      humanInteraction={
        <>
          <p>
            Anacondas are wild snakes, not pets; their size and needs make
            private keeping inappropriate and often regulated. They feature
            heavily in films and folklore, frequently with exaggerated danger,
            but they are best understood as ambush predators of remote wetlands.
            The green anaconda is generally not considered globally threatened,
            though it faces habitat and persecution pressures; conservation
            status should be checked against current sources. This page is
            educational, not care or handling advice.
          </p>
        </>
      }
      extraSections={[
        {
          heading: "Appearance & Recognition",
          body: (
            <>
              <p>
                The green anaconda is a thick-bodied olive-green snake patterned
                with dark oval blotches, with eyes and nostrils positioned high on
                the head for lurking at the surface. It is renowned for its great
                mass rather than extreme length. Other anacondas are smaller. The
                heavy build, aquatic habits, and blotched pattern help identify
                anacondas among large snakes.
              </p>
            </>
          ),
        },
      ]}
      similarAnimals={
        <p>
          Anacondas are boas, related to other constrictor snakes, and share the
          suborder Serpentes with the snake profile covered separately on
          FaunaHub. They are often compared with the reticulated python, which is
          longer but more slender; the anaconda is the heavier of the two.
        </p>
      }
      comparisonCallouts={[
        { href: "/animals/snake", label: "Snakes — the wider group" },
      ]}
      faqs={[
        {
          question: "Are anacondas the biggest snakes in the world?",
          answer:
            "The green anaconda is among the largest snakes by mass — one of the heaviest in the world — while the reticulated python is generally longer. \"Biggest\" depends on whether you mean length or weight. Reports of record sizes are often exaggerated.",
        },
        {
          question: "Are anacondas venomous?",
          answer:
            "No. Anacondas are non-venomous constrictors. They subdue prey by gripping and coiling around it rather than by venom. This page describes that ecologically and does not provide handling or safety instructions.",
        },
        {
          question: "Can anacondas be kept as pets?",
          answer:
            "Anacondas are large wild snakes with demanding needs, and private keeping is inappropriate and often regulated. This page is an educational wildlife profile, not a care or ownership guide.",
        },
      ]}
      quickFacts={[
        { label: "Reference species", value: "Green anaconda (Eunectes murinus)" },
        { label: "Family", value: "Boidae (boas)" },
        { label: "Class", value: "Reptilia" },
        { label: "Diet", value: "Carnivore (non-venomous constrictor)" },
        { label: "Habitat", value: "South American swamps and slow rivers" },
        { label: "Conservation", value: "Verify current status on IUCN Red List" },
      ]}
      relatedLinks={[
        { label: "Snake Profile", href: "/animals/snake", description: "The wider snake group" },
        { label: "Caiman Profile", href: "/animals/caiman" },
        { label: "Monitor Lizard Profile", href: "/animals/monitor-lizard" },
        { label: "Reptiles & Amphibians", href: "/animal-encyclopedia/reptiles" },
        { label: "Wildlife Hub", href: "/wildlife" },
      ]}
      sources={ANIMAL_SOURCES.anaconda}
      publishedDate={PUBLISHED}
      modifiedDate={MODIFIED}
    />
  );
}
