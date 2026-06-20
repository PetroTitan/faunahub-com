import type { Metadata } from "next";
import AnimalProfileLayout from "@/components/AnimalProfileLayout";
import { ANIMAL_SOURCES } from "@/lib/educational/animal-sources";
import { getAnimalGalleryImages, getAnimalImage, getAnimalOgImage } from "@/lib/images/animal-images";
import { buildArticleMetadata } from "@/lib/metadata";

const PATH = "/animals/cuttlefish";
const TITLE = "Cuttlefish — Profile, Colour-Change, Intelligence & Diet";
const DESC =
  "Explore cuttlefish (order Sepiida): intelligent cephalopods that change colour and texture in an instant, hunt with lightning tentacles, and float using an internal cuttlebone.";

export const metadata: Metadata = buildArticleMetadata({
  title: TITLE,
  description: DESC,
  path: PATH,
  publishedTime: "2026-06-19",
  modifiedTime: "2026-06-19",
  ogImage: getAnimalOgImage("cuttlefish"),
});

export default function CuttlefishPage() {
  return (
    <AnimalProfileLayout
      commonName="Cuttlefish"
      scientificName="order Sepiida"
      pageTitle={TITLE}
      description={DESC}
      path={PATH}
      parentCategory="Marine Animals"
      parentCategoryHref="/animal-encyclopedia/marine-animals"
      tags={["Marine invertebrate", "Cephalopod", "Highly intelligent"]}
      image={getAnimalImage("cuttlefish") ?? undefined}
      galleryImages={getAnimalGalleryImages("cuttlefish")}
      sources={ANIMAL_SOURCES.cuttlefish}
      publishedDate="2026-06-19"
      modifiedDate="2026-06-19"
      overview={
        <>
          <p>
            Cuttlefish (order Sepiida) are cephalopod molluscs — relatives of octopuses
            and squid — and among the most remarkable colour-changers in the animal
            kingdom. Using thousands of pigment cells and light-reflecting layers in the
            skin, a cuttlefish can transform its colour and even its texture in a
            fraction of a second, for camouflage, communication, and dazzling courtship
            displays. The reference shown here is the common cuttlefish
            (<em>Sepia officinalis</em>).
          </p>
          <p>
            They have eight arms and two longer feeding tentacles, distinctive W-shaped
            pupils, and an internal chambered shell — the cuttlebone — that they use for
            buoyancy.
          </p>
          <p>
            <strong>Note:</strong> there are many cuttlefish species; details vary, so
            treat general statements as approximate and verify against authoritative
            sources.
          </p>
        </>
      }
      habitat={
        <p>
          Cuttlefish live in coastal and shelf seas across much of the world (though not
          in the Americas&apos; waters for the true cuttlefish), over reefs, seagrass,
          sand, and mud. Many move into shallow water to breed and retreat deeper at
          other times of year.
        </p>
      }
      diet={
        <p>
          Cuttlefish are carnivores that hunt crustaceans, fish, and other small animals.
          They stalk prey with subtle colour displays, then shoot out two long feeding
          tentacles with astonishing speed to seize it, drawing it back to the beak. Some
          appear to use shifting skin patterns to mesmerise prey before striking.
        </p>
      }
      behavior={
        <p>
          Cuttlefish are highly intelligent, with large brains for an invertebrate and
          well-developed eyes, and they are studied for their learning and
          problem-solving. Their dynamic skin enables a rich visual &ldquo;language&rdquo;
          of patterns. Like other cephalopods they can jet away from danger and release
          ink, and they have short lives, typically breeding once before dying.
        </p>
      }
      humanInteraction={
        <p>
          Cuttlefish are fished and eaten in many regions, and their cuttlebone is a
          familiar dietary supplement for pet birds. They are also popular subjects for
          divers and researchers fascinated by their intelligence and colour control.
          For current status of particular species and fisheries, consult authoritative
          sources.
        </p>
      }
      faqs={[
        {
          question: "How do cuttlefish change colour so fast?",
          answer:
            "Their skin contains huge numbers of tiny pigment-filled cells (chromatophores) that muscles can expand or shrink in an instant, layered over light-reflecting cells. By controlling these together, a cuttlefish can shift colour and pattern almost instantly — and even change skin texture — for camouflage, communication, and courtship.",
        },
        {
          question: "Is a cuttlefish a fish?",
          answer:
            "No, despite the name. Cuttlefish are molluscs — specifically cephalopods, the same group as octopuses and squid. They are not fish at all; the \"-fish\" in the name is a historical quirk of common naming.",
        },
        {
          question: "What is a cuttlebone?",
          answer:
            "The cuttlebone is the cuttlefish's internal shell — a porous, chambered structure the animal fills with gas and fluid to control its buoyancy. Washed-up cuttlebones are often collected, and they are commonly given to pet birds as a calcium source.",
        },
        {
          question: "Are cuttlefish intelligent?",
          answer:
            "Yes. Cuttlefish have large, complex brains for invertebrates and are studied for learning, memory, and problem-solving. Their elaborate, fast-changing skin displays also point to sophisticated control and communication.",
        },
      ]}
      quickFacts={[
        { label: "Group", value: "Order Sepiida" },
        { label: "Reference species", value: "Sepia officinalis" },
        { label: "Class", value: "Cephalopoda (molluscs)" },
        { label: "Relatives", value: "Octopuses & squid" },
        { label: "Superpower", value: "Instant colour & texture change" },
        { label: "Buoyancy", value: "Internal cuttlebone" },
        { label: "Diet", value: "Carnivore (tentacle strike)" },
        { label: "Cognition", value: "Highly intelligent" },
      ]}
      relatedLinks={[
        { label: "Octopus Profile", href: "/animals/octopus", description: "A close cephalopod relative" },
        { label: "Squid Profile", href: "/animals/squid", description: "Another cephalopod" },
        { label: "Nautilus Profile", href: "/animals/nautilus", description: "A shelled cephalopod" },
        { label: "Nudibranch Profile", href: "/animals/nudibranch", description: "A colourful sea-slug mollusc" },
        { label: "Marine Animals", href: "/animal-encyclopedia/marine-animals" },
      ]}
    />
  );
}
