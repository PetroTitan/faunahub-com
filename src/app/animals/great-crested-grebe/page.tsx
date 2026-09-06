import type { Metadata } from "next";
import AnimalProfileLayout from "@/components/AnimalProfileLayout";
import { ANIMAL_SOURCES } from "@/lib/educational/animal-sources";
import { getAnimalGalleryImages, getAnimalImage, getAnimalOgImage } from "@/lib/images/animal-images";
import { buildArticleMetadata } from "@/lib/metadata";

const PATH = "/animals/great-crested-grebe";
const TITLE = "Great Crested Grebe — Profile, Courtship Dance & Water Habits";
const DESC =
  "Explore the great crested grebe (Podiceps cristatus): an elegant diving waterbird with a mutual courtship dance and chicks that ride on a parent's back.";

export const metadata: Metadata = buildArticleMetadata({
  title: TITLE,
  description: DESC,
  path: PATH,
  publishedTime: "2026-09-06",
  modifiedTime: "2026-09-06",
  ogImage: getAnimalOgImage("great-crested-grebe"),
});

export default function GreatCrestedGrebePage() {
  return (
    <AnimalProfileLayout
      commonName="Great Crested Grebe"
      scientificName="Podiceps cristatus"
      pageTitle={TITLE}
      description={DESC}
      path={PATH}
      parentCategory="Birds"
      parentCategoryHref="/animal-encyclopedia/birds"
      tags={["Bird","Waterbird","Diving"]}
      image={getAnimalImage("great-crested-grebe") ?? undefined}
      galleryImages={getAnimalGalleryImages("great-crested-grebe")}
      sources={ANIMAL_SOURCES["great-crested-grebe"]}
      publishedDate="2026-09-06"
      modifiedDate="2026-09-06"
      overview={
        <>
        <p>
          The great crested grebe (<em>Podiceps cristatus</em>) is a slender, long-necked diving waterbird of lakes and slow rivers across Europe, Asia, Africa and Australasia. In breeding plumage it grows a dark double crest and a chestnut-and-black ruff that it can fan out around the face.
        </p>
        <p>
          Grebes are specialists so committed to swimming that they are almost helpless on land: the legs are set far back on the body, ideal for propulsion but poorly placed for walking. They nest on floating platforms of vegetation rather than on dry ground.
        </p>
        <p>
          The species is famous for an elaborate <strong>mutual courtship display</strong> — both sexes perform the same movements together — including a head-shaking ceremony and a striking &apos;weed dance&apos; in which the pair rise breast to breast on the water holding waterweed.
        </p>
        </>
      }
      habitat={
        <>
        <p>
          Great crested grebes live on large freshwater lakes, reservoirs, gravel pits and slow rivers with open water for diving and fringing vegetation for nesting. They occur across Europe, temperate Asia, parts of Africa, and Australia and New Zealand. In winter many move to larger waters, estuaries and sheltered coasts where fresh water freezes.
        </p>
        </>
      }
      diet={
        <>
        <p>
          Fish make up most of the diet, caught by diving from the surface and pursuing prey underwater. Grebes also eat aquatic insects, crustaceans and amphibians. They famously swallow their own feathers, which accumulate in the stomach; the usual explanation is that the feather mass protects the gut from sharp fish bones and helps form indigestible remains into pellets.
        </p>
        </>
      }
      behavior={
        <>
        <p>
          Courtship is elaborate and mutual: pairs face each other, shake and turn their heads with crests raised, and in the weed ceremony both birds dive, collect waterweed, and rise vertically breast to breast, paddling to stay upright. Chicks hatch striped in black and white and ride on a parent&apos;s back, sheltered among the feathers, sometimes even while the adult dives. Nests are floating platforms anchored to vegetation.
        </p>
        </>
      }
      humanInteraction={
        <>
        <p>
          The great crested grebe has a notable conservation history: it was hunted intensively in nineteenth-century Britain for its dense breast plumage, used in fashion under the name &apos;grebe fur&apos;, and reduced to a very small population. The campaign to protect it was one of the founding causes of organised bird conservation in the UK. Numbers recovered strongly, helped by the spread of flooded gravel pits and reservoirs. Present-day issues include disturbance, water quality and entanglement in fishing tackle. Verify current status at the IUCN Red List.
        </p>
        </>
      }
      faqs={[
        {
          question: "What is the great crested grebe's weed dance?",
          answer:
            "It is the most dramatic part of the pair's mutual courtship. Both birds dive, collect waterweed, then surface and rise vertically breast to breast, paddling hard to hold the position while turning their heads. Unusually, both sexes perform the same display rather than one bird showing off to the other.",
        },
        {
          question: "Why do grebe chicks ride on their parents' backs?",
          answer:
            "It keeps them warm, safe from predators below the surface, and out of cold water while they are still small. The striped chicks tuck in among the adult's back feathers and are carried as the parent swims — sometimes staying aboard even as it dives.",
        },
        {
          question: "Why do grebes eat feathers?",
          answer:
            "Grebes regularly swallow their own feathers, which build up into a mass in the stomach. The usual explanation is that this padding protects the gut lining from sharp fish bones and helps bind indigestible remains into pellets that the bird can bring back up.",
        },
        {
          question: "Can great crested grebes walk?",
          answer:
            "Barely. Their legs are set far back on the body, which makes them excellent swimmers and divers but very awkward on land. This is why they nest on floating platforms of vegetation on the water rather than on dry ground.",
        },
      ]}
      quickFacts={[
        { label: "Scientific name", value: "Podiceps cristatus" },
        { label: "Family", value: "Podicipedidae (grebes)" },
        { label: "Class", value: "Aves" },
        { label: "Breeding plumage", value: "Dark crest and chestnut ruff" },
        { label: "Courtship", value: "Mutual — including the weed dance" },
        { label: "Nest", value: "Floating platform of vegetation" },
        { label: "Chicks", value: "Striped; ride on a parent's back" },
        { label: "Diet", value: "Mainly fish, caught by diving" },
      ]}
      relatedLinks={[
        { label: "Common Loon Profile", href: "/animals/common-loon", description: "Another diving waterbird" },
        { label: "Swan Profile", href: "/animals/swan" },
        { label: "Canada Goose Profile", href: "/animals/canada-goose" },
        { label: "Cormorant Profile", href: "/animals/cormorant" },
        { label: "Bird Encyclopedia", href: "/animal-encyclopedia/birds" },
      ]}
    />
  );
}
