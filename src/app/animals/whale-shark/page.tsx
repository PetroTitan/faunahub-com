import type { Metadata } from "next";
import AnimalProfileLayout from "@/components/AnimalProfileLayout";
import { ANIMAL_SOURCES } from "@/lib/educational/animal-sources";
import { getAnimalGalleryImages, getAnimalImage, getAnimalOgImage } from "@/lib/images/animal-images";
import { buildArticleMetadata } from "@/lib/metadata";

const PATH = "/animals/whale-shark";
const TITLE = "Whale Shark — Profile, Filter Feeding, Spots & Ocean Range";
const DESC =
  "Explore the whale shark (Rhincodon typus): the largest living fish, a harmless filter feeder whose spot pattern identifies each individual.";

export const metadata: Metadata = buildArticleMetadata({
  title: TITLE,
  description: DESC,
  path: PATH,
  publishedTime: "2026-09-06",
  modifiedTime: "2026-09-06",
  ogImage: getAnimalOgImage("whale-shark"),
});

export default function WhaleSharkPage() {
  return (
    <AnimalProfileLayout
      commonName="Whale Shark"
      scientificName="Rhincodon typus"
      pageTitle={TITLE}
      description={DESC}
      path={PATH}
      parentCategory="Marine Animals"
      parentCategoryHref="/animal-encyclopedia/marine-animals"
      tags={["Shark","Filter Feeder","Largest Fish"]}
      image={getAnimalImage("whale-shark") ?? undefined}
      galleryImages={getAnimalGalleryImages("whale-shark")}
      sources={ANIMAL_SOURCES["whale-shark"]}
      publishedDate="2026-09-06"
      modifiedDate="2026-09-06"
      overview={
        <>
        <p>
          The whale shark (<em>Rhincodon typus</em>) is the largest living fish — a shark, not a whale, despite the name and the whale-like feeding. It has a broad flattened head, a mouth set at the very front rather than underneath, and a dark back covered in a chequerboard of pale spots and stripes.
        </p>
        <p>
          Whale sharks are <strong>filter feeders</strong>. Instead of hunting, they swim with the mouth open or actively suck in water, straining out plankton and small animals through filtering pads. They pose no danger to people.
        </p>
        <p>
          Each whale shark&apos;s spot pattern is unique and stable, which allows researchers to identify individuals photographically — an approach that has produced large collaborative catalogues built partly from tourist photographs.
        </p>
        </>
      }
      habitat={
        <>
        <p>
          Whale sharks live in warm tropical and warm-temperate seas worldwide, both in the open ocean and at coastal aggregation sites. They are highly migratory and can cross ocean basins. Predictable seasonal gatherings occur where plankton or spawning events concentrate food — locations such as Ningaloo in Western Australia, the Yucatán, the Philippines and the Gulf of Tadjoura are well known for them.
        </p>
        </>
      }
      diet={
        <>
        <p>
          Whale sharks eat plankton, small crustaceans, fish eggs, small schooling fish and squid. They feed both passively, cruising forward with the mouth open, and actively, using suction to draw in dense patches of food, sometimes hanging vertically in the water at a spawning site.
        </p>
        </>
      }
      behavior={
        <>
        <p>
          Whale sharks are generally slow-swimming and solitary, but gather in large numbers where feeding is good. They dive to considerable depths between surface feeding bouts. Much of their life history — particularly where they give birth and where the young spend their early years — remains poorly known, which is one reason the species is difficult to manage.
        </p>
        </>
      }
      humanInteraction={
        <>
        <p>
          Whale sharks support substantial wildlife-tourism industries, which bring both conservation funding and disturbance risks; many sites operate codes of conduct on approach distance and touching. They are threatened by targeted and incidental fishing, vessel strikes and habitat degradation, and their slow growth and late maturity make recovery slow. This profile gives no guidance on approaching or handling whale sharks — follow local regulations and operator rules. Verify current status at the IUCN Red List.
        </p>
        </>
      }
      faqs={[
        {
          question: "Is a whale shark a whale or a shark?",
          answer:
            "A shark — a cartilaginous fish, not a mammal. The name reflects its whale-like size and filter-feeding habit rather than any relationship to whales. It is the largest living fish.",
        },
        {
          question: "Are whale sharks dangerous to humans?",
          answer:
            "No. Whale sharks are filter feeders that strain plankton and small animals from the water, and they are not predators of anything approaching human size. The practical concerns around them are the reverse: divers and boats can disturb or injure the sharks, which is why many sites regulate how closely people may approach.",
        },
        {
          question: "What do whale sharks eat?",
          answer:
            "Plankton, small crustaceans, fish eggs, small schooling fish and squid. They feed by straining water through filtering pads, either cruising forward with the mouth open or actively sucking in dense concentrations of food.",
        },
        {
          question: "Why are whale shark spots useful to scientists?",
          answer:
            "Each whale shark's pattern of pale spots is unique to that individual and stays stable over time, so it works like a fingerprint. Researchers photograph the flank and match patterns in shared databases, allowing individuals to be tracked over years — often using images contributed by tourists.",
        },
      ]}
      quickFacts={[
        { label: "Scientific name", value: "Rhincodon typus" },
        { label: "Family", value: "Rhincodontidae" },
        { label: "Class", value: "Chondrichthyes (cartilaginous fish)" },
        { label: "Claim to fame", value: "Largest living fish" },
        { label: "Feeding", value: "Filter feeder — plankton and small prey" },
        { label: "Mouth", value: "At the front of the head, not beneath" },
        { label: "ID method", value: "Unique individual spot patterns" },
        { label: "Status", value: "Verify current IUCN assessment" },
      ]}
      relatedLinks={[
        { label: "Basking Shark Profile", href: "/animals/basking-shark", description: "The other giant filter-feeding shark" },
        { label: "Great White Shark Profile", href: "/animals/great-white-shark" },
        { label: "Reef Manta Ray Profile", href: "/animals/reef-manta-ray", description: "Another filter feeder" },
        { label: "Shark Profile", href: "/animals/shark", description: "Group-level overview" },
        { label: "Endangered Animals", href: "/endangered-animals" },
      ]}
    />
  );
}
