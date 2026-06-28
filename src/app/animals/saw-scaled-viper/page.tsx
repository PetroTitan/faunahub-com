import type { Metadata } from "next";
import AnimalProfileLayout from "@/components/AnimalProfileLayout";
import { ANIMAL_SOURCES } from "@/lib/educational/animal-sources";
import { getAnimalGalleryImages, getAnimalImage, getAnimalOgImage } from "@/lib/images/animal-images";
import { buildArticleMetadata } from "@/lib/metadata";

const PATH = "/animals/saw-scaled-viper";
const TITLE = "Saw-scaled Viper (Echis carinatus) Facts";
const DESC =
  "Learn about the saw-scaled viper (Echis carinatus), a small venomous viper of dry regions named for the rasping warning sound it makes with its scales.";

export const metadata: Metadata = buildArticleMetadata({
  title: TITLE,
  description: DESC,
  path: PATH,
  publishedTime: "2026-06-28",
  modifiedTime: "2026-06-28",
  ogImage: getAnimalOgImage("saw-scaled-viper"),
});

export default function SawScaledViperPage() {
  return (
    <AnimalProfileLayout
      commonName="Saw-scaled Viper"
      scientificName="Echis carinatus"
      pageTitle={TITLE}
      description={DESC}
      path={PATH}
      parentCategory="Reptiles & Amphibians"
      parentCategoryHref="/animal-encyclopedia/reptiles"
      tags={["Reptile","Snake","Venomous"]}
      image={getAnimalImage("saw-scaled-viper") ?? undefined}
      galleryImages={getAnimalGalleryImages("saw-scaled-viper")}
      sources={ANIMAL_SOURCES["saw-scaled-viper"]}
      publishedDate="2026-06-28"
      modifiedDate="2026-06-28"
      overview={
        <>
          <p>
            The saw-scaled viper (<em>Echis carinatus</em>) is a small venomous snake belonging to the genus <em>Echis</em>, a group of compact vipers found across arid and semi-arid landscapes of Africa, the Middle East, and South Asia. Despite its modest size, it is one of the more frequently encountered vipers within its range because it often lives close to human settlements, farmland, and dry scrub. Its common name refers to the distinctive rasping, saw-like sound it produces by rubbing specialised, ridged (keeled) scales together as a warning.
          </p>
          <p>
            As a member of the viper family (Viperidae), <em>Echis carinatus</em> has a short, stout body, a broad triangular head distinct from the neck, and vertically slit pupils. It is venomous, and bites within its native range are a recognised medical concern. However, the snake is small and its venom is delivered defensively rather than aggressively; it relies first on warning displays and only bites when it feels cornered or is accidentally disturbed. This profile describes its biology and ecology in calm, factual terms and is not a guide to handling, identification for safety, or medical response.
          </p>
          <h3>Taxonomy and animal group</h3>
          <p>
            The saw-scaled viper, <em>Echis carinatus</em>, is a venomous snake in the family Viperidae (true vipers) and is the type species of the genus <em>Echis</em>, often called saw-scaled vipers or carpet vipers. The genus <em>Echis</em> contains several small-bodied species distributed across dry regions of Africa, the Arabian Peninsula, the Middle East, and South Asia, and the boundaries between some species and subspecies have been revised over time as researchers study their genetics and geography. <em>Echis carinatus</em> itself includes several recognised subspecies across its range. Because viper taxonomy is periodically revised, the names applied to particular populations may change; consult current herpetological references for the latest classification.
          </p>
          <h3>Appearance and recognition</h3>
          <p>
            <em>Echis carinatus</em> is a small, thickset viper, typically much shorter than many other well-known vipers, with adults generally measuring in the range of a few tens of centimetres rather than reaching great lengths. It has a short tail and a pear-shaped head that is clearly distinct from the neck. The body coloration is usually cryptic, blending shades of brown, buff, grey, and reddish tones that match dry soil and sand, often with a pattern of pale, wavy or zigzag markings along the back and a series of lighter blotches on the sides. The common name comes from the strongly keeled (ridged) scales on the flanks, which are set at an angle and can be rubbed together. Coloration and pattern vary geographically across the species&#39; range.
          </p>
        </>
      }
      habitat={
        <p>
          Saw-scaled vipers are associated with dry environments and are found in parts of the arid and semi-arid zones of their broad range, which spans portions of Africa, the Middle East, and South Asia depending on the species and population. Typical habitats include sandy and rocky deserts, dry scrubland, open grassland, and degraded or cultivated land. <em>Echis carinatus</em> in particular is often noted near agricultural areas and human settlements, where it may shelter under stones, in crevices, among leaf litter, or in burrows. This tolerance of disturbed and inhabited landscapes is one reason encounters with people occur. The descriptions here are general and not a complete or precise range map.
        </p>
      }
      diet={
        <p>
          Like other vipers, the saw-scaled viper is a predator that feeds on a variety of small animals. Its diet is generally reported to include arthropods such as insects, scorpions, and centipedes, along with small vertebrates like lizards, frogs, small mammals, and occasionally small snakes, with the exact prey varying by region, season, and the size of the individual snake. It is primarily a sit-and-wait (ambush) predator that may also actively forage, using its venom to subdue prey, which is then swallowed whole. Juveniles often take a higher proportion of invertebrates than adults. Its appetite for invertebrate prey, including scorpions, is sometimes cited as part of its ecological role in controlling such populations.
        </p>
      }
      behavior={
        <>
          <p>
            The saw-scaled viper is best known for its characteristic warning behaviour. When alarmed, it coils its body into a series of C-shaped loops and rubs the angled, keeled scales on its flanks against one another, producing a continuous rasping or sizzling sound described as resembling a saw drawn across wood. This stridulation serves as a clear defensive warning that the snake is agitated and would prefer to be left undisturbed, rather than a sign of aggression. The species is largely nocturnal or crepuscular, especially in hot weather, and shelters during the heat of the day. It is venomous but not inherently aggressive; like most snakes, it bites defensively when it feels threatened or is accidentally contacted, and the likelihood of an encounter ending in a bite varies with the situation.
          </p>
          <p>
            As a small predator of invertebrates and small vertebrates, the saw-scaled viper occupies a meaningful place in the food webs of dry ecosystems, helping to regulate populations of insects, scorpions, and other small prey while itself serving as food for larger predators such as birds of prey, monitor lizards, and other snakes. Its cryptic coloration provides camouflage against the soil and sand of its habitat, aiding both ambush hunting and avoidance of predators. Because <em>Echis carinatus</em> readily persists in agricultural and disturbed landscapes, it is an ecologically interesting example of a venomous predator adapted to living alongside people.
          </p>
        </>
      }
      humanInteraction={
        <p>
          Because the saw-scaled viper often lives near farms, villages, and other inhabited areas across its range, people sometimes encounter it, and its loud rasping warning is a reminder to keep a respectful distance and allow the snake to move away on its own. The calm, educational takeaway is that this is a wild animal that bites defensively rather than seeking out conflict. This profile does not offer handling, capture, identification-for-safety, removal, or pet-keeping guidance. Anyone worried about a snakebite or possible envenomation should contact qualified medical professionals or local health authorities, and concerns about snakes around homes or property are best directed to local wildlife authorities or qualified professionals.
        </p>
      }
      extraSections={[
        {
          heading: "Venom",
          body: (
            <p>
              The saw-scaled viper is venomous, meaning it injects venom through fangs rather than being poisonous to touch or eat. Within its native range, bites from <em>Echis</em> vipers are recognised by medical and public-health sources as a genuine medical concern, in part because these snakes are widespread, live near people, and are easily disturbed. The venom is a complex biological secretion that, in vipers of this group, is generally described as affecting blood clotting and tissue. This profile does not provide venom potency figures, danger rankings, bite or fatality statistics, or any first-aid guidance. Any concern about a venomous snakebite should be directed to qualified medical professionals or local health authorities, who are the appropriate source for diagnosis and treatment.
            </p>
          ),
        },
        {
          heading: "Conservation context",
          body: (
            <p>
              Conservation assessments for snakes can change as new survey data and taxonomic revisions become available, so the most reliable current information comes from authoritative sources. The IUCN Red List is the standard reference for the conservation status of <em>Echis carinatus</em> and related <em>Echis</em> species; readers should consult the IUCN Red List for the current listing and any noted population trends. As a widespread species that tolerates a range of dry and disturbed habitats, the saw-scaled viper is not generally highlighted among the most conservation-threatened snakes, but local pressures such as habitat change can still affect particular populations. This profile avoids stating a specific status or population figure and instead directs readers to the IUCN for the up-to-date assessment.
            </p>
          ),
        },
      ]}
      faqs={[
        {
          question: "Why is it called a saw-scaled viper?",
          answer:
            "The name refers to the snake's warning behaviour. It has specialised, strongly keeled (ridged) scales on its flanks, and when alarmed it coils and rubs these scales together to produce a continuous rasping, saw-like sound. This stridulation is a defensive warning signal rather than a sign of aggression.",
        },
        {
          question: "Is the saw-scaled viper venomous or poisonous?",
          answer:
            "It is venomous, meaning it injects venom through fangs, not poisonous (which would mean toxic to eat or touch). Within its range, bites from Echis vipers are recognised as a real medical concern. Any concern about a venomous snakebite should be directed to qualified medical professionals or local health authorities.",
        },
        {
          question: "Where do saw-scaled vipers live?",
          answer:
            "Members of the genus Echis are found in parts of the dry and semi-arid regions of Africa, the Middle East, and South Asia, depending on the species. Echis carinatus favours sandy and rocky deserts, dry scrub, grassland, and cultivated land, and is often noted near human settlements. This is a general description, not a precise range map.",
        },
        {
          question: "What does the saw-scaled viper eat?",
          answer:
            "It preys on a variety of small animals, generally reported to include invertebrates such as insects, scorpions, and centipedes, along with small vertebrates like lizards, frogs, small mammals, and occasionally other small snakes. The exact diet varies by region, season, and the size of the individual snake.",
        },
      ]}
      quickFacts={[
        { label: "Scientific name", value: "Echis carinatus (family Viperidae)" },
        { label: "Group", value: "Snake (venomous viper)" },
        { label: "Range", value: "Found in parts of arid Africa, the Middle East, and South Asia; varies by species and region" },
        { label: "Habitat", value: "Dry deserts, scrubland, grassland, and cultivated land, often near settlements" },
        { label: "Diet", value: "Small prey including insects, scorpions, lizards, frogs, and small mammals" },
        { label: "Conservation", value: "Consult the IUCN Red List for the current assessment (status can change)" },
      ]}
      relatedLinks={[
        { label: "Reptiles & Amphibians", href: "/animal-taxonomy/reptiles-amphibians", description: "Snakes, lizards, turtles, crocodilians, frogs & salamanders" },
        { label: "Viper", href: "/animals/viper", description: "Vipers as a group" },
        { label: "Cobra", href: "/animals/cobra", description: "Another venomous snake group" },
        { label: "Snake", href: "/animals/snake", description: "Snakes more broadly" },
        { label: "Reptiles & Amphibians", href: "/animal-encyclopedia/reptiles" },
      ]}
    />
  );
}
