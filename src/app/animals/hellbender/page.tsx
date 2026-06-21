import type { Metadata } from "next";
import AnimalProfileLayout from "@/components/AnimalProfileLayout";
import { ANIMAL_SOURCES } from "@/lib/educational/animal-sources";
import { getAnimalGalleryImages, getAnimalImage, getAnimalOgImage } from "@/lib/images/animal-images";
import { buildArticleMetadata } from "@/lib/metadata";

const PATH = "/animals/hellbender";
const TITLE = "Hellbender — Profile, North America's Giant Salamander";
const DESC =
  "Explore the hellbender (Cryptobranchus alleganiensis): North America's largest salamander, a fully aquatic 'snot otter' that breathes through its skin and signals clean rivers.";

export const metadata: Metadata = buildArticleMetadata({
  title: TITLE,
  description: DESC,
  path: PATH,
  publishedTime: "2026-06-21",
  modifiedTime: "2026-06-21",
  ogImage: getAnimalOgImage("hellbender"),
});

export default function HellbenderPage() {
  return (
    <AnimalProfileLayout
      commonName="Hellbender"
      scientificName="Cryptobranchus alleganiensis"
      pageTitle={TITLE}
      description={DESC}
      path={PATH}
      parentCategory="Reptiles & Amphibians"
      parentCategoryHref="/animal-encyclopedia/reptiles"
      tags={["Amphibian", "Salamander", "North America"]}
      image={getAnimalImage("hellbender") ?? undefined}
      galleryImages={getAnimalGalleryImages("hellbender")}
      sources={ANIMAL_SOURCES.hellbender}
      publishedDate="2026-06-21"
      modifiedDate="2026-06-21"
      overview={
        <>
          <p>
            The hellbender (<em>Cryptobranchus alleganiensis</em>) is North America&apos;s
            largest salamander — a big, flat-bodied, fully aquatic amphibian of clear,
            fast-flowing streams in the eastern United States. It can reach around 60 cm or
            more in length, with a broad head, tiny eyes, and loose, wrinkled folds of skin
            along its sides. Those skin folds are key to how it lives: the hellbender breathes
            mostly through its skin, absorbing oxygen straight from the water.
          </p>
          <p>
            It goes by many colourful local names — &ldquo;snot otter,&rdquo; &ldquo;devil
            dog,&rdquo; &ldquo;mud devil&rdquo; — but despite its fearsome nicknames it is
            completely harmless to people.
          </p>
          <p>
            <strong>Conservation note:</strong> hellbenders have declined and are sensitive
            indicators of water quality; some populations are seriously threatened. Verify
            current status at authoritative sources such as AmphibiaWeb and the IUCN Red List.
          </p>
        </>
      }
      habitat={
        <p>
          Hellbenders live in cool, clear, well-oxygenated, fast-flowing rivers and streams
          with rocky bottoms across parts of the eastern and central United States. They
          shelter under large flat rocks by day and need clean, silt-free water — which is
          why they are so sensitive to pollution and habitat change.
        </p>
      }
      diet={
        <p>
          Hellbenders are carnivores that feed mainly on crayfish, along with small fish,
          insects, worms, and other aquatic prey. They are largely nocturnal hunters,
          finding food by smell and touch in the dark, fast water and seizing it with a quick
          sideways snap of the broad mouth.
        </p>
      }
      behavior={
        <p>
          Hellbenders are secretive and mostly nocturnal, spending the day hidden beneath
          rocks. Because they breathe primarily through their skin, they rely on cold,
          fast-moving, oxygen-rich water and often sway their bodies to move fresh water over
          the skin folds. Males guard nest sites under rocks where females lay their eggs,
          and the male tends the eggs until they hatch. Hellbenders can be long-lived,
          surviving for decades in good conditions.
        </p>
      }
      humanInteraction={
        <p>
          Hellbenders are harmless to humans, despite their alarming nicknames, and their
          presence is a sign of a clean, healthy river. They have declined because of
          pollution, siltation, dams, and habitat disturbance, making them a focus of
          conservation and water-quality efforts. Anglers are encouraged to release any
          hellbender caught accidentally, unharmed. Consult AmphibiaWeb and the IUCN Red List
          for current status.
        </p>
      }
      faqs={[
        {
          question: "How big is a hellbender?",
          answer:
            "Hellbenders are North America's largest salamanders, commonly reaching around 30–60 cm and sometimes more. Their large, flattened bodies and wrinkled skin folds make them look bigger and even more distinctive, and they are among the largest amphibians in the world.",
        },
        {
          question: "How does a hellbender breathe?",
          answer:
            "Mostly through its skin. Adult hellbenders breathe primarily by absorbing oxygen directly from the water across their skin — especially through the loose, wrinkled folds along their sides, which increase the surface area. This is why they depend on cold, fast, oxygen-rich, clean water and will sway to move fresh water over their skin.",
        },
        {
          question: "Are hellbenders dangerous?",
          answer:
            "No. Despite nicknames like 'snot otter,' 'devil dog,' and 'mud devil,' hellbenders are completely harmless to people. They are shy, secretive amphibians that eat crayfish and other small prey, and they pose no threat to humans — though they should be handled as little as possible for their own sake.",
        },
        {
          question: "Why are hellbenders important to rivers?",
          answer:
            "Because they need clean, cold, well-oxygenated water and breathe through their skin, hellbenders are very sensitive to pollution and siltation. Their presence indicates a healthy stream, and their decline is a warning sign of deteriorating water quality — making them valuable 'indicator species' for river health.",
        },
      ]}
      quickFacts={[
        { label: "Scientific name", value: "Cryptobranchus alleganiensis" },
        { label: "Class", value: "Amphibia (salamander)" },
        { label: "Claim to fame", value: "North America's largest salamander" },
        { label: "Breathing", value: "Mostly through the skin" },
        { label: "Diet", value: "Carnivore (mainly crayfish)" },
        { label: "Habitat", value: "Clean, fast, rocky streams" },
        { label: "Harmless", value: "Yes, despite scary nicknames" },
        { label: "Status", value: "Declining; verify (indicator species)" },
      ]}
      relatedLinks={[
        { label: "Axolotl Profile", href: "/animals/axolotl", description: "Another remarkable aquatic salamander" },
        { label: "Fire Salamander Profile", href: "/animals/fire-salamander", description: "A land-dwelling salamander" },
        { label: "Glass Frog Profile", href: "/animals/glass-frog", description: "Another striking amphibian" },
        { label: "Endangered Animals", href: "/endangered-animals", description: "IUCN Red List categories" },
        { label: "Reptiles & Amphibians", href: "/animal-encyclopedia/reptiles" },
      ]}
    />
  );
}
