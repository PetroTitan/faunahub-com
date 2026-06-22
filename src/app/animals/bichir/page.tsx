import type { Metadata } from "next";
import AnimalProfileLayout from "@/components/AnimalProfileLayout";
import { ANIMAL_SOURCES } from "@/lib/educational/animal-sources";
import { getAnimalGalleryImages, getAnimalImage, getAnimalOgImage } from "@/lib/images/animal-images";
import { buildArticleMetadata } from "@/lib/metadata";

const PATH = "/animals/bichir";
const TITLE = "Bichir — Profile, the Ancient African Fish That Breathes Air";
const DESC =
  "Explore bichirs (genus Polypterus): ancient, armour-scaled African fish with a row of dorsal finlets and true lungs that let them gulp air — living relics of early ray-finned fishes.";

export const metadata: Metadata = buildArticleMetadata({
  title: TITLE,
  description: DESC,
  path: PATH,
  publishedTime: "2026-06-22",
  modifiedTime: "2026-06-22",
  ogImage: getAnimalOgImage("bichir"),
});

export default function BichirPage() {
  return (
    <AnimalProfileLayout
      commonName="Bichir"
      scientificName="genus Polypterus"
      pageTitle={TITLE}
      description={DESC}
      path={PATH}
      parentCategory="Fish"
      parentCategoryHref="/animal-encyclopedia/fish"
      tags={["Fish", "Freshwater", "Living fossil"]}
      image={getAnimalImage("bichir") ?? undefined}
      galleryImages={getAnimalGalleryImages("bichir")}
      sources={ANIMAL_SOURCES.bichir}
      publishedDate="2026-06-22"
      modifiedDate="2026-06-22"
      overview={
        <>
          <p>
            Bichirs (genus <em>Polypterus</em>) are ancient, elongated freshwater fish of Africa,
            instantly known by the row of separate little fins — the finlets — running along the
            back, and by their thick coat of hard, glossy, diamond-shaped scales. Together with
            the related reedfish, they form an old lineage that branched off near the base of the
            ray-finned fishes, making them living relics with a host of primitive features. The
            ornate bichir (<em>Polypterus ornatipinnis</em>) shown here is a popular and striking
            example.
          </p>
          <p>
            Most remarkably, bichirs have a pair of true, lung-like organs and must come to the
            surface to gulp air — they can even survive out of water for a time if kept damp,
            making them some of the most air-dependent of all fishes.
          </p>
          <p>
            <strong>Note:</strong> &ldquo;bichir&rdquo; covers several Polypterus species; details
            here describe the genus broadly. Treat general statements as approximate and verify
            against authoritative sources.
          </p>
        </>
      }
      habitat={
        <p>
          Bichirs live in fresh waters across tropical Africa — rivers, swamps, floodplains,
          lakes, and shallow, weedy, often slow or stagnant water, including the Nile and Congo
          systems and many wetlands. Their air-breathing lets them thrive in warm, oxygen-poor
          water and shallow swamps where many other fish struggle.
        </p>
      }
      diet={
        <p>
          Bichirs are carnivorous predators that hunt mostly at night, eating insects, worms,
          crustaceans, smaller fish, amphibians, and other small animals. They are slow, deliberate
          hunters that rely heavily on a keen sense of smell to track prey in murky water, then
          lunge to engulf it. Their sturdy jaws handle a wide range of prey sizes.
        </p>
      }
      behavior={
        <p>
          The bichir&apos;s standout feature is its paired, lung-like air-breathing organs:
          unusually, it exhales spent air through openings near the gills and then recoils its
          stiff, armoured body to draw a fresh gulp in at the surface, a distinctive way of
          breathing air. This lets bichirs live in low-oxygen water and survive brief spells out
          of water. They are mostly nocturnal and bottom-oriented, often resting among vegetation
          or cover by day. Their thick scales give protection, and the larvae even have external,
          frilly gills (a little like a salamander&apos;s) before maturing — another of the
          group&apos;s ancient traits.
        </p>
      }
      humanInteraction={
        <p>
          Bichirs are caught for food in parts of Africa and are popular in the aquarium hobby,
          where their prehistoric looks and hardy, air-breathing nature make them favourites
          (responsible keeping and never releasing non-native fish are important). In the wild
          they remain reasonably widespread across African fresh waters, though habitat loss and
          water changes can affect local populations. Consult authoritative sources for status.
        </p>
      }
      faqs={[
        {
          question: "Can bichirs really breathe air?",
          answer:
            "Yes — they have a pair of true, lung-like organs and must surface regularly to gulp air, even in well-oxygenated water. This lets them live in warm, stagnant, low-oxygen swamps and survive out of water for a while if kept moist. Bichirs are among the most air-dependent of all fishes, a trait that links them to the deep history of vertebrates moving toward land.",
        },
        {
          question: "Why are bichirs called 'living fossils'?",
          answer:
            "Because they belong to a very ancient lineage that branched off near the base of the ray-finned fishes and keeps many primitive features — heavy enamel-like armoured scales, lung-like air-breathing, fleshy-based pectoral fins, and larvae with external gills. Studying bichirs offers a window into what early fishes were like, which is why they're often called living fossils.",
        },
        {
          question: "What are the little fins along a bichir's back?",
          answer:
            "Those are the finlets — a series of separate small fins running along the back, each typically with a spine. This unusual divided dorsal fin is a hallmark of bichirs (and gives the genus its name, Polypterus, meaning 'many fins'). It's one of the easiest ways to recognise them.",
        },
        {
          question: "What do bichirs eat?",
          answer:
            "They're nocturnal carnivores that prey on insects, worms, crustaceans, smaller fish, amphibians, and other small animals. Relying heavily on smell to find food in murky water, a bichir hunts slowly and then lunges to engulf its prey, handling a range of prey sizes with its sturdy jaws.",
        },
      ]}
      quickFacts={[
        { label: "Group", value: "Genus Polypterus (bichirs)" },
        { label: "Reference species", value: "Polypterus ornatipinnis (ornate bichir)" },
        { label: "Class", value: "Actinopterygii (ray-finned fish)" },
        { label: "Nickname", value: "'Living fossil'" },
        { label: "Signature traits", value: "Dorsal finlets; hard armour scales" },
        { label: "Breathing", value: "Paired lung-like organs (gulps air)" },
        { label: "Diet", value: "Nocturnal carnivore" },
        { label: "Range", value: "Tropical African fresh waters" },
      ]}
      relatedLinks={[
        { label: "Lungfish Profile", href: "/animals/lungfish", description: "Another air-breathing 'living fossil'" },
        { label: "Gar Profile", href: "/animals/gar", description: "Another armored, air-gulping fish" },
        { label: "Paddlefish Profile", href: "/animals/paddlefish", description: "Another ancient ray-finned fish" },
        { label: "Fish Encyclopedia", href: "/animal-encyclopedia/fish" },
        { label: "Fauna by Continent", href: "/fauna/continents", description: "African freshwater fauna in context" },
      ]}
    />
  );
}
