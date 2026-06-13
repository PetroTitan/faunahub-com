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

const title = "Hyena — Profile, Habitat, Diet & Behavior";
const description =
  "Hyenas are intelligent, social carnivores of Africa and Asia. A group-level overview using the spotted hyena as a reference — habitat, diet, behaviour, and ecological role.";

export const metadata: Metadata = buildArticleMetadata({
  title,
  description,
  path: "/animals/hyena",
  publishedTime: PUBLISHED,
  modifiedTime: MODIFIED,
  ogImage: getAnimalOgImage("hyena"),
});

export default function HyenaPage() {
  return (
    <AnimalProfileLayout
      commonName="Hyena"
      pageTitle={title}
      description={description}
      path="/animals/hyena"
      parentCategory="Mammals"
      parentCategoryHref="/animal-encyclopedia/mammals"
      tags={["Mammal", "Carnivore", "Wild"]}
      image={getAnimalImage("hyena") ?? undefined}
      galleryImages={getAnimalGalleryImages("hyena")}
      factsHeaderNote="“Hyena” covers four species in the family Hyaenidae; the reference shown is the spotted hyena. This page treats hyenas as the capable, ecologically important predators they are, not through cultural villain myths."
      overview={
        <>
          <p>
            Hyenas are carnivorous mammals of Africa and parts of Asia, making up
            the family Hyaenidae with four living species: the spotted, brown, and
            striped hyenas, and the insect-eating aardwolf. This page is a
            group-level overview; the spotted hyena (<em>Crocuta crocuta</em>) is
            used as a reference. Often misrepresented in popular culture, hyenas
            are intelligent, socially complex, and ecologically important animals.
          </p>
        </>
      }
      habitat={
        <>
          <p>
            Hyenas occupy a range of habitats — savanna, grassland, woodland,
            scrub, and semi-desert — across much of Africa, with the striped hyena
            also ranging into the Middle East and South Asia. The spotted hyena is
            widespread across sub-Saharan Africa. Habitat and range vary by
            species, and the four hyenas differ considerably in ecology.
          </p>
        </>
      }
      diet={
        <>
          <p>
            Spotted hyenas are capable hunters as well as scavengers, taking a
            wide range of prey and also feeding on carcasses; striped and brown
            hyenas are more scavenging-oriented, and the aardwolf specialises in
            termites. By consuming carcasses, hyenas help recycle nutrients and
            clean the landscape. This page describes general feeding ecology, not
            care or handling.
          </p>
        </>
      }
      behavior={
        <>
          <p>
            Spotted hyenas are highly social, living in large groups called clans
            with complex hierarchies typically led by females, and communicating
            with a famous range of calls including the &quot;laughing&quot; sound.
            Other hyena species are more solitary or live in smaller groups. As
            powerful wild carnivores, hyenas should be observed only from a safe
            distance and with guides. Social structure and behaviour vary by
            species.
          </p>
        </>
      }
      humanInteraction={
        <>
          <p>
            Hyenas are wild carnivores, not pets, and despite their unfair
            reputation in folklore they play a valuable ecological role as
            predators and scavengers. Some hyena populations face pressure from
            habitat loss and conflict with people, while others are more secure;
            conservation status varies by species and should be checked against
            current sources. This page is educational and ecological, not care or
            safety advice, and avoids villain framing.
          </p>
        </>
      }
      extraSections={[
        {
          heading: "Appearance & Recognition",
          body: (
            <>
              <p>
                Hyenas have a distinctive build with a sloping back — forequarters
                higher than the hindquarters — a large head and powerful jaws, and
                rounded or pointed ears depending on the species. The spotted
                hyena is sandy with dark spots; the striped hyena has vertical
                stripes and a mane; the brown hyena has a long, shaggy coat. This
                sloping silhouette and strong head are characteristic of the
                family.
              </p>
            </>
          ),
        },
      ]}
      similarAnimals={
        <p>
          Despite a dog-like look, hyenas are not canids; they form their own
          family (Hyaenidae) and are more closely related to cats, mongooses, and
          civets. Among FaunaHub profiles, the meerkat is a distant relative
          within the broader cat-like carnivoran group, while wolves and foxes
          (canids) are not close kin.
        </p>
      }
      faqs={[
        {
          question: "Are hyenas dogs?",
          answer:
            "No. Although hyenas look somewhat dog-like, they are not canids. They belong to their own family, Hyaenidae, and are more closely related to cats, mongooses, and civets than to dogs and wolves.",
        },
        {
          question: "Do hyenas only scavenge?",
          answer:
            "Not at all — this is a common misconception, at least for the spotted hyena, which is a capable hunter as well as a scavenger. Other hyena species lean more toward scavenging, and the aardwolf eats termites. Feeding strategy varies by species.",
        },
        {
          question: "Why do hyenas \"laugh\"?",
          answer:
            "The spotted hyena's famous laughing sound is one of a wide range of vocalisations used in communication, often linked to social interactions and excitement rather than amusement. It reflects their complex social lives, not the villainous image from popular culture.",
        },
      ]}
      quickFacts={[
        { label: "Group", value: "Hyenas (family Hyaenidae, 4 species)" },
        { label: "Reference species", value: "Spotted hyena (Crocuta crocuta)" },
        { label: "Class", value: "Mammalia" },
        { label: "Relatives", value: "Cats, mongooses, civets (not dogs)" },
        { label: "Diet", value: "Carnivore (hunter and scavenger; varies)" },
        { label: "Conservation", value: "Varies by species — verify on IUCN" },
      ]}
      relatedLinks={[
        { label: "Lion Profile", href: "/animals/lion", description: "A savanna predator and rival" },
        { label: "Meerkat Profile", href: "/animals/meerkat", description: "A distant carnivoran relative" },
        { label: "Wolf Profile", href: "/animals/wolf" },
        { label: "Animal Encyclopedia — Mammals", href: "/animal-encyclopedia/mammals" },
        { label: "Wildlife Hub", href: "/wildlife" },
      ]}
      sources={ANIMAL_SOURCES.hyena}
      publishedDate={PUBLISHED}
      modifiedDate={MODIFIED}
    />
  );
}
