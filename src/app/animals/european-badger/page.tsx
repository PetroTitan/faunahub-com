import type { Metadata } from "next";
import AnimalProfileLayout from "@/components/AnimalProfileLayout";
import { ANIMAL_SOURCES } from "@/lib/educational/animal-sources";
import { getAnimalGalleryImages, getAnimalImage, getAnimalOgImage } from "@/lib/images/animal-images";
import { buildArticleMetadata } from "@/lib/metadata";

const PATH = "/animals/european-badger";
const TITLE = "European Badger: The Striped Woodland Mustelid";
const DESC =
  "Learn about the European badger (Meles meles), a social, nocturnal mustelid with a striped face that lives in underground setts across parts of Europe.";

export const metadata: Metadata = buildArticleMetadata({
  title: TITLE,
  description: DESC,
  path: PATH,
  publishedTime: "2026-06-27",
  modifiedTime: "2026-06-27",
  ogImage: getAnimalOgImage("european-badger"),
});

export default function EuropeanBadgerPage() {
  return (
    <AnimalProfileLayout
      commonName="European Badger"
      scientificName="Meles meles"
      pageTitle={TITLE}
      description={DESC}
      path={PATH}
      parentCategory="Mammals"
      parentCategoryHref="/animal-encyclopedia/mammals"
      tags={["Mammal","Mustelid","Nocturnal"]}
      image={getAnimalImage("european-badger") ?? undefined}
      galleryImages={getAnimalGalleryImages("european-badger")}
      sources={ANIMAL_SOURCES["european-badger"]}
      publishedDate="2026-06-27"
      modifiedDate="2026-06-27"
      overview={
        <>
          <p>
            The European badger (<em>Meles meles</em>) is a stocky, ground-dwelling mammal best known for its distinctive black-and-white striped face. A member of the weasel family, it is one of the larger members of that group and spends much of its life in and around an underground burrow system. Badgers are largely nocturnal, emerging after dusk to forage, and they live in social groups that share and maintain these communal dwellings.
          </p>
          <p>
            Unlike many of its solitary relatives in the mustelid family, the European badger is notably social, with several individuals often occupying the same network of tunnels and chambers. Its broad diet, adaptable habits, and tolerance of a range of landscapes have made it a familiar, if rarely seen, presence in woodland and farmland across parts of Europe.
          </p>
          <p>
            This profile offers a general, educational overview of the species&#39; appearance, ecology, and relationship with people. The European badger is a wild animal, and the information here is intended for learning rather than as a guide to keeping, handling, or approaching it.
          </p>
          <h3>Taxonomy and animal group</h3>
          <p>
            The European badger belongs to the family Mustelidae, the diverse group that also includes weasels, otters, martens, and polecats, within the order Carnivora. Its scientific name is <em>Meles meles</em>, and it is the type species of the genus <em>Meles</em>, which contains the so-called Eurasian or Old World badgers. It should be distinguished from the unrelated American badger (<em>Taxidea taxus</em>) and from the honey badger (<em>Mellivora capensis</em>), which sit in separate lineages within the mustelid family despite sharing the common name. As a true badger, <em>Meles meles</em> is a fossorial, broad-bodied carnivoran adapted to digging.
          </p>
          <h3>Appearance and recognition</h3>
          <p>
            The European badger is a sturdy, low-slung animal with a thickset body, short powerful limbs, and a short tail. Its most recognizable feature is the head: white or pale, marked with two bold black stripes that run from the muzzle back over each eye and ear, giving a striped facial pattern that is hard to mistake. The body fur appears grizzled grey on the back and flanks, with darker underparts and legs. The front feet bear long, strong claws suited to digging, and the overall build is well adapted to a life spent moving soil and squeezing through tunnels.
          </p>
        </>
      }
      habitat={
        <p>
          European badgers are associated with a mix of woodland, hedgerows, grassland, and the edges of farmland across parts of Europe, where they excavate extensive underground burrow systems known as setts. They tend to favor well-drained soils and sloping ground that make digging and drainage easier, often siting setts near the cover of trees or hedges. Their range extends across parts of Europe and into parts of western and central Asia, though distribution within any region is uneven and shaped by soil, terrain, and land use. They are not found uniformly everywhere within this broad area, and local presence depends heavily on habitat suitability.
        </p>
      }
      diet={
        <p>
          The European badger is omnivorous and opportunistic, taking a wide variety of foods depending on season and location. In many areas earthworms form a major part of the diet and can be especially important when conditions are damp and worms come close to the surface. Beyond earthworms, badgers also eat insects and their larvae, small mammals, amphibians, fruits, nuts, roots, cereals, and other plant material. This flexible, generalist feeding strategy allows the species to adjust to local availability and to changing conditions through the year.
        </p>
      }
      behavior={
        <>
          <p>
            European badgers are mainly nocturnal and crepuscular, resting in the sett by day and emerging after dusk to forage along regularly used paths. They are social, with several animals typically sharing a sett and its surrounding territory, which group members may mark and maintain. In cooler parts of the range they reduce activity during the harshest winter weather, becoming less active above ground rather than entering true hibernation. Young are usually born in the sett and depend on the social group during their early development, after which they gradually begin to forage and may eventually disperse.
          </p>
          <p>
            As a digging omnivore, the European badger plays several roles in the ecosystems it inhabits. Its burrowing turns over and aerates soil, and abandoned or expanded setts can provide shelter used by other animals. Through feeding on earthworms, insects, small vertebrates, and fruit, it acts as both a predator on invertebrates and small animals and a consumer of plant material, and it can contribute to dispersing seeds from the fruits it eats. In this way the badger forms part of the web of interactions linking soil organisms, plants, and other wildlife in woodland and farmland habitats.
          </p>
        </>
      }
      humanInteraction={
        <p>
          The European badger is listed as Least Concern on the IUCN Red List, an assessment that reflects current understanding and can change over time as conditions and data are reviewed. The species has a long history of coexistence with people in rural landscapes, though it can come into conflict with human interests where setts or foraging overlap with land use, and its legal protection varies from country to country. Badgers are wild animals and are not pets; they are best observed from a distance and should never be handled or fed. Anyone facing a wildlife conflict, an injured animal, or questions about local legal protection should contact local wildlife authorities, and any health concerns relating to wildlife should be directed to qualified medical professionals or local health authorities.
        </p>
      }
      faqs={[
        {
          question: "Is the European badger dangerous to people?",
          answer:
            "The European badger is a shy, mainly nocturnal animal that generally avoids people and is not considered a threat under normal circumstances. As with any wild animal, it is best observed from a distance and should not be handled, cornered, or fed; direct any concerns to local wildlife authorities.",
        },
        {
          question: "What does the European badger eat?",
          answer:
            "It is an omnivore with a varied, opportunistic diet that includes earthworms, insects, small animals, fruits, and other plant material. In many areas earthworms are a particularly important food, especially in damp conditions.",
        },
        {
          question: "Where do European badgers live?",
          answer:
            "They live in underground burrow systems called setts, typically in woodland, hedgerows, grassland, and farmland edges across parts of Europe and into parts of western and central Asia. Their presence within any area depends on suitable soils and habitat.",
        },
        {
          question: "Are European badgers endangered?",
          answer:
            "The European badger is currently listed as Least Concern on the IUCN Red List. This assessment reflects present knowledge and can change over time as populations and conditions are reassessed.",
        },
      ]}
      quickFacts={[
        { label: "Scientific name", value: "Meles meles" },
        { label: "Animal group", value: "Mammal (carnivoran)" },
        { label: "Family", value: "Mustelidae (weasel family)" },
        { label: "Size", value: "Stocky, medium-sized mustelid with a low, broad body" },
        { label: "Diet", value: "Omnivorous; earthworms important in many areas" },
        { label: "Habitat", value: "Woodland, hedgerows, grassland, and farmland edges; lives in underground setts" },
        { label: "Range", value: "Parts of Europe and into parts of western and central Asia" },
        { label: "Conservation status", value: "Least Concern (IUCN Red List)" },
      ]}
      relatedLinks={[
        { label: "Badger Profile", href: "/animals/badger", description: "Badgers more broadly" },
        { label: "European Otter", href: "/animals/european-otter", description: "Another European mustelid" },
        { label: "Pine Marten", href: "/animals/pine-marten", description: "A woodland mustelid" },
        { label: "European fauna", href: "/fauna/continents/europe", description: "Animals of Europe" },
        { label: "Mammals", href: "/animal-encyclopedia/mammals" },
      ]}
    />
  );
}
