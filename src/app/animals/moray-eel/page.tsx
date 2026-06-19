import type { Metadata } from "next";
import AnimalProfileLayout from "@/components/AnimalProfileLayout";
import { ANIMAL_SOURCES } from "@/lib/educational/animal-sources";
import { getAnimalGalleryImages, getAnimalImage, getAnimalOgImage } from "@/lib/images/animal-images";
import { buildArticleMetadata } from "@/lib/metadata";

const PATH = "/animals/moray-eel";
const TITLE = "Moray Eel — Profile, Habitat, Diet & Behavior";
const DESC =
  "Explore moray eels (family Muraenidae): reef-dwelling predatory fish with a second set of hidden jaws, often seen peering from crevices with their mouths open to breathe.";

export const metadata: Metadata = buildArticleMetadata({
  title: TITLE,
  description: DESC,
  path: PATH,
  publishedTime: "2026-06-19",
  modifiedTime: "2026-06-19",
  ogImage: getAnimalOgImage("moray-eel"),
});

export default function MorayEelPage() {
  return (
    <AnimalProfileLayout
      commonName="Moray Eel"
      scientificName="family Muraenidae"
      pageTitle={TITLE}
      description={DESC}
      path={PATH}
      parentCategory="Fish"
      parentCategoryHref="/animal-encyclopedia/fish"
      tags={["Fish", "Reef predator", "Eel"]}
      image={getAnimalImage("moray-eel") ?? undefined}
      galleryImages={getAnimalGalleryImages("moray-eel")}
      sources={ANIMAL_SOURCES["moray-eel"]}
      publishedDate="2026-06-19"
      modifiedDate="2026-06-19"
      overview={
        <>
          <p>
            Moray eels (family Muraenidae) are elongated, snake-like predatory fish
            of reefs and rocky shores, with hundreds of species across warm and
            temperate seas. They are usually seen with the head poking from a crevice
            and the mouth opening and closing — which looks menacing but is mainly how
            they pump water over their gills to breathe. The animal shown here is the
            giant moray (<em>Gymnothorax javanicus</em>), one of the largest species.
          </p>
          <p>
            Morays have a remarkable feeding adaptation: a second set of jaws in the
            throat that can move forward to grab prey and pull it back to be
            swallowed.
          </p>
          <p>
            <strong>Conservation note:</strong> most moray eels are widespread and not
            of high concern, though some are affected by reef degradation and fishing.
            Verify a particular species&apos; status at iucnredlist.org.
          </p>
        </>
      }
      habitat={
        <p>
          Moray eels live mainly on coral and rocky reefs in tropical and temperate
          seas, sheltering by day in holes, crevices, and ledges. Different species
          occupy different depths and habitats, from shallow lagoons to deeper reef
          slopes; a few live in brackish or fresh water.
        </p>
      }
      diet={
        <p>
          Morays are carnivores that hunt mostly at night, preying on fish,
          crustaceans, and cephalopods such as octopuses. They rely heavily on a keen
          sense of smell to find prey in the dark and in tight spaces. Their hidden
          second jaws (pharyngeal jaws) help them grip and swallow prey in confined
          crevices where they cannot create strong suction.
        </p>
      }
      behavior={
        <p>
          Morays are generally solitary and territorial, returning to favoured shelters.
          The constant mouth movement that exposes their teeth is mostly respiration,
          not threat. Some morays are known to hunt cooperatively with groupers, which
          flush prey from cover that the eel can reach inside the reef. They are most
          active after dark.
        </p>
      }
      humanInteraction={
        <p>
          Moray eels are a favourite sight for reef divers. They are not aggressive
          toward people, but they will bite defensively if cornered or if hands are
          put into crevices, and large species deserve respectful distance. Like some
          other reef fish, large morays can occasionally carry the natural toxin
          ciguatera, a food-safety matter to check locally. For current status,
          consult authoritative sources.
        </p>
      }
      faqs={[
        {
          question: "Why do moray eels open and close their mouths?",
          answer:
            "It looks threatening, but the constant mouth movement is mainly how morays breathe — pumping water over their gills. Because they often sit in tight crevices, this rhythmic gaping is simply respiration rather than a sign of aggression.",
        },
        {
          question: "Do moray eels really have two sets of jaws?",
          answer:
            "Yes. In addition to their outer jaws, morays have a second set of jaws in the throat (pharyngeal jaws) that can shoot forward to grab prey and drag it back to be swallowed. This is an unusual adaptation that helps them feed in confined reef crevices.",
        },
        {
          question: "Are moray eels dangerous?",
          answer:
            "Morays are not aggressive toward people and generally keep to their shelters. They can bite defensively if cornered or if a hand is pushed into a crevice, so divers are advised not to reach into holes or feed them. Treated with normal respect, they pose little risk.",
        },
        {
          question: "What do moray eels eat?",
          answer:
            "Morays are carnivores that hunt mainly at night for fish, crustaceans, and cephalopods such as octopuses, using a strong sense of smell. Some hunt cooperatively with groupers, which drive prey out of cover.",
        },
      ]}
      quickFacts={[
        { label: "Group", value: "Family Muraenidae" },
        { label: "Reference species", value: "Gymnothorax javanicus (giant moray)" },
        { label: "Class", value: "Actinopterygii (ray-finned fish)" },
        { label: "Diet", value: "Carnivore (fish, crustaceans, octopus)" },
        { label: "Special trait", value: "Second (pharyngeal) jaws" },
        { label: "Activity", value: "Mainly nocturnal" },
        { label: "Habitat", value: "Coral & rocky reefs" },
        { label: "IUCN Status", value: "Varies by species (verify)" },
      ]}
      relatedLinks={[
        { label: "Eel Profile", href: "/animals/eel", description: "Eels more broadly" },
        { label: "Grouper Profile", href: "/animals/grouper", description: "A reef predator morays hunt with" },
        { label: "Octopus Profile", href: "/animals/octopus", description: "A prey item and reef neighbour" },
        { label: "Fish Encyclopedia", href: "/animal-encyclopedia/fish" },
        { label: "Ocean fauna by depth", href: "/fauna/ocean", description: "Reef habitats in context" },
      ]}
    />
  );
}
