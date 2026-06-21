import type { Metadata } from "next";
import AnimalProfileLayout from "@/components/AnimalProfileLayout";
import { ANIMAL_SOURCES } from "@/lib/educational/animal-sources";
import { getAnimalGalleryImages, getAnimalImage, getAnimalOgImage } from "@/lib/images/animal-images";
import { buildArticleMetadata } from "@/lib/metadata";

const PATH = "/animals/sea-cucumber";
const TITLE = "Sea Cucumber — Profile, Seabed Recyclers & Strange Defenses";
const DESC =
  "Explore sea cucumbers (class Holothuroidea): soft, sausage-shaped echinoderms that clean the seafloor, and defend themselves by expelling their own sticky — or even toxic — insides.";

export const metadata: Metadata = buildArticleMetadata({
  title: TITLE,
  description: DESC,
  path: PATH,
  publishedTime: "2026-06-21",
  modifiedTime: "2026-06-21",
  ogImage: getAnimalOgImage("sea-cucumber"),
});

export default function SeaCucumberPage() {
  return (
    <AnimalProfileLayout
      commonName="Sea Cucumber"
      scientificName="class Holothuroidea"
      pageTitle={TITLE}
      description={DESC}
      path={PATH}
      parentCategory="Marine Animals"
      parentCategoryHref="/animal-encyclopedia/marine-animals"
      tags={["Echinoderm", "Seabed", "Recycler"]}
      image={getAnimalImage("sea-cucumber") ?? undefined}
      galleryImages={getAnimalGalleryImages("sea-cucumber")}
      sources={ANIMAL_SOURCES["sea-cucumber"]}
      publishedDate="2026-06-21"
      modifiedDate="2026-06-21"
      overview={
        <>
          <p>
            Sea cucumbers (class Holothuroidea) are soft-bodied, sausage- or worm-shaped
            animals of the seafloor — and, despite their vegetable-like name and appearance,
            they are animals, and echinoderms at that, related to starfish and sea urchins.
            They have a leathery body, a ring of feeding tentacles around the mouth at one
            end, and rows of tiny tube feet. Hundreds of species live in the ocean, from
            shallow reefs to the deepest trenches.
          </p>
          <p>
            Quiet and unassuming, sea cucumbers are vital recyclers of the seabed — and they
            have some of the strangest defences of any animal.
          </p>
          <p>
            <strong>Note:</strong> sea cucumbers are a large and varied class; details here
            cover them broadly. Treat general statements as approximate and verify against
            authoritative sources.
          </p>
        </>
      }
      habitat={
        <p>
          Sea cucumbers live throughout the world&apos;s oceans, on and in the seabed — from
          coral reefs, seagrass beds, and rocky shores to muddy bottoms and the abyssal
          depths, where they can be among the most abundant large animals on the deep ocean
          floor. They are found at all depths, sitting on the bottom, burrowing in sediment,
          or, in some deep-sea species, even drifting and swimming.
        </p>
      }
      diet={
        <p>
          Most sea cucumbers are deposit or suspension feeders. Deposit feeders swallow sand
          and mud, digest the tiny organisms and organic matter in it, and pass out cleaned
          sediment — much as earthworms do on land — while suspension feeders spread sticky
          tentacles to catch drifting particles and plankton from the water. By processing
          vast amounts of sediment, they help clean and recycle nutrients on the seafloor.
        </p>
      }
      behavior={
        <p>
          Sea cucumbers are mostly slow-moving, but they are far from defenceless. Many can
          eject sticky, tangled threads (Cuvierian tubules) from their rear end to entangle a
          predator, and some take this further by expelling parts of their own internal organs
          — which can be regrown later — to distract or deter an attacker, a process called
          evisceration. Some also contain toxins. They breathe partly through internal
          &ldquo;respiratory trees,&rdquo; and a number of small animals, including certain
          fish, even shelter inside a sea cucumber&apos;s body. Many can stiffen or soften
          their body wall remarkably.
        </p>
      }
      humanInteraction={
        <p>
          Sea cucumbers are ecologically important seabed cleaners, and they are also harvested
          in large numbers as a delicacy in some cuisines (often called bêche-de-mer or
          trepang) — a trade that has overexploited some species and become a conservation
          concern. They are otherwise harmless to people. Consult authoritative sources for
          species-specific status.
        </p>
      }
      faqs={[
        {
          question: "Is a sea cucumber a plant or an animal?",
          answer:
            "It's an animal — despite the name and its vegetable-like look. Sea cucumbers are echinoderms, the same broad group as starfish and sea urchins, with tube feet, a ring of tentacles around the mouth, and an internal water-vascular system. The 'cucumber' refers only to their soft, elongated shape.",
        },
        {
          question: "How do sea cucumbers defend themselves?",
          answer:
            "In some very unusual ways. Many can shoot out sticky, tangled threads to ensnare a predator, and some go further by expelling parts of their own internal organs (evisceration) to distract an attacker — then regrowing them later. Certain species are also toxic. These remarkable defences make up for their slow, soft-bodied lifestyle.",
        },
        {
          question: "Why are sea cucumbers important to the ocean?",
          answer:
            "They are key recyclers of the seafloor. Deposit-feeding sea cucumbers swallow sand and mud, extract the organic matter, and pass out cleaned sediment, processing huge amounts of material and recycling nutrients — a role similar to earthworms on land. In some deep-sea areas they are among the most abundant animals, making them vital to those ecosystems.",
        },
        {
          question: "Can sea cucumbers regrow their organs?",
          answer:
            "Yes. Sea cucumbers have impressive regenerative powers. After expelling internal organs as a defence (evisceration), many can regrow them over time. This ability to regenerate lost body parts is part of what makes echinoderms, including sea cucumbers, so biologically interesting.",
        },
      ]}
      quickFacts={[
        { label: "Group", value: "Class Holothuroidea (echinoderms)" },
        { label: "Relatives", value: "Starfish & sea urchins" },
        { label: "Body", value: "Soft, sausage-shaped; tube feet & tentacles" },
        { label: "Diet", value: "Deposit/suspension feeder (seabed recycler)" },
        { label: "Defences", value: "Sticky threads; evisceration; some toxins" },
        { label: "Regeneration", value: "Can regrow expelled organs" },
        { label: "Habitat", value: "All ocean depths worldwide" },
        { label: "Note", value: "Overharvested as food in places" },
      ]}
      relatedLinks={[
        { label: "Starfish Profile", href: "/animals/starfish", description: "A close echinoderm relative" },
        { label: "Sea Urchin Profile", href: "/animals/sea-urchin", description: "Another echinoderm" },
        { label: "Giant Isopod Profile", href: "/animals/giant-isopod", description: "Another seafloor scavenger" },
        { label: "Ocean fauna by depth", href: "/fauna/ocean", description: "Seabed habitats in context" },
        { label: "Marine Animals", href: "/animal-encyclopedia/marine-animals" },
      ]}
    />
  );
}
