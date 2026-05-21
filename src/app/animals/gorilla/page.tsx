import type { Metadata } from "next";
import AnimalProfileLayout from "@/components/AnimalProfileLayout";
import { ANIMAL_SOURCES } from "@/lib/educational/animal-sources";
import { getAnimalImage, getAnimalOgImage } from "@/lib/images/animal-images";
import { buildArticleMetadata } from "@/lib/metadata";

const PUBLISHED = "2026-05-12";
const MODIFIED = "2026-05-21";

const title = "Gorilla — Profile, Habitat, Diet & Behavior";
const description =
  "Gorilla: the largest living primate. Two species, western and eastern, group structure led by a silverback, herbivorous diet, and conservation status.";

export const metadata: Metadata = buildArticleMetadata({
  title,
  description,
  path: "/animals/gorilla",
  publishedTime: PUBLISHED,
  modifiedTime: MODIFIED,
  ogImage: getAnimalOgImage("gorilla"),
});

export default function GorillaPage() {
  return (
    <AnimalProfileLayout
      commonName="Gorilla"
      pageTitle={title}
      description={description}
      path="/animals/gorilla"
      parentCategory="Mammals"
      parentCategoryHref="/animal-encyclopedia/mammals"
      tags={["Mammal", "Great Ape", "Primate"]}
      image={getAnimalImage("gorilla") ?? undefined}
      factsHeaderNote="Two species and several subspecies are recognised. Conservation status is species- and subspecies-specific."
      overview={
        <>
          <p>
            Gorillas (genus <em>Gorilla</em>) are the largest living primates and are among
            the closest living relatives of humans. Two species are recognised: the western
            gorilla (<em>G. gorilla</em>) and the eastern gorilla (<em>G. beringei</em>), each
            with subspecies including the mountain gorilla and the western lowland gorilla.
            All recognised forms are restricted to forested habitats in central Africa.
          </p>
          <p>
            <strong>Conservation note:</strong> Gorilla species and subspecies range from
            Endangered to Critically Endangered on the IUCN Red List depending on the
            specific population. Verify current status at iucnredlist.org before publication.
          </p>
        </>
      }
      habitat={
        <>
          <p>
            Western gorillas live in lowland and swamp forests across western and central
            Africa. Eastern gorillas occupy forested habitats in the Albertine Rift region,
            with mountain gorillas restricted to a small number of high-elevation forest
            blocks straddling Rwanda, Uganda and the Democratic Republic of Congo.
          </p>
        </>
      }
      diet={
        <>
          <p>
            Gorillas are predominantly herbivorous, with diets centred on leaves, stems,
            shoots, pith, fruits, and (in some populations) bark. Diet composition varies by
            species, habitat, and season — fruit is generally more important to western
            gorillas, while mountain gorillas consume a larger proportion of leaves and herb
            material. Small amounts of invertebrate prey have been documented in some
            populations.
          </p>
        </>
      }
      behavior={
        <>
          <p>
            Gorillas live in stable social groups typically led by a single dominant adult
            male — the &quot;silverback&quot; — together with several adult females and their
            offspring. Group sizes vary by species and habitat. Communication includes a wide
            range of vocalisations, gestures, and facial expressions; long-running research
            programmes have documented complex social behaviours including reconciliation,
            tool use in some populations, and mother-infant teaching.
          </p>
        </>
      }
      humanInteraction={
        <>
          <p>
            Gorillas are subject to severe pressures from habitat loss, poaching (including
            for bushmeat), disease transmission (notably Ebola in some western populations),
            and civil conflict in parts of their range. Long-term mountain gorilla
            conservation work — including ecotourism and community engagement — has been
            associated with population recoveries in some areas, but all gorillas remain at
            elevated risk.
          </p>
        </>
      }
      extraSections={[
        {
          heading: "Appearance & Recognition",
          body: (
            <>
              <p>
                Gorillas are the largest living primates, with a build that is unmistakable
                in the field: a heavy barrel-shaped torso, broad chest and shoulders,
                proportionally long arms, and shorter, powerfully muscled legs. The face,
                hands, feet, and chest are largely bare; the rest of the body is covered in
                short to medium-length hair that is typically black to dark brown in
                younger adults. Adult males develop a tall sagittal crest on top of the
                skull that produces a notably peaked head profile.
              </p>
              <p>
                Appearance varies with <strong>age, sex, species and subspecies</strong>.
                Mature males carry a distinctive saddle of <strong>silver-grey hair</strong>
                across the back and rump — the &quot;silverback&quot; pattern — which
                females and younger males do not show. Mountain gorillas
                (<em>G. beringei beringei</em>) have longer, thicker fur as a cold-climate
                adaptation; western lowland gorillas have shorter coats and sometimes a
                rusty crown. All gorillas move quadrupedally on knuckles when on the
                ground, a posture and gait that is itself part of recognition at a distance.
              </p>
            </>
          ),
        },
      ]}
      similarAnimals={
        <p>
          Gorillas belong to the family Hominidae alongside chimpanzees, bonobos, orangutans
          and humans. Among non-human apes, they are most closely related to chimpanzees,
          bonobos and humans.
        </p>
      }
      faqs={[
        {
          question: "How closely related are gorillas to humans?",
          answer:
            "Gorillas are among our closest non-human relatives. Estimates from genetic comparisons put the gorilla-human shared ancestry around the level of 'great apes' overall; chimpanzees and bonobos are slightly closer to humans than gorillas are.",
        },
        {
          question: "What is a silverback?",
          answer:
            "'Silverback' refers to an adult male gorilla, named for the patch of silver-grey hair that develops on the back with age. The dominant male in a gorilla group is typically a silverback and plays a central role in group cohesion, decision-making, and defence.",
        },
        {
          question: "Are gorillas aggressive?",
          answer:
            "Gorillas are generally not aggressive toward humans unless threatened. Most displays of aggression — chest-beating, vocalisations, or charging — function to defuse conflict without physical contact. Wildlife authorities consistently emphasise that respectful behaviour and adequate distance prevent escalation.",
        },
        {
          question: "How many gorillas are left in the wild?",
          answer:
            "Wild population figures vary by species and subspecies and are updated periodically by conservation organisations such as the IUCN and the Wildlife Conservation Society. Current numbers should be taken from the most recent published surveys rather than older approximate figures.",
        },
      ]}
      quickFacts={[
        { label: "Genus", value: "Gorilla" },
        { label: "Species", value: "Western and eastern gorilla" },
        { label: "Family", value: "Hominidae" },
        { label: "Class", value: "Mammalia" },
        { label: "Diet", value: "Predominantly herbivorous" },
        { label: "Social structure", value: "Stable groups led by a silverback" },
        { label: "Primary habitat", value: "Lowland, swamp, and montane forest" },
        { label: "Range", value: "Central and western equatorial Africa" },
        { label: "IUCN Status", value: "Endangered to Critically Endangered (verify per population)" },
      ]}
      relatedLinks={[
        { label: "Chimpanzee Profile", href: "/animals/chimpanzee", description: "Pan troglodytes — closest non-human relative" },
        { label: "Mammal Encyclopedia", href: "/animal-encyclopedia/mammals" },
        { label: "Animal Encyclopedia", href: "/animal-encyclopedia" },
        { label: "Animal Comparisons", href: "/compare" },
      ]}
      sources={ANIMAL_SOURCES.gorilla}
      publishedDate={PUBLISHED}
      modifiedDate={MODIFIED}
    />
  );
}
