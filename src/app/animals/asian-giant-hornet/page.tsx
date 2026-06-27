import type { Metadata } from "next";
import AnimalProfileLayout from "@/components/AnimalProfileLayout";
import { ANIMAL_SOURCES } from "@/lib/educational/animal-sources";
import { getAnimalGalleryImages, getAnimalImage, getAnimalOgImage } from "@/lib/images/animal-images";
import { buildArticleMetadata } from "@/lib/metadata";

const PATH = "/animals/asian-giant-hornet";
const TITLE = "Asian Giant Hornet (Vespa mandarinia) Facts";
const DESC =
  "Learn about the Asian giant hornet (Vespa mandarinia), the world's largest hornet native to parts of East and South Asia, its biology, ecology, and behavior.";

export const metadata: Metadata = buildArticleMetadata({
  title: TITLE,
  description: DESC,
  path: PATH,
  publishedTime: "2026-06-27",
  modifiedTime: "2026-06-27",
  ogImage: getAnimalOgImage("asian-giant-hornet"),
});

export default function AsianGiantHornetPage() {
  return (
    <AnimalProfileLayout
      commonName="Asian Giant Hornet"
      scientificName="Vespa mandarinia"
      pageTitle={TITLE}
      description={DESC}
      path={PATH}
      parentCategory="Insects & Invertebrates"
      parentCategoryHref="/animal-encyclopedia/insects"
      tags={["Insect","Hornet","Social wasp"]}
      image={getAnimalImage("asian-giant-hornet") ?? undefined}
      galleryImages={getAnimalGalleryImages("asian-giant-hornet")}
      sources={ANIMAL_SOURCES["asian-giant-hornet"]}
      publishedDate="2026-06-27"
      modifiedDate="2026-06-27"
      overview={
        <>
          <p>
            The Asian giant hornet (<em>Vespa mandarinia</em>) is the largest hornet in the world and a member of the social wasp family. Native to parts of East and South Asia, it lives in colonies founded by a single queen, with workers that forage widely for insect prey. Its considerable size, distinctive markings, and predatory habits have made it one of the most recognizable insects of the region.
          </p>
          <p>
            Like other hornets, <em>Vespa mandarinia</em> is a social insect whose colony cycle moves through founding, growth, and reproductive phases over a single season. Workers hunt other insects to feed developing larvae, and the species is well known for its seasonal raids on the nests of honey bees. These behaviors place the hornet within a broader web of predator and prey relationships in its native habitats.
          </p>
          <p>
            Range, population, and conservation details for this species can vary by source and region, and readers should check claims against authoritative references such as the IUCN Red List, Animal Diversity Web, and reputable museum or university zoology resources. The Asian giant hornet can deliver a painful sting, and as with any stinging insect a sting may be medically significant for some people; anyone with concerns about a sting or an allergic reaction should consult a qualified medical professional or local health authority.
          </p>
          <h3>Taxonomy and animal group</h3>
          <p>
            The Asian giant hornet belongs to the order Hymenoptera, which includes bees, wasps, and ants, and to the genus <em>Vespa</em>, the true hornets. As a true hornet it is a social wasp rather than a solitary one, building and maintaining a communal nest with a reproductive queen and non-reproductive workers. It is distinct from the smaller paper wasps and yellowjackets that people may also encounter, and its scientific name <em>Vespa mandarinia</em> identifies it as one of several recognized hornet species in Asia.
          </p>
          <h3>Appearance and recognition</h3>
          <p>
            As the world&#39;s largest hornet, <em>Vespa mandarinia</em> is notable for its size, with queens being especially large and workers somewhat smaller. The hornet has a broad head, prominent jaws, and a robust body marked by bands of orange to yellow and dark brown or black. The large head and strong mandibles are adaptations associated with its predatory feeding habits. Overall coloration and size can vary between individuals and castes within a colony.
          </p>
        </>
      }
      habitat={
        <p>
          The Asian giant hornet is native to parts of East and South Asia, where it is associated with forested and rural landscapes that provide nesting sites and insect prey. Colonies typically nest at or below ground level or in sheltered cavities. Because precise distribution can differ by source, its range is best described cautiously as occurring across parts of Asia rather than the continent as a whole. The species has also drawn attention through recent introductions to areas outside its native range, where its presence is monitored; such introduced occurrences are distinct from its long-established Asian distribution.
        </p>
      }
      diet={
        <p>
          Adult Asian giant hornets feed largely on sugary substances, while the protein needs of the colony are met by hunting other insects to provision developing larvae. Workers capture a range of insect prey and are particularly known for raiding the colonies of honey bees, where they can take both adult bees and brood. This predatory behavior reflects the hornet&#39;s role as a generalist insect predator within its native ecosystems.
        </p>
      }
      behavior={
        <>
          <p>
            The Asian giant hornet is a social insect whose colony is founded by a queen, with workers carrying out foraging, nest maintenance, and defense. During the season, foraging workers may conduct coordinated raids on honey-bee nests. In a notable interaction, certain Asian honey bees have a remarkable defensive response: they engulf a hornet scout in a tightly packed ball of bees and raise the temperature inside the cluster, overheating the intruder. This co-evolved defense is one of the more striking examples of predator and prey dynamics among social insects.
          </p>
          <p>
            Within its native Asian range, the Asian giant hornet functions as a predator of other insects and as part of the local food web, both as a hunter and as prey for other animals. Its interactions with honey bees illustrate the kind of co-evolutionary relationships that shape insect communities, including the defensive heat-balling behavior of native Asian bees. As with many social wasps, the hornet&#39;s seasonal colony cycle ties its abundance to local climate, prey availability, and habitat conditions.
          </p>
        </>
      }
      humanInteraction={
        <p>
          People encounter the Asian giant hornet most often near its nests or where it raids honey-bee colonies, which can be a concern for beekeepers in parts of its native range. The hornet can deliver a painful sting, and as with other stinging insects a sting may be medically significant for some individuals, particularly those who are sensitive or allergic. These facts are best understood calmly rather than sensationally. Anyone who is stung, or who has concerns about an allergic reaction, should seek advice from a qualified medical professional or local health authority, and questions about hornets near homes or apiaries are best directed to local wildlife or pest-management authorities.
        </p>
      }
      faqs={[
        {
          question: "Why is the Asian giant hornet often called the world's largest hornet?",
          answer:
            "It earns this description because Vespa mandarinia is the largest known hornet species, with queens being especially large. Its size, broad head, and strong jaws distinguish it from smaller wasps and hornets.",
        },
        {
          question: "Where is the Asian giant hornet naturally found?",
          answer:
            "It is native to parts of East and South Asia, where it lives in forested and rural areas. Because exact range details vary by source, its distribution is best described as occurring across parts of Asia rather than the whole continent, and recent introductions elsewhere are separate from its native range.",
        },
        {
          question: "How does it interact with honey bees?",
          answer:
            "Workers sometimes raid honey-bee colonies to take adult bees and brood. In response, some Asian honey bees use a defensive heat-balling behavior, surrounding a hornet scout in a ball of bees and overheating it, an example of co-evolved predator and prey dynamics.",
        },
        {
          question: "Is the Asian giant hornet dangerous to people?",
          answer:
            "It can deliver a painful sting, and as with any stinging insect a sting may be medically significant for some people, especially those who are allergic. Anyone stung or concerned about a reaction should consult a qualified medical professional or local health authority, and concerns about hornets near homes or hives should go to local wildlife or pest-management authorities.",
        },
      ]}
      quickFacts={[
        { label: "Group", value: "Hornet (social wasp)" },
        { label: "Higher classification", value: "Order Hymenoptera, genus Vespa" },
        { label: "Diet", value: "Insect prey for larvae; adults feed on sugary substances" },
        { label: "Notable trait", value: "World's largest hornet; raids honey-bee colonies" },
        { label: "Habitat", value: "Forested and rural landscapes; nests in cavities or below ground" },
        { label: "Asia distribution", value: "Native to parts of East and South Asia" },
        { label: "Human interaction", value: "Painful sting; a concern for beekeepers; route sting concerns to professionals" },
        { label: "Conservation status", value: "Varies / not well assessed" },
      ]}
      relatedLinks={[
        { label: "Wasp Profile", href: "/animals/wasp", description: "Wasps more broadly" },
        { label: "Bee Profile", href: "/animals/bee", description: "Its honey-bee prey" },
        { label: "Ant Profile", href: "/animals/ant", description: "Another social insect" },
        { label: "Asian fauna", href: "/fauna/continents/asia", description: "Animals of Asia" },
        { label: "Insects & Invertebrates", href: "/animal-encyclopedia/insects" },
      ]}
    />
  );
}
