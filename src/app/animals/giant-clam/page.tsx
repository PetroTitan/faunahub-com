import type { Metadata } from "next";
import AnimalProfileLayout from "@/components/AnimalProfileLayout";
import { ANIMAL_SOURCES } from "@/lib/educational/animal-sources";
import { getAnimalGalleryImages, getAnimalImage, getAnimalOgImage } from "@/lib/images/animal-images";
import { buildArticleMetadata } from "@/lib/metadata";

const PATH = "/animals/giant-clam";
const TITLE = "Giant Clam (Tridacna): Largest Living Bivalve";
const DESC =
  "The giant clam (genus Tridacna) is the largest living bivalve. Learn how it grows on reefs, feeds via symbiotic algae, and why the man-eating myth is false.";

export const metadata: Metadata = buildArticleMetadata({
  title: TITLE,
  description: DESC,
  path: PATH,
  publishedTime: "2026-06-27",
  modifiedTime: "2026-06-27",
  ogImage: getAnimalOgImage("giant-clam"),
});

export default function GiantClamPage() {
  return (
    <AnimalProfileLayout
      commonName="Giant Clam"
      scientificName="genus Tridacna"
      pageTitle={TITLE}
      description={DESC}
      path={PATH}
      parentCategory="Marine Animals"
      parentCategoryHref="/animal-encyclopedia/marine-animals"
      tags={["Mollusk","Bivalve","Coral reef"]}
      image={getAnimalImage("giant-clam") ?? undefined}
      galleryImages={getAnimalGalleryImages("giant-clam")}
      sources={ANIMAL_SOURCES["giant-clam"]}
      publishedDate="2026-06-27"
      modifiedDate="2026-06-27"
      overview={
        <>
          <p>
            Giant clams belong to the genus <em>Tridacna</em> and are the largest living bivalve molluscs. The best-known species, <em>Tridacna gigas</em>, can grow over a metre across and become very heavy, making it one of the most recognisable animals on tropical coral reefs. Like other bivalves, a giant clam has a body enclosed by two hinged shell valves, but its size and brilliantly coloured fleshy mantle set it apart from most of its relatives.
          </p>
          <p>
            These clams live embedded among corals in warm, shallow Indo-Pacific waters, where their exposed mantle catches sunlight. Much of their nourishment comes from symbiotic algae called zooxanthellae that live in the mantle tissue and share the products of photosynthesis, while the clam also filter-feeds from the surrounding water. This partnership is similar to the one that powers reef-building corals.
          </p>
          <p>
            Details such as exact size, growth, range, and protected status vary by species and region and should be checked against authoritative sources such as the IUCN, NOAA, Smithsonian Ocean, and WoRMS. Several giant clam species are threatened and are protected under CITES, with overharvesting a documented pressure. This page is educational and does not provide medical, food-safety, harvesting, or treatment advice; for any related concerns, contact a qualified professional or local authority.
          </p>
          <h3>Taxonomy and animal group</h3>
          <p>
            Giant clams are bivalve molluscs, meaning they belong to the same broad animal group as other clams, mussels, oysters, and scallops, all of which have a body protected by two hinged shell valves. Within the bivalves they are placed in the genus <em>Tridacna</em>. Despite their unusual size and the colourful mantle that may suggest something coral-like, they are true clams that feed by filtering water, supplemented in their case by nutrients from algae living in their tissues.
          </p>
          <h3>Appearance and recognition</h3>
          <p>
            A giant clam has two heavy, often deeply fluted shell valves that meet along a wavy margin. When the clam is open, a thick, fleshy mantle is exposed between the valves, and in <em>Tridacna gigas</em> and its relatives this mantle is often vividly coloured in blues, greens, golds, and browns, sometimes with spotted or mottled patterns. The colour comes in part from the symbiotic algae held in the mantle and from pigments that help manage exposure to bright sunlight. <em>Tridacna gigas</em> in particular is notable for its great size and weight, ranking among the heaviest of all molluscs.
          </p>
        </>
      }
      habitat={
        <p>
          Giant clams live in warm, shallow waters of the Indo-Pacific region, typically embedded among coral reefs where sunlight reaches their mantle. Their dependence on light for their symbiotic algae ties them closely to clear, shallow reef environments. Specific distribution and depth ranges vary by species and region and are best confirmed against authoritative sources such as NOAA, IUCN, and WoRMS rather than assumed from a single example.
        </p>
      }
      diet={
        <p>
          Giant clams obtain food in two complementary ways. Much of their nourishment comes from symbiotic zooxanthellae living in the mantle, which photosynthesise in sunlight and pass nutrients to the clam, a relationship comparable to that of reef-building corals. In addition, the clam filter-feeds, drawing in seawater and capturing small particles and plankton. This combination lets giant clams thrive in the sunlit, nutrient-variable conditions of coral reefs, where they also contribute to reef structure and ecology.
        </p>
      }
      behavior={
        <p>
          Adult giant clams are sessile, remaining in one place once settled and orienting their mantle toward the light. They draw water through their body to breathe and filter-feed, and can partly close their valves in response to shadows or disturbance, though they cannot snap shut quickly. Giant clams are broadcast spawners, releasing eggs and sperm into the water, and their larvae drift before settling onto the reef. Life cycle details, including growth rate and longevity, vary by species and are documented in scientific sources.
        </p>
      }
      humanInteraction={
        <p>
          Giant clams have long captured human imagination, and old stories described &quot;man-eating clams&quot; that supposedly trapped divers. There is no reliable evidence that giant clams trap or kill people, and this myth is not supported; while a very large clam can close on an object placed between its valves, it does so slowly and does not hunt or ambush humans. Several giant clam species are threatened and are protected under CITES, with overharvesting documented as a pressure, so it is best to avoid handling or disturbing wild individuals. Giant clams are eaten by people in some regions, but rules around shellfish and the harvesting of protected species vary by location and authority. This page is educational and does not provide medical, food-safety, harvesting, or treatment advice; for any food-safety, allergy, or related concerns, contact a qualified medical professional or local health authority.
        </p>
      }
      faqs={[
        {
          question: "Are giant clams really man-eating?",
          answer:
            "No. There is no reliable evidence that giant clams trap or kill people, and the \"man-eating clam\" legend is not supported. A very large clam can close on an object placed between its valves, but it moves slowly and cannot snap shut quickly, and it does not hunt humans.",
        },
        {
          question: "What is the largest living bivalve?",
          answer:
            "Giant clams of the genus Tridacna are the largest living bivalve molluscs. The giant clam Tridacna gigas can grow over a metre across and become very heavy, making it one of the most recognisable animals on Indo-Pacific coral reefs.",
        },
        {
          question: "How do giant clams get their food?",
          answer:
            "Giant clams rely heavily on symbiotic algae called zooxanthellae that live in their mantle and share nutrients produced by photosynthesis, much like reef-building corals. They also filter-feed, drawing in seawater to capture small particles and plankton.",
        },
        {
          question: "Are giant clams protected?",
          answer:
            "Several giant clam species are threatened and are protected under CITES, with overharvesting documented as a pressure. Exact status varies by species and region and should be checked against authoritative sources such as the IUCN. For harvesting or regulatory questions, contact local authorities.",
        },
      ]}
      quickFacts={[
        { label: "Group", value: "Bivalve molluscs (giant clams)" },
        { label: "Higher classification", value: "Genus Tridacna, including Tridacna gigas" },
        { label: "Diet", value: "Nutrients from symbiotic algae (zooxanthellae) plus filter-feeding" },
        { label: "Notable trait", value: "Largest living bivalves; large, colourful exposed mantle" },
        { label: "Habitat", value: "Warm, shallow coral reefs, embedded among corals" },
        { label: "Distribution", value: "Indo-Pacific region" },
        { label: "Human interaction", value: "Best left undisturbed; \"man-eating clam\" myth is unsupported" },
        { label: "Conservation status", value: "Several species threatened and CITES-protected; varies by species" },
      ]}
      relatedLinks={[
        { label: "Clam Profile", href: "/animals/clam", description: "A burrowing bivalve mollusc" },
        { label: "Scallop Profile", href: "/animals/scallop", description: "A swimming bivalve" },
        { label: "Oyster Profile", href: "/animals/oyster", description: "A reef-building bivalve" },
        { label: "Mussel Profile", href: "/animals/mussel", description: "An attached bivalve" },
        { label: "Marine Animals", href: "/animal-encyclopedia/marine-animals" },
      ]}
    />
  );
}
