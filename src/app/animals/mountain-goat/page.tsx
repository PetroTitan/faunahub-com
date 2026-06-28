import type { Metadata } from "next";
import AnimalProfileLayout from "@/components/AnimalProfileLayout";
import { ANIMAL_SOURCES } from "@/lib/educational/animal-sources";
import { getAnimalGalleryImages, getAnimalImage, getAnimalOgImage } from "@/lib/images/animal-images";
import { buildArticleMetadata } from "@/lib/metadata";

const PATH = "/animals/mountain-goat";
const TITLE = "Mountain Goat: Alpine Cliff-Dwelling Mammal";
const DESC =
  "Learn about the mountain goat, a white, shaggy-coated alpine mammal of steep cliffs in parts of northwestern North America, and why it is not a true goat.";

export const metadata: Metadata = buildArticleMetadata({
  title: TITLE,
  description: DESC,
  path: PATH,
  publishedTime: "2026-06-28",
  modifiedTime: "2026-06-28",
  ogImage: getAnimalOgImage("mountain-goat"),
});

export default function MountainGoatPage() {
  return (
    <AnimalProfileLayout
      commonName="Mountain Goat"
      scientificName="Oreamnos americanus"
      pageTitle={TITLE}
      description={DESC}
      path={PATH}
      parentCategory="Mammals"
      parentCategoryHref="/animal-encyclopedia/mammals"
      tags={["Mammal","Not a true goat","Alpine"]}
      image={getAnimalImage("mountain-goat") ?? undefined}
      galleryImages={getAnimalGalleryImages("mountain-goat")}
      sources={ANIMAL_SOURCES["mountain-goat"]}
      publishedDate="2026-06-28"
      modifiedDate="2026-06-28"
      overview={
        <>
          <p>
            The mountain goat (<em>Oreamnos americanus</em>) is a sure-footed, white-coated mammal associated with the steep cliffs and high mountains of parts of northwestern North America. Despite its common name, it is not a true goat. It is the only living species in its genus, <em>Oreamnos</em>, and stands apart from the domestic goats and wild goats of the genus <em>Capra</em>. Its thick, shaggy coat and confident movement across precipitous rock are among its most recognizable traits.
          </p>
          <p>
            This species is exceptionally adapted to life on terrain that few large mammals can use. Sheer ledges, rocky chutes, and exposed alpine slopes that would be hazardous to most animals are the places where mountain goats spend much of their lives, where their footing and physiology help them avoid many ground predators. Both males and females carry short, black, slightly curved horns.
          </p>
          <p>
            The mountain goat is assessed as Least Concern on the IUCN Red List. Conservation assessments reflect current understanding and can change over time as new information becomes available. This profile is educational and focuses on the animal&#39;s biology, ecology, and place in its high-elevation environment.
          </p>
          <h3>Taxonomy and animal group</h3>
          <p>
            The mountain goat belongs to the family Bovidae, which also includes cattle, sheep, antelope, and true goats, and within that family it sits in the subfamily that contains the goat-antelopes. Its scientific name is <em>Oreamnos americanus</em>, and it is the only living species placed in the genus <em>Oreamnos</em>. An important point of clarification is that the mountain goat is not a true goat: true goats belong to the genus <em>Capra</em>, while the mountain goat is more closely related to certain goat-antelopes such as the chamois and the gorals and serows of Asia. This distinction makes the species taxonomically distinctive among North American mammals.
          </p>
          <h3>Appearance and recognition</h3>
          <p>
            Mountain goats are stocky, medium-large mammals with a distinctive all-white or creamy coat that helps them blend into snowy alpine surroundings. The coat is shaggy and dense, with a woolly underlayer beneath longer guard hairs, and many individuals show a pronounced beard and a hump of longer hair over the shoulders. Both sexes have short, smooth, black horns that curve slightly backward, along with black hooves, eyes, nose, and lips that contrast sharply with the pale coat. The hooves are specialized for grip, with hard outer rims and softer, traction-providing inner pads that suit movement on rock. Males are generally larger than females, though the two can be difficult to tell apart at a distance.
          </p>
        </>
      }
      habitat={
        <p>
          The mountain goat is associated with steep, rocky, high-elevation terrain in parts of northwestern North America, including portions of mountainous regions in western Canada and the western United States. It occurs in parts of alpine and subalpine zones, favoring cliffs, talus slopes, and rugged outcrops that offer escape from predators. The species is also present in some areas beyond its original range as a result of introductions, so populations in certain mountain ranges may represent introduced rather than long-established native animals. Its distribution is best described as patchy and tied to suitable precipitous habitat rather than spread evenly across the continent.
        </p>
      }
      diet={
        <p>
          As a herbivore, the mountain goat feeds on a range of alpine and subalpine plants, browsing and grazing according to what its harsh, high environment provides through the seasons. Its diet can include grasses, sedges, herbaceous flowering plants, mosses, lichens, and the leaves and twigs of low shrubs and woody plants. During warmer months it makes use of green growth on meadows and slopes, while in winter it relies on whatever vegetation remains accessible above or around the snow. Like many mountain mammals, it is also known to visit natural mineral sources to supplement its intake of salts and minerals.
        </p>
      }
      behavior={
        <>
          <p>
            Mountain goats are well known for their calm, deliberate movement across terrain that would be dangerous for most large animals, using ledges and chutes as both feeding grounds and refuge. They are often seen in small groups, with females and young forming bands while adult males tend to be more solitary outside the breeding season. Breeding occurs in autumn, and a single young, called a kid, is typically born in late spring; kids are remarkably capable on rough ground within a short time of birth and stay close to their mothers. Social interactions can include displays and sparring, particularly around the breeding season and at limited resources, and individuals generally move to lower or more sheltered areas in the harshest winter conditions.
          </p>
          <p>
            Within high-mountain ecosystems, the mountain goat is a notable large herbivore whose feeding influences alpine and subalpine vegetation across the slopes it uses. It serves as a prey species for large predators capable of operating in steep terrain, and its carcasses and young can be food for scavengers and carnivores. Its repeated use of trails, bedding sites, and mineral sources can shape local patterns of soil disturbance and plant growth. By occupying rugged habitats that many other large mammals avoid, the mountain goat fills a distinctive ecological niche in the mountain landscapes where it lives.
          </p>
        </>
      }
      humanInteraction={
        <p>
          Mountain goats are wild animals, and a calm, respectful distance is the appropriate way to observe them; they are not pets and should never be approached, fed, or handled. In some areas they have become accustomed to people, which can lead to closer encounters, so following posted guidance and giving the animals space helps keep both wildlife and people safe. Any concern about a wildlife conflict or an animal behaving unusually should be directed to local wildlife authorities, and any health-related concern should be directed to qualified medical professionals or local health authorities. The species is currently assessed as Least Concern on the IUCN Red List, an assessment that can change as conditions and knowledge evolve, and supporting the protection of intact alpine habitat remains relevant to its long-term outlook.
        </p>
      }
      faqs={[
        {
          question: "Is the mountain goat a true goat?",
          answer:
            "No. Despite its name, the mountain goat is not a true goat. True goats belong to the genus Capra, while the mountain goat is the only species in the separate genus Oreamnos and is more closely related to goat-antelopes such as the chamois.",
        },
        {
          question: "Where do mountain goats live?",
          answer:
            "Mountain goats are associated with steep, rocky, high-elevation terrain in parts of northwestern North America, including portions of western Canada and the western United States. Some populations exist in certain ranges as a result of introductions.",
        },
        {
          question: "Do both male and female mountain goats have horns?",
          answer:
            "Yes. Both sexes have short, black, slightly curved horns. This can make males and females difficult to distinguish at a distance, though males are generally larger overall.",
        },
        {
          question: "What is the conservation status of the mountain goat?",
          answer:
            "The mountain goat is assessed as Least Concern on the IUCN Red List. Conservation assessments reflect current understanding and can change over time as new information becomes available.",
        },
      ]}
      quickFacts={[
        { label: "Scientific name", value: "Oreamnos americanus" },
        { label: "Animal group", value: "Mammal (goat-antelope, not a true goat)" },
        { label: "Family", value: "Bovidae (genus Oreamnos, only species)" },
        { label: "Size", value: "Stocky, medium-large; males generally larger than females" },
        { label: "Diet", value: "Herbivore (grasses, herbs, shrubs, mosses, lichens)" },
        { label: "Habitat", value: "Steep cliffs and alpine and subalpine slopes" },
        { label: "Range", value: "Parts of northwestern North America; some introduced populations" },
        { label: "Conservation status", value: "Least Concern (IUCN Red List; can change over time)" },
      ]}
      relatedLinks={[
        { label: "Bighorn Sheep", href: "/animals/bighorn-sheep", description: "Another mountain mammal" },
        { label: "Goat Profile", href: "/animals/goat", description: "True goats, for contrast" },
        { label: "Cougar", href: "/animals/cougar", description: "A predator of the same mountains" },
        { label: "North American fauna", href: "/fauna/continents/north-america", description: "Animals of North America" },
        { label: "Mammals", href: "/animal-encyclopedia/mammals" },
      ]}
    />
  );
}
