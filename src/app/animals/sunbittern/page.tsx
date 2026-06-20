import type { Metadata } from "next";
import AnimalProfileLayout from "@/components/AnimalProfileLayout";
import { ANIMAL_SOURCES } from "@/lib/educational/animal-sources";
import { getAnimalGalleryImages, getAnimalImage, getAnimalOgImage } from "@/lib/images/animal-images";
import { buildArticleMetadata } from "@/lib/metadata";

const PATH = "/animals/sunbittern";
const TITLE = "Sunbittern — Profile, the 'Sunburst' Wing Display & Diet";
const DESC =
  "Explore the sunbittern (Eurypyga helias): a secretive Neotropical riverside bird that flashes startling eye-like 'sunburst' patterns on its wings when threatened.";

export const metadata: Metadata = buildArticleMetadata({
  title: TITLE,
  description: DESC,
  path: PATH,
  publishedTime: "2026-06-20",
  modifiedTime: "2026-06-20",
  ogImage: getAnimalOgImage("sunbittern"),
});

export default function SunbitternPage() {
  return (
    <AnimalProfileLayout
      commonName="Sunbittern"
      scientificName="Eurypyga helias"
      pageTitle={TITLE}
      description={DESC}
      path={PATH}
      parentCategory="Birds"
      parentCategoryHref="/animal-encyclopedia/birds"
      tags={["Bird", "Neotropical", "Riverside"]}
      image={getAnimalImage("sunbittern") ?? undefined}
      galleryImages={getAnimalGalleryImages("sunbittern")}
      sources={ANIMAL_SOURCES.sunbittern}
      publishedDate="2026-06-20"
      modifiedDate="2026-06-20"
      overview={
        <>
          <p>
            The sunbittern (<em>Eurypyga helias</em>) is a slender, secretive bird of
            forested rivers and streams in Central and South America. With a long neck,
            dagger-like bill, and intricately barred grey-brown plumage, it usually blends
            quietly into the dappled light of the riverbank. But it hides a spectacular
            secret: when it spreads its wings, bold chestnut, black, and golden markings
            form two large &ldquo;sunburst&rdquo; eyespots — a startling display that gives
            the bird its name.
          </p>
          <p>
            The sunbittern is so distinctive that it is placed in its own family, with its
            closest living relative thought to be the kagu of New Caledonia, on the other
            side of the world.
          </p>
          <p>
            <strong>Note:</strong> details here use the sunbittern as a whole; treat general
            statements as approximate and verify against authoritative sources.
          </p>
        </>
      }
      habitat={
        <p>
          The sunbittern lives along forested rivers, streams, lagoons, and wetlands in the
          Neotropics, from southern Mexico through Central America and into the Amazon basin.
          It favours shaded waterside habitats with cover, where it forages along the water&apos;s
          edge and on exposed rocks and logs.
        </p>
      }
      diet={
        <p>
          Sunbitterns are carnivores that hunt along the water&apos;s edge, taking insects
          and other invertebrates, plus small fish, crustaceans, amphibians, and the like.
          They move deliberately and stalk prey, then strike quickly with the sharp bill —
          a heron-like style suited to riverside foraging.
        </p>
      }
      behavior={
        <p>
          The sunbittern&apos;s famous wing display is its standout behaviour: by suddenly
          spreading its wings and tail toward an intruder, it reveals large eye-like patterns
          that can startle a predator or serve as a threat or distraction. It is otherwise a
          quiet, well-camouflaged bird that walks slowly through the shadows. Sunbitterns build
          a bulky nest in a tree near water and both parents share in raising the young.
        </p>
      }
      humanInteraction={
        <p>
          Sunbitterns are sought-after sightings for birdwatchers visiting Neotropical
          rivers, prized for their camouflage and dramatic display. They are widespread
          across a large range, though they depend on healthy forested waterways, so river
          and forest degradation can affect local populations. Consult authoritative sources
          for current status.
        </p>
      }
      faqs={[
        {
          question: "Why is it called a sunbittern?",
          answer:
            "Because of the 'sunburst' display on its wings. When the sunbittern spreads its wings, hidden chestnut, black, and golden markings combine into two large, glowing eyespots resembling a sun or a pair of eyes. Combined with its bittern-like shape and waterside habits, this gives the bird its name.",
        },
        {
          question: "What is the wing display for?",
          answer:
            "It is mainly defensive. By abruptly spreading its wings toward a predator or intruder, the sunbittern flashes large eye-like patterns that can startle or intimidate the threat, or distract it — buying the bird time to escape. The display may also feature in courtship.",
        },
        {
          question: "What is the sunbittern's closest relative?",
          answer:
            "Remarkably, its closest living relative is thought to be the kagu, a ground bird of New Caledonia in the South Pacific — far from the sunbittern's American range. The two are grouped together as an ancient, isolated branch of the bird family tree, a striking example of distant relatives separated by oceans.",
        },
        {
          question: "What do sunbitterns eat?",
          answer:
            "They are carnivores that forage along rivers and streams, taking insects and other invertebrates, small fish, crustaceans, and amphibians. The sunbittern stalks slowly and then strikes with its sharp, dagger-like bill, much like a small heron.",
        },
      ]}
      quickFacts={[
        { label: "Scientific name", value: "Eurypyga helias" },
        { label: "Class", value: "Aves (its own family)" },
        { label: "Diet", value: "Carnivore (riverside invertebrates & small prey)" },
        { label: "Signature trait", value: "'Sunburst' eyespot wing display" },
        { label: "Closest relative", value: "The kagu (New Caledonia)" },
        { label: "Habitat", value: "Forested Neotropical rivers & wetlands" },
        { label: "Range", value: "S. Mexico to the Amazon" },
        { label: "Status", value: "Widespread (verify)" },
      ]}
      relatedLinks={[
        { label: "Kagu Profile", href: "/animals/kagu", description: "Its closest living relative, far away" },
        { label: "Heron Profile", href: "/animals/heron", description: "A similar riverside stalking bird" },
        { label: "Jacana Profile", href: "/animals/jacana", description: "Another tropical wetland bird" },
        { label: "Birdwatching", href: "/birdwatching", description: "Tips for observing birds" },
        { label: "Bird Encyclopedia", href: "/animal-encyclopedia/birds" },
      ]}
    />
  );
}
