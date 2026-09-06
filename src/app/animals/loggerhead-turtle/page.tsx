import type { Metadata } from "next";
import AnimalProfileLayout from "@/components/AnimalProfileLayout";
import { ANIMAL_SOURCES } from "@/lib/educational/animal-sources";
import { getAnimalGalleryImages, getAnimalImage, getAnimalOgImage } from "@/lib/images/animal-images";
import { buildArticleMetadata } from "@/lib/metadata";

const PATH = "/animals/loggerhead-turtle";
const TITLE = "Loggerhead Turtle — Profile, Powerful Jaws & Ocean Migration";
const DESC =
  "Explore the loggerhead turtle (Caretta caretta): a large-headed marine turtle whose crushing jaws handle shellfish and whose young cross ocean basins.";

export const metadata: Metadata = buildArticleMetadata({
  title: TITLE,
  description: DESC,
  path: PATH,
  publishedTime: "2026-09-06",
  modifiedTime: "2026-09-06",
  ogImage: getAnimalOgImage("loggerhead-turtle"),
});

export default function LoggerheadTurtlePage() {
  return (
    <AnimalProfileLayout
      commonName="Loggerhead Turtle"
      scientificName="Caretta caretta"
      pageTitle={TITLE}
      description={DESC}
      path={PATH}
      parentCategory="Reptiles & Amphibians"
      parentCategoryHref="/animal-encyclopedia/reptiles"
      tags={["Reptile","Sea Turtle","Migratory"]}
      image={getAnimalImage("loggerhead-turtle") ?? undefined}
      galleryImages={getAnimalGalleryImages("loggerhead-turtle")}
      sources={ANIMAL_SOURCES["loggerhead-turtle"]}
      publishedDate="2026-09-06"
      modifiedDate="2026-09-06"
      overview={
        <>
        <p>
          The loggerhead sea turtle (<em>Caretta caretta</em>) is a large, reddish-brown marine turtle found in temperate and tropical seas worldwide. Its name comes from its disproportionately <strong>large head</strong>, which houses the muscle needed for exceptionally powerful jaws.
        </p>
        <p>
          Those jaws let the loggerhead do something most sea turtles cannot: crush hard-shelled prey such as conchs, whelks, clams and crabs. It is the hard-shell specialist among sea turtles.
        </p>
        <p>
          Loggerheads are also extraordinary navigators. Hatchlings entering the sea undertake journeys that can carry them across entire ocean basins, and there is strong evidence that they use the Earth&apos;s <strong>magnetic field</strong> as a positional map.
        </p>
        </>
      }
      habitat={
        <>
        <p>
          Loggerheads are the most wide-ranging of sea turtles, occurring in the Atlantic, Pacific and Indian Oceans and the Mediterranean. Adults use continental shelves, bays, estuaries and lagoons, while juveniles spend years in the open ocean, often associated with drifting weed lines and current systems. Nesting is on sandy beaches, with major concentrations in the southeastern United States, the Mediterranean, Oman, Australia and elsewhere.
        </p>
        </>
      }
      diet={
        <>
        <p>
          Loggerheads are carnivores that specialise on hard-shelled invertebrates: conchs, whelks, clams, mussels, crabs, horseshoe crabs and sea urchins, along with jellyfish, fish and some plant material. Their powerful jaws are what makes this diet available to them, and their feeding leaves distinctive damage on shells.
        </p>
        </>
      }
      behavior={
        <>
        <p>
          Young loggerheads spend an extended oceanic phase drifting and feeding in open water before moving into coastal habitats as they grow. Adults migrate long distances between feeding and nesting areas. Females show nest-site fidelity, returning to the region where they hatched, and — as in other sea turtles — the sex of hatchlings is set by incubation temperature. Research on this species has been central to demonstrating magnetic navigation in animals.
        </p>
        </>
      }
      humanInteraction={
        <>
        <p>
          Loggerheads face bycatch in longline, trawl and gillnet fisheries as a leading threat, alongside coastal development and lighting on nesting beaches, boat strikes, marine debris and climate effects on sand temperature and beach erosion. They are protected under national laws and international agreements across much of their range. Turtle excluder devices and lighting ordinances are among the measures used to reduce mortality. This profile offers no guidance on approaching, handling or interacting with turtles or nests — these are restricted or illegal in most jurisdictions. Verify current status at the IUCN Red List.
        </p>
        </>
      }
      faqs={[
        {
          question: "Why does the loggerhead have such a big head?",
          answer:
            "To house the muscle behind its jaws. The loggerhead specialises in hard-shelled prey — conchs, whelks, clams, crabs and urchins — and crushing those shells requires a powerful bite, which in turn requires a large head. It is the trait the common name refers to.",
        },
        {
          question: "How do loggerheads navigate across oceans?",
          answer:
            "There is strong evidence that they use the Earth's magnetic field as a kind of map, reading regional variations in field intensity and inclination as positional information. Work on loggerhead hatchlings has been central to establishing magnetic navigation in animals.",
        },
        {
          question: "What do loggerhead turtles eat?",
          answer:
            "Mostly hard-shelled invertebrates — conchs, whelks, clams, mussels, crabs, horseshoe crabs and sea urchins — plus jellyfish, fish and some plant material. Their crushing jaws let them exploit prey that other sea turtles cannot handle.",
        },
        {
          question: "Where do loggerhead turtles nest?",
          answer:
            "On sandy beaches, with females returning to the general region where they hatched. Major nesting concentrations include the southeastern United States, the Mediterranean, Oman and Australia. As with other sea turtles, the sex of hatchlings depends on the temperature of the sand.",
        },
      ]}
      quickFacts={[
        { label: "Scientific name", value: "Caretta caretta" },
        { label: "Family", value: "Cheloniidae" },
        { label: "Class", value: "Reptilia" },
        { label: "Head", value: "Large — houses powerful jaw muscle" },
        { label: "Diet", value: "Hard-shelled invertebrates" },
        { label: "Navigation", value: "Uses the Earth's magnetic field" },
        { label: "Range", value: "Most wide-ranging sea turtle" },
        { label: "Status", value: "Verify current IUCN assessment" },
      ]}
      relatedLinks={[
        { label: "Hawksbill Turtle Profile", href: "/animals/hawksbill-turtle" },
        { label: "Green Sea Turtle Profile", href: "/animals/green-sea-turtle" },
        { label: "Leatherback Sea Turtle Profile", href: "/animals/leatherback-sea-turtle" },
        { label: "Migration & Navigation", href: "/animal-senses-and-adaptations/migration-and-navigation" },
        { label: "Endangered Animals", href: "/endangered-animals" },
      ]}
    />
  );
}
