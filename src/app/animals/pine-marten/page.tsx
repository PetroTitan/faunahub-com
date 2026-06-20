import type { Metadata } from "next";
import AnimalProfileLayout from "@/components/AnimalProfileLayout";
import { ANIMAL_SOURCES } from "@/lib/educational/animal-sources";
import { getAnimalGalleryImages, getAnimalImage, getAnimalOgImage } from "@/lib/images/animal-images";
import { buildArticleMetadata } from "@/lib/metadata";

const PATH = "/animals/pine-marten";
const TITLE = "Pine Marten — Profile, Habitat, Diet & Behavior";
const DESC =
  "Explore the European pine marten (Martes martes): an agile, tree-climbing member of the weasel family with a cream throat patch, a woodland hunter and fruit-eater.";

export const metadata: Metadata = buildArticleMetadata({
  title: TITLE,
  description: DESC,
  path: PATH,
  publishedTime: "2026-06-20",
  modifiedTime: "2026-06-20",
  ogImage: getAnimalOgImage("pine-marten"),
});

export default function PineMartenPage() {
  return (
    <AnimalProfileLayout
      commonName="Pine Marten"
      scientificName="Martes martes"
      pageTitle={TITLE}
      description={DESC}
      path={PATH}
      parentCategory="Mammals"
      parentCategoryHref="/animal-encyclopedia/mammals"
      tags={["Mammal", "Mustelid", "Arboreal"]}
      image={getAnimalImage("pine-marten") ?? undefined}
      galleryImages={getAnimalGalleryImages("pine-marten")}
      sources={ANIMAL_SOURCES["pine-marten"]}
      publishedDate="2026-06-20"
      modifiedDate="2026-06-20"
      overview={
        <>
          <p>
            The European pine marten (<em>Martes martes</em>) is an agile,
            cat-sized member of the weasel family (Mustelidae), with rich brown fur, a
            bushy tail, large rounded ears, and a distinctive cream-to-orange throat
            patch. It is a superb climber, equally at home running through the forest
            canopy and along the ground.
          </p>
          <p>
            Pine martens are mostly woodland animals, and their fortunes are closely tied
            to forests; in some regions their recovery has even had knock-on benefits for
            other wildlife.
          </p>
          <p>
            <strong>Conservation note:</strong> pine martens declined in parts of their
            range due to habitat loss and persecution, and have been recovering in some
            areas with protection. Verify current status at iucnredlist.org and regional
            sources.
          </p>
        </>
      }
      habitat={
        <p>
          Pine martens live in forests and wooded country across much of Europe and into
          western Asia, favouring mature woodland with plenty of cover and denning sites
          in tree hollows, old nests, or rock crevices. They also use scrub and rocky
          areas, and adapt to mixed landscapes where woodland is available.
        </p>
      }
      diet={
        <p>
          Pine martens are omnivores with a varied, seasonal diet. They hunt small
          mammals (such as voles and, notably, squirrels), birds, and insects, and also
          eat eggs, fruit, and berries — fruit can be especially important in late summer
          and autumn. This flexibility helps them through the seasons.
        </p>
      }
      behavior={
        <p>
          Pine martens are largely solitary, territorial, and active mainly around dusk
          and at night, though they may be seen by day. They are exceptional climbers,
          using a long body and semi-retractable claws to move through trees. Notably, in
          places where pine martens have returned, they tend to suppress introduced grey
          squirrels more than native red squirrels, which can help red squirrels recover.
        </p>
      }
      humanInteraction={
        <p>
          Once heavily reduced by habitat loss, trapping, and persecution, pine martens
          are now protected in many countries and are recovering in some regions,
          sometimes aided by reintroduction. Their link to red squirrel conservation has
          made them a notable conservation success story in places. For current status,
          consult authoritative sources.
        </p>
      }
      faqs={[
        {
          question: "Is a pine marten related to a weasel?",
          answer:
            "Yes. The pine marten is a mustelid — the weasel family — alongside weasels, stoats, otters, badgers, and the wolverine. Martens are agile, medium-sized members of that family, well adapted to climbing.",
        },
        {
          question: "What do pine martens eat?",
          answer:
            "They are omnivores with a varied diet: small mammals (including squirrels), birds, insects, and eggs, plus a lot of fruit and berries in late summer and autumn. Their flexible diet shifts with what is available through the year.",
        },
        {
          question: "How do pine martens help red squirrels?",
          answer:
            "In areas where pine martens have returned, studies have found they tend to reduce populations of the introduced grey squirrel more than the native red squirrel — possibly because reds are warier and lighter. This can relieve pressure on red squirrels and help them recover, an unexpected conservation benefit.",
        },
        {
          question: "Are pine martens endangered?",
          answer:
            "It varies by region. Pine martens declined badly in parts of their range due to habitat loss and persecution, but they are protected in many countries and have been recovering — sometimes strongly — in some areas. Status should be checked against current IUCN Red List and regional data.",
        },
      ]}
      quickFacts={[
        { label: "Scientific name", value: "Martes martes" },
        { label: "Family", value: "Mustelidae (weasels)" },
        { label: "Class", value: "Mammalia" },
        { label: "Diet", value: "Omnivore (prey, eggs, fruit)" },
        { label: "Key trait", value: "Agile climber; cream throat patch" },
        { label: "Activity", value: "Mainly dusk/night; solitary" },
        { label: "Habitat", value: "Woodland & forest" },
        { label: "Range", value: "Europe & western Asia" },
      ]}
      relatedLinks={[
        { label: "Weasel Profile", href: "/animals/weasel", description: "A smaller mustelid relative" },
        { label: "Wolverine Profile", href: "/animals/wolverine", description: "The largest land mustelid" },
        { label: "Squirrel Profile", href: "/animals/squirrel", description: "Both prey and conservation link" },
        { label: "Fauna by Continent", href: "/fauna/continents", description: "European woodland fauna in context" },
        { label: "Mammal Encyclopedia", href: "/animal-encyclopedia/mammals" },
      ]}
    />
  );
}
