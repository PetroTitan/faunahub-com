import type { Metadata } from "next";
import AnimalProfileLayout from "@/components/AnimalProfileLayout";
import { ANIMAL_SOURCES } from "@/lib/educational/animal-sources";
import { getAnimalGalleryImages, getAnimalImage, getAnimalOgImage } from "@/lib/images/animal-images";
import { buildArticleMetadata } from "@/lib/metadata";

const PATH = "/animals/bearded-dragon";
const TITLE = "Bearded Dragon — Profile, Beard Display, Arid Habitat & Diet";
const DESC =
  "Explore the central bearded dragon (Pogona vitticeps): an Australian lizard whose spiny throat pouch darkens and flares, with arm-waving signals.";

export const metadata: Metadata = buildArticleMetadata({
  title: TITLE,
  description: DESC,
  path: PATH,
  publishedTime: "2026-09-06",
  modifiedTime: "2026-09-06",
  ogImage: getAnimalOgImage("bearded-dragon"),
});

export default function BeardedDragonPage() {
  return (
    <AnimalProfileLayout
      commonName="Bearded Dragon"
      scientificName="Pogona vitticeps"
      pageTitle={TITLE}
      description={DESC}
      path={PATH}
      parentCategory="Reptiles & Amphibians"
      parentCategoryHref="/animal-encyclopedia/reptiles"
      tags={["Reptile","Lizard","Australia"]}
      image={getAnimalImage("bearded-dragon") ?? undefined}
      galleryImages={getAnimalGalleryImages("bearded-dragon")}
      sources={ANIMAL_SOURCES["bearded-dragon"]}
      publishedDate="2026-09-06"
      modifiedDate="2026-09-06"
      overview={
        <>
        <p>
          The central bearded dragon (<em>Pogona vitticeps</em>) is a medium-sized agamid lizard of the dry interior of eastern Australia. It is flattened in profile, with rows of soft spines along the flanks and around the throat, and colours ranging from sandy grey to yellow and reddish brown depending on region.
        </p>
        <p>
          The name comes from the <strong>beard</strong>: a throat pouch that the lizard can inflate and flare, exposing the spines. When a dragon is threatened or displaying, the beard darkens — sometimes to black — and is thrust forward with the mouth open.
        </p>
        <p>
          Bearded dragons are among the most commonly kept pet reptiles in the world. <strong>This profile describes the wild species and is not a care guide — it offers no husbandry, lighting, heating, feeding or veterinary advice.</strong>
        </p>
        </>
      }
      habitat={
        <>
        <p>
          Central bearded dragons live in arid and semi-arid Australia — woodland, shrubland, dry forest and desert edges across the interior of eastern Australia. They are semi-arboreal, and are typically seen basking on elevated perches such as fence posts, branches, rocks and stumps, which serve both for thermoregulation and for keeping watch.
        </p>
        </>
      }
      diet={
        <>
        <p>
          Bearded dragons are omnivores. Wild diets include insects and other invertebrates, along with leaves, flowers and fruit, with the balance shifting through life: younger animals take proportionally more animal prey to support growth, while adults eat more plant material.
        </p>
        </>
      }
      behavior={
        <>
        <p>
          Bearded dragons have an unusually visual signalling system for a lizard. Beyond the beard display, they perform <strong>head-bobbing</strong> — assertive, often from a dominant animal — and <strong>arm-waving</strong>, a slow circular motion with one foreleg that generally signals submission or acknowledgement. Basking posture is used to regulate temperature, and animals flatten and orient their bodies to the sun. In extreme heat or cold they retreat into burrows and shade and reduce activity.
        </p>
        </>
      }
      humanInteraction={
        <>
        <p>
          The bearded dragon&apos;s calm disposition made it one of the foundational species of the pet reptile trade, and virtually all animals in that trade outside Australia are captive-bred; Australia prohibits their export. Wild populations are widespread. This profile is educational and covers the wild animal only — questions about keeping, housing, lighting, diet or the health of a captive bearded dragon should go to a qualified reptile veterinarian and specialist husbandry sources. Verify current status at the IUCN Red List.
        </p>
        </>
      }
      faqs={[
        {
          question: "Why is it called a bearded dragon?",
          answer:
            "Because of the throat pouch it can inflate and flare, exposing rows of soft spines. When the lizard is threatened or displaying, this 'beard' is pushed forward and often darkens dramatically — sometimes to black — while the mouth gapes open.",
        },
        {
          question: "What does arm-waving mean in bearded dragons?",
          answer:
            "It is a signal, not a greeting. A bearded dragon lifts one foreleg and moves it in a slow circle, a display generally interpreted as submission or acknowledgement of another animal — often given by a smaller or subordinate dragon toward a larger one. Head-bobbing carries roughly the opposite, more assertive meaning.",
        },
        {
          question: "What do wild bearded dragons eat?",
          answer:
            "They are omnivores, taking insects and other invertebrates alongside leaves, flowers and fruit. Younger dragons eat proportionally more animal prey to fuel growth, while adults shift toward a larger share of plant material.",
        },
        {
          question: "Where do bearded dragons live in the wild?",
          answer:
            "In the arid and semi-arid interior of eastern Australia — woodland, shrubland, dry forest and desert edges. They are semi-arboreal and are often seen basking on raised perches such as branches, fence posts, rocks and stumps.",
        },
      ]}
      quickFacts={[
        { label: "Scientific name", value: "Pogona vitticeps" },
        { label: "Family", value: "Agamidae" },
        { label: "Class", value: "Reptilia" },
        { label: "The beard", value: "Flared throat pouch; darkens in display" },
        { label: "Signals", value: "Head-bobbing and arm-waving" },
        { label: "Diet", value: "Omnivore — invertebrates and plants" },
        { label: "Range", value: "Arid interior of eastern Australia" },
        { label: "Note", value: "Wild species profile — not a care guide" },
      ]}
      relatedLinks={[
        { label: "Frilled Lizard Profile", href: "/animals/frilled-lizard", description: "Another Australian display lizard" },
        { label: "Thorny Devil Profile", href: "/animals/thorny-devil" },
        { label: "Leopard Gecko Profile", href: "/animals/leopard-gecko" },
        { label: "Reptiles & Amphibians", href: "/animal-encyclopedia/reptiles" },
        { label: "Reptile Care Guides", href: "/reptiles", description: "Pet reptile hub" },
      ]}
    />
  );
}
