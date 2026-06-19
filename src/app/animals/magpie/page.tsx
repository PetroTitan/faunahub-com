import type { Metadata } from "next";
import AnimalProfileLayout from "@/components/AnimalProfileLayout";
import { ANIMAL_SOURCES } from "@/lib/educational/animal-sources";
import { getAnimalGalleryImages, getAnimalImage, getAnimalOgImage } from "@/lib/images/animal-images";
import { buildArticleMetadata } from "@/lib/metadata";

const PATH = "/animals/magpie";
const TITLE = "Magpie — Profile, Habitat, Diet & Intelligence";
const DESC =
  "Explore the magpie (Pica pica and relatives): a bold, intelligent black-and-white corvid of Eurasia and North America, known for its long tail and resourceful behaviour.";

export const metadata: Metadata = buildArticleMetadata({
  title: TITLE,
  description: DESC,
  path: PATH,
  publishedTime: "2026-06-19",
  modifiedTime: "2026-06-19",
  ogImage: getAnimalOgImage("magpie"),
});

export default function MagpiePage() {
  return (
    <AnimalProfileLayout
      commonName="Magpie"
      scientificName="Pica pica and relatives"
      pageTitle={TITLE}
      description={DESC}
      path={PATH}
      parentCategory="Birds"
      parentCategoryHref="/animal-encyclopedia/birds"
      tags={["Bird", "Corvid", "Highly intelligent"]}
      image={getAnimalImage("magpie") ?? undefined}
      galleryImages={getAnimalGalleryImages("magpie")}
      sources={ANIMAL_SOURCES.magpie}
      publishedDate="2026-06-19"
      modifiedDate="2026-06-19"
      overview={
        <>
          <p>
            The magpie is a bold, intelligent member of the crow family (Corvidae),
            best known in the form of the Eurasian magpie (<em>Pica pica</em>) — a
            striking black-and-white bird with a long, iridescent tail. &ldquo;Magpie&rdquo;
            is used for several species; this profile uses the Eurasian magpie as the
            reference.
          </p>
          <p>
            Magpies are among the most intelligent of all birds, with strong
            problem-solving abilities and complex social lives, and they adapt
            readily to landscapes shared with people.
          </p>
          <p>
            <strong>Conservation note:</strong> the Eurasian magpie is widespread
            and common across its range and is not of conservation concern, though
            other magpie species vary. Verify specifics at iucnredlist.org.
          </p>
        </>
      }
      habitat={
        <p>
          Eurasian magpies range across much of Europe, temperate Asia, and into
          North Africa, in open and semi-open country — farmland, grassland,
          woodland edges, parks, and towns. They do well around people and are a
          familiar urban and suburban bird.
        </p>
      }
      diet={
        <p>
          Magpies are omnivores with a broad, opportunistic diet: insects and other
          invertebrates, seeds and fruit, scraps, carrion, and sometimes eggs or
          nestlings of other birds. This flexibility helps them thrive in many
          environments, including cities.
        </p>
      }
      behavior={
        <p>
          Magpies are social and vocal, often seen in pairs or small groups, and are
          known for bold, curious behaviour. They are noted for advanced cognition —
          including being among the few animals reported to respond to their
          reflection in mirror tests — and they build large, domed stick nests.
          Contrary to popular belief, evidence does not support the idea that
          magpies are unusually attracted to shiny objects.
        </p>
      }
      humanInteraction={
        <p>
          Magpies are common around people and feature widely in folklore. They are
          sometimes regarded as pests where they take crops or other birds&apos;
          eggs, but they are also valued as intelligent, adaptable urban wildlife.
          For current status and any regional concerns, consult authoritative
          sources.
        </p>
      }
      faqs={[
        {
          question: "Are magpies related to crows?",
          answer:
            "Yes. Magpies are members of the crow family, Corvidae, which also includes crows, ravens, jays, and jackdaws. Like their relatives, magpies are highly intelligent and adaptable.",
        },
        {
          question: "Do magpies really steal shiny things?",
          answer:
            "This is largely a myth. Despite the popular belief and folklore, research has not found that magpies are unusually attracted to shiny objects; if anything, novel objects can make them wary. The reputation is more cultural than factual.",
        },
        {
          question: "What do magpies eat?",
          answer:
            "Magpies are omnivores, eating insects and other invertebrates, seeds, fruit, scraps, and carrion, and sometimes the eggs or chicks of other birds. Their varied diet suits a wide range of habitats.",
        },
        {
          question: "Is there more than one kind of magpie?",
          answer:
            "Yes. \"Magpie\" refers to several species. The Eurasian magpie (Pica pica) is the classic example used here, but there are other Pica magpies and, separately, the unrelated Australian magpie, which belongs to a different family.",
        },
      ]}
      quickFacts={[
        { label: "Reference species", value: "Pica pica (Eurasian magpie)" },
        { label: "Class", value: "Aves" },
        { label: "Family", value: "Corvidae (crow family)" },
        { label: "Diet", value: "Omnivore" },
        { label: "Notable for", value: "High intelligence; long tail" },
        { label: "Habitat", value: "Farmland, woodland edge, towns" },
        { label: "Range", value: "Eurasia & North Africa" },
        { label: "IUCN Status", value: "Verify before publication" },
      ]}
      relatedLinks={[
        { label: "Crow Profile", href: "/animals/crow", description: "A close corvid relative" },
        { label: "Raven Profile", href: "/animals/raven", description: "The largest corvid" },
        { label: "Cardinal Profile", href: "/animals/cardinal", description: "A colourful songbird" },
        { label: "Fauna by Continent", href: "/fauna/continents", description: "Eurasian fauna in context" },
        { label: "Bird Encyclopedia", href: "/animal-encyclopedia/birds" },
      ]}
    />
  );
}
