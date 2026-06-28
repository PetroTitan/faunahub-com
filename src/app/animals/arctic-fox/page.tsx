import type { Metadata } from "next";
import AnimalProfileLayout from "@/components/AnimalProfileLayout";
import { ANIMAL_SOURCES } from "@/lib/educational/animal-sources";
import { getAnimalGalleryImages, getAnimalImage, getAnimalOgImage } from "@/lib/images/animal-images";
import { buildArticleMetadata } from "@/lib/metadata";

const PATH = "/animals/arctic-fox";
const TITLE = "Arctic Fox: Facts About the Tundra Survivor";
const DESC =
  "Learn about the Arctic fox (Vulpes lagopus), a small tundra fox with a color-changing coat, its habitat, diet, behavior, ecology, and conservation.";

export const metadata: Metadata = buildArticleMetadata({
  title: TITLE,
  description: DESC,
  path: PATH,
  publishedTime: "2026-06-28",
  modifiedTime: "2026-06-28",
  ogImage: getAnimalOgImage("arctic-fox"),
});

export default function ArcticFoxPage() {
  return (
    <AnimalProfileLayout
      commonName="Arctic Fox"
      scientificName="Vulpes lagopus"
      pageTitle={TITLE}
      description={DESC}
      path={PATH}
      parentCategory="Mammals"
      parentCategoryHref="/animal-encyclopedia/mammals"
      tags={["Mammal","Fox","Arctic"]}
      image={getAnimalImage("arctic-fox") ?? undefined}
      galleryImages={getAnimalGalleryImages("arctic-fox")}
      sources={ANIMAL_SOURCES["arctic-fox"]}
      publishedDate="2026-06-28"
      modifiedDate="2026-06-28"
      overview={
        <>
          <p>
            The Arctic fox (<em>Vulpes lagopus</em>) is a small fox adapted to the cold, open landscapes of the far north. It is best known for a seasonal coat that turns white in winter and shifts to brown or grey in summer, an adaptation that helps it blend into changing surroundings across the year. Its compact body, short legs, rounded ears, and densely furred feet all reduce heat loss in extreme cold.
          </p>
          <p>
            The species has a circumpolar distribution, meaning it occurs around the Arctic region as a whole, including parts of northern North America as well as parts of northern Europe and Asia. It is one of the most cold-tolerant land mammals and lives in environments where few other carnivores can persist year-round.
          </p>
          <p>
            On the IUCN Red List, the Arctic fox is currently assessed as Least Concern at the global level, an assessment that reflects a wide range and generally stable overall numbers and that can change as conditions are re-evaluated. This global picture does not apply uniformly everywhere, and some isolated populations face very different local circumstances.
          </p>
          <h3>Taxonomy and animal group</h3>
          <p>
            The Arctic fox is a mammal in the dog family, Canidae, which also includes wolves, domestic dogs, and other foxes. Its scientific name is <em>Vulpes lagopus</em>, placing it within the genus <em>Vulpes</em>, the group commonly known as the true foxes. The species name <em>lagopus</em> refers to its hare-like furred feet. It is a true fox and a small member of the order Carnivora.
          </p>
          <h3>Appearance and recognition</h3>
          <p>
            This is a small, compact fox, noticeably smaller and more rounded in form than the familiar red fox. It has short legs, a short muzzle, small rounded ears, and a thick bushy tail, proportions that help conserve body heat. Its most recognizable feature is the seasonal change in coat color: typically white or pale in winter and brown, grey, or darker in summer. A less common color form remains dark grey or bluish year-round. The dense winter coat and fur-covered foot pads are key adaptations to its cold environment.
          </p>
        </>
      }
      habitat={
        <p>
          The Arctic fox is associated with Arctic and tundra environments and is distributed around the polar north, occurring in parts of northern North America as well as parts of northern Eurasia. Within North America it is found across parts of the northern tundra and coastal Arctic regions rather than throughout the continent. It also ranges onto sea ice and in some areas occurs near coasts and offshore islands. It is not native to temperate or southern parts of the continent, and its presence is tied closely to cold, open, treeless landscapes.
        </p>
      }
      diet={
        <p>
          The Arctic fox is an opportunistic forager that feeds mainly on small mammals, with lemmings and other small rodents being especially important in many areas. It also eats birds, eggs, and carrion, and will scavenge remains left by larger predators when available. Its diet can shift with the seasons and with the local abundance of prey, and in lean periods it relies more heavily on whatever food it can find, including stored caches and scavenged material.
        </p>
      }
      behavior={
        <>
          <p>
            Arctic foxes are active year-round and do not hibernate, remaining mobile through the harsh winter months. They typically den in burrows, sometimes using complex dens that may be reused over long periods, and pairs commonly raise litters of pups together during the warmer season. Litters can be relatively large, and reproductive success often tracks the availability of prey such as lemmings, which can fluctuate strongly from year to year. Some individuals travel considerable distances in search of food, particularly when local prey is scarce.
          </p>
          <p>
            As a small predator and scavenger, the Arctic fox plays an important role in tundra food webs. By preying on small mammals it can influence rodent populations, and by scavenging carrion it helps recycle nutrients across the landscape. Its own numbers are closely linked to the cycles of prey such as lemmings, and it in turn serves as a food source for larger predators. In this way it forms part of the interconnected web of Arctic life, both shaping and depending on the populations around it.
          </p>
        </>
      }
      humanInteraction={
        <p>
          The Arctic fox is a wild animal and is not a pet; it should be observed only from a respectful distance and never fed or approached. The global IUCN Red List assessment of Least Concern reflects the species across its wide range and should not be assumed to apply to every local population, since at least one isolated European population is assessed as endangered and faces very different pressures. People with concerns about wildlife encounters or conflicts should contact local wildlife authorities, and any questions about animal-related health risks should be directed to qualified medical professionals or local health authorities. Habitat change in the far north is among the factors that conservation researchers continue to monitor.
        </p>
      }
      faqs={[
        {
          question: "Why does the Arctic fox change color?",
          answer:
            "Its coat is generally white or pale in winter and brown or grey in summer, a seasonal change that helps it match its surroundings as the landscape shifts between snow and bare tundra. This color change is a natural adaptation to its environment.",
        },
        {
          question: "Where do Arctic foxes live?",
          answer:
            "They have a circumpolar distribution and occur in Arctic and tundra regions, including parts of northern North America as well as parts of northern Europe and Asia. They are tied to cold, open, treeless landscapes rather than temperate or southern areas.",
        },
        {
          question: "What do Arctic foxes eat?",
          answer:
            "They are opportunistic feeders that rely heavily on small mammals such as lemmings, and also eat birds, eggs, and carrion. Their diet shifts with the seasons and with the local availability of prey.",
        },
        {
          question: "Is the Arctic fox endangered?",
          answer:
            "On the IUCN Red List the species is currently assessed as Least Concern at the global level, an assessment that can change over time. This global status does not apply everywhere, as at least one isolated European population is assessed as endangered.",
        },
      ]}
      quickFacts={[
        { label: "Scientific name", value: "Vulpes lagopus" },
        { label: "Animal group", value: "Mammal" },
        { label: "Family", value: "Canidae (dog family); a true fox" },
        { label: "Size", value: "Small, compact fox with short legs and a bushy tail" },
        { label: "Diet", value: "Opportunistic forager: small mammals, birds, eggs, carrion" },
        { label: "Habitat", value: "Arctic and tundra; cold, open, treeless landscapes" },
        { label: "Range", value: "Circumpolar, including parts of northern North America" },
        { label: "Conservation status", value: "IUCN Red List: Least Concern globally (assessment can change)" },
      ]}
      relatedLinks={[
        { label: "Fox Profile", href: "/animals/fox", description: "Foxes more broadly" },
        { label: "Polar Bear", href: "/animals/polar-bear", description: "Another Arctic mammal" },
        { label: "Snowy Owl", href: "/animals/snowy-owl", description: "An Arctic bird" },
        { label: "North American fauna", href: "/fauna/continents/north-america", description: "Animals of North America" },
        { label: "Mammals", href: "/animal-encyclopedia/mammals" },
      ]}
    />
  );
}
