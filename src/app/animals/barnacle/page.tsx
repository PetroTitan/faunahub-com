import type { Metadata } from "next";
import AnimalProfileLayout from "@/components/AnimalProfileLayout";
import { ANIMAL_SOURCES } from "@/lib/educational/animal-sources";
import { getAnimalGalleryImages, getAnimalImage, getAnimalOgImage } from "@/lib/images/animal-images";
import { buildArticleMetadata } from "@/lib/metadata";

const PATH = "/animals/barnacle";
const TITLE = "Barnacle — Profile, Biology & Why It's a Crustacean";
const DESC =
  "Explore barnacles (e.g. Semibalanus): sessile crustaceans that cement themselves head-down to rocks and shells and filter-feed with feathery legs from inside a shell.";

export const metadata: Metadata = buildArticleMetadata({
  title: TITLE,
  description: DESC,
  path: PATH,
  publishedTime: "2026-06-19",
  modifiedTime: "2026-06-19",
  ogImage: getAnimalOgImage("barnacle"),
});

export default function BarnaclePage() {
  return (
    <AnimalProfileLayout
      commonName="Barnacle"
      scientificName="infraclass Cirripedia"
      pageTitle={TITLE}
      description={DESC}
      path={PATH}
      parentCategory="Marine Animals"
      parentCategoryHref="/animal-encyclopedia/marine-animals"
      tags={["Marine invertebrate", "Crustacean", "Filter feeder"]}
      image={getAnimalImage("barnacle") ?? undefined}
      galleryImages={getAnimalGalleryImages("barnacle")}
      sources={ANIMAL_SOURCES.barnacle}
      publishedDate="2026-06-19"
      modifiedDate="2026-06-19"
      overview={
        <>
          <p>
            Barnacles are marine animals that look like little volcano-shaped shells
            cemented to rocks, shells, piers, and even whales — but they are not molluscs.
            Barnacles are crustaceans, relatives of crabs, shrimp, and lobsters, and one
            of the few crustacean groups that live permanently fixed in one place. The
            reference shown here is the northern acorn barnacle
            (<em>Semibalanus balanoides</em>).
          </p>
          <p>
            An adult barnacle lives head-down inside its protective plates and reaches
            out with feathery legs to comb food from the water — a surprising lifestyle
            for an animal in the same broad group as fast-moving shrimp.
          </p>
          <p>
            <strong>Note:</strong> there are many barnacle types (acorn barnacles, goose
            barnacles, and others), so details vary by group. Treat general statements
            accordingly and verify against authoritative sources.
          </p>
        </>
      }
      habitat={
        <p>
          Barnacles live in seas worldwide, most familiarly packed across rocks in the
          intertidal zone, where they endure pounding waves and being exposed to air at
          low tide. Others attach to floating objects, ship hulls, drifting debris, and
          the bodies of animals such as whales and sea turtles.
        </p>
      }
      diet={
        <p>
          Barnacles are filter feeders. When covered by water, an acorn barnacle opens
          the plates at the top of its shell and sweeps out feathery, leg-like
          appendages called cirri to rake plankton and fine particles from the water,
          then withdraws them to pass food to the mouth.
        </p>
      }
      behavior={
        <p>
          A barnacle begins life as a tiny swimming larva, drifting in the plankton.
          When ready, it settles head-first onto a surface and cements itself in place
          for life, then builds its hard shell. Because adults cannot move to find
          mates, many barnacles have unusually long reproductive structures to reach
          neighbours, and most are hermaphrodites.
        </p>
      }
      humanInteraction={
        <p>
          Barnacles are a classic subject in marine biology and a major form of
          &ldquo;biofouling&rdquo; — their build-up on ship hulls increases drag and
          maintenance costs, which has driven a lot of research into how they stick so
          firmly. Some goose barnacles are also harvested as food in certain regions.
          Consult authoritative sources for specifics.
        </p>
      }
      faqs={[
        {
          question: "Is a barnacle a shellfish like a clam?",
          answer:
            "No. Although a barnacle looks like a little shell, it is a crustacean — related to crabs, shrimp, and lobsters — not a mollusc like a clam. Its larval stages and feeding legs (cirri) give away its crustacean identity.",
        },
        {
          question: "How do barnacles eat without moving?",
          answer:
            "Adult barnacles are filter feeders. When underwater, they open the top of their shell and extend feathery, leg-like cirri that sweep plankton and particles from the water, then pull them back in to feed. They never need to leave their spot.",
        },
        {
          question: "How do barnacles attach so firmly?",
          answer:
            "A barnacle larva settles head-down and cements itself permanently to a surface using a strong natural glue, then grows its hard plates around itself. This adhesive is remarkably tough, which is one reason barnacles are studied and why they are hard to remove from ships.",
        },
        {
          question: "Do barnacles live on whales?",
          answer:
            "Some do. Certain barnacles specialise in attaching to whales, sea turtles, and other animals, hitching a ride and filter-feeding as their host swims. They don't feed on the host — they simply use it as a moving home.",
        },
      ]}
      quickFacts={[
        { label: "Group", value: "Cirripedia (barnacles)" },
        { label: "Reference species", value: "Semibalanus balanoides" },
        { label: "Class", value: "Crustacea" },
        { label: "Surprise", value: "A crustacean, not a mollusc" },
        { label: "Diet", value: "Filter feeder (uses cirri)" },
        { label: "Lifestyle", value: "Sessile (cemented in place)" },
        { label: "Habitat", value: "Seas worldwide; intertidal rocks" },
        { label: "Status", value: "Varies by species (verify)" },
      ]}
      relatedLinks={[
        { label: "Crab Profile", href: "/animals/crab", description: "A free-moving crustacean relative" },
        { label: "Shrimp Profile", href: "/animals/shrimp", description: "Another crustacean" },
        { label: "Whale Profile", href: "/animals/whale", description: "Host to some barnacle species" },
        { label: "Animal Taxonomy — Invertebrates", href: "/animal-taxonomy/invertebrates", description: "How invertebrates are grouped" },
        { label: "Marine Animals", href: "/animal-encyclopedia/marine-animals" },
      ]}
    />
  );
}
