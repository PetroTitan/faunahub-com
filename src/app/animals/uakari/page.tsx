import type { Metadata } from "next";
import AnimalProfileLayout from "@/components/AnimalProfileLayout";
import { ANIMAL_SOURCES } from "@/lib/educational/animal-sources";
import { getAnimalGalleryImages, getAnimalImage, getAnimalOgImage } from "@/lib/images/animal-images";
import { buildArticleMetadata } from "@/lib/metadata";

const PATH = "/animals/uakari";
const TITLE = "Uakari — Profile, the Red-Faced Amazon Monkey & Diet";
const DESC =
  "Explore uakaris (genus Cacajao): short-tailed Amazonian monkeys, the bald uakari famous for a bright crimson face that signals health — a flooded-forest seed specialist. Vulnerable.";

export const metadata: Metadata = buildArticleMetadata({
  title: TITLE,
  description: DESC,
  path: PATH,
  publishedTime: "2026-06-20",
  modifiedTime: "2026-06-20",
  ogImage: getAnimalOgImage("uakari"),
});

export default function UakariPage() {
  return (
    <AnimalProfileLayout
      commonName="Uakari"
      scientificName="Cacajao calvus"
      pageTitle={TITLE}
      description={DESC}
      path={PATH}
      parentCategory="Mammals"
      parentCategoryHref="/animal-encyclopedia/mammals"
      tags={["Mammal", "Primate", "Amazon"]}
      image={getAnimalImage("uakari") ?? undefined}
      galleryImages={getAnimalGalleryImages("uakari")}
      sources={ANIMAL_SOURCES.uakari}
      publishedDate="2026-06-20"
      modifiedDate="2026-06-20"
      overview={
        <>
          <p>
            Uakaris (genus <em>Cacajao</em>) are distinctive monkeys of the western Amazon,
            unusual among South American monkeys for their short, stubby tails. The bald
            uakari (<em>Cacajao calvus</em>), shown here, is the most striking: a shaggy-coated
            monkey with a naked, vivid crimson face and head. That red face is more than
            decoration — it reflects the animal&apos;s health and plays a role in social and
            mating signals.
          </p>
          <p>
            Uakaris are specialists of seasonally flooded Amazon forests and are expert at
            cracking open hard, unripe fruit and seeds that few other animals can use.
          </p>
          <p>
            <strong>Conservation note:</strong> uakaris are threatened — the bald uakari is
            assessed as Vulnerable, mainly from habitat loss and hunting. Verify current
            status at iucnredlist.org.
          </p>
        </>
      }
      habitat={
        <p>
          Uakaris live in the western Amazon basin, especially in várzea and igapó —
          seasonally flooded forests along rivers and lakes — as well as nearby terra firme
          forest. The bald uakari is closely tied to flooded forest, moving through the
          canopy and adjusting its range as water levels rise and fall through the year.
        </p>
      }
      diet={
        <p>
          Uakaris are seed predators and fruit-eaters with powerful jaws and teeth that let
          them bite into hard, unripe fruit and crack tough seed casings that are
          inaccessible to most other primates. They also eat ripe fruit, flowers, leaves,
          and some insects. This ability to use unripe fruit is especially valuable in the
          lean season when little ripe fruit is available.
        </p>
      }
      behavior={
        <p>
          Uakaris are social and live in groups that can be large, moving energetically
          through the flooded-forest canopy with strong leaps. In the bald uakari, the
          intensity of the red face is linked to health — a pale face can indicate illness
          (such as malaria), so the bright crimson colour serves as an honest signal of
          fitness that influences mate choice. Uakaris are agile and active, spending most
          of their time high in the trees above the water.
        </p>
      }
      humanInteraction={
        <p>
          Uakaris are remarkable, little-seen monkeys and an emblem of Amazonian
          flooded-forest diversity, but they are declining due to deforestation and hunting,
          and their reliance on specific flooded habitats makes them vulnerable. Protecting
          intact riverine forest is important for their future. Consult the IUCN Red List
          for species-specific status.
        </p>
      }
      faqs={[
        {
          question: "Why does the bald uakari have a bright red face?",
          answer:
            "The crimson face is an honest signal of health. The bare facial skin flushes red with good blood flow in a healthy animal, while illness — such as malaria — can leave it pale. Because a vivid red face indicates fitness, it plays a role in social standing and mate choice among uakaris.",
        },
        {
          question: "Why do uakaris have such short tails?",
          answer:
            "Uakaris are unusual among South American monkeys in having short, stubby tails rather than the long (often prehensile) tails of many relatives. They rely on powerful limbs and leaping to move through the canopy, and the short tail is one of their most distinctive features.",
        },
        {
          question: "What do uakaris eat?",
          answer:
            "Uakaris are seed predators and fruit-eaters with strong jaws that can crack hard, unripe fruit and tough seeds other animals can't open. They also take ripe fruit, flowers, leaves, and some insects. This skill with unripe fruit is a big advantage during the season when ripe fruit is scarce.",
        },
        {
          question: "Are uakaris endangered?",
          answer:
            "The bald uakari is assessed as Vulnerable, and uakaris generally are declining. Habitat loss from deforestation and hunting are the main threats, and their dependence on specific flooded forests adds to their vulnerability. Current status should be checked against the IUCN Red List.",
        },
      ]}
      quickFacts={[
        { label: "Reference species", value: "Cacajao calvus (bald uakari)" },
        { label: "Class", value: "Mammalia (New World monkey)" },
        { label: "Distinctive traits", value: "Short tail; bright red bald face" },
        { label: "Diet", value: "Seed predator & fruit-eater" },
        { label: "Habitat", value: "Seasonally flooded Amazon forest" },
        { label: "Red face", value: "Signals health/fitness" },
        { label: "Range", value: "Western Amazon basin" },
        { label: "IUCN Status", value: "Vulnerable (verify)" },
      ]}
      relatedLinks={[
        { label: "Saki Monkey Profile", href: "/animals/saki-monkey", description: "A close relative (same family)" },
        { label: "Marmoset Profile", href: "/animals/marmoset", description: "Another New World monkey" },
        { label: "Tamarin Profile", href: "/animals/tamarin", description: "A small New World monkey" },
        { label: "Endangered Animals", href: "/endangered-animals", description: "IUCN Red List categories" },
        { label: "Mammal Encyclopedia", href: "/animal-encyclopedia/mammals" },
      ]}
    />
  );
}
