import type { Metadata } from "next";
import AnimalProfileLayout from "@/components/AnimalProfileLayout";
import { ANIMAL_SOURCES } from "@/lib/educational/animal-sources";
import {
  getAnimalGalleryImages,
  getAnimalImage,
  getAnimalOgImage,
} from "@/lib/images/animal-images";
import { buildArticleMetadata } from "@/lib/metadata";

const PUBLISHED = "2026-05-21";
const MODIFIED = "2026-05-21";

const title = "Raccoon — Profile, Habitat, Diet & Behavior";
const description =
  "Procyon lotor: the common raccoon. Distribution, urban-adaptable omnivore, dexterous forepaws, and cautious notes on wildlife rather than pet status.";

export const metadata: Metadata = buildArticleMetadata({
  title,
  description,
  path: "/animals/raccoon",
  publishedTime: PUBLISHED,
  modifiedTime: MODIFIED,
  ogImage: getAnimalOgImage("raccoon"),
});

export default function RaccoonPage() {
  return (
    <AnimalProfileLayout
      commonName="Raccoon"
      scientificName="Procyon lotor"
      pageTitle={title}
      description={description}
      path="/animals/raccoon"
      parentCategory="Mammals"
      parentCategoryHref="/animal-encyclopedia/mammals"
      tags={["Mammal", "Omnivore", "Urban Adapter"]}
      image={getAnimalImage("raccoon") ?? undefined}
      galleryImages={getAnimalGalleryImages("raccoon")}
      overview={
        <>
          <p>
            The common raccoon (<em>Procyon lotor</em>) is a medium-sized
            omnivorous mammal native to North America and introduced to
            parts of Europe and Asia. Raccoons are easily recognised by
            their black facial &quot;mask&quot;, ringed tail, and dexterous
            forepaws. They are notable for their adaptability to
            human-altered landscapes and for distinctive food-handling
            behaviour, including the well-known habit of manipulating prey
            and food items in water.
          </p>
        </>
      }
      habitat={
        <>
          <p>
            Raccoons are habitat generalists found in forests, wetlands,
            farmland, suburbs, and dense urban areas. They typically den in
            tree cavities, hollow logs, abandoned burrows, or human
            structures such as attics and chimneys. Their range has
            expanded substantially during the past century, with
            introduced populations established in several European
            countries.
          </p>
        </>
      }
      diet={
        <>
          <p>
            Raccoons are flexible omnivores. Diet varies seasonally and
            locally and may include fruits, nuts, insects, eggs, small
            vertebrates, crustaceans, fish, and — in urban settings —
            anthropogenic food sources such as garbage. Forepaws with
            highly sensitive touch are used for searching shallow water for
            prey and for handling food items.
          </p>
        </>
      }
      behavior={
        <>
          <p>
            Raccoons are primarily nocturnal but can be active during the
            day, particularly mothers with kits. They are generally
            solitary but tolerate overlapping ranges. Vocalisations
            include trills, growls, and chitters. Raccoons are not denning
            hibernators in most of their range but enter periods of reduced
            activity in cold weather.
          </p>
        </>
      }
      humanInteraction={
        <>
          <p>
            Raccoons are wildlife — not pets — in most jurisdictions.
            Several U.S. states and many other regions prohibit private
            keeping of raccoons; many others require permits. Raccoons can
            carry diseases of significant public-health and pet-health
            concern, including raccoon roundworm (<em>Baylisascaris
            procyonis</em>) and rabies in some regions. Sick or
            unusually-behaving raccoons should be reported to local wildlife
            authorities. Do not handle, feed, or relocate wild raccoons
            without qualified guidance.
          </p>
        </>
      }
      similarAnimals={
        <p>
          Other procyonids include coatis, kinkajous, and ringtails. In
          regions where they have been introduced, raccoons sometimes
          overlap ecologically with native species such as European
          badgers and pine martens.
        </p>
      }
      faqs={[
        {
          question: "Are raccoons safe to handle?",
          answer:
            "No. Raccoons can carry diseases serious to humans and pets, including raccoon roundworm and, in some regions, rabies. Do not approach, feed, or attempt to handle wild raccoons. Sick or injured raccoons should be reported to local wildlife authorities or licensed wildlife rehabilitators.",
        },
        {
          question: "Can raccoons be kept as pets?",
          answer:
            "Most jurisdictions strictly regulate or prohibit private keeping of raccoons because of disease risk, welfare needs, and wildlife-management concerns. FaunaHub does not recommend keeping raccoons as pets. Always check national and local wildlife law.",
        },
        {
          question: "Do raccoons really wash their food?",
          answer:
            "Raccoons frequently manipulate food items in water, but the behaviour appears to be more about heightening the touch sensitivity of their forepaws — which are extremely tactile — than literally cleaning food. Authoritative summaries are available from Animal Diversity Web and Britannica.",
        },
        {
          question: "What should I do if a raccoon is in my attic?",
          answer:
            "Contact a licensed wildlife-removal service in your area. Do not attempt to corner, capture, or remove a raccoon yourself. Mothers with kits in particular should be handled by trained professionals to avoid harming the animals or leaving orphaned kits behind.",
        },
      ]}
      quickFacts={[
        { label: "Scientific name", value: "Procyon lotor" },
        { label: "Family", value: "Procyonidae" },
        { label: "Class", value: "Mammalia" },
        { label: "Order", value: "Carnivora" },
        { label: "Diet", value: "Omnivore (broad and flexible)" },
        { label: "Activity", value: "Mostly nocturnal" },
        { label: "Native range", value: "North America (introduced elsewhere)" },
        { label: "IUCN Status", value: "Least Concern (verify current designation)" },
      ]}
      relatedLinks={[
        { label: "Fox Profile", href: "/animals/fox" },
        { label: "Wolf Profile", href: "/animals/wolf" },
        { label: "Animal Encyclopedia — Mammals", href: "/animal-encyclopedia/mammals" },
        { label: "Wildlife Hub", href: "/wildlife" },
      ]}
      sources={ANIMAL_SOURCES.raccoon}
      publishedDate={PUBLISHED}
      modifiedDate={MODIFIED}
    />
  );
}
