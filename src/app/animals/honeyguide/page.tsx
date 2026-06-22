import type { Metadata } from "next";
import AnimalProfileLayout from "@/components/AnimalProfileLayout";
import { ANIMAL_SOURCES } from "@/lib/educational/animal-sources";
import { getAnimalGalleryImages, getAnimalImage, getAnimalOgImage } from "@/lib/images/animal-images";
import { buildArticleMetadata } from "@/lib/metadata";

const PATH = "/animals/honeyguide";
const TITLE = "Honeyguide — Profile, the Bird That Leads People to Wild Honey";
const DESC =
  "Explore honeyguides (family Indicatoridae): African and Asian birds that famously lead humans to bees' nests to share the spoils — and that, like cuckoos, lay their eggs in other birds' nests.";

export const metadata: Metadata = buildArticleMetadata({
  title: TITLE,
  description: DESC,
  path: PATH,
  publishedTime: "2026-06-22",
  modifiedTime: "2026-06-22",
  ogImage: getAnimalOgImage("honeyguide"),
});

export default function HoneyguidePage() {
  return (
    <AnimalProfileLayout
      commonName="Honeyguide"
      scientificName="family Indicatoridae"
      pageTitle={TITLE}
      description={DESC}
      path={PATH}
      parentCategory="Birds"
      parentCategoryHref="/animal-encyclopedia/birds"
      tags={["Bird", "Africa", "Mutualism"]}
      image={getAnimalImage("honeyguide") ?? undefined}
      galleryImages={getAnimalGalleryImages("honeyguide")}
      sources={ANIMAL_SOURCES.honeyguide}
      publishedDate="2026-06-22"
      modifiedDate="2026-06-22"
      overview={
        <>
          <p>
            Honeyguides (family Indicatoridae) are small, mostly drab birds of Africa and parts of
            Asia with one of the most remarkable behaviours in the entire bird world. The greater
            honeyguide (<em>Indicator indicator</em>), shown here, will actively lead people to wild
            bees&apos; nests: calling and flitting from tree to tree, it guides honey-hunters to a
            hive, waits while they break it open and take the honey, and then feeds on the leftover
            beeswax and bee larvae. It is one of the few wild animals that cooperates with humans to
            mutual benefit, and the partnership is ancient.
          </p>
          <p>
            Honeyguides are also brood parasites: like cuckoos, the females lay their eggs in the
            nests of other birds, leaving the hosts to raise their young — and the honeyguide chick
            often kills its nest-mates.
          </p>
          <p>
            <strong>Note:</strong> &ldquo;honeyguide&rdquo; covers a family; the guiding behaviour is
            best known in the greater honeyguide. Treat general statements as approximate and verify
            against authoritative sources.
          </p>
        </>
      }
      habitat={
        <p>
          Honeyguides live across sub-Saharan Africa, with a few species in South and Southeast Asia,
          in woodland, savanna, forest, and bush. They occur wherever there are bees&apos; nests to
          exploit and host birds to parasitise, and the guiding greater honeyguide is found in open
          woodland and savanna across much of Africa.
        </p>
      }
      diet={
        <p>
          Honeyguides are unusual in eating beeswax — they are among the very few birds able to digest
          it — along with bee eggs, larvae, and other insects. The guiding species rely on having a
          partner (a person, or in some accounts a honey badger or other animal) break open a bees&apos;
          nest, then feed on the exposed wax and grubs. Even away from raided hives, honeyguides take
          wax, insects, and other small food items.
        </p>
      }
      behavior={
        <p>
          The greater honeyguide&apos;s guiding behaviour is extraordinary: it approaches people with a
          special chattering call, then flies ahead from tree to tree, pausing and calling to lead them
          toward a bees&apos; nest, sometimes over a considerable distance. In parts of Africa, human
          honey-hunters even use specific calls to summon honeyguides, and the two communicate back and
          forth — a genuine, learned partnership in which the bird gets at the wax and grubs it cannot
          reach alone. Honeyguides are also brood parasites: a female lays her eggs in the nest of
          another bird (often a barbet, bee-eater, or similar hole-nester), and the honeyguide chick,
          armed with sharp bill hooks as a hatchling, typically kills the host&apos;s own young so it
          monopolises the care. These two traits make honeyguides one of the most behaviourally
          fascinating bird families.
        </p>
      }
      humanInteraction={
        <p>
          Honeyguides have a uniquely close, mutually beneficial relationship with people in parts of
          Africa, where the guiding partnership has been documented for centuries and is a celebrated
          example of human–wildlife cooperation; sadly it has faded in places as traditional
          honey-hunting declines. Most honeyguides remain reasonably widespread, though habitat change
          can affect them and their hosts. They are harmless to people. (A long-repeated claim that
          honeyguides also guide honey badgers is often cited but remains debated.) Consult the IUCN Red
          List for species-specific status.
        </p>
      }
      faqs={[
        {
          question: "Do honeyguides really lead people to honey?",
          answer:
            "Yes — the greater honeyguide genuinely does. It approaches people with a special chattering call and then flies ahead from tree to tree, calling and pausing to guide them to a wild bees' nest, sometimes over a long distance. After the people break open the nest and take the honey, the bird feeds on the leftover beeswax and bee larvae. It's one of the clearest examples of a wild animal cooperating with humans.",
        },
        {
          question: "Why do honeyguides eat beeswax?",
          answer:
            "Honeyguides are among the very few birds that can digest beeswax, and it's an important part of their diet, along with bee eggs, larvae, and other insects. Because they often can't open a bees' nest themselves, the guiding species rely on a partner — a person (or, by some accounts, another animal) — to break it open, then feed on the exposed wax and grubs.",
        },
        {
          question: "Are honeyguides brood parasites like cuckoos?",
          answer:
            "Yes. Female honeyguides lay their eggs in the nests of other birds — often hole-nesters like barbets and bee-eaters — leaving the hosts to incubate and raise them. The honeyguide chick hatches with sharp hooks on its bill and usually kills the host's own young, so it receives all the parents' care. It's a striking parallel to the cuckoo's strategy.",
        },
        {
          question: "Do honeyguides guide honey badgers too?",
          answer:
            "It's a famous claim, but a debated one. The honeyguide's partnership with humans is well documented, whereas reports of honeyguides leading honey badgers to hives are often repeated but not solidly confirmed by evidence. It's best treated as an intriguing, much-cited idea rather than an established fact.",
        },
      ]}
      quickFacts={[
        { label: "Group", value: "Family Indicatoridae (honeyguides)" },
        { label: "Reference species", value: "Indicator indicator (greater honeyguide)" },
        { label: "Class", value: "Aves" },
        { label: "Famous for", value: "Leading people to bees' nests" },
        { label: "Diet", value: "Beeswax (rare ability), bee larvae, insects" },
        { label: "Breeding", value: "Brood parasite (lays in others' nests)" },
        { label: "Chick", value: "Hatches with bill hooks; kills nest-mates" },
        { label: "Range", value: "Sub-Saharan Africa; some in Asia" },
      ]}
      relatedLinks={[
        { label: "Woodpecker Profile", href: "/animals/woodpecker", description: "A close relative of honeyguides" },
        { label: "Bee-eater Profile", href: "/animals/bee-eater", description: "A bird that eats bees (and a honeyguide host)" },
        { label: "Honey Bee — Bee Profile", href: "/animals/bee", description: "The bees whose nests they exploit" },
        { label: "Fauna by Continent", href: "/fauna/continents", description: "African savanna fauna in context" },
        { label: "Birds Encyclopedia", href: "/animal-encyclopedia/birds" },
      ]}
    />
  );
}
