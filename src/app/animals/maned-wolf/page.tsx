import type { Metadata } from "next";
import AnimalProfileLayout from "@/components/AnimalProfileLayout";
import { ANIMAL_SOURCES } from "@/lib/educational/animal-sources";
import { getAnimalGalleryImages, getAnimalImage, getAnimalOgImage } from "@/lib/images/animal-images";
import { buildArticleMetadata } from "@/lib/metadata";

const PATH = "/animals/maned-wolf";
const TITLE = "Maned Wolf — Profile, the 'Fox on Stilts' of South America";
const DESC =
  "Explore the maned wolf (Chrysocyon brachyurus): a tall, long-legged South American canid — neither wolf nor fox — that eats lots of fruit and marks with a famously skunky scent.";

export const metadata: Metadata = buildArticleMetadata({
  title: TITLE,
  description: DESC,
  path: PATH,
  publishedTime: "2026-06-22",
  modifiedTime: "2026-06-22",
  ogImage: getAnimalOgImage("maned-wolf"),
});

export default function ManedWolfPage() {
  return (
    <AnimalProfileLayout
      commonName="Maned Wolf"
      scientificName="Chrysocyon brachyurus"
      pageTitle={TITLE}
      description={DESC}
      path={PATH}
      parentCategory="Mammals"
      parentCategoryHref="/animal-encyclopedia/mammals"
      tags={["Mammal", "Canid", "South America"]}
      image={getAnimalImage("maned-wolf") ?? undefined}
      galleryImages={getAnimalGalleryImages("maned-wolf")}
      sources={ANIMAL_SOURCES["maned-wolf"]}
      publishedDate="2026-06-22"
      modifiedDate="2026-06-22"
      overview={
        <>
          <p>
            The maned wolf (<em>Chrysocyon brachyurus</em>) is the tallest wild canid in South America and
            one of the most distinctive in the world — a striking animal that looks like a large red fox set
            on impossibly long, black, stilt-like legs. Despite the name and appearance, it is neither a true
            wolf nor a fox, but the only species in its own genus, an isolated branch of the dog family. It
            has a reddish-gold coat, big ears, and a dark mane along the neck and shoulders that it can raise.
          </p>
          <p>
            Those long legs are an adaptation for seeing over the tall grasses of its grassland home, and the
            maned wolf has another surprise: unlike most wild dogs, a large part of its diet is fruit. It is
            also famous for its powerful, skunk-like scent marking, which has earned it the nickname
            &ldquo;skunk wolf.&rdquo;
          </p>
          <p>
            <strong>Note:</strong> details here cover the maned wolf as a species; treat general statements as
            approximate and verify against authoritative sources.
          </p>
        </>
      }
      habitat={
        <p>
          Maned wolves live in central South America — across Brazil and into Argentina, Bolivia, Paraguay,
          and Peru — mainly in the tall-grass and scrub habitats of the cerrado and other grasslands,
          savannas, and wetland edges. Their long legs suit moving and looking out over the high grass, and
          they favour open, mixed landscapes rather than dense forest.
        </p>
      }
      diet={
        <p>
          The maned wolf is an omnivore with an unusually fruit-heavy diet for a canid: alongside small
          mammals (such as rodents), birds, reptiles, and insects, it eats a great deal of fruit, especially
          a tomato-like plant often called the &ldquo;wolf apple,&rdquo; which can make up a large share of
          its food. By eating fruit and dispersing the seeds, the maned wolf is an important seed-disperser of
          its grassland plants.
        </p>
      }
      behavior={
        <p>
          Maned wolves are mostly solitary and active around dusk and night, hunting alone rather than in
          packs — quite unlike wolves. They typically hunt small prey by stalking and pouncing, pinning prey
          with their forefeet, and they forage widely across large territories. A breeding pair shares and
          defends a territory but often forages separately. The maned wolf communicates over distance with a
          deep, far-carrying bark called a &ldquo;roar-bark,&rdquo; and with potent scent marks: its urine has
          a strong, distinctive smell (likened to skunk or cannabis) that signals its presence across the
          grassland. The raised mane is used in display when the animal is alarmed or threatened.
        </p>
      }
      humanInteraction={
        <p>
          The maned wolf is considered Near Threatened, with the loss and conversion of its grassland habitat
          to farmland the chief concern, along with road deaths, disease from domestic dogs, and conflict with
          people. It is shy and not dangerous to humans, and it is legally protected in much of its range and
          features in conservation and zoo-breeding programmes. As a wild, specialised animal, it is not
          suited to life as a pet. Consult the IUCN Red List for current status.
        </p>
      }
      faqs={[
        {
          question: "Is the maned wolf a wolf or a fox?",
          answer:
            "Neither, really. Despite looking like a long-legged red fox and being called a 'wolf,' the maned wolf is its own distinct species in its own genus (Chrysocyon) — an isolated branch of the dog family that isn't closely related to true wolves or foxes. It's often described as a unique canid all its own, sometimes nicknamed 'a fox on stilts.'",
        },
        {
          question: "Why does the maned wolf have such long legs?",
          answer:
            "The very long legs are an adaptation to its tall-grass habitat: they raise the animal's head so it can see (and listen) over the high grasses of the cerrado and other grasslands as it travels and hunts. They give the maned wolf its distinctive 'on stilts' look and a loping, graceful gait.",
        },
        {
          question: "Do maned wolves really eat a lot of fruit?",
          answer:
            "Yes — unusually for a wild dog. Fruit makes up a large part of the maned wolf's diet, especially a tomato-like fruit known as the 'wolf apple,' alongside small mammals, birds, reptiles, and insects. By eating fruit and spreading the seeds, the maned wolf is an important seed-disperser in its grassland ecosystem.",
        },
        {
          question: "Why is it nicknamed the 'skunk wolf'?",
          answer:
            "Because of its scent. The maned wolf's urine has a strong, pungent, skunk-like smell (often compared to skunk spray or cannabis), which it uses to mark its territory and communicate across the grassland. The odour is so distinctive that it can reveal the animal's presence even when it's nowhere in sight.",
        },
      ]}
      quickFacts={[
        { label: "Scientific name", value: "Chrysocyon brachyurus" },
        { label: "Class", value: "Mammalia (canid; own genus)" },
        { label: "Not a", value: "True wolf or fox ('fox on stilts')" },
        { label: "Signature trait", value: "Very long legs; raisable neck mane" },
        { label: "Diet", value: "Omnivore — lots of fruit + small prey" },
        { label: "Scent", value: "Strong skunk-like urine marking" },
        { label: "Range", value: "Central South American grasslands (cerrado)" },
        { label: "Status", value: "Near Threatened (verify)" },
      ]}
      relatedLinks={[
        { label: "Fox Profile", href: "/animals/fox", description: "The animal it superficially resembles" },
        { label: "Wolf Profile", href: "/animals/wolf", description: "A true wolf (not a close relative)" },
        { label: "Capybara relatives — Capybara Profile", href: "/animals/capybara", description: "Another grassland South American mammal" },
        { label: "Fauna by Continent", href: "/fauna/continents", description: "South American grassland fauna in context" },
        { label: "Mammals Encyclopedia", href: "/animal-encyclopedia/mammals" },
      ]}
    />
  );
}
