import type { Metadata } from "next";
import AnimalProfileLayout from "@/components/AnimalProfileLayout";
import { ANIMAL_SOURCES } from "@/lib/educational/animal-sources";
import { getAnimalGalleryImages, getAnimalImage, getAnimalOgImage } from "@/lib/images/animal-images";
import { buildArticleMetadata } from "@/lib/metadata";

const PATH = "/animals/arapaima";
const TITLE = "Arapaima: Air-Breathing Giant of the Amazon";
const DESC =
  "The arapaima is one of the world's largest freshwater fish, an air-breathing giant of the Amazon basin. Explore its biology, range, and conservation notes.";

export const metadata: Metadata = buildArticleMetadata({
  title: TITLE,
  description: DESC,
  path: PATH,
  publishedTime: "2026-06-28",
  modifiedTime: "2026-06-28",
  ogImage: getAnimalOgImage("arapaima"),
});

export default function ArapaimaPage() {
  return (
    <AnimalProfileLayout
      commonName="Arapaima"
      scientificName="Arapaima (e.g. Arapaima gigas)"
      pageTitle={TITLE}
      description={DESC}
      path={PATH}
      parentCategory="Fish"
      parentCategoryHref="/animal-encyclopedia/fish"
      tags={["Fish","Air-breathing","Amazon"]}
      image={getAnimalImage("arapaima") ?? undefined}
      galleryImages={getAnimalGalleryImages("arapaima")}
      sources={ANIMAL_SOURCES["arapaima"]}
      publishedDate="2026-06-28"
      modifiedDate="2026-06-28"
      overview={
        <>
          <p>
            The arapaima is one of the largest freshwater fish in the world, a heavily built, air-breathing fish associated with the Amazon basin and nearby river systems in parts of South America. Unlike most fish, which rely entirely on gills, the arapaima must rise to the surface to gulp air, drawing oxygen through a modified, lung-like swim bladder. This adaptation lets it survive in warm, oxygen-poor floodplain waters where many other fish would struggle.
          </p>
          <p>
            &quot;Arapaima&quot; is not a single species but a name covering more than one species within the genus <em>Arapaima</em>, with <em>Arapaima gigas</em> being the most widely cited. The group&#39;s taxonomy has been revised over time, and distinguishing the species in the field can be difficult. Because of this, much of what is popularly written about &quot;the arapaima&quot; actually applies across several closely related forms.
          </p>
          <p>
            These fish are notable for their large, hard, distinctively patterned scales and their reddish markings toward the tail, which contribute to a regional name, pirarucu. Long studied by naturalists and important to riverside communities, the arapaima is also a subject of ongoing conservation attention, as several populations have been depleted by overfishing in parts of their range.
          </p>
          <h3>Taxonomy and animal group</h3>
          <p>
            The arapaima belongs to the genus <em>Arapaima</em>, in the order Osteoglossiformes, the bony-tongued fishes; it is a ray-finned fish (class Actinopterygii). Its family placement is treated differently by different sources: it is commonly assigned to the family Arapaimidae, while some classifications place it within a broadly defined Osteoglossidae, so the family is best presented cautiously. The group is part of an ancient lineage sometimes informally called &quot;living fossils&quot; because related groups have a long evolutionary history. Importantly, &quot;arapaima&quot; refers to more than one species; <em>Arapaima gigas</em> is the best known, but the genus has been taxonomically revised, and the number and boundaries of valid species have been debated by researchers. For that reason this profile treats the arapaima as a group rather than asserting that all accounts describe a single species.
          </p>
          <h3>Appearance and recognition</h3>
          <p>
            The arapaima is a large, elongated, cylindrical fish with a broad, somewhat flattened head and an upturned mouth. Its body is covered in large, thick, hard scales arranged in a mosaic-like pattern, and these scales are unusually tough, an often-noted feature of the fish. Coloration is typically grayish to greenish or dark over much of the body, grading to reddish or coppery markings toward the rear and tail, which inspired regional names referring to red coloring. The dorsal and anal fins are set far back near the tail, giving the fish a powerful, paddle-like push through the water. It is most often recognized by its sheer size combined with these distinctive scales and the rear-set fins.
          </p>
        </>
      }
      habitat={
        <p>
          The arapaima is associated with the Amazon basin and nearby river systems in parts of South America, where it occurs in slow-moving rivers, floodplain lakes, oxbows, and seasonally flooded forest waters. It favors warm, often oxygen-poor freshwater habitats, conditions its air-breathing ability helps it tolerate. Distribution shifts with the flood cycle, as fish move between main channels and inundated floodplain areas as water levels rise and fall. Rather than being spread evenly, arapaima populations are patchily distributed across suitable lowland tropical waters within parts of their range, and they have also been introduced to some waters outside their original distribution.
        </p>
      }
      diet={
        <p>
          The arapaima is a predatory fish that feeds mainly on other fish, taking advantage of its size and a quick, suction-style strike to capture prey. Its diet can also include other small aquatic animals, and individuals may opportunistically take items such as invertebrates or other prey encountered in floodplain habitats. Young arapaima begin on smaller foods and progressively take larger prey as they grow. Because it hunts in warm, often murky floodplain waters, the arapaima relies on close-range strikes rather than long pursuits.
        </p>
      }
      behavior={
        <>
          <p>
            Arapaima are obligate air-breathers, surfacing at intervals to gulp air, a behavior that makes them conspicuous and is one reason they have been vulnerable to overfishing pressure. They are noted for parental care: adults guard their young, and the young remain close to a guarding parent during early development, often shadowing it in the shallows. Reproduction is generally tied to the seasonal flood cycle, with nesting and spawning occurring as water conditions change. Outside of breeding and parental-care periods, much of their daily life centers on patrolling floodplain waters and returning regularly to the surface to breathe.
          </p>
          <p>
            As a large predatory fish, the arapaima occupies a high position in many of the freshwater food webs it inhabits, helping shape the abundance and behavior of the smaller fish on which it feeds. Its air-breathing adaptation allows it to persist in low-oxygen floodplain waters, making it part of a specialized community of organisms suited to those seasonal, oxygen-poor environments. Through its movements between main channels and flooded forest, it links different parts of the floodplain ecosystem. Healthy arapaima populations are often viewed as an indicator of intact, well-functioning floodplain river systems.
          </p>
        </>
      }
      humanInteraction={
        <p>
          The arapaima has long been culturally and economically important to riverside communities in parts of South America, and it is also widely featured in aquariums and public education. Its conservation status is complex and is not a single, simple global category: some assessments are data-limited, and several populations have been depleted by overfishing, which is a recognized conservation concern. In some areas, community-based management has been developed to address these pressures. This profile is educational only and does not provide any fishing, angling, harvesting, or food guidance; questions about regulations or local management should be directed to local wildlife and fisheries authorities, and conservation efforts are best supported through recognized scientific and management organizations.
        </p>
      }
      faqs={[
        {
          question: "How big can an arapaima get?",
          answer:
            "The arapaima is one of the largest freshwater fish in the world and can reach very large sizes as a substantial, heavy-bodied fish. Exact maximums vary, and reliable size depends on the population and individual, so figures are best treated cautiously.",
        },
        {
          question: "Is the arapaima a single species?",
          answer:
            "No. \"Arapaima\" refers to more than one species within the genus Arapaima, with Arapaima gigas being the most widely cited. The group's taxonomy has been revised, and the number of valid species has been debated by researchers.",
        },
        {
          question: "Why does the arapaima breathe air?",
          answer:
            "The arapaima has a modified, lung-like swim bladder that lets it take in oxygen from the air. This adaptation helps it survive in the warm, oxygen-poor floodplain waters of its range, but it must surface regularly to breathe.",
        },
        {
          question: "Is the arapaima endangered?",
          answer:
            "Its conservation status is complex rather than a single simple category, with some assessments being data-limited. Several populations have been depleted by overfishing, which is a recognized conservation concern; questions about local status are best directed to wildlife and fisheries authorities.",
        },
      ]}
      quickFacts={[
        { label: "Scientific name", value: "Genus Arapaima (e.g. Arapaima gigas)" },
        { label: "Animal group", value: "Ray-finned fish (air-breathing)" },
        { label: "Family / order", value: "Arapaimidae (sometimes Osteoglossidae); Osteoglossiformes" },
        { label: "Size", value: "Among the largest freshwater fish; very large" },
        { label: "Diet", value: "Predatory; mainly other fish" },
        { label: "Habitat", value: "Warm, slow, low-oxygen floodplain freshwaters" },
        { label: "Range", value: "Amazon basin and nearby river systems, parts of South America" },
        { label: "Conservation status", value: "Complex; not one simple category; some data-limited; overfishing a concern" },
      ]}
      relatedLinks={[
        { label: "Catfish", href: "/animals/catfish", description: "Another large freshwater fish" },
        { label: "Piranha", href: "/animals/piranha", description: "An Amazon fish" },
        { label: "Electric Eel", href: "/animals/electric-eel", description: "An Amazon fish" },
        { label: "South American fauna", href: "/fauna/continents/south-america", description: "Animals of South America" },
        { label: "Fish", href: "/animal-encyclopedia/fish" },
      ]}
    />
  );
}
