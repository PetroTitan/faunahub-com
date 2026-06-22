import type { Metadata } from "next";
import AnimalProfileLayout from "@/components/AnimalProfileLayout";
import { ANIMAL_SOURCES } from "@/lib/educational/animal-sources";
import { getAnimalGalleryImages, getAnimalImage, getAnimalOgImage } from "@/lib/images/animal-images";
import { buildArticleMetadata } from "@/lib/metadata";

const PATH = "/animals/legless-lizard";
const TITLE = "Legless Lizard — Profile, the Burrowing Lizards That Look Like Snakes";
const DESC =
  "Explore legless lizards (e.g. Anniella, and Australia's flap-footed lizards): limbless, snake-like lizards that 'swim' through sand — told apart from snakes by eyelids and ear openings.";

export const metadata: Metadata = buildArticleMetadata({
  title: TITLE,
  description: DESC,
  path: PATH,
  publishedTime: "2026-06-22",
  modifiedTime: "2026-06-22",
  ogImage: getAnimalOgImage("legless-lizard"),
});

export default function LeglessLizardPage() {
  return (
    <AnimalProfileLayout
      commonName="Legless Lizard"
      scientificName="e.g. Anniella (California)"
      pageTitle={TITLE}
      description={DESC}
      path={PATH}
      parentCategory="Reptiles & Amphibians"
      parentCategoryHref="/animal-encyclopedia/reptiles"
      tags={["Reptile", "Lizard", "Burrower"]}
      image={getAnimalImage("legless-lizard") ?? undefined}
      galleryImages={getAnimalGalleryImages("legless-lizard")}
      sources={ANIMAL_SOURCES["legless-lizard"]}
      publishedDate="2026-06-22"
      modifiedDate="2026-06-22"
      overview={
        <>
          <p>
            &ldquo;Legless lizard&rdquo; is a name given to several unrelated groups of lizards that have
            independently lost their legs and taken on a snake-like, burrowing form. The California legless
            lizards (genus <em>Anniella</em>), shown here, are small, smooth, shiny lizards that live buried
            in loose, sandy soil; on the other side of the world, Australia&apos;s flap-footed lizards
            (family Pygopodidae) are limbless relatives of geckos. They are a striking example of evolution
            arriving at the same body plan many times over.
          </p>
          <p>
            Although they look like snakes, legless lizards are true lizards, and several features give them
            away: most have movable eyelids (so they can blink), external ear openings, and a long, fragile
            tail that can break off — none of which snakes have.
          </p>
          <p>
            <strong>Note:</strong> &ldquo;legless lizard&rdquo; spans several groups; details here use the
            California legless lizards (Anniella) as a reference. Treat general statements as approximate and
            verify against authoritative sources.
          </p>
        </>
      }
      habitat={
        <p>
          Legless lizards live in a range of habitats depending on the group. California legless lizards
          favour loose, moist, sandy or loamy soils — beach dunes, sandy washes, and leaf litter — in which
          they burrow, often staying just beneath the surface. Flap-footed lizards of Australia and New
          Guinea occupy deserts, grasslands, and woodlands. As a whole, legless lizards are typically tied to
          soft soil, leaf litter, or dense ground cover suited to their burrowing, secretive lives.
        </p>
      }
      diet={
        <p>
          Legless lizards are carnivores that eat small invertebrates — insects, insect larvae, spiders, and
          the like — hunted in the soil, leaf litter, and at the surface. California legless lizards take
          small prey just below or at the surface of the sand, while the larger flap-footed lizards eat
          insects, spiders, and sometimes other small lizards. Their diets reflect a life spent largely
          hidden underground or in cover.
        </p>
      }
      behavior={
        <p>
          Without legs, these lizards move by undulating their bodies — California legless lizards
          effectively &ldquo;swim&rdquo; through loose sand just under the surface. They are mostly secretive
          and spend much of their time buried or hidden, emerging at the surface in mild, moist conditions or
          at dusk. The clues that they are lizards, not snakes, include blinkable eyelids, ear openings (in
          most), and a long, breakable tail that can be shed to distract a predator and later regrown. Many
          legless lizards give birth to live young. Their limbless form is an adaptation for slipping through
          sand and soil, not a sign that they are related to snakes.
        </p>
      }
      humanInteraction={
        <p>
          Legless lizards are harmless and often unnoticed because of their burrowing habits, and they are
          frequently mistaken for small snakes when uncovered. Many are common, but some — such as certain
          California legless lizards tied to specific dune and sandy habitats — are of conservation concern
          due to habitat loss and disturbance. Leaving leaf litter and natural soil undisturbed helps them.
          Consult authoritative sources for species-specific status.
        </p>
      }
      faqs={[
        {
          question: "How is a legless lizard different from a snake?",
          answer:
            "Although both are limbless and slither, legless lizards are true lizards, and several features set them apart: most have movable eyelids (they can blink), external ear openings, and a long, fragile tail that can break off and regrow — none of which snakes have. So a close look at the eyes, ear holes, and tail usually tells them apart.",
        },
        {
          question: "Are all 'legless lizards' the same kind of animal?",
          answer:
            "No — the name covers several unrelated groups that each lost their legs independently, a classic case of convergent evolution. Examples include the California legless lizards (Anniella) and Australia's flap-footed lizards (Pygopodidae), which are relatives of geckos. They arrived at a similar snake-like, burrowing body plan separately.",
        },
        {
          question: "How do legless lizards move and hunt without legs?",
          answer:
            "They undulate their bodies to move — California legless lizards essentially 'swim' through loose sand just below the surface. Living largely buried or hidden, they hunt small invertebrates like insects, larvae, and spiders in the soil and leaf litter, emerging at the surface mainly in mild, moist conditions or at dusk.",
        },
        {
          question: "Are legless lizards dangerous?",
          answer:
            "Not at all — they're harmless, non-venomous, and usually small and secretive. The main 'problem' they face is being mistaken for snakes and killed out of fear when they're dug up. In reality they're shy burrowers that eat small invertebrates and pose no threat to people.",
        },
      ]}
      quickFacts={[
        { label: "Reference group", value: "Anniella (California legless lizards)" },
        { label: "Also includes", value: "Flap-footed lizards (Pygopodidae, Australia)" },
        { label: "Class", value: "Reptilia (lizards, not snakes)" },
        { label: "Lizard giveaways", value: "Eyelids; ear openings; breakable tail" },
        { label: "Movement", value: "Undulates / 'swims' through sand" },
        { label: "Diet", value: "Carnivore (small invertebrates)" },
        { label: "Origin of form", value: "Leglessness evolved many times (convergence)" },
        { label: "To humans", value: "Harmless" },
      ]}
      relatedLinks={[
        { label: "Glass Lizard Profile", href: "/animals/glass-lizard", description: "Another legless lizard group" },
        { label: "Worm Lizard Profile", href: "/animals/worm-lizard", description: "A different limbless reptile lineage" },
        { label: "Snake Profile", href: "/animals/snake", description: "The animal they're mistaken for" },
        { label: "Fauna by Continent", href: "/fauna/continents", description: "Soil & dune fauna in context" },
        { label: "Reptiles & Amphibians", href: "/animal-encyclopedia/reptiles" },
      ]}
    />
  );
}
