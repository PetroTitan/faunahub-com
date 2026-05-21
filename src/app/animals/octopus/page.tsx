import type { Metadata } from "next";
import AnimalProfileLayout from "@/components/AnimalProfileLayout";
import { ANIMAL_SOURCES } from "@/lib/educational/animal-sources";
import {
  getAnimalGalleryImages,
  getAnimalImage,
  getAnimalOgImage,
} from "@/lib/images/animal-images";
import { buildArticleMetadata } from "@/lib/metadata";

const PUBLISHED = "2026-05-21";
const MODIFIED = "2026-05-21";

const title = "Octopus — Overview of Octopus Biology, Habitat & Behavior";
const description =
  "Octopuses (order Octopoda): cephalopod molluscs with eight arms, complex behaviour and camouflage. Common octopus as a reference species and a cautious behavioural summary.";

export const metadata: Metadata = buildArticleMetadata({
  title,
  description,
  path: "/animals/octopus",
  publishedTime: PUBLISHED,
  modifiedTime: MODIFIED,
  ogImage: getAnimalOgImage("octopus"),
});

export default function OctopusPage() {
  return (
    <AnimalProfileLayout
      commonName="Octopus"
      pageTitle={title}
      description={description}
      path="/animals/octopus"
      parentCategory="Marine Animals"
      parentCategoryHref="/animal-encyclopedia/marine-animals"
      tags={["Mollusk", "Cephalopod", "Marine Invertebrate"]}
      image={getAnimalImage("octopus") ?? undefined}
      galleryImages={getAnimalGalleryImages("octopus")}
      factsHeaderNote='Reference species for specific details below is the common octopus (Octopus vulgaris). The order Octopoda includes about 300 species, many with very different ecologies.'
      overview={
        <>
          <p>
            Octopuses are cephalopod molluscs of the order Octopoda — soft-
            bodied marine animals with eight arms covered in suckers, a
            sharp beak, and a highly developed nervous system relative to
            other invertebrates. The common octopus (<em>Octopus vulgaris</em>)
            is one of the most widely distributed and commonly cited
            reference species.
          </p>
        </>
      }
      habitat={
        <>
          <p>
            Octopuses occupy a very wide range of marine habitats — from
            shallow rocky reefs and intertidal pools to the deep sea.
            Different species occupy specific habitat niches; the common
            octopus is typically found on coastal rocky bottoms in
            temperate and tropical waters.
          </p>
        </>
      }
      diet={
        <>
          <p>
            Octopuses are carnivorous predators. The common octopus feeds
            mainly on crustaceans, bivalves, and small fish, using its
            beak and salivary glands to subdue prey. Foraging behaviour is
            often nocturnal and may involve probing crevices with the arms.
          </p>
        </>
      }
      behavior={
        <>
          <p>
            Octopuses are known for sophisticated behaviour relative to
            other invertebrates. Documented abilities include rapid
            camouflage using chromatophores and skin texture, escape from
            laboratory enclosures, manipulation of objects, and — in some
            species — apparent use of coconut shells or other materials as
            shelter. The cephalopod nervous system is unusual in that
            substantial neural tissue is distributed throughout the arms.
          </p>
        </>
      }
      humanInteraction={
        <>
          <p>
            Octopuses are commercially fished in many regions and feature
            in food cultures around the world. Modern animal-welfare and
            scientific discussion increasingly takes into account
            cephalopod cognition; several jurisdictions now legally
            recognise octopuses as sentient for research-ethics purposes.
            FaunaHub does not provide guidance on keeping octopuses; their
            husbandry is highly specialised and is best left to public
            aquaria and qualified researchers.
          </p>
        </>
      }
      similarAnimals={
        <p>
          Other cephalopods include squid, cuttlefish, and the chambered
          nautilus. All share the basic cephalopod body plan with a
          prominent head, arms or tentacles, and a beak, but octopuses
          differ in lacking an internal shell or pen and in having only
          eight arms.
        </p>
      }
      faqs={[
        {
          question: "Why do octopuses change colour?",
          answer:
            "Octopuses use specialised skin cells — chromatophores, iridophores, and leucophores — to change colour and pattern rapidly. The behaviour is used for camouflage, communication during courtship or conflict, and apparent stress signalling. Notably, octopuses are believed to be largely colourblind, raising open scientific questions about how they match background colours.",
        },
        {
          question: "Are octopuses intelligent?",
          answer:
            "Octopuses show some of the most striking behavioural complexity documented in invertebrates: maze learning, tool-like use of materials, and rapid problem solving in captive studies. Whether 'intelligent' is the right framing is contested; authoritative summaries are available from sources such as Animal Diversity Web and Britannica.",
        },
        {
          question: "How long do octopuses live?",
          answer:
            "Most octopus species are surprisingly short-lived — often one to a few years — and typically die shortly after reproduction. Lifespan varies by species and is generally far shorter than many other large marine animals.",
        },
        {
          question: "Are octopuses dangerous?",
          answer:
            "Most octopus species are not dangerous to humans during ordinary encounters, but all octopuses are venomous to some extent — used to subdue prey — and the small blue-ringed octopuses of the Indo-Pacific carry tetrodotoxin and can be deadly. Treat any encounter with caution and follow local marine-safety guidance.",
        },
      ]}
      quickFacts={[
        { label: "Reference species", value: "Common octopus (Octopus vulgaris)" },
        { label: "Order", value: "Octopoda" },
        { label: "Class", value: "Cephalopoda" },
        { label: "Phylum", value: "Mollusca" },
        { label: "Diet", value: "Carnivore (crustaceans, molluscs, fish)" },
        { label: "Notable trait", value: "Rapid colour and texture change for camouflage" },
        { label: "Conservation status", value: "Varies by species (verify per species)" },
      ]}
      relatedLinks={[
        { label: "Shark Profile", href: "/animals/shark" },
        { label: "Dolphin Profile", href: "/animals/dolphin" },
        { label: "Whale Profile", href: "/animals/whale" },
        { label: "Marine Animals Hub", href: "/animal-encyclopedia/marine-animals" },
      ]}
      sources={ANIMAL_SOURCES.octopus}
      publishedDate={PUBLISHED}
      modifiedDate={MODIFIED}
    />
  );
}
