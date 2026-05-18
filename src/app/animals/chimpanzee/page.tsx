import type { Metadata } from "next";
import AnimalProfileLayout from "@/components/AnimalProfileLayout";
import { buildArticleMetadata } from "@/lib/metadata";

const PUBLISHED = "2026-05-12";
const MODIFIED = "2026-05-18";

const title = "Chimpanzee — Profile, Habitat, Diet & Behavior";
const description =
  "Pan troglodytes: one of humans' closest living relatives. Forest habitats, omnivorous diet, tool use, complex social groups, and current conservation pressures.";

export const metadata: Metadata = buildArticleMetadata({
  title,
  description,
  path: "/animals/chimpanzee",
  publishedTime: PUBLISHED,
  modifiedTime: MODIFIED,
});

export default function ChimpanzeePage() {
  return (
    <AnimalProfileLayout
      commonName="Chimpanzee"
      scientificName="Pan troglodytes"
      pageTitle={title}
      description={description}
      path="/animals/chimpanzee"
      parentCategory="Mammals"
      parentCategoryHref="/animal-encyclopedia/mammals"
      tags={["Mammal", "Great Ape", "Primate"]}
      overview={
        <>
          <p>
            The chimpanzee (<em>Pan troglodytes</em>) is a great ape native to central and
            west African forests and savanna-woodland mosaics. Together with the bonobo (
            <em>Pan paniscus</em>), the chimpanzee is one of humans&apos; two closest living
            relatives. Chimpanzees are notable for their advanced social cognition, tool use,
            culturally variable behaviours between populations, and complex political
            dynamics within groups.
          </p>
          <p>
            <strong>Conservation note:</strong> The chimpanzee is currently classified as{" "}
            <strong>Endangered</strong> on the IUCN Red List (verify current status at
            iucnredlist.org before publication).
          </p>
        </>
      }
      habitat={
        <>
          <p>
            Chimpanzees inhabit a range of habitats across equatorial Africa, including
            tropical rainforest, gallery forest, savanna-woodland mosaics, and montane
            forest. Habitat preferences differ between subspecies and between communities.
            Several recognised subspecies span west, central, eastern, and Nigeria–Cameroon
            populations.
          </p>
        </>
      }
      diet={
        <>
          <p>
            Chimpanzees are omnivorous. The bulk of the diet typically consists of ripe
            fruit and leaves, supplemented by seeds, bark, pith, flowers, insects — including
            termites and ants extracted using tools — and, in some populations, mammalian
            prey such as small monkeys. Hunting is documented in a number of communities and
            is often a cooperative activity.
          </p>
        </>
      }
      behavior={
        <>
          <p>
            Chimpanzee social groups are large fission-fusion communities in which
            individuals associate in smaller subgroups that change composition through the
            day. Dominance, alliance, and reconciliation are well documented. Tool use is
            widespread and culturally variable between communities: stick fishing for
            termites, leaf sponges to collect water, and nut cracking with hammer-and-anvil
            stones are all examples documented in long-term field studies.
          </p>
        </>
      }
      humanInteraction={
        <>
          <p>
            Major threats include habitat loss, hunting for bushmeat, capture for the illegal
            pet trade, and disease — including human-introduced respiratory infections, which
            can be especially severe in habituated communities. Long-term research projects
            and protected areas have contributed substantially to chimpanzee conservation,
            although the species remains highly threatened.
          </p>
        </>
      }
      extraSections={[
        {
          heading: "Appearance & Recognition",
          body: (
            <>
              <p>
                Chimpanzees are noticeably lighter and more athletic in build than gorillas,
                with proportionally longer arms relative to body size — an arrangement
                adapted for both knuckle-walking on the ground and active climbing and
                brachiation in the canopy. The body is covered in coarse{" "}
                <strong>dark brown to black hair</strong>, while the face, ears, hands, and
                feet are largely bare. Facial skin colour varies with age: many infants and
                juveniles show pale pinkish or tan faces, while adult faces typically
                darken to brown or near-black, sometimes with paler patches around the
                muzzle.
              </p>
              <p>
                Recognisable features include prominent rounded ears, a relatively flat but
                slightly projecting muzzle, and a less pronounced brow ridge than in
                gorillas. Adult body size, beard development, and facial scarring vary
                between subspecies and between individuals; some older adults develop bald
                patches on the head or grey hair on the back. Chimpanzees can be
                distinguished cautiously from gorillas in the same range by their smaller
                size, more upright posture when standing, and more agile climbing — but
                overall build and behaviour are more reliable than any single visual cue.
              </p>
            </>
          ),
        },
      ]}
      similarAnimals={
        <p>
          Chimpanzees are most closely related to bonobos within the genus <em>Pan</em>.
          Other great apes — gorillas, orangutans, and humans — make up the rest of the
          family Hominidae.
        </p>
      }
      faqs={[
        {
          question: "How similar are chimpanzees to humans genetically?",
          answer:
            "Chimpanzees and humans share a very large fraction of their genetic material. Exact figures depend on what is being compared (coding regions vs whole genome, single-nucleotide differences vs structural differences). The frequently quoted high similarity does not mean the species are physically or cognitively interchangeable.",
        },
        {
          question: "Do chimpanzees really use tools?",
          answer:
            "Yes. Tool use is extensively documented across multiple chimpanzee communities. Examples include stick tools for termite or ant fishing, leaf sponges, hammer-and-anvil nut cracking, and the use of weapon-like sticks in hunting smaller primates. Specific tool repertoires vary between communities — a key example of cultural variation in non-human animals.",
        },
        {
          question: "What's the difference between chimpanzees and bonobos?",
          answer:
            "Chimpanzees (Pan troglodytes) and bonobos (Pan paniscus) are two separate species in the same genus. They differ in body proportions, social structure, and behaviour — bonobos are typically described as more peaceable and matriarchal, while chimpanzees have more pronounced male dominance and inter-community aggression. Their geographic ranges are also separated by the Congo River.",
        },
        {
          question: "Are chimpanzees endangered?",
          answer:
            "Yes. The chimpanzee is currently classified as Endangered on the IUCN Red List, with subspecies varying in status. Verify the current assessment before quoting specific status.",
        },
      ]}
      quickFacts={[
        { label: "Scientific name", value: "Pan troglodytes" },
        { label: "Family", value: "Hominidae" },
        { label: "Class", value: "Mammalia" },
        { label: "Diet", value: "Omnivore (fruit-dominated, with hunting in some groups)" },
        { label: "Social structure", value: "Fission-fusion communities" },
        { label: "Primary habitat", value: "Tropical forest, woodland mosaics" },
        { label: "Range", value: "Equatorial Africa" },
        { label: "IUCN Status", value: "Endangered (verify before publication)" },
      ]}
      relatedLinks={[
        { label: "Gorilla Profile", href: "/animals/gorilla", description: "Largest extant primate" },
        { label: "Mammal Encyclopedia", href: "/animal-encyclopedia/mammals" },
        { label: "Animal Encyclopedia", href: "/animal-encyclopedia" },
        { label: "Animal Comparisons", href: "/compare" },
      ]}
      publishedDate={PUBLISHED}
      modifiedDate={MODIFIED}
    />
  );
}
