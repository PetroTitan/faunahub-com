import type { Metadata } from "next";
import AnimalProfileLayout from "@/components/AnimalProfileLayout";
import { ANIMAL_SOURCES } from "@/lib/educational/animal-sources";
import { getAnimalGalleryImages, getAnimalImage, getAnimalOgImage } from "@/lib/images/animal-images";
import { buildArticleMetadata } from "@/lib/metadata";

const PATH = "/animals/vicuna";
const TITLE = "Vicuna: Wild Andean Camelid Facts";
const DESC =
  "The vicuna is a wild camelid of the high Andes, famous for its fine wool and conservation recovery. Learn about its habitat, behavior, and ecology.";

export const metadata: Metadata = buildArticleMetadata({
  title: TITLE,
  description: DESC,
  path: PATH,
  publishedTime: "2026-06-28",
  modifiedTime: "2026-06-28",
  ogImage: getAnimalOgImage("vicuna"),
});

export default function VicunaPage() {
  return (
    <AnimalProfileLayout
      commonName="Vicuna"
      scientificName="Vicugna vicugna"
      pageTitle={TITLE}
      description={DESC}
      path={PATH}
      parentCategory="Mammals"
      parentCategoryHref="/animal-encyclopedia/mammals"
      tags={["Mammal","Wild camelid","Andes"]}
      image={getAnimalImage("vicuna") ?? undefined}
      galleryImages={getAnimalGalleryImages("vicuna")}
      sources={ANIMAL_SOURCES["vicuna"]}
      publishedDate="2026-06-28"
      modifiedDate="2026-06-28"
      overview={
        <>
          <p>
            The vicuna (<em>Vicugna vicugna</em>) is a small, slender wild camelid associated with the high-altitude grasslands of the Andes in parts of South America. It is one of several South American camelids and is widely recognized for its exceptionally fine, soft wool, which has been valued by Andean peoples for centuries. As a wild animal, it lives in open puna and altiplano landscapes rather than in farms or households.
          </p>
          <p>
            The vicuna is best known as a conservation success story. It was once reduced to very low numbers, but it recovered substantially after protective measures were put in place, and it is listed under CITES. The International Union for Conservation of Nature (IUCN) currently lists the species as Least Concern on its Red List, though all conservation assessments are periodically reviewed and can change over time.
          </p>
          <p>
            It is also notable as the wild ancestor of the domestic alpaca. Because South America is home to both wild camelids (the vicuna and the guanaco) and domestic ones (the alpaca and llama), the vicuna is sometimes confused with these relatives, but it remains a distinct wild species and should not be mistaken for a domestic animal.
          </p>
          <h3>Taxonomy and animal group</h3>
          <p>
            The vicuna is a mammal in the camel family, Camelidae, within the order Artiodactyla (the even-toed ungulates). Its scientific name is <em>Vicugna vicugna</em>, and the species sits in the genus <em>Vicugna</em>. It is one of the South American camelids, a group that also includes the wild guanaco (<em>Lama guanicoe</em>) and the domestic alpaca and llama. The vicuna is generally regarded as the wild ancestor of the domestic alpaca. More than one subspecies of vicuna is recognized across its range, reflecting regional variation within the species.
          </p>
          <h3>Appearance and recognition</h3>
          <p>
            The vicuna is the smallest of the South American camelids, with a graceful, slender build, long thin legs, and a long neck typical of camelids. Its coat is light cinnamon to tawny brown above and pale or whitish on the underside, chest, and inner legs, with a soft fringe of longer white hair sometimes present on the lower chest. The wool is extremely fine and dense, an adaptation that helps insulate the animal against the cold of high elevations. Its large eyes, alert upright ears, and lightly built frame give it a delicate appearance compared with the larger, sturdier guanaco and llama.
          </p>
        </>
      }
      habitat={
        <p>
          The vicuna is associated with high-altitude environments in parts of South America, particularly the puna grasslands and altiplano of the central Andes. It occurs in cold, open, treeless terrain at high elevations, where it grazes on grassy plains and relies on access to water. Its distribution spans parts of several Andean countries rather than the whole continent, and it is closely tied to these highland habitats rather than to lowland forests or coastal regions. As an animal of the high Andes, it is adapted to thin air, strong sunlight, and large daily swings in temperature.
        </p>
      }
      diet={
        <p>
          The vicuna is a herbivore and a grazer, feeding mainly on the low grasses and other ground vegetation of the puna and altiplano. Its diet consists largely of tough, fibrous highland plants, and it tends to crop vegetation low to the ground. Like other camelids, it has a multi-chambered stomach that helps it extract nutrients from coarse, low-quality forage. Access to drinking water is important, and herds are often found within reach of streams or other water sources in their arid mountain habitat.
        </p>
      }
      behavior={
        <>
          <p>
            Vicunas are social, diurnal animals that typically live in small family groups, often consisting of a single adult male, several females, and their young, while other males may form separate bachelor groups. Family groups tend to occupy and defend feeding and resting areas within their habitat. The animals are alert and wary, relying on keen eyesight and quick flight to avoid danger across the open terrain. Females usually give birth to a single young, which can stand and follow the group soon after birth, an adaptation suited to life in exposed, open landscapes.
          </p>
          <p>
            As a native grazing herbivore of the high Andes, the vicuna plays a role in shaping the puna grassland ecosystems it inhabits, influencing vegetation through its feeding. It serves as a prey species for native predators of the highlands, linking it into local food webs. Because it is well adapted to harsh, high-elevation conditions, the vicuna is part of a specialized community of plants and animals found in these mountain environments. Its recovery also reflects the broader health of the protected highland landscapes where it lives.
          </p>
        </>
      }
      humanInteraction={
        <p>
          The vicuna has a long history of cultural and economic importance in the Andes, where its fine wool has been prized since pre-Columbian times. After being reduced to very low numbers in the past, it became the focus of dedicated protection and management programs and is listed under CITES, and its recovery is often cited as a notable conservation achievement; the IUCN currently assesses it as Least Concern, an evaluation that may be revisited as circumstances change. The vicuna is a wild animal and is not a pet or a domestic camelid such as the alpaca or llama, and it should not be confused with them. People who encounter wild vicunas should observe them from a respectful distance and direct any questions about wildlife or conservation to local wildlife authorities.
        </p>
      }
      faqs={[
        {
          question: "Is the vicuna the same as an alpaca or llama?",
          answer:
            "No. The vicuna is a wild camelid, while the alpaca and llama are domestic camelids. The vicuna is generally regarded as the wild ancestor of the domestic alpaca, but it remains a distinct wild species and is not a pet or farm animal.",
        },
        {
          question: "Where does the vicuna live?",
          answer:
            "The vicuna is associated with the high-altitude puna grasslands and altiplano of the Andes in parts of South America. It is tied to these cold, open highland habitats rather than to lowlands or the whole continent.",
        },
        {
          question: "Is the vicuna endangered?",
          answer:
            "The IUCN Red List currently lists the vicuna as Least Concern following a notable conservation recovery from very low numbers, and it is also listed under CITES. Conservation assessments are reviewed over time and can change.",
        },
        {
          question: "Why is the vicuna famous?",
          answer:
            "The vicuna is well known for its exceptionally fine wool and for being a celebrated conservation success story, having recovered under protection after once being reduced to very low numbers.",
        },
      ]}
      quickFacts={[
        { label: "Scientific name", value: "Vicugna vicugna" },
        { label: "Animal group", value: "Mammal (wild camelid)" },
        { label: "Family/order", value: "Camelidae; Artiodactyla" },
        { label: "Size", value: "Smallest South American camelid; slender build" },
        { label: "Diet", value: "Herbivore; grazes on highland grasses" },
        { label: "Habitat", value: "High Andean puna grasslands and altiplano" },
        { label: "Range", value: "Parts of the Andes in South America" },
        { label: "Conservation status", value: "Least Concern (IUCN Red List); CITES-listed" },
      ]}
      relatedLinks={[
        { label: "Guanaco", href: "/animals/guanaco", description: "Another wild Andean camelid" },
        { label: "Llama", href: "/animals/llama", description: "The domestic camelid" },
        { label: "Camel", href: "/animals/camel", description: "An Old World relative" },
        { label: "South American fauna", href: "/fauna/continents/south-america", description: "Animals of South America" },
        { label: "Mammals", href: "/animal-encyclopedia/mammals" },
      ]}
    />
  );
}
