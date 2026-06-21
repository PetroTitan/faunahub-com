import type { Metadata } from "next";
import AnimalProfileLayout from "@/components/AnimalProfileLayout";
import { ANIMAL_SOURCES } from "@/lib/educational/animal-sources";
import { getAnimalGalleryImages, getAnimalImage, getAnimalOgImage } from "@/lib/images/animal-images";
import { buildArticleMetadata } from "@/lib/metadata";

const PATH = "/animals/stonefish";
const TITLE = "Stonefish — Profile, the World's Most Venomous Fish & Safety";
const DESC =
  "Explore stonefish (genus Synanceia): masterfully camouflaged reef fish widely considered the most venomous fish on Earth. An educational profile, not first-aid or medical advice.";

export const metadata: Metadata = buildArticleMetadata({
  title: TITLE,
  description: DESC,
  path: PATH,
  publishedTime: "2026-06-21",
  modifiedTime: "2026-06-21",
  ogImage: getAnimalOgImage("stonefish"),
});

export default function StonefishPage() {
  return (
    <AnimalProfileLayout
      commonName="Stonefish"
      scientificName="Synanceia verrucosa"
      pageTitle={TITLE}
      description={DESC}
      path={PATH}
      parentCategory="Fish"
      parentCategoryHref="/animal-encyclopedia/fish"
      tags={["Fish", "Reef", "Venomous"]}
      image={getAnimalImage("stonefish") ?? undefined}
      galleryImages={getAnimalGalleryImages("stonefish")}
      sources={ANIMAL_SOURCES.stonefish}
      publishedDate="2026-06-21"
      modifiedDate="2026-06-21"
      overview={
        <>
          <p>
            Stonefish (genus <em>Synanceia</em>) are reef and coastal fish of the Indo-Pacific
            widely regarded as the most venomous fish in the world. Their power lies in a
            combination of two things: extraordinary camouflage and potent venom. A stonefish
            looks almost exactly like an encrusted, algae-covered rock or lump of coral
            rubble, and it lies utterly still on the seabed, virtually impossible to spot —
            the reef stonefish (<em>Synanceia verrucosa</em>) is shown here.
          </p>
          <p>
            Along its back stand a row of stout, needle-sharp dorsal spines, each connected
            to venom glands. The spines are a defence, not a hunting tool — the danger comes
            mainly when an animal (or a person) presses down on a hidden stonefish.
          </p>
          <p>
            <strong>Safety note:</strong> this is a general educational profile, not first-aid
            or medical guidance. Stonefish venom is extremely dangerous; never touch one, and
            for any sting seek professional medical care immediately.
          </p>
        </>
      }
      habitat={
        <p>
          Stonefish live in shallow tropical and subtropical waters of the Indo-Pacific, on
          coral and rocky reefs, in rubble and sandy areas, and in tide pools and estuaries.
          They favour the kind of cluttered, rocky seabed they so closely resemble, where they
          can sit motionless and unseen, often partly buried.
        </p>
      }
      diet={
        <p>
          Stonefish are ambush carnivores. They lie perfectly still and disguised, waiting for
          small fish and crustaceans to come within range, then strike with astonishing speed
          — among the fastest strikes of any fish — engulfing the prey in a sudden gulp. Their
          venomous spines are purely defensive and are not used to catch food.
        </p>
      }
      behavior={
        <p>
          A stonefish&apos;s whole strategy is to be invisible: it relies on its rock-like
          camouflage and complete stillness rather than fleeing, which is exactly why it is so
          dangerous to step on. The dorsal spines lie flat until the fish is disturbed, then
          erect and can inject venom under pressure. Stonefish can also survive out of water
          for a surprising time when stranded by the tide. Beyond their venom, they are simply
          superbly adapted ambush predators of the reef.
        </p>
      }
      humanInteraction={
        <p>
          Stonefish are responsible for serious, sometimes life-threatening stings, usually
          when people accidentally step on a hidden fish in shallow water — which is why
          reef-shoe footwear and watching where you step are widely advised in their range,
          and an antivenom exists. The clear practical message is never to touch a stonefish
          and to treat any rock-like reef fish with caution. Ecologically they are part of
          healthy reefs as ambush predators. This profile is educational only; for any sting,
          seek immediate professional medical care.
        </p>
      }
      faqs={[
        {
          question: "Is the stonefish really the most venomous fish?",
          answer:
            "It is widely considered the most venomous fish in the world. Stonefish have stout dorsal spines connected to venom glands, and the venom can cause intense pain, swelling, tissue damage, and, in serious cases, life-threatening effects. An antivenom exists, and stings are medical emergencies.",
        },
        {
          question: "How does a stonefish hurt people?",
          answer:
            "Almost always by being stepped on. Because a stonefish lies motionless and looks just like a rock, swimmers and waders can tread on a hidden one without seeing it. The pressure drives the venomous dorsal spines into the foot, injecting venom. The spines are a defence — the fish doesn't attack or chase people.",
        },
        {
          question: "How does a stonefish catch its food?",
          answer:
            "By ambush, not with its venom. A stonefish stays perfectly still and camouflaged until a small fish or crustacean comes close, then strikes with one of the fastest gulps of any fish, swallowing the prey in an instant. Its venomous spines are used only for defence, never for hunting.",
        },
        {
          question: "What should I do around stonefish?",
          answer:
            "Never touch one, and watch where you put your feet in shallow Indo-Pacific waters — wearing sturdy reef shoes is widely recommended in areas where stonefish occur, since most stings happen from stepping on a hidden fish. This profile is educational only; for any sting, seek immediate professional medical care.",
        },
      ]}
      quickFacts={[
        { label: "Group", value: "Genus Synanceia (stonefish)" },
        { label: "Reference species", value: "Synanceia verrucosa (reef stonefish)" },
        { label: "Class", value: "Actinopterygii (ray-finned fish)" },
        { label: "Claim to fame", value: "Most venomous fish in the world" },
        { label: "Signature trait", value: "Rock-like camouflage; venomous spines" },
        { label: "Spines", value: "Defensive (not for hunting)" },
        { label: "Habitat", value: "Indo-Pacific reefs & shallows" },
        { label: "Danger", value: "Severe stings — never touch" },
      ]}
      relatedLinks={[
        { label: "Lionfish Profile", href: "/animals/lionfish", description: "Another venomous-spined reef fish" },
        { label: "Pufferfish Profile", href: "/animals/pufferfish", description: "A reef fish toxic in a different way" },
        { label: "Flounder Profile", href: "/animals/flounder", description: "Another camouflaged seabed fish" },
        { label: "Ocean fauna by depth", href: "/fauna/ocean", description: "Reef habitats in context" },
        { label: "Fish Encyclopedia", href: "/animal-encyclopedia/fish" },
      ]}
    />
  );
}
