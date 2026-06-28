import type { Metadata } from "next";
import AnimalProfileLayout from "@/components/AnimalProfileLayout";
import { ANIMAL_SOURCES } from "@/lib/educational/animal-sources";
import { getAnimalGalleryImages, getAnimalImage, getAnimalOgImage } from "@/lib/images/animal-images";
import { buildArticleMetadata } from "@/lib/metadata";

const PATH = "/animals/black-swan";
const TITLE = "Black Swan: Australia's Iconic Black Waterbird";
const DESC =
  "The black swan (Cygnus atratus) is a large black waterbird with a red bill, native to wetlands in parts of Australia and introduced to New Zealand.";

export const metadata: Metadata = buildArticleMetadata({
  title: TITLE,
  description: DESC,
  path: PATH,
  publishedTime: "2026-06-28",
  modifiedTime: "2026-06-28",
  ogImage: getAnimalOgImage("black-swan"),
});

export default function BlackSwanPage() {
  return (
    <AnimalProfileLayout
      commonName="Black Swan"
      scientificName="Cygnus atratus"
      pageTitle={TITLE}
      description={DESC}
      path={PATH}
      parentCategory="Birds"
      parentCategoryHref="/animal-encyclopedia/birds"
      tags={["Bird","Waterbird","Australia"]}
      image={getAnimalImage("black-swan") ?? undefined}
      galleryImages={getAnimalGalleryImages("black-swan")}
      sources={ANIMAL_SOURCES["black-swan"]}
      publishedDate="2026-06-28"
      modifiedDate="2026-06-28"
      overview={
        <>
          <p>
            The black swan (<em>Cygnus atratus</em>) is a large waterbird recognised for its mostly black plumage and bright red bill. It is a member of the waterfowl family and one of the more distinctive swans, contrasting with the predominantly white swans of the Northern Hemisphere. The species is native to wetlands across parts of Australia, where it is closely associated with shallow lakes, marshes and other inland and coastal waters.
          </p>
          <p>
            Beyond its native range, the black swan has been introduced to other regions, including parts of New Zealand, where established populations now occur. Distinguishing these introduced populations from the bird&#39;s native Australian distribution is important for an accurate understanding of where the species naturally belongs versus where it has been brought by people.
          </p>
          <p>
            Listed as Least Concern on the IUCN Red List, the black swan is a widespread and familiar waterbird within its native range. As with all conservation assessments, this status reflects the current evaluation and may be revised as new information becomes available.
          </p>
          <h3>Taxonomy and animal group</h3>
          <p>
            The black swan is classified as <em>Cygnus atratus</em>, a species within the genus <em>Cygnus</em>, which contains the true swans. It belongs to the family Anatidae, the waterfowl group that also includes ducks and geese, within the order Anseriformes. As a swan, it is among the larger members of this family and shares the long neck and broadly herbivorous habits typical of the genus, while its dark plumage sets it apart from most other swans.
          </p>
          <h3>Appearance and recognition</h3>
          <p>
            Adult black swans are large birds with predominantly black body feathers and a strikingly bright red bill that usually carries a pale band near the tip. In flight, white flight feathers along the wing edges become visible, providing a clear contrast against the otherwise dark plumage. The species has a notably long, slender neck, often carried in a graceful curve, and reddish to dark legs. Young birds tend to be greyer and duller than adults and lack the vivid bill colour, gradually acquiring the characteristic appearance as they mature.
          </p>
        </>
      }
      habitat={
        <p>
          The black swan is found in wetlands across parts of Australia, where it occupies shallow freshwater and brackish lakes, swamps, marshes, lagoons and slow-moving rivers, and it may also use coastal and estuarine waters. Within its native range it can be somewhat nomadic, moving in response to changing water availability and the condition of wetlands. The species has also been introduced beyond Australia, with established populations in parts of New Zealand and occurrences elsewhere; these introduced populations should be distinguished from the native Australian range rather than treated as part of its natural distribution.
        </p>
      }
      diet={
        <p>
          The black swan feeds mainly on aquatic vegetation, including the leaves, stems and roots of submerged and floating water plants, as well as algae and plants growing in shallow water. It often feeds while swimming, dipping its head and long neck beneath the surface or upending to reach plants on the bottom, and it may also graze on vegetation at the water&#39;s edge. This largely plant-based diet is typical of swans and ties the bird closely to the health and productivity of the wetlands it inhabits.
        </p>
      }
      behavior={
        <>
          <p>
            Black swans are social birds that frequently gather in groups, sometimes in large numbers on suitable wetlands, particularly outside the breeding season. Pairs commonly build large nests of vegetation in or near water, and both parents typically share in incubating the eggs and caring for the cygnets, which are able to swim and follow their parents soon after hatching. The young remain with the adults for a period while they grow and develop, gradually becoming independent as they mature.
          </p>
          <p>
            As a herbivorous waterbird, the black swan plays a role in the ecology of the wetlands it inhabits, influencing aquatic plant communities through its feeding and contributing to nutrient movement within these systems. Its dependence on healthy wetlands makes it part of the broader web of life supported by lakes, marshes and lagoons across its native range. In areas where it has been introduced, its ecological effects may differ from those in its native Australian habitats, which is one reason native and introduced populations are considered separately.
          </p>
        </>
      }
      humanInteraction={
        <p>
          The black swan is a familiar and widely admired waterbird within its native Australian range and appears in cultural and regional symbolism. It is listed as Least Concern on the IUCN Red List, reflecting a current assessment that may change over time. Where the species has been introduced outside its native range, such as in parts of New Zealand, it is appropriately regarded as an introduced rather than native bird. People are encouraged to observe black swans respectfully from a distance and to avoid disturbing nesting birds or feeding wild waterfowl; questions about wildlife management or concerns about birds in a particular area are best directed to local wildlife authorities.
        </p>
      }
      faqs={[
        {
          question: "Where is the black swan native?",
          answer:
            "The black swan is native to wetlands across parts of Australia, where it lives in shallow lakes, marshes, lagoons and other waters. It has also been introduced to other regions, including parts of New Zealand.",
        },
        {
          question: "Why is the black swan black?",
          answer:
            "The black swan has mostly black body plumage with white flight feathers visible in flight, along with a bright red bill. This dark colouring distinguishes it from the predominantly white swans of the Northern Hemisphere.",
        },
        {
          question: "What does the black swan eat?",
          answer:
            "Black swans feed mainly on aquatic plants, including the leaves, stems and roots of water vegetation, as well as algae. They often feed by dipping their heads underwater or upending while swimming.",
        },
        {
          question: "Is the black swan endangered?",
          answer:
            "The black swan is listed as Least Concern on the IUCN Red List, indicating it is currently widespread within its native range. Conservation assessments can change as new information becomes available.",
        },
      ]}
      quickFacts={[
        { label: "Scientific name", value: "Cygnus atratus" },
        { label: "Animal group", value: "Bird (waterfowl)" },
        { label: "Family / order", value: "Anatidae / Anseriformes" },
        { label: "Size", value: "Large swan with a long neck" },
        { label: "Diet", value: "Mainly aquatic plants (herbivorous)" },
        { label: "Habitat", value: "Wetlands, shallow lakes, marshes and lagoons" },
        { label: "Range", value: "Native to parts of Australia; introduced elsewhere" },
        { label: "Conservation status", value: "Least Concern (IUCN Red List)" },
      ]}
      relatedLinks={[
        { label: "Swan", href: "/animals/swan", description: "Swans more broadly" },
        { label: "Duck", href: "/animals/duck", description: "Another waterbird" },
        { label: "Goose", href: "/animals/goose", description: "Another waterbird" },
        { label: "Oceania fauna", href: "/fauna/continents/oceania", description: "Animals of Oceania" },
        { label: "Birds", href: "/animal-encyclopedia/birds" },
      ]}
    />
  );
}
