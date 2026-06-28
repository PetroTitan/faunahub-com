import type { Metadata } from "next";
import AnimalProfileLayout from "@/components/AnimalProfileLayout";
import { ANIMAL_SOURCES } from "@/lib/educational/animal-sources";
import { getAnimalGalleryImages, getAnimalImage, getAnimalOgImage } from "@/lib/images/animal-images";
import { buildArticleMetadata } from "@/lib/metadata";

const PATH = "/animals/rhea";
const TITLE = "Rhea: South America's Large Flightless Bird";
const DESC =
  "Learn about the rhea, a large flightless ratite bird of South American grasslands: its appearance, habitat, diet, behavior, ecology and conservation.";

export const metadata: Metadata = buildArticleMetadata({
  title: TITLE,
  description: DESC,
  path: PATH,
  publishedTime: "2026-06-28",
  modifiedTime: "2026-06-28",
  ogImage: getAnimalOgImage("rhea"),
});

export default function RheaPage() {
  return (
    <AnimalProfileLayout
      commonName="Rhea"
      scientificName="Rhea americana and Rhea pennata"
      pageTitle={TITLE}
      description={DESC}
      path={PATH}
      parentCategory="Birds"
      parentCategoryHref="/animal-encyclopedia/birds"
      tags={["Bird","Ratite","Grassland"]}
      image={getAnimalImage("rhea") ?? undefined}
      galleryImages={getAnimalGalleryImages("rhea")}
      sources={ANIMAL_SOURCES["rhea"]}
      publishedDate="2026-06-28"
      modifiedDate="2026-06-28"
      overview={
        <>
          <p>
            Rheas are large, flightless birds found in open grasslands, scrub and pampas across parts of South America. They belong to the ratite group, the same broad assemblage that includes ostriches, emus and cassowaries, though rheas are native to the Americas and are not closely related to the African ostrich despite a superficial resemblance. The name &quot;rhea&quot; covers more than one species, most commonly the greater rhea (<em>Rhea americana</em>) and the lesser or Darwin&#39;s rhea (<em>Rhea pennata</em>).
          </p>
          <p>
            Built for life on the ground, rheas have long, powerful legs, a long neck, and reduced wings that cannot lift them into the air. Instead, the wings help with balance and steering during fast running. These birds are among the largest in the Americas and are a familiar part of the open-country landscapes where they occur.
          </p>
          <p>
            Because &quot;rhea&quot; refers to a group rather than a single species, generalizations should be read with care. Body size, exact range, and conservation outlook differ between the greater and lesser rheas, and assessments of their status are periodically revised as new information becomes available.
          </p>
          <h3>Taxonomy and animal group</h3>
          <p>
            Rheas are placed among the ratites, a group of large flightless birds, and form the family Rheidae within the order Rheiformes. The name applies to more than one living species rather than a single animal: the greater rhea (<em>Rhea americana</em>) and the lesser or Darwin&#39;s rhea (<em>Rhea pennata</em>) are the two most widely recognized, both in the genus <em>Rhea</em>. Some authorities have at times treated the lesser rhea under the separate genus <em>Pterocnemia</em>, reflecting ongoing discussion about how the group should be classified. As ratites, rheas share a flat breastbone that lacks the keel anchoring the flight muscles of most flying birds, which is consistent with their flightless way of life.
          </p>
          <h3>Appearance and recognition</h3>
          <p>
            Rheas are tall, long-legged birds with a rounded body, a slender neck, and a small head bearing a broad, flat bill. Their plumage is soft and loose rather than sleek, typically in muted shades of grey and brown that blend with grassland and scrub; the lesser rhea often shows pale spotting or flecking, while the greater rhea tends to be larger and plainer. Unlike many birds, the wings are proportionally large for a flightless species and are held out for balance when the bird runs at speed. The legs are strong and the feet usually bear three forward-facing toes, an arrangement well suited to running across open ground.
          </p>
        </>
      }
      habitat={
        <p>
          Rheas are associated with open habitats such as grasslands, pampas, savanna and scrub in parts of South America. The greater rhea is generally linked with lowland grasslands and open country, while the lesser or Darwin&#39;s rhea occurs in parts of the southern and higher-elevation regions, including Patagonian steppe and Andean highland areas. Their ranges do not cover the entire continent, and distribution varies between the two species and across local conditions. As ground-dwelling birds, they favor terrain that is open enough to allow long sightlines and room to run, rather than dense forest.
        </p>
      }
      diet={
        <p>
          Rheas are largely herbivorous and feed on a wide range of plant material, including broad-leaved plants, grasses, seeds, fruits and roots. They also take small animals such as insects and other invertebrates, and occasionally small vertebrates, making their diet broadly omnivorous with a strong plant emphasis. Foraging takes place on the ground as the birds walk slowly through open vegetation, pecking and grazing as they go. Like some other ground birds, they may swallow grit that helps grind food in the digestive tract.
        </p>
      }
      behavior={
        <>
          <p>
            Rheas are active during the day and are often seen walking or feeding in open country, sometimes in loose groups outside the breeding season. They are strong, fast runners and rely on running rather than flight to put distance between themselves and disturbance. A notable feature of their life cycle is that the male takes on much of the parental role: males build a ground nest, and several females may lay eggs into it, after which the male incubates the eggs and later guards and tends the young. This arrangement, in which one male cares for a communal clutch, is a well-documented part of rhea breeding behavior.
          </p>
          <p>
            As large grazing and foraging birds, rheas play a role in the grassland and scrub ecosystems where they live. Through their mixed diet they can influence plant communities and help disperse the seeds of plants they eat, while their feeding on insects and other invertebrates links them into local food webs. As sizable ground birds, they may also form part of the prey base for larger predators, particularly when young. Their presence is one element of the broader open-country fauna of parts of South America.
          </p>
        </>
      }
      humanInteraction={
        <p>
          Rheas have long featured in the open landscapes and cultural traditions of parts of South America, and in some areas they live near farmland and pastoral land. They are generally wary of people, though, as with any large wild animal, individuals are best observed at a respectful distance and not approached or fed. Conservation status varies by species and is assessed by the IUCN Red List: the greater rhea has been assessed as Near Threatened and the lesser rhea as Least Concern, and such assessments can change as new data emerge. Concerns about wild rheas, including any conflict near farmland, are best directed to local wildlife authorities.
        </p>
      }
      faqs={[
        {
          question: "Are rheas the same as ostriches?",
          answer:
            "No. Rheas and ostriches are both large flightless ratite birds and look superficially similar, but rheas are native to the Americas while the ostrich is an African bird, and the two are not closely related.",
        },
        {
          question: "Can rheas fly?",
          answer:
            "No, rheas are flightless. Their wings are relatively large for a flightless bird but are used mainly for balance and steering while running rather than for flight.",
        },
        {
          question: "Do male or female rheas care for the eggs?",
          answer:
            "In rheas the male takes on much of the parental role. He builds the nest, incubates the eggs that several females may lay, and later guards and tends the young.",
        },
        {
          question: "What is the conservation status of the rhea?",
          answer:
            "It varies by species because \"rhea\" covers more than one bird. The IUCN Red List has assessed the greater rhea (Rhea americana) as Near Threatened and the lesser rhea (Rhea pennata) as Least Concern, and such assessments can be revised over time.",
        },
      ]}
      quickFacts={[
        { label: "Scientific name", value: "Rhea americana and Rhea pennata" },
        { label: "Animal group", value: "Birds (flightless ratites)" },
        { label: "Family/order", value: "Rheidae, order Rheiformes" },
        { label: "Size", value: "Large; among the biggest birds of the Americas" },
        { label: "Diet", value: "Mainly herbivorous; also insects and small animals" },
        { label: "Habitat", value: "Grasslands, pampas, savanna and scrub" },
        { label: "Range", value: "Parts of South America" },
        { label: "Conservation status", value: "Varies by species (IUCN: greater rhea Near Threatened, lesser rhea Least Concern)" },
      ]}
      relatedLinks={[
        { label: "Ostrich", href: "/animals/ostrich", description: "An African ratite" },
        { label: "Emu", href: "/animals/emu", description: "An Australian ratite" },
        { label: "Hoatzin", href: "/animals/hoatzin", description: "Another South American bird" },
        { label: "South American fauna", href: "/fauna/continents/south-america", description: "Animals of South America" },
        { label: "Birds", href: "/animal-encyclopedia/birds" },
      ]}
    />
  );
}
