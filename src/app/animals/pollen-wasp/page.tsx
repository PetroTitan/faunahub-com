import type { Metadata } from "next";
import AnimalProfileLayout from "@/components/AnimalProfileLayout";
import { ANIMAL_SOURCES } from "@/lib/educational/animal-sources";
import { getAnimalGalleryImages, getAnimalImage, getAnimalOgImage } from "@/lib/images/animal-images";
import { buildArticleMetadata } from "@/lib/metadata";

const PATH = "/animals/pollen-wasp";
const TITLE = "Pollen Wasp (Masarinae): Flower-Visiting Wasps";
const DESC =
  "Pollen wasps (subfamily Masarinae) are unusual wasps that feed larvae on pollen and nectar like bees. Learn their biology, range, and careful pollinator role.";

export const metadata: Metadata = buildArticleMetadata({
  title: TITLE,
  description: DESC,
  path: PATH,
  publishedTime: "2026-06-28",
  modifiedTime: "2026-06-28",
  ogImage: getAnimalOgImage("pollen-wasp"),
});

export default function PollenWaspPage() {
  return (
    <AnimalProfileLayout
      commonName="Pollen Wasp"
      scientificName="Subfamily Masarinae"
      pageTitle={TITLE}
      description={DESC}
      path={PATH}
      parentCategory="Insects"
      parentCategoryHref="/animal-encyclopedia/insects"
      tags={["Wasp","Pollinator","Masarinae"]}
      image={getAnimalImage("pollen-wasp") ?? undefined}
      galleryImages={getAnimalGalleryImages("pollen-wasp")}
      sources={ANIMAL_SOURCES["pollen-wasp"]}
      publishedDate="2026-06-28"
      modifiedDate="2026-06-28"
      overview={
        <>
          <p>
            Pollen wasps make up the subfamily Masarinae within the family Vespidae, the same broad family that includes paper wasps, yellowjackets, and hornets. What sets them apart is their diet: instead of capturing insects or spiders to feed their young, pollen wasps gather <em>pollen</em> and <em>nectar</em> from flowers, much as bees do. This makes them one of the few wasp lineages that are genuine, regular flower visitors rather than incidental ones.
          </p>
          <p>
            Because they collect floral resources to provision their nests, pollen wasps can act as pollinators of some of the plants they visit. This is unusual among wasps. Most wasps are predators or parasitoids and visit flowers only occasionally for adult energy, so they are not significant pollinators. Pollen wasps are a notable exception, and they are most diverse and ecologically prominent in arid and semi-arid regions.
          </p>
          <p>
            It is important to keep the scope clear. &quot;Pollen wasp&quot; refers specifically to Masarinae, a relatively small group within the wasps. Pollination itself is an ecological interaction, not a taxonomic category, and bees, flies, beetles, butterflies, moths, birds, and some wasps can all participate in it. Pollen wasps are interesting precisely because they evolved a bee-like, pollen-based provisioning habit independently.
          </p>
          <h3>Taxonomy and animal group</h3>
          <p>
            Pollen wasps form the subfamily Masarinae within the family Vespidae (order Hymenoptera). Vespidae also contains familiar social wasps such as paper wasps (Polistinae) and yellowjackets and hornets (Vespinae), but Masarinae are distinct in lifestyle and in being largely solitary. The subfamily includes a number of genera, among them <em>Masaris</em>, <em>Celonites</em>, <em>Pseudomasaris</em>, and <em>Quartinia</em>, distributed across several continents. Classifications and the count of described species can change as taxonomists revise the group, so for current placement and species lists it is best to consult an up-to-date taxonomic database rather than treat any single figure as fixed. Within Vespidae, the bee-like, pollen-provisioning habit of Masarinae is considered to have evolved independently from the pollen-collecting habits of true bees.
          </p>
          <h3>Appearance and recognition</h3>
          <p>
            Pollen wasps are generally small to medium-sized wasps with the typical narrow &quot;wasp waist&quot; of Vespidae. Many are boldly marked in black with yellow, white, or reddish patterning, and some can be mistaken at a glance for small bees or for other vespid wasps. A useful field clue shared with many relatives is that, at rest, the wings are often folded longitudinally over the body. Several members have distinctive clubbed or thickened antennae. Unlike bees, pollen wasps lack the dense, branched body hairs (scopae or pollen baskets) that bees use to carry pollen externally; instead, many pollen wasps transport pollen and nectar internally in the crop and regurgitate it at the nest. Appearance varies considerably across the subfamily&#39;s genera, so these are general tendencies rather than universal traits.
          </p>
        </>
      }
      habitat={
        <p>
          Pollen wasps reach their greatest diversity in warm, dry environments, and the group is especially associated with arid and semi-arid regions. Areas such as southern Africa, parts of the Mediterranean and the broader Palaearctic, the deserts and drylands of western North America, and arid zones of South America are among the regions where various pollen wasps occur. They are typically found where suitable flowering plants and nesting substrates coincide, such as open scrub, desert, and other sparsely vegetated terrain. Distribution differs greatly from genus to genus and species to species, and many species have restricted or localized ranges. Rather than generalizing one region&#39;s fauna to the whole group, treat distribution as species-specific, and consult regional faunal records or a taxonomic database for where a particular pollen wasp is documented.
        </p>
      }
      diet={
        <p>
          The defining feature of pollen wasps is their floral diet. Adults feed on <em>nectar</em>, and females gather both pollen and nectar to provision their nest cells, where the developing larvae feed on this floral store rather than on captured prey. In this respect their larval provisioning resembles that of bees, even though pollen wasps are not bees. Many pollen wasps carry the collected pollen and nectar internally and regurgitate the mixture into nest cells. Some pollen wasps are known to be quite selective in the plants they visit, concentrating on particular flower types, while others are more general; the degree of floral specialization varies across the subfamily. Because they depend on flowers throughout the provisioning period, pollen wasps are closely tied to the flowering of their preferred plants.
        </p>
      }
      behavior={
        <>
          <p>
            Most pollen wasps are solitary: a female builds and provisions her own nest without the cooperative colony structure seen in social wasps like yellowjackets. Nesting habits vary across the group; some species construct nests in the soil, while others build mud or clay cells, sometimes attached to rocks, stems, or other surfaces. A female stocks each cell with a pollen-and-nectar provision and lays an egg, and the larva develops on that store. Adults are active flower visitors during their flight season, which in arid habitats is often timed to coincide with the bloom of their preferred plants. Because nesting and provisioning behavior differs widely between genera and species, detailed life-history specifics are best drawn from accounts of the particular species in question rather than generalized across all pollen wasps.
          </p>
          <p>
            As flower visitors that collect pollen and nectar, pollen wasps form part of the wider community of insects that interact with flowering plants in arid and semi-arid landscapes. Alongside bees, flies, beetles, and other visitors, they contribute to the pollinator fauna of the dry regions where they are most diverse, and some plants there are visited substantially by pollen wasps. Their dependence on specific flowering plants also links their own success to the timing and abundance of those blooms. As a relatively specialized and regionally concentrated group, pollen wasps illustrate how flower-visiting and pollen-provisioning habits have evolved more than once among insects, and how dryland ecosystems support distinctive pollinator assemblages beyond the more familiar bees.
          </p>
        </>
      }
      humanInteraction={
        <p>
          Pollen wasps are wild insects and are not pets, livestock, or managed pollinators; they are encountered as part of the natural fauna where they occur. They are not generally regarded as aggressive toward people, and as solitary flower visitors they are usually focused on foraging at blossoms rather than on humans. This page does not provide guidance on handling, capturing, removing, or controlling these or any other insects. Anyone with a medical concern such as a possible sting reaction or allergy should seek advice from a qualified medical professional, and any wildlife or insect conflict around a home or property should be directed to local authorities or qualified pest-management professionals. The aim here is educational understanding of the group, not advice on intervention.
        </p>
      }
      extraSections={[
        {
          heading: "Pollination role",
          body: (
            <p>
              Pollen wasps are among the comparatively few wasps that can act as genuine pollinators, because they visit flowers repeatedly to collect pollen and nectar and may transfer pollen between flowers as they forage. For some plants, particularly in arid regions where pollen wasps are diverse, they are considered meaningful flower visitors and, in certain cases, effective pollinators. However, this role should not be overstated. Pollination effectiveness varies by wasp species, by plant species, and by region, and not every flower visit results in pollination. The internal pollen transport used by many pollen wasps means they may carry less pollen externally than a hairy bee, which can affect how much pollen is moved between flowers. The broader, accurate point is that pollen wasps are an exception within the wasps: most wasp groups are not significant pollinators, whereas Masarinae have a real, if specialized and regionally variable, pollinating role for some plants.
            </p>
          ),
        },
        {
          heading: "Conservation context",
          body: (
            <p>
              There is no single, group-wide conservation status that applies to all pollen wasps, and it would be misleading to assign one. The IUCN Red List generally assesses individual species rather than whole subfamilies, and most insects are not assessed at the group level. Conservation status, where it exists, is specific to a given species and can change over time as new information is gathered. Many pollen wasps occupy restricted or arid ranges, which can make particular species locally vulnerable to habitat change, but population trends are not well documented across the group as a whole. For the current status of any specific pollen wasp species, consult the IUCN Red List and regional assessments rather than relying on a generalized claim.
            </p>
          ),
        },
      ]}
      faqs={[
        {
          question: "Are pollen wasps bees?",
          answer:
            "No. Pollen wasps are true wasps in the subfamily Masarinae (family Vespidae), related to paper wasps and yellowjackets. They are unusual because they feed their larvae on pollen and nectar like bees do, but this bee-like provisioning evolved independently. They lack the dense pollen-carrying hairs that bees use and often carry pollen internally instead.",
        },
        {
          question: "Do pollen wasps actually pollinate flowers?",
          answer:
            "They can. Because they visit flowers repeatedly to collect pollen and nectar, pollen wasps may transfer pollen between flowers and act as pollinators of some plants, especially in arid regions. However, their effectiveness varies by species, plant, and region, and not every flower visit results in pollination. They are an exception among wasps, most of which are not significant pollinators.",
        },
        {
          question: "Where do pollen wasps live?",
          answer:
            "Pollen wasps are most diverse in warm, dry environments and are strongly associated with arid and semi-arid regions, including parts of southern Africa, the Mediterranean and wider Palaearctic, western North America, and arid South America. Distribution is species-specific, and many species have localized ranges, so it is best to check regional records for any particular species.",
        },
        {
          question: "Are pollen wasps dangerous to people?",
          answer:
            "Pollen wasps are wild, mostly solitary flower visitors and are not generally considered aggressive toward humans, typically focusing on foraging at flowers. This page does not offer handling, removal, or medical guidance. Anyone with a sting or allergy concern should consult a qualified medical professional, and insect conflicts should be referred to local authorities or pest-management professionals.",
        },
      ]}
      quickFacts={[
        { label: "Scientific group", value: "Subfamily Masarinae (family Vespidae)" },
        { label: "Pollinator group", value: "Wasp (an unusual flower-provisioning lineage)" },
        { label: "Pollination role", value: "Can act as pollinators of some plants; varies by species and region, and not every visit pollinates" },
        { label: "Range", value: "Mainly arid and semi-arid regions across several continents; species-specific (consult regional records)" },
        { label: "Diet / feeding", value: "Nectar for adults; larvae provisioned with pollen and nectar (bee-like), not insect prey" },
        { label: "Conservation note", value: "No single group-wide status; assessed per species and changeable (consult the IUCN Red List)" },
      ]}
      relatedLinks={[
        { label: "Pollinators", href: "/wildlife/pollinators", description: "Bees, butterflies, birds, bats, flies & beetles" },
        { label: "Wasp", href: "/animals/wasp", description: "Wasps as a group" },
        { label: "Fig Wasp", href: "/animals/fig-wasp", description: "A specialized wasp pollinator" },
        { label: "Bee", href: "/animals/bee", description: "Another pollinator" },
        { label: "Insects & Invertebrates", href: "/animal-encyclopedia/insects" },
      ]}
    />
  );
}
