import type { Metadata } from "next";
import AnimalProfileLayout from "@/components/AnimalProfileLayout";
import { ANIMAL_SOURCES } from "@/lib/educational/animal-sources";
import { getAnimalGalleryImages, getAnimalImage, getAnimalOgImage } from "@/lib/images/animal-images";
import { buildArticleMetadata } from "@/lib/metadata";

const PATH = "/animals/andean-condor";
const TITLE = "Andean Condor: Facts, Habitat & Behavior";
const DESC =
  "The Andean Condor is a large New World vulture of the Andes and nearby coasts. Learn about its appearance, soaring flight, ecology, and conservation.";

export const metadata: Metadata = buildArticleMetadata({
  title: TITLE,
  description: DESC,
  path: PATH,
  publishedTime: "2026-06-28",
  modifiedTime: "2026-06-28",
  ogImage: getAnimalOgImage("andean-condor"),
});

export default function AndeanCondorPage() {
  return (
    <AnimalProfileLayout
      commonName="Andean Condor"
      scientificName="Vultur gryphus"
      pageTitle={TITLE}
      description={DESC}
      path={PATH}
      parentCategory="Birds"
      parentCategoryHref="/animal-encyclopedia/birds"
      tags={["Bird","Vulture","Andes"]}
      image={getAnimalImage("andean-condor") ?? undefined}
      galleryImages={getAnimalGalleryImages("andean-condor")}
      sources={ANIMAL_SOURCES["andean-condor"]}
      publishedDate="2026-06-28"
      modifiedDate="2026-06-28"
      overview={
        <>
          <p>
            The Andean Condor (<em>Vultur gryphus</em>) is a large New World vulture associated with the Andes mountains and adjacent coastal regions in parts of South America. By the combined measure of wingspan and body weight, it is among the largest flying birds in the world, and it is often described as a master of soaring flight, using rising mountain air currents to travel long distances with relatively little wing-flapping.
          </p>
          <p>
            As a scavenger, the Andean Condor feeds mainly on carrion and plays an important sanitary role in the ecosystems where it occurs. It is also a prominent cultural symbol in several Andean countries, appearing in folklore, national emblems, and traditional art. On the IUCN Red List it is currently assessed as Vulnerable, an assessment that reflects ongoing conservation concern and that can change as new information becomes available.
          </p>
          <p>
            This profile offers a calm, educational overview of the species, its biology, and its place in Andean ecosystems. It is not a guide to keeping, handling, or approaching the bird, and any wildlife concerns should be directed to local wildlife authorities.
          </p>
          <h3>Taxonomy and animal group</h3>
          <p>
            The Andean Condor is a bird scientifically named <em>Vultur gryphus</em>. It belongs to the family Cathartidae, the New World vultures, and is the only living member of the genus <em>Vultur</em>. It is commonly placed in the order Cathartiformes, though some authorities instead group the New World vultures within Accipitriformes, so the higher-level placement is treated differently across classifications. Despite the shared name and scavenging habits, New World vultures such as the Andean Condor are not closely related to the Old World vultures of Africa and Eurasia; the resemblance reflects convergent adaptation to a scavenging lifestyle rather than recent common ancestry.
          </p>
          <h3>Appearance and recognition</h3>
          <p>
            Adult Andean Condors have predominantly black plumage with a distinctive ruff of white feathers around the base of the neck and broad white patches on the upper surface of the wings, most visible in males. The head and neck are largely bare, with skin that can appear dull reddish or grayish and that may flush more brightly during social interactions. Males typically carry a fleshy comb or caruncle on the crown, which females lack, making this the New World vulture that shows clear visual differences between the sexes; reported eye color can also differ between males and females. In flight, the species is recognized by its very broad wings with deeply fingered primary feathers at the tips, held nearly flat as the bird rides updrafts.
          </p>
        </>
      }
      habitat={
        <p>
          The Andean Condor is associated with the Andes mountain chain and nearby coastal areas in parts of South America, rather than with the continent as a whole. It favors open and semi-open landscapes such as high mountain grasslands, rocky cliffs, plateaus, and adjacent foothills, and in some regions it ranges down to coastal zones where carrion is available along shorelines. Cliffs and high ledges are important as roosting and nesting sites, while wide-open terrain and reliable wind currents support the long soaring flights on which the species depends. Its distribution is patchy and shaped by the availability of suitable habitat, food, and undisturbed nesting areas.
        </p>
      }
      diet={
        <p>
          The Andean Condor is primarily a scavenger and feeds mostly on carrion, locating the carcasses of large mammals and other animals as it soars over open country. It often relies on keen eyesight and on the activity of other animals to find food, and groups may gather at a single large carcass. Like other New World vultures, it generally does not kill healthy prey, instead consuming animals that are already dead. Birds in coastal areas may also feed on the remains of marine animals washed ashore. By consuming carrion, the species helps recycle nutrients and limits the spread of material that might otherwise decay in place.
        </p>
      }
      behavior={
        <>
          <p>
            Andean Condors are long-lived birds with a slow pace of reproduction, typically forming lasting pair bonds and raising very few young over many years. Nests are usually placed on inaccessible cliff ledges or in caves, and a clutch generally consists of a single egg, with parents sharing incubation and the prolonged care of the chick. Young birds take several years to reach the full adult plumage and to mature, and the species is not known for rapid population growth. Outside the breeding season, condors may roost communally on cliffs and gather at feeding sites, and much of the daily routine is organized around weather and the rising air currents that make efficient soaring possible.
          </p>
          <p>
            As one of the largest scavenging birds of the Andes, the Andean Condor occupies an important position in its ecosystems by consuming carrion and helping to clean the landscape of animal remains. This scavenging role contributes to nutrient cycling and can reduce the persistence of carcasses that might otherwise support disease. Because the species ranges widely and depends on healthy populations of the animals whose remains it consumes, its presence is often regarded as an indicator of relatively intact mountain and coastal environments. Its slow reproduction means that the population is sensitive to changes in survival, underscoring its ecological vulnerability.
          </p>
        </>
      }
      humanInteraction={
        <p>
          The Andean Condor holds deep cultural significance in several Andean countries, where it features in traditional stories, art, and national symbols. On the IUCN Red List it is assessed as Vulnerable, a status that reflects conservation concern and that may be revised as circumstances change; documented pressures on scavenging birds elsewhere include habitat change, disturbance at nesting sites, and poisoning linked to contaminated carcasses. This is a wild bird and not a pet, and it should never be approached, fed, handled, or captured; anyone who encounters an injured, distressed, or deceased condor, or who has concerns about wildlife conflict, should contact local wildlife authorities rather than intervening directly. Supporting protected areas and lawful conservation programs is the appropriate way for people to help the species.
        </p>
      }
      faqs={[
        {
          question: "Is the Andean Condor a vulture or an eagle?",
          answer:
            "It is a vulture, specifically a New World vulture in the family Cathartidae. Despite its large size and soaring flight, it is a scavenger rather than a hunting raptor like an eagle.",
        },
        {
          question: "Where is the Andean Condor found?",
          answer:
            "It is associated with the Andes mountains and nearby coastal areas in parts of South America. Its distribution is patchy and tied to open terrain, suitable cliffs for nesting, and available carrion, rather than spanning the whole continent.",
        },
        {
          question: "What does the Andean Condor eat?",
          answer:
            "It feeds mainly on carrion, especially the carcasses of large mammals, and birds in coastal areas may also scavenge marine remains. It generally does not kill healthy prey.",
        },
        {
          question: "What is the conservation status of the Andean Condor?",
          answer:
            "The IUCN Red List assesses the Andean Condor as Vulnerable. This is a changeable assessment that reflects conservation concern, and concerns about wildlife should be directed to local wildlife authorities.",
        },
      ]}
      quickFacts={[
        { label: "Scientific name", value: "Vultur gryphus" },
        { label: "Animal group", value: "Bird (New World vulture)" },
        { label: "Family/order", value: "Cathartidae; order Cathartiformes (sometimes placed in Accipitriformes)" },
        { label: "Size", value: "Among the largest flying birds by combined wingspan and weight" },
        { label: "Diet", value: "Scavenger; mainly carrion" },
        { label: "Habitat", value: "Mountain grasslands, cliffs, plateaus, and some coastal zones" },
        { label: "Range", value: "Andes and nearby coasts in parts of South America" },
        { label: "Conservation status", value: "Vulnerable (IUCN Red List; a changeable assessment)" },
      ]}
      relatedLinks={[
        { label: "Vulture", href: "/animals/vulture", description: "Vultures more broadly" },
        { label: "King Vulture", href: "/animals/king-vulture", description: "Another New World vulture" },
        { label: "Harpy Eagle", href: "/animals/harpy-eagle", description: "Another giant South American bird" },
        { label: "South American fauna", href: "/fauna/continents/south-america", description: "Animals of South America" },
        { label: "Birds", href: "/animal-encyclopedia/birds" },
      ]}
    />
  );
}
