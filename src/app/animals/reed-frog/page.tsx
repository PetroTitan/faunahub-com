import type { Metadata } from "next";
import AnimalProfileLayout from "@/components/AnimalProfileLayout";
import { ANIMAL_SOURCES } from "@/lib/educational/animal-sources";
import { getAnimalGalleryImages, getAnimalImage, getAnimalOgImage } from "@/lib/images/animal-images";
import { buildArticleMetadata } from "@/lib/metadata";

const PATH = "/animals/reed-frog";
const TITLE = "Reed Frog — Profile, Africa's Tiny, Brilliantly Coloured Tree Frogs";
const DESC =
  "Explore reed frogs (genus Hyperolius): small, vividly patterned African frogs of reeds and wetlands, famous for variable colours, loud night choruses, and disc-tipped climbing toes.";

export const metadata: Metadata = buildArticleMetadata({
  title: TITLE,
  description: DESC,
  path: PATH,
  publishedTime: "2026-06-22",
  modifiedTime: "2026-06-22",
  ogImage: getAnimalOgImage("reed-frog"),
});

export default function ReedFrogPage() {
  return (
    <AnimalProfileLayout
      commonName="Reed Frog"
      scientificName="genus Hyperolius"
      pageTitle={TITLE}
      description={DESC}
      path={PATH}
      parentCategory="Reptiles & Amphibians"
      parentCategoryHref="/animal-encyclopedia/reptiles"
      tags={["Amphibian", "Frog", "Africa"]}
      image={getAnimalImage("reed-frog") ?? undefined}
      galleryImages={getAnimalGalleryImages("reed-frog")}
      sources={ANIMAL_SOURCES["reed-frog"]}
      publishedDate="2026-06-22"
      modifiedDate="2026-06-22"
      overview={
        <>
          <p>
            Reed frogs (genus <em>Hyperolius</em>) are small, slender, often dazzlingly coloured
            tree frogs found across much of sub-Saharan Africa. Named for their habit of
            clinging to reeds and grasses around water, they come in an extraordinary array of
            colours and patterns — stripes, spots, and blotches in greens, yellows, reds, and
            browns — that can vary widely even within a single species, and can change between
            day and night. Adhesive discs on their toes let them grip stems and leaves.
          </p>
          <p>
            Tiny but loud, reed frogs are a defining sound of African wetlands: on warm, wet
            nights, choruses of calling males ring out from the reed beds.
          </p>
          <p>
            <strong>Note:</strong> &ldquo;reed frog&rdquo; covers many species; details here
            describe the genus broadly. Treat general statements as approximate and verify
            against authoritative sources.
          </p>
        </>
      }
      habitat={
        <p>
          Reed frogs live across sub-Saharan Africa in and around wetlands — marshes, ponds,
          swamps, slow streams, flooded grassland, and reedy pool margins — and many also occur
          in gardens and farmland near water. By day they often rest exposed on reeds and leaves,
          tolerating sun and drying remarkably well for small frogs, and they become active at
          night.
        </p>
      }
      diet={
        <p>
          Reed frogs are insectivores, eating small invertebrates such as flies, mosquitoes,
          beetles, and other tiny arthropods that they catch among the vegetation. As efficient
          predators of insects — including mosquitoes — around water, they play a useful role in
          wetland ecosystems, while their own tadpoles graze and feed in the water.
        </p>
      }
      behavior={
        <p>
          Reed frogs are mostly nocturnal climbers, using the sticky discs on their toes to move
          over smooth reeds and leaves. Many have a notable ability to cope with sun and
          dryness: their skin can lighten to reflect heat and reduce water loss, helping them
          bask in the open. Breeding is tied to the rains, when males gather and call in loud
          choruses to attract females, and eggs are laid in or near the water, hatching into
          aquatic tadpoles. Their bright, variable colours can serve as camouflage, signalling,
          or — in some — a warning of distastefulness. Many species can change colour between a
          pale daytime state and a darker night-time one.
        </p>
      }
      humanInteraction={
        <p>
          Reed frogs are harmless, appealing little frogs, valued as natural insect controllers
          and as indicators of healthy wetlands; some are kept in the amphibian hobby. Like
          amphibians everywhere they are sensitive to wetland loss, pollution, and disease, and
          while many reed frogs are common and widespread, some restricted-range species are of
          conservation concern. Consult AmphibiaWeb and the IUCN Red List for species-specific
          status.
        </p>
      }
      faqs={[
        {
          question: "Why are reed frogs so colourful and variable?",
          answer:
            "Reed frogs are famous for their dazzling, highly variable colours and patterns, which can differ between individuals, sexes, and even times of day. The colours can serve as camouflage among vegetation, as signals, or in some species as a warning. Many can also change shade — pale by day to reflect heat, darker by night — which adds to the variety and can make species tricky to tell apart.",
        },
        {
          question: "Where do reed frogs live?",
          answer:
            "Across sub-Saharan Africa, in and around wetlands — marshes, ponds, swamps, slow streams, and reedy pool edges — and often in gardens and farmland near water. True to their name, they cling to reeds and grasses using adhesive discs on their toes, resting on stems and leaves and breeding in the nearby water.",
        },
        {
          question: "What do reed frogs eat?",
          answer:
            "Small insects and other invertebrates — flies, mosquitoes, beetles, and similar tiny prey caught among the vegetation. By eating insects (including mosquitoes) around water, reed frogs help keep wetland ecosystems in balance, while their tadpoles feed in the water during the aquatic stage.",
        },
        {
          question: "Can reed frogs survive in the open sun?",
          answer:
            "Surprisingly well for small frogs. Many reed frogs can rest exposed on reeds during the day, helped by skin that lightens to reflect heat and reduce water loss. This tolerance lets them bask in the open where many other frogs would dry out, and it's part of what makes them such characteristic wetland frogs.",
        },
      ]}
      quickFacts={[
        { label: "Group", value: "Genus Hyperolius" },
        { label: "Class", value: "Amphibia (tree frog)" },
        { label: "Size", value: "Small and slender" },
        { label: "Signature trait", value: "Dazzling, variable colours; toe discs" },
        { label: "Diet", value: "Insectivore (incl. mosquitoes)" },
        { label: "Voice", value: "Loud male choruses on wet nights" },
        { label: "Range", value: "Sub-Saharan Africa" },
        { label: "Status", value: "Many common; some at risk (verify)" },
      ]}
      relatedLinks={[
        { label: "Tree Frog Profile", href: "/animals/tree-frog", description: "Other disc-toed climbing frogs" },
        { label: "Poison Dart Frog Profile", href: "/animals/poison-dart-frog", description: "Other tiny, vivid frogs" },
        { label: "Mantella Profile", href: "/animals/mantella", description: "Madagascar's bright little frogs" },
        { label: "Fauna by Continent", href: "/fauna/continents", description: "African wetland fauna in context" },
        { label: "Reptiles & Amphibians", href: "/animal-encyclopedia/reptiles" },
      ]}
    />
  );
}
