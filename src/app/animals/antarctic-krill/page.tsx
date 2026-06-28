import type { Metadata } from "next";
import AnimalProfileLayout from "@/components/AnimalProfileLayout";
import { ANIMAL_SOURCES } from "@/lib/educational/animal-sources";
import { getAnimalGalleryImages, getAnimalImage, getAnimalOgImage } from "@/lib/images/animal-images";
import { buildArticleMetadata } from "@/lib/metadata";

const PATH = "/animals/antarctic-krill";
const TITLE = "Antarctic Krill: Keystone of the Southern Ocean";
const DESC =
  "Antarctic krill (Euphausia superba) is a small swarming crustacean and keystone of the Southern Ocean food web, feeding whales, seals and penguins.";

export const metadata: Metadata = buildArticleMetadata({
  title: TITLE,
  description: DESC,
  path: PATH,
  publishedTime: "2026-06-28",
  modifiedTime: "2026-06-28",
  ogImage: getAnimalOgImage("antarctic-krill"),
});

export default function AntarcticKrillPage() {
  return (
    <AnimalProfileLayout
      commonName="Antarctic Krill"
      scientificName="Euphausia superba"
      pageTitle={TITLE}
      description={DESC}
      path={PATH}
      parentCategory="Insects & Invertebrates"
      parentCategoryHref="/animal-encyclopedia/insects"
      tags={["Invertebrate","Crustacean","Keystone species"]}
      image={getAnimalImage("antarctic-krill") ?? undefined}
      galleryImages={getAnimalGalleryImages("antarctic-krill")}
      sources={ANIMAL_SOURCES["antarctic-krill"]}
      publishedDate="2026-06-28"
      modifiedDate="2026-06-28"
      overview={
        <>
          <p>
            Antarctic krill (<em>Euphausia superba</em>) is a small, shrimp-like crustacean that lives in the cold waters of the Southern Ocean. Despite measuring only a few centimetres in length, it is one of the most abundant animals on Earth by sheer numbers and is widely described by scientists as a keystone species of the Antarctic marine ecosystem.
          </p>
          <p>
            Antarctic krill gather in dense aggregations known as swarms, which can stretch over large areas of water. These swarms feed largely on microscopic phytoplankton and on algae that grow beneath sea ice. In turn, krill themselves are the main food of many whales, seals, penguins, seabirds and fish, making them a central link between the smallest organisms and the largest animals of the region.
          </p>
          <p>
            Because so much of the Southern Ocean food web depends on it, <em>Euphausia superba</em> is closely studied and carefully managed. It is currently listed as Least Concern by the IUCN Red List, though it is the subject of a regulated fishery and of ongoing climate and sea-ice concern. This page is purely educational and offers no harvesting, fishing or food guidance of any kind.
          </p>
          <h3>Taxonomy and animal group</h3>
          <p>
            Antarctic krill is an invertebrate and a crustacean, placed in the order Euphausiacea, the group commonly called krill, within the family Euphausiidae. Its scientific name is <em>Euphausia superba</em>. Like other crustaceans it has a segmented body and a hard external skeleton, and as an arthropod it is related more broadly to shrimp, crabs and copepods. The word krill comes from a Norwegian term for small fish-like creatures, but krill are arthropods rather than fish. <em>Euphausia superba</em> is one of several krill species in Antarctic waters, and it is the most studied because of its abundance and ecological importance.
          </p>
          <h3>Appearance and recognition</h3>
          <p>
            Antarctic krill is a small, semi-transparent crustacean that typically reaches around five to six centimetres in length, giving it a shrimp-like appearance. Its body is divided into a head and thorax region covered by a shell-like carapace and a segmented, flexible abdomen ending in a fan-shaped tail. The animal is often tinged pink or reddish, and its digestive system and green-tinted gut, coloured by ingested algae, can be visible through the translucent body. Prominent dark eyes and feathery limbs help distinguish it, and like many open-water animals it can produce light through bioluminescent organs, which appear as small glowing points along the body.
          </p>
        </>
      }
      habitat={
        <p>
          Antarctic krill is a marine species found in the cold, open waters of the Southern Ocean surrounding Antarctica, and it is closely associated with the seas near the Antarctic continent and the zone of seasonal sea ice. It is not a land animal; it lives entirely in the water column, often near the surface but also at depth. Many krill are strongly tied to pack ice and fast ice, especially in early life, because the underside of the ice supports the algae they graze. Their distribution shifts with the seasons and with the advance and retreat of sea ice, and large concentrations are reported in areas such as the waters off the Antarctic Peninsula. As with much of the polar marine environment, their range should be understood as patchy and seasonal rather than uniform across the entire region.
        </p>
      }
      diet={
        <p>
          Antarctic krill feeds largely on phytoplankton, the microscopic algae that drift in sunlit surface waters, which it filters from the water using specialised feeding limbs. A particularly important food source is the algae that grow on and beneath sea ice, and krill, especially juveniles, are often observed grazing this ice algae from below. They may also consume other small organisms and detritus when phytoplankton is scarce, including during the long, dark Antarctic winter when food is limited. By converting tiny algae into body mass, krill transform primary production at the base of the ocean into a food resource that supports a vast array of larger animals.
        </p>
      }
      behavior={
        <>
          <p>
            Antarctic krill is best known for forming enormous swarms, in which many individuals move together in coordinated groups, a behaviour that can offer some protection from predators and may aid feeding. Krill generally rise toward the surface and descend to deeper water on a daily cycle, a pattern linked to light and the availability of food. They moult their hard exoskeletons repeatedly as they grow, and unusually they can also shrink in body size when food is scarce, helping them survive lean periods. Reproduction involves females releasing large numbers of eggs into the water, which sink and then develop as the young larvae rise back toward the surface; krill can live for several years, which is long for such a small crustacean.
          </p>
          <p>
            Antarctic krill occupies a central position in the Southern Ocean food web and is widely regarded as a keystone species. By grazing phytoplankton and ice algae and then being eaten in vast quantities, it channels energy from the base of the ecosystem to predators including baleen whales, crabeater and other seals, several penguin species, flying seabirds and many fish. Its swarms represent a concentrated, reliable food source that many Antarctic animals depend on directly or indirectly. Krill also contribute to nutrient cycling and to the movement of carbon in the ocean, as their feeding, waste and daily vertical movements help transport material from surface waters toward the deep sea.
          </p>
        </>
      }
      humanInteraction={
        <p>
          Antarctic krill is harmless to people and is valued chiefly for its ecological role and as a focus of scientific research. There is a commercial fishery for krill in the Southern Ocean, which is managed by CCAMLR, the Commission for the Conservation of Antarctic Marine Living Resources, with the aim of limiting pressure on the population and the species that depend on it; fishing pressure is noted here only as a conservation consideration. Scientists also report that changes in climate and sea ice are considered a concern for krill, because their life cycle is closely linked to ice, though such effects are still being studied. <em>Euphausia superba</em> is currently listed as Least Concern by the IUCN Red List, a status that can change as new information emerges. This page provides no fishing, harvesting or food advice of any kind; questions about protected species or marine resources should be directed to the relevant authorities.
        </p>
      }
      faqs={[
        {
          question: "Why is Antarctic krill so important?",
          answer:
            "Antarctic krill is considered a keystone species of the Southern Ocean. It feeds on phytoplankton and ice algae and is in turn the main food of many whales, seals, penguins, seabirds and fish, linking the smallest organisms to the largest animals in the region.",
        },
        {
          question: "What does Antarctic krill eat?",
          answer:
            "It feeds largely on phytoplankton, the tiny algae drifting in surface waters, and on algae growing beneath sea ice, which it filters using specialised limbs. It may also eat other small particles when phytoplankton is scarce, such as during winter.",
        },
        {
          question: "Is Antarctic krill endangered?",
          answer:
            "Antarctic krill is currently listed as Least Concern by the IUCN Red List, a status that can change over time. It is the subject of a managed fishery and of climate and sea-ice concern reported by scientists, so it remains closely monitored.",
        },
        {
          question: "Where does Antarctic krill live?",
          answer:
            "It lives in the cold, open waters of the Southern Ocean around Antarctica and is closely tied to areas of seasonal sea ice. It is a marine animal that lives in the water column, and its distribution is patchy and shifts with the seasons and ice.",
        },
      ]}
      quickFacts={[
        { label: "Scientific name", value: "Euphausia superba" },
        { label: "Animal group", value: "Invertebrate (crustacean)" },
        { label: "Family/order", value: "Euphausiidae; order Euphausiacea" },
        { label: "Size", value: "Around 5-6 cm in length" },
        { label: "Diet", value: "Phytoplankton and under-ice algae" },
        { label: "Habitat", value: "Open Southern Ocean water column, near sea ice" },
        { label: "Range", value: "Southern Ocean around Antarctica; seasonal, patchy" },
        { label: "Conservation status", value: "Least Concern (IUCN Red List); fishery managed by CCAMLR" },
      ]}
      relatedLinks={[
        { label: "Krill", href: "/animals/krill", description: "Krill more broadly" },
        { label: "Antarctic Toothfish", href: "/animals/antarctic-toothfish", description: "A Southern Ocean fish" },
        { label: "Squid", href: "/animals/squid", description: "Another Southern Ocean animal" },
        { label: "Antarctic & Southern Ocean fauna", href: "/fauna/continents/antarctica", description: "Antarctic and Southern Ocean wildlife" },
        { label: "Insects & Invertebrates", href: "/animal-encyclopedia/insects" },
      ]}
    />
  );
}
