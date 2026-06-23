import type { Metadata } from "next";
import AnimalProfileLayout from "@/components/AnimalProfileLayout";
import { ANIMAL_SOURCES } from "@/lib/educational/animal-sources";
import { getAnimalGalleryImages, getAnimalImage, getAnimalOgImage } from "@/lib/images/animal-images";
import { buildArticleMetadata } from "@/lib/metadata";

const PATH = "/animals/pratincole";
const TITLE = "Pratincole — Profile of the Swallow-like Shorebird";
const DESC =
  "Meet the pratincole (Glareola): an unusual wader that hawks insects on the wing like a giant swallow, with long pointed wings and a forked tail — a close relative of the running coursers.";

export const metadata: Metadata = buildArticleMetadata({
  title: TITLE,
  description: DESC,
  path: PATH,
  publishedTime: "2026-06-23",
  modifiedTime: "2026-06-23",
  ogImage: getAnimalOgImage("pratincole"),
});

export default function PratincolePage() {
  return (
    <AnimalProfileLayout
      commonName="Pratincole"
      scientificName="Glareola spp."
      pageTitle={TITLE}
      description={DESC}
      path={PATH}
      parentCategory="Birds"
      parentCategoryHref="/animal-encyclopedia/birds"
      tags={["Bird", "Shorebird", "Old World"]}
      image={getAnimalImage("pratincole") ?? undefined}
      galleryImages={getAnimalGalleryImages("pratincole")}
      sources={ANIMAL_SOURCES.pratincole}
      publishedDate="2026-06-23"
      modifiedDate="2026-06-23"
      overview={
        <>
          <p>
            Pratincoles (genus <em>Glareola</em>) are among the most unusual of the world&apos;s waders. Built
            with long, pointed wings, a deeply forked tail, short legs, and a short bill with a wide gape,
            they look and behave more like oversized swallows than like the wading shorebirds they are
            related to — catching insects gracefully on the wing.
          </p>
          <p>
            Pratincoles belong to the family Glareolidae, the same family as the coursers. It is a striking
            pairing: the elegant, aerial insect-hawking pratincoles on one hand, and the fleet-footed,
            ground-running coursers on the other.
          </p>
          <p>
            <strong>Note:</strong> several pratincole species exist (such as the collared, oriental, and
            small pratincoles); details here describe the group broadly.
          </p>
        </>
      }
      habitat={
        <p>
          Pratincoles favour open, flat, sparsely vegetated ground, often near water — dried mud flats,
          floodplains, lake and river margins, steppe, and bare or burnt fields. Many species are migratory,
          moving with the seasons and the rains, and they often gather in flocks on open ground or over
          water.
        </p>
      }
      diet={
        <p>
          Pratincoles are insectivores that catch most of their food in flight, hawking flying insects such
          as beetles, grasshoppers, flies, and termites — frequently in the air over water or open ground,
          and often around dusk. They also pick prey from the ground while running, in plover-like fashion.
        </p>
      }
      behavior={
        <p>
          Pratincoles are sociable and often nest in colonies on bare ground, laying well-camouflaged eggs
          in a simple scrape. They are strong, agile fliers, twisting and gliding after insects on their
          long wings, and they can also run swiftly. Parents may use distraction displays to lure predators
          away from eggs or chicks. Many populations are highly migratory, sometimes travelling long
          distances to follow insect-rich conditions.
        </p>
      }
      humanInteraction={
        <p>
          Pratincoles are appreciated by birdwatchers for their graceful, swallow-like flight. As
          ground-nesting birds of open wetlands and plains, they can be sensitive to the drainage of
          wetlands, changing land use, and disturbance; some species are common while others are localised.
          Consult the IUCN Red List for the status of a particular pratincole.
        </p>
      }
      faqs={[
        {
          question: "Is a pratincole a shorebird or a swallow?",
          answer:
            "It is a shorebird (wader) that lives like a swallow. Pratincoles belong to the wader group, but with their long pointed wings, forked tails, and wide-gaped bills they catch insects in flight much as swallows do — earning them the nickname 'swallow-plovers'.",
        },
        {
          question: "What are pratincoles related to?",
          answer:
            "They belong to the family Glareolidae, which they share with the coursers. That makes the aerial, insect-hawking pratincoles and the ground-running coursers close relatives within one striking family.",
        },
        {
          question: "What do pratincoles eat?",
          answer:
            "Mainly flying insects — beetles, grasshoppers, flies, and termites — caught on the wing, often over water or open ground and frequently around dusk. They also snatch prey from the ground while running.",
        },
        {
          question: "Where do pratincoles nest?",
          answer:
            "They nest on open, bare ground, often in colonies, laying camouflaged eggs in a simple scrape. Many species are migratory and move with the seasons and rains to find insect-rich feeding areas.",
        },
      ]}
      quickFacts={[
        { label: "Group", value: "Genus Glareola (several species)" },
        { label: "Class", value: "Aves" },
        { label: "Family", value: "Glareolidae (with coursers)" },
        { label: "Range", value: "Africa, Europe, Asia, Australasia" },
        { label: "Habitat", value: "Open flats and wetlands; bare ground" },
        { label: "Feeding", value: "Hawks insects on the wing" },
        { label: "Wings & tail", value: "Long, pointed wings; forked tail" },
        { label: "Nesting", value: "Colonial; scrape on bare ground" },
      ]}
      relatedLinks={[
        { label: "Courser Profile", href: "/animals/courser", description: "The running cousins in the same family" },
        { label: "Thick-knee Profile", href: "/animals/thick-knee", description: "Another large-eyed open-ground bird" },
        { label: "Jacana Profile", href: "/animals/jacana", description: "A wader of wetland margins" },
        { label: "Fauna by Continent", href: "/fauna/continents", description: "Old World birds in context" },
        { label: "Birds Encyclopedia", href: "/animal-encyclopedia/birds" },
      ]}
    />
  );
}
