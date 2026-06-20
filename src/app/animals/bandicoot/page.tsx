import type { Metadata } from "next";
import AnimalProfileLayout from "@/components/AnimalProfileLayout";
import { ANIMAL_SOURCES } from "@/lib/educational/animal-sources";
import { getAnimalGalleryImages, getAnimalImage, getAnimalOgImage } from "@/lib/images/animal-images";
import { buildArticleMetadata } from "@/lib/metadata";

const PATH = "/animals/bandicoot";
const TITLE = "Bandicoot — Profile, Digging Habits & Diet";
const DESC =
  "Explore bandicoots (order Peramelemorphia): small, pointy-snouted, omnivorous marsupials of Australia and New Guinea — busy diggers using the long-nosed bandicoot as a reference.";

export const metadata: Metadata = buildArticleMetadata({
  title: TITLE,
  description: DESC,
  path: PATH,
  publishedTime: "2026-06-20",
  modifiedTime: "2026-06-20",
  ogImage: getAnimalOgImage("bandicoot"),
});

export default function BandicootPage() {
  return (
    <AnimalProfileLayout
      commonName="Bandicoot"
      scientificName="Perameles nasuta"
      pageTitle={TITLE}
      description={DESC}
      path={PATH}
      parentCategory="Mammals"
      parentCategoryHref="/animal-encyclopedia/mammals"
      tags={["Mammal", "Marsupial", "Omnivore"]}
      image={getAnimalImage("bandicoot") ?? undefined}
      galleryImages={getAnimalGalleryImages("bandicoot")}
      sources={ANIMAL_SOURCES.bandicoot}
      publishedDate="2026-06-20"
      modifiedDate="2026-06-20"
      overview={
        <>
          <p>
            Bandicoots are small, ground-dwelling marsupials of Australia and New Guinea,
            recognised by their long pointed snouts, compact bodies, large hind feet, and
            short tails. The long-nosed bandicoot (<em>Perameles nasuta</em>), shown here,
            is a familiar eastern-Australian example. Bandicoots belong to the same broad
            group (order Peramelemorphia) as the bilby, and like it they are constant,
            energetic diggers.
          </p>
          <p>
            By digging countless small foraging holes, bandicoots turn over soil and help
            keep their habitats healthy — quiet but valuable members of their ecosystems.
          </p>
          <p>
            <strong>Note:</strong> there are many bandicoot species with differing status
            and habits; details here use the long-nosed bandicoot as a reference. Treat
            general statements as approximate and verify against authoritative sources.
          </p>
        </>
      }
      habitat={
        <p>
          Bandicoots occupy a range of habitats across Australia and New Guinea —
          rainforest, woodland, heath, shrubland, and grassy areas, including suburban
          gardens for some species. The long-nosed bandicoot favours areas with ground
          cover for shelter and open patches for foraging, and shelters by day in nests of
          leaf litter.
        </p>
      }
      diet={
        <p>
          Bandicoots are omnivores. They eat insects and their larvae, earthworms, other
          invertebrates, and fungi, along with some plant material such as seeds, roots,
          and fruit. They find much of this food underground, sniffing it out and digging
          characteristic small conical holes with their strong claws.
        </p>
      }
      behavior={
        <p>
          Bandicoots are mostly nocturnal and solitary, foraging at night and resting by
          day in concealed nests. Their distinctive snuffling, digging foraging leaves
          tell-tale holes across lawns and bushland. Bandicoots are notable for an
          exceptionally short pregnancy — among the shortest of any mammal — after which
          the tiny young develop in a backward-opening pouch (handy for a digging animal,
          as it keeps out soil).
        </p>
      }
      humanInteraction={
        <p>
          Some bandicoots adapt to gardens and are familiar to suburban Australians, while
          several species have declined or vanished from parts of their range due to
          habitat loss and introduced predators such as foxes and cats. A number are now
          threatened and the focus of conservation work. Their digging benefits soil and
          plants. Consult the IUCN Red List and Australian authorities for species-specific
          status.
        </p>
      }
      faqs={[
        {
          question: "Is a bandicoot related to the bilby?",
          answer:
            "Yes. Bandicoots and bilbies belong to the same order of marsupials (Peramelemorphia). The bilby is essentially a long-eared, desert-adapted member of this group, and like bandicoots it is a dedicated digger with a backward-opening pouch.",
        },
        {
          question: "Why are there small holes in my lawn?",
          answer:
            "In parts of Australia, neat little conical holes in lawns and garden beds are often the work of foraging bandicoots digging for insects, larvae, and other food in the soil. The digging is generally harmless and even helps aerate the soil and control some pests.",
        },
        {
          question: "What do bandicoots eat?",
          answer:
            "Bandicoots are omnivores. They eat insects and their larvae, earthworms, other invertebrates, and fungi, plus some seeds, roots, and fruit. Much of their food is dug from underground, which is why they leave small foraging holes behind.",
        },
        {
          question: "Are bandicoots endangered?",
          answer:
            "It varies by species. Some bandicoots remain reasonably common, including in suburban areas, but several have declined or disappeared from parts of their range because of habitat loss and introduced predators, and a number are now threatened. Status should be checked against current IUCN Red List assessments.",
        },
      ]}
      quickFacts={[
        { label: "Reference species", value: "Perameles nasuta (long-nosed bandicoot)" },
        { label: "Order", value: "Peramelemorphia (with bilbies)" },
        { label: "Class", value: "Mammalia (marsupial)" },
        { label: "Diet", value: "Omnivore (insects, fungi, plants)" },
        { label: "Behaviour", value: "Nocturnal, solitary, digs constantly" },
        { label: "Pouch", value: "Backward-opening (keeps soil out)" },
        { label: "Range", value: "Australia & New Guinea" },
        { label: "Status", value: "Varies by species (verify)" },
      ]}
      relatedLinks={[
        { label: "Bilby Profile", href: "/animals/bilby", description: "Its long-eared desert relative" },
        { label: "Quokka Profile", href: "/animals/quokka", description: "Another small Australian marsupial" },
        { label: "Wombat Profile", href: "/animals/wombat", description: "A larger burrowing marsupial" },
        { label: "Fauna by Continent", href: "/fauna/continents", description: "Australian fauna in context" },
        { label: "Mammal Encyclopedia", href: "/animal-encyclopedia/mammals" },
      ]}
    />
  );
}
