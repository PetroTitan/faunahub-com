import type { Metadata } from "next";
import AnimalProfileLayout from "@/components/AnimalProfileLayout";
import { ANIMAL_SOURCES } from "@/lib/educational/animal-sources";
import { getAnimalGalleryImages, getAnimalImage, getAnimalOgImage } from "@/lib/images/animal-images";
import { buildArticleMetadata } from "@/lib/metadata";

const PATH = "/animals/bighorn-sheep";
const TITLE = "Bighorn Sheep: Wild Mountain Sheep Profile";
const DESC =
  "Learn about the bighorn sheep (Ovis canadensis), a wild sheep of western North American mountains, where rams carry massive, curling head-butting horns.";

export const metadata: Metadata = buildArticleMetadata({
  title: TITLE,
  description: DESC,
  path: PATH,
  publishedTime: "2026-06-28",
  modifiedTime: "2026-06-28",
  ogImage: getAnimalOgImage("bighorn-sheep"),
});

export default function BighornSheepPage() {
  return (
    <AnimalProfileLayout
      commonName="Bighorn Sheep"
      scientificName="Ovis canadensis"
      pageTitle={TITLE}
      description={DESC}
      path={PATH}
      parentCategory="Mammals"
      parentCategoryHref="/animal-encyclopedia/mammals"
      tags={["Mammal","Wild sheep","Mountain"]}
      image={getAnimalImage("bighorn-sheep") ?? undefined}
      galleryImages={getAnimalGalleryImages("bighorn-sheep")}
      sources={ANIMAL_SOURCES["bighorn-sheep"]}
      publishedDate="2026-06-28"
      modifiedDate="2026-06-28"
      overview={
        <>
          <p>
            The bighorn sheep (<em>Ovis canadensis</em>) is a wild sheep associated with mountains, foothills and rugged rocky terrain in parts of western North America. It is best known for the heavy, spiraling horns carried by adult males, or rams, which can curl back and around in a striking sweep. Females, called ewes, have shorter, more slender horns. As a wild species, the bighorn sheep is distinct from domestic sheep and lives entirely outside human care.
          </p>
          <p>
            Bighorn sheep are remarkably sure-footed, navigating steep cliffs, talus slopes and broken ground with apparent ease. This agility helps them reach forage and escape predators in terrain that few large animals can use. They live in social groups and follow seasonal patterns of movement between feeding and lambing areas.
          </p>
          <p>
            On the IUCN Red List, the bighorn sheep is currently assessed as Least Concern. This assessment reflects the species as a whole and can change over time; some local populations are managed or in recovery, and conservation status is best understood as an evaluation rather than a permanent guarantee.
          </p>
          <h3>Taxonomy and animal group</h3>
          <p>
            The bighorn sheep is a mammal in the family Bovidae, the group that also includes cattle, antelope, goats and other true sheep. Its scientific name is <em>Ovis canadensis</em>, placing it in the genus <em>Ovis</em> alongside other wild sheep. Several regional populations, often described as subspecies, are recognized within the species, reflecting differences across its range, but they all belong to the same species. As a member of the order Artiodactyla, it is an even-toed, hoofed herbivore.
          </p>
          <h3>Appearance and recognition</h3>
          <p>
            Bighorn sheep are sturdy, muscular animals with brown coats that range from pale to darker tones, usually set off by a white rump patch and paler areas on the muzzle and underside. The most recognizable feature is the horn set: rams develop massive, curling horns that grow throughout life and can form a deep spiral, while ewes carry shorter, gently curved horns. Both sexes have horns rather than antlers, meaning the horns are permanent and are not shed. Their compact build, split hooves with hard rims and softer inner pads, and strong legs all suit life on steep, rocky ground.
          </p>
        </>
      }
      habitat={
        <p>
          Bighorn sheep occur in parts of western North America, where they are associated with mountains, foothills, canyons and rocky terrain that offer both forage and escape cover. Across parts of this range they use a mix of open grassy slopes for feeding and nearby cliffs or broken rock for safety. Different populations occupy environments that vary from cold, high-elevation country to arid desert ranges, and some areas are home to managed or recovering herds rather than continuous populations. They are not found across the entire continent, and their distribution is patchy, shaped by the availability of suitable steep, rugged habitat.
        </p>
      }
      diet={
        <p>
          Bighorn sheep are herbivores that feed on grasses, forbs and shrubs, with the exact mix depending on the season and the local landscape. Grasses and other low plants often dominate where they are available, while leaves, twigs and woody browse become more important in drier areas or during leaner times of year. Like other members of their family, they have a multi-chambered stomach that allows them to digest fibrous plant material efficiently. Access to water and to mineral sources also influences where and how they forage.
        </p>
      }
      behavior={
        <>
          <p>
            Bighorn sheep are social animals that typically form groups, with rams and ewes often living separately for much of the year. During the breeding season, rams compete for mating opportunities through dramatic clashes in which they charge and butt heads, the impact absorbed by their thick horns and reinforced skulls. Ewes generally give birth to a single lamb, seeking out steep, sheltered ground that offers protection from predators during the vulnerable early period. Lambs are able to move on rocky terrain at a young age and gradually join the social group as they grow.
          </p>
          <p>
            As large grazing and browsing herbivores, bighorn sheep are part of the food web in the mountain and foothill ecosystems they inhabit. Their feeding can influence the composition of plant communities on the slopes they use, and they serve as prey for native predators in some areas. Their movements between seasonal ranges and across rugged terrain connect different parts of the landscape. In this way bighorn sheep contribute to the broader ecological balance of the regions where they occur.
          </p>
        </>
      }
      humanInteraction={
        <p>
          Bighorn sheep are wild animals and are not pets; they are best observed from a respectful distance in their natural habitat. While they are generally wary of people, the most appropriate response to any concern about wildlife behavior, including animals appearing in unexpected places, is to contact local wildlife authorities rather than to approach or interfere. Some bighorn populations have been the focus of management and recovery efforts, and habitat protection, disease awareness and minimizing disturbance all support their long-term well-being. Continued monitoring helps ensure that conservation assessments remain accurate as conditions change.
        </p>
      }
      faqs={[
        {
          question: "Are bighorn sheep the same as domestic sheep?",
          answer:
            "No. The bighorn sheep (Ovis canadensis) is a wild species adapted to steep, rocky terrain, and it is distinct from domestic sheep. It lives in the wild and is not kept as livestock or as a pet.",
        },
        {
          question: "Why do bighorn rams butt heads?",
          answer:
            "Adult rams clash heads mainly during the breeding season as part of competition for mating opportunities. Their thick, curling horns and reinforced skulls help absorb the impact of these collisions.",
        },
        {
          question: "Where are bighorn sheep found?",
          answer:
            "They are associated with mountains, foothills and rocky terrain in parts of western North America. Their distribution is patchy rather than continuous, shaped by the availability of suitable steep habitat.",
        },
        {
          question: "Are bighorn sheep endangered?",
          answer:
            "The IUCN Red List currently assesses the bighorn sheep as Least Concern, though some local populations are managed or recovering. Conservation status is an assessment that can change over time as conditions are monitored.",
        },
      ]}
      quickFacts={[
        { label: "Scientific name", value: "Ovis canadensis" },
        { label: "Animal group", value: "Mammal" },
        { label: "Family", value: "Bovidae (true sheep)" },
        { label: "Size", value: "Large, sturdy wild sheep; rams bigger than ewes" },
        { label: "Diet", value: "Herbivore (grasses, forbs, shrubs)" },
        { label: "Habitat", value: "Mountains, foothills and rocky terrain" },
        { label: "Range", value: "Parts of western North America" },
        { label: "Conservation status", value: "Least Concern (IUCN Red List; some populations managed)" },
      ]}
      relatedLinks={[
        { label: "Mountain Goat", href: "/animals/mountain-goat", description: "Another cliff-dwelling mountain mammal" },
        { label: "Goat Profile", href: "/animals/goat", description: "Domestic goats, for contrast" },
        { label: "Pronghorn", href: "/animals/pronghorn", description: "Another western North American hoofed mammal" },
        { label: "North American fauna", href: "/fauna/continents/north-america", description: "Animals of North America" },
        { label: "Mammals", href: "/animal-encyclopedia/mammals" },
      ]}
    />
  );
}
