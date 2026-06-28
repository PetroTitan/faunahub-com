import type { Metadata } from "next";
import AnimalProfileLayout from "@/components/AnimalProfileLayout";
import { ANIMAL_SOURCES } from "@/lib/educational/animal-sources";
import { getAnimalGalleryImages, getAnimalImage, getAnimalOgImage } from "@/lib/images/animal-images";
import { buildArticleMetadata } from "@/lib/metadata";

const PATH = "/animals/galah";
const TITLE = "Galah: Pink-and-Grey Cockatoo of Australia";
const DESC =
  "Learn about the galah, a pink-and-grey cockatoo of much of mainland Australia. Covers its appearance, diet, behavior and IUCN Least Concern status.";

export const metadata: Metadata = buildArticleMetadata({
  title: TITLE,
  description: DESC,
  path: PATH,
  publishedTime: "2026-06-28",
  modifiedTime: "2026-06-28",
  ogImage: getAnimalOgImage("galah"),
});

export default function GalahPage() {
  return (
    <AnimalProfileLayout
      commonName="Galah"
      scientificName="Eolophus roseicapilla"
      pageTitle={TITLE}
      description={DESC}
      path={PATH}
      parentCategory="Birds"
      parentCategoryHref="/animal-encyclopedia/birds"
      tags={["Bird","Cockatoo","Australia"]}
      image={getAnimalImage("galah") ?? undefined}
      galleryImages={getAnimalGalleryImages("galah")}
      sources={ANIMAL_SOURCES["galah"]}
      publishedDate="2026-06-28"
      modifiedDate="2026-06-28"
      overview={
        <>
          <p>
            The galah (<em>Eolophus roseicapilla</em>) is a familiar pink-and-grey cockatoo associated with open country across much of mainland Australia. Known for its soft rose-pink underparts and pale grey back and wings, it is one of the more widely recognized parrots of the region and is frequently seen feeding on the ground or perched in scattered trees.
          </p>
          <p>
            Highly social and adaptable, galahs often gather in large, noisy flocks and have become a common sight in farmland, grassland and the edges of towns. Their willingness to use modified landscapes has helped the species remain widespread, and the IUCN Red List currently assesses the galah as Least Concern, an evaluation that may be revised as new data emerge.
          </p>
          <p>
            Although galahs are abundant and frequently encountered, this profile treats the galah as a wild bird. It is not described here as a pet, and the focus is on its natural history, ecology and place in the Australian landscape.
          </p>
          <h3>Taxonomy and animal group</h3>
          <p>
            The galah is a parrot in the cockatoo family, Cacatuidae, within the order Psittaciformes. Its scientific name is <em>Eolophus roseicapilla</em>, and it is generally placed as the sole species in the genus <em>Eolophus</em>, distinguishing it from the larger cockatoos of the genus <em>Cacatua</em> (in which it was once included) and from the dark-plumaged cockatoos such as those in <em>Calyptorhynchus</em>. Several subspecies have been described based on differences in coloration and distribution, though the boundaries between them are debated by some authorities.
          </p>
          <h3>Appearance and recognition</h3>
          <p>
            The galah is a medium-sized cockatoo with a distinctive combination of soft rose-pink coloring on the face, neck and underparts and pale to mid grey on the back, wings and tail. It carries a short, mobile crest that is whitish to pale pink and can be raised when the bird is alert or excited. The bill is pale and the legs grey, and a patch of bare skin surrounds the eye. The sexes look broadly similar, but eye color is often used to help tell them apart, with adult males typically showing a dark brown iris and adult females a pinkish or reddish one.
          </p>
        </>
      }
      habitat={
        <p>
          The galah is found in open and semi-open habitats across much of mainland Australia, including grasslands, agricultural land, lightly wooded country and the margins of arid and semi-arid regions. It is closely associated with open spaces where it can feed on the ground, and it readily uses farmland, roadsides and the edges of towns. Its distribution should be understood as covering large parts of the Australian mainland rather than every habitat or region, and it is not described here as ranging across all of Oceania. Populations have expanded into some areas as land has been cleared and watering points added, reflecting the bird&#39;s adaptability to modified landscapes.
        </p>
      }
      diet={
        <p>
          The galah is primarily a seed-eater, feeding on the seeds of grasses and other herbaceous plants as well as cultivated grains. It commonly forages on the ground, often in flocks, and may also take roots, shoots, leaf buds and occasional insects. Its preference for seeds and grains means it frequently feeds in agricultural areas, and flocks can move considerable distances in search of food and water depending on local conditions.
        </p>
      }
      behavior={
        <>
          <p>
            Galahs are highly social birds that gather in flocks that can be large and conspicuous, especially around feeding and watering sites and at communal roosts. They are active and vocal, with a range of calls used while feeding and in flight. Galahs form long-term pair bonds and typically nest in tree hollows, lining the cavity with leaves; both members of a pair share in raising the young, which remain dependent for a period after leaving the nest before joining the wider flock. Outside the breeding season, flocking behavior dominates much of their daily activity.
          </p>
          <p>
            As an abundant seed-eater, the galah plays a part in the dispersal and consumption of grass and plant seeds across the open landscapes it inhabits. Its use of tree hollows links it to the availability of mature, hollow-bearing trees, a resource shared with many other Australian birds and animals. By feeding in flocks across grasslands and farmland, galahs form part of the wider community of granivorous birds that move energy and nutrients through these open environments.
          </p>
        </>
      }
      humanInteraction={
        <p>
          Galahs are among the most frequently encountered birds in many parts of rural and suburban Australia, and they are widely recognized and valued as part of the local landscape. Because they feed on grain, they can come into conflict with agriculture in some areas, and questions about managing such interactions are best directed to local wildlife authorities, who can advise within the relevant legal protections for native birds. Although galahs are common and approachable, they remain wild birds rather than pets, and concerns about injured or orphaned individuals should be referred to licensed wildlife carers or local wildlife authorities. The species is currently listed as Least Concern by the IUCN Red List, a status that reflects its broad distribution and may change as conditions and assessments are updated.
        </p>
      }
      faqs={[
        {
          question: "Is the galah found only in Australia?",
          answer:
            "The galah is native to much of mainland Australia, where it occupies open and semi-open country. It should not be described as native to all of Oceania, and its natural range is best understood as covering large parts of the Australian mainland.",
        },
        {
          question: "What does a galah eat?",
          answer:
            "Galahs feed mainly on the seeds of grasses and other plants as well as cultivated grains, often foraging on the ground in flocks. They may also take roots, shoots, buds and occasional insects.",
        },
        {
          question: "Is the galah endangered?",
          answer:
            "The IUCN Red List currently assesses the galah as Least Concern, reflecting its wide distribution and adaptability. Conservation assessments can change over time as new information becomes available.",
        },
        {
          question: "Can a galah be kept as a pet?",
          answer:
            "This profile treats the galah as a wild bird and does not provide pet or keeping guidance. Questions about injured or orphaned wild birds are best directed to licensed wildlife carers or local wildlife authorities.",
        },
      ]}
      quickFacts={[
        { label: "Scientific name", value: "Eolophus roseicapilla" },
        { label: "Animal group", value: "Bird (cockatoo / parrot)" },
        { label: "Family/order", value: "Cacatuidae / Psittaciformes" },
        { label: "Size", value: "Medium-sized cockatoo, around 35 cm long" },
        { label: "Diet", value: "Seeds and grains (granivorous)" },
        { label: "Habitat", value: "Open and semi-open country, grassland and farmland" },
        { label: "Range", value: "Much of mainland Australia" },
        { label: "Conservation status", value: "Least Concern (IUCN Red List)" },
      ]}
      relatedLinks={[
        { label: "Parrot", href: "/animals/parrot", description: "Parrots more broadly" },
        { label: "Kookaburra", href: "/animals/kookaburra", description: "Another Australian bird" },
        { label: "Black Swan", href: "/animals/black-swan", description: "Another Australian bird" },
        { label: "Oceania fauna", href: "/fauna/continents/oceania", description: "Animals of Oceania" },
        { label: "Birds", href: "/animal-encyclopedia/birds" },
      ]}
    />
  );
}
