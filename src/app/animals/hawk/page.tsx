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

const title = "Hawk — Profile, Habitat, Diet & Behavior";
const description =
  "Hawks are sharp-eyed birds of prey. A group-level overview using the red-tailed hawk as a reference: hunting, habitat, and how hawks relate to other raptors.";

export const metadata: Metadata = buildArticleMetadata({
  title,
  description,
  path: "/animals/hawk",
  publishedTime: PUBLISHED,
  modifiedTime: MODIFIED,
  ogImage: getAnimalOgImage("hawk"),
});

export default function HawkPage() {
  return (
    <AnimalProfileLayout
      commonName="Hawk"
      pageTitle={title}
      description={description}
      path="/animals/hawk"
      parentCategory="Birds"
      parentCategoryHref="/animal-encyclopedia/birds"
      tags={["Bird", "Raptor", "Wild"]}
      image={getAnimalImage("hawk") ?? undefined}
      galleryImages={getAnimalGalleryImages("hawk")}
      factsHeaderNote="“Hawk” is used for many birds of prey in the family Accipitridae. The reference shown is the red-tailed hawk (Buteo jamaicensis). Hawks, eagles, and falcons are related but distinct — eagle and falcon are covered separately."
      overview={
        <>
          <p>
            &quot;Hawk&quot; is a common name for many diurnal birds of prey,
            most in the family Accipitridae, which also includes eagles and
            kites. This page is a group-level overview; the red-tailed hawk
            (<em>Buteo jamaicensis</em>), one of the most familiar North American
            raptors, is used as a reference. Hawks are skilled hunters with keen
            eyesight, hooked bills, and strong, taloned feet.
          </p>
        </>
      }
      habitat={
        <>
          <p>
            Hawks occupy a wide range of habitats — forests, grasslands,
            deserts, wetlands, mountains, and increasingly towns and cities —
            across most of the world. Many use open country and woodland edges
            where they can hunt, and they are often seen perched prominently or
            soaring. Habitat and range vary widely among the many hawk species.
          </p>
        </>
      }
      diet={
        <>
          <p>
            Hawks are carnivorous predators. Diet varies by species and size but
            commonly includes small mammals, birds, reptiles, and large insects.
            Larger hawks such as the red-tailed hawk take prey up to the size of
            rabbits, while smaller hawks specialise in birds or insects. They hunt
            from perches or on the wing; this page describes general feeding
            ecology.
          </p>
        </>
      }
      behavior={
        <>
          <p>
            Hawks rely on exceptional vision to detect prey, then strike with
            their talons. Some soar on rising air to scan large areas, while
            woodland hawks use short, agile flights to ambush prey among trees.
            Many are migratory, and large numbers of some species pass along
            recognised migration routes each year. Hawks often hold territories
            and may perform aerial displays. Behaviour varies by species.
          </p>
        </>
      }
      humanInteraction={
        <>
          <p>
            Hawks are wild birds of prey, not pets, and are protected by wildlife
            law in many countries. Some species declined historically from
            persecution and pesticides and have recovered with protection, while
            others remain under pressure; conservation status varies by species
            and should be checked against current sources. Do not disturb nests,
            and contact a licensed wildlife rehabilitator or local authority for
            an injured raptor rather than handling it.
          </p>
        </>
      }
      extraSections={[
        {
          heading: "Appearance & Recognition",
          body: (
            <>
              <p>
                Hawks have hooked bills, powerful taloned feet, and forward-facing
                eyes for sharp binocular vision. The red-tailed hawk is a large,
                broad-winged buteo, typically brown above and pale below, with the
                rusty-red tail of adults a key field mark. Hawks vary widely:
                broad-winged soaring buteos differ from the shorter-winged,
                long-tailed woodland hawks (accipiters). Shape, size, and flight
                style help distinguish them from eagles and falcons.
              </p>
            </>
          ),
        },
      ]}
      similarAnimals={
        <p>
          Hawks belong mostly to the family Accipitridae, alongside the eagles
          covered separately on FaunaHub. Falcons (including the falcon profiled
          on the site) look similar but are in a different family and have pointed
          wings and a distinctive killing technique. Owls are unrelated nocturnal
          raptors.
        </p>
      }
      comparisonCallouts={[
        { href: "/birdwatching", label: "Birdwatching hub" },
        { href: "/birdwatching/what-to-do-if-you-find-an-injured-bird", label: "If you find an injured bird" },
      ]}
      faqs={[
        {
          question: "What is the difference between a hawk and an eagle?",
          answer:
            "Hawks and eagles are related birds of prey, but eagles are generally larger and more powerful, with bigger bills and feet. The line between them is partly one of common usage rather than strict biology. FaunaHub covers the eagle separately.",
        },
        {
          question: "What is the difference between a hawk and a falcon?",
          answer:
            "Hawks (family Accipitridae) and falcons (family Falconidae) are different families. Falcons typically have pointed wings and kill with a notched bill, while many hawks have broader wings and kill with their talons. They are not closely related despite both being raptors.",
        },
        {
          question: "What should I do if I find an injured hawk?",
          answer:
            "Do not handle it. Birds of prey have powerful talons and can be dangerous, and they need specialist care. Keep your distance, keep people and pets away, and contact a licensed wildlife rehabilitator or local wildlife authority for guidance.",
        },
      ]}
      quickFacts={[
        { label: "Group", value: "Hawks (mostly family Accipitridae)" },
        { label: "Reference species", value: "Red-tailed hawk (Buteo jamaicensis)" },
        { label: "Class", value: "Aves" },
        { label: "Diet", value: "Carnivore (small mammals, birds, reptiles)" },
        { label: "Notable trait", value: "Keen eyesight; taloned hunting" },
        { label: "Conservation", value: "Varies by species — verify on IUCN" },
      ]}
      relatedLinks={[
        { label: "Eagle Profile", href: "/animals/eagle", description: "A larger raptor relative" },
        { label: "Falcon Profile", href: "/animals/falcon" },
        { label: "Vulture Profile", href: "/animals/vulture" },
        { label: "Bird Encyclopedia", href: "/animal-encyclopedia/birds" },
        { label: "Wildlife Hub", href: "/wildlife" },
      ]}
      sources={ANIMAL_SOURCES.hawk}
      publishedDate={PUBLISHED}
      modifiedDate={MODIFIED}
    />
  );
}
