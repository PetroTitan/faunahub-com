import type { Metadata } from "next";
import Link from "next/link";
import AnimalProfileLayout from "@/components/AnimalProfileLayout";
import { ANIMAL_SOURCES } from "@/lib/educational/animal-sources";
import { getAnimalImage, getAnimalOgImage } from "@/lib/images/animal-images";
import { buildArticleMetadata } from "@/lib/metadata";

const PUBLISHED = "2026-05-12";
const MODIFIED = "2026-05-21";

const title = "Jaguar — Profile, Habitat, Diet & Behavior";
const description =
  "Panthera onca: the largest big cat in the Americas. Distribution from Mexico to South America, ambush hunting, exceptional bite force, and conservation context.";

export const metadata: Metadata = buildArticleMetadata({
  title,
  description,
  path: "/animals/jaguar",
  publishedTime: PUBLISHED,
  modifiedTime: MODIFIED,
  ogImage: getAnimalOgImage("jaguar"),
});

export default function JaguarPage() {
  return (
    <AnimalProfileLayout
      commonName="Jaguar"
      scientificName="Panthera onca"
      pageTitle={title}
      description={description}
      path="/animals/jaguar"
      parentCategory="Mammals"
      parentCategoryHref="/animal-encyclopedia/mammals"
      tags={["Mammal", "Big Cat", "Apex Predator"]}
      image={getAnimalImage("jaguar") ?? undefined}
      overview={
        <>
          <p>
            The jaguar (<em>Panthera onca</em>) is the only living member of the genus{" "}
            <em>Panthera</em> native to the Americas and is the largest cat in its range. It
            is built more heavily than its Old World relative the leopard — with a broader
            head, more powerful jaws, and proportionally shorter limbs — and is closely
            associated with water and tropical forest in much of its range.
          </p>
          <p>
            <strong>Conservation note:</strong> The jaguar is currently classified as{" "}
            <strong>Near Threatened</strong> on the IUCN Red List (verify current status at
            iucnredlist.org before publication). Range and population are significantly
            reduced compared with historical levels.
          </p>
        </>
      }
      habitat={
        <>
          <p>
            Jaguars historically ranged from the southwestern United States south to
            northern Argentina. Today the great majority of the population is found in
            South and Central America, with the Amazon basin and the Pantanal wetlands of
            Brazil holding particularly significant strongholds. Tropical and subtropical
            forests, savannas with riparian gallery forest, and wetlands are typical
            habitats; the species generally avoids open arid landscapes.
          </p>
        </>
      }
      diet={
        <>
          <p>
            Jaguars are powerful and broadly opportunistic predators. Documented prey
            includes capybaras, peccaries, deer, caimans, fish, turtles, and a range of
            smaller mammals and reptiles. Their bite force, relative to other big cats, is
            unusually high and they are known to kill prey including caimans by piercing
            the skull — a distinctive trait.
          </p>
        </>
      }
      behavior={
        <>
          <p>
            Jaguars are solitary and territorial. They are strong swimmers, comfortable in
            water, and frequently associated with rivers and wetland habitats. They are
            largely crepuscular and nocturnal but can be active during the day in undisturbed
            areas.
          </p>
        </>
      }
      humanInteraction={
        <>
          <p>
            Habitat loss from agricultural expansion and infrastructure, fragmentation of
            once-continuous forest, retaliatory killing in response to livestock predation,
            and illegal trade in body parts are among the most significant pressures on the
            species today. Trans-boundary conservation initiatives across the Americas have
            sought to maintain ecological corridors that allow jaguar populations to remain
            connected.
          </p>
        </>
      }
      extraSections={[
        {
          heading: "Appearance & Recognition",
          body: (
            <>
              <p>
                Jaguars carry a compact, heavily muscled build — broader chest and shoulders
                than a leopard of comparable length — with a notably <strong>broad head</strong>,
                short rounded ears, and proportionally short, powerful limbs. The tail is
                relatively shorter than a leopard&apos;s. The base coat ranges from pale
                yellow through gold to a richer tan, marked with <strong>large rosettes</strong>
                that frequently contain <em>one or more small dark spots inside</em> — the
                most reliable visual diagnostic versus the leopard, whose rosettes are
                typically plain inside.
              </p>
              <p>
                A <strong>black (melanistic) morph</strong> occurs in parts of the species&apos;
                range; rosette markings are retained but may only be visible at close range
                under good light. Because leopards and jaguars do not naturally overlap, the
                most useful starting cue in field identification is geography: any wild
                rosetted big cat in the Americas is a jaguar, while one in Africa or Asia is a
                leopard. Compare directly on the{" "}
                <Link href="/compare/leopard-vs-jaguar">Leopard vs Jaguar</Link> page.
              </p>
            </>
          ),
        },
      ]}
      similarAnimals={
        <p>
          Jaguars are most easily confused with leopards (<em>Panthera pardus</em>) but have a
          stockier build, broader head, and rosettes that often contain one or more small
          spots inside. The two species do not naturally overlap in range — leopards live in
          Africa and Asia, jaguars in the Americas.
        </p>
      }
      comparisonCallouts={[
        { href: "/compare/leopard-vs-jaguar", label: "Leopard vs Jaguar" },
      ]}
      faqs={[
        {
          question: "Is a jaguar stronger than a leopard?",
          answer:
            "On average, jaguars are heavier and more powerfully built than leopards, and their bite force is generally cited as higher. However, direct strength comparisons are difficult to standardise and the two species are not natural competitors — their ranges do not overlap.",
        },
        {
          question: "Where do jaguars live today?",
          answer:
            "The bulk of the wild population lives in tropical and subtropical Central and South America. The Amazon basin, the Pantanal of Brazil, and parts of Mexico host particularly important populations. Small numbers occasionally cross into the southwestern United States but no resident U.S. population is currently considered established.",
        },
        {
          question: "Can jaguars swim?",
          answer:
            "Yes. Jaguars are among the most water-tolerant big cats. They are strong swimmers, hunt aquatic prey such as fish and caimans, and are frequently found close to rivers and wetlands.",
        },
        {
          question: "Are 'black panthers' jaguars or leopards?",
          answer:
            "Both. 'Black panther' is a colour morph (melanism) and not a species. In the Americas a black panther is a melanistic jaguar; in Africa and Asia it is a melanistic leopard. Underlying rosettes are still present and can be visible under appropriate lighting.",
        },
      ]}
      quickFacts={[
        { label: "Scientific name", value: "Panthera onca" },
        { label: "Family", value: "Felidae" },
        { label: "Class", value: "Mammalia" },
        { label: "Social structure", value: "Solitary (territorial)" },
        { label: "Primary habitat", value: "Tropical forest, wetland, gallery forest" },
        { label: "Range", value: "Central & South America (mainly Amazon, Pantanal)" },
        { label: "Diet", value: "Capybara, peccary, deer, caiman, fish, etc." },
        { label: "IUCN Status", value: "Near Threatened (verify before publication)" },
      ]}
      relatedLinks={[
        { label: "Leopard Profile", href: "/animals/leopard", description: "Panthera pardus — Old World analogue" },
        { label: "Tiger Profile", href: "/animals/tiger", description: "Largest cat species" },
        { label: "Leopard vs Jaguar", href: "/compare/leopard-vs-jaguar" },
        { label: "Mammal Encyclopedia", href: "/animal-encyclopedia/mammals" },
      ]}
      sources={ANIMAL_SOURCES.jaguar}
      publishedDate={PUBLISHED}
      modifiedDate={MODIFIED}
    />
  );
}
