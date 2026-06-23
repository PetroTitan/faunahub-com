import type { Metadata } from "next";
import AnimalProfileLayout from "@/components/AnimalProfileLayout";
import { ANIMAL_SOURCES } from "@/lib/educational/animal-sources";
import { getAnimalGalleryImages, getAnimalImage, getAnimalOgImage } from "@/lib/images/animal-images";
import { buildArticleMetadata } from "@/lib/metadata";

const PATH = "/animals/sandfish";
const TITLE = "Sandfish — Profile of the Skink That 'Swims' Through Desert Sand";
const DESC =
  "Meet the sandfish (Scincus scincus): a desert skink — a lizard, not a fish — that dives beneath the sand and 'swims' through it with smooth scales, a wedge-shaped snout, and fringed toes.";

export const metadata: Metadata = buildArticleMetadata({
  title: TITLE,
  description: DESC,
  path: PATH,
  publishedTime: "2026-06-23",
  modifiedTime: "2026-06-23",
  ogImage: getAnimalOgImage("sandfish"),
});

export default function SandfishPage() {
  return (
    <AnimalProfileLayout
      commonName="Sandfish"
      scientificName="Scincus scincus"
      pageTitle={TITLE}
      description={DESC}
      path={PATH}
      parentCategory="Reptiles & Amphibians"
      parentCategoryHref="/animal-encyclopedia/reptiles"
      tags={["Reptile", "Lizard", "Skink", "Desert"]}
      image={getAnimalImage("sandfish") ?? undefined}
      galleryImages={getAnimalGalleryImages("sandfish")}
      sources={ANIMAL_SOURCES.sandfish}
      publishedDate="2026-06-23"
      modifiedDate="2026-06-23"
      overview={
        <>
          <p>
            The sandfish (<em>Scincus scincus</em>) is not a fish at all — it is a skink, a kind of lizard,
            that earns its name by &ldquo;swimming&rdquo; through loose desert sand. Smooth-scaled and
            streamlined, it dives below the surface and moves through the sand with side-to-side, almost
            fish-like undulations of its body.
          </p>
          <p>
            Its build is finely tuned for life in sand: a wedge-shaped, shovel-like snout, a countersunk
            lower jaw, smooth low-friction scales, a streamlined body, and fringed or flattened toes that
            help it push through loose grains. It lives in the sandy deserts of North Africa and the Arabian
            Peninsula.
          </p>
          <p>
            By burying itself, the sandfish escapes the searing surface heat and the eyes of predators, and
            it can detect the vibrations of prey moving above.
          </p>
        </>
      }
      habitat={
        <p>
          The sandfish lives in arid deserts with loose, wind-blown sand — including dune fields — across
          North Africa (such as the Sahara) and the Arabian Peninsula. Fine, soft sand is essential, since
          the lizard depends on being able to dive into and move through it.
        </p>
      }
      diet={
        <p>
          Sandfish are insectivores and small-invertebrate hunters, feeding on beetles, ants, larvae, and
          other small prey. They detect prey moving on or just under the surface by the vibrations it
          makes, then burst out of the sand to seize it.
        </p>
      }
      behavior={
        <p>
          The sandfish spends much of its time buried, sheltering from extreme desert temperatures and
          predators beneath the surface. To move through the sand it tucks its limbs against its body and
          wriggles with rhythmic, wave-like motions of its trunk and tail — a behaviour often described as
          &ldquo;sand-swimming.&rdquo; It surfaces to bask and forage when conditions are right, and dives
          back under at the first sign of danger or heat.
        </p>
      }
      humanInteraction={
        <p>
          The sandfish is harmless to people and is sometimes kept as a hardy desert pet and studied by
          scientists interested in how animals move through granular materials. It is not generally
          considered threatened, though desert habitats can be disturbed by human activity. Consult the
          IUCN Red List and regional authorities for current status.
        </p>
      }
      faqs={[
        {
          question: "Is the sandfish actually a fish?",
          answer:
            "No. Despite the name, the sandfish is a lizard — specifically a skink (Scincus scincus). It is called a 'sandfish' because of the way it appears to swim through loose sand.",
        },
        {
          question: "How does the sandfish 'swim' through sand?",
          answer:
            "It dives beneath the surface, folds its legs against its body, and undulates its trunk and tail in side-to-side, wave-like motions — much as a fish swims through water — to push itself through the loose grains. Its smooth scales, wedge-shaped snout, and fringed toes all help.",
        },
        {
          question: "Why does the sandfish bury itself?",
          answer:
            "Burying lets the sandfish escape the extreme heat of the desert surface and hide from predators. Below the sand it is cooler and safer, and it can sense the vibrations of prey moving overhead.",
        },
        {
          question: "Where do sandfish live?",
          answer:
            "They inhabit sandy deserts and dune fields of North Africa and the Arabian Peninsula, where soft, loose sand allows them to dive and move beneath the surface.",
        },
      ]}
      quickFacts={[
        { label: "Scientific name", value: "Scincus scincus" },
        { label: "Class", value: "Reptilia" },
        { label: "Family", value: "Scincidae (skinks) — a lizard, not a fish" },
        { label: "Range", value: "North Africa & Arabian Peninsula deserts" },
        { label: "Habitat", value: "Loose sand and dune fields" },
        { label: "Adaptations", value: "Wedge snout, smooth scales, fringed toes" },
        { label: "Behaviour", value: "'Sand-swims' below the surface" },
        { label: "Diet", value: "Insects and small invertebrates" },
      ]}
      relatedLinks={[
        { label: "Skink Profile", href: "/animals/skink", description: "The wider skink family it belongs to" },
        { label: "Plated Lizard Profile", href: "/animals/plated-lizard", description: "Another ground-dwelling lizard" },
        { label: "Horned Lizard Profile", href: "/animals/horned-lizard", description: "Another desert-adapted lizard" },
        { label: "Fauna by Continent", href: "/fauna/continents", description: "Desert reptiles in context" },
        { label: "Reptiles & Amphibians", href: "/animal-encyclopedia/reptiles" },
      ]}
    />
  );
}
