import type { Metadata } from "next";
import AnimalProfileLayout from "@/components/AnimalProfileLayout";
import { ANIMAL_SOURCES } from "@/lib/educational/animal-sources";
import { getAnimalGalleryImages, getAnimalImage, getAnimalOgImage } from "@/lib/images/animal-images";
import { buildArticleMetadata } from "@/lib/metadata";

const PATH = "/animals/courser";
const TITLE = "Courser — Profile, the Fast-Running Birds of Dry Open Plains";
const DESC =
  "Explore coursers (family Glareolidae): long-legged, plover-like birds of dry open country that run swiftly across the ground rather than wade — relatives of the swallow-like pratincoles.";

export const metadata: Metadata = buildArticleMetadata({
  title: TITLE,
  description: DESC,
  path: PATH,
  publishedTime: "2026-06-22",
  modifiedTime: "2026-06-22",
  ogImage: getAnimalOgImage("courser"),
});

export default function CourserPage() {
  return (
    <AnimalProfileLayout
      commonName="Courser"
      scientificName="e.g. Cursorius"
      pageTitle={TITLE}
      description={DESC}
      path={PATH}
      parentCategory="Birds"
      parentCategoryHref="/animal-encyclopedia/birds"
      tags={["Bird", "Dryland", "Old World"]}
      image={getAnimalImage("courser") ?? undefined}
      galleryImages={getAnimalGalleryImages("courser")}
      sources={ANIMAL_SOURCES.courser}
      publishedDate="2026-06-22"
      modifiedDate="2026-06-22"
      overview={
        <>
          <p>
            Coursers (family Glareolidae, genus <em>Cursorius</em> and relatives) are slim, upright,
            long-legged birds of dry, open country in Africa, Asia, and parts of southern Europe. Their name
            says it all: rather than wading like their shorebird relatives, coursers are built to run, sprinting
            swiftly across bare ground on long legs and pausing in an alert, upright stance before dashing on
            again. Sandy and buff in colour, they are beautifully camouflaged against the dry plains they
            inhabit.
          </p>
          <p>
            Coursers belong to the same family as the pratincoles — graceful, swallow-like aerial insect-catchers
            — making Glareolidae an unusual family that pairs fleet-footed ground runners with elegant aerial
            hawkers.
          </p>
          <p>
            <strong>Note:</strong> &ldquo;courser&rdquo; covers several species; details here describe the
            ground-running coursers broadly. Treat general statements as approximate and verify against
            authoritative sources.
          </p>
        </>
      }
      habitat={
        <p>
          Coursers live in dry, open habitats across Africa, the Middle East, South Asia, and into parts of
          southern Europe — deserts, semi-deserts, dry grasslands, stony plains, and sparse scrub. They favour
          bare or thinly vegetated ground with good visibility, where their running speed and camouflage are
          most effective. Some are resident, others move with the seasons or rains.
        </p>
      }
      diet={
        <p>
          Coursers are insectivores, feeding mainly on insects and other small invertebrates — beetles, ants,
          termites, grasshoppers, and the like — which they catch by running across open ground in short bursts,
          stopping to snatch prey from the surface in a plover-like manner. Their quick run-and-grab foraging
          suits the open, dry landscapes they hunt in.
        </p>
      }
      behavior={
        <p>
          Coursers are fast, agile runners, covering open ground in rapid dashes interspersed with upright
          pauses, and they tend to rely on running and crouching rather than flight to avoid danger, freezing
          and blending into the background with their sandy plumage. They are usually seen alone, in pairs, or
          in small parties. Like many open-ground birds, they nest in a simple scrape on bare earth, laying
          well-camouflaged eggs, and parents may use distraction displays to lead predators away from the nest.
          Some coursers are active into the cooler hours and even at night.
        </p>
      }
      humanInteraction={
        <p>
          Coursers are harmless, lightly built birds appreciated by birdwatchers for their elegant running and
          camouflage. As ground-nesters of open habitats, they can be affected by habitat loss and degradation,
          disturbance, and predators, and a few species — such as the rare Jerdon&apos;s courser of India — are
          of serious conservation concern, while many others remain reasonably common. Consult the IUCN Red List
          for species-specific status.
        </p>
      }
      faqs={[
        {
          question: "Why are they called coursers?",
          answer:
            "Because they run. Unlike their wading shorebird relatives, coursers are built for sprinting across open ground on long legs, dashing in quick bursts and pausing upright before running on. This fleet-footed, ground-running lifestyle — rather than wading or much flying — is exactly what the name 'courser' refers to.",
        },
        {
          question: "Are coursers related to plovers or shorebirds?",
          answer:
            "Yes, broadly. Coursers belong to the wader/shorebird group, in the family Glareolidae, and they look and forage somewhat like plovers — but they've adapted to dry land rather than water's edge. Their closest relatives are the pratincoles, graceful swallow-like birds that catch insects on the wing, which makes Glareolidae a striking mix of runners and aerial hawkers.",
        },
        {
          question: "What do coursers eat?",
          answer:
            "Mostly insects and other small invertebrates — beetles, ants, termites, grasshoppers, and similar prey — caught by running across open ground and snatching them from the surface, much as a plover does. Their quick run-and-grab style suits the bare, dry plains where they live.",
        },
        {
          question: "How do coursers escape predators in open country?",
          answer:
            "Mainly by running and hiding rather than flying. Coursers can sprint rapidly across the ground, and their sandy, buff plumage blends so well with bare earth that they often freeze and crouch to avoid being seen. Ground-nesting coursers may also perform distraction displays to lure predators away from their eggs or chicks.",
        },
      ]}
      quickFacts={[
        { label: "Group", value: "Family Glareolidae (coursers; genus Cursorius)" },
        { label: "Class", value: "Aves" },
        { label: "Name from", value: "Fast running across open ground" },
        { label: "Relatives", value: "Pratincoles (aerial insect-catchers)" },
        { label: "Diet", value: "Insectivore (run-and-grab foraging)" },
        { label: "Defence", value: "Runs & crouches; camouflaged plumage" },
        { label: "Habitat", value: "Dry open plains of Africa, Asia, S Europe" },
        { label: "Note", value: "Jerdon's courser (India) is critically rare" },
      ]}
      relatedLinks={[
        { label: "Thick-knee Profile", href: "/animals/thick-knee", description: "Another open-ground, camouflaged bird" },
        { label: "Sandgrouse Profile", href: "/animals/sandgrouse", description: "Another fast desert bird" },
        { label: "Roadrunner Profile", href: "/animals/roadrunner", description: "Another famous running bird" },
        { label: "Fauna by Continent", href: "/fauna/continents", description: "Dryland fauna in context" },
        { label: "Birds Encyclopedia", href: "/animal-encyclopedia/birds" },
      ]}
    />
  );
}
