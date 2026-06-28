import type { Metadata } from "next";
import AnimalProfileLayout from "@/components/AnimalProfileLayout";
import { ANIMAL_SOURCES } from "@/lib/educational/animal-sources";
import { getAnimalGalleryImages, getAnimalImage, getAnimalOgImage } from "@/lib/images/animal-images";
import { buildArticleMetadata } from "@/lib/metadata";

const PATH = "/animals/brown-trout";
const TITLE = "Brown Trout: Salmo trutta Facts & Ecology";
const DESC =
  "Learn about the brown trout (Salmo trutta), a variable European salmonid with resident and sea-run forms: its habitat, diet, ecology, and conservation.";

export const metadata: Metadata = buildArticleMetadata({
  title: TITLE,
  description: DESC,
  path: PATH,
  publishedTime: "2026-06-27",
  modifiedTime: "2026-06-27",
  ogImage: getAnimalOgImage("brown-trout"),
});

export default function BrownTroutPage() {
  return (
    <AnimalProfileLayout
      commonName="Brown Trout"
      scientificName="Salmo trutta"
      pageTitle={TITLE}
      description={DESC}
      path={PATH}
      parentCategory="Fish"
      parentCategoryHref="/animal-encyclopedia/fish"
      tags={["Fish","Salmonid","Freshwater"]}
      image={getAnimalImage("brown-trout") ?? undefined}
      galleryImages={getAnimalGalleryImages("brown-trout")}
      sources={ANIMAL_SOURCES["brown-trout"]}
      publishedDate="2026-06-27"
      modifiedDate="2026-06-27"
      overview={
        <>
          <p>
            The brown trout (<em>Salmo trutta</em>) is a freshwater and coastal fish in the salmon family and one of the most variable salmonids known to science. It is native to fresh and coastal waters of parts of Europe, with its native range also extending into parts of western Asia and North Africa. Within this range it shows remarkable diversity in size, coloration, and life history, which historically led naturalists to describe many local forms as separate species before they were recognized as expressions of a single, widely variable species.
          </p>
          <p>
            A defining feature of the brown trout is that it includes both resident freshwater forms, which spend their entire lives in rivers and lakes, and migratory forms known as sea trout, which move between fresh water and the sea. These forms can occur in the same populations and are not fixed for life, which makes the species a frequent subject of study in fish ecology and evolution. Its adaptability has also made it one of the most widely introduced fish in the world.
          </p>
          <p>
            On the IUCN Red List, the brown trout is currently assessed as Least Concern. Such assessments reflect the best available information at the time and can change as new data emerge. Because the species has been moved far beyond its native range, conservation discussion often focuses less on the trout&#39;s own global status and more on its effects on native species in places where it has been introduced.
          </p>
          <h3>Taxonomy and animal group</h3>
          <p>
            The brown trout belongs to the family Salmonidae, the salmon and trout family, within the order Salmoniformes, and carries the scientific name <em>Salmo trutta</em>. It is a ray-finned fish and a close relative of the Atlantic salmon (<em>Salmo salar</em>), with which it shares the genus <em>Salmo</em>. Because the species is so variable, many regional and lake-dwelling forms were once given their own names, and the taxonomy of these populations is still discussed by researchers. In general use, the resident freshwater forms and the migratory sea trout are treated as the same species rather than as distinct kinds of animal.
          </p>
          <h3>Appearance and recognition</h3>
          <p>
            The brown trout is a streamlined, torpedo-shaped fish typically marked with dark spots, and often reddish or orange spots, scattered over a brownish to golden or silvery body, frequently with pale halos around some of the spots. Coloration varies greatly with habitat: river-dwelling fish are often darker and more heavily spotted, lake fish can appear more silvery, and sea-run individuals tend to be bright silver, sometimes making them easy to confuse with related salmonids. Like other members of its family, it has a small fleshy adipose fin between the dorsal fin and the tail. Body size is also highly variable, ranging from small stream fish to much larger individuals in productive lakes and coastal waters.
          </p>
        </>
      }
      habitat={
        <p>
          Brown trout are associated with cool, well-oxygenated fresh waters and, in their migratory form, with nearby coastal seas, and they occur in parts of Europe as a native species, with their native range also extending into parts of western Asia and North Africa. Within fresh water they are found in rivers, streams, and lakes, generally favoring clean, cool conditions. Beyond this native range, the species has been widely introduced to many regions around the world, so populations encountered far from Europe are typically the result of human introduction rather than natural distribution. It is important to distinguish these introduced ranges from the native European, western Asian, and North African range, and the species should not be described as occurring across an entire continent or in every water body within its range.
        </p>
      }
      diet={
        <p>
          The brown trout is a carnivorous predator whose diet shifts with age, size, and habitat. Smaller individuals feed largely on aquatic and terrestrial invertebrates, including insect larvae and adult insects taken from the water surface and the streambed. As they grow, larger trout increasingly prey on other fish and on larger invertebrates, and sea-run individuals feed in coastal waters before returning to fresh water. This flexible, opportunistic feeding is one reason the species can establish itself in a wide range of environments.
        </p>
      }
      behavior={
        <>
          <p>
            Brown trout generally spawn in fresh water, typically in cooler months, when females excavate gravel nests called redds in which eggs are laid and fertilized before being covered. Young fish hatch and grow in fresh water, and individuals may then follow a resident river or lake life history or adopt a migratory sea trout strategy, moving to the sea to feed and later returning to fresh water to spawn. These life-history pathways are not rigidly fixed, and individuals within the same population can differ. Many adults show strong site fidelity, holding feeding and resting positions in suitable stretches of river.
          </p>
          <p>
            As a mid-level to upper-level predator in fresh waters, the brown trout influences populations of the invertebrates and smaller fish it feeds on, while itself serving as prey for larger fish, birds, and mammals. Its presence is often used as an indicator of cool, clean, well-oxygenated water, since the species is sensitive to warming and pollution. Where it has been introduced outside its native range, however, the same predatory and competitive traits can place pressure on native fishes, amphibians, and invertebrates, which is a recurring concern in studies of introduced populations.
          </p>
        </>
      }
      humanInteraction={
        <p>
          The brown trout has a long history of interaction with people across its native range and has been moved widely by humans, which is a major reason it now occurs on several continents. It poses no direct danger to people. The main conservation concerns associated with the species relate to its effects on native wildlife where it has been introduced, as well as to broader pressures on fresh waters such as habitat change, barriers to migration, and warming. The IUCN Red List currently assesses the species as Least Concern, an assessment that can change over time, and questions about introductions, removals, or local water management are best directed to local wildlife authorities and qualified conservation bodies.
        </p>
      }
      faqs={[
        {
          question: "Is the brown trout the same as the sea trout?",
          answer:
            "Yes. Sea trout are simply migratory brown trout that move between fresh water and the sea, while other brown trout remain in rivers or lakes their whole lives; both belong to the species Salmo trutta.",
        },
        {
          question: "Where are brown trout naturally found?",
          answer:
            "Brown trout are native to fresh and coastal waters of parts of Europe, with the native range also extending into parts of western Asia and North Africa. Populations found elsewhere in the world are generally the result of human introduction.",
        },
        {
          question: "Are brown trout endangered?",
          answer:
            "The brown trout is currently assessed as Least Concern on the IUCN Red List. Such assessments reflect current information and can change over time, and the species can still face local pressures.",
        },
        {
          question: "Can brown trout harm other wildlife?",
          answer:
            "Where brown trout have been introduced outside their native range, their predation and competition can affect native fishes, amphibians, and invertebrates. This is a frequent focus of research and is best addressed through local wildlife authorities.",
        },
      ]}
      quickFacts={[
        { label: "Scientific name", value: "Salmo trutta" },
        { label: "Animal group", value: "Ray-finned fish (salmonid)" },
        { label: "Family", value: "Salmonidae (order Salmoniformes)" },
        { label: "Size", value: "Highly variable, from small stream fish to large lake and sea-run individuals" },
        { label: "Diet", value: "Carnivorous; invertebrates and fish" },
        { label: "Habitat", value: "Cool fresh waters and nearby coastal seas" },
        { label: "Range", value: "Native to parts of Europe, western Asia, and North Africa; widely introduced elsewhere" },
        { label: "Conservation status", value: "Least Concern (IUCN Red List)" },
      ]}
      relatedLinks={[
        { label: "Atlantic Salmon", href: "/animals/atlantic-salmon", description: "A close salmonid relative" },
        { label: "Salmon Profile", href: "/animals/salmon", description: "Salmon more broadly" },
        { label: "European Eel", href: "/animals/european-eel", description: "Another European freshwater fish" },
        { label: "European fauna", href: "/fauna/continents/europe", description: "Animals of Europe" },
        { label: "Fish", href: "/animal-encyclopedia/fish" },
      ]}
    />
  );
}
