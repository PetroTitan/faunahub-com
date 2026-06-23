import type { Metadata } from "next";
import AnimalProfileLayout from "@/components/AnimalProfileLayout";
import { ANIMAL_SOURCES } from "@/lib/educational/animal-sources";
import { getAnimalGalleryImages, getAnimalImage, getAnimalOgImage } from "@/lib/images/animal-images";
import { buildArticleMetadata } from "@/lib/metadata";

const PATH = "/animals/mousebird";
const TITLE = "Mousebird — Profile, the Crested African Birds That Clamber Like Mice";
const DESC =
  "Explore mousebirds (order Coliiformes): crested, long-tailed African birds that scramble mouse-like through bushes, hang and sunbathe in clusters, and are the only bird order unique to Africa.";

export const metadata: Metadata = buildArticleMetadata({
  title: TITLE,
  description: DESC,
  path: PATH,
  publishedTime: "2026-06-22",
  modifiedTime: "2026-06-22",
  ogImage: getAnimalOgImage("mousebird"),
});

export default function MousebirdPage() {
  return (
    <AnimalProfileLayout
      commonName="Mousebird"
      scientificName="order Coliiformes"
      pageTitle={TITLE}
      description={DESC}
      path={PATH}
      parentCategory="Birds"
      parentCategoryHref="/animal-encyclopedia/birds"
      tags={["Bird", "Africa", "Sociable"]}
      image={getAnimalImage("mousebird") ?? undefined}
      galleryImages={getAnimalGalleryImages("mousebird")}
      sources={ANIMAL_SOURCES.mousebird}
      publishedDate="2026-06-22"
      modifiedDate="2026-06-22"
      overview={
        <>
          <p>
            Mousebirds (order Coliiformes) are small, soft-plumaged, crested birds with very long, thin tails,
            found only in sub-Saharan Africa. They get their name from the way they behave: creeping, climbing,
            and scrambling through dense bushes and foliage in a quick, scurrying, mouse-like fashion, often
            with their long tails trailing behind. Mostly greyish or brownish with a jaunty crest, they are
            sociable, fruit-loving birds of gardens, scrub, and woodland.
          </p>
          <p>
            Mousebirds are special in another way: Coliiformes is the only order of birds found exclusively in
            Africa, a small, ancient group with no close living relatives elsewhere. They have unusual, very
            flexible feet and a habit of huddling and sunbathing together in tight clusters.
          </p>
          <p>
            <strong>Note:</strong> &ldquo;mousebird&rdquo; covers the small order Coliiformes; details here
            describe the group broadly. Treat general statements as approximate and verify against
            authoritative sources.
          </p>
        </>
      }
      habitat={
        <p>
          Mousebirds live across sub-Saharan Africa in a variety of bushy habitats — savanna scrub, thickets,
          woodland edge, and increasingly gardens, parks, and farmland — wherever there are dense shrubs and
          fruiting plants. The speckled mousebird in particular is a common and familiar garden bird in much
          of the region.
        </p>
      }
      diet={
        <p>
          Mousebirds are mainly herbivores, feeding heavily on fruit, berries, buds, leaves, flowers, and
          nectar, with some insects taken occasionally. Their fondness for fruit, buds, and shoots can bring
          them into gardens and orchards. By eating fruit and visiting flowers, they help disperse seeds and
          may aid pollination.
        </p>
      }
      behavior={
        <p>
          Mousebirds are highly social, moving and feeding in groups and clambering acrobatically through
          vegetation — climbing, hanging upside down, and creeping along branches with remarkable agility.
          Their feet are unusual and very flexible: they can swivel all four toes forward to grip in different
          ways, which helps them clamber and hang in odd postures. They are well known for huddling together
          in tight bunches to roost and for sunbathing communally, often hanging belly-up with feathers
          fluffed to soak up warmth, which helps them save energy. They are weak but whirring fliers, usually
          travelling short distances between bushes, and they build cup nests and may breed cooperatively.
        </p>
      }
      humanInteraction={
        <p>
          Mousebirds are familiar, lively garden birds across much of Africa, entertaining to watch as they
          scramble and huddle, though their appetite for fruit and buds can make them minor pests in orchards
          and gardens. They are common and adaptable, thriving alongside people, and are not generally of
          conservation concern. As a uniquely African bird group, they are of particular interest to
          ornithologists. Consult the IUCN Red List for species-specific status.
        </p>
      }
      faqs={[
        {
          question: "Why are they called mousebirds?",
          answer:
            "Because of how they move. Mousebirds creep, climb, and scramble through dense foliage in a quick, scurrying way that recalls a mouse running through undergrowth, often with their long, thin tails trailing behind. Their soft, greyish plumage and scuttling habits complete the mouse-like impression that gives them their name.",
        },
        {
          question: "What's special about mousebirds among birds?",
          answer:
            "They make up the only order of birds (Coliiformes) found exclusively in Africa — a small, ancient group with no close living relatives elsewhere. They also have unusual, highly flexible feet that can swivel all four toes forward, allowing them to grip, clamber, and hang in remarkable postures, and they famously huddle and sunbathe together in clusters.",
        },
        {
          question: "Why do mousebirds huddle and sunbathe together?",
          answer:
            "To save energy and stay warm. Mousebirds are very social and often bunch tightly together to roost, sharing body heat, and they sunbathe communally — frequently hanging belly-up with their feathers fluffed to absorb warmth. This helps them conserve energy, which is useful given their fruit-and-leaf diet and small size.",
        },
        {
          question: "What do mousebirds eat?",
          answer:
            "Mostly plant food — fruit, berries, buds, leaves, flowers, and nectar — with the occasional insect. Their love of fruit and buds can bring them into gardens and orchards, where they're sometimes considered minor pests, but it also makes them useful seed-dispersers and flower-visitors in their habitats.",
        },
      ]}
      quickFacts={[
        { label: "Group", value: "Order Coliiformes (mousebirds)" },
        { label: "Reference genus", value: "Colius" },
        { label: "Class", value: "Aves" },
        { label: "Unique fact", value: "Only bird order exclusive to Africa" },
        { label: "Name from", value: "Mouse-like clambering through bushes" },
        { label: "Feet", value: "Very flexible; all four toes can face forward" },
        { label: "Behaviour", value: "Sociable; huddles & sunbathes in clusters" },
        { label: "Diet", value: "Mainly fruit, buds, leaves & nectar" },
      ]}
      relatedLinks={[
        { label: "Turaco Profile", href: "/animals/turaco", description: "Another colourful African fruit-eating bird" },
        { label: "Barbet Profile", href: "/animals/barbet", description: "Another fruit-loving bird" },
        { label: "Hornbill Profile", href: "/animals/hornbill", description: "Another African fruit-eater" },
        { label: "Fauna by Continent", href: "/fauna/continents", description: "African fauna in context" },
        { label: "Birds Encyclopedia", href: "/animal-encyclopedia/birds" },
      ]}
    />
  );
}
