import type { Metadata } from "next";
import AnimalProfileLayout from "@/components/AnimalProfileLayout";
import { ANIMAL_SOURCES } from "@/lib/educational/animal-sources";
import { getAnimalGalleryImages, getAnimalImage, getAnimalOgImage } from "@/lib/images/animal-images";
import { buildArticleMetadata } from "@/lib/metadata";

const PATH = "/animals/glass-sponge";
const TITLE = "Glass Sponge (Hexactinellida): Deep-Sea Silica Sponges";
const DESC =
  "Glass sponges (class Hexactinellida) build delicate skeletons of silica spicules. Meet the Venus' flower basket and these slow-growing deep-sea filter feeders.";

export const metadata: Metadata = buildArticleMetadata({
  title: TITLE,
  description: DESC,
  path: PATH,
  publishedTime: "2026-06-27",
  modifiedTime: "2026-06-27",
  ogImage: getAnimalOgImage("glass-sponge"),
});

export default function GlassSpongePage() {
  return (
    <AnimalProfileLayout
      commonName="Glass Sponge"
      scientificName="class Hexactinellida"
      pageTitle={TITLE}
      description={DESC}
      path={PATH}
      parentCategory="Marine Animals"
      parentCategoryHref="/animal-encyclopedia/marine-animals"
      tags={["Marine invertebrate","Sponge","Deep sea"]}
      image={getAnimalImage("glass-sponge") ?? undefined}
      galleryImages={getAnimalGalleryImages("glass-sponge")}
      sources={ANIMAL_SOURCES["glass-sponge"]}
      publishedDate="2026-06-27"
      modifiedDate="2026-06-27"
      overview={
        <>
          <p>
            Glass sponges (class Hexactinellida) are deep-sea sponges named for their skeletons, which are built from silica — essentially glass — in the form of spicules. In many species these spicules fuse or interlock into delicate, intricate lattices, giving the animals a fine, almost woven appearance. The Venus&#39; flower basket (<em>Euplectella aspergillum</em>) is one of the most famous examples: a slender, tubular silica lattice that has long fascinated both biologists and engineers studying natural structural design.
          </p>
          <p>
            These sponges are filter feeders, straining tiny particles and microbes from the surrounding water. They live mostly in cold, deep seas worldwide, and in some regions they form sponge &quot;reefs&quot; or grounds that provide shelter and structure for other animals. Some glass sponges are thought to be extremely long-lived and slow-growing. The deep-sea species <em>Monorhaphis chuni</em> is notable for producing the largest known single biosilica structure, a giant basal spicule that anchors it to the seafloor.
          </p>
          <p>
            Note: Much about glass sponges remains poorly understood. They are known mainly from collected specimens, museum material, and deep-sea expedition footage, and details of their distribution, depth ranges, lifespan, and conservation status vary by species and source. The descriptions here are general for the class; specific figures should be checked against authoritative marine sources such as NOAA Ocean Exploration, Smithsonian Ocean, MBARI, or WoRMS.
          </p>
        </>
      }
      habitat={
        <p>
          Glass sponges are representative of the deep sea, where they are typically found in cold, dark waters far below the sunlit surface. They occur in deep marine settings worldwide, often anchored to hard substrate or soft sediment on the seafloor. In some areas, such as parts of the northeastern Pacific, they aggregate densely enough to form sponge reefs or grounds that add three-dimensional structure to otherwise open seabed. Reported depths vary considerably by species and region, and depth zones are best understood as educational frameworks rather than rigid boundaries, so it is most accurate to describe glass sponges as commonly associated with the cold, deep ocean.
        </p>
      }
      diet={
        <p>
          Glass sponges are filter feeders. Water is drawn through the body, and the sponge strains out very small particles, including microbes and fine organic matter suspended in the water column. This way of feeding suits the food-scarce conditions of the deep sea, where energy often arrives slowly as drifting particles sinking from above. Feeding rates and exact diet differ among species and remain incompletely documented.
        </p>
      }
      behavior={
        <>
          <p>
            As sponges, glass sponges are sessile — they remain fixed in place for their adult lives rather than moving around. Their activity is largely a matter of pumping and filtering water through their silica framework. A striking association is seen in the Venus&#39; flower basket: pairs of small shrimp often enter the lattice when young and grow too large to leave, effectively living trapped for life inside the sponge. Some glass sponges are also thought to be very long-lived, growing slowly over long periods.
          </p>
          <p>
            Glass sponges are adapted to the darkness, cold, high pressure, and limited food of the deep sea. Their defining feature is a skeleton of silica spicules, which in many species fuse into rigid yet remarkably delicate lattices that support the body and resist deep-sea conditions. This biosilica architecture has drawn scientific interest because it combines strength with flexibility and fine structural detail. The giant basal spicule of <em>Monorhaphis chuni</em>, the largest known single biosilica structure, illustrates how far this glass-building ability can extend. Slow growth and long potential lifespans are themselves adaptations to an environment where food is scarce and energy must be used sparingly.
          </p>
        </>
      }
      humanInteraction={
        <p>
          People rarely encounter glass sponges directly, since they live in deep, cold seas well beyond casual reach. Most of what is known comes from specimens collected on research cruises, museum collections, and footage from remotely operated vehicles and deep-sea expeditions. Their fragile, glassy skeletons and engineering-inspired lattice structures make them of interest to biologists and materials scientists alike. Because they are slow-growing and physically fragile, glass sponges and the reefs some species form are considered sensitive to disturbance, though conservation status is generally poorly assessed and varies by species; figures and protections should be confirmed against authoritative marine sources.
        </p>
      }
      faqs={[
        {
          question: "Why are they called glass sponges?",
          answer:
            "They are called glass sponges because their skeletons are made of silica — the same basic material as glass — in the form of spicules. In many species these spicules fuse or interlock into delicate, intricate lattices, giving the animals a fine, glass-like appearance.",
        },
        {
          question: "What is the Venus' flower basket?",
          answer:
            "The Venus' flower basket (Euplectella aspergillum) is a well-known glass sponge with a slender, tubular silica lattice. It is famous partly because pairs of small shrimp often live inside it, having entered when young and grown too large to escape, effectively spending their lives within the sponge.",
        },
        {
          question: "How deep do glass sponges live?",
          answer:
            "Glass sponges are generally associated with the cold, dark deep sea far below the surface, and they occur in deep waters worldwide. Reported depths vary by species, region, and source, so it is most accurate to describe them as deep-sea animals rather than to assign a single fixed range.",
        },
        {
          question: "Are glass sponges endangered?",
          answer:
            "Conservation status for most glass sponges is poorly assessed, which is common for deep-sea species. Because they are slow-growing, fragile, and in some regions form reefs sensitive to disturbance, they are considered vulnerable to physical damage, but specific assessments should be checked against authoritative marine sources.",
        },
      ]}
      quickFacts={[
        { label: "Group", value: "Glass sponges (class Hexactinellida)" },
        { label: "Higher classification", value: "Phylum Porifera (sponges); e.g. Euplectella aspergillum" },
        { label: "Diet", value: "Filter feeder; strains microbes and fine particles from water" },
        { label: "Notable trait", value: "Skeleton of silica (glass) spicules, often in delicate lattices" },
        { label: "Adaptation", value: "Slow-growing, long-lived biosilica architecture for the deep sea" },
        { label: "Habitat", value: "Cold, deep seas worldwide; some form sponge reefs or grounds" },
        { label: "Depth association", value: "Deep sea; commonly associated with cold, dark deep waters" },
        { label: "Conservation status", value: "Not well assessed (deep-sea); varies by species" },
      ]}
      relatedLinks={[
        { label: "Deep-Sea Coral Profile", href: "/animals/deep-sea-coral", description: "Another deep-seafloor reef animal" },
        { label: "Sea Fan Profile", href: "/animals/sea-fan", description: "Flexible soft corals" },
        { label: "Hydrothermal Vent Tubeworm", href: "/animals/hydrothermal-vent-tubeworm", description: "Another deep-sea animal" },
        { label: "Ocean fauna by depth", href: "/fauna/ocean", description: "How life changes with depth" },
        { label: "Marine Animals", href: "/animal-encyclopedia/marine-animals" },
      ]}
    />
  );
}
