import type { Metadata } from "next";
import AnimalProfileLayout from "@/components/AnimalProfileLayout";
import { ANIMAL_SOURCES } from "@/lib/educational/animal-sources";
import { getAnimalGalleryImages, getAnimalImage, getAnimalOgImage } from "@/lib/images/animal-images";
import { buildArticleMetadata } from "@/lib/metadata";

const PATH = "/animals/amphiuma";
const TITLE = "Amphiuma — Profile, the Eel-Like Salamander with Tiny Useless Legs";
const DESC =
  "Explore amphiumas (genus Amphiuma): long, slick, aquatic salamanders of the US Southeast with four absurdly tiny legs — among the longest amphibians in North America, and a serious biter.";

export const metadata: Metadata = buildArticleMetadata({
  title: TITLE,
  description: DESC,
  path: PATH,
  publishedTime: "2026-06-22",
  modifiedTime: "2026-06-22",
  ogImage: getAnimalOgImage("amphiuma"),
});

export default function AmphiumaPage() {
  return (
    <AnimalProfileLayout
      commonName="Amphiuma"
      scientificName="genus Amphiuma"
      pageTitle={TITLE}
      description={DESC}
      path={PATH}
      parentCategory="Reptiles & Amphibians"
      parentCategoryHref="/animal-encyclopedia/reptiles"
      tags={["Amphibian", "Salamander", "Aquatic"]}
      image={getAnimalImage("amphiuma") ?? undefined}
      galleryImages={getAnimalGalleryImages("amphiuma")}
      sources={ANIMAL_SOURCES.amphiuma}
      publishedDate="2026-06-22"
      modifiedDate="2026-06-22"
      overview={
        <>
          <p>
            Amphiumas (genus <em>Amphiuma</em>) are long, eel-like, fully aquatic salamanders of the
            southeastern United States, and among the longest amphibians in North America — some reaching
            well over a metre. Slick, grey-to-brown, and snake-like in the water, an amphiuma has four legs,
            but they are so absurdly tiny and weak as to be almost useless for walking; species are even named
            for how many toes those little limbs bear (one-toed, two-toed, and three-toed amphiumas).
          </p>
          <p>
            Despite the misleading nicknames &ldquo;conger eel&rdquo; or &ldquo;ditch eel,&rdquo; amphiumas
            are amphibians, not fish. They are nocturnal predators of swamps and ditches, and a large one has
            powerful jaws and can deliver a genuinely painful bite if handled.
          </p>
          <p>
            <strong>Note:</strong> &ldquo;amphiuma&rdquo; covers a few species; details here use the
            two-toed amphiuma (Amphiuma means) as a reference. Treat general statements as approximate and
            verify against authoritative sources.
          </p>
        </>
      }
      habitat={
        <p>
          Amphiumas live in the wetlands of the southeastern United States — swamps, marshes, sluggish
          streams, ditches, ponds, and bayous, often in muddy, mucky, slow or still water with plenty of
          cover. They are highly aquatic, spending their lives in the water and burrows in the mud, and can
          survive dry spells by retreating into moist mud.
        </p>
      }
      diet={
        <p>
          Amphiumas are carnivores that hunt at night for a variety of prey — crayfish, worms, insects,
          small fish, frogs, snails, and other small animals — seizing them with strong jaws. They are
          ambush and active hunters in the water and mud, and their powerful bite reflects a diet that
          includes hard-shelled crayfish.
        </p>
      }
      behavior={
        <p>
          Amphiumas swim with eel-like undulations, their tiny legs playing essentially no role in
          locomotion, and they are mostly nocturnal, hiding by day in burrows, mud, and dense vegetation.
          They retain gill slits but breathe largely by gulping air at the surface (with lungs) as adults,
          having lost the external gills of their larval stage. In dry conditions they can burrow into the
          mud and survive within a moist cocoon until water returns. Females lay eggs in moist burrows or
          under cover, often guarding them. Because of their size and strength, amphiumas can inflict a sharp,
          painful bite, so they should be handled only with care, if at all.
        </p>
      }
      humanInteraction={
        <p>
          Amphiumas are little known to the public and are sometimes caught by anglers (who may mistake them
          for eels), but they are harmless to people if left alone — a large one can bite hard if grabbed, so
          they are best not handled. They depend on healthy wetlands and can be affected by drainage,
          pollution, and habitat loss, though several remain reasonably common within their range. Consult
          AmphibiaWeb and the IUCN Red List for species-specific status.
        </p>
      }
      faqs={[
        {
          question: "Is an amphiuma an eel?",
          answer:
            "No — despite nicknames like 'conger eel' or 'ditch eel,' an amphiuma is an amphibian: a long, eel-like, fully aquatic salamander, not a fish. Its slick, elongated body and snake-like swimming cause the confusion, but it has four (tiny) legs and the biology of a salamander, not the fins and gills of a true eel.",
        },
        {
          question: "Why does the amphiuma have such tiny legs?",
          answer:
            "Its four legs are greatly reduced — so small and weak they're essentially useless for walking — because the amphiuma has adapted to a fully aquatic, eel-like life, swimming by undulating its body. The legs are vestigial reminders of its salamander ancestry, and species are even named by the number of toes on these little limbs (one-, two-, and three-toed amphiumas).",
        },
        {
          question: "Can an amphiuma bite?",
          answer:
            "Yes — a large amphiuma has strong jaws and can deliver a genuinely painful bite if grabbed or handled, which is why it should be treated with care. It uses that powerful bite to catch and crush prey like crayfish. It isn't aggressive toward people and poses no threat if left alone, but it's not an animal to handle casually.",
        },
        {
          question: "How does an amphiuma survive when its swamp dries up?",
          answer:
            "It burrows into the mud. When water levels drop, an amphiuma can dig into moist mud and wait out the dry period within a damp burrow or cocoon, becoming inactive until water returns. This lets it persist in wetlands that periodically dry out, such as ditches and seasonal swamps.",
        },
      ]}
      quickFacts={[
        { label: "Group", value: "Genus Amphiuma (amphiumas)" },
        { label: "Reference species", value: "Amphiuma means (two-toed amphiuma)" },
        { label: "Class", value: "Amphibia (aquatic salamander)" },
        { label: "NOT a", value: "Fish or eel (despite 'ditch eel' nickname)" },
        { label: "Legs", value: "Four, but tiny and near-useless" },
        { label: "Size", value: "Among the longest N. American amphibians (>1 m)" },
        { label: "Diet", value: "Carnivore (crayfish, worms, fish, frogs)" },
        { label: "Note", value: "Strong jaws; can bite hard if handled" },
      ]}
      relatedLinks={[
        { label: "Siren Profile", href: "/animals/siren", description: "Another eel-like aquatic salamander" },
        { label: "Hellbender Profile", href: "/animals/hellbender", description: "A giant aquatic salamander" },
        { label: "Mudpuppy Profile", href: "/animals/mudpuppy", description: "Another aquatic salamander" },
        { label: "Fauna by Continent", href: "/fauna/continents", description: "North American wetland fauna in context" },
        { label: "Reptiles & Amphibians", href: "/animal-encyclopedia/reptiles" },
      ]}
    />
  );
}
