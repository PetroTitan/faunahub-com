import type { Metadata } from "next";
import AnimalProfileLayout from "@/components/AnimalProfileLayout";
import { ANIMAL_SOURCES } from "@/lib/educational/animal-sources";
import { getAnimalGalleryImages, getAnimalImage, getAnimalOgImage } from "@/lib/images/animal-images";
import { buildArticleMetadata } from "@/lib/metadata";

const PATH = "/animals/frogfish";
const TITLE = "Frogfish — Profile, the Camouflaged Anglers with a Built-In Fishing Rod";
const DESC =
  "Explore frogfish (family Antennariidae): lumpy, superbly camouflaged ambush predators that 'walk' on leg-like fins and dangle a built-in lure to fish for prey — with the fastest gape in the sea.";

export const metadata: Metadata = buildArticleMetadata({
  title: TITLE,
  description: DESC,
  path: PATH,
  publishedTime: "2026-06-22",
  modifiedTime: "2026-06-22",
  ogImage: getAnimalOgImage("frogfish"),
});

export default function FrogfishPage() {
  return (
    <AnimalProfileLayout
      commonName="Frogfish"
      scientificName="family Antennariidae"
      pageTitle={TITLE}
      description={DESC}
      path={PATH}
      parentCategory="Fish"
      parentCategoryHref="/animal-encyclopedia/fish"
      tags={["Fish", "Marine", "Ambush predator"]}
      image={getAnimalImage("frogfish") ?? undefined}
      galleryImages={getAnimalGalleryImages("frogfish")}
      sources={ANIMAL_SOURCES.frogfish}
      publishedDate="2026-06-22"
      modifiedDate="2026-06-22"
      overview={
        <>
          <p>
            Frogfish (family Antennariidae) are squat, lumpy, almost comically grumpy-looking
            fish — a kind of anglerfish — that are masters of disguise and ambush. Covered in
            warts, flaps, and blotches, they blend perfectly into sponges, coral rubble, and
            seaweed, often looking nothing like a fish at all. A frogfish does not chase prey:
            instead it sits motionless and goes fishing, using a built-in &ldquo;rod and
            lure&rdquo; — a modified first dorsal spine tipped with a wiggling bait — to draw
            victims within range.
          </p>
          <p>
            When prey comes close, the frogfish strikes with one of the fastest movements in the
            animal kingdom, opening its huge mouth in a fraction of a second to suck the victim in
            whole.
          </p>
          <p>
            <strong>Note:</strong> &ldquo;frogfish&rdquo; covers many species; details here
            describe the family broadly. Treat general statements as approximate and verify
            against authoritative sources.
          </p>
        </>
      }
      habitat={
        <p>
          Frogfish live mainly in warm, shallow seas around the world, especially in the
          Indo-Pacific, on coral reefs, rocky reefs, sponge gardens, and weedy or rubble bottoms;
          some occur in deeper water and one famous relative drifts among floating sargassum
          weed. They tend to stay put in one spot that matches their camouflage, often perched
          among sponges or coral.
        </p>
      }
      diet={
        <p>
          Frogfish are carnivorous ambush predators that eat fish and crustaceans, and they are
          not fussy — they will take prey nearly as large as themselves. They lure victims with
          their built-in bait, then engulf them with an explosive strike. Their cavernous,
          highly expandable mouth and stretchy stomach allow them to swallow surprisingly big
          meals whole.
        </p>
      }
      behavior={
        <p>
          Almost everything about a frogfish is built for sit-and-wait ambush. Its camouflage —
          colours and textures that mimic sponges, coral, or algae, sometimes with filaments
          like seaweed — lets it hide in plain sight, and many can slowly change colour over days
          to match new surroundings. Rather than swim, frogfish often &ldquo;walk&rdquo; across
          the bottom on their leg-like pectoral and pelvic fins, and some can even jet along by
          gulping and forcing water out through their gill openings. The lure (called an esca) is
          wiggled to imitate a small worm or fish; when a target draws near, the frogfish&apos;s
          strike — sucking prey in as it opens its mouth — is among the fastest feeding motions
          known. Frogfish are harmless to people.
        </p>
      }
      humanInteraction={
        <p>
          Frogfish are prized by underwater photographers and divers for their bizarre looks and
          remarkable behaviour, and they are sometimes kept by specialist marine aquarists. They
          are not targeted as food and are harmless to humans. As reef and coastal animals they
          depend on healthy marine habitats, so reef degradation and pollution are the main
          concerns; most species are not considered globally threatened. Consult authoritative
          sources for status.
        </p>
      }
      faqs={[
        {
          question: "Is a frogfish an anglerfish?",
          answer:
            "Yes — frogfish are a family of anglerfish. Like the deep-sea anglerfish famous for their glowing lures, frogfish hunt by dangling a built-in bait on a modified fin spine to attract prey. Frogfish are the shallow-water, reef-dwelling members of this broader group, and they share the classic 'fishing rod' lure.",
        },
        {
          question: "How does a frogfish catch its prey?",
          answer:
            "By fishing and ambush. It stays camouflaged and motionless, wiggling its built-in lure (the esca) to imitate a small worm or fish. When a curious victim comes close, the frogfish strikes with an explosively fast opening of its huge mouth — one of the quickest feeding motions known — sucking the prey straight in, sometimes swallowing animals nearly its own size.",
        },
        {
          question: "Can frogfish walk?",
          answer:
            "In a sense, yes. Rather than swimming much, frogfish often clamber slowly across the seabed on their leg-like pectoral and pelvic fins, almost as if walking. Some can also move by 'jet propulsion,' gulping water and forcing it out through their gill openings. This unusual locomotion suits their stay-put, ambush lifestyle.",
        },
        {
          question: "How are frogfish so well camouflaged?",
          answer:
            "Their bodies mimic their surroundings — colours and textures resembling sponges, coral, or algae, sometimes with skin flaps and filaments like seaweed. Many can even slowly change colour over days to match a new perch. This disguise hides them from both prey and predators, so well that divers often can't spot a frogfish sitting right in front of them.",
        },
      ]}
      quickFacts={[
        { label: "Group", value: "Family Antennariidae (a kind of anglerfish)" },
        { label: "Reference genus", value: "Antennarius" },
        { label: "Class", value: "Actinopterygii (ray-finned fish)" },
        { label: "Hunting", value: "Camouflaged ambush; dangles a lure (esca)" },
        { label: "Strike", value: "Among the fastest feeding motions known" },
        { label: "Movement", value: "'Walks' on leg-like fins; can jet water" },
        { label: "Habitat", value: "Warm shallow seas & reefs (esp. Indo-Pacific)" },
        { label: "To humans", value: "Harmless" },
      ]}
      relatedLinks={[
        { label: "Anglerfish Profile", href: "/animals/anglerfish", description: "Deep-sea lure-fishing relatives" },
        { label: "Stonefish Profile", href: "/animals/stonefish", description: "Another camouflaged reef ambusher" },
        { label: "Seahorse Profile", href: "/animals/seahorse", description: "Another oddly shaped reef fish" },
        { label: "Ocean fauna by depth", href: "/fauna/ocean", description: "Reef habitats in context" },
        { label: "Fish Encyclopedia", href: "/animal-encyclopedia/fish" },
      ]}
    />
  );
}
