import type { Metadata } from "next";
import AnimalProfileLayout from "@/components/AnimalProfileLayout";
import { ANIMAL_SOURCES } from "@/lib/educational/animal-sources";
import { getAnimalGalleryImages, getAnimalImage, getAnimalOgImage } from "@/lib/images/animal-images";
import { buildArticleMetadata } from "@/lib/metadata";

const PATH = "/animals/saltwater-crocodile";
const TITLE = "Saltwater Crocodile: Largest Living Reptile";
const DESC =
  "Learn about the saltwater crocodile (Crocodylus porosus), the largest living reptile, its Indo-Pacific range, ecology, and IUCN Least Concern status.";

export const metadata: Metadata = buildArticleMetadata({
  title: TITLE,
  description: DESC,
  path: PATH,
  publishedTime: "2026-06-28",
  modifiedTime: "2026-06-28",
  ogImage: getAnimalOgImage("saltwater-crocodile"),
});

export default function SaltwaterCrocodilePage() {
  return (
    <AnimalProfileLayout
      commonName="Saltwater Crocodile"
      scientificName="Crocodylus porosus"
      pageTitle={TITLE}
      description={DESC}
      path={PATH}
      parentCategory="Reptiles & Amphibians"
      parentCategoryHref="/animal-encyclopedia/reptiles"
      tags={["Reptile","Crocodilian","Indo-Pacific"]}
      image={getAnimalImage("saltwater-crocodile") ?? undefined}
      galleryImages={getAnimalGalleryImages("saltwater-crocodile")}
      sources={ANIMAL_SOURCES["saltwater-crocodile"]}
      publishedDate="2026-06-28"
      modifiedDate="2026-06-28"
      overview={
        <>
          <p>
            The saltwater crocodile (<em>Crocodylus porosus</em>) is widely regarded as the largest living reptile and one of the most powerful crocodilians on Earth. It is a semi-aquatic predator found in estuaries, tidal rivers, mangroves, coastal wetlands and nearshore marine waters across a broad Indo-Pacific range. Despite its name, it readily moves between salt and fresh water and is well known for crossing open sea between coastlines and islands.
          </p>
          <p>
            This species occurs across parts of South and Southeast Asia and extends through parts of northern Australia, where it is a familiar component of tropical waterways. The IUCN Red List assesses the saltwater crocodile as Least Concern overall, an assessment that reflects recovery in some regions, including parts of Australia, following decades of legal protection after earlier population declines. Like all such assessments, this status is a snapshot that may be revised as new information becomes available.
          </p>
          <p>
            As an apex predator, the saltwater crocodile plays a significant role in the ecosystems it inhabits. This profile describes its biology, distribution and ecology in educational terms, and includes a calm note on coexisting safely with a large wild animal that can be present in tropical waters.
          </p>
          <h3>Taxonomy and animal group</h3>
          <p>
            The saltwater crocodile, <em>Crocodylus porosus</em>, is a reptile in the order Crocodylia and the family Crocodylidae, which contains the so-called true crocodiles. It belongs to the genus <em>Crocodylus</em>, alongside relatives such as the Nile crocodile (<em>Crocodylus niloticus</em>) and the mugger crocodile (<em>Crocodylus palustris</em>). Crocodilians are an ancient lineage of archosaurs, the same broad group that includes birds, and they are distinguished from alligators and caimans by features such as a more V-shaped snout and visible lower teeth when the jaws are closed. Common names for this species include the estuarine crocodile and, in parts of its range, the Indo-Pacific crocodile.
          </p>
          <h3>Appearance and recognition</h3>
          <p>
            The saltwater crocodile is recognized by its very large size, broad and relatively heavy snout, and robust, armored body covered in bony plates called osteoderms. Adults are typically dark olive to grayish or brownish, often with darker mottling, while younger animals tend to be paler with darker bands and spots that fade with age. Mature males can reach substantially greater lengths and weights than females, making this one of the most size-dimorphic of the crocodilians. Distinguishing features include the powerful tail used for propulsion in water, raised eyes and nostrils positioned for surface watching while the body remains submerged, and a relatively smooth area on the snout compared with some other crocodile species.
          </p>
        </>
      }
      habitat={
        <p>
          The saltwater crocodile is associated with estuaries, mangrove-lined channels, tidal rivers, coastal wetlands and nearshore marine waters, and it can also move well inland along freshwater rivers and floodplains. Its range spans parts of the Indo-Pacific, extending from parts of South and Southeast Asia through to parts of northern Australia; it should not be described as restricted to Oceania or as occupying all of Oceania. Within Australia it is mainly associated with the tropical north, including coastal and estuarine systems, rather than the continent as a whole. The species&#39; tolerance of salt water and its capacity for long-distance sea travel help explain its wide but patchy distribution across coastlines and islands of this broad region.
        </p>
      }
      diet={
        <p>
          As a generalist apex predator, the saltwater crocodile feeds opportunistically and its diet shifts with age and size. Hatchlings and juveniles take small prey such as insects, crustaceans, small fish and amphibians, while larger individuals consume fish, crabs, turtles, birds, and a range of mammals that come near the water&#39;s edge. It is an ambush hunter, often lying still and partly submerged before striking with a rapid lunge, and it frequently uses water to subdue prey. Crocodiles can go for extended periods between substantial meals, drawing on energy reserves built up during times of plenty.
        </p>
      }
      behavior={
        <>
          <p>
            Saltwater crocodiles are generally solitary and can be strongly territorial, particularly large males that defend stretches of waterway. Like other reptiles they are ectothermic, regulating body temperature by basking in the sun and retreating to water or shade. Females build mound nests of vegetation and mud near the water and guard the clutch, with nest temperature influencing the sex of the developing young, a pattern known as temperature-dependent sex determination. After hatching, females may assist the young to the water and offer protection for a period, though juvenile mortality from predators and environmental factors is high. These crocodiles are long-lived animals with slow growth and late maturity.
          </p>
          <p>
            As a top predator in many tropical aquatic systems, the saltwater crocodile influences the abundance and behavior of prey species and helps shape the structure of estuarine and wetland food webs. By feeding across multiple trophic levels and removing sick or vulnerable animals, large crocodilians can contribute to the overall balance of the ecosystems they inhabit. Their nests and the surrounding wetland habitats also intersect with other species&#39; life cycles, and healthy crocodile populations are often considered an indicator of relatively intact estuarine and riverine environments. Because the species occupies the apex of these systems, changes in its status can reflect broader ecological conditions.
          </p>
        </>
      }
      humanInteraction={
        <p>
          The saltwater crocodile is a large wild predator, and the calm, sensible approach is to never approach it and never enter or wade in waters where crocodiles may be present, especially in tropical estuaries, rivers and coastal areas within its range. Observe only from a safe distance in designated areas, follow all posted warnings and signage, and report any wildlife conflict, sightings of concern or animals in unexpected places to local wildlife authorities rather than attempting to intervene. Any injury or medical concern involving wildlife should be directed to qualified medical professionals or local health authorities. Historically the species declined in parts of its range due to hunting, but legal protection and management, including recovery in parts of Australia, contributed to its current IUCN Red List assessment of Least Concern; this remains a changeable assessment that varies in detail across the broad region it occupies.
        </p>
      }
      faqs={[
        {
          question: "Is the saltwater crocodile really the largest living reptile?",
          answer:
            "Yes, the saltwater crocodile (Crocodylus porosus) is widely regarded as the largest living reptile, with mature males reaching considerably greater size than females. It is one of the most powerful crocodilians alive today.",
        },
        {
          question: "Where is the saltwater crocodile found?",
          answer:
            "It is found across a broad Indo-Pacific range, from parts of South and Southeast Asia through to parts of northern Australia. It lives in estuaries, tidal rivers, mangroves, coastal wetlands and nearshore marine waters, and it is not limited to or spread across all of Oceania.",
        },
        {
          question: "Why can it live in salt water?",
          answer:
            "The saltwater crocodile tolerates both fresh and salt water and can travel long distances by sea between coastlines and islands. This helps explain its wide but patchy distribution across the Indo-Pacific.",
        },
        {
          question: "What is its conservation status?",
          answer:
            "The IUCN Red List assesses the saltwater crocodile as Least Concern, reflecting recovery in some regions, including parts of Australia, after legal protection. Conservation assessments are snapshots that may be revised as new information becomes available.",
        },
      ]}
      quickFacts={[
        { label: "Scientific name", value: "Crocodylus porosus" },
        { label: "Animal group", value: "Reptile (crocodilian)" },
        { label: "Family/order", value: "Crocodylidae / Crocodylia" },
        { label: "Size", value: "Largest living reptile; males much larger than females" },
        { label: "Diet", value: "Carnivore; opportunistic apex predator" },
        { label: "Habitat", value: "Estuaries, tidal rivers, mangroves, coastal and nearshore waters" },
        { label: "Range", value: "Parts of South and Southeast Asia through northern Australia (broad Indo-Pacific)" },
        { label: "Conservation status", value: "Least Concern (IUCN Red List; a changeable assessment)" },
      ]}
      relatedLinks={[
        { label: "Crocodile", href: "/animals/crocodile", description: "Crocodiles more broadly" },
        { label: "Nile Crocodile", href: "/animals/nile-crocodile", description: "Another large crocodile" },
        { label: "Alligator", href: "/animals/alligator", description: "A related crocodilian" },
        { label: "Oceania fauna", href: "/fauna/continents/oceania", description: "Animals of Oceania" },
        { label: "Reptiles & Amphibians", href: "/animal-encyclopedia/reptiles" },
      ]}
    />
  );
}
