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

const title = "Red Panda — Profile, Habitat, Diet & Behavior";
const description =
  "The red panda (Ailurus fulgens): an educational profile of this small Himalayan mammal — its bamboo-rich diet, mountain forest habitat, behaviour, and conservation context.";

export const metadata: Metadata = buildArticleMetadata({
  title,
  description,
  path: "/animals/red-panda",
  publishedTime: PUBLISHED,
  modifiedTime: MODIFIED,
  ogImage: getAnimalOgImage("red-panda"),
});

export default function RedPandaPage() {
  return (
    <AnimalProfileLayout
      commonName="Red Panda"
      scientificName="Ailurus fulgens"
      pageTitle={title}
      description={description}
      path="/animals/red-panda"
      parentCategory="Mammals"
      parentCategoryHref="/animal-encyclopedia/mammals"
      tags={["Mammal", "Carnivoran", "Wild"]}
      image={getAnimalImage("red-panda") ?? undefined}
      galleryImages={getAnimalGalleryImages("red-panda")}
      factsHeaderNote="The red panda is a small wild mammal of Asian mountain forests — not a pet. Its conservation status is a matter of active concern and should be checked against current IUCN sources rather than assumed."
      overview={
        <>
          <p>
            The red panda (<em>Ailurus fulgens</em>) is a small, tree-dwelling
            mammal of the eastern Himalayas and southwestern China, with
            reddish-brown fur, a ringed tail, and a partly bamboo-based diet.
            Despite the shared name and bamboo diet, it is not closely related to
            the giant panda; the red panda is the only living member of its own
            family, Ailuridae, within the carnivoran group.
          </p>
        </>
      }
      habitat={
        <>
          <p>
            Red pandas live in temperate mountain forests with bamboo understorey
            across parts of Nepal, India, Bhutan, Myanmar, and China. They are
            adapted to cool, forested slopes and spend much of their time in
            trees. Their dependence on these specific forest habitats makes them
            sensitive to habitat loss and fragmentation. Range details should be
            confirmed against current sources.
          </p>
        </>
      }
      diet={
        <>
          <p>
            Red pandas feed largely on bamboo — leaves and shoots — supplemented
            with fruit, berries, eggs, and small animals. Although classified
            among the carnivorans, their diet is mostly plant-based, and they
            have a &quot;false thumb&quot; (an enlarged wrist bone) that helps
            grip bamboo. This page describes general feeding ecology, not care or
            feeding instructions.
          </p>
        </>
      }
      behavior={
        <>
          <p>
            Red pandas are largely solitary, mostly active around dawn, dusk, and
            night, and are skilled climbers that rest in trees. They use scent to
            communicate and their long, bushy tail for balance and warmth. They
            are generally shy, wild animals. This page describes behaviour
            educationally and does not frame the red panda as a pet or encourage
            handling.
          </p>
        </>
      }
      humanInteraction={
        <>
          <p>
            Red pandas are wild animals, not pets, and are protected across their
            range. They face pressures including habitat loss, fragmentation, and
            illegal trade, and are the focus of significant conservation effort.
            Because their conservation status is actively monitored and can
            change, it should be verified against current IUCN Red List and
            conservation sources rather than assumed. This page is educational,
            not care or veterinary advice.
          </p>
        </>
      }
      extraSections={[
        {
          heading: "Appearance & Recognition",
          body: (
            <>
              <p>
                The red panda is roughly cat-sized, with dense reddish-brown fur,
                a pale face with dark tear-like markings, rounded ears, and a long
                bushy tail marked with faint rings. Its build suits a life in
                trees, and the soles of the feet are furred. Its rich colour and
                ringed tail make it distinctive and quite unlike the much larger,
                black-and-white giant panda.
              </p>
            </>
          ),
        },
      ]}
      similarAnimals={
        <p>
          Despite its name, the red panda is not closely related to the giant
          panda (a bear) covered separately on FaunaHub; it is the sole living
          member of the family Ailuridae. Within the carnivorans it is more
          closely related to raccoons, weasels, and skunks than to true pandas.
        </p>
      }
      faqs={[
        {
          question: "Is the red panda related to the giant panda?",
          answer:
            "Not closely. They share a name and a bamboo-rich diet, and both have a \"false thumb\" for gripping bamboo, but the giant panda is a bear, while the red panda is the only living member of its own family (Ailuridae), more closely related to raccoons and weasels.",
        },
        {
          question: "Can you keep a red panda as a pet?",
          answer:
            "No. Red pandas are wild, protected animals with specialised needs, and they are not pets. This page is educational; red pandas should be supported through habitat conservation and seen only in the wild or accredited facilities.",
        },
        {
          question: "Why is the red panda's tail so big?",
          answer:
            "The long, bushy tail helps with balance while climbing and can be wrapped around the body for warmth in the cool mountain forests where red pandas live. The faint rings also add to their distinctive appearance.",
        },
      ]}
      quickFacts={[
        { label: "Scientific name", value: "Ailurus fulgens" },
        { label: "Family", value: "Ailuridae (its own family)" },
        { label: "Class", value: "Mammalia" },
        { label: "Diet", value: "Mostly bamboo; also fruit and small animals" },
        { label: "Habitat", value: "Asian mountain forests with bamboo" },
        { label: "Conservation", value: "Of concern — verify current status on IUCN" },
      ]}
      relatedLinks={[
        { label: "Panda Profile", href: "/animals/panda", description: "The unrelated giant panda" },
        { label: "Raccoon Profile", href: "/animals/raccoon", description: "A closer relative than the giant panda" },
        { label: "Sloth Profile", href: "/animals/sloth" },
        { label: "Animal Encyclopedia — Mammals", href: "/animal-encyclopedia/mammals" },
        { label: "Wildlife Hub", href: "/wildlife" },
      ]}
      sources={ANIMAL_SOURCES["red-panda"]}
      publishedDate={PUBLISHED}
      modifiedDate={MODIFIED}
    />
  );
}
