import type { Metadata } from "next";
import AnimalProfileLayout from "@/components/AnimalProfileLayout";
import { ANIMAL_SOURCES } from "@/lib/educational/animal-sources";
import { getAnimalGalleryImages, getAnimalImage, getAnimalOgImage } from "@/lib/images/animal-images";
import { buildArticleMetadata } from "@/lib/metadata";

const PATH = "/animals/giant-anteater";
const TITLE = "Giant Anteater: Facts, Habitat & Behavior";
const DESC =
  "Learn about the giant anteater, a large toothless mammal of Central and South America that eats ants and termites. Appearance, habitat, ecology and more.";

export const metadata: Metadata = buildArticleMetadata({
  title: TITLE,
  description: DESC,
  path: PATH,
  publishedTime: "2026-06-28",
  modifiedTime: "2026-06-28",
  ogImage: getAnimalOgImage("giant-anteater"),
});

export default function GiantAnteaterPage() {
  return (
    <AnimalProfileLayout
      commonName="Giant Anteater"
      scientificName="Myrmecophaga tridactyla"
      pageTitle={TITLE}
      description={DESC}
      path={PATH}
      parentCategory="Mammals"
      parentCategoryHref="/animal-encyclopedia/mammals"
      tags={["Mammal","Xenarthran","Insectivore"]}
      image={getAnimalImage("giant-anteater") ?? undefined}
      galleryImages={getAnimalGalleryImages("giant-anteater")}
      sources={ANIMAL_SOURCES["giant-anteater"]}
      publishedDate="2026-06-28"
      modifiedDate="2026-06-28"
      overview={
        <>
          <p>
            The giant anteater (<em>Myrmecophaga tridactyla</em>) is a large, ground-dwelling mammal known for its long tubular snout, an extraordinarily long sticky tongue, a shaggy bushy tail, and powerful clawed forelimbs. It is the largest of the living anteaters and one of the most distinctive insect-eating mammals, feeding almost entirely on ants and termites. Despite its specialized appearance, it is a placid, slow-moving animal that spends much of its time searching the ground for insect colonies.
          </p>
          <p>
            Found in parts of Central and South America, the giant anteater occupies a mix of grasslands, savannas, wetlands, and forests. It carries no teeth at all, relying instead on its tongue and a muscular stomach to process the small insects it consumes in very large numbers each day. Its shuffling walk, with the long claws curled inward, gives it a characteristic gait that is easy to recognize.
          </p>
          <p>
            The species is listed as Vulnerable on the IUCN Red List, an assessment that reflects ongoing pressures across its range and that may be revised as new information becomes available. This profile is intended as a calm, educational overview of the animal&#39;s biology, ecology, and relationship with people.
          </p>
          <h3>Taxonomy and animal group</h3>
          <p>
            The giant anteater is classified as <em>Myrmecophaga tridactyla</em>, the only living species in the genus <em>Myrmecophaga</em>. It belongs to the family Myrmecophagidae within the order Pilosa, the broader group that also contains sloths and the other anteaters. Within Myrmecophagidae its closest relatives are the tamanduas (genus <em>Tamandua</em>), while the tiny silky anteater (genus <em>Cyclopes</em>) is usually placed in a separate family, Cyclopedidae. The giant anteater is clearly distinct from these relatives in its much larger size and in being fully terrestrial rather than tree-climbing. As a placental mammal in the broader xenarthran lineage, it shares ancestry with armadillos and sloths, a group historically centered in the Americas.
          </p>
          <h3>Appearance and recognition</h3>
          <p>
            A giant anteater is immediately recognizable by its narrow, elongated head that tapers into a tubular snout ending in a small mouth, from which it extends a remarkably long, slender tongue. The coarse fur is mostly grayish to brownish, marked by a bold diagonal black-and-white band across the shoulders, and the large bushy tail can be nearly as long as the body. Its forelimbs are stout and muscular, tipped with strong curved claws that it keeps tucked under as it walks on the knuckles to protect their points. Compared with the smaller, partly tree-dwelling tamandua, the giant anteater is much larger, ground-bound, and far bushier in the tail, making the two easy to tell apart.
          </p>
        </>
      }
      habitat={
        <p>
          The giant anteater is associated with a range of open and wooded habitats across parts of Central and South America, including tropical grasslands, savannas, seasonally flooded wetlands, and both dry and humid forests. It tends to favor areas where ant and termite colonies are abundant and accessible, moving between open ground for foraging and denser vegetation for shelter. Its distribution is patchy and uneven across this broad region rather than continuous, and it occurs in parts of these landscapes rather than throughout the entire continent. Where suitable habitat persists, the animal can range over fairly large areas in search of food.
        </p>
      }
      diet={
        <p>
          The diet of the giant anteater consists almost entirely of ants and termites, which it locates largely by its keen sense of smell. Using its powerful claws, it breaks open a small portion of a nest or mound and rapidly flicks its long, sticky, saliva-coated tongue in and out to gather insects, often feeding briefly at any one colony before moving on. Because it has no teeth, the swallowed insects are ground up in a muscular stomach. This feeding pattern, taking only a fraction of each colony, allows the animal to visit many nests in a day without destroying its food sources.
        </p>
      }
      behavior={
        <>
          <p>
            Giant anteaters are generally solitary and spend their active hours walking slowly and methodically across their home range in search of insect nests. They have relatively poor eyesight but a strong sense of smell, and they are typically calm and non-aggressive, preferring to avoid confrontation. Females usually give birth to a single young, which is carried on the mother&#39;s back for an extended period, its coat blending with hers as it clings on. When resting, an anteater often curls up and drapes its large tail over its body like a blanket.
          </p>
          <p>
            As a specialized predator of ants and termites, the giant anteater plays a role in regulating populations of these social insects across the habitats it occupies. By feeding lightly at many colonies rather than destroying them, it can influence insect communities without eliminating local nests, and its foraging may interact with soil and vegetation processes over time. As a large, wide-ranging mammal, it is also part of the broader food web of grasslands and forests, and its presence is often considered an indicator of relatively intact natural habitat.
          </p>
        </>
      }
      humanInteraction={
        <p>
          The giant anteater is listed as Vulnerable on the IUCN Red List, with habitat loss, road collisions, and other pressures cited among the factors affecting it; this status is a changeable assessment that conservation authorities may update over time. It is a wild animal, not a pet, and is best observed from a respectful distance in the wild or in the care of accredited facilities. Although normally placid, a cornered or threatened anteater may defend itself with its powerful claws, so any encounter or conflict involving the species should be referred to local wildlife authorities rather than handled directly, and any injury concern should be directed to qualified medical professionals or local health authorities.
        </p>
      }
      faqs={[
        {
          question: "What does the giant anteater eat?",
          answer:
            "It feeds almost entirely on ants and termites, gathering them with a long, sticky tongue after opening part of a nest with its claws. Having no teeth, it grinds the insects in a muscular stomach.",
        },
        {
          question: "Where is the giant anteater found?",
          answer:
            "It occurs in parts of Central and South America, in grasslands, savannas, wetlands, and forests. Its distribution is patchy across this region rather than continuous.",
        },
        {
          question: "Is the giant anteater dangerous to people?",
          answer:
            "It is typically calm and avoids confrontation, but a cornered animal may use its strong claws to defend itself. It is a wild animal, and any conflict should be referred to local wildlife authorities.",
        },
        {
          question: "What is the conservation status of the giant anteater?",
          answer:
            "The IUCN Red List currently assesses it as Vulnerable, reflecting pressures such as habitat loss and road collisions. This is a changeable assessment that may be updated as new information becomes available.",
        },
      ]}
      quickFacts={[
        { label: "Scientific name", value: "Myrmecophaga tridactyla" },
        { label: "Animal group", value: "Mammal" },
        { label: "Family/order", value: "Myrmecophagidae, order Pilosa" },
        { label: "Size", value: "Largest of the living anteaters; long snout and bushy tail" },
        { label: "Diet", value: "Ants and termites (insectivorous)" },
        { label: "Habitat", value: "Grasslands, savannas, wetlands, and forests" },
        { label: "Range", value: "Parts of Central and South America" },
        { label: "Conservation status", value: "Vulnerable (IUCN Red List)" },
      ]}
      relatedLinks={[
        { label: "Armadillo", href: "/animals/armadillo", description: "A fellow xenarthran" },
        { label: "Sloth", href: "/animals/sloth", description: "Another xenarthran" },
        { label: "Capybara", href: "/animals/capybara", description: "Another South American mammal" },
        { label: "South American fauna", href: "/fauna/continents/south-america", description: "Animals of South America" },
        { label: "Endangered Animals", href: "/endangered-animals", description: "Conservation status & the Red List" },
      ]}
    />
  );
}
