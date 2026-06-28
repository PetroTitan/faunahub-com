import type { Metadata } from "next";
import FeedingLayout, { Section, FaqBlock } from "@/components/feeding/FeedingLayout";
import { buildMetadata } from "@/lib/metadata";

const PATH = "/animal-food-and-diet/reptile-amphibian-feeding-boundaries";
const MODIFIED = "2026-06-28";
const TITLE = "Reptile & Amphibian Diets: Why They Differ So Much";
const DESC =
  "An educational look at why reptile and amphibian diets vary radically by species, and why feeding an animal in human care is highly specialised vet-led work.";

export const metadata: Metadata = buildMetadata({ title: TITLE, description: DESC, path: PATH });

const FAQ = [
    {
      question: "Is there a general reptile or amphibian diet I can follow?",
      answer:
        "No. Diets vary radically by species — some are herbivorous, many are insectivorous or carnivorous, and some are highly specialised — and they can also vary by life stage and individual. A diet appropriate for one species can be inappropriate or harmful for another, so there is no single \"reptile\" or \"amphibian\" diet. This page is educational and does not provide a feeding plan; species-specific decisions belong with a qualified reptile and amphibian (herp) veterinarian and authoritative care resources.",
    },
    {
      question: "Why doesn't this page tell me what or how much to feed?",
      answer:
        "Feeding a reptile or amphibian in human care is highly specialised and species-specific, and it interacts with other husbandry factors in ways a general page cannot responsibly address. Providing portions, schedules, live-prey guidance, or supplement, calcium, or UVB dosing would risk real harm. Those decisions should be made with a herp veterinarian and reputable species-specific care references for the exact animal involved.",
    },
    {
      question: "How serious is it to get a captive reptile's or amphibian's diet wrong?",
      answer:
        "Diet-related and husbandry-related health problems are widely documented in reptiles and amphibians kept in human care and are a recognised, serious welfare concern. The effects can build gradually and be easy to miss, which is why feeding is best treated as a specialist decision made with professional input rather than guesswork. Changes in appetite, weight, body condition, or behaviour are reasons to seek qualified veterinary advice promptly.",
    },
    {
      question: "Who should I ask about feeding my specific reptile or amphibian?",
      answer:
        "A veterinarian experienced with reptiles and amphibians (a herp, exotics, or zoological-companion-animal vet), together with reputable species-specific care resources and recognised herpetological and welfare organisations. For any urgent concern such as a suspected poisoning or an unwell animal, contact a veterinarian, an animal poison-control service, or a local emergency service immediately, and do not delay veterinary care.",
    },
];

