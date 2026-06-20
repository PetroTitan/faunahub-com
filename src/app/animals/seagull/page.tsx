import type { Metadata } from "next";
import AnimalProfileLayout from "@/components/AnimalProfileLayout";
import { ANIMAL_SOURCES } from "@/lib/educational/animal-sources";
import { getAnimalGalleryImages, getAnimalImage, getAnimalOgImage } from "@/lib/images/animal-images";
import { buildArticleMetadata } from "@/lib/metadata";

const PATH = "/animals/seagull";
const TITLE = "Seagull (Gull) — Profile, Diet, Intelligence & Behavior";
const DESC =
  "Explore gulls (family Laridae): adaptable, intelligent coastal birds — popularly called seagulls — that thrive from shorelines to cities, using the herring gull as a reference.";

export const metadata: Metadata = buildArticleMetadata({
  title: TITLE,
  description: DESC,
  path: PATH,
  publishedTime: "2026-06-20",
  modifiedTime: "2026-06-20",
  ogImage: getAnimalOgImage("seagull"),
});

export default function SeagullPage() {
  return (
    <AnimalProfileLayout
      commonName="Seagull (Gull)"
      scientificName="family Laridae"
      pageTitle={TITLE}
      description={DESC}
      path={PATH}
      parentCategory="Birds"
      parentCategoryHref="/animal-encyclopedia/birds"
      tags={["Bird", "Coastal", "Highly adaptable"]}
      image={getAnimalImage("seagull") ?? undefined}
      galleryImages={getAnimalGalleryImages("seagull")}
      sources={ANIMAL_SOURCES.seagull}
      publishedDate="2026-06-20"
      modifiedDate="2026-06-20"
      overview={
        <>
          <p>
            Gulls — popularly called &ldquo;seagulls&rdquo; — are familiar, adaptable
            birds of the family Laridae. There are many species; the European herring
            gull (<em>Larus argentatus</em>), shown here, is a classic large gull with a
            white body, grey wings, a yellow bill with a red spot, and pink legs. Despite
            the name, many gulls live well inland as well as along coasts.
          </p>
          <p>
            Gulls are intelligent, opportunistic, and remarkably successful, thriving
            around shorelines, lakes, farmland, rubbish tips, and city rooftops alike.
          </p>
          <p>
            <strong>Note:</strong> &ldquo;gull&rdquo; covers many species that can be hard
            to tell apart and that change plumage with age, so details vary. Treat general
            statements as approximate and verify against authoritative sources.
          </p>
        </>
      }
      habitat={
        <p>
          Gulls are found worldwide, most abundantly along coasts but also inland around
          lakes, rivers, farmland, and towns. Many species are highly adaptable and have
          moved into urban areas, nesting on rooftops and feeding on a wide range of
          foods provided, deliberately or not, by people.
        </p>
      }
      diet={
        <p>
          Gulls are opportunistic omnivores. Depending on the species and setting, they
          eat fish, marine invertebrates, insects, eggs and chicks of other birds,
          carrion, scraps, and human food waste. This dietary flexibility is a key reason
          gulls are so widespread and successful.
        </p>
      }
      behavior={
        <p>
          Gulls are social and often nest in colonies. They are notably intelligent:
          some drop shellfish onto rocks to break them open, &ldquo;paddle&rdquo; on wet
          ground to bring up worms, and quickly learn to exploit new food sources,
          including snatching food in towns. Larger gulls take years to reach adult
          plumage, passing through a series of mottled brown immature stages.
        </p>
      }
      humanInteraction={
        <p>
          Gulls live closely alongside people, which brings both fascination and
          conflict — they can be bold around food in coastal towns. Many gull species are
          common, though some are of conservation concern, and their move into cities
          reflects changes in natural food and habitat. Consult authoritative sources for
          species-specific status.
        </p>
      }
      faqs={[
        {
          question: "Is \"seagull\" the correct name?",
          answer:
            "\"Seagull\" is a popular catch-all name, but there is no single bird called just the seagull. The correct term is gull (family Laridae), of which there are many species. Many gulls are not strictly tied to the sea and live around inland water and farmland too.",
        },
        {
          question: "Why are gulls so common in towns and cities?",
          answer:
            "Gulls are intelligent and opportunistic, and towns offer reliable food (from waste and people) and safe rooftop nesting sites. As some natural food sources changed, many gulls adapted to urban life, where they thrive — sometimes to the annoyance of residents.",
        },
        {
          question: "What do gulls eat?",
          answer:
            "Almost anything. Gulls are opportunistic omnivores, taking fish and marine invertebrates, insects, eggs and chicks, carrion, scraps, and human food waste. This very broad diet is central to their success across so many habitats.",
        },
        {
          question: "Are gulls intelligent?",
          answer:
            "Yes, notably so. Gulls show clever feeding behaviours — dropping shellfish to crack them, foot-paddling to lure up worms, and rapidly learning to exploit new food sources, including taking food in busy human settings. They are among the more adaptable, problem-solving birds.",
        },
      ]}
      quickFacts={[
        { label: "Group", value: "Family Laridae (gulls)" },
        { label: "Reference species", value: "Larus argentatus (herring gull)" },
        { label: "Class", value: "Aves" },
        { label: "Diet", value: "Opportunistic omnivore" },
        { label: "Traits", value: "Intelligent; highly adaptable" },
        { label: "Habitat", value: "Coasts, inland waters & cities" },
        { label: "Plumage", value: "Takes years to mature in big gulls" },
        { label: "Status", value: "Varies by species (verify)" },
      ]}
      relatedLinks={[
        { label: "Albatross Profile", href: "/animals/albatross", description: "An ocean-going seabird" },
        { label: "Pelican Profile", href: "/animals/pelican", description: "A large fish-catching waterbird" },
        { label: "Crow Profile", href: "/animals/crow", description: "Another intelligent, adaptable bird" },
        { label: "Birdwatching", href: "/birdwatching", description: "Tips for observing coastal birds" },
        { label: "Bird Encyclopedia", href: "/animal-encyclopedia/birds" },
      ]}
    />
  );
}
