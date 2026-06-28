import type { Metadata } from "next";
import AnimalProfileLayout from "@/components/AnimalProfileLayout";
import { ANIMAL_SOURCES } from "@/lib/educational/animal-sources";
import { getAnimalGalleryImages, getAnimalImage, getAnimalOgImage } from "@/lib/images/animal-images";
import { buildArticleMetadata } from "@/lib/metadata";

const PATH = "/animals/king-vulture";
const TITLE = "King Vulture: New World Scavenger Bird";
const DESC =
  "Learn about the King Vulture, a striking New World vulture of Central and South American forests, with its multicoloured head and scavenging habits.";

export const metadata: Metadata = buildArticleMetadata({
  title: TITLE,
  description: DESC,
  path: PATH,
  publishedTime: "2026-06-28",
  modifiedTime: "2026-06-28",
  ogImage: getAnimalOgImage("king-vulture"),
});

export default function KingVulturePage() {
  return (
    <AnimalProfileLayout
      commonName="King Vulture"
      scientificName="Sarcoramphus papa"
      pageTitle={TITLE}
      description={DESC}
      path={PATH}
      parentCategory="Birds"
      parentCategoryHref="/animal-encyclopedia/birds"
      tags={["Bird","Vulture","Neotropical"]}
      image={getAnimalImage("king-vulture") ?? undefined}
      galleryImages={getAnimalGalleryImages("king-vulture")}
      sources={ANIMAL_SOURCES["king-vulture"]}
      publishedDate="2026-06-28"
      modifiedDate="2026-06-28"
      overview={
        <>
          <p>
            The King Vulture (<em>Sarcoramphus papa</em>) is one of the most visually distinctive birds of the Americas, a large New World vulture known for its mostly white body, contrasting black flight feathers, and a bare head and neck patterned in vivid oranges, reds, yellows, and purples. It is a scavenging bird that feeds on carrion, playing a quiet but important part in the ecology of the warm lowland regions where it occurs.
          </p>
          <p>
            It is associated with lowland forests and open savannas in parts of Central and South America, where it often soars at considerable height in search of food. Despite its dramatic appearance, the King Vulture is a calm, non-aggressive scavenger rather than a predator, and it relies on dead animals rather than hunting live prey.
          </p>
          <p>
            On the IUCN Red List, the King Vulture is currently assessed as Least Concern, a status that reflects its broad distribution. As with any wildlife assessment, this is a changeable evaluation that can be revised as new information about populations and habitats becomes available.
          </p>
          <h3>Taxonomy and animal group</h3>
          <p>
            The King Vulture belongs to the New World vulture family Cathartidae, a group that includes condors and other American vultures and is distinct from the Old World vultures of Africa, Asia, and Europe. Its scientific name is <em>Sarcoramphus papa</em>, and it is the only living member of the genus <em>Sarcoramphus</em>. Like other cathartids, it is not closely related to hawks or eagles despite a superficially similar scavenging role, and modern classifications place these vultures in their own family within the broader bird lineage.
          </p>
          <h3>Appearance and recognition</h3>
          <p>
            Adult King Vultures are readily recognised by their predominantly creamy-white to pale plumage set against black flight feathers and a black tail, a striking contrast visible both perched and in flight. The bare head and neck are the most memorable feature, mottled with bright oranges, reds, yellows, and bluish-purple tones, and the bird carries a fleshy, wattle-like ornament known as a caruncle above its orange-and-red bill. It is a large, broad-winged bird with a short tail, and juveniles are much darker overall, gradually acquiring the pale body and colourful head as they mature over several years.
          </p>
        </>
      }
      habitat={
        <p>
          The King Vulture is found in parts of Central and South America, where it is associated with tropical lowland forests and adjacent savannas and open country. It occurs in parts of the warmer, low-elevation regions from southern Mexico through Central America and into parts of South America, generally favouring areas with extensive tree cover interspersed with open ground suitable for soaring and locating carrion. Its distribution is not continuous across the entire region, and it tends to be most associated with relatively undisturbed forested landscapes rather than heavily developed areas.
        </p>
      }
      diet={
        <p>
          As a scavenger, the King Vulture feeds almost entirely on carrion, the carcasses of dead animals it locates from the air. It often relies on smaller New World vultures, which may detect carcasses first by smell, and its larger size and powerful bill can allow it to open tougher hides that smaller species struggle with, which is one explanation offered for its common name. By consuming carrion, it depends on the natural cycle of death and decay within its habitat rather than capturing live prey.
        </p>
      }
      behavior={
        <>
          <p>
            King Vultures spend much of the day soaring on warm rising air, using keen eyesight and following other vultures to find food, and they often gather at carcasses in loose groups. They are generally quiet birds with limited vocalisations. Nesting typically occurs without an elaborate constructed nest, with eggs laid on the ground in a sheltered spot such as a hollow log or among forest litter, and both parents are thought to share incubation and care of the single young, which develops slowly before reaching independence.
          </p>
          <p>
            Like other vultures, the King Vulture serves an important sanitation role in its ecosystem by consuming carcasses, which helps recycle nutrients and can limit the spread of disease associated with decaying remains. Its ability to open tougher carcasses may also make food more accessible to smaller scavengers that feed alongside it. As a wide-ranging, forest-associated species, its presence is often regarded as part of healthy, functioning tropical ecosystems.
          </p>
        </>
      }
      humanInteraction={
        <p>
          The King Vulture is not dangerous to people and poses no threat as a predator, since it feeds on carrion rather than living animals; it is best appreciated calmly and at a respectful distance, as with all wildlife. It features in the iconography and stories of several historical cultures of the Americas, reflecting long-standing human fascination with the species. Although currently assessed as Least Concern by the IUCN Red List, like many forest birds it can be affected by habitat change, and questions about local wildlife should be directed to local wildlife authorities.
        </p>
      }
      faqs={[
        {
          question: "Is the King Vulture dangerous to humans?",
          answer:
            "No. The King Vulture is a scavenger that feeds on carrion and does not hunt live prey or threaten people, so it poses no danger to humans.",
        },
        {
          question: "Why is it called the King Vulture?",
          answer:
            "One common explanation is that its larger size and strong bill let it dominate carcasses and open tougher hides that smaller New World vultures cannot, so other vultures often give way to it.",
        },
        {
          question: "Where does the King Vulture live?",
          answer:
            "It is found in parts of Central and South America, where it is associated with tropical lowland forests and nearby savannas and open country.",
        },
        {
          question: "Is the King Vulture endangered?",
          answer:
            "It is currently assessed as Least Concern on the IUCN Red List. This is a changeable assessment that can be revised as new information about its populations and habitats becomes available.",
        },
      ]}
      quickFacts={[
        { label: "Scientific name", value: "Sarcoramphus papa" },
        { label: "Animal group", value: "Bird (New World vulture)" },
        { label: "Family/order", value: "Cathartidae" },
        { label: "Size", value: "Large, broad-winged vulture" },
        { label: "Diet", value: "Scavenger; feeds on carrion" },
        { label: "Habitat", value: "Lowland tropical forests and savannas" },
        { label: "Range", value: "Parts of Central and South America" },
        { label: "Conservation status", value: "Least Concern (IUCN Red List)" },
      ]}
      relatedLinks={[
        { label: "Vulture", href: "/animals/vulture", description: "Vultures more broadly" },
        { label: "Andean Condor", href: "/animals/andean-condor", description: "Another New World vulture" },
        { label: "Harpy Eagle", href: "/animals/harpy-eagle", description: "A rainforest raptor" },
        { label: "South American fauna", href: "/fauna/continents/south-america", description: "Animals of South America" },
        { label: "Birds", href: "/animal-encyclopedia/birds" },
      ]}
    />
  );
}
