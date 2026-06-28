import type { Metadata } from "next";
import AnimalProfileLayout from "@/components/AnimalProfileLayout";
import { ANIMAL_SOURCES } from "@/lib/educational/animal-sources";
import { getAnimalGalleryImages, getAnimalImage, getAnimalOgImage } from "@/lib/images/animal-images";
import { buildArticleMetadata } from "@/lib/metadata";

const PATH = "/animals/alpine-ibex";
const TITLE = "Alpine Ibex: Wild Goat of the European Alps";
const DESC =
  "Learn about the Alpine ibex (Capra ibex), a wild goat of the European Alps known for its huge ridged horns, steep rocky habitat, and conservation recovery.";

export const metadata: Metadata = buildArticleMetadata({
  title: TITLE,
  description: DESC,
  path: PATH,
  publishedTime: "2026-06-27",
  modifiedTime: "2026-06-27",
  ogImage: getAnimalOgImage("alpine-ibex"),
});

export default function AlpineIbexPage() {
  return (
    <AnimalProfileLayout
      commonName="Alpine Ibex"
      scientificName="Capra ibex"
      pageTitle={TITLE}
      description={DESC}
      path={PATH}
      parentCategory="Mammals"
      parentCategoryHref="/animal-encyclopedia/mammals"
      tags={["Mammal","Wild goat","Alpine"]}
      image={getAnimalImage("alpine-ibex") ?? undefined}
      galleryImages={getAnimalGalleryImages("alpine-ibex")}
      sources={ANIMAL_SOURCES["alpine-ibex"]}
      publishedDate="2026-06-27"
      modifiedDate="2026-06-27"
      overview={
        <>
          <p>
            The Alpine ibex (<em>Capra ibex</em>) is a wild goat strongly associated with the high mountains of the European Alps. It is best known for the dramatically large, backward-curving horns carried by males and for its ease on steep, rocky terrain that few other large mammals can use. The species is a familiar emblem of the alpine high country, often seen standing on rock ledges and slopes well above the tree line.
          </p>
          <p>
            The Alpine ibex is also notable for a well-documented conservation history. By the nineteenth century the species had been reduced to a single remnant population in the Gran Paradiso area of Italy. From that surviving stock, animals were used to re-establish populations across many parts of the Alps through reintroduction programs over the following decades. The IUCN Red List currently assesses the Alpine ibex as Least Concern, an assessment that reflects present conditions and can be revised as new information becomes available.
          </p>
          <p>
            This profile offers a calm, educational overview of the Alpine ibex, covering its appearance, alpine habitat, feeding ecology, behavior, and its place in mountain ecosystems. It is not a guide to keeping, approaching, or interacting with the animal, which is a wild mammal of remote terrain.
          </p>
          <h3>Taxonomy and animal group</h3>
          <p>
            The Alpine ibex (<em>Capra ibex</em>) is a mammal in the family Bovidae, the same family that includes cattle, sheep, antelope, and other goats. Within the order Artiodactyla, the even-toed ungulates, it belongs to the genus <em>Capra</em>, the true goats, and is closely related to other ibex species and to the domestic goat. It is distinct from similar mountain ungulates such as the chamois, which belongs to a different genus, and from other regional ibex such as the Iberian or Nubian ibex. As a wild goat, the Alpine ibex is a hoofed, plant-eating mammal adapted to rugged terrain.
          </p>
          <h3>Appearance and recognition</h3>
          <p>
            The Alpine ibex is a robustly built wild goat with a stocky body, sturdy legs, and a short tail. The most striking feature is found in males, whose long horns sweep backward in a curve and bear prominent transverse ridges along their length; females carry much shorter, more slender horns. The coat is generally brownish or grayish, often lighter on the underparts, and tends to grow thicker in winter. Males are noticeably larger and heavier than females, and adult males may show a small beard. The broad, hard-edged hooves help the animal grip rock and balance on narrow ledges.
          </p>
        </>
      }
      habitat={
        <p>
          The Alpine ibex is closely tied to the high mountains of the European Alps, where it occupies steep rocky slopes, cliffs, and open alpine meadows, frequently above the tree line. It favors rugged terrain that offers secure footing and escape routes among rocks. Its distribution is associated with mountainous parts of countries within the Alpine range, and many present-day populations exist as a result of reintroduction following the species&#39; historical decline. The Alpine ibex should be understood as a specialist of these alpine zones rather than as an animal found across all of Europe, and its range reflects both naturally persisting and reintroduced populations.
        </p>
      }
      diet={
        <p>
          The Alpine ibex is a herbivore that feeds on a range of mountain vegetation, including grasses, herbs, and the leaves and shoots of low-growing alpine plants. Its diet shifts with the seasons and with the availability of forage at different elevations, and animals often move to follow the growth of plants as snow recedes. Like other ruminants in its family, it processes plant material through a multi-chambered stomach, allowing it to extract nutrients from tough vegetation. Mineral sites where animals can obtain salts are also used where available.
        </p>
      }
      behavior={
        <>
          <p>
            Alpine ibex are social animals that for much of the year live in groups, with males and females often forming separate herds outside the breeding season. They are typically most active in the cooler hours of the day, resting on rocky ground during the heat. During the autumn rut, males compete for access to females, and rival males may rear up and clash their large horns in contests that help establish dominance. Females generally give birth in spring, usually to a single young, which is able to move over rocky terrain at an early age. The species is well adapted to seasonal change, moving between elevations as conditions shift through the year.
          </p>
          <p>
            As a large herbivore of the high mountains, the Alpine ibex plays a part in shaping alpine plant communities through its grazing and browsing. Its presence contributes to the food web of the Alps, with young, sick, or old individuals potentially available to large predators and scavengers in the region. The history of its decline and recovery has also made it a focus of long-term ecological and conservation study, providing insight into how reintroduced populations establish and how genetic diversity is affected when a species passes through a small remnant population. In this way the Alpine ibex is both a participant in mountain ecosystems and a subject of conservation science.
          </p>
        </>
      }
      humanInteraction={
        <p>
          The Alpine ibex has a long cultural presence in the Alps and is widely valued as a symbol of mountain wildlife and of successful conservation through reintroduction. It is currently listed as Least Concern on the IUCN Red List, an assessment that can change as monitoring continues, and populations remain the subject of ongoing management and study. The Alpine ibex is a wild animal and not a pet; observers should keep a respectful distance and avoid disturbing or feeding it. Concerns about wildlife encounters, animals in distress, or conflicts should be directed to local wildlife authorities rather than handled directly.
        </p>
      }
      faqs={[
        {
          question: "Where do Alpine ibex live?",
          answer:
            "Alpine ibex are associated with the high mountains of the European Alps, where they occupy steep rocky slopes, cliffs, and alpine meadows, often above the tree line. Many current populations result from reintroduction across parts of the Alpine range.",
        },
        {
          question: "Why are male Alpine ibex horns so large?",
          answer:
            "Males carry long, backward-curving horns with prominent ridges, which they use in contests with rival males during the breeding season to help establish dominance. Females have much shorter, more slender horns.",
        },
        {
          question: "Is the Alpine ibex endangered?",
          answer:
            "The IUCN Red List currently assesses the Alpine ibex as Least Concern. This reflects present conditions and is an assessment that can be revised as new information becomes available.",
        },
        {
          question: "How did the Alpine ibex recover from near disappearance?",
          answer:
            "By the nineteenth century the species had been reduced to a single remnant population in the Gran Paradiso area of Italy. Animals from that surviving stock were later used in reintroduction programs that re-established populations across many parts of the Alps.",
        },
      ]}
      quickFacts={[
        { label: "Scientific name", value: "Capra ibex" },
        { label: "Animal group", value: "Mammal (wild goat)" },
        { label: "Family or order", value: "Bovidae; order Artiodactyla" },
        { label: "Size", value: "Stocky goat; males larger, with long ridged horns" },
        { label: "Diet", value: "Herbivore (grasses, herbs, alpine plants)" },
        { label: "Habitat", value: "Steep rocky alpine slopes, often above the tree line" },
        { label: "Range", value: "Associated with the European Alps" },
        { label: "Conservation status", value: "Least Concern (IUCN Red List)" },
      ]}
      relatedLinks={[
        { label: "Goat Profile", href: "/animals/goat", description: "Domestic goats, close relatives" },
        { label: "Red Deer Profile", href: "/animals/red-deer", description: "Another large European herbivore" },
        { label: "Golden Eagle", href: "/animals/golden-eagle", description: "A bird of the same mountains" },
        { label: "European fauna", href: "/fauna/continents/europe", description: "Animals of Europe" },
        { label: "Mammals", href: "/animal-encyclopedia/mammals" },
      ]}
    />
  );
}
