import type { Metadata } from "next";
import AnimalProfileLayout from "@/components/AnimalProfileLayout";
import { ANIMAL_SOURCES } from "@/lib/educational/animal-sources";
import { getAnimalGalleryImages, getAnimalImage, getAnimalOgImage } from "@/lib/images/animal-images";
import { buildArticleMetadata } from "@/lib/metadata";

const PATH = "/animals/mole-rat";
const TITLE = "Naked Mole-Rat — Profile, Eusocial Colonies & Biology";
const DESC =
  "Explore the naked mole-rat (Heterocephalus glaber): a near-hairless burrowing rodent of East Africa that lives in insect-like colonies with a queen — and is famous for extreme longevity.";

export const metadata: Metadata = buildArticleMetadata({
  title: TITLE,
  description: DESC,
  path: PATH,
  publishedTime: "2026-06-20",
  modifiedTime: "2026-06-20",
  ogImage: getAnimalOgImage("mole-rat"),
});

export default function MoleRatPage() {
  return (
    <AnimalProfileLayout
      commonName="Naked Mole-Rat"
      scientificName="Heterocephalus glaber"
      pageTitle={TITLE}
      description={DESC}
      path={PATH}
      parentCategory="Mammals"
      parentCategoryHref="/animal-encyclopedia/mammals"
      tags={["Mammal", "Rodent", "Eusocial"]}
      image={getAnimalImage("mole-rat") ?? undefined}
      galleryImages={getAnimalGalleryImages("mole-rat")}
      sources={ANIMAL_SOURCES["mole-rat"]}
      publishedDate="2026-06-20"
      modifiedDate="2026-06-20"
      overview={
        <>
          <p>
            The naked mole-rat (<em>Heterocephalus glaber</em>) is one of the most
            extraordinary mammals alive — a small, almost hairless, wrinkled rodent that
            spends its entire life underground in the dry regions of East Africa. With
            tiny eyes, large protruding incisors it can move independently like chopsticks,
            and loose pinkish skin, it looks unlike almost any other mammal. But its most
            remarkable feature is its social life.
          </p>
          <p>
            Naked mole-rats are <em>eusocial</em> — they live in large colonies with a
            single breeding queen and non-breeding workers, a system far more like that of
            ants, bees, and termites than of typical mammals.
          </p>
          <p>
            <strong>Note:</strong> many remarkable claims surround this species (longevity,
            low cancer rates, low-oxygen tolerance); these are active research areas, so
            treat specifics as ongoing science and verify against authoritative sources.
          </p>
        </>
      }
      habitat={
        <p>
          Naked mole-rats live in the hot, dry grasslands and semi-deserts of the Horn of
          Africa, including parts of Kenya, Ethiopia, and Somalia. They occupy extensive
          underground burrow systems that they dig in search of food, rarely if ever coming
          to the surface, which buffers them from the harsh climate above.
        </p>
      }
      diet={
        <p>
          Naked mole-rats are herbivores that feed mainly on large underground plant
          storage organs — tubers and roots — which they locate by tunnelling. A big tuber
          can feed a colony for a long time, and the animals often hollow it out from the
          inside while leaving the outer skin so it can keep growing. They also eat their
          own caecal droppings to extract more nutrients.
        </p>
      }
      behavior={
        <p>
          A naked mole-rat colony is organised much like an insect society: one dominant
          queen breeds, while other members dig tunnels, gather food, and defend and
          maintain the colony. Workers cooperate to excavate burrows in a chain, passing
          soil back to the surface. Being nearly cold-blooded in their behaviour, they
          huddle and move between warmer and cooler tunnels to regulate temperature. They
          are also noted for tolerating very low-oxygen, high-CO2 air in their burrows.
        </p>
      }
      humanInteraction={
        <p>
          Naked mole-rats are of great interest to scientists, who study them for their
          unusual biology — including notable longevity for a rodent, resistance to certain
          age-related conditions, and tolerance of low-oxygen conditions. This research is
          ongoing and sometimes popularised in oversimplified ways, so claims should be
          read with care. The species itself is widespread and not currently of major
          conservation concern. Consult authoritative sources for details.
        </p>
      }
      faqs={[
        {
          question: "What makes the naked mole-rat \"eusocial\"?",
          answer:
            "Like ants, bees, and termites, naked mole-rats live in colonies with a single breeding female — the queen — and many non-breeding members that dig, forage, and defend the colony. This insect-like social system, called eusociality, is extremely rare among mammals, which is what makes the species so unusual.",
        },
        {
          question: "Why are naked mole-rats hairless?",
          answer:
            "Their near-hairlessness suits a life spent entirely underground in warm burrows, where thick fur is less useful. Their loose, wrinkled, pinkish skin and reduced eyes are all adaptations to a dark, subterranean existence in a fairly stable burrow climate.",
        },
        {
          question: "Do naked mole-rats really live a long time?",
          answer:
            "They are well known for exceptional longevity compared with similar-sized rodents, and they are studied for resistance to some age-related problems. These are active research topics, however, so it's best to treat striking claims as ongoing science and check them against authoritative, up-to-date sources.",
        },
        {
          question: "What do naked mole-rats eat?",
          answer:
            "They are herbivores that mainly eat large underground tubers and roots, which they find by digging. A single big tuber can sustain a colony for a long time, and they often eat it out from the inside while leaving the skin so the plant keeps growing.",
        },
      ]}
      quickFacts={[
        { label: "Scientific name", value: "Heterocephalus glaber" },
        { label: "Class", value: "Mammalia (rodent)" },
        { label: "Social system", value: "Eusocial (queen + workers)" },
        { label: "Diet", value: "Herbivore (tubers & roots)" },
        { label: "Lifestyle", value: "Entirely underground" },
        { label: "Notable for", value: "Longevity & low-oxygen tolerance (research)" },
        { label: "Range", value: "Horn of Africa (dry regions)" },
        { label: "Status", value: "Widespread (verify)" },
      ]}
      relatedLinks={[
        { label: "Mole Profile", href: "/animals/mole", description: "Another burrowing mammal (unrelated)" },
        { label: "Meerkat Profile", href: "/animals/meerkat", description: "A very social African mammal" },
        { label: "Aardvark Profile", href: "/animals/aardvark", description: "Another African digger" },
        { label: "Fauna by Continent", href: "/fauna/continents", description: "African fauna in context" },
        { label: "Mammal Encyclopedia", href: "/animal-encyclopedia/mammals" },
      ]}
    />
  );
}
