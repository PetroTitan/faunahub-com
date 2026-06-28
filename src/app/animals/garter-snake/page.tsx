import type { Metadata } from "next";
import AnimalProfileLayout from "@/components/AnimalProfileLayout";
import { ANIMAL_SOURCES } from "@/lib/educational/animal-sources";
import { getAnimalGalleryImages, getAnimalImage, getAnimalOgImage } from "@/lib/images/animal-images";
import { buildArticleMetadata } from "@/lib/metadata";

const PATH = "/animals/garter-snake";
const TITLE = "Garter Snake (Thamnophis): Facts & Biology";
const DESC =
  "Garter snakes (genus Thamnophis) are slender, harmless North American snakes often found near water. Learn their biology, diet, habitat, and conservation.";

export const metadata: Metadata = buildArticleMetadata({
  title: TITLE,
  description: DESC,
  path: PATH,
  publishedTime: "2026-06-28",
  modifiedTime: "2026-06-28",
  ogImage: getAnimalOgImage("garter-snake"),
});

export default function GarterSnakePage() {
  return (
    <AnimalProfileLayout
      commonName="Garter Snake"
      scientificName="Thamnophis"
      pageTitle={TITLE}
      description={DESC}
      path={PATH}
      parentCategory="Reptiles & Amphibians"
      parentCategoryHref="/animal-encyclopedia/reptiles"
      tags={["Reptile","Snake","Harmless"]}
      image={getAnimalImage("garter-snake") ?? undefined}
      galleryImages={getAnimalGalleryImages("garter-snake")}
      sources={ANIMAL_SOURCES["garter-snake"]}
      publishedDate="2026-06-28"
      modifiedDate="2026-06-28"
      overview={
        <>
          <p>
            Garter snakes are slender, small-to-medium colubrid snakes of the genus <em>Thamnophis</em>, among the most widespread and frequently encountered snakes in North America. Most species wear one or more pale lengthwise stripes against a darker body, a pattern that gave the group its name. They are familiar inhabitants of gardens, meadows, marsh edges, and woodland clearings, and many species stay close to water. As a group, garter snakes are harmless to people and are valued as a natural part of the ecosystems they occupy.
          </p>
          <p>
            Although garter snakes are technically rear-fanged and produce a mild saliva that helps them subdue small prey, this secretion is not medically significant to humans, and garter snakes are not considered dangerous. Some garter snakes are notable to biologists for an unusual trait: the ability to tolerate the potent toxins carried by certain newts they prey on, a relationship that has become a textbook example of predator and prey influencing each other&#39;s evolution.
          </p>
          <p>
            This profile describes the genus <em>Thamnophis</em> broadly. Traits such as exact coloration, size, preferred prey, and local abundance vary by species, region, and habitat, so the descriptions here are general rather than a precise account of any single species or population.
          </p>
          <h3>Taxonomy and animal group</h3>
          <p>
            Garter snakes make up the genus <em>Thamnophis</em>, a group of non-front-fanged snakes traditionally placed in the family Colubridae and, in many modern classifications, in the natricine group (water and grass snakes) sometimes treated as the family Natricidae. The genus was established by Leopold Fitzinger in 1843 and contains roughly three dozen recognized species along with numerous subspecies, though the exact count shifts as taxonomists revise the group. Closely related forms include the ribbon snakes, which are also placed within <em>Thamnophis</em>. Garter snakes are reptiles in the order Squamata (scaled reptiles); they should not be confused with amphibians such as frogs, newts, or caecilians, which belong to entirely separate groups.
          </p>
          <h3>Appearance and recognition</h3>
          <p>
            Garter snakes are generally slender-bodied snakes with a distinct head and keeled (ridged) scales that give them a slightly rough texture. Most species display one or more light stripes running the length of the body — typically a central back stripe and a stripe along each side — set against a darker ground color of brown, olive, gray, greenish, or black. Between the stripes many individuals show a checkered pattern of dark spots. Coloration is highly variable across the genus and even within a single species, and some populations or individuals are unusually dark or brightly marked. Adult size varies by species, with many garter snakes maturing as modest-sized snakes, though some can reach lengths well over a meter. Exact size and pattern depend on species, sex, age, and region.
          </p>
        </>
      }
      habitat={
        <p>
          Garter snakes occupy a wide range of habitats and are among the most adaptable snakes in North America, occurring in meadows, grasslands, fields, woodland edges, marshes, and even gardens and lawns. A recurring theme across the genus is an association with moisture: many species are found near streams, ponds, ditches, wetlands, and other water sources, which support the amphibians and other prey they favor. In cooler parts of their range, garter snakes spend the coldest months in a dormant state (brumation), sometimes gathering in shared underground shelters called hibernacula. As with all the details here, habitat use varies by species and locality, and this is a general description rather than a complete range or habitat map.
        </p>
      }
      diet={
        <p>
          Garter snakes are carnivores with a varied diet that shifts by species, size, and what is locally available. Common prey includes earthworms, slugs, leeches, amphibians such as frogs, toads, and newts, small fish and tadpoles, and occasionally lizards, small rodents, or invertebrates. Their frequent association with water reflects this reliance on amphibian and aquatic prey. Garter snakes typically seize and swallow prey directly rather than constricting it. Their mild saliva, produced by a structure called Duvernoy&#39;s gland and delivered through enlarged teeth toward the back of the jaw, can help subdue small, soft-bodied prey but is not a danger to people.
        </p>
      }
      behavior={
        <>
          <p>
            Garter snakes are typically active by day, especially in milder weather, and are often seen basking, foraging near water, or moving through low vegetation. They are generally shy and non-confrontational. When startled or restrained, a common defensive response is to release a foul-smelling musk from glands near the tail, and some individuals may flatten the body, thrash, or attempt to flee; a frightened snake may also bite defensively, though garter snake bites are not dangerous to people. In spring, many garter snakes emerge from communal overwintering sites, and in some species large numbers of individuals may gather to mate, occasionally forming the dense breeding aggregations sometimes called &quot;mating balls.&quot; Behavior varies across the genus and with temperature, season, and local conditions.
          </p>
          <p>
            As abundant mid-sized predators, garter snakes play a meaningful role in many North American food webs. They help regulate populations of invertebrates, amphibians, and other small animals, and in turn they are prey for a wide range of hunters, including hawks and other birds, herons, raccoons, foxes, larger snakes, and various mammals. Their close ties to wetlands and waterways link them to the health of those habitats. Most garter snakes give birth to live young (they are viviparous) rather than laying eggs, and litters can be sizable, which contributes to their abundance where conditions are favorable. The coevolutionary relationship between toxin-bearing newts and toxin-tolerant garter snakes is a widely cited example of how predators and prey can shape one another over time.
          </p>
        </>
      }
      humanInteraction={
        <p>
          Garter snakes are among the snakes people most often encounter in yards, parks, and gardens across much of North America, and these encounters are generally harmless. The snakes are not aggressive and will usually retreat if given space; like most wildlife, they may act defensively only if cornered or handled. The calm, educational takeaway is simply to observe garter snakes from a respectful distance and let them move along on their own. These are wild animals, not pets, and this profile does not offer advice on handling, capturing, keeping, or removing them. Anyone with concerns about a snake on their property, or about a bite of any kind, should contact local wildlife authorities, qualified wildlife professionals, or appropriate medical or health resources as relevant.
        </p>
      }
      extraSections={[
        {
          heading: "Is it venomous?",
          body: (
            <p>
              Garter snakes are best described as harmless to humans. They are rear-fanged and produce a mild saliva (from Duvernoy&#39;s gland) that can assist in subduing small prey, but this secretion is weak, poorly delivered, and not medically significant to people; garter snakes are not considered venomous in any dangerous sense. Separately, biologists have documented that certain garter snake populations can tolerate tetrodotoxin, the potent toxin carried by some newts they eat — an adaptation studied as a classic case of predator-prey coevolution. In some cases snakes that consume toxic newts may temporarily retain newt-derived toxins in their tissues. These details are presented as points of biology, not as a danger ranking. This profile does not provide medical, first-aid, or handling information; questions about any snake bite or toxin exposure should be directed to qualified medical professionals or local health authorities.
            </p>
          ),
        },
        {
          heading: "Conservation context",
          body: (
            <p>
              As a group, garter snakes are widespread and adaptable, and many species are common across their ranges. The IUCN has assessed a number of <em>Thamnophis</em> species as Least Concern, reflecting broad distribution and tolerance of varied habitats, but conservation status varies by species and by region and can change over time. Some populations and subspecies face documented pressures from habitat loss, wetland drainage, road mortality, and other human-related factors; the San Francisco garter snake (<em>Thamnophis sirtalis tetrataenia</em>), for example, has long been recognized as a conservation concern. For the current standing of any particular garter snake species or subspecies, consult the IUCN Red List and relevant regional wildlife authorities, as listings are periodically updated.
            </p>
          ),
        },
      ]}
      faqs={[
        {
          question: "Are garter snakes dangerous to humans?",
          answer:
            "No. Garter snakes are considered harmless to people. They are rear-fanged and produce a mild saliva that helps subdue small prey, but it is not medically significant to humans, and the snakes are not aggressive. For any concern about a bite of any kind, contact a qualified medical professional or local health authority.",
        },
        {
          question: "Are garter snakes venomous or poisonous?",
          answer:
            "Garter snakes have only a mild, weakly delivered saliva (from Duvernoy's gland) that is not dangerous to people, so they are not venomous in any meaningful sense to humans. Separately, snakes that eat toxic newts can sometimes retain newt toxins in their tissues, but these are points of biology, not a hazard ranking, and this profile gives no medical or first-aid guidance.",
        },
        {
          question: "What do garter snakes eat?",
          answer:
            "Garter snakes are carnivores whose diet varies by species and habitat. Common prey includes earthworms, slugs, leeches, amphibians such as frogs and newts, small fish, and occasionally lizards or small rodents. Their frequent presence near water reflects this reliance on amphibian and aquatic prey.",
        },
        {
          question: "Where are garter snakes found?",
          answer:
            "Garter snakes (genus Thamnophis) are found in parts of North and Central America and are among the continent's most widespread snakes, occurring in habitats from meadows and woodlands to marsh edges and gardens, often near water. Exact range and habitat vary by species and region; this is a general description, not a complete range map.",
        },
      ]}
      quickFacts={[
        { label: "Scientific name", value: "Genus Thamnophis" },
        { label: "Group", value: "Snake (reptile, order Squamata)" },
        { label: "Range", value: "Parts of North and Central America; varies by species" },
        { label: "Habitat", value: "Meadows, woodlands, marshes, gardens; often near water" },
        { label: "Diet", value: "Earthworms, slugs, amphibians, fish, and other small prey" },
        { label: "Conservation", value: "Many species assessed Least Concern by the IUCN; varies by species and changeable — check the IUCN Red List" },
      ]}
      relatedLinks={[
        { label: "Reptiles & Amphibians", href: "/animal-taxonomy/reptiles-amphibians", description: "Snakes, lizards, turtles, crocodilians, frogs & salamanders" },
        { label: "Snake", href: "/animals/snake", description: "Snakes more broadly" },
        { label: "Grass Snake", href: "/animals/grass-snake", description: "Another harmless snake" },
        { label: "Frog", href: "/animals/frog", description: "Common garter-snake prey" },
        { label: "Reptiles & Amphibians", href: "/animal-encyclopedia/reptiles" },
      ]}
    />
  );
}
