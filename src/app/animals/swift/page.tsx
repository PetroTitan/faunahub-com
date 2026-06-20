import type { Metadata } from "next";
import AnimalProfileLayout from "@/components/AnimalProfileLayout";
import { ANIMAL_SOURCES } from "@/lib/educational/animal-sources";
import { getAnimalGalleryImages, getAnimalImage, getAnimalOgImage } from "@/lib/images/animal-images";
import { buildArticleMetadata } from "@/lib/metadata";

const PATH = "/animals/swift";
const TITLE = "Swift — Profile, Life on the Wing, Diet & Migration";
const DESC =
  "Explore swifts (family Apodidae): supremely aerial birds that eat, sleep, and mate in flight — using the common swift, which can stay airborne for months without landing.";

export const metadata: Metadata = buildArticleMetadata({
  title: TITLE,
  description: DESC,
  path: PATH,
  publishedTime: "2026-06-20",
  modifiedTime: "2026-06-20",
  ogImage: getAnimalOgImage("swift"),
});

export default function SwiftPage() {
  return (
    <AnimalProfileLayout
      commonName="Swift"
      scientificName="family Apodidae"
      pageTitle={TITLE}
      description={DESC}
      path={PATH}
      parentCategory="Birds"
      parentCategoryHref="/animal-encyclopedia/birds"
      tags={["Bird", "Aerial", "Migratory"]}
      image={getAnimalImage("swift") ?? undefined}
      galleryImages={getAnimalGalleryImages("swift")}
      sources={ANIMAL_SOURCES.swift}
      publishedDate="2026-06-20"
      modifiedDate="2026-06-20"
      overview={
        <>
          <p>
            Swifts (family Apodidae) are among the most aerial of all birds — built almost
            entirely for life on the wing. The common swift (<em>Apus apus</em>), shown
            here, has a sleek, dark body, long scythe-shaped wings, and a short forked
            tail, and its piercing screaming calls are a classic sound of summer skies. On
            the wing it is supremely fast and agile; on the ground it is almost helpless.
          </p>
          <p>
            Remarkably, common swifts can remain airborne for months at a time — feeding,
            drinking, sleeping, and even mating in flight — coming down only to nest.
          </p>
          <p>
            <strong>Note:</strong> swifts are often mistaken for swallows but are not
            closely related; details here use the common swift. Treat general statements as
            approximate and verify against authoritative sources.
          </p>
        </>
      }
      habitat={
        <p>
          Common swifts breed across Europe and Asia, nesting in cavities — traditionally
          in cliffs and trees, and now very often in the roofs and walls of buildings.
          They are long-distance migrants, wintering in sub-Saharan Africa, and spend
          almost all their lives in open airspace over a huge range of landscapes.
        </p>
      }
      diet={
        <p>
          Swifts are insectivores that feed entirely in the air, catching flying insects
          and drifting &ldquo;aerial plankton&rdquo; — tiny airborne insects and spiders —
          in their wide gapes. They gather large mouthfuls of prey to carry back to their
          chicks, and follow good feeding conditions, sometimes flying around weather
          systems to find insect-rich air.
        </p>
      }
      behavior={
        <p>
          The common swift is famous for staying aloft for extraordinarily long periods:
          young birds may fly continuously for the better part of a year after leaving the
          nest, only landing once they are ready to breed. Swifts even sleep on the wing,
          climbing high at dusk and dozing in short bursts. Their tiny legs (the family
          name Apodidae means &ldquo;footless&rdquo;) are good only for clinging to
          vertical surfaces, not for walking.
        </p>
      }
      humanInteraction={
        <p>
          Swifts are closely tied to human buildings for nesting, so the loss of suitable
          roof cavities during renovation has contributed to declines in some areas;
          installing swift nest bricks and boxes is a common conservation response. They
          are otherwise harmless and even helpful, eating vast numbers of insects.
          Consult authoritative sources for current status.
        </p>
      }
      faqs={[
        {
          question: "Can swifts really sleep while flying?",
          answer:
            "Yes. Common swifts can stay airborne continuously for very long periods and are believed to sleep on the wing, typically by climbing to height at dusk and dozing in brief bouts while gliding. After leaving the nest, a young swift may remain in flight for many months before it ever lands.",
        },
        {
          question: "Are swifts the same as swallows?",
          answer:
            "No, although they look similar in flight and are often confused. Swifts (family Apodidae) are not closely related to swallows; their resemblance comes from sharing an insect-catching, aerial lifestyle. Swifts have stiffer, more scythe-like wings and a distinctive screaming call.",
        },
        {
          question: "Why do swifts have such tiny legs?",
          answer:
            "Swifts are so specialised for flight that their legs are very small and weak — the family name Apodidae even means \"without feet.\" Their feet are suited to clinging to vertical surfaces like walls and cliffs near the nest, not to walking or perching on the ground, where a grounded swift struggles.",
        },
        {
          question: "What do swifts eat?",
          answer:
            "Flying insects and other tiny airborne creatures — collectively called aerial plankton. Swifts feed entirely in the air, scooping up insects and small spiders in their wide mouths, and carry large collected mouthfuls back to feed their young.",
        },
      ]}
      quickFacts={[
        { label: "Group", value: "Family Apodidae" },
        { label: "Reference species", value: "Apus apus (common swift)" },
        { label: "Class", value: "Aves" },
        { label: "Diet", value: "Insectivore (feeds in flight)" },
        { label: "Signature feat", value: "Can stay airborne for months" },
        { label: "Legs", value: "Tiny; only for clinging" },
        { label: "Migration", value: "Long-distance (to Africa)" },
        { label: "Status", value: "Declines in places (verify)" },
      ]}
      relatedLinks={[
        { label: "Hummingbird Profile", href: "/animals/hummingbird", description: "A distant relative in the same order" },
        { label: "Bee-eater Profile", href: "/animals/bee-eater", description: "Another aerial insect-catcher" },
        { label: "Kingfisher Profile", href: "/animals/kingfisher", description: "More fast, agile birds" },
        { label: "Birdwatching", href: "/birdwatching", description: "Tips for observing birds" },
        { label: "Bird Encyclopedia", href: "/animal-encyclopedia/birds" },
      ]}
    />
  );
}
