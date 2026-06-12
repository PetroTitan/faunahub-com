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

const title = "Stork — Profile, Habitat, Diet & Behavior";
const description =
  "Storks are tall, long-legged wading birds. A group-level overview using the white stork as a reference: wetland and grassland habitat, diet, migration, and behaviour.";

export const metadata: Metadata = buildArticleMetadata({
  title,
  description,
  path: "/animals/stork",
  publishedTime: PUBLISHED,
  modifiedTime: MODIFIED,
  ogImage: getAnimalOgImage("stork"),
});

export default function StorkPage() {
  return (
    <AnimalProfileLayout
      commonName="Stork"
      pageTitle={title}
      description={description}
      path="/animals/stork"
      parentCategory="Birds"
      parentCategoryHref="/animal-encyclopedia/birds"
      tags={["Bird", "Wading Bird", "Wild"]}
      image={getAnimalImage("stork") ?? undefined}
      galleryImages={getAnimalGalleryImages("stork")}
      factsHeaderNote="“Stork” covers many species in the family Ciconiidae. The reference shown is the white stork (Ciconia ciconia). Size, colour, diet, and range vary by species."
      overview={
        <>
          <p>
            Storks are large, long-legged, long-necked wading birds in the family
            Ciconiidae, found across much of the world. This page is a
            group-level overview; the white stork (<em>Ciconia ciconia</em>) — a
            familiar bird of European farmland known for nesting on rooftops — is
            used as a reference. Storks are strong soaring fliers, and several
            species undertake long migrations.
          </p>
        </>
      }
      habitat={
        <>
          <p>
            Storks live in open wetlands, grasslands, farmland, and along rivers
            and shallow water, where they forage by walking and probing. The
            white stork breeds across Europe, parts of Asia, and North Africa and
            winters in Africa, while other storks occur in the Americas, Asia, and
            Africa. Habitat and range vary by species.
          </p>
        </>
      }
      diet={
        <>
          <p>
            Storks are carnivores that feed on a wide range of small animals,
            including insects, earthworms, amphibians, reptiles, fish, and small
            mammals, taken by walking through open ground or shallow water. Some
            storks also scavenge. Diet varies by species and habitat; this page
            describes general feeding ecology.
          </p>
        </>
      }
      behavior={
        <>
          <p>
            Many storks are migratory and famous for soaring on thermals to
            travel long distances, often in large groups. White storks build
            large stick nests, frequently reused over many years on buildings,
            poles, and trees, and they are known for bill-clattering displays
            rather than calls. Storks often nest colonially. Behaviour varies
            among the stork species.
          </p>
        </>
      }
      humanInteraction={
        <>
          <p>
            Storks are wild birds, not pets, and are protected by wildlife law in
            many places. The white stork has a close cultural association with
            people and often nests in towns and villages; some populations have
            been the focus of conservation and reintroduction efforts. Other
            storks face pressures from wetland loss and disturbance, and some are
            threatened. Conservation status varies by species and should be
            checked against current sources. Do not disturb stork nests.
          </p>
        </>
      }
      extraSections={[
        {
          heading: "Appearance & Recognition",
          body: (
            <>
              <p>
                The white stork is a large bird with white plumage, black flight
                feathers, long red legs, and a long, straight red bill. In flight,
                storks hold the neck outstretched, unlike herons, which fold the
                neck back. Other storks vary — some are darker or have bare-skinned
                heads. Long legs, a heavy straight bill, soaring flight, and
                outstretched neck help identify storks as a group.
              </p>
            </>
          ),
        },
      ]}
      similarAnimals={
        <p>
          Storks are sometimes confused with herons and cranes, but they fly with
          the neck outstretched (herons fold it) and differ in bill and behaviour.
          Among the wading birds covered on FaunaHub, storks share wetland
          habitats with flamingos and pelicans but belong to their own family.
        </p>
      }
      comparisonCallouts={[
        { href: "/birdwatching", label: "Birdwatching hub" },
        { href: "/birdwatching/bird-nesting-season-basics", label: "Nesting season cautions" },
      ]}
      faqs={[
        {
          question: "How can I tell a stork from a heron?",
          answer:
            "A useful clue is flight posture: storks fly with the neck outstretched, while herons fold the neck back in an S-shape. Storks also tend to have heavier, straighter bills and often soar on thermals. Both are long-legged wading birds, but they belong to different families.",
        },
        {
          question: "Do storks really return to the same nest each year?",
          answer:
            "White storks often reuse large stick nests over many years, adding to them each season, and pairs may return to favoured nest sites. The famous association of storks with rooftops comes from this habit of nesting on buildings.",
        },
        {
          question: "Are storks endangered?",
          answer:
            "It depends on the species. The white stork is widespread and has benefited from conservation work in places, while some other storks are threatened by wetland loss and disturbance. Status varies by species and should be checked against current IUCN sources.",
        },
      ]}
      quickFacts={[
        { label: "Group", value: "Storks (family Ciconiidae)" },
        { label: "Reference species", value: "White stork (Ciconia ciconia)" },
        { label: "Class", value: "Aves" },
        { label: "Diet", value: "Carnivore (insects, amphibians, fish, small animals)" },
        { label: "Notable trait", value: "Soaring migration; large reused nests" },
        { label: "Conservation", value: "Varies by species — verify on IUCN" },
      ]}
      relatedLinks={[
        { label: "Flamingo Profile", href: "/animals/flamingo", description: "Another tall wading bird" },
        { label: "Pelican Profile", href: "/animals/pelican" },
        { label: "Swan Profile", href: "/animals/swan" },
        { label: "Bird Encyclopedia", href: "/animal-encyclopedia/birds" },
        { label: "Wildlife Hub", href: "/wildlife" },
      ]}
      sources={ANIMAL_SOURCES.stork}
      publishedDate={PUBLISHED}
      modifiedDate={MODIFIED}
    />
  );
}
