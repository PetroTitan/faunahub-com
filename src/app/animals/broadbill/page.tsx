import type { Metadata } from "next";
import AnimalProfileLayout from "@/components/AnimalProfileLayout";
import { ANIMAL_SOURCES } from "@/lib/educational/animal-sources";
import { getAnimalGalleryImages, getAnimalImage, getAnimalOgImage } from "@/lib/images/animal-images";
import { buildArticleMetadata } from "@/lib/metadata";

const PATH = "/animals/broadbill";
const TITLE = "Broadbill — Profile, the Plump, Bright Birds with Wide Mouths";
const DESC =
  "Explore broadbills (family Eurylaimidae): small, rounded, vividly coloured forest birds of Africa and Asia with broad gapes — some males make a remarkable whirring sound with their wings.";

export const metadata: Metadata = buildArticleMetadata({
  title: TITLE,
  description: DESC,
  path: PATH,
  publishedTime: "2026-06-22",
  modifiedTime: "2026-06-22",
  ogImage: getAnimalOgImage("broadbill"),
});

export default function BroadbillPage() {
  return (
    <AnimalProfileLayout
      commonName="Broadbill"
      scientificName="family Eurylaimidae"
      pageTitle={TITLE}
      description={DESC}
      path={PATH}
      parentCategory="Birds"
      parentCategoryHref="/animal-encyclopedia/birds"
      tags={["Bird", "Tropical", "Forest"]}
      image={getAnimalImage("broadbill") ?? undefined}
      galleryImages={getAnimalGalleryImages("broadbill")}
      sources={ANIMAL_SOURCES.broadbill}
      publishedDate="2026-06-22"
      modifiedDate="2026-06-22"
      overview={
        <>
          <p>
            Broadbills (family Eurylaimidae) are small, plump, large-headed birds of the tropical
            forests of Africa and Asia, named for their wide, flattened bills and broad mouths. Many
            are gorgeously coloured — in greens, yellows, reds, blues, blacks, and whites — like the
            silver-breasted broadbill and the green-and-black long-tailed broadbill. Their rounded
            bodies, big eyes, and bright plumage give them a plush, almost toy-like charm.
          </p>
          <p>
            Broadbills are best known for two things: that wide gape, useful for snapping up insects
            and other food, and the elaborate hanging nests they build — and, in some species, a
            curious whirring or buzzing sound the males produce with specially modified wing feathers.
          </p>
          <p>
            <strong>Note:</strong> &ldquo;broadbill&rdquo; covers a family of species; details here
            describe the group broadly. Treat general statements as approximate and verify against
            authoritative sources.
          </p>
        </>
      }
      habitat={
        <p>
          Broadbills live in tropical forests of sub-Saharan Africa and of South and Southeast Asia,
          mostly in humid lowland and hill rainforest, with some in montane forest. They keep to the
          mid- and lower levels of dense forest and forest edge, where their colours can be
          surprisingly hard to spot among the foliage, and they often stay near streams or damp areas.
        </p>
      }
      diet={
        <p>
          Most broadbills are mainly insectivores, using their wide gape to catch insects and other
          small invertebrates among the foliage and in the air, and several also eat fruit; a few are
          largely frugivorous, and some take small frogs or lizards. The broad mouth helps them engulf
          sizeable insects, and they often hunt by perching and then sallying out to grab prey.
        </p>
      }
      behavior={
        <p>
          Broadbills tend to be quiet, rather sluggish perchers that can sit still for long periods,
          which — together with the dim forest light — makes them easy to overlook despite their bright
          colours. They are famous nest-builders: many weave elaborate, bulky, pear-shaped hanging
          nests with a side entrance and an untidy &ldquo;tail&rdquo; of trailing material, usually
          suspended from a branch over a stream or clearing for protection. In some species, displaying
          males produce a distinctive mechanical whirring, buzzing, or trilling sound using specially
          stiffened wing feathers, adding a percussive element to their courtship. Broadbills are often
          seen in pairs or small groups.
        </p>
      }
      humanInteraction={
        <p>
          Broadbills are a delight for birdwatchers, prized for their colours and their remarkable
          hanging nests, and they are harmless, beneficial insect-eaters. Because they depend on
          tropical forest, deforestation and habitat fragmentation are the main threats, and some
          species — particularly those with small ranges or in heavily logged regions — are of
          conservation concern, while others remain reasonably common. Conserving forest helps them.
          Consult the IUCN Red List for species-specific status.
        </p>
      }
      faqs={[
        {
          question: "Why are they called broadbills?",
          answer:
            "Because of their wide, flattened bills and broad mouths (gapes). The generous gape helps these birds snap up insects and other food, and it's the most distinctive structural feature of the family, giving them their name. Combined with their rounded bodies and bright colours, the wide bill makes broadbills easy to recognise.",
        },
        {
          question: "What kind of nests do broadbills build?",
          answer:
            "Elaborate hanging nests. Many broadbills weave bulky, pear- or pouch-shaped nests with a side entrance and an untidy 'tail' of trailing plant material, suspended from a branch — often over a stream or open space, which helps protect the eggs and young from predators. The nests are a hallmark of the family.",
        },
        {
          question: "Do broadbills really make sounds with their wings?",
          answer:
            "Some do. In certain broadbill species, displaying males produce a distinctive whirring, buzzing, or trilling sound using specially stiffened wing feathers, rather than only by voice. This mechanical wing-sound adds a percussive element to their courtship displays — a striking trait shared with a few other unusual birds.",
        },
        {
          question: "What do broadbills eat?",
          answer:
            "Mostly insects and other small invertebrates, caught with their wide gape among the foliage or in short aerial sallies, and many also eat fruit; a few species are largely fruit-eaters, and some take small frogs or lizards. The broad mouth lets them handle fairly large insect prey.",
        },
      ]}
      quickFacts={[
        { label: "Group", value: "Family Eurylaimidae (broadbills)" },
        { label: "Class", value: "Aves (perching birds)" },
        { label: "Look", value: "Plump, big-headed, vividly coloured" },
        { label: "Signature trait", value: "Wide, flattened bill / broad gape" },
        { label: "Diet", value: "Mainly insects; some fruit" },
        { label: "Nests", value: "Elaborate hanging nests over water" },
        { label: "Extra", value: "Some males whirr with wing feathers" },
        { label: "Range", value: "Tropical Africa & Asia" },
      ]}
      relatedLinks={[
        { label: "Pitta Profile", href: "/animals/pitta", description: "Related brilliantly coloured forest birds" },
        { label: "Trogon Profile", href: "/animals/trogon", description: "Another jewel-toned tropical bird" },
        { label: "Turaco Profile", href: "/animals/turaco", description: "Another colourful Old World forest bird" },
        { label: "Fauna by Continent", href: "/fauna/continents", description: "Tropical-forest fauna in context" },
        { label: "Birds Encyclopedia", href: "/animal-encyclopedia/birds" },
      ]}
    />
  );
}
