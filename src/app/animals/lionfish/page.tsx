import type { Metadata } from "next";
import AnimalProfileLayout from "@/components/AnimalProfileLayout";
import { ANIMAL_SOURCES } from "@/lib/educational/animal-sources";
import { getAnimalGalleryImages, getAnimalImage, getAnimalOgImage } from "@/lib/images/animal-images";
import { buildArticleMetadata } from "@/lib/metadata";

const PATH = "/animals/lionfish";
const TITLE = "Lionfish — Profile, Venomous Spines, Diet & Invasion";
const DESC =
  "Explore the lionfish (genus Pterois): a striking reef predator with venomous spines, native to the Indo-Pacific and a notorious invasive species in the western Atlantic and Caribbean.";

export const metadata: Metadata = buildArticleMetadata({
  title: TITLE,
  description: DESC,
  path: PATH,
  publishedTime: "2026-06-19",
  modifiedTime: "2026-06-19",
  ogImage: getAnimalOgImage("lionfish"),
});

export default function LionfishPage() {
  return (
    <AnimalProfileLayout
      commonName="Lionfish"
      scientificName="genus Pterois"
      pageTitle={TITLE}
      description={DESC}
      path={PATH}
      parentCategory="Fish"
      parentCategoryHref="/animal-encyclopedia/fish"
      tags={["Fish", "Reef predator", "Venomous", "Invasive (Atlantic)"]}
      image={getAnimalImage("lionfish") ?? undefined}
      galleryImages={getAnimalGalleryImages("lionfish")}
      sources={ANIMAL_SOURCES.lionfish}
      publishedDate="2026-06-19"
      modifiedDate="2026-06-19"
      overview={
        <>
          <p>
            Lionfish (genus <em>Pterois</em>) are striking reef predators with bold
            stripes and long, fan-like fins armed with venomous spines. Native to the
            Indo-Pacific, they are best known today for a second reason: as one of the
            most damaging marine invasive species in the western Atlantic and
            Caribbean. The animal shown here is the red lionfish
            (<em>Pterois volitans</em>).
          </p>
          <p>
            Their venom is purely defensive — delivered through the spines if the fish
            is grabbed or stepped on — and is not used to catch prey. This is an
            educational profile and does not provide medical or first-aid guidance.
          </p>
          <p>
            <strong>Conservation note:</strong> in their native Indo-Pacific range
            lionfish are a normal part of reef communities, while in the Atlantic and
            Caribbean they are managed as a harmful invasive species. Verify status
            and regional context through authoritative sources such as NOAA.
          </p>
        </>
      }
      habitat={
        <p>
          In their native range, lionfish live on coral reefs, rocky reefs, and
          lagoons across the Indo-Pacific. As invaders they have spread widely through
          the western Atlantic, Gulf of Mexico, and Caribbean, where they occupy
          reefs, wrecks, mangroves, and even deep habitats, often at high densities.
        </p>
      }
      diet={
        <p>
          Lionfish are carnivores that prey on small fish and crustaceans. They hunt
          by slowly herding and cornering prey with their broad fins, then striking
          with a rapid gulp. In invaded regions their appetite and efficiency, paired
          with a lack of natural predators, let them take a heavy toll on native reef
          fish.
        </p>
      }
      behavior={
        <p>
          Lionfish are mostly slow-moving and often hover near reef structure, relying
          on camouflage-breaking warning colours and their venomous spines for
          defence rather than fleeing. They are mainly active around dawn, dusk, and
          at night. Their confidence and lack of fear reflect how well protected they
          are from most would-be predators.
        </p>
      }
      humanInteraction={
        <p>
          The lionfish&apos;s venomous spines mean it should never be handled; stings
          are painful, and care should be taken by divers and in handling — for
          medical concerns, follow professional and local guidance rather than advice
          from this page. In the Atlantic and Caribbean, organised removal and even
          promotion of lionfish as food are used to limit their impact on native
          reefs. For current status and guidance, consult NOAA and the IUCN Red List.
        </p>
      }
      faqs={[
        {
          question: "Is a lionfish venomous or poisonous?",
          answer:
            "Lionfish are venomous: they have spines that can inject venom if the fish is grabbed or stepped on. The venom is a defence, not a hunting tool. This page is educational only and does not give medical or first-aid advice — for any sting, follow professional and local medical guidance.",
        },
        {
          question: "Why are lionfish such a problem in the Atlantic?",
          answer:
            "Lionfish are native to the Indo-Pacific but became established in the western Atlantic and Caribbean, where they have few natural predators, breed prolifically, and eat large numbers of native reef fish. This combination makes them one of the most damaging marine invasive species in the region.",
        },
        {
          question: "What do lionfish eat?",
          answer:
            "They are carnivores that prey on small fish and crustaceans, often herding prey into a corner with their wide fins before a quick strike. In invaded areas this efficient hunting heavily affects native fish populations.",
        },
        {
          question: "Can you eat lionfish?",
          answer:
            "In invaded regions, eating lionfish is actively encouraged as a way to help control their numbers, and the flesh (away from the venomous spines, which are removed in preparation) is widely considered good to eat. Local food-safety advice should always be followed.",
        },
      ]}
      quickFacts={[
        { label: "Group", value: "Genus Pterois" },
        { label: "Reference species", value: "Pterois volitans (red lionfish)" },
        { label: "Class", value: "Actinopterygii (ray-finned fish)" },
        { label: "Diet", value: "Carnivore (small fish & crustaceans)" },
        { label: "Defense", value: "Venomous spines (do not handle)" },
        { label: "Native range", value: "Indo-Pacific" },
        { label: "Elsewhere", value: "Invasive in W. Atlantic & Caribbean" },
        { label: "IUCN Status", value: "Verify before publication" },
      ]}
      relatedLinks={[
        { label: "Pufferfish Profile", href: "/animals/pufferfish", description: "Another defended reef fish" },
        { label: "Clownfish Profile", href: "/animals/clownfish", description: "An Indo-Pacific reef fish" },
        { label: "Grouper Profile", href: "/animals/grouper", description: "A reef predator (and possible lionfish predator)" },
        { label: "Fish Encyclopedia", href: "/animal-encyclopedia/fish" },
        { label: "Ocean fauna by depth", href: "/fauna/ocean", description: "Reef habitats in context" },
      ]}
    />
  );
}
