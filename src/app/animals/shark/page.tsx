import type { Metadata } from "next";
import AnimalProfileLayout from "@/components/AnimalProfileLayout";
import { buildArticleMetadata } from "@/lib/metadata";

const PUBLISHED = "2026-05-12";
const MODIFIED = "2026-05-12";

const title = "Shark — Overview of Shark Species, Habitat & Behavior";
const description =
  "An overview of sharks: cartilaginous fish, sensory biology, the diversity of species from reef sharks to whale sharks, and current conservation pressures.";

export const metadata: Metadata = buildArticleMetadata({
  title,
  description,
  path: "/animals/shark",
  publishedTime: PUBLISHED,
  modifiedTime: MODIFIED,
});

export default function SharkPage() {
  return (
    <AnimalProfileLayout
      commonName="Shark"
      pageTitle={title}
      description={description}
      path="/animals/shark"
      parentCategory="Marine Animals"
      parentCategoryHref="/animal-encyclopedia/marine-animals"
      tags={["Cartilaginous Fish", "Marine Predator"]}
      factsHeaderNote='"Shark" covers more than 500 species in superorder Selachimorpha. Specific traits below vary considerably between species.'
      overview={
        <>
          <p>
            Sharks are a diverse group of cartilaginous fish (class Chondrichthyes, superorder
            Selachimorpha) found in oceans worldwide and, in a few cases, in freshwater
            systems. More than 500 living species are currently described, ranging from
            small reef-dwelling species to the whale shark (<em>Rhincodon typus</em>), the
            largest living fish.
          </p>
          <p>
            Unlike bony fish, sharks have skeletons made of cartilage and possess
            several distinctive sensory adaptations, including electroreception via specialised
            pore systems known as the ampullae of Lorenzini.
          </p>
        </>
      }
      habitat={
        <>
          <p>
            Sharks occupy a very wide range of marine habitats: coastal seas, coral reefs, the
            open pelagic ocean, polar waters, and the deep sea. A few species — notably the
            bull shark (<em>Carcharhinus leucas</em>) — tolerate freshwater and have been
            recorded far up some river systems.
          </p>
        </>
      }
      diet={
        <>
          <p>
            Diet varies enormously across the group. Many species are active predators of
            fish, cephalopods, and marine mammals or seabirds. Others — including the whale
            shark and basking shark — are filter-feeders that strain plankton and small fish
            from the water column. Several species are bottom feeders specialising in
            molluscs, crustaceans, and other benthic prey.
          </p>
        </>
      }
      behavior={
        <>
          <p>
            Shark behaviour is similarly varied. Some species are largely solitary, while
            others form aggregations, particularly around feeding or breeding sites. Migratory
            behaviour is well documented in a number of species, with some individuals
            covering very long ocean distances each year.
          </p>
          <p>
            Reproductive strategies include egg-laying (oviparity), live birth (viviparity),
            and intermediate forms. Many sharks are slow to mature and produce relatively few
            offspring, which has direct implications for population recovery from exploitation.
          </p>
        </>
      }
      humanInteraction={
        <>
          <p>
            Many shark species are currently of significant conservation concern. Drivers
            include targeted fisheries (including for fins), bycatch, habitat degradation,
            and slow life-history traits that make populations vulnerable to over-exploitation.
            Shark attacks on humans are very rare in global terms; from a population
            perspective the more significant interaction is human impact on sharks rather than
            the reverse.
          </p>
        </>
      }
      similarAnimals={
        <p>
          Sharks are most closely related to other cartilaginous fish, including rays and
          skates (Batoidea) and chimaeras (Chimaeriformes). Dolphins, although superficially
          similar in shape, are mammals and not closely related to sharks.
        </p>
      }
      faqs={[
        {
          question: "Are sharks fish?",
          answer:
            "Yes. Sharks are cartilaginous fish, distinguished from bony fish by skeletons made of cartilage rather than bone, and by a number of other anatomical features. They are not mammals — unlike dolphins, sharks have gills, are cold-blooded in most species, and do not breathe air or nurse young with milk.",
        },
        {
          question: "How many shark species exist?",
          answer:
            "More than 500 living species are described, and new species are still being recognised. The exact count varies with taxonomic revisions; the IUCN Red List and major taxonomic databases are the best sources for current figures.",
        },
        {
          question: "Are sharks dangerous to humans?",
          answer:
            "The number of recorded unprovoked shark attacks on humans worldwide is small in any given year, and fatalities are rarer still. Most shark species pose no realistic threat to humans. A small number of species — for example the great white, tiger and bull shark — are responsible for most documented serious incidents.",
        },
        {
          question: "Can sharks live in freshwater?",
          answer:
            "Most cannot, but a few species — most notably the bull shark — are physiologically able to move between salt and freshwater and have been recorded in some river systems. River sharks (genus Glyphis) also occupy freshwater and estuarine habitats.",
        },
      ]}
      quickFacts={[
        { label: "Class", value: "Chondrichthyes" },
        { label: "Superorder", value: "Selachimorpha" },
        { label: "Species count", value: "500+ (approximate)" },
        { label: "Skeleton", value: "Cartilage (not bone)" },
        { label: "Diet", value: "Carnivore or filter-feeder, varies by species" },
        { label: "Primary habitat", value: "Marine; a few species enter freshwater" },
        { label: "Range", value: "All major oceans" },
        { label: "IUCN Status", value: "Varies by species (many are threatened)" },
      ]}
      relatedLinks={[
        { label: "Dolphin Profile", href: "/animals/dolphin", description: "Marine mammals (Cetacea)" },
        { label: "Crocodile Profile", href: "/animals/crocodile", description: "Aquatic apex predators" },
        { label: "Marine Animals", href: "/animal-encyclopedia/marine-animals" },
        { label: "Animal Encyclopedia", href: "/animal-encyclopedia" },
      ]}
      publishedDate={PUBLISHED}
      modifiedDate={MODIFIED}
    />
  );
}
