import type { Metadata } from "next";
import AnimalProfileLayout from "@/components/AnimalProfileLayout";
import { ANIMAL_SOURCES } from "@/lib/educational/animal-sources";
import { getAnimalGalleryImages, getAnimalImage, getAnimalOgImage } from "@/lib/images/animal-images";
import { buildArticleMetadata } from "@/lib/metadata";

const PATH = "/animals/barracuda";
const TITLE = "Barracuda — Profile, Habitat, Diet & Behavior";
const DESC =
  "Explore barracudas (genus Sphyraena): fast, streamlined predatory fish with fearsome jaws, from the large solitary great barracuda to species that form shimmering schools.";

export const metadata: Metadata = buildArticleMetadata({
  title: TITLE,
  description: DESC,
  path: PATH,
  publishedTime: "2026-06-19",
  modifiedTime: "2026-06-19",
  ogImage: getAnimalOgImage("barracuda"),
});

export default function BarracudaPage() {
  return (
    <AnimalProfileLayout
      commonName="Barracuda"
      scientificName="genus Sphyraena"
      pageTitle={TITLE}
      description={DESC}
      path={PATH}
      parentCategory="Fish"
      parentCategoryHref="/animal-encyclopedia/fish"
      tags={["Fish", "Marine predator", "Fast swimmer"]}
      image={getAnimalImage("barracuda") ?? undefined}
      galleryImages={getAnimalGalleryImages("barracuda")}
      sources={ANIMAL_SOURCES.barracuda}
      publishedDate="2026-06-19"
      modifiedDate="2026-06-19"
      overview={
        <>
          <p>
            Barracudas (genus <em>Sphyraena</em>) are long, streamlined predatory
            fish of warm seas, built for speed and ambush. They have powerful jaws
            lined with sharp teeth and a fearsome appearance. The animal shown here is
            the great barracuda (<em>Sphyraena barracuda</em>), one of the largest and
            most familiar species.
          </p>
          <p>
            Larger barracudas are often solitary, while several smaller species form
            spectacular, slow-wheeling schools over reefs and in open water.
          </p>
          <p>
            <strong>Conservation note:</strong> barracudas are generally widespread
            and not of high concern overall, though local populations can be affected
            by fishing. Verify current status at iucnredlist.org.
          </p>
        </>
      }
      habitat={
        <p>
          Barracudas live in tropical and subtropical seas worldwide, around reefs,
          seagrass beds, mangroves, and in open water near the surface. Young great
          barracudas often shelter in sheltered inshore habitats before moving to
          reefs and open coast as adults.
        </p>
      }
      diet={
        <p>
          Barracudas are carnivores that prey mainly on other fish, using bursts of
          very high speed to ambush and seize prey with their sharp teeth. They often
          rely on a sudden short-range rush rather than long pursuit, and may use
          flashes of their silvery sides to startle and herd prey.
        </p>
      }
      behavior={
        <p>
          Large barracudas are typically solitary ambush hunters, frequently hovering
          almost motionless before a lightning strike. Some smaller species school in
          large numbers, sometimes forming striking spiral formations. Barracudas are
          curious and may follow divers, but this is generally investigatory.
        </p>
      }
      humanInteraction={
        <p>
          Barracudas are popular with divers and are caught in sport and subsistence
          fisheries. Bites on people are rare and usually linked to mistaking a shiny
          object for prey or to handling; barracudas are not a meaningful danger when
          treated with normal caution. In some regions large reef barracuda can carry
          a natural toxin (ciguatera) in their flesh, which is a food-safety
          consideration to verify locally. For current status, consult authoritative
          sources.
        </p>
      }
      faqs={[
        {
          question: "Are barracudas dangerous to humans?",
          answer:
            "Barracudas look intimidating but are not a significant danger to people. Bites are rare and usually happen when a barracuda mistakes a shiny object (like jewellery) for prey, or when a fish is handled. Divers often see barracudas hovering or following them out of curiosity.",
        },
        {
          question: "How fast are barracudas?",
          answer:
            "Barracudas are built for short bursts of very high speed, which they use to ambush prey. Rather than chasing over long distances, a barracuda typically waits, then strikes with a sudden, explosive rush.",
        },
        {
          question: "What do barracudas eat?",
          answer:
            "Barracudas are carnivores that feed mainly on other fish, seized with their sharp teeth after a fast ambush. They may also use the flash of their silvery flanks to confuse and herd prey.",
        },
        {
          question: "Is it safe to eat barracuda?",
          answer:
            "It depends on the region and size. Large reef-associated barracuda can sometimes accumulate a natural toxin called ciguatera in their flesh, which can cause illness. This is a food-safety matter that should be checked against current local advisories rather than treated as universal.",
        },
      ]}
      quickFacts={[
        { label: "Group", value: "Genus Sphyraena" },
        { label: "Reference species", value: "Sphyraena barracuda (great barracuda)" },
        { label: "Class", value: "Actinopterygii (ray-finned fish)" },
        { label: "Diet", value: "Carnivore (mainly fish)" },
        { label: "Hunting style", value: "High-speed ambush" },
        { label: "Behaviour", value: "Large species solitary; some school" },
        { label: "Habitat", value: "Tropical & subtropical seas" },
        { label: "IUCN Status", value: "Verify before publication" },
      ]}
      relatedLinks={[
        { label: "Tuna Profile", href: "/animals/tuna", description: "Another fast open-water predatory fish" },
        { label: "Shark Profile", href: "/animals/shark", description: "Apex marine predators" },
        { label: "Grouper Profile", href: "/animals/grouper", description: "A large ambush reef predator" },
        { label: "Fish Encyclopedia", href: "/animal-encyclopedia/fish" },
        { label: "Ocean fauna by depth", href: "/fauna/ocean", description: "Marine habitats in context" },
      ]}
    />
  );
}
