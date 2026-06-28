import type { Metadata } from "next";
import AnimalProfileLayout from "@/components/AnimalProfileLayout";
import { ANIMAL_SOURCES } from "@/lib/educational/animal-sources";
import { getAnimalGalleryImages, getAnimalImage, getAnimalOgImage } from "@/lib/images/animal-images";
import { buildArticleMetadata } from "@/lib/metadata";

const PATH = "/animals/bald-eagle";
const TITLE = "Bald Eagle: North America's Iconic Sea Eagle";
const DESC =
  "Learn about the bald eagle, a large North American sea eagle with a white head and tail, its habitat, diet, behavior, and notable conservation recovery.";

export const metadata: Metadata = buildArticleMetadata({
  title: TITLE,
  description: DESC,
  path: PATH,
  publishedTime: "2026-06-28",
  modifiedTime: "2026-06-28",
  ogImage: getAnimalOgImage("bald-eagle"),
});

export default function BaldEaglePage() {
  return (
    <AnimalProfileLayout
      commonName="Bald Eagle"
      scientificName="Haliaeetus leucocephalus"
      pageTitle={TITLE}
      description={DESC}
      path={PATH}
      parentCategory="Birds"
      parentCategoryHref="/animal-encyclopedia/birds"
      tags={["Bird","Bird of prey","Conservation success"]}
      image={getAnimalImage("bald-eagle") ?? undefined}
      galleryImages={getAnimalGalleryImages("bald-eagle")}
      sources={ANIMAL_SOURCES["bald-eagle"]}
      publishedDate="2026-06-28"
      modifiedDate="2026-06-28"
      overview={
        <>
          <p>
            The bald eagle (<em>Haliaeetus leucocephalus</em>) is a large sea eagle found in parts of North America and one of the most recognizable birds on the continent. Adults are best known for their bright white head and tail set against a dark brown body, a combination that makes mature birds distinctive at a distance. The name does not refer to a featherless head; it derives from an older sense of the word meaning white-headed.
          </p>
          <p>
            Eagles in this group are closely tied to water, and the bald eagle is typically associated with coasts, rivers, lakes, and wetlands where fish are available. It is also the national bird of the United States, a role that has given it a prominent place in national symbolism. As a large raptor near the top of its food web, it plays a meaningful part in the ecosystems it inhabits.
          </p>
          <p>
            The bald eagle is often cited as a notable conservation recovery story. After declines linked to the pesticide DDT, populations rebounded once that pesticide was restricted and the species received legal protection. The IUCN Red List currently assesses the bald eagle as Least Concern, an assessment that reflects present understanding and can be revised as new information emerges.
          </p>
          <h3>Taxonomy and animal group</h3>
          <p>
            The bald eagle&#39;s scientific name is <em>Haliaeetus leucocephalus</em>. It belongs to the family Accipitridae, the group that includes hawks, kites, and other eagles, and it sits within the genus <em>Haliaeetus</em>, the sea eagles or fish eagles. As a sea eagle, it is grouped with relatives such as the white-tailed eagle (<em>Haliaeetus albicilla</em>) of Eurasia rather than with the so-called true or booted eagles. It is a bird, a member of the class Aves, and as a raptor it is adapted for hunting with keen eyesight, strong feet, and a hooked bill.
          </p>
          <h3>Appearance and recognition</h3>
          <p>
            Adult bald eagles are recognized by their solid white head and tail, dark brown body and wings, and a heavy yellow bill and yellow feet. The eyes are pale yellow in adults. Young birds look quite different: juveniles and immatures are mostly dark brown, often mottled with white on the body and underwings, and they gradually acquire the clean white head and tail over several years as they mature. In flight, the broad wings are typically held flat, and the bird&#39;s large size and powerful, deliberate wingbeats help distinguish it from other large raptors. As with many raptors, females tend to be somewhat larger than males.
          </p>
        </>
      }
      habitat={
        <p>
          The bald eagle occurs in parts of North America and is closely associated with aquatic habitats, including seacoasts, large rivers, lakes, reservoirs, and wetlands where open water and fish are present. It is generally found near water for much of the year because of its strong dependence on fish. Some populations remain in an area year-round, while others move seasonally, with birds in colder regions shifting toward open water in winter. It is best described as occurring across parts of the continent rather than throughout any complete or uniform range, and local presence depends heavily on the availability of suitable habitat and prey.
        </p>
      }
      diet={
        <p>
          Fish make up the core of the bald eagle&#39;s diet, and the species is well suited to taking fish from at or near the surface of open water. Its feeding ecology is flexible, however, and it also takes waterfowl and other birds, along with various small animals when the opportunity arises. Carrion is an important food source as well, and bald eagles will readily feed on dead fish and other carcasses. They are also known to obtain food by stealing prey from other birds, a behavior that reflects an opportunistic feeding strategy centered on whatever aquatic resources are most accessible.
        </p>
      }
      behavior={
        <>
          <p>
            Bald eagles are often seen perched in tall trees near water or soaring over open landscapes. They typically form long-term pair bonds and build very large stick nests, usually placed high in a tall tree or on another elevated site, which a pair may reuse and add to over successive years. Both parents are involved in raising the young, which depend on the adults before fledging and gradually gain independence. Outside the breeding season, eagles may gather in numbers at places where food is abundant, such as stretches of open water with plentiful fish, and these concentrations can form a notable part of their seasonal behavior.
          </p>
          <p>
            As a large raptor near the top of its food web, the bald eagle influences the communities it lives in both as a predator and as a scavenger. By taking fish, waterfowl, and other prey, and by consuming carrion, it helps process and recycle nutrients within aquatic and shoreline ecosystems. Its dependence on healthy waterways and abundant fish also makes it a useful indicator of the condition of those environments, since the well-being of eagle populations is linked to clean water, intact habitat, and a reliable prey base.
          </p>
        </>
      }
      humanInteraction={
        <p>
          The bald eagle holds a strong place in human culture as the national bird of the United States, and its recovery after the restriction of DDT and the introduction of legal protection is widely regarded as a conservation success. The IUCN Red List currently lists it as Least Concern, an assessment that can change as conditions and data are reassessed, and the species continues to benefit from legal protections in much of its range. It is a wild raptor, not a pet, and is best observed from a respectful distance without disturbing nests or feeding birds. Anyone who encounters an injured eagle, a nest, or a related conflict should contact local wildlife authorities rather than intervening directly.
        </p>
      }
      faqs={[
        {
          question: "Why is the bald eagle called bald if it has feathers on its head?",
          answer:
            "The name does not mean featherless. It comes from an older sense of the word meaning white-headed, referring to the bright white feathers on an adult's head and tail.",
        },
        {
          question: "What does the bald eagle eat?",
          answer:
            "It eats mainly fish, and its diet also includes waterfowl and other birds along with carrion such as dead fish and carcasses. It is an opportunistic feeder centered on aquatic food sources.",
        },
        {
          question: "Is the bald eagle endangered?",
          answer:
            "The IUCN Red List currently assesses the bald eagle as Least Concern. The species is often cited as a conservation recovery, with populations rebounding after the pesticide DDT was restricted and legal protection was put in place, though assessments can change over time.",
        },
        {
          question: "When does a bald eagle get its white head and tail?",
          answer:
            "Young bald eagles are mostly dark brown and mottled, and they gradually develop the clean white head and tail as they mature over several years.",
        },
      ]}
      quickFacts={[
        { label: "Scientific name", value: "Haliaeetus leucocephalus" },
        { label: "Animal group", value: "Bird (raptor)" },
        { label: "Family", value: "Accipitridae; genus Haliaeetus (sea eagles)" },
        { label: "Appearance", value: "Large eagle; white head and tail, dark brown body, yellow bill" },
        { label: "Diet", value: "Mainly fish; also waterfowl and carrion" },
        { label: "Habitat", value: "Coasts, rivers, lakes, and wetlands; usually near water" },
        { label: "Range", value: "Found in parts of North America" },
        { label: "Conservation status", value: "Least Concern (IUCN Red List; assessment can change)" },
      ]}
      relatedLinks={[
        { label: "Eagle Profile", href: "/animals/eagle", description: "Eagles more broadly" },
        { label: "Golden Eagle", href: "/animals/golden-eagle", description: "Another large eagle" },
        { label: "Vulture", href: "/animals/vulture", description: "Another large raptor" },
        { label: "North American fauna", href: "/fauna/continents/north-america", description: "Animals of North America" },
        { label: "Birds", href: "/animal-encyclopedia/birds" },
      ]}
    />
  );
}
