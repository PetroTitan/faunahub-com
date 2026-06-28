import type { Metadata } from "next";
import AnimalProfileLayout from "@/components/AnimalProfileLayout";
import { ANIMAL_SOURCES } from "@/lib/educational/animal-sources";
import { getAnimalGalleryImages, getAnimalImage, getAnimalOgImage } from "@/lib/images/animal-images";
import { buildArticleMetadata } from "@/lib/metadata";

const PATH = "/animals/sandhill-crane";
const TITLE = "Sandhill Crane: Tall Grey Crane of Wetlands";
const DESC =
  "Learn about the Sandhill Crane (Antigone canadensis), a tall grey crane known for its red forehead, bugling call, and large migratory gatherings.";

export const metadata: Metadata = buildArticleMetadata({
  title: TITLE,
  description: DESC,
  path: PATH,
  publishedTime: "2026-06-28",
  modifiedTime: "2026-06-28",
  ogImage: getAnimalOgImage("sandhill-crane"),
});

export default function SandhillCranePage() {
  return (
    <AnimalProfileLayout
      commonName="Sandhill Crane"
      scientificName="Antigone canadensis"
      pageTitle={TITLE}
      description={DESC}
      path={PATH}
      parentCategory="Birds"
      parentCategoryHref="/animal-encyclopedia/birds"
      tags={["Bird","Crane","Migratory"]}
      image={getAnimalImage("sandhill-crane") ?? undefined}
      galleryImages={getAnimalGalleryImages("sandhill-crane")}
      sources={ANIMAL_SOURCES["sandhill-crane"]}
      publishedDate="2026-06-28"
      modifiedDate="2026-06-28"
      overview={
        <>
          <p>
            The Sandhill Crane (<em>Antigone canadensis</em>) is a tall, long-legged grey bird associated with wetlands, grasslands, and farmland across parts of North America, with additional populations in parts of north-eastern Asia. It is one of the most widely recognized cranes on the continent, noted for its upright posture, sweeping wingspan, and a far-carrying bugling or rattling call that can be heard well before the bird itself comes into view.
          </p>
          <p>
            The species is perhaps best known for its large migratory gatherings, when many birds congregate at staging areas during spring and autumn movements. One famous example is the seasonal concentration along the Platte River, where flocks pause to rest and feed before continuing their journeys. These assemblies have made the Sandhill Crane a familiar symbol of seasonal wildlife movement in North America.
          </p>
          <p>
            The Sandhill Crane should not be confused with the much rarer whooping crane (<em>Grus americana</em>), which is largely white with black wingtips and far less numerous. While the two species can occasionally share habitat during migration, the Sandhill Crane&#39;s grey plumage and red forehead help distinguish it from the white whooping crane. The IUCN Red List currently assesses the Sandhill Crane as Least Concern.
          </p>
          <h3>Taxonomy and animal group</h3>
          <p>
            The Sandhill Crane is a bird in the crane family, Gruidae, within the order Gruiformes. Its scientific name is <em>Antigone canadensis</em>; it was historically placed in the genus <em>Grus</em>, and some sources, including the IUCN and BirdLife International, still file it under <em>Grus canadensis</em>, but it is now widely classified in the resurrected genus <em>Antigone</em> following molecular studies that found the older arrangement of <em>Grus</em> to be unnatural. Cranes are not closely related to herons or storks despite a superficial resemblance. Several subspecies have been described across its broad distribution, some migratory and some non-migratory, varying in size and movement patterns.
          </p>
          <h3>Appearance and recognition</h3>
          <p>
            Adult Sandhill Cranes are large, predominantly grey birds with a long neck, long dark legs, and a distinctive bare patch of red skin on the forehead and crown. The cheeks are pale, and the body plumage can appear tinged with rusty brown, a coloration that often comes from preening with iron-rich mud rather than from natural pigment. In flight the bird holds its neck outstretched, a useful feature that helps separate cranes from herons, which fold the neck back. Young birds lack the red crown and tend to show a more uniformly brownish or buff coloring before acquiring adult features.
          </p>
        </>
      }
      habitat={
        <p>
          Sandhill Cranes are associated with open wetlands, marshes, wet meadows, grasslands, and agricultural fields in parts of North America, and the species also occurs in parts of north-eastern Asia. Within North America, populations are found in various regions, with some birds resident year-round and others undertaking long seasonal migrations between northern breeding grounds and more southerly wintering areas. During these movements, large numbers may gather at traditional staging sites such as river corridors. The species&#39; presence in any given area depends on the availability of suitable shallow water, foraging habitat, and undisturbed roosting sites, and it should not be described as occurring uniformly across the entire continent.
        </p>
      }
      diet={
        <p>
          The Sandhill Crane is an omnivore with a varied and opportunistic diet. It feeds on plant material such as seeds, grains, tubers, and roots, as well as on small animals including insects, worms, snails, amphibians, and occasionally small vertebrates. Birds frequently forage by walking through fields and wetland margins, probing the soil and shallow water with their bills. In agricultural landscapes they often glean waste grain left in harvested fields, which can provide an energy source during migration and winter.
        </p>
      }
      behavior={
        <>
          <p>
            Sandhill Cranes are social birds outside the breeding season, often gathering in flocks at roosting and feeding sites, while breeding pairs become more territorial. They are known for elaborate courtship behavior that includes bowing, leaping, and wing-spreading displays, sometimes described as dancing, which can occur among both paired and unpaired birds. Pairs are generally long-lasting and build nests on the ground in or near wetlands, where they typically raise a small number of young per season. The loud, resonant bugling call is produced by an elongated windpipe and serves in communication between mates, family groups, and members of a flock.
          </p>
          <p>
            As a wide-ranging omnivore, the Sandhill Crane plays a part in the ecology of the wetlands and grasslands it inhabits. Through its feeding it can influence populations of insects and other small invertebrates, and by consuming and moving seeds it may contribute to the dispersal of some plants. Its reliance on shallow wetlands and undisturbed roosting areas makes it sensitive to changes in water levels and habitat availability, so its presence is often regarded as one indicator of functioning wetland systems. Eggs, chicks, and adults also form part of food webs that include various predators across the species&#39; range.
          </p>
        </>
      }
      humanInteraction={
        <p>
          Sandhill Cranes have long featured in human culture and remain a popular subject for wildlife observation, particularly at sites where large migratory gatherings occur. The IUCN Red List currently classifies the species as Least Concern, an assessment that reflects current understanding and can change over time as conditions and data are updated; this status applies to the species overall and does not necessarily describe every local population, some of which receive separate protection. People observing cranes are encouraged to keep a respectful distance and avoid disturbing roosting or nesting birds, and any concerns about injured wildlife or human-wildlife conflict should be directed to local wildlife authorities. Conservation of the species is generally tied to the protection of wetland and staging habitats along its migratory routes.
        </p>
      }
      faqs={[
        {
          question: "How can you tell a Sandhill Crane from a whooping crane?",
          answer:
            "The Sandhill Crane is mostly grey with a red forehead, while the much rarer whooping crane is largely white with black wingtips visible in flight. The two are different species, and the whooping crane is far less numerous.",
        },
        {
          question: "Why do Sandhill Cranes gather in such large numbers?",
          answer:
            "During spring and autumn migration, many birds congregate at traditional staging areas, such as along the Platte River, to rest and feed before continuing their journeys. These gatherings allow them to refuel in suitable habitat along the route.",
        },
        {
          question: "What does the Sandhill Crane's call sound like?",
          answer:
            "It produces a loud, resonant bugling or rattling call that carries over long distances, made possible by an elongated windpipe. The call is often heard before the bird is seen.",
        },
        {
          question: "Is the Sandhill Crane endangered?",
          answer:
            "The IUCN Red List currently assesses the Sandhill Crane as Least Concern. This is an assessment that can change over time and applies to the species overall rather than to every local population.",
        },
      ]}
      quickFacts={[
        { label: "Scientific name", value: "Antigone canadensis" },
        { label: "Animal group", value: "Bird (crane)" },
        { label: "Family or order", value: "Gruidae; order Gruiformes" },
        { label: "Size", value: "Tall, long-legged bird with a broad wingspan" },
        { label: "Diet", value: "Omnivore (seeds, grains, insects, small animals)" },
        { label: "Habitat", value: "Wetlands, grasslands, and farmland" },
        { label: "Range", value: "Parts of North America and north-eastern Asia" },
        { label: "Conservation status", value: "Least Concern (IUCN Red List; can change)" },
      ]}
      relatedLinks={[
        { label: "Whooping Crane", href: "/animals/whooping-crane", description: "A rarer North American crane" },
        { label: "Heron Profile", href: "/animals/heron", description: "Another wading bird" },
        { label: "Stork Profile", href: "/animals/stork", description: "Another tall waterbird" },
        { label: "North American fauna", href: "/fauna/continents/north-america", description: "Animals of North America" },
        { label: "Birds", href: "/animal-encyclopedia/birds" },
      ]}
    />
  );
}
