import type { Metadata } from "next";
import AnimalProfileLayout from "@/components/AnimalProfileLayout";
import { ANIMAL_SOURCES } from "@/lib/educational/animal-sources";
import { getAnimalGalleryImages, getAnimalImage, getAnimalOgImage } from "@/lib/images/animal-images";
import { buildArticleMetadata } from "@/lib/metadata";

const PATH = "/animals/caracal";
const TITLE = "Caracal — Profile, the Tufted-Eared Cat & Its Astonishing Leap";
const DESC =
  "Explore the caracal (Caracal caracal): a sleek, tawny wild cat known for its long black ear tufts and a spectacular vertical leap used to snatch birds from the air.";

export const metadata: Metadata = buildArticleMetadata({
  title: TITLE,
  description: DESC,
  path: PATH,
  publishedTime: "2026-06-21",
  modifiedTime: "2026-06-21",
  ogImage: getAnimalOgImage("caracal"),
});

export default function CaracalPage() {
  return (
    <AnimalProfileLayout
      commonName="Caracal"
      scientificName="Caracal caracal"
      pageTitle={TITLE}
      description={DESC}
      path={PATH}
      parentCategory="Mammals"
      parentCategoryHref="/animal-encyclopedia/mammals"
      tags={["Mammal", "Wild cat", "Predator"]}
      image={getAnimalImage("caracal") ?? undefined}
      galleryImages={getAnimalGalleryImages("caracal")}
      sources={ANIMAL_SOURCES.caracal}
      publishedDate="2026-06-21"
      modifiedDate="2026-06-21"
      overview={
        <>
          <p>
            The caracal (<em>Caracal caracal</em>) is a medium-sized wild cat with a sleek,
            muscular build, a short reddish-tan coat, and — its trademark — long, black, tufted
            ears tipped with tassels of dark hair. Found across Africa, the Middle East, and
            into Central and South Asia, it is a powerful, agile hunter of drylands and is
            sometimes called the &ldquo;desert lynx,&rdquo; though it is not a true lynx.
          </p>
          <p>
            The caracal is famous above all for its leaping ability: it can spring high into the
            air from a standstill to knock down birds taking flight, one of the most
            spectacular hunting feats among the cats.
          </p>
          <p>
            <strong>Note:</strong> details here cover the caracal as a species; treat general
            statements as approximate and verify against authoritative sources.
          </p>
        </>
      }
      habitat={
        <p>
          Caracals live across a wide range of dry habitats — savanna, scrubland, semi-desert,
          dry woodland, and rocky hills — throughout much of Africa, the Arabian Peninsula and
          Middle East, and into Central and South Asia. They favour areas with some cover for
          stalking and tend to avoid true sandy desert and dense forest. They are adaptable and
          can persist near farmland.
        </p>
      }
      diet={
        <p>
          Caracals are carnivores that hunt a range of prey, especially birds, rodents, hares,
          hyraxes, and small antelope, taking larger prey than their size might suggest. They
          hunt mostly by stealth — stalking close, then exploding into a sprint or a high leap —
          and are renowned for plucking birds out of the air with a vertical jump. Powerful hind
          legs and quick reflexes make them very effective ambush predators.
        </p>
      }
      behavior={
        <p>
          Caracals are mostly solitary and largely active around dawn, dusk, and at night,
          resting in cover or rocky shelters during the heat of the day. They are territorial,
          marking and defending home ranges, and they are superb athletes: besides their famous
          leaps, they are fast sprinters and good climbers. The long ear tufts may help with
          communication and with pinpointing sound, and the cat&apos;s large, mobile ears give
          it sharp hearing for locating prey. Females raise their kittens alone in a sheltered
          den.
        </p>
      }
      humanInteraction={
        <p>
          Caracals are widespread and not currently considered globally threatened, though they
          face persecution where they are blamed for killing livestock, along with habitat loss
          and hunting in places. Historically they were even tamed and used to hunt birds. As a
          wild predator, a caracal is best observed at a distance and not approached or kept as
          a pet. Consult the IUCN Red List for current status.
        </p>
      }
      faqs={[
        {
          question: "What are the caracal's ear tufts for?",
          answer:
            "The long black tufts of hair on the caracal's ears are thought to aid communication — flicking and twitching the ears to signal other caracals — and may help with detecting and locating sounds. Combined with large, highly mobile ears, they give the caracal both keen hearing and an expressive 'face' for signalling. Their exact function isn't fully settled.",
        },
        {
          question: "How high can a caracal jump?",
          answer:
            "Remarkably high. Caracals can leap several metres straight up from a standstill, using powerful hind legs to spring into the air and knock down birds as they take flight. This vertical-leap hunting is one of the caracal's most famous skills and lets it catch prey that most other cats can't.",
        },
        {
          question: "Is a caracal a type of lynx?",
          answer:
            "Not really. The caracal is sometimes nicknamed 'desert lynx' for its tufted ears, but it isn't a true lynx — it belongs to its own genus (Caracal) and is more closely related to cats like the African golden cat and the serval. The lynx-like ear tufts are a resemblance, not a sign of close kinship.",
        },
        {
          question: "Are caracals dangerous to people?",
          answer:
            "Caracals are powerful wild predators, but they are shy of humans and attacks on people are very rare; they generally avoid us. They can, however, prey on small livestock, which brings them into conflict with farmers. As with any wild cat, they should not be approached, fed, or kept as pets, and are best appreciated from a distance.",
        },
      ]}
      quickFacts={[
        { label: "Scientific name", value: "Caracal caracal" },
        { label: "Class", value: "Mammalia (wild cat)" },
        { label: "Signature trait", value: "Long black ear tufts" },
        { label: "Special skill", value: "High vertical leap (catches birds in air)" },
        { label: "Diet", value: "Carnivore (birds, rodents, hares, hyraxes)" },
        { label: "Activity", value: "Mainly nocturnal/crepuscular; solitary" },
        { label: "Range", value: "Africa, Middle East, S/C Asia" },
        { label: "Status", value: "Widespread (verify)" },
      ]}
      relatedLinks={[
        { label: "Cheetah Profile", href: "/animals/cheetah", description: "Another fast African cat" },
        { label: "Lion Profile", href: "/animals/lion", description: "A big African cat" },
        { label: "Fennec Fox Profile", href: "/animals/fennec-fox", description: "Another big-eared dryland hunter" },
        { label: "Fauna by Continent", href: "/fauna/continents", description: "African dryland fauna in context" },
        { label: "Mammals Encyclopedia", href: "/animal-encyclopedia/mammals" },
      ]}
    />
  );
}
