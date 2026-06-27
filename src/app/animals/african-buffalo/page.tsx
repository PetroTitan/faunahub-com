import type { Metadata } from "next";
import AnimalProfileLayout from "@/components/AnimalProfileLayout";
import { ANIMAL_SOURCES } from "@/lib/educational/animal-sources";
import { getAnimalGalleryImages, getAnimalImage, getAnimalOgImage } from "@/lib/images/animal-images";
import { buildArticleMetadata } from "@/lib/metadata";

const PATH = "/animals/african-buffalo";
const TITLE = "African Buffalo (Syncerus caffer): Facts and Profile";
const DESC =
  "Learn about the African (Cape) buffalo, Syncerus caffer, a large wild bovid of sub-Saharan Africa: appearance, herds, habitat, ecology, and conservation.";

export const metadata: Metadata = buildArticleMetadata({
  title: TITLE,
  description: DESC,
  path: PATH,
  publishedTime: "2026-06-27",
  modifiedTime: "2026-06-27",
  ogImage: getAnimalOgImage("african-buffalo"),
});

export default function AfricanBuffaloPage() {
  return (
    <AnimalProfileLayout
      commonName="African Buffalo"
      scientificName="Syncerus caffer"
      pageTitle={TITLE}
      description={DESC}
      path={PATH}
      parentCategory="Mammals"
      parentCategoryHref="/animal-encyclopedia/mammals"
      tags={["Mammal","Bovid","African savanna"]}
      image={getAnimalImage("african-buffalo") ?? undefined}
      galleryImages={getAnimalGalleryImages("african-buffalo")}
      sources={ANIMAL_SOURCES["african-buffalo"]}
      publishedDate="2026-06-27"
      modifiedDate="2026-06-27"
      overview={
        <>
          <p>
            The African buffalo, often called the Cape buffalo (<em>Syncerus caffer</em>), is a large, powerfully built wild bovid found in parts of sub-Saharan Africa. It is a true wild animal, not a domesticated species, and despite the shared name it is not closely related to the domestic water buffalo of Asia. Both males and females carry horns, and in mature bulls the horn bases broaden and fuse into a heavy shield across the forehead known as a &quot;boss.&quot;
          </p>
          <p>
            Buffalo live in herds within savanna, grassland, and wetland-edge habitats where grazing and water are available. They are grazers that feed largely on grasses, and they form an important prey species for large predators such as lions. The species is known for cohesive herd behaviour and a wary temperament around people, and individuals can become defensive if cornered or wounded.
          </p>
          <p>
            Range and conservation details vary by region and change over time, so specifics should be checked against authoritative sources such as the IUCN Red List and Animal Diversity Web. As a large, wary wild animal, the African buffalo can be dangerous if approached, cornered, or wounded; encounters and any wildlife-conflict concerns should be directed to local wildlife authorities, and this profile offers no handling or approach guidance.
          </p>
          <h3>Taxonomy and animal group</h3>
          <p>
            The African buffalo (<em>Syncerus caffer</em>) is a mammal in the family Bovidae, the same broad family that includes cattle, antelopes, goats, and sheep. As a bovid it is a hoofed, even-toed grazing animal. The Cape buffalo is the most widely recognised form of the species, and zoologists distinguish several regional populations across sub-Saharan Africa. It should not be confused with the domestic water buffalo of Asia, which belongs to a different genus.
          </p>
          <h3>Appearance and recognition</h3>
          <p>
            The African buffalo is a heavily built bovid with a broad muzzle, large drooping ears, and a stocky body supported on sturdy legs. Coat colour typically ranges from dark brown to black in larger forms. Both sexes carry curved horns, but mature bulls are most distinctive: the bases of their horns thicken and fuse across the top of the head to form a bony shield, or \&quot;boss.\&quot; Bulls are generally larger and more massively built than cows. The horns sweep outward and then upward, giving the head a wide, formidable profile.
          </p>
        </>
      }
      habitat={
        <p>
          The African buffalo occurs across parts of sub-Saharan Africa, where it is associated with savanna, grassland, and the margins of wetlands and water bodies. It depends on reliable access to water and to grazing, so its presence is shaped strongly by the availability of these resources. Distribution is patchy and varies by region rather than being uniform across the continent, and populations have contracted in some areas. For precise, up-to-date range information, authoritative sources such as the IUCN Red List should be consulted.
        </p>
      }
      diet={
        <p>
          The African buffalo is a grazer, feeding chiefly on grasses. Its bulk and digestive system allow it to process large quantities of relatively coarse grass, and access to water is important to its daily and seasonal movements. Because it relies on grazing lawns and watered areas, buffalo movements track the availability of green forage, which can shift with the seasons in savanna and grassland landscapes.
        </p>
      }
      behavior={
        <>
          <p>
            African buffalo are social animals that live in herds, and the herd provides safety through numbers and cohesive group behaviour. When threatened, members of a herd may stand their ground or act together in defence, and the species is noted for cohesive herd defence against predators. Buffalo are generally wary of people and can behave unpredictably, particularly bulls or animals that are isolated, cornered, or wounded. Mature bulls may spend time apart from the main herds. As large, long-lived grazers, buffalo invest in relatively few offspring over time, with calves remaining within the protection of the herd.
          </p>
          <p>
            As a large-bodied grazer, the African buffalo plays an important ecological role in the savanna and grassland systems of parts of sub-Saharan Africa. By consuming grasses in bulk, buffalo herds influence vegetation structure and contribute to the grazing dynamics of these landscapes. They are also a key prey species for large predators, most notably lions, making them an important link in African food webs. Buffalo are frequently accompanied by oxpecker birds, which forage on parasites and feed around the animals, illustrating one of the everyday ecological relationships of the African savanna.
          </p>
        </>
      }
      humanInteraction={
        <p>
          The African buffalo is a familiar large mammal of African grasslands and is widely observed in protected areas. It is a wild animal, not a pet or livestock, and this profile gives no instructions for approaching, handling, or capturing it. Buffalo are wary and can be dangerous if cornered or wounded, so encounters should be treated with caution and any wildlife-conflict situations directed to local wildlife authorities rather than handled directly. The species is listed by the IUCN as Least Concern overall, though populations are affected by habitat loss and disease and have declined in some areas; regional conservation status varies and should be verified against authoritative sources.
        </p>
      }
      faqs={[
        {
          question: "Is the African buffalo the same as a domestic water buffalo?",
          answer:
            "No. The African (Cape) buffalo (Syncerus caffer) is a wild bovid of sub-Saharan Africa and is not closely related to the domestic water buffalo of Asia, which belongs to a different genus. Despite the shared name, they are distinct animals.",
        },
        {
          question: "Do both male and female African buffalo have horns?",
          answer:
            "Yes. Both sexes carry horns. In mature bulls, the horn bases thicken and fuse across the forehead to form a heavy bony shield called a \"boss,\" which is one of the species' most recognisable features.",
        },
        {
          question: "Are African buffalo dangerous to people?",
          answer:
            "African buffalo are large, wary wild animals that can behave unpredictably and may become defensive if cornered or wounded. They should be observed at a safe distance, and any encounter or wildlife-conflict concern should be directed to local wildlife authorities. This profile provides no approach or handling guidance.",
        },
        {
          question: "What is the conservation status of the African buffalo?",
          answer:
            "The IUCN lists the African buffalo as Least Concern overall, though populations are affected by habitat loss and disease and have declined in some regions. Regional status varies, so details should be checked against authoritative sources such as the IUCN Red List.",
        },
      ]}
      quickFacts={[
        { label: "Group", value: "Wild bovid (cattle and antelope family)" },
        { label: "Higher classification", value: "Mammalia; Bovidae; Syncerus caffer" },
        { label: "Diet", value: "Grazer, feeding chiefly on grasses" },
        { label: "Notable trait", value: "Mature bulls have fused horn bases forming a heavy \"boss\"" },
        { label: "Habitat", value: "Savanna, grassland, and wetland edges with water and grazing" },
        { label: "Africa distribution", value: "Parts of sub-Saharan Africa; patchy and varies by region" },
        { label: "Human interaction", value: "Wild animal; wary and potentially dangerous; observe at a distance" },
        { label: "Conservation status", value: "IUCN Least Concern overall; declines in some regions" },
      ]}
      relatedLinks={[
        { label: "Wildebeest Profile", href: "/animals/wildebeest", description: "Another African grazer" },
        { label: "Hippopotamus Profile", href: "/animals/hippopotamus", description: "A large African water mammal" },
        { label: "Lion Profile", href: "/animals/lion", description: "A key buffalo predator" },
        { label: "African fauna", href: "/fauna/continents/africa", description: "Animals of Africa" },
        { label: "Mammals", href: "/animal-encyclopedia/mammals" },
      ]}
    />
  );
}
