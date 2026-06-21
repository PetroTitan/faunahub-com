import type { Metadata } from "next";
import AnimalProfileLayout from "@/components/AnimalProfileLayout";
import { ANIMAL_SOURCES } from "@/lib/educational/animal-sources";
import { getAnimalGalleryImages, getAnimalImage, getAnimalOgImage } from "@/lib/images/animal-images";
import { buildArticleMetadata } from "@/lib/metadata";

const PATH = "/animals/olm";
const TITLE = "Olm — Profile, the Blind Cave 'Human Fish' & Long Life";
const DESC =
  "Explore the olm (Proteus anguinus): a pale, blind, fully aquatic cave salamander of European karst caves that keeps its larval gills for life and can live for decades — even a century.";

export const metadata: Metadata = buildArticleMetadata({
  title: TITLE,
  description: DESC,
  path: PATH,
  publishedTime: "2026-06-21",
  modifiedTime: "2026-06-21",
  ogImage: getAnimalOgImage("olm"),
});

export default function OlmPage() {
  return (
    <AnimalProfileLayout
      commonName="Olm"
      scientificName="Proteus anguinus"
      pageTitle={TITLE}
      description={DESC}
      path={PATH}
      parentCategory="Reptiles & Amphibians"
      parentCategoryHref="/animal-encyclopedia/reptiles"
      tags={["Amphibian", "Salamander", "Cave-dweller"]}
      image={getAnimalImage("olm") ?? undefined}
      galleryImages={getAnimalGalleryImages("olm")}
      sources={ANIMAL_SOURCES.olm}
      publishedDate="2026-06-21"
      modifiedDate="2026-06-21"
      overview={
        <>
          <p>
            The olm (<em>Proteus anguinus</em>) is one of the most extraordinary amphibians
            in the world — a slender, snake-like, fully aquatic salamander that lives only in
            the dark, water-filled caves of the karst regions of southeastern Europe. Its
            body is pale pinkish-white (often likened to human skin, hence the old name
            &ldquo;human fish&rdquo;), its eyes are tiny and covered by skin, leaving it
            effectively blind, and it keeps feathery external gills throughout its life.
          </p>
          <p>
            Perfectly adapted to a lightless world, the olm relies on smell, taste, touch,
            and even the ability to sense weak electric and magnetic fields to find food and
            its way around — and it is famous for an astonishingly slow, long life.
          </p>
          <p>
            <strong>Conservation note:</strong> the olm is a vulnerable cave specialist
            threatened by water pollution; it is legally protected. Verify current status at
            authoritative sources such as the IUCN Red List.
          </p>
        </>
      }
      habitat={
        <p>
          Olms live only in the underground waters of the Dinaric karst — the limestone caves
          and subterranean streams of countries such as Slovenia, Croatia, Bosnia and
          Herzegovina, and Italy. They spend their lives in cold, dark, clean cave water, and
          because they depend on these isolated underground systems, they are extremely
          sensitive to anything that pollutes the groundwater above.
        </p>
      }
      diet={
        <p>
          Olms are carnivores that feed on small cave invertebrates such as crustaceans,
          snails, and insect larvae. Food is scarce in caves, so olms eat infrequently and
          have an extraordinarily slow metabolism — they can survive for years without
          eating, living off stored reserves when prey is unavailable.
        </p>
      }
      behavior={
        <p>
          Having evolved in permanent darkness, the olm has lost functional eyes but gained
          heightened other senses: an acute sense of smell and taste, sensitivity to touch
          and water movement, and the ability to detect weak electric and magnetic fields to
          orient and hunt. It is neotenic — like the axolotl, it never fully transforms but
          keeps its larval gills and aquatic form for its whole life. Olms are famously
          sedentary and slow, and they can live for decades, with lifespans estimated to
          approach a century, far longer than most amphibians.
        </p>
      }
      humanInteraction={
        <p>
          The olm has fascinated people for centuries and was once thought to be a baby
          dragon when washed out of caves by floods. Today it is a celebrated symbol of cave
          life and a flagship for protecting groundwater. As a cave specialist it is highly
          vulnerable to pollution and disturbance of its underground habitat and is legally
          protected. Consult authoritative sources for current status.
        </p>
      }
      faqs={[
        {
          question: "Why is the olm called the 'human fish'?",
          answer:
            "Because of its skin. The olm's pale, pinkish-white colour resembles human skin tone, which led people in its native region to call it the 'human fish' (and similar names). It isn't a fish at all — it's a fully aquatic salamander — but the nickname stuck because of its unusual flesh-coloured appearance.",
        },
        {
          question: "Is the olm really blind?",
          answer:
            "Effectively, yes. Living in permanent cave darkness, the olm has tiny, skin-covered eyes and is essentially blind. Instead, it relies on a sharp sense of smell and taste, sensitivity to touch and water movement, and even the ability to detect weak electric and magnetic fields to find food and navigate.",
        },
        {
          question: "How long do olms live?",
          answer:
            "Remarkably long for an amphibian. Olms have very slow metabolisms and are estimated to live for many decades, with lifespans possibly approaching a hundred years. Their slow, energy-saving lifestyle — including the ability to go years without eating — is part of how they survive in food-poor caves.",
        },
        {
          question: "Why does the olm keep its gills its whole life?",
          answer:
            "The olm is neotenic: it never undergoes full metamorphosis and instead retains larval features — including feathery external gills and an aquatic body — for its entire life, much like the axolotl. This permanent aquatic, gilled form suits its life in cold, dark, underwater caves.",
        },
      ]}
      quickFacts={[
        { label: "Scientific name", value: "Proteus anguinus" },
        { label: "Class", value: "Amphibia (cave salamander)" },
        { label: "Also called", value: "'Human fish'" },
        { label: "Senses", value: "Blind; uses smell, touch, electroreception" },
        { label: "Life cycle", value: "Neotenic (keeps gills for life)" },
        { label: "Lifespan", value: "Decades — possibly ~a century" },
        { label: "Habitat", value: "Karst caves of SE Europe" },
        { label: "Status", value: "Protected; pollution-sensitive (verify)" },
      ]}
      relatedLinks={[
        { label: "Axolotl Profile", href: "/animals/axolotl", description: "Another neotenic salamander" },
        { label: "Hellbender Profile", href: "/animals/hellbender", description: "A giant aquatic salamander" },
        { label: "Tiger Salamander Profile", href: "/animals/tiger-salamander", description: "A relative that usually transforms" },
        { label: "Endangered Animals", href: "/endangered-animals", description: "IUCN Red List categories" },
        { label: "Reptiles & Amphibians", href: "/animal-encyclopedia/reptiles" },
      ]}
    />
  );
}
