import type { Metadata } from "next";
import AnimalProfileLayout from "@/components/AnimalProfileLayout";
import { ANIMAL_SOURCES } from "@/lib/educational/animal-sources";
import { getAnimalGalleryImages, getAnimalImage, getAnimalOgImage } from "@/lib/images/animal-images";
import { buildArticleMetadata } from "@/lib/metadata";

const PATH = "/animals/jumping-spider";
const TITLE = "Jumping Spider — Profile, Vision, Hunting & Silk Safety Line";
const DESC =
  "Explore jumping spiders (Salticidae): the largest spider family, with the sharpest eyesight of any spider, hydraulic legs and elaborate courtship dances.";

export const metadata: Metadata = buildArticleMetadata({
  title: TITLE,
  description: DESC,
  path: PATH,
  publishedTime: "2026-09-06",
  modifiedTime: "2026-09-06",
  ogImage: getAnimalOgImage("jumping-spider"),
});

export default function JumpingSpiderPage() {
  return (
    <AnimalProfileLayout
      commonName="Jumping Spider"
      scientificName="family Salticidae"
      pageTitle={TITLE}
      description={DESC}
      path={PATH}
      parentCategory="Insects & Invertebrates"
      parentCategoryHref="/animal-encyclopedia/insects"
      tags={["Arachnid","Spider","Predator"]}
      image={getAnimalImage("jumping-spider") ?? undefined}
      galleryImages={getAnimalGalleryImages("jumping-spider")}
      sources={ANIMAL_SOURCES["jumping-spider"]}
      factsHeaderNote="“Jumping spider” covers over six thousand species in the family Salticidae — the largest family of spiders. Habits vary, so statements here are general to the family."
      publishedDate="2026-09-06"
      modifiedDate="2026-09-06"
      overview={
        <>
        <p>
          Jumping spiders make up the family Salticidae, the <strong>largest family of spiders</strong> with over six thousand species. They are compact, often boldly patterned, and unmistakable at close range because of their eyes.
        </p>
        <p>
          A jumping spider has eight eyes arranged in rows, with an enormous forward-facing central pair that gives it the <strong>sharpest vision of any spider</strong> and among the best of any animal of its size. Those principal eyes have movable retinas that scan a scene, and the spider can see colour.
        </p>
        <p>
          They do not build webs to catch prey. Instead they stalk and pounce — and the jump is powered not by muscle in the usual sense but <strong>hydraulically</strong>, by a rapid increase in body fluid pressure that extends the legs. Before jumping, the spider anchors a silk dragline as a safety rope.
        </p>
        </>
      }
      habitat={
        <>
        <p>
          Jumping spiders live almost everywhere terrestrial — tropical forest, temperate woodland, grassland, desert, mountains and inside buildings — with the greatest diversity in the tropics. They favour sunlit surfaces where they can see: leaves, tree trunks, rocks, walls and fences. One species has been recorded at very high altitude on Mount Everest.
        </p>
        </>
      }
      diet={
        <>
        <p>
          Jumping spiders are active predators of insects and other small invertebrates, including other spiders. Because they hunt by sight they can be selective, and some species specialise remarkably: certain <em>Portia</em> species prey on other spiders using tactics that involve manipulating the victim&apos;s web, and one species, <em>Bagheera kiplingi</em>, is unusual in feeding largely on plant material from acacias.
        </p>
        </>
      }
      behavior={
        <>
        <p>
          Hunting is visual and deliberate: the spider fixes on prey, turns to face it, stalks closer, and jumps. The silk dragline is attached before the leap and lets the spider recover if it misses. Courtship is elaborate and visual — males perform dances with raised, waving legs and display coloured markings, and some species produce vibrations through the substrate as part of the display. <em>Portia</em> jumping spiders are studied for problem-solving behaviour including planned detour routes to reach prey.
        </p>
        </>
      }
      humanInteraction={
        <>
        <p>
          Jumping spiders are harmless to people, generally too small to be of concern, and they are widely regarded as the most appealing of spiders because of their large forward-facing eyes and inquisitive behaviour — they will often turn to watch a person. They are valuable predators of insects in gardens and crops. Scientifically they are important subjects in research on vision, spatial cognition and animal problem-solving. This profile offers no pest-control or handling guidance.
        </p>
        </>
      }
      faqs={[
        {
          question: "How well do jumping spiders see?",
          answer:
            "Exceptionally well for their size — the sharpest vision of any spider. The large forward-facing central eyes have movable retinas that scan across a scene, and jumping spiders can perceive colour. This vision is what allows them to stalk and pounce on prey rather than waiting in a web.",
        },
        {
          question: "How do jumping spiders jump?",
          answer:
            "Hydraulically. Rather than using extensor muscles, the spider rapidly increases the fluid pressure in its body, which straightens the legs and launches it. Before it jumps it attaches a silk dragline to the surface, giving it a safety line if the leap misses.",
        },
        {
          question: "Do jumping spiders build webs?",
          answer:
            "Not to catch prey. They hunt actively by sight instead. They do produce silk — for the dragline attached before each jump, for shelters in which they rest and moult, and for egg sacs — but they do not spin capture webs.",
        },
        {
          question: "Are jumping spiders dangerous?",
          answer:
            "No. Jumping spiders are small, not aggressive toward people, and pose no meaningful threat. They are beneficial predators of insects in gardens and crops. This profile offers no handling or control guidance; the sensible approach is simply to leave them be.",
        },
      ]}
      quickFacts={[
        { label: "Family", value: "Salticidae — 6,000+ species" },
        { label: "Claim to fame", value: "Largest spider family; sharpest spider vision" },
        { label: "Class", value: "Arachnida" },
        { label: "Eyes", value: "Eight, with a huge forward-facing pair" },
        { label: "Colour vision", value: "Yes" },
        { label: "Jumping", value: "Hydraulic — driven by fluid pressure" },
        { label: "Silk", value: "Dragline safety line, shelters, egg sacs" },
        { label: "Webs", value: "None used for catching prey" },
      ]}
      relatedLinks={[
        { label: "Spider Profile", href: "/animals/spider", description: "Group-level overview" },
        { label: "Wolf Spider Profile", href: "/animals/wolf-spider", description: "Another active hunter" },
        { label: "Tarantula Profile", href: "/animals/tarantula" },
        { label: "Animal Vision", href: "/animal-senses-and-adaptations/animal-vision" },
        { label: "Insects & Invertebrates", href: "/animal-encyclopedia/insects" },
      ]}
    />
  );
}
