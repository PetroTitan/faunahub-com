import type { Metadata } from "next";
import AnimalProfileLayout from "@/components/AnimalProfileLayout";
import { ANIMAL_SOURCES } from "@/lib/educational/animal-sources";
import { getAnimalGalleryImages, getAnimalImage, getAnimalOgImage } from "@/lib/images/animal-images";
import { buildArticleMetadata } from "@/lib/metadata";

const PATH = "/animals/wood-frog";
const TITLE = "Wood Frog — Profile, the Frog That Freezes Solid and Survives";
const DESC =
  "Explore the wood frog (Lithobates sylvaticus): a masked North American frog that can freeze nearly solid each winter — heart stopped — and thaw back to life in spring, ranging into the Arctic.";

export const metadata: Metadata = buildArticleMetadata({
  title: TITLE,
  description: DESC,
  path: PATH,
  publishedTime: "2026-06-22",
  modifiedTime: "2026-06-22",
  ogImage: getAnimalOgImage("wood-frog"),
});

export default function WoodFrogPage() {
  return (
    <AnimalProfileLayout
      commonName="Wood Frog"
      scientificName="Lithobates sylvaticus"
      pageTitle={TITLE}
      description={DESC}
      path={PATH}
      parentCategory="Reptiles & Amphibians"
      parentCategoryHref="/animal-encyclopedia/reptiles"
      tags={["Amphibian", "Frog", "North America"]}
      image={getAnimalImage("wood-frog") ?? undefined}
      galleryImages={getAnimalGalleryImages("wood-frog")}
      sources={ANIMAL_SOURCES["wood-frog"]}
      publishedDate="2026-06-22"
      modifiedDate="2026-06-22"
      overview={
        <>
          <p>
            The wood frog (<em>Lithobates sylvaticus</em>) is a small to medium brown frog of North
            America, easily known by the dark &ldquo;robber&apos;s mask&rdquo; patch through each eye.
            What makes it truly extraordinary is its cold-hardiness: the wood frog has one of the
            widest ranges of any North American amphibian, reaching far into the north — it is one of
            the very few frogs found above the Arctic Circle — and it survives the brutal winters by
            performing a near-miracle of biology.
          </p>
          <p>
            Each winter the wood frog literally freezes: up to roughly two-thirds of the water in its
            body turns to ice, its heart stops, and it lies frozen and motionless — then, in spring,
            it thaws and comes back to life, hopping off to breed as if nothing had happened.
          </p>
          <p>
            <strong>Note:</strong> details here cover the wood frog as a species; treat general
            statements as approximate and verify against authoritative sources.
          </p>
        </>
      }
      habitat={
        <p>
          Wood frogs live across a huge swath of North America, from the southern Appalachians up
          through Canada and Alaska and into the Arctic — the most northerly range of any frog on the
          continent. True to their name, they spend much of the year in moist woodland and forest
          floor, and they breed in temporary woodland pools, ponds, and other fish-free waters in
          early spring.
        </p>
      }
      diet={
        <p>
          Wood frogs are insectivores, eating a variety of small invertebrates — insects, spiders,
          worms, slugs, snails, and other tiny creatures — caught among the leaf litter and vegetation
          of the forest floor. Their tadpoles graze on algae and organic matter in the breeding pools
          before transforming into froglets.
        </p>
      }
      behavior={
        <p>
          The wood frog&apos;s claim to fame is freeze tolerance. As temperatures drop, it floods its
          tissues with natural &ldquo;antifreeze&rdquo; compounds — especially glucose, drawn from its
          liver — that protect its cells while ice forms in the spaces around them. In this frozen
          state the frog has no heartbeat, no breathing, and no measurable brain activity, yet when it
          warms in spring it thaws from the inside out and resumes normal life. Wood frogs are also
          famous &ldquo;explosive breeders&rdquo;: very early in spring, often while ice still rims the
          ponds, large numbers gather at breeding pools for just a few days, the males giving a
          quacking, duck-like chorus, before dispersing back into the woods. Outside breeding they are
          terrestrial and rather secretive.
        </p>
      }
      humanInteraction={
        <p>
          Wood frogs are harmless and widespread, and they are of great interest to scientists, whose
          studies of the frog&apos;s freeze tolerance and natural antifreeze inform research into
          preserving cells, tissues, and organs. They depend on clean woodland breeding pools and intact
          forest, so habitat loss, the draining of vernal pools, pollution, and disease are the main
          concerns, though the species remains common across much of its vast range. Consult
          AmphibiaWeb and the IUCN Red List for current status.
        </p>
      }
      faqs={[
        {
          question: "Can a wood frog really freeze solid and survive?",
          answer:
            "Remarkably, yes — though 'frozen solid' is a slight exaggeration. In winter a large fraction of the water in a wood frog's body (up to around two-thirds) turns to ice, its heart stops, and it stops breathing, appearing lifeless. Natural antifreeze compounds protect its cells, and when it warms in spring the frog thaws and revives, hopping off to breed. Few vertebrates can endure anything like it.",
        },
        {
          question: "How does the wood frog avoid dying when it freezes?",
          answer:
            "By managing where the ice forms and protecting its cells. As it cools, the frog floods its tissues with 'cryoprotectant' compounds — especially glucose released from the liver — that keep ice from forming inside its cells and limit damage, while ice forms in the spaces around them. This controlled freezing lets the frog survive being frozen for weeks at a time.",
        },
        {
          question: "Why is the wood frog important to science?",
          answer:
            "Because of its freeze tolerance. Researchers study how the wood frog protects its cells and organs while frozen — and revives unharmed — for insights that could help with preserving human cells, tissues, and transplant organs at low temperatures. A humble frog has become a model for the science of surviving the cold.",
        },
        {
          question: "Where do wood frogs live, and why do they breed so early?",
          answer:
            "They range across northern North America — including above the Arctic Circle, the most northerly of any frog there — living in moist woodland and breeding in temporary pools. They're 'explosive breeders' that gather at thawing ponds very early in spring, sometimes amid lingering ice, breeding in just a few days. Using short-lived, fish-free pools helps their eggs and tadpoles avoid predators.",
        },
      ]}
      quickFacts={[
        { label: "Scientific name", value: "Lithobates sylvaticus" },
        { label: "Class", value: "Amphibia (frog)" },
        { label: "Mark", value: "Dark 'robber's mask' through the eye" },
        { label: "Superpower", value: "Survives freezing (heart stops, then revives)" },
        { label: "Range", value: "Northern N. America (into the Arctic)" },
        { label: "Breeding", value: "Explosive early-spring breeder; quacking call" },
        { label: "Diet", value: "Insectivore (forest-floor invertebrates)" },
        { label: "To science", value: "Model for cold preservation of cells/organs" },
      ]}
      relatedLinks={[
        { label: "Spring Peeper Profile", href: "/animals/spring-peeper", description: "Another freeze-tolerant early frog" },
        { label: "Bullfrog Profile", href: "/animals/bullfrog", description: "A large North American frog" },
        { label: "Frog Profile", href: "/animals/frog", description: "Frogs as a group" },
        { label: "Fauna by Continent", href: "/fauna/continents", description: "North American & Arctic fauna in context" },
        { label: "Reptiles & Amphibians", href: "/animal-encyclopedia/reptiles" },
      ]}
    />
  );
}
