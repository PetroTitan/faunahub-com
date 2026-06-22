import type { Metadata } from "next";
import AnimalProfileLayout from "@/components/AnimalProfileLayout";
import { ANIMAL_SOURCES } from "@/lib/educational/animal-sources";
import { getAnimalGalleryImages, getAnimalImage, getAnimalOgImage } from "@/lib/images/animal-images";
import { buildArticleMetadata } from "@/lib/metadata";

const PATH = "/animals/kakapo";
const TITLE = "Kakapo — Profile, the Flightless Night Parrot Back from the Brink";
const DESC =
  "Explore the kakapo (Strigops habroptilus): the world's heaviest parrot — a flightless, nocturnal, critically endangered New Zealand bird saved by intensive conservation.";

export const metadata: Metadata = buildArticleMetadata({
  title: TITLE,
  description: DESC,
  path: PATH,
  publishedTime: "2026-06-21",
  modifiedTime: "2026-06-21",
  ogImage: getAnimalOgImage("kakapo"),
});

export default function KakapoPage() {
  return (
    <AnimalProfileLayout
      commonName="Kakapo"
      scientificName="Strigops habroptilus"
      pageTitle={TITLE}
      description={DESC}
      path={PATH}
      parentCategory="Birds"
      parentCategoryHref="/animal-encyclopedia/birds"
      tags={["Bird", "Parrot", "Critically Endangered"]}
      image={getAnimalImage("kakapo") ?? undefined}
      galleryImages={getAnimalGalleryImages("kakapo")}
      sources={ANIMAL_SOURCES.kakapo}
      publishedDate="2026-06-21"
      modifiedDate="2026-06-21"
      overview={
        <>
          <p>
            The kakapo (<em>Strigops habroptilus</em>) is one of the world&apos;s most
            extraordinary birds: a large, flightless, nocturnal parrot from New Zealand, with
            soft, mottled moss-green plumage and an owl-like disc of feathers around its face.
            It is the heaviest parrot in the world and one of the longest-lived birds, and it is
            critically endangered — its entire population numbers only in the low hundreds, every
            individual known and named by conservationists.
          </p>
          <p>
            Having evolved on islands with no native land mammals, the kakapo lost the ability
            to fly and became a ground-dwelling, slow-breeding herbivore — adaptations that left
            it tragically vulnerable when humans and introduced predators arrived.
          </p>
          <p>
            <strong>Conservation note:</strong> the kakapo is Critically Endangered and survives
            only on predator-free islands under intensive management. Verify current numbers at
            authoritative sources.
          </p>
        </>
      }
      habitat={
        <p>
          Once widespread across New Zealand&apos;s forests, the kakapo now survives only on a
          few carefully managed, predator-free offshore islands, in native forest and scrub.
          Historically it lived in a range of forest and shrubland habitats; today its range is
          defined by where introduced mammalian predators have been removed and the birds can be
          protected and monitored.
        </p>
      }
      diet={
        <p>
          Kakapo are herbivores, feeding on a variety of native plants — leaves, stems, roots,
          bark, seeds, and especially fruit. They are closely tied to the fruiting of certain
          native trees, notably the rimu, and tend to breed only in years when these trees
          produce a heavy crop of fruit. This link between food abundance and breeding is a key
          part of why the kakapo reproduces so infrequently.
        </p>
      }
      behavior={
        <p>
          The kakapo is nocturnal and flightless, walking and climbing through the forest at
          night and freezing or relying on camouflage when threatened — a defence that worked
          against birds of prey but not against mammals. It has a remarkable breeding system: it
          is the only parrot with a &ldquo;lek&rdquo; mating system, in which males gather and
          compete by producing a deep, resonant, far-carrying &ldquo;boom&rdquo; from special
          bowls they dig, to attract females from a distance. Breeding happens only every few
          years, tied to fruiting cycles, and females raise the chicks alone. Kakapo are
          long-lived, potentially surviving for many decades.
        </p>
      }
      humanInteraction={
        <p>
          The kakapo was driven to the edge of extinction by hunting and, above all, by
          introduced predators such as cats, rats, and stoats, against which its ground-living,
          freeze-when-scared lifestyle offered no defence. It survives today only because of one
          of the world&apos;s most intensive bird-recovery programmes: every bird is monitored,
          managed on predator-free islands, and helped through breeding seasons. Numbers have
          slowly grown but remain perilously low. Consult the IUCN Red List and New Zealand
          conservation authorities for current status.
        </p>
      }
      faqs={[
        {
          question: "Why can't the kakapo fly?",
          answer:
            "The kakapo evolved in New Zealand, which had no native land mammals to prey on it, so there was little pressure to keep the costly ability to fly. Over time it became a heavy, ground-dwelling, nocturnal bird that walks and climbs instead. Its wings are now used mainly for balance and to break a fall — but this left it defenceless when mammalian predators were introduced.",
        },
        {
          question: "How endangered is the kakapo?",
          answer:
            "Critically Endangered — it's one of the rarest birds on Earth. The entire population numbers only in the low hundreds, and every single bird is known, named, and monitored by conservationists. It survives only on predator-free islands under intensive management, and its slow, infrequent breeding makes recovery a long, careful process.",
        },
        {
          question: "What is the kakapo's 'boom'?",
          answer:
            "It's the male's mating call. The kakapo is the only parrot with a 'lek' breeding system: males gather and dig bowl-shaped hollows, then inflate like a balloon to produce a deep, resonant 'boom' that can carry for kilometres, attracting females. They boom for hours, night after night, during the breeding season.",
        },
        {
          question: "Why does the kakapo breed so rarely?",
          answer:
            "Its breeding is tied to the fruiting of certain native trees, especially the rimu. Kakapo tend to nest only in 'mast' years when these trees produce a bumper crop of fruit, which provides enough food to raise chicks. Since such heavy fruiting happens only every few years, the kakapo naturally breeds infrequently — a big challenge for recovering the species.",
        },
      ]}
      quickFacts={[
        { label: "Scientific name", value: "Strigops habroptilus" },
        { label: "Class", value: "Aves (parrot)" },
        { label: "Claim to fame", value: "World's heaviest parrot; flightless" },
        { label: "Activity", value: "Nocturnal, ground-dwelling" },
        { label: "Breeding", value: "Lek system; male 'booms'; rare/mast-linked" },
        { label: "Diet", value: "Herbivore (plants, fruit; esp. rimu)" },
        { label: "Range", value: "Predator-free NZ islands only" },
        { label: "Status", value: "Critically Endangered (verify)" },
      ]}
      relatedLinks={[
        { label: "Kea Profile", href: "/animals/kea", description: "Another remarkable NZ parrot" },
        { label: "Parrot Profile", href: "/animals/parrot", description: "Parrots as a group" },
        { label: "Kiwi Profile", href: "/animals/kiwi", description: "Another flightless NZ bird" },
        { label: "Endangered Animals", href: "/endangered-animals", description: "IUCN Red List categories" },
        { label: "Birds Encyclopedia", href: "/animal-encyclopedia/birds" },
      ]}
    />
  );
}
