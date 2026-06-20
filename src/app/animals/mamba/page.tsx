import type { Metadata } from "next";
import AnimalProfileLayout from "@/components/AnimalProfileLayout";
import { ANIMAL_SOURCES } from "@/lib/educational/animal-sources";
import { getAnimalGalleryImages, getAnimalImage, getAnimalOgImage } from "@/lib/images/animal-images";
import { buildArticleMetadata } from "@/lib/metadata";

const PATH = "/animals/mamba";
const TITLE = "Mamba — Profile, Speed, Venom & Behavior";
const DESC =
  "Explore mambas (genus Dendroaspis): fast, alert, highly venomous African snakes — using the black mamba as a reference. Shy by nature and ecologically important predators.";

export const metadata: Metadata = buildArticleMetadata({
  title: TITLE,
  description: DESC,
  path: PATH,
  publishedTime: "2026-06-20",
  modifiedTime: "2026-06-20",
  ogImage: getAnimalOgImage("mamba"),
});

export default function MambaPage() {
  return (
    <AnimalProfileLayout
      commonName="Mamba"
      scientificName="Dendroaspis polylepis"
      pageTitle={TITLE}
      description={DESC}
      path={PATH}
      parentCategory="Reptiles & Amphibians"
      parentCategoryHref="/animal-encyclopedia/reptiles"
      tags={["Reptile", "Snake", "Africa"]}
      image={getAnimalImage("mamba") ?? undefined}
      galleryImages={getAnimalGalleryImages("mamba")}
      sources={ANIMAL_SOURCES.mamba}
      publishedDate="2026-06-20"
      modifiedDate="2026-06-20"
      overview={
        <>
          <p>
            Mambas are fast, slender, highly alert snakes of sub-Saharan Africa, in the
            genus <em>Dendroaspis</em>. The best known is the black mamba
            (<em>Dendroaspis polylepis</em>), shown here — one of Africa&apos;s largest
            venomous snakes, named not for its body colour (which is grey to brownish) but
            for the inky black lining of its mouth, which it may display when threatened.
            The green mambas, by contrast, are vivid green and more tree-dwelling.
          </p>
          <p>
            Mambas have a fearsome reputation, but they are generally shy and prefer to
            flee; bites usually happen when a snake is cornered or surprised. They are
            important predators in their ecosystems.
          </p>
          <p>
            <strong>Safety note:</strong> this is a general educational profile, not
            first-aid or medical guidance. Mambas are highly venomous and should never be
            handled or approached; for any snakebite, seek professional medical care
            immediately.
          </p>
        </>
      }
      habitat={
        <p>
          Mambas are found across much of sub-Saharan Africa. The black mamba favours
          savanna, open woodland, rocky outcrops, and scrub, often sheltering in termite
          mounds, hollow trees, or burrows, and is mainly ground-dwelling though it climbs
          well. Green mambas are more strictly arboreal, living in forests and dense
          coastal bush.
        </p>
      }
      diet={
        <p>
          Mambas are carnivores that prey on small mammals such as rodents, hyraxes, and
          bats, as well as birds. They are active hunters, using speed, keen eyesight, and
          potent venom to subdue prey quickly before swallowing it whole. By controlling
          rodent populations, they play a useful role in their habitats.
        </p>
      }
      behavior={
        <p>
          The black mamba is famously fast over short distances and very alert, which
          fuels its reputation, but it typically uses that speed to escape rather than to
          attack. When cornered it may rear up, gape to show the dark mouth, and spread a
          narrow hood before striking. Mambas are most active by day. Despite the danger
          they pose if provoked, they are not aggressive by nature and avoid people where
          they can.
        </p>
      }
      humanInteraction={
        <p>
          Mambas are widely feared, and their venom is genuinely dangerous, so the most
          important message is simple: keep your distance and never attempt to handle or
          kill them, which is when most bites occur. Where snakes and people overlap,
          awareness and professional snake removal reduce risk. Ecologically, mambas help
          control rodents. Consult authoritative sources and local health services for
          guidance.
        </p>
      }
      faqs={[
        {
          question: "Why is the black mamba called \"black\"?",
          answer:
            "Not because of its skin, which is usually grey to olive or brownish. The name refers to the deep black lining of the inside of its mouth, which the snake may reveal by gaping when it feels threatened — a warning display rather than a sign of body colour.",
        },
        {
          question: "Are mambas aggressive?",
          answer:
            "Not by nature. Mambas, including the black mamba, are generally shy and prefer to flee from people. Their fearsome reputation comes from their speed, alertness, and potent venom, but bites usually occur only when a snake is cornered, surprised, or handled. Given space, they almost always retreat.",
        },
        {
          question: "How fast is a black mamba?",
          answer:
            "The black mamba is among the fastest snakes, capable of quick bursts over short distances on the ground. Importantly, it uses this speed mainly to escape danger and reach shelter, not to chase people — the idea of mambas hunting down humans is a myth.",
        },
        {
          question: "What should I do about a mamba?",
          answer:
            "Stay well away and do not try to catch, handle, or kill it — that is when most bites happen. Mambas are highly venomous, so any encounter should be treated with caution and, where needed, handled by professional snake removers. This profile is educational only; for any bite, seek immediate professional medical care.",
        },
      ]}
      quickFacts={[
        { label: "Group", value: "Genus Dendroaspis (mambas)" },
        { label: "Reference species", value: "Dendroaspis polylepis (black mamba)" },
        { label: "Class", value: "Reptilia (snake)" },
        { label: "Name origin", value: "Black mouth lining (not skin)" },
        { label: "Diet", value: "Carnivore (small mammals, birds)" },
        { label: "Temperament", value: "Shy; flees unless cornered" },
        { label: "Range", value: "Sub-Saharan Africa" },
        { label: "Venom", value: "Highly venomous — do not approach" },
      ]}
      relatedLinks={[
        { label: "Cobra Profile", href: "/animals/cobra", description: "Another hood-spreading elapid" },
        { label: "Rattlesnake Profile", href: "/animals/rattlesnake", description: "A New World venomous snake" },
        { label: "Snake Profile", href: "/animals/snake", description: "Snakes as a group" },
        { label: "Fauna by Continent", href: "/fauna/continents", description: "African fauna in context" },
        { label: "Reptiles & Amphibians", href: "/animal-encyclopedia/reptiles" },
      ]}
    />
  );
}
