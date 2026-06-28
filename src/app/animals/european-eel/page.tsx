import type { Metadata } from "next";
import AnimalProfileLayout from "@/components/AnimalProfileLayout";
import { ANIMAL_SOURCES } from "@/lib/educational/animal-sources";
import { getAnimalGalleryImages, getAnimalImage, getAnimalOgImage } from "@/lib/images/animal-images";
import { buildArticleMetadata } from "@/lib/metadata";

const PATH = "/animals/european-eel";
const TITLE = "European Eel: A Catadromous Migratory Fish";
const DESC =
  "Learn about the European eel, a catadromous, snake-like fish with a remarkable life cycle, its habitat, ecology, and Critically Endangered IUCN status.";

export const metadata: Metadata = buildArticleMetadata({
  title: TITLE,
  description: DESC,
  path: PATH,
  publishedTime: "2026-06-27",
  modifiedTime: "2026-06-27",
  ogImage: getAnimalOgImage("european-eel"),
});

export default function EuropeanEelPage() {
  return (
    <AnimalProfileLayout
      commonName="European Eel"
      scientificName="Anguilla anguilla"
      pageTitle={TITLE}
      description={DESC}
      path={PATH}
      parentCategory="Fish"
      parentCategoryHref="/animal-encyclopedia/fish"
      tags={["Fish","Catadromous","Critically Endangered"]}
      image={getAnimalImage("european-eel") ?? undefined}
      galleryImages={getAnimalGalleryImages("european-eel")}
      sources={ANIMAL_SOURCES["european-eel"]}
      publishedDate="2026-06-27"
      modifiedDate="2026-06-27"
      overview={
        <>
          <p>
            The European eel (<em>Anguilla anguilla</em>) is a slender, snake-like fish best known for one of the most remarkable life cycles in the animal kingdom. It is catadromous, meaning it spends much of its life in fresh and brackish water but is believed to migrate to the ocean to reproduce. The species is thought to spawn in the Sargasso Sea, a region of the western Atlantic, after which tiny larvae are believed to drift across the ocean toward Europe.
          </p>
          <p>
            Once they reach coastal and inland waters, young eels grow and mature over many years before, it is thought, undertaking a return journey to the ocean to breed. Much about this oceanic phase remains uncertain, and direct observation of natural spawning has been extremely limited, so descriptions of the migration are based largely on indirect evidence and continue to be studied.
          </p>
          <p>
            The European eel is listed as Critically Endangered on the IUCN Red List, an assessment that reflects concern over the species and that can change as new information becomes available. Because of its complex life history and wide-ranging movements, the eel is both ecologically significant and the focus of considerable scientific and conservation attention.
          </p>
          <h3>Taxonomy and animal group</h3>
          <p>
            The European eel belongs to the family Anguillidae, the freshwater eels, within the order Anguilliformes. It is a true bony fish (a ray-finned fish, class Actinopterygii) rather than a reptile, despite its snake-like body. Several closely related species exist in the genus <em>Anguilla</em>, including the American eel (<em>Anguilla rostrata</em>) and the Japanese eel (<em>Anguilla japonica</em>), and the European eel is distinguished by its own scientific name, <em>Anguilla anguilla</em>. It should not be confused with unrelated elongated fishes that are sometimes casually called eels.
          </p>
          <h3>Appearance and recognition</h3>
          <p>
            The European eel has a long, cylindrical, snake-like body that tapers toward the tail, with smooth skin coated in mucus and small scales embedded beneath the surface. The dorsal, tail, and anal fins are continuous, forming a single fin fringe along the rear of the body, and there are no pelvic fins. Coloration changes through the eel&#39;s life: younger river-dwelling eels tend toward yellowish or brownish tones, often described as the &quot;yellow eel&quot; stage, while maturing individuals preparing to migrate develop a more silvery underside and darker back, known as the &quot;silver eel&quot; stage. Its eyes also enlarge as it readies for the marine phase.
          </p>
        </>
      }
      habitat={
        <p>
          The European eel is associated with a wide variety of fresh and brackish waters, including rivers, streams, lakes, estuaries, and coastal lagoons across parts of its range in Europe and parts of North Africa, with its early and final life stages occurring in the Atlantic Ocean. It occurs in parts of these regions rather than uniformly everywhere, and its presence in any given catchment depends on access from the sea and local conditions. The eel is notably tolerant of varied environments and can occur in both flowing and still waters, but its distribution should be understood as patchy and shaped by the connectivity between inland habitats and the ocean. Where it is present, the species is generally native and reaches inland waters through natural migration from the sea.
        </p>
      }
      diet={
        <p>
          The European eel is a carnivorous and opportunistic feeder whose diet shifts with age, size, and habitat. Smaller eels typically take aquatic invertebrates such as insect larvae, crustaceans, and worms, while larger individuals may consume small fish, molluscs, and other prey they encounter. Eels often feed during darker hours and use a well-developed sense of smell to locate food. During the long oceanic migration associated with breeding, mature eels are thought to stop feeding, drawing instead on stored body reserves.
        </p>
      }
      behavior={
        <>
          <p>
            European eels are generally secretive, often sheltering among vegetation, in soft sediment, or under cover, and they are most active in low light. The species passes through several distinct life stages, from transparent larvae to pigmented juveniles known as glass eels and elvers, then to the yellow eel growth stage, and finally to the silver eel stage that precedes the seaward migration. Eels can spend many years in fresh and brackish water before this transformation, and they are believed to make a single long breeding migration to the ocean. Because the oceanic spawning phase has been very rarely observed directly, details of their reproductive behavior remain uncertain and continue to be researched.
          </p>
          <p>
            As a long-lived and wide-ranging fish, the European eel plays a meaningful role in aquatic food webs, acting both as a predator of invertebrates and smaller animals and as prey for larger fishes, birds, and other wildlife. Its movements between marine and inland waters connect ecosystems across very large distances, linking the open Atlantic with rivers and lakes far inland. Changes in eel numbers can therefore reflect, and potentially influence, the broader health of the freshwater and coastal systems it inhabits.
          </p>
        </>
      }
      humanInteraction={
        <p>
          The European eel has a long history of interaction with people and is currently listed as Critically Endangered on the IUCN Red List, an assessment that reflects serious conservation concern and that may be revised as understanding improves. Pressures discussed in scientific and conservation contexts include barriers to migration, habitat changes, and other human-related factors, and the species is the subject of management and protection efforts in many areas. This profile is educational and is not a guide to catching, keeping, or handling eels; questions about regulations, conservation, or wildlife encounters are best directed to local wildlife authorities and relevant conservation bodies.
        </p>
      }
      faqs={[
        {
          question: "Where does the European eel spawn?",
          answer:
            "It is thought to spawn in the Sargasso Sea in the western Atlantic. Natural spawning has been observed only very rarely, so this remains based largely on indirect evidence and continued study.",
        },
        {
          question: "Is the European eel endangered?",
          answer:
            "Yes. The European eel is listed as Critically Endangered on the IUCN Red List, an assessment that reflects current concern and can change as new information becomes available.",
        },
        {
          question: "What does catadromous mean?",
          answer:
            "Catadromous describes a fish that lives much of its life in fresh or brackish water but is believed to migrate to the sea to reproduce, which is the pattern associated with the European eel.",
        },
        {
          question: "Is the European eel the same as other eels?",
          answer:
            "No. It is one species, Anguilla anguilla, within a group of related eels such as the American and Japanese eels, and it is identified by its own scientific name.",
        },
      ]}
      quickFacts={[
        { label: "Scientific name", value: "Anguilla anguilla" },
        { label: "Animal group", value: "Fish (ray-finned, bony fish)" },
        { label: "Family or order", value: "Anguillidae; order Anguilliformes" },
        { label: "Size", value: "Long, slender body; can reach roughly a meter in length" },
        { label: "Diet", value: "Carnivorous; invertebrates, small fish, and other prey" },
        { label: "Habitat", value: "Fresh and brackish waters; ocean during early and breeding stages" },
        { label: "Range", value: "Parts of Europe and parts of North Africa, with Atlantic Ocean phases" },
        { label: "Conservation status", value: "Critically Endangered (IUCN Red List)" },
      ]}
      relatedLinks={[
        { label: "Eel Profile", href: "/animals/eel", description: "Eels more broadly" },
        { label: "Atlantic Salmon", href: "/animals/atlantic-salmon", description: "Another migratory fish" },
        { label: "Brown Trout", href: "/animals/brown-trout", description: "A European freshwater fish" },
        { label: "European fauna", href: "/fauna/continents/europe", description: "Animals of Europe" },
        { label: "Endangered Animals", href: "/endangered-animals", description: "Conservation status & the Red List" },
      ]}
    />
  );
}
