import type { Metadata } from "next";
import AnimalProfileLayout from "@/components/AnimalProfileLayout";
import { getAnimalGalleryImages, getAnimalImage, getAnimalOgImage } from "@/lib/images/animal-images";
import { buildArticleMetadata } from "@/lib/metadata";

const PUBLISHED = "2026-05-12";
const MODIFIED = "2026-05-21";

const title = "Fox — Profile, Habitat, Diet & Behavior";
const description =
  "An overview of true foxes (genus Vulpes), focusing on the red fox as a reference species: range, opportunistic diet, behaviour, and urban adaptation.";

export const metadata: Metadata = buildArticleMetadata({
  title,
  description,
  path: "/animals/fox",
  publishedTime: PUBLISHED,
  modifiedTime: MODIFIED,
  ogImage: getAnimalOgImage("fox"),
});

export default function FoxPage() {
  return (
    <AnimalProfileLayout
      commonName="Fox"
      pageTitle={title}
      description={description}
      path="/animals/fox"
      parentCategory="Mammals"
      parentCategoryHref="/animal-encyclopedia/mammals"
      tags={["Mammal", "Canid", "Omnivore"]}
      image={getAnimalImage("fox") ?? undefined}
      galleryImages={getAnimalGalleryImages("fox")}
      factsHeaderNote="Reference species below is the red fox (Vulpes vulpes), the most widely distributed wild canid. Other foxes (Arctic, fennec, etc.) differ substantially."
      overview={
        <>
          <p>
            &quot;Fox&quot; is a common name applied to small to medium-sized canids,
            principally those of the genus <em>Vulpes</em> (the &quot;true foxes&quot;). The
            red fox (<em>Vulpes vulpes</em>) is the most widespread member of the group and the
            reference species used on this page. Foxes are members of the family Canidae and
            are therefore relatives of wolves and domestic dogs, though they branched from the
            wolf-dog lineage long ago and differ in many aspects of ecology and behaviour.
          </p>
        </>
      }
      habitat={
        <>
          <p>
            The red fox is one of the most widely distributed wild carnivores on Earth,
            occupying habitats across Europe, much of Asia, North Africa, and North America,
            and also introduced (with significant ecological impact) to Australia. Habitats
            include forest, farmland, tundra, mountains, scrubland, and increasingly urban
            and suburban environments. Other fox species have much narrower ranges — for
            example the Arctic fox in tundra environments and the fennec fox in North African
            deserts.
          </p>
        </>
      }
      diet={
        <>
          <p>
            Foxes are opportunistic omnivores. Diet varies seasonally and regionally but
            typically includes small mammals (notably rodents and rabbits), birds, eggs,
            insects, fruit, carrion, and — for urban populations — human food waste. Foxes
            commonly cache surplus food and revisit caches later.
          </p>
        </>
      }
      behavior={
        <>
          <p>
            Foxes are typically solitary or live in small family groups consisting of a
            breeding pair and their offspring of the year, sometimes assisted by older
            non-breeding relatives. Territories are marked by scent. Foxes are largely
            crepuscular or nocturnal, particularly in areas with high human activity.
          </p>
          <p>
            Urban foxes have been the subject of extensive ecological study and tend to show
            altered activity patterns, smaller home ranges, and behavioural adjustments
            compared with rural populations.
          </p>
        </>
      }
      humanInteraction={
        <>
          <p>
            Foxes have a long history of interaction with humans, ranging from cultural and
            mythological roles to historic persecution as predators of poultry and small
            livestock. Today red foxes are generally not of conservation concern at the
            species level, but local populations — and some other fox species — face habitat,
            disease, and persecution pressures. Where foxes have been introduced outside their
            native range, they can have severe impacts on native fauna.
          </p>
        </>
      }
      extraSections={[
        {
          heading: "Appearance & Recognition",
          body: (
            <>
              <p>
                True foxes are small to medium-sized canids with a <strong>narrow pointed
                muzzle</strong>, large upright triangular ears, a slender agile body, and a
                long bushy tail (often called a &quot;brush&quot;) that is typically more
                than half their head-and-body length. The red fox — the reference species
                for this page — is famously rusty-red over the back and flanks with paler
                underparts, dark stockings on the lower legs, and a <em>white tip</em> to
                the tail that is itself a useful field cue.
              </p>
              <p>
                Coat colour and overall size vary considerably across the genus and within
                species. The Arctic fox (<em>Vulpes lagopus</em>) turns near-white in winter
                in northern populations; the fennec fox (<em>V. zerda</em>) of North African
                deserts is small and pale with disproportionately large ears; melanistic
                &quot;silver&quot;, &quot;cross&quot;, and almost-black colour morphs occur
                naturally within red fox populations. Foxes are usually distinguishable from
                wolves and dogs of similar weight by their smaller stature, sharper-featured
                head, and proportionally longer, fluffier tail.
              </p>
            </>
          ),
        },
      ]}
      similarAnimals={
        <p>
          Foxes share the family Canidae with the wolf (<em>Canis lupus</em>) and the domestic
          dog. Despite the shared family, foxes generally do not interbreed with wolves or
          dogs and have different chromosome numbers from those species.
        </p>
      }
      faqs={[
        {
          question: "Are foxes dogs?",
          answer:
            "Foxes and dogs are both members of the family Canidae, but they are not the same animal. True foxes (genus Vulpes) and domestic dogs (Canis lupus familiaris) diverged from a common canid ancestor long ago and differ in chromosome number, ecology, and behaviour. They are not normally able to interbreed.",
        },
        {
          question: "Are foxes dangerous to humans?",
          answer:
            "Healthy adult foxes are generally wary of humans and avoid contact. Reported attacks are rare and typically involve cornered, sick, or habituated individuals. Foxes can carry diseases including rabies in some regions; avoid handling wild foxes and contact local wildlife or public-health authorities if a fox is acting unusually tame or aggressive.",
        },
        {
          question: "What do urban foxes eat?",
          answer:
            "Urban foxes are opportunistic and shift their diets to local availability. Studies have documented diets including small rodents, birds, insects, fruit, and significant amounts of human food waste and pet food left outdoors. Direct feeding of urban foxes is generally discouraged by wildlife authorities because it can habituate them and increase conflict.",
        },
        {
          question: "Can foxes be kept as pets?",
          answer:
            "Wild foxes are not domesticated animals. Their care needs are very different from those of dogs, and they retain wild behavioural traits even when hand-raised. Keeping a fox as a pet is illegal or restricted in many jurisdictions; even where permitted, it is generally not recommended on welfare grounds.",
        },
      ]}
      quickFacts={[
        { label: "Reference species", value: "Red fox (Vulpes vulpes)" },
        { label: "Family", value: "Canidae" },
        { label: "Class", value: "Mammalia" },
        { label: "Diet", value: "Opportunistic omnivore" },
        { label: "Social structure", value: "Solitary or small family group" },
        { label: "Primary habitat", value: "Forest, farmland, tundra, urban" },
        { label: "Range", value: "Holarctic; widely introduced in Australia" },
        { label: "IUCN Status (red fox)", value: "Least Concern (verify before publication)" },
      ]}
      relatedLinks={[
        { label: "Wolf Profile", href: "/animals/wolf", description: "Canis lupus — pack predator" },
        { label: "Wolf vs Dog", href: "/compare/wolf-vs-dog", description: "Comparing wolves and domestic dogs" },
        { label: "Mammal Encyclopedia", href: "/animal-encyclopedia/mammals" },
        { label: "Animal Encyclopedia", href: "/animal-encyclopedia" },
      ]}
      publishedDate={PUBLISHED}
      modifiedDate={MODIFIED}
    />
  );
}
