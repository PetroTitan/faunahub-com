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

const title = "Clownfish — Profile, Habitat, Diet & Behavior";
const description =
  "The clownfish or anemonefish (Amphiprion): an educational profile of these reef fish and their anemone partnership — habitat, behaviour, and marine-aquarium caution.";

export const metadata: Metadata = buildArticleMetadata({
  title,
  description,
  path: "/animals/clownfish",
  publishedTime: PUBLISHED,
  modifiedTime: MODIFIED,
  ogImage: getAnimalOgImage("clownfish"),
});

export default function ClownfishPage() {
  return (
    <AnimalProfileLayout
      commonName="Clownfish"
      pageTitle={title}
      description={description}
      path="/animals/clownfish"
      parentCategory="Fish"
      parentCategoryHref="/animal-encyclopedia/fish"
      tags={["Fish", "Marine", "Reef"]}
      image={getAnimalImage("clownfish") ?? undefined}
      galleryImages={getAnimalGalleryImages("clownfish")}
      factsHeaderNote="“Clownfish” covers about 30 anemonefish species; the reference shown is the clown anemonefish (Amphiprion ocellaris). Marine reef aquariums are advanced and demanding — this page is educational, not aquarium-care or veterinary advice."
      overview={
        <>
          <p>
            Clownfish, or anemonefish, are small, brightly coloured marine fish
            in the genus <em>Amphiprion</em>, with around thirty species. This
            page is a group-level overview; the clown anemonefish
            (<em>Amphiprion ocellaris</em>) is used as a familiar reference.
            Clownfish are famous for their close partnership with sea anemones,
            among whose stinging tentacles they shelter — a classic example of
            mutualism in the ocean.
          </p>
        </>
      }
      habitat={
        <>
          <p>
            Clownfish live on warm, shallow coral reefs and lagoons of the
            Indo-Pacific, always in association with host sea anemones. A
            protective layer of mucus is thought to help them live unharmed among
            the anemone&apos;s stinging tentacles. They are reef animals; keeping
            them in marine aquariums is an advanced undertaking requiring stable
            saltwater systems and is very different from keeping freshwater fish.
          </p>
        </>
      }
      diet={
        <>
          <p>
            Clownfish are omnivores, feeding on tiny planktonic animals, algae,
            and small invertebrates near their host anemone, and they may eat
            scraps from the anemone&apos;s prey. They rarely stray far from the
            safety of the anemone. Diet varies by species; this page describes
            general feeding ecology rather than aquarium feeding amounts.
          </p>
        </>
      }
      behavior={
        <>
          <p>
            Clownfish live in small groups within a host anemone, led by a
            dominant breeding female. They are notable for being sequential
            hermaphrodites: all begin as males, and if the female dies the
            largest male can change sex to replace her. They are territorial
            around their anemone and will defend it. Behaviour varies among the
            many anemonefish species.
          </p>
        </>
      }
      humanInteraction={
        <>
          <p>
            Clownfish became hugely popular after appearing in film, which
            increased demand for them in the marine-aquarium trade and raised
            concerns about wild collection; today many are captive-bred. Reef
            degradation and the loss of host anemones are pressures on wild
            populations. Conservation status varies by species and should be
            checked against current sources. Marine aquarium keeping is demanding
            and not a casual undertaking.
          </p>
        </>
      }
      extraSections={[
        {
          heading: "Appearance & Recognition",
          body: (
            <>
              <p>
                The familiar clown anemonefish is bright orange with three white
                vertical bars edged in black, though colour and banding vary
                across the anemonefish species — some are reddish, dark, or have
                different stripe patterns. Clownfish are small and rounded, with a
                waddling swimming style. Several similar-looking species are best
                told apart by detail and location.
              </p>
            </>
          ),
        },
      ]}
      similarAnimals={
        <p>
          Clownfish are damselfishes (family Pomacentridae). Their reliance on
          sea anemones links them to the cnidarians covered elsewhere on
          FaunaHub, such as the jellyfish, which share the same broad group as
          anemones. They are unrelated to the freshwater fish despite all being
          fish.
        </p>
      }
      faqs={[
        {
          question: "Why aren't clownfish stung by anemones?",
          answer:
            "Clownfish are thought to be protected by a special mucus layer on their skin that reduces the anemone's stinging response, allowing them to live among tentacles that would deter or harm other fish. The exact mechanism is still studied, and the relationship benefits both partners.",
        },
        {
          question: "Can clownfish change sex?",
          answer:
            "Yes. Clownfish are sequential hermaphrodites. They begin life as males, and within a group the largest individual becomes the dominant breeding female. If she dies, the largest remaining male can change sex to take her place.",
        },
        {
          question: "Are clownfish easy to keep at home?",
          answer:
            "Clownfish are marine reef fish, and keeping them requires a stable saltwater aquarium, which is an advanced and demanding hobby — quite different from a freshwater tank. This page is educational and not care advice; anyone considering marine fish should research thoroughly and seek qualified guidance.",
        },
      ]}
      quickFacts={[
        { label: "Group", value: "Clownfish / anemonefish (genus Amphiprion)" },
        { label: "Reference species", value: "Clown anemonefish (Amphiprion ocellaris)" },
        { label: "Family", value: "Pomacentridae (damselfishes)" },
        { label: "Habitat", value: "Indo-Pacific coral reefs" },
        { label: "Notable trait", value: "Mutualism with sea anemones; can change sex" },
        { label: "Conservation", value: "Varies by species — verify per species" },
      ]}
      relatedLinks={[
        { label: "Seahorse Profile", href: "/animals/seahorse", description: "Another reef-associated fish" },
        { label: "Pufferfish Profile", href: "/animals/pufferfish" },
        { label: "Marine Animals", href: "/animal-encyclopedia/marine-animals" },
        { label: "Fish Encyclopedia", href: "/animal-encyclopedia/fish" },
        { label: "Wildlife Hub", href: "/wildlife" },
      ]}
      sources={ANIMAL_SOURCES.clownfish}
      publishedDate={PUBLISHED}
      modifiedDate={MODIFIED}
    />
  );
}
