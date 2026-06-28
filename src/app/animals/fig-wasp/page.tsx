import type { Metadata } from "next";
import AnimalProfileLayout from "@/components/AnimalProfileLayout";
import { ANIMAL_SOURCES } from "@/lib/educational/animal-sources";
import { getAnimalGalleryImages, getAnimalImage, getAnimalOgImage } from "@/lib/images/animal-images";
import { buildArticleMetadata } from "@/lib/metadata";

const PATH = "/animals/fig-wasp";
const TITLE = "Fig Wasp: Tiny Pollinators of Fig Trees";
const DESC =
  "Fig wasps (family Agaonidae) are tiny insects locked in an obligate mutualism with fig trees, pollinating figs while their larvae develop inside them.";

export const metadata: Metadata = buildArticleMetadata({
  title: TITLE,
  description: DESC,
  path: PATH,
  publishedTime: "2026-06-28",
  modifiedTime: "2026-06-28",
  ogImage: getAnimalOgImage("fig-wasp"),
});

export default function FigWaspPage() {
  return (
    <AnimalProfileLayout
      commonName="Fig Wasp"
      scientificName="Family Agaonidae"
      pageTitle={TITLE}
      description={DESC}
      path={PATH}
      parentCategory="Insects"
      parentCategoryHref="/animal-encyclopedia/insects"
      tags={["Wasp","Pollinator","Mutualism"]}
      image={getAnimalImage("fig-wasp") ?? undefined}
      galleryImages={getAnimalGalleryImages("fig-wasp")}
      sources={ANIMAL_SOURCES["fig-wasp"]}
      publishedDate="2026-06-28"
      modifiedDate="2026-06-28"
      overview={
        <>
          <p>
            Fig wasps in the family Agaonidae are minute insects, often only a couple of millimetres long, that are bound to fig trees (genus <em>Ficus</em>) in one of biology&#39;s most celebrated examples of an obligate mutualism. The wasps pollinate the trees&#39; unusual enclosed flowers, and in return the trees provide a protected place for the wasps&#39; larvae to develop. Neither partner can complete its life cycle without the other.
          </p>
          <p>
            What looks like a fig fruit is actually a hollow, fleshy structure called a syconium, lined on the inside with many tiny flowers. Because these flowers are sealed inside, they cannot be pollinated by wind or by ordinary flower visitors. Pollinating fig wasps are among the very few animals adapted to enter this chamber, which makes their role unusually specific and well documented.
          </p>
          <p>
            The relationship is also strikingly specialized: many fig species are pollinated chiefly by their own particular species of agaonid wasp, a pattern researchers often describe as close to one-to-one, although exceptions and more complex arrangements are increasingly recognized. This profile focuses on the pollinating fig wasps of family Agaonidae and does not generalize to all wasps or to all figs.
          </p>
          <h3>Taxonomy and animal group</h3>
          <p>
            Pollinating fig wasps belong to the family Agaonidae, within the superfamily Chalcidoidea (the chalcid wasps) of the order Hymenoptera, which also includes bees, ants, and other wasps. The term &quot;fig wasp&quot; is sometimes used loosely for the wider community of tiny wasps that live in and around figs, but only the agaonids are the true pollinators; many other small wasps associated with figs belong to different families and are non-pollinating, sometimes acting as gall-formers or parasitoids. Within Agaonidae there are numerous genera (for example <em>Agaon</em>, <em>Blastophaga</em>, <em>Ceratosolen</em>, and <em>Pleistodontes</em>), and individual fig species are frequently associated with their own particular wasp species. Because the taxonomy of these insects is still being revised and many lineages are tiny and hard to tell apart, identification to species generally requires specialist expertise.
          </p>
          <h3>Appearance and recognition</h3>
          <p>
            Fig wasps are extremely small, with adults of many species measuring roughly 1 to 2 millimetres long, and they are sexually dimorphic to a remarkable degree. Females are typically winged, dark, and ant-like, with bodies and mouthparts modified for squeezing into a fig. Their heads and forelegs often bear specialized structures that help them push through the tight entrance of the syconium, and many species carry pollen in dedicated pockets or pollen-holding hairs. Males of the pollinating species usually look very different: they are often wingless, pale, and blind or nearly so, with bodies adapted for life entirely inside the fig rather than for flight. This dimorphism reflects the very different roles the two sexes play in the life cycle.
          </p>
        </>
      }
      habitat={
        <p>
          Fig trees (<em>Ficus</em>) are a large and diverse genus found across many warm regions of the world, and where suitable fig species grow, their associated pollinating wasps occur with them. As a group, figs and their fig wasps are especially diverse in tropical and subtropical areas, including parts of Asia, Africa, Australasia, and the Americas, and some figs and their wasps extend into warm-temperate zones. Because the wasps depend on specific host figs, their distribution is tied closely to that of their host trees rather than to a single fixed region. This profile does not assign a precise native or introduced range to the family as a whole; for any particular fig and its wasp, the established range should be checked against regional botanical and entomological sources, since fig species have sometimes been moved well beyond their original ranges by people.
        </p>
      }
      diet={
        <p>
          The feeding ecology of fig wasps is closely tied to the fig itself. Developing larvae feed inside specialized flowers (galled ovules) within the syconium, consuming tissue that the fig effectively provides as part of the mutualism. Adult pollinating females are short-lived and are primarily occupied with dispersal, entering a new fig, pollinating, and laying eggs rather than with extended feeding; adults of many species do not feed substantially as free-flying insects. This is quite different from nectar-feeding pollinators such as bees, butterflies, or nectar-feeding birds, and it underscores that the fig wasp&#39;s relationship with its food plant is developmental and reproductive rather than a matter of visiting open flowers for nectar.
        </p>
      }
      behavior={
        <>
          <p>
            The fig wasp life cycle is intimately choreographed with the fig&#39;s development. A receptive fig releases cues that attract pollen-carrying females, which then force their way inside; this entry is often a one-way trip, and the female pollinates flowers and lays eggs in some of them before dying within the fig. Her larvae develop inside galled flowers, and when the new generation matures, wingless males typically emerge first, mate with females (sometimes before the females have fully emerged), and in many species chew exit tunnels through the fig wall. The newly mated, winged females gather pollen, often into specialized structures, leave through these tunnels, and fly off to find another receptive fig of the right species, beginning the cycle again. The timing of fig development and wasp emergence is closely synchronized, and because adult wasps are so short-lived, populations depend on a more or less continuous supply of receptive figs in the surrounding area.
          </p>
          <p>
            Beyond pollinating their host trees, fig wasps sit at the center of an ecological system of considerable importance. Figs are widely regarded by ecologists as keystone resources in many tropical and subtropical communities because different fig species can fruit at various times of year, providing food for a wide range of birds, mammals, and other animals when other fruits are scarce. Since fig seed production depends on the pollinating wasps, the wasps indirectly help sustain this broader web of fruit-eating wildlife. The fig also hosts a small community of other organisms, including non-pollinating wasps and their parasitoids, making each fig a tiny ecosystem. These ecological roles are well supported in the scientific literature for figs as a group, though the strength of any given interaction varies by species and region.
          </p>
        </>
      }
      humanInteraction={
        <p>
          Fig wasps are harmless to people. They are tiny, do not sting in any way that affects humans, and are not pests of homes or gardens; most people never notice them even when eating cultivated figs. A common question is whether figs &quot;contain wasps.&quot; In commercial fig production, many varieties are grown without wasp pollination, and where pollinating wasps are involved, an enzyme in ripening figs (ficin) breaks down the small bodies of wasps that remain inside, so what is eaten is fig tissue and seeds rather than recognizable insects. This profile offers general educational information only and does not provide medical, allergy, pest-control, or handling advice; anyone with health concerns about insects or foods should consult a qualified medical professional, and questions about insects in a commercial or agricultural setting are best directed to local agricultural or extension authorities.
        </p>
      }
      extraSections={[
        {
          heading: "Pollination role",
          body: (
            <p>
              The pollinating role of agaonid fig wasps is unusually well established and is considered an obligate mutualism: in monoecious figs and in the seed-producing trees of dioecious figs, the figs generally cannot set seed without these wasps, and the wasps cannot reproduce without the figs. A pollen-bearing female enters a receptive fig through a narrow opening (the ostiole), often losing her wings and parts of her antennae in the process, and pollinates the tiny internal flowers either actively (deliberately placing pollen she carried from her natal fig) or passively, depending on the species. Because this interaction is highly specific, it is one of the clearest cases in which flower-visiting reliably results in effective pollination, in contrast to many generalist pollinators where not every visit transfers pollen. Even so, the details vary among fig and wasp species, some figs are associated with more than one wasp species, and non-pollinating fig-associated wasps can exploit the system without pollinating, so the role of any particular species is best confirmed from specific studies rather than assumed.
            </p>
          ),
        },
        {
          heading: "Conservation context",
          body: (
            <p>
              There is no single conservation status that applies to all fig wasps; Agaonidae is a large family, most of whose species have not been individually assessed by the IUCN, and assigning one category to the whole group would be misleading. Because each pollinating wasp depends on its particular host fig, the fate of a wasp species is tightly linked to that of its fig, and ecologists have noted that the breakdown of these specific partnerships, for example through habitat loss or climatic stress that disrupts the synchrony between fig fruiting and wasp emergence, is a concern worth careful study. Any statement about the status or population trend of a specific fig or fig wasp should be treated as changeable and checked against current, authoritative sources such as the IUCN Red List and the primary scientific literature rather than assumed from the group as a whole.
            </p>
          ),
        },
      ]}
      faqs={[
        {
          question: "Are fig wasps the only insects that can pollinate figs?",
          answer:
            "For most fig species, pollination is carried out by particular tiny wasps in the family Agaonidae, because the flowers are sealed inside the fig and only these specialized wasps are adapted to enter. The relationship is widely described as an obligate mutualism, though some figs are associated with more than one wasp species, and the exact arrangement varies. Many cultivated figs are also grown in ways that do not require wasp pollination.",
        },
        {
          question: "Do I eat wasps when I eat a fig?",
          answer:
            "Generally no. Many commercial fig varieties are produced without wasp pollination. Where pollinating wasps are involved, the small wasps that remain inside are broken down by a natural enzyme (ficin) as the fig ripens, so an eaten fig consists of fig tissue and seeds rather than recognizable insects. This is general information, not dietary or medical advice.",
        },
        {
          question: "Can fig wasps sting or harm people?",
          answer:
            "Fig wasps are tiny and harmless to humans; they do not sting people and are not household or garden pests. They spend almost their entire lives in and around figs. This profile does not provide medical or pest-control guidance, and any health concern about insects should be directed to a qualified professional.",
        },
        {
          question: "Why is the fig and fig wasp relationship called a mutualism?",
          answer:
            "Each partner depends on the other: the fig cannot set seed without the wasp's pollination, and the wasp cannot reproduce without developing inside the fig. Because neither can complete its life cycle alone, biologists describe the partnership as an obligate mutualism and study it as a classic example of tightly coupled, often species-specific coevolution.",
        },
      ]}
      quickFacts={[
        { label: "Scientific group", value: "Family Agaonidae (order Hymenoptera)" },
        { label: "Pollinator group", value: "Wasp (pollinating fig wasp)" },
        { label: "Pollination role", value: "Obligate, often species-specific pollinators of fig trees (Ficus); well documented but varies by species" },
        { label: "Range", value: "Wherever their host fig trees grow, especially tropical and subtropical regions; tied to host distribution" },
        { label: "Diet / feeding", value: "Larvae develop inside specialized fig flowers; short-lived adults feed little" },
        { label: "Conservation note", value: "No single status for the family; mostly unassessed. Check the IUCN Red List for specific species (changeable)" },
      ]}
      relatedLinks={[
        { label: "Pollinators", href: "/wildlife/pollinators", description: "Bees, butterflies, birds, bats, flies & beetles" },
        { label: "Wasp", href: "/animals/wasp", description: "Wasps as a group" },
        { label: "Pollen Wasp", href: "/animals/pollen-wasp", description: "Another flower-visiting wasp" },
        { label: "Bee", href: "/animals/bee", description: "Another pollinator" },
        { label: "Insects & Invertebrates", href: "/animal-encyclopedia/insects" },
      ]}
    />
  );
}
