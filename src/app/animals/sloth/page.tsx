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

const title = "Sloth — Profile, Habitat, Diet & Behavior";
const description =
  "Sloths are slow-moving tree-dwelling mammals of the Americas. A group-level overview using the brown-throated three-toed sloth as a reference — habitat, diet, and behaviour.";

export const metadata: Metadata = buildArticleMetadata({
  title,
  description,
  path: "/animals/sloth",
  publishedTime: PUBLISHED,
  modifiedTime: MODIFIED,
  ogImage: getAnimalOgImage("sloth"),
});

export default function SlothPage() {
  return (
    <AnimalProfileLayout
      commonName="Sloth"
      pageTitle={title}
      description={description}
      path="/animals/sloth"
      parentCategory="Mammals"
      parentCategoryHref="/animal-encyclopedia/mammals"
      tags={["Mammal", "Arboreal", "Wild"]}
      image={getAnimalImage("sloth") ?? undefined}
      galleryImages={getAnimalGalleryImages("sloth")}
      factsHeaderNote="“Sloth” covers six living species in two groups (two-toed and three-toed). The reference shown is the brown-throated three-toed sloth. Sloths are wild animals, not pets, and should not be handled."
      overview={
        <>
          <p>
            Sloths are slow-moving, tree-dwelling mammals of Central and South
            America, famous for their deliberate movements and upside-down hanging
            posture. There are six living species in two groups — two-toed and
            three-toed sloths. This page is a group-level overview; the
            brown-throated three-toed sloth (<em>Bradypus variegatus</em>) is used
            as a reference. Sloths are related to anteaters and armadillos.
          </p>
        </>
      }
      habitat={
        <>
          <p>
            Sloths live in tropical forests of Central and South America, spending
            almost their entire lives in the trees, where they feed, rest, and even
            sleep suspended from branches. Their slow lifestyle suits a low-energy,
            leaf-based diet. Different species occupy different forest regions;
            habitat and range vary by species.
          </p>
        </>
      }
      diet={
        <>
          <p>
            Three-toed sloths are largely leaf-eaters (folivores), with a slow
            metabolism and a multi-chambered stomach to process tough vegetation;
            two-toed sloths have somewhat broader diets. Their slow digestion is
            part of why they move so little. This page describes general feeding
            ecology, not care or feeding instructions.
          </p>
        </>
      }
      behavior={
        <>
          <p>
            Sloths are famously slow, an adaptation that conserves energy on a
            low-nutrient diet and helps them avoid notice by predators. They sleep
            for much of the day, move carefully through the canopy, and descend to
            the ground only occasionally, including to defecate. Their fur often
            hosts algae, adding camouflage. Surprisingly, sloths are capable
            swimmers. Behaviour varies between the two-toed and three-toed groups.
          </p>
        </>
      }
      humanInteraction={
        <>
          <p>
            Sloths are wild animals, not pets — they are easily stressed, have
            specialised needs, and the wildlife trade and tourism handling can
            harm them. They are also affected by deforestation and habitat loss.
            Some sloth species are common while others are threatened; conservation
            status varies by species and should be checked against current sources.
            This page is educational, not care or veterinary advice, and does not
            encourage handling or keeping sloths.
          </p>
        </>
      }
      extraSections={[
        {
          heading: "Appearance & Recognition",
          body: (
            <>
              <p>
                Sloths have rounded heads, small eyes, long limbs with strong,
                curved claws for hanging, and coarse fur that often appears
                greenish from algae. Three-toed sloths have three claws on each
                limb and a short tail, with a facial pattern that can look like a
                gentle smile; two-toed sloths have two claws on the forelimbs and
                a different face shape. Their hanging posture and slow movement are
                unmistakable.
              </p>
            </>
          ),
        },
      ]}
      similarAnimals={
        <p>
          Sloths belong to the same broad group (Xenarthra) as the armadillo
          covered separately on FaunaHub, and as anteaters. Despite a superficial
          resemblance to primates in their tree-hanging habits, they are not
          related to monkeys or apes.
        </p>
      }
      faqs={[
        {
          question: "Why are sloths so slow?",
          answer:
            "Sloths move slowly as an adaptation to a low-energy, leaf-based diet and slow digestion, which means they must conserve energy. Their slowness also helps them avoid the notice of predators that hunt by detecting movement.",
        },
        {
          question: "Do sloths make good pets?",
          answer:
            "No. Sloths are wild animals that are easily stressed and have specialised needs, and handling and the wildlife trade can harm them. This page is educational, not care advice; sloths should be seen in the wild or at accredited facilities, not kept as pets.",
        },
        {
          question: "How many kinds of sloth are there?",
          answer:
            "There are six living species, divided into two groups — two-toed sloths and three-toed sloths — which differ in anatomy and some behaviour. This page is a group-level overview using the brown-throated three-toed sloth as a reference.",
        },
      ]}
      quickFacts={[
        { label: "Group", value: "Sloths (six living species, two groups)" },
        { label: "Reference species", value: "Brown-throated three-toed sloth (Bradypus variegatus)" },
        { label: "Class", value: "Mammalia" },
        { label: "Diet", value: "Mostly leaves (three-toed); broader in two-toed" },
        { label: "Habitat", value: "Tropical American forests (arboreal)" },
        { label: "Conservation", value: "Varies by species — verify on IUCN" },
      ]}
      relatedLinks={[
        { label: "Armadillo Profile", href: "/animals/armadillo", description: "A relative in the group Xenarthra" },
        { label: "Red Panda Profile", href: "/animals/red-panda" },
        { label: "Tapir Profile", href: "/animals/tapir" },
        { label: "Animal Encyclopedia — Mammals", href: "/animal-encyclopedia/mammals" },
        { label: "Wildlife Hub", href: "/wildlife" },
      ]}
      sources={ANIMAL_SOURCES.sloth}
      publishedDate={PUBLISHED}
      modifiedDate={MODIFIED}
    />
  );
}
