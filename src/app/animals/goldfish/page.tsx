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

const title = "Goldfish — Profile, Habitat, Diet & Behavior";
const description =
  "The goldfish (Carassius auratus): an educational profile of this domesticated carp-family fish — varieties, behaviour, and why goldfish need far more space than a bowl.";

export const metadata: Metadata = buildArticleMetadata({
  title,
  description,
  path: "/animals/goldfish",
  publishedTime: PUBLISHED,
  modifiedTime: MODIFIED,
  ogImage: getAnimalOgImage("goldfish"),
});

export default function GoldfishPage() {
  return (
    <AnimalProfileLayout
      commonName="Goldfish"
      scientificName="Carassius auratus"
      pageTitle={title}
      description={description}
      path="/animals/goldfish"
      parentCategory="Fish"
      parentCategoryHref="/animal-encyclopedia/fish"
      tags={["Fish", "Freshwater", "Aquarium"]}
      image={getAnimalImage("goldfish") ?? undefined}
      galleryImages={getAnimalGalleryImages("goldfish")}
      factsHeaderNote="Goldfish are long-lived, fairly large fish that need much more space and filtration than a small bowl. This page is educational, not aquarium-care or veterinary advice."
      overview={
        <>
          <p>
            The goldfish (<em>Carassius auratus</em>) is a domesticated
            freshwater fish in the carp family (Cyprinidae), originally bred
            from wild carp in East Asia more than a thousand years ago. It is
            one of the most familiar aquarium and pond fish in the world and
            exists in many ornamental varieties. Despite their reputation,
            goldfish are not disposable: they can grow large and live a long
            time with appropriate care.
          </p>
        </>
      }
      habitat={
        <>
          <p>
            Goldfish are a domesticated form, so they have no truly wild
            &quot;native habitat&quot; in the way wild species do, though their
            carp ancestors live in fresh waters of Asia. In captivity they are
            kept in aquariums and outdoor ponds. They are coldwater fish that do
            not require tropical heating, but they do need a generously sized,
            well-filtered environment — far beyond a small bowl. Released
            goldfish can become invasive, so they should never be put into local
            waterways.
          </p>
        </>
      }
      diet={
        <>
          <p>
            Goldfish are omnivores that, in suitable conditions, eat a mix of
            plant matter, small invertebrates, and prepared foods formulated for
            goldfish. They forage and root around substrate. This page does not
            give feeding quantities; appropriate diet and amounts depend on the
            individual fish and water temperature and should follow qualified
            aquarium guidance.
          </p>
        </>
      }
      behavior={
        <>
          <p>
            Goldfish are generally peaceful, social fish that are active during
            the day and often interact with their surroundings and keepers.
            They are hardy in the sense of tolerating a range of temperatures,
            but they produce a lot of waste, which makes good filtration and
            water quality important. Behaviour and growth depend heavily on the
            quality of their environment.
          </p>
        </>
      }
      humanInteraction={
        <>
          <p>
            Goldfish have been bred for ornamental features for centuries,
            producing fancy varieties with telescope eyes, long fins, and varied
            body shapes. They are aquarium and pond animals, not wildlife;
            releasing them is harmful and in many places discouraged or illegal.
            Responsible keeping means adequate space, filtration, and water
            quality, and seeking qualified help if a fish appears unwell. This
            profile is educational and not a substitute for aquarium-care or
            veterinary advice.
          </p>
        </>
      }
      extraSections={[
        {
          heading: "Appearance & Recognition",
          body: (
            <>
              <p>
                The common goldfish is a streamlined fish, typically
                orange-gold but also seen in white, red, black, and
                multicoloured forms. Centuries of breeding have produced
                &quot;fancy&quot; varieties with rounded bodies, flowing double
                tails, telescope or bubble eyes, and head growths. All are the
                same species. Fancy varieties are often more delicate than the
                common goldfish and can have specific care needs.
              </p>
            </>
          ),
        },
      ]}
      similarAnimals={
        <p>
          Goldfish are close relatives of the carp and koi covered separately on
          FaunaHub — all are members of the carp family. Koi, in particular, are
          ornamental common carp and are sometimes confused with large goldfish,
          but they are a different species and grow much larger.
        </p>
      }
      comparisonCallouts={[
        { href: "/aquarium-care/goldfish-care-basics", label: "Goldfish care basics" },
        { href: "/aquarium-care", label: "Aquarium care hub" },
      ]}
      faqs={[
        {
          question: "Can goldfish live in a bowl?",
          answer:
            "Small unfiltered bowls are widely considered inadequate for goldfish, which can grow sizeable, are long-lived, and produce a lot of waste. They need a generously sized, well-filtered aquarium or pond. Specific requirements should follow qualified aquarium guidance.",
        },
        {
          question: "How long do goldfish live?",
          answer:
            "With appropriate care goldfish can live many years — often well into the double digits — and some live much longer. Lifespan depends heavily on environment, water quality, and variety, so figures should be treated as general rather than guaranteed.",
        },
        {
          question: "Are goldfish coldwater or tropical fish?",
          answer:
            "Goldfish are coldwater fish and generally do not need a heated tropical aquarium. They still require stable, good-quality, well-filtered water within a suitable temperature range, which should be confirmed with qualified guidance.",
        },
      ]}
      quickFacts={[
        { label: "Scientific name", value: "Carassius auratus" },
        { label: "Family", value: "Cyprinidae (carp family)" },
        { label: "Type", value: "Freshwater fish (domesticated)" },
        { label: "Temperature", value: "Coldwater (not tropical)" },
        { label: "Diet", value: "Omnivore" },
        { label: "Context", value: "Aquarium/pond fish — needs space and filtration" },
      ]}
      relatedLinks={[
        { label: "Koi Profile", href: "/animals/koi", description: "Ornamental carp relative" },
        { label: "Carp Profile", href: "/animals/carp" },
        { label: "Aquarium Care Hub", href: "/aquarium-care", description: "Responsible fishkeeping basics" },
        { label: "Fish Encyclopedia", href: "/animal-encyclopedia/fish" },
        { label: "Animal Encyclopedia", href: "/animal-encyclopedia" },
      ]}
      sources={ANIMAL_SOURCES.goldfish}
      publishedDate={PUBLISHED}
      modifiedDate={MODIFIED}
    />
  );
}
