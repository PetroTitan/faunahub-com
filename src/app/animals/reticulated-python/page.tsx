import type { Metadata } from "next";
import AnimalProfileLayout from "@/components/AnimalProfileLayout";
import { ANIMAL_SOURCES } from "@/lib/educational/animal-sources";
import { getAnimalGalleryImages, getAnimalImage, getAnimalOgImage } from "@/lib/images/animal-images";
import { buildArticleMetadata } from "@/lib/metadata";

const PATH = "/animals/reticulated-python";
const TITLE = "Reticulated Python: World's Longest Snake";
const DESC =
  "Learn about the reticulated python (Malayopython reticulatus), a non-venomous constricting snake of South and Southeast Asia and the world's longest snake.";

export const metadata: Metadata = buildArticleMetadata({
  title: TITLE,
  description: DESC,
  path: PATH,
  publishedTime: "2026-06-27",
  modifiedTime: "2026-06-27",
  ogImage: getAnimalOgImage("reticulated-python"),
});

export default function ReticulatedPythonPage() {
  return (
    <AnimalProfileLayout
      commonName="Reticulated Python"
      scientificName="Malayopython reticulatus"
      pageTitle={TITLE}
      description={DESC}
      path={PATH}
      parentCategory="Reptiles & Amphibians"
      parentCategoryHref="/animal-encyclopedia/reptiles"
      tags={["Reptile","Constrictor","Non-venomous"]}
      image={getAnimalImage("reticulated-python") ?? undefined}
      galleryImages={getAnimalGalleryImages("reticulated-python")}
      sources={ANIMAL_SOURCES["reticulated-python"]}
      publishedDate="2026-06-27"
      modifiedDate="2026-06-27"
      overview={
        <>
          <p>
            The reticulated python (<em>Malayopython reticulatus</em>) is widely regarded as the world&#39;s longest snake, a large, non-venomous constrictor named for the intricate net-like (&quot;reticulated&quot;) pattern along its body. It is a heavy-bodied yet agile reptile associated with forests, grasslands, and rivers across parts of South and Southeast Asia, and it is an accomplished swimmer.
          </p>
          <p>
            Rather than relying on venom, the reticulated python subdues prey such as mammals and birds by constriction. Its patterning provides effective camouflage in dappled forest light, and large individuals are powerful animals. There are rare records of serious incidents involving very large snakes, which is one reason wild snakes should never be handled or approached.
          </p>
          <p>
            Details of the species&#39; range, behavior, and conservation status vary by region and population, and the figures here should be checked against authoritative sources such as the IUCN Red List and Animal Diversity Web. As a general safety note, anyone with concerns about a snake encounter or a possible bite should contact local wildlife authorities or qualified medical professionals; this profile is educational and offers no handling or first-aid guidance.
          </p>
          <h3>Taxonomy and animal group</h3>
          <p>
            The reticulated python is a member of the python family (Pythonidae), a group of non-venomous constricting snakes of the Old World tropics that are distinct from the boas. Long classified within the genus <em>Python</em>, it is now widely placed in the genus <em>Malayopython</em> as <em>Malayopython reticulatus</em>, reflecting refinements in how pythons are grouped. Pythons differ from the world&#39;s many venomous snakes in that they kill by constriction rather than by injecting venom.
          </p>
          <h3>Appearance and recognition</h3>
          <p>
            This species is best known for its great length and its bold, geometric pattern: a series of irregular diamond-like and net-like markings, often in shades of tan, brown, black, and gold, that break up the body&#39;s outline. The head typically bears a fine dark line running along its length. As one of the longest snakes in the world, large individuals are notably elongated and muscular, though the body is more slender in proportion than that of some bulkier python species. The scales can show an iridescent sheen in good light.
          </p>
        </>
      }
      habitat={
        <p>
          The reticulated python occurs across parts of South and Southeast Asia, where it is associated with a range of lowland habitats including rainforests, woodlands, grasslands, and the margins of rivers and other waterways. It is a strong swimmer and is often found near water. The species is also known to tolerate some human-modified landscapes near settlements. Because the precise extent of its range varies and includes many islands and regions, distribution details should be confirmed against authoritative range maps rather than assumed to cover the whole continent.
        </p>
      }
      diet={
        <p>
          As a constrictor, the reticulated python feeds on a variety of warm-blooded prey, chiefly mammals and birds, taken according to the size of the snake. It is an ambush hunter that locates prey using sight and chemical cues, then seizes and coils around the animal, killing it by constriction before swallowing it whole. Larger snakes are capable of taking correspondingly larger prey, and feeding is infrequent relative to the snake&#39;s size.
        </p>
      }
      behavior={
        <>
          <p>
            Reticulated pythons are generally solitary and spend much of their time concealed, relying on camouflage and stillness rather than speed. They are capable climbers and swimmers and may be active by day or night depending on conditions. Like other pythons, females lay eggs and are known to coil around the clutch during incubation. Wild individuals are best observed from a respectful distance and should not be approached or handled.
          </p>
          <p>
            As a large predator, the reticulated python plays a role in regulating populations of the mammals and birds it preys upon within the forest, grassland, and riverside ecosystems of parts of South and Southeast Asia. Its presence near waterways and even near human settlements means it can encounter a range of prey. As both predator and, when young, potential prey for other animals, it forms part of the food web in the tropical Asian environments where it occurs.
          </p>
        </>
      }
      humanInteraction={
        <p>
          The reticulated python is heavily affected by human use, particularly the skin trade and the international trade in live snakes, and these pressures vary considerably from place to place; such trade and exploitation are best understood as conservation concerns rather than activities to pursue. While the species is not generally considered globally threatened, local populations can be reduced by harvest and habitat change, so honest, source-checked information matters. Large pythons are powerful animals, and rare serious incidents have been recorded; for safety, wild snakes should never be handled or captured. Anyone facing a snake on their property or a possible bite should contact local wildlife authorities or qualified medical professionals rather than attempting to deal with the animal themselves.
        </p>
      }
      faqs={[
        {
          question: "Is the reticulated python venomous?",
          answer:
            "No. The reticulated python is a non-venomous snake. It subdues prey by constriction, coiling around the animal, rather than by injecting venom.",
        },
        {
          question: "Is the reticulated python really the world's longest snake?",
          answer:
            "It is widely regarded as the longest snake in the world by length. Reported maximum sizes vary between sources, so specific figures are best checked against authoritative references.",
        },
        {
          question: "Where is the reticulated python found?",
          answer:
            "It occurs across parts of South and Southeast Asia, in habitats such as forests, grasslands, and areas near rivers. Because its range spans many regions and islands, distribution details should be confirmed with authoritative range maps.",
        },
        {
          question: "Are large reticulated pythons dangerous to people?",
          answer:
            "Large individuals are powerful animals, and rare serious incidents have been recorded, which is why wild snakes should never be handled or approached. Anyone with a concern about a snake encounter or possible bite should contact local wildlife authorities or qualified medical professionals.",
        },
      ]}
      quickFacts={[
        { label: "Group", value: "Snakes (pythons)" },
        { label: "Higher classification", value: "Family Pythonidae; genus Malayopython" },
        { label: "Diet", value: "Carnivore; mammals and birds taken by constriction" },
        { label: "Notable trait", value: "Widely regarded as the world's longest snake; net-like pattern" },
        { label: "Habitat", value: "Forests, grasslands, and riverside areas; strong swimmer" },
        { label: "Asia distribution", value: "Occurs across parts of South and Southeast Asia" },
        { label: "Human interaction", value: "Affected by skin and pet trades; wild snakes should not be handled" },
        { label: "Conservation status", value: "Not generally globally threatened; local pressures vary" },
      ]}
      relatedLinks={[
        { label: "Python Profile", href: "/animals/python", description: "Pythons more broadly" },
        { label: "Boa Profile", href: "/animals/boa", description: "Another large constrictor" },
        { label: "Anaconda Profile", href: "/animals/anaconda", description: "A giant aquatic constrictor" },
        { label: "Asian fauna", href: "/fauna/continents/asia", description: "Animals of Asia" },
        { label: "Reptiles & Amphibians", href: "/animal-encyclopedia/reptiles" },
      ]}
    />
  );
}
