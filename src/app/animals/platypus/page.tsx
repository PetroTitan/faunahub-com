import type { Metadata } from "next";
import AnimalProfileLayout from "@/components/AnimalProfileLayout";
import { ANIMAL_SOURCES } from "@/lib/educational/animal-sources";
import {
  getAnimalGalleryImages,
  getAnimalImage,
  getAnimalOgImage,
} from "@/lib/images/animal-images";
import { buildArticleMetadata } from "@/lib/metadata";

const PUBLISHED = "2026-06-12";
const MODIFIED = "2026-06-12";

const title = "Platypus — Profile, Habitat, Diet & Behavior";
const description =
  "The platypus (Ornithorhynchus anatinus) is an egg-laying Australian mammal with a duck-like bill. An educational profile of its rivers, diet, behaviour, and unusual biology.";

export const metadata: Metadata = buildArticleMetadata({
  title,
  description,
  path: "/animals/platypus",
  publishedTime: PUBLISHED,
  modifiedTime: MODIFIED,
  ogImage: getAnimalOgImage("platypus"),
});

export default function PlatypusPage() {
  return (
    <AnimalProfileLayout
      commonName="Platypus"
      scientificName="Ornithorhynchus anatinus"
      pageTitle={title}
      description={description}
      path="/animals/platypus"
      parentCategory="Mammals"
      parentCategoryHref="/animal-encyclopedia/mammals"
      tags={["Mammal", "Monotreme", "Wild"]}
      image={getAnimalImage("platypus") ?? undefined}
      galleryImages={getAnimalGalleryImages("platypus")}
      factsHeaderNote="The platypus is a protected Australian monotreme — an egg-laying mammal — not a pet. Males have a venomous spur; this is mentioned cautiously and is not a source of safety or first-aid advice. This page is educational only."
      overview={
        <>
          <p>
            The platypus (<em>Ornithorhynchus anatinus</em>) is one of the most
            unusual mammals in the world: a semi-aquatic, egg-laying mammal
            (a monotreme) native to eastern Australia, with a duck-like bill,
            webbed feet, a beaver-like tail, and dense waterproof fur. Together
            with the echidnas, it belongs to the small group of mammals that lay
            eggs rather than giving birth to live young.
          </p>
        </>
      }
      habitat={
        <>
          <p>
            Platypuses live in and along freshwater rivers, streams, and lakes of
            eastern Australia, including Tasmania, resting in burrows dug into the
            banks. They are well adapted to water, where they do most of their
            foraging. Their dependence on healthy waterways makes them sensitive
            to changes in river systems. Range details should be confirmed against
            current sources.
          </p>
        </>
      }
      diet={
        <>
          <p>
            Platypuses are carnivores that feed on aquatic invertebrates such as
            insect larvae, worms, and crustaceans, foraging along the bottom of
            waterways. They detect prey using electroreceptors and touch sensors
            in the bill while their eyes and ears are closed underwater, storing
            food in cheek pouches. This page describes general feeding ecology,
            not care instructions.
          </p>
        </>
      }
      behavior={
        <>
          <p>
            Platypuses are mostly active around dawn, dusk, and night, swimming
            with their webbed forefeet and steering with the tail and hind feet.
            They are generally solitary. A remarkable feature is their use of
            electroreception to find prey underwater. Males have a spur on the
            hind leg connected to a venom gland, used mainly in competition with
            other males; the species should be observed without handling.
            Behaviour reflects their specialised aquatic life.
          </p>
        </>
      }
      humanInteraction={
        <>
          <p>
            Platypuses are protected Australian wildlife, not pets, and are
            notoriously difficult to keep even in specialised facilities. They are
            affected by threats to river health, including habitat change and
            water quality, and are the subject of monitoring and conservation
            concern. Because their conservation status is actively assessed and
            can change, it should be checked against current IUCN and government
            sources. This page is educational, not care, safety, or first-aid
            advice.
          </p>
        </>
      }
      extraSections={[
        {
          heading: "Appearance & Recognition",
          body: (
            <>
              <p>
                The platypus is unmistakable: a streamlined body with dense dark
                brown waterproof fur, a soft, flat, duck-like bill, webbed feet, and
                a broad, flattened tail. Adults are relatively small. Males are
                generally larger than females and bear a spur on each hind ankle.
                The combination of bill, webbed feet, and furry mammalian body
                makes the platypus one of the most distinctive animals alive.
              </p>
            </>
          ),
        },
      ]}
      similarAnimals={
        <p>
          The platypus is a monotreme, sharing the egg-laying trait only with the
          echidnas. It has no close relatives among the other mammals on
          FaunaHub. Its bill may invite comparison with ducks, but it is a mammal,
          not a bird, and the resemblance is superficial.
        </p>
      }
      faqs={[
        {
          question: "Is the platypus really a mammal if it lays eggs?",
          answer:
            "Yes. The platypus is a mammal — it has fur and the females produce milk for their young — but it is a monotreme, one of the few mammals that lay eggs rather than giving birth to live young. The echidnas are the only other living monotremes.",
        },
        {
          question: "Is the platypus venomous?",
          answer:
            "Male platypuses have a spur on the hind leg connected to a venom gland, used mainly in competition with other males. This page mentions that cautiously and educationally; it does not provide safety or first-aid advice, and platypuses should be observed without handling.",
        },
        {
          question: "How does a platypus find food underwater?",
          answer:
            "The platypus closes its eyes and ears underwater and uses electroreceptors and touch sensors in its bill to detect the tiny electrical signals and movements of prey such as invertebrates along the streambed — an unusual sense among mammals.",
        },
      ]}
      quickFacts={[
        { label: "Scientific name", value: "Ornithorhynchus anatinus" },
        { label: "Group", value: "Monotreme (egg-laying mammal)" },
        { label: "Class", value: "Mammalia" },
        { label: "Diet", value: "Carnivore (aquatic invertebrates)" },
        { label: "Notable traits", value: "Egg-laying; electroreception; venom spur (males)" },
        { label: "Range", value: "Eastern Australia and Tasmania" },
        { label: "Conservation", value: "Verify current status on IUCN Red List" },
      ]}
      relatedLinks={[
        { label: "Wombat Profile", href: "/animals/wombat", description: "Another Australian mammal" },
        { label: "Beaver Profile", href: "/animals/beaver", description: "An unrelated semi-aquatic mammal" },
        { label: "Otter Profile", href: "/animals/otter" },
        { label: "Animal Encyclopedia — Mammals", href: "/animal-encyclopedia/mammals" },
        { label: "Wildlife Hub", href: "/wildlife" },
      ]}
      sources={ANIMAL_SOURCES.platypus}
      publishedDate={PUBLISHED}
      modifiedDate={MODIFIED}
    />
  );
}
