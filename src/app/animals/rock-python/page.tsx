import type { Metadata } from "next";
import AnimalProfileLayout from "@/components/AnimalProfileLayout";
import { ANIMAL_SOURCES } from "@/lib/educational/animal-sources";
import { getAnimalGalleryImages, getAnimalImage, getAnimalOgImage } from "@/lib/images/animal-images";
import { buildArticleMetadata } from "@/lib/metadata";

const PATH = "/animals/rock-python";
const TITLE = "African Rock Python: Africa's Largest Snake";
const DESC =
  "The African rock python (Python sebae) is a large non-venomous constrictor of sub-Saharan Africa. Learn about its biology, habitat, diet, and ecology.";

export const metadata: Metadata = buildArticleMetadata({
  title: TITLE,
  description: DESC,
  path: PATH,
  publishedTime: "2026-06-27",
  modifiedTime: "2026-06-27",
  ogImage: getAnimalOgImage("rock-python"),
});

export default function RockPythonPage() {
  return (
    <AnimalProfileLayout
      commonName="African Rock Python"
      scientificName="Python sebae"
      pageTitle={TITLE}
      description={DESC}
      path={PATH}
      parentCategory="Reptiles & Amphibians"
      parentCategoryHref="/animal-encyclopedia/reptiles"
      tags={["Reptile","Constrictor","Non-venomous"]}
      image={getAnimalImage("rock-python") ?? undefined}
      galleryImages={getAnimalGalleryImages("rock-python")}
      sources={ANIMAL_SOURCES["rock-python"]}
      publishedDate="2026-06-27"
      modifiedDate="2026-06-27"
      overview={
        <>
          <p>
            The African rock python (<em>Python sebae</em>) is widely regarded as Africa&#39;s largest snake, a heavy-bodied, non-venomous constrictor found in parts of sub-Saharan Africa. Rather than relying on venom, it subdues prey by coiling around it and using muscular constriction. It is a distinct species, separate both from the broader informal &quot;python&quot; grouping and from the Asian pythons that people sometimes confuse it with.
          </p>
          <p>
            Across its range it is associated with savanna, grassland, forest edge, and areas near water, where it hunts mammals and birds. Females are notable for coiling around their clutch of eggs to help incubate them, an unusual degree of parental investment for a snake. The species occurs across parts of the continent, with regional variation in how common it is.
          </p>
          <p>
            Large pythons can be powerful animals, and there are rare records of serious incidents, so the calm and practical point is simply to avoid handling or disturbing wild snakes and to contact local wildlife authorities if a large snake is encountered near homes or livestock. Range and conservation details vary by region and should be checked against authoritative sources such as the IUCN Red List, Animal Diversity Web, and reputable museum or university zoology references.
          </p>
          <h3>Taxonomy and animal group</h3>
          <p>
            The African rock python is a reptile and a member of the python family, a group of non-venomous constricting snakes. Its scientific name is <em>Python sebae</em>. Pythons are distinguished from many other snakes by features such as heat-sensitive pits along the lips and, in females, the behaviour of brooding their eggs. <em>Python sebae</em> is one of several recognized python species and is the one most strongly associated with mainland Africa, as opposed to the python species found in Asia and the Australasian region.
          </p>
          <h3>Appearance and recognition</h3>
          <p>
            The African rock python is a large, thick-bodied snake with a patterned dorsal surface, typically showing blotches and bands in shades of brown, olive, tan, and grey that help it blend into grass, soil, and leaf litter. The head is relatively distinct from the neck, and the body is muscular, reflecting a lifestyle built around constriction. As Africa&#39;s largest snake, mature individuals can reach considerable lengths, though exact size varies between individuals and populations.
          </p>
        </>
      }
      habitat={
        <p>
          The African rock python is found in parts of sub-Saharan Africa, where it is associated with savanna, grassland, forest edge, and habitats near water such as rivers, wetlands, and waterholes. Its presence is not uniform across the continent, and distribution varies by region. It is a native African snake rather than an introduced one within this range, though populations elsewhere in the world that derive from the pet or skin trade should not be confused with its natural African distribution. Specific local range maps are best confirmed through authoritative sources.
        </p>
      }
      diet={
        <p>
          The African rock python is a carnivore that preys on a range of mammals and birds, capturing them and killing by constriction rather than venom. After seizing prey, the snake coils around it and tightens its grip until the animal can no longer breathe, then swallows it whole. Like other large constrictors, it can consume relatively large meals and may go for extended periods between feedings. The specific prey taken depends on what is locally available within its habitat.
        </p>
      }
      behavior={
        <>
          <p>
            As an ambush and stalking predator, the African rock python often relies on concealment, using its cryptic patterning to remain hidden before striking. It is frequently associated with areas near water and can swim well. A distinctive part of its life cycle is reproduction: females lay eggs and then coil around the clutch to help incubate and protect them through the development period, a level of maternal attendance unusual among snakes. Outside of breeding and feeding, much of its time is spent resting in cover or basking.
          </p>
          <p>
            Within African ecosystems, the African rock python functions as a large predator, helping to regulate populations of the mammals and birds it hunts. As both predator and, when young, potential prey for other animals, it forms part of the food web in savanna, grassland, and waterside habitats across parts of sub-Saharan Africa. Its ecological role is tied to healthy prey populations and suitable habitat, so changes in land use can affect where it persists.
          </p>
        </>
      }
      humanInteraction={
        <p>
          Human interaction with the African rock python includes encounters near settlements, farmland, and waterways, as well as pressures from habitat loss and the skin trade in parts of its range. Because large pythons are powerful and there are rare records of serious incidents, the sensible approach is simply to avoid handling or provoking wild snakes; anyone with concerns about a large snake near a home, livestock, or community should contact local wildlife authorities rather than attempt to capture or move it. This is a wild animal, not a pet, and this profile offers no handling or capture guidance. Conservation status varies by region and is best checked against authoritative sources.
        </p>
      }
      faqs={[
        {
          question: "Is the African rock python venomous?",
          answer:
            "No. The African rock python (Python sebae) is a non-venomous constrictor. It subdues prey by coiling around it and using muscular constriction rather than by injecting venom.",
        },
        {
          question: "How large does the African rock python get?",
          answer:
            "It is widely regarded as Africa's largest snake, with a heavy, muscular body that can reach considerable lengths. Exact sizes vary between individuals and populations, and authoritative references give the most reliable figures.",
        },
        {
          question: "Where in Africa is the African rock python found?",
          answer:
            "It occurs across parts of sub-Saharan Africa, associated with savanna, grassland, forest edge, and habitats near water. Its distribution is not uniform and varies by region, so local range details should be confirmed through authoritative sources.",
        },
        {
          question: "Are African rock pythons dangerous to people?",
          answer:
            "Large pythons are powerful animals and there are rare records of serious incidents, so it is best to avoid handling or disturbing wild snakes. If a large snake is encountered near a home or livestock, contact local wildlife authorities rather than approaching it.",
        },
      ]}
      quickFacts={[
        { label: "Group", value: "Reptiles & Amphibians (snake)" },
        { label: "Higher classification", value: "Python family; genus Python" },
        { label: "Diet", value: "Carnivore; mammals and birds, killed by constriction" },
        { label: "Notable trait", value: "Africa's largest snake; non-venomous constrictor; females brood their eggs" },
        { label: "Habitat", value: "Savanna, grassland, forest edge, and areas near water" },
        { label: "Africa distribution", value: "Parts of sub-Saharan Africa; varies by region" },
        { label: "Human interaction", value: "Encounters near settlements and water; pressures include habitat loss and the skin trade" },
        { label: "Conservation status", value: "Varies by region; check authoritative sources" },
      ]}
      relatedLinks={[
        { label: "Python Profile", href: "/animals/python", description: "Pythons more broadly" },
        { label: "Boa Profile", href: "/animals/boa", description: "Another large constrictor" },
        { label: "Anaconda Profile", href: "/animals/anaconda", description: "A giant aquatic constrictor" },
        { label: "African fauna", href: "/fauna/continents/africa", description: "Animals of Africa" },
        { label: "Reptiles & Amphibians", href: "/animal-encyclopedia/reptiles" },
      ]}
    />
  );
}
