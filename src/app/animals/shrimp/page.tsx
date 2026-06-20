import type { Metadata } from "next";
import AnimalProfileLayout from "@/components/AnimalProfileLayout";
import { ANIMAL_SOURCES } from "@/lib/educational/animal-sources";
import { getAnimalGalleryImages, getAnimalImage, getAnimalOgImage } from "@/lib/images/animal-images";
import { buildArticleMetadata } from "@/lib/metadata";

const PATH = "/animals/shrimp";
const TITLE = "Shrimp — Profile, Diversity, Diet & Behavior";
const DESC =
  "Explore shrimp: small, widespread decapod crustaceans of fresh and salt water, from reef cleaner shrimp to deep-sea species, with a key role in aquatic food webs.";

export const metadata: Metadata = buildArticleMetadata({
  title: TITLE,
  description: DESC,
  path: PATH,
  publishedTime: "2026-06-19",
  modifiedTime: "2026-06-19",
  ogImage: getAnimalOgImage("shrimp"),
});

export default function ShrimpPage() {
  return (
    <AnimalProfileLayout
      commonName="Shrimp"
      scientificName="decapod crustaceans"
      pageTitle={TITLE}
      description={DESC}
      path={PATH}
      parentCategory="Marine Animals"
      parentCategoryHref="/animal-encyclopedia/marine-animals"
      tags={["Marine invertebrate", "Crustacean", "Decapod"]}
      image={getAnimalImage("shrimp") ?? undefined}
      galleryImages={getAnimalGalleryImages("shrimp")}
      sources={ANIMAL_SOURCES.shrimp}
      publishedDate="2026-06-19"
      modifiedDate="2026-06-19"
      overview={
        <>
          <p>
            &ldquo;Shrimp&rdquo; is a common name for a large number of small, slender
            crustaceans found in oceans and fresh water around the world. They are
            decapods — the same broad group as crabs and lobsters — with a segmented
            body, a hard but flexible exoskeleton, long antennae, and many legs adapted
            for walking and swimming. The reference animal shown here is the Pacific
            cleaner shrimp (<em>Lysmata amboinensis</em>).
          </p>
          <p>
            Shrimp range from tiny, transparent species to colourful reef specialists,
            and they are a hugely important link in aquatic food webs as well as a major
            human food.
          </p>
          <p>
            <strong>Note:</strong> &ldquo;shrimp&rdquo; (and &ldquo;prawn&rdquo;) covers
            many different families, so general statements vary by species. Treat details
            as approximate and verify against authoritative sources.
          </p>
        </>
      }
      habitat={
        <p>
          Shrimp live almost everywhere there is water — coral reefs, rocky shores,
          estuaries, sandy and muddy seabeds, the open ocean, the deep sea, and rivers,
          lakes, and ponds. Different species are adapted to very different depths,
          temperatures, and salinities.
        </p>
      }
      diet={
        <p>
          Most shrimp are omnivores or scavengers, feeding on tiny plants and animals,
          detritus, and decaying matter, which makes them important recyclers. Some are
          specialists: cleaner shrimp, for example, set up &ldquo;cleaning stations&rdquo;
          and remove parasites and dead tissue from fish that visit them.
        </p>
      }
      behavior={
        <p>
          Shrimp swim with rapid flicks of their abdomen and tail fan, and walk on
          slender legs. Many are most active at night. Behaviours vary widely: some live
          alone, others in groups; some form partnerships, such as snapping shrimp that
          share burrows with gobies, or cleaner shrimp that advertise their services to
          fish. Like other crustaceans, shrimp must moult their exoskeleton to grow.
        </p>
      }
      humanInteraction={
        <p>
          Shrimp are one of the most important seafoods in the world, harvested from the
          wild and widely farmed. They are also popular in home aquariums. Wild shrimp
          populations and the habitats they depend on can be affected by overfishing,
          trawling, and pollution. Consult authoritative sources for specific species.
        </p>
      }
      faqs={[
        {
          question: "What is the difference between a shrimp and a prawn?",
          answer:
            "The words are used loosely and often interchangeably. In everyday use \"prawn\" sometimes means a larger shrimp, but the two names don't map neatly onto biology — true shrimp and true prawns differ in some technical body features, yet both are decapod crustaceans, and usage varies by region.",
        },
        {
          question: "What is a cleaner shrimp?",
          answer:
            "Cleaner shrimp are species that remove parasites, dead skin, and debris from fish. They set up \"cleaning stations\" on the reef and advertise with their bright colours and waving antennae; fish visit and allow the shrimp to clean them, even inside the mouth — a benefit to both.",
        },
        {
          question: "What do shrimp eat?",
          answer:
            "Most shrimp are omnivores and scavengers, eating algae, tiny animals, and decaying matter, which helps recycle nutrients. Some are specialists, such as cleaner shrimp that feed on parasites and dead tissue from fish.",
        },
        {
          question: "Are shrimp related to crabs and lobsters?",
          answer:
            "Yes. Shrimp are decapod crustaceans, the same broad group that includes crabs, lobsters, and crayfish. They share features like a hard exoskeleton, jointed legs, and a need to moult in order to grow.",
        },
      ]}
      quickFacts={[
        { label: "Group", value: "Decapod crustaceans" },
        { label: "Reference species", value: "Lysmata amboinensis (cleaner shrimp)" },
        { label: "Class", value: "Malacostraca" },
        { label: "Relatives", value: "Crabs, lobsters, crayfish" },
        { label: "Diet", value: "Mostly omnivore / scavenger" },
        { label: "Growth", value: "Moults its exoskeleton" },
        { label: "Habitat", value: "Marine & freshwater, worldwide" },
        { label: "Status", value: "Varies by species (verify)" },
      ]}
      relatedLinks={[
        { label: "Crab Profile", href: "/animals/crab", description: "A decapod relative" },
        { label: "Lobster Profile", href: "/animals/lobster", description: "Another large crustacean" },
        { label: "Barnacle Profile", href: "/animals/barnacle", description: "A very different crustacean" },
        { label: "Animal Taxonomy — Invertebrates", href: "/animal-taxonomy/invertebrates", description: "How invertebrates are grouped" },
        { label: "Marine Animals", href: "/animal-encyclopedia/marine-animals" },
      ]}
    />
  );
}
