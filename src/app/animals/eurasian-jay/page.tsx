import type { Metadata } from "next";
import AnimalProfileLayout from "@/components/AnimalProfileLayout";
import { ANIMAL_SOURCES } from "@/lib/educational/animal-sources";
import { getAnimalGalleryImages, getAnimalImage, getAnimalOgImage } from "@/lib/images/animal-images";
import { buildArticleMetadata } from "@/lib/metadata";

const PATH = "/animals/eurasian-jay";
const TITLE = "Eurasian Jay — Profile, Acorn Caching & Woodland Ecology";
const DESC =
  "Explore the Eurasian jay (Garrulus glandarius): a colourful woodland crow that caches thousands of acorns each autumn and helps plant oak woodland.";

export const metadata: Metadata = buildArticleMetadata({
  title: TITLE,
  description: DESC,
  path: PATH,
  publishedTime: "2026-09-06",
  modifiedTime: "2026-09-06",
  ogImage: getAnimalOgImage("eurasian-jay"),
});

export default function EurasianJayPage() {
  return (
    <AnimalProfileLayout
      commonName="Eurasian Jay"
      scientificName="Garrulus glandarius"
      pageTitle={TITLE}
      description={DESC}
      path={PATH}
      parentCategory="Birds"
      parentCategoryHref="/animal-encyclopedia/birds"
      tags={["Bird","Corvid","Woodland"]}
      image={getAnimalImage("eurasian-jay") ?? undefined}
      galleryImages={getAnimalGalleryImages("eurasian-jay")}
      sources={ANIMAL_SOURCES["eurasian-jay"]}
      publishedDate="2026-09-06"
      modifiedDate="2026-09-06"
      overview={
        <>
        <p>
          The Eurasian jay (<em>Garrulus glandarius</em>) is a woodland crow and one of the most colourful members of the family: pinkish-brown body, black moustache stripe, white rump obvious in flight, and a patch of barred, brilliant blue on each wing.
        </p>
        <p>
          It is shy and often heard before it is seen, giving a harsh screeching call from cover. Like other corvids it is a capable mimic and an accomplished problem-solver.
        </p>
        <p>
          The jay&apos;s ecological signature is <strong>acorn caching</strong>. Through autumn it collects and buries acorns individually across a wide area — thousands of them in a season — and because not every cache is recovered, the jay is one of the most important dispersers of oak.
        </p>
        </>
      }
      habitat={
        <>
        <p>
          Eurasian jays live in woodland across Europe, North Africa and temperate Asia, with a strong preference for oak and mixed deciduous forest but also using conifer plantations, parks and large gardens. They need trees for cover and nesting, and jays have expanded into suburban areas where mature trees are present.
        </p>
        </>
      }
      diet={
        <>
        <p>
          Jays are omnivorous. Acorns are the staple where oaks occur, alongside beech mast, other nuts and seeds, fruit and invertebrates. In spring and summer they take a great many insects, and they also take eggs and nestlings — behaviour that makes them unpopular with some gardeners but is a normal part of corvid ecology.
        </p>
        </>
      }
      behavior={
        <>
        <p>
          Autumn caching is the defining behaviour: a jay carries several acorns at a time in its throat and bill, flies away from the parent tree — often hundreds of metres — and buries them singly in the ground. It relies on spatial memory to recover them, and research on jays and their relatives has shown sophisticated caching behaviour, including sensitivity to whether other birds are watching. Jays also engage in &apos;anting&apos;, deliberately allowing ants onto their plumage.
        </p>
        </>
      }
      humanInteraction={
        <>
        <p>
          The jay is a significant force in woodland regeneration: by carrying acorns away from parent trees and burying them at just the right depth, it plants oaks far more effectively than gravity does, and this dispersal is thought to have helped oaks spread northward after the last glaciation. Jays are common and widespread, though they are sometimes persecuted for taking eggs. This profile offers no wildlife-control guidance. Verify current status at the IUCN Red List.
        </p>
        </>
      }
      faqs={[
        {
          question: "Why do jays bury acorns?",
          answer:
            "To store food for winter. A jay collects acorns through the autumn, carries several at a time away from the parent tree, and buries them singly in the ground, relying on spatial memory to find them again. A single bird can cache thousands of acorns in a season.",
        },
        {
          question: "Do jays plant oak trees?",
          answer:
            "Effectively, yes — as a by-product. Because jays carry acorns well away from the parent tree and bury them at a suitable depth, the caches they fail to recover are well placed to germinate. This makes the jay one of the most important dispersers of oak, and it is thought to have helped oaks spread north after the last glaciation.",
        },
        {
          question: "Is a jay a crow?",
          answer:
            "Yes. The Eurasian jay is a member of the crow family, Corvidae, alongside crows, magpies, rooks and ravens. It is far more colourful than most corvids but shares the family's intelligence, problem-solving ability and capacity for mimicry.",
        },
        {
          question: "What is the blue patch on a jay's wing?",
          answer:
            "A panel of finely barred blue feathers on the wing coverts, and one of the most striking pieces of colour on any European bird. It is highly visible in flight and, together with the white rump and black tail, makes a flying jay easy to identify.",
        },
      ]}
      quickFacts={[
        { label: "Scientific name", value: "Garrulus glandarius" },
        { label: "Family", value: "Corvidae (crow family)" },
        { label: "Class", value: "Aves" },
        { label: "Signature behaviour", value: "Autumn acorn caching" },
        { label: "Ecological role", value: "Major disperser of oak" },
        { label: "Wing", value: "Barred blue panel" },
        { label: "Diet", value: "Omnivore — acorns, insects, eggs" },
        { label: "Habitat", value: "Oak and mixed woodland" },
      ]}
      relatedLinks={[
        { label: "Crow Profile", href: "/animals/crow" },
        { label: "Magpie Profile", href: "/animals/magpie" },
        { label: "Raven Profile", href: "/animals/raven" },
        { label: "Animal Intelligence & Behavior", href: "/animal-intelligence-and-behavior", description: "How animal cognition is studied" },
        { label: "Bird Encyclopedia", href: "/animal-encyclopedia/birds" },
      ]}
    />
  );
}
