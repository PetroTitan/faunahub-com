import type { Metadata } from "next";
import AnimalProfileLayout from "@/components/AnimalProfileLayout";
import { ANIMAL_SOURCES } from "@/lib/educational/animal-sources";
import { getAnimalGalleryImages, getAnimalImage, getAnimalOgImage } from "@/lib/images/animal-images";
import { buildArticleMetadata } from "@/lib/metadata";

const PATH = "/animals/corn-snake";
const TITLE = "Corn Snake — Profile, Markings, Constriction & Habitat";
const DESC =
  "Explore the corn snake (Pantherophis guttatus): a non-venomous North American rat snake with bold blotches, a checkered belly, and a rodent diet.";

export const metadata: Metadata = buildArticleMetadata({
  title: TITLE,
  description: DESC,
  path: PATH,
  publishedTime: "2026-09-06",
  modifiedTime: "2026-09-06",
  ogImage: getAnimalOgImage("corn-snake"),
});

export default function CornSnakePage() {
  return (
    <AnimalProfileLayout
      commonName="Corn Snake"
      scientificName="Pantherophis guttatus"
      pageTitle={TITLE}
      description={DESC}
      path={PATH}
      parentCategory="Reptiles & Amphibians"
      parentCategoryHref="/animal-encyclopedia/reptiles"
      tags={["Reptile","Snake","North America"]}
      image={getAnimalImage("corn-snake") ?? undefined}
      galleryImages={getAnimalGalleryImages("corn-snake")}
      sources={ANIMAL_SOURCES["corn-snake"]}
      publishedDate="2026-09-06"
      modifiedDate="2026-09-06"
      overview={
        <>
        <p>
          The corn snake (<em>Pantherophis guttatus</em>) is a slender, non-venomous colubrid of the southeastern United States. Wild-type animals are orange to reddish-brown with bold red-brown blotches edged in black, and a distinctive black-and-white <strong>checkerboard pattern on the belly</strong>.
        </p>
        <p>
          The name is usually traced either to the resemblance of that belly pattern to Indian corn, or to the snake&apos;s habit of hunting rodents around grain stores. Corn snakes are rat snakes: constrictors that specialise in small mammals.
        </p>
        <p>
          Corn snakes are among the most widely kept pet snakes in the world, and many colour and pattern morphs exist in captivity. <strong>This profile describes the wild species and is not a care guide — it offers no husbandry, feeding, handling or veterinary advice.</strong>
        </p>
        </>
      }
      habitat={
        <>
        <p>
          Corn snakes live in the southeastern United States, in pine and hardwood forest, forest edges, overgrown fields, rocky hillsides, farmland and around abandoned buildings. They are good climbers and use trees, but spend much of their time on or under the ground, sheltering in burrows, logs, leaf litter and crevices.
        </p>
        </>
      }
      diet={
        <>
        <p>
          Corn snakes eat mainly small mammals — mice, rats and voles — along with birds and their eggs, and lizards and frogs particularly when young. They are constrictors: prey is seized and coils are applied, and the snake swallows it whole. Their appetite for rodents makes them useful around farms and grain stores.
        </p>
        </>
      }
      behavior={
        <>
        <p>
          Corn snakes are largely nocturnal or crepuscular, especially in warm weather, and shelter by day. They are strong climbers and will ascend trees and structures after birds and rodents. When alarmed, a corn snake may vibrate its tail rapidly against leaf litter — producing a buzzing sound reminiscent of a rattlesnake — which, together with its blotched pattern, is why it is so often mistaken for a venomous species. Females lay eggs and do not guard them.
        </p>
        </>
      }
      humanInteraction={
        <>
        <p>
          Corn snakes are harmless to people and beneficial around agriculture as rodent predators, but they are frequently killed on sight because of confusion with the venomous copperhead. The two are separable: a copperhead has hourglass-shaped crossbands narrow along the spine, a heavy body and a distinctly triangular head, whereas a corn snake has rounded blotches, a slimmer build and a checkered belly. This profile offers no snake handling, identification-in-the-field safety, first-aid or pet-care guidance; treat any unidentified snake as one to leave alone and contact local wildlife authorities. Verify current status at the IUCN Red List.
        </p>
        </>
      }
      faqs={[
        {
          question: "Are corn snakes venomous?",
          answer:
            "No. Corn snakes are non-venomous colubrids that kill prey by constriction. They are harmless to people, though like most snakes they may bite defensively if handled or cornered. This profile gives no handling guidance — unidentified snakes are best left alone.",
        },
        {
          question: "Why are corn snakes mistaken for copperheads?",
          answer:
            "Because both are blotched, reddish-brown North American snakes, and a startled corn snake may vibrate its tail in dry leaves to produce a buzzing sound. The differences are real, though: copperheads have hourglass crossbands that narrow along the spine, a heavier body and a triangular head, while corn snakes have rounded blotches and a checkered belly.",
        },
        {
          question: "Why is it called a corn snake?",
          answer:
            "Two explanations are usually given. One is that the black-and-white checkerboard pattern on its belly resembles the kernels of Indian corn; the other is that the snake was often found around corn cribs and grain stores, where it hunted the rodents attracted to stored grain.",
        },
        {
          question: "What do corn snakes eat?",
          answer:
            "Mainly small mammals such as mice, rats and voles, along with birds and eggs; younger snakes also take lizards and frogs. As constrictors they seize prey, apply coils, and swallow it whole.",
        },
      ]}
      quickFacts={[
        { label: "Scientific name", value: "Pantherophis guttatus" },
        { label: "Family", value: "Colubridae" },
        { label: "Class", value: "Reptilia" },
        { label: "Venom", value: "None — a constrictor" },
        { label: "Belly", value: "Black-and-white checkerboard" },
        { label: "Diet", value: "Rodents, birds and eggs" },
        { label: "Range", value: "Southeastern United States" },
        { label: "Note", value: "Wild species profile — not a care guide" },
      ]}
      relatedLinks={[
        { label: "Kingsnake Profile", href: "/animals/kingsnake", description: "Another North American colubrid" },
        { label: "Rattlesnake Profile", href: "/animals/rattlesnake", description: "A venomous look-alike group" },
        { label: "Garter Snake Profile", href: "/animals/garter-snake" },
        { label: "Snake Profile", href: "/animals/snake", description: "Group-level overview" },
        { label: "Reptiles & Amphibians", href: "/animal-encyclopedia/reptiles" },
      ]}
    />
  );
}
