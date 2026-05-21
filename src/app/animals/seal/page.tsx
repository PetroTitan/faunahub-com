import type { Metadata } from "next";
import AnimalProfileLayout from "@/components/AnimalProfileLayout";
import { ANIMAL_SOURCES } from "@/lib/educational/animal-sources";
import {
  getAnimalGalleryImages,
  getAnimalImage,
  getAnimalOgImage,
} from "@/lib/images/animal-images";
import { buildArticleMetadata } from "@/lib/metadata";

const PUBLISHED = "2026-05-21";
const MODIFIED = "2026-05-21";

const title = "Seal — Overview of Seal Species, Habitat & Behavior";
const description =
  "An overview of true seals (family Phocidae): harbor seal as a reference species, marine mammal biology, breeding haul-outs, diet, and conservation context.";

export const metadata: Metadata = buildArticleMetadata({
  title,
  description,
  path: "/animals/seal",
  publishedTime: PUBLISHED,
  modifiedTime: MODIFIED,
  ogImage: getAnimalOgImage("seal"),
});

export default function SealPage() {
  return (
    <AnimalProfileLayout
      commonName="Seal"
      pageTitle={title}
      description={description}
      path="/animals/seal"
      parentCategory="Marine Animals"
      parentCategoryHref="/animal-encyclopedia/marine-animals"
      tags={["Marine Mammal", "Pinniped", "Carnivore"]}
      image={getAnimalImage("seal") ?? undefined}
      galleryImages={getAnimalGalleryImages("seal")}
      factsHeaderNote='"Seal" on this page refers to true seals — family Phocidae. The reference species is the harbor seal (Phoca vitulina). Sea lions and fur seals (family Otariidae) are related but distinct.'
      overview={
        <>
          <p>
            True seals are marine mammals of the family Phocidae,
            distinguished from sea lions and fur seals (family Otariidae)
            by the absence of external ear flaps and by hind flippers
            adapted for swimming but not for walking on land. The harbor
            seal (<em>Phoca vitulina</em>) is one of the most widely
            distributed and commonly cited reference species.
          </p>
        </>
      }
      habitat={
        <>
          <p>
            Seals occupy coastal and pelagic marine habitats across most
            of the world&apos;s oceans, with particularly diverse
            assemblages in cold and polar regions. Phocids haul out onto
            beaches, rocks, or pack ice to rest, moult, and breed.
            Specific range and habitat varies considerably between
            species.
          </p>
        </>
      }
      diet={
        <>
          <p>
            Seals are carnivores, with diets dominated by fish, squid, and
            other marine prey. Leopard seals are a notable exception,
            taking penguins and other seals among their prey. Diet
            composition varies seasonally and by population.
          </p>
        </>
      }
      behavior={
        <>
          <p>
            Most seals are excellent divers, with adaptations including
            collapsible lungs, oxygen-storing muscle, and bradycardia (slow
            heart rate) during dives. Many species are colonial at breeding
            haul-outs but otherwise foraging singly. Pups are typically
            nursed on very fat-rich milk and weaned over a relatively
            short period.
          </p>
        </>
      }
      humanInteraction={
        <>
          <p>
            Several seal species were heavily exploited for fur, oil, and
            meat in the 19th and 20th centuries and remain conservation
            priorities — most notably the monk seals. Today threats
            include bycatch, plastic and chemical pollution, climate-driven
            sea-ice loss, and disturbance at haul-outs. In many regions,
            approaching seals on beaches is regulated or illegal because
            of welfare and disease-transmission risk. Always keep distance
            and report stranded or injured animals to local marine wildlife
            authorities.
          </p>
        </>
      }
      similarAnimals={
        <p>
          Sea lions and fur seals (Otariidae) have visible external ear
          flaps and hind flippers they can rotate forward to walk on land,
          unlike true seals. The walrus (<em>Odobenus rosmarus</em>) is in
          its own family but is closely related to the pinniped group.
        </p>
      }
      faqs={[
        {
          question: "What is the difference between a seal and a sea lion?",
          answer:
            "True seals (Phocidae) lack external ear flaps and cannot rotate their hind flippers forward; on land they move with caterpillar-like undulations. Sea lions and fur seals (Otariidae) have small external ear flaps and can walk on land using all four flippers. Different family, different swimming mechanics.",
        },
        {
          question: "Should I approach a seal on the beach?",
          answer:
            "No. In most regions it is illegal or actively discouraged to approach pinnipeds on beaches. Mothers may abandon pups if disturbed, and adult seals can bite and carry diseases. Report sick, injured, or stranded animals to local marine wildlife authorities.",
        },
        {
          question: "How deep do seals dive?",
          answer:
            "Diving capability varies greatly by species. Some elephant seals dive routinely to depths over 1,000 m and for periods exceeding an hour. Smaller coastal seals dive much shallower. Authoritative species accounts give specific ranges.",
        },
        {
          question: "Are seals endangered?",
          answer:
            "Conservation status varies sharply by species. The Mediterranean and Hawaiian monk seals are particularly threatened; many other species are listed as Least Concern. Verify the IUCN Red List for any species of interest.",
        },
      ]}
      quickFacts={[
        { label: "Reference species", value: "Harbor seal (Phoca vitulina)" },
        { label: "Family", value: "Phocidae (true seals)" },
        { label: "Class", value: "Mammalia" },
        { label: "Order", value: "Carnivora (clade Pinnipedia)" },
        { label: "Diet", value: "Carnivore (fish, squid, varies by species)" },
        { label: "Habitat", value: "Marine; haul out to breed and rest" },
        { label: "Conservation status", value: "Varies by species (verify per species)" },
      ]}
      relatedLinks={[
        { label: "Otter Profile", href: "/animals/otter" },
        { label: "Dolphin Profile", href: "/animals/dolphin" },
        { label: "Whale Profile", href: "/animals/whale" },
        { label: "Marine Animals Hub", href: "/animal-encyclopedia/marine-animals" },
      ]}
      sources={ANIMAL_SOURCES.seal}
      publishedDate={PUBLISHED}
      modifiedDate={MODIFIED}
    />
  );
}
