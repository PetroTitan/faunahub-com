import type { Metadata } from "next";
import AnimalProfileLayout from "@/components/AnimalProfileLayout";
import { ANIMAL_SOURCES } from "@/lib/educational/animal-sources";
import { getAnimalGalleryImages, getAnimalImage, getAnimalOgImage } from "@/lib/images/animal-images";
import { buildArticleMetadata } from "@/lib/metadata";

const PATH = "/animals/starling";
const TITLE = "Starling — Profile, Murmurations, Mimicry & Global Spread";
const DESC =
  "Explore the common starling (Sturnus vulgaris): a glossy spotted songbird famous for vast murmurations, vocal mimicry, and a global introduced range.";

export const metadata: Metadata = buildArticleMetadata({
  title: TITLE,
  description: DESC,
  path: PATH,
  publishedTime: "2026-09-06",
  modifiedTime: "2026-09-06",
  ogImage: getAnimalOgImage("starling"),
});

export default function StarlingPage() {
  return (
    <AnimalProfileLayout
      commonName="Starling"
      scientificName="Sturnus vulgaris"
      pageTitle={TITLE}
      description={DESC}
      path={PATH}
      parentCategory="Birds"
      parentCategoryHref="/animal-encyclopedia/birds"
      tags={["Bird","Songbird","Introduced Worldwide"]}
      image={getAnimalImage("starling") ?? undefined}
      galleryImages={getAnimalGalleryImages("starling")}
      sources={ANIMAL_SOURCES.starling}
      publishedDate="2026-09-06"
      modifiedDate="2026-09-06"
      overview={
        <>
        <p>
          The common starling (<em>Sturnus vulgaris</em>) is a stocky, short-tailed songbird with a sharp pointed bill and iridescent plumage that shifts green and purple in good light. In winter it is heavily spangled with pale spots; by spring the spots wear away and the bird looks darker and glossier.
        </p>
        <p>
          Starlings are best known for <strong>murmurations</strong>: enormous flocks that wheel and pour through the sky in coordinated waves before dropping into a roost. Each bird responds to a handful of near neighbours, and those local rules produce the shapes seen from the ground.
        </p>
        <p>
          They are also outstanding mimics, weaving imitations of other birds and of mechanical sounds into a rambling song of clicks, whistles and rattles.
        </p>
        </>
      }
      habitat={
        <>
        <p>
          Starlings are native to Europe, western Asia and North Africa and have been introduced to North America, southern Africa, Australia, New Zealand and elsewhere. They thrive in open and modified landscapes — farmland, pasture, parks, gardens, towns and cities — and nest in cavities in trees, cliffs and above all buildings. They roost communally, sometimes in enormous numbers, in reedbeds, woodland and city structures.
        </p>
        </>
      }
      diet={
        <>
        <p>
          Starlings are omnivores with a seasonal shift: invertebrates dominate in spring and summer — especially leatherjackets, beetle larvae and other soil invertebrates probed from short grass — while fruit, berries, seeds and grain become more important later in the year. They feed on the ground with a distinctive open-bill probing technique that pushes grass apart to expose prey.
        </p>
        </>
      }
      behavior={
        <>
        <p>
          Starlings are highly social outside the breeding season, feeding in flocks and gathering at communal roosts. Murmurations occur as birds assemble before roosting and are widely interpreted as anti-predator behaviour and as a way of sharing roost information. Starlings nest in cavities and compete strongly for them. Their mimicry is extensive, and individual males incorporate a wide range of imitated sounds into their song.
        </p>
        </>
      }
      humanInteraction={
        <>
        <p>
          Starlings have one of the most complicated relationships with people of any bird. Introduced populations — most famously in North America — expanded enormously and are treated as invasive because they compete for nest cavities with native cavity-nesters and gather in large numbers around agriculture. At the same time, in parts of their native European range starling numbers have declined substantially, generally linked to agricultural change reducing the soil invertebrates they need. This profile offers no wildlife-control guidance. Verify current status at the IUCN Red List.
        </p>
        </>
      }
      faqs={[
        {
          question: "What is a starling murmuration?",
          answer:
            "It is the swirling, shape-shifting mass formed by large flocks of starlings before they settle at a roost. There is no leader: each bird adjusts to a small number of near neighbours, and those simple local rules produce the coordinated waves visible from the ground.",
        },
        {
          question: "Why do starlings have spots?",
          answer:
            "Their spotting is seasonal. Fresh autumn plumage carries pale tips that make the bird look heavily spangled; through the winter those tips wear away, so by spring the bird appears much darker and glossier without having moulted.",
        },
        {
          question: "Can starlings mimic sounds?",
          answer:
            "Yes, and they are among the better mimics of any songbird. Their rambling song of clicks, whistles and rattles is threaded with imitations of other bird species and of mechanical and environmental noises picked up from their surroundings.",
        },
        {
          question: "Are starlings invasive?",
          answer:
            "In some places. Introduced populations in North America, Australia and elsewhere have expanded greatly and are treated as invasive, partly because they compete for nest cavities with native birds. In parts of the native European range, however, starling numbers have declined substantially — so the picture depends entirely on where you are.",
        },
      ]}
      quickFacts={[
        { label: "Scientific name", value: "Sturnus vulgaris" },
        { label: "Family", value: "Sturnidae" },
        { label: "Class", value: "Aves" },
        { label: "Plumage", value: "Iridescent; spots wear off by spring" },
        { label: "Flocking", value: "Murmurations before roosting" },
        { label: "Song", value: "Extensive vocal mimicry" },
        { label: "Nesting", value: "Cavities, often in buildings" },
        { label: "Status", value: "Introduced widely; declining in parts of native range" },
      ]}
      relatedLinks={[
        { label: "Crow Profile", href: "/animals/crow" },
        { label: "Sparrow Profile", href: "/animals/sparrow" },
        { label: "Magpie Profile", href: "/animals/magpie" },
        { label: "Lyrebird Profile", href: "/animals/lyrebird", description: "A far more extreme mimic" },
        { label: "Bird Encyclopedia", href: "/animal-encyclopedia/birds" },
      ]}
    />
  );
}
