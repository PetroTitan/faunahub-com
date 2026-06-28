import type { Metadata } from "next";
import AnimalProfileLayout from "@/components/AnimalProfileLayout";
import { ANIMAL_SOURCES } from "@/lib/educational/animal-sources";
import { getAnimalGalleryImages, getAnimalImage, getAnimalOgImage } from "@/lib/images/animal-images";
import { buildArticleMetadata } from "@/lib/metadata";

const PATH = "/animals/snowy-owl";
const TITLE = "Snowy Owl: Arctic Tundra Bird Profile";
const DESC =
  "Learn about the snowy owl (Bubo scandiacus), a large white Arctic owl that breeds on tundra, hunts by day, and moves south in irregular winter irruptions.";

export const metadata: Metadata = buildArticleMetadata({
  title: TITLE,
  description: DESC,
  path: PATH,
  publishedTime: "2026-06-28",
  modifiedTime: "2026-06-28",
  ogImage: getAnimalOgImage("snowy-owl"),
});

export default function SnowyOwlPage() {
  return (
    <AnimalProfileLayout
      commonName="Snowy Owl"
      scientificName="Bubo scandiacus"
      pageTitle={TITLE}
      description={DESC}
      path={PATH}
      parentCategory="Birds"
      parentCategoryHref="/animal-encyclopedia/birds"
      tags={["Bird","Owl","Arctic"]}
      image={getAnimalImage("snowy-owl") ?? undefined}
      galleryImages={getAnimalGalleryImages("snowy-owl")}
      sources={ANIMAL_SOURCES["snowy-owl"]}
      publishedDate="2026-06-28"
      modifiedDate="2026-06-28"
      overview={
        <>
          <p>
            The snowy owl (<em>Bubo scandiacus</em>) is a large, mostly white owl strongly associated with the open Arctic. It breeds on tundra in circumpolar regions, including parts of northern North America, and is one of the most recognizable birds of the far north. Unlike many owls, it is largely active during daylight, an adaptation suited to the long, bright days of the Arctic summer.
          </p>
          <p>
            In winter, snowy owls may move southward in movements known as irruptions. These shifts are irregular from year to year and are thought to be linked to food availability on the breeding grounds. During such winters, individuals can appear in parts of southern Canada and the northern United States, often in open landscapes that resemble tundra, such as fields, shorelines, and airfields.
          </p>
          <p>
            Listed as Vulnerable on the IUCN Red List, the snowy owl is the subject of ongoing study and monitoring. This profile is educational and ecological in focus, describing the species rather than offering guidance on locating, approaching, or handling wild owls.
          </p>
          <h3>Taxonomy and animal group</h3>
          <p>
            The snowy owl is a bird in the order Strigiformes and the family Strigidae, the group commonly called typical owls. Its scientific name is <em>Bubo scandiacus</em>, placing it in the genus <em>Bubo</em>, which also includes several large owls such as the eagle-owls. It was historically classified in its own genus, <em>Nyctea</em> (as <em>Nyctea scandiaca</em>), but is now generally treated within <em>Bubo</em> based on closer study of its relationships. As a true owl, it shares the family&#39;s traits of a rounded facial disc, forward-facing eyes, and silent flight.
          </p>
          <h3>Appearance and recognition</h3>
          <p>
            The snowy owl is among the most distinctive of owls, with dense plumage that is predominantly white. Adult males tend to be the whitest, while females and younger birds usually show more dark barring or spotting across the body and wings. It is a large, heavy-bodied owl with a rounded head, conspicuous yellow eyes, and a black bill largely hidden by feathers. Its legs and feet are thickly feathered, an adaptation for retaining heat in cold environments, and its overall pale coloration helps it blend into snowy and open ground.
          </p>
        </>
      }
      habitat={
        <p>
          During the breeding season the snowy owl is associated with open Arctic tundra, including parts of northern North America, where it nests on the ground in treeless terrain. The species has a circumpolar distribution across northern regions of the world. In winter, some individuals move south in irregular irruptions and may be found in parts of southern Canada and the northern United States, favoring open habitats such as coastal areas, marshes, agricultural fields, and other expanses that recall the tundra. Its presence farther south varies considerably from one year to the next rather than following a fixed pattern.
        </p>
      }
      diet={
        <p>
          The snowy owl is a predator of the open country, feeding largely on small mammals. Lemmings are especially important in its diet on the Arctic breeding grounds, and the abundance of these rodents in a given year can influence breeding success. Beyond lemmings, it takes a range of other prey, including additional small mammals, birds, and other animals depending on what is locally available. In wintering areas farther south, its diet shifts to reflect the prey present in those open landscapes.
        </p>
      }
      behavior={
        <>
          <p>
            Unlike most owls, the snowy owl is largely diurnal, hunting in daylight, a habit suited to the round-the-clock light of the Arctic summer. It often perches on the ground or on low rises, watching for prey before flying out to capture it. Breeding takes place on the tundra, where the female typically incubates eggs in a simple ground nest while the surrounding pair behavior centers on the open terrain. The timing and success of breeding can vary with food supply, and the species is known for the long-distance movements that bring it south in some winters.
          </p>
          <p>
            As a tundra predator, the snowy owl plays a role in Arctic food webs by helping regulate populations of small mammals such as lemmings. Its breeding numbers and reproductive output are closely tied to the cyclical abundance of these rodents, making it part of the broader dynamics of tundra ecosystems. Where it winters, it continues to act as a predator within open-country habitats. Because of these links, the snowy owl is often regarded as a species whose fortunes reflect conditions across the wider Arctic environment.
          </p>
        </>
      }
      humanInteraction={
        <p>
          The snowy owl is a wild bird and is best observed from a respectful distance without disturbance. It is listed as Vulnerable on the IUCN Red List, an assessment that reflects current understanding and can change as new information emerges; researchers continue to monitor the species and study the pressures it faces. Wintering owls sometimes appear near human-used spaces such as airfields and farmland, and any concerns about an owl in such settings are best directed to local wildlife authorities rather than handled directly. Supporting habitat protection and following the guidance of conservation organizations are constructive ways for people to contribute to the species&#39; future.
        </p>
      }
      faqs={[
        {
          question: "Why is the snowy owl active during the day?",
          answer:
            "The snowy owl is largely diurnal, unlike most owls, which suits the long daylight hours of the Arctic summer where it breeds. It often hunts by day, watching for prey from the ground or a low perch.",
        },
        {
          question: "What does the snowy owl eat?",
          answer:
            "It feeds mainly on small mammals, with lemmings being especially important on the Arctic breeding grounds. It also takes other prey such as additional small mammals and birds, depending on what is available locally.",
        },
        {
          question: "What is an irruption?",
          answer:
            "An irruption is an irregular southward movement that some snowy owls make in winter, thought to be linked to food availability. These movements vary from year to year, so the species' appearance farther south is not predictable.",
        },
        {
          question: "What is the conservation status of the snowy owl?",
          answer:
            "The snowy owl is listed as Vulnerable on the IUCN Red List. This is an assessment that can change over time as monitoring and research continue.",
        },
      ]}
      quickFacts={[
        { label: "Scientific name", value: "Bubo scandiacus" },
        { label: "Animal group", value: "Bird (owl)" },
        { label: "Family or order", value: "Strigidae; order Strigiformes" },
        { label: "Size", value: "Large, heavy-bodied owl" },
        { label: "Diet", value: "Small mammals, especially lemmings, plus other prey" },
        { label: "Habitat", value: "Open Arctic tundra; open country in winter" },
        { label: "Range", value: "Circumpolar; breeds in parts of northern North America" },
        { label: "Conservation status", value: "Vulnerable (IUCN Red List; subject to change)" },
      ]}
      relatedLinks={[
        { label: "Owl Profile", href: "/animals/owl", description: "Owls more broadly" },
        { label: "Barn Owl", href: "/animals/barn-owl", description: "Another widespread owl" },
        { label: "Arctic Fox", href: "/animals/arctic-fox", description: "Another Arctic animal" },
        { label: "North American fauna", href: "/fauna/continents/north-america", description: "Animals of North America" },
        { label: "Birds", href: "/animal-encyclopedia/birds" },
      ]}
    />
  );
}
