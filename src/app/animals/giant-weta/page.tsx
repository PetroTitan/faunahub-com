import type { Metadata } from "next";
import AnimalProfileLayout from "@/components/AnimalProfileLayout";
import { ANIMAL_SOURCES } from "@/lib/educational/animal-sources";
import { getAnimalGalleryImages, getAnimalImage, getAnimalOgImage } from "@/lib/images/animal-images";
import { buildArticleMetadata } from "@/lib/metadata";

const PATH = "/animals/giant-weta";
const TITLE = "Giant Weta: NZ's Heavy Flightless Insects";
const DESC =
  "Giant weta (genus Deinacrida) are very large flightless insects endemic to New Zealand. Explore their appearance, habitat, diet and conservation.";

export const metadata: Metadata = buildArticleMetadata({
  title: TITLE,
  description: DESC,
  path: PATH,
  publishedTime: "2026-06-28",
  modifiedTime: "2026-06-28",
  ogImage: getAnimalOgImage("giant-weta"),
});

export default function GiantWetaPage() {
  return (
    <AnimalProfileLayout
      commonName="Giant Weta"
      scientificName="Deinacrida (several species)"
      pageTitle={TITLE}
      description={DESC}
      path={PATH}
      parentCategory="Insects & Invertebrates"
      parentCategoryHref="/animal-encyclopedia/insects"
      tags={["Insect","Flightless","NZ endemic"]}
      image={getAnimalImage("giant-weta") ?? undefined}
      galleryImages={getAnimalGalleryImages("giant-weta")}
      sources={ANIMAL_SOURCES["giant-weta"]}
      publishedDate="2026-06-28"
      modifiedDate="2026-06-28"
      overview={
        <>
          <p>
            Giant weta are very large, heavy-bodied, flightless insects in the genus <em>Deinacrida</em>, found only in New Zealand. They belong to the same broad insect group as crickets and grasshoppers, and several giant weta are among the heaviest insects known. The name &quot;giant weta&quot; covers several species rather than a single animal, and these species differ in size, range and conservation needs.
          </p>
          <p>
            Despite their large size and somewhat formidable appearance, giant weta are harmless to people. They are mostly nocturnal and feed primarily on plants. Many spend the day sheltering in vegetation, under bark or in crevices, becoming active after dark.
          </p>
          <p>
            Several giant weta species are threatened and have been the focus of dedicated conservation management in New Zealand, including habitat protection and managed populations on predator-free islands and sanctuaries. Because the group contains multiple distinct species, conservation status is best understood species by species rather than as a single figure.
          </p>
          <h3>Taxonomy and animal group</h3>
          <p>
            Giant weta make up the genus <em>Deinacrida</em>, a group of large insects in the order Orthoptera, which also includes crickets and grasshoppers. The common name &quot;giant weta&quot; refers to several species within this genus rather than to one animal, and &quot;weta&quot; more broadly is used in New Zealand for a number of related orthopteran insects. Within the order, giant weta are placed in the family Anostostomatidae. Because the genus includes multiple species, descriptions of size, distribution and status can vary considerably from one species to another.
          </p>
          <h3>Appearance and recognition</h3>
          <p>
            Giant weta are recognized by their bulky, robust bodies, long legs and long antennae, with a heavily armored, segmented look typical of large orthopterans. They are flightless, lacking functional wings, and rely on walking and climbing rather than leaping over long distances. Coloration is generally brown to tan, helping them blend into bark, leaf litter and vegetation. The largest species are notably heavy-bodied, which is why some giant weta are cited among the heaviest insects in the world, though exact size differs between species.
          </p>
        </>
      }
      habitat={
        <p>
          Giant weta are endemic to New Zealand and are not found naturally anywhere else; their range should be tied specifically to New Zealand rather than to Australia or Oceania as a whole. Different species are associated with different parts of New Zealand and with different settings, including forests, shrublands, tussock grasslands and alpine areas, as well as several offshore islands. Some species today persist mainly on predator-free islands and in managed sanctuaries, so their present-day distribution can be much narrower than their historical range. Habitat associations are best described cautiously and on a species-by-species basis.
        </p>
      }
      diet={
        <p>
          Giant weta are mostly plant-eaters, feeding at night on leaves, foliage and other plant material. Some species may also take small amounts of other foods opportunistically, but their feeding ecology is generally dominated by vegetation. Being nocturnal, they typically forage after dark and shelter during the day, and their large size means they can process a substantial amount of plant matter relative to many other insects.
        </p>
      }
      behavior={
        <>
          <p>
            Giant weta are largely nocturnal and slow-moving, spending daylight hours sheltering in vegetation, under bark, in crevices or among leaf litter, then emerging at night to feed. They are flightless and generally solitary in their movements, relying on camouflage and shelter rather than rapid escape. Like other orthopterans, they develop through a series of molts as nymphs before reaching adulthood, increasing in size with each stage. Life-cycle details, including longevity and breeding, vary between the different <em>Deinacrida</em> species.
          </p>
          <p>
            As large, plant-eating insects, giant weta form part of New Zealand&#39;s native invertebrate fauna and contribute to ecological processes such as feeding on vegetation and serving as prey for native predators. In ecosystems that evolved without many land mammals, large invertebrates like giant weta historically filled roles often occupied by small mammals elsewhere. Their presence is one indicator of the distinctive, isolated character of New Zealand&#39;s native ecosystems, and the decline of some species reflects wider pressures on those ecosystems.
          </p>
        </>
      }
      humanInteraction={
        <p>
          Giant weta are harmless to people and are not venomous or dangerous; they are valued in New Zealand as native species and as a focus of conservation attention. Several species are threatened, and the IUCN Red List and New Zealand conservation authorities assess them individually, so status varies by species and these assessments can change as new information becomes available. Conservation work has included protecting habitat, controlling introduced predators and establishing populations on predator-free islands and in sanctuaries. People who encounter giant weta or have questions about local populations are best directed to New Zealand&#39;s Department of Conservation or other local wildlife authorities rather than handling the animals.
        </p>
      }
      faqs={[
        {
          question: "Where are giant weta found?",
          answer:
            "Giant weta in the genus Deinacrida are endemic to New Zealand and are not native anywhere else. Different species are associated with different parts of New Zealand, and some now persist mainly on predator-free islands and in managed sanctuaries.",
        },
        {
          question: "Are giant weta dangerous to humans?",
          answer:
            "No. Giant weta are harmless to people; they are not venomous and pose no danger. Any questions about local populations are best directed to New Zealand's Department of Conservation or other local wildlife authorities.",
        },
        {
          question: "What do giant weta eat?",
          answer:
            "Giant weta are mostly nocturnal plant-eaters, feeding on leaves and other plant material at night. Feeding details can vary between the different species in the genus.",
        },
        {
          question: "Are giant weta endangered?",
          answer:
            "Several giant weta species are threatened and are the subject of conservation management in New Zealand. Because \"giant weta\" covers several species, conservation status is assessed species by species by the IUCN Red List and New Zealand authorities and can change over time.",
        },
      ]}
      quickFacts={[
        { label: "Scientific name", value: "Deinacrida (several species)" },
        { label: "Animal group", value: "Insects (invertebrates)" },
        { label: "Family/order", value: "Anostostomatidae; order Orthoptera" },
        { label: "Size", value: "Very large; some among the heaviest insects (varies by species)" },
        { label: "Diet", value: "Mostly plant material (herbivorous)" },
        { label: "Habitat", value: "Forests, shrublands, grasslands, alpine areas and offshore islands" },
        { label: "Range", value: "Endemic to New Zealand" },
        { label: "Conservation status", value: "Varies by species; several threatened (per the IUCN Red List; assessments can change)" },
      ]}
      relatedLinks={[
        { label: "Cricket", href: "/animals/cricket", description: "A close relative" },
        { label: "Grasshopper", href: "/animals/grasshopper", description: "A related insect" },
        { label: "Stick Insect", href: "/animals/stick-insect", description: "Another large insect" },
        { label: "Oceania fauna", href: "/fauna/continents/oceania", description: "Animals of Oceania" },
        { label: "Insects & Invertebrates", href: "/animal-encyclopedia/insects" },
      ]}
    />
  );
}
