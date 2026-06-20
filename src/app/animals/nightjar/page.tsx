import type { Metadata } from "next";
import AnimalProfileLayout from "@/components/AnimalProfileLayout";
import { ANIMAL_SOURCES } from "@/lib/educational/animal-sources";
import { getAnimalGalleryImages, getAnimalImage, getAnimalOgImage } from "@/lib/images/animal-images";
import { buildArticleMetadata } from "@/lib/metadata";

const PATH = "/animals/nightjar";
const TITLE = "Nightjar — Profile, Camouflage, Diet & Night Calls";
const DESC =
  "Explore nightjars (family Caprimulgidae): superbly camouflaged nocturnal birds that catch insects on the wing and churr through the night — using the European nightjar as a reference.";

export const metadata: Metadata = buildArticleMetadata({
  title: TITLE,
  description: DESC,
  path: PATH,
  publishedTime: "2026-06-20",
  modifiedTime: "2026-06-20",
  ogImage: getAnimalOgImage("nightjar"),
});

export default function NightjarPage() {
  return (
    <AnimalProfileLayout
      commonName="Nightjar"
      scientificName="family Caprimulgidae"
      pageTitle={TITLE}
      description={DESC}
      path={PATH}
      parentCategory="Birds"
      parentCategoryHref="/animal-encyclopedia/birds"
      tags={["Bird", "Nocturnal", "Insectivore"]}
      image={getAnimalImage("nightjar") ?? undefined}
      galleryImages={getAnimalGalleryImages("nightjar")}
      sources={ANIMAL_SOURCES.nightjar}
      publishedDate="2026-06-20"
      modifiedDate="2026-06-20"
      overview={
        <>
          <p>
            Nightjars (family Caprimulgidae) are nocturnal and crepuscular birds renowned
            for their extraordinary camouflage and their haunting night-time calls. The
            European nightjar (<em>Caprimulgus europaeus</em>), shown here, has intricately
            patterned grey-brown plumage that mimics bark and dead leaves so closely that a
            resting bird can be almost impossible to spot. It has a tiny bill but an
            enormous gape, perfect for catching flying insects in the dark.
          </p>
          <p>
            More often heard than seen, nightjars are best known by the strange, churring,
            mechanical song the males give on warm evenings.
          </p>
          <p>
            <strong>Note:</strong> &ldquo;nightjar&rdquo; covers many species worldwide;
            details here use the European nightjar as a reference. Treat general statements
            as approximate and verify against authoritative sources.
          </p>
        </>
      }
      habitat={
        <p>
          Nightjars are found on most continents in a variety of open and semi-open
          habitats — heathland, woodland clearings, scrub, forest edges, and dry country.
          The European nightjar breeds across Europe and Asia in heaths and open woodland
          and migrates to sub-Saharan Africa for the winter. By day, nightjars rest on the
          ground or lengthwise along branches, relying on camouflage.
        </p>
      }
      diet={
        <p>
          Nightjars are insectivores that feed on the wing, catching moths, beetles, and
          other flying insects in their wide gapes during flight at dusk and through the
          night. Bristles around the mouth may help funnel prey. They hunt with buoyant,
          agile, almost moth-like flight, sometimes around livestock or lights where
          insects gather.
        </p>
      }
      behavior={
        <p>
          The nightjar&apos;s camouflage is its first line of defence: by day it sits
          motionless, eyes nearly closed, blending into bark, leaf litter, or soil. The
          male&apos;s long, churring song — a continuous mechanical trilling that rises and
          falls — is a classic sound of summer nights in its range, and he also claps his
          wings and shows white wing patches in display. Nightjars nest on the bare ground,
          laying their eggs directly on leaf litter rather than building a nest.
        </p>
      }
      humanInteraction={
        <p>
          Old folklore wrongly accused nightjars of stealing milk from goats — the origin
          of the family name Caprimulgidae, meaning &ldquo;goat-sucker&rdquo; — but in
          reality they were simply catching insects around livestock. Many nightjars are
          hard to monitor because of their secretive habits, and some have declined with
          changes in land use and insect numbers. Consult authoritative sources for current
          status.
        </p>
      }
      faqs={[
        {
          question: "Why are nightjars so hard to see?",
          answer:
            "Their plumage is a masterpiece of camouflage, patterned to look like bark, dead leaves, or soil. Nightjars are also nocturnal, resting motionless by day on the ground or along a branch with their eyes nearly shut, so even at close range a roosting nightjar can be almost invisible.",
        },
        {
          question: "What is that churring sound at night?",
          answer:
            "It's very likely a male nightjar's song — a long, continuous, mechanical churring or trilling that rises and falls, given on warm evenings in the breeding season. Because nightjars are so hard to see, this distinctive sound is often the main way people detect them.",
        },
        {
          question: "Why is the nightjar family called 'goat-suckers'?",
          answer:
            "The scientific name Caprimulgidae means 'goat-milker,' from an old myth that nightjars drank milk from goats at night. In fact the birds were simply hawking for insects disturbed around grazing livestock. The legend stuck in the name, but it isn't true.",
        },
        {
          question: "What do nightjars eat?",
          answer:
            "Flying insects, caught in the air at night. Moths and beetles are typical prey, scooped up in the bird's surprisingly wide gape during agile, buoyant flight at dusk and after dark, often where insects concentrate around vegetation, livestock, or lights.",
        },
      ]}
      quickFacts={[
        { label: "Group", value: "Family Caprimulgidae" },
        { label: "Reference species", value: "Caprimulgus europaeus (European nightjar)" },
        { label: "Class", value: "Aves" },
        { label: "Diet", value: "Insectivore (catches insects in flight)" },
        { label: "Signature traits", value: "Camouflage; churring night song" },
        { label: "Activity", value: "Nocturnal/crepuscular" },
        { label: "Nest", value: "On bare ground (no built nest)" },
        { label: "Status", value: "Varies by species (verify)" },
      ]}
      relatedLinks={[
        { label: "Owl Profile", href: "/animals/owl", description: "Another nocturnal bird" },
        { label: "Swift Profile", href: "/animals/swift", description: "Another aerial insect-catcher" },
        { label: "Bee-eater Profile", href: "/animals/bee-eater", description: "A daytime insect specialist" },
        { label: "Birdwatching", href: "/birdwatching", description: "Tips for observing birds" },
        { label: "Bird Encyclopedia", href: "/animal-encyclopedia/birds" },
      ]}
    />
  );
}
