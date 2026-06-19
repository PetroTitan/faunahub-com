import type { Metadata } from "next";
import AnimalProfileLayout from "@/components/AnimalProfileLayout";
import { ANIMAL_SOURCES } from "@/lib/educational/animal-sources";
import { getAnimalGalleryImages, getAnimalImage, getAnimalOgImage } from "@/lib/images/animal-images";
import { buildArticleMetadata } from "@/lib/metadata";

const PATH = "/animals/fire-salamander";
const TITLE = "Fire Salamander — Profile, Habitat, Diet & Behavior";
const DESC =
  "Explore the fire salamander (Salamandra salamandra): a striking black-and-yellow amphibian of European woodlands, known for its bold warning colours and moist forest life.";

export const metadata: Metadata = buildArticleMetadata({
  title: TITLE,
  description: DESC,
  path: PATH,
  publishedTime: "2026-06-19",
  modifiedTime: "2026-06-19",
  ogImage: getAnimalOgImage("fire-salamander"),
});

export default function FireSalamanderPage() {
  return (
    <AnimalProfileLayout
      commonName="Fire Salamander"
      scientificName="Salamandra salamandra"
      pageTitle={TITLE}
      description={DESC}
      path={PATH}
      parentCategory="Reptiles & Amphibians"
      parentCategoryHref="/animal-encyclopedia/reptiles"
      tags={["Amphibian", "Salamander", "Toxic skin"]}
      image={getAnimalImage("fire-salamander") ?? undefined}
      galleryImages={getAnimalGalleryImages("fire-salamander")}
      sources={ANIMAL_SOURCES["fire-salamander"]}
      publishedDate="2026-06-19"
      modifiedDate="2026-06-19"
      overview={
        <>
          <p>
            The fire salamander (<em>Salamandra salamandra</em>) is one of the
            best-known amphibians of Europe, instantly recognisable by its glossy
            black body marked with bold yellow (sometimes orange) patches. The
            striking pattern is a warning signal: like many salamanders, it has
            toxic skin secretions that deter predators.
          </p>
          <p>
            A creature of cool, damp woodlands, the fire salamander is largely
            terrestrial as an adult but depends on clean water for its young. It is
            long-lived and mostly active at night and after rain.
          </p>
          <p>
            <strong>Conservation note:</strong> the fire salamander is widespread
            but faces local threats, including habitat loss and an emerging
            amphibian skin disease in parts of Europe. Verify current status at
            iucnredlist.org and AmphibiaWeb.
          </p>
        </>
      }
      habitat={
        <p>
          Fire salamanders live in cool, moist deciduous and mixed forests across
          much of Europe, especially in hilly and mountainous areas with clean
          streams. By day they shelter under logs, stones, leaf litter, or in
          burrows, emerging in humid conditions.
        </p>
      }
      diet={
        <p>
          Fire salamanders are carnivores that feed on invertebrates such as
          insects, worms, slugs, and spiders, captured on the forest floor at night
          or after rain. Their slow metabolism suits a patient, ambush-style way of
          feeding.
        </p>
      }
      behavior={
        <p>
          Fire salamanders are nocturnal and most visible after rain, when they move
          about to feed. Unusually among amphibians, many fire salamanders do not lay
          eggs in the open: females typically deposit well-developed aquatic larvae
          into streams or pools, and some populations give birth to fully formed
          young. The species is long-lived, with individuals surviving many years.
        </p>
      }
      humanInteraction={
        <p>
          The fire salamander is woven into European folklore — the name reflects an
          old belief linking the animal to fire after individuals emerged from logs
          placed on hearths. Today, the chief concerns are habitat loss, road
          mortality, and the spread of the amphibian skin fungus known as Bsal in
          some regions. Wild salamanders should not be handled. For current status,
          consult AmphibiaWeb and the IUCN Red List.
        </p>
      }
      faqs={[
        {
          question: "Why is it called a fire salamander?",
          answer:
            "The name comes from old European folklore. Salamanders sheltering inside logs would scurry out when the wood was placed on a fire, which led to a mistaken belief that the animals were born from or lived in flames. They have no actual association with fire.",
        },
        {
          question: "Are fire salamanders poisonous?",
          answer:
            "Fire salamanders have toxic skin secretions that deter predators, and their bold yellow-and-black pattern is a warning signal. They are not aggressive and pose no danger if left alone, but they should not be handled — both for the animal's wellbeing and because the secretions are an irritant.",
        },
        {
          question: "Do fire salamanders lay eggs?",
          answer:
            "Mostly not in the usual amphibian way. Many fire salamanders retain the eggs internally and deposit well-developed aquatic larvae into clean streams or pools, while some populations give birth to fully metamorphosed young on land.",
        },
        {
          question: "What do fire salamanders eat?",
          answer:
            "They are carnivores that feed on invertebrates such as insects, earthworms, slugs, and spiders, hunting on the forest floor mainly at night and after rain.",
        },
      ]}
      quickFacts={[
        { label: "Scientific name", value: "Salamandra salamandra" },
        { label: "Class", value: "Amphibia" },
        { label: "Order", value: "Urodela (salamanders)" },
        { label: "Diet", value: "Carnivore (invertebrates)" },
        { label: "Defense", value: "Toxic skin; warning colours" },
        { label: "Activity", value: "Nocturnal; active after rain" },
        { label: "Habitat", value: "Cool, moist European woodland" },
        { label: "IUCN Status", value: "Verify before publication" },
      ]}
      relatedLinks={[
        { label: "Salamander Profile", href: "/animals/salamander", description: "Salamanders as a whole" },
        { label: "Newt Profile", href: "/animals/newt", description: "Closely related amphibians" },
        { label: "Poison Dart Frog Profile", href: "/animals/poison-dart-frog", description: "Another toxic-skinned amphibian" },
        { label: "Reptiles & Amphibians", href: "/animal-encyclopedia/reptiles" },
        { label: "Fauna by Continent", href: "/fauna/continents", description: "European fauna in context" },
      ]}
    />
  );
}
