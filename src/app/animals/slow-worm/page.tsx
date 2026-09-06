import type { Metadata } from "next";
import AnimalProfileLayout from "@/components/AnimalProfileLayout";
import { ANIMAL_SOURCES } from "@/lib/educational/animal-sources";
import { getAnimalGalleryImages, getAnimalImage, getAnimalOgImage } from "@/lib/images/animal-images";
import { buildArticleMetadata } from "@/lib/metadata";

const PATH = "/animals/slow-worm";
const TITLE = "Slow Worm — Profile, Legless Lizard Biology & Garden Habitat";
const DESC =
  "Explore the slow worm (Anguis fragilis): a legless lizard often mistaken for a snake, with eyelids it can blink, a sheddable tail, and a taste for slugs.";

export const metadata: Metadata = buildArticleMetadata({
  title: TITLE,
  description: DESC,
  path: PATH,
  publishedTime: "2026-09-06",
  modifiedTime: "2026-09-06",
  ogImage: getAnimalOgImage("slow-worm"),
});

export default function SlowWormPage() {
  return (
    <AnimalProfileLayout
      commonName="Slow Worm"
      scientificName="Anguis fragilis"
      pageTitle={TITLE}
      description={DESC}
      path={PATH}
      parentCategory="Reptiles & Amphibians"
      parentCategoryHref="/animal-encyclopedia/reptiles"
      tags={["Reptile","Legless Lizard","Europe"]}
      image={getAnimalImage("slow-worm") ?? undefined}
      galleryImages={getAnimalGalleryImages("slow-worm")}
      sources={ANIMAL_SOURCES["slow-worm"]}
      publishedDate="2026-09-06"
      modifiedDate="2026-09-06"
      overview={
        <>
        <p>
          The slow worm (<em>Anguis fragilis</em>) is one of the most commonly misidentified animals in Europe. It is neither a worm nor a snake: it is a <strong>legless lizard</strong>, and its smooth, glossy, uniformly coloured body simply lacks limbs.
        </p>
        <p>
          Two features settle the identification immediately. A slow worm has <strong>movable eyelids and can blink</strong> — snakes cannot, since their eyes are covered by a fixed transparent scale — and it has a fleshy, notched tongue rather than the deeply forked tongue of a snake.
        </p>
        <p>
          Its scientific name means &apos;fragile snake&apos;, a reference to the third giveaway: like many lizards, a slow worm can shed its tail when seized, leaving the still-twitching tail behind while it escapes.
        </p>
        </>
      }
      habitat={
        <>
        <p>
          Slow worms are widespread across Europe and into western Asia, in grassland, heath, woodland edges, hedgerows, railway embankments, allotments and gardens. They favour places with dense low vegetation, warmth and cover, and spend much of their time hidden — under logs, stones, compost heaps and corrugated sheets — rather than basking openly like many lizards.
        </p>
        </>
      }
      diet={
        <>
        <p>
          Slow worms feed largely on slow-moving soft-bodied invertebrates, above all <strong>slugs</strong>, along with snails, earthworms, insect larvae and spiders. Their small, slightly backward-curved teeth are suited to gripping soft, slippery prey. That diet is why they are so welcome in gardens and allotments.
        </p>
        </>
      }
      behavior={
        <>
        <p>
          Slow worms are secretive and semi-fossorial, spending much time underground or beneath cover, and often thermoregulate by lying under sun-warmed objects rather than in the open. They are long-lived for a small reptile. Unusually, slow worms give birth to live young rather than laying eggs, and they hibernate through the winter, sometimes communally, in burrows and other sheltered places.
        </p>
        </>
      }
      humanInteraction={
        <>
        <p>
          Slow worms are harmless to people and beneficial to gardeners because of their appetite for slugs, but they are frequently killed through mistaken identity as snakes, and are vulnerable to cats, strimmers and habitat tidying. In several countries, including the UK, they are legally protected. Providing undisturbed cover such as log piles, compost heaps and rough corners supports them. This profile offers no handling or keeping guidance; wild reptiles should be left undisturbed and questions referred to local wildlife authorities. Verify current status at the IUCN Red List.
        </p>
        </>
      }
      faqs={[
        {
          question: "Is a slow worm a snake?",
          answer:
            "No. It is a legless lizard. The quickest checks are the eyes and tongue: a slow worm has movable eyelids and can blink, which no snake can do, and it has a fleshy notched tongue rather than a deeply forked one. It can also shed its tail, as many lizards do.",
        },
        {
          question: "Why is a slow worm called fragile?",
          answer:
            "Its scientific name, Anguis fragilis, refers to its ability to shed its tail. When seized, the slow worm can detach the tail, which continues to twitch and distracts the predator while the animal escapes. The tail regrows, but usually shorter and blunter than the original.",
        },
        {
          question: "Do slow worms eat slugs?",
          answer:
            "Yes — slugs are a major part of the diet, along with snails, earthworms, insect larvae and spiders. Their small backward-curved teeth are well suited to gripping soft, slippery prey, which is why slow worms are considered a gardener's ally.",
        },
        {
          question: "Do slow worms lay eggs?",
          answer:
            "No. Unlike most lizards, slow worms give birth to live young. They also hibernate through winter — sometimes several animals together — in burrows, root systems and other sheltered underground places.",
        },
      ]}
      quickFacts={[
        { label: "Scientific name", value: "Anguis fragilis" },
        { label: "Family", value: "Anguidae" },
        { label: "Class", value: "Reptilia" },
        { label: "What it is", value: "A legless lizard, not a snake" },
        { label: "Key tells", value: "Blinking eyelids; notched tongue" },
        { label: "Defence", value: "Sheds its tail (autotomy)" },
        { label: "Diet", value: "Slugs, snails, worms, larvae" },
        { label: "Reproduction", value: "Gives birth to live young" },
      ]}
      relatedLinks={[
        { label: "Legless Lizard Profile", href: "/animals/legless-lizard" },
        { label: "Glass Lizard Profile", href: "/animals/glass-lizard" },
        { label: "European Viper Profile", href: "/animals/european-viper", description: "A snake it is confused with" },
        { label: "Skink Profile", href: "/animals/skink" },
        { label: "Reptiles & Amphibians", href: "/animal-encyclopedia/reptiles" },
      ]}
    />
  );
}
