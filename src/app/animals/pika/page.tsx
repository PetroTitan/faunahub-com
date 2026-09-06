import type { Metadata } from "next";
import AnimalProfileLayout from "@/components/AnimalProfileLayout";
import { ANIMAL_SOURCES } from "@/lib/educational/animal-sources";
import { getAnimalGalleryImages, getAnimalImage, getAnimalOgImage } from "@/lib/images/animal-images";
import { buildArticleMetadata } from "@/lib/metadata";

const PATH = "/animals/pika";
const TITLE = "Pika — Profile, Haypiles, Talus Habitat & Cold Adaptation";
const DESC =
  "Explore pikas (Ochotona): small round-eared relatives of rabbits that cut and dry vegetation into haypiles instead of hibernating through winter.";

export const metadata: Metadata = buildArticleMetadata({
  title: TITLE,
  description: DESC,
  path: PATH,
  publishedTime: "2026-09-06",
  modifiedTime: "2026-09-06",
  ogImage: getAnimalOgImage("pika"),
});

export default function PikaPage() {
  return (
    <AnimalProfileLayout
      commonName="Pika"
      scientificName="genus Ochotona"
      pageTitle={TITLE}
      description={DESC}
      path={PATH}
      parentCategory="Mammals"
      parentCategoryHref="/animal-encyclopedia/mammals"
      tags={["Mammal","Lagomorph","Mountain"]}
      image={getAnimalImage("pika") ?? undefined}
      galleryImages={getAnimalGalleryImages("pika")}
      sources={ANIMAL_SOURCES.pika}
      factsHeaderNote="“Pika” covers around thirty species in the genus Ochotona across Asia and North America. Rock-dwelling and burrowing species differ in habits, so statements here are general to the group."
      publishedDate="2026-09-06"
      modifiedDate="2026-09-06"
      overview={
        <>
        <p>
          Pikas are small, round-bodied mammals with short rounded ears, no visible tail, and a high-pitched call. They look like rodents but are not: pikas are <strong>lagomorphs</strong>, the same order as rabbits and hares, and form its second family, the Ochotonidae.
        </p>
        <p>
          Around thirty species occupy cold environments across Asia and western North America. Broadly they fall into two groups: rock-dwelling pikas that live in talus — the loose scree at the foot of cliffs — and burrowing pikas of open steppe and meadow.
        </p>
        <p>
          Pikas do not hibernate. Instead they spend the short growing season cutting vegetation and drying it into stores known as <strong>haypiles</strong>, which they eat through the winter beneath the snow.
        </p>
        </>
      }
      habitat={
        <>
        <p>
          Pikas live in cold, often high-elevation habitats: alpine talus slopes and boulder fields, mountain meadows, and the steppe and plateau grasslands of Central Asia. Rock-dwelling species shelter in the spaces between boulders, while burrowing species dig their own tunnel systems in open ground. Many pikas are poorly tolerant of heat, which ties them to cool microclimates.
        </p>
        </>
      }
      diet={
        <>
        <p>
          Pikas are herbivores, eating grasses, sedges, forbs, mosses, lichens and the leaves and twigs of low shrubs. Much of the summer is spent harvesting rather than simply feeding: vegetation is cut, carried in the mouth, and laid out to cure before being stored in a haypile under rock cover.
        </p>
        </>
      }
      behavior={
        <>
        <p>
          Pikas are diurnal and vocal, using sharp calls to advertise territory and warn of predators. Rock-dwelling species tend to be territorial and live at low density, while many burrowing species are far more social and live in family groups. Haymaking is the defining behaviour: individuals make repeated trips through the short summer, and neighbours may attempt to steal from one another&apos;s piles.
        </p>
        </>
      }
      humanInteraction={
        <>
        <p>
          Pikas are widely used as indicators of climate change in mountain systems, because their heat sensitivity and reliance on cool talus make them vulnerable to warming and to changes in snowpack that affect winter insulation. In parts of Asia, burrowing pikas have been the target of control campaigns, though their role in grassland ecosystems — as prey and as burrow-makers for other species — is increasingly recognised. Status varies by species; verify at the IUCN Red List.
        </p>
        </>
      }
      faqs={[
        {
          question: "Is a pika a rodent?",
          answer:
            "No. Pikas are lagomorphs — the order that also contains rabbits and hares — and make up its second family, Ochotonidae. They differ from rodents in their tooth arrangement, including a second small pair of upper incisors sitting behind the first.",
        },
        {
          question: "Do pikas hibernate?",
          answer:
            "No. Pikas stay active all winter beneath the snow and rely on food they gathered in summer. Through the short growing season they cut vegetation, dry it, and store it in haypiles under rocks, which is what carries them through the cold months.",
        },
        {
          question: "What is a haypile?",
          answer:
            "It is a pika's winter food store: a cache of vegetation that the animal has cut, carried, laid out to cure and then stacked in a sheltered spot among rocks. Building one takes hundreds of foraging trips across a single short summer.",
        },
        {
          question: "Why are pikas considered climate indicators?",
          answer:
            "Many pikas tolerate heat poorly and depend on cool talus and reliable snowpack — snow insulates them through winter. Because they are tied to those conditions and cannot easily move between isolated mountain habitats, changes in their distribution are watched closely as a signal of warming.",
        },
      ]}
      quickFacts={[
        { label: "Genus", value: "Ochotona — about 30 species" },
        { label: "Order", value: "Lagomorpha (with rabbits and hares)" },
        { label: "Family", value: "Ochotonidae" },
        { label: "Class", value: "Mammalia" },
        { label: "Winter strategy", value: "Haypiles — no hibernation" },
        { label: "Habitat", value: "Talus slopes, alpine meadow, steppe" },
        { label: "Tail", value: "Not externally visible" },
        { label: "Status", value: "Varies by species — verify" },
      ]}
      relatedLinks={[
        { label: "Rabbit Profile", href: "/animals/rabbit", description: "A fellow lagomorph" },
        { label: "European Hare Profile", href: "/animals/european-hare" },
        { label: "Groundhog Profile", href: "/animals/groundhog", description: "A burrowing ground squirrel" },
        { label: "Hibernation & Torpor", href: "/animal-senses-and-adaptations/hibernation-and-torpor" },
        { label: "Mammal Encyclopedia", href: "/animal-encyclopedia/mammals" },
      ]}
    />
  );
}
