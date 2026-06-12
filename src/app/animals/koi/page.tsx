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

const title = "Koi — Profile, Habitat, Diet & Behavior";
const description =
  "Koi are ornamental varieties of the common carp kept in ponds. An educational profile: colours, pond habitat, behaviour, and why koi are a long-term commitment.";

export const metadata: Metadata = buildArticleMetadata({
  title,
  description,
  path: "/animals/koi",
  publishedTime: PUBLISHED,
  modifiedTime: MODIFIED,
  ogImage: getAnimalOgImage("koi"),
});

export default function KoiPage() {
  return (
    <AnimalProfileLayout
      commonName="Koi"
      scientificName="Cyprinus carpio"
      pageTitle={title}
      description={description}
      path="/animals/koi"
      parentCategory="Fish"
      parentCategoryHref="/animal-encyclopedia/fish"
      tags={["Fish", "Freshwater", "Pond"]}
      image={getAnimalImage("koi") ?? undefined}
      galleryImages={getAnimalGalleryImages("koi")}
      factsHeaderNote="Koi are ornamental common carp (Cyprinus carpio) bred for colour. They grow large and long-lived and need a substantial, well-filtered pond — a major long-term commitment. Educational page, not pond-care or veterinary advice."
      overview={
        <>
          <p>
            Koi are ornamental varieties of the common carp
            (<em>Cyprinus carpio</em>), selectively bred in Japan and elsewhere
            for striking colours and patterns. They are classic ornamental pond
            fish, valued for their beauty and longevity. Although they descend
            from the same species as wild and farmed carp, koi are bred purely
            for appearance. They are large, long-lived fish and a serious
            long-term responsibility.
          </p>
        </>
      }
      habitat={
        <>
          <p>
            Koi are kept in outdoor ponds and water gardens rather than the
            wild, though their carp ancestors live in fresh waters across Eurasia.
            A suitable koi pond needs to be large and deep enough for big fish,
            with strong filtration and stable water quality. Koi are coldwater
            fish that can overwinter in suitable ponds in many climates.
            Released koi can become invasive, so they should never be put into
            local waterways.
          </p>
        </>
      }
      diet={
        <>
          <p>
            Koi are omnivores that forage for plants, invertebrates, and organic
            matter and are fed prepared pond foods in captivity, with feeding
            often reduced or stopped in cold weather when their metabolism slows.
            This page does not give feeding quantities; appropriate diet and
            amounts depend on the fish, season, and water temperature and should
            follow qualified guidance.
          </p>
        </>
      }
      behavior={
        <>
          <p>
            Koi are social, generally peaceful fish that are active in warmer
            water and slow down as temperatures fall. Many become accustomed to
            their keepers and may feed at the surface. They can live a long time
            and grow large, so their behaviour and needs change as they mature.
            Good water quality is central to their health.
          </p>
        </>
      }
      humanInteraction={
        <>
          <p>
            Koi have deep cultural significance, especially in Japan, and koi
            keeping is a long-established hobby. They are ornamental pond
            animals, not wildlife; releasing them is harmful and often illegal.
            Responsible keeping means an adequately sized, well-filtered pond, a
            long-term commitment to maintenance, and qualified help if a fish
            appears unwell. This profile is educational and not a substitute for
            pond-care or veterinary advice.
          </p>
        </>
      }
      extraSections={[
        {
          heading: "Appearance & Recognition",
          body: (
            <>
              <p>
                Koi are large, torpedo-shaped carp that can reach substantial
                sizes. They are bred in many named colour varieties — combining
                white, red, orange, yellow, black, blue, and metallic tones in
                distinctive patterns. Some have barbels at the mouth like other
                carp. The variety and quality of colouration are central to how
                koi are appreciated by enthusiasts.
              </p>
            </>
          ),
        },
      ]}
      similarAnimals={
        <p>
          Koi are the same species as the common carp covered separately on
          FaunaHub and are close relatives of the goldfish. They are sometimes
          confused with large goldfish, but koi grow much bigger, usually have
          barbels, and are kept in ponds rather than aquariums.
        </p>
      }
      comparisonCallouts={[
        { href: "/aquarium-care", label: "Aquarium & pond care hub" },
      ]}
      faqs={[
        {
          question: "Are koi and goldfish the same?",
          answer:
            "No. Both are ornamental carp-family fish, but koi are a colour-bred form of the common carp (Cyprinus carpio) and grow much larger, while goldfish are a different species (Carassius auratus). Koi also typically have barbels at the mouth, which goldfish lack.",
        },
        {
          question: "How big do koi get and how long do they live?",
          answer:
            "Koi can grow large and are long-lived, often living for many years or even decades in well-maintained ponds. Exact size and lifespan depend heavily on genetics, pond size, and water quality, so figures should be treated as general rather than guaranteed.",
        },
        {
          question: "Can koi live in a small pond or tank?",
          answer:
            "Koi need substantial, well-filtered space because they grow large and produce a lot of waste; small ponds or tanks are generally unsuitable for adult koi. Specific pond requirements should follow qualified guidance — keeping koi is a long-term commitment.",
        },
      ]}
      quickFacts={[
        { label: "Scientific name", value: "Cyprinus carpio (ornamental form)" },
        { label: "Family", value: "Cyprinidae (carp family)" },
        { label: "Type", value: "Freshwater pond fish" },
        { label: "Temperature", value: "Coldwater" },
        { label: "Diet", value: "Omnivore" },
        { label: "Context", value: "Ornamental pond fish — large, long-lived commitment" },
      ]}
      relatedLinks={[
        { label: "Carp Profile", href: "/animals/carp", description: "The wild species koi are bred from" },
        { label: "Goldfish Profile", href: "/animals/goldfish" },
        { label: "Aquarium Care Hub", href: "/aquarium-care", description: "Responsible fishkeeping basics" },
        { label: "Fish Encyclopedia", href: "/animal-encyclopedia/fish" },
        { label: "Animal Encyclopedia", href: "/animal-encyclopedia" },
      ]}
      sources={ANIMAL_SOURCES.koi}
      publishedDate={PUBLISHED}
      modifiedDate={MODIFIED}
    />
  );
}
