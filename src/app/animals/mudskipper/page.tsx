import type { Metadata } from "next";
import AnimalProfileLayout from "@/components/AnimalProfileLayout";
import { ANIMAL_SOURCES } from "@/lib/educational/animal-sources";
import { getAnimalGalleryImages, getAnimalImage, getAnimalOgImage } from "@/lib/images/animal-images";
import { buildArticleMetadata } from "@/lib/metadata";

const PATH = "/animals/mudskipper";
const TITLE = "Mudskipper — Profile, the Fish That Walks on Land";
const DESC =
  "Explore mudskippers (e.g. Periophthalmus): amphibious gobies that breathe through the skin, walk on their fins, and spend much of their lives out of water on tropical mudflats.";

export const metadata: Metadata = buildArticleMetadata({
  title: TITLE,
  description: DESC,
  path: PATH,
  publishedTime: "2026-06-20",
  modifiedTime: "2026-06-20",
  ogImage: getAnimalOgImage("mudskipper"),
});

export default function MudskipperPage() {
  return (
    <AnimalProfileLayout
      commonName="Mudskipper"
      scientificName="e.g. Periophthalmus"
      pageTitle={TITLE}
      description={DESC}
      path={PATH}
      parentCategory="Fish"
      parentCategoryHref="/animal-encyclopedia/fish"
      tags={["Fish", "Amphibious", "Intertidal"]}
      image={getAnimalImage("mudskipper") ?? undefined}
      galleryImages={getAnimalGalleryImages("mudskipper")}
      sources={ANIMAL_SOURCES.mudskipper}
      publishedDate="2026-06-20"
      modifiedDate="2026-06-20"
      overview={
        <>
          <p>
            Mudskippers are remarkable amphibious fish — gobies that spend much of their
            lives out of the water on tropical and subtropical mudflats. They
            &ldquo;walk&rdquo; and skip across the mud using their muscular front fins,
            breathe partly through their skin and the lining of the mouth and gill
            chambers, and have high-set, mobile eyes for spotting prey and danger above
            the surface. The reference shown here is a <em>Periophthalmus</em> mudskipper.
          </p>
          <p>
            Few animals show the transition between water and land as vividly as a
            mudskipper, which is fully a fish yet thrives on exposed mud at low tide.
          </p>
          <p>
            <strong>Note:</strong> there are many mudskipper species with different
            habits; treat general statements as approximate and verify against
            authoritative sources.
          </p>
        </>
      }
      habitat={
        <p>
          Mudskippers live in intertidal habitats — mudflats, mangrove forests, and
          estuaries — across the tropics and subtropics of Africa, Asia, and Australia.
          They occupy the zone that is alternately covered and exposed by the tide, and
          many dig burrows in the mud for shelter and breeding.
        </p>
      }
      diet={
        <p>
          Depending on the species, mudskippers eat small invertebrates such as insects,
          crustaceans, and worms, while some graze on algae and detritus on the mud
          surface. They feed at low tide on the exposed flats, snapping up prey or
          scooping mud.
        </p>
      }
      behavior={
        <p>
          Out of water, a mudskipper keeps its skin and gill chambers moist to breathe,
          returning to water or wet mud to re-wet itself. It moves by pushing with its
          pectoral fins (and can skip in quick hops), and defends territories around its
          burrow, sometimes with displays of its raised dorsal fin. Burrows also shelter
          eggs and provide refuge from heat, predators, and the changing tide.
        </p>
      }
      humanInteraction={
        <p>
          Mudskippers are a striking part of mangrove and mudflat ecosystems and are
          popular subjects for nature watchers and photographers. They depend on healthy
          intertidal habitats, so mangrove loss and coastal pollution are the main
          concerns. Consult authoritative sources for species-specific status.
        </p>
      }
      faqs={[
        {
          question: "How can a mudskipper survive out of water?",
          answer:
            "Mudskippers breathe in air by keeping their skin and the linings of their mouth and gill chambers moist, absorbing oxygen through them. They periodically return to water or wet mud to re-wet these surfaces, which lets them spend long periods on land at low tide.",
        },
        {
          question: "How do mudskippers move on land?",
          answer:
            "They use their muscular pectoral (front) fins like little limbs to crutch and pull themselves across the mud, and they can also flick the body to skip in quick hops — which is how they got the name \"mudskipper.\"",
        },
        {
          question: "Are mudskippers really fish?",
          answer:
            "Yes — they are true fish, specifically gobies. Despite spending much of their time out of water and walking on their fins, they have gills, fins, and the other features of fish; they are simply highly adapted to an amphibious, intertidal life.",
        },
        {
          question: "Why do mudskippers have bulging eyes on top of the head?",
          answer:
            "Their high-set, mobile eyes give a wide field of view above the mud and water surface, helping them watch for prey, rivals, and predators while their body stays low. They can also retract the eyes briefly to keep them moist.",
        },
      ]}
      quickFacts={[
        { label: "Group", value: "Mudskippers (gobies, e.g. Periophthalmus)" },
        { label: "Class", value: "Actinopterygii (ray-finned fish)" },
        { label: "Special trait", value: "Amphibious; walks & breathes air" },
        { label: "Diet", value: "Invertebrates; some algae/detritus" },
        { label: "Habitat", value: "Tropical mudflats & mangroves" },
        { label: "Shelter", value: "Burrows in the mud" },
        { label: "Eyes", value: "High-set and mobile" },
        { label: "Status", value: "Varies by species (verify)" },
      ]}
      relatedLinks={[
        { label: "Frog Profile", href: "/animals/frog", description: "An amphibian that also bridges water and land" },
        { label: "Clownfish Profile", href: "/animals/clownfish", description: "A relative within the broader fish group" },
        { label: "Crab Profile", href: "/animals/crab", description: "A neighbour on the mudflats" },
        { label: "Fish Encyclopedia", href: "/animal-encyclopedia/fish" },
        { label: "Fauna by Continent", href: "/fauna/continents", description: "Coastal fauna in context" },
      ]}
    />
  );
}
