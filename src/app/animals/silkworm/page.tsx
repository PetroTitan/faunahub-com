import type { Metadata } from "next";
import AnimalProfileLayout from "@/components/AnimalProfileLayout";
import { ANIMAL_SOURCES } from "@/lib/educational/animal-sources";
import { getAnimalGalleryImages, getAnimalImage, getAnimalOgImage } from "@/lib/images/animal-images";
import { buildArticleMetadata } from "@/lib/metadata";

const PATH = "/animals/silkworm";
const TITLE = "Silkworm (Bombyx mori): The Domesticated Silk Moth";
const DESC =
  "Learn about the silkworm (Bombyx mori), the fully domesticated larva of the silk moth, its mulberry diet, cocoon-spinning, and the history of sericulture.";

export const metadata: Metadata = buildArticleMetadata({
  title: TITLE,
  description: DESC,
  path: PATH,
  publishedTime: "2026-06-27",
  modifiedTime: "2026-06-27",
  ogImage: getAnimalOgImage("silkworm"),
});

export default function SilkwormPage() {
  return (
    <AnimalProfileLayout
      commonName="Silkworm"
      scientificName="Bombyx mori"
      pageTitle={TITLE}
      description={DESC}
      path={PATH}
      parentCategory="Insects & Invertebrates"
      parentCategoryHref="/animal-encyclopedia/insects"
      tags={["Insect","Moth (larva)","Domesticated"]}
      image={getAnimalImage("silkworm") ?? undefined}
      galleryImages={getAnimalGalleryImages("silkworm")}
      sources={ANIMAL_SOURCES["silkworm"]}
      publishedDate="2026-06-27"
      modifiedDate="2026-06-27"
      overview={
        <>
          <p>
            The silkworm (<em>Bombyx mori</em>) is the caterpillar, or larva, of the domestic silk moth, an insect that has been fully domesticated over thousands of years for the production of silk. Through the practice known as sericulture, the silkworm spins a cocoon made of a single long thread, which is reeled to produce silk fibre. Because of this long history of human cultivation, <em>Bombyx mori</em> is no longer found living in the wild and depends entirely on human care to complete its life cycle.
          </p>
          <p>
            The species descends from the wild silk moth <em>Bombyx mandarina</em>, from which it has been selectively reared for many generations. The larva feeds almost exclusively on mulberry leaves, while the adult moth is pale, flightless, and has a reduced ability to feed. Sericulture began in ancient China and became closely tied to long-distance trade along the Silk Road, making the silkworm one of the most historically significant of all domesticated insects.
          </p>
          <p>
            This is an educational profile about the silkworm as an animal and about the history of its domestication, not a rearing or how-to guide. Details about distribution, classification, and conservation framing should always be checked against authoritative sources such as the IUCN Red List, Animal Diversity Web, and reputable museum and university zoology references.
          </p>
          <h3>Taxonomy and animal group</h3>
          <p>
            The silkworm is the larval stage of <em>Bombyx mori</em>, a moth in the family Bombycidae within the order Lepidoptera. It is a fully domesticated insect, the product of thousands of years of selective rearing from its wild relative <em>Bombyx mandarina</em>. As a domesticate, <em>Bombyx mori</em> differs from its wild ancestor in several respects, including the adult moth&#39;s loss of effective flight, and it is one of the few animals so thoroughly shaped by human cultivation that it no longer occurs as a free-living wild population.
          </p>
          <h3>Appearance and recognition</h3>
          <p>
            The silkworm larva is a pale, soft-bodied caterpillar with a segmented body and a small horn-like projection near the rear, typical of many moth larvae. As it grows it feeds and moults through several stages before spinning its cocoon. The cocoon is formed from a single continuous silk thread that the larva produces and wraps around itself. The adult that emerges is a pale, stout-bodied moth with reduced wings; it is flightless and has a diminished ability to feed compared with many wild moths.
          </p>
        </>
      }
      habitat={
        <p>
          Because the silkworm is a fully domesticated insect, it does not have a natural wild habitat and is not found living independently in the wild. It exists today only under human care in sericulture, which has historically been centred in parts of Asia, beginning in ancient China and later spreading more widely. Any presence of <em>Bombyx mori</em> reflects rearing by people rather than a self-sustaining wild range, and its wild ancestor <em>Bombyx mandarina</em> is a separate species.
        </p>
      }
      diet={
        <p>
          The silkworm larva feeds almost exclusively on the leaves of mulberry, and this specialised diet is central to its development and to the quality of the silk it produces. The larva eats continuously during its feeding stages, growing rapidly before it spins its cocoon. The adult moth, by contrast, has a greatly reduced ability to feed, which is one of the features associated with the species&#39; long history of domestication.
        </p>
      }
      behavior={
        <>
          <p>
            The defining behaviour of the silkworm is the spinning of its cocoon, in which the larva produces a single long, continuous strand of silk and wraps it around its body to form a protective casing during its transformation. This behaviour is the basis of sericulture. The adult moth is flightless and short-lived, with behaviour largely centred on reproduction. Throughout its life the silkworm depends on human management for food and shelter, reflecting its status as a domesticated animal.
          </p>
          <p>
            As a fully domesticated insect, the silkworm does not occupy an ecological niche in the wild and is not part of a natural food web in the way free-living species are. Its closest ecological connection is to its wild ancestor <em>Bombyx mandarina</em> and to the mulberry plants on which it feeds. In the context of Asia, the silkworm&#39;s significance is primarily historical and economic rather than ecological, having shaped agriculture, craft, and trade across regions where sericulture took root.
          </p>
        </>
      }
      humanInteraction={
        <p>
          The silkworm has one of the longest and most influential relationships with people of any insect. Sericulture, the rearing of silkworms for silk, began in ancient China and became closely linked to the trade routes of the Silk Road, carrying silk and cultural exchange across Asia and beyond. The species is valued for the fine, continuous fibre of its cocoon, and its domestication is studied as a remarkable example of how humans have shaped an animal over millennia. This profile describes that history rather than offering rearing instructions; readers interested in sericulture or insect husbandry should consult dedicated agricultural and educational resources.
        </p>
      }
      faqs={[
        {
          question: "Is the silkworm found in the wild?",
          answer:
            "No. The silkworm (Bombyx mori) is a fully domesticated insect that has been reared by people for thousands of years and is no longer found living in the wild. It descends from a separate wild species, Bombyx mandarina, and depends entirely on human care.",
        },
        {
          question: "What do silkworms eat?",
          answer:
            "The silkworm larva feeds almost exclusively on mulberry leaves. This specialised diet supports its rapid growth before it spins its cocoon. The adult moth has a greatly reduced ability to feed.",
        },
        {
          question: "How is silk produced from silkworms?",
          answer:
            "The silkworm larva spins a cocoon made from a single long, continuous silk thread, and this thread is reeled to produce silk fibre. The practice of rearing silkworms for silk is known as sericulture. This profile is educational and not a rearing guide.",
        },
        {
          question: "Where did silk production begin?",
          answer:
            "Sericulture began in ancient China and became closely connected with long-distance trade along the Silk Road. Over time the practice spread more widely across parts of Asia and beyond.",
        },
      ]}
      quickFacts={[
        { label: "Group", value: "Moth larva (domesticated insect)" },
        { label: "Higher classification", value: "Order Lepidoptera, family Bombycidae" },
        { label: "Diet", value: "Larva feeds almost exclusively on mulberry leaves" },
        { label: "Notable trait", value: "Spins a cocoon of a single long silk thread" },
        { label: "Habitat", value: "No wild habitat; reared under human care in sericulture" },
        { label: "Asia distribution", value: "Domesticated; sericulture began in ancient China" },
        { label: "Human interaction", value: "Long-domesticated for silk; central to Silk Road trade history" },
        { label: "Conservation status", value: "Domesticated species; not assessed as wild fauna" },
      ]}
      relatedLinks={[
        { label: "Moth Profile", href: "/animals/moth", description: "Moths more broadly" },
        { label: "Butterfly Profile", href: "/animals/butterfly", description: "A fellow lepidopteran" },
        { label: "Bee Profile", href: "/animals/bee", description: "Another useful insect" },
        { label: "Asian fauna", href: "/fauna/continents/asia", description: "Animals of Asia" },
        { label: "Insects & Invertebrates", href: "/animal-encyclopedia/insects" },
      ]}
    />
  );
}
