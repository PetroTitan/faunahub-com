import type { Metadata } from "next";
import AnimalProfileLayout from "@/components/AnimalProfileLayout";
import { ANIMAL_SOURCES } from "@/lib/educational/animal-sources";
import { getAnimalGalleryImages, getAnimalImage, getAnimalOgImage } from "@/lib/images/animal-images";
import { buildArticleMetadata } from "@/lib/metadata";

const PATH = "/animals/american-black-bear";
const TITLE = "American Black Bear: Facts, Habitat & Behavior";
const DESC =
  "Learn about the American black bear (Ursus americanus), the most widespread bear in North America: its appearance, forest habitat, diet, and behavior.";

export const metadata: Metadata = buildArticleMetadata({
  title: TITLE,
  description: DESC,
  path: PATH,
  publishedTime: "2026-06-28",
  modifiedTime: "2026-06-28",
  ogImage: getAnimalOgImage("american-black-bear"),
});

export default function AmericanBlackBearPage() {
  return (
    <AnimalProfileLayout
      commonName="American Black Bear"
      scientificName="Ursus americanus"
      pageTitle={TITLE}
      description={DESC}
      path={PATH}
      parentCategory="Mammals"
      parentCategoryHref="/animal-encyclopedia/mammals"
      tags={["Mammal","Bear","Forest"]}
      image={getAnimalImage("american-black-bear") ?? undefined}
      galleryImages={getAnimalGalleryImages("american-black-bear")}
      sources={ANIMAL_SOURCES["american-black-bear"]}
      publishedDate="2026-06-28"
      modifiedDate="2026-06-28"
      overview={
        <>
          <p>
            The American black bear (<em>Ursus americanus</em>) is the most common and most widespread bear in North America. Despite its name, its coat colour is variable, and the species is known for living close to forested landscapes across many parts of the continent. It is a highly adaptable omnivore, able to use a wide range of plant and animal foods as the seasons change.
          </p>
          <p>
            This profile covers the American black bear as a distinct species. It should not be confused with the polar bear (<em>Ursus maritimus</em>) or the Asian black bear (<em>Ursus thibetanus</em>), which are separate species, nor with the general overview of bears as a group. The American black bear has its own ecology, range, and conservation assessment.
          </p>
          <p>
            The species is currently assessed by the IUCN Red List as Least Concern. Conservation status is an assessment that reflects current understanding and can change over time as new information becomes available. This page is educational and focuses on the natural history and ecology of the species rather than on encounters or management.
          </p>
          <h3>Taxonomy and animal group</h3>
          <p>
            The American black bear belongs to the bear family, Ursidae, within the order Carnivora, and carries the scientific name <em>Ursus americanus</em>. It is one of several living species in the genus <em>Ursus</em>, which also includes the brown bear and the polar bear (<em>Ursus maritimus</em>). Several regional subspecies have been described across its range, reflecting geographic variation in size and coat colour; the pale or white &quot;spirit&quot; (Kermode) bear is one such regional form. It is a true bear, distinct from the Asian black bear (<em>Ursus thibetanus</em>), with which it shares only a common name and not the same species.
          </p>
          <h3>Appearance and recognition</h3>
          <p>
            The American black bear is a stocky, powerfully built mammal with a relatively short tail, rounded ears, and a comparatively straight facial profile. Coat colour is notably variable: many individuals are black, but brown, cinnamon, and other shades occur, and a rare pale or white form known as the &quot;spirit&quot; bear appears in part of the species&#39; range. Adults are generally smaller than brown bears and lack the prominent shoulder hump associated with that species. Their claws are curved and well suited to climbing, and even large adults can be agile in trees.
          </p>
        </>
      }
      habitat={
        <p>
          The American black bear is associated with forested and wooded landscapes and is found in parts of North America, occurring in many regions from forested mountains to swamps and mixed woodlands. Its distribution is patchy rather than continuous, and the species is absent from many areas that lack suitable forest cover or that have been heavily altered. Its range includes parts of Canada, the United States, and Mexico rather than the whole of any of these countries, and individuals may move seasonally in response to food availability. The areas described here should be understood as parts of these regions rather than every location within them.
        </p>
      }
      diet={
        <p>
          As an omnivore, the American black bear eats a broad and flexible diet that shifts with the seasons. Plant foods often make up a large share of what it consumes, including grasses, fruits, berries, nuts, and acorns, supplemented by insects such as ants and bees along with their larvae. Animal foods, carrion, and occasional vertebrate prey are also taken when available. This dietary flexibility is one reason the species can persist across many different forest types and is central to its reputation as an adaptable feeder.
        </p>
      }
      behavior={
        <>
          <p>
            American black bears are generally solitary outside of the breeding season and the period when a female is raising young. In regions with cold winters, they enter a prolonged winter dormancy in dens, during which females typically give birth to small, helpless cubs that remain with the mother for an extended period of learning before becoming independent. Bears spend much of the active season foraging widely, and they are capable climbers and strong swimmers. Much of their year is shaped by the need to build energy reserves ahead of the lean winter months.
          </p>
          <p>
            As a wide-ranging omnivore, the American black bear plays several roles in forest ecosystems. By feeding on fruits and berries and moving across large areas, it helps disperse seeds, while its foraging in soil and deadwood for insects can influence nutrient cycling. As a consumer of carrion, it contributes to the breakdown and recycling of nutrients in the environment. Its presence and condition can reflect the broader health of the forested habitats it depends on.
          </p>
        </>
      }
      humanInteraction={
        <p>
          The American black bear is a wild animal and is not a pet. For everyone&#39;s safety and the well-being of the bears, people are advised not to approach or feed them, and to follow guidance from local wildlife authorities, who manage human-wildlife coexistence in areas where bears occur. Securing food and other attractants helps reduce conflict. Any concern about a specific encounter or a bear near a community should be directed to local wildlife authorities rather than handled directly. The species is currently assessed by the IUCN Red List as Least Concern, an assessment that can change as conditions and knowledge evolve.
        </p>
      }
      faqs={[
        {
          question: "Are all American black bears black?",
          answer:
            "No. While many individuals are black, the species shows a range of coat colours including brown and cinnamon, and a rare pale or white \"spirit\" form occurs in part of its range.",
        },
        {
          question: "Is the American black bear the same as the Asian black bear?",
          answer:
            "No. The American black bear (Ursus americanus) and the Asian black bear (Ursus thibetanus) are separate species that share only part of a common name, with different ranges and ecology.",
        },
        {
          question: "What is the conservation status of the American black bear?",
          answer:
            "The IUCN Red List currently assesses the American black bear as Least Concern. This is an assessment of current understanding and can change over time as new information becomes available.",
        },
        {
          question: "What should I do if I see a black bear?",
          answer:
            "Do not approach or feed it. Follow guidance from local wildlife authorities, who manage human-wildlife coexistence, and direct any concern about a specific bear to them.",
        },
      ]}
      quickFacts={[
        { label: "Scientific name", value: "Ursus americanus" },
        { label: "Animal group", value: "Mammal" },
        { label: "Family", value: "Ursidae (bears)" },
        { label: "Size", value: "Stocky, medium-large bear; smaller than brown bears" },
        { label: "Diet", value: "Omnivore (fruits, nuts, insects, carrion, occasional prey)" },
        { label: "Habitat", value: "Forested and wooded landscapes" },
        { label: "Range", value: "Parts of North America (parts of Canada, US, Mexico)" },
        { label: "Conservation status", value: "Least Concern (IUCN Red List assessment; can change)" },
      ]}
      relatedLinks={[
        { label: "Bear Profile", href: "/animals/bear", description: "Bears more broadly" },
        { label: "Polar Bear", href: "/animals/polar-bear", description: "Another North American bear" },
        { label: "Asian Black Bear", href: "/animals/asian-black-bear", description: "A related Asian bear" },
        { label: "North American fauna", href: "/fauna/continents/north-america", description: "Animals of North America" },
        { label: "Mammals", href: "/animal-encyclopedia/mammals" },
      ]}
    />
  );
}
