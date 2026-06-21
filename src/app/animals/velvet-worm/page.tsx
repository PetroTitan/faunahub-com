import type { Metadata } from "next";
import AnimalProfileLayout from "@/components/AnimalProfileLayout";
import { ANIMAL_SOURCES } from "@/lib/educational/animal-sources";
import { getAnimalGalleryImages, getAnimalImage, getAnimalOgImage } from "@/lib/images/animal-images";
import { buildArticleMetadata } from "@/lib/metadata";

const PATH = "/animals/velvet-worm";
const TITLE = "Velvet Worm — Profile, the Slime-Shooting 'Living Fossil'";
const DESC =
  "Explore velvet worms (phylum Onychophora): ancient, soft-bodied land animals with stubby legs that hunt by firing jets of sticky slime to ensnare prey — a lineage half a billion years old.";

export const metadata: Metadata = buildArticleMetadata({
  title: TITLE,
  description: DESC,
  path: PATH,
  publishedTime: "2026-06-21",
  modifiedTime: "2026-06-21",
  ogImage: getAnimalOgImage("velvet-worm"),
});

export default function VelvetWormPage() {
  return (
    <AnimalProfileLayout
      commonName="Velvet Worm"
      scientificName="phylum Onychophora"
      pageTitle={TITLE}
      description={DESC}
      path={PATH}
      parentCategory="Insects & Invertebrates"
      parentCategoryHref="/animal-encyclopedia/insects"
      tags={["Invertebrate", "Living fossil", "Predator"]}
      image={getAnimalImage("velvet-worm") ?? undefined}
      galleryImages={getAnimalGalleryImages("velvet-worm")}
      sources={ANIMAL_SOURCES["velvet-worm"]}
      publishedDate="2026-06-21"
      modifiedDate="2026-06-21"
      overview={
        <>
          <p>
            Velvet worms (phylum Onychophora) are soft-bodied, caterpillar-like land animals
            with rows of stubby, clawed legs and a velvety, often beautifully patterned skin.
            They are not true worms, nor insects — they belong to their own ancient phylum,
            closely related to the arthropods (insects, spiders, and crustaceans). Velvet
            worms are sometimes called &ldquo;living fossils&rdquo; because their body plan has
            changed remarkably little over an immense span of time, with relatives stretching
            back roughly half a billion years.
          </p>
          <p>
            For such small, slow, gentle-looking creatures, they are formidable predators —
            thanks to an extraordinary weapon: they hunt by shooting jets of sticky slime to
            trap their prey.
          </p>
          <p>
            <strong>Note:</strong> there are many velvet worm species; details here cover them
            broadly. Treat general statements as approximate and verify against authoritative
            sources.
          </p>
        </>
      }
      habitat={
        <p>
          Velvet worms live in moist habitats in tropical and temperate regions of the
          Southern Hemisphere and the tropics — in rainforests and damp forests, hidden in
          leaf litter, rotting logs, soil, and crevices. Because they lose water easily
          through their skin, they need humid, sheltered places and are mostly active at
          night or after rain.
        </p>
      }
      diet={
        <p>
          Velvet worms are carnivores that hunt small invertebrates such as insects, spiders,
          woodlice, and worms. Their signature method is to squirt two jets of sticky slime
          from glands on either side of the head, entangling and immobilising the prey in a
          gluey net. The velvet worm then bites into the trapped victim, injects saliva to
          begin digestion, and feeds — even recycling some of its own slime by eating it.
        </p>
      }
      behavior={
        <p>
          Velvet worms creep slowly on their soft, fluid-filled legs, feeling their way with a
          pair of antennae, and approach prey stealthily before unleashing their slime from
          close range. The slime is fired as fast-oscillating jets that can reach a small
          distance and quickly turn into a sticky tangle. Some velvet worms are surprisingly
          social, living in groups and even hunting cooperatively in a few species, with a
          dominance hierarchy. Many give birth to live young, and some nourish their developing
          offspring inside the body — advanced traits for such an ancient lineage.
        </p>
      }
      humanInteraction={
        <p>
          Velvet worms are harmless to people and rarely seen because of their secretive,
          moisture-loving habits, but they are of great interest to scientists for what they
          reveal about the evolution of arthropods and early animal life, and for their
          remarkable slime. They depend on damp, undisturbed habitats, so forest loss and
          drying threaten some species. Consult authoritative sources for details.
        </p>
      }
      faqs={[
        {
          question: "Is a velvet worm a worm or an insect?",
          answer:
            "Neither. Despite the name and worm-like look, velvet worms belong to their own ancient phylum, Onychophora, which is closely related to the arthropods (insects, spiders, crustaceans). They sit near the base of that broad group and have kept a very old body plan, which is why they're called 'living fossils.'",
        },
        {
          question: "How do velvet worms catch prey?",
          answer:
            "By shooting slime. A velvet worm fires two jets of sticky fluid from glands beside its head, oscillating them rapidly to spray a gluey net over small prey like insects and spiders. Once the victim is entangled and stuck, the velvet worm bites in, injects digestive saliva, and feeds — and it often eats some of the spent slime to recoup the resources.",
        },
        {
          question: "Why are velvet worms called 'living fossils'?",
          answer:
            "Because their body plan has changed so little over an enormous span of time. Velvet worms belong to an ancient lineage with relatives going back roughly half a billion years, and modern species still resemble those very old forms. Studying them helps scientists understand the early evolution of arthropods and related animals.",
        },
        {
          question: "Are velvet worms dangerous to humans?",
          answer:
            "No — velvet worms are completely harmless to people. They are small, slow, secretive animals that prey only on tiny invertebrates using their slime. They have no interest in, or ability to harm, humans, and most people never encounter one because they hide in damp leaf litter and logs.",
        },
      ]}
      quickFacts={[
        { label: "Group", value: "Phylum Onychophora (its own phylum)" },
        { label: "Relatives", value: "Arthropods (insects, spiders, crustaceans)" },
        { label: "Nickname", value: "'Living fossil'" },
        { label: "Signature weapon", value: "Jets of sticky slime to trap prey" },
        { label: "Diet", value: "Carnivore (small invertebrates)" },
        { label: "Traits", value: "Stubby clawed legs; velvety skin; some social" },
        { label: "Habitat", value: "Moist forests, leaf litter & logs" },
        { label: "To humans", value: "Harmless" },
      ]}
      relatedLinks={[
        { label: "Tardigrade Profile", href: "/animals/tardigrade", description: "Another tiny, ancient invertebrate" },
        { label: "Centipede Profile", href: "/animals/centipede", description: "A many-legged arthropod predator" },
        { label: "Earthworm Profile", href: "/animals/earthworm", description: "A true worm (unrelated)" },
        { label: "Insects & Invertebrates", href: "/animal-encyclopedia/insects" },
        { label: "Invertebrates overview", href: "/animal-taxonomy/invertebrates", description: "Invertebrate taxonomy groups" },
      ]}
    />
  );
}
