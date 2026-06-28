import type { Metadata } from "next";
import AnimalProfileLayout from "@/components/AnimalProfileLayout";
import { ANIMAL_SOURCES } from "@/lib/educational/animal-sources";
import { getAnimalGalleryImages, getAnimalImage, getAnimalOgImage } from "@/lib/images/animal-images";
import { buildArticleMetadata } from "@/lib/metadata";

const PATH = "/animals/honeyeater";
const TITLE = "Honeyeater: Australasian Nectar Bird & Pollinator";
const DESC =
  "Honeyeaters (family Meliphagidae) are Australasian nectar-feeding birds with brush-tipped tongues that can pollinate native plants like eucalypts, banksias.";

export const metadata: Metadata = buildArticleMetadata({
  title: TITLE,
  description: DESC,
  path: PATH,
  publishedTime: "2026-06-28",
  modifiedTime: "2026-06-28",
  ogImage: getAnimalOgImage("honeyeater"),
});

export default function HoneyeaterPage() {
  return (
    <AnimalProfileLayout
      commonName="Honeyeater"
      scientificName="Family Meliphagidae"
      pageTitle={TITLE}
      description={DESC}
      path={PATH}
      parentCategory="Birds"
      parentCategoryHref="/animal-encyclopedia/birds"
      tags={["Bird","Pollinator","Australasia"]}
      image={getAnimalImage("honeyeater") ?? undefined}
      galleryImages={getAnimalGalleryImages("honeyeater")}
      sources={ANIMAL_SOURCES["honeyeater"]}
      publishedDate="2026-06-28"
      modifiedDate="2026-06-28"
      overview={
        <>
          <p>
            Honeyeaters make up the family Meliphagidae, a large and diverse group of small to medium-sized birds found across Australia, New Guinea, and many Pacific islands. Their name reflects a defining trait: a long, brush-tipped tongue that lets them lap nectar from flowers. As they move from bloom to bloom they pick up and carry pollen, and for that reason many honeyeaters are regarded as flower visitors and, for some native plants, important pollinators.
          </p>
          <p>
            Despite a superficial resemblance in lifestyle, honeyeaters are not hummingbirds and are not closely related to them. Hummingbirds are restricted to the Americas, while honeyeaters are an Australasian radiation. The similarities — nectar feeding and a specialised tongue — are a case of convergent ecology rather than shared ancestry. Honeyeaters generally perch beside a flower to feed, though some can hover briefly.
          </p>
          <p>
            &quot;Honeyeater&quot; covers a wide range of species, from tiny flower-probing birds to larger, more omnivorous forms such as friarbirds and wattlebirds. Because the family is so varied, statements about diet, behaviour, and pollination role are best treated as general tendencies that vary by species and region. For specific details, consult authoritative ornithological and conservation sources.
          </p>
          <h3>Taxonomy and animal group</h3>
          <p>
            Honeyeaters belong to the family <em>Meliphagidae</em> within the songbird order Passeriformes (class Aves). It is one of the largest bird families in the Australasian region, encompassing many genera and a large number of species, including the well-known wattlebirds (<em>Anthochaera</em>), friarbirds (<em>Philemon</em>), miners (<em>Manorina</em>), and numerous smaller honeyeaters. The family is part of a broader Australasian songbird group and is most closely related to other endemic Australasian lineages rather than to the unrelated nectar-feeding birds of other continents. Because the group is so large, species-level identification and classification are best verified against current ornithological references.
          </p>
          <h3>Appearance and recognition</h3>
          <p>
            Honeyeaters vary widely in size and colour, from small, slender, warbler-like birds to robust species the size of a small crow. Plumage is often subdued — olive, grey, brown, or streaked — though many species carry distinctive markings such as bare facial skin, coloured wattles, ear tufts, or yellow and white patches. A shared internal feature, rather than an obvious external one, defines the family: a long tongue whose tip is frayed into a brush of fine filaments, well suited to drawing up nectar. Bills are typically slender and often gently down-curved, an adaptation for probing flowers, though larger, more omnivorous species tend to have stouter bills.
          </p>
        </>
      }
      habitat={
        <p>
          Honeyeaters occur across Australia, New Guinea, and on many islands of the southwestern and central Pacific, with a smaller presence in nearby regions. As a family they occupy an exceptional range of habitats wherever flowering plants are found, including eucalypt forests and woodlands, heathlands, rainforest, mangroves, arid scrub, alpine areas, and gardens. Many species are closely tied to particular flowering plants or seasonal blooms, and some move locally or seasonally to track nectar availability. Distribution and habitat preferences differ greatly among species, so range details should be checked against authoritative sources for any particular bird.
        </p>
      }
      diet={
        <p>
          Nectar is a central part of the diet for many honeyeaters, lapped from flowers with the brush-tipped tongue. They are especially associated with nectar-rich native plants such as eucalypts (<em>Eucalyptus</em> and relatives), banksias (<em>Banksia</em>), grevilleas, and other flowering trees and shrubs. Honeyeaters are not strict nectarivores, however: most also eat insects and other small invertebrates, which provide protein, and some take fruit, sap, or honeydew. The balance of nectar, insects, and other foods varies by species, season, and what is locally available, so the family as a whole is better described as flexible nectar-and-insect feeders than as pure flower specialists.
        </p>
      }
      behavior={
        <>
          <p>
            Honeyeaters are active, often vocal birds, and many are conspicuous and energetic at flowering trees. They typically perch to feed, working through clusters of blooms, though they will make short hovering or acrobatic moves to reach nectar. Many species are strongly territorial around rich nectar sources and may chase off other birds, while some — such as certain miners — live in cooperative groups that defend areas communally. Movements range from largely sedentary to nomadic or seasonally migratory as birds follow flowering. Most honeyeaters build cup-shaped nests; breeding behaviour, including cooperative breeding in some species, varies across the family.
          </p>
          <p>
            Within Australasian ecosystems, honeyeaters fill an important role as nectar feeders and as flower visitors that can contribute to plant reproduction, alongside insects and, in some areas, other nectar-feeding animals. By also consuming insects, they participate in food webs as both flower visitors and insect predators, and they themselves are prey for larger birds and other predators. Some honeyeaters are considered ecologically influential in their communities; for example, certain aggressive, group-living species can dominate flowering trees and affect which other birds use them. These dynamics differ by species and habitat and are an active subject of ecological research rather than fixed rules.
          </p>
        </>
      }
      humanInteraction={
        <p>
          Honeyeaters are familiar and often welcome birds across much of Australasia, frequently seen in gardens, parks, and bushland where flowering plants grow, and they are valued for their song, activity, and role in visiting native flowers. They are wild birds rather than pets. If you have concerns about wildlife in your area — for example, injured birds or human–wildlife conflicts — contact local wildlife authorities, licensed carers, or qualified professionals rather than handling birds yourself. This page is educational and does not offer advice on attracting, keeping, or managing wildlife.
        </p>
      }
      extraSections={[
        {
          heading: "Pollination role",
          body: (
            <p>
              As honeyeaters feed, pollen can adhere to the face, bill, and head feathers and be carried to the next flower, so these birds visit flowers and can act as pollinators of some native plants. A number of Australasian plants — including various eucalypts, banksias, and other species with sturdy, nectar-rich, perch-friendly blooms — are thought to be adapted to bird pollination, and honeyeaters are frequently cited among their visitors. Even so, the pollination role varies by species and region, and not every flower visit results in pollination: some visitors take nectar without effectively transferring pollen, and effectiveness depends on the plant, the bird, and the presence of other pollinators such as insects. The strength of any specific honeyeater–plant relationship is best confirmed through botanical and ecological studies rather than assumed.
            </p>
          ),
        },
        {
          heading: "Conservation context",
          body: (
            <p>
              Conservation status varies enormously across the honeyeater family and cannot be summarised with a single category for the whole group. Many honeyeaters are common and widespread, while some species — particularly those with small ranges, on islands, or in heavily modified habitats — are of greater conservation concern, and at least one Australian honeyeater is widely regarded as critically threatened. Because statuses and population trends differ by species and change over time, they should be checked individually against the IUCN Red List and relevant national or regional assessments for current information rather than generalised across the family.
            </p>
          ),
        },
      ]}
      faqs={[
        {
          question: "Are honeyeaters the same as hummingbirds?",
          answer:
            "No. Honeyeaters (family Meliphagidae) live in Australia, New Guinea, and the Pacific, while hummingbirds live only in the Americas, and the two are not closely related. They independently evolved nectar feeding and specialised tongues. A practical difference is that honeyeaters usually perch to feed, whereas hummingbirds typically hover.",
        },
        {
          question: "Do honeyeaters pollinate plants?",
          answer:
            "They can. As honeyeaters feed on nectar, pollen sticks to their face and feathers and may be carried to other flowers, so they visit and can pollinate some native plants, including various eucalypts and banksias. The pollination role varies by species and region, and not every flower visit results in effective pollination, so specific relationships are best confirmed through ecological studies.",
        },
        {
          question: "What do honeyeaters eat?",
          answer:
            "Many honeyeaters rely heavily on nectar, lapped from flowers with a brush-tipped tongue, but most are not strict nectarivores. They also eat insects and other small invertebrates for protein, and some take fruit, sap, or honeydew. The mix depends on the species, the season, and what food is locally available.",
        },
        {
          question: "Are honeyeaters endangered?",
          answer:
            "It depends on the species. The family is large and diverse: many honeyeaters are common, while some with small or island ranges, or in altered habitats, are of greater concern, and at least one is widely regarded as critically threatened. Because statuses differ by species and change over time, check the IUCN Red List and national assessments for current information.",
        },
      ]}
      quickFacts={[
        { label: "Scientific group", value: "Family Meliphagidae (Aves)" },
        { label: "Pollinator group", value: "Bird (nectar-feeding)" },
        { label: "Pollination role", value: "Visits flowers; can pollinate some native plants" },
        { label: "Range", value: "Australia, New Guinea & Pacific (Australasian)" },
        { label: "Diet / feeding", value: "Mainly nectar; also insects, some fruit" },
        { label: "Conservation note", value: "Varies by species; check IUCN Red List" },
      ]}
      relatedLinks={[
        { label: "Pollinators", href: "/wildlife/pollinators", description: "Bees, butterflies, birds, bats, flies & beetles" },
        { label: "Hummingbird", href: "/animals/hummingbird", description: "A New World nectar bird" },
        { label: "Sunbird", href: "/animals/sunbird", description: "An Old World nectar bird" },
        { label: "Bee", href: "/animals/bee", description: "An insect pollinator" },
        { label: "Birds", href: "/animal-encyclopedia/birds" },
      ]}
    />
  );
}
