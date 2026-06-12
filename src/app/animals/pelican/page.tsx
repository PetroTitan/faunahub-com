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

const title = "Pelican — Profile, Habitat, Diet & Behavior";
const description =
  "Pelicans are large waterbirds with a huge throat pouch for catching fish. A group-level overview using the brown pelican as a reference: habitat, diet, and behaviour.";

export const metadata: Metadata = buildArticleMetadata({
  title,
  description,
  path: "/animals/pelican",
  publishedTime: PUBLISHED,
  modifiedTime: MODIFIED,
  ogImage: getAnimalOgImage("pelican"),
});

export default function PelicanPage() {
  return (
    <AnimalProfileLayout
      commonName="Pelican"
      pageTitle={title}
      description={description}
      path="/animals/pelican"
      parentCategory="Birds"
      parentCategoryHref="/animal-encyclopedia/birds"
      tags={["Bird", "Waterbird", "Wild"]}
      image={getAnimalImage("pelican") ?? undefined}
      galleryImages={getAnimalGalleryImages("pelican")}
      factsHeaderNote="“Pelican” covers several species in the genus Pelecanus. The reference shown is the brown pelican (Pelecanus occidentalis). Size, colour, and fishing style vary by species."
      overview={
        <>
          <p>
            Pelicans are large waterbirds famous for the enormous stretchy pouch
            beneath their long bill, which they use to scoop up fish. There are
            several species in the genus <em>Pelecanus</em>. This page is a
            group-level overview; the brown pelican (<em>Pelecanus occidentalis</em>)
            is used as a familiar reference. Pelicans are strong fliers and
            graceful gliders despite their size.
          </p>
        </>
      }
      habitat={
        <>
          <p>
            Pelicans live in and around water — coasts, estuaries, lakes, and
            inland wetlands — across much of the world except the polar regions.
            The brown pelican is a coastal species of the Americas, while others,
            such as the great white and Dalmatian pelicans, frequent inland and
            wetland habitats. Habitat and range vary by species.
          </p>
        </>
      }
      diet={
        <>
          <p>
            Pelicans feed mainly on fish, which they capture using the throat
            pouch as a net before draining the water and swallowing the catch.
            Some species, including the brown pelican, plunge-dive dramatically
            from the air, while others fish cooperatively from the surface in
            groups. Diet varies by species; this page describes general feeding
            ecology.
          </p>
        </>
      }
      behavior={
        <>
          <p>
            Pelicans are social, often nesting in colonies and travelling in
            orderly lines or V-formations. They soar well on broad wings. Fishing
            style is a key behavioural difference — plunge-diving in the brown
            pelican versus cooperative surface fishing in some white pelicans.
            They preen carefully to maintain waterproof plumage. Behaviour varies
            among the pelican species.
          </p>
        </>
      }
      humanInteraction={
        <>
          <p>
            Pelicans are wild birds, not pets, and are protected by wildlife law
            in many places. The brown pelican is a notable conservation success
            story, having recovered after past declines linked to pesticides,
            though pelicans remain vulnerable to entanglement, pollution, and
            habitat loss. Conservation status varies by species and should be
            checked against current sources. Observe pelicans from a respectful
            distance and do not feed or disturb them.
          </p>
        </>
      }
      extraSections={[
        {
          heading: "Appearance & Recognition",
          body: (
            <>
              <p>
                Pelicans are unmistakable: very large birds with a long bill and
                a distinctive expandable throat pouch, broad wings, and short
                legs with fully webbed feet. The brown pelican is a grey-brown
                coastal species, while other pelicans are mostly white. Size, the
                huge pouch, and the soaring flight on broad wings make pelicans
                easy to recognise as a group.
              </p>
            </>
          ),
        },
      ]}
      similarAnimals={
        <p>
          Pelicans are related to other waterbirds such as herons, ibises, and
          the gannets and cormorants. Their unique pouch sets them apart from the
          swans, storks, and flamingos covered on FaunaHub, with which they share
          wetland habitats but only distant kinship.
        </p>
      }
      comparisonCallouts={[
        { href: "/birdwatching", label: "Birdwatching hub" },
      ]}
      faqs={[
        {
          question: "What is a pelican's pouch for?",
          answer:
            "The stretchy throat pouch acts like a net to scoop up fish along with water. The pelican then drains the water out of the sides of its bill before swallowing the fish. The pouch is not used to store food for later.",
        },
        {
          question: "Do all pelicans dive for fish?",
          answer:
            "No. The brown pelican is well known for plunge-diving from the air, but several other pelican species fish cooperatively from the surface, herding fish in groups rather than diving. Fishing style varies by species.",
        },
        {
          question: "Are pelicans endangered?",
          answer:
            "It varies by species. The brown pelican recovered strongly after past pesticide-related declines, but pelicans still face threats such as entanglement and habitat loss, and some species are of greater concern. Check current IUCN sources for specific status.",
        },
      ]}
      quickFacts={[
        { label: "Group", value: "Pelicans (genus Pelecanus)" },
        { label: "Reference species", value: "Brown pelican (Pelecanus occidentalis)" },
        { label: "Class", value: "Aves" },
        { label: "Diet", value: "Mainly fish" },
        { label: "Notable trait", value: "Throat pouch used to scoop fish" },
        { label: "Conservation", value: "Varies by species — verify on IUCN" },
      ]}
      relatedLinks={[
        { label: "Stork Profile", href: "/animals/stork", description: "Another large waterbird" },
        { label: "Flamingo Profile", href: "/animals/flamingo" },
        { label: "Swan Profile", href: "/animals/swan" },
        { label: "Bird Encyclopedia", href: "/animal-encyclopedia/birds" },
        { label: "Wildlife Hub", href: "/wildlife" },
      ]}
      sources={ANIMAL_SOURCES.pelican}
      publishedDate={PUBLISHED}
      modifiedDate={MODIFIED}
    />
  );
}
