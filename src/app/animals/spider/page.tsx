import type { Metadata } from "next";
import AnimalProfileLayout from "@/components/AnimalProfileLayout";
import { ANIMAL_SOURCES } from "@/lib/educational/animal-sources";
import {
  getAnimalGalleryImages,
  getAnimalImage,
  getAnimalOgImage,
} from "@/lib/images/animal-images";
import { buildArticleMetadata } from "@/lib/metadata";

const PUBLISHED = "2026-06-12";
const MODIFIED = "2026-06-12";

const title = "Spider — Profile, Habitat, Diet & Behavior";
const description =
  "Spiders are eight-legged arachnids (not insects) that produce silk. A group-level overview of the order Araneae: webs, hunting, venom, and ecological role.";

export const metadata: Metadata = buildArticleMetadata({
  title,
  description,
  path: "/animals/spider",
  publishedTime: PUBLISHED,
  modifiedTime: MODIFIED,
  ogImage: getAnimalOgImage("spider"),
});

export default function SpiderPage() {
  return (
    <AnimalProfileLayout
      commonName="Spider"
      pageTitle={title}
      description={description}
      path="/animals/spider"
      parentCategory="Insects & Invertebrates"
      parentCategoryHref="/animal-encyclopedia/insects"
      tags={["Arachnid", "Predator", "Invertebrate"]}
      image={getAnimalImage("spider") ?? undefined}
      galleryImages={getAnimalGalleryImages("spider")}
      factsHeaderNote="Spiders are arachnids, not insects. “Spider” covers the whole order Araneae, with tens of thousands of species. The reference shown is a garden orb-weaver. Most spiders are harmless to people."
      overview={
        <>
          <p>
            Spiders are arachnids in the order Araneae — they are not insects.
            All spiders have eight legs, two body sections, and the ability to
            produce silk, and nearly all possess venom used to subdue prey.
            There are tens of thousands of described species worldwide. This
            page is a group-level overview; a garden orb-weaver
            (<em>Araneus diadematus</em>) is shown as a familiar reference.
            Spiders are important predators of insects in almost every land
            habitat.
          </p>
        </>
      }
      habitat={
        <>
          <p>
            Spiders live on every continent except Antarctica and in nearly
            every land habitat — forests, grasslands, deserts, wetlands,
            caves, gardens, and inside buildings. Some build webs in vegetation
            or structures, while others live on the ground, in burrows, or
            among leaf litter. A few even live at the water&apos;s edge. Habitat
            and lifestyle vary enormously between species.
          </p>
        </>
      }
      diet={
        <>
          <p>
            Spiders are predators, feeding mostly on insects and other small
            invertebrates. Web-building spiders snare prey in silk and many
            inject digestive fluids to feed, while hunting spiders such as
            wolf spiders and jumping spiders actively chase or ambush prey
            without a web. By consuming large numbers of insects, spiders play
            an important role in controlling invertebrate populations. Diet
            varies by species.
          </p>
        </>
      }
      behavior={
        <>
          <p>
            Spiders use silk in many ways — building webs, wrapping prey, lining
            burrows, making egg sacs, and &quot;ballooning&quot; on strands to
            disperse on the wind. Web-builders and active hunters represent two
            broad lifestyles within the group. Most spiders are solitary, and
            many are most active at night. Courtship can be elaborate,
            especially in visual hunters such as jumping spiders. Behaviour
            varies widely across the order.
          </p>
        </>
      }
      humanInteraction={
        <>
          <p>
            Spiders are beneficial predators that help control insect numbers
            in gardens, farms, and homes. The great majority are harmless to
            people; only a small number of species have venom of medical
            significance, and bites are uncommon. Wildlife and health sources
            advise not handling spiders you cannot identify and seeking medical
            advice if a bite causes a strong reaction. Most spiders are common,
            and conservation concern applies mainly to specialised species.
          </p>
        </>
      }
      extraSections={[
        {
          heading: "Appearance & Recognition",
          body: (
            <>
              <p>
                Spiders have two main body regions — a combined head-and-thorax
                (cephalothorax) and an abdomen — joined by a narrow stalk, plus
                eight legs and (in most species) several pairs of eyes. At the
                rear are spinnerets that produce silk, and at the front are
                fangs. Having eight legs and two body sections distinguishes
                spiders from insects, which have six legs and three body
                sections. Size, colour, and eye arrangement vary greatly between
                families.
              </p>
            </>
          ),
        },
      ]}
      similarAnimals={
        <p>
          Spiders are arachnids, related to scorpions, mites, ticks, and
          harvestmen, rather than to insects. They are often grouped with
          insects in everyday language, but the bee, butterfly, and ant covered
          on FaunaHub are true insects with six legs, while spiders have eight.
          Harvestmen (&quot;daddy longlegs&quot;) look spider-like but are a
          separate arachnid group.
        </p>
      }
      faqs={[
        {
          question: "Are spiders insects?",
          answer:
            "No. Spiders are arachnids, not insects. They have eight legs and two body sections, while insects have six legs and three body sections. Spiders are more closely related to scorpions and mites than to bees or ants.",
        },
        {
          question: "Are most spiders dangerous to people?",
          answer:
            "No. The vast majority of spiders are harmless to humans, and bites are uncommon. Only a small number of species have venom of medical significance. As a precaution, avoid handling spiders you cannot identify and seek medical advice if a bite causes a strong reaction.",
        },
        {
          question: "How do spiders make webs?",
          answer:
            "Spiders produce silk from glands connected to spinnerets at the rear of the abdomen. Web-building species use this silk to construct snares of various designs, but not all spiders build webs — many are active hunters that use silk mainly for shelters, draglines, or egg sacs.",
        },
      ]}
      quickFacts={[
        { label: "Group", value: "Spiders (order Araneae)" },
        { label: "Type", value: "Arachnid (invertebrate) — not an insect" },
        { label: "Legs", value: "Eight" },
        { label: "Silk", value: "Produced by all spiders" },
        { label: "Diet", value: "Predator (mostly insects)" },
        { label: "Risk to people", value: "Most harmless; few medically significant" },
        { label: "Conservation", value: "Most common — verify for specialised species" },
      ]}
      relatedLinks={[
        { label: "Ant Profile", href: "/animals/ant", description: "A common spider prey item" },
        { label: "Dragonfly Profile", href: "/animals/dragonfly" },
        { label: "Praying Mantis Profile", href: "/animals/praying-mantis" },
        { label: "Animal Encyclopedia — Insects & Invertebrates", href: "/animal-encyclopedia/insects" },
        { label: "Wildlife Hub", href: "/wildlife" },
      ]}
      sources={ANIMAL_SOURCES.spider}
      publishedDate={PUBLISHED}
      modifiedDate={MODIFIED}
    />
  );
}
