import type { Metadata } from "next";
import AnimalProfileLayout from "@/components/AnimalProfileLayout";
import { ANIMAL_SOURCES } from "@/lib/educational/animal-sources";
import { getAnimalGalleryImages, getAnimalImage, getAnimalOgImage } from "@/lib/images/animal-images";
import { buildArticleMetadata } from "@/lib/metadata";

const PATH = "/animals/genet";
const TITLE = "Genet — Profile, Habitat, Diet & Behavior";
const DESC =
  "Explore genets (genus Genetta): slender, spotted, cat-like carnivores of Africa and parts of Europe, agile nocturnal climbers with a long banded tail, using the common genet.";

export const metadata: Metadata = buildArticleMetadata({
  title: TITLE,
  description: DESC,
  path: PATH,
  publishedTime: "2026-06-20",
  modifiedTime: "2026-06-20",
  ogImage: getAnimalOgImage("genet"),
});

export default function GenetPage() {
  return (
    <AnimalProfileLayout
      commonName="Genet"
      scientificName="Genetta genetta"
      pageTitle={TITLE}
      description={DESC}
      path={PATH}
      parentCategory="Mammals"
      parentCategoryHref="/animal-encyclopedia/mammals"
      tags={["Mammal", "Viverridae", "Arboreal"]}
      image={getAnimalImage("genet") ?? undefined}
      galleryImages={getAnimalGalleryImages("genet")}
      sources={ANIMAL_SOURCES.genet}
      publishedDate="2026-06-20"
      modifiedDate="2026-06-20"
      overview={
        <>
          <p>
            Genets are slender, spotted, cat-like carnivores of the family Viverridae —
            the same family as civets. The common genet (<em>Genetta genetta</em>), shown
            here, has a lithe body, a pointed face, large ears, a boldly spotted coat, and
            a very long tail marked with dark rings. Genets are agile, mainly nocturnal
            animals and superb climbers.
          </p>
          <p>
            Native to Africa, the common genet also occurs in parts of southwestern
            Europe — where it was probably introduced long ago — making it one of the few
            viverrids found in Europe.
          </p>
          <p>
            <strong>Note:</strong> there are several genet species across Africa with
            similar but varied habits; details here use the common genet as a reference.
            Treat general statements as approximate and verify against authoritative
            sources.
          </p>
        </>
      }
      habitat={
        <p>
          The common genet lives in a variety of habitats with good cover — woodlands,
          scrub, rocky areas, and forest edges — across much of Africa and into
          southwestern Europe (Iberia and beyond). Other genet species occupy forests and
          savannas across sub-Saharan Africa. Genets favour areas with trees or rocks for
          shelter and climbing.
        </p>
      }
      diet={
        <p>
          Genets are carnivores that lean toward small prey: rodents and other small
          mammals, birds, insects, reptiles, and amphibians, supplemented at times with
          fruit. They are agile hunters that can pursue prey through trees as well as on
          the ground.
        </p>
      }
      behavior={
        <p>
          Genets are mostly nocturnal and solitary, resting by day in hollows, dense
          cover, or among rocks. They are exceptional climbers, with a long tail for
          balance and a flexible, low-slung body that lets them squeeze through tight
          gaps. Like other viverrids, they use scent marking to communicate, and they move
          with a characteristic sinuous, cat-like grace.
        </p>
      }
      humanInteraction={
        <p>
          Genets are generally shy and secretive but can live close to people and have
          sometimes been kept as semi-tame rodent-catchers historically. The common genet
          is widespread and not currently of major conservation concern, though some genet
          species are less well known. Consult authoritative sources for species-specific
          status.
        </p>
      }
      faqs={[
        {
          question: "Is a genet a cat?",
          answer:
            "No, although it looks remarkably cat-like. Genets belong to the family Viverridae, alongside civets, and are not true cats. Their resemblance to cats — slim body, spotted coat, long tail — is a case of similar lifestyles producing a similar appearance.",
        },
        {
          question: "Where do genets live?",
          answer:
            "Genets are mainly African, found across much of the continent in woodlands, scrub, and forests. The common genet also occurs in parts of southwestern Europe, such as the Iberian Peninsula, where it was probably introduced long ago — making it one of the few viverrids in Europe.",
        },
        {
          question: "What do genets eat?",
          answer:
            "Genets are carnivores that mostly take small prey: rodents and other small mammals, birds, insects, reptiles, and amphibians, with some fruit at times. They are agile enough to hunt both on the ground and up in trees.",
        },
        {
          question: "Are genets good climbers?",
          answer:
            "Yes, exceptionally so. With a long balancing tail and a flexible, low-slung body, genets move easily through trees and can slip through surprisingly narrow gaps. Climbing is central to how they hunt, travel, and find safe resting spots.",
        },
      ]}
      quickFacts={[
        { label: "Scientific name", value: "Genetta genetta (common genet)" },
        { label: "Family", value: "Viverridae (with civets)" },
        { label: "Class", value: "Mammalia" },
        { label: "Diet", value: "Carnivore (small prey + some fruit)" },
        { label: "Key traits", value: "Spotted coat; long ringed tail" },
        { label: "Activity", value: "Nocturnal & solitary; agile climber" },
        { label: "Range", value: "Africa + SW Europe" },
        { label: "Status", value: "Common (verify by species)" },
      ]}
      relatedLinks={[
        { label: "Civet Profile", href: "/animals/civet", description: "A larger viverrid relative" },
        { label: "Mongoose Profile", href: "/animals/mongoose", description: "A relative in a sister family" },
        { label: "Weasel Profile", href: "/animals/weasel", description: "A similarly slender hunter (different family)" },
        { label: "Fauna by Continent", href: "/fauna/continents", description: "African fauna in context" },
        { label: "Mammal Encyclopedia", href: "/animal-encyclopedia/mammals" },
      ]}
    />
  );
}
