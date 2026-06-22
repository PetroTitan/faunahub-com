import type { Metadata } from "next";
import AnimalProfileLayout from "@/components/AnimalProfileLayout";
import { ANIMAL_SOURCES } from "@/lib/educational/animal-sources";
import { getAnimalGalleryImages, getAnimalImage, getAnimalOgImage } from "@/lib/images/animal-images";
import { buildArticleMetadata } from "@/lib/metadata";

const PATH = "/animals/worm-lizard";
const TITLE = "Worm Lizard — Profile, the Burrowing Reptile That Isn't a Worm or a Snake";
const DESC =
  "Explore worm lizards (Amphisbaenia): ringed, mostly legless burrowing reptiles that look like big earthworms — neither worms nor true snakes, but a distinct group of squamates.";

export const metadata: Metadata = buildArticleMetadata({
  title: TITLE,
  description: DESC,
  path: PATH,
  publishedTime: "2026-06-22",
  modifiedTime: "2026-06-22",
  ogImage: getAnimalOgImage("worm-lizard"),
});

export default function WormLizardPage() {
  return (
    <AnimalProfileLayout
      commonName="Worm Lizard"
      scientificName="suborder Amphisbaenia"
      pageTitle={TITLE}
      description={DESC}
      path={PATH}
      parentCategory="Reptiles & Amphibians"
      parentCategoryHref="/animal-encyclopedia/reptiles"
      tags={["Reptile", "Burrower", "Look-alike"]}
      image={getAnimalImage("worm-lizard") ?? undefined}
      galleryImages={getAnimalGalleryImages("worm-lizard")}
      sources={ANIMAL_SOURCES["worm-lizard"]}
      publishedDate="2026-06-22"
      modifiedDate="2026-06-22"
      overview={
        <>
          <p>
            Worm lizards (suborder Amphisbaenia) are strange, secretive burrowing reptiles that
            look uncannily like large earthworms: long, cylindrical, usually pink or pale, and
            ringed with grooves that divide the body into ring-like segments. Despite their name
            and their snake-like, mostly legless bodies, worm lizards are neither worms, nor true
            lizards, nor snakes — they are a distinct lineage of squamate reptiles (the group that
            includes lizards and snakes), specialised for life underground.
          </p>
          <p>
            Almost all worm lizards are limbless, though a few (the ajolotes) keep tiny front
            legs. Their whole body is built for tunnelling, and most spend their entire lives
            hidden beneath the surface, rarely seen.
          </p>
          <p>
            <strong>Note:</strong> &ldquo;worm lizard&rdquo; covers many amphisbaenian species;
            details here describe the group broadly. Treat general statements as approximate and
            verify against authoritative sources.
          </p>
        </>
      }
      habitat={
        <p>
          Worm lizards live mostly underground in warm regions, with species in South and Central
          America, Africa, the Middle East, parts of Europe (such as Iberia), and elsewhere. They
          burrow through soil, sand, and leaf litter in habitats ranging from rainforest to dry
          scrub, and are occasionally found at the surface after rain or when turned up by
          digging. Their subterranean lifestyle keeps them out of sight for most of their lives.
        </p>
      }
      diet={
        <p>
          Worm lizards are carnivores that hunt small prey underground and at the surface — ants,
          termites, beetle larvae, worms, and other small invertebrates, and sometimes small
          vertebrates. They have strong jaws and interlocking teeth, and can bite chunks from prey
          larger than they could swallow whole, an unusual ability among small burrowing reptiles.
        </p>
      }
      behavior={
        <p>
          Everything about a worm lizard is shaped by burrowing. The skull is strong and often
          used as a digging tool — different groups push tunnels with a rounded, shovel-shaped, or
          keel-shaped head — and the skin forms loose rings that let the body move like a piston,
          gripping the tunnel and pulling forward (they can also move backwards, which helps in
          tight burrows). Their eyes are tiny and hidden beneath skin, since vision is little use
          underground; instead they rely on touch and smell. Most are rarely encountered, and much
          of their behaviour remains poorly known. They are harmless to people.
        </p>
      }
      humanInteraction={
        <p>
          Worm lizards are harmless and rarely seen, and because they live underground they
          generally go unnoticed and are sometimes mistaken for worms or small snakes when
          uncovered. Many species are poorly studied, so their conservation status is often unclear,
          though as a group they are not a particular concern; like all soil animals they depend on
          healthy, undisturbed ground. Consult authoritative sources for species-specific details.
        </p>
      }
      faqs={[
        {
          question: "Is a worm lizard a worm, a snake, or a lizard?",
          answer:
            "None of those exactly. Worm lizards (amphisbaenians) are their own distinct group of squamate reptiles — the broad group that also contains lizards and snakes — but they are not true lizards or snakes, and they certainly aren't worms. Their worm-like look (a ringed, pinkish, legless body) is the result of adapting to a burrowing life, not a sign that they're related to earthworms.",
        },
        {
          question: "Do worm lizards have legs?",
          answer:
            "Almost all are completely legless, with smooth, cylindrical bodies suited to tunnelling. The main exceptions are the ajolotes (genus Bipes), which keep a pair of small but strong front legs near the head used for digging. Otherwise, worm lizards move through the soil without any limbs at all.",
        },
        {
          question: "How do worm lizards move underground?",
          answer:
            "Their loose, ringed skin lets the body work like a piston: they anchor part of the body against the tunnel wall and push the rest forward, much like an earthworm. They use their strong, often shovel- or keel-shaped skulls to dig, and they can move backwards as well as forwards — handy in a narrow burrow.",
        },
        {
          question: "Are worm lizards dangerous?",
          answer:
            "No, they're harmless to people. Worm lizards are small, non-venomous burrowers that spend their lives underground hunting insects and other tiny prey. A large one might give a nip if handled, but they pose no threat and are often mistaken for harmless worms or small snakes when they're dug up.",
        },
      ]}
      quickFacts={[
        { label: "Group", value: "Suborder Amphisbaenia (worm lizards)" },
        { label: "Class", value: "Reptilia (squamate; own lineage)" },
        { label: "Not a", value: "Worm, true lizard, or snake" },
        { label: "Body", value: "Ringed, cylindrical; almost all legless" },
        { label: "Exception", value: "Ajolotes keep small front legs" },
        { label: "Lifestyle", value: "Burrowing; eyes tiny & skin-covered" },
        { label: "Diet", value: "Carnivore (insects, small invertebrates)" },
        { label: "To humans", value: "Harmless" },
      ]}
      relatedLinks={[
        { label: "Glass Lizard Profile", href: "/animals/glass-lizard", description: "Another legless lizard look-alike" },
        { label: "Snake Profile", href: "/animals/snake", description: "The animal it's often mistaken for" },
        { label: "Caecilian relatives — Earthworm Profile", href: "/animals/earthworm", description: "The worm it resembles" },
        { label: "Fauna by Continent", href: "/fauna/continents", description: "Soil fauna in context" },
        { label: "Reptiles & Amphibians", href: "/animal-encyclopedia/reptiles" },
      ]}
    />
  );
}
