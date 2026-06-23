import type { Metadata } from "next";
import AnimalProfileLayout from "@/components/AnimalProfileLayout";
import { ANIMAL_SOURCES } from "@/lib/educational/animal-sources";
import { getAnimalGalleryImages, getAnimalImage, getAnimalOgImage } from "@/lib/images/animal-images";
import { buildArticleMetadata } from "@/lib/metadata";

const PATH = "/animals/lanternfish";
const TITLE = "Lanternfish — Profile of the Glowing Deep-sea Fish";
const DESC =
  "Meet the lanternfish (Myctophidae): small, light-producing deep-sea fish that may be among the most abundant vertebrates on Earth and migrate up to the surface and back down every night.";

export const metadata: Metadata = buildArticleMetadata({
  title: TITLE,
  description: DESC,
  path: PATH,
  publishedTime: "2026-06-23",
  modifiedTime: "2026-06-23",
  ogImage: getAnimalOgImage("lanternfish"),
});

export default function LanternfishPage() {
  return (
    <AnimalProfileLayout
      commonName="Lanternfish"
      scientificName="Family Myctophidae"
      pageTitle={TITLE}
      description={DESC}
      path={PATH}
      parentCategory="Fish"
      parentCategoryHref="/animal-encyclopedia/fish"
      tags={["Fish", "Deep sea", "Bioluminescent", "Marine"]}
      image={getAnimalImage("lanternfish") ?? undefined}
      galleryImages={getAnimalGalleryImages("lanternfish")}
      sources={ANIMAL_SOURCES.lanternfish}
      publishedDate="2026-06-23"
      modifiedDate="2026-06-23"
      overview={
        <>
          <p>
            Lanternfish (family Myctophidae) are small deep-sea fish — typically just a few centimetres long
            — found in oceans worldwide. Their name comes from rows of light-producing organs, called
            photophores, that dot the head and body and glow with a soft blue-green light.
          </p>
          <p>
            What lanternfish lack in size they make up in sheer numbers. They are extraordinarily abundant
            and form a huge part of the deep-ocean fish biomass; by some estimates they are among the most
            numerous vertebrates on the planet, and they are a vital link in marine food webs.
          </p>
          <p>
            <strong>Note:</strong> Myctophidae contains hundreds of species; details here describe the family
            broadly.
          </p>
        </>
      }
      habitat={
        <p>
          Lanternfish live in the open ocean, mostly in the twilight (mesopelagic) zone roughly a few
          hundred to a thousand metres down by day. At night many rise toward the surface to feed. They occur
          in all the world&apos;s major oceans, from the tropics to polar seas, and make up much of the
          life of the deep mid-water.
        </p>
      }
      diet={
        <p>
          Lanternfish feed mainly on tiny drifting animals — zooplankton such as copepods and krill, and
          other small invertebrates. In turn they are eaten by a vast range of larger animals, including
          bigger fish, squid, seabirds, seals, dolphins, and whales, which makes them a crucial step in
          transferring energy up the ocean food chain.
        </p>
      }
      behavior={
        <p>
          Lanternfish are famous for taking part in the largest movement of animals on Earth: the daily
          vertical migration. Each evening huge numbers swim up from the depths to feed in richer surface
          waters under cover of darkness, then descend again before dawn to hide from predators in the dim
          deep — a daily rhythm so dense it shows up on ship sonar as a moving &ldquo;deep scattering
          layer.&rdquo; Their photophores are thought to help with camouflage (matching faint light from
          above), signalling to others of their kind, and possibly confusing predators.
        </p>
      }
      humanInteraction={
        <p>
          People rarely see lanternfish, but they are immensely important: as prey for commercially valuable
          fish and marine mammals, and as part of the &ldquo;biological pump&rdquo; that carries carbon from
          the surface into the deep sea during the nightly migration. There is growing interest in fishing
          them at scale, which raises concerns about the effects on ocean food webs. Consult marine science
          and fisheries sources for current information.
        </p>
      }
      faqs={[
        {
          question: "Why are they called lanternfish?",
          answer:
            "Because of their built-in lights. Lanternfish carry rows of light-producing organs (photophores) on the head and body that glow with a soft blue-green light, like tiny lanterns, using bioluminescence.",
        },
        {
          question: "Are lanternfish really that common?",
          answer:
            "Yes. Lanternfish are among the most abundant fish in the open ocean and make up a large share of the deep-sea fish biomass. By some estimates they rank among the most numerous vertebrates on Earth.",
        },
        {
          question: "What is the daily vertical migration?",
          answer:
            "It is the nightly journey lanternfish and many other deep-sea animals make. They rise toward the surface after dark to feed where food is richer, then sink back to the dark depths by day to avoid predators. This mass movement is so large it can be detected by ship sonar.",
        },
        {
          question: "Why do lanternfish matter to the ocean?",
          answer:
            "They are a key link in marine food webs, feeding on plankton and being eaten by fish, squid, seabirds, and marine mammals. Their nightly migration also helps move carbon from surface waters into the deep sea, part of the ocean's 'biological pump'.",
        },
      ]}
      quickFacts={[
        { label: "Family", value: "Myctophidae (hundreds of species)" },
        { label: "Class", value: "Actinopterygii (ray-finned fish)" },
        { label: "Size", value: "Mostly a few centimetres long" },
        { label: "Range", value: "All major oceans (open water)" },
        { label: "Zone", value: "Twilight (mesopelagic) deep sea" },
        { label: "Light", value: "Photophores; blue-green bioluminescence" },
        { label: "Behaviour", value: "Daily vertical migration to surface & back" },
        { label: "Role", value: "Hugely abundant; key ocean food-web link" },
      ]}
      relatedLinks={[
        { label: "Anglerfish Profile", href: "/animals/anglerfish", description: "Another deep-sea fish that uses light" },
        { label: "Oarfish Profile", href: "/animals/oarfish", description: "A giant of the deep open ocean" },
        { label: "Frilled Shark Profile", href: "/animals/frilled-shark", description: "A deep-sea shark" },
        { label: "Fish Encyclopedia", href: "/animal-encyclopedia/fish", description: "More fish profiles" },
        { label: "Marine Animals", href: "/animal-encyclopedia/marine-animals" },
      ]}
    />
  );
}
