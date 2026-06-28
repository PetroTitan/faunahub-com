import type { Metadata } from "next";
import AnimalProfileLayout from "@/components/AnimalProfileLayout";
import { ANIMAL_SOURCES } from "@/lib/educational/animal-sources";
import { getAnimalGalleryImages, getAnimalImage, getAnimalOgImage } from "@/lib/images/animal-images";
import { buildArticleMetadata } from "@/lib/metadata";

const PATH = "/animals/chinook-salmon";
const TITLE = "Chinook Salmon: The Largest Pacific Salmon";
const DESC =
  "Learn about the Chinook salmon (Oncorhynchus tshawytscha), the largest Pacific salmon, its anadromous life cycle, ecology, and varied conservation status.";

export const metadata: Metadata = buildArticleMetadata({
  title: TITLE,
  description: DESC,
  path: PATH,
  publishedTime: "2026-06-28",
  modifiedTime: "2026-06-28",
  ogImage: getAnimalOgImage("chinook-salmon"),
});

export default function ChinookSalmonPage() {
  return (
    <AnimalProfileLayout
      commonName="Chinook Salmon"
      scientificName="Oncorhynchus tshawytscha"
      pageTitle={TITLE}
      description={DESC}
      path={PATH}
      parentCategory="Fish"
      parentCategoryHref="/animal-encyclopedia/fish"
      tags={["Fish","Anadromous","Salmonid"]}
      image={getAnimalImage("chinook-salmon") ?? undefined}
      galleryImages={getAnimalGalleryImages("chinook-salmon")}
      sources={ANIMAL_SOURCES["chinook-salmon"]}
      publishedDate="2026-06-28"
      modifiedDate="2026-06-28"
      overview={
        <>
          <p>
            The Chinook salmon (<em>Oncorhynchus tshawytscha</em>), also widely known as the king salmon, is the largest of the Pacific salmon species. It is an anadromous fish, meaning it is born in fresh water, migrates to the ocean to grow and mature, and then returns to fresh water to reproduce. This remarkable life cycle links rivers, estuaries, and the open sea, and it has long made the species a defining presence in the freshwater and coastal ecosystems of western North America.
          </p>
          <p>
            Chinook salmon are native to the North Pacific and the rivers that drain into it, occurring along parts of western North America and parts of north-east Asia. Beyond their native range, the species exists in several different contexts that are worth distinguishing: wild, naturally spawning populations; hatchery-raised fish produced to support runs; and introduced populations established outside the native range, such as those found in the Great Lakes region. Each of these contexts has a different ecological and management story.
          </p>
          <p>
            This profile is educational and ecological in focus. It describes the biology, behavior, and conservation of the Chinook salmon as a wild animal and does not offer any fishing, angling, harvesting, cooking, or food guidance of any kind.
          </p>
          <h3>Taxonomy and animal group</h3>
          <p>
            The Chinook salmon&#39;s scientific name is <em>Oncorhynchus tshawytscha</em>. It belongs to the family Salmonidae, the salmon and trout family, and to the genus <em>Oncorhynchus</em>, which contains the Pacific salmon and several related trout. As a ray-finned fish in the class Actinopterygii, it is part of the order Salmoniformes. The genus name <em>Oncorhynchus</em> refers to the hooked snout that breeding males develop, while the common name Chinook comes from a Pacific Northwest Indigenous people; the alternative name king salmon reflects its standing as the largest member of its genus.
          </p>
          <h3>Appearance and recognition</h3>
          <p>
            Chinook salmon are the largest of the Pacific salmon, and mature adults can be substantial fish, though size varies considerably between individuals and populations. At sea they are typically silvery, with a greenish to bluish back, and they bear small black spots scattered over the upper body and across both lobes of the tail. A useful identifying feature is the dark coloring along the gum line at the base of the teeth, which gives rise to the informal nickname &quot;blackmouth.&quot; As fish return to fresh water and approach spawning, their appearance changes markedly: colors darken toward olive, brown, or reddish tones, and breeding males develop a pronounced hooked jaw, or kype.
          </p>
        </>
      }
      habitat={
        <p>
          Chinook salmon are associated with cool, well-oxygenated waters and use a range of connected habitats over their lifetime. Spawning and early rearing occur in clean gravel-bottomed rivers and streams, after which juveniles move through estuaries into the North Pacific Ocean, where they spend much of their adult life before returning to their natal fresh waters. In North America the species occurs in parts of the west, including river systems draining into the Pacific, and its native distribution also extends to parts of north-east Asia. Introduced populations exist outside this native range as well, notably in parts of the Great Lakes region, where the species was established by people rather than occurring naturally. Native, hatchery-supported, and introduced occurrences should therefore be understood as distinct, and the species is not naturally present everywhere it can now be found.
        </p>
      }
      diet={
        <p>
          Chinook salmon are carnivorous, and their diet shifts as they grow and move between habitats. Juveniles in fresh water and estuaries feed largely on aquatic insects, larvae, and other small invertebrates. Once at sea, they become active predators of smaller fish and larger invertebrates, and this rich marine feeding supports the rapid growth that allows the species to reach its large adult size. After they leave the ocean and begin their upstream spawning migration, adults generally stop feeding, drawing instead on the energy reserves built up at sea to complete the journey and reproduce.
        </p>
      }
      behavior={
        <>
          <p>
            The defining feature of Chinook salmon behavior is their anadromous life cycle and the homing migration that completes it. After years of growth at sea, mature adults navigate back toward the river systems where they hatched, often traveling long distances upstream to reach spawning grounds. Females excavate nests called redds in river gravel and deposit their eggs, which males fertilize, after which the buried eggs incubate over the colder months. Like other Pacific salmon, Chinook are generally semelparous, meaning adults typically die after spawning once; their decomposing bodies then return nutrients to the stream. Run timing varies among populations, with different groups entering fresh water in spring, summer, or fall.
          </p>
          <p>
            Chinook salmon play an important role in the ecosystems they pass through, acting as a link between marine and freshwater environments. They are prey for a wide range of animals at different life stages, and in some regions adult salmon are an important food source for predators such as bears and certain marine mammals. Perhaps most significantly, when adults die after spawning, their bodies transport ocean-derived nutrients far inland, enriching rivers, surrounding soils, and riverside vegetation. Because of these connections, the health of Chinook populations can influence the broader functioning of the watersheds and coastal food webs in which they occur.
          </p>
        </>
      }
      humanInteraction={
        <p>
          On the IUCN Red List, the Chinook salmon is assessed at the species level as Least Concern, an assessment that reflects current understanding and can be revised as conditions change. This single category does not capture the full picture, because conservation status for this species is highly population-specific: while some runs remain abundant, several distinct populations in parts of western North America are protected under United States law as threatened or endangered, reflecting concerns such as habitat alteration, barriers to migration, and changing river conditions. This profile is purely educational and offers no fishing, angling, harvesting, caviar, cooking, or food guidance of any kind. People with questions about the status of a particular run or about local rules should consult the relevant fisheries or wildlife authorities.
        </p>
      }
      faqs={[
        {
          question: "Why is the Chinook salmon also called king salmon?",
          answer:
            "The name king salmon reflects its status as the largest of the Pacific salmon species. The name Chinook comes from a Pacific Northwest Indigenous people, and both names refer to the same fish, Oncorhynchus tshawytscha.",
        },
        {
          question: "What does anadromous mean for the Chinook salmon?",
          answer:
            "Anadromous means the fish is born in fresh water, migrates to the ocean to grow and mature, and then returns to fresh water to spawn. Chinook salmon complete this full cycle, often returning to the same river system where they hatched.",
        },
        {
          question: "Is the Chinook salmon native to the Great Lakes?",
          answer:
            "No. The species is native to the North Pacific and rivers of parts of western North America and north-east Asia. The Chinook salmon found in parts of the Great Lakes region were introduced by people and represent established non-native populations.",
        },
        {
          question: "What is the conservation status of the Chinook salmon?",
          answer:
            "The IUCN Red List assesses the species overall as Least Concern, an assessment that can change over time. However, status is population-specific: some runs are abundant while several distinct populations in parts of western North America are protected under United States law as threatened or endangered.",
        },
      ]}
      quickFacts={[
        { label: "Scientific name", value: "Oncorhynchus tshawytscha" },
        { label: "Animal group", value: "Ray-finned fish (anadromous)" },
        { label: "Family", value: "Salmonidae (salmon and trout)" },
        { label: "Size", value: "Largest of the Pacific salmon species" },
        { label: "Diet", value: "Carnivorous; invertebrates as juveniles, fish at sea" },
        { label: "Habitat", value: "Clean gravel rivers, estuaries, and the North Pacific" },
        { label: "Range", value: "Parts of western North America and north-east Asia; introduced elsewhere" },
        { label: "Conservation status", value: "IUCN Least Concern overall; some runs protected as threatened/endangered" },
      ]}
      relatedLinks={[
        { label: "Salmon Profile", href: "/animals/salmon", description: "Salmon more broadly" },
        { label: "Lake Sturgeon", href: "/animals/lake-sturgeon", description: "Another North American freshwater fish" },
        { label: "Alligator Gar", href: "/animals/alligator-gar", description: "An ancient North American fish" },
        { label: "North American fauna", href: "/fauna/continents/north-america", description: "Animals of North America" },
        { label: "Fish", href: "/animal-encyclopedia/fish" },
      ]}
    />
  );
}
