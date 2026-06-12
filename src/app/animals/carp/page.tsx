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

const title = "Carp — Profile, Habitat, Diet & Behavior";
const description =
  "The common carp (Cyprinus carpio): an educational profile of this widespread freshwater fish — habitat, omnivorous diet, behaviour, and its status as an introduced species.";

export const metadata: Metadata = buildArticleMetadata({
  title,
  description,
  path: "/animals/carp",
  publishedTime: PUBLISHED,
  modifiedTime: MODIFIED,
  ogImage: getAnimalOgImage("carp"),
});

export default function CarpPage() {
  return (
    <AnimalProfileLayout
      commonName="Carp"
      scientificName="Cyprinus carpio"
      pageTitle={title}
      description={description}
      path="/animals/carp"
      parentCategory="Fish"
      parentCategoryHref="/animal-encyclopedia/fish"
      tags={["Fish", "Freshwater", "Wild"]}
      image={getAnimalImage("carp") ?? undefined}
      galleryImages={getAnimalGalleryImages("carp")}
      factsHeaderNote="This page covers the common carp (Cyprinus carpio), a wild and farmed fish and the ancestor of koi. Outside its native range it is often an invasive species. Educational page; not fishing, farming, or veterinary advice."
      overview={
        <>
          <p>
            The common carp (<em>Cyprinus carpio</em>) is a large freshwater
            fish in the family Cyprinidae, native to Eurasia and now found across
            much of the world after widespread introduction. It is one of the
            most economically important freshwater fish globally, farmed for food
            and valued in angling, and it is the species from which ornamental
            koi were bred. In many regions outside its native range, the common
            carp is considered an invasive species.
          </p>
        </>
      }
      habitat={
        <>
          <p>
            Carp live in slow-moving and still fresh waters such as lakes, ponds,
            and the lower reaches of rivers, often where the bottom is soft and
            vegetation is plentiful. They are hardy and tolerant of a range of
            conditions, including low oxygen and turbid water, which has helped
            them spread. Their tolerance and bottom-feeding habits can disturb
            habitats and harm native species where they are introduced.
          </p>
        </>
      }
      diet={
        <>
          <p>
            Carp are omnivores that feed largely on the bottom, taking
            invertebrates, plant material, seeds, and detritus, often stirring up
            sediment as they forage. This rooting behaviour can increase water
            turbidity. Diet varies with habitat and season; this page describes
            general feeding ecology rather than husbandry quantities.
          </p>
        </>
      }
      behavior={
        <>
          <p>
            Carp are generally social fish that may gather in groups, and they
            are most active in warmer water, slowing in winter. They are
            considered intelligent and, among anglers, wary and hard to catch.
            Spawning typically occurs in warm shallow water in spring and summer,
            and carp can be highly productive, which contributes to their success
            as an introduced species.
          </p>
        </>
      }
      humanInteraction={
        <>
          <p>
            Carp have a long history with people as a farmed food fish, an
            angling target, and the ancestor of ornamental koi. Their
            introduction beyond their native range, however, has made them a
            problematic invasive species in many areas, where they can degrade
            habitats and outcompete native fish. Conservation status and
            management vary by region and should be checked against current
            sources; the common carp itself is widespread.
          </p>
        </>
      }
      extraSections={[
        {
          heading: "Appearance & Recognition",
          body: (
            <>
              <p>
                The common carp is a robust, deep-bodied fish, typically olive to
                brassy-brown, with large scales and a pair of barbels at each
                corner of the mouth that help distinguish it from similar fish.
                Cultivated forms vary in scale pattern — including
                &quot;mirror&quot; carp with few large scales and
                &quot;leather&quot; carp with almost none. Ornamental koi are a
                colourful bred form of the same species.
              </p>
            </>
          ),
        },
      ]}
      similarAnimals={
        <p>
          The common carp is the wild species behind ornamental koi and a close
          relative of the goldfish, all in the carp family. It can be confused
          with other large cyprinids, but its barbels and body shape are useful
          identifying features.
        </p>
      }
      faqs={[
        {
          question: "Are carp and koi the same fish?",
          answer:
            "Koi are ornamental, colour-bred forms of the common carp (Cyprinus carpio), so they are the same species. Wild and farmed common carp are typically brown or brassy, while koi have been bred for bright colours and patterns.",
        },
        {
          question: "Why are carp considered invasive in some places?",
          answer:
            "Outside their native Eurasian range, common carp can spread quickly, tolerate poor conditions, and disturb sediment and vegetation while feeding, which can harm native species and water quality. As a result they are managed as an invasive species in several regions.",
        },
        {
          question: "What do the barbels on a carp do?",
          answer:
            "The barbels are sensory organs near the mouth that help the carp detect food as it forages along the bottom. They are also a handy identification feature distinguishing carp from some look-alike fish.",
        },
      ]}
      quickFacts={[
        { label: "Scientific name", value: "Cyprinus carpio" },
        { label: "Family", value: "Cyprinidae (carp family)" },
        { label: "Type", value: "Freshwater fish" },
        { label: "Native range", value: "Eurasia; widely introduced" },
        { label: "Diet", value: "Omnivore (bottom feeder)" },
        { label: "Status note", value: "Often invasive outside native range — verify locally" },
      ]}
      relatedLinks={[
        { label: "Koi Profile", href: "/animals/koi", description: "Ornamental form of the common carp" },
        { label: "Goldfish Profile", href: "/animals/goldfish" },
        { label: "Catfish Profile", href: "/animals/catfish" },
        { label: "Fish Encyclopedia", href: "/animal-encyclopedia/fish" },
        { label: "Wildlife Hub", href: "/wildlife" },
      ]}
      sources={ANIMAL_SOURCES.carp}
      publishedDate={PUBLISHED}
      modifiedDate={MODIFIED}
    />
  );
}
