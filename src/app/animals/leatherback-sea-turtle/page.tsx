import type { Metadata } from "next";
import AnimalProfileLayout from "@/components/AnimalProfileLayout";
import { ANIMAL_SOURCES } from "@/lib/educational/animal-sources";
import { getAnimalGalleryImages, getAnimalImage, getAnimalOgImage } from "@/lib/images/animal-images";
import { buildArticleMetadata } from "@/lib/metadata";

const PATH = "/animals/leatherback-sea-turtle";
const TITLE = "Leatherback Sea Turtle: Facts & Biology";
const DESC =
  "The leatherback sea turtle (Dermochelys coriacea) is the largest living turtle: a deep-diving, jellyfish-eating marine reptile with a leathery, ridged shell.";

export const metadata: Metadata = buildArticleMetadata({
  title: TITLE,
  description: DESC,
  path: PATH,
  publishedTime: "2026-06-28",
  modifiedTime: "2026-06-28",
  ogImage: getAnimalOgImage("leatherback-sea-turtle"),
});

export default function LeatherbackSeaTurtlePage() {
  return (
    <AnimalProfileLayout
      commonName="Leatherback Sea Turtle"
      scientificName="Dermochelys coriacea"
      pageTitle={TITLE}
      description={DESC}
      path={PATH}
      parentCategory="Reptiles & Amphibians"
      parentCategoryHref="/animal-encyclopedia/reptiles"
      tags={["Reptile","Sea turtle","Marine"]}
      image={getAnimalImage("leatherback-sea-turtle") ?? undefined}
      galleryImages={getAnimalGalleryImages("leatherback-sea-turtle")}
      sources={ANIMAL_SOURCES["leatherback-sea-turtle"]}
      publishedDate="2026-06-28"
      modifiedDate="2026-06-28"
      overview={
        <>
          <p>
            The leatherback sea turtle (<em>Dermochelys coriacea</em>) is the largest living turtle and one of the most distinctive of all marine reptiles. Unlike other sea turtles, it has no hard, bony shell covered in scutes. Instead, its carapace is a flexible, leathery layer of skin stretched over a mosaic of small bones, marked by seven prominent lengthwise ridges. This unusual build, together with a streamlined, teardrop-shaped body, makes the leatherback unmistakable among the world&#39;s turtles.
          </p>
          <p>
            A true ocean wanderer, the leatherback ranges across the Atlantic, Pacific, and Indian Oceans and is often described as having one of the widest distributions of any reptile. It is a deep diver and a specialist feeder on jellyfish and other soft-bodied, gelatinous prey. The leatherback has been assessed by the IUCN as globally Vulnerable, with several regional populations facing greater pressure; for the current listing and population details, the IUCN Red List should be consulted directly.
          </p>
          <p>
            Leatherbacks are wild marine animals adapted to a life almost entirely at sea. Females come ashore only to nest, and hatchlings make their way to the water shortly after emerging. This profile is an educational overview of the species&#39; biology, ecology, and conservation context, not a guide to interacting with, handling, or keeping these animals.
          </p>
          <h3>Taxonomy and animal group</h3>
          <p>
            The leatherback sea turtle is a reptile in the order Testudines (turtles). It is the sole living species in the genus <em>Dermochelys</em> and the only living member of the family Dermochelyidae, which sets it apart from all other living sea turtles (family Cheloniidae, such as the green and loggerhead turtles). Its species name, <em>coriacea</em>, refers to its leathery, hide-like carapace. As a marine turtle, the leatherback is distinct from freshwater turtles and from tortoises; tortoises are land-dwelling turtles, but the leatherback is fully oceanic. The genus and family scope here is limited to this single species, and no other taxonomy should be inferred.
          </p>
          <h3>Appearance and recognition</h3>
          <p>
            The leatherback is the largest of all living turtles, with adults commonly reaching about 1.5 to 2 meters (roughly 5 to 6 feet) in carapace length and weights often in the range of several hundred kilograms; exceptionally large individuals have been recorded heavier still. Its most defining feature is the carapace itself: rather than the hard, scute-covered shell of other sea turtles, it has a smooth, rubbery skin underlain by countless tiny bones, forming a flexible shell with seven raised ridges running from front to back. The skin is typically dark, often blackish with pale or whitish spotting, and the body tapers toward the rear in a streamlined, hydrodynamic shape. The front flippers are exceptionally long and lack claws, and the jaws bear sharp, tooth-like cusps suited to gripping soft prey.
          </p>
        </>
      }
      habitat={
        <p>
          Leatherbacks are pelagic, spending most of their lives in the open ocean while also using coastal and continental-shelf waters. They are found in parts of the Atlantic, Pacific, and Indian Oceans, ranging from tropical seas to surprisingly cold, high-latitude waters, which is unusual among reptiles. For nesting, females come ashore on tropical and subtropical sandy beaches, where they dig nests above the high-tide line. Foraging and migration can carry individuals across entire ocean basins, so their movements vary widely by population and region. This is a general description of where the species occurs and is not a complete or precise range map; the IUCN Red List and regional assessments provide more detailed distribution information.
        </p>
      }
      diet={
        <p>
          The leatherback is a specialist predator of jellyfish and other soft-bodied, gelatinous animals such as salps and siphonophores. Its mouth and throat are lined with backward-pointing, spine-like projections (papillae) that help it hold onto slippery, gelatinous prey and direct it down the throat once swallowed. Because jellyfish are low in nutritional value, leatherbacks must consume large quantities to meet their energy needs, and their feeding can take them to areas where jellyfish concentrate. This reliance on gelatinous prey is one reason floating marine debris, particularly plastic that can resemble jellyfish, is a recognized concern for the species.
        </p>
      }
      behavior={
        <>
          <p>
            Leatherbacks are remarkable divers, regularly descending to great depths in pursuit of prey and capable of dives reported to exceed 1,000 meters (over 3,000 feet), among the deepest of any air-breathing reptile. They can remain submerged for extended periods, and their physiology allows them to stay active in cold water that would slow most other reptiles, a result of their large body size, insulating fat, and specialized blood circulation that helps conserve heat. They are largely solitary, long-distance migrants, traveling thousands of kilometers between feeding grounds and nesting beaches. Females nest at night, typically returning to nesting regions periodically and laying multiple clutches in a season, with each clutch containing roughly around one hundred eggs that incubate in the warm sand for about two months.
          </p>
          <p>
            As a major consumer of jellyfish, the leatherback plays a role in marine food webs and may help influence the abundance of gelatinous plankton, which in turn interact with fish populations and other ocean life. Its long migrations link distant ocean ecosystems, from tropical nesting beaches to cold, productive foraging waters. Eggs and hatchlings are an important food source for a range of beach and coastal predators, and only a small fraction of hatchlings survive to adulthood, a pattern typical of sea turtles. Through its movements and feeding, the leatherback connects open-ocean and coastal habitats across multiple ocean basins.
          </p>
        </>
      }
      humanInteraction={
        <p>
          Leatherback sea turtles are wild marine animals and are not pets; they are not kept by people and have specialized needs met only in the open ocean. People most often encounter them as nesting females on beaches, as animals seen at sea, or occasionally when individuals strand. Observers are encouraged to keep a respectful distance and avoid disturbing turtles, nests, or hatchlings, and to follow the guidance of local wildlife authorities, which in many places protect sea turtles and their nesting beaches. Anyone who finds a sick, injured, stranded, or entangled turtle should report it to local wildlife authorities, marine stranding networks, or qualified professionals rather than attempting to handle or move the animal themselves.
        </p>
      }
      extraSections={[
        {
          heading: "Defenses & threats",
          body: (
            <p>
              The leatherback sea turtle is neither venomous nor poisonous. It has no venom apparatus and is not known to be toxic to the touch. It captures prey using sharp-edged jaws and tooth-like cusps rather than any form of venom, and its defenses against predators are based on size, diving ability, and life in the open ocean rather than chemical means. No venom potency, toxicity, or related statistics apply to this species.
            </p>
          ),
        },
        {
          heading: "Conservation context",
          body: (
            <p>
              The leatherback sea turtle has been assessed by the IUCN as globally Vulnerable, while several regional subpopulations have been evaluated as more threatened, including some assessed as Critically Endangered. Conservation status can change over time and is best confirmed by consulting the current IUCN Red List and regional assessments. Documented pressures on the species include incidental capture in fishing gear (bycatch), harvest of eggs and adults in some areas, loss and degradation of nesting beaches, marine pollution and debris, vessel strikes, and changing ocean conditions. These threats vary by region and population, and conservation efforts often focus on protecting nesting beaches and reducing bycatch.
            </p>
          ),
        },
      ]}
      faqs={[
        {
          question: "Why is it called a leatherback turtle?",
          answer:
            "The name refers to its shell. Unlike other sea turtles, the leatherback has no hard, scute-covered shell. Its carapace is a flexible, leathery layer of skin over a mosaic of small bones, with seven raised ridges running lengthwise. Its species name, coriacea, comes from this leathery texture.",
        },
        {
          question: "How big is a leatherback sea turtle?",
          answer:
            "It is the largest living turtle. Adults commonly reach about 1.5 to 2 meters (roughly 5 to 6 feet) in carapace length and can weigh several hundred kilograms, with exceptionally large individuals recorded even heavier.",
        },
        {
          question: "What do leatherback sea turtles eat?",
          answer:
            "They are specialists on jellyfish and other soft-bodied, gelatinous prey such as salps. Backward-pointing spines in the mouth and throat help them hold onto slippery prey. Because jellyfish are low in nutrition, leatherbacks must eat large amounts.",
        },
        {
          question: "Is the leatherback sea turtle endangered?",
          answer:
            "The IUCN has assessed the species as globally Vulnerable, with several regional populations facing greater pressure, including some assessed as Critically Endangered. Because status can change, the current IUCN Red List should be consulted for the latest listing.",
        },
      ]}
      quickFacts={[
        { label: "Scientific name", value: "Dermochelys coriacea" },
        { label: "Group", value: "Turtle (marine; reptile)" },
        { label: "Range", value: "Parts of the Atlantic, Pacific, and Indian Oceans; varies by population" },
        { label: "Habitat", value: "Open ocean and coastal waters; nests on tropical and subtropical beaches" },
        { label: "Diet", value: "Jellyfish and other soft-bodied, gelatinous prey" },
        { label: "Conservation", value: "Assessed by the IUCN as globally Vulnerable (changeable; some populations more threatened) — consult the IUCN Red List" },
      ]}
      relatedLinks={[
        { label: "Reptiles & Amphibians", href: "/animal-taxonomy/reptiles-amphibians", description: "Snakes, lizards, turtles, crocodilians, frogs & salamanders" },
        { label: "Sea Turtle", href: "/animals/sea-turtle", description: "Sea turtles as a group" },
        { label: "Green Sea Turtle", href: "/animals/green-sea-turtle", description: "Another sea turtle" },
        { label: "Turtle", href: "/animals/turtle", description: "Turtles more broadly" },
        { label: "Reptiles & Amphibians", href: "/animal-encyclopedia/reptiles" },
      ]}
    />
  );
}
