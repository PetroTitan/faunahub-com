import type { Metadata } from "next";
import AnimalProfileLayout from "@/components/AnimalProfileLayout";
import { ANIMAL_SOURCES } from "@/lib/educational/animal-sources";
import { getAnimalGalleryImages, getAnimalImage, getAnimalOgImage } from "@/lib/images/animal-images";
import { buildArticleMetadata } from "@/lib/metadata";

const PATH = "/animals/potoo";
const TITLE = "Potoo — Profile, the 'Tree-Stump' Bird & Behavior";
const DESC =
  "Explore potoos (family Nyctibiidae): nocturnal birds of the Americas that disguise themselves as broken tree stumps by day and catch insects on the wing by night — using the great potoo.";

export const metadata: Metadata = buildArticleMetadata({
  title: TITLE,
  description: DESC,
  path: PATH,
  publishedTime: "2026-06-20",
  modifiedTime: "2026-06-20",
  ogImage: getAnimalOgImage("potoo"),
});

export default function PotooPage() {
  return (
    <AnimalProfileLayout
      commonName="Potoo"
      scientificName="Nyctibius grandis"
      pageTitle={TITLE}
      description={DESC}
      path={PATH}
      parentCategory="Birds"
      parentCategoryHref="/animal-encyclopedia/birds"
      tags={["Bird", "Nocturnal", "Camouflage"]}
      image={getAnimalImage("potoo") ?? undefined}
      galleryImages={getAnimalGalleryImages("potoo")}
      sources={ANIMAL_SOURCES.potoo}
      publishedDate="2026-06-20"
      modifiedDate="2026-06-20"
      overview={
        <>
          <p>
            Potoos (family Nyctibiidae) are nocturnal birds of Central and South America,
            celebrated for two things: their extraordinary camouflage and their huge,
            startling eyes. The great potoo (<em>Nyctibius grandis</em>), shown here, is the
            largest species. By day a potoo perches bolt upright on a broken branch or
            stump, stretches into a stiff pose, and becomes almost indistinguishable from
            dead wood — one of the most convincing disguises of any bird.
          </p>
          <p>
            Potoos are relatives of nightjars and frogmouths, and like them they are far
            more often heard — giving haunting, mournful night calls — than seen.
          </p>
          <p>
            <strong>Note:</strong> there are several potoo species; details here use the
            great potoo as a reference. Treat general statements as approximate and verify
            against authoritative sources.
          </p>
        </>
      }
      habitat={
        <p>
          Potoos live in forests, woodland, and forest edges across the tropics of Central
          and South America, from Mexico to northern Argentina depending on the species.
          They favour areas with suitable broken snags and branch stubs to perch on, where
          their camouflage works best, and the great potoo is a bird of lowland and
          foothill forest.
        </p>
      }
      diet={
        <p>
          Potoos are insectivores that catch flying insects — such as beetles, moths, and
          grasshoppers — on the wing at night. From a high, exposed perch, a potoo sallies
          out to snatch passing prey in its wide mouth and then returns to the same perch,
          a sit-and-wait hunting style. The largest species may occasionally take small
          birds or bats.
        </p>
      }
      behavior={
        <p>
          The potoo&apos;s daytime camouflage is its defining behaviour: it freezes upright
          on a stub, with plumage that mimics bark, and even has small notches in its closed
          eyelids that let it detect movement without opening its eyes — so it can keep
          watch while appearing to be part of the wood. At night it becomes an active aerial
          hunter. Potoos nest with no real nest at all, balancing a single egg in a small
          depression or knot on top of a branch or stump.
        </p>
      }
      humanInteraction={
        <p>
          Potoos are seldom seen because of their nocturnal habits and superb disguise, but
          their eerie night calls are well known in the American tropics and feature in
          local folklore. They depend on forest with suitable perches, so deforestation can
          affect them, though several species remain widespread. Consult authoritative
          sources for species-specific status.
        </p>
      }
      faqs={[
        {
          question: "How does a potoo disguise itself?",
          answer:
            "By day, a potoo perches upright on a broken branch or stump and stretches into a stiff, elongated pose. Its bark-like, mottled plumage and posture make it look like a continuation of the dead wood, so it virtually disappears — one of the most effective camouflage strategies of any bird.",
        },
        {
          question: "Can a potoo see with its eyes closed?",
          answer:
            "In a sense, yes. Potoos have small notches or slits in their closed eyelids that let them detect movement and light even while their eyes appear shut. This lets a roosting potoo keep watch for danger without breaking its 'I'm just a stump' disguise by opening its eyes.",
        },
        {
          question: "What do potoos eat?",
          answer:
            "Flying insects, mainly — beetles, moths, grasshoppers, and the like — caught in the air at night. A potoo hunts by sitting on an exposed perch, darting out to grab passing prey in its wide mouth, then returning to the same spot. The largest species occasionally take small birds or bats.",
        },
        {
          question: "Are potoos related to owls?",
          answer:
            "No. Like nightjars and frogmouths, with which they are grouped, potoos are nocturnal and big-eyed but are not owls. They catch insects on the wing with a wide gape rather than seizing prey with talons, and they belong to their own family, Nyctibiidae.",
        },
      ]}
      quickFacts={[
        { label: "Group", value: "Family Nyctibiidae" },
        { label: "Reference species", value: "Nyctibius grandis (great potoo)" },
        { label: "Class", value: "Aves" },
        { label: "Diet", value: "Insectivore (catches insects in flight)" },
        { label: "Signature trait", value: "'Tree-stump' camouflage; eyelid notches" },
        { label: "Activity", value: "Nocturnal" },
        { label: "Nest", value: "No nest; egg balanced on a branch stub" },
        { label: "Range", value: "Tropical Central & South America" },
      ]}
      relatedLinks={[
        { label: "Nightjar Profile", href: "/animals/nightjar", description: "A close relative" },
        { label: "Frogmouth Profile", href: "/animals/frogmouth", description: "Another camouflaged nocturnal bird" },
        { label: "Hoatzin Profile", href: "/animals/hoatzin", description: "Another unusual neotropical bird" },
        { label: "Birdwatching", href: "/birdwatching", description: "Tips for observing birds" },
        { label: "Bird Encyclopedia", href: "/animal-encyclopedia/birds" },
      ]}
    />
  );
}
