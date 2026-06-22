import type { Metadata } from "next";
import AnimalProfileLayout from "@/components/AnimalProfileLayout";
import { ANIMAL_SOURCES } from "@/lib/educational/animal-sources";
import { getAnimalGalleryImages, getAnimalImage, getAnimalOgImage } from "@/lib/images/animal-images";
import { buildArticleMetadata } from "@/lib/metadata";

const PATH = "/animals/boxfish";
const TITLE = "Boxfish — Profile, the Boxy, Armoured Reef Fish (and Its Toxic Defense)";
const DESC =
  "Explore boxfish (family Ostraciidae): rigid, box-shaped reef fish encased in bony armour that swim with whirring fins — and can release a toxin into the water when stressed.";

export const metadata: Metadata = buildArticleMetadata({
  title: TITLE,
  description: DESC,
  path: PATH,
  publishedTime: "2026-06-22",
  modifiedTime: "2026-06-22",
  ogImage: getAnimalOgImage("boxfish"),
});

export default function BoxfishPage() {
  return (
    <AnimalProfileLayout
      commonName="Boxfish"
      scientificName="family Ostraciidae"
      pageTitle={TITLE}
      description={DESC}
      path={PATH}
      parentCategory="Fish"
      parentCategoryHref="/animal-encyclopedia/fish"
      tags={["Fish", "Coral reef", "Marine"]}
      image={getAnimalImage("boxfish") ?? undefined}
      galleryImages={getAnimalGalleryImages("boxfish")}
      sources={ANIMAL_SOURCES.boxfish}
      publishedDate="2026-06-22"
      modifiedDate="2026-06-22"
      overview={
        <>
          <p>
            Boxfish (family Ostraciidae) are among the most peculiar fish on the reef: their bodies
            are encased in a rigid, box-like shell of fused, bony plates (a &ldquo;carapace&rdquo;),
            so that — apart from the eyes, mouth, fins, and tail — they can barely bend at all. Often
            brightly coloured and spotted, like the well-known yellow boxfish, they look like little
            swimming boxes. Close relatives called cowfish add a pair of horn-like spines above the
            eyes.
          </p>
          <p>
            Because their armour makes them stiff, boxfish can&apos;t swim with the usual side-to-side
            body flexing; instead they motor along by rapidly whirring their small fins, hovering and
            manoeuvring with surprising precision. And if seriously stressed, some boxfish can release
            a toxin into the surrounding water.
          </p>
          <p>
            <strong>Note:</strong> &ldquo;boxfish&rdquo; covers a family (including cowfish and
            trunkfish); details here describe the group broadly. Treat general statements as
            approximate and verify against authoritative sources.
          </p>
        </>
      }
      habitat={
        <p>
          Boxfish live mainly on tropical and subtropical coral and rocky reefs and in seagrass beds,
          especially across the Indo-Pacific, with some species in the Atlantic. They tend to stay in
          shallow, sheltered reef areas, where they potter about over the bottom and around coral
          searching for food.
        </p>
      }
      diet={
        <p>
          Boxfish are omnivores that feed on a mix of small reef life — algae, sponges, worms, small
          crustaceans, molluscs, and other invertebrates picked from the bottom. Some can blow jets
          of water at the sand to uncover buried prey. Their small mouths and careful, hovering
          movement suit a slow, methodical search for small food across the reef.
        </p>
      }
      behavior={
        <p>
          The boxfish&apos;s rigid armoured box is both its protection and the reason for its unusual
          swimming. Unable to flex its body, it relies on rapidly fluttering fins for propulsion and
          steering, giving it a hovering, almost hummingbird-like style of movement that is
          remarkably stable. The bony shell deters many would-be predators, and boxfish are typically
          slow, deliberate, and seemingly unbothered as they cruise the reef. As a chemical backup,
          some boxfish can secrete a toxin (sometimes called ostracitoxin) into the water when badly
          stressed or threatened — a defence that can deter or harm predators, and that is well known
          to aquarists because a stressed boxfish can poison the water in a tank. Bright colours and
          spots may serve as a warning of this unpalatability.
        </p>
      }
      humanInteraction={
        <p>
          Boxfish are popular with divers and underwater photographers for their comical, boxy looks,
          and some are kept by specialist marine aquarists — though with caution, since a stressed
          boxfish can release toxin and poison an entire aquarium. Their stiff, efficient,
          stable swimming has even inspired engineers and designers. They depend on healthy reefs, so
          reef degradation is the main concern, while most species remain reasonably common. Consult
          authoritative sources for status.
        </p>
      }
      faqs={[
        {
          question: "Why is a boxfish shaped like a box?",
          answer:
            "Because its body is encased in a rigid shell of fused, bony plates — a carapace — that forms a roughly box-shaped (or triangular) armoured shell around it. Only the eyes, mouth, fins, and tail stick out and can move. This bony 'box' protects the fish from many predators, but it also means the boxfish can't bend its body to swim normally.",
        },
        {
          question: "How does a boxfish swim if it can't bend?",
          answer:
            "It uses its fins instead of its body. Since the armoured shell keeps it stiff, a boxfish can't flex side to side like most fish; instead it rapidly whirs its small fins to propel and steer itself, hovering and manoeuvring with great precision. The result is a slow but very stable, almost hovering style of swimming.",
        },
        {
          question: "Are boxfish poisonous?",
          answer:
            "Some can release a toxin. When badly stressed or threatened, certain boxfish secrete a poison (ostracitoxin) into the surrounding water as a defence, which can deter or harm predators. This is well known to aquarists, because a stressed boxfish can poison the water in a closed tank — so they need careful, low-stress handling.",
        },
        {
          question: "What's the difference between a boxfish, a cowfish, and a trunkfish?",
          answer:
            "They're all members of the same family (Ostraciidae) and share the rigid, armoured box-like body. 'Trunkfish' and 'boxfish' are often used interchangeably for the group, while 'cowfish' refers to species with a pair of horn-like spines above the eyes (and sometimes near the tail). So cowfish are simply horned boxfish within the same family.",
        },
      ]}
      quickFacts={[
        { label: "Group", value: "Family Ostraciidae (boxfish/trunkfish/cowfish)" },
        { label: "Class", value: "Actinopterygii (ray-finned fish)" },
        { label: "Body", value: "Rigid box of fused bony plates" },
        { label: "Swimming", value: "Whirring fins (body can't flex)" },
        { label: "Defence", value: "Bony armour; some release a toxin when stressed" },
        { label: "Diet", value: "Omnivore (algae & small invertebrates)" },
        { label: "Cowfish", value: "Boxfish with horn-like eye spines" },
        { label: "Habitat", value: "Coral & rocky reefs (esp. Indo-Pacific)" },
      ]}
      relatedLinks={[
        { label: "Pufferfish Profile", href: "/animals/pufferfish", description: "A related fish with its own chemical defence" },
        { label: "Triggerfish Profile", href: "/animals/triggerfish", description: "Another bold reef fish" },
        { label: "Butterflyfish Profile", href: "/animals/butterflyfish", description: "Another colourful reef fish" },
        { label: "Ocean fauna by depth", href: "/fauna/ocean", description: "Reef habitats in context" },
        { label: "Fish Encyclopedia", href: "/animal-encyclopedia/fish" },
      ]}
    />
  );
}
