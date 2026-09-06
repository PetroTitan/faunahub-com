import type { Metadata } from "next";
import AnimalProfileLayout from "@/components/AnimalProfileLayout";
import { ANIMAL_SOURCES } from "@/lib/educational/animal-sources";
import { getAnimalGalleryImages, getAnimalImage, getAnimalOgImage } from "@/lib/images/animal-images";
import { buildArticleMetadata } from "@/lib/metadata";

const PATH = "/animals/rainbow-trout";
const TITLE = "Rainbow Trout — Profile, Steelhead Form & Global Introduction";
const DESC =
  "Explore the rainbow trout (Oncorhynchus mykiss): a Pacific salmonid with a pink flank stripe, whose sea-going steelhead form is the same species.";

export const metadata: Metadata = buildArticleMetadata({
  title: TITLE,
  description: DESC,
  path: PATH,
  publishedTime: "2026-09-06",
  modifiedTime: "2026-09-06",
  ogImage: getAnimalOgImage("rainbow-trout"),
});

export default function RainbowTroutPage() {
  return (
    <AnimalProfileLayout
      commonName="Rainbow Trout"
      scientificName="Oncorhynchus mykiss"
      pageTitle={TITLE}
      description={DESC}
      path={PATH}
      parentCategory="Fish"
      parentCategoryHref="/animal-encyclopedia/fish"
      tags={["Fish","Salmonid","Introduced Worldwide"]}
      image={getAnimalImage("rainbow-trout") ?? undefined}
      galleryImages={getAnimalGalleryImages("rainbow-trout")}
      sources={ANIMAL_SOURCES["rainbow-trout"]}
      publishedDate="2026-09-06"
      modifiedDate="2026-09-06"
      overview={
        <>
        <p>
          The rainbow trout (<em>Oncorhynchus mykiss</em>) is a salmonid native to the Pacific drainages of North America and northeastern Asia, named for the broad pink or reddish stripe along its flank and the fine black spotting scattered across its body and fins.
        </p>
        <p>
          Despite being called a trout, it belongs to the Pacific salmon genus <em>Oncorhynchus</em> rather than to the genus containing the brown trout — a detail that reflects its true relationships.
        </p>
        <p>
          The species has two life histories in one. Fish that stay in fresh water are &apos;rainbow trout&apos;; those that migrate to sea and return to spawn are called <strong>steelhead</strong>, and grow larger and more silvery. They are the same species, differing in life history rather than in identity.
        </p>
        </>
      }
      habitat={
        <>
        <p>
          Rainbow trout are native to cool, clean, well-oxygenated fresh water on the Pacific side of North America and in parts of northeastern Asia, and steelhead populations use the north Pacific. Through deliberate introduction for angling and aquaculture the species now occurs on every continent except Antarctica, in rivers, streams, lakes and reservoirs where temperatures stay cool enough.
        </p>
        </>
      }
      diet={
        <>
        <p>
          Rainbow trout are opportunistic carnivores. Diet varies with size and habitat: aquatic insect larvae, adult insects taken at the surface, crustaceans, molluscs, fish eggs and smaller fish. Larger individuals take proportionally more fish. Sea-run steelhead feed heavily in the ocean on fish and crustaceans, which is why they grow so much larger.
        </p>
        </>
      }
      behavior={
        <>
        <p>
          Rainbow trout spawn in spring in gravel-bottomed streams, where the female excavates a depression called a redd, deposits eggs, and covers them with gravel. Unlike most Pacific salmon, which die after spawning, rainbow trout and steelhead can survive to spawn again. Stream-resident fish hold feeding positions in current where drifting food passes, defending those positions from other trout.
        </p>
        </>
      }
      humanInteraction={
        <>
        <p>
          Rainbow trout are one of the most widely introduced fish in the world, moved deliberately for sport fishing and farmed extensively in aquaculture. That success has costs: introduced populations can outcompete or hybridise with native fish and alter stream communities, and rainbow trout are treated as an invasive species in a number of countries. In parts of their native range certain steelhead populations are of serious conservation concern even while the species globally is abundant. This profile is educational and offers no fishing or aquaculture guidance. Verify current status at the IUCN Red List and NOAA Fisheries.
        </p>
        </>
      }
      faqs={[
        {
          question: "What is the difference between a rainbow trout and a steelhead?",
          answer:
            "Life history, not species. Both are Oncorhynchus mykiss. Fish that spend their lives in fresh water are called rainbow trout; those that migrate to the sea, feed there and return to fresh water to spawn are called steelhead, and they grow larger and become more silvery.",
        },
        {
          question: "Is a rainbow trout a salmon?",
          answer:
            "Genetically it sits with the Pacific salmon. Rainbow trout belong to the genus Oncorhynchus, which contains the Pacific salmon species, rather than to Salmo, the genus of the brown trout and Atlantic salmon. Unlike most Pacific salmon, though, it does not necessarily die after spawning.",
        },
        {
          question: "Where are rainbow trout originally from?",
          answer:
            "The Pacific drainages of North America and parts of northeastern Asia. Their presence across every continent except Antarctica is the result of deliberate introduction for angling and aquaculture, not natural range expansion.",
        },
        {
          question: "Are rainbow trout invasive?",
          answer:
            "In many places, yes. Because they have been introduced so widely for sport and farming, rainbow trout can compete with or displace native fish and change stream communities, and several countries treat them as invasive. Within their native range, by contrast, some steelhead populations are themselves of conservation concern.",
        },
      ]}
      quickFacts={[
        { label: "Scientific name", value: "Oncorhynchus mykiss" },
        { label: "Family", value: "Salmonidae" },
        { label: "Class", value: "Actinopterygii" },
        { label: "Genus", value: "Oncorhynchus — the Pacific salmon" },
        { label: "Steelhead", value: "The sea-run form of the same species" },
        { label: "Native range", value: "Pacific North America, NE Asia" },
        { label: "Introduced", value: "Every continent except Antarctica" },
        { label: "Spawning", value: "In gravel redds; may spawn repeatedly" },
      ]}
      relatedLinks={[
        { label: "Brown Trout Profile", href: "/animals/brown-trout" },
        { label: "Atlantic Salmon Profile", href: "/animals/atlantic-salmon" },
        { label: "Chinook Salmon Profile", href: "/animals/chinook-salmon" },
        { label: "Salmon Profile", href: "/animals/salmon", description: "Group-level overview" },
        { label: "Fish Encyclopedia", href: "/animal-encyclopedia/fish" },
      ]}
    />
  );
}
