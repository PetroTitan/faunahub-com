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

const title = "Angelfish — Profile, Habitat, Diet & Behavior";
const description =
  "The freshwater angelfish (Pterophyllum scalare): an educational profile of this tall-finned cichlid — appearance, Amazon habitat, behaviour, and aquarium context.";

export const metadata: Metadata = buildArticleMetadata({
  title,
  description,
  path: "/animals/angelfish",
  publishedTime: PUBLISHED,
  modifiedTime: MODIFIED,
  ogImage: getAnimalOgImage("angelfish"),
});

export default function AngelfishPage() {
  return (
    <AnimalProfileLayout
      commonName="Angelfish"
      scientificName="Pterophyllum scalare"
      pageTitle={title}
      description={description}
      path="/animals/angelfish"
      parentCategory="Fish"
      parentCategoryHref="/animal-encyclopedia/fish"
      tags={["Fish", "Freshwater", "Aquarium"]}
      image={getAnimalImage("angelfish") ?? undefined}
      galleryImages={getAnimalGalleryImages("angelfish")}
      factsHeaderNote="This page covers the freshwater angelfish (Pterophyllum scalare), a cichlid — not the unrelated marine angelfishes. Angelfish are tall-bodied and need a suitably sized, maintained aquarium."
      overview={
        <>
          <p>
            The freshwater angelfish (<em>Pterophyllum scalare</em>) is a
            popular aquarium cichlid from South America, recognised by its tall,
            triangular body and long, trailing fins. It should not be confused
            with the marine angelfishes, which are an unrelated group. Freshwater
            angelfish are graceful and long-finned, and they are a step up in
            care from the smallest beginner fish because of their size and
            temperament.
          </p>
        </>
      }
      habitat={
        <>
          <p>
            Wild freshwater angelfish live in the slow-moving, often densely
            vegetated waters of the Amazon basin and other parts of tropical
            South America, where their tall, narrow shape helps them move among
            plants and roots. In aquariums they are tropical fish that need a
            heated, filtered, and tall tank to accommodate their fin height.
            Released aquarium fish can harm local ecosystems and should never be
            put into the wild.
          </p>
        </>
      }
      diet={
        <>
          <p>
            Angelfish are omnivores that lean carnivorous, feeding in the wild on
            small invertebrates and other small prey along with plant material.
            In aquariums they are given prepared foods suited to their needs.
            This page does not give feeding quantities; appropriate diet and
            amounts depend on the individual fish and should follow qualified
            aquarium guidance.
          </p>
        </>
      }
      behavior={
        <>
          <p>
            Angelfish are cichlids and can be territorial, particularly when
            breeding, when a pair may defend a chosen site. They can be kept with
            compatible tank mates, but very small fish may be seen as food, so
            stocking choices need care. They are intelligent and can become
            familiar with their keepers. As with all fish, behaviour depends on
            tank size, layout, and water quality.
          </p>
        </>
      }
      humanInteraction={
        <>
          <p>
            Angelfish have been bred into many colour and fin varieties and are a
            mainstay of the freshwater aquarium hobby. They are aquarium animals,
            not wildlife; releasing them is harmful. Responsible keeping means a
            suitably sized, heated, well-maintained aquarium, careful tank-mate
            selection, and qualified help if a fish appears unwell. This profile
            is educational and not a substitute for aquarium-care or veterinary
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
                The freshwater angelfish has a distinctive disc-shaped, laterally
                compressed body with greatly extended dorsal and anal fins and
                long, trailing pelvic fins, giving a tall, arrowhead profile. The
                wild form is silver with dark vertical bars that can fade or
                intensify with mood, but selective breeding has produced marble,
                gold, black, and other patterns. This shape is quite different
                from the rounded marine angelfishes.
              </p>
            </>
          ),
        },
      ]}
      similarAnimals={
        <p>
          Freshwater angelfish are cichlids, the same broad family as many other
          aquarium and wild fish. The name &quot;angelfish&quot; is also used for
          unrelated marine reef fish, so the two should not be confused. Among
          FaunaHub&apos;s aquarium profiles, tetras are common, peaceful
          tank-mates often kept in community aquariums.
        </p>
      }
      comparisonCallouts={[
        { href: "/aquarium-care/freshwater-aquarium-beginners", label: "Freshwater aquarium basics" },
        { href: "/aquarium-care", label: "Aquarium care hub" },
      ]}
      faqs={[
        {
          question: "Is the freshwater angelfish the same as a marine angelfish?",
          answer:
            "No. The freshwater angelfish (Pterophyllum scalare) is a South American cichlid. The colourful marine or saltwater angelfishes are an unrelated reef-fish family. They share a common name but are very different fish with different care.",
        },
        {
          question: "Are angelfish good for beginners?",
          answer:
            "Angelfish are popular but are generally considered a step beyond the easiest beginner fish, because of their size, tall fins, and cichlid temperament. They need a suitably tall, well-maintained tank and careful tank-mate choices. Research and qualified guidance help avoid problems.",
        },
        {
          question: "Why do angelfish become aggressive sometimes?",
          answer:
            "As cichlids, angelfish can be territorial, especially when forming pairs or breeding, when they may defend a site. Aggression is influenced by tank size, layout, and stocking. Thoughtful aquarium planning reduces conflict.",
        },
      ]}
      quickFacts={[
        { label: "Scientific name", value: "Pterophyllum scalare" },
        { label: "Family", value: "Cichlidae (cichlids)" },
        { label: "Type", value: "Freshwater fish (tropical)" },
        { label: "Native range", value: "Tropical South America (Amazon basin)" },
        { label: "Diet", value: "Omnivore (leans carnivorous)" },
        { label: "Context", value: "Aquarium fish — needs a tall, maintained tank" },
      ]}
      relatedLinks={[
        { label: "Tetra Profile", href: "/animals/tetra", description: "Common community-tank fish" },
        { label: "Guppy Profile", href: "/animals/guppy" },
        { label: "Aquarium Care Hub", href: "/aquarium-care", description: "Responsible fishkeeping basics" },
        { label: "Fish Encyclopedia", href: "/animal-encyclopedia/fish" },
        { label: "Animal Encyclopedia", href: "/animal-encyclopedia" },
      ]}
      sources={ANIMAL_SOURCES.angelfish}
      publishedDate={PUBLISHED}
      modifiedDate={MODIFIED}
    />
  );
}
