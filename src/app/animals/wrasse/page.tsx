import type { Metadata } from "next";
import AnimalProfileLayout from "@/components/AnimalProfileLayout";
import { ANIMAL_SOURCES } from "@/lib/educational/animal-sources";
import { getAnimalGalleryImages, getAnimalImage, getAnimalOgImage } from "@/lib/images/animal-images";
import { buildArticleMetadata } from "@/lib/metadata";

const PATH = "/animals/wrasse";
const TITLE = "Wrasse — Profile, Reef Fish, Cleaning Stations & Sex Change";
const DESC =
  "Explore wrasses (family Labridae): a huge family of colourful reef fish — from tiny cleaner wrasses to the giant humphead wrasse — many of which can change sex during their lives.";

export const metadata: Metadata = buildArticleMetadata({
  title: TITLE,
  description: DESC,
  path: PATH,
  publishedTime: "2026-06-21",
  modifiedTime: "2026-06-21",
  ogImage: getAnimalOgImage("wrasse"),
});

export default function WrassePage() {
  return (
    <AnimalProfileLayout
      commonName="Wrasse"
      scientificName="family Labridae"
      pageTitle={TITLE}
      description={DESC}
      path={PATH}
      parentCategory="Fish"
      parentCategoryHref="/animal-encyclopedia/fish"
      tags={["Fish", "Reef", "Sex-changing"]}
      image={getAnimalImage("wrasse") ?? undefined}
      galleryImages={getAnimalGalleryImages("wrasse")}
      sources={ANIMAL_SOURCES.wrasse}
      publishedDate="2026-06-21"
      modifiedDate="2026-06-21"
      overview={
        <>
          <p>
            Wrasses (family Labridae) are one of the largest and most colourful families of
            fish, found mainly on coral reefs and rocky coasts around the world. They range
            enormously in size — from tiny cleaner wrasses just a few centimetres long to the
            giant humphead (Napoleon) wrasse (<em>Cheilinus undulatus</em>), shown here,
            which can grow to around two metres and is one of the biggest reef fish. Wrasses
            are typically slender, with thick lips and protruding teeth, and many are
            spectacularly patterned.
          </p>
          <p>
            Two things make wrasses especially fascinating: many run &ldquo;cleaning
            stations&rdquo; that service other fish, and a great many can change sex during
            their lives.
          </p>
          <p>
            <strong>Note:</strong> the wrasse family is huge and varied; details here draw on
            the family broadly, with the humphead wrasse as a reference. Treat general
            statements as approximate and verify against authoritative sources.
          </p>
        </>
      }
      habitat={
        <p>
          Wrasses live mostly on tropical and temperate coral reefs, rocky reefs, and
          seagrass beds worldwide, generally in shallow, sunlit water. Different species fill
          different niches across the reef, and the humphead wrasse favours steep outer reef
          slopes and channels in the Indo-Pacific.
        </p>
      }
      diet={
        <p>
          Most wrasses are carnivores, eating invertebrates such as molluscs, crustaceans,
          sea urchins, and worms, which they crush with strong jaws and throat teeth; larger
          species take bigger prey. Cleaner wrasses have a special diet of parasites and dead
          skin picked from other fish. The humphead wrasse is even able to eat hard or toxic
          prey, including crown-of-thorns starfish that damage reefs.
        </p>
      }
      behavior={
        <p>
          Cleaner wrasses are famous for setting up &ldquo;cleaning stations,&rdquo; where
          larger fish queue up to have parasites and dead tissue removed — a mutually
          beneficial relationship important to reef health. Equally remarkable, many wrasses
          are sequential hermaphrodites: they commonly begin life as females and can later
          change into males (often the largest, most colourful individual becoming a dominant
          male). Wrasses are active by day and many bury themselves in sand or hide in
          crevices to sleep at night.
        </p>
      }
      humanInteraction={
        <p>
          Wrasses are vital to reef ecosystems as cleaners and as controllers of invertebrate
          pests, and some are popular in the aquarium trade. The giant humphead wrasse,
          however, is heavily overfished for the live-reef-fish food trade and is assessed as
          Endangered, making it a flagship for reef conservation. Status varies widely across
          the family. Consult WoRMS and the IUCN Red List for species-specific status.
        </p>
      }
      faqs={[
        {
          question: "Can wrasses really change sex?",
          answer:
            "Yes — many do. A great number of wrasses are sequential hermaphrodites, commonly starting life as females and later changing into males. Often the largest individual in a group becomes a dominant, brightly coloured male. This sex change is a normal and important part of the biology of many wrasse species.",
        },
        {
          question: "What is a cleaner wrasse?",
          answer:
            "A cleaner wrasse is a small wrasse that feeds by removing parasites, dead skin, and debris from other fish. They set up 'cleaning stations' on the reef where larger fish — even predators — line up to be cleaned. It's a mutually beneficial partnership: the wrasse gets food, and the client fish gets healthier.",
        },
        {
          question: "How big do wrasses get?",
          answer:
            "It varies enormously. Many wrasses are small, just a few centimetres long, but the family also includes the giant humphead (Napoleon) wrasse, which can reach around two metres and is one of the largest reef fish. So 'wrasse' spans everything from tiny cleaners to reef giants.",
        },
        {
          question: "Why is the humphead wrasse endangered?",
          answer:
            "The giant humphead wrasse is prized in the live-reef-fish food trade and has been heavily overfished, while also being slow to mature and naturally not very abundant. These pressures have made it Endangered, and it is now a focus of reef conservation. Status for other wrasses varies and should be checked against the IUCN Red List.",
        },
      ]}
      quickFacts={[
        { label: "Group", value: "Family Labridae" },
        { label: "Reference species", value: "Cheilinus undulatus (humphead wrasse)" },
        { label: "Class", value: "Actinopterygii (ray-finned fish)" },
        { label: "Size range", value: "A few cm to ~2 m" },
        { label: "Diet", value: "Mostly carnivore (invertebrates)" },
        { label: "Special traits", value: "Cleaning stations; many change sex" },
        { label: "Habitat", value: "Reefs & rocky coasts worldwide" },
        { label: "Status", value: "Varies; humphead Endangered (verify)" },
      ]}
      relatedLinks={[
        { label: "Parrotfish Profile", href: "/animals/parrotfish", description: "A close reef relative that also changes sex" },
        { label: "Clownfish Profile", href: "/animals/clownfish", description: "Another reef fish that can change sex" },
        { label: "Triggerfish Profile", href: "/animals/triggerfish", description: "Another colourful reef fish" },
        { label: "Ocean fauna by depth", href: "/fauna/ocean", description: "Reef habitats in context" },
        { label: "Fish Encyclopedia", href: "/animal-encyclopedia/fish" },
      ]}
    />
  );
}
