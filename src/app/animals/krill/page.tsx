import type { Metadata } from "next";
import AnimalProfileLayout from "@/components/AnimalProfileLayout";
import { ANIMAL_SOURCES } from "@/lib/educational/animal-sources";
import { getAnimalGalleryImages, getAnimalImage, getAnimalOgImage } from "@/lib/images/animal-images";
import { buildArticleMetadata } from "@/lib/metadata";

const PATH = "/animals/krill";
const TITLE = "Krill — Profile, Swarms & Role in the Ocean Food Web";
const DESC =
  "Explore krill (order Euphausiacea): small, shrimp-like crustaceans that swarm in vast numbers and feed whales, seals, penguins, and fish — a keystone of ocean food webs.";

export const metadata: Metadata = buildArticleMetadata({
  title: TITLE,
  description: DESC,
  path: PATH,
  publishedTime: "2026-06-20",
  modifiedTime: "2026-06-20",
  ogImage: getAnimalOgImage("krill"),
});

export default function KrillPage() {
  return (
    <AnimalProfileLayout
      commonName="Krill"
      scientificName="order Euphausiacea"
      pageTitle={TITLE}
      description={DESC}
      path={PATH}
      parentCategory="Marine Animals"
      parentCategoryHref="/animal-encyclopedia/marine-animals"
      tags={["Marine invertebrate", "Crustacean", "Keystone species"]}
      image={getAnimalImage("krill") ?? undefined}
      galleryImages={getAnimalGalleryImages("krill")}
      sources={ANIMAL_SOURCES.krill}
      publishedDate="2026-06-20"
      modifiedDate="2026-06-20"
      overview={
        <>
          <p>
            Krill (order Euphausiacea) are small, shrimp-like crustaceans that drift and
            swim in the open ocean, often gathering in swarms so dense and vast that they
            colour the water and can be seen from the air. The reference shown here is
            Antarctic krill (<em>Euphausia superba</em>), one of the most abundant animals
            on the planet by total mass.
          </p>
          <p>
            Though individually small, krill are a keystone of ocean ecosystems: by
            converting tiny plankton into food eaten by huge numbers of larger animals,
            they sit at the heart of polar and other marine food webs.
          </p>
          <p>
            <strong>Note:</strong> there are many krill species; details below focus on
            Antarctic krill as a well-studied example. Treat figures as general and verify
            against authoritative marine sources.
          </p>
        </>
      }
      habitat={
        <p>
          Krill live in oceans around the world, from the surface to deep water, with
          some of the largest concentrations in the cold, productive seas around
          Antarctica. They often migrate up and down through the water column over the
          course of a day, rising toward the surface and sinking again.
        </p>
      }
      diet={
        <p>
          Most krill are filter feeders that strain tiny phytoplankton (microscopic algae)
          and other small particles from the water using comb-like legs, with some also
          taking zooplankton. Around Antarctica, krill also graze algae that grow on the
          underside of sea ice, which makes them tied to the seasonal ice.
        </p>
      }
      behavior={
        <p>
          Krill are famous for forming enormous swarms, which may help with feeding and
          offer some safety in numbers despite making them an obvious target. Many krill
          are bioluminescent, producing light from special organs. Like other crustaceans
          they moult to grow, and Antarctic krill can even shrink between seasons when
          food is scarce — an unusual survival strategy.
        </p>
      }
      humanInteraction={
        <p>
          Krill underpin the diets of whales, seals, penguins, seabirds, fish, and squid,
          so their abundance ripples through whole ecosystems. They are also harvested by
          people, mainly for aquaculture feed and dietary-oil supplements, which makes
          careful, well-managed fisheries important — especially as polar seas change.
          Consult authoritative sources for current status.
        </p>
      }
      faqs={[
        {
          question: "Why are krill so important to the ocean?",
          answer:
            "Krill convert tiny plankton into a rich food source that vast numbers of larger animals — whales, seals, penguins, seabirds, fish, and squid — depend on. Because so much of the food web passes through them, krill are considered a keystone of polar and many other marine ecosystems.",
        },
        {
          question: "What do krill eat?",
          answer:
            "Most krill filter microscopic algae (phytoplankton) and small particles from the water with comb-like legs, and some also eat small zooplankton. Antarctic krill additionally graze algae that grow on the underside of sea ice.",
        },
        {
          question: "How big are krill, and how many are there?",
          answer:
            "Individual krill are small — a few centimetres long. But they occur in astonishing numbers: Antarctic krill is often cited as one of the most abundant animal species on Earth by total mass. Exact figures vary and should be checked against current scientific sources.",
        },
        {
          question: "Do krill really glow?",
          answer:
            "Many krill are bioluminescent — they have light-producing organs that emit a glow. The exact functions are still studied, with possible roles including communication, camouflage in the dim ocean, and coordinating swarms.",
        },
      ]}
      quickFacts={[
        { label: "Group", value: "Order Euphausiacea" },
        { label: "Reference species", value: "Euphausia superba (Antarctic krill)" },
        { label: "Class", value: "Malacostraca (crustaceans)" },
        { label: "Diet", value: "Filter feeder (plankton)" },
        { label: "Behaviour", value: "Forms vast swarms; many glow" },
        { label: "Role", value: "Keystone of ocean food webs" },
        { label: "Eaten by", value: "Whales, seals, penguins, fish" },
        { label: "Status", value: "Verify; managed fisheries exist" },
      ]}
      relatedLinks={[
        { label: "Shrimp Profile", href: "/animals/shrimp", description: "A similar-looking crustacean" },
        { label: "Whale Profile", href: "/animals/whale", description: "A major krill predator" },
        { label: "Penguin Profile", href: "/animals/penguin", description: "Depends on krill in polar seas" },
        { label: "Ocean fauna by depth", href: "/fauna/ocean", description: "Where krill migrate each day" },
        { label: "Marine Animals", href: "/animal-encyclopedia/marine-animals" },
      ]}
    />
  );
}
