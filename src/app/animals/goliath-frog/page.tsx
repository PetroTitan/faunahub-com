import type { Metadata } from "next";
import AnimalProfileLayout from "@/components/AnimalProfileLayout";
import { ANIMAL_SOURCES } from "@/lib/educational/animal-sources";
import { getAnimalGalleryImages, getAnimalImage, getAnimalOgImage } from "@/lib/images/animal-images";
import { buildArticleMetadata } from "@/lib/metadata";

const PATH = "/animals/goliath-frog";
const TITLE = "Goliath Frog — Profile, the World's Largest Frog & Conservation";
const DESC =
  "Explore the goliath frog (Conraua goliath): the largest frog on Earth, a powerful river-dwelling amphibian of West-Central Africa that even builds its own nest ponds. Endangered.";

export const metadata: Metadata = buildArticleMetadata({
  title: TITLE,
  description: DESC,
  path: PATH,
  publishedTime: "2026-06-21",
  modifiedTime: "2026-06-21",
  ogImage: getAnimalOgImage("goliath-frog"),
});

export default function GoliathFrogPage() {
  return (
    <AnimalProfileLayout
      commonName="Goliath Frog"
      scientificName="Conraua goliath"
      pageTitle={TITLE}
      description={DESC}
      path={PATH}
      parentCategory="Reptiles & Amphibians"
      parentCategoryHref="/animal-encyclopedia/reptiles"
      tags={["Amphibian", "Frog", "Africa"]}
      image={getAnimalImage("goliath-frog") ?? undefined}
      galleryImages={getAnimalGalleryImages("goliath-frog")}
      sources={ANIMAL_SOURCES["goliath-frog"]}
      publishedDate="2026-06-21"
      modifiedDate="2026-06-21"
      overview={
        <>
          <p>
            The goliath frog (<em>Conraua goliath</em>) is the largest frog in the world — a
            giant amphibian that can grow to around a foot (30 cm) in body length and weigh
            as much as a small cat. Found only in a small region of West-Central Africa, it
            is a powerful, muscular frog of fast-flowing rainforest rivers and waterfalls.
            For all its size, the adult goliath frog is essentially voiceless, lacking the
            vocal sac that lets most frogs call.
          </p>
          <p>
            Despite its bulk, the goliath frog is shy and wary, with excellent eyesight and
            a remarkable leaping ability — and, as scientists discovered, it even engineers
            its own breeding pools.
          </p>
          <p>
            <strong>Conservation note:</strong> the goliath frog is Endangered, with a small
            range and declining numbers from habitat loss and hunting. Verify current status
            at iucnredlist.org.
          </p>
        </>
      }
      habitat={
        <p>
          Goliath frogs live only in a narrow band of fast-flowing rivers, streams, and
          waterfalls within dense rainforest in parts of Cameroon and Equatorial Guinea.
          They need clean, oxygen-rich, fast water with rocky areas, and their dependence on
          this very specific habitat makes them especially vulnerable to disturbance.
        </p>
      }
      diet={
        <p>
          Goliath frogs are carnivores that eat insects, crustaceans, worms, fish, smaller
          amphibians, and other small animals, ambushing prey in and around the water. Their
          large size lets them tackle relatively big prey, and their powerful legs help them
          lunge and leap to catch food or escape danger.
        </p>
      }
      behavior={
        <p>
          Goliath frogs are wary and quick to dive into rushing water when alarmed, and they
          are impressive jumpers, able to leap several times their body length. Remarkably,
          research has shown that goliath frogs build their own nests: they move heavy rocks
          to clear and dam small pools at the river&apos;s edge, creating sheltered ponds
          where eggs and tadpoles are protected from the current and predators — a rare case
          of an amphibian acting as a builder, and possibly a reason these frogs grew so
          large and strong.
        </p>
      }
      humanInteraction={
        <p>
          The goliath frog is a famous symbol of African biodiversity but is in serious
          trouble: it is hunted for food and for the pet and collection trade, and its
          rainforest-river habitat is being lost to logging, farming, and dam building.
          Combined with its small range and slow recovery, this has made it Endangered.
          Protecting its rivers and forests is essential. Consult the IUCN Red List for
          current status.
        </p>
      }
      faqs={[
        {
          question: "How big is the goliath frog?",
          answer:
            "It is the largest frog in the world, reaching roughly a foot (about 30 cm) in body length and weighing as much as a small cat — far bigger than the frogs most people know. Its enormous size and muscular build make it unmistakable among amphibians.",
        },
        {
          question: "Does the goliath frog croak?",
          answer:
            "Not really. Despite its size, the adult goliath frog lacks a vocal sac and is essentially voiceless, so it doesn't produce the loud calls typical of many frogs. It may make occasional faint sounds, but it is famously quiet for such a large amphibian.",
        },
        {
          question: "Do goliath frogs really build nests?",
          answer:
            "Yes — and it's remarkable. Scientists found that goliath frogs move heavy rocks to clear and dam small pools at the edges of rivers, creating sheltered nest ponds where their eggs and tadpoles are safe from the strong current and predators. This rock-moving 'nest building' is unusual among amphibians and may help explain their great size and strength.",
        },
        {
          question: "Why is the goliath frog endangered?",
          answer:
            "It has a very small range in West-Central Africa and faces heavy hunting (for food and the trade), along with the loss of its specialised fast-river rainforest habitat to logging, farming, and dams. These pressures, plus slow recovery, have made the goliath frog Endangered; current status should be checked against the IUCN Red List.",
        },
      ]}
      quickFacts={[
        { label: "Scientific name", value: "Conraua goliath" },
        { label: "Class", value: "Amphibia (frog)" },
        { label: "Claim to fame", value: "World's largest frog (~30 cm)" },
        { label: "Voice", value: "Essentially voiceless (no vocal sac)" },
        { label: "Diet", value: "Carnivore (insects to small vertebrates)" },
        { label: "Special trait", value: "Builds its own nest pools" },
        { label: "Range", value: "Cameroon & Equatorial Guinea" },
        { label: "IUCN Status", value: "Endangered (verify)" },
      ]}
      relatedLinks={[
        { label: "Bullfrog Profile", href: "/animals/bullfrog", description: "Another large frog" },
        { label: "Poison Dart Frog Profile", href: "/animals/poison-dart-frog", description: "A tiny, toxic contrast" },
        { label: "Glass Frog Profile", href: "/animals/glass-frog", description: "A see-through tree frog" },
        { label: "Endangered Animals", href: "/endangered-animals", description: "IUCN Red List categories" },
        { label: "Reptiles & Amphibians", href: "/animal-encyclopedia/reptiles" },
      ]}
    />
  );
}
