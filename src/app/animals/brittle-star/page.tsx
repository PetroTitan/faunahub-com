import type { Metadata } from "next";
import AnimalProfileLayout from "@/components/AnimalProfileLayout";
import { ANIMAL_SOURCES } from "@/lib/educational/animal-sources";
import { getAnimalGalleryImages, getAnimalImage, getAnimalOgImage } from "@/lib/images/animal-images";
import { buildArticleMetadata } from "@/lib/metadata";

const PATH = "/animals/brittle-star";
const TITLE = "Brittle Star — Profile, Arm Movement, Regeneration & Habitat";
const DESC =
  "Explore brittle stars (Ophiuroidea): echinoderms with a small central disc and long arms that move by snaking, and that readily shed and regrow arms.";

export const metadata: Metadata = buildArticleMetadata({
  title: TITLE,
  description: DESC,
  path: PATH,
  publishedTime: "2026-09-06",
  modifiedTime: "2026-09-06",
  ogImage: getAnimalOgImage("brittle-star"),
});

export default function BrittleStarPage() {
  return (
    <AnimalProfileLayout
      commonName="Brittle Star"
      scientificName="class Ophiuroidea"
      pageTitle={TITLE}
      description={DESC}
      path={PATH}
      parentCategory="Marine Animals"
      parentCategoryHref="/animal-encyclopedia/marine-animals"
      tags={["Invertebrate","Echinoderm","Seabed"]}
      image={getAnimalImage("brittle-star") ?? undefined}
      galleryImages={getAnimalGalleryImages("brittle-star")}
      sources={ANIMAL_SOURCES["brittle-star"]}
      factsHeaderNote="“Brittle star” covers around two thousand species in the class Ophiuroidea. They are a separate class from the true sea stars (Asteroidea), not a kind of starfish."
      publishedDate="2026-09-06"
      modifiedDate="2026-09-06"
      overview={
        <>
        <p>
          Brittle stars are echinoderms of the class Ophiuroidea. They resemble sea stars at a glance but are a <strong>separate class</strong>, and the difference is easy to see: a brittle star has a small, clearly demarcated central disc with five long, thin, flexible arms attached to it, rather than the broad arms that merge smoothly into the body of a true sea star.
        </p>
        <p>
          The arms are the key to how they live. Where sea stars creep along on tube feet, brittle stars move by snaking their arms in rowing, sinuous strokes, which makes them far faster than most echinoderms.
        </p>
        <p>
          Their name comes from the readiness with which arms break off. This is <strong>autotomy</strong> — a deliberate defence that leaves a predator holding a wriggling arm while the animal escapes — and the lost arm regenerates.
        </p>
        </>
      }
      habitat={
        <>
        <p>
          Brittle stars live in seas worldwide, from intertidal rock pools and coral reefs down to the deep sea, where they are among the most abundant animals on the seafloor. They shelter under rocks, in crevices, among sponges and corals, or buried in sediment, and often occur in extraordinary densities that carpet the seabed.
        </p>
        </>
      }
      diet={
        <>
        <p>
          Feeding varies widely across the group. Many brittle stars are detritivores and scavengers, collecting organic particles from sediment; others are suspension feeders that raise their arms into the current to trap drifting particles in mucus and pass them to the mouth; some are active predators of small animals. The mouth is on the underside of the disc, at the centre of five jaws.
        </p>
        </>
      }
      behavior={
        <>
        <p>
          Brittle stars move surprisingly quickly for echinoderms, rowing with their arms rather than creeping. Most are secretive and nocturnal, hiding by day and emerging at night to feed. Autotomy — shedding an arm under attack — is common and the arm regrows over time. Many species are highly light-sensitive despite having no eyes, and some carry light-detecting structures across the body surface.
        </p>
        </>
      }
      humanInteraction={
        <>
        <p>
          Brittle stars are rarely noticed by the public but are ecologically important, especially in the deep sea where dense beds process organic material reaching the seafloor and provide food for fish and crustaceans. They are also used in research on regeneration and on light detection without eyes. They are not harvested at scale and are not dangerous to people; the main human influences are seabed disturbance and habitat change.
        </p>
        </>
      }
      faqs={[
        {
          question: "Is a brittle star a starfish?",
          answer:
            "No — they are related but belong to different classes. Brittle stars are Ophiuroidea; true sea stars are Asteroidea. The quickest way to tell them apart is the body plan: a brittle star has a small, sharply defined central disc with thin whip-like arms, while a sea star's thicker arms merge gradually into the body.",
        },
        {
          question: "Why are they called brittle stars?",
          answer:
            "Because their arms break off easily — and deliberately. Autotomy lets a brittle star sacrifice an arm to a predator and escape while the detached, still-moving arm distracts it. The lost arm then regenerates over time.",
        },
        {
          question: "How do brittle stars move?",
          answer:
            "By snaking their arms in rowing strokes, pushing the body along. This is quite different from sea stars, which creep on rows of tube feet, and it makes brittle stars considerably faster than most other echinoderms.",
        },
        {
          question: "Where do brittle stars live?",
          answer:
            "In seas all over the world, from intertidal pools and coral reefs to the deep ocean floor. They are especially abundant in the deep sea, where they can occur in enormous densities, and they typically shelter under rocks, in crevices or buried in sediment.",
        },
      ]}
      quickFacts={[
        { label: "Class", value: "Ophiuroidea — about 2,000 species" },
        { label: "Phylum", value: "Echinodermata" },
        { label: "Not", value: "A true sea star (Asteroidea)" },
        { label: "Body plan", value: "Small central disc; long thin arms" },
        { label: "Movement", value: "Rowing, snaking arm strokes" },
        { label: "Defence", value: "Autotomy — arms shed and regrow" },
        { label: "Habitat", value: "Intertidal to deep sea, worldwide" },
        { label: "Feeding", value: "Detritus, suspension feeding, predation" },
      ]}
      relatedLinks={[
        { label: "Starfish Profile", href: "/animals/starfish", description: "True sea stars, for contrast" },
        { label: "Sea Urchin Profile", href: "/animals/sea-urchin" },
        { label: "Sand Dollar Profile", href: "/animals/sand-dollar" },
        { label: "Sea Cucumber Profile", href: "/animals/sea-cucumber" },
        { label: "Marine Animals", href: "/animal-encyclopedia/marine-animals" },
      ]}
    />
  );
}
