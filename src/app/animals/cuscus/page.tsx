import type { Metadata } from "next";
import AnimalProfileLayout from "@/components/AnimalProfileLayout";
import { ANIMAL_SOURCES } from "@/lib/educational/animal-sources";
import { getAnimalGalleryImages, getAnimalImage, getAnimalOgImage } from "@/lib/images/animal-images";
import { buildArticleMetadata } from "@/lib/metadata";

const PATH = "/animals/cuscus";
const TITLE = "Cuscus: Tree-Dwelling Marsupials of New Guinea";
const DESC =
  "Learn about the cuscus, slow-moving tree-dwelling marsupials of New Guinea and nearby areas, including their woolly fur, prehensile tail, diet and ecology.";

export const metadata: Metadata = buildArticleMetadata({
  title: TITLE,
  description: DESC,
  path: PATH,
  publishedTime: "2026-06-28",
  modifiedTime: "2026-06-28",
  ogImage: getAnimalOgImage("cuscus"),
});

export default function CuscusPage() {
  return (
    <AnimalProfileLayout
      commonName="Cuscus"
      scientificName="Phalangeridae (several genera)"
      pageTitle={TITLE}
      description={DESC}
      path={PATH}
      parentCategory="Mammals"
      parentCategoryHref="/animal-encyclopedia/mammals"
      tags={["Mammal","Marsupial","New Guinea"]}
      image={getAnimalImage("cuscus") ?? undefined}
      galleryImages={getAnimalGalleryImages("cuscus")}
      sources={ANIMAL_SOURCES["cuscus"]}
      publishedDate="2026-06-28"
      modifiedDate="2026-06-28"
      overview={
        <>
          <p>
            The cuscus is a group of slow-moving, tree-dwelling marsupials belonging to the family Phalangeridae. The name &quot;cuscus&quot; does not refer to a single animal but covers several species spread across more than one genus, all sharing a similar arboreal lifestyle. These marsupials are recognised by their woolly fur, rounded heads, forward-facing eyes and long prehensile tails, which help them move carefully through the rainforest canopy.
          </p>
          <p>
            Cuscuses are associated with the forests of New Guinea, far northern Australia and a number of nearby islands. They are generally nocturnal and unhurried in their movements, spending the daytime resting among foliage and feeding largely on leaves and fruit. Because the term spans many species, details of size, colour and distribution differ considerably from one kind of cuscus to another.
          </p>
          <p>
            As a diverse group rather than a single species, the cuscus illustrates how related marsupials can fill a quiet, leaf-eating niche in tropical and island forests. This profile describes the group as a whole, while noting that conservation status and other specifics vary depending on the particular species being considered.
          </p>
          <h3>Taxonomy and animal group</h3>
          <p>
            Cuscuses are marsupial mammals placed in the family Phalangeridae, the same broad family that also includes the brushtail possums. &quot;Cuscus&quot; is a common-name umbrella rather than a single scientific species, so there is no one Latin name for all of them; instead, individual cuscuses carry their own species names within several genera, including <em>Ailurops</em>, <em>Phalanger</em>, <em>Spilocuscus</em> and <em>Strigocuscus</em>. They belong to the order Diprotodontia, a large grouping of Australasian marsupials, and as marsupials the females typically carry developing young in a pouch. Because the group spans multiple genera, taxonomic boundaries and the exact number of recognised species have been revised over time.
          </p>
          <h3>Appearance and recognition</h3>
          <p>
            Cuscuses are typically stocky, rounded marsupials with dense, woolly fur that can appear grey, brown, cream or reddish depending on the species, sex and individual. They have small, often partly hidden ears, a short muzzle and large forward-facing eyes suited to seeing in low light. One of their most distinctive features is the long prehensile tail, frequently bare and roughened toward the tip, which grips branches and acts almost like an extra limb. Their hands and feet are well adapted for climbing, with strong digits for grasping. Overall size varies across the group, but most cuscuses are roughly cat-sized, giving them a soft, plush appearance that distinguishes them from more slender possums.
          </p>
        </>
      }
      habitat={
        <p>
          Cuscuses are forest animals associated with New Guinea, parts of far northern Australia and various nearby islands, including eastern Indonesia and island groups to the east, where they live in tropical rainforest and other wooded habitats. They are strongly arboreal, spending most of their lives in the trees and rarely descending to the ground. It is important not to treat their range as covering all of Oceania; different cuscus species occupy different islands and regions within this broad area, and their distributions should be understood as patchy and species-specific rather than continuous. In Australia, cuscuses are limited to the far north, while the greatest diversity of species is linked to New Guinea and the surrounding island groups.
        </p>
      }
      diet={
        <p>
          Cuscuses are mainly herbivorous, feeding largely on leaves and fruit found within the forest canopy. Many species also take flowers, buds, nectar and other plant material, and some are reported to occasionally include small animals or invertebrates in their diet, though plant matter dominates. Their slow, deliberate feeding style suits a diet of foliage, which is relatively low in energy and digested gradually. By foraging at night among the branches, cuscuses exploit food sources high above the forest floor while avoiding much of the activity of daytime animals.
        </p>
      }
      behavior={
        <>
          <p>
            Cuscuses are nocturnal and notably slow-moving, often resting quietly during the day in dense foliage, tree hollows or tangles of vines before becoming active after dark. They are generally solitary and move with a careful, unhurried climb, using the prehensile tail and grasping limbs to navigate the canopy. As marsupials, the young are born very small and complete much of their early development in the mother&#39;s pouch before later riding on her back or being left in a sheltered spot. Their cryptic colouring and stillness help them remain inconspicuous among the leaves, which is a key part of how they avoid disturbance.
          </p>
          <p>
            As leaf- and fruit-eating canopy dwellers, cuscuses play a part in the ecology of the forests they inhabit, potentially contributing to seed dispersal when they feed on fruit and move through the trees. They form one strand of the diverse marsupial community of New Guinea, northern Australia and nearby islands, occupying a quiet arboreal niche alongside possums, gliders and other tree-dwellers. As prey, they may be taken by larger predators such as birds of prey, pythons and, in some areas, introduced or native carnivores. Their presence reflects the health of intact forest canopy, since they depend on continuous tree cover for food and movement.
          </p>
        </>
      }
      humanInteraction={
        <p>
          People across the cuscus&#39;s range have long known these animals as part of the forest, and in some areas they have been hunted for food, while their slow movements can make them vulnerable to habitat loss and disturbance. Because &quot;cuscus&quot; covers several species in more than one genus, conservation status is not uniform: the IUCN Red List assesses individual species separately, ranging from lower concern for some to greater concern for others, and these assessments can change as new information emerges. Cuscuses are wild marsupials, not pets, and concerns about injured or displaced animals are best directed to local wildlife authorities. Protecting their forest habitat is generally regarded as central to their long-term outlook.
        </p>
      }
      faqs={[
        {
          question: "Is a cuscus a single species?",
          answer:
            "No. \"Cuscus\" is a common name for several species spread across more than one genus within the family Phalangeridae, so it refers to a group of related marsupials rather than one animal.",
        },
        {
          question: "Where do cuscuses live?",
          answer:
            "Cuscuses are associated with the rainforests of New Guinea, parts of far northern Australia and various nearby islands, including eastern Indonesia. Their ranges are patchy and species-specific, not spread across all of Oceania.",
        },
        {
          question: "What do cuscuses eat?",
          answer:
            "They are mainly herbivorous, feeding largely on leaves and fruit, along with flowers and other plant material. Some species may occasionally take small animals, but plant matter dominates their diet.",
        },
        {
          question: "What is the conservation status of the cuscus?",
          answer:
            "Because the name covers several species, status varies by species and is assessed individually on the IUCN Red List, ranging from lower to greater concern. There is no single status for all cuscuses, and assessments can change over time.",
        },
      ]}
      quickFacts={[
        { label: "Scientific name", value: "Family Phalangeridae (several genera)" },
        { label: "Animal group", value: "Marsupial mammal" },
        { label: "Family/order", value: "Phalangeridae; Diprotodontia" },
        { label: "Size", value: "Roughly cat-sized; varies by species" },
        { label: "Diet", value: "Mainly leaves and fruit (herbivorous)" },
        { label: "Habitat", value: "Tropical rainforest and wooded canopy" },
        { label: "Range", value: "New Guinea, far northern Australia, nearby islands" },
        { label: "Conservation status", value: "Varies by species (IUCN Red List, assessed individually)" },
      ]}
      relatedLinks={[
        { label: "Koala", href: "/animals/koala", description: "Another tree-dwelling marsupial" },
        { label: "Sugar Glider", href: "/animals/sugar-glider", description: "A gliding marsupial" },
        { label: "Tree Kangaroo", href: "/animals/tree-kangaroo", description: "Another rainforest marsupial" },
        { label: "Oceania fauna", href: "/fauna/continents/oceania", description: "Animals of Oceania" },
        { label: "Mammals", href: "/animal-encyclopedia/mammals" },
      ]}
    />
  );
}
