import type { Metadata } from "next";
import AnimalProfileLayout from "@/components/AnimalProfileLayout";
import { ANIMAL_SOURCES } from "@/lib/educational/animal-sources";
import { getAnimalGalleryImages, getAnimalImage, getAnimalOgImage } from "@/lib/images/animal-images";
import { buildArticleMetadata } from "@/lib/metadata";

const PATH = "/animals/kingfisher";
const TITLE = "Kingfisher — Profile, Habitat, Diet & Diving";
const DESC =
  "Explore kingfishers (family Alcedinidae): small, vivid, big-headed birds famous for diving to catch fish, with the common kingfisher as a brilliant reference species.";

export const metadata: Metadata = buildArticleMetadata({
  title: TITLE,
  description: DESC,
  path: PATH,
  publishedTime: "2026-06-19",
  modifiedTime: "2026-06-19",
  ogImage: getAnimalOgImage("kingfisher"),
});

export default function KingfisherPage() {
  return (
    <AnimalProfileLayout
      commonName="Kingfisher"
      scientificName="family Alcedinidae"
      pageTitle={TITLE}
      description={DESC}
      path={PATH}
      parentCategory="Birds"
      parentCategoryHref="/animal-encyclopedia/birds"
      tags={["Bird", "Waterside", "Carnivore"]}
      image={getAnimalImage("kingfisher") ?? undefined}
      galleryImages={getAnimalGalleryImages("kingfisher")}
      sources={ANIMAL_SOURCES.kingfisher}
      publishedDate="2026-06-19"
      modifiedDate="2026-06-19"
      overview={
        <>
          <p>
            Kingfishers are small to medium birds of the family Alcedinidae, known
            for their large heads, long pointed bills, and often dazzling plumage.
            Many are expert fishers that plunge-dive into water to seize prey. The
            animal shown here is the common kingfisher (<em>Alcedo atthis</em>), a
            brilliant blue-and-orange reference species of Eurasia and North Africa.
          </p>
          <p>
            Despite the name, not all kingfishers fish: the family is diverse and
            includes many woodland species that hunt insects and small animals away
            from water, such as the kookaburras.
          </p>
          <p>
            <strong>Conservation note:</strong> many kingfishers are widespread,
            while some island and forest species are more restricted. Verify a
            particular species&apos; status at iucnredlist.org.
          </p>
        </>
      }
      habitat={
        <p>
          Kingfishers are found across much of the world, especially in the tropics.
          Fishing species live along clear rivers, streams, lakes, and coasts, while
          others occupy woodland, savanna, and forest. The common kingfisher favours
          slow, clear fresh water with perches and earth banks for nesting.
        </p>
      }
      diet={
        <p>
          Diet varies across the family. Waterside species such as the common
          kingfisher feed mainly on small fish and aquatic invertebrates, caught by
          diving from a perch or hover. Woodland kingfishers take insects, lizards,
          and other small animals. Prey is often struck against a perch before being
          swallowed.
        </p>
      }
      behavior={
        <p>
          Fishing kingfishers typically watch from a perch, then dive in a fast,
          precise plunge and return to the perch to deal with their catch. Many are
          territorial along stretches of water. Most nest in tunnels excavated in
          earth banks or in tree cavities. Their flight is often a low, fast,
          direct dash over the water.
        </p>
      }
      humanInteraction={
        <p>
          Kingfishers are popular with birdwatchers and are sensitive indicators of
          clean water in the case of fishing species. Water pollution, bank
          modification, and habitat loss are the main pressures for some species.
          For current status, consult authoritative sources such as the IUCN Red
          List.
        </p>
      }
      faqs={[
        {
          question: "Do all kingfishers eat fish?",
          answer:
            "No. Although the most famous kingfishers are fish-eating divers, the family is diverse, and many species live in woodland and savanna where they hunt insects, lizards, and other small animals rather than fish. The kookaburras are well-known non-fishing kingfishers.",
        },
        {
          question: "How do kingfishers catch fish?",
          answer:
            "Fishing kingfishers usually watch from a perch above the water, then dive in a fast, accurate plunge to grab prey with the bill. They often return to a perch and strike the fish against it before swallowing it head-first.",
        },
        {
          question: "Where do kingfishers nest?",
          answer:
            "Many kingfishers nest in tunnels they dig into earth banks near water, while others use natural tree cavities or termite mounds, depending on the species.",
        },
        {
          question: "Why are kingfishers so colourful?",
          answer:
            "Much of the kingfisher's brilliant blue comes from the microscopic structure of the feathers scattering light, rather than from pigment alone. The bright colours play a role in signalling and recognition.",
        },
      ]}
      quickFacts={[
        { label: "Group", value: "Family Alcedinidae" },
        { label: "Reference species", value: "Alcedo atthis (common kingfisher)" },
        { label: "Class", value: "Aves" },
        { label: "Diet", value: "Carnivore (fish or small animals)" },
        { label: "Hunting style", value: "Plunge-diving (fishing species)" },
        { label: "Nesting", value: "Tunnels in banks; tree cavities" },
        { label: "Range", value: "Worldwide, especially the tropics" },
        { label: "IUCN Status", value: "Varies by species (verify)" },
      ]}
      relatedLinks={[
        { label: "Kookaburra Profile", href: "/animals/kookaburra", description: "A large woodland kingfisher" },
        { label: "Heron Profile", href: "/animals/heron", description: "Another waterside fish-hunter" },
        { label: "Hummingbird Profile", href: "/animals/hummingbird", description: "Another small, vivid bird" },
        { label: "Birdwatching", href: "/birdwatching", description: "Tips for observing waterside birds" },
        { label: "Bird Encyclopedia", href: "/animal-encyclopedia/birds" },
      ]}
    />
  );
}
