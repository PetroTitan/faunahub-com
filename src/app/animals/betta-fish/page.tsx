import type { Metadata } from "next";
import AnimalProfileLayout from "@/components/AnimalProfileLayout";
import { ANIMAL_SOURCES } from "@/lib/educational/animal-sources";
import {
  getAnimalGalleryImages,
  getAnimalImage,
  getAnimalOgImage,
} from "@/lib/images/animal-images";
import { buildArticleMetadata } from "@/lib/metadata";

const PUBLISHED = "2026-06-12";
const MODIFIED = "2026-06-12";

const title = "Betta Fish — Profile, Habitat, Diet & Behavior";
const description =
  "The betta or Siamese fighting fish (Betta splendens): an educational profile of this labyrinth fish — appearance, native habitat, behaviour, and responsible aquarium context.";

export const metadata: Metadata = buildArticleMetadata({
  title,
  description,
  path: "/animals/betta-fish",
  publishedTime: PUBLISHED,
  modifiedTime: MODIFIED,
  ogImage: getAnimalOgImage("betta-fish"),
});

export default function BettaFishPage() {
  return (
    <AnimalProfileLayout
      commonName="Betta Fish"
      scientificName="Betta splendens"
      pageTitle={title}
      description={description}
      path="/animals/betta-fish"
      parentCategory="Fish"
      parentCategoryHref="/animal-encyclopedia/fish"
      tags={["Fish", "Freshwater", "Aquarium"]}
      image={getAnimalImage("betta-fish") ?? undefined}
      galleryImages={getAnimalGalleryImages("betta-fish")}
      factsHeaderNote="The betta is a popular aquarium fish, but it is a living animal with real needs — heated, filtered, appropriately sized water — not a low-effort bowl decoration. This page is educational, not aquarium-care or veterinary advice."
      overview={
        <>
          <p>
            The betta, or Siamese fighting fish (<em>Betta splendens</em>), is a
            small freshwater fish native to Southeast Asia and one of the most
            popular aquarium fish in the world. Males are famous for their
            vivid colours and long, flowing fins. Bettas are
            &quot;labyrinth fish&quot;, able to breathe air at the surface
            using a special organ, which lets them survive in warm, low-oxygen
            waters in the wild.
          </p>
        </>
      }
      habitat={
        <>
          <p>
            In the wild, bettas live in the warm, shallow, often slow-moving or
            still fresh waters of Southeast Asia, such as rice paddies,
            floodplains, and marshes. These habitats are warm and densely
            vegetated. The image of a betta thriving in a tiny unheated bowl is
            a myth: in captivity they need an appropriately sized, heated, and
            filtered aquarium, and requirements should be confirmed with
            qualified aquarium guidance.
          </p>
        </>
      }
      diet={
        <>
          <p>
            Bettas are carnivorous and, in the wild, feed largely on small
            invertebrates such as insect larvae and zooplankton. In aquariums
            they are fed prepared foods formulated for carnivorous fish. This
            page does not give feeding quantities; appropriate diet and amounts
            depend on the individual fish and should follow qualified aquarium
            advice.
          </p>
        </>
      }
      behavior={
        <>
          <p>
            Male bettas are highly territorial toward other males — the source
            of the name &quot;fighting fish&quot; — and two males should not be
            housed together. They will flare their gills and fins in display.
            Bettas can be interactive and are often described as having
            individual personalities. As surface-breathers, they regularly rise
            to gulp air. Behaviour and compatibility with other fish vary, so
            tank-mate decisions should be made cautiously.
          </p>
        </>
      }
      humanInteraction={
        <>
          <p>
            Bettas have been kept and selectively bred for centuries, producing
            the many colours and fin types seen today. They are aquarium
            animals, not wildlife to be released, and releasing aquarium fish
            into local waters can cause ecological harm. Responsible keeping
            means a properly heated, filtered, and sized aquarium, suitable
            water quality, and access to qualified help if a fish appears
            unwell. This profile is educational and is not a substitute for
            aquarium-care or veterinary guidance.
          </p>
        </>
      }
      extraSections={[
        {
          heading: "Appearance & Recognition",
          body: (
            <>
              <p>
                Bettas are small fish, but captive-bred males are unmistakable,
                with long, trailing fins and intense colours ranging from deep
                blues and reds to multicolour patterns. Females are generally
                smaller with shorter fins and less dramatic colour. Many fin
                types have been bred — such as veiltail, halfmoon, and crowntail
                — but all are the same species. The upturned mouth reflects
                their surface-feeding habits.
              </p>
            </>
          ),
        },
      ]}
      similarAnimals={
        <p>
          Bettas are part of the gourami family (Osphronemidae) and share the
          labyrinth-breathing adaptation with other gouramis. Among the
          aquarium fish covered on FaunaHub, the guppy is another popular small
          freshwater species, though it is a livebearer with very different
          care and temperament.
        </p>
      }
      comparisonCallouts={[
        { href: "/aquarium-care/betta-fish-care-basics", label: "Betta fish care basics" },
        { href: "/aquarium-care", label: "Aquarium care hub" },
      ]}
      faqs={[
        {
          question: "Can a betta live in a small bowl?",
          answer:
            "No. The idea that bettas thrive in tiny unheated bowls is a myth. Like other aquarium fish, bettas need an appropriately sized, heated, and filtered aquarium with good water quality. Specific tank size and setup should follow qualified aquarium guidance rather than marketing.",
        },
        {
          question: "Why are male bettas kept alone?",
          answer:
            "Male bettas are territorial and will fight other males, which is why two males are not housed together. Compatibility with other species and with females is situation-dependent and should be researched carefully before adding tank mates.",
        },
        {
          question: "How do bettas breathe air?",
          answer:
            "Bettas are labyrinth fish: they have an organ that lets them take oxygen from air gulped at the surface, in addition to using their gills. This adaptation suits the warm, low-oxygen waters of their native habitat, but it does not mean they can live without clean, well-maintained water.",
        },
      ]}
      quickFacts={[
        { label: "Scientific name", value: "Betta splendens" },
        { label: "Family", value: "Osphronemidae (gouramis)" },
        { label: "Type", value: "Freshwater fish (labyrinth fish)" },
        { label: "Native range", value: "Southeast Asia" },
        { label: "Diet", value: "Carnivore" },
        { label: "Notable trait", value: "Breathes air at the surface" },
        { label: "Context", value: "Popular aquarium fish — needs heated, filtered water" },
      ]}
      relatedLinks={[
        { label: "Guppy Profile", href: "/animals/guppy", description: "Another popular small aquarium fish" },
        { label: "Goldfish Profile", href: "/animals/goldfish" },
        { label: "Aquarium Care Hub", href: "/aquarium-care", description: "Responsible fishkeeping basics" },
        { label: "Fish Encyclopedia", href: "/animal-encyclopedia/fish" },
        { label: "Animal Encyclopedia", href: "/animal-encyclopedia" },
      ]}
      sources={ANIMAL_SOURCES["betta-fish"]}
      publishedDate={PUBLISHED}
      modifiedDate={MODIFIED}
    />
  );
}
