import type { Metadata } from "next";
import AnimalProfileLayout from "@/components/AnimalProfileLayout";
import { ANIMAL_SOURCES } from "@/lib/educational/animal-sources";
import { getAnimalGalleryImages, getAnimalImage, getAnimalOgImage } from "@/lib/images/animal-images";
import { buildArticleMetadata } from "@/lib/metadata";

const PATH = "/animals/springhare";
const TITLE = "Springhare — Profile, the Hopping African Rodent & Diet";
const DESC =
  "Explore the springhare (Pedetes capensis): a nocturnal African rodent that hops on long hind legs like a tiny kangaroo, lives in burrows, and even glows under UV light.";

export const metadata: Metadata = buildArticleMetadata({
  title: TITLE,
  description: DESC,
  path: PATH,
  publishedTime: "2026-06-20",
  modifiedTime: "2026-06-20",
  ogImage: getAnimalOgImage("springhare"),
});

export default function SpringharePage() {
  return (
    <AnimalProfileLayout
      commonName="Springhare"
      scientificName="Pedetes capensis"
      pageTitle={TITLE}
      description={DESC}
      path={PATH}
      parentCategory="Mammals"
      parentCategoryHref="/animal-encyclopedia/mammals"
      tags={["Mammal", "Rodent", "Africa"]}
      image={getAnimalImage("springhare") ?? undefined}
      galleryImages={getAnimalGalleryImages("springhare")}
      sources={ANIMAL_SOURCES.springhare}
      publishedDate="2026-06-20"
      modifiedDate="2026-06-20"
      overview={
        <>
          <p>
            The springhare (<em>Pedetes capensis</em>) is a nocturnal African rodent that
            looks and moves like a miniature kangaroo. Despite the name, it is neither a
            hare nor a kangaroo: it is a rodent with very long, powerful hind legs, short
            front limbs, big eyes and ears, and a long bushy tail. It bounds across the
            ground in long hops and uses its tail for balance, exactly the way a kangaroo
            does.
          </p>
          <p>
            Springhares are a striking case of convergent evolution — a rodent that
            independently arrived at the same hopping body plan as Australia&apos;s
            marsupial kangaroos.
          </p>
          <p>
            <strong>Note:</strong> the related East African springhare is sometimes treated
            as a separate species; details here use Pedetes capensis as a reference. Treat
            general statements as approximate and verify against authoritative sources.
          </p>
        </>
      }
      habitat={
        <p>
          Springhares live in dry, open habitats across much of southern and eastern Africa
          — savanna, grassland, scrub, and semi-desert — favouring areas with sandy or
          soft soil suitable for digging. They shelter by day in burrows they excavate, and
          emerge at night to feed.
        </p>
      }
      diet={
        <p>
          Springhares are herbivores that feed mainly on grasses, roots, bulbs, and other
          plant matter, and they also take some seeds and occasionally insects. They graze
          and dig for underground plant parts at night, often staying within a short
          distance of a burrow entrance so they can retreat quickly if alarmed.
        </p>
      }
      behavior={
        <p>
          Springhares are nocturnal and largely solitary, hopping on their long hind legs
          and using the bushy tail for balance as they move and feed. By day they rest in
          burrow systems, often plugging the entrance from inside for safety, and they bolt
          underground at the first sign of danger. Interestingly, springhares have been
          found to be biofluorescent — their fur glows under ultraviolet light — though the
          purpose of this, if any, is not yet understood.
        </p>
      }
      humanInteraction={
        <p>
          Springhares are hunted for meat in parts of Africa and can sometimes damage crops
          where farmland meets their habitat, but they remain widespread overall. Their
          burrowing turns over soil, and they are prey for many predators, making them part
          of healthy savanna ecosystems. Consult authoritative sources for current status.
        </p>
      }
      faqs={[
        {
          question: "Is a springhare a hare or a kangaroo?",
          answer:
            "Neither. Despite hopping like a kangaroo and being called a 'hare,' the springhare is actually a rodent. Its kangaroo-like body — long hind legs, short forelimbs, and a balancing tail — evolved independently, a classic example of convergent evolution rather than close relationship.",
        },
        {
          question: "How does a springhare move?",
          answer:
            "It bounds across the ground in long hops powered by strong hind legs, using its long bushy tail for balance, much like a kangaroo. This hopping (saltatorial) gait lets it cover ground quickly and make sudden escapes toward its burrow.",
        },
        {
          question: "Do springhares really glow?",
          answer:
            "Yes — research has shown that springhares are biofluorescent, meaning their fur glows when exposed to ultraviolet light. This trait has been documented in both captive and wild animals, though scientists do not yet know what function, if any, it serves.",
        },
        {
          question: "What do springhares eat?",
          answer:
            "Springhares are herbivores, feeding mainly on grasses, roots, and bulbs, plus some seeds and the occasional insect. They forage at night, often digging for underground plant parts and staying close to a burrow so they can dart to safety.",
        },
      ]}
      quickFacts={[
        { label: "Scientific name", value: "Pedetes capensis" },
        { label: "Class", value: "Mammalia (rodent)" },
        { label: "Not a", value: "Hare or kangaroo (convergent look)" },
        { label: "Diet", value: "Herbivore (grasses, roots, bulbs)" },
        { label: "Movement", value: "Hops on long hind legs" },
        { label: "Shelter", value: "Burrows (active by night)" },
        { label: "Curiosity", value: "Fur is biofluorescent under UV" },
        { label: "Range", value: "Southern & eastern Africa" },
      ]}
      relatedLinks={[
        { label: "Kangaroo Profile", href: "/animals/kangaroo", description: "The marsupial it resembles" },
        { label: "Capybara Profile", href: "/animals/capybara", description: "The world's largest rodent" },
        { label: "Meerkat Profile", href: "/animals/meerkat", description: "Another burrowing African mammal" },
        { label: "Fauna by Continent", href: "/fauna/continents", description: "African fauna in context" },
        { label: "Mammal Encyclopedia", href: "/animal-encyclopedia/mammals" },
      ]}
    />
  );
}
