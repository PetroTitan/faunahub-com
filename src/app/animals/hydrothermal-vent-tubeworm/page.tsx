import type { Metadata } from "next";
import AnimalProfileLayout from "@/components/AnimalProfileLayout";
import { ANIMAL_SOURCES } from "@/lib/educational/animal-sources";
import { getAnimalGalleryImages, getAnimalImage, getAnimalOgImage } from "@/lib/images/animal-images";
import { buildArticleMetadata } from "@/lib/metadata";

const PATH = "/animals/hydrothermal-vent-tubeworm";
const TITLE = "Giant Tube Worm (Riftia pachyptila): Vent Life";
const DESC =
  "The giant tube worm (Riftia pachyptila) thrives around deep-sea hydrothermal vents, feeding via chemosynthetic bacteria with no mouth or gut.";

export const metadata: Metadata = buildArticleMetadata({
  title: TITLE,
  description: DESC,
  path: PATH,
  publishedTime: "2026-06-27",
  modifiedTime: "2026-06-27",
  ogImage: getAnimalOgImage("hydrothermal-vent-tubeworm"),
});

export default function HydrothermalVentTubewormPage() {
  return (
    <AnimalProfileLayout
      commonName="Hydrothermal Vent Tubeworm"
      scientificName="Riftia pachyptila"
      pageTitle={TITLE}
      description={DESC}
      path={PATH}
      parentCategory="Marine Animals"
      parentCategoryHref="/animal-encyclopedia/marine-animals"
      tags={["Marine invertebrate","Annelid","Hydrothermal vents"]}
      image={getAnimalImage("hydrothermal-vent-tubeworm") ?? undefined}
      galleryImages={getAnimalGalleryImages("hydrothermal-vent-tubeworm")}
      sources={ANIMAL_SOURCES["hydrothermal-vent-tubeworm"]}
      publishedDate="2026-06-27"
      modifiedDate="2026-06-27"
      overview={
        <>
          <p>
            The giant tube worm (<em>Riftia pachyptila</em>) is a large deep-sea worm, an annelid in the family Siboglinidae, that lives in dense clusters around hydrothermal vents on mid-ocean ridges, far down on the deep seafloor. It builds a tough white tube of chitin and extends a bright red, feathery plume from the open end. The vivid red colour comes from a special form of haemoglobin in the worm&#39;s blood, which helps it move oxygen and vent chemicals through its body.
          </p>
          <p>
            Perhaps its most striking feature is that the adult worm has no mouth and no gut. Instead, it houses billions of chemosynthetic bacteria in an internal organ called the trophosome. These bacteria use chemicals dissolved in the vent fluid, such as hydrogen sulfide, to produce food, and the worm lives on what they make. This is a chemosynthesis-based partnership that runs independently of sunlight. The worms grow quickly for deep-sea animals and depend entirely on the vents, which are patchy and short-lived. They were discovered around the Galapagos Rift vents in the late 1970s, a finding that transformed scientific understanding of how life can be sustained without sunlight.
          </p>
          <p>
            Note: Much about deep-sea vent communities remains uncertain, and these animals are known mainly from research specimens and expedition footage gathered by submersibles and remotely operated vehicles. Details such as growth rates, lifespan, and population trends vary by site and source, and figures here should be checked against authoritative marine references such as NOAA Ocean Exploration, Smithsonian Ocean, and MBARI.
          </p>
        </>
      }
      habitat={
        <p>
          The giant tube worm is closely associated with hydrothermal vents along mid-ocean ridges, on the deep seafloor far below the sunlit surface. These vents form where mineral-rich, chemically charged fluid escapes from the seabed, and the worms gather in dense thickets around them. Because their food supply is tied to vent chemistry rather than sunlight, their distribution tracks the location of active venting rather than a simple depth band. Vent habitats are patchy and can change or shut down over time, so the communities they support are localised and often short-lived. Depth zones are useful educational frameworks rather than rigid boundaries, and conditions can differ between vent fields and regions.
        </p>
      }
      diet={
        <p>
          Strictly speaking, the adult giant tube worm does not feed in the usual sense, because it has no mouth or digestive tract. Its nutrition comes from chemosynthetic bacteria living inside the trophosome, an internal organ packed with these microbial partners. The worm supplies the bacteria with the raw materials they need, including oxygen and compounds such as hydrogen sulfide drawn from the vent fluid, which the red plume helps to absorb. In return, the bacteria use these chemicals to build organic molecules that nourish the worm. This chemosynthetic relationship lets the animal thrive in darkness, fuelled by vent chemistry rather than by sunlight or by hunting.
        </p>
      }
      behavior={
        <>
          <p>
            Giant tube worms are sessile as adults, meaning they remain anchored in place within their tubes rather than moving about. They live in dense aggregations around vents, where many individuals cluster together and form part of a wider community of vent animals. The bright plume can be drawn back into the protective tube, which may help when conditions shift or when threatened. Because the worms depend on a steady supply of vent chemicals, their lives are closely bound to the rhythm of the vent itself. Many aspects of their behaviour are still being studied and are known largely from direct observation by submersibles and remotely operated vehicles.
          </p>
          <p>
            The giant tube worm is well adapted to one of the most extreme habitats on Earth, where there is no sunlight, high pressure, and food is scarce away from the vents. Its central adaptation is the partnership with chemosynthetic bacteria housed in the trophosome, which frees it from any need to hunt or graze. To support this, the worm has specialised haemoglobin that can carry both oxygen and hydrogen sulfide, transporting them safely to the bacteria. The feathery red plume provides a large surface area for taking up the dissolved gases that the bacteria require. Together these traits allow the worm to grow quickly for a deep-sea species and to flourish in a setting fuelled by chemistry rather than light.
          </p>
        </>
      }
      humanInteraction={
        <p>
          People very rarely encounter giant tube worms directly, because they live on the deep seafloor and are reached only with submersibles and remotely operated vehicles. Most of what is known comes from scientific expeditions, beginning with their discovery at the Galapagos Rift vents in the late 1970s, which reshaped ideas about where and how life can exist. Their conservation status is not well assessed, which is typical for deep-sea species, and the vent habitats they depend on are naturally patchy and short-lived. Interest in seafloor mining near some vent systems has prompted scientific discussion about protecting these communities, though much remains uncertain. These are wild animals adapted to extreme conditions and are not kept as pets; no capture or handling guidance is offered here.
        </p>
      }
      faqs={[
        {
          question: "How does the giant tube worm eat without a mouth or gut?",
          answer:
            "Adult giant tube worms have no mouth or digestive tract. Instead, they host billions of chemosynthetic bacteria in an internal organ called the trophosome. These bacteria use vent chemicals such as hydrogen sulfide to make food, and the worm lives on what they produce.",
        },
        {
          question: "Why is the worm's plume bright red?",
          answer:
            "The red colour comes from a special form of haemoglobin in the worm's blood. This haemoglobin can carry oxygen and hydrogen sulfide to the bacteria inside the worm. The feathery plume offers a large surface for absorbing the dissolved gases the bacteria need.",
        },
        {
          question: "Where do giant tube worms live?",
          answer:
            "They live around hydrothermal vents on mid-ocean ridges, on the deep seafloor far below the sunlit surface. Their distribution follows active venting rather than a single depth zone, because their food supply depends on vent chemistry. Vent habitats are patchy and can change over time.",
        },
        {
          question: "Can giant tube worms be kept in an aquarium?",
          answer:
            "No. These are deep-sea animals that depend entirely on chemicals from hydrothermal vents and on their internal bacterial partners. They are not aquarium pets, and they are studied in the wild using submersibles and remotely operated vehicles rather than kept in captivity.",
        },
      ]}
      quickFacts={[
        { label: "Group", value: "Annelid worms (segmented worms)" },
        { label: "Higher classification", value: "Family Siboglinidae; Riftia pachyptila" },
        { label: "Diet", value: "No mouth or gut; nourished by internal chemosynthetic bacteria" },
        { label: "Notable trait", value: "Bright red haemoglobin-rich plume and white chitin tube" },
        { label: "Adaptation", value: "Chemosynthesis-based partnership independent of sunlight" },
        { label: "Habitat", value: "Dense clusters at deep-sea hydrothermal vents on mid-ocean ridges" },
        { label: "Depth association", value: "Hydrothermal vents on the deep seafloor; tied to venting, not a fixed metre range" },
        { label: "Conservation status", value: "Not well assessed (deep-sea)" },
      ]}
      relatedLinks={[
        { label: "Yeti Crab Profile", href: "/animals/yeti-crab", description: "Another hydrothermal-vent animal" },
        { label: "Glass Sponge Profile", href: "/animals/glass-sponge", description: "A deep-seafloor animal" },
        { label: "Earthworm Profile", href: "/animals/earthworm", description: "A segmented worm (annelid) relative" },
        { label: "Ocean fauna by depth", href: "/fauna/ocean", description: "How life changes with depth" },
        { label: "Marine Animals", href: "/animal-encyclopedia/marine-animals" },
      ]}
    />
  );
}
