import type { Metadata } from "next";
import AnimalProfileLayout from "@/components/AnimalProfileLayout";
import { ANIMAL_SOURCES } from "@/lib/educational/animal-sources";
import { getAnimalGalleryImages, getAnimalImage, getAnimalOgImage } from "@/lib/images/animal-images";
import { buildArticleMetadata } from "@/lib/metadata";

const PATH = "/animals/parrotfish";
const TITLE = "Parrotfish — Profile, Beak, Diet & How It Makes Sand";
const DESC =
  "Explore parrotfish (family Scaridae): colourful reef fish with a beak-like mouth that scrape algae from coral and, in doing so, produce much of the white sand on tropical beaches.";

export const metadata: Metadata = buildArticleMetadata({
  title: TITLE,
  description: DESC,
  path: PATH,
  publishedTime: "2026-06-20",
  modifiedTime: "2026-06-20",
  ogImage: getAnimalOgImage("parrotfish"),
});

export default function ParrotfishPage() {
  return (
    <AnimalProfileLayout
      commonName="Parrotfish"
      scientificName="family Scaridae"
      pageTitle={TITLE}
      description={DESC}
      path={PATH}
      parentCategory="Fish"
      parentCategoryHref="/animal-encyclopedia/fish"
      tags={["Fish", "Reef", "Herbivore"]}
      image={getAnimalImage("parrotfish") ?? undefined}
      galleryImages={getAnimalGalleryImages("parrotfish")}
      sources={ANIMAL_SOURCES.parrotfish}
      publishedDate="2026-06-20"
      modifiedDate="2026-06-20"
      overview={
        <>
          <p>
            Parrotfish (family Scaridae) are vivid, often large reef fish named for their
            beak-like mouth, formed by tightly packed teeth fused into a hard plate that
            resembles a parrot&apos;s beak. They use this beak to scrape algae and other
            growth from coral and rock — and in doing so play a surprising role in
            creating tropical beaches.
          </p>
          <p>
            Parrotfish are among the most colourful and ecologically important fish on
            coral reefs, helping keep reefs healthy by controlling the algae that would
            otherwise smother coral.
          </p>
          <p>
            <strong>Note:</strong> the family is large and many species change colour —
            and even sex — as they mature, so appearance varies a lot. Treat general
            statements as approximate and verify against authoritative sources.
          </p>
        </>
      }
      habitat={
        <p>
          Parrotfish live on tropical and subtropical coral reefs, seagrass beds, and
          rocky areas around the world, mostly in warm, shallow, sunlit water where algae
          and coral are abundant. They are a familiar, busy presence on healthy reefs by
          day.
        </p>
      }
      diet={
        <p>
          Most parrotfish are herbivores that scrape algae (and the thin layer of life on
          coral surfaces) with their beak, grinding the mix — including bits of coral
          rock — with special throat teeth. By controlling algae, they help corals
          compete for space, which is vital for reef health.
        </p>
      }
      behavior={
        <p>
          Parrotfish graze the reef through the day and, famously, many secrete a mucus
          &ldquo;sleeping bag&rdquo; around themselves at night, which may mask their
          scent from predators. A remarkable trait: as they pass ground-up coral rock
          through the gut, parrotfish excrete fine white sand — a single fish can produce
          a large amount over a year, contributing substantially to white coral-sand
          beaches. Many species also change colour and sex with age.
        </p>
      }
      humanInteraction={
        <p>
          Parrotfish are keystone grazers whose presence helps reefs stay coral-dominated
          rather than algae-choked, so their loss to overfishing can harm whole reef
          systems; some areas now protect them for this reason. They are also prized by
          divers for their colour. Consult authoritative sources for species-specific
          status.
        </p>
      }
      faqs={[
        {
          question: "Do parrotfish really make sand?",
          answer:
            "Yes — a notable amount. As parrotfish scrape algae from coral, they ingest bits of hard coral rock, grind it up with throat teeth, and excrete it as fine white sand. Across many fish over many years, this contributes substantially to the white sand of tropical reefs and beaches.",
        },
        {
          question: "Why is a parrotfish's mouth shaped like a beak?",
          answer:
            "Their teeth are fused into a strong, beak-like plate ideal for scraping tough algae and the surface layer off coral and rock. The shape — and the bright colours of many species — is what gives parrotfish their name.",
        },
        {
          question: "Why are parrotfish important to coral reefs?",
          answer:
            "By grazing algae, parrotfish stop it from overgrowing and smothering corals, helping reefs stay healthy and coral-dominated. This makes them keystone grazers, and their decline through overfishing can shift reefs toward algae and degrade them.",
        },
        {
          question: "Do parrotfish change colour or sex?",
          answer:
            "Many do. Parrotfish often go through dramatic colour changes as they mature, and a number of species can change sex (typically from female to male). This is why the same species can look very different at different life stages.",
        },
      ]}
      quickFacts={[
        { label: "Group", value: "Family Scaridae" },
        { label: "Reference", value: "Scarus parrotfishes" },
        { label: "Class", value: "Actinopterygii (ray-finned fish)" },
        { label: "Mouth", value: "Fused beak-like teeth" },
        { label: "Diet", value: "Mostly herbivore (algae grazer)" },
        { label: "Famous for", value: "Producing white coral sand" },
        { label: "Habitat", value: "Tropical coral reefs" },
        { label: "Role", value: "Keystone reef grazer" },
      ]}
      relatedLinks={[
        { label: "Clownfish Profile", href: "/animals/clownfish", description: "Another iconic reef fish" },
        { label: "Coral Profile", href: "/animals/coral", description: "What parrotfish graze and shape" },
        { label: "Grouper Profile", href: "/animals/grouper", description: "A large reef predator" },
        { label: "Fish Encyclopedia", href: "/animal-encyclopedia/fish" },
        { label: "Ocean fauna by depth", href: "/fauna/ocean", description: "Reef habitats in context" },
      ]}
    />
  );
}
