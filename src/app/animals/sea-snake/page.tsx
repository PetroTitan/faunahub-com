import type { Metadata } from "next";
import AnimalProfileLayout from "@/components/AnimalProfileLayout";
import { ANIMAL_SOURCES } from "@/lib/educational/animal-sources";
import { getAnimalGalleryImages, getAnimalImage, getAnimalOgImage } from "@/lib/images/animal-images";
import { buildArticleMetadata } from "@/lib/metadata";

const PATH = "/animals/sea-snake";
const TITLE = "Sea Snake — Profile, Paddle Tail, Venom & Behavior";
const DESC =
  "Explore sea snakes (and sea kraits): venomous marine reptiles superbly adapted to ocean life, with paddle-shaped tails — using the banded sea krait. Educational, not first-aid advice.";

export const metadata: Metadata = buildArticleMetadata({
  title: TITLE,
  description: DESC,
  path: PATH,
  publishedTime: "2026-06-21",
  modifiedTime: "2026-06-21",
  ogImage: getAnimalOgImage("sea-snake"),
});

export default function SeaSnakePage() {
  return (
    <AnimalProfileLayout
      commonName="Sea Snake"
      scientificName="Laticauda colubrina"
      pageTitle={TITLE}
      description={DESC}
      path={PATH}
      parentCategory="Reptiles & Amphibians"
      parentCategoryHref="/animal-encyclopedia/reptiles"
      tags={["Reptile", "Snake", "Marine"]}
      image={getAnimalImage("sea-snake") ?? undefined}
      galleryImages={getAnimalGalleryImages("sea-snake")}
      sources={ANIMAL_SOURCES["sea-snake"]}
      publishedDate="2026-06-21"
      modifiedDate="2026-06-21"
      overview={
        <>
          <p>
            Sea snakes are venomous marine reptiles — members of the cobra family (Elapidae) —
            that have adapted superbly to life in the ocean, mostly in the warm waters of the
            Indian and Pacific Oceans. Their most obvious adaptation is a flattened,
            paddle-shaped tail that drives them through the water. The banded sea krait
            (<em>Laticauda colubrina</em>), shown here, is a beautifully banded example. True
            sea snakes spend their whole lives at sea, while sea kraits like this one come
            ashore to rest, digest, and lay eggs.
          </p>
          <p>
            Sea snakes are highly venomous, but they are generally placid and rarely bite
            people; serious incidents are uncommon and usually involve handling or
            entanglement in nets.
          </p>
          <p>
            <strong>Safety note:</strong> this is a general educational profile, not first-aid
            or medical guidance. Sea snakes are venomous and should never be handled; for any
            snakebite, seek professional medical care immediately.
          </p>
        </>
      }
      habitat={
        <p>
          Sea snakes live mainly in the tropical and subtropical Indian and Pacific Oceans,
          around coral reefs, coastal shallows, mangroves, and estuaries. True sea snakes are
          fully marine, while sea kraits divide their time between the sea — where they hunt —
          and nearby land or islands, where they rest and breed. They are absent from the
          Atlantic.
        </p>
      }
      diet={
        <p>
          Sea snakes are carnivores that hunt underwater, mostly for fish and fish eggs; some
          specialise on eels, and the banded sea krait is a notable eel-hunter, probing reef
          crevices for its prey. They use venom to quickly subdue prey before swallowing it
          whole.
        </p>
      }
      behavior={
        <p>
          Sea snakes are remarkably adapted to the sea: besides the paddle tail, they can
          absorb some oxygen through the skin, have a single greatly enlarged lung, and
          possess special glands to get rid of excess salt. They must surface to breathe but
          can dive for long periods. Sea kraits return to land to rest and lay eggs, whereas
          most true sea snakes give birth to live young at sea and never leave the water.
          Despite their potent venom, sea snakes are generally non-aggressive and curious
          rather than dangerous, biting people only rarely.
        </p>
      }
      humanInteraction={
        <p>
          Sea snakes are a wonderful sight for divers, who usually find them calm and even
          inquisitive, but their venom means they should never be touched or provoked — most
          bites happen to fishers handling snakes caught in nets. Some sea snakes are hunted
          for skin and meat, and reef degradation affects them; status varies by species.
          This profile is educational only; for any bite, seek immediate professional medical
          care. Consult authoritative sources for species-specific status.
        </p>
      }
      faqs={[
        {
          question: "Are sea snakes dangerous to people?",
          answer:
            "Sea snakes are highly venomous, but they are generally placid and rarely bite humans. Most encounters — including with divers — are harmless, and serious bites are uncommon, usually involving people handling snakes (for example, fishers untangling them from nets). The simple rule is never to touch or provoke a sea snake.",
        },
        {
          question: "How are sea snakes adapted to ocean life?",
          answer:
            "In several remarkable ways: a flattened, paddle-shaped tail for swimming, the ability to absorb some oxygen through the skin, a single enlarged lung for long dives, and special glands to excrete the excess salt they take in. These adaptations let them live in the sea, surfacing only to breathe.",
        },
        {
          question: "What's the difference between a sea snake and a sea krait?",
          answer:
            "Both are venomous marine elapids, but they differ in lifestyle. True sea snakes are fully aquatic, giving birth to live young at sea and rarely (if ever) coming ashore. Sea kraits, like the banded sea krait, are amphibious — they hunt in the sea but return to land to rest, digest, and lay eggs.",
        },
        {
          question: "What do sea snakes eat?",
          answer:
            "Mostly fish and fish eggs, caught underwater. Some sea snakes specialise on particular prey — for instance, the banded sea krait hunts eels in reef crevices. They use venom to subdue prey quickly before swallowing it whole, the way other elapid snakes do on land.",
        },
      ]}
      quickFacts={[
        { label: "Reference species", value: "Laticauda colubrina (banded sea krait)" },
        { label: "Family", value: "Elapidae (with cobras)" },
        { label: "Class", value: "Reptilia (snake)" },
        { label: "Key adaptation", value: "Paddle-shaped tail; salt glands" },
        { label: "Diet", value: "Carnivore (fish; kraits hunt eels)" },
        { label: "Temperament", value: "Generally placid; rarely bites" },
        { label: "Range", value: "Indian & Pacific Oceans" },
        { label: "Venom", value: "Highly venomous — do not handle" },
      ]}
      relatedLinks={[
        { label: "Cobra Profile", href: "/animals/cobra", description: "A land relative in the same family" },
        { label: "Krait Profile", href: "/animals/krait", description: "Its land-dwelling namesake group" },
        { label: "Sea Turtle Profile", href: "/animals/sea-turtle", description: "Another marine reptile" },
        { label: "Ocean fauna by depth", href: "/fauna/ocean", description: "Reef habitats in context" },
        { label: "Reptiles & Amphibians", href: "/animal-encyclopedia/reptiles" },
      ]}
    />
  );
}
