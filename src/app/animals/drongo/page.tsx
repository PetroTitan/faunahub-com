import type { Metadata } from "next";
import AnimalProfileLayout from "@/components/AnimalProfileLayout";
import { ANIMAL_SOURCES } from "@/lib/educational/animal-sources";
import { getAnimalGalleryImages, getAnimalImage, getAnimalOgImage } from "@/lib/images/animal-images";
import { buildArticleMetadata } from "@/lib/metadata";

const PATH = "/animals/drongo";
const TITLE = "Drongo — Profile, the Bold Black Birds That Mimic Alarm Calls to Steal Food";
const DESC =
  "Explore drongos (family Dicruridae): glossy black, fork-tailed birds of the Old World tropics — fierce nest-defenders and clever mimics that fake alarm calls to scare animals off their food.";

export const metadata: Metadata = buildArticleMetadata({
  title: TITLE,
  description: DESC,
  path: PATH,
  publishedTime: "2026-06-22",
  modifiedTime: "2026-06-22",
  ogImage: getAnimalOgImage("drongo"),
});

export default function DrongoPage() {
  return (
    <AnimalProfileLayout
      commonName="Drongo"
      scientificName="family Dicruridae"
      pageTitle={TITLE}
      description={DESC}
      path={PATH}
      parentCategory="Birds"
      parentCategoryHref="/animal-encyclopedia/birds"
      tags={["Bird", "Old World", "Mimic"]}
      image={getAnimalImage("drongo") ?? undefined}
      galleryImages={getAnimalGalleryImages("drongo")}
      sources={ANIMAL_SOURCES.drongo}
      publishedDate="2026-06-22"
      modifiedDate="2026-06-22"
      overview={
        <>
          <p>
            Drongos (family Dicruridae) are glossy black, medium-sized birds of the warmer parts of Africa,
            Asia, and Australasia, typically with a distinctive forked or curled tail and bold, fearless
            personalities. The black drongo (<em>Dicrurus macrocercus</em>), shown here, is a familiar bird
            of open farmland across Asia, while the crested and racket-tailed drongos sport spectacular tail
            ornaments. Drongos are agile fliers and aggressive aerial insect-hunters.
          </p>
          <p>
            They are famous for two things: ferociously defending their nests — mobbing crows, hawks, and
            even much larger animals — and a remarkable cleverness, as some drongos imitate the alarm calls
            of other animals to frighten them off freshly caught food, then swoop in to steal it.
          </p>
          <p>
            <strong>Note:</strong> &ldquo;drongo&rdquo; covers a family of species; details here use the
            black drongo as a reference. Treat general statements as approximate and verify against
            authoritative sources.
          </p>
        </>
      }
      habitat={
        <p>
          Drongos live across sub-Saharan Africa, South and Southeast Asia, and into Australasia, in open
          woodland, savanna, forest edge, farmland, and gardens. Many favour open country with scattered
          trees, fences, or wires to perch on and watch for insects, while forest species keep to the trees;
          the adaptable black drongo is a common sight over fields and pastures.
        </p>
      }
      diet={
        <p>
          Drongos are mainly insectivores, catching flying insects — beetles, grasshoppers, dragonflies,
          bees, wasps, and more — in swift aerial sallies from a perch, and they also take some small
          vertebrates and, occasionally, nectar. Many follow grazing animals or join other birds to snap up
          insects flushed from the grass, and they readily exploit insects driven out by fires.
        </p>
      }
      behavior={
        <p>
          Drongos are bold, alert, and pugnacious. They perch conspicuously and sally out to seize insects in
          flight, and they vigorously defend their nests, fearlessly mobbing crows, raptors, and intruders far
          larger than themselves — a trait that makes them useful &ldquo;protectors&rdquo; whose nesting areas
          other birds sometimes shelter near. Most remarkable is their deception: studies of the fork-tailed
          drongo in Africa show that it gives true alarm calls to warn of real danger, but also sometimes
          mimics the alarm calls of other species (and even other birds&apos; calls) as a false alarm,
          startling animals like meerkats into dropping or fleeing their food, which the drongo then snatches.
          They are accomplished vocal mimics in general.
        </p>
      }
      humanInteraction={
        <p>
          Drongos are familiar and often welcome birds around farmland, where they help control insect
          pests, and their boldness and antics make them a favourite of birdwatchers. Many species are common
          and adaptable, thriving in human-altered landscapes, though some island or restricted-range species
          are of conservation concern. They are harmless to people. Consult the IUCN Red List for
          species-specific status.
        </p>
      }
      faqs={[
        {
          question: "Do drongos really trick other animals to steal food?",
          answer:
            "Yes — it's one of the most striking examples of deception in birds. The fork-tailed drongo in Africa gives genuine alarm calls to warn of real predators, but it also sometimes makes false alarm calls — often mimicking other species — to scare animals like meerkats into abandoning their food, which the drongo then swoops in and steals. It even varies its trickery to keep its targets fooled.",
        },
        {
          question: "Why are drongos so aggressive at the nest?",
          answer:
            "Drongos fiercely defend their nests, fearlessly mobbing and harassing crows, hawks, and other intruders far larger than themselves. This bold defence protects their own eggs and chicks, and it has a side benefit: other birds sometimes nest nearby to take advantage of the drongo's protective aggression.",
        },
        {
          question: "What do drongos eat?",
          answer:
            "Mainly flying insects — beetles, grasshoppers, dragonflies, bees, wasps, and the like — caught in quick aerial sallies from a perch, plus some small vertebrates and occasionally nectar. Drongos often follow grazing animals or join mixed bird flocks to grab insects flushed from the vegetation, and they exploit insects driven out by fires.",
        },
        {
          question: "Why do some drongos have such fancy tails?",
          answer:
            "Many drongos have forked tails, and some species take this further: the racket-tailed drongos have two long tail feathers ending in 'rackets,' and the crested drongo has a tufted crest. These ornaments feature in display and help identify the species. The familiar black drongo has a simpler deeply forked tail.",
        },
      ]}
      quickFacts={[
        { label: "Group", value: "Family Dicruridae (drongos)" },
        { label: "Reference species", value: "Dicrurus macrocercus (black drongo)" },
        { label: "Class", value: "Aves (songbird)" },
        { label: "Look", value: "Glossy black; forked or ornamented tail" },
        { label: "Diet", value: "Mainly flying insects (aerial sallies)" },
        { label: "Famous for", value: "Fierce nest defence; false-alarm food theft" },
        { label: "Skill", value: "Vocal mimic" },
        { label: "Range", value: "Africa, Asia & Australasia" },
      ]}
      relatedLinks={[
        { label: "Bee-eater Profile", href: "/animals/bee-eater", description: "Another aerial insect-hunter" },
        { label: "Roller Profile", href: "/animals/roller", description: "Another bold perch-hunting bird" },
        { label: "Meerkat Profile", href: "/animals/meerkat", description: "A drongo target of false alarm calls" },
        { label: "Fauna by Continent", href: "/fauna/continents", description: "Old World fauna in context" },
        { label: "Birds Encyclopedia", href: "/animal-encyclopedia/birds" },
      ]}
    />
  );
}
