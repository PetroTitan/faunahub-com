import type { Metadata } from "next";
import AnimalProfileLayout from "@/components/AnimalProfileLayout";
import { ANIMAL_SOURCES } from "@/lib/educational/animal-sources";
import { getAnimalGalleryImages, getAnimalImage, getAnimalOgImage } from "@/lib/images/animal-images";
import { buildArticleMetadata } from "@/lib/metadata";

const PATH = "/animals/fairy-wren";
const TITLE = "Fairy-wren — Profile, Australia's Brilliant Blue Cooperative Songbirds";
const DESC =
  "Explore fairy-wrens (genus Malurus): tiny Australian songbirds with dazzling blue breeding males, cocked tails, cooperative family helpers — and famously unfaithful mating habits.";

export const metadata: Metadata = buildArticleMetadata({
  title: TITLE,
  description: DESC,
  path: PATH,
  publishedTime: "2026-06-22",
  modifiedTime: "2026-06-22",
  ogImage: getAnimalOgImage("fairy-wren"),
});

export default function FairyWrenPage() {
  return (
    <AnimalProfileLayout
      commonName="Fairy-wren"
      scientificName="genus Malurus"
      pageTitle={TITLE}
      description={DESC}
      path={PATH}
      parentCategory="Birds"
      parentCategoryHref="/animal-encyclopedia/birds"
      tags={["Bird", "Songbird", "Australia"]}
      image={getAnimalImage("fairy-wren") ?? undefined}
      galleryImages={getAnimalGalleryImages("fairy-wren")}
      sources={ANIMAL_SOURCES["fairy-wren"]}
      publishedDate="2026-06-22"
      modifiedDate="2026-06-22"
      overview={
        <>
          <p>
            Fairy-wrens (genus <em>Malurus</em>) are tiny, energetic songbirds of Australia (with
            relatives in New Guinea), beloved for the breathtaking colours of the breeding males.
            In species such as the superb fairy-wren (<em>Malurus cyaneus</em>), the male in
            breeding dress is a jewel of brilliant sky-blue and black, while females and
            non-breeding males are a modest brown. All of them share a perky habit of holding the
            long tail cocked up over the back.
          </p>
          <p>
            Behind their delicate looks, fairy-wrens have a remarkable social life: they live in
            cooperative family groups, and they are famous among biologists for being some of the
            least faithful birds known, despite forming long-term pairs.
          </p>
          <p>
            <strong>Note:</strong> &ldquo;fairy-wren&rdquo; covers several species; details here use
            the superb fairy-wren as a reference. Treat general statements as approximate and verify
            against authoritative sources.
          </p>
        </>
      }
      habitat={
        <p>
          Fairy-wrens live across Australia in a variety of habitats with dense low cover —
          woodland understorey, heath, scrub, grassland, gardens, and parks — where they can dart
          between bushes and find shelter. Different species favour different vegetation, from
          forests to arid spinifex, and the superb fairy-wren is a familiar sight in gardens and
          parks of southeastern Australia.
        </p>
      }
      diet={
        <p>
          Fairy-wrens are mainly insectivores, hopping and flitting through low vegetation and over
          the ground to snap up insects and other small invertebrates, and they also take some
          seeds. Active foragers, they busily work through the undergrowth in their family groups,
          and by eating large numbers of insects they help keep gardens and bushland in balance.
        </p>
      }
      behavior={
        <p>
          Fairy-wrens are cooperative breeders: a group typically centres on a dominant breeding
          pair, with extra adults — often grown offspring from previous years — staying on as
          &ldquo;helpers&rdquo; that assist in feeding and raising the chicks and defending the
          territory. They are also a textbook example of a contrast between social and genetic
          partners: although a pair bonds long-term, both sexes very frequently mate outside the
          pair, so many chicks in a nest are fathered by other males. Breeding males even bring
          colourful flower petals in courtship displays. Fairy-wrens are lively, vocal, and
          constantly on the move, holding their tails jauntily upright.
        </p>
      }
      humanInteraction={
        <p>
          Fairy-wrens are among Australia&apos;s best-loved garden birds, admired for their colour
          and charm and valued for eating insects. Many species are common and adaptable, though
          some — especially those tied to specialised habitats — face pressures from habitat loss,
          fire regimes, and introduced predators such as cats. Keeping cats indoors and preserving
          dense native cover helps them. Consult the IUCN Red List for species-specific status.
        </p>
      }
      faqs={[
        {
          question: "Why are male fairy-wrens so blue?",
          answer:
            "The brilliant blue-and-black plumage of breeding males is used to attract mates and signal status. It appears in the breeding season, after which males may moult into a duller brown 'eclipse' plumage like the females. The dazzling colour, combined with courtship displays, helps a male compete for the attention of females.",
        },
        {
          question: "Do fairy-wrens really have helpers at the nest?",
          answer:
            "Yes — they're cooperative breeders. A family group usually has a main breeding pair plus extra adults, often their own grown young from earlier broods, that stay on as 'helpers.' These helpers assist in feeding the chicks and defending the territory, which can improve the group's breeding success.",
        },
        {
          question: "Are fairy-wrens really 'unfaithful'?",
          answer:
            "Famously so. Although fairy-wrens form long-term social pairs, both males and females very frequently mate with other birds, so a single nest often contains chicks fathered by several different males. This high rate of mating outside the pair makes fairy-wrens a classic example in studies of bird mating systems.",
        },
        {
          question: "What do fairy-wrens eat?",
          answer:
            "Mainly insects and other small invertebrates, plus some seeds. They forage busily through low vegetation and across the ground in their family groups, snapping up small prey. Their appetite for insects makes them welcome and helpful visitors in gardens and bushland.",
        },
      ]}
      quickFacts={[
        { label: "Group", value: "Genus Malurus (fairy-wrens)" },
        { label: "Reference species", value: "Malurus cyaneus (superb fairy-wren)" },
        { label: "Class", value: "Aves (songbird)" },
        { label: "Males", value: "Brilliant blue-and-black when breeding" },
        { label: "Social life", value: "Cooperative groups with helpers" },
        { label: "Mating", value: "Pairs bond, but mate widely outside pair" },
        { label: "Diet", value: "Mainly insectivore" },
        { label: "Range", value: "Australia (relatives in New Guinea)" },
      ]}
      relatedLinks={[
        { label: "Bowerbird Profile", href: "/animals/bowerbird", description: "Another remarkable Australasian bird" },
        { label: "Cotinga Profile", href: "/animals/cotinga", description: "Other small, colourful display birds" },
        { label: "Bee-eater Profile", href: "/animals/bee-eater", description: "Another jewel-toned insectivore" },
        { label: "Fauna by Continent", href: "/fauna/continents", description: "Australian fauna in context" },
        { label: "Birds Encyclopedia", href: "/animal-encyclopedia/birds" },
      ]}
    />
  );
}
