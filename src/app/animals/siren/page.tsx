import type { Metadata } from "next";
import AnimalProfileLayout from "@/components/AnimalProfileLayout";
import { ANIMAL_SOURCES } from "@/lib/educational/animal-sources";
import { getAnimalGalleryImages, getAnimalImage, getAnimalOgImage } from "@/lib/images/animal-images";
import { buildArticleMetadata } from "@/lib/metadata";

const PATH = "/animals/siren";
const TITLE = "Siren — Profile, the Eel-Like Salamander with Gills and Only Front Legs";
const DESC =
  "Explore sirens (family Sirenidae): eel-like aquatic salamanders that keep feathery gills for life and have only front legs — including the giant 'leopard eel' reticulated siren named in 2018.";

export const metadata: Metadata = buildArticleMetadata({
  title: TITLE,
  description: DESC,
  path: PATH,
  publishedTime: "2026-06-22",
  modifiedTime: "2026-06-22",
  ogImage: getAnimalOgImage("siren"),
});

export default function SirenPage() {
  return (
    <AnimalProfileLayout
      commonName="Siren"
      scientificName="family Sirenidae"
      pageTitle={TITLE}
      description={DESC}
      path={PATH}
      parentCategory="Reptiles & Amphibians"
      parentCategoryHref="/animal-encyclopedia/reptiles"
      tags={["Amphibian", "Salamander", "Aquatic"]}
      image={getAnimalImage("siren") ?? undefined}
      galleryImages={getAnimalGalleryImages("siren")}
      sources={ANIMAL_SOURCES.siren}
      publishedDate="2026-06-22"
      modifiedDate="2026-06-22"
      overview={
        <>
          <p>
            Sirens (family Sirenidae) are eel-like, fully aquatic salamanders of the southeastern United
            States (and nearby Mexico), instantly distinguished from other salamanders by two features: they
            have only a pair of small front legs — no hind limbs at all — and they keep bushy, feathery
            external gills throughout their lives. Long and slippery, with a finned tail, sirens look more
            like an eel with frilly gills and tiny arms than a typical salamander.
          </p>
          <p>
            Sirens are also remarkable for what they reveal about discovery: in 2018, the reticulated siren
            (<em>Siren reticulata</em>), shown here — a giant nicknamed the &ldquo;leopard eel&rdquo; that
            can reach around 60 cm or more — was formally described as new to science, despite living in the
            United States, a reminder that big animals can still go unnamed.
          </p>
          <p>
            <strong>Note:</strong> &ldquo;siren&rdquo; covers a few species; details here describe the family
            broadly (using the reticulated siren as a reference). Treat general statements as approximate and
            verify against authoritative sources.
          </p>
        </>
      }
      habitat={
        <p>
          Sirens live in the wetlands of the southeastern United States — swamps, marshes, ponds, ditches,
          and slow, weedy waters — favouring shallow, vegetated, often muddy habitats. Highly aquatic, they
          spend their lives in the water and burrow into the bottom mud, and they can survive dry periods by
          retreating into the mud.
        </p>
      }
      diet={
        <p>
          Sirens are omnivores with a broad diet — invertebrates such as worms, insects, crustaceans, and
          snails, plus small fish and amphibians, and (unusually for salamanders) a fair amount of plant and
          algal material. They forage at night along the bottom and among vegetation, using suction and their
          jaws to take prey.
        </p>
      }
      behavior={
        <p>
          Sirens swim with eel-like undulations, their single pair of front legs little used for walking, and
          they keep their feathery external gills for breathing in the water, supplemented by gulping air with
          lungs. They are mostly nocturnal and secretive. A striking ability is surviving drought: when their
          wetland dries up, sirens can burrow into the mud and form a protective, dried-mucus cocoon, becoming
          dormant (a kind of aestivation) until the rains return — they can endure surprisingly long dry
          spells this way. Sirens are also among the few amphibians known to make faint clicking or yelping
          sounds. They lay eggs in the water among vegetation.
        </p>
      }
      humanInteraction={
        <p>
          Sirens are harmless, little-known wetland amphibians, sometimes caught by anglers and mistaken for
          eels, and they are of growing scientific interest — the recent discovery of the giant reticulated
          siren highlighted how much remains unknown even about large animals. They depend on healthy
          wetlands and can be affected by drainage, pollution, and habitat loss; some species are reasonably
          common while range-restricted ones warrant attention. Consult AmphibiaWeb and the IUCN Red List for
          species-specific status.
        </p>
      }
      faqs={[
        {
          question: "What makes a siren different from other salamanders?",
          answer:
            "Two things stand out: a siren has only front legs (no hind limbs at all) and it keeps bushy external gills for its entire life, rather than losing them as many salamanders do. Combined with its long, eel-like body and finned tail, this gives the siren a very distinctive look — like an eel with frilly gills and tiny arms.",
        },
        {
          question: "Is a siren an eel?",
          answer:
            "No — like the amphiuma, a siren is an amphibian (an aquatic salamander), not a fish, even though its eel-like shape and slippery body cause confusion. It breathes with external gills and lungs, has true (front) legs, and reproduces by laying amphibian eggs, none of which an eel does.",
        },
        {
          question: "How can a giant salamander be discovered so recently?",
          answer:
            "The reticulated siren, a roughly 60 cm 'leopard eel,' was only formally described in 2018, even though it lives in the southeastern United States. Sirens are secretive, aquatic, and easily confused with one another, so this large animal had gone unnamed by science — a reminder that even sizable creatures can remain undescribed.",
        },
        {
          question: "How do sirens survive when their wetland dries out?",
          answer:
            "They burrow into the mud and wait it out. When water disappears, a siren can dig into the bottom and form a protective cocoon of dried mucus, becoming dormant (aestivating) until the rains return. This drought survival lets sirens persist in shallow, seasonal wetlands like ditches and marshes that periodically dry up.",
        },
      ]}
      quickFacts={[
        { label: "Group", value: "Family Sirenidae (sirens)" },
        { label: "Reference species", value: "Siren reticulata (reticulated siren / 'leopard eel')" },
        { label: "Class", value: "Amphibia (aquatic salamander)" },
        { label: "Signature traits", value: "Only front legs; keeps external gills for life" },
        { label: "NOT a", value: "Fish or eel" },
        { label: "Diet", value: "Omnivore (invertebrates, small prey, plants/algae)" },
        { label: "Drought trick", value: "Burrows & forms a mucus cocoon (aestivates)" },
        { label: "Note", value: "Reticulated siren described new to science in 2018" },
      ]}
      relatedLinks={[
        { label: "Amphiuma Profile", href: "/animals/amphiuma", description: "Another eel-like aquatic salamander" },
        { label: "Mudpuppy Profile", href: "/animals/mudpuppy", description: "A gilled aquatic salamander" },
        { label: "Axolotl Profile", href: "/animals/axolotl", description: "Another gill-keeping salamander" },
        { label: "Fauna by Continent", href: "/fauna/continents", description: "North American wetland fauna in context" },
        { label: "Reptiles & Amphibians", href: "/animal-encyclopedia/reptiles" },
      ]}
    />
  );
}
