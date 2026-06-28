import type { Metadata } from "next";
import AnimalProfileLayout from "@/components/AnimalProfileLayout";
import { ANIMAL_SOURCES } from "@/lib/educational/animal-sources";
import { getAnimalGalleryImages, getAnimalImage, getAnimalOgImage } from "@/lib/images/animal-images";
import { buildArticleMetadata } from "@/lib/metadata";

const PATH = "/animals/spectacled-bear";
const TITLE = "Spectacled Bear (Tremarctos ornatus) Profile";
const DESC =
  "Learn about the spectacled bear, or Andean bear, the only bear native to South America. Covers its cloud-forest habitat, plant-heavy diet, and IUCN status.";

export const metadata: Metadata = buildArticleMetadata({
  title: TITLE,
  description: DESC,
  path: PATH,
  publishedTime: "2026-06-28",
  modifiedTime: "2026-06-28",
  ogImage: getAnimalOgImage("spectacled-bear"),
});

export default function SpectacledBearPage() {
  return (
    <AnimalProfileLayout
      commonName="Spectacled Bear"
      scientificName="Tremarctos ornatus"
      pageTitle={TITLE}
      description={DESC}
      path={PATH}
      parentCategory="Mammals"
      parentCategoryHref="/animal-encyclopedia/mammals"
      tags={["Mammal","Bear","Andes"]}
      image={getAnimalImage("spectacled-bear") ?? undefined}
      galleryImages={getAnimalGalleryImages("spectacled-bear")}
      sources={ANIMAL_SOURCES["spectacled-bear"]}
      publishedDate="2026-06-28"
      modifiedDate="2026-06-28"
      overview={
        <>
          <p>
            The spectacled bear (<em>Tremarctos ornatus</em>), also widely known as the Andean bear, is the only bear native to South America. It is most often associated with the Andean region, where it occurs in parts of the mountains and adjacent habitats. The common name refers to the pale rings or arcs of fur that frequently appear around the eyes and across the muzzle, giving some individuals a distinctive masked or spectacled look.
          </p>
          <p>
            Although it belongs to the bear family, the spectacled bear is largely plant-eating, spending much of its time foraging for fruit, bromeliads, and other vegetation. It is generally shy and tends to avoid people, moving through forested slopes and high grasslands as it searches for seasonal food. This profile offers a calm, educational overview of its biology, ecology, and conservation rather than any guidance on approaching or interacting with the animal.
          </p>
          <p>
            The spectacled bear is listed as Vulnerable on the IUCN Red List. As with all such assessments, this status reflects current evaluations of the species and can be revised as new information becomes available. The bear&#39;s reliance on Andean forests and highlands makes it a useful focus for broader regional conservation discussions.
          </p>
          <h3>Taxonomy and animal group</h3>
          <p>
            The spectacled bear is classified as <em>Tremarctos ornatus</em>, the single living species in the genus <em>Tremarctos</em>. It belongs to the family Ursidae, the bears, within the order Carnivora and the class Mammalia. Among living bears it is notable as the last surviving member of the short-faced bear lineage (subfamily Tremarctinae), a group whose other members are now extinct. This makes the spectacled bear taxonomically distinct from the more familiar bears of the genus <em>Ursus</em>, and it is the only bear species found in South America.
          </p>
          <h3>Appearance and recognition</h3>
          <p>
            The spectacled bear is a medium-sized bear with a generally dark coat ranging from black to brownish tones. Its most recognizable feature is the variable pattern of pale, often cream or yellowish, markings around the eyes and across the face and chest. These markings differ between individuals and may form complete rings, partial arcs, or be largely absent, so not every bear shows the classic spectacled look. It has a relatively rounded face and a sturdy build, with strong limbs and claws suited to climbing trees and digging for food.
          </p>
        </>
      }
      habitat={
        <p>
          The spectacled bear is associated with the Andean region of South America, where it occurs in parts of the mountain chain and nearby habitats. It is often linked to Andean cloud forests, but it also uses high grasslands known as paramo, drier scrublands, and other forested and montane environments along parts of the Andes. Its presence tends to follow the availability of seasonal food and suitable cover across a range of elevations. As with many wide-ranging mammals, its distribution is uneven and tied to particular habitats rather than spread evenly across the whole region.
        </p>
      }
      diet={
        <p>
          The spectacled bear is largely plant-eating, and vegetation makes up the great majority of its diet. It commonly feeds on fruit, the soft bases of bromeliads, palm hearts, bamboo, cacti, and other plant material, often climbing trees or pulling apart vegetation to reach it. It may also take small amounts of other foods such as insects when available, but it is not a specialized hunter. Its foraging shifts with the seasons as different fruits and plants become abundant in the forests and highlands it occupies.
        </p>
      }
      behavior={
        <>
          <p>
            The spectacled bear is generally solitary and tends to be shy and retiring, often avoiding contact with people. It is a capable climber and may build platforms or nests of branches in trees, sometimes using them as feeding sites or resting spots. Activity patterns can vary with location and food availability. Females give birth to small litters of cubs, which remain dependent on the mother during their early development before gradually becoming independent, a life cycle typical of bears that invest heavily in raising young.
          </p>
          <p>
            As a largely fruit-eating mammal moving across Andean forests and highlands, the spectacled bear plays a role in dispersing seeds, helping shape the plant communities of the regions it inhabits. By foraging across different elevations and habitat types, it links forest, edge, and grassland environments through its feeding movements. Its dependence on healthy montane ecosystems means that protecting the spectacled bear is often tied to conserving the broader Andean cloud forests and paramo on which many other species also rely.
          </p>
        </>
      }
      humanInteraction={
        <p>
          The spectacled bear is listed as Vulnerable on the IUCN Red List, an assessment that can change as new information is gathered, and it is generally shy toward people. Habitat change and conflict where bear range overlaps with human activity are among the conservation concerns discussed for the species. Encounters in the wild should be treated with calm caution and respect for the animal&#39;s space; any concerns about wildlife conflict, such as bears near settlements or farmland, are best directed to local wildlife authorities, who are equipped to respond appropriately. This profile is educational and does not provide guidance on approaching, handling, or keeping the species.
        </p>
      }
      faqs={[
        {
          question: "Is the spectacled bear the only bear in South America?",
          answer:
            "Yes. The spectacled bear, also called the Andean bear, is the only bear species native to South America.",
        },
        {
          question: "Why is it called the spectacled bear?",
          answer:
            "The name comes from the pale rings or arcs of fur that often appear around the eyes and across the face, which can resemble spectacles. These markings vary between individuals, and some bears show little or none.",
        },
        {
          question: "What does the spectacled bear eat?",
          answer:
            "It is largely plant-eating, feeding mainly on fruit, bromeliads, and other vegetation. It may occasionally eat small amounts of other foods such as insects, but plants form most of its diet.",
        },
        {
          question: "What is the conservation status of the spectacled bear?",
          answer:
            "The spectacled bear is listed as Vulnerable on the IUCN Red List. This status reflects current assessments and can be revised as new information becomes available.",
        },
      ]}
      quickFacts={[
        { label: "Scientific name", value: "Tremarctos ornatus" },
        { label: "Animal group", value: "Mammal (bear)" },
        { label: "Family/order", value: "Ursidae / Carnivora" },
        { label: "Size", value: "Medium-sized bear; sturdy build, strong climbing limbs" },
        { label: "Diet", value: "Largely plant-eating (fruit, bromeliads, vegetation)" },
        { label: "Habitat", value: "Andean cloud forests, paramo grasslands, and other montane habitats" },
        { label: "Range", value: "Associated with parts of the Andes in South America" },
        { label: "Conservation status", value: "Vulnerable (IUCN Red List); subject to change" },
      ]}
      relatedLinks={[
        { label: "Bear", href: "/animals/bear", description: "Bears more broadly" },
        { label: "American Black Bear", href: "/animals/american-black-bear", description: "A North American bear" },
        { label: "Giant Otter", href: "/animals/giant-otter", description: "Another South American mammal" },
        { label: "South American fauna", href: "/fauna/continents/south-america", description: "Animals of South America" },
        { label: "Endangered Animals", href: "/endangered-animals", description: "Conservation status & the Red List" },
      ]}
    />
  );
}
