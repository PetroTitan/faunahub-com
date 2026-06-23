import type { Metadata } from "next";
import AnimalProfileLayout from "@/components/AnimalProfileLayout";
import { ANIMAL_SOURCES } from "@/lib/educational/animal-sources";
import { getAnimalGalleryImages, getAnimalImage, getAnimalOgImage } from "@/lib/images/animal-images";
import { buildArticleMetadata } from "@/lib/metadata";

const PATH = "/animals/go-away-bird";
const TITLE = "Go-away-bird — Profile of Africa's Crested Alarm-caller";
const DESC =
  "Meet the go-away-bird (Corythaixoides): a grey, crested African turaco named for its loud nasal 'g'way' call, which warns other animals of approaching danger.";

export const metadata: Metadata = buildArticleMetadata({
  title: TITLE,
  description: DESC,
  path: PATH,
  publishedTime: "2026-06-23",
  modifiedTime: "2026-06-23",
  ogImage: getAnimalOgImage("go-away-bird"),
});

export default function GoAwayBirdPage() {
  return (
    <AnimalProfileLayout
      commonName="Go-away-bird"
      scientificName="Corythaixoides spp."
      pageTitle={TITLE}
      description={DESC}
      path={PATH}
      parentCategory="Birds"
      parentCategoryHref="/animal-encyclopedia/birds"
      tags={["Bird", "Turaco", "Africa"]}
      image={getAnimalImage("go-away-bird") ?? undefined}
      galleryImages={getAnimalGalleryImages("go-away-bird")}
      sources={ANIMAL_SOURCES["go-away-bird"]}
      publishedDate="2026-06-23"
      modifiedDate="2026-06-23"
      overview={
        <>
          <p>
            Go-away-birds (genus <em>Corythaixoides</em>) are slim, long-tailed African birds with a tall,
            wispy crest. They belong to the turaco family (Musophagidae), but unlike their vividly coloured
            relatives they are mostly soft grey, brown, and white. They are conspicuous and noisy residents
            of savanna and bush.
          </p>
          <p>
            Their name comes from a loud, nasal call that sounds like &ldquo;g&apos;way&rdquo; or
            &ldquo;go away.&rdquo; This far-carrying alarm announces danger, and other animals — including
            game that hunters are stalking — often heed it, which historically made the birds unpopular
            with hunters.
          </p>
          <p>
            <strong>Note:</strong> several go-away-bird species exist (such as the grey and white-bellied
            go-away-birds); details here describe the group broadly.
          </p>
        </>
      }
      habitat={
        <p>
          Go-away-birds live in open and semi-open habitats across sub-Saharan Africa — savanna, dry
          woodland, thornveld, bushland, and the edges of cultivation and gardens. They are quite tolerant
          of people and are often seen perched prominently in the tops of trees and bushes.
        </p>
      }
      diet={
        <p>
          These birds are largely vegetarian, feeding on fruit, flowers, buds, leaves, and shoots, with
          wild figs and other fruits especially favoured. They sometimes visit cultivated fruit and may be
          regarded as minor pests in orchards.
        </p>
      }
      behavior={
        <p>
          Go-away-birds are usually seen in pairs or small groups, clambering and hopping among branches
          with surprising agility, then flying with a distinctive flap-and-glide. They are highly vocal,
          and their loud alarm calls serve as a community warning system in the bush. Like other turacos,
          they raise and lower their crest in display.
        </p>
      }
      humanInteraction={
        <p>
          Go-away-birds are common, conspicuous, and well known to people across their range, and they adapt
          readily to gardens and farmland. They are not considered threatened, though as with all wildlife
          their fortunes depend on habitat. Consult the IUCN Red List for the status of a particular species.
        </p>
      }
      faqs={[
        {
          question: "Why is it called a go-away-bird?",
          answer:
            "Because of its loud, nasal call, which sounds remarkably like someone shouting 'go away' or 'g'way'. The bird gives this call readily, and it carries far across the bush.",
        },
        {
          question: "Is the go-away-bird a turaco?",
          answer:
            "Yes. Go-away-birds belong to the turaco family (Musophagidae), but they are the plainer, grey members of the group rather than the brilliantly coloured forest turacos. They share the family's crest and clambering habits.",
        },
        {
          question: "Why do hunters dislike go-away-birds?",
          answer:
            "Their loud alarm call alerts other animals to approaching danger. Game being stalked often reacts to the warning and flees, so historically hunters found the birds a nuisance for giving them away.",
        },
        {
          question: "What do go-away-birds eat?",
          answer:
            "They are mostly plant-eaters, feeding on fruit, flowers, buds, leaves, and shoots — wild figs are a favourite. They occasionally take cultivated fruit, which can make them minor pests in orchards.",
        },
      ]}
      quickFacts={[
        { label: "Group", value: "Genus Corythaixoides (several species)" },
        { label: "Class", value: "Aves" },
        { label: "Family", value: "Musophagidae (turacos)" },
        { label: "Range", value: "Sub-Saharan Africa" },
        { label: "Habitat", value: "Savanna, dry woodland, bush, gardens" },
        { label: "Name from", value: "Loud nasal 'g'way' alarm call" },
        { label: "Diet", value: "Fruit, flowers, buds, leaves" },
        { label: "Feature", value: "Tall crest; grey, brown & white plumage" },
      ]}
      relatedLinks={[
        { label: "Turaco Profile", href: "/animals/turaco", description: "The colourful relatives in the same family" },
        { label: "Hornbill Profile", href: "/animals/hornbill", description: "Another conspicuous African bird" },
        { label: "Drongo Profile", href: "/animals/drongo", description: "A bold, vocal bird of open country" },
        { label: "Fauna by Continent", href: "/fauna/continents", description: "African birds in context" },
        { label: "Birds Encyclopedia", href: "/animal-encyclopedia/birds" },
      ]}
    />
  );
}
