import type { Metadata } from "next";
import AnimalProfileLayout from "@/components/AnimalProfileLayout";
import { ANIMAL_SOURCES } from "@/lib/educational/animal-sources";
import { getAnimalGalleryImages, getAnimalImage, getAnimalOgImage } from "@/lib/images/animal-images";
import { buildArticleMetadata } from "@/lib/metadata";

const PATH = "/animals/marabou-stork";
const TITLE = "Marabou Stork: Africa's Giant Scavenging Bird";
const DESC =
  "Learn about the marabou stork (Leptoptilos crumenifer), a huge bare-headed African stork that scavenges carrion across parts of sub-Saharan Africa.";

export const metadata: Metadata = buildArticleMetadata({
  title: TITLE,
  description: DESC,
  path: PATH,
  publishedTime: "2026-06-27",
  modifiedTime: "2026-06-27",
  ogImage: getAnimalOgImage("marabou-stork"),
});

export default function MarabouStorkPage() {
  return (
    <AnimalProfileLayout
      commonName="Marabou Stork"
      scientificName="Leptoptilos crumenifer"
      pageTitle={TITLE}
      description={DESC}
      path={PATH}
      parentCategory="Birds"
      parentCategoryHref="/animal-encyclopedia/birds"
      tags={["Bird","Stork","Scavenger"]}
      image={getAnimalImage("marabou-stork") ?? undefined}
      galleryImages={getAnimalGalleryImages("marabou-stork")}
      sources={ANIMAL_SOURCES["marabou-stork"]}
      publishedDate="2026-06-27"
      modifiedDate="2026-06-27"
      overview={
        <>
          <p>
            The marabou stork (<em>Leptoptilos crumenifer</em>) is one of Africa&#39;s most distinctive large birds. It is a huge stork with a bare head and neck, a long pinkish throat pouch, and an enormous bill. These features give it an unmistakable, somewhat ungainly appearance, and the species is among the largest flying birds by wingspan.
          </p>
          <p>
            Much of the marabou stork&#39;s biology is shaped by its scavenging habits. The bare skin of its head and neck is thought to be an adaptation for feeding on carrion, allowing it to keep cleaner while reaching into carcasses alongside vultures. It also takes scraps, fish, and small animals, and is frequently seen around wetlands, savannas, and human settlements, including rubbish tips, in parts of sub-Saharan Africa.
          </p>
          <p>
            Range and conservation details can vary by region and over time, so specific local figures should be checked against authoritative sources such as the IUCN Red List, Animal Diversity Web, or museum and university zoology references. The descriptions here aim to stay general and cautious rather than claim continent-wide precision.
          </p>
          <h3>Taxonomy and animal group</h3>
          <p>
            The marabou stork belongs to the storks, the family Ciconiidae, within the broader group of large wading and soaring birds. Its scientific name is <em>Leptoptilos crumenifer</em>. The genus <em>Leptoptilos</em> contains a small number of very large storks, sometimes called adjutant storks, which share bare heads and heavy bills suited to scavenging. As with all such classifications, taxonomy can be revised as research continues, so authoritative checklists are the best reference for current naming.
          </p>
          <h3>Appearance and recognition</h3>
          <p>
            The marabou stork is a strikingly large bird with long legs, a thick, wedge-shaped bill, and broad wings. Its head and neck are largely bare of feathers, with skin that can appear pinkish and mottled, and it carries a long, pendulous throat pouch that hangs from the front of the neck. The plumage is generally dark above and paler below, giving a cloaked impression when the bird stands hunched. Its very broad wings make it one of the largest flying birds by wingspan, and it soars readily on rising warm air.
          </p>
        </>
      }
      habitat={
        <p>
          The marabou stork is found in parts of sub-Saharan Africa, where it is associated with wetlands, savannas, and open country, as well as human-influenced settings. It is often seen around lakes, rivers, and floodplains, and it readily uses human settlements and rubbish tips where food is available. Its distribution varies by region, and it should be understood as occurring across parts of the continent rather than uniformly everywhere. Specific local presence is best confirmed through regional bird references and authoritative range maps.
        </p>
      }
      diet={
        <p>
          The marabou stork is primarily a scavenger and opportunist. It feeds heavily on carrion, often gathering at carcasses alongside vultures, and it also takes scraps, fish, and small animals such as insects, amphibians, and other small prey when available. Around human settlements and rubbish tips it readily consumes discarded food and waste. This flexible, scavenging diet allows it to exploit a wide range of food sources across the landscapes it inhabits.
        </p>
      }
      behavior={
        <>
          <p>
            Marabou storks are often seen standing in a hunched posture or soaring at height on their broad wings, using rising warm air to travel and search for food with little effort. They are frequently gregarious, gathering in numbers at carcasses, fishing sites, and refuse areas, and they commonly associate with vultures while scavenging. Like other storks, they nest and can form breeding colonies, raising young in nests built in trees or similar sites. Their daily life centers on locating reliable food, whether from natural sources or human activity.
          </p>
          <p>
            Ecologically, the marabou stork plays an important role as a scavenger. By feeding on carrion and waste, it helps clean up carcasses and organic refuse across the wetlands, savannas, and settled areas of parts of sub-Saharan Africa. This scavenging contributes to nutrient cycling and the removal of decaying material from the landscape, a function it shares with vultures and other carrion feeders. In doing so, the species is a useful and characteristic member of African scavenging communities.
          </p>
        </>
      }
      humanInteraction={
        <p>
          The marabou stork lives in close proximity to people in many areas, frequenting settlements and rubbish tips where it finds food. This makes it a familiar bird, and its scavenging can help reduce organic waste. It is a wild bird, not a pet, and should be observed at a distance and not handled or fed; any concerns about wildlife near homes or communities are best directed to local wildlife authorities. The marabou stork is widespread and not currently considered globally threatened, although local situations vary; current conservation details should be checked against authoritative sources such as the IUCN Red List.
        </p>
      }
      faqs={[
        {
          question: "Why does the marabou stork have a bare head and neck?",
          answer:
            "The bare skin of the head and neck is thought to be an adaptation for its scavenging habits. Feeding on carrion alongside vultures, a featherless head may help the bird stay cleaner when reaching into carcasses. It is one of several traits, along with the large bill, that suit a scavenging lifestyle.",
        },
        {
          question: "Is the marabou stork dangerous to people?",
          answer:
            "The marabou stork is a large wild bird that lives near people in many areas but is generally a scavenger rather than a threat. As with any large wild animal, it should be observed at a distance and not handled or fed. Concerns about wildlife near homes or communities are best directed to local wildlife authorities.",
        },
        {
          question: "Where in Africa does the marabou stork live?",
          answer:
            "It is found in parts of sub-Saharan Africa, associated with wetlands, savannas, open country, and human settlements including rubbish tips. Its distribution varies by region, so it is best described as occurring across parts of the continent. Regional bird references and authoritative range maps give the most accurate local picture.",
        },
        {
          question: "What does the marabou stork eat?",
          answer:
            "It is mainly a scavenger, feeding heavily on carrion alongside vultures, as well as scraps, fish, and small animals. Around human settlements it readily takes discarded food and waste. This flexible diet lets it use many different food sources across the landscapes it inhabits.",
        },
      ]}
      quickFacts={[
        { label: "Group", value: "Birds (storks)" },
        { label: "Higher classification", value: "Family Ciconiidae; genus Leptoptilos" },
        { label: "Diet", value: "Scavenger; carrion, scraps, fish, small animals" },
        { label: "Notable trait", value: "Bare head and neck, long throat pouch, huge bill; very large wingspan" },
        { label: "Habitat", value: "Wetlands, savannas, open country, and human settlements" },
        { label: "Africa distribution", value: "Parts of sub-Saharan Africa; varies by region" },
        { label: "Human interaction", value: "Often seen near settlements and rubbish tips; a scavenger, not a pet" },
        { label: "Conservation status", value: "Widespread; not currently considered globally threatened, but local situations vary" },
      ]}
      relatedLinks={[
        { label: "Stork Profile", href: "/animals/stork", description: "Storks more broadly" },
        { label: "Vulture Profile", href: "/animals/vulture", description: "A fellow African scavenger" },
        { label: "Pelican Profile", href: "/animals/pelican", description: "Another large waterbird" },
        { label: "African fauna", href: "/fauna/continents/africa", description: "Animals of Africa" },
        { label: "Birds", href: "/animal-encyclopedia/birds" },
      ]}
    />
  );
}
