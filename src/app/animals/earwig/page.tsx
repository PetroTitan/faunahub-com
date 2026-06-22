import type { Metadata } from "next";
import AnimalProfileLayout from "@/components/AnimalProfileLayout";
import { ANIMAL_SOURCES } from "@/lib/educational/animal-sources";
import { getAnimalGalleryImages, getAnimalImage, getAnimalOgImage } from "@/lib/images/animal-images";
import { buildArticleMetadata } from "@/lib/metadata";

const PATH = "/animals/earwig";
const TITLE = "Earwig — Profile, the Pincer-Tailed Insect (and the Myth About Ears)";
const DESC =
  "Explore earwigs (order Dermaptera): nocturnal insects with rear pincers and a soft side — devoted mothers that guard their eggs — and the truth about the old myth that they crawl into ears.";

export const metadata: Metadata = buildArticleMetadata({
  title: TITLE,
  description: DESC,
  path: PATH,
  publishedTime: "2026-06-22",
  modifiedTime: "2026-06-22",
  ogImage: getAnimalOgImage("earwig"),
});

export default function EarwigPage() {
  return (
    <AnimalProfileLayout
      commonName="Earwig"
      scientificName="order Dermaptera"
      pageTitle={TITLE}
      description={DESC}
      path={PATH}
      parentCategory="Insects & Invertebrates"
      parentCategoryHref="/animal-encyclopedia/insects"
      tags={["Insect", "Nocturnal", "Garden"]}
      image={getAnimalImage("earwig") ?? undefined}
      galleryImages={getAnimalGalleryImages("earwig")}
      sources={ANIMAL_SOURCES.earwig}
      publishedDate="2026-06-22"
      modifiedDate="2026-06-22"
      overview={
        <>
          <p>
            Earwigs (order Dermaptera) are slender, flattened, brownish insects instantly known by the pair
            of curved pincers (forceps, called cerci) at the rear of the abdomen. The common European earwig
            (<em>Forficula auricularia</em>), shown here, is the familiar garden species. Those rear pincers
            look fearsome but are used mainly for defence, capturing prey, folding the delicate hind wings,
            and courtship — and a male&apos;s are more strongly curved than a female&apos;s.
          </p>
          <p>
            Earwigs carry an enduring myth: that they crawl into people&apos;s ears to burrow into the brain.
            This is folklore, not fact — earwigs do not seek out ears or tunnel into brains, and they are
            harmless to people.
          </p>
          <p>
            <strong>Note:</strong> &ldquo;earwig&rdquo; covers an order of many species; details here use the
            common earwig as a reference. Treat general statements as approximate and verify against
            authoritative sources.
          </p>
        </>
      }
      habitat={
        <p>
          Earwigs are found nearly worldwide in temperate and tropical regions, in gardens, fields,
          woodlands, leaf litter, and around homes. They like cool, dark, damp, tight spaces — under bark,
          stones, logs, and plant debris, and in crevices — where they hide by day, emerging at night to
          forage. The common earwig is very familiar in gardens and sometimes wanders indoors.
        </p>
      }
      diet={
        <p>
          Most earwigs are omnivores and opportunists, eating a mix of plant matter, decaying material,
          algae, fungi, and other small invertebrates (including aphids and insect eggs). This makes them a
          double-edged presence in gardens: they can nibble soft plants, seedlings, flowers, and ripe fruit,
          but they also eat aphids and other pests and help break down decaying matter, so they are often
          more helpful than harmful.
        </p>
      }
      behavior={
        <p>
          Earwigs are mostly nocturnal, hiding by day and coming out at night to feed, and they are gregarious,
          often clustering together in shelters. Many have wings — with remarkable, intricately folded hind
          wings tucked beneath short forewings — though they fly only rarely. The pincers are versatile tools:
          for defence, subduing prey, and courtship displays. Most striking is earwig parenting: the female is
          an unusually devoted mother for an insect, laying her eggs in a burrow and then guarding them,
          cleaning them of mould, and tending the young nymphs after they hatch — a rare degree of maternal
          care among insects.
        </p>
      }
      humanInteraction={
        <p>
          Earwigs are harmless to people — the brain-burrowing story is pure myth, and their pincers can at
          most give a tiny, harmless nip. In gardens they are usually minor and often beneficial, helping
          control aphids and recycle debris, though they occasionally damage soft plants or fruit. They are
          common and not of conservation concern. Simply removing damp hiding spots manages them where they
          are unwanted. Consult authoritative sources for details on specific species.
        </p>
      }
      faqs={[
        {
          question: "Do earwigs really crawl into your ears?",
          answer:
            "No — that's an old myth, and the likely origin of the name, but it isn't true. Earwigs don't seek out human ears, and they certainly don't burrow into the brain (which is anatomically impossible anyway). Like many small insects one might very rarely wander into an ear by accident, but earwigs have no special attraction to ears and are harmless.",
        },
        {
          question: "What are the pincers on an earwig for?",
          answer:
            "The rear pincers (forceps) are multipurpose tools, not weapons against people. Earwigs use them for defence, to capture and hold prey, to help fold their delicate hind wings, and in courtship. Males tend to have more strongly curved pincers than females. At most they can give a person a tiny, harmless nip.",
        },
        {
          question: "Are earwigs good or bad for the garden?",
          answer:
            "Both, but usually more helpful than harmful. Earwigs can nibble seedlings, soft plants, flowers, and ripe fruit, but they also eat aphids and other small pests and help break down decaying matter. In most gardens they're a minor presence, and their pest-eating and recycling often outweigh the occasional plant damage.",
        },
        {
          question: "Is it true that earwig mothers care for their young?",
          answer:
            "Yes — and it's one of their most remarkable traits. Unusually for insects, a female earwig guards her eggs in a burrow, keeps them clean of mould, and tends the newly hatched nymphs for a time. This active maternal care is rare among insects and a notable part of earwig biology.",
        },
      ]}
      quickFacts={[
        { label: "Group", value: "Order Dermaptera (earwigs)" },
        { label: "Reference species", value: "Forficula auricularia (common earwig)" },
        { label: "Class", value: "Insecta" },
        { label: "Signature trait", value: "Curved rear pincers (cerci)" },
        { label: "Myth", value: "Does NOT burrow into ears/brain" },
        { label: "Diet", value: "Omnivore (plants, debris, aphids & pests)" },
        { label: "Parenting", value: "Mother guards eggs & young (rare in insects)" },
        { label: "To humans", value: "Harmless" },
      ]}
      relatedLinks={[
        { label: "Cockroach Profile", href: "/animals/cockroach", description: "Another nocturnal, misunderstood insect" },
        { label: "Beetle Profile", href: "/animals/beetle", description: "Another common garden insect" },
        { label: "Aphid Profile", href: "/animals/aphid", description: "A pest earwigs help control" },
        { label: "Insects & Invertebrates", href: "/animal-encyclopedia/insects" },
        { label: "Invertebrates Taxonomy", href: "/animal-taxonomy/invertebrates" },
      ]}
    />
  );
}
