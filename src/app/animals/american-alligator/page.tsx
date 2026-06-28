import type { Metadata } from "next";
import AnimalProfileLayout from "@/components/AnimalProfileLayout";
import { ANIMAL_SOURCES } from "@/lib/educational/animal-sources";
import { getAnimalGalleryImages, getAnimalImage, getAnimalOgImage } from "@/lib/images/animal-images";
import { buildArticleMetadata } from "@/lib/metadata";

const PATH = "/animals/american-alligator";
const TITLE = "American Alligator: Facts, Habitat & Ecology";
const DESC =
  "Learn about the American alligator, a large crocodilian of southeastern U.S. wetlands, its biology, ecological role, and conservation recovery story.";

export const metadata: Metadata = buildArticleMetadata({
  title: TITLE,
  description: DESC,
  path: PATH,
  publishedTime: "2026-06-28",
  modifiedTime: "2026-06-28",
  ogImage: getAnimalOgImage("american-alligator"),
});

export default function AmericanAlligatorPage() {
  return (
    <AnimalProfileLayout
      commonName="American Alligator"
      scientificName="Alligator mississippiensis"
      pageTitle={TITLE}
      description={DESC}
      path={PATH}
      parentCategory="Reptiles & Amphibians"
      parentCategoryHref="/animal-encyclopedia/reptiles"
      tags={["Reptile","Crocodilian","Wetland"]}
      image={getAnimalImage("american-alligator") ?? undefined}
      galleryImages={getAnimalGalleryImages("american-alligator")}
      sources={ANIMAL_SOURCES["american-alligator"]}
      publishedDate="2026-06-28"
      modifiedDate="2026-06-28"
      overview={
        <>
          <p>
            The American alligator (<em>Alligator mississippiensis</em>) is a large freshwater crocodilian associated with the wetlands of the southeastern United States. It inhabits swamps, marshes, slow-moving rivers, and lakes, where its broad, rounded snout and armored body make it one of the most recognizable reptiles in the region. It plays a quiet but central role in the ecosystems it occupies.
          </p>
          <p>
            An alligator is not the same as a crocodile. The two belong to different families within the order Crocodylia, and the American alligator is distinguished by its wider, U-shaped snout and other anatomical differences. It is one of only two living alligator species, the other being the smaller Chinese alligator.
          </p>
          <p>
            The American alligator is also widely cited as a conservation success story. Once severely depleted across much of its range, it recovered following legal protection and is now assessed by the IUCN Red List as Least Concern. This profile is educational and offers no instructions for approaching, feeding, handling, or otherwise interacting with these wild animals.
          </p>
          <h3>Taxonomy and animal group</h3>
          <p>
            The American alligator, <em>Alligator mississippiensis</em>, is a member of the family Alligatoridae within the order Crocodylia, the group that also includes crocodiles, caimans, and gharials. It is one of only two surviving species in the genus <em>Alligator</em>, alongside the Chinese alligator (<em>Alligator sinensis</em>). Although crocodilians are sometimes loosely grouped together in conversation, alligators and crocodiles belong to separate families and are not interchangeable; the American alligator is an alligator, not a crocodile. As a reptile, it is a cold-blooded, scaled vertebrate, and crocodilians are among the closest living relatives of birds.
          </p>
          <h3>Appearance and recognition</h3>
          <p>
            The American alligator has a heavy, elongated body, a muscular tail, and short, sturdy legs, all protected by thick, bony-plated skin. Its most distinctive feature is its broad, rounded, U-shaped snout, which differs from the narrower, more pointed snout of true crocodiles. Adults are typically dark gray to nearly black, while juveniles often show pale yellowish bands that help them blend into vegetation. When an alligator floats with only its eyes and nostrils above the surface, much of its bulk remains hidden underwater, a posture well suited to ambushing in murky wetlands.
          </p>
        </>
      }
      habitat={
        <p>
          The American alligator is found in parts of the southeastern United States, where it is associated with freshwater and brackish wetlands including swamps, marshes, slow-moving rivers, ponds, and lakes. It occurs in parts of states along the Gulf and southern Atlantic coastal plain, with populations concentrated in areas of warm, water-rich lowland habitat. Because it is a cold-blooded reptile, its distribution is shaped by temperature, and it is generally not found in cooler inland or northern regions. It tolerates some salinity in coastal areas but is primarily a freshwater species.
        </p>
      }
      diet={
        <p>
          The American alligator is a carnivore and an opportunistic predator whose diet shifts with age and size. Juveniles feed largely on insects, small fish, amphibians, snails, and other invertebrates, while larger adults take fish, turtles, birds, and various mammals when the opportunity arises. As an ambush hunter, it often waits motionless near the water&#39;s edge or just below the surface before striking. Its feeding activity slows considerably in cooler weather, when its metabolism drops and it becomes far less active.
        </p>
      }
      behavior={
        <>
          <p>
            American alligators are most active in warm conditions and become sluggish as temperatures fall, sometimes sheltering in burrows during cold periods. Males produce deep bellowing calls during the breeding season, and these vocalizations, along with low-frequency vibrations, are part of their social signaling. Females build mounded nests of vegetation and mud, lay eggs, and are known for guarding the nest and remaining attentive to their young after hatching, an unusually involved level of parental care among reptiles. Nest temperature influences the sex of the developing young, a trait shared with many other reptiles.
          </p>
          <p>
            The American alligator is widely regarded as an ecosystem engineer because of the way it shapes its wetland surroundings. By clearing depressions known as &quot;gator holes,&quot; it creates pools that retain water during dry periods, providing refuge for fish, amphibians, invertebrates, and other wildlife. These holes, along with nest mounds that can support plant growth, influence the structure and biodiversity of the marshes and swamps where the species lives. As a large predator, the alligator also helps regulate the populations of the animals it feeds on, contributing to the overall balance of its habitat.
          </p>
        </>
      }
      humanInteraction={
        <p>
          The American alligator is a powerful wild animal, and the calm, responsible approach is to observe it only from a safe distance and never to approach, feed, or disturb one. Feeding wild alligators is especially discouraged because it can cause them to lose their natural wariness of people. Any concerns about an alligator near homes, neighborhoods, or recreation areas should be directed to local wildlife authorities, who are equipped to respond appropriately; questions about injuries or medical matters should go to qualified medical professionals or local health authorities. The species itself represents a notable conservation recovery: once heavily depleted, it rebounded after legal protections were put in place and is currently assessed by the IUCN Red List as Least Concern, an assessment that reflects current conditions and can change over time.
        </p>
      }
      faqs={[
        {
          question: "Is an American alligator the same as a crocodile?",
          answer:
            "No. Alligators and crocodiles belong to different families within the order Crocodylia. The American alligator has a broad, U-shaped snout and is an alligator, not a crocodile.",
        },
        {
          question: "Where are American alligators found?",
          answer:
            "They are found in parts of the southeastern United States, in freshwater and brackish wetlands such as swamps, marshes, slow rivers, and lakes. Their range is limited by temperature, so they are absent from cooler northern regions.",
        },
        {
          question: "Are American alligators endangered?",
          answer:
            "The American alligator is currently assessed by the IUCN Red List as Least Concern. It was once severely depleted but recovered after legal protection, making it a well-known conservation success story, though such assessments can change over time.",
        },
        {
          question: "What should I do if I see an alligator near my home?",
          answer:
            "Keep a safe distance and never approach or feed it. Concerns about an alligator near homes or public areas should be reported to local wildlife authorities, who can respond appropriately.",
        },
      ]}
      quickFacts={[
        { label: "Scientific name", value: "Alligator mississippiensis" },
        { label: "Animal group", value: "Reptile (crocodilian)" },
        { label: "Family or order", value: "Alligatoridae; order Crocodylia" },
        { label: "Size", value: "Large; a heavy-bodied crocodilian" },
        { label: "Diet", value: "Carnivore; opportunistic ambush predator" },
        { label: "Habitat", value: "Freshwater and brackish wetlands, swamps, rivers, lakes" },
        { label: "Range", value: "Parts of the southeastern United States" },
        { label: "Conservation status", value: "Least Concern (IUCN Red List; subject to change)" },
      ]}
      relatedLinks={[
        { label: "Alligator Profile", href: "/animals/alligator", description: "Alligators more broadly" },
        { label: "Crocodile", href: "/animals/crocodile", description: "Crocodiles, for contrast" },
        { label: "Caiman", href: "/animals/caiman", description: "A related crocodilian" },
        { label: "North American fauna", href: "/fauna/continents/north-america", description: "Animals of North America" },
        { label: "Reptiles & Amphibians", href: "/animal-encyclopedia/reptiles" },
      ]}
    />
  );
}
