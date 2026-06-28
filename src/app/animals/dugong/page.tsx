import type { Metadata } from "next";
import AnimalProfileLayout from "@/components/AnimalProfileLayout";
import { ANIMAL_SOURCES } from "@/lib/educational/animal-sources";
import { getAnimalGalleryImages, getAnimalImage, getAnimalOgImage } from "@/lib/images/animal-images";
import { buildArticleMetadata } from "@/lib/metadata";

const PATH = "/animals/dugong";
const TITLE = "Dugong: Seagrass-Grazing Marine Mammal";
const DESC =
  "The dugong (Dugong dugon) is a slow seagrass-grazing marine mammal of warm Indo-Pacific coastal waters. Learn its biology, ecology and IUCN status.";

export const metadata: Metadata = buildArticleMetadata({
  title: TITLE,
  description: DESC,
  path: PATH,
  publishedTime: "2026-06-28",
  modifiedTime: "2026-06-28",
  ogImage: getAnimalOgImage("dugong"),
});

export default function DugongPage() {
  return (
    <AnimalProfileLayout
      commonName="Dugong"
      scientificName="Dugong dugon"
      pageTitle={TITLE}
      description={DESC}
      path={PATH}
      parentCategory="Mammals"
      parentCategoryHref="/animal-encyclopedia/mammals"
      tags={["Mammal","Sirenian","Marine"]}
      image={getAnimalImage("dugong") ?? undefined}
      galleryImages={getAnimalGalleryImages("dugong")}
      sources={ANIMAL_SOURCES["dugong"]}
      publishedDate="2026-06-28"
      modifiedDate="2026-06-28"
      overview={
        <>
          <p>
            The dugong (<em>Dugong dugon</em>) is a large, slow-moving marine mammal belonging to the order Sirenia, the group that also includes the manatees. Unlike whales and dolphins, sirenians are herbivores that spend their lives grazing on submerged vegetation, and the dugong is the only living member of its family that feeds almost exclusively on seagrass. It is fully aquatic, gentle in its movements, and adapted to warm, shallow coastal seas.
          </p>
          <p>
            Dugongs are associated with warm shallow coastal waters and seagrass meadows across parts of the Indo-Pacific, a broad region that spans tropical and subtropical coastal seas from East Africa across the Indian Ocean to parts of the western Pacific, including northern Australian waters. They are a marine and coastal species, never found on land, and their distribution closely tracks the availability of healthy seagrass beds rather than any single country or continent.
          </p>
          <p>
            The IUCN Red List currently assesses the dugong as Vulnerable at the global level. Conservation assessments are periodic and can change as new information becomes available, and the status of populations can differ from region to region. Because dugongs are long-lived and reproduce slowly, they are considered sensitive to disturbance and to the loss of the seagrass habitats on which they depend.
          </p>
          <h3>Taxonomy and animal group</h3>
          <p>
            The dugong, <em>Dugong dugon</em>, is a marine mammal in the order Sirenia and is the sole living species in the family Dugongidae. Sirenians are sometimes called sea cows, a reference to their grazing habits, and the dugong&#39;s closest living relatives are the manatees of the family Trichechidae. Although superficially similar in body shape to seals or to cetaceans, sirenians are a distinct lineage of fully aquatic, plant-eating mammals, and the dugong is set apart from manatees by features such as its fluked, dolphin-like tail.
          </p>
          <h3>Appearance and recognition</h3>
          <p>
            A dugong has a large, rounded, torpedo-shaped body that can reach roughly three metres in length in mature animals, with smooth, thick skin that is typically grey to brownish in tone. Its most distinctive features are a broad, downturned snout adapted for grazing along the seafloor, paddle-like forelimbs, no visible hind limbs, and a deeply notched, whale-like tail fluke that distinguishes it from the paddle-shaped tail of a manatee. The face bears stiff, sensitive bristles around the mouth that help the animal locate and handle seagrass, and the eyes and nostrils are small, with the nostrils set so the animal can breathe at the surface with little of its body exposed.
          </p>
        </>
      }
      habitat={
        <p>
          Dugongs are found in warm, shallow coastal and marine waters of parts of the Indo-Pacific, where they are closely tied to seagrass meadows growing in sheltered bays, broad shallow banks, and the calm waters of lagoons and inlets. Their range extends across tropical and subtropical coastal seas from East Africa and the Indian Ocean to parts of the western Pacific, including northern Australian waters, always following the distribution of suitable seagrass rather than spanning any region in full. This is a marine and coastal species; it does not occur on land or in fresh inland habitats, and it should not be described as native to all of Oceania, since its presence is patchy and depends on where healthy seagrass beds remain.
        </p>
      }
      diet={
        <p>
          The dugong is a specialised herbivore that grazes almost entirely on seagrasses, using its broad, mobile snout and sensitive facial bristles to crop and uproot plants from the seafloor. It tends to favour softer, more nutritious seagrass species and often feeds in ways that disturb the sediment, leaving meandering feeding trails through a meadow. Because its diet is low in energy, a dugong spends much of its time feeding, and its presence in an area is generally limited by how much seagrass is available to sustain it.
        </p>
      }
      behavior={
        <>
          <p>
            Dugongs are generally slow, deliberate swimmers that surface regularly to breathe and may be seen alone, in pairs, or in loose groupings where feeding conditions are good. They are long-lived animals with a slow rate of reproduction, typically producing a single calf after a long gestation and caring for that calf over an extended period, which means populations recover slowly from losses. Their movements are shaped largely by the seasonal and local condition of seagrass meadows, and individuals may travel between feeding areas as conditions change.
          </p>
          <p>
            As large seagrass grazers, dugongs play a meaningful role in the ecology of the shallow coastal meadows they inhabit. Their feeding can influence the structure and species makeup of seagrass beds, and the disturbance they create while grazing may affect how those plant communities grow and recycle nutrients. Healthy dugong populations are often regarded as an indicator of healthy seagrass habitat, since both depend on clear, productive coastal waters, linking the well-being of the animal to the condition of one of the sea&#39;s important shallow-water ecosystems.
          </p>
        </>
      }
      humanInteraction={
        <p>
          The dugong is assessed as Vulnerable on the IUCN Red List, and conservation concern centres on the loss and degradation of seagrass habitat, disturbance in coastal waters, and incidental harm. It is a gentle, non-aggressive marine herbivore and is not a pet or an animal to be handled; it is best appreciated through observation at a respectful distance that does not disturb it. Anyone who encounters an injured, stranded, or distressed dugong should contact local wildlife authorities rather than intervening, and questions about regional protections or sightings are best directed to those authorities and recognised conservation organisations.
        </p>
      }
      faqs={[
        {
          question: "Is a dugong the same as a manatee?",
          answer:
            "No. Both are sirenians, or sea cows, and they are closely related, but the dugong (Dugong dugon) is a separate species in its own family and can be distinguished by its fluked, whale-like tail, whereas manatees have a rounded, paddle-shaped tail.",
        },
        {
          question: "What do dugongs eat?",
          answer:
            "Dugongs are herbivores that feed almost entirely on seagrass, grazing it from the seafloor of shallow coastal waters. Because seagrass is low in energy, they spend much of their time feeding.",
        },
        {
          question: "Where are dugongs found?",
          answer:
            "They live in warm, shallow coastal and marine waters of parts of the Indo-Pacific, ranging from East Africa and the Indian Ocean to parts of the western Pacific, including northern Australian waters. Their distribution closely follows the location of healthy seagrass meadows rather than covering any region completely.",
        },
        {
          question: "Are dugongs dangerous to people?",
          answer:
            "Dugongs are slow, gentle plant-eaters and are not considered dangerous. They are wild marine mammals, not pets, and an injured or stranded dugong should be reported to local wildlife authorities rather than approached.",
        },
      ]}
      quickFacts={[
        { label: "Scientific name", value: "Dugong dugon" },
        { label: "Animal group", value: "Marine mammal (sirenian)" },
        { label: "Family/order", value: "Dugongidae; order Sirenia" },
        { label: "Size", value: "Up to about 3 m in length" },
        { label: "Diet", value: "Herbivore; grazes on seagrass" },
        { label: "Habitat", value: "Warm shallow coastal seas and seagrass meadows" },
        { label: "Range", value: "Parts of the Indo-Pacific, including northern Australian waters" },
        { label: "Conservation status", value: "Vulnerable (IUCN Red List; assessment can change)" },
      ]}
      relatedLinks={[
        { label: "Whale", href: "/animals/whale", description: "Another marine mammal" },
        { label: "Dolphin", href: "/animals/dolphin", description: "Another marine mammal" },
        { label: "Seal", href: "/animals/seal", description: "Another marine mammal" },
        { label: "Oceania fauna", href: "/fauna/continents/oceania", description: "Animals of Oceania" },
        { label: "Endangered Animals", href: "/endangered-animals", description: "Conservation status & the Red List" },
      ]}
    />
  );
}
