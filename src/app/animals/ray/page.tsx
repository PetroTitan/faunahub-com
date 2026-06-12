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

const title = "Ray — Profile, Habitat, Diet & Behavior";
const description =
  "Rays are flattened cartilaginous fish related to sharks. A group-level overview of the batoids: body plan, habitat, diet, behaviour, and cautious safety notes.";

export const metadata: Metadata = buildArticleMetadata({
  title,
  description,
  path: "/animals/ray",
  publishedTime: PUBLISHED,
  modifiedTime: MODIFIED,
  ogImage: getAnimalOgImage("ray"),
});

export default function RayPage() {
  return (
    <AnimalProfileLayout
      commonName="Ray"
      pageTitle={title}
      description={description}
      path="/animals/ray"
      parentCategory="Fish"
      parentCategoryHref="/animal-encyclopedia/fish"
      tags={["Fish", "Cartilaginous", "Marine"]}
      image={getAnimalImage("ray") ?? undefined}
      galleryImages={getAnimalGalleryImages("ray")}
      factsHeaderNote="“Ray” covers the batoids — stingrays, manta rays, skates, electric rays, and more. The reference shown is a stingray. Body form, size, and behaviour vary enormously; some have defensive stings, so observe wild rays cautiously."
      overview={
        <>
          <p>
            Rays are flattened, cartilaginous fish in the group known as batoids,
            closely related to sharks. The group includes stingrays, manta rays,
            skates, electric rays, and sawfish, with hundreds of species. This
            page is a group-level overview; a stingray is used as a familiar
            reference. Like sharks, rays have skeletons made of cartilage rather
            than bone, and most have a distinctive disc-shaped body with broad,
            wing-like fins.
          </p>
        </>
      }
      habitat={
        <>
          <p>
            Rays live in oceans worldwide, from shallow coasts and coral reefs to
            the deep sea, and a few species inhabit fresh water, such as the river
            stingrays of South America. Many are bottom-dwellers that rest on or
            bury into sandy or muddy seabeds, while large pelagic rays like mantas
            roam open water. Habitat and range vary widely across the group.
          </p>
        </>
      }
      diet={
        <>
          <p>
            Diet varies enormously. Many bottom-dwelling rays eat invertebrates
            such as molluscs, crustaceans, and worms, using flattened teeth to
            crush hard shells, while the giant manta rays are filter feeders that
            strain tiny plankton from the water. Some rays take small fish. This
            page describes general feeding ecology rather than husbandry details.
          </p>
        </>
      }
      behavior={
        <>
          <p>
            Many rays swim by undulating or flapping their broad pectoral
            &quot;wings&quot;, gliding gracefully through the water, while
            bottom-dwellers often lie camouflaged in sediment. Some species form
            groups or aggregations. Stingrays have one or more barbed, sometimes
            venomous spines on the tail used purely in defence; they are not
            aggressive, but people are advised to shuffle their feet in shallow
            water to avoid stepping on a resting ray. Behaviour varies by species.
          </p>
        </>
      }
      humanInteraction={
        <>
          <p>
            Rays are caught in fisheries and as bycatch, and some — including
            sawfish and certain large rays — are seriously threatened, while
            others are more common. Manta and reef rays are also a focus of
            wildlife tourism. Defensive stings can occur if a wild ray is stepped
            on or handled, so they should be observed respectfully. Conservation
            status varies greatly by species and should be verified against
            current IUCN Red List and government sources.
          </p>
        </>
      }
      extraSections={[
        {
          heading: "Appearance & Recognition",
          body: (
            <>
              <p>
                Most rays have a flattened body with the pectoral fins expanded
                into a broad disc, eyes on top of the head, and the gill openings
                underneath. Stingrays often have a whip-like tail bearing a
                defensive spine; skates have a fleshier tail and lay eggs in cases
                rather than bearing live young; manta rays have huge triangular
                fins and head lobes. Size ranges from small skates to mantas
                several metres across.
              </p>
            </>
          ),
        },
      ]}
      similarAnimals={
        <p>
          Rays are cartilaginous fish, the same broad group as the sharks
          covered on FaunaHub — rays are sometimes described as flattened
          relatives of sharks. They are quite different from the bony fish that
          make up most of this encyclopedia, including tuna, salmon, and the
          aquarium fish.
        </p>
      }
      faqs={[
        {
          question: "Are rays related to sharks?",
          answer:
            "Yes. Rays and sharks are both cartilaginous fish (chondrichthyans), with skeletons of cartilage rather than bone. Rays are essentially a group of flattened relatives of sharks, sharing many features such as cartilaginous skeletons and similar senses.",
        },
        {
          question: "Are stingrays dangerous?",
          answer:
            "Stingrays are not aggressive, but they have a defensive barbed spine on the tail that can injure a person who steps on or handles them. In shallow water, shuffling your feet to alert resting rays is commonly advised. Treat any sting as a medical matter and seek qualified help.",
        },
        {
          question: "What is the difference between a skate and a stingray?",
          answer:
            "Both are rays, but skates typically have a fleshier tail without a stinging spine and lay eggs in protective cases (\"mermaid's purses\"), while many stingrays bear live young and have a whip-like tail with a defensive spine. They are different families within the broader ray group.",
        },
      ]}
      quickFacts={[
        { label: "Group", value: "Rays / batoids" },
        { label: "Type", value: "Cartilaginous fish (shark relatives)" },
        { label: "Examples", value: "Stingrays, manta rays, skates, sawfish" },
        { label: "Habitat", value: "Oceans worldwide; a few freshwater" },
        { label: "Diet", value: "Varies — invertebrates, fish, or plankton" },
        { label: "Conservation", value: "Some threatened — verify per species on IUCN" },
      ]}
      relatedLinks={[
        { label: "Shark Profile", href: "/animals/shark", description: "A close cartilaginous relative" },
        { label: "Eel Profile", href: "/animals/eel" },
        { label: "Marine Animals", href: "/animal-encyclopedia/marine-animals" },
        { label: "Fish Encyclopedia", href: "/animal-encyclopedia/fish" },
        { label: "Wildlife Hub", href: "/wildlife" },
      ]}
      sources={ANIMAL_SOURCES.ray}
      publishedDate={PUBLISHED}
      modifiedDate={MODIFIED}
    />
  );
}
