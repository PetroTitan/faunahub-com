import type { Metadata } from "next";
import AnimalProfileLayout from "@/components/AnimalProfileLayout";
import { ANIMAL_SOURCES } from "@/lib/educational/animal-sources";
import { getAnimalGalleryImages, getAnimalImage, getAnimalOgImage } from "@/lib/images/animal-images";
import { buildArticleMetadata } from "@/lib/metadata";

const PATH = "/animals/european-hedgehog";
const TITLE = "European Hedgehog: Facts, Habitat & Status";
const DESC =
  "The European hedgehog (Erinaceus europaeus) is a spiny nocturnal insectivore of gardens and hedgerows, now assessed as Near Threatened on the IUCN Red List.";

export const metadata: Metadata = buildArticleMetadata({
  title: TITLE,
  description: DESC,
  path: PATH,
  publishedTime: "2026-06-27",
  modifiedTime: "2026-06-27",
  ogImage: getAnimalOgImage("european-hedgehog"),
});

export default function EuropeanHedgehogPage() {
  return (
    <AnimalProfileLayout
      commonName="European Hedgehog"
      scientificName="Erinaceus europaeus"
      pageTitle={TITLE}
      description={DESC}
      path={PATH}
      parentCategory="Mammals"
      parentCategoryHref="/animal-encyclopedia/mammals"
      tags={["Mammal","Insectivore","Nocturnal"]}
      image={getAnimalImage("european-hedgehog") ?? undefined}
      galleryImages={getAnimalGalleryImages("european-hedgehog")}
      sources={ANIMAL_SOURCES["european-hedgehog"]}
      publishedDate="2026-06-27"
      modifiedDate="2026-06-27"
      overview={
        <>
          <p>
            The European hedgehog (<em>Erinaceus europaeus</em>), sometimes called the West European hedgehog, is a small, spiny, nocturnal mammal that is among the most familiar wild animals in parts of Europe. It is best known for the dense coat of stiff spines covering its back and for its habit of curling into a tight ball when it feels threatened. As an insectivore, it spends much of its active life foraging at ground level through gardens, hedgerows, woodland edges and grassland.
          </p>
          <p>
            Hedgehogs are creatures of the night and of the seasons. They emerge after dusk to feed and, in cooler parts of their range, enter a prolonged winter hibernation to survive months when food is scarce. Their slow, snuffling movements and audible foraging have made them a recognisable presence in rural and suburban landscapes alike.
          </p>
          <p>
            The European hedgehog has drawn growing conservation attention in recent years. Several regional assessments have reported declines, and the species was reassessed as Near Threatened on the IUCN Red List in 2024. Conservation status is an assessment that reflects current knowledge and can change as new information becomes available.
          </p>
          <h3>Taxonomy and animal group</h3>
          <p>
            The European hedgehog is a mammal in the family Erinaceidae, the group that contains the true hedgehogs and the closely related moonrats, within the order Eulipotyphla (the insectivore-type mammals that also include shrews and moles). Its scientific name is <em>Erinaceus europaeus</em>, and it belongs to the genus <em>Erinaceus</em>, which contains several similar Eurasian hedgehog species. It is sometimes distinguished from the closely related northern white-breasted hedgehog (<em>Erinaceus roumanicus</em>), with which it can be confused where their ranges meet, so identification in those areas is best treated with caution.
          </p>
          <h3>Appearance and recognition</h3>
          <p>
            This is a small, rounded animal whose most distinctive feature is the cap of short, stiff spines covering the back and sides; the spines are typically banded in brown and cream and lie over a coat of coarser fur on the face, underside and legs. The face is pointed with a mobile snout, small dark eyes and rounded ears, and the limbs are short with clawed feet suited to digging and foraging. When alarmed, the animal contracts powerful muscles to draw its spiny coat over its head and limbs, forming the compact spiny ball for which it is widely recognised. Adults are generally a few hundred grams to over a kilogram in weight, varying with season and condition.
          </p>
        </>
      }
      habitat={
        <p>
          The European hedgehog is found in parts of Europe, where it is associated with mosaic landscapes that offer both foraging ground and cover, including gardens, hedgerows, woodland edges, scrub, grassland and farmland margins. It has adapted to many human-influenced settings, and suburban gardens and parks form an important part of its habitat across parts of its range. Populations occur natively in much of western and central Europe, and the species has also been introduced to some areas beyond its natural range, such as certain islands. Its distribution is patchy rather than continuous, and local presence depends heavily on the availability of connected habitat, food and undisturbed sites for nesting and hibernation.
        </p>
      }
      diet={
        <p>
          As an insectivore, the European hedgehog feeds mainly on invertebrates gathered at or near ground level, including beetles, earthworms, caterpillars, slugs and other small soil and surface animals. Its diet is opportunistic and can also include other small prey and occasional plant material or carrion when encountered. Foraging is done largely by smell and sound, with the animal working slowly through leaf litter, grass and soil. The availability and abundance of invertebrate prey is an important factor in its survival, particularly in the period before hibernation when animals must build sufficient body reserves.
        </p>
      }
      behavior={
        <>
          <p>
            European hedgehogs are mainly solitary and nocturnal, ranging over their surroundings at night and resting by day in nests of leaves and vegetation. In cooler parts of their range they hibernate through winter, building an insulated nest and entering a prolonged period of greatly reduced activity to conserve energy when food is unavailable. Breeding typically occurs in the warmer months, after which females raise litters of young in a separate nursery nest; the young are born with soft spines that harden as they develop and become independent within their first months. When threatened, the animal relies on its spines and its rolling defence rather than on speed.
          </p>
          <p>
            As a widespread ground-foraging insectivore, the European hedgehog plays a role in the food webs of the habitats it occupies, helping to consume invertebrates and in turn serving as prey for larger predators in some settings. Its movements through hedgerows, gardens and woodland edges link it to the broader health of these connected habitats, and its presence is often regarded as one indicator of invertebrate-rich, structurally varied landscapes. Because it depends on networks of suitable habitat, factors that fragment or simplify the countryside can affect its ecological function across a wider area.
          </p>
        </>
      }
      humanInteraction={
        <p>
          The European hedgehog has long lived alongside people in gardens, parks and farmland, and it is generally a harmless wild animal that poses no significant threat to humans. It is best appreciated at a distance and left undisturbed as a wild species rather than handled or kept; an injured or distressed hedgehog is a matter for local wildlife authorities or licensed wildlife rescue organisations. The species has attracted conservation concern following reported regional declines and its 2024 reassessment as Near Threatened on the IUCN Red List, a status that reflects current evidence and may be revised over time. Anyone with questions about local hedgehogs, habitat or apparent declines can seek guidance from local wildlife authorities and conservation bodies.
        </p>
      }
      faqs={[
        {
          question: "Is the European hedgehog endangered?",
          answer:
            "It is not currently listed in the highest-risk categories, but it was reassessed as Near Threatened on the IUCN Red List in 2024 following reported regional declines. Conservation status is an assessment based on current evidence and can change over time.",
        },
        {
          question: "Why do hedgehogs roll into a ball?",
          answer:
            "Rolling into a tight spiny ball is the European hedgehog's main defence when it feels threatened. By drawing its spine-covered back over its head and limbs, it protects its softer, vulnerable underside.",
        },
        {
          question: "Do European hedgehogs hibernate?",
          answer:
            "Yes. In cooler parts of their range they hibernate through winter, building an insulated nest and greatly reducing their activity to conserve energy when invertebrate food is scarce.",
        },
        {
          question: "What do European hedgehogs eat?",
          answer:
            "They are insectivores that feed mainly on invertebrates such as beetles, earthworms, caterpillars and slugs gathered at ground level. Their diet is opportunistic and can include other small prey or occasional plant material when encountered.",
        },
      ]}
      quickFacts={[
        { label: "Scientific name", value: "Erinaceus europaeus" },
        { label: "Animal group", value: "Mammal (insectivore)" },
        { label: "Family / order", value: "Erinaceidae / Eulipotyphla" },
        { label: "Size", value: "Small; roughly a few hundred grams to over 1 kg" },
        { label: "Diet", value: "Insectivorous; mainly invertebrates" },
        { label: "Habitat", value: "Gardens, hedgerows, woodland edges and grassland" },
        { label: "Range", value: "Found in parts of Europe; introduced to some areas" },
        { label: "Conservation status", value: "Near Threatened (IUCN Red List)" },
      ]}
      relatedLinks={[
        { label: "Hedgehog Profile", href: "/animals/hedgehog", description: "Hedgehogs more broadly" },
        { label: "European Badger", href: "/animals/european-badger", description: "Another nocturnal European mammal" },
        { label: "European Hare", href: "/animals/european-hare", description: "A familiar farmland mammal" },
        { label: "European fauna", href: "/fauna/continents/europe", description: "Animals of Europe" },
        { label: "Mammals", href: "/animal-encyclopedia/mammals" },
      ]}
    />
  );
}
