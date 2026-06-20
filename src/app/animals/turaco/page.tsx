import type { Metadata } from "next";
import AnimalProfileLayout from "@/components/AnimalProfileLayout";
import { ANIMAL_SOURCES } from "@/lib/educational/animal-sources";
import { getAnimalGalleryImages, getAnimalImage, getAnimalOgImage } from "@/lib/images/animal-images";
import { buildArticleMetadata } from "@/lib/metadata";

const PATH = "/animals/turaco";
const TITLE = "Turaco — Profile, Unique Pigments, Diet & Behavior";
const DESC =
  "Explore turacos (family Musophagidae): colourful African fruit-eating birds with truly green and red feather pigments found in almost no other birds — using the great blue turaco.";

export const metadata: Metadata = buildArticleMetadata({
  title: TITLE,
  description: DESC,
  path: PATH,
  publishedTime: "2026-06-20",
  modifiedTime: "2026-06-20",
  ogImage: getAnimalOgImage("turaco"),
});

export default function TuracoPage() {
  return (
    <AnimalProfileLayout
      commonName="Turaco"
      scientificName="family Musophagidae"
      pageTitle={TITLE}
      description={DESC}
      path={PATH}
      parentCategory="Birds"
      parentCategoryHref="/animal-encyclopedia/birds"
      tags={["Bird", "Africa", "Frugivore"]}
      image={getAnimalImage("turaco") ?? undefined}
      galleryImages={getAnimalGalleryImages("turaco")}
      sources={ANIMAL_SOURCES.turaco}
      publishedDate="2026-06-20"
      modifiedDate="2026-06-20"
      overview={
        <>
          <p>
            Turacos (family Musophagidae) are colourful, crested fruit-eating birds found
            only in sub-Saharan Africa. The great blue turaco
            (<em>Corythaeola cristata</em>), shown here, is the largest of the group — a
            striking blue bird with a tall black crest and a yellow-and-red bill. Beyond
            their beauty, turacos are biologically special: many possess two pigments,
            <em>turacoverdin</em> (green) and <em>turacin</em> (red), that are extremely
            rare among birds.
          </p>
          <p>
            In most birds, green and red in the plumage come from feather structure or from
            diet-derived pigments; turacos are unusual in producing genuine green and red
            pigments of their own.
          </p>
          <p>
            <strong>Note:</strong> the turaco family is varied (including the plainer
            go-away-birds and plantain-eaters); details here use the great blue turaco as a
            reference. Treat general statements as approximate and verify against
            authoritative sources.
          </p>
        </>
      }
      habitat={
        <p>
          Turacos live across sub-Saharan Africa in habitats ranging from rainforest and
          montane forest to woodland and savanna, depending on the species. The great blue
          turaco favours tall tropical forest and forest edges, where it moves through the
          canopy in search of fruit. Forest species depend on healthy, connected woodland.
        </p>
      }
      diet={
        <p>
          Turacos are mainly frugivores, eating a wide variety of fruits, and also taking
          leaves, buds, and flowers; some eat invertebrates at times. As they travel between
          fruiting trees, turacos swallow fruit and later pass the seeds, making them
          important seed dispersers that help regenerate African forests.
        </p>
      }
      behavior={
        <p>
          Turacos are agile in the trees, running along branches and bounding through the
          canopy with their broad wings and long tails, though they tend to fly only in
          short bursts. They are often social, moving in pairs or family groups and giving
          loud, far-carrying calls — the related &ldquo;go-away-birds&rdquo; are named for
          their distinctive alarm call. The great blue turaco is a conspicuous, vocal
          presence in its forest home.
        </p>
      }
      humanInteraction={
        <p>
          Turacos are admired for their colour and are important to their ecosystems as
          seed dispersers. Some larger species, including the great blue turaco, are hunted
          for meat and feathers in parts of their range, and forest species can be affected
          by habitat loss. Many turacos remain reasonably widespread. Consult authoritative
          sources for species-specific status.
        </p>
      }
      faqs={[
        {
          question: "What makes turaco colours unusual?",
          answer:
            "Turacos are among the very few birds with true green and red feather pigments — turacoverdin (green) and turacin (red). In most birds, green comes from feather structure and red usually from diet-derived pigments, so the turacos' own copper-based pigments are biologically remarkable.",
        },
        {
          question: "What do turacos eat?",
          answer:
            "Mostly fruit. Turacos are primarily frugivores, also eating leaves, buds, and flowers, and sometimes invertebrates. By eating fruit and dispersing the seeds as they move through the forest, they play an important role in regenerating African woodlands.",
        },
        {
          question: "Where do turacos live?",
          answer:
            "Only in sub-Saharan Africa, in habitats from rainforest and montane forest to woodland and savanna depending on the species. The great blue turaco, the largest, lives in tall tropical forest, while drier-country relatives include the go-away-birds.",
        },
        {
          question: "Why are some turaco relatives called 'go-away-birds'?",
          answer:
            "Go-away-birds are turacos of more open country named for their loud, nasal alarm call, which sounds like 'g'way' or 'go away.' The call alerts other animals to danger and is a distinctive sound of African bush, showing how varied the turaco family is.",
        },
      ]}
      quickFacts={[
        { label: "Group", value: "Family Musophagidae" },
        { label: "Reference species", value: "Corythaeola cristata (great blue turaco)" },
        { label: "Class", value: "Aves" },
        { label: "Diet", value: "Mainly fruit (key seed disperser)" },
        { label: "Unique trait", value: "True green & red feather pigments" },
        { label: "Habitat", value: "Sub-Saharan African forests & woodland" },
        { label: "Relatives", value: "Go-away-birds, plantain-eaters" },
        { label: "Status", value: "Varies by species (verify)" },
      ]}
      relatedLinks={[
        { label: "Hornbill Profile", href: "/animals/hornbill", description: "Another large fruit-eating bird" },
        { label: "Toucan Profile", href: "/animals/toucan", description: "A colourful New World fruit-eater" },
        { label: "Weaver Profile", href: "/animals/weaver", description: "Another African bird" },
        { label: "Birdwatching", href: "/birdwatching", description: "Tips for observing birds" },
        { label: "Bird Encyclopedia", href: "/animal-encyclopedia/birds" },
      ]}
    />
  );
}
