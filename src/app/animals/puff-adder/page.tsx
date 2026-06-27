import type { Metadata } from "next";
import AnimalProfileLayout from "@/components/AnimalProfileLayout";
import { ANIMAL_SOURCES } from "@/lib/educational/animal-sources";
import { getAnimalGalleryImages, getAnimalImage, getAnimalOgImage } from "@/lib/images/animal-images";
import { buildArticleMetadata } from "@/lib/metadata";

const PATH = "/animals/puff-adder";
const TITLE = "Puff Adder (Bitis arietans): Facts About the African Viper";
const DESC =
  "The puff adder (Bitis arietans) is a thick-bodied venomous viper found across parts of sub-Saharan Africa. Learn its appearance, habitat, diet, and ecology.";

export const metadata: Metadata = buildArticleMetadata({
  title: TITLE,
  description: DESC,
  path: PATH,
  publishedTime: "2026-06-27",
  modifiedTime: "2026-06-27",
  ogImage: getAnimalOgImage("puff-adder"),
});

export default function PuffAdderPage() {
  return (
    <AnimalProfileLayout
      commonName="Puff Adder"
      scientificName="Bitis arietans"
      pageTitle={TITLE}
      description={DESC}
      path={PATH}
      parentCategory="Reptiles & Amphibians"
      parentCategoryHref="/animal-encyclopedia/reptiles"
      tags={["Reptile","Viper","Venomous"]}
      image={getAnimalImage("puff-adder") ?? undefined}
      galleryImages={getAnimalGalleryImages("puff-adder")}
      sources={ANIMAL_SOURCES["puff-adder"]}
      publishedDate="2026-06-27"
      modifiedDate="2026-06-27"
      overview={
        <>
          <p>
            The puff adder (<em>Bitis arietans</em>) is a thick-bodied venomous viper that occurs widely across parts of sub-Saharan Africa, with populations also reaching into parts of Arabia. It is associated with savanna, grassland, and semi-desert habitats, where its mottled brown, tan, and yellowish coloring blends closely against soil, leaf litter, and dry grass. It is a distinct species from the larger Gaboon viper, although the two share the same broad group of African vipers.
          </p>
          <p>
            Rather than chasing prey, the puff adder is a patient ambush hunter. It lies motionless for long periods, relying on camouflage, and strikes quickly when a small animal passes within range. When disturbed or threatened, it inflates its body and releases air in a loud hissing &quot;puff&quot; sound, a defensive display that gives the species its common name.
          </p>
          <p>
            Because this species is common, well camouflaged, and sometimes rests along paths, it is involved in a notable share of serious snakebite cases in parts of Africa. This article is educational and not safety guidance: range, conservation status, and regional details vary and should be checked against authoritative sources such as the IUCN Red List and museum or university zoology references. Anyone concerned about a snakebite should contact qualified medical professionals or local health authorities, and wildlife-conflict concerns should be directed to local wildlife authorities.
          </p>
          <h3>Taxonomy and animal group</h3>
          <p>
            The puff adder is a venomous snake in the viper family, Viperidae, and belongs to the genus <em>Bitis</em>, a group of stout-bodied African vipers. Its scientific name is <em>Bitis arietans</em>. Like other vipers, it has a broad, roughly triangular head distinct from the neck and relatively short, heavy body proportions compared with many other snakes. It is part of the wider reptile group and, within Africa&#39;s snake fauna, is one of the more widely recognized vipers.
          </p>
          <h3>Appearance and recognition</h3>
          <p>
            The puff adder has a thick, heavy body, a broad triangular head, and a relatively short tail. Its background color is typically brown, tan, grayish, or yellowish, overlaid with darker chevron or bar-shaped markings that run along the back. This patterning breaks up the snake&#39;s outline and provides effective camouflage against dry ground, grass, and leaf litter. The stout build and cryptic coloring make it easy to overlook when it lies still, which is part of how it both hunts and avoids being seen.
          </p>
        </>
      }
      habitat={
        <p>
          The puff adder is found across parts of sub-Saharan Africa, with its range also extending into parts of Arabia. It is associated with savanna, grassland, and semi-desert environments rather than dense rainforest, and it tends to favor areas with ground cover where it can lie concealed. Distribution is not uniform, and presence varies by region and local conditions; this is its native range rather than an introduced one. For specific regional occurrence, authoritative sources such as the IUCN Red List should be consulted.
        </p>
      }
      diet={
        <p>
          The puff adder feeds mainly on small mammals such as rodents, and it may also take other small vertebrates. It is an ambush predator: rather than actively searching for food, it waits in a concealed position and strikes rapidly when suitable prey moves nearby. After a strike, it relies on its venom to subdue prey before swallowing it whole, as snakes do. This sit-and-wait strategy suits its heavy body and strong camouflage.
        </p>
      }
      behavior={
        <>
          <p>
            This species is best known for its patient, motionless behavior. It can remain still for long periods, depending on camouflage to avoid detection by both prey and potential threats. When it feels threatened, it adopts a defensive posture, inflating its body and expelling air in a loud hiss or \&quot;puff\&quot; — a warning display rather than an invitation to approach. Puff adders are generally not aggressive and prefer to remain hidden, but they can strike quickly if disturbed at close range. Like other vipers in its group, the puff adder gives birth to live young rather than laying eggs.
          </p>
          <p>
            As a predator of small mammals, the puff adder plays a role in regulating rodent populations within the savanna, grassland, and semi-desert systems it inhabits across parts of Africa. In turn, it is part of the food web as prey for certain birds of prey, other snakes, and predatory mammals. Its strong reliance on camouflage and ambush reflects a wider pattern among African vipers, and its presence is one indicator of the small-vertebrate communities in its habitat. Specific ecological relationships vary by region.
          </p>
        </>
      }
      humanInteraction={
        <p>
          Because the puff adder is common, well camouflaged, and sometimes rests along paths and field edges, encounters with people do occur, and it is involved in a notable share of serious snakebite cases in parts of Africa. This can be stated calmly as a fact rather than a cause for alarm: the snake is not aggressive and usually relies on remaining hidden. Wild snakes should never be handled, approached, or moved. This article does not provide first aid, treatment, or any snakebite response steps. Anyone bitten or concerned about a possible bite should seek qualified medical professionals or local health authorities promptly, and any wildlife-conflict situation should be referred to local wildlife authorities. The conservation status of <em>Bitis arietans</em> varies and should be checked against authoritative sources.
        </p>
      }
      faqs={[
        {
          question: "Where is the puff adder found?",
          answer:
            "The puff adder (Bitis arietans) occurs across parts of sub-Saharan Africa, with its range also reaching into parts of Arabia. It is associated with savanna, grassland, and semi-desert habitats. Distribution varies by region, so authoritative sources such as the IUCN Red List should be consulted for specific areas.",
        },
        {
          question: "Why is it called a puff adder?",
          answer:
            "The name comes from its defensive display: when threatened, the snake inflates its body and releases air in a loud hissing \"puff\" sound. This is a warning signal, and the species generally prefers to stay still and concealed rather than confront a perceived threat.",
        },
        {
          question: "What does the puff adder eat?",
          answer:
            "It feeds mainly on small mammals such as rodents and may take other small vertebrates. The puff adder is an ambush hunter, lying motionless and striking quickly when prey passes nearby, then swallowing its prey whole as snakes do.",
        },
        {
          question: "Is the puff adder dangerous to people?",
          answer:
            "The puff adder is venomous and, because it is common and well camouflaged, it is involved in a notable share of serious snakebite cases in parts of Africa. It is not aggressive and usually relies on hiding. Wild snakes should not be handled or approached. Anyone bitten or concerned about a bite should contact qualified medical professionals or local health authorities, and wildlife-conflict issues should go to local wildlife authorities.",
        },
      ]}
      quickFacts={[
        { label: "Group", value: "Venomous viper (snake)" },
        { label: "Higher classification", value: "Genus Bitis, family Viperidae" },
        { label: "Diet", value: "Carnivore; mainly small mammals such as rodents" },
        { label: "Notable trait", value: "Inflates and \"puffs\" loudly when threatened; ambush hunter" },
        { label: "Habitat", value: "Savanna, grassland, and semi-desert" },
        { label: "Africa distribution", value: "Parts of sub-Saharan Africa (also parts of Arabia); varies by region" },
        { label: "Human interaction", value: "Sometimes encountered near paths; involved in many snakebite cases in parts of Africa; not aggressive" },
        { label: "Conservation status", value: "Varies / check authoritative sources" },
      ]}
      relatedLinks={[
        { label: "Viper Profile", href: "/animals/viper", description: "Vipers more broadly (Gaboon viper)" },
        { label: "Mamba Profile", href: "/animals/mamba", description: "A venomous African elapid" },
        { label: "Cobra Profile", href: "/animals/cobra", description: "Another venomous snake" },
        { label: "African fauna", href: "/fauna/continents/africa", description: "Animals of Africa" },
        { label: "Reptiles & Amphibians", href: "/animal-encyclopedia/reptiles" },
      ]}
    />
  );
}
