import type { Metadata } from "next";
import AnimalProfileLayout from "@/components/AnimalProfileLayout";
import { ANIMAL_SOURCES } from "@/lib/educational/animal-sources";
import { getAnimalGalleryImages, getAnimalImage, getAnimalOgImage } from "@/lib/images/animal-images";
import { buildArticleMetadata } from "@/lib/metadata";

const PATH = "/animals/wallaby";
const TITLE = "Wallaby: Facts About These Hopping Marsupials";
const DESC =
  "Learn about wallabies, small-to-medium hopping marsupials of the family Macropodidae found in parts of Australia, New Guinea and nearby islands.";

export const metadata: Metadata = buildArticleMetadata({
  title: TITLE,
  description: DESC,
  path: PATH,
  publishedTime: "2026-06-28",
  modifiedTime: "2026-06-28",
  ogImage: getAnimalOgImage("wallaby"),
});

export default function WallabyPage() {
  return (
    <AnimalProfileLayout
      commonName="Wallaby"
      scientificName="various genera (Macropodidae)"
      pageTitle={TITLE}
      description={DESC}
      path={PATH}
      parentCategory="Mammals"
      parentCategoryHref="/animal-encyclopedia/mammals"
      tags={["Mammal","Marsupial","Macropod"]}
      image={getAnimalImage("wallaby") ?? undefined}
      galleryImages={getAnimalGalleryImages("wallaby")}
      sources={ANIMAL_SOURCES["wallaby"]}
      publishedDate="2026-06-28"
      modifiedDate="2026-06-28"
      overview={
        <>
          <p>
            Wallabies are small-to-medium hopping marsupials of the family <em>Macropodidae</em>, the same group that includes kangaroos and wallaroos. The word &quot;wallaby&quot; is an informal, everyday name rather than a single scientific group, and it covers many different species spread across several genera. In general, animals called wallabies are smaller than kangaroos, though there is no strict size boundary, and some larger wallabies overlap with smaller kangaroos.
          </p>
          <p>
            Because &quot;wallaby&quot; groups together so many species, it is best understood as a loose category rather than one kind of animal. It includes brush wallabies in genera such as <em>Notamacropus</em> and <em>Macropus</em>, the swamp wallaby in its own genus <em>Wallabia</em>, the agile, often cliff-dwelling rock-wallabies of the genus <em>Petrogale</em>, and the small, stocky pademelons of the genus <em>Thylogale</em>. These animals are associated with parts of Australia, New Guinea and some nearby islands, where they occupy a wide range of habitats.
          </p>
          <p>
            This profile describes wallabies as a broad group and is distinct from the separate kangaroo profile. Conservation status, body size, diet details and habitat preferences all vary considerably from species to species, so the descriptions here are written in general terms and should not be read as a precise account of any single species.
          </p>
          <h3>Taxonomy and animal group</h3>
          <p>
            Wallabies belong to the family <em>Macropodidae</em>, within the order <em>Diprotodontia</em> and the broader group of marsupial mammals. &quot;Wallaby&quot; is an informal grouping rather than a formal taxonomic rank, and it spans several genera, including <em>Notamacropus</em> and <em>Macropus</em> (brush wallabies and some related forms), <em>Wallabia</em> (the swamp wallaby), <em>Petrogale</em> (the rock-wallabies) and <em>Thylogale</em> (the pademelons). Because the name covers many distinct species, there is no single scientific name for &quot;the wallaby&quot;; instead, each species carries its own binomial. <em>Macropodidae</em> as a whole is characterised by enlarged hind limbs adapted for hopping, and wallabies share this body plan with kangaroos and wallaroos while generally being smaller in build.
          </p>
          <h3>Appearance and recognition</h3>
          <p>
            Wallabies are typically recognised by their compact, muscular hind legs, long feet, a long tapering tail used for balance, and relatively small forelimbs. Most have soft fur in shades of grey, brown, reddish or sandy tones, sometimes with facial or hip stripes, and many species have darker markings on the muzzle, paws or tail. Rock-wallabies tend to be especially agile and may have longer, more thickly furred tails suited to climbing rocky terrain, while pademelons are among the smallest and most rounded in shape. Like other macropods, female wallabies carry a forward-opening pouch in which young develop. Exact size, coloration and markings differ widely between species, so identification usually depends on knowing the local fauna of a given area.
          </p>
        </>
      }
      habitat={
        <p>
          Wallabies are associated with parts of Australia, New Guinea and some nearby islands, rather than with any single continent-wide range, and individual species occupy much narrower distributions within these areas. Across this group, habitats include open grasslands and woodlands, dense scrub and forest, coastal heath, and rocky outcrops and escarpments favoured by rock-wallabies. Some species are tied to specific regions or even isolated ranges of hills, while others are more widespread within parts of Australia. Because &quot;wallaby&quot; covers many species, any statement about where wallabies live should be read cautiously: distribution, preferred habitat and elevation all vary from one species to another, and several species have ranges that have shifted over time.
        </p>
      }
      diet={
        <p>
          Wallabies are herbivores, feeding on plant material that varies with species and habitat. Many graze on grasses and low herbaceous plants, while others browse on leaves, shoots, buds and the foliage of shrubs; the swamp wallaby, for example, is known as a browser that takes a wide variety of plants. Forest and scrub species may include ferns, fungi and bark in their diet, and some rock-wallabies feed on vegetation growing among rocky slopes. Like other macropods, wallabies have specialised digestive systems suited to processing fibrous plant matter, and feeding often takes place around dawn and dusk when conditions are cooler.
        </p>
      }
      behavior={
        <>
          <p>
            Wallabies move chiefly by hopping on their large hind legs, an efficient gait over varied terrain, and use the tail for balance and support. Social behaviour ranges from largely solitary species to those that gather in loose groups, and many are most active in the cooler hours of morning and evening, resting in shade or shelter during the heat of the day. As marsupials, wallabies give birth to tiny, underdeveloped young that continue to grow in the mother&#39;s pouch for an extended period before becoming independent; a single joey is typical at a time. Rock-wallabies are notably sure-footed climbers among cliffs and boulders, while pademelons tend to keep to dense cover and forest margins.
          </p>
          <p>
            As herbivores, wallabies influence the vegetation of the areas they inhabit through grazing and browsing, and they can play a part in seed dispersal and in shaping plant communities. They also form part of food webs as prey for larger predators, including birds of prey and, where present, dingoes and introduced carnivores. Rock-wallabies and other specialised species can be indicators of particular habitats, such as rocky escarpments, and their presence or absence reflects the condition of those environments. Because the group is so diverse, the ecological role of any given wallaby depends on its species, its habitat and the other animals and plants it interacts with.
          </p>
        </>
      }
      humanInteraction={
        <p>
          Wallabies are widely recognised in the regions where they occur and feature in cultural traditions, art and place names, particularly among Aboriginal peoples of Australia. Conservation status varies by species: many wallabies are assessed by the IUCN Red List as of least concern, while some, including certain rock-wallabies, are considered threatened, and these assessments can change as new information becomes available. Pressures on some species include habitat loss, introduced predators and competition from introduced herbivores. Wallabies are wild animals, not pets, and people who encounter an injured, distressed or conflicting animal should contact local wildlife authorities rather than attempt to handle it themselves.
        </p>
      }
      faqs={[
        {
          question: "What is the difference between a wallaby and a kangaroo?",
          answer:
            "Both belong to the family Macropodidae and share the same hopping body plan, but wallabies are generally smaller than kangaroos. \"Wallaby\" is an informal name covering many species in several genera, so there is no single sharp dividing line between the two.",
        },
        {
          question: "Are wallabies endangered?",
          answer:
            "It varies by species, because \"wallaby\" covers many different animals. The IUCN Red List assesses many wallabies as of least concern, while some, such as certain rock-wallabies, are considered threatened, and these assessments can change over time.",
        },
        {
          question: "Where do wallabies live?",
          answer:
            "Wallabies are associated with parts of Australia, New Guinea and some nearby islands. Individual species occupy much narrower ranges and habitats, from grasslands and forests to rocky outcrops, so distribution differs greatly between species.",
        },
        {
          question: "What do wallabies eat?",
          answer:
            "Wallabies are herbivores. Depending on the species and habitat, they graze on grasses and low plants or browse on leaves, shoots and shrubs, and some also take ferns, fungi or other vegetation.",
        },
      ]}
      quickFacts={[
        { label: "Scientific name", value: "Various species; e.g. genera Macropus, Notamacropus, Wallabia, Petrogale" },
        { label: "Animal group", value: "Marsupial mammal (macropod)" },
        { label: "Family/order", value: "Macropodidae; Diprotodontia" },
        { label: "Size", value: "Small to medium; varies widely by species, generally smaller than kangaroos" },
        { label: "Diet", value: "Herbivore (grazing and/or browsing)" },
        { label: "Habitat", value: "Grassland, woodland, forest, scrub and rocky outcrops, depending on species" },
        { label: "Range", value: "Parts of Australia, New Guinea and some nearby islands" },
        { label: "Conservation status", value: "Varies by species (IUCN Red List); many least concern, some threatened" },
      ]}
      relatedLinks={[
        { label: "Kangaroo", href: "/animals/kangaroo", description: "A larger macropod relative" },
        { label: "Quokka", href: "/animals/quokka", description: "A small macropod" },
        { label: "Tree Kangaroo", href: "/animals/tree-kangaroo", description: "A tree-dwelling macropod" },
        { label: "Oceania fauna", href: "/fauna/continents/oceania", description: "Animals of Oceania" },
        { label: "Mammals", href: "/animal-encyclopedia/mammals" },
      ]}
    />
  );
}
