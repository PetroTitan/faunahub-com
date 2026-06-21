import type { Metadata } from "next";
import AnimalProfileLayout from "@/components/AnimalProfileLayout";
import { ANIMAL_SOURCES } from "@/lib/educational/animal-sources";
import { getAnimalGalleryImages, getAnimalImage, getAnimalOgImage } from "@/lib/images/animal-images";
import { buildArticleMetadata } from "@/lib/metadata";

const PATH = "/animals/midwife-toad";
const TITLE = "Midwife Toad — Profile, the Father That Carries the Eggs";
const DESC =
  "Explore midwife toads (genus Alytes): small European toads in which the male wraps strings of eggs around his hind legs and carries them until they are ready to hatch.";

export const metadata: Metadata = buildArticleMetadata({
  title: TITLE,
  description: DESC,
  path: PATH,
  publishedTime: "2026-06-21",
  modifiedTime: "2026-06-21",
  ogImage: getAnimalOgImage("midwife-toad"),
});

export default function MidwifeToadPage() {
  return (
    <AnimalProfileLayout
      commonName="Midwife Toad"
      scientificName="Alytes obstetricans"
      pageTitle={TITLE}
      description={DESC}
      path={PATH}
      parentCategory="Reptiles & Amphibians"
      parentCategoryHref="/animal-encyclopedia/reptiles"
      tags={["Amphibian", "Toad", "Europe"]}
      image={getAnimalImage("midwife-toad") ?? undefined}
      galleryImages={getAnimalGalleryImages("midwife-toad")}
      sources={ANIMAL_SOURCES["midwife-toad"]}
      publishedDate="2026-06-21"
      modifiedDate="2026-06-21"
      overview={
        <>
          <p>
            Midwife toads (genus <em>Alytes</em>) are small, plump, mostly nocturnal toads of
            western Europe and North Africa, best known for one of the most devoted forms of
            fatherhood in the animal world. The common midwife toad
            (<em>Alytes obstetricans</em>), shown here, takes its name — and its scientific
            name <em>obstetricans</em>, &ldquo;midwife&rdquo; — from the male&apos;s remarkable
            parenting: he wraps the strings of fertilised eggs around his own hind legs and
            carries them with him, on land, for weeks until they are ready to hatch.
          </p>
          <p>
            This is highly unusual among frogs and toads, most of which simply lay their eggs
            in water and leave them. The male midwife toad becomes a walking nursery.
          </p>
          <p>
            <strong>Note:</strong> there are several midwife toad species; details here use the
            common midwife toad as a reference. Treat general statements as approximate and
            verify against authoritative sources.
          </p>
        </>
      }
      habitat={
        <p>
          Midwife toads live in a variety of habitats in western Europe and northwest Africa —
          woodland, farmland, gardens, quarries, and rocky or sandy areas — usually not far
          from the ponds, pools, or slow streams where the tadpoles develop. They shelter by
          day in burrows, under stones, or in crevices, and come out at night to feed.
        </p>
      }
      diet={
        <p>
          Midwife toads are insectivores that eat insects, spiders, worms, slugs, and other
          small invertebrates, hunting at night on the ground. They are slow, deliberate
          foragers that snap up small prey they encounter.
        </p>
      }
      behavior={
        <p>
          After an on-land courtship, the female passes the eggs to the male, who fertilises
          them and then carefully winds the egg-strings around his back legs. He carries them
          for several weeks, keeping them moist (visiting damp spots or water as needed) and
          protected from drying out and from many predators. When the tadpoles are ready, he
          goes to a pool and releases them into the water to finish developing. Males also
          give a soft, bell-like call, and the toads use a foul-smelling skin secretion as a
          defence against predators.
        </p>
      }
      humanInteraction={
        <p>
          Midwife toads are harmless and engaging amphibians, valued by naturalists for their
          extraordinary paternal care, and they sometimes live in gardens and quarries near
          people. Like all amphibians they are sensitive to habitat loss, pollution, and
          disease (including the chytrid fungus), and some populations are of conservation
          concern. Consult AmphibiaWeb and the IUCN Red List for current status.
        </p>
      }
      faqs={[
        {
          question: "Why is it called a midwife toad?",
          answer:
            "Because of the male's role in caring for the eggs. After the female lays them, the male wraps the strings of fertilised eggs around his own hind legs and carries them around with him for weeks, keeping them safe and moist until they're ready to hatch. This 'assisting with the birth' behaviour earned the toad its name (and its scientific name, obstetricans).",
        },
        {
          question: "Does the male really carry the eggs around?",
          answer:
            "Yes. The male midwife toad winds the egg-strings around his back legs and carries them on land, tending them for several weeks — moistening them when needed and protecting them from drying out and from predators. When the tadpoles are ready, he takes them to a pool and releases them into the water.",
        },
        {
          question: "What do midwife toads eat?",
          answer:
            "They are insectivores, eating insects, spiders, worms, slugs, and other small invertebrates that they hunt on the ground at night. They're slow, careful foragers that grab small prey as they come across it.",
        },
        {
          question: "Are midwife toads dangerous?",
          answer:
            "No — midwife toads are completely harmless to people. They are small, shy amphibians. Their main defence is a foul-smelling skin secretion that deters predators, but it poses no threat to humans; the toads are simply best left undisturbed.",
        },
      ]}
      quickFacts={[
        { label: "Reference species", value: "Alytes obstetricans (common midwife toad)" },
        { label: "Class", value: "Amphibia (toad)" },
        { label: "Signature trait", value: "Male carries eggs on his hind legs" },
        { label: "Diet", value: "Insectivore (ground forager)" },
        { label: "Activity", value: "Mostly nocturnal" },
        { label: "Defence", value: "Foul-smelling skin secretion" },
        { label: "Range", value: "Western Europe & NW Africa" },
        { label: "Status", value: "Verify (amphibian — sensitive)" },
      ]}
      relatedLinks={[
        { label: "Toad Profile", href: "/animals/toad", description: "Toads as a group" },
        { label: "Surinam Toad Profile", href: "/animals/surinam-toad", description: "Another remarkable amphibian parent" },
        { label: "Spadefoot Toad Profile", href: "/animals/spadefoot-toad", description: "A burrowing toad relative" },
        { label: "Fauna by Continent", href: "/fauna/continents", description: "European fauna in context" },
        { label: "Reptiles & Amphibians", href: "/animal-encyclopedia/reptiles" },
      ]}
    />
  );
}
