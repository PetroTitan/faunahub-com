import type { Metadata } from "next";
import AnimalProfileLayout from "@/components/AnimalProfileLayout";
import { ANIMAL_SOURCES } from "@/lib/educational/animal-sources";
import { getAnimalGalleryImages, getAnimalImage, getAnimalOgImage } from "@/lib/images/animal-images";
import { buildArticleMetadata } from "@/lib/metadata";

const PATH = "/animals/green-iguana";
const TITLE = "Green Iguana: Facts About Iguana iguana";
const DESC =
  "The green iguana (Iguana iguana) is a large, mostly plant-eating arboreal lizard of the American tropics, with introduced populations in places like Florida.";

export const metadata: Metadata = buildArticleMetadata({
  title: TITLE,
  description: DESC,
  path: PATH,
  publishedTime: "2026-06-28",
  modifiedTime: "2026-06-28",
  ogImage: getAnimalOgImage("green-iguana"),
});

export default function GreenIguanaPage() {
  return (
    <AnimalProfileLayout
      commonName="Green Iguana"
      scientificName="Iguana iguana"
      pageTitle={TITLE}
      description={DESC}
      path={PATH}
      parentCategory="Reptiles & Amphibians"
      parentCategoryHref="/animal-encyclopedia/reptiles"
      tags={["Reptile","Lizard","Herbivore"]}
      image={getAnimalImage("green-iguana") ?? undefined}
      galleryImages={getAnimalGalleryImages("green-iguana")}
      sources={ANIMAL_SOURCES["green-iguana"]}
      publishedDate="2026-06-28"
      modifiedDate="2026-06-28"
      overview={
        <>
          <p>
            The green iguana (<em>Iguana iguana</em>) is a large, mostly herbivorous, tree-dwelling lizard native to the tropical regions of the Americas. It is among the largest lizards in its range and is one of the most widely recognized iguanas, known for its long body, crested back, prominent throat fan, and tapering whip-like tail. Despite its name, the species is not always green: depending on region, age, and season, individuals can appear greenish, bluish, orange, reddish-brown, or nearly black.
          </p>
          <p>
            Green iguanas spend much of their lives in the forest canopy near rivers and other water, basking in the sun and feeding on leaves, flowers, and fruit. They are agile climbers and capable swimmers, using the tail to propel themselves through water. Beyond their native range, the species has also been introduced and become established in some areas outside the Americas and in parts of the United States, including South Florida, where free-living populations now occur.
          </p>
          <p>
            This profile describes the green iguana as a wild animal in its natural and introduced settings. The species is widely kept and traded in captivity, but this page is not a pet-care guide and does not offer keeping, handling, or husbandry advice. Anyone with questions about a specific animal or a local wildlife situation should contact qualified professionals or local wildlife authorities.
          </p>
          <h3>Taxonomy and animal group</h3>
          <p>
            The green iguana is a reptile in the order Squamata and the family Iguanidae, the iguanas and their close relatives. Its scientific name is <em>Iguana iguana</em>, and it is the type species of the genus <em>Iguana</em>. The classification of iguanas in the Caribbean has been actively studied, and some populations once treated simply as green iguanas have been described in recent taxonomic work as distinct forms, such as the Saban black iguana (<em>Iguana melanoderma</em>) and the southern Lesser Antillean iguana (<em>Iguana insularis</em>); taxonomic authorities differ on whether to rank these as full species or as subspecies of <em>Iguana iguana</em>. Because iguana taxonomy continues to be revised, the boundaries between <em>Iguana iguana</em> and its relatives are best confirmed against current scientific sources rather than treated as fixed.
          </p>
          <h3>Appearance and recognition</h3>
          <p>
            The green iguana is a robust, long-bodied lizard. Adults commonly reach roughly 1.2 to 1.7 m (about 4 to 5.6 ft) in total length including the tail, and most weigh in the range of about 4 to 6 kg, though a few large males can be heavier. A row of soft spines, taller in males, runs along the back and tail to form a dorsal crest, and a flap of skin called the dewlap hangs beneath the throat, used in display and in regulating body temperature. The long tail can make up much of the animal&#39;s length and may be shed and regrown if it is grabbed. On top of the head sits a pale, light-sensitive structure known as the parietal or &quot;third&quot; eye, which detects changes in light and movement. Coloration is highly variable across the species&#39; range, spanning shades of green, blue, orange, reddish-brown, and near-black, and is not a reliable single field mark.
          </p>
        </>
      }
      habitat={
        <p>
          Green iguanas are primarily arboreal animals of warm, low-lying tropical environments, including rainforests and other forested areas, and they are often found near rivers, streams, or other water. Young animals tend to occupy lower vegetation while larger adults favor higher branches in the canopy. The species&#39; native range extends across parts of Central and South America, broadly from Mexico southward into Paraguay and southeastern Brazil, and includes parts of the Caribbean. Introduced and established populations also occur in some areas outside this native range, including parts of South Florida and certain islands. Ranges shift over time and vary by region, so this is a general description rather than a complete or precise range map.
        </p>
      }
      diet={
        <p>
          The green iguana is mostly herbivorous, and adults feed largely on leaves, along with flowers, fruit, and growing shoots from a wide variety of plants. Its leaf-shaped, serrated teeth are suited to shredding plant material, and it relies on gut microbes to break down this fibrous, plant-based diet. Young iguanas have been reported to consume some animal matter, such as insects, and to acquire helpful gut microflora early in life; older animals are predominantly leaf-eaters. Wild green iguanas have occasionally been observed taking other items, such as eggs or small amounts of animal matter, but the species is best understood as a plant-eater overall.
        </p>
      }
      behavior={
        <>
          <p>
            Green iguanas are active by day and spend much of their time basking in the sun to warm their bodies, which as ectotherms they cannot heat internally. They are skilled climbers and strong swimmers, moving through water with side-to-side strokes of the tail, and they can drop from considerable heights in trees and land without apparent harm. When startled, an iguana may freeze, flee into vegetation or water, or display defensively by extending its dewlap, bobbing its head, hissing, and lashing its tail. In cooler conditions the species becomes sluggish; in places like Florida, unusually cold spells can leave iguanas temporarily immobilized, and individuals have been reported falling from trees during such events before recovering as temperatures rise.
          </p>
          <p>
            As a large, abundant plant-eater, the green iguana plays a role in tropical forest ecosystems, including helping to disperse seeds from the fruit it eats. Females lay clutches of eggs, sometimes in communal nesting areas, and provide no care after the eggs are laid beyond defending the nest site; hatchlings emerge after an incubation period and may remain in loose family groups early in life. Eggs, juveniles, and adults serve as food for a wide range of predators, including birds of prey and other vertebrates, so the species forms part of the food web both as a consumer of plants and as prey. In some areas the green iguana has been observed nesting near larger reptiles such as crocodilians.
          </p>
        </>
      }
      humanInteraction={
        <p>
          The green iguana is a calm, plant-eating lizard rather than a pet, and wild or free-living individuals are best observed from a respectful distance without feeding, chasing, or attempting to touch them. The species is one of the most heavily traded reptiles internationally and is also hunted for food in parts of its native range, where its meat and eggs have long been used. In some regions outside its native range, established green iguana populations are managed as an introduced-species issue; questions about such situations, or about any animal that appears injured or out of place, should be directed to local wildlife authorities or qualified professionals rather than handled personally. This page offers no handling, capture, removal, or keeping instructions.
        </p>
      }
      extraSections={[
        {
          heading: "Defenses",
          body: (
            <p>
              The green iguana is not venomous and is not known to be poisonous. It has no venom glands or venom-delivering fangs, and it does not produce a toxin used in defense. Like many lizards, it has sharp teeth and claws and a muscular tail that it can use defensively if it feels threatened, but these are physical features rather than venom or poison. This profile does not provide medical, first-aid, or handling guidance; concerns about any injury from an animal should be directed to qualified medical professionals.
            </p>
          ),
        },
        {
          heading: "Conservation context",
          body: (
            <p>
              The green iguana is currently assessed by the IUCN Red List as Least Concern, an assessment that reflects present understanding and that can be revised as new information becomes available; for the most up-to-date status, consult the IUCN Red List directly. International trade in the species is regulated under CITES Appendix II. Even though the species is widespread, documented pressures in parts of its native range include hunting for food and the collection of animals for the pet trade, along with habitat loss from development. Because conditions vary by region, local populations may face different pressures than the species as a whole.
            </p>
          ),
        },
      ]}
      faqs={[
        {
          question: "Is the green iguana dangerous or venomous?",
          answer:
            "No. The green iguana is not venomous and is not known to be poisonous. It is a generally calm plant-eater that may bite, scratch, or lash its tail only defensively if it feels cornered. This profile does not provide handling or first-aid advice; any injury concern should go to a qualified medical professional.",
        },
        {
          question: "Where do green iguanas live?",
          answer:
            "They are native to tropical parts of Central and South America, broadly from Mexico south into Paraguay and southeastern Brazil, plus parts of the Caribbean. Introduced, established populations also occur in some areas, including parts of South Florida and certain islands. This is a general description, not a complete range map.",
        },
        {
          question: "What do green iguanas eat?",
          answer:
            "Adults are mostly herbivorous, feeding largely on leaves along with flowers, fruit, and shoots from many plant species. Young iguanas may eat some animal matter such as insects, but the species is best understood as a leaf-eater overall.",
        },
        {
          question: "Are green iguanas endangered?",
          answer:
            "The IUCN Red List currently assesses the green iguana as Least Concern, an assessment that can change with new information. International trade is regulated under CITES Appendix II, and documented pressures include hunting, the pet trade, and habitat loss. Consult the IUCN Red List for the current listing.",
        },
      ]}
      quickFacts={[
        { label: "Scientific name / group", value: "Iguana iguana — reptile, lizard (family Iguanidae; order Squamata)" },
        { label: "Size", value: "About 1.2-1.7 m total length; most adults roughly 4-6 kg" },
        { label: "Diet", value: "Mostly herbivorous; leaves, flowers, fruit, shoots" },
        { label: "Habitat", value: "Arboreal; tropical forests, often near water" },
        { label: "Range", value: "Native to parts of Central and South America; introduced in some areas (e.g. South Florida)" },
        { label: "Conservation status", value: "Least Concern (IUCN Red List); CITES Appendix II; subject to change" },
      ]}
      relatedLinks={[
        { label: "Reptiles & Amphibians", href: "/animal-taxonomy/reptiles-amphibians", description: "Snakes, lizards, turtles, crocodilians, frogs & salamanders" },
        { label: "Iguana", href: "/animals/iguana", description: "Iguanas as a group" },
        { label: "Marine Iguana", href: "/animals/marine-iguana", description: "A specialized iguana" },
        { label: "Chameleon", href: "/animals/chameleon", description: "Another lizard" },
        { label: "Reptiles & Amphibians", href: "/animal-encyclopedia/reptiles" },
      ]}
    />
  );
}
