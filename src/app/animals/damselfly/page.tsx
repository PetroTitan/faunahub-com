import type { Metadata } from "next";
import AnimalProfileLayout from "@/components/AnimalProfileLayout";
import { ANIMAL_SOURCES } from "@/lib/educational/animal-sources";
import {
  getAnimalGalleryImages,
  getAnimalImage,
  getAnimalOgImage,
} from "@/lib/images/animal-images";
import { buildArticleMetadata } from "@/lib/metadata";

const PATH = "/animals/damselfly";
const PUBLISHED = "2026-08-04";
const MODIFIED = "2026-08-04";

const TITLE = "Damselfly (Zygoptera): Identification, Nymphs & Life Cycle";
const DESC =
  "A group-level profile of damselflies, suborder Zygoptera: wings held closed at rest, stalked wing bases, widely separated eyes, and nymphs with three external caudal gills.";

export const metadata: Metadata = buildArticleMetadata({
  title: TITLE,
  description: DESC,
  path: PATH,
  publishedTime: PUBLISHED,
  modifiedTime: MODIFIED,
  ogImage: getAnimalOgImage("damselfly"),
});

export default function DamselflyPage() {
  return (
    <AnimalProfileLayout
      commonName="Damselfly"
      scientificName="suborder Zygoptera"
      pageTitle={TITLE}
      description={DESC}
      path={PATH}
      parentCategory="Insects & Invertebrates"
      parentCategoryHref="/animal-encyclopedia/insects"
      tags={["Insects", "Odonata", "Freshwater"]}
      image={getAnimalImage("damselfly") ?? undefined}
      galleryImages={getAnimalGalleryImages("damselfly")}
      sources={ANIMAL_SOURCES["damselfly"]}
      publishedDate={PUBLISHED}
      modifiedDate={MODIFIED}
      factsHeaderNote="“Damselfly” is a group name covering the whole suborder Zygoptera, not one species. The hero photograph shows a broad-winged demoiselle (family Calopterygidae); the gallery photograph shows a narrow-winged damselfly (family Coenagrionidae), which is the commoner shape. Figures on this page are broad ranges and vary by species, sex, region and season."
      overview={
        <>
          <p>
            Damselflies make up the suborder Zygoptera, one of the two large
            living divisions of the insect order Odonata. The name covers some
            thousands of described species worldwide, all of them predatory as
            adults and nearly all of them beginning life as aquatic nymphs in
            fresh water. The exceptions are real but few: some Hawaiian{" "}
            <em>Megalagrion</em> have abandoned the water body altogether and
            develop in damp terrestrial leaf litter. The suborder name is descriptive: <em>zygo-</em> refers to
            the yoked, matched pair of wings, because in a damselfly the
            forewing and hindwing are nearly identical in outline, and each one
            narrows to a slender stalk where it meets the thorax.
          </p>
          <p>
            The features that define the group are best seen on a perched
            insect. Most damselflies settle with the wings closed above or held
            alongside the abdomen rather than spread flat and outstretched, the
            abdomen itself is long and very slender, and the compound eyes sit
            far apart at the two ends of a broad head that is often described as
            hammer-shaped or transversely elongated. In flight, damselflies
            generally look weaker and more fluttering than the sustained,
            powerful flight associated with their larger relatives, and many
            species spend much of the day perched among waterside vegetation
            rather than patrolling open air.
          </p>
          <p>
            Note: this is a group-level overview of a very large and varied
            suborder, and almost every statement below has exceptions at the
            family or species level. Body sizes, colours, flight periods and
            nymph development times all differ between species and between
            regions, and published values differ between sources. Specific
            figures for a named species should be checked against authoritative
            references such as the Animal Diversity Web, the Xerces Society, or
            the assessment for that species on the IUCN Red List.
          </p>
        </>
      }
      habitat={
        <>
          <p>
            With rare exceptions, damselflies are freshwater insects for the
            whole of their long immature stage, so their distribution follows
            standing and running fresh water: ponds, lake margins, ditches, marshes, seepages, slow
            rivers and fast, well-oxygenated streams. Vegetated edges matter
            particularly, because emergent and submerged plants provide both the
            perches adults use and, in most species, the plant tissue the female
            lays her eggs into. Families differ in what they favour — the
            broad-winged demoiselles of the family Calopterygidae are typically
            associated with flowing water fringed with vegetation, while many
            narrow-winged damselflies in the family Coenagrionidae are found
            around still or slow water.
          </p>
          <p>
            Adults usually stay closer to their breeding water than strong-flying
            dragonflies do, though they may move into nearby meadows, hedgerows
            and woodland edges to feed or to shelter from wind. Some tropical
            damselflies break the pond-and-stream pattern altogether and develop
            in phytotelmata — small pockets of water held in tree holes,
            bromeliads and other plant structures — which lets them live away
            from open water in forest interiors. Because the nymphs depend on
            water quality and oxygen levels, damselfly communities are often used
            alongside other invertebrates as indicators of freshwater condition.
          </p>
        </>
      }
      diet={
        <>
          <p>
            Damselflies are predators at every active stage of life. Adults take
            small, generally soft-bodied flying and resting insects — midges,
            small flies, mayflies, aphids, small moths and similar prey. Many
            damselflies hunt by gleaning rather than by high-speed pursuit,
            flying slowly along vegetation and picking prey directly off leaves
            and stems, or making short sallies from a perch. Prey is held in the
            spiny basket formed by the legs and chewed with biting mouthparts.
            Some tropical helicopter damselflies are reported to specialise
            further, plucking spiders and trapped insects from orb webs.
          </p>
          <p>
            The aquatic nymph is an ambush predator on small pond and stream
            animals: water fleas, insect larvae, worms and similar invertebrates,
            with larger nymphs of some species taking correspondingly larger
            prey. Like dragonfly nymphs, damselfly nymphs capture food with an
            extensible hinged labium that shoots forward from beneath the head
            and grasps prey, a mechanism shared across the order rather than
            unique to this suborder. What the prey actually consists of varies
            with the water body, the season and the size of the nymph.
          </p>
        </>
      }
      behavior={
        <>
          <p>
            Adult damselflies are creatures of the perch. A typical day involves
            basking to warm up, short feeding flights among vegetation, and long
            periods sitting on a stem with the wings closed. Flight is fluttering
            and comparatively slow, well suited to manoeuvring among plant stems
            at low speed but not to the sustained aerial patrolling seen in
            larger odonates. Many species are strongly tied to a stretch of bank
            or a patch of emergent plants during the breeding season, and males
            of several groups defend such areas against rivals, though the
            intensity of territorial behaviour differs a great deal between
            families.
          </p>
          <p>
            Courtship can be elaborate in the broad-winged damselflies: males of
            some Calopterygidae perform display flights in front of a perched
            female, using the pigmented wing patches as a visual signal. In many
            narrow-winged species the visible behaviour is simpler, with males
            seizing a female and the pair forming the characteristic tandem
            position, the male gripping the female behind the head with claspers
            at the tip of his abdomen. Nymph behaviour is quieter still: most sit
            among plants or debris waiting for prey, and swim in short bursts by
            flexing the abdomen from side to side.
          </p>
        </>
      }
      humanInteraction={
        <>
          <p>
            Damselflies neither sting nor carry a venomous bite, and encounters
            with people are essentially limited to watching them at the water&apos;s
            edge. They are a familiar sight to walkers, anglers and pond
            naturalists in summer, and their dependence on clean, vegetated fresh
            water makes them a common subject of volunteer recording schemes and
            freshwater monitoring programmes. Photographers and recorders often
            work at the family level, since many narrow-winged species are
            separated only by close examination of the abdominal markings and the
            shape of the male appendages.
          </p>
          <p>
            The main human influence on damselflies is indirect and works through
            water: drainage of wetlands, canalisation and shading of streams,
            nutrient enrichment, pollution and the loss of marginal plants all
            change the conditions the nymphs depend on, while some species have
            been recorded shifting range as regional climates change. Damselfly
            nymphs are occasionally reared for a short period in school and
            research pond studies; any question about the care or welfare of an
            animal kept by people belongs with a qualified veterinarian and
            species-specific welfare resources rather than with a reference page.
          </p>
        </>
      }
      extraSections={[
        {
          heading: "Scientific Classification",
          body: (
            <>
              <p>
                Damselflies are placed in the order Odonata, within the winged
                insects (Insecta, Pterygota). Odonata is conventionally divided
                into the suborder Zygoptera, the damselflies, and the suborder
                Anisoptera, the dragonflies; a small relict group centred on the
                genus <em>Epiophlebia</em> has historically been treated as a
                third suborder, Anisozygoptera, and its placement has been
                revised repeatedly as new analyses appear. One consequence is
                worth flagging, because FaunaHub&apos;s own dragonfly profile
                follows it: under the Epiprocta treatment, <em>Epiophlebia</em>{" "}
                and the dragonflies are combined in a suborder Epiprocta and
                Anisoptera is demoted to an infraorder within it, which is why
                the dragonfly page calls Anisoptera an infraorder while this one
                calls it a suborder. Higher-level odonate
                classification is an active area, so the arrangement given here
                should be read as the conventional framework rather than a settled
                final answer.
              </p>
              <p>
                Within Zygoptera the two families most people meet are the
                Calopterygidae, the broad-winged damselflies or demoiselles, and
                the Coenagrionidae, the narrow-winged or pond damselflies, which
                is the largest family in the suborder and accounts for most
                sightings in many regions. Other widely recognised families
                include the Lestidae, the spreadwings, and the
                Platycnemididae. Family limits and the number of accepted
                families have changed with molecular work, and the count of
                described species continues to rise, so any total should be
                treated as provisional.
              </p>
            </>
          ),
        },
        {
          heading: "Identification",
          body: (
            <>
              <p>
                Five features, used together, identify a damselfly rather than
                any single one on its own:
              </p>
              <ul>
                <li>
                  <strong>Wings at rest.</strong> The wings are typically held
                  closed above the abdomen or angled back alongside it, not held
                  flat and outstretched to the sides.
                </li>
                <li>
                  <strong>Matched, stalked wings.</strong> The forewing and
                  hindwing are nearly identical in shape, and both narrow to a
                  slender stalk at the base where they join the thorax.
                </li>
                <li>
                  <strong>Widely separated eyes.</strong> The compound eyes sit
                  far apart at either end of a broad, hammer-shaped head, with a
                  clear span of head between them.
                </li>
                <li>
                  <strong>Slender abdomen.</strong> The abdomen is long, thin and
                  often nearly uniform in width, giving the insect a needle-like
                  outline.
                </li>
                <li>
                  <strong>Flight quality.</strong> Flight generally looks light
                  and fluttering, over short distances and low among vegetation.
                </li>
              </ul>
              <p>
                The wing-posture cue is strong but not absolute: spreadwings in
                the family Lestidae characteristically perch with the wings held
                partly open, which is why it is worth checking the head shape and
                the stalked wing bases as well. The two photographs on this page
                deliberately show different families — the hero image is a
                broad-winged demoiselle in the Calopterygidae, and the gallery
                image is a narrow-winged coenagrionid, the more typical body
                shape.
              </p>
            </>
          ),
        },
        {
          heading: "Appearance",
          body: (
            <>
              <p>
                Adult damselflies are small to medium insects with a compact
                thorax, four membranous net-veined wings and a conspicuously
                slim abdomen. Body length in many temperate species falls
                roughly in the range of about two to five centimetres, with
                demoiselles towards the larger end of that span; a handful of
                tropical damselflies, including the helicopter damselflies of the
                Neotropics, are considerably larger and among the longest-winged
                of all odonates. Sizes given in field guides vary with how they
                are measured and with the population sampled, so treat any single
                figure as approximate.
              </p>
              <p>
                Colour is produced in two ways that behave differently. Pigment
                colours — the blacks, reds, yellows and the dark or metallic
                bands on demoiselle wings — are relatively stable, while
                structural and pruinose colours, such as the powdery blue bloom
                that develops on the abdomen of some mature males, can change as
                an individual ages and with temperature. Freshly emerged adults
                are teneral: pale, soft and dull, and they may look nothing like
                the mature insect. Sexes often differ in colour, and in several
                coenagrionid genera females occur in more than one colour form,
                including forms that resemble the male, which is a common source
                of misidentification.
              </p>
            </>
          ),
        },
        {
          heading: "Distribution",
          body: (
            <>
              <p>
                Damselflies occur on every continent except Antarctica, wherever
                suitable fresh water persists long enough for the nymphs to
                develop. Species richness is highest in the wet tropics,
                particularly in tropical forest streams and in the small water
                bodies of the forest canopy and understorey, and falls away
                towards high latitudes and high altitudes, where the flight
                season is short and the number of species that can complete
                development is limited. Oceanic islands typically hold far fewer
                species than nearby mainlands, and some island faunas contain
                endemic species found nowhere else.
              </p>
              <p>
                Within a region, distribution is patchy in a way that follows
                water rather than land: a species may be locally common along one
                stream type and absent from an apparently similar catchment
                nearby. Ranges are not fixed, and recorders in several parts of
                the world have documented odonate species appearing further from
                the equator or higher in altitude than in earlier decades.
                Country and regional checklists are revised frequently, so the
                current distribution of a named species is best taken from an
                up-to-date national recording scheme or Red List assessment.
              </p>
            </>
          ),
        },
        {
          heading: "Adaptations",
          body: (
            <>
              <p>
                The most distinctive damselfly adaptation belongs to the nymph.
                At the tip of the abdomen it carries three external caudal
                lamellae — flattened, leaf-like or paddle-shaped gills that
                greatly increase the surface available for gas exchange in water.
                Dragonfly nymphs have no such structures, holding their gills
                internally at the rear of the digestive tract instead, so the
                three trailing paddles are the most useful field character for
                telling damselfly nymphs apart. They are not infallible, for two
                reasons the same paragraph should admit: in several species the
                lamellae can be shed if seized by a predator and regrown at later
                moults, so an individual may be missing them, and in some genera
                they are saccoid rather than leaf-like, while a few families —
                the Euphaeidae and Polythoridae among them — carry additional
                lateral abdominal gills as well. The lamellae also double as a
                small tail fin during the side-to-side swimming stroke.
              </p>
              <p>
                Adults show a different set of solutions. The stalked wing bases
                and independently worked wings allow slow, precise flight through
                dense vegetation, where speed matters less than control, and the
                spiny legs form a forward-facing basket that scoops prey from
                foliage. Reproduction involves an unusual arrangement shared with
                dragonflies: the male transfers sperm from the tip of his abdomen
                to secondary genitalia near its base before mating, and in many
                damselflies the male&apos;s genitalia can also displace sperm
                already stored by the female, one of the classic examples of
                sperm competition in insects. Females of most species have a
                well-developed, blade-like ovipositor for inserting eggs into
                plant tissue.
              </p>
            </>
          ),
        },
        {
          heading: "Life Cycle & Reproduction",
          body: (
            <>
              <p>
                Damselflies develop by incomplete metamorphosis: egg, aquatic
                nymph, and winged adult, with no pupal stage. Mating begins with
                the tandem position, the male gripping the female behind the head
                with abdominal claspers, and proceeds to the wheel position, in
                which the pair form the familiar heart or circle shape while the
                female brings the tip of her abdomen to the male&apos;s secondary
                genitalia. Pairs may remain in tandem afterwards, and males of
                many species guard the female while she lays, either still
                attached or hovering nearby.
              </p>
              <p>
                Most female damselflies lay endophytically, cutting into stems,
                floating leaves or submerged vegetation with the ovipositor and
                placing eggs inside the plant tissue rather than scattering them
                into open water; in some species the female crawls or is led
                beneath the surface to do so. The nymph that hatches passes
                through a series of moults, growing wing pads as it goes, and may
                spend anywhere from a few months to a year or more in the water
                depending on species, temperature and food. Emergence is the
                final transition: the full-grown nymph climbs a stem clear of the
                water, the skin splits, and the teneral adult withdraws, expands
                its wings and hardens over the following hours to days.
              </p>
            </>
          ),
        },
        {
          heading: "Lifespan",
          body: (
            <>
              <p>
                <strong>In the wild.</strong> The great majority of a
                damselfly&apos;s life is the underwater nymph stage, which
                commonly lasts from a few months to a year or more, and longer
                still in cold water or at high latitude where growth is slow.
                The winged adult stage is far shorter: a few weeks is typical for
                many species once the insect has matured, though a small number
                of damselflies, including some spreadwings, overwinter as adults
                and so live considerably longer in total. Mortality is heavy at
                every stage, and the average individual lives nowhere near the
                maximum recorded for its species.
              </p>
              <p>
                <strong>Under human care.</strong> Damselflies are not kept as
                companion animals, and the only sustained experience of holding
                them comes from research and educational rearing, where nymphs
                are raised in tanks to study development or emergence. Figures
                from such settings describe controlled conditions with a stable
                food supply and no predators, and they are not interchangeable
                with wild lifespans; the two should always be reported
                separately. Published values in both categories vary widely
                between species and studies, so they are best read as ranges
                rather than as a single expected age.
              </p>
            </>
          ),
        },
        {
          heading: "Conservation Context",
          body: (
            <>
              <p>
                No single conservation status applies to damselflies as a whole.
                Zygoptera contains many widespread and locally abundant species
                alongside narrowly restricted ones known from a single stream
                system or island, and assessed categories across the suborder
                span the full range. A status is also a snapshot rather than a
                permanent property: assessments are periodically revised as new
                survey data, taxonomic changes and habitat trends come in, so any
                category quoted here or elsewhere may already be out of date.
                The current assessment for a named species should be read
                directly from the IUCN Red List.
              </p>
              <p>
                Where damselflies are of conservation concern, the pressures are
                usually the freshwater pressures: drainage and infilling of small
                wetlands, canalisation and dredging, loss of marginal and
                submerged plants, siltation, nutrient enrichment and pollution,
                shading of formerly open streams, and changes to flow regimes.
                Species tied to a single habitat type — a particular stream
                character, a seepage, or forest phytotelmata — are inherently
                more exposed than generalists of ordinary ponds. Because the
                nymphs integrate conditions over months, odonate recording is
                often used as one strand of freshwater habitat assessment rather
                than as a measure of the insects alone.
              </p>
            </>
          ),
        },
        {
          heading: "What the Name Covers",
          body: (
            <>
              <p>
                &ldquo;Damselfly&rdquo; is a group name, not a species. It refers
                to the whole suborder Zygoptera and carries no more precision
                than a word like &ldquo;beetle&rdquo; or &ldquo;finch&rdquo;: any
                statement about size, colour, flight season or status only
                becomes checkable once a family, genus or species is named. The
                spelling &ldquo;damsel fly&rdquo; as two words is sometimes seen
                but the single word is standard in modern usage.
              </p>
              <p>
                Regional naming adds further layers. In Britain and much of
                Europe the broad-winged Calopterygidae are called demoiselles,
                while in North America many of the small blue-and-black
                coenagrionids are known as bluets; both names sit inside
                Zygoptera rather than outside it. Local folklore names such as
                &ldquo;devil&apos;s darning needle&rdquo; have been applied
                loosely to odonates in general, damselflies and dragonflies
                alike, and carry no taxonomic meaning.
              </p>
              <p>
                Three confusions recur. Damselflies are routinely mistaken for
                the dragonflies covered separately on FaunaHub, which are the
                other suborder of the same order. They are also confused with
                mayflies, which are a different order altogether — mayflies hold
                the wings upright over the back, usually show two or three long
                tail filaments, and have non-functional mouthparts as adults.
                Finally, some lacewings and antlions are mistaken for damselflies
                because they too have net-veined wings, but they belong to a
                separate order and typically hold the wings in a tent shape over
                the body.
              </p>
            </>
          ),
        },
      ]}
      faqs={[
        {
          question: "Why do damselflies fold their wings when they perch?",
          answer:
            "Most damselflies rest with the fore and hind wings held closed above or alongside the slender abdomen, a posture linked to their narrow wing bases: each wing tapers to a stalk where it joins the thorax, which allows the pair to swing back neatly. The habit is not universal — spreadwings in the family Lestidae typically perch with the wings held partly open — so posture is a strong first clue rather than an absolute rule.",
        },
        {
          question: "What are the three paddles at the tip of a damselfly nymph?",
          answer:
            "They are caudal lamellae, three external gills carried at the end of the abdomen in damselfly nymphs. They increase the surface available for taking oxygen from the water and also work as a small tail fin, letting the nymph swim with side-to-side flicks of the abdomen. Dragonfly nymphs lack them entirely, holding their gills inside the rear of the gut instead, so the three trailing paddles are one of the most reliable ways to recognise a damselfly nymph.",
        },
        {
          question: "What is the difference between a demoiselle and a bluet?",
          answer:
            "Both are damselflies, but they sit in different families. Demoiselles belong to the Calopterygidae, the broad-winged damselflies, which have comparatively wide wings that often carry dark or metallic pigment and are frequently seen along running water. Bluets are narrow-winged damselflies in the Coenagrionidae, the largest and most commonly encountered family, typically small with clear wings and blue-and-black or similarly patterned bodies. The hero photograph here shows a demoiselle; the gallery image shows a coenagrionid.",
        },
        {
          question: "Where do damselflies lay their eggs?",
          answer:
            "Female damselflies generally have a well-developed, blade-like ovipositor and place their eggs inside plant tissue rather than scattering them loose in the water. Stems, floating leaves and submerged vegetation at the edges of ponds and slow streams are typical sites, and in some species the female descends below the surface to do it. Males of many species stay attached to the female in tandem while she lays. Details vary considerably between families.",
        },
        {
          question: "How long does a damselfly live?",
          answer:
            "Most of a damselfly's life is spent underwater as a nymph, a stage that commonly lasts from a few months to a year or more depending on species, water temperature and food supply. The winged adult stage is much shorter, typically a few weeks in many species. The exception is the small number of species that pass the winter as adults — the European winter damselflies of the genus Sympecma are the usual example — where the adult stage spans a whole winter and so lasts far longer than a few weeks. These are broad ranges, not fixed figures, and published values differ between regions and sources.",
        },
      ]}
      quickFacts={[
        { label: "Group", value: "Damselflies — suborder Zygoptera, order Odonata" },
        {
          label: "Representative families",
          value: "Calopterygidae (broad-winged demoiselles) and Coenagrionidae (narrow-winged, the commonest)",
        },
        {
          label: "Typical adult length",
          value: "About 2–5 cm in many temperate species; some tropical damselflies are considerably larger",
        },
        {
          label: "Wings at rest",
          value: "Typically closed above or alongside the abdomen; spreadwings (Lestidae) are a partial exception",
        },
        {
          label: "Wing shape",
          value: "Fore and hind wings nearly identical, each narrowing to a stalk at the base",
        },
        { label: "Eyes", value: "Widely separated on a broad, hammer-shaped head" },
        {
          label: "Nymph",
          value:
            "Usually aquatic, typically with three external caudal gills at the tip of the abdomen; form varies by family",
        },
        {
          label: "Development",
          value: "Incomplete metamorphosis: egg, nymph, adult — no pupal stage",
        },
        {
          label: "Conservation status",
          value: "Varies widely by species and is revised over time — check the IUCN Red List",
        },
      ]}
      relatedLinks={[
        {
          label: "Dragonfly Profile",
          href: "/animals/dragonfly",
          description:
            "The other major division of Odonata, Anisoptera — ranked as a suborder or, under the Epiprocta treatment, as an infraorder",
        },
        {
          label: "Animal Encyclopedia — Insects & Invertebrates",
          href: "/animal-encyclopedia/insects",
          description: "More insect and invertebrate profiles",
        },
        {
          label: "Animal Taxonomy",
          href: "/animal-taxonomy",
          description: "How orders, suborders and families fit together",
        },
        {
          label: "Senses & Adaptations",
          href: "/animal-senses-and-adaptations",
          description: "Vision, gills and other adaptations explained",
        },
        {
          label: "Animal Lifespans",
          href: "/animal-lifespans",
          description: "Why wild and captive figures are reported separately",
        },
        {
          label: "Compare Animals",
          href: "/animal-compare",
          description: "Side-by-side identification comparisons",
        },
        {
          label: "Wildlife Hub",
          href: "/wildlife",
          description: "Ecology, pollinators and freshwater life",
        },
        {
          label: "Animal Research Sources",
          href: "/animal-research-sources",
          description: "How to check a species claim against primary references",
        },
      ]}
    />
  );
}
