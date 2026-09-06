import type { Metadata } from "next";
import AnimalProfileLayout from "@/components/AnimalProfileLayout";
import { ANIMAL_SOURCES } from "@/lib/educational/animal-sources";
import { getAnimalGalleryImages, getAnimalImage, getAnimalOgImage } from "@/lib/images/animal-images";
import { buildArticleMetadata } from "@/lib/metadata";

const PATH = "/animals/portuguese-man-o-war";
const TITLE = "Portuguese Man o' War — Profile, Colony Biology & Sting Caution";
const DESC =
  "Explore the Portuguese man o' war (Physalia physalis): not a jellyfish but a floating colony of zooids, with a gas-filled float and a serious sting.";

export const metadata: Metadata = buildArticleMetadata({
  title: TITLE,
  description: DESC,
  path: PATH,
  publishedTime: "2026-09-06",
  modifiedTime: "2026-09-06",
  ogImage: getAnimalOgImage("portuguese-man-o-war"),
});

export default function PortugueseManOWarPage() {
  return (
    <AnimalProfileLayout
      commonName="Portuguese Man o' War"
      scientificName="Physalia physalis"
      pageTitle={TITLE}
      description={DESC}
      path={PATH}
      parentCategory="Marine Animals"
      parentCategoryHref="/animal-encyclopedia/marine-animals"
      tags={["Invertebrate","Siphonophore","Marine"]}
      image={getAnimalImage("portuguese-man-o-war") ?? undefined}
      galleryImages={getAnimalGalleryImages("portuguese-man-o-war")}
      sources={ANIMAL_SOURCES["portuguese-man-o-war"]}
      publishedDate="2026-09-06"
      modifiedDate="2026-09-06"
      overview={
        <>
        <p>
          The Portuguese man o&apos; war (<em>Physalia physalis</em>) is one of the most misidentified animals in the sea. It is <strong>not a jellyfish</strong>: it is a siphonophore, a floating colony made up of many specialised individual units called zooids that cannot survive independently.
        </p>
        <p>
          The colony is organised into distinct roles. A gas-filled float, the pneumatophore, keeps it at the surface and acts as a sail; beneath it hang zooids specialised for capturing prey, for digestion, and for reproduction. The long trailing tentacles are the fishing apparatus.
        </p>
        <p>
          <strong>Safety note:</strong> the sting is medically significant and tentacles remain capable of stinging even when the animal is washed up and appears dead. This profile is educational only and gives no first-aid or treatment guidance — any sting or reaction should be directed to qualified medical professionals or local health authorities, and beach warnings should be followed.
        </p>
        </>
      }
      habitat={
        <>
        <p>
          The Portuguese man o&apos; war drifts at the surface of warm ocean waters — the tropical and subtropical Atlantic, Indian and Pacific Oceans — and is carried by wind and current rather than swimming. Because the float acts as a sail, sustained onshore winds can drive large numbers onto beaches, which is when most human encounters happen.
        </p>
        </>
      }
      diet={
        <>
        <p>
          The colony catches small fish, larvae, crustaceans and other plankton with its tentacles, which carry dense batteries of stinging cells. Captured prey is drawn up to feeding zooids that digest it, and the nutrients are shared through the colony.
        </p>
        </>
      }
      behavior={
        <>
        <p>
          The man o&apos; war has no means of active swimming and no control over its course beyond adjusting the float — it can deflate slightly to submerge briefly. Individuals are left-sailing or right-sailing depending on the orientation of the crest, which spreads a population across different downwind paths. A few animals feed on it despite the stings, including the blue sea slug and the loggerhead turtle, and small fish sometimes shelter among its tentacles.
        </p>
        </>
      }
      humanInteraction={
        <>
        <p>
          Beach strandings are the main point of contact with people, and stings are common where onshore winds bring the animals in. Detached tentacles on the sand can still sting. Many coastal authorities post warnings and close beaches during influxes. This profile offers no first-aid, treatment or handling guidance: follow local warnings, do not touch stranded animals or tentacles, and direct any sting or reaction to qualified medical professionals or local health authorities.
        </p>
        </>
      }
      faqs={[
        {
          question: "Is a Portuguese man o' war a jellyfish?",
          answer:
            "No. It is a siphonophore — a floating colony of specialised zooids that function together and cannot live independently — whereas a true jellyfish is a single animal. Both belong to the phylum Cnidaria and both sting, which is why the two are so often confused.",
        },
        {
          question: "What is the float made of?",
          answer:
            "The float, or pneumatophore, is a gas-filled structure that keeps the colony at the surface and acts as a sail. The animal can deflate it slightly to dip below the surface, but it cannot swim; its movement is governed by wind and current.",
        },
        {
          question: "Can a beached man o' war still sting?",
          answer:
            "Yes. Tentacles retain the ability to sting after the animal is stranded and appears dead, and detached tentacle fragments on the sand can sting too. Stranded animals and tentacles should not be touched, and local beach warnings should be followed.",
        },
        {
          question: "Does anything eat the Portuguese man o' war?",
          answer:
            "A few specialists do, despite the stinging cells — the blue sea slug and the violet sea snail among them, and loggerhead turtles also take them. Some small fish shelter among the tentacles, apparently tolerating the stings that would deter other animals.",
        },
      ]}
      quickFacts={[
        { label: "Scientific name", value: "Physalia physalis" },
        { label: "What it is", value: "A siphonophore colony, not a jellyfish" },
        { label: "Phylum", value: "Cnidaria" },
        { label: "Float", value: "Gas-filled pneumatophore; acts as a sail" },
        { label: "Structure", value: "Specialised zooids with divided roles" },
        { label: "Movement", value: "Drifts — cannot swim" },
        { label: "Sting", value: "Medically significant; active when stranded" },
        { label: "Boundary", value: "Educational only — no first aid given" },
      ]}
      relatedLinks={[
        { label: "Jellyfish Profile", href: "/animals/jellyfish", description: "True jellyfish, for contrast" },
        { label: "Box Jellyfish Profile", href: "/animals/box-jellyfish" },
        { label: "Comb Jelly Profile", href: "/animals/comb-jelly" },
        { label: "Sea Anemone Profile", href: "/animals/sea-anemone" },
        { label: "Marine Animals", href: "/animal-encyclopedia/marine-animals" },
      ]}
    />
  );
}
