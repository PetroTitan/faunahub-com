import type { Metadata } from "next";
import AnimalProfileLayout from "@/components/AnimalProfileLayout";
import { ANIMAL_SOURCES } from "@/lib/educational/animal-sources";
import { getAnimalGalleryImages, getAnimalImage, getAnimalOgImage } from "@/lib/images/animal-images";
import { buildArticleMetadata } from "@/lib/metadata";

const PATH = "/animals/painted-lady-butterfly";
const TITLE = "Painted Lady Butterfly (Vanessa cardui)";
const DESC =
  "Meet the painted lady (Vanessa cardui), one of the world's most widespread butterflies and a remarkable long-distance migrant that visits flowers for nectar.";

export const metadata: Metadata = buildArticleMetadata({
  title: TITLE,
  description: DESC,
  path: PATH,
  publishedTime: "2026-06-28",
  modifiedTime: "2026-06-28",
  ogImage: getAnimalOgImage("painted-lady-butterfly"),
});

export default function PaintedLadyButterflyPage() {
  return (
    <AnimalProfileLayout
      commonName="Painted Lady"
      scientificName="Vanessa cardui"
      pageTitle={TITLE}
      description={DESC}
      path={PATH}
      parentCategory="Insects"
      parentCategoryHref="/animal-encyclopedia/insects"
      tags={["Butterfly","Pollinator","Migrant"]}
      image={getAnimalImage("painted-lady-butterfly") ?? undefined}
      galleryImages={getAnimalGalleryImages("painted-lady-butterfly")}
      sources={ANIMAL_SOURCES["painted-lady-butterfly"]}
      publishedDate="2026-06-28"
      modifiedDate="2026-06-28"
      overview={
        <>
          <p>
            The painted lady (<em>Vanessa cardui</em>) is a medium-sized butterfly that is often described as one of the most widespread butterfly species on Earth, found across much of the world apart from a few regions such as South America and the colder polar zones. Its orange, black, and white wings make it a familiar sight in gardens, meadows, and open country, and it is one of the species people are most likely to encounter visiting flowers on a warm day.
          </p>
          <p>
            What sets the painted lady apart is its capacity for long-distance migration. In some years, large numbers move across continents in seasonal journeys that span generations, including movements between Africa and Europe. Like the monarch in North America, no single individual completes the full round trip; the migration unfolds across successive broods, which has made the species a focus of study for scientists interested in insect navigation and movement.
          </p>
          <p>
            As an adult, the painted lady feeds on flower nectar and, in doing so, visits a wide range of blooming plants. Because it moves among flowers while feeding, it can act as a flower visitor and, in some situations, a pollinator, though its precise contribution to pollination varies and is generally considered modest compared with specialised pollinators such as many bees.
          </p>
          <h3>Taxonomy and animal group</h3>
          <p>
            The painted lady is classified as <em>Vanessa cardui</em>, an insect in the order Lepidoptera (butterflies and moths) and the family Nymphalidae, the brush-footed butterflies. The genus <em>Vanessa</em> includes several other well-known migratory or wide-ranging butterflies, and <em>Vanessa cardui</em> is sometimes called the cosmopolitan or thistle butterfly, the latter name reflecting the importance of thistles among its larval host plants. As an invertebrate, it has no backbone, instead bearing the segmented body and external exoskeleton typical of insects. The painted lady is closely related to, and sometimes confused with, other <em>Vanessa</em> species such as the American lady (<em>Vanessa virginiensis</em>), which can be told apart by differences in their wing patterns.
          </p>
          <h3>Appearance and recognition</h3>
          <p>
            Adult painted ladies are medium-sized butterflies, typically with a wingspan in the region of 5 to 9 centimetres. The upper sides of the wings are a patterned mix of orange, black, and brown, with white spots near the tips of the forewings and a row of small black-and-blue eyespots along the margins of the hindwings. The undersides are more subdued and cryptic, marbled in greys, browns, and faint eyespots that help a resting butterfly blend against bark, soil, or dry vegetation. Like other butterflies, the painted lady feeds through a coiled, straw-like proboscis that it extends to reach nectar and curls away when not in use. The caterpillar is spiny and variable in colour, often dark with paler markings, and is usually found on or near its host plants.
          </p>
        </>
      }
      habitat={
        <p>
          Painted ladies are habitat generalists associated with open, sunny places where flowers and host plants grow, including meadows, grasslands, roadsides, gardens, farmland edges, and disturbed ground. The species has an exceptionally broad global distribution and is recorded across much of Europe, Africa, Asia, North America, and Australia, with notable absences in places such as South America. Rather than being a permanent resident everywhere it appears, the painted lady recolonises many regions seasonally through migration, so its presence in a given area can vary greatly from year to year. Because distribution patterns and the details of which populations are migratory differ by region, it is best to treat broad range statements cautiously and consult regional sources for local specifics.
        </p>
      }
      diet={
        <p>
          Diet differs by life stage. Caterpillars are leaf-feeders that use a range of host plants, with thistles (such as those in the genus <em>Cirsium</em> and related plants) being especially well known, alongside mallows, nettles, and various other herbaceous plants depending on the region. Adult painted ladies feed on flower nectar, drawn up through the proboscis, and visit a wide variety of blooming plants for the sugars that fuel daily activity and, in migratory generations, long-distance flight. This nectar-feeding habit is what brings the species into contact with flowers and underlies its role as a flower visitor.
        </p>
      }
      behavior={
        <>
          <p>
            The painted lady&#39;s life cycle proceeds through egg, caterpillar, chrysalis, and adult stages, a complete metamorphosis. Eggs are laid on host plants, and the caterpillars often feed within a loose silk shelter before forming a chrysalis from which the adult emerges. Adults are active, fast-flying butterflies that bask in the sun to warm up and visit flowers through the day. In migratory years, successive generations move across long distances, with movements between Africa and Europe being among the best documented; because the journey spans several broods, the round trip is completed by descendants rather than by single individuals. The scale of these migrations can vary dramatically from year to year, producing occasional mass appearances in some regions.
          </p>
          <p>
            Within their ecosystems, painted ladies play several roles. Their caterpillars are herbivores that feed on host plants such as thistles, while eggs, larvae, and adults serve as food for birds, spiders, predatory insects, and parasitoids, linking the butterfly into local food webs. As mobile, nectar-feeding adults, they visit many flowering plants and can move pollen between them, contributing in a modest and variable way to plant reproduction. Their long-distance migrations also connect distant habitats and can transfer energy and biomass across regions on a continental scale, which is part of why their movements interest ecologists studying insect populations.
          </p>
        </>
      }
      humanInteraction={
        <p>
          Painted ladies are harmless to people; they do not sting or bite and are widely enjoyed for their beauty and for the spectacle of their migrations, which feature in citizen-science recording in several regions. They are also commonly used in classrooms and educational kits to illustrate butterfly metamorphosis. This page is educational and does not offer guidance on keeping, raising, releasing, or managing butterflies; questions about rearing programmes, releases, or any wildlife concern are best directed to qualified educators, entomologists, or local wildlife authorities. Any medical concern related to insects should be directed to qualified medical professionals.
        </p>
      }
      extraSections={[
        {
          heading: "Pollination role",
          body: (
            <p>
              As a nectar-feeding adult that moves among many flowering plants, the painted lady can act as a flower visitor and, in some circumstances, contribute to pollination by carrying pollen between blooms. However, butterflies in general are often considered less efficient pollinators than many bees, because their long legs and proboscis can let them feed without making firm contact with a flower&#39;s reproductive parts, and not every flower visit results in pollination. The painted lady&#39;s pollination role therefore varies by plant and region and is best described cautiously: it is a genuine flower visitor and an occasional pollinator of some plants rather than a specialised or highly effective pollinator. Its significance may lie partly in its abundance and mobility, which can move pollen across landscapes, but specific claims about how much it pollinates particular crops or wild plants should be treated with caution and checked against regional studies.
            </p>
          ),
        },
        {
          heading: "Conservation context",
          body: (
            <p>
              The painted lady is generally regarded as a common and widespread species, and it is not among the butterflies most often highlighted for conservation concern, in contrast to more specialised or range-restricted butterflies. That said, conservation status is assessed at the species level and can change, and broad insect population trends are an area of ongoing study and some concern worldwide. Rather than assigning a fixed status here, readers seeking the current assessment should consult the IUCN Red List and regional butterfly-monitoring organisations, which track populations and trends over time.
            </p>
          ),
        },
      ]}
      faqs={[
        {
          question: "Is the painted lady butterfly a pollinator?",
          answer:
            "It can act as one. As a nectar-feeding adult, it visits many flowers and can carry pollen between them, but butterflies are often less efficient pollinators than many bees, and not every flower visit results in pollination. Its pollination role is genuine but modest and varies by plant and region.",
        },
        {
          question: "Why is the painted lady called one of the most widespread butterflies?",
          answer:
            "It is recorded across much of Europe, Africa, Asia, North America, and Australia, with a few notable absences such as South America. It reaches many regions through seasonal migration rather than being a permanent resident everywhere, so its presence can vary from year to year.",
        },
        {
          question: "Does a single painted lady complete the whole migration?",
          answer:
            "No. Like some other migratory butterflies, its long-distance journeys unfold over several generations. The full round trip, such as movements between Africa and Europe, is completed by successive broods rather than by any single individual.",
        },
        {
          question: "What do painted lady caterpillars eat?",
          answer:
            "Caterpillars feed on the leaves of host plants, with thistles being especially well known, along with mallows, nettles, and various other herbaceous plants depending on the region. Adults, by contrast, feed on flower nectar.",
        },
      ]}
      quickFacts={[
        { label: "Scientific name", value: "Vanessa cardui (family Nymphalidae)" },
        { label: "Pollinator group", value: "Butterfly (order Lepidoptera)" },
        { label: "Pollination role", value: "Flower visitor and occasional pollinator; modest and variable" },
        { label: "Range", value: "Very widespread; many areas reached seasonally by migration (verify regionally)" },
        { label: "Diet", value: "Adults drink nectar; caterpillars eat thistles and other host plants" },
        { label: "Conservation note", value: "Generally common; status is changeable — consult the IUCN Red List" },
      ]}
      relatedLinks={[
        { label: "Pollinators", href: "/wildlife/pollinators", description: "Bees, butterflies, birds, bats, flies & beetles" },
        { label: "Butterfly", href: "/animals/butterfly", description: "Butterflies as a group" },
        { label: "Monarch Butterfly", href: "/animals/monarch-butterfly", description: "Another migrant butterfly" },
        { label: "Hawk Moth", href: "/animals/hawk-moth", description: "A moth pollinator" },
        { label: "Insects & Invertebrates", href: "/animal-encyclopedia/insects" },
      ]}
    />
  );
}
