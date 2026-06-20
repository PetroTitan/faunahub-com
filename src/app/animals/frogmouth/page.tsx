import type { Metadata } from "next";
import AnimalProfileLayout from "@/components/AnimalProfileLayout";
import { ANIMAL_SOURCES } from "@/lib/educational/animal-sources";
import { getAnimalGalleryImages, getAnimalImage, getAnimalOgImage } from "@/lib/images/animal-images";
import { buildArticleMetadata } from "@/lib/metadata";

const PATH = "/animals/frogmouth";
const TITLE = "Frogmouth — Profile, Master of Camouflage & Diet";
const DESC =
  "Explore frogmouths (family Podargidae): nocturnal birds of Australasia that disguise themselves as broken branches by day — using the tawny frogmouth. Often mistaken for owls.";

export const metadata: Metadata = buildArticleMetadata({
  title: TITLE,
  description: DESC,
  path: PATH,
  publishedTime: "2026-06-20",
  modifiedTime: "2026-06-20",
  ogImage: getAnimalOgImage("frogmouth"),
});

export default function FrogmouthPage() {
  return (
    <AnimalProfileLayout
      commonName="Frogmouth"
      scientificName="Podargus strigoides"
      pageTitle={TITLE}
      description={DESC}
      path={PATH}
      parentCategory="Birds"
      parentCategoryHref="/animal-encyclopedia/birds"
      tags={["Bird", "Nocturnal", "Camouflage"]}
      image={getAnimalImage("frogmouth") ?? undefined}
      galleryImages={getAnimalGalleryImages("frogmouth")}
      sources={ANIMAL_SOURCES.frogmouth}
      publishedDate="2026-06-20"
      modifiedDate="2026-06-20"
      overview={
        <>
          <p>
            Frogmouths (family Podargidae) are nocturnal birds of Australia, New Guinea, and
            southern Asia, named for their wide, frog-like gape. The tawny frogmouth
            (<em>Podargus strigoides</em>), shown here, is a master of disguise: by day it
            perches motionless with its head tilted up, its mottled grey-brown plumage and
            posture making it look uncannily like a broken branch or dead stump.
          </p>
          <p>
            Frogmouths are very often mistaken for owls, but they are not owls — they are
            more closely related to nightjars, and they catch prey quite differently.
          </p>
          <p>
            <strong>Note:</strong> there are several frogmouth species; details here use the
            tawny frogmouth as a reference. Treat general statements as approximate and
            verify against authoritative sources.
          </p>
        </>
      }
      habitat={
        <p>
          The tawny frogmouth is found across Australia (and Tasmania) in almost any
          habitat with trees — forests, woodlands, scrub, farmland, parks, and gardens —
          while other frogmouth species live in the forests of New Guinea and southern
          Asia. They need trees for roosting and nesting and are common even in suburban
          areas.
        </p>
      }
      diet={
        <p>
          Frogmouths are mainly insectivores, eating beetles, moths, spiders, and other
          invertebrates, and the larger species also take small vertebrates such as frogs,
          reptiles, and mice. Unlike owls, which seize prey in their talons, frogmouths
          catch most prey in their wide beak, often pouncing to the ground from a perch.
        </p>
      }
      behavior={
        <p>
          By day, a frogmouth relies on camouflage and stillness: it freezes in a stiff,
          upward-pointing &ldquo;broken-branch&rdquo; pose with eyes nearly shut, and is
          extremely hard to spot. At night it hunts from a perch, watching and listening
          for prey before dropping or sallying out to grab it. Frogmouths have weak feet
          (not the powerful talons of owls) and a wide, hooked bill suited to grabbing
          rather than gripping. Pairs are often long-lasting and share nesting duties.
        </p>
      }
      humanInteraction={
        <p>
          Tawny frogmouths are common and adapt well to gardens and parks, where they help
          control insects, though they can be vulnerable to vehicle strikes and pesticides
          that reduce their prey. Their incredible camouflage makes them a favourite
          discovery for birdwatchers. Consult authoritative sources for species-specific
          status.
        </p>
      }
      faqs={[
        {
          question: "Is a frogmouth an owl?",
          answer:
            "No, though it's very commonly mistaken for one. Frogmouths are nocturnal and big-eyed like owls, but they belong to a different group (closer to nightjars). Key differences: frogmouths have a wide, frog-like bill and weak feet, and they catch prey in the beak rather than seizing it with powerful talons as owls do.",
        },
        {
          question: "How does a frogmouth camouflage itself?",
          answer:
            "By day it perches very still with its head pointed upward and eyes nearly closed, so its mottled grey-brown plumage and posture make it look just like a broken branch or dead stump. This 'stick' disguise is so effective that frogmouths are often overlooked even when in plain sight.",
        },
        {
          question: "What do frogmouths eat?",
          answer:
            "Mainly insects and other invertebrates — beetles, moths, spiders, and the like — caught at night. Larger frogmouths also take small vertebrates such as frogs, reptiles, and mice. They typically watch from a perch and pounce, catching prey in their broad bill.",
        },
        {
          question: "Where do frogmouths live?",
          answer:
            "The tawny frogmouth is widespread across Australia, including in towns and gardens, while other frogmouth species inhabit forests of New Guinea and southern Asia. They are found wherever there are trees for roosting and nesting.",
        },
      ]}
      quickFacts={[
        { label: "Group", value: "Family Podargidae" },
        { label: "Reference species", value: "Podargus strigoides (tawny frogmouth)" },
        { label: "Class", value: "Aves" },
        { label: "Not an", value: "Owl (closer to nightjars)" },
        { label: "Diet", value: "Insectivore; larger species take small vertebrates" },
        { label: "Signature trait", value: "'Broken-branch' camouflage" },
        { label: "Activity", value: "Nocturnal" },
        { label: "Range", value: "Australia, New Guinea, S. Asia" },
      ]}
      relatedLinks={[
        { label: "Nightjar Profile", href: "/animals/nightjar", description: "Its close, similarly camouflaged relative" },
        { label: "Owl Profile", href: "/animals/owl", description: "The bird it's often mistaken for" },
        { label: "Potoo Profile", href: "/animals/potoo", description: "Another camouflaged nocturnal bird" },
        { label: "Birdwatching", href: "/birdwatching", description: "Tips for observing birds" },
        { label: "Bird Encyclopedia", href: "/animal-encyclopedia/birds" },
      ]}
    />
  );
}
