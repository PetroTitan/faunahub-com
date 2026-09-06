import type { Metadata } from "next";
import AnimalProfileLayout from "@/components/AnimalProfileLayout";
import { ANIMAL_SOURCES } from "@/lib/educational/animal-sources";
import { getAnimalGalleryImages, getAnimalImage, getAnimalOgImage } from "@/lib/images/animal-images";
import { buildArticleMetadata } from "@/lib/metadata";

const PATH = "/animals/kingsnake";
const TITLE = "Kingsnake — Profile, Snake-Eating Habits & Venom Resistance";
const DESC =
  "Explore the common kingsnake (Lampropeltis getula): a North American constrictor that eats other snakes and resists pit viper venom.";

export const metadata: Metadata = buildArticleMetadata({
  title: TITLE,
  description: DESC,
  path: PATH,
  publishedTime: "2026-09-06",
  modifiedTime: "2026-09-06",
  ogImage: getAnimalOgImage("kingsnake"),
});

export default function KingsnakePage() {
  return (
    <AnimalProfileLayout
      commonName="Kingsnake"
      scientificName="Lampropeltis getula"
      pageTitle={TITLE}
      description={DESC}
      path={PATH}
      parentCategory="Reptiles & Amphibians"
      parentCategoryHref="/animal-encyclopedia/reptiles"
      tags={["Reptile","Snake","North America"]}
      image={getAnimalImage("kingsnake") ?? undefined}
      galleryImages={getAnimalGalleryImages("kingsnake")}
      sources={ANIMAL_SOURCES.kingsnake}
      publishedDate="2026-09-06"
      modifiedDate="2026-09-06"
      overview={
        <>
        <p>
          The common kingsnake (<em>Lampropeltis getula</em>) is a smooth, glossy, non-venomous constrictor of North America. Patterns vary enormously across its range — chain-like bands, speckles, stripes or near-uniform dark forms — and the genus name <em>Lampropeltis</em> means &apos;shiny shield&apos;, a reference to the polished scales.
        </p>
        <p>
          The &apos;king&apos; in the name refers to diet. Kingsnakes are <strong>ophiophagous</strong>: they eat other snakes, including rattlesnakes, copperheads and cottonmouths, which they overpower by constriction.
        </p>
        <p>
          What makes that possible is a striking physiological trait — kingsnakes have substantial <strong>resistance to pit viper venom</strong>, so a defensive bite from a rattlesnake does not stop them.
        </p>
        </>
      }
      habitat={
        <>
        <p>
          Common kingsnakes occupy a wide range of habitats across the southern and central United States and into northern Mexico: pine and hardwood forest, grassland, farmland, desert, marsh edges, rocky hillsides and suburban margins. They shelter under logs, rocks, debris and in burrows, and are found from sea level into hill country.
        </p>
        </>
      }
      diet={
        <>
        <p>
          Kingsnakes have a broad diet: other snakes, lizards, small mammals, birds, eggs, frogs and turtle eggs. Snakes are a notable component and the source of the name. All prey is killed by constriction — kingsnakes are known for exerting a powerful, efficient constriction relative to their size.
        </p>
        </>
      }
      behavior={
        <>
        <p>
          Kingsnakes are active by day in cooler conditions and shift toward dawn, dusk and night in hot weather. They are ground-dwelling and largely solitary. Defensive behaviour includes tail-vibrating, musking and hissing rather than aggression toward people. Females lay eggs and do not attend them. Where kingsnakes are common, local rattlesnakes may respond to their scent with a distinctive body-bridging defensive posture rather than by striking.
        </p>
        </>
      }
      humanInteraction={
        <>
        <p>
          Kingsnakes are harmless to people and are often valued for preying on venomous snakes and rodents, though this reputation should not encourage anyone to handle wild snakes. Some regional populations have declined, with habitat change, road mortality and other pressures implicated. This profile offers no handling, identification-for-safety, first-aid or pet-care guidance: unidentified snakes should be left alone and questions directed to local wildlife authorities. Verify current status at the IUCN Red List.
        </p>
        </>
      }
      faqs={[
        {
          question: "Do kingsnakes really eat other snakes?",
          answer:
            "Yes — it is where the name comes from. Kingsnakes are ophiophagous, meaning snakes form a significant part of their diet, and they take venomous species such as rattlesnakes and copperheads as well as non-venomous ones. Prey is killed by constriction.",
        },
        {
          question: "Are kingsnakes immune to venom?",
          answer:
            "They have substantial resistance to pit viper venom rather than complete immunity. That resistance is what allows a kingsnake to subdue a rattlesnake despite being bitten during the struggle. It does not extend to all venoms, and 'resistant' is a more accurate word than 'immune'.",
        },
        {
          question: "Are kingsnakes venomous?",
          answer:
            "No. Kingsnakes are non-venomous colubrids that kill by constriction, and they are harmless to people. A cornered kingsnake may hiss, vibrate its tail or release musk rather than bite. This profile gives no handling advice — wild snakes are best left undisturbed.",
        },
        {
          question: "Why is it called a kingsnake?",
          answer:
            "Because it preys on other snakes, including venomous ones — a 'king' among snakes in the sense of sitting above them in the food chain. The genus name Lampropeltis, meaning 'shiny shield', refers instead to its smooth, glossy scales.",
        },
      ]}
      quickFacts={[
        { label: "Scientific name", value: "Lampropeltis getula" },
        { label: "Family", value: "Colubridae" },
        { label: "Class", value: "Reptilia" },
        { label: "Venom", value: "None — a constrictor" },
        { label: "Diet", value: "Includes other snakes (ophiophagous)" },
        { label: "Notable trait", value: "Resistance to pit viper venom" },
        { label: "Pattern", value: "Highly variable across the range" },
        { label: "Range", value: "Southern/central USA into Mexico" },
      ]}
      relatedLinks={[
        { label: "Corn Snake Profile", href: "/animals/corn-snake" },
        { label: "Rattlesnake Profile", href: "/animals/rattlesnake", description: "Kingsnake prey" },
        { label: "Coral Snake Profile", href: "/animals/coral-snake" },
        { label: "Snake Profile", href: "/animals/snake", description: "Group-level overview" },
        { label: "Reptiles & Amphibians", href: "/animal-encyclopedia/reptiles" },
      ]}
    />
  );
}
