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

const title = "Gecko — Profile, Habitat, Diet & Behavior";
const description =
  "Geckos are small lizards famous for climbing and vocalising. A group-level overview using the leopard gecko as a reference. Educational wildlife profile, not a care guide.";

export const metadata: Metadata = buildArticleMetadata({
  title,
  description,
  path: "/animals/gecko",
  publishedTime: PUBLISHED,
  modifiedTime: MODIFIED,
  ogImage: getAnimalOgImage("gecko"),
});

export default function GeckoPage() {
  return (
    <AnimalProfileLayout
      commonName="Gecko"
      pageTitle={title}
      description={description}
      path="/animals/gecko"
      parentCategory="Reptiles & Amphibians"
      parentCategoryHref="/animal-encyclopedia/reptiles"
      tags={["Reptile", "Lizard", "Wild"]}
      image={getAnimalImage("gecko") ?? undefined}
      galleryImages={getAnimalGalleryImages("gecko")}
      factsHeaderNote="“Gecko” covers a large, diverse group of lizards. The reference shown is the leopard gecko. This is an educational wildlife profile, not a care guide; reptile keeping is specialised and should follow qualified reptile-vet/expert guidance."
      overview={
        <>
          <p>
            Geckos are small-to-medium lizards making up a large, diverse group
            (infraorder Gekkota) with well over a thousand species worldwide.
            This page is a group-level overview; the leopard gecko
            (<em>Eublepharis macularius</em>) is used as a familiar reference.
            Geckos are known for their climbing ability, varied vocalisations in
            many species, and, in many, the lack of eyelids — instead they lick a
            clear scale to clean the eye.
          </p>
        </>
      }
      habitat={
        <>
          <p>
            Geckos are found across warm regions worldwide — deserts, forests,
            rocky areas, and, for some species, human buildings. The leopard
            gecko is a ground-dwelling species of arid regions of Asia, unusual
            among geckos in having movable eyelids. Habitat and range vary
            enormously across the group, so a single species is not
            representative of all geckos.
          </p>
        </>
      }
      diet={
        <>
          <p>
            Most geckos are insectivores, eating insects and other small
            invertebrates, though some also take nectar or fruit. This page
            describes general feeding ecology and does not give pet feeding
            instructions or quantities, which are species-specific and should
            follow qualified reptile-veterinary guidance.
          </p>
        </>
      }
      behavior={
        <>
          <p>
            Many geckos are famous for climbing smooth surfaces, including glass,
            using microscopic hair-like structures on their toe pads that grip
            via tiny adhesive forces. Many are nocturnal, and numerous species
            are vocal, giving chirps and clicks — unusual among lizards. Like
            some other lizards, many geckos can shed their tail to escape
            predators and later regrow it. Behaviour varies widely by species.
          </p>
        </>
      }
      humanInteraction={
        <>
          <p>
            Geckos are wild reptiles; some, such as leopard geckos, are widely
            kept by experienced reptile keepers but still require specialised
            care, and this page is not a care guide. Many gecko species are
            common, while some have small ranges and are of conservation concern;
            status varies by species and should be checked against current
            sources. House geckos are often welcomed for eating insects but
            should not be handled unnecessarily.
          </p>
        </>
      }
      extraSections={[
        {
          heading: "Appearance & Recognition",
          body: (
            <>
              <p>
                Geckos are typically small lizards with large eyes (often with
                vertical pupils in nocturnal species), soft skin, and, in many
                species, expanded toe pads for climbing. The leopard gecko is
                stout, pale yellow with dark spots, and — unusually for a gecko —
                has eyelids and lacks adhesive toe pads. Size, colour, and toe
                structure vary greatly across the gecko group.
              </p>
            </>
          ),
        },
      ]}
      similarAnimals={
        <p>
          Geckos are lizards, related to the chameleon, iguana, and monitor
          lizard covered on FaunaHub, though they form their own large group.
          Their climbing toe pads (in many species) and vocalisations help
          distinguish them from other small lizards.
        </p>
      }
      faqs={[
        {
          question: "How do geckos climb walls and glass?",
          answer:
            "Many geckos have toe pads covered in microscopic hair-like structures (setae) that grip surfaces through tiny adhesive forces, letting them climb smooth surfaces including glass. Not all geckos have these pads — the leopard gecko, for example, does not.",
        },
        {
          question: "Are geckos good pets?",
          answer:
            "Some geckos, such as leopard geckos, are commonly kept by experienced reptile keepers, but they need specialised housing, heat, and care. This page is an educational wildlife profile, not a care guide; consult a qualified reptile veterinarian or specialist before keeping any reptile.",
        },
        {
          question: "Why do some geckos make noise?",
          answer:
            "Unusually among lizards, many geckos are vocal, producing chirps, clicks, or barks used in communication such as defending territory or attracting mates. The familiar name \"gecko\" itself echoes the call of some species.",
        },
      ]}
      quickFacts={[
        { label: "Group", value: "Geckos (infraorder Gekkota)" },
        { label: "Reference species", value: "Leopard gecko (Eublepharis macularius)" },
        { label: "Class", value: "Reptilia" },
        { label: "Diet", value: "Mostly insectivore" },
        { label: "Notable traits", value: "Climbing toe pads (many); vocal" },
        { label: "Conservation", value: "Varies by species — verify on IUCN" },
      ]}
      relatedLinks={[
        { label: "Chameleon Profile", href: "/animals/chameleon", description: "Another distinctive lizard" },
        { label: "Iguana Profile", href: "/animals/iguana" },
        { label: "Salamander Profile", href: "/animals/salamander" },
        { label: "Reptiles & Amphibians", href: "/animal-encyclopedia/reptiles" },
        { label: "Wildlife Hub", href: "/wildlife" },
      ]}
      sources={ANIMAL_SOURCES.gecko}
      publishedDate={PUBLISHED}
      modifiedDate={MODIFIED}
    />
  );
}
