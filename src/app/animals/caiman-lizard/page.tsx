import type { Metadata } from "next";
import AnimalProfileLayout from "@/components/AnimalProfileLayout";
import { ANIMAL_SOURCES } from "@/lib/educational/animal-sources";
import { getAnimalGalleryImages, getAnimalImage, getAnimalOgImage } from "@/lib/images/animal-images";
import { buildArticleMetadata } from "@/lib/metadata";

const PATH = "/animals/caiman-lizard";
const TITLE = "Caiman Lizard — Profile, the Snail-Crushing Swimmer of the Amazon";
const DESC =
  "Explore the caiman lizard (Dracaena guianensis): a large, semi-aquatic South American lizard with crocodile-like armoured scales and powerful jaws built for crushing snails.";

export const metadata: Metadata = buildArticleMetadata({
  title: TITLE,
  description: DESC,
  path: PATH,
  publishedTime: "2026-06-21",
  modifiedTime: "2026-06-21",
  ogImage: getAnimalOgImage("caiman-lizard"),
});

export default function CaimanLizardPage() {
  return (
    <AnimalProfileLayout
      commonName="Caiman Lizard"
      scientificName="Dracaena guianensis"
      pageTitle={TITLE}
      description={DESC}
      path={PATH}
      parentCategory="Reptiles & Amphibians"
      parentCategoryHref="/animal-encyclopedia/reptiles"
      tags={["Reptile", "Lizard", "Amazon"]}
      image={getAnimalImage("caiman-lizard") ?? undefined}
      galleryImages={getAnimalGalleryImages("caiman-lizard")}
      sources={ANIMAL_SOURCES["caiman-lizard"]}
      publishedDate="2026-06-21"
      modifiedDate="2026-06-21"
      overview={
        <>
          <p>
            The caiman lizard (<em>Dracaena guianensis</em>) is a large, robust, semi-aquatic
            lizard of the swamps and flooded forests of the Amazon basin. It gets its name
            from its resemblance to a caiman or crocodile: rows of raised, bony-looking scales
            (osteoderms) run down its green body and powerful tail, and it swims well, using
            the laterally flattened tail for propulsion. A relative of the tegus, it has a
            reddish or orange head and a stout, muscular build.
          </p>
          <p>
            Its body is built around a very particular diet: caiman lizards are specialists at
            eating hard-shelled prey, above all aquatic snails, which they crush with broad,
            flat teeth and exceptionally strong jaws.
          </p>
          <p>
            <strong>Note:</strong> details here cover the northern caiman lizard; treat
            general statements as approximate and verify against authoritative sources.
          </p>
        </>
      }
      habitat={
        <p>
          Caiman lizards live in the tropical rainforests of northern South America —
          including the Amazon and Orinoco regions — in and around swamps, marshes, flooded
          forest, and slow streams. They are strongly tied to water, basking on branches over
          rivers and dropping in to swim and forage, and they shelter in trees and dense
          waterside vegetation.
        </p>
      }
      diet={
        <p>
          The caiman lizard is a carnivore specialising in hard-shelled aquatic prey,
          especially snails, plus clams, crayfish, and other invertebrates, and it will take
          some other small animals. It plucks a snail from the water, holds it in its jaws,
          and crushes the shell with its powerful flat rear teeth, then uses its tongue and
          jaws to separate the soft body from the shell fragments before swallowing.
        </p>
      }
      behavior={
        <p>
          Caiman lizards are active by day and divide their time between basking, climbing,
          and swimming. They are accomplished swimmers and divers, propelling themselves with
          the strong tail, and can stay underwater for a time while foraging on the bottom for
          snails. Like their tegu relatives they are alert and capable, and when threatened
          they may flee into water, lash with the tail, or bite. Their armoured scales offer
          some protection against predators.
        </p>
      }
      humanInteraction={
        <p>
          Caiman lizards are striking animals sometimes kept in the exotic pet trade (where
          legal), and they have been hunted for their skin in some areas. They depend on
          healthy wetland and flooded-forest habitat and on plentiful snails, so habitat loss
          is the main concern, though they remain reasonably widespread. Consult authoritative
          sources for current status.
        </p>
      }
      faqs={[
        {
          question: "Is a caiman lizard related to crocodiles?",
          answer:
            "No — it just looks the part. The caiman lizard is a true lizard (a relative of the tegus), not a crocodilian. Its name comes from the rows of raised, armoured scales along its back and tail that resemble a caiman's hide, plus its semi-aquatic, swimming lifestyle. The resemblance is superficial, not a sign of close kinship.",
        },
        {
          question: "What does a caiman lizard eat?",
          answer:
            "It specialises in hard-shelled prey, above all aquatic snails, along with clams, crayfish, and other invertebrates. Using broad, flat rear teeth and very strong jaws, it crushes the shell, then separates the soft body from the fragments before swallowing — a feeding style perfectly suited to a snail-rich swamp.",
        },
        {
          question: "Can caiman lizards swim?",
          answer:
            "Yes, very well. Caiman lizards are semi-aquatic, with a laterally flattened tail that propels them through the water, and they readily dive to forage for snails on the bottom. They typically bask on branches over rivers and drop into the water to feed or escape danger.",
        },
        {
          question: "Are caiman lizards dangerous to people?",
          answer:
            "Not really. They are large and have powerful jaws, so a bite could be painful if one were cornered or handled, but caiman lizards are not aggressive toward people and prefer to flee into water. They have no venom and pose no real threat in the wild.",
        },
      ]}
      quickFacts={[
        { label: "Scientific name", value: "Dracaena guianensis" },
        { label: "Class", value: "Reptilia (lizard; tegu relative)" },
        { label: "Look-alike of", value: "Caimans/crocodiles (superficial)" },
        { label: "Diet", value: "Hard-shelled prey (esp. snails)" },
        { label: "Teeth", value: "Broad, flat crushers; strong jaws" },
        { label: "Lifestyle", value: "Semi-aquatic; swims & dives" },
        { label: "Range", value: "Amazon basin, South America" },
        { label: "Status", value: "Verify (wetland-dependent)" },
      ]}
      relatedLinks={[
        { label: "Tegu Profile", href: "/animals/tegu", description: "Its close relative" },
        { label: "Iguana Profile", href: "/animals/iguana", description: "Another large American lizard" },
        { label: "Caiman Profile", href: "/animals/caiman", description: "The crocodilian it resembles" },
        { label: "Fauna by Continent", href: "/fauna/continents", description: "Amazonian fauna in context" },
        { label: "Reptiles & Amphibians", href: "/animal-encyclopedia/reptiles" },
      ]}
    />
  );
}
