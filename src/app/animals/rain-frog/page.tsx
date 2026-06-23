import type { Metadata } from "next";
import AnimalProfileLayout from "@/components/AnimalProfileLayout";
import { ANIMAL_SOURCES } from "@/lib/educational/animal-sources";
import { getAnimalGalleryImages, getAnimalImage, getAnimalOgImage } from "@/lib/images/animal-images";
import { buildArticleMetadata } from "@/lib/metadata";

const PATH = "/animals/rain-frog";
const TITLE = "Rain Frog — Profile of Africa's Round, Squeaking Burrowers";
const DESC =
  "Meet the rain frogs (Breviceps): plump, round-bodied African burrowing frogs that can't really swim or leap, squeak when alarmed, and hatch straight into froglets with no free-swimming tadpole stage.";

export const metadata: Metadata = buildArticleMetadata({
  title: TITLE,
  description: DESC,
  path: PATH,
  publishedTime: "2026-06-23",
  modifiedTime: "2026-06-23",
  ogImage: getAnimalOgImage("rain-frog"),
});

export default function RainFrogPage() {
  return (
    <AnimalProfileLayout
      commonName="Rain Frog"
      scientificName="Breviceps spp."
      pageTitle={TITLE}
      description={DESC}
      path={PATH}
      parentCategory="Reptiles & Amphibians"
      parentCategoryHref="/animal-encyclopedia/reptiles"
      tags={["Amphibian", "Frog", "Africa", "Burrowing"]}
      image={getAnimalImage("rain-frog") ?? undefined}
      galleryImages={getAnimalGalleryImages("rain-frog")}
      sources={ANIMAL_SOURCES["rain-frog"]}
      publishedDate="2026-06-23"
      modifiedDate="2026-06-23"
      overview={
        <>
          <p>
            Rain frogs (genus <em>Breviceps</em>) are small, comically round African frogs with short legs,
            a plump body, and a flattened, often grumpy-looking face. They are dedicated burrowers, spending
            most of their lives underground and emerging — often after rain — to feed and breed, which is how
            they get their name.
          </p>
          <p>
            Their globe-like shape comes at a cost: rain frogs are poor swimmers and can barely jump,
            tending to walk or shuffle instead. When alarmed, several species inflate themselves into a tight
            ball and give a high, squeaky &ldquo;cry&rdquo; — a sound that has made the desert rain frog an
            internet favourite.
          </p>
          <p>
            <strong>Note:</strong> there are many rain-frog species across southern Africa; details here
            describe the group broadly.
          </p>
        </>
      }
      habitat={
        <p>
          Rain frogs live in southern Africa across a range of habitats, from coastal dunes and fynbos to
          grassland, scrub, and forest floor. They are fossorial — spending much of their time buried in
          soil or sand — and depend on diggable ground and seasonal moisture. Some species are adapted to
          surprisingly dry, sandy country.
        </p>
      }
      diet={
        <p>
          Rain frogs feed on small invertebrates such as ants, termites, beetles, and other tiny insects,
          which they snap up at or near the surface during their brief spells above ground, especially when
          rain brings prey out.
        </p>
      }
      behavior={
        <p>
          Rain frogs spend long periods underground and surface mainly in damp conditions. Their breeding is
          unusual in two ways. First, because the male is so small and round-bodied that he cannot grip the
          larger female in the normal frog embrace, the female produces a sticky secretion that effectively
          glues the pair together until mating is complete. Second, the eggs are laid in a moist underground
          chamber and develop directly into tiny froglets — there is no free-swimming tadpole stage and no
          need for open water. When threatened, a rain frog may puff up into a rigid ball and squeak.
        </p>
      }
      humanInteraction={
        <p>
          Rain frogs are harmless and have become well known through viral videos of their indignant squeak.
          As burrowing amphibians they can be sensitive to habitat loss, coastal development, and changes in
          land use; many species are widespread while some are localised. Consult the IUCN Red List for the
          status of a particular species.
        </p>
      }
      faqs={[
        {
          question: "Why is it called a rain frog?",
          answer:
            "Because these burrowing frogs spend most of their lives underground and tend to emerge to feed and breed in connection with rain and damp weather. Their appearances are closely tied to moisture, hence 'rain frog'.",
        },
        {
          question: "Why do rain frogs squeak?",
          answer:
            "When alarmed, many rain frogs inflate their round bodies and give a high-pitched squeak or chirp as a defence, which can startle a predator. The desert rain frog's indignant little 'cry' has made it a popular internet animal.",
        },
        {
          question: "Do rain frogs have tadpoles?",
          answer:
            "No free-swimming tadpoles. Rain frogs lay their eggs in a moist underground chamber, and the young develop directly into tiny froglets inside the eggs — so they don't need an open pond, and there is no aquatic tadpole stage.",
        },
        {
          question: "Why do mating rain frogs get 'glued' together?",
          answer:
            "The male is so small and round that he can't properly clasp the larger female in the usual frog grip. To keep the pair together during mating, the female secretes a sticky substance that glues the male to her back until the process is finished.",
        },
      ]}
      quickFacts={[
        { label: "Group", value: "Genus Breviceps (many species)" },
        { label: "Class", value: "Amphibia" },
        { label: "Family", value: "Brevicipitidae (rain frogs)" },
        { label: "Range", value: "Southern Africa" },
        { label: "Habitat", value: "Burrows in soil/sand; emerges after rain" },
        { label: "Development", value: "Direct (froglets, no free tadpoles)" },
        { label: "Defence", value: "Inflates into a ball and squeaks" },
        { label: "Movement", value: "Walks/shuffles; can't swim or jump well" },
      ]}
      relatedLinks={[
        { label: "Spadefoot Toad Profile", href: "/animals/spadefoot-toad", description: "Another burrowing amphibian" },
        { label: "Tomato Frog Profile", href: "/animals/tomato-frog", description: "Another round, plump frog" },
        { label: "Midwife Toad Profile", href: "/animals/midwife-toad", description: "A frog with unusual breeding habits" },
        { label: "Fauna by Continent", href: "/fauna/continents", description: "African amphibians in context" },
        { label: "Reptiles & Amphibians", href: "/animal-encyclopedia/reptiles" },
      ]}
    />
  );
}
