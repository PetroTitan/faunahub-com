import type { Metadata } from "next";
import AnimalProfileLayout from "@/components/AnimalProfileLayout";
import { ANIMAL_SOURCES } from "@/lib/educational/animal-sources";
import { getAnimalGalleryImages, getAnimalImage, getAnimalOgImage } from "@/lib/images/animal-images";
import { buildArticleMetadata } from "@/lib/metadata";

const PATH = "/animals/european-hare";
const TITLE = "European Hare: The Long-Eared Brown Hare";
const DESC =
  "Learn about the European hare (Lepus europaeus), a large, fast-running lagomorph of grassland and farmland, and how this hare differs from rabbits.";

export const metadata: Metadata = buildArticleMetadata({
  title: TITLE,
  description: DESC,
  path: PATH,
  publishedTime: "2026-06-27",
  modifiedTime: "2026-06-27",
  ogImage: getAnimalOgImage("european-hare"),
});

export default function EuropeanHarePage() {
  return (
    <AnimalProfileLayout
      commonName="European Hare"
      scientificName="Lepus europaeus"
      pageTitle={TITLE}
      description={DESC}
      path={PATH}
      parentCategory="Mammals"
      parentCategoryHref="/animal-encyclopedia/mammals"
      tags={["Mammal","Lagomorph","Grassland"]}
      image={getAnimalImage("european-hare") ?? undefined}
      galleryImages={getAnimalGalleryImages("european-hare")}
      sources={ANIMAL_SOURCES["european-hare"]}
      publishedDate="2026-06-27"
      modifiedDate="2026-06-27"
      overview={
        <>
          <p>
            The European hare (<em>Lepus europaeus</em>), also known as the brown hare, is a large, long-eared, fast-running mammal of open country. It belongs to the group of animals called lagomorphs, and it is most strongly associated with grasslands, meadows, and farmland in parts of Europe and western Asia. Unlike rabbits, hares do not dig burrows; an adult European hare spends much of its life above ground, resting in a shallow depression in vegetation or soil known as a form.
          </p>
          <p>
            A common source of confusion is that the European hare is a hare, not a rabbit. Although the two are related and superficially similar, hares are generally larger, with longer ears and limbs, and they rely on speed and acceleration rather than tunnels for safety. The brown hare is well known for the springtime &#39;boxing&#39; behaviour seen in fields, which is most often a female fending off the advances of a male rather than two males fighting.
          </p>
          <p>
            On the IUCN Red List, the European hare is currently assessed as Least Concern at a global level. This assessment reflects its wide overall distribution, but conservation status can change over time as new information emerges, and the species is reported to be declining in parts of its range, often in connection with changes in farming and land use.
          </p>
          <h3>Taxonomy and animal group</h3>
          <p>
            The European hare is a mammal in the family Leporidae, which contains the hares and rabbits, within the order Lagomorpha. Its scientific name is <em>Lepus europaeus</em>, placing it in the genus <em>Lepus</em>, the true hares. Lagomorphs are distinct from rodents and are characterised by features including a second, small pair of upper incisors set behind the front incisors. Within this group, true hares such as <em>Lepus europaeus</em> differ from rabbits in their larger size, longer ears and legs, and their habit of resting above ground in a form rather than living in burrow systems.
          </p>
          <h3>Appearance and recognition</h3>
          <p>
            The European hare is a large lagomorph with a slender, long-legged build adapted for running. It has notably long ears, typically tipped with black, and large eyes set high and to the sides of the head, giving it a wide field of view. The coat is generally a grizzled yellowish-brown to greyish-brown over the back and flanks, with a paler underside, and the tail is black above and white below. Its longer ears, longer hind limbs, and larger overall size help distinguish it from rabbits, which are smaller and more compact.
          </p>
        </>
      }
      habitat={
        <p>
          The European hare is closely associated with open habitats and is found across parts of Europe and western Asia, where it occurs in areas of grassland, meadow, steppe, and cultivated farmland. It generally favours open, relatively flat landscapes with a mix of vegetation that provides both food and cover, and it tends to avoid dense, closed forest. Beyond its native range, the species has also been introduced to some regions on other continents. Its distribution should be understood as patchy and shaped by land use rather than as a uniform presence across any one country or continent.
        </p>
      }
      diet={
        <p>
          The European hare is a herbivore that feeds on a range of plant material. Its diet includes grasses, herbs, and other low-growing vegetation, and in farmed landscapes it may also feed on agricultural crops and the leaves, shoots, twigs, and bark of various plants, with the balance shifting seasonally as different foods become available. Like other lagomorphs, it practises a form of digestion in which certain soft droppings are re-ingested, allowing nutrients to be extracted more fully from fibrous plant matter. Feeding activity is concentrated around twilight and through the night.
        </p>
      }
      behavior={
        <>
          <p>
            The European hare is largely active at dawn, dusk, and through the night, and it spends the daytime resting in its form, relying on stillness and camouflage to avoid detection. When alarmed, it depends on speed, agility, and sudden changes of direction rather than retreating underground. In spring, hares become more conspicuous, and the well-known &#39;boxing&#39; is mainly a female rejecting or testing a male rather than rival males fighting. Young hares, called leverets, are born well developed, with fur and open eyes, and are left resting in vegetation between visits from the mother.
          </p>
          <p>
            As a herbivore of open landscapes, the European hare forms part of the food web in grassland and farmland systems. By feeding on grasses and herbaceous plants it interacts with vegetation dynamics, and it also serves as prey for a range of larger animals, providing food for some birds of prey and mammalian carnivores in the areas where it occurs. Its presence, abundance, and breeding success can reflect broader conditions in agricultural environments, which is one reason changes in hare populations are of interest to ecologists studying farmland biodiversity.
          </p>
        </>
      }
      humanInteraction={
        <p>
          The European hare is a wild animal and is not a pet; it is best appreciated at a distance and observed without disturbance. It is a familiar species in rural and farmed landscapes across parts of its range, and its fortunes are closely tied to agricultural practices, habitat structure, and land management. Although currently assessed as Least Concern on the IUCN Red List, declines reported in parts of its range have made it a focus of conservation and monitoring efforts. Anyone who encounters an injured hare or has a wildlife management concern should contact local wildlife authorities rather than handling the animal.
        </p>
      }
      faqs={[
        {
          question: "Is the European hare the same as a rabbit?",
          answer:
            "No. The European hare (Lepus europaeus) is a hare, not a rabbit, although the two are related lagomorphs. Hares are generally larger, with longer ears and legs, and they rest in an above-ground form rather than digging burrows.",
        },
        {
          question: "Why do European hares 'box' in spring?",
          answer:
            "The famous boxing seen in spring is mainly a female rejecting or testing a male rather than two males fighting. It is part of the species' courtship behaviour and is most visible during the breeding season.",
        },
        {
          question: "Where is the European hare found?",
          answer:
            "It is native to parts of Europe and western Asia, mainly in open grassland, meadow, and farmland habitats, and it has also been introduced to some regions on other continents. Its distribution is patchy and shaped by land use rather than uniform across any country or continent.",
        },
        {
          question: "Is the European hare endangered?",
          answer:
            "On the IUCN Red List, the European hare is currently assessed as Least Concern at a global level, though it is reported to be declining in parts of its range. Conservation assessments can change over time as new information becomes available.",
        },
      ]}
      quickFacts={[
        { label: "Scientific name", value: "Lepus europaeus" },
        { label: "Animal group", value: "Mammal (lagomorph)" },
        { label: "Family or order", value: "Leporidae; order Lagomorpha" },
        { label: "Also known as", value: "Brown hare" },
        { label: "Diet", value: "Herbivore (grasses, herbs, crops)" },
        { label: "Habitat", value: "Open grassland, meadow, and farmland" },
        { label: "Range", value: "Parts of Europe and W Asia; introduced elsewhere" },
        { label: "Conservation status", value: "Least Concern (IUCN Red List)" },
      ]}
      relatedLinks={[
        { label: "Rabbit Profile", href: "/animals/rabbit", description: "Rabbits, for contrast" },
        { label: "Roe Deer Profile", href: "/animals/roe-deer", description: "Another farmland mammal" },
        { label: "European Hedgehog", href: "/animals/european-hedgehog", description: "A small European mammal" },
        { label: "European fauna", href: "/fauna/continents/europe", description: "Animals of Europe" },
        { label: "Mammals", href: "/animal-encyclopedia/mammals" },
      ]}
    />
  );
}
