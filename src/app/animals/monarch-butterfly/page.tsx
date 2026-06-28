import type { Metadata } from "next";
import AnimalProfileLayout from "@/components/AnimalProfileLayout";
import { ANIMAL_SOURCES } from "@/lib/educational/animal-sources";
import { getAnimalGalleryImages, getAnimalImage, getAnimalOgImage } from "@/lib/images/animal-images";
import { buildArticleMetadata } from "@/lib/metadata";

const PATH = "/animals/monarch-butterfly";
const TITLE = "Monarch Butterfly: Migration, Milkweed & Ecology";
const DESC =
  "Learn about the monarch butterfly, its multi-generational migration, milkweed-feeding caterpillars, and why this iconic insect is of conservation concern.";

export const metadata: Metadata = buildArticleMetadata({
  title: TITLE,
  description: DESC,
  path: PATH,
  publishedTime: "2026-06-28",
  modifiedTime: "2026-06-28",
  ogImage: getAnimalOgImage("monarch-butterfly"),
});

export default function MonarchButterflyPage() {
  return (
    <AnimalProfileLayout
      commonName="Monarch Butterfly"
      scientificName="Danaus plexippus"
      pageTitle={TITLE}
      description={DESC}
      path={PATH}
      parentCategory="Insects & Invertebrates"
      parentCategoryHref="/animal-encyclopedia/insects"
      tags={["Insect","Butterfly","Migratory"]}
      image={getAnimalImage("monarch-butterfly") ?? undefined}
      galleryImages={getAnimalGalleryImages("monarch-butterfly")}
      sources={ANIMAL_SOURCES["monarch-butterfly"]}
      publishedDate="2026-06-28"
      modifiedDate="2026-06-28"
      overview={
        <>
          <p>
            The monarch butterfly (<em>Danaus plexippus</em>) is one of the most recognizable insects in the world, known for its bold orange wings veined and bordered in black and dotted with white. Beyond its striking appearance, the monarch is celebrated for a remarkable multi-generational migration carried out by populations in eastern North America, which travel south to overwintering sites in the oyamel fir forests of central Mexico. A separate western population is associated with overwintering sites along the California coast.
          </p>
          <p>
            What makes the monarch especially compelling to biologists is that no single butterfly completes the full annual journey. Instead, the migration unfolds across several generations within a year, with one long-lived generation undertaking the southward flight and overwintering before the cycle begins again the following spring. This combination of long-distance navigation and generational hand-off has made the species a focus of scientific study and public interest alike.
          </p>
          <p>
            Monarchs are also a familiar example of chemical defense in nature. Their caterpillars feed on milkweed plants, accumulating compounds that make both larvae and adults distasteful to many predators, a trait advertised by the butterfly&#39;s vivid warning coloration.
          </p>
          <h3>Taxonomy and animal group</h3>
          <p>
            The monarch butterfly is classified as <em>Danaus plexippus</em>, an insect in the order Lepidoptera (butterflies and moths) and the family Nymphalidae, often called the brush-footed butterflies. As an invertebrate, it lacks a backbone and instead has a segmented body and an external exoskeleton typical of insects. Within the genus <em>Danaus</em>, the monarch belongs to a group sometimes referred to as milkweed butterflies, named for the larval host plants that shape much of the species&#39; biology. In conservation discussions, the famous North American migratory population is often treated as a distinct subspecies (<em>Danaus plexippus plexippus</em>), and that migratory subspecies is the entity most discussed in recent assessments, though the species as a whole has a broader distribution.
          </p>
          <h3>Appearance and recognition</h3>
          <p>
            Adult monarchs are large butterflies with wings that are predominantly orange, framed by black margins and crossed by black veins, with two rows of small white spots along the dark borders. The wingspan is generally around 9 to 10 centimeters. Males and females can be told apart by close inspection: males typically have a small dark scent patch on a vein of each hindwing and somewhat narrower wing veins, while females tend to show thicker black veining. The caterpillar is equally distinctive, banded in yellow, black, and white, with paired fleshy filaments near both ends of its body. The chrysalis is a smooth, pale green case marked with tiny gold-like flecks before the adult emerges.
          </p>
        </>
      }
      habitat={
        <p>
          Monarchs are associated with open and semi-open habitats where milkweed and nectar plants grow, including meadows, prairies, roadsides, gardens, and field edges across parts of North America. Breeding populations occur in parts of the United States and southern Canada during warmer months, while overwintering is concentrated at specific sites: the eastern population gathers in the oyamel fir forests of mountainous central Mexico, and the western population is linked to groves along parts of the California coast. The species also occurs in parts of Central and South America and has become established in some other regions of the world, but the famous long-distance migration is a feature of North American populations rather than the species everywhere.
        </p>
      }
      diet={
        <p>
          Diet differs sharply between life stages. Caterpillars are specialist feeders that consume the leaves of milkweed plants (genus <em>Asclepias</em> and related plants), which supply nutrition and the chemical compounds that contribute to the species&#39; defenses. Adult monarchs, by contrast, feed on flower nectar drawn through a coiled, straw-like proboscis, visiting a wide variety of blooming plants for the sugars that fuel daily activity and migration. During the autumn journey and at overwintering sites, access to nectar sources is an important part of building and maintaining the energy reserves that long-distance travel requires.
        </p>
      }
      behavior={
        <>
          <p>
            The monarch&#39;s life cycle proceeds through egg, caterpillar, chrysalis, and adult stages, a complete metamorphosis. Eggs are laid singly on milkweed, and the resulting caterpillars grow rapidly before forming a chrysalis from which the adult emerges. Across a single year, several short-lived breeding generations are produced; in autumn, a longer-lived generation enters a non-reproductive state and undertakes the southward migration, clustering in large numbers at overwintering sites before dispersing and breeding again in spring. How monarchs navigate over such distances, using cues that may include the sun and an internal sense of time, remains an active area of research.
          </p>
          <p>
            As both pollinators and prey, monarchs are woven into the ecosystems they pass through. Nectar-feeding adults visit many flowering plants and can contribute to pollination, while eggs, caterpillars, and adults serve as food for various predators and parasites despite the species&#39; chemical defenses. The monarch&#39;s close relationship with milkweed links its fortunes to the abundance and distribution of those plants, and its long migration connects distant habitats across the continent. Because of this dependence on specific host plants and overwintering forests, the monarch is often discussed as an indicator of broader habitat and landscape health.
          </p>
        </>
      }
      humanInteraction={
        <p>
          Monarchs are harmless to people and are widely valued for their beauty and their role in education and citizen-science monitoring. The conservation picture for the migratory monarch is complex and has been debated: the IUCN listed the migratory monarch as Endangered on its Red List in 2022, and that assessment has since been reassessed, while conservation proposals have also been considered by authorities in the United States. These evaluations are best understood as assessments that can change rather than as a single fixed label, and the species is appropriately described as of significant conservation concern. People who wish to help are often encouraged to support milkweed and native nectar plantings and to follow guidance from recognized conservation organizations; questions about protected status, current assessments, or land management are best directed to the IUCN Red List and relevant wildlife and conservation authorities.
        </p>
      }
      faqs={[
        {
          question: "Why are monarch caterpillars associated with milkweed?",
          answer:
            "Monarch caterpillars feed almost exclusively on milkweed leaves, and the compounds they take in from these plants make both the caterpillars and adult butterflies distasteful to many predators. This dependence also ties monarch populations closely to the availability of milkweed.",
        },
        {
          question: "Does a single monarch complete the whole migration?",
          answer:
            "No. The annual migration in eastern North America unfolds across several generations, with one longer-lived autumn generation making the southward journey and overwintering before the cycle continues the following spring.",
        },
        {
          question: "Where do monarchs overwinter?",
          answer:
            "The eastern North American population overwinters in the oyamel fir forests of central Mexico, while a western population is associated with overwintering sites along parts of the California coast.",
        },
        {
          question: "What is the monarch's conservation status?",
          answer:
            "It is complex and has been debated. The IUCN listed the migratory monarch as Endangered in 2022 and has since reassessed it, and conservation proposals have also been considered by authorities. It is best described as of significant conservation concern in an assessment that can change; check the IUCN Red List for the current entry.",
        },
      ]}
      quickFacts={[
        { label: "Scientific name", value: "Danaus plexippus" },
        { label: "Animal group", value: "Insect (invertebrate)" },
        { label: "Family or order", value: "Nymphalidae; order Lepidoptera" },
        { label: "Size", value: "Wingspan roughly 9 to 10 cm" },
        { label: "Diet", value: "Caterpillars eat milkweed; adults drink nectar" },
        { label: "Habitat", value: "Meadows, prairies, gardens; oyamel fir overwintering forests" },
        { label: "Range", value: "Parts of North America; eastern population winters in central Mexico" },
        { label: "Conservation status", value: "Of significant conservation concern (IUCN assessment debated and changeable)" },
      ]}
      relatedLinks={[
        { label: "Butterfly Profile", href: "/animals/butterfly", description: "Butterflies more broadly" },
        { label: "Luna Moth", href: "/animals/luna-moth", description: "Another North American lepidopteran" },
        { label: "Moth Profile", href: "/animals/moth", description: "Moths, for contrast" },
        { label: "North American fauna", href: "/fauna/continents/north-america", description: "Animals of North America" },
        { label: "Insects & Invertebrates", href: "/animal-encyclopedia/insects" },
      ]}
    />
  );
}
