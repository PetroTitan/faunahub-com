import type { Metadata } from "next";
import AnimalProfileLayout from "@/components/AnimalProfileLayout";
import { ANIMAL_SOURCES } from "@/lib/educational/animal-sources";
import { getAnimalGalleryImages, getAnimalImage, getAnimalOgImage } from "@/lib/images/animal-images";
import { buildArticleMetadata } from "@/lib/metadata";

const PATH = "/animals/carpenter-bee";
const TITLE = "Carpenter Bee (Xylocopa): Pollinator Profile";
const DESC =
  "Carpenter bees (Xylocopa) are large, wood-nesting bees and buzz pollinators. Learn their habits, flower visits, nectar robbing, and cautious pollination role.";

export const metadata: Metadata = buildArticleMetadata({
  title: TITLE,
  description: DESC,
  path: PATH,
  publishedTime: "2026-06-28",
  modifiedTime: "2026-06-28",
  ogImage: getAnimalOgImage("carpenter-bee"),
});

export default function CarpenterBeePage() {
  return (
    <AnimalProfileLayout
      commonName="Carpenter Bee"
      scientificName="Xylocopa spp."
      pageTitle={TITLE}
      description={DESC}
      path={PATH}
      parentCategory="Insects"
      parentCategoryHref="/animal-encyclopedia/insects"
      tags={["Bee","Pollinator","Solitary"]}
      image={getAnimalImage("carpenter-bee") ?? undefined}
      galleryImages={getAnimalGalleryImages("carpenter-bee")}
      sources={ANIMAL_SOURCES["carpenter-bee"]}
      publishedDate="2026-06-28"
      modifiedDate="2026-06-28"
      overview={
        <>
          <p>
            Carpenter bees are large, robust bees in the genus <em>Xylocopa</em>, often called &quot;large carpenter bees&quot; to distinguish them from the smaller carpenter bees of the genus <em>Ceratina</em>. They get their common name from the way females excavate tunnels in wood to build their nests. Importantly, they do not eat the wood; they bore into it only to create nesting galleries and feed instead on nectar and pollen gathered from flowers.
          </p>
          <p>
            As frequent flower visitors, carpenter bees can act as pollinators of a range of plants, and several species are notable &quot;buzz pollinators&quot; able to shake pollen loose from flowers that hold it tightly. Their pollination role varies by species, plant, and region, and not every flower visit results in pollination — some carpenter bees also &quot;rob&quot; nectar by cutting slits at the base of long, tubular flowers, bypassing the flower&#39;s reproductive parts.
          </p>
          <p>
            The genus is large and widely distributed, with greatest diversity in tropical and subtropical regions. In the United States, carpenter bees are among the largest native bees, comparable in size to bumble bee queens. This profile describes the genus <em>Xylocopa</em> broadly; specific traits, ranges, and pollination relationships differ among the many species within it.
          </p>
          <h3>Taxonomy and animal group</h3>
          <p>
            Carpenter bees belong to the genus <em>Xylocopa</em>, within the family Apidae (the same large family that includes honey bees, bumble bees, and orchid bees) in the order Hymenoptera. The genus name <em>Xylocopa</em> derives from Greek roots meaning &quot;wood-cutter,&quot; referring to the females&#39; wood-excavating nesting behavior. The genus is large — sources commonly cite anywhere from around 400 to more than 700 recognized species worldwide — and is placed in the subfamily Xylocopinae. The term &quot;carpenter bee&quot; most often refers to these large <em>Xylocopa</em> species, though the smaller related genus <em>Ceratina</em> (small carpenter bees) is sometimes included under the same common name. Carpenter bees should not be confused with bumble bees (genus <em>Bombus</em>), which they superficially resemble.
          </p>
          <h3>Appearance and recognition</h3>
          <p>
            Carpenter bees are large and stout-bodied, with many species rivaling bumble bee queens in size, making them among the largest native bees in regions such as the United States. They are often shiny, with a smooth, relatively hairless and glossy abdomen — a useful feature for telling them apart from the fuzzier, more uniformly hairy bumble bees. Coloration varies widely across the genus: many species are black, sometimes with a metallic blue, green, purple, or violet sheen, while others have yellow, orange, or pale hairs on the thorax. In a number of species, males and females differ in appearance, and males of some species have lighter or yellowish facial markings. As with other bees, exact size, color, and markings vary considerably from species to species.
          </p>
        </>
      }
      habitat={
        <p>
          Carpenter bees occupy a broad range of habitats, from tropical and subtropical to temperate and arid environments, and the genus is found on every continent except Antarctica. Diversity is greatest in the tropics, but species also occur in deserts and temperate zones. Because nesting depends on suitable wood, carpenter bees are associated with areas that provide dead limbs, trunks, snags, or similar woody material, and some species will also use structural timber such as fence posts, eaves, or untreated lumber. In the United States, for example, they are widespread across southern and eastern regions. Because the genus contains so many species with different distributions, ranges should be considered species-specific rather than uniform across all carpenter bees; consult regional or species-level sources for precise distribution.
        </p>
      }
      diet={
        <p>
          Adult carpenter bees feed on nectar and pollen from flowers; despite their name, they do not eat wood. Pollen also serves as the protein-rich provision that females pack into nest cells to feed developing larvae, typically forming a pollen-and-nectar &quot;loaf&quot; on which an egg is laid. Many <em>Xylocopa</em> species are generalists, visiting a wide variety of flowering plants across a long seasonal activity period. When foraging at flowers with deep, tubular corollas that are too long for them to reach into normally, some carpenter bees instead cut a slit near the base of the flower and drink nectar directly — a behavior known as nectar robbing, which can let them feed without contacting the flower&#39;s pollen-bearing or pollen-receiving structures.
        </p>
      }
      behavior={
        <>
          <p>
            Carpenter bees range from solitary to loosely social: in some species a single female builds and provisions a nest, while in others a small group of related females (often two to five) may share a common nest entrance, with each female tending her own branch of tunnels. Females excavate nests by chewing into wood with strong mandibles, typically boring a round entrance hole and then tunneling along the grain; nests can be reused and extended over multiple years. Males of many species are conspicuous for hovering and patrolling near nest sites or flowers, sometimes darting at passing animals or people; this territorial display can seem alarming but is harmless, because male carpenter bees lack a stinger entirely. Carpenter bees are also noted for tolerating high temperatures and for being active under relatively low light, extending their foraging window compared with some other bees.
          </p>
          <p>
            As large, wide-ranging, and often generalist flower visitors with long activity seasons, carpenter bees are part of the broader community of wild pollinators that contribute to the reproduction of many flowering plants. Their buzz-pollination ability connects them ecologically to plants whose pollen is released mainly by vibration. Beyond pollination, their nectar-robbing behavior can influence plant-pollinator interactions in more complex ways, and the abandoned tunnels they leave in wood may later be used by other insects. Carpenter bees are wild, free-living insects and are not domesticated or managed the way honey bees often are; they represent one strand of the diverse native bee fauna that supports flowering-plant ecosystems. Broad, sweeping claims about their importance everywhere should be avoided, since their ecological roles differ among species and settings.
          </p>
        </>
      }
      humanInteraction={
        <p>
          Carpenter bees are often noticed because of their large size and the loud, hovering flight of males near nest sites, but this behavior is not dangerous: male carpenter bees cannot sting at all, and females, though capable of stinging, rarely do so unless directly handled or threatened. Because they sometimes nest in wooden structures, carpenter bees can occasionally be a property concern, but this profile does not provide control, removal, deterrent, or treatment advice — questions about wood damage or unwanted nesting are best directed to qualified local pest-management or wildlife professionals. Likewise, any concern about a sting or an allergic reaction should be directed to a qualified medical professional. Observed calmly from a respectful distance, carpenter bees are generally harmless and interesting to watch as they forage.
        </p>
      }
      extraSections={[
        {
          heading: "Pollination role",
          body: (
            <p>
              Carpenter bees are frequent flower visitors and can act as pollinators of some plants, but their effectiveness varies by species, plant, and region, and not every visit transfers pollen. Several <em>Xylocopa</em> species are capable of buzz pollination (also called sonication), in which the bee grips a flower&#39;s anthers and rapidly vibrates its flight muscles to dislodge pollen that is otherwise held tightly inside — a service relevant to certain crops such as eggplant and tomato and to other plants with poricidal anthers. Extension and forestry sources describe carpenter bees as effective visitors of open-faced flowers and some crops, while also noting that they can be poor pollinators or even non-pollinators of long, tubular flowers, where they may &quot;rob&quot; nectar through slits rather than entering the flower. In short, carpenter bees are genuinely useful pollinators of some plants, but their role should not be overstated or assumed to be the same for every flower they visit.
            </p>
          ),
        },
        {
          heading: "Conservation context",
          body: (
            <p>
              There is no single conservation status that applies to all carpenter bees, because <em>Xylocopa</em> is a large genus containing many species with different ranges and population situations. Most have not been individually assessed, and broad statements about whether &quot;carpenter bees&quot; as a whole are increasing or declining are not well supported. As wild pollinators, individual species can be affected by factors such as habitat change and loss of nesting sites, but specific trends vary and should not be generalized. For the current conservation status of any particular species, consult the IUCN Red List or relevant regional authorities, and treat any status as subject to change as new assessments are made.
            </p>
          ),
        },
      ]}
      faqs={[
        {
          question: "Do carpenter bees eat wood?",
          answer:
            "No. Despite the name, carpenter bees do not eat wood. Females bore into wood only to excavate nest tunnels, using their strong mandibles. The bees themselves feed on nectar and pollen from flowers, and pollen is also stored in the nest to feed their developing larvae.",
        },
        {
          question: "Can carpenter bees sting?",
          answer:
            "Male carpenter bees cannot sting at all, even though they may hover and dart near people in a territorial display. Females are able to sting but very rarely do so unless they are directly handled or threatened. For any concern about a sting or allergic reaction, consult a qualified medical professional.",
        },
        {
          question: "Are carpenter bees good pollinators?",
          answer:
            "Carpenter bees can be effective pollinators of some plants, and several species perform buzz pollination, vibrating flowers to release pollen for crops such as eggplant and tomato. However, their role varies by species and plant, and not every flower visit results in pollination — on some long, tubular flowers they instead \"rob\" nectar through slits without pollinating.",
        },
        {
          question: "How are carpenter bees different from bumble bees?",
          answer:
            "Carpenter bees (genus Xylocopa) and bumble bees (genus Bombus) look similar in size, but carpenter bees usually have a shiny, mostly hairless abdomen, while bumble bees are fuzzy and densely hairy all over. They also differ in nesting: carpenter bees tunnel into wood, whereas bumble bees typically nest in cavities such as old rodent burrows or grass.",
        },
      ]}
      quickFacts={[
        { label: "Scientific group", value: "Genus Xylocopa (large carpenter bees), family Apidae" },
        { label: "Pollinator group", value: "Bee" },
        { label: "Pollination role", value: "Can act as a pollinator of some plants; several species buzz-pollinate, but effectiveness varies and some rob nectar" },
        { label: "Range", value: "Worldwide except Antarctica, with greatest diversity in the tropics; varies by species" },
        { label: "Diet / feeding", value: "Nectar and pollen from flowers; does not eat wood (wood is excavated only for nesting)" },
        { label: "Conservation note", value: "No single status for the whole genus; most species unassessed — consult the IUCN Red List for any specific species; status can change" },
      ]}
      relatedLinks={[
        { label: "Pollinators", href: "/wildlife/pollinators", description: "Bees, butterflies, birds, bats, flies & beetles" },
        { label: "Bee", href: "/animals/bee", description: "Bees as a group" },
        { label: "Bumblebee", href: "/animals/bumblebee", description: "Another robust bee" },
        { label: "Leafcutter Bee", href: "/animals/leafcutter-bee", description: "A solitary bee" },
        { label: "Insects & Invertebrates", href: "/animal-encyclopedia/insects" },
      ]}
    />
  );
}
