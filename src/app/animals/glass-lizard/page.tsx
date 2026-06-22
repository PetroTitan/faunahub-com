import type { Metadata } from "next";
import AnimalProfileLayout from "@/components/AnimalProfileLayout";
import { ANIMAL_SOURCES } from "@/lib/educational/animal-sources";
import { getAnimalGalleryImages, getAnimalImage, getAnimalOgImage } from "@/lib/images/animal-images";
import { buildArticleMetadata } from "@/lib/metadata";

const PATH = "/animals/glass-lizard";
const TITLE = "Glass Lizard — Profile, the Legless Lizard That Isn't a Snake";
const DESC =
  "Explore glass lizards (e.g. Pseudopus apodus): snake-like legless lizards that shatter off their tail to escape — distinguished from true snakes by eyelids and ear openings.";

export const metadata: Metadata = buildArticleMetadata({
  title: TITLE,
  description: DESC,
  path: PATH,
  publishedTime: "2026-06-22",
  modifiedTime: "2026-06-22",
  ogImage: getAnimalOgImage("glass-lizard"),
});

export default function GlassLizardPage() {
  return (
    <AnimalProfileLayout
      commonName="Glass Lizard"
      scientificName="e.g. Pseudopus apodus"
      pageTitle={TITLE}
      description={DESC}
      path={PATH}
      parentCategory="Reptiles & Amphibians"
      parentCategoryHref="/animal-encyclopedia/reptiles"
      tags={["Reptile", "Legless lizard", "Look-alike"]}
      image={getAnimalImage("glass-lizard") ?? undefined}
      galleryImages={getAnimalGalleryImages("glass-lizard")}
      sources={ANIMAL_SOURCES["glass-lizard"]}
      publishedDate="2026-06-22"
      modifiedDate="2026-06-22"
      overview={
        <>
          <p>
            Glass lizards are legless lizards that look astonishingly like snakes — long, slender,
            and limbless — yet they are true lizards, not serpents. The European glass lizard or
            sheltopusik (<em>Pseudopus apodus</em>), shown here, is one of the largest, a hefty,
            yellowish-brown reptile that can exceed a metre in length. Their name comes from their
            fragile tail: like many lizards, glass lizards can shed (and seemingly
            &ldquo;shatter&rdquo;) part of the tail to escape, leaving the still-wriggling piece
            to distract a predator.
          </p>
          <p>
            Several features give the game away that these are lizards, not snakes: they have
            movable eyelids (snakes do not), external ear openings, and usually a stiff body with
            a groove along each side — and the tail makes up much of their length.
          </p>
          <p>
            <strong>Note:</strong> &ldquo;glass lizard&rdquo; covers several species; details here
            use the sheltopusik (Pseudopus apodus) as a reference. Treat general statements as
            approximate and verify against authoritative sources.
          </p>
        </>
      }
      habitat={
        <p>
          Glass lizards live in warm, dry, and grassy or scrubby habitats. The sheltopusik
          ranges across parts of southeastern Europe, the Balkans, and into western and central
          Asia, in open grassland, scrub, rocky slopes, and field edges; other glass lizards
          live in North America and Asia. They like sunny ground with cover, hiding in
          vegetation, burrows, and crevices.
        </p>
      }
      diet={
        <p>
          Glass lizards are carnivores. The large sheltopusik eats insects and other
          invertebrates such as snails and slugs (using strong jaws to crush snail shells), as
          well as small vertebrates including rodents, other lizards, and eggs. Smaller glass
          lizards feed mainly on insects, spiders, and similar small prey. They forage on and
          just under the ground, using their flexible bodies to push through grass and litter.
        </p>
      }
      behavior={
        <p>
          Despite lacking legs, glass lizards move with a stiffer, less fluid motion than snakes,
          aided by a flexible groove running along each side of the body that lets them expand
          when breathing or feeding. Their signature defence is tail autotomy: when grabbed, the
          tail can break — sometimes into pieces — and keep twitching to distract the attacker
          while the lizard escapes; a new tail regrows, though usually shorter and less perfect.
          They are mostly day-active, bask to warm up, shelter in burrows and crevices, and
          hibernate through cold winters. They are harmless to people, though a large sheltopusik
          can give a firm bite if mishandled.
        </p>
      }
      humanInteraction={
        <p>
          Glass lizards are often mistaken for snakes and needlessly killed out of fear, even
          though they are harmless and helpful controllers of insects, snails, and rodents. They
          face pressures from habitat loss and persecution, but several species remain reasonably
          widespread. Learning to recognise the lizard traits — eyelids, ear openings, and a long
          fragile tail — helps people appreciate rather than fear them. Consult authoritative
          sources and the IUCN Red List for species-specific status.
        </p>
      }
      faqs={[
        {
          question: "Is a glass lizard a snake?",
          answer:
            "No — it's a true lizard that just happens to be legless and snake-like. The giveaways are features snakes lack: glass lizards have movable eyelids (so they can blink), external ear openings, and a long, fragile tail that often makes up more than half their length. Snakes have none of these traits, so a closer look easily tells them apart.",
        },
        {
          question: "Why is it called a 'glass' lizard?",
          answer:
            "Because of its fragile, easily shed tail. Like many lizards, glass lizards can break off their tail to escape a predator — and the tail may seem to 'shatter' into pieces, which keep wriggling to distract the attacker. This brittle, breakaway tail gives the animal its glassy name. The tail regrows over time, though usually shorter.",
        },
        {
          question: "How can you tell a glass lizard from a snake?",
          answer:
            "Look for eyelids, ear openings, and tail proportions. Glass lizards can blink (snakes can't), have visible ear holes (snakes don't), and have a very long tail that can break off — much of their length is tail behind the vent. Many also have a flexible groove along each side of the body. Snakes lack all of these features.",
        },
        {
          question: "Are glass lizards dangerous?",
          answer:
            "Not at all. Glass lizards are harmless, non-venomous reptiles that pose no threat to people; a large one might give a firm bite only if mishandled. They're actually useful, eating insects, snails, and small rodents. Sadly they're often killed out of a mistaken fear that they're snakes.",
        },
      ]}
      quickFacts={[
        { label: "Reference species", value: "Pseudopus apodus (sheltopusik)" },
        { label: "Class", value: "Reptilia (legless lizard, not a snake)" },
        { label: "Lizard giveaways", value: "Eyelids; ear openings; long fragile tail" },
        { label: "Signature trait", value: "Tail breaks off ('shatters') to escape" },
        { label: "Diet", value: "Carnivore (insects, snails, small vertebrates)" },
        { label: "Size", value: "Sheltopusik can exceed 1 m" },
        { label: "Range", value: "SE Europe & Asia (also N. America spp.)" },
        { label: "To humans", value: "Harmless; often mistaken for a snake" },
      ]}
      relatedLinks={[
        { label: "Snake Profile", href: "/animals/snake", description: "The animal it's mistaken for" },
        { label: "Skink Profile", href: "/animals/skink", description: "Related smooth-scaled lizards" },
        { label: "Caecilian relatives — Salamander Profile", href: "/animals/salamander", description: "Other limb-reduced animals" },
        { label: "Fauna by Continent", href: "/fauna/continents", description: "Eurasian fauna in context" },
        { label: "Reptiles & Amphibians", href: "/animal-encyclopedia/reptiles" },
      ]}
    />
  );
}
