import type { Metadata } from "next";
import AnimalProfileLayout from "@/components/AnimalProfileLayout";
import { ANIMAL_SOURCES } from "@/lib/educational/animal-sources";
import { getAnimalGalleryImages, getAnimalImage, getAnimalOgImage } from "@/lib/images/animal-images";
import { buildArticleMetadata } from "@/lib/metadata";

const PATH = "/animals/slug";
const TITLE = "Slug — Profile, Biology, Diet & Garden Role";
const DESC =
  "Explore slugs: shell-less gastropod molluscs closely related to snails that glide on a muscular foot, recycle decaying matter, and play a real role in soil ecosystems.";

export const metadata: Metadata = buildArticleMetadata({
  title: TITLE,
  description: DESC,
  path: PATH,
  publishedTime: "2026-06-20",
  modifiedTime: "2026-06-20",
  ogImage: getAnimalOgImage("slug"),
});

export default function SlugPage() {
  return (
    <AnimalProfileLayout
      commonName="Slug"
      scientificName="class Gastropoda (shell-less)"
      pageTitle={TITLE}
      description={DESC}
      path={PATH}
      parentCategory="Insects & Invertebrates"
      parentCategoryHref="/animal-encyclopedia/insects"
      tags={["Invertebrate", "Mollusc", "Gastropod"]}
      image={getAnimalImage("slug") ?? undefined}
      galleryImages={getAnimalGalleryImages("slug")}
      sources={ANIMAL_SOURCES.slug}
      publishedDate="2026-06-20"
      modifiedDate="2026-06-20"
      overview={
        <>
          <p>
            Slugs are soft-bodied gastropod molluscs — essentially snails that have lost
            or greatly reduced the external shell. They glide on a single muscular foot,
            leave a mucus trail, and carry sensory tentacles on the head, with eyes at
            the tips in land species. The reference shown here is the leopard slug
            (<em>Limax maximus</em>), a large, mottled species.
          </p>
          <p>
            Losing the heavy shell lets slugs squeeze into tight, damp spaces that a
            shelled snail could not reach, though it leaves them more exposed to drying
            out and to predators.
          </p>
          <p>
            <strong>Note:</strong> &ldquo;slug&rdquo; covers many unrelated lineages that
            have independently lost their shells, so habits vary. Treat details as
            approximate and verify against authoritative sources.
          </p>
        </>
      }
      habitat={
        <p>
          Land slugs live in moist habitats — gardens, woodlands, leaf litter, and under
          stones and logs — and are most active at night or after rain, when humidity is
          high. There are also many sea slugs in the oceans. Land slugs avoid dry, hot
          conditions, sheltering in damp hiding places by day.
        </p>
      }
      diet={
        <p>
          Most land slugs are omnivores or detritivores, feeding on living and decaying
          plants, fungi, algae, and other organic matter, which makes them important
          recyclers in the soil. Some, such as the leopard slug, will also eat other
          slugs. Like snails, they feed using a rasping, toothed radula.
        </p>
      }
      behavior={
        <p>
          Slugs move slowly on a film of mucus and rely heavily on that mucus to stay
          moist, grip surfaces, and deter some predators. They are mostly nocturnal.
          Many are hermaphrodites with remarkable mating behaviour — leopard slugs are
          famous for mating while suspended together from a thread of mucus. In dry
          conditions slugs retreat to damp shelters to avoid water loss.
        </p>
      }
      humanInteraction={
        <p>
          Slugs are often seen as garden pests because some species damage seedlings and
          crops, but many are harmless recyclers of decaying matter and part of healthy
          soil ecosystems, and they are food for birds, hedgehogs, and other wildlife.
          Management is best done with their ecological role in mind. Consult
          authoritative sources for specifics.
        </p>
      }
      faqs={[
        {
          question: "Is a slug just a snail without a shell?",
          answer:
            "In broad terms, yes — slugs are gastropod molluscs closely related to snails that have lost or greatly reduced the external shell. Several different snail lineages have independently evolved a slug-like, shell-less form, so \"slug\" describes a body plan more than a single group.",
        },
        {
          question: "Are all slugs garden pests?",
          answer:
            "No. While some slugs do damage seedlings and crops, many feed mostly on decaying plant matter and fungi, helping recycle nutrients in the soil. Slugs are also important food for many animals, so they play a useful ecological role.",
        },
        {
          question: "Why are slugs so slimy?",
          answer:
            "The slime is mucus that lets slugs glide, grip surfaces, and — crucially — stay moist, since without a shell they are very prone to drying out. The mucus can also make a slug harder for predators to handle and helps it move across rough ground.",
        },
        {
          question: "What do slugs eat?",
          answer:
            "Most land slugs are omnivores or detritivores, eating living and decaying plants, fungi, and algae, and some also eat other slugs. They feed with a radula, a toothed ribbon that rasps food into the mouth.",
        },
      ]}
      quickFacts={[
        { label: "Group", value: "Class Gastropoda (shell-less)" },
        { label: "Reference species", value: "Limax maximus (leopard slug)" },
        { label: "Phylum", value: "Mollusca" },
        { label: "Relatives", value: "Snails" },
        { label: "Feeding", value: "Radula (toothed ribbon)" },
        { label: "Diet", value: "Mostly omnivore / detritivore" },
        { label: "Activity", value: "Mostly nocturnal; needs moisture" },
        { label: "Status", value: "Varies by species (verify)" },
      ]}
      relatedLinks={[
        { label: "Snail Profile", href: "/animals/snail", description: "A shelled relative" },
        { label: "Nudibranch Profile", href: "/animals/nudibranch", description: "A colourful sea slug" },
        { label: "Earthworm Profile", href: "/animals/earthworm", description: "Another soft-bodied soil recycler" },
        { label: "Animal Taxonomy — Invertebrates", href: "/animal-taxonomy/invertebrates", description: "How invertebrates are grouped" },
        { label: "Insects & Invertebrates", href: "/animal-encyclopedia/insects" },
      ]}
    />
  );
}
