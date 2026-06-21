import type { Metadata } from "next";
import AnimalProfileLayout from "@/components/AnimalProfileLayout";
import { ANIMAL_SOURCES } from "@/lib/educational/animal-sources";
import { getAnimalGalleryImages, getAnimalImage, getAnimalOgImage } from "@/lib/images/animal-images";
import { buildArticleMetadata } from "@/lib/metadata";

const PATH = "/animals/wasp";
const TITLE = "Wasp — Profile, Stings, Pest Control & Pollination";
const DESC =
  "Explore wasps (order Hymenoptera): diverse insects from social yellowjackets to solitary species — feared for their sting, but vital predators of pests and useful pollinators.";

export const metadata: Metadata = buildArticleMetadata({
  title: TITLE,
  description: DESC,
  path: PATH,
  publishedTime: "2026-06-21",
  modifiedTime: "2026-06-21",
  ogImage: getAnimalOgImage("wasp"),
});

export default function WaspPage() {
  return (
    <AnimalProfileLayout
      commonName="Wasp"
      scientificName="e.g. Vespula vulgaris"
      pageTitle={TITLE}
      description={DESC}
      path={PATH}
      parentCategory="Insects & Invertebrates"
      parentCategoryHref="/animal-encyclopedia/insects"
      tags={["Insect", "Invertebrate", "Pollinator"]}
      image={getAnimalImage("wasp") ?? undefined}
      galleryImages={getAnimalGalleryImages("wasp")}
      sources={ANIMAL_SOURCES.wasp}
      publishedDate="2026-06-21"
      modifiedDate="2026-06-21"
      overview={
        <>
          <p>
            Wasps are a hugely diverse group of insects in the order Hymenoptera — the same
            order as bees and ants — ranging from familiar black-and-yellow social wasps to
            countless tiny, solitary species. The common wasp (<em>Vespula vulgaris</em>),
            shown here, is one of the well-known social &ldquo;yellowjackets,&rdquo; with a
            slender body, a narrow waist, and warning coloration. While wasps are best known —
            and often disliked — for their sting, they are also important and largely
            beneficial members of ecosystems.
          </p>
          <p>
            Most wasp species are actually small, solitary, and harmless to people; the social
            wasps that scavenge at picnics are just the most conspicuous part of an enormous,
            varied family.
          </p>
          <p>
            <strong>Note:</strong> &ldquo;wasp&rdquo; covers a vast range of species; details
            here lean on social wasps as a reference. Treat general statements as approximate
            and verify against authoritative sources.
          </p>
        </>
      }
      habitat={
        <p>
          Wasps are found almost worldwide, in habitats from forests, grasslands, and deserts
          to gardens and cities. Social wasps build paper nests — made from chewed wood fibre —
          in trees, shrubs, wall cavities, lofts, and underground, while solitary wasps nest in
          burrows, hollow stems, mud cells, or the bodies of host insects, depending on the
          species.
        </p>
      }
      diet={
        <p>
          Wasps have a two-part diet that shifts with their life stage. Adult social wasps feed
          largely on sugars — nectar, fruit juice, and sweet foods — while they hunt insects and
          spiders mainly to feed protein to their growing larvae. Many solitary wasps are
          parasitoids, laying eggs on or in other insects that their larvae then consume. This
          predatory and parasitic behaviour makes wasps powerful natural controllers of pests.
        </p>
      }
      behavior={
        <p>
          Social wasps live in colonies founded each year by a queen, with workers building the
          nest, foraging, and caring for young; the colony grows through summer and dies off by
          winter, leaving new queens to start again. Wasps can sting in defence — and, unlike
          honeybees, can sting repeatedly — which is why they are feared, but they generally
          sting only when threatened or when their nest is disturbed. As they visit flowers for
          nectar, wasps also pollinate many plants, and some plants (such as certain figs)
          depend entirely on specialised wasps.
        </p>
      }
      humanInteraction={
        <p>
          Wasps have a fearsome reputation because of their stings, which are painful and, for
          people with allergies, potentially serious — but they are also enormously useful,
          controlling vast numbers of pest insects and pollinating flowers. The best approach is
          to stay calm around them, avoid disturbing nests, and not swat at foraging wasps. They
          are a vital, if under-appreciated, part of healthy ecosystems. Consult authoritative
          sources for details.
        </p>
      }
      faqs={[
        {
          question: "Are wasps good for anything?",
          answer:
            "Yes — a great deal. Wasps are powerful natural pest controllers, hunting and parasitising huge numbers of insects (including many garden and crop pests) to feed their young. They also pollinate many flowers as they visit for nectar, and some plants, like certain figs, depend entirely on specialised wasps. Despite their reputation, wasps are largely beneficial.",
        },
        {
          question: "Why do wasps sting, and can they sting more than once?",
          answer:
            "Wasps sting mainly in defence — to protect themselves or their nest. Unlike honeybees, whose barbed sting is left behind, a wasp's smooth sting can be used repeatedly, so a disturbed wasp can sting several times. They usually only sting when threatened, so staying calm and not disturbing nests reduces the risk.",
        },
        {
          question: "Why are wasps such a nuisance in late summer?",
          answer:
            "In late summer, social wasp colonies are large and their larvae (which the adults feed) are dwindling, so the adult workers — which crave sugar — start seeking out sweet foods and drinks, bringing them to picnics and bins. This is why wasps seem especially pesky toward the end of the season, even though most of the year they're busy hunting pests.",
        },
        {
          question: "Are all wasps black and yellow social insects?",
          answer:
            "No. The black-and-yellow social wasps (like yellowjackets and hornets) are just the most noticeable kinds. Most wasp species are actually small, solitary, often inconspicuous insects that don't bother people at all — including many parasitoid wasps that are important, harmless controllers of other insects.",
        },
      ]}
      quickFacts={[
        { label: "Group", value: "Order Hymenoptera (with bees & ants)" },
        { label: "Reference species", value: "Vespula vulgaris (common wasp)" },
        { label: "Diet", value: "Adults sugar; larvae fed insect prey" },
        { label: "Roles", value: "Pest control; pollination" },
        { label: "Sting", value: "Defensive; can sting repeatedly" },
        { label: "Diversity", value: "Mostly small, solitary species" },
        { label: "Nests", value: "Paper (social) or burrows/cells (solitary)" },
        { label: "Range", value: "Almost worldwide" },
      ]}
      relatedLinks={[
        { label: "Bee Profile", href: "/animals/bee", description: "A close relative in the same order" },
        { label: "Ant Profile", href: "/animals/ant", description: "Another hymenopteran" },
        { label: "Beetle Profile", href: "/animals/beetle", description: "The most diverse insect group" },
        { label: "Insects & Invertebrates", href: "/animal-encyclopedia/insects" },
        { label: "Fauna by Continent", href: "/fauna/continents", description: "Insect fauna in context" },
      ]}
    />
  );
}
