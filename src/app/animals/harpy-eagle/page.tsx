import type { Metadata } from "next";
import AnimalProfileLayout from "@/components/AnimalProfileLayout";
import { ANIMAL_SOURCES } from "@/lib/educational/animal-sources";
import { getAnimalGalleryImages, getAnimalImage, getAnimalOgImage } from "@/lib/images/animal-images";
import { buildArticleMetadata } from "@/lib/metadata";

const PATH = "/animals/harpy-eagle";
const TITLE = "Harpy Eagle: Rainforest Raptor of the Americas";
const DESC =
  "The harpy eagle is one of the largest, most powerful raptors of lowland tropical rainforest in parts of Central and South America. An educational profile.";

export const metadata: Metadata = buildArticleMetadata({
  title: TITLE,
  description: DESC,
  path: PATH,
  publishedTime: "2026-06-28",
  modifiedTime: "2026-06-28",
  ogImage: getAnimalOgImage("harpy-eagle"),
});

export default function HarpyEaglePage() {
  return (
    <AnimalProfileLayout
      commonName="Harpy Eagle"
      scientificName="Harpia harpyja"
      pageTitle={TITLE}
      description={DESC}
      path={PATH}
      parentCategory="Birds"
      parentCategoryHref="/animal-encyclopedia/birds"
      tags={["Bird","Bird of prey","Rainforest"]}
      image={getAnimalImage("harpy-eagle") ?? undefined}
      galleryImages={getAnimalGalleryImages("harpy-eagle")}
      sources={ANIMAL_SOURCES["harpy-eagle"]}
      publishedDate="2026-06-28"
      modifiedDate="2026-06-28"
      overview={
        <>
          <p>
            The harpy eagle (<em>Harpia harpyja</em>) is one of the largest and most powerful eagles in the world, a bird of prey associated with lowland tropical rainforest in parts of Central and South America. It is best known for its great size, immensely strong feet and talons, and the distinctive double crest of feathers it can raise on its head. As a top forest predator, it hunts within and beneath the rainforest canopy rather than soaring high in the open sky.
          </p>
          <p>
            This profile is intended as an educational overview of the harpy eagle&#39;s biology, ecology, and conservation context. The species is closely tied to large, undisturbed tracts of forest, which makes it both a striking symbol of tropical rainforest health and a focus of conservation concern. The IUCN Red List assesses the harpy eagle as Vulnerable, a category it was placed in after a reassessment from the earlier listing of Near Threatened.
          </p>
          <p>
            Because the harpy eagle depends on extensive forest and on healthy populations of tree-dwelling prey, it is often discussed by researchers as an indicator of intact rainforest ecosystems. Its slow reproduction and large territory requirements mean that local declines can be difficult to reverse, underscoring why it draws ongoing scientific and conservation attention.
          </p>
          <h3>Taxonomy and animal group</h3>
          <p>
            The harpy eagle is classified scientifically as <em>Harpia harpyja</em> and is the only living species placed in the genus <em>Harpia</em>. It belongs to the family Accipitridae, the broad group of hawks, eagles, and allied birds of prey, within the order Accipitriformes. Within that family it is grouped alongside other large tropical forest raptors, such as those in the genera <em>Morphnus</em> and <em>Harpyopsis</em>, that are sometimes loosely called harpy or harpy-like eagles, but <em>Harpia harpyja</em> itself is a distinct, single species rather than a complex of several. It is a bird, and more specifically a diurnal raptor adapted to hunting in forested environments.
          </p>
          <h3>Appearance and recognition</h3>
          <p>
            The harpy eagle is a very large, heavily built raptor with broad, relatively short wings suited to maneuvering among trees rather than long-distance soaring. Its most recognizable features are its powerful legs and exceptionally large talons, which are among the largest of any eagle, and the crown of long feathers that forms a divided crest the bird can raise into a fan. The plumage is generally slate-gray to black above and pale below, with a gray head and a barred band across the upper chest, while the face often appears framed by ruffled feathers. Females are noticeably larger and heavier than males, a size difference common among birds of prey, and young birds are paler overall before acquiring full adult coloration.
          </p>
        </>
      }
      habitat={
        <p>
          The harpy eagle is associated with lowland tropical rainforest and is found in parts of Central and South America, where it occurs in regions of continuous, largely undisturbed forest. Its distribution is patchy across this broad area, and it is generally tied to large blocks of intact lowland forest rather than to open or heavily cleared land. The species occurs in parts of the Amazon Basin and adjacent forested regions, extending in places northward through parts of Central America. It is not native to all of South America or the entire continent; instead it persists where suitable canopy forest and adequate prey remain, and it has become far more localized or absent in areas where forest has been fragmented.
        </p>
      }
      diet={
        <p>
          The harpy eagle is a carnivorous predator that hunts mainly tree-dwelling mammals within the rainforest canopy and mid-levels. Sloths and monkeys are among its characteristic prey, and it may also take other arboreal animals such as opossums and, at times, birds and reptiles. Rather than soaring in search of food, it typically perches quietly and watches before making a swift, agile attack through the trees, using its large feet and talons to seize prey. Its diet reflects its role as one of the principal canopy-hunting predators across the forests where it lives.
        </p>
      }
      behavior={
        <>
          <p>
            Harpy eagles are generally solitary or found in pairs and maintain large home ranges within forested habitat. They are known for slow, deliberate hunting behavior, often spending long periods perched and watching for movement in the canopy. Breeding pairs build large stick nests high in tall emergent trees and typically raise very few young, investing extended parental care in a single chick over a prolonged period before it becomes independent. This low reproductive rate, combined with the long time young birds depend on their parents, means that harpy eagle populations grow slowly and recover gradually from losses.
          </p>
          <p>
            As a large apex predator of the rainforest canopy, the harpy eagle plays an important role in the ecosystems where it occurs by helping to influence the numbers and behavior of the arboreal mammals it hunts. Top predators like this can shape the balance of prey populations, with effects that may ripple through the wider food web. Because the species requires extensive, healthy forest and abundant tree-dwelling prey, its presence is often regarded by researchers as a sign of a relatively intact and functioning rainforest ecosystem, making it a useful focus for habitat conservation.
          </p>
        </>
      }
      humanInteraction={
        <p>
          The harpy eagle is assessed by the IUCN Red List as Vulnerable, a status that was reached after reassessment from a previous listing of Near Threatened; like all such assessments, it can change as new information becomes available. The main pressures on the species are linked to the loss and fragmentation of the lowland forest it depends on, along with localized human-related threats. The harpy eagle is a wild, free-living raptor and is not a pet; observing or interacting with wild eagles should be left to trained professionals, and concerns about injured birds or wildlife conflict are best directed to local wildlife authorities. Supporting the conservation of large, connected areas of tropical forest is widely seen as central to this species&#39; future.
        </p>
      }
      faqs={[
        {
          question: "What is the conservation status of the harpy eagle?",
          answer:
            "The IUCN Red List assesses the harpy eagle as Vulnerable, a category it was placed in after a reassessment from the earlier Near Threatened listing. Like all Red List assessments, this status can be revised as new information is gathered.",
        },
        {
          question: "Where do harpy eagles live?",
          answer:
            "Harpy eagles are associated with lowland tropical rainforest and are found in parts of Central and South America, including parts of the Amazon Basin. They depend on large, largely intact blocks of forest and do not occur across the entire continent.",
        },
        {
          question: "What do harpy eagles eat?",
          answer:
            "They are carnivorous predators that hunt mainly tree-dwelling mammals such as sloths and monkeys within the rainforest canopy. They may also take other arboreal animals, and occasionally birds or reptiles.",
        },
        {
          question: "Is the harpy eagle dangerous to people?",
          answer:
            "The harpy eagle is a wild forest raptor that hunts tree-dwelling animals, not people, and it is not a pet. Wild eagles should be observed from a distance, and any concerns about injured birds or wildlife conflict should be directed to local wildlife authorities.",
        },
      ]}
      quickFacts={[
        { label: "Scientific name", value: "Harpia harpyja" },
        { label: "Animal group", value: "Bird (diurnal raptor / bird of prey)" },
        { label: "Family/order", value: "Accipitridae; Accipitriformes" },
        { label: "Size", value: "Very large eagle; females larger than males, with notably large talons" },
        { label: "Diet", value: "Carnivore; mainly tree-dwelling mammals such as sloths and monkeys" },
        { label: "Habitat", value: "Lowland tropical rainforest canopy" },
        { label: "Range", value: "Parts of Central and South America, in regions of intact forest" },
        { label: "Conservation status", value: "IUCN Red List: Vulnerable (reassessed from Near Threatened)" },
      ]}
      relatedLinks={[
        { label: "Eagle", href: "/animals/eagle", description: "Eagles more broadly" },
        { label: "Andean Condor", href: "/animals/andean-condor", description: "Another huge South American bird" },
        { label: "Vulture", href: "/animals/vulture", description: "Another large raptor" },
        { label: "South American fauna", href: "/fauna/continents/south-america", description: "Animals of South America" },
        { label: "Endangered Animals", href: "/endangered-animals", description: "Conservation status & the Red List" },
      ]}
    />
  );
}
