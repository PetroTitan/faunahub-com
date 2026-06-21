import type { Metadata } from "next";
import AnimalProfileLayout from "@/components/AnimalProfileLayout";
import { ANIMAL_SOURCES } from "@/lib/educational/animal-sources";
import { getAnimalGalleryImages, getAnimalImage, getAnimalOgImage } from "@/lib/images/animal-images";
import { buildArticleMetadata } from "@/lib/metadata";

const PATH = "/animals/hermit-crab";
const TITLE = "Hermit Crab — Profile, Borrowed Shells, Diet & Behavior";
const DESC =
  "Explore hermit crabs (superfamily Paguroidea): soft-bellied crustaceans that protect themselves in empty snail shells and trade up as they grow — sometimes in an orderly housing chain.";

export const metadata: Metadata = buildArticleMetadata({
  title: TITLE,
  description: DESC,
  path: PATH,
  publishedTime: "2026-06-21",
  modifiedTime: "2026-06-21",
  ogImage: getAnimalOgImage("hermit-crab"),
});

export default function HermitCrabPage() {
  return (
    <AnimalProfileLayout
      commonName="Hermit Crab"
      scientificName="superfamily Paguroidea"
      pageTitle={TITLE}
      description={DESC}
      path={PATH}
      parentCategory="Marine Animals"
      parentCategoryHref="/animal-encyclopedia/marine-animals"
      tags={["Crustacean", "Coastal", "Shell-dweller"]}
      image={getAnimalImage("hermit-crab") ?? undefined}
      galleryImages={getAnimalGalleryImages("hermit-crab")}
      sources={ANIMAL_SOURCES["hermit-crab"]}
      publishedDate="2026-06-21"
      modifiedDate="2026-06-21"
      overview={
        <>
          <p>
            Hermit crabs (superfamily Paguroidea) are crustaceans with a clever solution to a
            vulnerable problem. Unlike true crabs, a hermit crab has a soft, twisted abdomen
            with no hard shell of its own, so to protect it the crab backs into an empty snail
            shell and carries it everywhere like portable armour. Its body is curved to fit the
            spiral of the shell, and it grips the inside with specially adapted rear limbs,
            ready to pull its whole body inside when threatened.
          </p>
          <p>
            As a hermit crab grows, it must find a larger empty shell and move house —
            sometimes leading to one of the most remarkable behaviours in the animal world: an
            orderly queue to swap shells.
          </p>
          <p>
            <strong>Note:</strong> there are many hermit crab species, both marine and land
            (land hermit crabs return to the sea to breed); details here cover them broadly.
            Treat general statements as approximate and verify against authoritative sources.
          </p>
        </>
      }
      habitat={
        <p>
          Hermit crabs live mainly in the sea — from tide pools and rocky shores to coral
          reefs and the deep ocean — while land hermit crabs inhabit tropical coasts, foraging
          on beaches and in coastal forest but returning to the sea to reproduce. They are
          found around the world wherever there are suitable empty shells to occupy.
        </p>
      }
      diet={
        <p>
          Hermit crabs are omnivores and scavengers, eating a very broad menu: algae, plant
          matter, small invertebrates, and especially dead and decaying material. By cleaning
          up carrion and detritus on the seabed and shore, they act as useful recyclers in
          their ecosystems, and their flexible appetite helps them thrive in many habitats.
        </p>
      }
      behavior={
        <p>
          A hermit crab&apos;s life revolves around its shell: it must keep finding bigger ones
          as it grows, and a well-fitting shell is so valuable that crabs will inspect and
          compete for them. Remarkably, when a new, larger shell appears, hermit crabs can form
          a &ldquo;vacancy chain&rdquo;: they line up by size, and as the biggest crab moves into
          the new shell, the next-biggest takes the one it left, and so on down the line, so a
          single new shell can rehouse a whole group. Many hermit crabs are also social, and
          some form partnerships with sea anemones that ride on their shells for mutual
          protection.
        </p>
      }
      humanInteraction={
        <p>
          Hermit crabs are familiar and engaging shore animals, often kept as pets (land hermit
          crabs in particular), though they have specific care needs and a supply of suitable
          shells is important for their welfare. Collecting too many empty shells from beaches
          can leave wild hermit crabs short of homes. Ecologically they are valuable scavengers.
          Consult authoritative sources for species-specific details.
        </p>
      }
      faqs={[
        {
          question: "Why do hermit crabs live in shells?",
          answer:
            "Because their own bodies are vulnerable. Unlike true crabs, a hermit crab has a soft, unprotected abdomen, so it shelters that delicate part inside an empty snail shell, carrying it around as portable armour and withdrawing fully inside when danger threatens. The shell is essential protection, not just a home.",
        },
        {
          question: "What happens when a hermit crab outgrows its shell?",
          answer:
            "It has to find a bigger empty shell and move in. This is a constant part of a hermit crab's life as it grows. Sometimes a new, larger shell triggers a 'vacancy chain': crabs line up by size, and when the biggest moves into the new shell, the next takes the one it vacated, and so on — rehousing several crabs from a single shell.",
        },
        {
          question: "Are hermit crabs true crabs?",
          answer:
            "Not exactly. Hermit crabs are crustaceans and decapods like true crabs, but they belong to a separate group and have a soft, asymmetrical abdomen rather than the hard, tucked-under shell of a true crab. That soft abdomen is precisely why they rely on borrowed snail shells for protection.",
        },
        {
          question: "What do hermit crabs eat?",
          answer:
            "Hermit crabs are omnivorous scavengers, eating algae, plant matter, small invertebrates, and especially dead and decaying material. By consuming carrion and detritus, they help clean and recycle nutrients on the seabed and shore, and their varied diet helps them live in many different habitats.",
        },
      ]}
      quickFacts={[
        { label: "Group", value: "Superfamily Paguroidea" },
        { label: "Type", value: "Crustacean (not a true crab)" },
        { label: "Signature trait", value: "Lives in borrowed snail shells" },
        { label: "Shell swaps", value: "Forms 'vacancy chains' to rehouse" },
        { label: "Diet", value: "Omnivore & scavenger" },
        { label: "Partners", value: "Some pair with sea anemones" },
        { label: "Habitat", value: "Seas & tropical coasts worldwide" },
        { label: "Note", value: "Needs a supply of suitable shells" },
      ]}
      relatedLinks={[
        { label: "Crab Profile", href: "/animals/crab", description: "True crabs (a different group)" },
        { label: "Sea Anemone Profile", href: "/animals/sea-anemone", description: "A frequent hermit crab partner" },
        { label: "Lobster Profile", href: "/animals/lobster", description: "Another decapod crustacean" },
        { label: "Ocean fauna by depth", href: "/fauna/ocean", description: "Coastal habitats in context" },
        { label: "Marine Animals", href: "/animal-encyclopedia/marine-animals" },
      ]}
    />
  );
}
