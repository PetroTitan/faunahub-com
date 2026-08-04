import type { Metadata } from "next";
import AnimalProfileLayout from "@/components/AnimalProfileLayout";
import { ANIMAL_SOURCES } from "@/lib/educational/animal-sources";
import { getAnimalGalleryImages, getAnimalImage, getAnimalOgImage } from "@/lib/images/animal-images";
import { buildArticleMetadata } from "@/lib/metadata";

const PATH = "/animals/porpoise";
const TITLE = "Porpoise: Profile, Habitat, Diet & How Porpoises Differ From Dolphins";
const DESC =
  "Porpoises (family Phocoenidae) are small toothed whales with blunt, beakless heads and triangular fins — habitat, diet, behaviour, and how they differ from dolphins.";

export const metadata: Metadata = buildArticleMetadata({
  title: TITLE,
  description: DESC,
  path: PATH,
  publishedTime: "2026-08-04",
  modifiedTime: "2026-08-04",
  ogImage: getAnimalOgImage("porpoise"),
});

export default function PorpoisePage() {
  return (
    <AnimalProfileLayout
      commonName="Porpoise"
      scientificName="family Phocoenidae"
      pageTitle={TITLE}
      description={DESC}
      path={PATH}
      parentCategory="Marine Animals"
      parentCategoryHref="/animal-encyclopedia/marine-animals"
      tags={["Marine mammals", "Toothed whales", "Cetaceans"]}
      image={getAnimalImage("porpoise") ?? undefined}
      galleryImages={getAnimalGalleryImages("porpoise")}
      sources={ANIMAL_SOURCES["porpoise"]}
      publishedDate="2026-08-04"
      modifiedDate="2026-08-04"
      factsHeaderNote="“Porpoise” is a group-level name for the family Phocoenidae, a family of toothed whales separate from the dolphins (Delphinidae). The harbour porpoise (Phocoena phocoena) is used here as the reference species; figures vary by species, sex, region and the source reporting them."
      overview={
        <>
          <p>
            Porpoises are small toothed whales in the family Phocoenidae. They are not dolphins: dolphins belong to a separate family, the Delphinidae, and the two groups are told apart by head shape, tooth shape, fin shape and, to a practised eye, by how they behave at the surface. The most familiar member is the harbour porpoise (<em>Phocoena phocoena</em>), a compact, dark-backed animal of cool coastal seas across much of the Northern Hemisphere. Also well known are the fast, boldly marked Dall&apos;s porpoise (<em>Phocoenoides dalli</em>) of the North Pacific and the vaquita (<em>Phocoena sinus</em>), a tiny porpoise found only in a small corner of the Gulf of California and widely described as one of the most endangered marine mammals in the world.
          </p>
          <p>
            The features that separate porpoises from dolphins are consistent enough to be useful in the field. A porpoise has a blunt head with no projecting beak, where most dolphins show a distinct beak. Its teeth are spade-shaped or spatulate rather than the conical, peg-like teeth of dolphins. Its dorsal fin, where present, is typically a small triangle rather than the curved, sickle-shaped fin of a common or bottlenose dolphin. Porpoises are generally smaller than most dolphins, and they are far less demonstrative at the surface: they usually roll up briefly, breathe and are gone, rather than leaping, bow-riding or wake-riding.
          </p>
          <p>
            Authorities usually recognise somewhere in the range of six to eight porpoise species, and the total shifts as populations and subspecies are re-examined. That variation is normal in cetacean taxonomy and is one reason a group-level page hedges its figures. Anything specific — species counts, sizes, ranges, population estimates or conservation categories — is best confirmed against current authoritative sources such as the IUCN Red List, NOAA Fisheries, the Society for Marine Mammalogy&apos;s species list or a national marine mammal agency, all of which are revised as new work is published.
          </p>
        </>
      }
      habitat={
        <>
          <p>
            Most porpoises are animals of cool to temperate coastal seas, continental shelves, bays, straits and estuaries rather than the open ocean, and several species are strongly associated with relatively shallow, productive and often turbid water. The harbour porpoise is typical: it is usually reported over shelf waters and in inshore areas, sounds and large estuaries, and it can occur close to shore and even some way up tidal rivers. Dall&apos;s porpoise departs from that pattern, being more often associated with deep, cold water of the North Pacific, including offshore areas.
          </p>
          <p>
            Some porpoises live in far more restricted settings. The vaquita is confined to a small part of the northern Gulf of California in Mexico, which is generally described as the smallest range of any marine cetacean. Finless porpoises of Asian coasts include populations associated with large rivers, so the family as a whole spans fully marine, coastal, estuarine and freshwater conditions. Because occupancy varies with species, season, prey movements and region, habitat here is best described qualitatively rather than as a fixed depth band or a single water temperature.
          </p>
        </>
      }
      diet={
        <>
          <p>
            Porpoises are predators of small prey. The harbour porpoise feeds largely on small schooling fish — species such as herring, sprat, sandeels, gobies and small gadoids are commonly reported from different regions — with squid and other invertebrates taken as well in some areas. Dall&apos;s porpoise is generally associated with fish and squid of deeper water, and the vaquita with small fish, squid and crustaceans of the shallow, turbid northern Gulf of California. Diet composition varies by species, region, season and life stage, so lists like these are examples rather than a fixed menu.
          </p>
          <p>
            Small body size in cold water carries a metabolic consequence: porpoises are typically described as needing to feed often and being poorly suited to long periods without food, in contrast to large whales that can draw on substantial reserves. That is one reason feeding is frequent, prey are usually small and taken whole, and why changes in the abundance or distribution of small forage fish can matter to porpoise populations. This page describes wild feeding ecology only and gives no feeding amounts, schedules or diet prescriptions for any animal.
          </p>
        </>
      }
      behavior={
        <>
          <p>
            Porpoises are usually seen alone, in pairs or in small groups, though loose aggregations can form where prey is concentrated. Surfacing is brief and undemonstrative — a short roll that exposes the back and the small triangular fin, sometimes with an audible puff, which is the origin of old regional names like &ldquo;puffing pig&rdquo;. Most porpoises rarely bow-ride, and a harbour porpoise commonly avoids boats rather than approaching them. Dall&apos;s porpoise is the notable exception: it is fast, will approach vessels, and throws up a characteristic spray of water as it surfaces.
          </p>
          <p>
            Sound rather than sight organises much of a porpoise&apos;s life. Porpoises produce very high-frequency, narrow-band echolocation clicks and, unlike many dolphins, are not known for the whistled communication that characterises much of the Delphinidae. Social structure appears simpler and less stable than the large, long-lived groups described for some dolphins, though observation is difficult precisely because the animals are small, cryptic and often shy of boats. Much of what is known about their movements now comes from acoustic monitoring and tagging rather than direct watching.
          </p>
        </>
      }
      humanInteraction={
        <>
          <p>
            The dominant interaction between porpoises and people is accidental capture in fishing gear. Entanglement in gillnets and similar set nets is repeatedly identified as the leading source of human-caused mortality across the family, and it is the pressure that has driven the vaquita to the brink: nets set in the northern Gulf of California, including nets set illegally for the totoaba — a fish whose swim bladder is trafficked — catch vaquitas incidentally. Acoustic deterrents on nets, gear modifications and closed areas have been trialled in various fisheries with mixed and much-debated results.
          </p>
          <p>
            Other documented pressures include underwater noise from shipping, construction and surveys, which can mask the high-frequency sounds porpoises depend on; chemical contaminants that accumulate in coastal food webs; the depletion or redistribution of small forage fish; and disturbance and strike risk in busy coastal waters. Very few porpoises are held under human care anywhere, and most public knowledge comes from strandings, surveys, acoustic recorders and research at a small number of facilities. This page is educational natural history and does not offer care, handling, rescue or veterinary guidance; stranded or entangled marine mammals are a matter for the responsible national authority or a licensed rescue organisation.
          </p>
        </>
      }
      extraSections={[
        {
          heading: "Porpoise or Dolphin?",
          body: (
            <>
              <p>
                The two names are often used interchangeably in everyday speech, but they refer to different families of toothed whales. The practical differences, in rough order of usefulness in the field:
              </p>
              <ul>
                <li>
                  <strong>Head.</strong> Porpoises have a blunt head with no projecting beak. Most dolphins show a distinct beak, though some — the harbour porpoise&apos;s superficial look-alikes among small dolphins included — are less obvious than others.
                </li>
                <li>
                  <strong>Teeth.</strong> Porpoise teeth are spade-shaped or spatulate; dolphin teeth are conical and peg-like. This is definitive but is normally only usable on a stranded animal or a museum specimen.
                </li>
                <li>
                  <strong>Dorsal fin.</strong> Where a fin is present, porpoises typically have a small triangular fin, while many dolphins have a taller, curved, sickle-shaped fin. The finless porpoises of Asian waters break this rule entirely, which is a good reminder that no single feature settles the question.
                </li>
                <li>
                  <strong>Size and manner.</strong> Porpoises are generally smaller and much less demonstrative at the surface — brief rolls rather than leaps, and usually no bow-riding.
                </li>
                <li>
                  <strong>Sound.</strong> Porpoises use narrow-band high-frequency clicks and are not known for the whistling repertoire typical of many dolphins.
                </li>
              </ul>
              <p>
                FaunaHub covers the dolphin family separately, so the two pages are best read together rather than as alternatives.
              </p>
            </>
          ),
        },
        {
          heading: "Distribution",
          body: (
            <>
              <p>
                As a family, porpoises are widespread but patchy. The harbour porpoise occupies cool temperate and subarctic coastal waters of the Northern Hemisphere, including much of the North Atlantic and North Pacific and adjoining seas, with a separate and much-studied population in the Black Sea. Dall&apos;s porpoise is a North Pacific animal. Burmeister&apos;s porpoise is associated with coastal South America, and the spectacled porpoise with cold southern waters. Finless porpoises occur along Asian coasts and in some large rivers, including animals of the Yangtze system.
              </p>
              <p>
                Distribution has changed within historical memory in several places, and the direction of change is not uniform. Porpoises have become scarce or effectively absent in parts of their former range — the Baltic and Black Sea situations are the most frequently cited examples of populations reduced and fragmented — while shifts in abundance within shelf seas such as the North Sea have been reported as prey distributions move. Rather than a single global trend, the honest summary is a family whose local fortunes differ sharply, and current range maps and population assessments should be taken from the IUCN Red List or the relevant national agency.
              </p>
            </>
          ),
        },
        {
          heading: "Senses & Adaptations",
          body: (
            <>
              <p>
                Porpoises are echolocators, and their clicks are unusual even among toothed whales. They produce narrow-band high-frequency clicks — in the harbour porpoise these are typically reported centred around 130 kHz, far above the range of human hearing — in short, rapid trains. Very high-frequency sound attenuates quickly in water, so this is a short-range tool, but it is well suited to detecting small fish at close quarters in murky coastal water where vision is of little help. Researchers make direct use of it: static underwater recorders left in place for weeks can log porpoise presence acoustically where visual survey would fail.
              </p>
              <p>
                This click type is also thought to sit outside the most sensitive part of killer whale hearing, and one long-standing hypothesis is that narrow-band high-frequency sound evolved more than once among small cetaceans partly in that context. It remains a hypothesis rather than a settled fact. Other adaptations are those of a small warm-blooded animal in cold water: a compact, streamlined body with reduced projections, an insulating blubber layer, and the breath-hold physiology shared across cetaceans. Dive depths and durations differ by species and are best taken from species-specific sources.
              </p>
            </>
          ),
        },
        {
          heading: "Lifespan & Life Stages",
          body: (
            <>
              <p>
                <strong>In the wild.</strong> Harbour porpoises are generally described as short-lived by cetacean standards, with ages from stranded and bycaught animals commonly reported in the range of about ten to twenty years and older individuals recorded less often. Many animals do not reach those ages. A single calf is the norm; gestation is usually reported at roughly ten to eleven months, calving tends to be seasonal, and nursing continues for months before independence. Sexual maturity in harbour porpoises is typically reported at a few years of age, and females in some populations may calve in most years — a fast pace of reproduction relative to larger whales. All of these figures vary by species, sex, region and study, and are estimates rather than fixed values.
              </p>
              <p>
                <strong>Under human care.</strong> Very few porpoises live under human care anywhere in the world, and those that do are concentrated in a small number of research and rehabilitation facilities. Because the sample is so small, longevity under human care cannot be compared meaningfully with wild figures, and it would be misleading to present one as evidence about the other. The two sets of numbers are kept separate here for that reason. Where a photograph on this page shows an animal at such a facility, that context is stated in the caption.
              </p>
            </>
          ),
        },
        {
          heading: "Conservation Context",
          body: (
            <>
              <p>
                Conservation standing differs enormously within this one family, so a single label for &ldquo;the porpoise&rdquo; would be meaningless. At one end, the harbour porpoise remains widespread across large parts of the Northern Hemisphere, though several of its regional populations — the Baltic Proper and Black Sea among the most discussed — are assessed separately and far more severely than the species as a whole. At the other end sits the vaquita, consistently described in recent years as among the most endangered marine mammals on Earth, with survey numbers that have fallen very low. Populations of finless porpoises associated with the Yangtze have also been the subject of serious concern.
              </p>
              <p>
                Red List categories, population estimates and recovery plans are revised as new surveys and assessments are published, so nothing on this page should be read as a permanent status. For the current assessment of any porpoise species or subpopulation, consult the <a href="https://www.iucnredlist.org/" rel="noopener noreferrer" target="_blank">IUCN Red List</a>, together with the responsible national agency — NOAA Fisheries in the United States, for example, or the equivalent authority elsewhere. Deliberate figures have been avoided here in favour of that routing, because a number quoted from memory ages badly and a wrong number is worse than none.
              </p>
            </>
          ),
        },
        {
          heading: "What the Name Covers",
          body: (
            <>
              <p>
                &ldquo;Porpoise&rdquo; is a family-level common name, not a species. Used precisely it means a member of the Phocoenidae; used loosely, especially in parts of North America, it has long been applied to small dolphins as well, so a boat trip described as a &ldquo;porpoise watch&rdquo; may well involve bottlenose or common dolphins. The verb &ldquo;to porpoise&rdquo; adds more confusion still: it describes the fast, low, repeated leaping of an animal moving at speed through the surface, and it is applied to penguins, seals and dolphins as readily as to porpoises themselves.
              </p>
              <p>
                Regional names reflect long familiarity. English coastal usage has included &ldquo;puffing pig&rdquo; and &ldquo;sea pig&rdquo; for the harbour porpoise, and several European languages use a pig comparison as well, echoing the short puffing breath heard when an animal surfaces close by. Individual species carry their own names — vaquita, meaning &ldquo;little cow&rdquo;, for <em>Phocoena sinus</em>, and finless porpoise for the beakless, finless Asian species whose appearance breaks the usual family template. When a source says simply &ldquo;porpoise&rdquo;, it is worth checking which animal, and which family, is actually meant.
              </p>
            </>
          ),
        },
      ]}
      similarAnimals={
        <p>
          Porpoises sit within the toothed whales alongside the dolphins (Delphinidae), the beaked whales, the sperm whales and the river dolphins. Their closest confusion is with small dolphins, and the FaunaHub dolphin profile covers that family in its own right. Seals and sea lions, though also marine mammals, belong to an entirely different lineage and are not close relatives.
        </p>
      }
      faqs={[
        {
          question: "What is the difference between a porpoise and a dolphin?",
          answer:
            "Porpoises and dolphins are separate families of toothed whales. Porpoises (Phocoenidae) usually have a blunt, beakless head, spade-shaped teeth and a small triangular dorsal fin, and most are smaller than typical dolphins. Dolphins (Delphinidae) more often show a defined beak, conical teeth and a curved, sickle-shaped fin. Behaviour differs too: porpoises tend to surface briefly and rarely bow-ride, while many dolphins are far more demonstrative at the surface.",
        },
        {
          question: "How many species of porpoise are there?",
          answer:
            "Authorities usually recognise somewhere between six and eight porpoise species, and the exact total shifts as populations and subspecies are reassessed. The best known are the harbour porpoise (Phocoena phocoena) of cool Northern Hemisphere coasts, Dall's porpoise (Phocoenoides dalli) of the North Pacific, and the vaquita (Phocoena sinus) of the northern Gulf of California. Others include the finless porpoises of Asian coasts and rivers, and porpoises of southern South America and cold southern waters.",
        },
        {
          question: "What does the vaquita tell us about the porpoise family?",
          answer:
            "The vaquita occurs only in a small part of the northern Gulf of California in Mexico, generally described as the smallest range of any marine cetacean. Its decline has been driven overwhelmingly by entanglement in gillnets, including nets set illegally for the totoaba, a fish whose swim bladder is trafficked. Survey numbers have fallen very low and change with each survey, so current figures should be taken from the IUCN Red List and official Mexican survey reports rather than older articles.",
        },
        {
          question: "Why are porpoises harder to spot than dolphins?",
          answer:
            "Porpoises are small, dark-backed and undemonstrative at the surface. They typically roll up quickly, showing little more than the back and a small triangular fin, and they seldom leap or ride bow waves the way many dolphins do. A harbour porpoise will often move away from a boat rather than towards it. Dall's porpoise is a partial exception, being fast and willing to approach vessels while throwing up a distinctive spray.",
        },
        {
          question: "How do porpoises find food in murky coastal water?",
          answer:
            "They echolocate with very high-frequency, narrow-band clicks — in the harbour porpoise typically reported centred around 130 kHz, far above human hearing. Such sound fades quickly in water, so it works at short range, which suits hunting small fish at close quarters where vision is of limited use. Researchers exploit the same clicks by leaving underwater recorders in place for weeks to detect animals acoustically where visual surveys would miss them.",
        },
      ]}
      quickFacts={[
        { label: "Group", value: "Porpoises — family Phocoenidae, a family of toothed whales" },
        { label: "Species covered", value: "Typically six to eight recognised species, depending on the authority" },
        { label: "Reference species", value: "Harbour porpoise (Phocoena phocoena)" },
        { label: "Typical size", value: "Small for cetaceans; harbour porpoises are usually reported at about 1.4 to 1.9 m" },
        { label: "How to tell from a dolphin", value: "Blunt beakless head, spade-shaped teeth, usually a small triangular fin, brief undemonstrative surfacing" },
        { label: "Diet", value: "Mainly small schooling fish, with squid and other prey varying by species and region" },
        { label: "Habitat", value: "Mostly cool coastal seas, shelf waters, estuaries and, for some species, rivers" },
        { label: "Conservation", value: "Varies sharply by species and population — the vaquita is among the most endangered; verify current status with the IUCN Red List" },
      ]}
      relatedLinks={[
        {
          label: "Dolphin Profile",
          href: "/animals/dolphin",
          description: "The other main family of small toothed whales — and the group porpoises are most often confused with",
        },
        {
          label: "Marine Animals",
          href: "/animal-encyclopedia/marine-animals",
          description: "Browse other ocean species on FaunaHub",
        },
        {
          label: "Vaquita",
          href: "/endangered-animals/species/vaquita",
          description: "The Gulf of California porpoise, among the most endangered marine mammals.",
        },
        {
          label: "Yangtze Finless Porpoise",
          href: "/endangered-animals/species/yangtze-finless-porpoise",
          description: "The only porpoise adapted to fresh water, in China's Yangtze river system.",
        },
        {
          label: "Endangered Animals",
          href: "/endangered-animals",
          description: "Context for species such as the vaquita",
        },
        {
          label: "Senses & Adaptations",
          href: "/animal-senses-and-adaptations",
          description: "How echolocation and other senses work across the animal world",
        },
        {
          label: "Animal Lifespans",
          href: "/animal-lifespans",
          description: "Why wild and under-human-care figures are reported separately",
        },
        {
          label: "Animal Taxonomy",
          href: "/animal-taxonomy",
          description: "Where families such as Phocoenidae sit in classification",
        },
        {
          label: "Wildlife Hub",
          href: "/wildlife",
          description: "Ecology and conservation guides",
        },
      ]}
    />
  );
}