export default function ReptileAmphibianFeedingBoundariesPage() {
  return (
    <FeedingLayout
      crumbs={[
        { name: "Animal Food & Diet", href: "/animal-food-and-diet" },
        { name: "Reptile & amphibian feeding", href: PATH },
      ]}
      kicker="Feeding boundaries"
      h1={"Reptile & amphibian feeding boundaries"}
      modified={MODIFIED}
      intro={
        <>
          <p>
            Reptiles and amphibians are not a single dietary group. Across snakes, lizards, turtles and tortoises, crocodilians, frogs, toads, salamanders, newts, and the limbless caecilians, natural diets range from strictly plant-based to almost entirely predatory, with many species in between and some that are highly specialised on a narrow set of foods. Because of this, there is no general &quot;reptile diet&quot; or &quot;amphibian diet&quot; — what is appropriate for one species can be wrong, or even harmful, for another.
          </p>
          <p>
            This page is an educational, natural-history overview of that diversity and of why diet is such a difficult area to get right for animals in human care. It is not veterinary advice and it is not a care or feeding plan. It deliberately gives no terrarium feeding plan, no live-prey guidance, no supplement, calcium, vitamin, or UVB dosing, and no schedules. Diet for a specific animal is a specialised, species-specific decision that belongs with a qualified reptile and amphibian (herp) veterinarian and authoritative species care resources.
          </p>
        </>
      }
      related={[
    { label: "Animal Food & Diet", href: "/animal-food-and-diet" },
    { label: "Reptiles & Amphibians", href: "/animal-taxonomy/reptiles-amphibians" },
    { label: "Turtle", href: "/animals/turtle" },
    { label: "Reptiles & Amphibians (Encyclopedia)", href: "/animal-encyclopedia/reptiles" },
    { label: "Care & veterinary boundaries", href: "/animal-research-sources/animal-care-and-veterinary-boundaries" },
      ]}
      faq={FAQ}
    >
      <Section id="s0" title={"Diets vary radically by species"}>
        <p>
          In broad natural-history terms, some reptiles and amphibians are herbivorous, browsing on plants — many tortoises and a number of lizards fall toward this end. Many lizards and most amphibians are insectivorous or otherwise invertebrate-eating in the wild, and a large number of snakes and other species are carnivorous, taking whole prey. Others are omnivorous, and some shift their diet with age, season, or habitat.
        </p>
        <p>
          Beyond these broad categories, some species are genuinely specialised: certain snakes that feed mainly on eggs, lizards that consume large amounts of particular plants, frogs and salamanders adapted to specific invertebrate prey, and aquatic species whose feeding differs again from their land-dwelling relatives. Describing these patterns is general biology, not a recommendation about what to offer any animal.
        </p>
        <p>
          The practical consequence is simple to state and important to remember: knowing that an animal is &quot;a lizard&quot; or &quot;a frog&quot; tells you very little about its actual dietary needs. Those needs are determined at the species level — and often vary further by life stage and individual — which is exactly why this is specialist territory.
        </p>
      </Section>
      <Section id="s1" title={"Why captive diet is so specialised"}>
        <p>
          A wild animal&#39;s diet is shaped by what it naturally encounters, how it forages, its body temperature and metabolism, and the seasonal availability of food. Recreating appropriate nutrition for the same species in human care is a different and demanding task, because the foods, conditions, and routines available indoors rarely match the wild situation on their own.
        </p>
        <p>
          Reptile and amphibian nutrition is also tightly linked to other husbandry factors — such as temperature, lighting, hydration, and an animal&#39;s overall environment — that interact in ways which are well beyond the scope of a general education page. This is one reason that responsible, accurate feeding for these animals depends on detailed, species-specific care information rather than rules of thumb.
        </p>
        <p>
          Because of this complexity, this page does not attempt to describe what or how to feed any captive reptile or amphibian. Those decisions require a qualified herp veterinarian and authoritative, species-specific care resources who can account for the individual animal.
        </p>
      </Section>
      <Section id="s2" title={"Getting the diet wrong is a common, serious welfare problem"}>
        <p>
          Among reptiles and amphibians kept in human care, diet-related and husbandry-related health problems are widely documented and are a recognised, serious welfare concern. Getting nutrition or the surrounding husbandry wrong is one of the more common ways these animals come to harm, and the effects can develop gradually and be easy to miss.
        </p>
        <p>
          Stating that this is a real and common problem is the point of this page: it is a reason to treat feeding as a specialist decision made with professional input, not a do-it-yourself guess. This page does not list symptoms to diagnose, and it does not describe how to correct any problem — both of those belong with a veterinarian.
        </p>
        <p>
          If you keep or are considering keeping a reptile or amphibian, the responsible step is to learn the specific species&#39; needs in depth from authoritative care resources before any decisions are made, and to involve a herp veterinarian. Changes in appetite, weight, body condition, or behaviour are reasons to seek qualified veterinary advice promptly — not to self-treat.
        </p>
      </Section>
      <Section id="s3" title={"Where species-specific decisions belong"}>
        <p>
          Accurate feeding for a particular reptile or amphibian is best worked out with a veterinarian experienced in reptiles and amphibians (often described as a herp, exotics, or zoological-companion-animal vet), together with reputable, species-specific care references and recognised herpetological and welfare organisations.
        </p>
        <p>
          These sources can take into account the exact species, its life stage, and the individual animal in a way that no general article can. Professional, animal-specific guidance is especially important before acquiring an animal, when planning its care, and any time something about its eating or condition seems to be changing.
        </p>
        <p>
          This page is intended to help you understand why that specialist routing matters — not to substitute for it. For any animal-specific feeding or health question, consult a qualified reptile and amphibian veterinarian.
        </p>
      </Section>
      <Section id="s4" title={"Safety and when to seek help"}>
        <p>
          For any urgent concern — for example a suspected poisoning, a swallowed object, an animal that is unwell, or any situation that seems like an emergency — contact a veterinarian, an animal poison-control service, or a local emergency service immediately. Do not delay or avoid veterinary care while looking for information online.
        </p>
        <p>
          A natural diet is not automatically a safe or complete diet for an animal in human care, and a food or routine suitable for one species can be inappropriate for another. This page does not name &quot;safe&quot; foods or amounts, because those determinations are species-specific and individual, and getting them wrong carries real risk.
        </p>
        <p>
          For animal-specific feeding or health decisions, the appropriate and safe path is a qualified reptile and amphibian veterinarian alongside authoritative species care resources.
        </p>
      </Section>
      <FaqBlock faq={FAQ} />
    </FeedingLayout>
  );
}
