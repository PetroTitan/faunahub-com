import type { Metadata } from "next";
import AnimalProfileLayout from "@/components/AnimalProfileLayout";
import { ANIMAL_SOURCES } from "@/lib/educational/animal-sources";
import { getAnimalGalleryImages, getAnimalImage, getAnimalOgImage } from "@/lib/images/animal-images";
import { buildArticleMetadata } from "@/lib/metadata";

const PATH = "/animals/humpback-whale";
const TITLE = "Humpback Whale: Migration, Songs and Ecology";
const DESC =
  "Learn about the humpback whale (Megaptera novaeangliae), a large baleen whale known for long migrations, breaching and complex songs across world oceans.";

export const metadata: Metadata = buildArticleMetadata({
  title: TITLE,
  description: DESC,
  path: PATH,
  publishedTime: "2026-06-28",
  modifiedTime: "2026-06-28",
  ogImage: getAnimalOgImage("humpback-whale"),
});

export default function HumpbackWhalePage() {
  return (
    <AnimalProfileLayout
      commonName="Humpback Whale"
      scientificName="Megaptera novaeangliae"
      pageTitle={TITLE}
      description={DESC}
      path={PATH}
      parentCategory="Mammals"
      parentCategoryHref="/animal-encyclopedia/mammals"
      tags={["Mammal","Baleen whale","Marine"]}
      image={getAnimalImage("humpback-whale") ?? undefined}
      galleryImages={getAnimalGalleryImages("humpback-whale")}
      sources={ANIMAL_SOURCES["humpback-whale"]}
      publishedDate="2026-06-28"
      modifiedDate="2026-06-28"
      overview={
        <>
          <p>
            The humpback whale (<em>Megaptera novaeangliae</em>) is a large baleen whale found in oceans worldwide, from cold, productive feeding grounds at high latitudes to warmer breeding waters nearer the tropics. It is among the most recognizable of the great whales, noted for its very long pectoral flippers, its habit of breaching clear of the water, and the long, structured songs produced by males. The species undertakes some of the longest migrations of any mammal, moving seasonally between feeding and breeding regions.
          </p>
          <p>
            Humpback whales occur in all major oceans, and several populations travel along Australian and Pacific coasts as they migrate between high-latitude feeding areas and lower-latitude breeding areas. The species is best understood as a globally distributed marine animal rather than one tied to any single region; its passage past Oceania is one part of a much wider oceanic range.
          </p>
          <p>
            After commercial whaling was heavily restricted, many humpback populations recovered, and the species is now assessed as Least Concern overall on the IUCN Red List. That overall status is encouraging, but it is an assessment that can be revised, and some individual subpopulations remain depleted and are tracked separately.
          </p>
          <h3>Taxonomy and animal group</h3>
          <p>
            The humpback whale is the species <em>Megaptera novaeangliae</em>, the only member of the genus <em>Megaptera</em>. It belongs to the family Balaenopteridae, the rorqual whales, within the order Cetacea (the cetaceans: whales, dolphins and porpoises) and the larger group of baleen whales, the Mysticeti. Like other baleen whales, it lacks teeth and instead has plates of baleen used to filter prey from seawater. Its scientific name refers to its large flippers (<em>Megaptera</em>, meaning &quot;big wing&quot;) and to New England, where early specimens were described.
          </p>
          <h3>Appearance and recognition</h3>
          <p>
            Adult humpback whales are large animals, commonly reaching roughly 12 to 16 meters in length, with females tending to be slightly larger than males. The species is most easily recognized by its exceptionally long pectoral flippers, which can be nearly a third of the body length, and by the knobbly bumps, called tubercles, on the head and flippers. The body is generally dark above and paler below, and the underside of the tail flukes carries a pattern of markings that is unique to each individual, allowing researchers to identify whales much as a fingerprint identifies a person. A low, broad dorsal fin sits on a slight hump, which contributes to the common name.
          </p>
        </>
      }
      habitat={
        <p>
          Humpback whales are a marine species with a worldwide distribution, occupying open ocean and coastal waters across the Atlantic, Pacific, Indian and Southern oceans. They typically feed in cooler, food-rich waters at higher latitudes and travel toward warmer waters to breed and calve, so their seasonal presence in any one area reflects this migratory pattern. Populations are known to pass along parts of the Australian coast and along Pacific coasts during migration, but the species should not be presented as belonging only to Oceania; these coastlines are simply waypoints along a far broader oceanic range. Distribution is best described cautiously, as the whales are associated with particular feeding and breeding regions that vary by population.
        </p>
      }
      diet={
        <p>
          The humpback whale is a filter feeder that eats krill and small schooling fish, straining them from seawater through its baleen plates. It takes in large mouthfuls of water and prey, then pushes the water out through the baleen, trapping food inside. Humpbacks use a range of feeding techniques, including a cooperative method known as bubble-net feeding, in which one or more whales release curtains of bubbles to concentrate prey into a tight ball before lunging through it. Most intensive feeding occurs in the productive high-latitude waters, where the whales build up energy reserves before migrating.
        </p>
      }
      behavior={
        <>
          <p>
            Humpback whales are often seen at the surface, where behaviors such as breaching, slapping the flippers and tail, and spy-hopping are commonly observed. Males produce long, complex, repeating songs, especially in breeding areas, and these songs can change over time and spread between individuals across a population. Females give birth to a single calf, typically after a gestation of about a year, and nurse and care for the calf during its early months, often in warmer breeding waters. While humpbacks are sometimes seen alone or in small, loose groups, they may gather in larger numbers where food is abundant, and some associations during feeding appear cooperative.
          </p>
          <p>
            As large baleen whales, humpbacks are an important part of marine food webs, consuming great quantities of krill and small fish and in turn supporting the wider ocean ecosystem. Their feeding, movement and waste can help cycle nutrients within and between ocean regions, contributing to the productivity of the waters they use. Through their long migrations they link distant marine environments, carrying energy and nutrients across ocean basins. Their recovery is often viewed as a meaningful indicator of the broader health of ocean ecosystems.
          </p>
        </>
      }
      humanInteraction={
        <p>
          Historically, humpback whales were heavily reduced by commercial whaling, and their recovery following international protection is widely regarded as a notable conservation success; the species is now listed as Least Concern overall on the IUCN Red List, though this is a changeable assessment and some subpopulations remain depleted and separately monitored. Today the main concerns for humpbacks include entanglement in fishing gear, collisions with vessels, underwater noise and other pressures on the ocean environment. They are wild marine animals and are protected under various national and international laws; people who encounter a stranded, injured or entangled whale should not approach the animal and should instead contact local wildlife authorities or trained marine rescue organizations. Observing whales responsibly and at a respectful distance helps reduce disturbance.
        </p>
      }
      faqs={[
        {
          question: "Why do humpback whales sing?",
          answer:
            "Male humpback whales produce long, structured songs, particularly in breeding areas, and these songs are thought to play a role in communication and breeding behavior. The songs can change over time and spread among individuals within a population.",
        },
        {
          question: "Are humpback whales found only around Australia and the Pacific?",
          answer:
            "No. Humpback whales occur in oceans worldwide, and Australian and Pacific coasts are simply areas where some populations pass during migration. They are a globally distributed marine species, not an Oceania-only animal.",
        },
        {
          question: "What do humpback whales eat?",
          answer:
            "They are filter feeders that eat krill and small schooling fish, straining them from seawater through baleen plates. Most intensive feeding takes place in cooler, food-rich waters at higher latitudes.",
        },
        {
          question: "Are humpback whales endangered?",
          answer:
            "The species is assessed as Least Concern overall on the IUCN Red List following recovery after commercial whaling was restricted, but this is a changeable assessment and some subpopulations remain depleted and are tracked separately.",
        },
      ]}
      quickFacts={[
        { label: "Scientific name", value: "Megaptera novaeangliae" },
        { label: "Animal group", value: "Mammal (baleen whale)" },
        { label: "Family/order", value: "Balaenopteridae / Cetacea" },
        { label: "Size", value: "Commonly about 12-16 m long" },
        { label: "Diet", value: "Krill and small fish (filter feeder)" },
        { label: "Habitat", value: "Open ocean and coastal marine waters" },
        { label: "Range", value: "Worldwide; passes parts of Australian and Pacific coasts on migration" },
        { label: "Conservation status", value: "Least Concern overall (IUCN Red List); some subpopulations depleted" },
      ]}
      relatedLinks={[
        { label: "Whale", href: "/animals/whale", description: "Whales more broadly" },
        { label: "Dolphin", href: "/animals/dolphin", description: "Another cetacean" },
        { label: "Dugong", href: "/animals/dugong", description: "Another marine mammal" },
        { label: "Oceania fauna", href: "/fauna/continents/oceania", description: "Animals of Oceania" },
        { label: "Mammals", href: "/animal-encyclopedia/mammals" },
      ]}
    />
  );
}
