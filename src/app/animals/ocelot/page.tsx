import type { Metadata } from "next";
import AnimalProfileLayout from "@/components/AnimalProfileLayout";
import { ANIMAL_SOURCES } from "@/lib/educational/animal-sources";
import { getAnimalGalleryImages, getAnimalImage, getAnimalOgImage } from "@/lib/images/animal-images";
import { buildArticleMetadata } from "@/lib/metadata";

const PATH = "/animals/ocelot";
const TITLE = "Ocelot — Profile, the Beautifully Marked Wild Cat of the Americas";
const DESC =
  "Explore the ocelot (Leopardus pardalis): a sleek, chain-rosetted wild cat of the American tropics — a nocturnal hunter once devastated by the fur trade, now recovering in many areas.";

export const metadata: Metadata = buildArticleMetadata({
  title: TITLE,
  description: DESC,
  path: PATH,
  publishedTime: "2026-06-22",
  modifiedTime: "2026-06-22",
  ogImage: getAnimalOgImage("ocelot"),
});

export default function OcelotPage() {
  return (
    <AnimalProfileLayout
      commonName="Ocelot"
      scientificName="Leopardus pardalis"
      pageTitle={TITLE}
      description={DESC}
      path={PATH}
      parentCategory="Mammals"
      parentCategoryHref="/animal-encyclopedia/mammals"
      tags={["Mammal", "Wild cat", "Americas"]}
      image={getAnimalImage("ocelot") ?? undefined}
      galleryImages={getAnimalGalleryImages("ocelot")}
      sources={ANIMAL_SOURCES.ocelot}
      publishedDate="2026-06-22"
      modifiedDate="2026-06-22"
      overview={
        <>
          <p>
            The ocelot (<em>Leopardus pardalis</em>) is a medium-sized wild cat of the Americas,
            famous for its gorgeous coat: a tawny-to-golden background patterned with dark,
            chain-like rosettes, streaks, and spots, so striking that the species was once hunted
            relentlessly for the fur trade. About twice the size of a domestic cat, the ocelot is a
            powerful, agile nocturnal hunter and one of the most widespread small cats of the
            Neotropics.
          </p>
          <p>
            Sometimes called the &ldquo;dwarf leopard,&rdquo; the ocelot is the largest of the
            spotted small cats in its range and a close relative of the smaller margay and oncilla.
          </p>
          <p>
            <strong>Note:</strong> details here cover the ocelot as a species; treat general
            statements as approximate and verify against authoritative sources.
          </p>
        </>
      }
      habitat={
        <p>
          Ocelots range from the southern United States through Mexico, Central America, and much
          of South America, in a wide variety of habitats — tropical rainforest, dry forest,
          scrub, savanna, and mangroves — generally favouring areas with dense cover. They are
          adaptable but depend on having thick vegetation for hunting and shelter, and individual
          cats hold and patrol territories.
        </p>
      }
      diet={
        <p>
          The ocelot is a carnivore that hunts mostly small prey — rodents and other small mammals,
          plus birds, reptiles, amphibians, fish, and crabs — taking larger prey such as young deer
          or monkeys less often. It hunts largely on the ground, using stealth and patience in the
          dark, locating prey by sight and hearing and pouncing to seize it. Ocelots are skilled,
          opportunistic hunters that adjust their diet to what is locally available.
        </p>
      }
      behavior={
        <p>
          Ocelots are mostly nocturnal and crepuscular, resting by day in dense vegetation or trees
          and hunting through the night, often covering long distances along regular routes. They
          are solitary and territorial, marking and defending their ranges, and they are strong
          climbers and swimmers, comfortable in trees and water though they hunt mainly on the
          ground. Their beautiful coat provides camouflage in dappled forest light. Females usually
          raise one or two kittens at a time in a sheltered den, and the slow reproductive rate
          makes populations sensitive to losses.
        </p>
      }
      humanInteraction={
        <p>
          Ocelots were hunted in enormous numbers for their fur in the twentieth century, which
          devastated many populations, and were also taken for the exotic pet trade. With legal
          protection and the decline of the fur trade, the species has recovered across much of its
          range and is not currently considered globally threatened overall, though some
          populations — such as those at the northern edge in the United States — remain small and
          endangered, mainly due to habitat loss and road deaths. As a wild cat, it is not suited to
          life as a pet. Consult the IUCN Red List for current status.
        </p>
      }
      faqs={[
        {
          question: "How big is an ocelot compared to a house cat?",
          answer:
            "An ocelot is roughly twice the size of a typical domestic cat — a medium-sized wild cat, larger than its relatives the margay and oncilla but much smaller than a jaguar or leopard. Its powerful build, long tail, and beautifully patterned coat give it a miniature-big-cat appearance, which is why it's sometimes nicknamed the 'dwarf leopard.'",
        },
        {
          question: "Why were ocelots hunted so heavily?",
          answer:
            "For their strikingly patterned fur. In the twentieth century, ocelots were killed in huge numbers for the fur trade, and many were also captured for the exotic pet trade. This persecution badly reduced populations until legal protections and a decline in demand for fur allowed the species to recover across much of its range.",
        },
        {
          question: "What does an ocelot eat?",
          answer:
            "Mostly small prey — rodents and other small mammals, plus birds, reptiles, amphibians, fish, and crabs, with larger prey taken occasionally. The ocelot is a stealthy, mainly nocturnal ground hunter that adapts its diet to whatever is locally abundant, making it a versatile and successful predator.",
        },
        {
          question: "Are ocelots endangered?",
          answer:
            "Overall the ocelot has recovered well since the fur-trade era and is not currently considered globally threatened, but the picture varies by region. Some populations — notably at the northern edge of its range in the United States — remain small and endangered, mainly because of habitat loss and vehicle collisions. Always check the IUCN Red List and local assessments for the current status.",
        },
      ]}
      quickFacts={[
        { label: "Scientific name", value: "Leopardus pardalis" },
        { label: "Class", value: "Mammalia (wild cat)" },
        { label: "Size", value: "~Twice a domestic cat ('dwarf leopard')" },
        { label: "Coat", value: "Chain-like rosettes & spots" },
        { label: "Activity", value: "Mainly nocturnal; solitary, territorial" },
        { label: "Diet", value: "Carnivore (mostly small prey)" },
        { label: "Range", value: "Southern US to South America" },
        { label: "Status", value: "Recovered overall; some pops. endangered (verify)" },
      ]}
      relatedLinks={[
        { label: "Margay Profile", href: "/animals/margay", description: "Its smaller, tree-climbing relative" },
        { label: "Jaguar Profile", href: "/animals/jaguar", description: "The big cat of the same forests" },
        { label: "Serval Profile", href: "/animals/serval", description: "Another spotted small cat (Africa)" },
        { label: "Fauna by Continent", href: "/fauna/continents", description: "Neotropical fauna in context" },
        { label: "Mammals Encyclopedia", href: "/animal-encyclopedia/mammals" },
      ]}
    />
  );
}
