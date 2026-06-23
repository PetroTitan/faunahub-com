import type { Metadata } from "next";
import AnimalProfileLayout from "@/components/AnimalProfileLayout";
import { ANIMAL_SOURCES } from "@/lib/educational/animal-sources";
import { getAnimalGalleryImages, getAnimalImage, getAnimalOgImage } from "@/lib/images/animal-images";
import { buildArticleMetadata } from "@/lib/metadata";

const PATH = "/animals/markhor";
const TITLE = "Markhor — Profile, the Spiral-Horned Wild Goat of the Mountains";
const DESC =
  "Explore the markhor (Capra falconeri): a large wild goat of Central and South Asia with magnificent corkscrew horns — Pakistan's national animal and a major conservation success story.";

export const metadata: Metadata = buildArticleMetadata({
  title: TITLE,
  description: DESC,
  path: PATH,
  publishedTime: "2026-06-22",
  modifiedTime: "2026-06-22",
  ogImage: getAnimalOgImage("markhor"),
});

export default function MarkhorPage() {
  return (
    <AnimalProfileLayout
      commonName="Markhor"
      scientificName="Capra falconeri"
      pageTitle={TITLE}
      description={DESC}
      path={PATH}
      parentCategory="Mammals"
      parentCategoryHref="/animal-encyclopedia/mammals"
      tags={["Mammal", "Wild goat", "Mountains"]}
      image={getAnimalImage("markhor") ?? undefined}
      galleryImages={getAnimalGalleryImages("markhor")}
      sources={ANIMAL_SOURCES.markhor}
      publishedDate="2026-06-22"
      modifiedDate="2026-06-22"
      overview={
        <>
          <p>
            The markhor (<em>Capra falconeri</em>) is the largest of the wild goats, a powerful, sure-footed
            mountain animal of Central and South Asia, crowned by some of the most spectacular horns in the
            animal kingdom: long, tightly twisted corkscrew spirals that in big males can reach well over a
            metre. With a shaggy coat, a flowing beard and neck-ruff in males, and tremendous climbing
            ability, the markhor is a magnificent inhabitant of rugged peaks and cliffs. It is the national
            animal of Pakistan.
          </p>
          <p>
            The name is often said to derive from Persian words meaning &ldquo;snake-eater&rdquo; or
            &ldquo;snake-horn&rdquo; (a nod to the twisting horns), though this is folk etymology rather than
            a real diet — markhor are plant-eaters.
          </p>
          <p>
            <strong>Conservation note:</strong> once severely threatened, the markhor has recovered in places
            thanks to protection and community conservation, and its status has improved to Near Threatened.
            Verify current status at authoritative sources.
          </p>
        </>
      }
      habitat={
        <p>
          Markhor live in the mountains of Central and South Asia — including Pakistan, Afghanistan, parts of
          India, Tajikistan, Uzbekistan, and Turkmenistan — on steep, rocky slopes, cliffs, and high valleys,
          often in or near sparse mountain woodland and scrub. They move up and down the mountains with the
          seasons, descending to lower, sheltered areas in winter and climbing higher in summer.
        </p>
      }
      diet={
        <p>
          The markhor is a herbivore that both grazes and browses, eating grasses, herbs, leaves, twigs, and
          shrubs depending on the season — grazing on grasses in spring and summer and browsing more woody
          vegetation in the colder months. As an agile climber it can reach forage on steep, otherwise
          inaccessible ground.
        </p>
      }
      behavior={
        <p>
          Markhor are superb climbers, navigating precipitous cliffs and rocky terrain with ease to feed and
          to escape predators such as snow leopards and wolves. They are social, with females and young living
          in herds while males are more solitary outside the breeding season. During the rut, males compete
          for mates in clashes that can involve locking and twisting their great spiral horns. Those horns —
          tightly corkscrewed in some populations, more open and flaring in others — are the markhor&apos;s
          hallmark and a symbol of status. Markhor are mainly active in the cooler parts of the day.
        </p>
      }
      humanInteraction={
        <p>
          The markhor is a notable conservation success: long threatened by overhunting and habitat loss and
          once at low numbers, it has rebounded in several areas through legal protection and community-based
          programmes — including carefully regulated trophy hunting that channels funds to local people and
          gives them a stake in protecting the animal — improving its status to Near Threatened. It remains a
          treasured national symbol in Pakistan. Consult the IUCN Red List for current status.
        </p>
      }
      faqs={[
        {
          question: "What makes the markhor's horns so special?",
          answer:
            "Their shape and size. Markhor grow long, tightly twisted, corkscrew-like horns — among the most striking of any animal — and in large males they can exceed a metre in length. Different populations vary from tight spirals to more open, flaring twists. The horns are used in male contests during the rut and are a symbol of the markhor's status (and a target for hunters).",
        },
        {
          question: "Does the markhor really eat snakes?",
          answer:
            "No — that's a myth tied to its name. The name 'markhor' is often linked to Persian words suggesting 'snake-eater' or 'snake-horn' (the latter referencing the twisting horns), but markhor are herbivores that eat grasses, herbs, leaves, and shrubs. The snake connection is folklore, not diet.",
        },
        {
          question: "Where do markhor live, and how do they climb so well?",
          answer:
            "They live on steep, rocky mountain slopes and cliffs across Central and South Asia, including Pakistan, Afghanistan, and neighbouring countries. As the largest wild goats, they're exceptionally sure-footed and agile climbers, able to negotiate precipitous terrain to reach food and to escape predators like snow leopards and wolves.",
        },
        {
          question: "Is the markhor endangered?",
          answer:
            "It was once severely threatened by overhunting and habitat loss, but the markhor is a conservation success story: protection and community-based programmes (including tightly regulated, revenue-sharing trophy hunting) have helped populations recover, and its status improved to Near Threatened. It still depends on continued protection. Check the IUCN Red List for the current status.",
        },
      ]}
      quickFacts={[
        { label: "Scientific name", value: "Capra falconeri" },
        { label: "Class", value: "Mammalia (wild goat — the largest)" },
        { label: "Signature trait", value: "Long corkscrew-spiralled horns" },
        { label: "Status symbol", value: "National animal of Pakistan" },
        { label: "Diet", value: "Herbivore (grazes & browses)" },
        { label: "Skills", value: "Superb climber of cliffs & steep slopes" },
        { label: "Range", value: "Mountains of Central & South Asia" },
        { label: "Status", value: "Near Threatened — recovered (verify)" },
      ]}
      relatedLinks={[
        { label: "Goat Profile", href: "/animals/goat", description: "Its domestic relatives" },
        { label: "Saiga Profile", href: "/animals/saiga", description: "Another Central Asian hoofed mammal" },
        { label: "Bison Profile", href: "/animals/bison", description: "Another large grazing mammal" },
        { label: "Fauna by Continent", href: "/fauna/continents", description: "Asian mountain fauna in context" },
        { label: "Mammals Encyclopedia", href: "/animal-encyclopedia/mammals" },
      ]}
    />
  );
}
