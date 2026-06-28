import type { Metadata } from "next";
import AnimalProfileLayout from "@/components/AnimalProfileLayout";
import { ANIMAL_SOURCES } from "@/lib/educational/animal-sources";
import { getAnimalGalleryImages, getAnimalImage, getAnimalOgImage } from "@/lib/images/animal-images";
import { buildArticleMetadata } from "@/lib/metadata";

const PATH = "/animals/takahe";
const TITLE = "Takahe: New Zealand's Flightless Blue Rail";
const DESC =
  "The takahe is a large flightless rail endemic to New Zealand, once thought extinct and rediscovered in 1948. Learn about its biology and conservation.";

export const metadata: Metadata = buildArticleMetadata({
  title: TITLE,
  description: DESC,
  path: PATH,
  publishedTime: "2026-06-28",
  modifiedTime: "2026-06-28",
  ogImage: getAnimalOgImage("takahe"),
});

export default function TakahePage() {
  return (
    <AnimalProfileLayout
      commonName="Takahe"
      scientificName="Porphyrio hochstetteri"
      pageTitle={TITLE}
      description={DESC}
      path={PATH}
      parentCategory="Birds"
      parentCategoryHref="/animal-encyclopedia/birds"
      tags={["Bird","Flightless rail","NZ endemic"]}
      image={getAnimalImage("takahe") ?? undefined}
      galleryImages={getAnimalGalleryImages("takahe")}
      sources={ANIMAL_SOURCES["takahe"]}
      publishedDate="2026-06-28"
      modifiedDate="2026-06-28"
      overview={
        <>
          <p>
            The takahe (<em>Porphyrio hochstetteri</em>) is a large, flightless rail endemic to New Zealand. With its rounded body, stout red bill and deep blue-green plumage, it is one of the most distinctive birds in the country and a well-known symbol of New Zealand conservation. As a ground-dwelling herbivore, it feeds mainly on grasses and other plants.
          </p>
          <p>
            The takahe is famous for its conservation history. For decades it was believed to be extinct, until it was rediscovered in 1948 in a remote mountain valley in the South Island. Since then it has survived only through intensive, long-term conservation management, and the IUCN Red List currently assesses the species as Endangered, a status that reflects an ongoing assessment and may change as circumstances change.
          </p>
          <p>
            Because it cannot fly and reproduces slowly, the takahe is sensitive to introduced predators and habitat pressures. Today its survival depends on managed populations, predator control and careful monitoring carried out by conservation authorities in New Zealand.
          </p>
          <h3>Taxonomy and animal group</h3>
          <p>
            The takahe is a bird in the rail family, Rallidae, within the order Gruiformes, and its scientific name is <em>Porphyrio hochstetteri</em>. It belongs to the swamphen genus <em>Porphyrio</em>, which also includes smaller flighted relatives such as the widespread Australasian swamphen (<em>Porphyrio melanotus</em>). The living takahe of the South Island is treated as the distinct species <em>Porphyrio hochstetteri</em>; it is closely related to the North Island takahe (<em>Porphyrio mantelli</em>), a separate form known mainly from subfossil remains and no longer living, with which it was historically sometimes confused.
          </p>
          <h3>Appearance and recognition</h3>
          <p>
            The takahe is a heavy, robust rail, noticeably larger and bulkier than most members of its family, with a rounded body, short tail and sturdy legs. Its plumage is a rich blend of deep blue and turquoise on the head, neck and underparts, shading to an olive-green back and wings. The most striking features are its large, thick, scarlet-red bill, which extends as a red frontal shield onto the forehead, and its stout reddish legs and feet. Although it has small wings, it is flightless, and the wings are used mainly in display rather than flight.
          </p>
        </>
      }
      habitat={
        <p>
          The takahe is endemic to New Zealand and is not found naturally anywhere else; it should not be described as native to all of Oceania. Historically it was associated with alpine and subalpine tussock grasslands and adjacent areas in parts of the South Island, and the surviving wild population was rediscovered in a remote mountain valley there in 1948. Through conservation management, takahe are now also maintained on several predator-managed offshore islands and in protected sanctuaries around New Zealand, where habitats of grassland, wetland margins and forest edge are managed for them. Its overall distribution today is closely tied to these protected and managed sites within New Zealand.
        </p>
      }
      diet={
        <p>
          The takahe is primarily herbivorous and feeds mainly on grasses and other plants. In tussock-grassland habitats it characteristically grips a tussock stem in one foot and uses its strong bill to strip out the softer, nutrient-rich bases of the leaves, discarding the tougher outer material. Its diet also includes the seeds, shoots and starchy bases of various grasses and sedges, and in some habitats fern rhizomes and other plant parts. This plant-based, energy-conservative feeding style suits a large, slow-moving, ground-foraging bird.
        </p>
      }
      behavior={
        <>
          <p>
            Takahe are largely sedentary, ground-dwelling birds that move by walking and tend to occupy defined territories. They are typically seen in pairs or small family groups and form long-term pair bonds, working together to defend territory and raise young. Breeding is slow, with small clutches and extended parental care, and chicks may remain with their parents for a prolonged period before becoming independent. This low reproductive rate, combined with flightlessness, means populations recover slowly and are vulnerable to disturbance, which is part of why intensive management is needed.
          </p>
          <p>
            As a large grassland herbivore, the takahe plays a role in grazing and processing tussock and other vegetation, influencing plant growth and contributing to seed dispersal through its feeding. Historically it would have been part of an unusual New Zealand fauna dominated by birds in the absence of native land mammals. Its decline and near-extinction illustrate how flightless, slowly reproducing endemic species can be especially affected by introduced predators and competitors, making the takahe both an ecological participant in its grassland habitats and an indicator of the health of managed conservation sites.
          </p>
        </>
      }
      humanInteraction={
        <p>
          The takahe is a focus of long-term conservation work in New Zealand and is widely regarded as a national conservation icon following its dramatic rediscovery in 1948. The IUCN Red List assesses it as Endangered, an assessment that can change over time, and its persistence depends on predator control, managed island and sanctuary populations, captive breeding and ongoing monitoring led by conservation authorities. Members of the public encounter takahe mainly in sanctuaries and protected reserves, where the appropriate response is to observe quietly and follow site rules; questions about the species, sightings or conservation concerns are best directed to local wildlife and conservation authorities in New Zealand. It is a protected wild bird, not a pet.
        </p>
      }
      faqs={[
        {
          question: "Is the takahe extinct?",
          answer:
            "No. The takahe was once thought to be extinct but was famously rediscovered in 1948 in a remote mountain valley in New Zealand. It survives today through intensive conservation management and is assessed by the IUCN Red List as Endangered.",
        },
        {
          question: "Where is the takahe found?",
          answer:
            "The takahe is endemic to New Zealand and is not found naturally anywhere else. Today its populations are concentrated at protected and predator-managed sites, including offshore islands and sanctuaries, within New Zealand.",
        },
        {
          question: "Can the takahe fly?",
          answer:
            "No, the takahe is flightless. It has small wings used mainly in display rather than flight, and it moves about by walking on its sturdy legs.",
        },
        {
          question: "What does the takahe eat?",
          answer:
            "The takahe is mainly herbivorous, feeding largely on grasses and other plants. It often strips the soft, nutritious bases from tussock leaves and also eats seeds, shoots and other plant material.",
        },
      ]}
      quickFacts={[
        { label: "Scientific name", value: "Porphyrio hochstetteri" },
        { label: "Animal group", value: "Bird (flightless rail)" },
        { label: "Family/order", value: "Rallidae; Gruiformes" },
        { label: "Size", value: "Large, heavy-bodied rail; up to roughly 63 cm long" },
        { label: "Diet", value: "Herbivore; mainly grasses and other plants" },
        { label: "Habitat", value: "Tussock grassland, wetland margins and managed sanctuaries" },
        { label: "Range", value: "Endemic to New Zealand" },
        { label: "Conservation status", value: "Endangered (IUCN Red List; assessment may change)" },
      ]}
      relatedLinks={[
        { label: "Kakapo", href: "/animals/kakapo", description: "Another flightless New Zealand bird" },
        { label: "Kiwi", href: "/animals/kiwi", description: "A New Zealand flightless bird" },
        { label: "Kea", href: "/animals/kea", description: "A New Zealand parrot" },
        { label: "Oceania fauna", href: "/fauna/continents/oceania", description: "Animals of Oceania" },
        { label: "Endangered Animals", href: "/endangered-animals", description: "Conservation status & the Red List" },
      ]}
    />
  );
}
