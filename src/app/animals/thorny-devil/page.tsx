import type { Metadata } from "next";
import AnimalProfileLayout from "@/components/AnimalProfileLayout";
import { ANIMAL_SOURCES } from "@/lib/educational/animal-sources";
import { getAnimalGalleryImages, getAnimalImage, getAnimalOgImage } from "@/lib/images/animal-images";
import { buildArticleMetadata } from "@/lib/metadata";

const PATH = "/animals/thorny-devil";
const TITLE = "Thorny Devil — Profile, Spines, Ant Diet & Water Trick";
const DESC =
  "Explore the thorny devil (Moloch horridus): a spiky Australian desert lizard that eats only ants, channels dew to its mouth through its skin, and is completely harmless despite its look.";

export const metadata: Metadata = buildArticleMetadata({
  title: TITLE,
  description: DESC,
  path: PATH,
  publishedTime: "2026-06-21",
  modifiedTime: "2026-06-21",
  ogImage: getAnimalOgImage("thorny-devil"),
});

export default function ThornyDevilPage() {
  return (
    <AnimalProfileLayout
      commonName="Thorny Devil"
      scientificName="Moloch horridus"
      pageTitle={TITLE}
      description={DESC}
      path={PATH}
      parentCategory="Reptiles & Amphibians"
      parentCategoryHref="/animal-encyclopedia/reptiles"
      tags={["Reptile", "Lizard", "Desert"]}
      image={getAnimalImage("thorny-devil") ?? undefined}
      galleryImages={getAnimalGalleryImages("thorny-devil")}
      sources={ANIMAL_SOURCES["thorny-devil"]}
      publishedDate="2026-06-21"
      modifiedDate="2026-06-21"
      overview={
        <>
          <p>
            The thorny devil (<em>Moloch horridus</em>) is a small, slow-moving lizard of the
            Australian deserts and one of the most unmistakable reptiles in the world. Its
            whole body is covered in hard, conical spines, and it has a false &ldquo;second
            head&rdquo; — a spiny knob on the back of its neck — that it presents to predators
            by tucking its real head down. For all its fearsome name and armoured appearance,
            it is completely harmless: it has no venom and feeds only on tiny ants.
          </p>
          <p>
            The thorny devil is also remarkable for the clever way it gets water in one of the
            driest places on Earth, channelling every drop of dew and rain across its skin
            straight to its mouth.
          </p>
          <p>
            <strong>Note:</strong> details here cover the thorny devil as a species; treat
            general statements as approximate and verify against authoritative sources.
          </p>
        </>
      }
      habitat={
        <p>
          Thorny devils live in the arid scrub and sandy deserts of central and western
          Australia, in spinifex grassland and sandplain country. They are well adapted to
          this harsh, hot, dry environment, where their colour can change to blend with the
          soil, and they shelter from extreme heat and cold by burrowing or hiding in cover.
        </p>
      }
      diet={
        <p>
          The thorny devil is an extreme specialist: it eats almost nothing but ants,
          especially small black ants, which it laps up one at a time with a quick flick of
          the tongue — sometimes thousands in a single meal. It often sits beside an ant trail
          or near a nest and methodically picks off the passing ants, a feeding style suited
          to its slow, deliberate lifestyle.
        </p>
      }
      behavior={
        <p>
          One of the thorny devil&apos;s most famous tricks is harvesting water. Tiny grooves
          between its scales form a network of channels that draw water by capillary action —
          from dew, rain, or damp sand — across the whole body and funnel it to the corners of
          the mouth, so the lizard can effectively &ldquo;drink&rdquo; through its skin. It
          moves with a slow, rocking, jerky gait that may help it blend into the shimmering
          desert, and when threatened it relies on its spines, the decoy head, and inflating
          its body rather than fighting or fleeing fast.
        </p>
      }
      humanInteraction={
        <p>
          The thorny devil is a beloved icon of the Australian outback and completely harmless
          to people — despite the alarming name, it neither bites dangerously nor has venom.
          It is generally widespread in suitable desert habitat, though it depends on healthy
          ant populations and can be affected by habitat change. Consult authoritative sources
          for current status.
        </p>
      }
      faqs={[
        {
          question: "Is the thorny devil dangerous?",
          answer:
            "No — despite its spiky armour and fearsome name, the thorny devil is completely harmless to people. It has no venom, doesn't bite dangerously, and eats only tiny ants. Its spines and false 'second head' are purely defensive, to deter predators from swallowing it.",
        },
        {
          question: "How does a thorny devil drink water in the desert?",
          answer:
            "Through its skin. Tiny grooves between its scales form a capillary network that draws in water — from dew, light rain, or damp sand — and channels it across the whole body to the corners of its mouth. This lets the thorny devil collect and 'drink' moisture even where there's no standing water, a brilliant adaptation to desert life.",
        },
        {
          question: "What does a thorny devil eat?",
          answer:
            "Almost only ants — especially small black ants. A thorny devil sits by an ant trail or nest and laps up the ants one at a time with its tongue, sometimes eating thousands in a single meal. This narrow, specialised diet suits its slow, deliberate lifestyle.",
        },
        {
          question: "What is the 'false head' on a thorny devil?",
          answer:
            "It's a spiny knob on the back of the lizard's neck that looks like a second head. When threatened, the thorny devil tucks its real head down between its front legs and presents this decoy, so a predator is more likely to bite the spiny false head than the vulnerable real one.",
        },
      ]}
      quickFacts={[
        { label: "Scientific name", value: "Moloch horridus" },
        { label: "Class", value: "Reptilia (lizard)" },
        { label: "Signature traits", value: "Spiny armour; false 'second head'" },
        { label: "Diet", value: "Ants only (specialist)" },
        { label: "Water trick", value: "Channels dew/rain to mouth via skin grooves" },
        { label: "Habitat", value: "Australian deserts & scrub" },
        { label: "Harmless", value: "Yes (no venom; doesn't bite)" },
        { label: "Status", value: "Verify (ant-dependent)" },
      ]}
      relatedLinks={[
        { label: "Frilled Lizard Profile", href: "/animals/frilled-lizard", description: "Another iconic Australian lizard" },
        { label: "Chuckwalla Profile", href: "/animals/chuckwalla", description: "A desert lizard with its own defence" },
        { label: "Gila Monster Profile", href: "/animals/gila-monster", description: "A venomous desert lizard" },
        { label: "Fauna by Continent", href: "/fauna/continents", description: "Australian desert fauna in context" },
        { label: "Reptiles & Amphibians", href: "/animal-encyclopedia/reptiles" },
      ]}
    />
  );
}
