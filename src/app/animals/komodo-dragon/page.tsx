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

const title = "Komodo Dragon — Profile, Habitat, Diet & Behavior";
const description =
  "The Komodo dragon (Varanus komodoensis): an educational profile of the world's largest living lizard — its Indonesian range, diet, behaviour, and conservation context.";

export const metadata: Metadata = buildArticleMetadata({
  title,
  description,
  path: "/animals/komodo-dragon",
  publishedTime: PUBLISHED,
  modifiedTime: MODIFIED,
  ogImage: getAnimalOgImage("komodo-dragon"),
});

export default function KomodoDragonPage() {
  return (
    <AnimalProfileLayout
      commonName="Komodo Dragon"
      scientificName="Varanus komodoensis"
      pageTitle={title}
      description={description}
      path="/animals/komodo-dragon"
      parentCategory="Reptiles & Amphibians"
      parentCategoryHref="/animal-encyclopedia/reptiles"
      tags={["Reptile", "Monitor Lizard", "Wild"]}
      image={getAnimalImage("komodo-dragon") ?? undefined}
      galleryImages={getAnimalGalleryImages("komodo-dragon")}
      factsHeaderNote="The Komodo dragon is the largest living lizard, native to a few Indonesian islands. It is a wild animal best observed at a distance with guides; this page is educational, not a handling or care guide. Conservation status should be checked against current sources."
      overview={
        <>
          <p>
            The Komodo dragon (<em>Varanus komodoensis</em>) is the largest
            living lizard, a giant monitor lizard found only on a few islands in
            Indonesia, including Komodo. Powerful and heavy-bodied, it is an apex
            predator in its restricted island range. It is a remarkable but wild
            animal, and this page presents it educationally — not as a creature
            to handle, keep, or approach without expert guidance.
          </p>
        </>
      }
      habitat={
        <>
          <p>
            Komodo dragons live in the dry savanna, scrub, and forest of a small
            number of Indonesian islands. Their naturally limited island
            distribution is part of what makes them vulnerable to threats such as
            habitat change and disturbance. They bask to regulate temperature and
            shelter in burrows. The species&apos; range is genuinely small, so
            descriptions should not be generalised to other monitors.
          </p>
        </>
      }
      diet={
        <>
          <p>
            Komodo dragons are carnivores that eat carrion and hunt live prey,
            including deer and other animals, using stealth and a powerful bite.
            Research indicates they have venom glands that contribute to subduing
            prey, alongside the effects of injury and blood loss. This page
            describes general feeding ecology and does not sensationalise risk or
            give any handling guidance.
          </p>
        </>
      }
      behavior={
        <>
          <p>
            Komodo dragons are mostly solitary and use a keen sense of smell,
            aided by a forked tongue, to locate food across long distances. They
            can move quickly in short bursts and are capable swimmers. Larger
            individuals dominate at carcasses. As large wild predators, they
            should be observed only from a safe distance and with authorised
            guides; they are not animals to approach or handle.
          </p>
        </>
      }
      humanInteraction={
        <>
          <p>
            Komodo dragons are a major focus of wildlife tourism and
            conservation in Indonesia, where they and their habitat are
            protected. Their small island range makes them sensitive to
            disturbance, habitat change, and other pressures. Because their
            conservation status is actively monitored and can change, it should
            be verified against current IUCN Red List and government sources
            rather than assumed. This page is educational, not care or safety
            advice.
          </p>
        </>
      }
      extraSections={[
        {
          heading: "Appearance & Recognition",
          body: (
            <>
              <p>
                The Komodo dragon is a massive monitor lizard with a long, heavy
                body, muscular limbs, sharp claws, a powerful tail, and rough,
                scaly grey-brown skin. It has a long, deeply forked yellow tongue
                used to sample scent. Its great size — far larger than other
                lizards — and bulky build make it unmistakable within its range.
              </p>
            </>
          ),
        },
      ]}
      similarAnimals={
        <p>
          The Komodo dragon is a monitor lizard (genus <em>Varanus</em>),
          related to the Nile monitor covered separately on FaunaHub, but it is
          by far the largest. It is unrelated to mythical &quot;dragons&quot;;
          the name reflects its size and reptilian appearance.
        </p>
      }
      comparisonCallouts={[
        { href: "/animals/monitor-lizard", label: "Compare with monitor lizards" },
      ]}
      faqs={[
        {
          question: "Why is it called a dragon?",
          answer:
            "The name reflects its impressive size and reptilian, somewhat fearsome appearance rather than any link to mythical dragons. The Komodo dragon is a real lizard — the largest living species — named partly for Komodo Island, where it occurs.",
        },
        {
          question: "Are Komodo dragons venomous?",
          answer:
            "Research indicates Komodo dragons have venom glands that contribute to subduing prey, alongside the effects of a powerful bite and resulting injury. This page describes that cautiously and ecologically; it does not give safety, first-aid, or handling instructions, and the species should be observed only with expert guidance.",
        },
        {
          question: "Where do Komodo dragons live?",
          answer:
            "They are found only on a small number of Indonesian islands, including Komodo. This naturally limited range is part of why they are protected and sensitive to disturbance. Current conservation status should be checked against IUCN and government sources.",
        },
      ]}
      quickFacts={[
        { label: "Scientific name", value: "Varanus komodoensis" },
        { label: "Family", value: "Varanidae (monitor lizards)" },
        { label: "Class", value: "Reptilia" },
        { label: "Distinction", value: "Largest living lizard" },
        { label: "Diet", value: "Carnivore (carrion and live prey)" },
        { label: "Range", value: "A few Indonesian islands" },
        { label: "Conservation", value: "Protected; verify status on IUCN Red List" },
      ]}
      relatedLinks={[
        { label: "Monitor Lizard Profile", href: "/animals/monitor-lizard", description: "Its wider genus, Varanus" },
        { label: "Iguana Profile", href: "/animals/iguana" },
        { label: "Crocodile Profile", href: "/animals/crocodile" },
        { label: "Reptiles & Amphibians", href: "/animal-encyclopedia/reptiles" },
        { label: "Wildlife Hub", href: "/wildlife" },
      ]}
      sources={ANIMAL_SOURCES["komodo-dragon"]}
      publishedDate={PUBLISHED}
      modifiedDate={MODIFIED}
    />
  );
}
