import type { Metadata } from "next";
import AnimalProfileLayout from "@/components/AnimalProfileLayout";
import { ANIMAL_SOURCES } from "@/lib/educational/animal-sources";
import { getAnimalGalleryImages, getAnimalImage, getAnimalOgImage } from "@/lib/images/animal-images";
import { buildArticleMetadata } from "@/lib/metadata";

const PATH = "/animals/hawk-moth";
const TITLE = "Hawk Moth (Sphingidae): Nocturnal Pollinator";
const DESC =
  "Hawk moths (family Sphingidae) are fast, hovering moths with long tongues. Learn how some act as important nocturnal pollinators of long-tubed flowers.";

export const metadata: Metadata = buildArticleMetadata({
  title: TITLE,
  description: DESC,
  path: PATH,
  publishedTime: "2026-06-28",
  modifiedTime: "2026-06-28",
  ogImage: getAnimalOgImage("hawk-moth"),
});

export default function HawkMothPage() {
  return (
    <AnimalProfileLayout
      commonName="Hawk Moth"
      scientificName="Family Sphingidae"
      pageTitle={TITLE}
      description={DESC}
      path={PATH}
      parentCategory="Insects"
      parentCategoryHref="/animal-encyclopedia/insects"
      tags={["Moth","Pollinator","Nocturnal"]}
      image={getAnimalImage("hawk-moth") ?? undefined}
      galleryImages={getAnimalGalleryImages("hawk-moth")}
      sources={ANIMAL_SOURCES["hawk-moth"]}
      publishedDate="2026-06-28"
      modifiedDate="2026-06-28"
      overview={
        <>
          <p>
            Hawk moths make up the family Sphingidae, a worldwide group of roughly 1,400 described species sometimes called sphinx moths or hummingbird moths. They are among the most powerful and agile fliers in the insect world: many can hover in place at a flower, dart sideways, and beat their wings fast enough to produce an audible hum. Their streamlined bodies, narrow forewings, and rapid flight have led to repeated comparisons with hummingbirds, even though the resemblance is a case of convergent evolution rather than a close relationship.
          </p>
          <p>
            A defining feature of many hawk moths is a very long, coiled proboscis (a tube-like mouthpart) that can reach deep into flowers other insects cannot exploit. While hovering, some species probe long, narrow-tubed blossoms for nectar and, in doing so, can transfer pollen between flowers. This combination of long reach and hovering flight links the family to one of the most famous predictions in evolutionary biology, in which Charles Darwin inferred that a Madagascan orchid with an extraordinarily long nectar spur must be pollinated by a moth with a matching tongue.
          </p>
          <p>
            It is important not to overstate the group, however. Hawk moths vary enormously in biology: many are active at dusk or at night, some fly by day, and not every species feeds as an adult at all. Their pollination role likewise varies by species, plant, and region, and a flower visit does not always result in effective pollination.
          </p>
          <h3>Taxonomy and animal group</h3>
          <p>
            Hawk moths form the family <em>Sphingidae</em> within the order Lepidoptera (butterflies and moths). The family is large and is divided into several subfamilies and many genera, including familiar names such as <em>Manduca</em> (sphinx moths, including the tomato and tobacco hornworm moths), <em>Hyles</em>, <em>Hemaris</em> (the day-flying clearwing or &quot;hummingbird&quot; hawk moths), <em>Agrius</em>, and <em>Xanthopan</em> (the Madagascan species tied to Darwin&#39;s orchid). Because Sphingidae is a whole family of many species rather than a single kind of animal, statements about appearance, behavior, feeding, and ecological role should be read as general tendencies with many exceptions, not as fixed rules for every member.
          </p>
          <h3>Appearance and recognition</h3>
          <p>
            Hawk moths are typically medium to large moths with thick, spindle-shaped (tapered) bodies and long, narrow, swept-back forewings built for fast, sustained flight. Wingspans range widely across the family, from a few centimetres in smaller species to well over 10 centimetres in the largest. Coloration is varied: many are cryptically patterned in browns, grays, and greens that help them rest unseen on bark or foliage by day, while others show bright pink, orange, or banded hind wings that flash in flight or when the moth is disturbed. A characteristic feature of many species is the long, coiled proboscis, which can be several times the length of the body in extreme cases and is kept rolled up beneath the head when not in use. The caterpillars (larvae) are often large and smooth, and many bear a curved spine or &quot;horn&quot; at the rear, which gives rise to the common name hornworm for some species.
          </p>
        </>
      }
      habitat={
        <p>
          As a family, Sphingidae is found on every continent except Antarctica, with the greatest diversity in tropical and subtropical regions and a smaller number of species reaching temperate zones. Hawk moths occupy a broad range of habitats, including forests, woodland edges, savannas, deserts, gardens, and farmland, wherever suitable larval host plants and nectar sources occur. Some species are strong migrants or long-distance dispersers and can appear far from where they developed. Because ranges differ greatly from species to species, this page does not assign a single native or introduced status to the family as a whole; details of where a particular hawk moth occurs, and whether it is native to a given area, should be checked against region-specific sources for that species.
        </p>
      }
      diet={
        <p>
          In many hawk moths, the adults feed on floral nectar, which they reach using the long coiled proboscis, often while hovering in front of a flower rather than landing on it. This high-energy diet fuels their rapid flight. Not all hawk moths feed as adults, however: in some species the mouthparts are reduced or non-functional, and these moths live only on energy reserves stored during the caterpillar stage. The larvae are plant feeders (herbivores) and can consume substantial amounts of foliage; different species specialize on different host plants, which is why some are known to gardeners and growers as hornworms on particular crops. Discussion of any management of larvae on plants is outside the scope of this educational profile and is best directed to local agricultural or horticultural authorities.
        </p>
      }
      behavior={
        <>
          <p>
            Hawk moths are best known for their flight: rapid wingbeats, the ability to hover and to fly backward or sideways, and in some species sustained long-distance movement. Activity timing varies across the family. Many species are nocturnal or crepuscular, becoming active around dusk and through the night, while others, such as the clearwing hawk moths, fly in full daylight and are frequently mistaken for small hummingbirds or large bees. By day, nocturnal species typically rest motionless and camouflaged on bark, leaves, or walls. The life cycle follows complete metamorphosis: egg, caterpillar (which grows through several stages and often pupates in soil or leaf litter), pupa, and winged adult. Some species overwinter or pass dry seasons as pupae, timing adult emergence to favourable conditions.
          </p>
          <p>
            Hawk moths participate in their ecosystems in several roles at once. As adults, the flower-visiting species can move pollen between plants and form part of the nighttime pollinator community, which complements the daytime work of bees, butterflies, and other visitors. As caterpillars, they are herbivores that feed on living plants and in turn serve as food for birds, bats, parasitoid wasps and flies, and other predators, linking plant growth to higher levels of the food web. Adult hawk moths are themselves prey for night-active hunters such as bats and nightjars, and the family&#39;s strong flight and camouflage are widely interpreted as adaptations to this predation pressure. The relative importance of any of these roles depends heavily on the species and the local community, so broad ecosystem claims about the family as a whole should be treated cautiously.
          </p>
        </>
      }
      humanInteraction={
        <p>
          Hawk moths are harmless to people in the ordinary sense: as adults they do not sting, and they are not aggressive. They are often noticed when a large moth hovers at flowers at dusk or is drawn to outdoor lights at night, and day-flying clearwing species are commonly admired in gardens and mistaken for tiny hummingbirds. This profile is educational and does not provide handling, capture, removal, or pest-control guidance. If a hawk moth or its caterpillars raise concerns on crops or property, contact local agricultural extension services or qualified professionals, and direct any health-related question to a qualified medical professional.
        </p>
      }
      extraSections={[
        {
          heading: "Pollination role",
          body: (
            <p>
              Hawk moths are widely regarded as important nocturnal and crepuscular (dusk-active) pollinators of certain plants, and their pollination biology is unusually well studied for an insect group. Their long proboscis and hovering flight allow some species to access nectar in long, narrow-tubed flowers that many other visitors cannot reach, and a set of pale, strongly scented, night-opening, long-tubed flowers is often described as showing a &quot;hawk moth pollination syndrome.&quot; The most celebrated example is the link between the long-spurred Madagascan star orchid (<em>Angraecum sesquipedale</em>) and a long-tongued hawk moth, an interaction Darwin famously predicted and that was later confirmed. That said, the role varies by species and region: not every hawk moth visits flowers, not every flower visit transfers pollen, and a moth seen at a blossom is not automatically an effective pollinator of it. For any given plant, the most reliable pollinators are best established through direct observation and study rather than assumed from the moth&#39;s anatomy alone.
            </p>
          ),
        },
        {
          heading: "Conservation context",
          body: (
            <p>
              Because Sphingidae is a large family of many species, no single conservation status applies to the group as a whole. Most insect species, including many hawk moths, have not been formally assessed at the species level, and where assessments do exist they can change over time as new information becomes available. Broad pressures known to affect moths and other insects include habitat loss and fragmentation, changes in land use, and artificial light at night, but the degree to which any of these affects a particular hawk moth depends on the species and region. For the current status of a specific hawk moth, consult the IUCN Red List and regional conservation authorities rather than relying on a single family-wide label.
            </p>
          ),
        },
      ]}
      faqs={[
        {
          question: "Are hawk moths the same as hummingbirds?",
          answer:
            "No. Hawk moths are insects in the family Sphingidae, while hummingbirds are birds found only in the Americas. Some hawk moths hover at flowers and beat their wings rapidly, so they look and sound similar, but the resemblance is convergent evolution rather than a close relationship. Day-flying clearwing hawk moths are the ones most often mistaken for tiny hummingbirds.",
        },
        {
          question: "Do all hawk moths pollinate flowers?",
          answer:
            "No. Many hawk moths visit flowers for nectar and can act as pollinators of certain plants, especially long-tubed, night-blooming flowers, but the role varies by species and region. Some hawk moths do not feed as adults at all, and even among flower visitors, a single visit does not always transfer pollen. Whether a given species effectively pollinates a particular plant is best confirmed by direct study.",
        },
        {
          question: "What is the connection between hawk moths and Darwin's orchid?",
          answer:
            "Charles Darwin examined a Madagascan orchid (Angraecum sesquipedale) with an unusually long nectar spur and predicted that a moth with an equally long tongue must pollinate it. A long-tongued hawk moth fitting that prediction was later identified, making it one of the most famous examples of a specialized flower and pollinator matched in form.",
        },
        {
          question: "Are hawk moths dangerous to people?",
          answer:
            "Adult hawk moths do not sting and are not aggressive toward people; they are mainly noticed hovering at flowers or coming to lights at night. This page does not offer handling or pest-control advice. For concerns about caterpillars on plants, contact local agricultural or extension services, and direct any medical question to a qualified professional.",
        },
      ]}
      quickFacts={[
        { label: "Scientific group", value: "Family Sphingidae (hawk or sphinx moths), order Lepidoptera" },
        { label: "Pollinator group", value: "Moth (mostly nocturnal/crepuscular; some day-flying)" },
        { label: "Pollination role", value: "Some species are important pollinators of long-tubed flowers; role varies by species and region, and not every flower visit pollinates" },
        { label: "Range", value: "Worldwide except Antarctica; greatest diversity in the tropics (varies by species)" },
        { label: "Diet / feeding", value: "Many adults drink floral nectar via a long proboscis; some adults do not feed; larvae are plant feeders" },
        { label: "Conservation note", value: "No single status for the whole family; most species unassessed and status can change — consult the IUCN Red List for a given species" },
      ]}
      relatedLinks={[
        { label: "Pollinators", href: "/wildlife/pollinators", description: "Bees, butterflies, birds, bats, flies & beetles" },
        { label: "Moth", href: "/animals/moth", description: "Moths as a group" },
        { label: "Hummingbird Hawk-moth", href: "/animals/hummingbird-hawk-moth", description: "A day-flying hawk moth" },
        { label: "Butterfly", href: "/animals/butterfly", description: "Another Lepidopteran" },
        { label: "Insects & Invertebrates", href: "/animal-encyclopedia/insects" },
      ]}
    />
  );
}
