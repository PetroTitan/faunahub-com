import type { Metadata } from "next";
import AnimalProfileLayout from "@/components/AnimalProfileLayout";
import { ANIMAL_SOURCES } from "@/lib/educational/animal-sources";
import { getAnimalGalleryImages, getAnimalImage, getAnimalOgImage } from "@/lib/images/animal-images";
import { buildArticleMetadata } from "@/lib/metadata";

const PATH = "/animals/european-viper";
const TITLE = "European Adder: Facts About Vipera berus";
const DESC =
  "Learn about the European adder (Vipera berus), a small venomous viper found across parts of Europe and Asia, including its appearance, habitat, and behavior.";

export const metadata: Metadata = buildArticleMetadata({
  title: TITLE,
  description: DESC,
  path: PATH,
  publishedTime: "2026-06-27",
  modifiedTime: "2026-06-27",
  ogImage: getAnimalOgImage("european-viper"),
});

export default function EuropeanViperPage() {
  return (
    <AnimalProfileLayout
      commonName="European Adder"
      scientificName="Vipera berus"
      pageTitle={TITLE}
      description={DESC}
      path={PATH}
      parentCategory="Reptiles & Amphibians"
      parentCategoryHref="/animal-encyclopedia/reptiles"
      tags={["Reptile","Snake","Venomous"]}
      image={getAnimalImage("european-viper") ?? undefined}
      galleryImages={getAnimalGalleryImages("european-viper")}
      sources={ANIMAL_SOURCES["european-viper"]}
      publishedDate="2026-06-27"
      modifiedDate="2026-06-27"
      overview={
        <>
          <p>
            The European adder (<em>Vipera berus</em>) is a small venomous snake belonging to the viper family. It is widely recognized by the dark zigzag band that usually runs along its back, a pattern that helps distinguish it from many other snakes within its range. Despite being venomous, it is a shy and unobtrusive animal that tends to avoid contact with people whenever possible.
          </p>
          <p>
            This species is notable for its broad geographic spread. It is often described as the most widely distributed snake in the world by latitude, ranging across parts of Europe and Asia, and it is the only snake known to occur within the Arctic Circle. This cold tolerance sets it apart from most other snakes and allows it to live in far northern and high-altitude environments where few reptiles can survive.
          </p>
          <p>
            On the IUCN Red List, the European adder is currently assessed as Least Concern. As with all such assessments, this status reflects current understanding and can change over time as new information becomes available. The species remains a familiar part of many temperate landscapes, though local populations may face pressures in some areas.
          </p>
          <h3>Taxonomy and animal group</h3>
          <p>
            The European adder, <em>Vipera berus</em>, is a member of the family Viperidae, the vipers, within the order Squamata that contains snakes and lizards. As a true viper, it possesses the hinged, hollow fangs characteristic of the group. It is sometimes simply called the adder, and it should not be confused with unrelated snakes that share that common name in other parts of the world. Several regional forms and subspecies have been described across its wide range, reflecting variation in appearance and the broad area it occupies.
          </p>
          <h3>Appearance and recognition</h3>
          <p>
            The European adder is a relatively short, thick-bodied snake, typically reaching well under a metre in length, with females often somewhat larger than males. Its most distinctive feature is the dark zigzag band that usually runs down the middle of the back, set against a paler ground color that may be grey, brown, or reddish depending on the individual. Some individuals are very dark or even entirely black, in which case the zigzag can be hard to see. The head is somewhat triangular, and the eyes have vertical pupils, both features that help observers recognize it from a respectful distance.
          </p>
        </>
      }
      habitat={
        <p>
          The European adder is found across parts of Europe and Asia, occupying a remarkably wide latitudinal span that includes regions within the Arctic Circle. Within Europe it is associated with a variety of open and semi-open habitats, including heathland, moorland, woodland edges, meadows, and rocky hillsides, often where there is a mix of sunlit basking spots and dense cover. Its distribution is patchy rather than continuous, and it does not occur everywhere within the broad area it inhabits. The species&#39; tolerance of cold conditions allows it to live in northern and upland environments where many other reptiles are absent.
        </p>
      }
      diet={
        <p>
          The European adder is a predator that feeds mainly on small vertebrates. Its diet commonly includes small mammals such as voles and mice, along with lizards and amphibians like frogs and newts; young adders may take smaller prey such as small lizards or invertebrates. It typically hunts by ambush, using its venom to subdue prey before swallowing it whole. Like many snakes, it can go for extended periods between meals, particularly during the cooler parts of the year when it is less active.
        </p>
      }
      behavior={
        <>
          <p>
            The European adder is generally solitary and inactive outside the warmer months, spending winter in a state of dormancy in sheltered underground sites. In spring it emerges to bask in the sun, and males may engage in ritualized contests during the breeding season. Females give birth to live young rather than laying eggs, an adaptation well suited to the cooler climates the species inhabits. It is most often seen basking on warm mornings, and when disturbed it usually attempts to retreat rather than confront an intruder.
          </p>
          <p>
            As both predator and prey, the European adder plays a role in the food webs of the temperate and northern ecosystems it inhabits. By feeding on small mammals, lizards, and amphibians, it helps regulate the populations of these animals, while it in turn serves as a food source for various birds of prey and mammalian predators. Its presence in cold and upland regions where few other reptiles persist makes it an ecologically distinctive component of those communities.
          </p>
        </>
      }
      humanInteraction={
        <p>
          The European adder is venomous, but it is not aggressive and bites defensively, typically only when threatened, trodden on, or handled. Bites to people are uncommon and are rarely life-threatening when prompt medical care is sought, though any suspected adder bite should be treated as a medical matter and assessed by qualified medical professionals or local health authorities. The appropriate response on encountering one in the wild is to keep a calm distance and allow the snake to move away on its own; concerns about adders near homes or public areas can be directed to local wildlife authorities. The species is currently assessed as Least Concern on the IUCN Red List, an assessment that may change as new data emerge, and in some regions adders benefit from legal protection.
        </p>
      }
      faqs={[
        {
          question: "Is the European adder dangerous to people?",
          answer:
            "It is venomous but not aggressive, and it bites only defensively when threatened or handled. Bites are uncommon and rarely life-threatening when prompt medical care is sought, so any suspected bite should be assessed by qualified medical professionals or local health authorities.",
        },
        {
          question: "Where is the European adder found?",
          answer:
            "It occurs across parts of Europe and Asia and is the only snake known to range within the Arctic Circle. Its distribution is patchy, and it favors open and semi-open habitats such as heathland, moorland, and woodland edges.",
        },
        {
          question: "What does the European adder eat?",
          answer:
            "It feeds mainly on small vertebrates, including small mammals such as voles and mice, as well as lizards and amphibians. It generally hunts by ambush and uses venom to subdue its prey.",
        },
        {
          question: "How can you recognize a European adder?",
          answer:
            "It is a small, thick-bodied snake usually marked with a dark zigzag band along its back, though some individuals are very dark or entirely black. It also has a somewhat triangular head and vertically slit pupils, best observed from a safe distance.",
        },
      ]}
      quickFacts={[
        { label: "Scientific name", value: "Vipera berus" },
        { label: "Animal group", value: "Reptile (venomous snake)" },
        { label: "Family", value: "Viperidae (vipers)" },
        { label: "Size", value: "Typically well under 1 metre long" },
        { label: "Diet", value: "Small mammals, lizards, amphibians" },
        { label: "Habitat", value: "Heathland, moorland, woodland edges, uplands" },
        { label: "Range", value: "Parts of Europe and Asia, into the Arctic Circle" },
        { label: "Conservation status", value: "Least Concern (IUCN Red List)" },
      ]}
      relatedLinks={[
        { label: "Grass Snake", href: "/animals/grass-snake", description: "A harmless European snake" },
        { label: "Snake Profile", href: "/animals/snake", description: "Snakes more broadly" },
        { label: "Puff Adder", href: "/animals/puff-adder", description: "An African viper" },
        { label: "European fauna", href: "/fauna/continents/europe", description: "Animals of Europe" },
        { label: "Reptiles & Amphibians", href: "/animal-encyclopedia/reptiles" },
      ]}
    />
  );
}
