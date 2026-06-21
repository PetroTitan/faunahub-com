import type { Metadata } from "next";
import AnimalProfileLayout from "@/components/AnimalProfileLayout";
import { ANIMAL_SOURCES } from "@/lib/educational/animal-sources";
import { getAnimalGalleryImages, getAnimalImage, getAnimalOgImage } from "@/lib/images/animal-images";
import { buildArticleMetadata } from "@/lib/metadata";

const PATH = "/animals/mayfly";
const TITLE = "Mayfly — Profile, the Insect That Lives a Day & Indicates Clean Water";
const DESC =
  "Explore mayflies (order Ephemeroptera): ancient winged insects whose adults live only hours to days, while the long-lived nymphs are key indicators of healthy fresh water.";

export const metadata: Metadata = buildArticleMetadata({
  title: TITLE,
  description: DESC,
  path: PATH,
  publishedTime: "2026-06-21",
  modifiedTime: "2026-06-21",
  ogImage: getAnimalOgImage("mayfly"),
});

export default function MayflyPage() {
  return (
    <AnimalProfileLayout
      commonName="Mayfly"
      scientificName="order Ephemeroptera"
      pageTitle={TITLE}
      description={DESC}
      path={PATH}
      parentCategory="Insects & Invertebrates"
      parentCategoryHref="/animal-encyclopedia/insects"
      tags={["Insect", "Invertebrate", "Water-quality indicator"]}
      image={getAnimalImage("mayfly") ?? undefined}
      galleryImages={getAnimalGalleryImages("mayfly")}
      sources={ANIMAL_SOURCES.mayfly}
      publishedDate="2026-06-21"
      modifiedDate="2026-06-21"
      overview={
        <>
          <p>
            Mayflies (order Ephemeroptera) are delicate, ancient flying insects famous for the
            astonishingly short lives of their adults — the order&apos;s name comes from a
            Greek word meaning &ldquo;short-lived.&rdquo; An adult mayfly has a slender body,
            large clear (often net-veined) wings held upright over the back, and two or three
            long, thread-like tails. Mayflies are among the oldest groups of winged insects on
            Earth and are unmistakable beside streams and lakes on summer evenings.
          </p>
          <p>
            The famous brevity of the adult is only half the story: a mayfly spends most of its
            life as an aquatic nymph in fresh water, sometimes for a year or more, before
            emerging to fly, breed, and die within hours to a few days.
          </p>
          <p>
            <strong>Note:</strong> there are many mayfly species with somewhat different life
            spans; details here cover them broadly. Treat general statements as approximate and
            verify against authoritative sources.
          </p>
        </>
      }
      habitat={
        <p>
          Mayflies are found near fresh water around the world. The nymphs (also called
          naiads) live in clean rivers, streams, lakes, and ponds — clinging to stones,
          burrowing in sediment, or sheltering in vegetation — while the winged adults stay
          close to the water where they emerge, swarm, and breed. Their dependence on clean
          water shapes where they can live.
        </p>
      }
      diet={
        <p>
          Mayfly nymphs feed on algae, diatoms, and bits of plant and organic matter in the
          water, grazing and gathering detritus and helping recycle nutrients in the stream.
          The adults, remarkably, do not feed at all — their mouthparts are reduced and
          non-functional, because the brief winged stage exists only to reproduce. They live
          off the reserves built up during the long nymph stage.
        </p>
      }
      behavior={
        <p>
          The mayfly has a life cycle unique among insects: it is the only insect with two
          winged stages. The nymph rises to the surface (or climbs out) and moults into a
          dull-winged &ldquo;subimago&rdquo; that flies a short way, then moults again into the
          fully mature adult. Adults often emerge in great synchronised numbers, forming
          dancing swarms over the water in which males and females meet and mate. With no
          mouthparts to feed, the adult simply breeds and dies — sometimes all within a single
          day — and huge mass emergences can briefly blanket riverside areas. The nymphs,
          meanwhile, are an important food for fish and a vital part of freshwater food webs.
        </p>
      }
      humanInteraction={
        <p>
          Mayflies are harmless and ecologically valuable. Because their nymphs need clean,
          well-oxygenated water and are sensitive to pollution, their presence (and which
          species are present) is widely used as an indicator of good water quality, so
          scientists monitor them to assess river health. They are also a cornerstone of
          freshwater food webs and the inspiration for many fishing &ldquo;fly&rdquo; lures.
          Consult authoritative sources for details.
        </p>
      }
      faqs={[
        {
          question: "Do mayflies really live only one day?",
          answer:
            "The winged adult does live a very short time — from a few hours to a few days depending on the species, and famously sometimes just a single day, which is where the name 'mayfly' (and Ephemeroptera, 'short-lived') comes from. But that brief adult stage is only the finale: the mayfly spends most of its life, often a year or more, as an aquatic nymph before emerging to breed and die.",
        },
        {
          question: "Why don't adult mayflies eat?",
          answer:
            "Because the winged adult exists only to reproduce. Its mouthparts are reduced and non-functional, so it can't feed; instead it lives off the energy reserves built up during the long nymph stage. With no need to eat, the adult simply finds a mate, breeds, and dies within hours to days.",
        },
        {
          question: "What makes mayflies special among insects?",
          answer:
            "Mayflies are the only insects with two winged stages. After the aquatic nymph moults into a dull-winged 'subimago' (the only winged insect stage that then moults again), it transforms once more into the fully mature adult. They're also among the most ancient winged insects, an evolutionary link to the very first flying insects.",
        },
        {
          question: "Why are mayflies used to check water quality?",
          answer:
            "Because their nymphs need clean, well-oxygenated water and are sensitive to pollution. Where mayfly nymphs (especially a variety of species) are thriving, the water is usually healthy; where they're missing, it can signal pollution or low oxygen. Scientists monitor mayflies and similar insects as 'bioindicators' of freshwater health.",
        },
      ]}
      quickFacts={[
        { label: "Group", value: "Order Ephemeroptera ('short-lived')" },
        { label: "Adult lifespan", value: "Hours to a few days (no feeding)" },
        { label: "Most of life", value: "Aquatic nymph (often a year+)" },
        { label: "Unique trait", value: "Only insect with two winged stages" },
        { label: "Diet (nymph)", value: "Algae & detritus" },
        { label: "Role", value: "Water-quality indicator; fish food" },
        { label: "Antiquity", value: "Among the oldest winged insects" },
        { label: "To humans", value: "Harmless" },
      ]}
      relatedLinks={[
        { label: "Dragonfly Profile", href: "/animals/dragonfly", description: "Another insect with aquatic young" },
        { label: "Cicada Profile", href: "/animals/cicada", description: "Another insect with a long nymph stage" },
        { label: "Caddisfly relatives — Beetle Profile", href: "/animals/beetle", description: "Browse more insects" },
        { label: "Insects & Invertebrates", href: "/animal-encyclopedia/insects" },
        { label: "Fauna by Continent", href: "/fauna/continents", description: "Freshwater insect fauna in context" },
      ]}
    />
  );
}
