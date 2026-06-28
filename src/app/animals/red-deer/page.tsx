import type { Metadata } from "next";
import AnimalProfileLayout from "@/components/AnimalProfileLayout";
import { ANIMAL_SOURCES } from "@/lib/educational/animal-sources";
import { getAnimalGalleryImages, getAnimalImage, getAnimalOgImage } from "@/lib/images/animal-images";
import { buildArticleMetadata } from "@/lib/metadata";

const PATH = "/animals/red-deer";
const TITLE = "Red Deer (Cervus elaphus): Facts & Profile";
const DESC =
  "The Red Deer (Cervus elaphus) is one of the largest deer species, known for the stags' branched antlers and autumn roaring. Habitat, diet and ecology.";

export const metadata: Metadata = buildArticleMetadata({
  title: TITLE,
  description: DESC,
  path: PATH,
  publishedTime: "2026-06-27",
  modifiedTime: "2026-06-27",
  ogImage: getAnimalOgImage("red-deer"),
});

export default function RedDeerPage() {
  return (
    <AnimalProfileLayout
      commonName="Red Deer"
      scientificName="Cervus elaphus"
      pageTitle={TITLE}
      description={DESC}
      path={PATH}
      parentCategory="Mammals"
      parentCategoryHref="/animal-encyclopedia/mammals"
      tags={["Mammal","Deer","Antlered"]}
      image={getAnimalImage("red-deer") ?? undefined}
      galleryImages={getAnimalGalleryImages("red-deer")}
      sources={ANIMAL_SOURCES["red-deer"]}
      publishedDate="2026-06-27"
      modifiedDate="2026-06-27"
      overview={
        <>
          <p>
            The Red Deer (<em>Cervus elaphus</em>) is one of the largest deer species and a familiar large herbivore in many wooded and open landscapes. Adult males, known as stags, are recognized for their branched antlers, which are grown and shed each year, and for the deep roaring and bellowing calls they produce during the autumn breeding season. Females are called hinds, and the young are known as calves.
          </p>
          <p>
            As a member of the true deer family, the Red Deer is a hoofed, plant-eating mammal that occupies forests, moorland and open hill country in parts of Europe and beyond. Its appearance, behavior and seasonal life cycle have made it one of the more widely studied and recognized deer in its range. This profile covers the species specifically, distinct from the broader, general overview of deer as a group.
          </p>
          <p>
            Red Deer are social animals whose herds and movements shift with the seasons, and their presence shapes the vegetation and food webs of the habitats they occupy. The species is currently assessed as Least Concern on the IUCN Red List, an assessment that reflects current understanding and can change as new information becomes available.
          </p>
          <h3>Taxonomy and animal group</h3>
          <p>
            The Red Deer is classified as <em>Cervus elaphus</em>, a species within the deer family Cervidae, part of the order Artiodactyla (the even-toed hoofed mammals). Cervids are distinguished from many other hoofed mammals by antlers, which are bony structures grown and shed annually, typically by males. The Red Deer belongs to the genus <em>Cervus</em>, which includes several other large deer. It is a distinct species and should not be confused with the general category of deer covered on the broader deer profile, nor with closely related but separate species such as the wapiti or elk of other regions, whose taxonomy has been the subject of ongoing scientific discussion.
          </p>
          <h3>Appearance and recognition</h3>
          <p>
            The Red Deer is a large, sturdily built deer with a reddish-brown coat in the warmer months that often turns greyer or browner in winter. As one of the largest deer species, mature stags are notably bigger than hinds and develop branched, multi-tined antlers that grow over the warmer season and are shed and regrown each year. Many individuals show a lighter rump patch and a relatively short tail. Calves are typically born with a spotted coat that fades as they mature. The combination of large size, the stags&#39; branched antlers, and the species&#39; distinctive coat coloration helps separate the Red Deer from smaller deer that may share its range.
          </p>
        </>
      }
      habitat={
        <p>
          The Red Deer is associated with a range of habitats including forests, woodland edges, moorland and open hills, and it occurs in parts of Europe as well as in some areas beyond. Within its range, populations may be native in some areas, while in others the species has been introduced or its distribution has been shaped by human management over long periods. It is adaptable to both wooded and more open landscapes, often using forest cover for shelter and open ground for feeding. Its distribution is uneven and should not be read as covering the entire continent; the species is found in parts of Europe rather than uniformly throughout it.
        </p>
      }
      diet={
        <p>
          The Red Deer is a herbivore, feeding on a variety of plant material that changes with the season and the habitat available. Its diet commonly includes grasses, herbs, sedges, the shoots and leaves of shrubs and trees, and other vegetation such as buds, bark and fruits at certain times of year. As a large grazing and browsing mammal, it adjusts its feeding between open grassland and woodland sources depending on what is accessible. This flexible plant-based diet allows the species to persist across the differing landscapes it occupies.
        </p>
      }
      behavior={
        <>
          <p>
            Red Deer are social animals that often live in groups, with hinds and their young frequently forming herds separate from groups of stags for much of the year. The species is best known for its autumn breeding season, the rut, during which stags roar and bellow, compete for access to hinds, and may display or spar with rivals. After a gestation period spanning several months, hinds typically give birth to a single calf in the warmer season, caring for it through its early life. Daily activity often centers on feeding periods around dawn and dusk, with animals moving between sheltered and open areas.
          </p>
          <p>
            As a large herbivore, the Red Deer plays a meaningful role in the ecosystems it inhabits. Through grazing and browsing, it influences the structure and composition of vegetation, affecting grasslands, woodland regeneration and the balance of plant communities. It also serves as a prey species for large predators where these are present, linking it to the wider food web. The seasonal movements and feeding patterns of Red Deer herds can shape the landscapes they occupy, making the species an influential component of its habitat&#39;s ecology.
          </p>
        </>
      }
      humanInteraction={
        <p>
          The Red Deer is currently assessed as Least Concern on the IUCN Red List, an assessment that reflects current knowledge and may be revised over time. It is a wild animal, not a pet, and stags can be large and powerful, particularly during the autumn rut when males may be more assertive; observers should keep a respectful distance and avoid approaching or feeding wild deer. Where Red Deer interact with farmland, forestry, roads or other human activity, questions about local populations or conflict are best directed to local wildlife authorities, who manage such matters in their area. Long-term conservation of the species depends on the continued health of the varied habitats it relies upon.
        </p>
      }
      faqs={[
        {
          question: "Are male and female Red Deer different?",
          answer:
            "Yes. Males, called stags, are larger and grow branched antlers that are shed and regrown each year, while females, called hinds, do not grow antlers. The stags' roaring during the autumn rut is one of the species' most recognizable features.",
        },
        {
          question: "Where are Red Deer found?",
          answer:
            "Red Deer are associated with forests, moorland and open hills in parts of Europe and in some areas beyond. Their distribution is uneven, and they are found in parts of their range rather than uniformly across an entire continent.",
        },
        {
          question: "What do Red Deer eat?",
          answer:
            "Red Deer are herbivores. They feed on grasses, herbs, shoots, leaves and other plant material, adjusting their diet by season and the habitat available to them.",
        },
        {
          question: "Are Red Deer endangered?",
          answer:
            "The Red Deer is currently assessed as Least Concern on the IUCN Red List. This is an assessment based on current knowledge and can change over time as new information becomes available.",
        },
      ]}
      quickFacts={[
        { label: "Scientific name", value: "Cervus elaphus" },
        { label: "Animal group", value: "Mammal (hoofed herbivore)" },
        { label: "Family or order", value: "Cervidae, order Artiodactyla" },
        { label: "Size", value: "One of the largest deer species; stags larger than hinds" },
        { label: "Diet", value: "Herbivore (grasses, herbs, shoots, leaves)" },
        { label: "Habitat", value: "Forests, moorland and open hills" },
        { label: "Range", value: "Found in parts of Europe and beyond" },
        { label: "Conservation status", value: "Least Concern (IUCN Red List)" },
      ]}
      relatedLinks={[
        { label: "Deer Profile", href: "/animals/deer", description: "Deer more broadly" },
        { label: "Roe Deer Profile", href: "/animals/roe-deer", description: "A smaller European deer" },
        { label: "Moose Profile", href: "/animals/moose", description: "The largest deer" },
        { label: "European fauna", href: "/fauna/continents/europe", description: "Animals of Europe" },
        { label: "Mammals", href: "/animal-encyclopedia/mammals" },
      ]}
    />
  );
}
