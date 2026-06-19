import type { Metadata } from "next";
import AnimalProfileLayout from "@/components/AnimalProfileLayout";
import { ANIMAL_SOURCES } from "@/lib/educational/animal-sources";
import { getAnimalGalleryImages, getAnimalImage, getAnimalOgImage } from "@/lib/images/animal-images";
import { buildArticleMetadata } from "@/lib/metadata";

const PATH = "/animals/hammerhead-shark";
const TITLE = "Hammerhead Shark — Profile, Head, Diet & Behavior";
const DESC =
  "Explore hammerhead sharks (family Sphyrnidae): predatory sharks with a wide, flattened head that improves their senses — including the great hammerhead, a powerful ray hunter.";

export const metadata: Metadata = buildArticleMetadata({
  title: TITLE,
  description: DESC,
  path: PATH,
  publishedTime: "2026-06-19",
  modifiedTime: "2026-06-19",
  ogImage: getAnimalOgImage("hammerhead-shark"),
});

export default function HammerheadSharkPage() {
  return (
    <AnimalProfileLayout
      commonName="Hammerhead Shark"
      scientificName="family Sphyrnidae"
      pageTitle={TITLE}
      description={DESC}
      path={PATH}
      parentCategory="Marine Animals"
      parentCategoryHref="/animal-encyclopedia/marine-animals"
      tags={["Marine fish", "Shark", "Predator"]}
      image={getAnimalImage("hammerhead-shark") ?? undefined}
      galleryImages={getAnimalGalleryImages("hammerhead-shark")}
      sources={ANIMAL_SOURCES["hammerhead-shark"]}
      publishedDate="2026-06-19"
      modifiedDate="2026-06-19"
      overview={
        <>
          <p>
            Hammerhead sharks (family Sphyrnidae) are instantly recognisable by their
            wide, flattened, hammer-shaped head, known as a cephalofoil. There are
            several species, from small bonnetheads to the large and powerful great
            hammerhead (<em>Sphyrna mokarran</em>), used here as a reference. The
            distinctive head is thought to improve manoeuvrability and to spread the
            shark&apos;s sensory organs across a wider area.
          </p>
          <p>
            Hammerheads are active predators of warm coastal and open seas, and some
            species form large schools — an unusual behaviour for sharks.
          </p>
          <p>
            <strong>Conservation note:</strong> several hammerhead species, including
            the great and scalloped hammerheads, are of serious conservation concern,
            heavily affected by fishing and the fin trade. Verify a particular
            species&apos; status at iucnredlist.org and NOAA Fisheries.
          </p>
        </>
      }
      habitat={
        <p>
          Hammerheads live in warm temperate and tropical seas worldwide, in coastal
          waters, over reefs and continental shelves, and in the open ocean depending
          on the species. Some undertake seasonal migrations and gather at particular
          seamounts and islands.
        </p>
      }
      diet={
        <p>
          Hammerheads are carnivores that feed on fish, cephalopods, and crustaceans;
          the great hammerhead in particular is a specialist hunter of rays and
          skates, sometimes using its broad head to pin prey against the seabed. Their
          wide-set senses help them detect prey hidden in the sand.
        </p>
      }
      behavior={
        <p>
          The cephalofoil gives hammerheads a wide spacing of eyes and of the
          electrically sensitive organs (ampullae of Lorenzini) used to detect prey,
          which may help them sweep the seafloor for hidden animals. Unusually, some
          hammerhead species form large daytime schools, while hunting more
          individually at night. Most are not considered a significant danger to
          people.
        </p>
      }
      humanInteraction={
        <p>
          Hammerheads are rarely involved in incidents with humans, but they are under
          heavy pressure from targeted fishing and bycatch, especially for their fins;
          as a result several species have declined sharply and are protected in a
          growing number of places. For current, species-specific status, consult
          NOAA Fisheries and the IUCN Red List.
        </p>
      }
      faqs={[
        {
          question: "Why do hammerhead sharks have such a strange head?",
          answer:
            "The wide, flattened head — the cephalofoil — spreads the shark's eyes and electrosensory organs over a broader area, which is thought to improve its ability to detect prey (including animals hidden in sand) and to aid manoeuvrability. The exact mix of benefits is still studied.",
        },
        {
          question: "Are hammerhead sharks dangerous to people?",
          answer:
            "Generally no. Hammerheads are rarely involved in bites on humans and are not considered a significant danger. The more pressing issue is the threat people pose to hammerheads through fishing and the fin trade.",
        },
        {
          question: "What do hammerhead sharks eat?",
          answer:
            "They eat fish, squid and octopus, and crustaceans; the large great hammerhead is a specialist predator of rays and skates and may use its head to pin prey to the seabed.",
        },
        {
          question: "Do hammerhead sharks really swim in schools?",
          answer:
            "Some do. Certain hammerhead species, such as the scalloped hammerhead, are known to gather in large schools during the day at particular sites, which is unusual among sharks, while hunting more on their own at night.",
        },
      ]}
      quickFacts={[
        { label: "Group", value: "Family Sphyrnidae" },
        { label: "Reference species", value: "Sphyrna mokarran (great hammerhead)" },
        { label: "Class", value: "Chondrichthyes (cartilaginous fish)" },
        { label: "Signature feature", value: "Hammer-shaped head (cephalofoil)" },
        { label: "Diet", value: "Fish, rays, cephalopods, crustaceans" },
        { label: "Behaviour", value: "Some species school by day" },
        { label: "Range", value: "Warm seas worldwide" },
        { label: "IUCN Status", value: "Several species threatened (verify)" },
      ]}
      relatedLinks={[
        { label: "Shark Profile", href: "/animals/shark", description: "Sharks as a whole" },
        { label: "Great White Shark Profile", href: "/animals/great-white-shark", description: "The largest predatory fish" },
        { label: "Ray Profile", href: "/animals/ray", description: "A favourite prey of great hammerheads" },
        { label: "Ocean fauna by depth", href: "/fauna/ocean", description: "Marine habitats in context" },
        { label: "Marine Animals", href: "/animal-encyclopedia/marine-animals" },
      ]}
    />
  );
}
