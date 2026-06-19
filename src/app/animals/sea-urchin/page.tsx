import type { Metadata } from "next";
import AnimalProfileLayout from "@/components/AnimalProfileLayout";
import { ANIMAL_SOURCES } from "@/lib/educational/animal-sources";
import { getAnimalGalleryImages, getAnimalImage, getAnimalOgImage } from "@/lib/images/animal-images";
import { buildArticleMetadata } from "@/lib/metadata";

const PATH = "/animals/sea-urchin";
const TITLE = "Sea Urchin — Profile, Spines, Diet & Role in Reefs";
const DESC =
  "Explore sea urchins (class Echinoidea): spiny, globe-shaped echinoderms that graze the seabed with a five-toothed mouth and shape kelp forests and reefs.";

export const metadata: Metadata = buildArticleMetadata({
  title: TITLE,
  description: DESC,
  path: PATH,
  publishedTime: "2026-06-19",
  modifiedTime: "2026-06-19",
  ogImage: getAnimalOgImage("sea-urchin"),
});

export default function SeaUrchinPage() {
  return (
    <AnimalProfileLayout
      commonName="Sea Urchin"
      scientificName="class Echinoidea"
      pageTitle={TITLE}
      description={DESC}
      path={PATH}
      parentCategory="Marine Animals"
      parentCategoryHref="/animal-encyclopedia/marine-animals"
      tags={["Marine invertebrate", "Echinoderm", "Grazer"]}
      image={getAnimalImage("sea-urchin") ?? undefined}
      galleryImages={getAnimalGalleryImages("sea-urchin")}
      sources={ANIMAL_SOURCES["sea-urchin"]}
      publishedDate="2026-06-19"
      modifiedDate="2026-06-19"
      overview={
        <>
          <p>
            Sea urchins (class Echinoidea) are spiny, rounded marine animals belonging
            to the echinoderms — the same group as sea stars (starfish) and sea
            cucumbers. Their body is built on a five-part radial symmetry and encased
            in a rigid internal shell (the test) covered in movable spines and tiny
            tube feet.
          </p>
          <p>
            Despite their simple appearance, sea urchins are important grazers that can
            shape entire underwater habitats, especially kelp forests and reefs.
          </p>
          <p>
            <strong>Note:</strong> there are many sea urchin species with differing
            spines and habits, and some have spines that can deliver a painful jab or
            mild venom, so wild urchins should not be handled. Treat figures as general
            and verify against authoritative marine sources.
          </p>
        </>
      }
      habitat={
        <p>
          Sea urchins live on the seabed in oceans worldwide, from rocky shorelines
          and coral reefs to kelp forests, seagrass beds, and the deep sea. They are
          found from shallow tide pools to great depths, often tucked into crevices or
          moving slowly across rock and sand.
        </p>
      }
      diet={
        <p>
          Most sea urchins are grazers, scraping algae and other growth from rocks
          with a remarkable five-toothed jaw apparatus known as &ldquo;Aristotle&apos;s
          lantern.&rdquo; Many also eat detritus and small encrusting organisms. In
          places where urchin numbers explode, their grazing can strip kelp and create
          barren areas, showing how influential they are in their habitats.
        </p>
      }
      behavior={
        <p>
          Sea urchins move using hundreds of tiny tube feet, part of the water-driven
          system shared by all echinoderms, along with their spines. The spines and
          tube feet handle locomotion, defence, and feeding. Sea urchins are an
          important food for predators such as sea otters, certain fish, and sea
          stars, and these predators in turn help keep urchin numbers in balance.
        </p>
      }
      humanInteraction={
        <p>
          Sea urchins are ecologically important and, in some regions, harvested for
          their roe as a delicacy. They are central to well-known ecological stories,
          such as how sea otters protect kelp forests by preying on urchins. The main
          concerns relate to overfishing of their predators and habitat change, which
          can let urchin populations boom and damage kelp. Consult authoritative marine
          sources for specifics.
        </p>
      }
      faqs={[
        {
          question: "Is a sea urchin related to a starfish?",
          answer:
            "Yes. Sea urchins and sea stars (starfish) are both echinoderms, along with sea cucumbers, brittle stars, and others. They share features like a five-part radial body plan and a water-driven system of tube feet, even though they look quite different.",
        },
        {
          question: "What is Aristotle's lantern?",
          answer:
            "It's the sea urchin's mouth apparatus — a complex structure of five hard teeth and supporting parts on the underside of the body, used to scrape algae and other food from rocks. The name comes from an old description likening its shape to a lantern.",
        },
        {
          question: "Are sea urchins dangerous to touch?",
          answer:
            "They should not be handled. Many sea urchins have sharp spines that can puncture skin and break off, and some species have spines or small pincer-like organs that deliver mild venom. Stepping on or grabbing an urchin can be painful, so they are best observed without touching.",
        },
        {
          question: "Why do sea urchins matter to kelp forests?",
          answer:
            "Sea urchins graze on kelp and other algae. When their predators (such as sea otters) decline, urchin numbers can surge and overgraze the kelp, creating bare \"urchin barrens.\" This makes urchins a textbook example of how one animal can shape an entire underwater ecosystem.",
        },
      ]}
      quickFacts={[
        { label: "Group", value: "Class Echinoidea" },
        { label: "Phylum", value: "Echinodermata" },
        { label: "Relatives", value: "Sea stars, sea cucumbers" },
        { label: "Body", value: "Spiny test; five-part symmetry" },
        { label: "Mouth", value: "“Aristotle's lantern” (five teeth)" },
        { label: "Diet", value: "Mostly grazer (algae)" },
        { label: "Habitat", value: "Seabeds worldwide (shallow to deep)" },
        { label: "Status", value: "Varies by species (verify)" },
      ]}
      relatedLinks={[
        { label: "Starfish Profile", href: "/animals/starfish", description: "A fellow echinoderm" },
        { label: "Otter Profile", href: "/animals/otter", description: "Sea otters prey on urchins" },
        { label: "Coral Profile", href: "/animals/coral", description: "Another reef invertebrate" },
        { label: "Animal Taxonomy — Invertebrates", href: "/animal-taxonomy/invertebrates", description: "How invertebrates are grouped" },
        { label: "Marine Animals", href: "/animal-encyclopedia/marine-animals" },
      ]}
    />
  );
}
