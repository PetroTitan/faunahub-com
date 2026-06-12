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

const title = "Ant — Profile, Habitat, Diet & Behavior";
const description =
  "Ants are social insects living in colonies. A group-level overview of the family Formicidae: castes, nests, varied diets, and ecological importance.";

export const metadata: Metadata = buildArticleMetadata({
  title,
  description,
  path: "/animals/ant",
  publishedTime: PUBLISHED,
  modifiedTime: MODIFIED,
  ogImage: getAnimalOgImage("ant"),
});

export default function AntPage() {
  return (
    <AnimalProfileLayout
      commonName="Ant"
      pageTitle={title}
      description={description}
      path="/animals/ant"
      parentCategory="Insects & Invertebrates"
      parentCategoryHref="/animal-encyclopedia/insects"
      tags={["Insect", "Social", "Invertebrate"]}
      image={getAnimalImage("ant") ?? undefined}
      galleryImages={getAnimalGalleryImages("ant")}
      factsHeaderNote="“Ant” covers the whole family Formicidae, with thousands of species. The photos show red wood ants and a Formica worker. Diet, nest type, and behaviour vary enormously across the group."
      overview={
        <>
          <p>
            Ants are social insects in the family Formicidae, part of the order
            Hymenoptera alongside bees and wasps. There are well over ten
            thousand described species, found on nearly every land surface on
            Earth. This page is a group-level overview. Ants live in organised
            colonies and are among the most abundant and ecologically important
            insects, with a huge collective influence on soils and ecosystems.
          </p>
        </>
      }
      habitat={
        <>
          <p>
            Ants occupy an enormous range of habitats — forests, grasslands,
            deserts, wetlands, gardens, and inside human buildings — on every
            continent except Antarctica. They nest in soil, leaf litter, rotting
            wood, plant cavities, and constructed mounds, depending on the
            species. Some build large, conspicuous nests, while others are tiny
            and hidden. Habitat varies widely across the family.
          </p>
        </>
      }
      diet={
        <>
          <p>
            Ants have very varied diets depending on the species. Many are
            omnivores or scavengers; some are predators; others harvest seeds,
            tend sap-feeding insects for their sugary honeydew, or even farm
            fungus, as leafcutter ants do. This dietary flexibility is one
            reason ants are so successful. Statements about &quot;what ants
            eat&quot; should be made cautiously because the group is so diverse.
          </p>
        </>
      }
      behavior={
        <>
          <p>
            Ants live in colonies that usually contain one or more egg-laying
            queens and many sterile female workers, with males appearing mainly
            for reproduction. Colonies function with a high degree of
            cooperation and division of labour, and ants communicate largely
            through chemical signals called pheromones, for example to mark
            trails to food. Some species cooperate to carry prey, build nests,
            or defend the colony. Behaviour varies greatly between species.
          </p>
        </>
      }
      humanInteraction={
        <>
          <p>
            Ants are ecologically valuable — aerating soil, dispersing seeds,
            and controlling other invertebrates — though some species are
            household or agricultural pests, and certain introduced ants can
            harm native wildlife. Most ants are common and not of conservation
            concern, but a minority of specialised species can be vulnerable.
            Status should be checked against current sources rather than
            assumed.
          </p>
        </>
      }
      extraSections={[
        {
          heading: "Appearance & Recognition",
          body: (
            <>
              <p>
                Ants have a distinctive body with a narrow &quot;waist&quot;
                (one or two small segments) between the thorax and abdomen,
                elbowed antennae, and strong jaws. Most ants seen day to day are
                wingless workers, while winged queens and males appear during
                mating flights. Colour ranges from yellow and red to brown and
                black, and sizes vary from tiny species a couple of millimetres
                long to much larger ones. The narrow waist and elbowed antennae
                help distinguish ants from termites.
              </p>
            </>
          ),
        },
      ]}
      similarAnimals={
        <p>
          Ants belong to the order Hymenoptera with the bee covered separately
          on FaunaHub, as well as wasps. They are often confused with termites,
          but termites are a separate group with straight antennae and a
          broad-waisted body. Some spiders and other insects mimic ants for
          protection.
        </p>
      }
      faqs={[
        {
          question: "How are ant colonies organised?",
          answer:
            "Most ant colonies have one or more queens that lay eggs, many sterile female workers that forage, build, and care for young, and males that appear mainly to reproduce. The colony works through cooperation and division of labour rather than central control.",
        },
        {
          question: "How do ants follow each other in lines?",
          answer:
            "Ants communicate largely with chemicals called pheromones. A foraging ant that finds food can lay a scent trail back to the nest, which other ants follow, reinforcing the trail as long as the food lasts.",
        },
        {
          question: "What is the difference between ants and termites?",
          answer:
            "Although both are social insects that can live in large colonies, they are not closely related. Ants have a narrow waist and elbowed antennae, while termites have a broad waist and straight antennae. Termites are more closely related to cockroaches than to ants.",
        },
      ]}
      quickFacts={[
        { label: "Group", value: "Ants (family Formicidae)" },
        { label: "Type", value: "Insect (invertebrate)" },
        { label: "Order", value: "Hymenoptera (with bees and wasps)" },
        { label: "Diet", value: "Highly varied (omnivore, predator, seed, fungus)" },
        { label: "Social structure", value: "Colonies with queen(s) and workers" },
        { label: "Communication", value: "Chemical pheromones" },
        { label: "Conservation", value: "Most common — verify for specialised species" },
      ]}
      relatedLinks={[
        { label: "Bee Profile", href: "/animals/bee", description: "A fellow hymenopteran" },
        { label: "Spider Profile", href: "/animals/spider" },
        { label: "Ladybug Profile", href: "/animals/ladybug" },
        { label: "Animal Encyclopedia — Insects & Invertebrates", href: "/animal-encyclopedia/insects" },
        { label: "Wildlife Hub", href: "/wildlife" },
      ]}
      sources={ANIMAL_SOURCES.ant}
      publishedDate={PUBLISHED}
      modifiedDate={MODIFIED}
    />
  );
}
