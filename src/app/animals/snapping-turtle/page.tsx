import type { Metadata } from "next";
import AnimalProfileLayout from "@/components/AnimalProfileLayout";
import { ANIMAL_SOURCES } from "@/lib/educational/animal-sources";
import { getAnimalGalleryImages, getAnimalImage, getAnimalOgImage } from "@/lib/images/animal-images";
import { buildArticleMetadata } from "@/lib/metadata";

const PATH = "/animals/snapping-turtle";
const TITLE = "Snapping Turtle: Facts, Habitat & Behavior";
const DESC =
  "Learn about the snapping turtle (Chelydra serpentina), a large freshwater reptile of North America: its habitat, diet, behavior, ecology and conservation.";

export const metadata: Metadata = buildArticleMetadata({
  title: TITLE,
  description: DESC,
  path: PATH,
  publishedTime: "2026-06-28",
  modifiedTime: "2026-06-28",
  ogImage: getAnimalOgImage("snapping-turtle"),
});

export default function SnappingTurtlePage() {
  return (
    <AnimalProfileLayout
      commonName="Snapping Turtle"
      scientificName="Chelydra serpentina"
      pageTitle={TITLE}
      description={DESC}
      path={PATH}
      parentCategory="Reptiles & Amphibians"
      parentCategoryHref="/animal-encyclopedia/reptiles"
      tags={["Reptile","Freshwater turtle","Aquatic"]}
      image={getAnimalImage("snapping-turtle") ?? undefined}
      galleryImages={getAnimalGalleryImages("snapping-turtle")}
      sources={ANIMAL_SOURCES["snapping-turtle"]}
      publishedDate="2026-06-28"
      modifiedDate="2026-06-28"
      overview={
        <>
          <p>
            The snapping turtle (<em>Chelydra serpentina</em>) is a large, mostly aquatic freshwater turtle found in parts of central and eastern North America. It is best known for its rugged shell, long tail and powerful beak-like jaws, and it spends the great majority of its life in water, where it is generally far less defensive than it can appear on land.
          </p>
          <p>
            Adaptable and long-lived, the snapping turtle inhabits ponds, lakes and slow-moving rivers, often resting on muddy bottoms or partly buried in sediment. It is an opportunistic omnivore that plays a meaningful role in the food webs of the wetlands and waterways it occupies.
          </p>
          <p>
            This profile covers the snapping turtle specifically and is distinct from the general turtle overview. It is intended as educational reference material, with a calm emphasis on observing wild turtles respectfully and from a distance rather than handling them.
          </p>
          <h3>Taxonomy and animal group</h3>
          <p>
            The snapping turtle, <em>Chelydra serpentina</em>, is a reptile in the family Chelydridae, the group commonly known as the snapping turtles. Within the order Testudines, which includes all turtles, tortoises and terrapins, it is recognized as one of the larger freshwater species in much of its range. The genus name <em>Chelydra</em> comes from Greek roots associated with amphibious, turtle-like creatures, while the species epithet <em>serpentina</em> reflects the snake-like flexibility of its neck. It is a true turtle and should not be confused with land tortoises or with the smaller pond turtles often seen basking on logs.
          </p>
          <h3>Appearance and recognition</h3>
          <p>
            Snapping turtles are heavy-bodied reptiles with a broad, rugged upper shell (carapace) that is often dark brown to nearly black and may be coated with algae or mud in older individuals. The shell can appear ridged or saw-toothed toward the rear, and the underside (plastron) is notably small, leaving much of the limbs and tail exposed. A long tail bears a row of raised scales along its top, and the head is large with a strongly hooked, beak-like upper jaw. The neck is long and muscular, and the skin of the legs and neck is rough and warty. Together these features make the snapping turtle fairly distinctive among North American freshwater turtles.
          </p>
        </>
      }
      habitat={
        <p>
          The snapping turtle is associated with freshwater habitats across parts of central and eastern North America, where it occurs in ponds, lakes, marshes and slow-moving rivers and streams. It generally favors waters with soft, muddy bottoms and abundant aquatic vegetation, which provide both cover and foraging opportunities, though it can tolerate a range of conditions. Individuals spend most of their time submerged, sometimes remaining still on the bottom for long periods. This account describes the species in a North American context; it is not a complete range claim, and local presence varies considerably across the region.
        </p>
      }
      diet={
        <p>
          As an opportunistic omnivore, the snapping turtle eats a wide variety of foods depending on what is available. Its diet may include aquatic plants, insects, crustaceans, mollusks, fish, amphibians and small animals, as well as carrion encountered in the water. It typically forages along the bottom or waits to ambush prey that passes within reach of its quick neck and powerful jaws. This flexible, generalist feeding ecology helps the species occupy many different freshwater habitats.
        </p>
      }
      behavior={
        <>
          <p>
            Snapping turtles are largely solitary and spend most of their lives in water, where they tend to be calm and avoid confrontation, retreating from disturbance rather than approaching it. They are typically more defensive on land, where the small plastron limits their ability to withdraw into the shell, prompting the alert posture for which they are named. In cooler parts of the range they become inactive during winter, often resting in mud or beneath water. Females typically travel onto land to lay eggs in nests dug in soil, after which the young hatch and make their way to water; snapping turtles are known for being long-lived.
          </p>
          <p>
            Within freshwater ecosystems, the snapping turtle functions as both a predator and a scavenger, helping to regulate populations of the animals it consumes and removing carrion from ponds, lakes and slow rivers. By feeding on a broad mix of plant and animal matter, it participates in nutrient cycling and contributes to the overall balance of wetland food webs. Its eggs and hatchlings, in turn, provide food for a range of other animals, linking the species to predators above and prey below in the aquatic community.
          </p>
        </>
      }
      humanInteraction={
        <p>
          Snapping turtles are wild animals and are best appreciated through quiet observation from a distance; this page does not provide any instructions for handling, catching or keeping them. On land a snapping turtle may adopt a defensive posture if it feels cornered, which is normal behavior and a reason to give it space rather than approach. Anyone with concerns about an injured turtle, a turtle crossing a road, or other wildlife conflict should contact local wildlife authorities, and any medical questions should be directed to qualified medical professionals or local health authorities. The IUCN Red List has assessed the snapping turtle as Least Concern, an evaluation that reflects current information and can change over time as conditions and data are reviewed.
        </p>
      }
      faqs={[
        {
          question: "Where do snapping turtles live?",
          answer:
            "They are found in freshwater habitats such as ponds, lakes, marshes and slow rivers across parts of central and eastern North America. Individuals spend most of their time in the water, often resting on muddy bottoms.",
        },
        {
          question: "Are snapping turtles aggressive?",
          answer:
            "In water they are generally calm and tend to avoid people, retreating from disturbance. They can appear defensive on land because their small lower shell limits how far they can withdraw, so it is best to observe them from a distance and not handle them.",
        },
        {
          question: "What do snapping turtles eat?",
          answer:
            "Snapping turtles are opportunistic omnivores. Their diet can include aquatic plants, insects, crustaceans, fish, amphibians and carrion, depending on what is available in their habitat.",
        },
        {
          question: "What is the conservation status of the snapping turtle?",
          answer:
            "The IUCN Red List has assessed the snapping turtle as Least Concern. This is an assessment based on current information and can change over time as data and conditions are reviewed.",
        },
      ]}
      quickFacts={[
        { label: "Scientific name", value: "Chelydra serpentina" },
        { label: "Animal group", value: "Reptile (turtle)" },
        { label: "Family", value: "Chelydridae (snapping turtles)" },
        { label: "Size", value: "Large freshwater turtle with a heavy, rugged shell" },
        { label: "Diet", value: "Omnivore and opportunistic forager" },
        { label: "Habitat", value: "Ponds, lakes, marshes and slow rivers" },
        { label: "Range", value: "Parts of central and eastern North America" },
        { label: "Conservation status", value: "Least Concern (IUCN Red List assessment; can change)" },
      ]}
      relatedLinks={[
        { label: "Turtle Profile", href: "/animals/turtle", description: "Turtles more broadly" },
        { label: "American Alligator", href: "/animals/american-alligator", description: "Another wetland reptile" },
        { label: "Bullfrog", href: "/animals/bullfrog", description: "Another freshwater animal" },
        { label: "North American fauna", href: "/fauna/continents/north-america", description: "Animals of North America" },
        { label: "Reptiles & Amphibians", href: "/animal-encyclopedia/reptiles" },
      ]}
    />
  );
}
