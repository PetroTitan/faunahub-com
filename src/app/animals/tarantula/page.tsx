import type { Metadata } from "next";
import AnimalProfileLayout from "@/components/AnimalProfileLayout";
import { ANIMAL_SOURCES } from "@/lib/educational/animal-sources";
import { getAnimalGalleryImages, getAnimalImage, getAnimalOgImage } from "@/lib/images/animal-images";
import { buildArticleMetadata } from "@/lib/metadata";

const PATH = "/animals/tarantula";
const TITLE = "Tarantula — Profile, Size, Diet & Behavior";
const DESC =
  "Explore tarantulas (family Theraphosidae): large, hairy spiders that are mostly calm and only mildly venomous to people, with surprising defences like flicking irritating hairs.";

export const metadata: Metadata = buildArticleMetadata({
  title: TITLE,
  description: DESC,
  path: PATH,
  publishedTime: "2026-06-19",
  modifiedTime: "2026-06-19",
  ogImage: getAnimalOgImage("tarantula"),
});

export default function TarantulaPage() {
  return (
    <AnimalProfileLayout
      commonName="Tarantula"
      scientificName="family Theraphosidae"
      pageTitle={TITLE}
      description={DESC}
      path={PATH}
      parentCategory="Insects & Invertebrates"
      parentCategoryHref="/animal-encyclopedia/insects"
      tags={["Invertebrate", "Arachnid", "Spider"]}
      image={getAnimalImage("tarantula") ?? undefined}
      galleryImages={getAnimalGalleryImages("tarantula")}
      sources={ANIMAL_SOURCES.tarantula}
      publishedDate="2026-06-19"
      modifiedDate="2026-06-19"
      overview={
        <>
          <p>
            Tarantulas (family Theraphosidae) are large, hairy spiders found across much
            of the world&apos;s warmer regions. There are hundreds of species, ranging
            from modest-sized to some of the biggest spiders on Earth. The reference
            shown here is the Chilean rose tarantula (<em>Grammostola rosea</em>), a
            popular, docile species.
          </p>
          <p>
            Despite their fearsome reputation, most tarantulas are slow-moving and
            reluctant to bite, and the venom of the great majority is, for healthy
            adults, comparable to a bee or wasp sting. This is an educational profile and
            does not provide medical or first-aid advice; wild tarantulas should not be
            handled.
          </p>
          <p>
            <strong>Note:</strong> tarantula species vary in temperament and defences,
            so general statements should be checked against species-specific sources.
          </p>
        </>
      }
      habitat={
        <p>
          Tarantulas live in warm climates across the Americas, Africa, Asia, Australia,
          and parts of southern Europe, in habitats from rainforest and savanna to
          desert and scrub. Many are burrowers that line a hole with silk; others live
          on the ground under cover, and some are tree-dwelling.
        </p>
      }
      diet={
        <p>
          Tarantulas are carnivores that ambush prey, mainly insects and other
          invertebrates, with larger species occasionally taking small vertebrates. They
          do not build webs to catch prey; instead they pounce and use their fangs and
          venom to subdue it, then liquefy the meal externally before consuming it.
        </p>
      }
      behavior={
        <p>
          Tarantulas are generally solitary and most active at night. Many New World
          tarantulas have a notable defence: they flick clouds of tiny barbed
          (urticating) hairs from the abdomen, which irritate a would-be attacker, often
          preferring this to biting. Tarantulas moult to grow — even regenerating lost
          legs over successive moults — and females of some species are remarkably
          long-lived.
        </p>
      }
      humanInteraction={
        <p>
          Tarantulas are widely kept as pets and are important predators of insects in
          the wild. Some species face pressure from habitat loss and collection for the
          pet trade. They are best appreciated without handling wild individuals; for any
          bite or reaction, follow professional and local medical guidance rather than
          this page. Consult authoritative sources for species status.
        </p>
      }
      faqs={[
        {
          question: "Are tarantulas dangerous to humans?",
          answer:
            "For most people, not very. The great majority of tarantulas are reluctant to bite, and their venom is generally comparable to a bee or wasp sting for a healthy adult, though individual reactions vary. Many New World species defend themselves mainly by flicking irritating hairs rather than biting. This page is educational only and does not give medical advice.",
        },
        {
          question: "Do tarantulas spin webs to catch prey?",
          answer:
            "Not to trap prey. Tarantulas are ambush hunters that pounce on prey rather than building capture webs. They do use silk in other ways — lining burrows, making egg sacs, and laying down trip-lines or retreats.",
        },
        {
          question: "What are urticating hairs?",
          answer:
            "Many tarantulas from the Americas have specialised barbed hairs on the abdomen called urticating hairs. When threatened, the spider can flick these into the air toward an attacker; they irritate skin, eyes, and airways, giving the tarantula a defence that doesn't require biting.",
        },
        {
          question: "How long do tarantulas live?",
          answer:
            "It varies by species and sex. Females of some species are notably long-lived — living many years, in some cases well over a decade — while males typically live much shorter lives after maturing. Tarantulas grow by moulting and can regenerate lost limbs over time.",
        },
      ]}
      quickFacts={[
        { label: "Group", value: "Family Theraphosidae" },
        { label: "Reference species", value: "Grammostola rosea (Chilean rose)" },
        { label: "Class", value: "Arachnida" },
        { label: "Diet", value: "Carnivore (ambush hunter)" },
        { label: "Venom", value: "Mild for most; no medical advice here" },
        { label: "Key defence", value: "Flicking urticating hairs (New World)" },
        { label: "Activity", value: "Mostly nocturnal; solitary" },
        { label: "Range", value: "Warm regions worldwide" },
      ]}
      relatedLinks={[
        { label: "Spider Profile", href: "/animals/spider", description: "Spiders as a whole" },
        { label: "Scorpion Profile", href: "/animals/scorpion", description: "Another arachnid" },
        { label: "Centipede Profile", href: "/animals/centipede", description: "A many-legged predator (not an arachnid)" },
        { label: "Animal Taxonomy — Invertebrates", href: "/animal-taxonomy/invertebrates", description: "How invertebrates are grouped" },
        { label: "Insects & Invertebrates", href: "/animal-encyclopedia/insects" },
      ]}
    />
  );
}
