import type { Metadata } from "next";
import AnimalProfileLayout from "@/components/AnimalProfileLayout";
import { ANIMAL_SOURCES } from "@/lib/educational/animal-sources";
import { getAnimalGalleryImages, getAnimalImage, getAnimalOgImage } from "@/lib/images/animal-images";
import { buildArticleMetadata } from "@/lib/metadata";

const PATH = "/animals/puffin";
const TITLE = "Puffin: The Colourful-Billed Auks of the Northern Seas";
const DESC =
  "Meet the three puffins (genus Fratercula) — northern seabirds of the auk family that fly in air and swim by flapping their wings underwater, and that shed their bright bill plates after each breeding season.";

export const metadata: Metadata = buildArticleMetadata({
  title: TITLE,
  description: DESC,
  path: PATH,
  publishedTime: "2026-08-04",
  modifiedTime: "2026-08-04",
  ogImage: getAnimalOgImage("puffin"),
});

export default function PuffinPage() {
  return (
    <AnimalProfileLayout
      commonName="Puffin"
      scientificName="genus Fratercula"
      pageTitle={TITLE}
      description={DESC}
      path={PATH}
      parentCategory="Birds"
      parentCategoryHref="/animal-encyclopedia/birds"
      tags={["Seabirds", "Auks", "North Atlantic & Pacific"]}
      image={getAnimalImage("puffin") ?? undefined}
      galleryImages={getAnimalGalleryImages("puffin")}
      sources={ANIMAL_SOURCES["puffin"]}
      publishedDate="2026-08-04"
      modifiedDate="2026-08-04"
      overview={
        <>
          <p>
            &quot;Puffin&quot; is a group name rather than the name of a single species. It covers three closely related seabirds in the genus <em>Fratercula</em>: the Atlantic puffin (<em>Fratercula arctica</em>), which is the bird most people picture and the one used as the representative species on this page, plus the horned puffin (<em>Fratercula corniculata</em>) and the tufted puffin (<em>Fratercula cirrhata</em>), both of the North Pacific. All three are stocky, short-winged, black-and-white birds with large, deep bills that become vividly coloured in the breeding season.
          </p>
          <p>
            Puffins are auks, members of the family Alcidae, alongside guillemots, murres, razorbills and auklets. They are <strong>not penguins</strong>, and the two groups are not close relatives. The resemblance is a well-known case of convergent evolution: both are compact black-and-white seabirds that propel themselves underwater with their wings. The differences are decisive. Puffins fly strongly in the air and occur only in the northern hemisphere, while every living penguin is flightless and belongs to the southern hemisphere. No wild population of the two groups shares a range.
          </p>
          <p>
            Two features define the bird for most observers: the bill and the diving. The bright orange, yellow and blue-grey bill of a breeding puffin is not a permanent structure but a set of outer plates grown for the season and shed afterwards, and the puffin&apos;s underwater swimming is powered by the wings rather than the feet. Figures given below are typical values reported for these birds; measurements and timings vary by species, sex, colony, region and year, and specific numbers are best checked against authoritative ornithological sources such as BirdLife International, the IUCN Red List, the Cornell Lab of Ornithology, the RSPB or national seabird monitoring programmes.
          </p>
        </>
      }
      habitat={
        <>
          <p>
            Puffins live in two distinct worlds across the year. For the breeding months they come ashore on cool-water coasts and islands of the northern hemisphere, favouring places that are hard for ground predators to reach: offshore islands, sea stacks, steep grassy cliff tops and boulder slopes. They nest colonially, typically in a burrow dug into turf or soft soil with the bill and feet, or in a natural crevice among rocks and scree. Colonies range from a handful of pairs to very large aggregations, and traditional sites may be used for long periods.
          </p>
          <p>
            Outside the breeding season the same birds are essentially oceanic. They leave the colonies, usually by late summer, and spend the non-breeding months on the open sea, often far from land and widely scattered rather than in dense flocks. Tracking work on Atlantic puffins has shown individuals ranging over broad areas of ocean between seasons. Because this pelagic phase is so hard to observe, much of what is known about puffins comes disproportionately from the short summer window when they are visible ashore.
          </p>
        </>
      }
      diet={
        <>
          <p>
            Puffins feed mainly on small shoaling fish taken underwater, with the exact prey depending on species, region and season. In the North Atlantic, sandeels (sand lance), capelin, herring, sprat and other small forage fish are commonly reported, while zooplankton such as crustaceans can make up a larger share of the diet outside the breeding season and in some Pacific populations. Diet composition can shift markedly between years when prey availability changes, and this variation is one of the reasons puffin breeding success is closely watched by seabird monitoring programmes.
          </p>
          <p>
            The bill is a carrying tool as well as a display structure. A foraging adult can hold several small fish crosswise at once, and bill-loads of a dozen or more have been reported, though most loads are smaller. Backward-pointing spines on the roof of the mouth, together with a muscular tongue, are thought to hold captured fish against the palate while the bird keeps hunting rather than surfacing after every catch. Adults away from the colony feed themselves at sea; chicks in the burrow are provisioned with whole fish delivered by both parents.
          </p>
        </>
      }
      behavior={
        <>
          <p>
            Puffins are wing-propelled divers. Underwater they beat their partly folded wings, effectively flying through the water, and use the webbed feet mainly for steering. Most foraging dives are brief, often well under a minute and within the upper few tens of metres, though longer and deeper dives have been recorded. This underwater flight is the key to understanding the rest of the bird&apos;s design: the wing has to work in two fluids at once. The compromise gives puffins small wings relative to their body, very fast whirring wingbeats in air, high landing speeds and a famously ungainly arrival at the cliff top.
          </p>
          <p>
            On land they are social and highly seasonal. Pairs typically return to the same colony, often to the same burrow, and pair bonds may persist across seasons. Courtship includes bill-knocking, in which two birds rattle their bills together, and pairs may perform display flights over the colony. Nesting is normally underground or in a crevice, and a pair usually raises a single chick, which both adults incubate and feed. The young bird leaves for the sea alone, generally at night, and receives no further parental care. Away from the colony, puffins are far less gregarious and are often seen singly or in small scattered groups.
          </p>
        </>
      }
      humanInteraction={
        <>
          <p>
            Puffins have a long history of human use in the North Atlantic. Birds and eggs were harvested for food, oil and feathers on many island communities, and a regulated traditional harvest continues in parts of Iceland and the Faroe Islands. Historic overharvesting, together with introduced ground predators such as rats, cats and mink, removed puffins from a number of islands where they had formerly bred. Restoration efforts have since returned birds to some of those sites, including projects in the Gulf of Maine that combined predator control with translocated chicks and decoys placed to attract prospecting adults.
          </p>
          <p>
            Today the more common interactions are indirect. Puffins are a major draw for wildlife tourism, and colonies with viewing infrastructure are managed to keep visitors away from burrows, which can collapse under foot. Fledglings leaving island colonies are sometimes disoriented by artificial lights and end up in coastal towns; in the Westman Islands of Iceland, residents including children have long gathered these grounded young birds and released them at the shore. Broader pressures include changes in the abundance and distribution of forage fish, fisheries interactions such as gillnet bycatch, oil pollution and disturbance at nesting islands.
          </p>
        </>
      }
      extraSections={[
        {
          heading: "Distribution",
          body: (
            <>
              <p>
                The genus is confined to the northern hemisphere, with a clear split between oceans. The Atlantic puffin breeds around the North Atlantic and adjacent Arctic waters, with major concentrations reported in Iceland and Norway and further colonies in the Faroe Islands, Greenland, Britain and Ireland, and Atlantic Canada, reaching its southern North American limit in the Gulf of Maine. Outside the breeding season it disperses widely across the open North Atlantic. The horned puffin and the tufted puffin replace it in the North Pacific and Bering Sea, breeding from Alaska and the Aleutian chain across to the Russian Far East, with tufted puffins also breeding down the North American Pacific coast.
              </p>
              <p>
                That distribution has changed. Colonies at the warm southern edges of both ranges have generally fared worst: puffins were extirpated from parts of the Gulf of Maine before restoration work began, and long-term declines have been reported for tufted puffins along the southern part of the North American Pacific coast. Some large northern colonies have also gone through extended runs of poor breeding, which monitoring programmes have linked to shortages of the small fish adults bring back to chicks. Because puffins are long-lived, adult numbers at a colony can stay high for years after breeding output has fallen, so range and trend statements should be read against current national and international monitoring rather than older figures.
              </p>
            </>
          ),
        },
        {
          heading: "Senses & Adaptations",
          body: (
            <>
              <p>
                A puffin&apos;s eyes have to work in bright air and in dim, refracting seawater, and the eye is adapted to accommodate across that change. The bill and eye region carry structures that are thought to function in signalling: fleshy rosettes at the gape, a coloured eye-ring and, in breeding condition, small horn-like or plumed ornaments that give the horned and tufted puffins their names. Bill fluorescence under ultraviolet light has been reported in puffins, and since many birds can see into the ultraviolet, the ornament may be more conspicuous to another puffin than it is to us; this line of work is relatively recent and still being explored.
              </p>
              <p>
                The rest of the body reflects a life split between air and water. Dense, tightly overlapping and heavily waterproofed plumage traps insulating air; salt glands above the eyes allow excess salt to be excreted, so the birds do not depend on fresh water; and the wings are short and stiff, sized as a compromise between aerial flight and underwater propulsion. The great auk, an extinct relative in the same family, shows the alternative outcome — a large flightless auk of the North Atlantic — which is exactly the route penguins took independently in the south. Puffins also use the bill and the strong clawed feet to excavate and maintain burrows.
              </p>
            </>
          ),
        },
        {
          heading: "Lifespan & Life Stages",
          body: (
            <>
              <p>
                <strong>In the wild.</strong> Puffins are long-lived for their size and slow to start breeding. Birds typically spend their first years entirely at sea before returning to a colony, and first breeding is often reported at around four to six years of age. Pairs generally lay a single egg per season; incubation lasts roughly six weeks, and the chick is usually fed in the burrow for a further six weeks or so before departing alone. Ringing recoveries indicate that many adults live well past two decades, with individual Atlantic puffins recorded at over thirty years. All of these figures vary with colony, region, food supply and year, and lifespan statistics from ringing are biased towards the small proportion of birds that are ever re-encountered.
              </p>
              <p>
                <strong>Under human care.</strong> Puffins are kept in a small number of public aquariums and zoos in cold-water seabird exhibits, and are not animals of private keeping. Data on longevity in these settings come from a limited number of institutional records rather than from large samples, so they should not be read as a general figure for the genus and should be kept separate from wild estimates. Where wild and captive figures are compared at all, the comparison is between very different regimes of predation, foraging effort and winter conditions.
              </p>
            </>
          ),
        },
        {
          heading: "Conservation Context",
          body: (
            <>
              <p>
                The three puffins are not in the same position, and no conservation category should be treated as permanent. Recent global assessments have placed the Atlantic puffin in a threatened category, driven largely by declines and poor breeding output in parts of its European range, while the horned and tufted puffins have generally been assessed less severely at the global scale even though particular regional populations are of concern. Categories are revised as new survey data arrive, and a national or regional listing can differ from the global one, so the current status of each species should be looked up directly on the IUCN Red List.
              </p>
              <p>
                The pressures discussed in the literature are mostly indirect. Changes in the abundance, size and timing of the small fish that adults bring to chicks are repeatedly implicated in breeding failures; introduced mammalian predators on nesting islands remain a serious local threat; and bycatch in nets, oil and other marine pollution, disturbance at colonies and severe winter weather events also feature. Practical responses have included eradicating introduced predators from islands, protecting colony sites, managing forage-fish fisheries and long-term colony monitoring. This page is descriptive; for current status, population estimates and trends, consult the IUCN Red List and national seabird monitoring programmes.
              </p>
            </>
          ),
        },
        {
          heading: "What the Name Covers",
          body: (
            <>
              <p>
                Used precisely, &quot;puffin&quot; means the three species of <em>Fratercula</em>. Used loosely in conversation and in photo captions it almost always means the Atlantic puffin, which is why images labelled simply &quot;puffin&quot; are usually of that species. The genus name <em>Fratercula</em> means &quot;little friar&quot;, generally taken as a reference to the black-and-white plumage. Confusingly, the name &quot;puffin&quot; is thought to have applied originally to the fatted nestling of the Manx shearwater — an unrelated seabird — before it transferred to <em>Fratercula</em>, which is why the shearwater genus is still called <em>Puffinus</em>.
              </p>
              <p>
                Regional and informal names multiply the confusion. Puffins are widely called sea parrots or clowns of the sea for their bill and face pattern, and local names such as lundi in Iceland or Tammie Norie in parts of Scotland are still in use. None of these names indicate any relationship to parrots. The rhinoceros auklet (<em>Cerorhinca monocerata</em>) is a close relative within the auks that some treatments place near the puffins, and it is occasionally referred to in puffin-like terms; and, most importantly, no member of this genus is a penguin, despite the persistent habit of calling them one.
              </p>
            </>
          ),
        },
      ]}
      faqs={[
        {
          question: "Are puffins a kind of penguin?",
          answer:
            "No. Puffins are auks, in the family Alcidae, and penguins belong to an entirely separate order, Sphenisciformes, whose living members are confined to the southern hemisphere. The two groups look alike because both are black-and-white seabirds that swim by flapping their wings underwater, an example of convergent evolution rather than close kinship. The clearest difference is flight: puffins fly strongly through the air, while every living penguin is flightless. Their ranges do not overlap in the wild either, although the Galapagos penguin reaches the equator at the northern edge of the penguin range.",
        },
        {
          question: "Do puffins lose their colourful bills?",
          answer:
            "Yes. The bright orange, yellow and blue-grey plates that cover the bill in the breeding season are outer sheaths, grown ahead of courtship and shed after breeding along with ornamental structures around the eye. A winter puffin therefore has a smaller, duller and narrower bill and a greyer face, which is why non-breeding birds seen far out at sea can look like a different species altogether to observers who only know the summer bird.",
        },
        {
          question: "How do puffins swim, and how deep do they dive?",
          answer:
            "Puffins are wing-propelled divers: they beat their partly folded wings underwater, effectively flying through the water, and steer with their webbed feet. Most foraging dives are short, often well under a minute and within the upper few tens of metres, though deeper and longer dives have been recorded. The same wings must also carry the bird through the air, so puffins fly with very rapid, whirring wingbeats and land somewhat clumsily.",
        },
        {
          question: "How many fish can a puffin carry at once?",
          answer:
            "A puffin can hold several small fish crosswise in its bill at once, and loads of a dozen or more have been reported, though most bill-loads are smaller. Backward-pointing spines on the roof of the mouth and a muscular tongue are thought to pin caught fish in place while the bird continues hunting. This lets a parent make fewer trips between distant feeding grounds and the burrow where the single chick waits.",
        },
        {
          question: "Where do puffins go when they are not at the colony?",
          answer:
            "Puffins are only visible ashore for part of the year. Colonies typically fill in spring and empty by late summer, after which the birds spend the non-breeding months out on the open sea, often widely dispersed and rarely within sight of land. Tracking studies have shown individuals ranging over large areas of ocean. This offshore, scattered winter life is one reason population trends are difficult to measure precisely.",
        },
      ]}
      quickFacts={[
        { label: "Group", value: "Seabirds; auks (family Alcidae) — not penguins" },
        { label: "Species covered", value: "Three: Atlantic (Fratercula arctica), horned (F. corniculata), tufted (F. cirrhata)" },
        { label: "Range", value: "Northern hemisphere only; North Atlantic, North Pacific and adjacent Arctic seas" },
        { label: "Body length", value: "Typically about 25-40 cm, varying by species and individual" },
        { label: "Weight", value: "Roughly 350-900 g; tufted puffins are typically the heaviest, and weight varies with season" },
        { label: "Diet", value: "Mainly small shoaling fish; zooplankton can be important seasonally and regionally" },
        { label: "Clutch", value: "Usually a single egg per pair per season, in a burrow or rock crevice" },
        { label: "Lifespan (wild)", value: "Often about two decades or more; some ringed birds recorded past thirty years" },
      ]}
      relatedLinks={[
        {
          label: "Penguin Profile",
          href: "/animals/penguin",
          description: "The southern, flightless birds puffins are often confused with",
        },
        {
          label: "Albatross Profile",
          href: "/animals/albatross",
          description: "A very different ocean-going seabird strategy",
        },
        {
          label: "Seagull Profile",
          href: "/animals/seagull",
          description: "A familiar coastal bird for comparison",
        },
        {
          label: "Birds Encyclopedia",
          href: "/animal-encyclopedia/birds",
          description: "Browse bird groups and profiles",
        },
        {
          label: "Senses & Adaptations",
          href: "/animal-senses-and-adaptations",
          description: "How animals sense and adapt to their environments",
        },
        {
          label: "Animal Lifespans",
          href: "/animal-lifespans",
          description: "How lifespan is measured, and why figures vary",
        },
        {
          label: "Endangered Animals",
          href: "/endangered-animals",
          description: "Conservation status and how it is assessed",
        },
      ]}
    />
  );
}
