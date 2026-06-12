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

const title = "Sparrow — Profile, Habitat, Diet & Behavior";
const description =
  "Sparrows are small seed-eating songbirds. A group-level overview using the house sparrow (Passer domesticus) as a reference: appearance, habitat, and behaviour.";

export const metadata: Metadata = buildArticleMetadata({
  title,
  description,
  path: "/animals/sparrow",
  publishedTime: PUBLISHED,
  modifiedTime: MODIFIED,
  ogImage: getAnimalOgImage("sparrow"),
});

export default function SparrowPage() {
  return (
    <AnimalProfileLayout
      commonName="Sparrow"
      pageTitle={title}
      description={description}
      path="/animals/sparrow"
      parentCategory="Birds"
      parentCategoryHref="/animal-encyclopedia/birds"
      tags={["Bird", "Songbird", "Wild"]}
      image={getAnimalImage("sparrow") ?? undefined}
      galleryImages={getAnimalGalleryImages("sparrow")}
      factsHeaderNote="“Sparrow” covers many small songbird species. The reference shown is the house sparrow (Passer domesticus). Old World sparrows and the unrelated New World sparrows differ — not all share the same range or habits."
      overview={
        <>
          <p>
            &quot;Sparrow&quot; is a common name for many small, mostly seed-
            eating songbirds. This page is a group-level overview; the house
            sparrow (<em>Passer domesticus</em>) is used as a familiar reference.
            The house sparrow is one of the most widespread birds in the world,
            closely associated with people, and it should not be confused with
            the unrelated New World sparrows of the Americas.
          </p>
        </>
      }
      habitat={
        <>
          <p>
            House sparrows live close to human settlement — towns, farms,
            gardens, and city streets — across much of the world, both within
            their native range and where they have been introduced. Other
            sparrows occupy grassland, scrub, woodland, and wetland edges.
            Habitat and range vary widely by species, so a description of the
            house sparrow does not fit every &quot;sparrow&quot;.
          </p>
        </>
      }
      diet={
        <>
          <p>
            House sparrows are mainly seed-eaters as adults, also taking grain,
            scraps, and insects, with insects especially important for feeding
            chicks. Other sparrow species vary in the balance of seeds and
            invertebrates they eat. Diet shifts with season and species; this
            page describes general feeding ecology.
          </p>
        </>
      }
      behavior={
        <>
          <p>
            House sparrows are highly social, often seen in noisy flocks and
            nesting in loose colonies in cavities and on buildings. They are
            active, bold around people, and communicate with simple chirps.
            Behaviour varies across the many sparrow species, from gregarious
            house sparrows to more retiring grassland species.
          </p>
        </>
      }
      humanInteraction={
        <>
          <p>
            Sparrows are wild birds, not pets, and are protected by wildlife law
            in many places. House sparrow populations have declined in several
            regions, which has prompted conservation interest, while the species
            remains abundant elsewhere; status varies and should be checked
            against current sources. Do not disturb nests, eggs, or chicks, and
            contact a licensed wildlife rehabilitator or local authority for any
            injured wild bird.
          </p>
        </>
      }
      extraSections={[
        {
          heading: "Appearance & Recognition",
          body: (
            <>
              <p>
                The male house sparrow has a grey crown, black bib, chestnut
                nape, and streaked brown back; the female is plainer, with buff-
                brown and streaked plumage and a pale stripe behind the eye.
                Sparrows are small, stocky birds with short, conical bills suited
                to cracking seeds. Other sparrow species vary considerably in
                markings, so size, bill shape, and head pattern are useful
                identification clues.
              </p>
            </>
          ),
        },
      ]}
      similarAnimals={
        <p>
          House sparrows belong to the Old World sparrow family (Passeridae).
          The New World sparrows of the Americas look similar but are a
          different family. Sparrows are sometimes confused with finches and
          buntings, and with the European robin and other small garden birds
          covered on FaunaHub.
        </p>
      }
      comparisonCallouts={[
        { href: "/birdwatching", label: "Birdwatching hub" },
        { href: "/birdwatching/backyard-bird-identification", label: "Backyard bird identification" },
      ]}
      faqs={[
        {
          question: "Are all sparrows the same kind of bird?",
          answer:
            "No. \"Sparrow\" covers many species. The Old World sparrows (such as the house sparrow) and the New World sparrows of the Americas are different families that share a name. This page is a group-level overview using the house sparrow as a reference.",
        },
        {
          question: "How do I tell male and female house sparrows apart?",
          answer:
            "Male house sparrows have a grey crown, black bib, and chestnut markings, while females are plainer buff-brown with streaking and a pale eye-stripe. This contrast is a helpful identification clue, though other sparrow species differ.",
        },
        {
          question: "Are house sparrows declining?",
          answer:
            "House sparrows have declined in several regions, prompting conservation attention, while remaining common in others. Because status varies by population and is monitored, check current sources such as the IUCN Red List and bird organisations rather than assuming.",
        },
      ]}
      quickFacts={[
        { label: "Group", value: "Sparrows (Old World family Passeridae)" },
        { label: "Reference species", value: "House sparrow (Passer domesticus)" },
        { label: "Class", value: "Aves" },
        { label: "Diet", value: "Mainly seeds; insects for chicks" },
        { label: "Habitat", value: "Towns, farms, gardens (house sparrow)" },
        { label: "Social structure", value: "Highly social; flocking" },
        { label: "Conservation", value: "Varies by species/region — verify on IUCN" },
      ]}
      relatedLinks={[
        { label: "Robin Profile", href: "/animals/robin", description: "Another familiar garden bird" },
        { label: "Pigeon Profile", href: "/animals/pigeon" },
        { label: "Birdwatching Hub", href: "/birdwatching" },
        { label: "Bird Encyclopedia", href: "/animal-encyclopedia/birds" },
        { label: "Wildlife Hub", href: "/wildlife" },
      ]}
      sources={ANIMAL_SOURCES.sparrow}
      publishedDate={PUBLISHED}
      modifiedDate={MODIFIED}
    />
  );
}
