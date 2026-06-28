import type { Metadata } from "next";
import AnimalProfileLayout from "@/components/AnimalProfileLayout";
import { ANIMAL_SOURCES } from "@/lib/educational/animal-sources";
import { getAnimalGalleryImages, getAnimalImage, getAnimalOgImage } from "@/lib/images/animal-images";
import { buildArticleMetadata } from "@/lib/metadata";

const PATH = "/animals/bumblebee";
const TITLE = "Bumblebee (Bombus): Pollinator Profile";
const DESC =
  "Bumblebees (genus Bombus) are robust, hairy social bees known for buzz pollination and cold tolerance. Explore their ecology, foraging, and conservation.";

export const metadata: Metadata = buildArticleMetadata({
  title: TITLE,
  description: DESC,
  path: PATH,
  publishedTime: "2026-06-28",
  modifiedTime: "2026-06-28",
  ogImage: getAnimalOgImage("bumblebee"),
});

export default function BumblebeePage() {
  return (
    <AnimalProfileLayout
      commonName="Bumblebee"
      scientificName="Bombus spp."
      pageTitle={TITLE}
      description={DESC}
      path={PATH}
      parentCategory="Insects"
      parentCategoryHref="/animal-encyclopedia/insects"
      tags={["Bee","Pollinator","Buzz pollination"]}
      image={getAnimalImage("bumblebee") ?? undefined}
      galleryImages={getAnimalGalleryImages("bumblebee")}
      sources={ANIMAL_SOURCES["bumblebee"]}
      publishedDate="2026-06-28"
      modifiedDate="2026-06-28"
      overview={
        <>
          <p>
            Bumblebees are robust, densely hairy bees of the genus <em>Bombus</em>, a group of roughly 250 to 260 described species placed in the family Apidae. They are best known as large, fuzzy, often black-and-yellow (sometimes orange, red, or white-banded) insects that visit flowers in gardens, meadows, woodlands, and mountains across much of the Northern Hemisphere and parts of South America. This page is a group-level overview of the genus; traits, ranges, and conservation status differ from species to species.
          </p>
          <p>
            Most bumblebees are social, forming small annual colonies founded each year by a single overwintered queen. They are widely regarded as important flower visitors and pollinators of many wild plants and some crops, in part because of a behavior called buzz pollination (sonication), in which a bee vibrates its flight muscles to shake pollen loose from certain flowers. Their tolerance of cool, cloudy, and high-elevation conditions makes them especially prominent in temperate and montane systems where some other bees are less active.
          </p>
          <p>
            Because <em>Bombus</em> contains many species, generalizations should be made carefully. Some bumblebee species remain common and are assessed as Least Concern, while others have declined and a few are formally assessed as threatened. Statements here describe the genus broadly; for any single species, the specific ecology and conservation status should be checked against authoritative sources such as the IUCN Red List.
          </p>
          <h3>Taxonomy and animal group</h3>
          <p>
            Bumblebees make up the genus <em>Bombus</em> within the family Apidae, the same broad family that includes honey bees, carpenter bees, and orchid bees. The genus is divided into a number of subgenera and contains roughly 250 to 260 described species, including the cuckoo bumblebees (formerly separated as <em>Psithyrus</em>), which are social parasites that take over the colonies of other bumblebees rather than building their own. Bumblebees are true bees in the clade Anthophila and should not be confused with similarly fuzzy flower-visiting flies or with carpenter bees (mostly genus <em>Xylocopa</em>), which are often larger and have a shinier, less hairy abdomen.
          </p>
          <h3>Appearance and recognition</h3>
          <p>
            Bumblebees are typically stout-bodied and covered in dense, plush hair (setae), which helps insulate them and lets them stay active in cooler weather than many other bees. Body length varies by species and caste, with queens generally the largest, workers smaller, and males intermediate. Color patterns are commonly black with bands of yellow, but many species show orange, red, brown, or white markings, and several species look similar enough that reliable identification often depends on subtle features and regional knowledge. Like other bees, females carry pollen; many bumblebees collect it in a smooth, concave area on the hind leg known as the corbicula or pollen basket.
          </p>
        </>
      }
      habitat={
        <p>
          Bumblebees occur across much of the temperate Northern Hemisphere — including large parts of North America, Europe, and Asia — and extend into cooler and high-elevation parts of South America; a number of species reach into Arctic and alpine zones, and they are generally absent or naturally scarce in lowland tropical regions. They are associated with habitats that offer flowers for forage and suitable nesting sites, such as meadows, grasslands, forest edges, gardens, farmland, and mountain slopes. Many species nest at or below ground level, often in abandoned rodent burrows, tussocks, or cavities, though nesting habits vary. Some bumblebees have been moved beyond their native ranges through commercial use, so the distribution of a given species should not be assumed; consult authoritative range maps for specifics.
        </p>
      }
      diet={
        <p>
          Adult bumblebees feed on nectar for energy and collect pollen as a protein source, primarily to provision developing larvae. A colony&#39;s workers forage on a wide variety of flowering plants, and bumblebees are often described as relatively generalist foragers, though individual species can show preferences for particular flower shapes or plant groups. Their relatively long tongues in some species allow them to reach nectar in deep or tubular flowers that shorter-tongued bees cannot easily access. Larvae are fed pollen and nectar brought back to the nest; bumblebees do not store large honey reserves the way honey bees do, keeping only small amounts of nectar in wax pots.
        </p>
      }
      behavior={
        <>
          <p>
            Most bumblebees follow an annual social cycle. A mated queen overwinters alone, emerges in spring, and founds a colony, rearing the first workers herself; the colony then grows through the season as workers take over foraging and brood care. Later in the cycle the colony produces new queens and males, which leave to mate; new queens seek overwintering sites while the founding colony, including the old queen and workers, typically dies off as conditions cool. Colonies are generally far smaller than honey bee hives, often numbering from dozens to a few hundred individuals depending on species and conditions. Cuckoo bumblebees break this pattern by invading host colonies and relying on host workers to rear their offspring. Bumblebees can regulate their body temperature by shivering their flight muscles, which helps them fly in cool conditions and at high elevations.
          </p>
          <p>
            As abundant flower visitors in temperate and montane systems, bumblebees contribute to the pollination of many native plants, supporting the seed and fruit production on which other wildlife depends, and they form part of the food web as prey for birds and other predators. Their tolerance of cool weather makes them ecologically important in places and seasons when other pollinators are less active, such as early spring, cloudy days, and cold mountain habitats. Because different bumblebee species partition flowers, habitats, and elevations in different ways, the genus as a whole interacts with a broad range of plant communities; the precise ecological role of any one species is best understood at the species and regional level rather than generalized across all bumblebees.
          </p>
        </>
      }
      humanInteraction={
        <p>
          Bumblebees are generally not aggressive toward people and are typically encountered simply foraging on flowers. Only female bumblebees possess a sting; males cannot sting, and females usually sting only when handled roughly or when a nest is threatened. Unlike honey bees, bumblebees can generally sting more than once. This page is educational and does not provide medical, first-aid, or pest-control guidance: anyone concerned about a sting or an allergic reaction should consult a qualified medical professional, and anyone needing to address a nest or a wildlife conflict should contact local authorities or qualified professionals rather than attempting removal.
        </p>
      }
      extraSections={[
        {
          heading: "Pollination role",
          body: (
            <p>
              Bumblebees are widely regarded as effective pollinators of many wild plants and of some crops, and the genus is one of the better-studied groups in pollination ecology. A key reason is buzz pollination, also called sonication: a bee grips a flower and rapidly vibrates its flight muscles, shaking pollen out of flowers that hold it tightly in tube-like anthers. Plants in the nightshade and several other families — including tomato, eggplant, and various blueberries — release pollen most readily to this kind of vibration, and bumblebees are commonly cited as important visitors to such flowers, including in greenhouse and field tomato production where managed colonies are sometimes used. Even so, pollination is an ecological interaction rather than a guaranteed outcome: not every flower visit transfers pollen effectively, the role of any bumblebee varies by species, plant, and region, and bumblebees are one part of a broader community of pollinators rather than a universal substitute for it. Specific crop-dependence figures and economic values should be drawn from authoritative agricultural and scientific sources rather than assumed.
            </p>
          ),
        },
        {
          heading: "Conservation context",
          body: (
            <p>
              Conservation status varies greatly across the genus and should never be generalized to all bumblebees. Many species remain common and are assessed as Least Concern, while a number of others have shown declines and some are formally assessed as threatened; for example, the rusty patched bumble bee (<em>Bombus affinis</em>) has been listed as Endangered in the United States. Published assessments of declining species often discuss factors such as habitat loss, pesticide exposure, climate change, and the spread of pathogens, sometimes linked to the movement of managed bees, but the relevant pressures differ by species and place. For the current status of any particular bumblebee, consult the IUCN Red List and regional conservation authorities, and treat status as changeable over time.
            </p>
          ),
        },
      ]}
      faqs={[
        {
          question: "Are all bumblebees endangered?",
          answer:
            "No. Conservation status varies by species. Many bumblebees remain common and are assessed as Least Concern, while some species have declined and a few are formally assessed as threatened — for instance, the rusty patched bumble bee is listed as Endangered in the United States. Check the IUCN Red List for any specific species.",
        },
        {
          question: "What is buzz pollination?",
          answer:
            "Buzz pollination, or sonication, is a behavior in which a bumblebee grips a flower and rapidly vibrates its flight muscles to shake pollen loose. Some plants, including tomatoes, eggplants, and blueberries, hold pollen in tube-like anthers that release it most readily to this kind of vibration, and bumblebees are commonly cited as important visitors to such flowers.",
        },
        {
          question: "What is the difference between a bumblebee and a honey bee?",
          answer:
            "Both are bees in the family Apidae, but bumblebees (genus Bombus) are typically larger, rounder, and hairier, and most form small annual colonies founded each spring by a single queen. Honey bees (genus Apis) live in large, long-lived colonies, store substantial honey, and are widely managed; they are not a stand-in for wild bee diversity.",
        },
        {
          question: "Do bumblebees sting?",
          answer:
            "Only female bumblebees can sting, and they usually do so only when handled or when a nest is disturbed; males cannot sting. This page does not give medical or removal advice — anyone concerned about a sting or allergy should consult a qualified medical professional, and nest or wildlife concerns should go to local authorities or qualified professionals.",
        },
      ]}
      quickFacts={[
        { label: "Scientific group", value: "Genus Bombus (family Apidae); about 250–260 species" },
        { label: "Pollinator group", value: "Bee — social, robust, hairy bumblebees" },
        { label: "Pollination role", value: "Important flower visitor and pollinator of many plants and some crops; known for buzz pollination; role varies by species and region" },
        { label: "Range", value: "Mainly temperate and montane Northern Hemisphere, plus cooler parts of South America; varies by species (consult range maps)" },
        { label: "Diet / feeding", value: "Nectar for energy; pollen collected mainly to feed larvae" },
        { label: "Conservation note", value: "Varies by species — many Least Concern, some declining or threatened (e.g. rusty patched bumble bee, Endangered in the US); status is changeable, see the IUCN Red List" },
      ]}
      relatedLinks={[
        { label: "Pollinators", href: "/wildlife/pollinators", description: "Bees, butterflies, birds, bats, flies & beetles" },
        { label: "Bee", href: "/animals/bee", description: "Bees as a group" },
        { label: "Carpenter Bee", href: "/animals/carpenter-bee", description: "Another large bee" },
        { label: "Mason Bee", href: "/animals/mason-bee", description: "A solitary bee" },
        { label: "Insects & Invertebrates", href: "/animal-encyclopedia/insects" },
      ]}
    />
  );
}
