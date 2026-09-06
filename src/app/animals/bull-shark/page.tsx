import type { Metadata } from "next";
import AnimalProfileLayout from "@/components/AnimalProfileLayout";
import { ANIMAL_SOURCES } from "@/lib/educational/animal-sources";
import { getAnimalGalleryImages, getAnimalImage, getAnimalOgImage } from "@/lib/images/animal-images";
import { buildArticleMetadata } from "@/lib/metadata";

const PATH = "/animals/bull-shark";
const TITLE = "Bull Shark — Profile, Freshwater Tolerance & Coastal Habitat";
const DESC =
  "Explore the bull shark (Carcharhinus leucas): a stocky coastal shark remarkable for moving far up rivers thanks to unusual control of its salt balance.";

export const metadata: Metadata = buildArticleMetadata({
  title: TITLE,
  description: DESC,
  path: PATH,
  publishedTime: "2026-09-06",
  modifiedTime: "2026-09-06",
  ogImage: getAnimalOgImage("bull-shark"),
});

export default function BullSharkPage() {
  return (
    <AnimalProfileLayout
      commonName="Bull Shark"
      scientificName="Carcharhinus leucas"
      pageTitle={TITLE}
      description={DESC}
      path={PATH}
      parentCategory="Marine Animals"
      parentCategoryHref="/animal-encyclopedia/marine-animals"
      tags={["Shark","Coastal","Euryhaline"]}
      image={getAnimalImage("bull-shark") ?? undefined}
      galleryImages={getAnimalGalleryImages("bull-shark")}
      sources={ANIMAL_SOURCES["bull-shark"]}
      publishedDate="2026-09-06"
      modifiedDate="2026-09-06"
      overview={
        <>
        <p>
          The bull shark (<em>Carcharhinus leucas</em>) is a stocky, blunt-snouted shark of warm coastal waters worldwide. It is heavy-bodied for its length, with small eyes and a broad head — the build that gives it its name.
        </p>
        <p>
          What sets the bull shark apart is its tolerance of fresh water. Most sharks are confined to the sea, but the bull shark can regulate its internal salt balance well enough to move far up rivers and into lakes, and it has been recorded a very long way inland in rivers such as the Mississippi and the Amazon.
        </p>
        <p>
          It is a large predator that frequents exactly the shallow, murky, nearshore waters people use, and this profile is educational only: it gives no guidance on encountering, deterring or handling sharks.
        </p>
        </>
      }
      habitat={
        <>
        <p>
          Bull sharks live in warm coastal seas around the world, favouring shallow water less than about 30 metres deep, along with estuaries, river mouths, lagoons and — distinctively — fresh water well upstream. Populations occur in tropical and subtropical Atlantic, Pacific and Indian Ocean coasts, and the species is well known from rivers and lake systems connected to the sea.
        </p>
        </>
      }
      diet={
        <>
        <p>
          Bull sharks eat mainly bony fish and other sharks and rays, along with turtles, birds, dolphins, crustaceans and carrion. They hunt largely in turbid nearshore and estuarine water where visibility is poor, relying on senses other than sight, and are opportunistic in what they take.
        </p>
        </>
      }
      behavior={
        <>
        <p>
          Bull sharks are generally solitary hunters, often active in shallow, murky water. Their osmoregulation — controlled by the kidneys, gills, and the rectal gland that sharks use to excrete salt — is what permits movement between sea water and fresh water. Rivers and estuaries also serve as nursery areas, where young sharks grow up with fewer large predators around.
        </p>
        </>
      }
      humanInteraction={
        <>
        <p>
          Because bull sharks share shallow coastal and estuarine water with people, they are among the shark species most frequently associated with incidents, though such incidents are rare relative to human water use. They are also taken in commercial and artisanal fisheries and are affected by coastal development and degradation of the estuarine nurseries their young depend on. This profile gives no safety, deterrence, fishing or handling guidance; follow local authorities and posted advice. Verify current status at the IUCN Red List.
        </p>
        </>
      }
      faqs={[
        {
          question: "Can bull sharks live in fresh water?",
          answer:
            "They can spend extended periods in it. Bull sharks regulate their internal salt balance well enough to move from the sea far up rivers and into lakes, and they have been recorded a long way inland in large river systems. They are not permanently freshwater animals, but they move between the two more freely than almost any other shark.",
        },
        {
          question: "Why are bull sharks called bull sharks?",
          answer:
            "Because of their build and behaviour: a stocky, heavy body, a short broad snout and a blunt head give them a bullish appearance, and they are known for pushy, assertive behaviour when feeding.",
        },
        {
          question: "Are bull sharks dangerous?",
          answer:
            "Bull sharks are large predators that frequent the shallow, often murky coastal and estuarine waters people use, and they are among the species most often recorded in incidents — though such incidents remain rare. This profile is educational only and gives no safety, deterrence or handling advice; follow local authorities where sharks are present.",
        },
        {
          question: "What do bull sharks eat?",
          answer:
            "Mostly bony fish, along with other sharks and rays, turtles, birds, dolphins, crustaceans and carrion. They are opportunistic hunters that operate well in turbid water, where they rely on senses other than vision to find prey.",
        },
      ]}
      quickFacts={[
        { label: "Scientific name", value: "Carcharhinus leucas" },
        { label: "Family", value: "Carcharhinidae" },
        { label: "Class", value: "Chondrichthyes" },
        { label: "Distinctive trait", value: "Tolerates fresh water" },
        { label: "Build", value: "Stocky, blunt-snouted, small-eyed" },
        { label: "Habitat", value: "Shallow coasts, estuaries, rivers" },
        { label: "Nurseries", value: "Estuaries and river systems" },
        { label: "Status", value: "Verify current IUCN assessment" },
      ]}
      relatedLinks={[
        { label: "Tiger Shark Profile", href: "/animals/tiger-shark" },
        { label: "Great White Shark Profile", href: "/animals/great-white-shark" },
        { label: "Shark Profile", href: "/animals/shark", description: "Group-level overview" },
        { label: "Sea Snake Profile", href: "/animals/sea-snake" },
        { label: "Marine Animals", href: "/animal-encyclopedia/marine-animals" },
      ]}
    />
  );
}
