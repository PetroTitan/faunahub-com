import type { Metadata } from "next";
import AnimalProfileLayout from "@/components/AnimalProfileLayout";
import { ANIMAL_SOURCES } from "@/lib/educational/animal-sources";
import { getAnimalGalleryImages, getAnimalImage, getAnimalOgImage } from "@/lib/images/animal-images";
import { buildArticleMetadata } from "@/lib/metadata";

const PATH = "/animals/lungfish";
const TITLE = "Lungfish — Profile, the Fish That Breathes Air & Survives Drought";
const DESC =
  "Explore lungfish (subclass Dipnoi): ancient 'living fossil' fish that breathe air with true lungs, and whose African species can survive months out of water in a mud cocoon.";

export const metadata: Metadata = buildArticleMetadata({
  title: TITLE,
  description: DESC,
  path: PATH,
  publishedTime: "2026-06-21",
  modifiedTime: "2026-06-21",
  ogImage: getAnimalOgImage("lungfish"),
});

export default function LungfishPage() {
  return (
    <AnimalProfileLayout
      commonName="Lungfish"
      scientificName="subclass Dipnoi"
      pageTitle={TITLE}
      description={DESC}
      path={PATH}
      parentCategory="Fish"
      parentCategoryHref="/animal-encyclopedia/fish"
      tags={["Fish", "Living fossil", "Air-breather"]}
      image={getAnimalImage("lungfish") ?? undefined}
      galleryImages={getAnimalGalleryImages("lungfish")}
      sources={ANIMAL_SOURCES.lungfish}
      publishedDate="2026-06-21"
      modifiedDate="2026-06-21"
      overview={
        <>
          <p>
            Lungfish (subclass Dipnoi) are ancient freshwater fish famous for an
            extraordinary ability: they can breathe air using true lungs. Survivors of a
            lineage that goes back hundreds of millions of years, they are often called
            &ldquo;living fossils,&rdquo; and they hold a special place in evolution as close
            relatives of the lobe-finned fish from which land vertebrates ultimately
            descended. The Australian lungfish (<em>Neoceratodus forsteri</em>), shown here,
            is the most primitive of the living species, with a single lung and large,
            overlapping scales.
          </p>
          <p>
            Six species survive today, in Africa, South America, and Australia, and several
            can gulp air at the surface to survive in warm, stagnant, oxygen-poor water that
            would suffocate ordinary fish.
          </p>
          <p>
            <strong>Note:</strong> details here cover lungfish broadly, with the Australian
            lungfish as a reference; habits differ between species. Treat general statements
            as approximate and verify against authoritative sources.
          </p>
        </>
      }
      habitat={
        <p>
          Lungfish live in fresh water — rivers, lakes, swamps, and floodplains — in Africa,
          South America (the Amazon and Paraguay basins), and eastern Australia, depending on
          the species. Many inhabit warm, slow, or seasonally drying waters where the ability
          to breathe air is a huge advantage. The Australian lungfish keeps to permanent
          rivers and pools.
        </p>
      }
      diet={
        <p>
          Lungfish are mostly carnivores and omnivores, eating molluscs, crustaceans, worms,
          insects, small fish, and amphibians, plus some plant matter in certain species.
          They have strong, plate-like crushing tooth structures suited to grinding hard-shelled
          prey, and they forage slowly along the bottom.
        </p>
      }
      behavior={
        <p>
          The lungfish&apos;s signature trait is air-breathing: most rise to the surface to
          gulp air into their lung(s), letting them live where dissolved oxygen is scarce —
          and the African and South American lungfish actually depend on breathing air,
          drowning if kept from the surface. Most remarkable is how some African lungfish
          survive drought: as their water dries up, the fish burrows into the mud and forms a
          slime-and-mud cocoon, slows its body right down (a dormant state called
          aestivation), and can survive for months — even years — until rains return. The
          Australian lungfish does not do this and breathes air only when needed.
        </p>
      }
      humanInteraction={
        <p>
          Lungfish are of huge scientific interest for what they reveal about the evolution
          of air-breathing and the move of vertebrates onto land. They are caught for food in
          parts of Africa and South America, and the Australian lungfish is a legally
          protected species of conservation concern, sensitive to river alteration. Consult
          authoritative sources for species-specific status.
        </p>
      }
      faqs={[
        {
          question: "Can lungfish really breathe air?",
          answer:
            "Yes — that's their defining feature. Lungfish have true lung(s) and rise to the surface to gulp air, which lets them live in warm, stagnant, low-oxygen water that would suffocate most fish. The African and South American lungfish even depend on air-breathing and will drown if they can't reach the surface, while the Australian lungfish breathes air mainly when oxygen runs low.",
        },
        {
          question: "How do lungfish survive when their water dries up?",
          answer:
            "Some African lungfish burrow into the mud as their pool dries, wrap themselves in a cocoon of mucus and mud, and enter a dormant state called aestivation, slowing their metabolism dramatically. In this mud cocoon they can survive for months — sometimes years — without water, reviving when the rains return and refill their habitat.",
        },
        {
          question: "Why are lungfish important to evolution?",
          answer:
            "Lungfish are close living relatives of the lobe-finned fish from which the first land vertebrates evolved, and they retain ancient features including air-breathing lungs. Studying them helps scientists understand how backboned animals made the transition from water to land, which is why lungfish are prized 'living fossils.'",
        },
        {
          question: "Where do lungfish live?",
          answer:
            "In fresh water across three continents: Africa, South America, and Australia. The six living species include several African lungfish, the South American lungfish, and the Australian lungfish, living in rivers, lakes, swamps, and floodplains — often in warm or seasonally drying waters where breathing air is a real advantage.",
        },
      ]}
      quickFacts={[
        { label: "Group", value: "Subclass Dipnoi (6 living species)" },
        { label: "Reference species", value: "Neoceratodus forsteri (Australian lungfish)" },
        { label: "Class", value: "Sarcopterygii (lobe-finned fish)" },
        { label: "Signature trait", value: "Breathes air with true lungs" },
        { label: "Drought survival", value: "Some aestivate in mud cocoons" },
        { label: "Nickname", value: "'Living fossil'" },
        { label: "Range", value: "Africa, South America, Australia" },
        { label: "Status", value: "Varies; Australian lungfish protected" },
      ]}
      relatedLinks={[
        { label: "Coelacanth Profile", href: "/animals/coelacanth", description: "Another lobe-finned 'living fossil'" },
        { label: "Mudskipper Profile", href: "/animals/mudskipper", description: "Another air-breathing fish" },
        { label: "Sturgeon Profile", href: "/animals/sturgeon", description: "Another ancient fish lineage" },
        { label: "Fish Encyclopedia", href: "/animal-encyclopedia/fish" },
        { label: "Fauna by Continent", href: "/fauna/continents", description: "Freshwater fauna in context" },
      ]}
    />
  );
}
