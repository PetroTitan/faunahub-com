import type { Metadata } from "next";
import AnimalProfileLayout from "@/components/AnimalProfileLayout";
import { ANIMAL_SOURCES } from "@/lib/educational/animal-sources";
import { getAnimalGalleryImages, getAnimalImage, getAnimalOgImage } from "@/lib/images/animal-images";
import { buildArticleMetadata } from "@/lib/metadata";

const PATH = "/animals/triggerfish";
const TITLE = "Triggerfish — Profile, Locking Spine, Diet & Behavior";
const DESC =
  "Explore triggerfish (family Balistidae): boldly patterned reef fish with a locking dorsal spine and powerful teeth — clever foragers, and famously fierce nest-guarders.";

export const metadata: Metadata = buildArticleMetadata({
  title: TITLE,
  description: DESC,
  path: PATH,
  publishedTime: "2026-06-21",
  modifiedTime: "2026-06-21",
  ogImage: getAnimalOgImage("triggerfish"),
});

export default function TriggerfishPage() {
  return (
    <AnimalProfileLayout
      commonName="Triggerfish"
      scientificName="Balistoides conspicillum"
      pageTitle={TITLE}
      description={DESC}
      path={PATH}
      parentCategory="Fish"
      parentCategoryHref="/animal-encyclopedia/fish"
      tags={["Fish", "Reef", "Tropical"]}
      image={getAnimalImage("triggerfish") ?? undefined}
      galleryImages={getAnimalGalleryImages("triggerfish")}
      sources={ANIMAL_SOURCES.triggerfish}
      publishedDate="2026-06-21"
      modifiedDate="2026-06-21"
      overview={
        <>
          <p>
            Triggerfish (family Balistidae) are boldly patterned, deep-bodied reef fish of
            tropical and subtropical seas, famous for the clever &ldquo;trigger&rdquo;
            mechanism that gives them their name. They have a stout first dorsal spine that
            can be locked upright by a second, smaller spine acting like a trigger; when
            wedged into a crevice with the spine raised, a triggerfish becomes very hard for a
            predator to pull out. The clown triggerfish
            (<em>Balistoides conspicillum</em>), shown here, with its big white spots and
            yellow markings, is among the most striking.
          </p>
          <p>
            Triggerfish are intelligent, powerful, and resourceful foragers — and some are
            notoriously bold defenders of their nests.
          </p>
          <p>
            <strong>Note:</strong> the family is varied; details here use the clown
            triggerfish as a reference. Treat general statements as approximate and verify
            against authoritative sources.
          </p>
        </>
      }
      habitat={
        <p>
          Triggerfish live on tropical and subtropical coral and rocky reefs around the
          world, mostly in warm, shallow, sunlit water, though some range into deeper reef
          areas. The clown triggerfish inhabits clear outer-reef slopes of the Indo-Pacific.
          They shelter in crevices and holes in the reef, where the locking spine helps keep
          them safe.
        </p>
      }
      diet={
        <p>
          Triggerfish are carnivores with strong jaws and teeth built for crushing hard-shelled
          prey: sea urchins, crabs, molluscs, and other invertebrates. Many are resourceful
          feeders — some blow jets of water to flip spiny sea urchins over and attack the
          softer underside, or bite off chunks of prey too tough to swallow whole. This
          power and ingenuity makes them important predators on the reef.
        </p>
      }
      behavior={
        <p>
          A triggerfish swims with a distinctive undulating motion of its dorsal and anal
          fins, keeping its tail in reserve for bursts of speed. The locking-spine defence is
          its signature feature. Triggerfish are also known for their nesting behaviour:
          many guard eggs laid in a nest on the seabed, and some larger species — such as the
          titan triggerfish — will fiercely defend a cone-shaped territory above the nest,
          driving off intruders (including divers) that stray too close. They are intelligent
          and can be quite bold.
        </p>
      }
      humanInteraction={
        <p>
          Triggerfish are popular with divers and in the aquarium trade for their colour and
          character, and some are caught for food. Most are harmless if left alone, but
          nesting individuals of a few large species can deliver a serious bite if a diver
          enters their guarded territory, so giving nesting triggerfish space is wise. Most
          species are widespread. Consult WoRMS and the IUCN Red List for species-specific
          status.
        </p>
      }
      faqs={[
        {
          question: "Why is it called a triggerfish?",
          answer:
            "Because of its spine-locking mechanism. A triggerfish can raise a stout first dorsal spine and lock it in place with a smaller second spine that works like a trigger. Wedged into a crevice with the spine up, the fish is very hard to remove; pressing the 'trigger' spine releases the lock. This clever defence gives the family its name.",
        },
        {
          question: "What do triggerfish eat?",
          answer:
            "Triggerfish are carnivores that specialise in hard-shelled prey — sea urchins, crabs, molluscs, and other invertebrates — which they crush with powerful jaws and teeth. Some are remarkably resourceful, for example squirting water to flip over spiny sea urchins so they can attack the softer underside.",
        },
        {
          question: "Are triggerfish dangerous to divers?",
          answer:
            "Usually not, but it depends. Most triggerfish are harmless if left alone. However, some large species — notably the titan triggerfish — aggressively guard a nest and will bite to defend it, sometimes chasing divers who get too close. The simple solution is to give a nesting triggerfish a wide berth.",
        },
        {
          question: "How do triggerfish swim?",
          answer:
            "Triggerfish move mainly by rippling their dorsal and anal fins in an undulating motion, which lets them hover and manoeuvre precisely around the reef. They hold their tail fin in reserve and use it for a quick burst of speed when they need to escape or chase.",
        },
      ]}
      quickFacts={[
        { label: "Group", value: "Family Balistidae" },
        { label: "Reference species", value: "Balistoides conspicillum (clown triggerfish)" },
        { label: "Class", value: "Actinopterygii (ray-finned fish)" },
        { label: "Signature trait", value: "Lockable 'trigger' dorsal spine" },
        { label: "Diet", value: "Carnivore (hard-shelled invertebrates)" },
        { label: "Behaviour", value: "Clever forager; fierce nest-guarder" },
        { label: "Habitat", value: "Tropical reefs worldwide" },
        { label: "Status", value: "Mostly widespread (verify by species)" },
      ]}
      relatedLinks={[
        { label: "Pufferfish Profile", href: "/animals/pufferfish", description: "A close relative with its own defence" },
        { label: "Wrasse Profile", href: "/animals/wrasse", description: "Another colourful reef fish" },
        { label: "Parrotfish Profile", href: "/animals/parrotfish", description: "A reef grazer" },
        { label: "Ocean fauna by depth", href: "/fauna/ocean", description: "Reef habitats in context" },
        { label: "Fish Encyclopedia", href: "/animal-encyclopedia/fish" },
      ]}
    />
  );
}
