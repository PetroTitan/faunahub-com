import type { Metadata } from "next";
import AnimalProfileLayout from "@/components/AnimalProfileLayout";
import { ANIMAL_SOURCES } from "@/lib/educational/animal-sources";
import { getAnimalGalleryImages, getAnimalImage, getAnimalOgImage } from "@/lib/images/animal-images";
import { buildArticleMetadata } from "@/lib/metadata";

const PATH = "/animals/aphid";
const TITLE = "Aphid — Profile, the Tiny Sap-Sucker That Clones Itself & Farms with Ants";
const DESC =
  "Explore aphids (family Aphididae): tiny sap-sucking insects that reproduce explosively by cloning, produce sugary honeydew 'milked' by ants, and rank among the top garden pests.";

export const metadata: Metadata = buildArticleMetadata({
  title: TITLE,
  description: DESC,
  path: PATH,
  publishedTime: "2026-06-22",
  modifiedTime: "2026-06-22",
  ogImage: getAnimalOgImage("aphid"),
});

export default function AphidPage() {
  return (
    <AnimalProfileLayout
      commonName="Aphid"
      scientificName="family Aphididae"
      pageTitle={TITLE}
      description={DESC}
      path={PATH}
      parentCategory="Insects & Invertebrates"
      parentCategoryHref="/animal-encyclopedia/insects"
      tags={["Insect", "Sap-sucker", "Garden"]}
      image={getAnimalImage("aphid") ?? undefined}
      galleryImages={getAnimalGalleryImages("aphid")}
      sources={ANIMAL_SOURCES.aphid}
      publishedDate="2026-06-22"
      modifiedDate="2026-06-22"
      overview={
        <>
          <p>
            Aphids (family Aphididae) are tiny, soft-bodied, pear-shaped insects — often called
            greenfly or blackfly — that feed by sucking sap from plants. Usually only a few
            millimetres long and frequently green, black, or yellow, they cluster in dense colonies
            on stems, leaves, and buds. Individually almost harmless-looking, aphids are among the
            most significant insect pests in gardens and agriculture, thanks above all to their
            astonishing ability to multiply.
          </p>
          <p>
            Aphids can reproduce explosively by cloning themselves — females giving birth to live,
            already-pregnant young without mating — and they produce a sugary waste called honeydew
            that ants prize so highly that some ants &ldquo;farm&rdquo; aphids like livestock.
          </p>
          <p>
            <strong>Note:</strong> &ldquo;aphid&rdquo; covers a large family; details here describe
            the group broadly. Treat general statements as approximate and verify against
            authoritative sources.
          </p>
        </>
      }
      habitat={
        <p>
          Aphids are found worldwide wherever suitable plants grow — gardens, farmland, meadows,
          woodlands, and greenhouses. Different species specialise on different host plants, from
          crops and roses to trees and weeds, and they cluster on the tender, sap-rich parts:
          growing shoots, the undersides of leaves, flower buds, and sometimes roots.
        </p>
      }
      diet={
        <p>
          Aphids feed exclusively on plant sap, which they reach by piercing the plant with
          needle-like, straw-like mouthparts and tapping into its sugar-rich fluids. Because sap is
          so rich in sugar but poor in protein, aphids must process large amounts of it and excrete
          the excess sugar as a sticky, sweet liquid called honeydew. Heavy aphid feeding can weaken
          plants, distort growth, and — along with the honeydew and the sooty mould that grows on it
          — damage crops and ornamentals, and aphids can also spread plant viruses.
        </p>
      }
      behavior={
        <p>
          Aphids&apos; success comes from their remarkable reproduction. Through much of the growing
          season, females reproduce asexually, giving birth to live young that are clones of
          themselves — and those young can already contain developing daughters, so colonies build up
          with explosive speed. Many produce winged forms when crowded or when the host plant
          declines, allowing them to disperse to new plants, and some have complex life cycles that
          switch between host plants and include a sexual generation before winter. The honeydew they
          excrete underpins a famous partnership: ants tend and protect aphid colonies, defending
          them from predators and even moving them to fresh plants, in exchange for &ldquo;milking&rdquo;
          the sweet honeydew. Aphids are in turn the favourite prey of ladybugs, lacewing larvae,
          hoverfly larvae, and parasitic wasps.
        </p>
      }
      humanInteraction={
        <p>
          Aphids are major agricultural and garden pests, capable of damaging crops directly and by
          transmitting plant diseases, and they are a constant focus of pest management. However,
          they are also a cornerstone of food webs — feeding a host of beneficial predators — so
          gardeners are often encouraged to rely on natural enemies like ladybugs and lacewings, and
          on careful, targeted methods, rather than blanket spraying. They are harmless to people.
          Consult authoritative sources for details on specific species.
        </p>
      }
      faqs={[
        {
          question: "How do aphids multiply so fast?",
          answer:
            "For much of the year, female aphids reproduce asexually — giving birth to live young that are clones of themselves, without needing to mate. Remarkably, those developing young can already contain the beginnings of their own daughters, so generations 'telescope' together and a colony can build up extremely quickly. This explosive cloning is the main reason aphids become such serious pests.",
        },
        {
          question: "What is honeydew, and why do ants like it?",
          answer:
            "Honeydew is the sweet, sticky liquid aphids excrete. Because plant sap is loaded with sugar but low in protein, aphids take in far more sugar than they need and pass the excess out as honeydew. Ants love this sugary substance, and some 'farm' aphids — protecting them from predators and even moving them to fresh plants — in exchange for 'milking' the honeydew, much like keeping livestock.",
        },
        {
          question: "Why are aphids such bad garden pests?",
          answer:
            "Several reasons: they multiply explosively, they weaken plants by draining sap and can distort new growth, their honeydew fouls leaves and fuels sooty mould, and — importantly — they can spread plant viruses from one plant to another. Together these effects make aphids one of the most damaging groups of insects for crops and ornamentals.",
        },
        {
          question: "What eats aphids?",
          answer:
            "Lots of beneficial creatures — which is good news for gardeners. Ladybugs (and their larvae), lacewing larvae ('aphid lions'), hoverfly larvae, and tiny parasitic wasps all prey on or parasitise aphids. Encouraging these natural enemies is an effective, chemical-free way to keep aphid numbers in check.",
        },
      ]}
      quickFacts={[
        { label: "Group", value: "Family Aphididae (aphids)" },
        { label: "Also called", value: "Greenfly, blackfly" },
        { label: "Class", value: "Insecta" },
        { label: "Feeding", value: "Sucks plant sap (piercing mouthparts)" },
        { label: "Reproduction", value: "Explosive cloning (live-born clones)" },
        { label: "Byproduct", value: "Honeydew (ants 'farm' aphids for it)" },
        { label: "Status", value: "Major garden & crop pest" },
        { label: "Eaten by", value: "Ladybugs, lacewings, hoverflies, wasps" },
      ]}
      relatedLinks={[
        { label: "Ladybug Profile", href: "/animals/ladybug", description: "A top aphid predator" },
        { label: "Lacewing Profile", href: "/animals/lacewing", description: "Its larvae are 'aphid lions'" },
        { label: "Ant Profile", href: "/animals/ant", description: "Ants that farm aphids for honeydew" },
        { label: "Insects & Invertebrates", href: "/animal-encyclopedia/insects" },
        { label: "Invertebrates Taxonomy", href: "/animal-taxonomy/invertebrates" },
      ]}
    />
  );
}
