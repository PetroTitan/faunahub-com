import type { Metadata } from "next";
import AnimalProfileLayout from "@/components/AnimalProfileLayout";
import { ANIMAL_SOURCES } from "@/lib/educational/animal-sources";
import { getAnimalGalleryImages, getAnimalImage, getAnimalOgImage } from "@/lib/images/animal-images";
import { buildArticleMetadata } from "@/lib/metadata";

const PATH = "/animals/horseshoe-crab";
const TITLE = "Horseshoe Crab — Profile, Ancient 'Living Fossil' & Blue Blood";
const DESC =
  "Explore horseshoe crabs (family Limulidae): ancient marine arthropods — not true crabs — that have barely changed in hundreds of millions of years, with blue blood vital to medicine.";

export const metadata: Metadata = buildArticleMetadata({
  title: TITLE,
  description: DESC,
  path: PATH,
  publishedTime: "2026-06-21",
  modifiedTime: "2026-06-21",
  ogImage: getAnimalOgImage("horseshoe-crab"),
});

export default function HorseshoeCrabPage() {
  return (
    <AnimalProfileLayout
      commonName="Horseshoe Crab"
      scientificName="Limulus polyphemus"
      pageTitle={TITLE}
      description={DESC}
      path={PATH}
      parentCategory="Marine Animals"
      parentCategoryHref="/animal-encyclopedia/marine-animals"
      tags={["Arthropod", "Living fossil", "Coastal"]}
      image={getAnimalImage("horseshoe-crab") ?? undefined}
      galleryImages={getAnimalGalleryImages("horseshoe-crab")}
      sources={ANIMAL_SOURCES["horseshoe-crab"]}
      publishedDate="2026-06-21"
      modifiedDate="2026-06-21"
      overview={
        <>
          <p>
            Horseshoe crabs (family Limulidae) are ancient marine arthropods that have changed
            remarkably little over hundreds of millions of years — true &ldquo;living
            fossils.&rdquo; Despite the name, they are not crabs at all; they are more closely
            related to spiders and scorpions. The Atlantic horseshoe crab
            (<em>Limulus polyphemus</em>), shown here, has a smooth, domed, horseshoe-shaped
            shell, several pairs of legs underneath, and a long, spike-like tail (the telson)
            used mainly for flipping itself upright, not as a weapon.
          </p>
          <p>
            Harmless and slow-moving, horseshoe crabs are best known for two things: spectacular
            mass spawnings on beaches, and their unusual blue blood, which has become hugely
            important to human medicine.
          </p>
          <p>
            <strong>Note:</strong> there are four horseshoe crab species; details here use the
            Atlantic horseshoe crab as a reference. Treat general statements as approximate and
            verify against authoritative sources.
          </p>
        </>
      }
      habitat={
        <p>
          The Atlantic horseshoe crab lives along the coasts of eastern North America, in
          shallow coastal waters, bays, and estuaries with soft, sandy or muddy bottoms, coming
          onto beaches to spawn. Three other species live in the coastal waters of South,
          Southeast, and East Asia. Horseshoe crabs depend on clean, undisturbed shorelines for
          breeding.
        </p>
      }
      diet={
        <p>
          Horseshoe crabs are bottom-feeders that plough through soft sediment for food, eating
          marine worms, small clams and other molluscs, crustaceans, and bits of dead matter.
          Lacking jaws, they crush prey between the bristly bases of their legs and pass it to
          the mouth as they move along the seabed.
        </p>
      }
      behavior={
        <p>
          Horseshoe crabs are famous for synchronised mass spawnings: on high spring tides,
          huge numbers come ashore together, the smaller males clasping the larger females as
          they lay eggs in the sand. These eggs are a vital food source for migrating shorebirds.
          Horseshoe crabs have several eyes (including compound eyes on the shell) and use the
          long tail to right themselves if waves flip them over. Their copper-based blood is
          blue, and it clots in the presence of bacterial toxins — a property humans now rely on.
        </p>
      }
      humanInteraction={
        <p>
          Horseshoe crab blood contains a substance used to test medicines, vaccines, and
          medical devices for dangerous bacterial contamination, making these animals quietly
          important to modern healthcare; many are caught, bled, and released, though this and
          their use as bait raise welfare and conservation concerns. Their eggs are crucial to
          shorebird migrations. Some populations have declined, and the Asian species in
          particular are of conservation concern. Consult authoritative sources for
          species-specific status.
        </p>
      }
      faqs={[
        {
          question: "Is a horseshoe crab a real crab?",
          answer:
            "No. Despite the name and crab-like shell, horseshoe crabs are not true crabs (which are crustaceans). They belong to their own ancient group of arthropods and are actually more closely related to spiders and scorpions. They are often called 'living fossils' because they've changed so little over vast spans of time.",
        },
        {
          question: "Why is horseshoe crab blood important?",
          answer:
            "Their blood is blue (it uses copper-based hemocyanin instead of iron-based hemoglobin) and contains cells that clot when they meet certain bacterial toxins. This property is used to test medicines, vaccines, and medical equipment for dangerous contamination, making horseshoe crabs quietly vital to modern medicine. Crabs are often bled and returned to the sea, though the practice raises welfare and conservation concerns.",
        },
        {
          question: "Is the horseshoe crab's tail dangerous?",
          answer:
            "No. The long, spike-like tail (telson) looks intimidating but is not a stinger or weapon. Horseshoe crabs use it mainly to flip themselves back over if a wave turns them upside down. They are harmless to people and have no bite or sting.",
        },
        {
          question: "Why are horseshoe crab eggs so important?",
          answer:
            "During mass spawnings, horseshoe crabs lay vast numbers of eggs in beach sand, and these are a critical food source for migrating shorebirds, which time their journeys to feast on them. So the health of horseshoe crab populations is closely tied to the survival of certain migratory birds.",
        },
      ]}
      quickFacts={[
        { label: "Reference species", value: "Limulus polyphemus (Atlantic horseshoe crab)" },
        { label: "Type", value: "Arthropod (not a true crab; kin to spiders)" },
        { label: "Nickname", value: "'Living fossil'" },
        { label: "Blood", value: "Blue; used to test medicines for contamination" },
        { label: "Tail (telson)", value: "For flipping upright (not a weapon)" },
        { label: "Diet", value: "Bottom-feeder (worms, molluscs, etc.)" },
        { label: "Eggs", value: "Vital food for migrating shorebirds" },
        { label: "Status", value: "Some declining; Asian species of concern" },
      ]}
      relatedLinks={[
        { label: "Crab Profile", href: "/animals/crab", description: "True crabs (a different group)" },
        { label: "Scorpion Profile", href: "/animals/scorpion", description: "A closer relative than crabs" },
        { label: "Nautilus Profile", href: "/animals/nautilus", description: "Another marine 'living fossil'" },
        { label: "Ocean fauna by depth", href: "/fauna/ocean", description: "Coastal habitats in context" },
        { label: "Marine Animals", href: "/animal-encyclopedia/marine-animals" },
      ]}
    />
  );
}
