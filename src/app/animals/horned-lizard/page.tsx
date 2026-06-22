import type { Metadata } from "next";
import AnimalProfileLayout from "@/components/AnimalProfileLayout";
import { ANIMAL_SOURCES } from "@/lib/educational/animal-sources";
import { getAnimalGalleryImages, getAnimalImage, getAnimalOgImage } from "@/lib/images/animal-images";
import { buildArticleMetadata } from "@/lib/metadata";

const PATH = "/animals/horned-lizard";
const TITLE = "Horned Lizard — Profile, the Spiky 'Horned Toad' & Its Blood-Squirting Defense";
const DESC =
  "Explore horned lizards (genus Phrynosoma): flat, spiny desert reptiles of the Americas — ant specialists famous for camouflage and squirting blood from their eyes to deter predators.";

export const metadata: Metadata = buildArticleMetadata({
  title: TITLE,
  description: DESC,
  path: PATH,
  publishedTime: "2026-06-22",
  modifiedTime: "2026-06-22",
  ogImage: getAnimalOgImage("horned-lizard"),
});

export default function HornedLizardPage() {
  return (
    <AnimalProfileLayout
      commonName="Horned Lizard"
      scientificName="genus Phrynosoma"
      pageTitle={TITLE}
      description={DESC}
      path={PATH}
      parentCategory="Reptiles & Amphibians"
      parentCategoryHref="/animal-encyclopedia/reptiles"
      tags={["Reptile", "Lizard", "Desert"]}
      image={getAnimalImage("horned-lizard") ?? undefined}
      galleryImages={getAnimalGalleryImages("horned-lizard")}
      sources={ANIMAL_SOURCES["horned-lizard"]}
      publishedDate="2026-06-22"
      modifiedDate="2026-06-22"
      overview={
        <>
          <p>
            Horned lizards (genus <em>Phrynosoma</em>) are flat, rounded, spiny lizards of the
            deserts and dry country of North and Central America, often called &ldquo;horned
            toads&rdquo; or &ldquo;horny toads&rdquo; for their squat, toad-like shape — though
            they are true lizards, not toads. Their most striking feature is a crown of pointed
            horns at the back of the head, backed up by rows of spines along the body, giving
            them a miniature-dinosaur look.
          </p>
          <p>
            These desert specialists are masters of camouflage and ant-eating, and a few species
            possess one of the most extraordinary defences in the reptile world: squirting a jet
            of blood from the corners of their eyes.
          </p>
          <p>
            <strong>Note:</strong> &ldquo;horned lizard&rdquo; covers many species; details here
            describe the genus broadly. Treat general statements as approximate and verify
            against authoritative sources.
          </p>
        </>
      }
      habitat={
        <p>
          Horned lizards live in arid and semi-arid habitats across western North America and
          into Central America — deserts, scrub, grassland, and open sandy or rocky ground.
          They favour places with loose soil for burrowing and basking and with plenty of the
          ants they depend on, and different species are adapted to specific dryland regions.
        </p>
      }
      diet={
        <p>
          Horned lizards are dietary specialists, feeding largely on ants — especially harvester
          ants — which they lap up in large numbers, along with some other small invertebrates
          such as beetles and grasshoppers. Eating so many small, low-nutrient, formic-acid-rich
          ants requires a big stomach and a slow, sit-and-wait lifestyle, and this specialised
          diet is one reason horned lizards can be hard to keep and are sensitive to anything
          that harms native ant populations.
        </p>
      }
      behavior={
        <p>
          Horned lizards rely first on camouflage and stillness: their flattened, earth-coloured
          bodies blend into the ground, and they often sit motionless or shuffle down into loose
          soil to hide. The crown of horns makes them awkward and painful to swallow. Most
          remarkably, several species can rupture small blood vessels around the eyes to squirt a
          stream of blood — sometimes up to a short distance — at canine and feline predators
          such as foxes and coyotes; the blood contains compounds these predators find
          foul-tasting, helping drive them off. Horned lizards are day-active, bask to warm up,
          and may hibernate through cold months.
        </p>
      }
      humanInteraction={
        <p>
          Horned lizards are beloved regional icons, but several species have declined due to
          habitat loss, pesticide use, the spread of invasive ants that displace their native
          ant prey, collection, and other pressures, and some are now protected. They generally
          fare poorly in captivity because of their specialised ant diet, so they are best left
          in the wild. They are harmless to people. Consult authoritative sources and the IUCN
          Red List for species-specific status.
        </p>
      }
      faqs={[
        {
          question: "Can horned lizards really squirt blood from their eyes?",
          answer:
            "Yes — several species can. By rupturing tiny blood vessels around the eyes, a horned lizard can shoot a thin stream of blood, sometimes a short distance, usually aimed at dog- and cat-family predators like foxes and coyotes. The blood carries compounds these animals find foul-tasting, so the startling, bad-tasting squirt helps the lizard escape. It's one of the most remarkable defences of any reptile.",
        },
        {
          question: "Is a horned lizard a toad?",
          answer:
            "No. Despite the common names 'horned toad' and 'horny toad,' it's a true lizard (genus Phrynosoma), not an amphibian. The nicknames come from its squat, rounded, toad-like body shape. Unlike a toad, it has dry scaly skin, claws, and the spiny horns that give it its name.",
        },
        {
          question: "What do horned lizards eat?",
          answer:
            "Mostly ants — especially harvester ants — eaten in large numbers, plus some other small invertebrates like beetles and grasshoppers. This specialised ant diet shapes their whole biology, including a big stomach and a slow, sit-and-wait feeding style, and it makes them very sensitive to anything that reduces native ant populations.",
        },
        {
          question: "Why are some horned lizards declining?",
          answer:
            "Several species face habitat loss, pesticide use, collection, and — importantly — the spread of invasive ants (like imported fire ants) that displace the native harvester ants they rely on for food. Because of their specialised diet they don't adapt easily, so some are now protected. Always check authoritative sources for a given species' status.",
        },
      ]}
      quickFacts={[
        { label: "Group", value: "Genus Phrynosoma" },
        { label: "Class", value: "Reptilia (lizard, not a toad)" },
        { label: "Nicknames", value: "Horned toad / horny toad" },
        { label: "Signature trait", value: "Crown of head horns; spiny body" },
        { label: "Famous defence", value: "Squirts blood from eyes (some species)" },
        { label: "Diet", value: "Specialist ant-eater" },
        { label: "Habitat", value: "American deserts & dry country" },
        { label: "Status", value: "Some species declining/protected (verify)" },
      ]}
      relatedLinks={[
        { label: "Iguana Profile", href: "/animals/iguana", description: "Another American lizard" },
        { label: "Chameleon Profile", href: "/animals/chameleon", description: "Another camouflage specialist" },
        { label: "Agama Profile", href: "/animals/agama", description: "Another rock-dwelling lizard" },
        { label: "Fauna by Continent", href: "/fauna/continents", description: "North American desert fauna" },
        { label: "Reptiles & Amphibians", href: "/animal-encyclopedia/reptiles" },
      ]}
    />
  );
}
