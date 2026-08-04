import type { Metadata } from "next";
import AnimalProfileLayout from "@/components/AnimalProfileLayout";
import { ANIMAL_SOURCES } from "@/lib/educational/animal-sources";
import { getAnimalGalleryImages, getAnimalImage, getAnimalOgImage } from "@/lib/images/animal-images";
import { buildArticleMetadata } from "@/lib/metadata";

const PATH = "/animals/brown-bear";
const TITLE = "Brown Bear: The One Species Behind Grizzly and Kodiak";
const DESC =
  "The brown bear (Ursus arctos) is a single species whose regional populations include the grizzly and Kodiak bears. How to recognise it, where it lives, and what it eats.";

export const metadata: Metadata = buildArticleMetadata({
  title: TITLE,
  description: DESC,
  path: PATH,
  publishedTime: "2026-08-04",
  modifiedTime: "2026-08-04",
  ogImage: getAnimalOgImage("brown-bear"),
});

export default function BrownBearPage() {
  return (
    <AnimalProfileLayout
      commonName="Brown Bear"
      scientificName="Ursus arctos"
      pageTitle={TITLE}
      description={DESC}
      path={PATH}
      parentCategory="Mammals"
      parentCategoryHref="/animal-encyclopedia/mammals"
      tags={["Mammals", "Bears", "Northern hemisphere"]}
      image={getAnimalImage("brown-bear") ?? undefined}
      galleryImages={getAnimalGalleryImages("brown-bear")}
      sources={ANIMAL_SOURCES["brown-bear"]}
      publishedDate="2026-08-04"
      modifiedDate="2026-08-04"
      overview={
        <>
          <p>
            The brown bear, <em>Ursus arctos</em>, is a single species of the bear family (Ursidae) that occurs across the northern parts of Eurasia and North America. It is a heavily built, omnivorous mammal with a broad head, comparatively short and rounded ears, a short tail, and forelimbs powerful enough to dig out roots, rodents and denning sites. Among living bears it has one of the widest natural distributions, and that breadth is exactly why it carries so many different local names.
          </p>
          <p>
            The most useful thing to understand about this animal is that &quot;grizzly bear&quot; and &quot;Kodiak bear&quot; are not other species. Grizzly is a regional common name applied to certain inland brown bear populations of northern North America, and Kodiak refers to the coastal brown bears of the Kodiak Archipelago in Alaska. Both are <em>Ursus arctos</em>. Equally, not every bear is a brown bear: the polar bear, the American black bear, the Asian black bear, the sun bear, the spectacled bear and the giant panda are separate species with their own profiles.
          </p>
          <p>
            Colour is a poor guide despite the name. Brown bear coats range from pale blonde and cream through cinnamon and rich brown to almost black, and many individuals carry pale-tipped guard hairs that give a frosted or &quot;grizzled&quot; look — the origin of the grizzly name. The more dependable structural cue is the mass of muscle over the shoulders, a hump that powers the forelimbs for digging, paired with long, relatively straight front claws. For an overview of bears as a family rather than this one species, see the broader bear page.
          </p>
        </>
      }
      habitat={
        <p>
          Brown bears are habitat generalists, which is a large part of why their range spans continents. They are found in temperate and boreal forest, alpine meadow and subalpine shrubland, open tundra, river valleys and, in some regions, dry steppe and semi-arid mountain country. What links these settings is usually a seasonal abundance of food and enough cover for resting and denning rather than a single vegetation type. Local density tends to track food productivity: coastal areas with predictable salmon runs typically support bears at higher densities than food-poor interior ranges, though the figures vary considerably by region, year and how a study defines the area sampled.
        </p>
      }
      diet={
        <p>
          The brown bear is an omnivore with a strongly seasonal diet, and in most populations plant material makes up the bulk of what it actually eats. Grasses, sedges and other green growth are common in spring; roots, tubers and bulbs are excavated with the claws; and berries, nuts and other fruit become important in late summer and autumn. Animal food includes ants and other insects and their larvae, ground-dwelling rodents dug from burrows, the calves of deer and other ungulates, and carrion. Where salmon or other spawning fish are available, coastal and riverine populations may take large quantities for part of the year. The balance between these categories differs so much by region, season and individual that any single &quot;typical&quot; diet description should be read as an average rather than a rule.
        </p>
      }
      behavior={
        <>
          <p>
            Brown bears are generally solitary outside the breeding season and the period when a female is accompanied by cubs. They are not strictly territorial in the sense of defending fixed boundaries; instead individuals use large, overlapping home ranges whose size varies with sex, food availability and terrain, with males typically ranging more widely than females. Where a concentrated food source appears — a salmon stream, a berry slope, a carcass — bears that would otherwise avoid each other may gather in numbers, spacing themselves out through a mix of age, size and familiarity rather than through formal group structure.
          </p>
          <p>
            Activity is often crepuscular, concentrated around dawn and dusk, but bears shift toward more nocturnal or more diurnal patterns depending on season, food and how much human activity they encounter. In late summer and autumn many populations enter a phase of intensive feeding, sometimes called hyperphagia, that builds the fat reserves needed for winter. Denning follows, typically in an excavated chamber, a natural cavity or a sheltered site; the timing and length of denning vary with latitude, weather, sex and reproductive condition, and bears in mild, food-rich regions may den only briefly or, in some cases, hardly at all.
          </p>
          <p>
            Winter denning is often described as hibernation, though it differs from the deep torpor of small hibernators: metabolism and heart rate fall substantially while body temperature drops only moderately, and a denned bear can rouse. Females give birth during this period. Brown bears show delayed implantation, in which a fertilised egg pauses in development before implanting, so mating in spring or early summer is followed by birth months later in the den. Litters are usually small — commonly about one to three cubs, occasionally more — and the cubs are tiny and helpless at birth.
          </p>
        </>
      }
      humanInteraction={
        <>
          <p>
            Brown bears have shared landscapes with people for as long as there have been people in the northern hemisphere, and they appear widely in folklore, heraldry, place names and regional emblems across Europe, Asia and North America. In modern terms the relationship is mostly a management one. Bears are drawn to concentrated, predictable food, which means conflict tends to cluster around livestock, orchards, beehives, rubbish and other human-associated attractants rather than being distributed evenly across their range. Wildlife agencies in bear country therefore focus heavily on attractant management, land-use planning and monitoring, and in several regions on compensation schemes for livestock losses.
          </p>
          <p>
            Habitat loss and fragmentation, road and rail networks that divide populations, and the isolation of small remnant groups are the pressures most often raised in the scientific literature. Bear viewing and photography have also become locally significant, particularly at salmon rivers, which brings its own management questions about disturbance and habituation. This page is natural history rather than guidance: for anything about behaving in bear country, reporting a sighting, or the rules that apply where you live, consult the relevant national park service, wildlife agency or regional authority, whose advice is written for local conditions and is kept current.
          </p>
        </>
      }
      faqs={[
        {
          question: "Is a grizzly bear the same as a brown bear?",
          answer:
            "Yes. Grizzly is a regional common name, not a separate species. Grizzly bears are brown bears (Ursus arctos) belonging to inland populations of northern North America, named for the grizzled, pale-tipped guard hairs many of them carry. Coastal Alaskan brown bears, including the Kodiak population, are the same species too. Reading these as one widespread species with regionally distinct populations and subspecies is the clearest way to make sense of the naming.",
        },
        {
          question: "How do you tell a brown bear from an American black bear?",
          answer:
            "Colour is unreliable, because brown bears range from blonde through cinnamon to nearly black, and American black bears vary as well. Field guides point instead to structure. Brown bears typically show a pronounced muscular shoulder hump, a dished or concave facial profile, comparatively short rounded ears, and long, relatively straight front claws suited to digging. American black bears usually lack the shoulder hump and have a straighter facial profile with shorter, more curved claws.",
        },
        {
          question: "Do brown bears truly hibernate?",
          answer:
            "They enter a winter dormancy that differs from the deep hibernation of small mammals such as ground squirrels. A denned bear lowers its heart rate and metabolism substantially while body temperature falls only moderately, and it can rouse and move if disturbed. Females give birth in the den during this period. Whether specialists call it hibernation or winter dormancy depends on the definition used, and denning length varies by region, sex, season and food supply.",
        },
        {
          question: "What do brown bears eat?",
          answer:
            "They are omnivores with a strongly seasonal diet, and much of what they eat is plant material: grasses and sedges in spring, roots and tubers dug out with the forelimbs, then berries and nuts later in the year. They also take insects and their larvae, burrowing rodents, the calves of deer and other ungulates, and carrion. Where spawning salmon are available, coastal populations may rely heavily on fish seasonally. Proportions vary greatly by region.",
        },
        {
          question: "Are brown bears endangered?",
          answer:
            "The species as a whole is widespread across northern Eurasia and North America, and global assessments reflect that broad range rather than uniform security everywhere. A global listing can conceal regional reality: several European and Asian populations are small, isolated and of real conservation concern, while others are stable or recovering. Conservation status is reassessed over time and is never permanent, so check the current entry for Ursus arctos on the IUCN Red List.",
        },
      ]}
      quickFacts={[
        { label: "Scientific name", value: "Ursus arctos, family Ursidae" },
        { label: "Other names", value: "Grizzly, Kodiak and Eurasian brown bear are regional names for populations of this one species" },
        { label: "Coat colour", value: "Ranges from blonde and cinnamon through brown to near-black; often pale-tipped, giving a grizzled look" },
        { label: "Key structural cue", value: "Muscular shoulder hump powering the forelimbs, plus long, relatively straight digging claws" },
        { label: "Typical adult weight", value: "Highly variable; often roughly 100–350 kg, with large coastal males heavier still and females typically smaller than males" },
        { label: "Diet", value: "Omnivorous and seasonal: vegetation, roots, berries, insects, rodents, ungulate calves, carrion, and salmon where available" },
        { label: "Range", value: "Northern Eurasia and northern and western North America; now fragmented across much of the historical range" },
        { label: "Typical lifespan", value: "Often about two to three decades in the wild; commonly longer under human care" },
      ]}
      relatedLinks={[
        { label: "Bear (group profile)", href: "/animals/bear", description: "Ursidae as a family, and how the living bear species differ" },
        { label: "American Black Bear", href: "/animals/american-black-bear", description: "The North American species most often confused with the brown bear" },
        { label: "Polar Bear", href: "/animals/polar-bear", description: "A close relative of the brown bear adapted to sea ice" },
        { label: "Asian Black Bear", href: "/animals/asian-black-bear", description: "Another northern-hemisphere bear with an overlapping range" },
        { label: "Mammals Encyclopedia", href: "/animal-encyclopedia/mammals", description: "Browse mammal profiles across FaunaHub" },
        { label: "Senses & Adaptations", href: "/animal-senses-and-adaptations", description: "How smell, hearing and other senses work across animals" },
        { label: "Animal Lifespans", href: "/animal-lifespans", description: "Why wild and captive lifespans are reported so differently" },
      ]}
      extraSections={[
        {
          heading: "Distribution",
          body: (
            <>
              <p>
                The brown bear occupies a broad northern band across Eurasia and North America. In Eurasia the largest continuous range lies across Russia and northern Asia, with additional populations in Scandinavia, the Carpathians, the Dinaric Alps and the Balkans, parts of the Caucasus and Anatolia, and mountain areas of central and southern Asia. In North America the species is concentrated in Alaska and western Canada, with smaller populations in the northern Rocky Mountains and the Greater Yellowstone region of the contiguous United States.
              </p>
              <p>
                That map is much reduced from the historical one. Brown bears formerly ranged across most of Europe, into North Africa, and far more widely through western North America and into Mexico. Hunting, persecution linked to livestock, and the conversion and fragmentation of habitat removed them from large parts of that range, leaving several present-day populations small and geographically isolated from one another. Where bears have returned to former ground it has generally followed legal protection and changes in land use rather than deliberate large-scale reintroduction, though the details differ by country and any specific range or population figure should be checked against a current national or IUCN assessment.
              </p>
            </>
          ),
        },
        {
          heading: "Senses & Adaptations",
          body: (
            <>
              <p>
                Smell dominates. The brown bear&apos;s olfactory ability is widely described as among the most acute of any land mammal, supported by an elongated nasal chamber and a large area of scent-sensing tissue, and it underpins much of the animal&apos;s daily life: locating carrion, ripening berry patches, buried food caches, other bears and approaching people, often long before anything is visible. Hearing is good across a broad range. Eyesight is often dismissed as poor in popular accounts, but the evidence suggests vision is reasonably functional, likely including some colour discrimination; it is simply less important than the nose.
              </p>
              <p>
                Structurally the animal is built around digging and bulk processing of food. The shoulder hump is skeletal muscle anchoring the forelimbs, and the long, comparatively straight, non-retractile front claws work as excavation tools for roots, rodent burrows and den chambers — the trade-off being that adult brown bears are poor climbers compared with black bears, whose shorter, curved claws suit tree trunks. The dentition is that of an omnivore, with broad crushing molars for plant material alongside canines. Seasonal physiology is an adaptation in its own right: heavy autumn feeding, fat deposition, and a winter dormancy in which the animal neither eats nor drinks for an extended period.
              </p>
            </>
          ),
        },
        {
          heading: "Lifespan & Life Stages",
          body: (
            <>
              <p>
                <strong>In the wild.</strong> Cubs are born in the winter den, blind, nearly hairless and very small relative to the mother. They emerge in spring and typically remain with her for about two to three years, learning where and when food appears across her range, before dispersing. Sexual maturity is generally reached somewhere in the middle of the first decade of life, and reproduction is slow: litters are small and the interval between litters is long. Where populations have been followed over time, individuals reaching roughly two to three decades are not unusual, though average life expectancy is far lower because mortality is concentrated in the early years. Figures vary by population, sex and study.
              </p>
              <p>
                <strong>Under human care.</strong> Bears in zoos and sanctuaries are frequently reported living longer than wild individuals, sometimes into their thirties, because food is constant, the risks of dispersal and conflict are absent, and veterinary monitoring is available. These are two different measurements and should not be blended: a captive maximum is not a wild average, and quoting one in place of the other is one of the most common errors in published animal lifespan claims.
              </p>
            </>
          ),
        },
        {
          heading: "Conservation Context",
          body: (
            <>
              <p>
                Conservation status is a snapshot, not a permanent property of a species, and for the brown bear the global picture and the regional picture say different things. Assessed across its whole range, the species is widespread and numerous enough that the global listing has been comparatively unalarming. Zoom in, however, and several European and Asian populations are small, fragmented and dependent on active protection, while some North American populations occupy a fraction of their former ground. A global label can therefore be read as reassurance it was never meant to give.
              </p>
              <p>
                The pressures most consistently identified are habitat fragmentation, infrastructure that isolates populations, conflict associated with livestock and human food sources, and illegal killing. Because assessments are revised as new survey data arrive, the current status for <em>Ursus arctos</em> — and, where they are separately assessed, for particular regional populations — should be read directly from the IUCN Red List and from the relevant national wildlife authority rather than taken from any static figure on a web page, including this one.
              </p>
            </>
          ),
        },
        {
          heading: "What the Name Covers",
          body: (
            <>
              <p>
                &quot;Brown bear&quot; names one species, <em>Ursus arctos</em>, and not the bear family as a whole. Several other living bears — the polar bear, the American black bear, the Asian black bear, the sun bear, the sloth bear, the spectacled bear and the giant panda — are separate species, so a brown-coloured bear is not automatically a brown bear, and a brown bear is not always brown. Coat colour spans blonde, cream, cinnamon, chestnut, dark brown and nearly black, and can change with season, age and moult.
              </p>
              <p>
                Within the species, regional names describe populations rather than distinct kinds of animal. Grizzly is used for certain inland brown bears of northern North America, from the grizzled effect of pale-tipped guard hairs. Kodiak refers to the coastal brown bears of Alaska&apos;s Kodiak Archipelago, which are noted for large body size, generally attributed to rich marine-derived food and long isolation. Eurasian brown bear and Siberian brown bear are used similarly for populations on the other continent. A number of subspecies have been described, but subspecies boundaries in <em>Ursus arctos</em> have been revised repeatedly as genetic evidence has accumulated, and different authorities recognise different sets. Treat any subspecies list you encounter as one authority&apos;s current arrangement rather than a settled fact, and treat the regional names above as geography and tradition rather than taxonomy.
              </p>
            </>
          ),
        },
      ]}
    />
  );
}
