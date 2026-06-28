import type { Metadata } from "next";
import AnimalProfileLayout from "@/components/AnimalProfileLayout";
import { ANIMAL_SOURCES } from "@/lib/educational/animal-sources";
import { getAnimalGalleryImages, getAnimalImage, getAnimalOgImage } from "@/lib/images/animal-images";
import { buildArticleMetadata } from "@/lib/metadata";

const PATH = "/animals/cane-toad";
const TITLE = "Cane Toad: An Invasive Amphibian";
const DESC =
  "The cane toad (Rhinella marina) is a large toad native to the Americas and introduced to Australia, where it became a damaging invasive species.";

export const metadata: Metadata = buildArticleMetadata({
  title: TITLE,
  description: DESC,
  path: PATH,
  publishedTime: "2026-06-28",
  modifiedTime: "2026-06-28",
  ogImage: getAnimalOgImage("cane-toad"),
});

export default function CaneToadPage() {
  return (
    <AnimalProfileLayout
      commonName="Cane Toad"
      scientificName="Rhinella marina"
      pageTitle={TITLE}
      description={DESC}
      path={PATH}
      parentCategory="Reptiles & Amphibians"
      parentCategoryHref="/animal-encyclopedia/reptiles"
      tags={["Amphibian","Toad","Introduced"]}
      image={getAnimalImage("cane-toad") ?? undefined}
      galleryImages={getAnimalGalleryImages("cane-toad")}
      sources={ANIMAL_SOURCES["cane-toad"]}
      publishedDate="2026-06-28"
      modifiedDate="2026-06-28"
      overview={
        <>
          <p>
            The cane toad (<em>Rhinella marina</em>) is a large, ground-dwelling amphibian native to the Americas, where its natural range stretches across parts of Central and South America. It is one of the world&#39;s largest true toads and is well known for its tolerance of varied environments, its high reproductive output, and the toxic secretions produced by glands on its body.
          </p>
          <p>
            Although native to the Americas, the cane toad is most often discussed today because of its history as an introduced species. It was deliberately released in a number of regions, including parts of Australia, in attempts to control agricultural pests. In Australia it failed in that role and instead established large populations, spreading widely and becoming a damaging invasive species. It is not native to Australia or the wider Oceania region.
          </p>
          <p>
            On the IUCN Red List, the cane toad is assessed as Least Concern across its overall range, a category that reflects its broad and widespread distribution rather than any judgment about its impact where it has been introduced. Conservation assessments can change as new information becomes available.
          </p>
          <h3>Taxonomy and animal group</h3>
          <p>
            The cane toad is classified as <em>Rhinella marina</em>, a species in the true toad family Bufonidae, within the order Anura (frogs and toads). It was historically placed in the genus <em>Bufo</em> and may still appear under the older name <em>Bufo marinus</em> in some references. As an amphibian, it belongs to the class Amphibia, the group that includes frogs, toads, salamanders and caecilians. The common name &quot;cane toad&quot; refers to its past introduction into sugarcane-growing regions.
          </p>
          <h3>Appearance and recognition</h3>
          <p>
            The cane toad is a robust, heavy-bodied toad with dry, warty skin that is typically brown, olive or reddish-brown above and paler, often mottled, below. It is among the largest of the true toads, and mature individuals can reach a substantial size, with females generally larger than males. A distinctive feature is the pair of large, raised parotoid glands located behind the eyes, which extend down over the shoulders; these glands are part of its defensive chemistry. The toad has short limbs, a broad head, and bony ridges above the eyes, giving it a recognizable, stocky outline.
          </p>
        </>
      }
      habitat={
        <p>
          In its native range, the cane toad is found across parts of Central and South America, where it occupies a wide variety of habitats including grasslands, woodlands, and disturbed and human-altered landscapes. It is highly adaptable and tolerates dry conditions better than many amphibians, though it depends on still or slow-moving water for breeding. Where it has been introduced, including in parts of Australia and on various islands, established populations are associated with warm, often lowland environments and frequently with areas modified by people. Its distribution outside the Americas reflects human introduction rather than any natural occurrence, and it should be understood as introduced and invasive in Australia, not native to Australia or Oceania.
        </p>
      }
      diet={
        <p>
          The cane toad is a generalist, opportunistic feeder that consumes a broad range of small prey. Its diet is dominated by insects and other invertebrates such as beetles, ants and other arthropods, but it will also take other small animals it can overpower and swallow. Unlike many amphibians, it readily eats non-living and unusual food items as well, which contributes to its success in human-modified environments. This flexible, broad diet helps the species establish and persist in many of the places where it has been introduced.
        </p>
      }
      behavior={
        <>
          <p>
            Cane toads are largely nocturnal and become most active in warm, humid conditions, sheltering during the day in cool, damp refuges. They are notable for a very high reproductive output: females can lay long strings containing large numbers of eggs in still or slow water, and these develop through an aquatic tadpole stage before transforming into small toads. The eggs, tadpoles and adults all carry toxic compounds as a defense. This combination of rapid breeding, broad tolerance and chemical defense underlies the species&#39; ability to build large populations quickly where conditions suit it.
          </p>
          <p>
            In its native range, the cane toad functions as both predator of invertebrates and prey for animals that have evolved alongside it, forming a normal part of local food webs. Where it has been introduced, however, its ecological role is very different and often harmful: native predators that have no evolutionary experience with the toad may be poisoned when they attempt to eat it, because of the toxic secretions in its glands, eggs and tadpoles. In parts of Australia this has been linked to declines in some native predators. The species also competes with and preys upon native fauna, which is why it is regarded as a damaging invasive species outside its natural range.
          </p>
        </>
      }
      humanInteraction={
        <p>
          The cane toad&#39;s relationship with people is shaped largely by its history of deliberate introduction and its subsequent spread as an invasive species in regions such as Australia. Its skin and glands produce toxic substances, so it is best observed only from a distance. Concerns about possible contact or poisoning involving people should be directed to qualified medical professionals or local health authorities, and concerns involving animals to a veterinarian. Questions about cane toads in gardens, waterways or natural areas, and any management of invasive populations, should be referred to local wildlife or environmental authorities, who coordinate region-specific responses. Although the species is listed as Least Concern globally because of its broad range, this status does not lessen the harm it causes where it has been introduced.
        </p>
      }
      faqs={[
        {
          question: "Is the cane toad native to Australia?",
          answer:
            "No. The cane toad is native to parts of the Americas and was introduced to Australia, where it became a damaging invasive species. It is not native to Australia or the wider Oceania region.",
        },
        {
          question: "Why is the cane toad considered harmful where it is introduced?",
          answer:
            "It produces toxic secretions, and native predators that have not evolved alongside it can be poisoned when they try to eat it. It also competes with and preys on native wildlife, which has been linked to declines in some native predators in parts of Australia.",
        },
        {
          question: "What should I do if I am concerned about a cane toad?",
          answer:
            "Observe it only from a distance, as its glands produce toxic substances. Direct concerns about contact or poisoning involving people to qualified medical professionals or local health authorities, those involving animals to a veterinarian, and questions about invasive populations to local wildlife authorities.",
        },
        {
          question: "Why is the cane toad listed as Least Concern if it is invasive?",
          answer:
            "The IUCN Red List assessment of Least Concern reflects the species' broad and widespread distribution across its native and introduced range. It is a changeable assessment and does not measure the harm the toad causes where it has been introduced.",
        },
      ]}
      quickFacts={[
        { label: "Scientific name", value: "Rhinella marina (formerly Bufo marinus)" },
        { label: "Animal group", value: "Amphibian (true toad)" },
        { label: "Family / order", value: "Bufonidae / Anura" },
        { label: "Size", value: "Among the largest true toads; females generally larger than males" },
        { label: "Diet", value: "Generalist; mainly insects and other invertebrates" },
        { label: "Habitat", value: "Grasslands, woodlands and human-modified areas near still water" },
        { label: "Range", value: "Native to parts of the Americas; introduced and invasive in parts of Australia and elsewhere" },
        { label: "Conservation status", value: "Least Concern (IUCN Red List, overall range; a changeable assessment)" },
      ]}
      relatedLinks={[
        { label: "Toad", href: "/animals/toad", description: "Toads more broadly" },
        { label: "Frog", href: "/animals/frog", description: "A related amphibian" },
        { label: "Salamander", href: "/animals/salamander", description: "Another amphibian" },
        { label: "Oceania fauna", href: "/fauna/continents/oceania", description: "Animals of Oceania" },
        { label: "Reptiles & Amphibians", href: "/animal-encyclopedia/reptiles" },
      ]}
    />
  );
}
