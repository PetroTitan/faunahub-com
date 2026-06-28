import type { Metadata } from "next";
import AnimalProfileLayout from "@/components/AnimalProfileLayout";
import { ANIMAL_SOURCES } from "@/lib/educational/animal-sources";
import { getAnimalGalleryImages, getAnimalImage, getAnimalOgImage } from "@/lib/images/animal-images";
import { buildArticleMetadata } from "@/lib/metadata";

const PATH = "/animals/polar-bear";
const TITLE = "Polar Bear: Arctic Sea-Ice Marine Mammal";
const DESC =
  "Learn about the polar bear (Ursus maritimus), a white-furred Arctic bear that depends on sea ice to hunt seals, listed as Vulnerable by the IUCN.";

export const metadata: Metadata = buildArticleMetadata({
  title: TITLE,
  description: DESC,
  path: PATH,
  publishedTime: "2026-06-28",
  modifiedTime: "2026-06-28",
  ogImage: getAnimalOgImage("polar-bear"),
});

export default function PolarBearPage() {
  return (
    <AnimalProfileLayout
      commonName="Polar Bear"
      scientificName="Ursus maritimus"
      pageTitle={TITLE}
      description={DESC}
      path={PATH}
      parentCategory="Mammals"
      parentCategoryHref="/animal-encyclopedia/mammals"
      tags={["Mammal","Marine mammal","Arctic"]}
      image={getAnimalImage("polar-bear") ?? undefined}
      galleryImages={getAnimalGalleryImages("polar-bear")}
      sources={ANIMAL_SOURCES["polar-bear"]}
      publishedDate="2026-06-28"
      modifiedDate="2026-06-28"
      overview={
        <>
          <p>
            The polar bear (<em>Ursus maritimus</em>) is a large, white-furred bear of the Arctic and one of the most recognizable mammals on Earth. Although it is a member of the bear family, it is often considered a marine mammal because so much of its life is tied to the sea: it depends on Arctic sea ice as a platform from which to hunt seals, its principal prey. This close connection to the frozen ocean sets the polar bear apart from other bears and shapes nearly every aspect of its biology and behavior.
          </p>
          <p>
            Polar bears have a circumpolar distribution, occurring in parts of the Arctic that include northern North America as well as Arctic regions of Europe and Asia. They are superbly adapted to extreme cold, with dense fur, a thick layer of fat, and a build suited to traveling across ice and swimming long distances in frigid water. This profile is intended as a calm, educational overview of the species and its ecology, not as a guide to encountering or interacting with wild bears.
          </p>
          <p>
            The species is currently assessed as Vulnerable on the IUCN Red List. Conservation discussions around polar bears center on the long-term loss of Arctic sea ice associated with a warming climate, since the ice is essential to how the bears find and catch food. Such assessments reflect current scientific understanding and can be revised over time as conditions and data change.
          </p>
          <h3>Taxonomy and animal group</h3>
          <p>
            The polar bear belongs to the order Carnivora and the bear family, Ursidae, and carries the scientific name <em>Ursus maritimus</em>, which is often rendered as &quot;sea bear&quot; and reflects its strong link to the marine environment. It is one of several species in the genus <em>Ursus</em>, and is closely related to the brown bear, <em>Ursus arctos</em>. Despite this relationship, the polar bear is a distinct species with a suite of adaptations to Arctic life. It is a true bear, a placental mammal, and is frequently categorized alongside marine mammals because of its dependence on sea ice and ocean-based prey.
          </p>
          <h3>Appearance and recognition</h3>
          <p>
            Polar bears are among the largest living bears, with a long body, a relatively small head, and a streamlined profile that aids swimming. Their most distinctive feature is the pale, cream-to-white coat, which provides camouflage against snow and ice; the hairs are actually translucent and hollow, while the skin beneath is dark. They have large, broad paws that help distribute weight on thin ice and act as paddles in the water, along with strong claws suited to gripping prey and slippery surfaces. A thick layer of body fat and dense fur insulate them against extreme cold. Males are generally considerably larger and heavier than females, a common pattern of size difference between the sexes in bears.
          </p>
        </>
      }
      habitat={
        <p>
          Polar bears are associated with sea-ice environments across parts of the Arctic, including northern North America, and their range is circumpolar rather than spanning any single continent. Within North America they occur in parts of the far north, particularly Arctic coastal and pack-ice regions, and they should not be thought of as living across the entire continent or throughout all of North America. The bears favor areas where sea ice meets productive waters rich in seals, and many populations move seasonally as the ice advances and retreats. Some individuals spend time on land during periods when ice is reduced, but the sea ice remains central to their preferred hunting habitat.
        </p>
      }
      diet={
        <p>
          The polar bear is a specialized carnivore whose diet centers on seals, especially ringed and bearded seals, which it typically hunts from the sea ice. A common strategy is to wait patiently near breathing holes or to stalk seals resting on the ice, relying on the ice as a hunting platform. The fat-rich blubber of seals provides the high-energy nutrition the bears need to survive in the cold. When seals are unavailable, polar bears may opportunistically feed on carcasses, such as those of whales, and occasionally other foods, but their feeding ecology is tightly bound to ice-associated marine prey. This dependence on the ice for hunting is a key reason the loss of sea ice is so significant for the species.
        </p>
      }
      behavior={
        <>
          <p>
            Polar bears are generally solitary animals outside of mating and family groups, and they range widely across ice and water in search of food. They are strong, capable swimmers and can cover long distances between ice floes. Females typically give birth in dens, often dug into snow, where cubs are born small and helpless during the cold season and remain with their mother for an extended period while they grow and learn to hunt. Bears may travel large distances over the course of a year, following the seasonal movement of sea ice. Much of their daily behavior revolves around conserving energy, hunting, and, for mothers, raising and protecting their young.
          </p>
          <p>
            As one of the top predators of the Arctic marine ecosystem, the polar bear plays an important ecological role in regulating seal populations and is closely tied to the health of sea-ice habitats. Its presence and condition are often regarded as indicators of broader changes in the Arctic environment, since the bear depends on a stable ice platform and on the productivity of the waters below. Carcasses left by polar bears can also provide food for scavengers such as Arctic foxes and birds, linking the bear to other parts of the food web. Because it sits near the top of its food chain, changes affecting the polar bear can reflect wider shifts across the Arctic system.
          </p>
        </>
      }
      humanInteraction={
        <p>
          Polar bears are large wild predators and should be observed only from a safe distance and with appropriate caution; they are not pets and should never be approached, fed, or handled. Anyone living, working, or traveling in regions where polar bears occur should follow guidance from and report concerns to local wildlife authorities, who manage human-wildlife safety. From a conservation standpoint, the species is assessed as Vulnerable on the IUCN Red List, with the long-term loss of sea ice from a warming climate identified as the central concern for its future; this is an assessment that may be updated as scientific understanding develops. Education, habitat protection, and international cooperation are commonly emphasized in efforts to support the species.
        </p>
      }
      faqs={[
        {
          question: "Why is the polar bear considered a marine mammal?",
          answer:
            "Polar bears are often classified as marine mammals because they depend on Arctic sea ice as a platform to hunt seals and spend much of their lives in close connection with the sea. This reliance on the marine environment distinguishes them from other bears.",
        },
        {
          question: "Where do polar bears live?",
          answer:
            "Polar bears have a circumpolar distribution across parts of the Arctic, including northern North America as well as Arctic regions of Europe and Asia. They are tied to sea-ice habitats and do not live across all of North America.",
        },
        {
          question: "What is the conservation status of the polar bear?",
          answer:
            "The polar bear is currently assessed as Vulnerable on the IUCN Red List. The long-term loss of Arctic sea ice associated with a warming climate is identified as the central concern, and such assessments can change over time as conditions and data are updated.",
        },
        {
          question: "What should people do if they encounter a polar bear?",
          answer:
            "Polar bears are large wild predators and should be observed only from a safe distance, never approached or fed. Any safety concerns or sightings in inhabited or working areas should be directed to local wildlife authorities, who manage human-wildlife interactions.",
        },
      ]}
      quickFacts={[
        { label: "Scientific name", value: "Ursus maritimus" },
        { label: "Animal group", value: "Mammal (often classed as a marine mammal)" },
        { label: "Family", value: "Ursidae (bear family), order Carnivora" },
        { label: "Size", value: "Among the largest living bears; males generally larger than females" },
        { label: "Diet", value: "Carnivorous; mainly seals hunted from sea ice" },
        { label: "Habitat", value: "Arctic sea ice and associated coastal regions" },
        { label: "Range", value: "Circumpolar Arctic, including parts of northern North America" },
        { label: "Conservation status", value: "Vulnerable on the IUCN Red List (assessment can change)" },
      ]}
      relatedLinks={[
        { label: "American Black Bear", href: "/animals/american-black-bear", description: "Another North American bear" },
        { label: "Bear Profile", href: "/animals/bear", description: "Bears more broadly" },
        { label: "Arctic Fox", href: "/animals/arctic-fox", description: "Another Arctic mammal" },
        { label: "North American fauna", href: "/fauna/continents/north-america", description: "Animals of North America" },
        { label: "Endangered Animals", href: "/endangered-animals", description: "Conservation status & the Red List" },
      ]}
    />
  );
}
