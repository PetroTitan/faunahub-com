import type { Metadata } from "next";
import AnimalProfileLayout from "@/components/AnimalProfileLayout";
import { ANIMAL_SOURCES } from "@/lib/educational/animal-sources";
import { getAnimalGalleryImages, getAnimalImage, getAnimalOgImage } from "@/lib/images/animal-images";
import { buildArticleMetadata } from "@/lib/metadata";

const PATH = "/animals/colugo";
const TITLE = "Colugo (Flying Lemur) — Profile, Gliding & Biology";
const DESC =
  "Explore colugos (order Dermoptera): Southeast Asian mammals that are the most accomplished gliders of all — neither lemurs nor fliers — using the Sunda colugo as a reference.";

export const metadata: Metadata = buildArticleMetadata({
  title: TITLE,
  description: DESC,
  path: PATH,
  publishedTime: "2026-06-20",
  modifiedTime: "2026-06-20",
  ogImage: getAnimalOgImage("colugo"),
});

export default function ColugoPage() {
  return (
    <AnimalProfileLayout
      commonName="Colugo (Flying Lemur)"
      scientificName="Galeopterus variegatus"
      pageTitle={TITLE}
      description={DESC}
      path={PATH}
      parentCategory="Mammals"
      parentCategoryHref="/animal-encyclopedia/mammals"
      tags={["Mammal", "Gliding", "Southeast Asia"]}
      image={getAnimalImage("colugo") ?? undefined}
      galleryImages={getAnimalGalleryImages("colugo")}
      sources={ANIMAL_SOURCES.colugo}
      publishedDate="2026-06-20"
      modifiedDate="2026-06-20"
      overview={
        <>
          <p>
            Colugos, sometimes called &ldquo;flying lemurs,&rdquo; are tree-dwelling mammals
            of Southeast Asia and the most capable gliders among all mammals. The Sunda
            colugo (<em>Galeopterus variegatus</em>), shown here, has a remarkable gliding
            membrane (patagium) that stretches between almost all its limbs — neck, hands,
            feet, and tail — giving it the largest gliding surface of any gliding mammal and
            letting it travel impressive distances between trees.
          </p>
          <p>
            Despite the nickname, a colugo is neither a lemur nor a true flier: it glides
            rather than flaps, and it forms its own distinct mammal order (Dermoptera),
            whose closest relatives are actually the primates.
          </p>
          <p>
            <strong>Note:</strong> there are two colugo species; details here use the Sunda
            colugo as a reference. Treat general statements as approximate and verify
            against authoritative sources.
          </p>
        </>
      }
      habitat={
        <p>
          The Sunda colugo lives in the forests of Southeast Asia — including the Malay
          Peninsula, Sumatra, Borneo, Java, and surrounding areas — in both rainforest and
          some plantations. It is almost entirely arboreal, spending its life among the
          trees and rarely, if ever, coming to the ground, where it moves only awkwardly.
        </p>
      }
      diet={
        <p>
          Colugos are herbivores that feed mainly on young leaves, along with shoots,
          buds, flowers, sap, and some fruit. They have specialised comb-like lower teeth
          that may help with feeding and grooming. A leaf-based diet is relatively low in
          energy, which fits their generally slow, energy-conserving lifestyle.
        </p>
      }
      behavior={
        <p>
          Colugos are nocturnal and solitary, resting by day clinging to trunks or hidden
          in foliage and gliding out to feed at night. A single glide can cover a long
          distance with little loss of height, making the patagium a highly efficient way
          to move through the forest without descending. Females carry their single young
          on the underside, even folding part of the membrane into a soft pouch-like
          carrier while gliding.
        </p>
      }
      humanInteraction={
        <p>
          Colugos are seldom seen because of their nocturnal, treetop habits, but they
          depend on forest cover and connected canopy to glide and feed, so deforestation
          is the main concern; they are also hunted in some areas. The Sunda colugo is
          currently considered widespread. Consult authoritative sources for current
          status.
        </p>
      }
      faqs={[
        {
          question: "Is a colugo a lemur or can it fly?",
          answer:
            "Neither, despite the name 'flying lemur.' A colugo is not a lemur — it forms its own mammal order (Dermoptera) whose closest relatives are primates — and it does not truly fly. Instead it glides, using a large skin membrane to travel between trees without flapping.",
        },
        {
          question: "What makes colugos special gliders?",
          answer:
            "Colugos have the most extensive gliding membrane of any mammal, stretching between the neck, all four limbs, and even the tail. This gives them the largest gliding surface relative to their body of any gliding mammal, letting them cover long distances between trees in a single, efficient glide.",
        },
        {
          question: "What do colugos eat?",
          answer:
            "They are herbivores that eat mainly young leaves, plus shoots, buds, flowers, sap, and some fruit. This relatively low-energy, leaf-based diet matches their slow, energy-saving way of life high in the forest canopy.",
        },
        {
          question: "How do colugos care for their young?",
          answer:
            "A colugo carries its single offspring on its underside, clinging to the mother. She can even fold part of her gliding membrane into a soft, pouch-like hammock to hold and shelter the youngster — including while she glides between trees.",
        },
      ]}
      quickFacts={[
        { label: "Reference species", value: "Galeopterus variegatus (Sunda colugo)" },
        { label: "Order", value: "Dermoptera (its own order)" },
        { label: "Class", value: "Mammalia" },
        { label: "Closest relatives", value: "Primates (not lemurs)" },
        { label: "Claim to fame", value: "Most extensive gliding membrane of any mammal" },
        { label: "Diet", value: "Herbivore (mainly young leaves)" },
        { label: "Activity", value: "Nocturnal & arboreal" },
        { label: "Range", value: "Southeast Asian forests" },
      ]}
      relatedLinks={[
        { label: "Sugar Glider Profile", href: "/animals/sugar-glider", description: "A smaller, unrelated gliding marsupial" },
        { label: "Lemur Profile", href: "/animals/lemur", description: "A true lemur (despite the colugo's nickname)" },
        { label: "Binturong Profile", href: "/animals/binturong", description: "Another Southeast Asian tree-dweller" },
        { label: "Fauna by Continent", href: "/fauna/continents", description: "Southeast Asian fauna in context" },
        { label: "Mammal Encyclopedia", href: "/animal-encyclopedia/mammals" },
      ]}
    />
  );
}
