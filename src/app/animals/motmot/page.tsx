import type { Metadata } from "next";
import AnimalProfileLayout from "@/components/AnimalProfileLayout";
import { ANIMAL_SOURCES } from "@/lib/educational/animal-sources";
import { getAnimalGalleryImages, getAnimalImage, getAnimalOgImage } from "@/lib/images/animal-images";
import { buildArticleMetadata } from "@/lib/metadata";

const PATH = "/animals/motmot";
const TITLE = "Motmot — Profile, the Racket-Tailed Bird & Behavior";
const DESC =
  "Explore motmots (family Momotidae): colourful Neotropical birds with distinctive racket-tipped tails they swing like pendulums — using the turquoise-browed motmot as a reference.";

export const metadata: Metadata = buildArticleMetadata({
  title: TITLE,
  description: DESC,
  path: PATH,
  publishedTime: "2026-06-20",
  modifiedTime: "2026-06-20",
  ogImage: getAnimalOgImage("motmot"),
});

export default function MotmotPage() {
  return (
    <AnimalProfileLayout
      commonName="Motmot"
      scientificName="Eumomota superciliosa"
      pageTitle={TITLE}
      description={DESC}
      path={PATH}
      parentCategory="Birds"
      parentCategoryHref="/animal-encyclopedia/birds"
      tags={["Bird", "Neotropical", "Colourful"]}
      image={getAnimalImage("motmot") ?? undefined}
      galleryImages={getAnimalGalleryImages("motmot")}
      sources={ANIMAL_SOURCES.motmot}
      publishedDate="2026-06-20"
      modifiedDate="2026-06-20"
      overview={
        <>
          <p>
            Motmots (family Momotidae) are colourful birds of Central and South American
            forests, best known for their unusual tails. In many species, including the
            turquoise-browed motmot (<em>Eumomota superciliosa</em>) shown here, the two
            central tail feathers end in bare shafts tipped with broad &ldquo;rackets,&rdquo;
            giving a distinctive pendulum-like shape. Add a brilliant turquoise brow and a
            mix of green, blue, and rufous plumage, and the motmot is one of the most
            recognisable birds of the Neotropics.
          </p>
          <p>
            Motmots have a curious habit of swinging that racket tail back and forth like a
            pendulum, which appears to signal to predators that they have been spotted.
          </p>
          <p>
            <strong>Note:</strong> there are several motmot species; details here use the
            turquoise-browed motmot as a reference. Treat general statements as approximate
            and verify against authoritative sources.
          </p>
        </>
      }
      habitat={
        <p>
          Motmots live in forests, woodland edges, and shaded clearings from Mexico through
          Central America into South America, depending on the species. The turquoise-browed
          motmot favours drier, more open woodland and edges in Central America, where it
          often perches conspicuously on exposed branches or wires.
        </p>
      }
      diet={
        <p>
          Motmots are mainly insectivores and carnivores, eating large insects, spiders,
          and small prey such as lizards, and also taking some fruit. They typically hunt by
          watching from a perch and sallying out to seize prey, then returning to a favoured
          lookout — a sit-and-wait style that suits their forest-edge habitat.
        </p>
      }
      behavior={
        <p>
          The motmot&apos;s signature behaviour is wagging its racket-tipped tail from side
          to side like a pendulum. Studies suggest this is a &ldquo;pursuit-deterrent&rdquo;
          signal: by displaying that it has noticed a predator, the bird discourages a wasted
          chase. The distinctive racket shape forms as weak barbs near the feather tip fall
          away with wear and preening. Motmots nest in burrows that they dig into earth banks
          or slopes, where they raise their young.
        </p>
      }
      humanInteraction={
        <p>
          Motmots are popular with birdwatchers and are cultural symbols in parts of their
          range — the turquoise-browed motmot is the national bird of El Salvador and
          Nicaragua. Most motmots remain reasonably widespread, though forest loss can affect
          them locally. Consult authoritative sources for species-specific status.
        </p>
      }
      faqs={[
        {
          question: "Why does a motmot have a 'racket' tail?",
          answer:
            "In many motmots, the two central tail feathers have a length of bare shaft ending in a broad paddle or 'racket.' This shape develops as the weakly attached barbs just above the tip wear off or are removed during preening, leaving the distinctive racket. The bird then swings this tail like a pendulum.",
        },
        {
          question: "Why do motmots wag their tails?",
          answer:
            "Motmots often swing the racket tail side to side, and research suggests this is a pursuit-deterrent signal — a way of telling a watching predator 'I've seen you,' which makes a surprise attack pointless and discourages the predator from bothering to chase.",
        },
        {
          question: "What do motmots eat?",
          answer:
            "They are mainly insectivores and small-prey hunters, taking large insects, spiders, and small animals like lizards, plus some fruit. Motmots usually watch from a perch and dart out to grab prey, returning to a regular lookout spot.",
        },
        {
          question: "Where do motmots nest?",
          answer:
            "In burrows. Motmots excavate tunnels into earth banks, road cuttings, or slopes and nest at the end of these burrows. This underground nesting helps protect their eggs and chicks from many predators.",
        },
      ]}
      quickFacts={[
        { label: "Group", value: "Family Momotidae" },
        { label: "Reference species", value: "Eumomota superciliosa (turquoise-browed motmot)" },
        { label: "Class", value: "Aves" },
        { label: "Diet", value: "Insects, small prey & some fruit" },
        { label: "Signature trait", value: "Racket-tipped, pendulum-swung tail" },
        { label: "Nest", value: "Burrows in earth banks" },
        { label: "Range", value: "Mexico, Central & South America" },
        { label: "Status", value: "Many widespread (verify by species)" },
      ]}
      relatedLinks={[
        { label: "Bee-eater Profile", href: "/animals/bee-eater", description: "An Old World burrow-nesting relative" },
        { label: "Kingfisher Profile", href: "/animals/kingfisher", description: "A related bird in the same order" },
        { label: "Toucan Profile", href: "/animals/toucan", description: "Another colourful Neotropical bird" },
        { label: "Birdwatching", href: "/birdwatching", description: "Tips for observing birds" },
        { label: "Bird Encyclopedia", href: "/animal-encyclopedia/birds" },
      ]}
    />
  );
}
