import type { Metadata } from "next";
import AnimalProfileLayout from "@/components/AnimalProfileLayout";
import { ANIMAL_SOURCES } from "@/lib/educational/animal-sources";
import { getAnimalGalleryImages, getAnimalImage, getAnimalOgImage } from "@/lib/images/animal-images";
import { buildArticleMetadata } from "@/lib/metadata";

const PATH = "/animals/barn-owl";
const TITLE = "Barn Owl (Tyto alba): The Pale Night Hunter";
const DESC =
  "The barn owl is a pale, heart-faced nocturnal bird of farmland and grassland, hunting voles by sound. Learn its habitat, diet, behavior, and conservation.";

export const metadata: Metadata = buildArticleMetadata({
  title: TITLE,
  description: DESC,
  path: PATH,
  publishedTime: "2026-06-27",
  modifiedTime: "2026-06-27",
  ogImage: getAnimalOgImage("barn-owl"),
});

export default function BarnOwlPage() {
  return (
    <AnimalProfileLayout
      commonName="Barn Owl"
      scientificName="Tyto alba"
      pageTitle={TITLE}
      description={DESC}
      path={PATH}
      parentCategory="Birds"
      parentCategoryHref="/animal-encyclopedia/birds"
      tags={["Bird","Owl","Nocturnal"]}
      image={getAnimalImage("barn-owl") ?? undefined}
      galleryImages={getAnimalGalleryImages("barn-owl")}
      sources={ANIMAL_SOURCES["barn-owl"]}
      publishedDate="2026-06-27"
      modifiedDate="2026-06-27"
      overview={
        <>
          <p>
            The barn owl (<em>Tyto alba</em>) is a medium-sized nocturnal bird of prey known for its pale plumage and distinctive heart-shaped facial disc. Across parts of Europe it is a familiar bird of farmland, meadows, and rough grassland, where it hunts silently after dusk for small mammals. Its ghostly appearance, quiet flight, and habit of roosting in barns, church towers, and hollow trees have made it one of the most recognizable owls in the region.
          </p>
          <p>
            Although often presented as a quintessential European farmland bird, the barn owl is in fact one of the most widespread birds in the world, occurring on most continents in a range of warm and temperate environments. This profile focuses on its life in European agricultural landscapes, where it has long shared space with people, but it is worth remembering that the species is cosmopolitan rather than confined to any single continent.
          </p>
          <p>
            The barn owl is currently assessed as Least Concern on the IUCN Red List. As with all conservation assessments, this status reflects the best available evidence at the time of evaluation and can change as new information emerges or as conditions in the wider landscape shift.
          </p>
          <h3>Taxonomy and animal group</h3>
          <p>
            The barn owl is a bird belonging to the family Tytonidae, within the order Strigiformes, which contains all owls. Tytonidae, the barn owls and bay owls, is distinct from Strigidae, the family that includes the so-called typical owls such as tawny and eagle owls. Members of Tytonidae are recognized in part by their heart-shaped facial discs and relatively long legs. The species <em>Tyto alba</em> is widely distributed and shows considerable variation across its range, and the boundaries between some of its forms and closely related <em>Tyto</em> species are still debated by taxonomists. The common name and scientific name used here refer to this widespread heart-faced owl rather than to any single regional population.
          </p>
          <h3>Appearance and recognition</h3>
          <p>
            The barn owl is most easily recognized by its pale, heart-shaped facial disc, dark eyes, and overall light appearance. The upperparts are typically warm buff or golden tones flecked with grey, while the underparts and face range from white to pale buff, giving the bird a luminous look in low light. It has long, rounded wings, a relatively short tail, and long, feathered legs ending in strong talons. In flight it appears large-headed and pale, moving with slow, buoyant, and almost soundless wingbeats. Females and males can look broadly similar, though plumage tone and the extent of darker spotting can vary between individuals and across populations.
          </p>
        </>
      }
      habitat={
        <p>
          Across parts of Europe the barn owl is associated with open countryside: farmland, hay meadows, rough grassland, field margins, and the edges of marshes. It favors areas that support populations of small mammals and that offer sheltered nesting and roosting sites, which historically have included barns, derelict buildings, church towers, and hollow trees. The species occurs in parts of southern, western, and central Europe, with its presence in cooler northern regions more limited and influenced by winter conditions. Because it is a cosmopolitan bird found on most continents, its European range represents only one portion of a much broader global distribution. It should not be considered native to the entire continent or to every region within it, and in some parts of the world beyond its natural range it occurs as an introduced bird rather than a native one.
        </p>
      }
      diet={
        <p>
          The barn owl is a specialist hunter of small mammals, with voles, mice, shrews, and similar rodents forming the core of its diet in many European areas. It hunts mainly at night and during twilight, quartering low over open ground and relying heavily on its acute hearing to detect prey moving through grass, often in complete darkness. The asymmetrical placement of its ears and its broad facial disc help it pinpoint sounds with remarkable precision. Indigestible remains such as bones and fur are compacted and ejected as pellets, which accumulate at roost sites and are widely used by researchers to study what the birds have been eating.
        </p>
      }
      behavior={
        <>
          <p>
            Barn owls are largely nocturnal and tend to be solitary or to live in pairs rather than in flocks. They are quiet in flight thanks to specialized feather structures that reduce sound, allowing them to approach prey unheard. The species is known for its eerie screeching and hissing calls rather than the hooting associated with some other owls. Pairs typically nest in cavities or sheltered ledges, and clutch sizes and breeding success are strongly influenced by the abundance of small mammals in a given season; in years when prey is plentiful, more young may be raised. Young owls remain dependent on the adults for a period after hatching before dispersing to establish their own territories.
          </p>
          <p>
            As a predator of small mammals, the barn owl plays a meaningful role in the food webs of farmland and grassland ecosystems, helping to regulate populations of voles and mice. Its strong association with agricultural landscapes means it both depends on and reflects the health of these environments, and changes in farming practice, habitat structure, and prey availability can be mirrored in its numbers. In turn, the owl is part of a wider community of wildlife that relies on open countryside, and its roost and nest sites can be shared, at different times, with other species. Studies of barn owl pellets also provide valuable indirect information about the small-mammal communities present in a landscape.
          </p>
        </>
      }
      humanInteraction={
        <p>
          The barn owl has a long cultural association with people in Europe, frequently nesting in human-made structures and benefiting historically from traditional farm buildings. It is currently assessed as Least Concern on the IUCN Red List, an evaluation that can change over time; at a local level, populations can be sensitive to loss of nesting sites, changes in land use, severe winters, and reduced prey. The barn owl is a wild bird and not a pet, and it is best appreciated from a distance without disturbance to roosts or nests. Anyone who encounters an injured owl or has concerns about local wildlife should contact local wildlife authorities or a licensed wildlife rehabilitation organization rather than attempting to handle the bird themselves.
        </p>
      }
      faqs={[
        {
          question: "Is the barn owl found only in Europe?",
          answer:
            "No. Although it is a familiar farmland bird in parts of Europe, the barn owl is one of the most widespread birds in the world and occurs on most continents. Its European range is only one portion of a much broader global distribution.",
        },
        {
          question: "What does the barn owl eat?",
          answer:
            "It feeds mainly on small mammals such as voles, mice, and shrews, which it hunts at night. The barn owl relies heavily on its acute hearing to locate prey moving through grass, often in near-total darkness.",
        },
        {
          question: "Why does the barn owl have a heart-shaped face?",
          answer:
            "The heart-shaped facial disc helps channel sound toward the owl's ears, supporting its ability to locate prey by hearing alone. Combined with the asymmetrical placement of its ears, this gives the bird very precise directional hearing.",
        },
        {
          question: "What should I do if I find an injured barn owl?",
          answer:
            "The barn owl is a wild bird and should not be handled or kept. Contact local wildlife authorities or a licensed wildlife rehabilitation organization, who can advise on the appropriate next steps.",
        },
      ]}
      quickFacts={[
        { label: "Scientific name", value: "Tyto alba" },
        { label: "Animal group", value: "Bird (nocturnal bird of prey)" },
        { label: "Family / order", value: "Tytonidae / Strigiformes" },
        { label: "Size", value: "Medium-sized owl with long, rounded wings" },
        { label: "Diet", value: "Carnivore; mainly small mammals such as voles and mice" },
        { label: "Habitat", value: "Farmland, grassland, and open countryside" },
        { label: "Range", value: "Cosmopolitan; native across much of Europe, introduced in some areas elsewhere" },
        { label: "Conservation status", value: "Least Concern (IUCN Red List)" },
      ]}
      relatedLinks={[
        { label: "Owl Profile", href: "/animals/owl", description: "Owls more broadly" },
        { label: "Golden Eagle", href: "/animals/golden-eagle", description: "Another European bird of prey" },
        { label: "Eagle Profile", href: "/animals/eagle", description: "Eagles more broadly" },
        { label: "European fauna", href: "/fauna/continents/europe", description: "Animals of Europe" },
        { label: "Birds", href: "/animal-encyclopedia/birds" },
      ]}
    />
  );
}
