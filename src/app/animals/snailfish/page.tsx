import type { Metadata } from "next";
import AnimalProfileLayout from "@/components/AnimalProfileLayout";
import { ANIMAL_SOURCES } from "@/lib/educational/animal-sources";
import { getAnimalGalleryImages, getAnimalImage, getAnimalOgImage } from "@/lib/images/animal-images";
import { buildArticleMetadata } from "@/lib/metadata";

const PATH = "/animals/snailfish";
const TITLE = "Snailfish (Liparidae): Soft Fish of Shallows to Hadal Deep";
const DESC =
  "Snailfish (family Liparidae) are soft, scaleless fish ranging from tide pools to the deepest ocean trenches, including some of the deepest fish ever recorded.";

export const metadata: Metadata = buildArticleMetadata({
  title: TITLE,
  description: DESC,
  path: PATH,
  publishedTime: "2026-06-27",
  modifiedTime: "2026-06-27",
  ogImage: getAnimalOgImage("snailfish"),
});

export default function SnailfishPage() {
  return (
    <AnimalProfileLayout
      commonName="Snailfish"
      scientificName="family Liparidae"
      pageTitle={TITLE}
      description={DESC}
      path={PATH}
      parentCategory="Fish"
      parentCategoryHref="/animal-encyclopedia/fish"
      tags={["Marine fish","Deep sea","Hadal zone"]}
      image={getAnimalImage("snailfish") ?? undefined}
      galleryImages={getAnimalGalleryImages("snailfish")}
      sources={ANIMAL_SOURCES["snailfish"]}
      publishedDate="2026-06-27"
      modifiedDate="2026-06-27"
      overview={
        <>
          <p>
            Snailfish make up the family <em>Liparidae</em>, a large and varied group of soft, scaleless fish with loose, gelatinous skin and a rounded, tadpole-shaped body. Many species carry a sucker-like pelvic disc that lets them cling to rocks, the seafloor, or other surfaces. Familiar genera include <em>Liparis</em>, <em>Pseudoliparis</em>, and <em>Careproctus</em>. Rather than being a single kind of fish from one place, the family spans an enormous range, from cold tide pools and shallow seas to the very deepest parts of the ocean.
          </p>
          <p>
            Some snailfish are among the deepest-living fish known. The Mariana snailfish, <em>Pseudoliparis swirei</em>, has been filmed and collected in the Mariana Trench at hadal depths of roughly 8,000 metres, placing it among the deepest fish ever recorded. Because the family overall occupies such a wide depth range, snailfish are not a single-zone deep specialist; instead, certain species are shallow-water animals while specific others are true hadal specialists adapted to crushing pressure and near-freezing dark.
          </p>
          <p>
            Note: Much about snailfish, especially the deepest-living species, is known mainly from collected specimens and expedition footage rather than long-term observation in the wild. Depth zones are educational frameworks rather than rigid boundaries, and distributions can vary by life stage, region, and source. Reported figures should be checked against authoritative marine references such as NOAA Ocean Exploration, Smithsonian Ocean, MBARI, and WoRMS, and many details remain genuinely uncertain.
          </p>
        </>
      }
      habitat={
        <p>
          As a family, snailfish are found across a remarkably broad range of marine environments. Some species live in cold, shallow coastal waters, tide pools, and continental shelves, while others are reported from the deep sea, far below the sunlit surface. The most famous deep-dwelling members, such as the Mariana snailfish, are associated with hadal trenches at depths of around 8,000 metres, among the deepest habitats any fish is known to occupy. Because the family is so diverse, it is best to think of snailfish as spanning shallow seas through to the deepest ocean, with individual species occupying very different bands rather than the whole group sharing one depth zone.
        </p>
      }
      diet={
        <p>
          Snailfish are predators of small animals. Deep-living species are reported to feed on small crustaceans, such as amphipods, and other invertebrates that gather on or near the seafloor. In the food-poor deep sea, scavenging amphipods drawn to falling organic material can themselves become a reliable food source, and trench snailfish appear well placed to take advantage of these dense gatherings of prey. Diet details vary among the many species and remain incompletely documented for the deepest forms.
        </p>
      }
      behavior={
        <>
          <p>
            Many snailfish use their sucker-like pelvic disc to hold position against currents or to rest on hard surfaces, which suits a life close to the bottom. In deep-sea footage, trench-dwelling species have been seen moving slowly and deliberately over soft sediment, sometimes gathering where food is concentrated. Their soft, watery bodies suit a low-energy lifestyle in cold water. Much of their behaviour is inferred from limited expedition recordings and collected specimens, so a great deal remains to be learned.
          </p>
          <p>
            Deep-living snailfish are shaped by darkness, intense pressure, cold, and limited food. Their soft, scaleless, gelatinous bodies lack the heavy, rigid structures that would be vulnerable to crushing pressure, and their watery tissues help equalise the extreme conditions of the deep. Special aspects of their body chemistry are thought to help stabilise proteins against the pressure found at hadal depths. These traits together allow certain species to thrive where few other fish can, in one of the most extreme environments on Earth.
          </p>
        </>
      }
      humanInteraction={
        <p>
          People rarely encounter snailfish directly, especially the deep-sea species, which are known mainly through research expeditions using baited cameras and specialised sampling equipment. They have become important subjects for scientists studying how life copes with extreme pressure and cold. Conservation status for most snailfish, particularly deep-living forms, is poorly known and not well assessed, which is typical for animals of remote habitats. These are wild animals of extreme environments, not aquarium pets, and the deepest species live far beyond the reach of casual observation.
        </p>
      }
      faqs={[
        {
          question: "What is the deepest-living snailfish?",
          answer:
            "The Mariana snailfish, Pseudoliparis swirei, has been filmed and collected in the Mariana Trench at hadal depths of around 8,000 metres. This makes it one of the deepest fish ever recorded. Other hadal snailfish are known from different trenches, and research continues to refine our understanding of how deep fish can live.",
        },
        {
          question: "Do all snailfish live in the deep sea?",
          answer:
            "No. The family Liparidae is large and varied, with species ranging from tide pools and cold shallow seas all the way to the deepest ocean trenches. Only certain species are true deep-sea or hadal specialists, so snailfish as a group are not a single-zone deep-sea fish.",
        },
        {
          question: "How do snailfish survive the extreme pressure of the deep sea?",
          answer:
            "Deep-living snailfish have soft, scaleless, gelatinous bodies without heavy rigid structures, and their watery tissues help them cope with crushing pressure. Aspects of their body chemistry are thought to help stabilise proteins under those conditions. Much of this remains an active area of research.",
        },
        {
          question: "Why do snailfish have a sucker on their underside?",
          answer:
            "Many snailfish have a sucker-like pelvic disc formed from modified fins, which lets them cling to rocks, the seafloor, or other surfaces. This helps them hold position against currents and rest near the bottom. Not every species relies on it in the same way.",
        },
      ]}
      quickFacts={[
        { label: "Group", value: "Snailfish (family Liparidae)" },
        { label: "Higher classification", value: "Ray-finned fish; order Scorpaeniformes (Perciformes in some classifications)" },
        { label: "Diet", value: "Small crustaceans (such as amphipods) and other invertebrates" },
        { label: "Notable trait", value: "Includes some of the deepest-living fish known, e.g. Pseudoliparis swirei" },
        { label: "Adaptation", value: "Soft, scaleless, gelatinous body and pressure-tolerant body chemistry" },
        { label: "Habitat", value: "Tide pools and cold shallow seas through to deep ocean trenches" },
        { label: "Depth association", value: "Whole family spans shallow to hadal; certain species are hadal specialists" },
        { label: "Conservation status", value: "Not well assessed (most deep-sea species poorly known)" },
      ]}
      relatedLinks={[
        { label: "Anglerfish Profile", href: "/animals/anglerfish", description: "A deep-sea predator" },
        { label: "Giant Isopod Profile", href: "/animals/giant-isopod", description: "A deep-seafloor crustacean" },
        { label: "Hagfish Profile", href: "/animals/hagfish", description: "Another deep-sea fish" },
        { label: "Ocean fauna by depth", href: "/fauna/ocean", description: "How life changes with depth" },
        { label: "Fish Encyclopedia", href: "/animal-encyclopedia/fish" },
      ]}
    />
  );
}
