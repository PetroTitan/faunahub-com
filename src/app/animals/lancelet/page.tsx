import type { Metadata } from "next";
import AnimalProfileLayout from "@/components/AnimalProfileLayout";
import { ANIMAL_SOURCES } from "@/lib/educational/animal-sources";
import { getAnimalGalleryImages, getAnimalImage, getAnimalOgImage } from "@/lib/images/animal-images";
import { buildArticleMetadata } from "@/lib/metadata";

const PATH = "/animals/lancelet";
const TITLE = "Lancelet — Profile of the Fish-like Animal That Reveals Our Origins";
const DESC =
  "Meet the lancelet (Branchiostoma): a small, translucent, fish-shaped marine animal — not a fish and not a vertebrate — that is one of the closest living relatives of the backboned animals.";

export const metadata: Metadata = buildArticleMetadata({
  title: TITLE,
  description: DESC,
  path: PATH,
  publishedTime: "2026-06-23",
  modifiedTime: "2026-06-23",
  ogImage: getAnimalOgImage("lancelet"),
});

export default function LanceletPage() {
  return (
    <AnimalProfileLayout
      commonName="Lancelet"
      scientificName="Branchiostoma spp."
      pageTitle={TITLE}
      description={DESC}
      path={PATH}
      parentCategory="Marine Animals"
      parentCategoryHref="/animal-encyclopedia/marine-animals"
      tags={["Marine", "Chordate", "Invertebrate"]}
      image={getAnimalImage("lancelet") ?? undefined}
      galleryImages={getAnimalGalleryImages("lancelet")}
      sources={ANIMAL_SOURCES.lancelet}
      publishedDate="2026-06-23"
      modifiedDate="2026-06-23"
      overview={
        <>
          <p>
            The lancelet (genus <em>Branchiostoma</em>, also called amphioxus) is a small, slender, almost
            transparent marine animal, usually only a few centimetres long. It looks a little like a tiny
            fish, but it is neither a fish nor a vertebrate — it has no backbone, no jaws, no skull, and no
            true brain or heart in the way vertebrates do.
          </p>
          <p>
            What makes the lancelet remarkable is its anatomy. It possesses the defining features of the
            chordates: a stiff supporting rod called a notochord, a hollow nerve cord running along its back,
            and a pharynx pierced by slits. Lancelets are cephalochordates, an invertebrate group that sits
            very close to the ancestry of all backboned animals — making them a living window onto how
            vertebrates may have begun.
          </p>
          <p>
            <strong>Note:</strong> there are several lancelet species; details here describe the group
            broadly.
          </p>
        </>
      }
      habitat={
        <p>
          Lancelets live on the seabed in shallow, clean, sandy or gravelly coastal waters in temperate and
          tropical seas around the world. They spend most of their lives buried tail-down in the sediment,
          with only the front end protruding into the water, and they prefer well-sorted, oxygen-rich sand.
        </p>
      }
      diet={
        <p>
          The lancelet is a filter feeder. Buried with its mouth end exposed, it draws a current of water in
          through its mouth and over its slitted pharynx, straining out tiny food particles — microscopic
          algae, plankton, and organic debris — and trapping them in mucus before passing them to its gut.
        </p>
      }
      behavior={
        <p>
          Lancelets are mostly sedentary, lying buried and filter-feeding, but they can swim in quick,
          darting bursts with side-to-side, fish-like movements if disturbed or to relocate, then quickly
          burrow back into the sand. Despite the lack of a true brain, they respond to light and touch, and
          they breed by releasing eggs and sperm into the water, where fertilisation and development take
          place.
        </p>
      }
      humanInteraction={
        <p>
          Lancelets are hugely important to science: because their simple bodies show the basic chordate
          body plan so clearly, they are key model animals for understanding the origin and evolution of
          vertebrates, including ourselves. In a few places, such as parts of coastal China, lancelets are
          also harvested and eaten. Their dependence on clean, undisturbed sandy seabeds makes them sensitive
          to coastal pollution and dredging.
        </p>
      }
      faqs={[
        {
          question: "Is a lancelet a fish?",
          answer:
            "No. Although it is fish-shaped and swims with side-to-side motions, the lancelet is not a fish and not a vertebrate at all. It has no backbone, jaws, skull, or true brain. It is a cephalochordate — an invertebrate chordate.",
        },
        {
          question: "Why are lancelets important to science?",
          answer:
            "Lancelets show the fundamental chordate features — a notochord, a dorsal nerve cord, and pharyngeal slits — in a very simple form. Because they are among the closest living invertebrate relatives of vertebrates, they help scientists understand how backboned animals, including humans, evolved.",
        },
        {
          question: "What does a lancelet eat and how?",
          answer:
            "It is a filter feeder. Buried in sand with its front end exposed, it pulls water in through its mouth and across a slitted pharynx, straining out tiny algae, plankton, and organic particles in mucus and passing them to its gut.",
        },
        {
          question: "Where do lancelets live?",
          answer:
            "They live buried in clean, sandy or gravelly seabeds in shallow coastal waters of temperate and tropical seas worldwide, with only the front of the body sticking up into the water to feed.",
        },
      ]}
      quickFacts={[
        { label: "Group", value: "Genus Branchiostoma (amphioxus)" },
        { label: "Classification", value: "Cephalochordate (not a fish/vertebrate)" },
        { label: "Size", value: "A few centimetres long" },
        { label: "Range", value: "Shallow temperate & tropical seas worldwide" },
        { label: "Habitat", value: "Buried in clean sandy/gravelly seabeds" },
        { label: "Feeding", value: "Filter feeder (plankton & particles)" },
        { label: "Key traits", value: "Notochord, dorsal nerve cord, gill slits" },
        { label: "Significance", value: "Living clue to vertebrate origins" },
      ]}
      relatedLinks={[
        { label: "Sea Squirt Profile", href: "/animals/sea-squirt", description: "Another invertebrate chordate relative" },
        { label: "Hagfish Profile", href: "/animals/hagfish", description: "A primitive jawless animal" },
        { label: "Lamprey Profile", href: "/animals/lamprey", description: "Another jawless, ancient lineage" },
        { label: "Marine Animals", href: "/animal-encyclopedia/marine-animals", description: "More marine life" },
        { label: "Fish Encyclopedia", href: "/animal-encyclopedia/fish" },
      ]}
    />
  );
}
