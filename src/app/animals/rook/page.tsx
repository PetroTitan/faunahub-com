import type { Metadata } from "next";
import AnimalProfileLayout from "@/components/AnimalProfileLayout";
import { ANIMAL_SOURCES } from "@/lib/educational/animal-sources";
import {
  getAnimalGalleryImages,
  getAnimalImage,
  getAnimalOgImage,
} from "@/lib/images/animal-images";
import { buildArticleMetadata } from "@/lib/metadata";

const PATH = "/animals/rook";
const PUBLISHED = "2026-08-04";
const MODIFIED = "2026-08-04";

const TITLE = "Rook (Corvus frugilegus): Identification, Rookeries & Behavior";
const DESC =
  "The rook (Corvus frugilegus) is a highly social Eurasian farmland corvid. How to separate an adult rook from a carrion crow, why juveniles are harder, and how rookeries work.";

export const metadata: Metadata = buildArticleMetadata({
  title: TITLE,
  description: DESC,
  path: PATH,
  publishedTime: PUBLISHED,
  modifiedTime: MODIFIED,
  ogImage: getAnimalOgImage("rook"),
});

export default function RookPage() {
  return (
    <AnimalProfileLayout
      commonName="Rook"
      scientificName="Corvus frugilegus"
      pageTitle={TITLE}
      description={DESC}
      path={PATH}
      parentCategory="Birds"
      parentCategoryHref="/animal-encyclopedia/birds"
      tags={["Birds", "Corvids", "Farmland"]}
      image={getAnimalImage("rook") ?? undefined}
      galleryImages={getAnimalGalleryImages("rook")}
      sources={ANIMAL_SOURCES["rook"]}
      publishedDate={PUBLISHED}
      modifiedDate={MODIFIED}
      factsHeaderNote="Unlike “crow”, which is a group name covering many species, “rook” refers to a single species — Corvus frugilegus. Figures below are typical ranges and vary by sex, region and season."
      overview={
        <>
          <p>
            The rook (<em>Corvus frugilegus</em>) is a glossy black member of the
            crow family, Corvidae, and one of the most sociable birds of the
            open farmland of temperate Eurasia. Where a carrion crow is usually
            seen alone or in a pair, rooks are typically seen in numbers &mdash;
            feeding parties strung out across a ploughed field, long lines of
            birds commuting to a communal roost at dusk, and above all the noisy
            tree-top breeding colonies known as rookeries. Sociality is the
            single most useful thing to know about the species, because it
            shapes almost everything else about how rooks live.
          </p>
          <p>
            The rook is a true single species, not a catch-all label. That
            matters on FaunaHub, because the words &quot;crow&quot; and
            &quot;raven&quot; are used far more loosely: the crow profile here
            covers a group of species, while <em>Corvus frugilegus</em> is one
            bird with one binomial. Adults carry a distinctive field mark
            &mdash; a patch of bare, pale greyish-white skin around the base of
            a long, rather pointed, paler bill &mdash; but that mark is absent
            in young birds, which is where most misidentification happens.
          </p>
          <p>
            Note: measurements, colony sizes and breeding dates given below are
            typical published ranges rather than fixed values. They vary with
            sex, latitude, season and the source consulted, and conservation
            assessments are periodically revised. Check current figures against
            authoritative references such as the IUCN Red List, national bird
            organisations and peer-reviewed ornithological literature.
          </p>
        </>
      }
      habitat={
        <>
          <p>
            Rooks are birds of open, lowland country with trees. The classic
            setting is a mosaic of arable fields, pasture and short grassland
            broken by hedgerows, shelterbelts, roadside avenues and copses of
            tall trees &mdash; the fields supply food, the tall trees supply
            nest sites, and rooks need both within reach of one another. They
            are largely absent from unbroken dense forest, from treeless
            uplands, and from arid or heavily mountainous ground.
          </p>
          <p>
            Because they nest colonially at the tops of tall trees, rooks are
            often closely associated with human landscapes: village greens,
            churchyards, farm shelterbelts, poplar and elm lines along roads,
            and the mature trees of parks and large gardens. Feeding flocks
            gather on stubble, freshly ploughed or newly sown fields, silage
            ground and grazed pasture, and they move readily between such
            patches as ground conditions change. Habitat use shifts through the
            year, and the details differ across the very wide range this species
            occupies.
          </p>
        </>
      }
      diet={
        <>
          <p>
            Rooks are omnivorous, and their most characteristic feeding method
            is walking steadily over open ground and probing the bill into soil,
            turf and stubble. Soil and surface invertebrates make up a large
            share of the food taken this way &mdash; earthworms, and the larvae
            of beetles and craneflies (often called leatherjackets) are
            frequently reported as important. Plant material matters too: cereal
            grain, other seeds, waste and spilt grain, and roots or shoots are
            all eaten, and grain typically becomes more prominent outside the
            breeding season.
          </p>
          <p>
            Beyond these staples, rooks take small animals, eggs, carrion and
            human food waste opportunistically, and they will cache food items
            for later recovery. The balance between invertebrates and plant
            matter shifts with season, weather, soil moisture and region, so no
            single ratio describes the species everywhere. This page describes
            general feeding ecology only; it does not offer feeding advice, and
            wild birds should not be fed or managed on the strength of a general
            profile.
          </p>
        </>
      }
      behavior={
        <>
          <p>
            Rooks are strongly gregarious for most of the year. They feed in
            flocks, often mixed with jackdaws and sometimes with gulls or
            starlings on the same field, and in autumn and winter large numbers
            converge on traditional communal roosts, arriving along regular
            flight lines in the late afternoon. Breeding is colonial: nests are
            clustered in the crowns of tall trees, sometimes many nests in a
            single tree, and neighbours interact constantly &mdash; calling,
            displaying, squabbling over sticks and watching one another. The
            contrast with the carrion crow, which defends a dispersed territory
            and is far less often seen in dense company, is one of the most
            reliable everyday clues to identity.
          </p>
          <p>
            The voice is a dry, flat, slightly nasal caaw, generally less harsh
            and less emphatic than the carrion crow&apos;s, and a busy colony
            produces a continuous, layered chorus rather than isolated calls.
            Rooks also tumble and wheel above the colony in windy weather, a
            behaviour frequently described as play, though that label is an
            interpretation of function rather than an observation. Pairs maintain
            bonds through mutual preening and food-sharing.
          </p>
          <p>
            Corvid cognition has been studied intensively, and rooks feature in
            that literature. Captive rooks have solved physical problems in
            laboratory settings, including tasks involving tools and the
            manipulation of objects, and studies of their social behaviour
            describe cooperation and close pair bonds. Two cautions belong with
            those findings. First, wild rooks are not known as habitual tool
            users, so performance in an experimental apparatus should not be
            read as an everyday field behaviour. Second, FaunaHub does not rank
            species by intelligence: cognitive tests measure particular
            abilities under particular conditions, and a league table of
            &quot;smartest birds&quot; misrepresents what such experiments can
            show. The accurate framing is a set of documented capacities, each
            tied to the conditions under which it was observed.
          </p>
        </>
      }
      humanInteraction={
        <>
          <p>
            Few wild birds are as bound up with farmed landscapes as the rook.
            Rookeries in village trees, birds following the plough, and winter
            flocks on stubble have made the species a fixture of European rural
            imagery, folklore and place names, and long-running counts of
            occupied nests have made rookeries useful to surveyors because they
            are conspicuous and countable. Agricultural change cuts both ways:
            arable land and grazed grass provide feeding ground, while the loss
            of mature hedgerow trees, changes in tillage and sowing, and tree
            disease can remove nest sites and alter food supply.
          </p>
          <p>
            Rooks are wild birds and are protected by wildlife legislation in
            many countries, with rules on nests, eggs and disturbance that vary
            by jurisdiction; this page makes no claim about what is lawful in
            any particular place, and local authorities and statutory agencies
            are the correct reference. FaunaHub does not provide guidance on
            deterring, managing, capturing or removing birds. For an injured or
            grounded wild bird, contact a licensed wildlife rehabilitator or the
            relevant wildlife authority. Where corvids are held under permit in
            zoos, research collections or rehabilitation facilities, any
            question about their health, housing or welfare belongs with a
            qualified avian veterinarian and recognised species-specific welfare
            resources, not with a general profile.
          </p>
        </>
      }
      extraSections={[
        {
          heading: "Scientific Classification",
          body: (
            <>
              <p>
                The rook is placed in the class Aves, order Passeriformes
                (perching birds), family Corvidae (crows, ravens, jays, magpies
                and their relatives) and genus <em>Corvus</em>. The species is{" "}
                <em>Corvus frugilegus</em>; the specific epithet refers to
                fruit- or crop-gathering, reflecting the bird&apos;s long
                association with cultivated ground.
              </p>
              <p>
                Within <em>Corvus</em>, the rook sits alongside familiar
                Eurasian species such as the carrion crow, hooded crow and common
                raven. The western jackdaw, often listed with them in older
                sources, is now usually placed in a separate genus,{" "}
                <em>Coloeus</em>, so it is a near relative rather than a
                congener on current checklists. Subspecies treatment is not settled: many
                authorities recognise the nominate western form together with an
                eastern Asian form, usually written as{" "}
                <em>C. f. pastinator</em>, while others draw the boundary
                differently or treat variation as clinal. Because taxonomic
                opinion is revised as new evidence appears, treat any subspecies
                list as provisional and check a current checklist rather than
                relying on a single secondary source.
              </p>
            </>
          ),
        },
        {
          heading: "Identification",
          body: (
            <>
              <p>
                This is the section most readers need, because the rook is
                routinely confused with the carrion crow. On a typical{" "}
                <strong>adult</strong> rook the base of the bill is surrounded
                by an area of bare, pale greyish-white skin extending back
                around the eye and chin. The bill itself is longer, straighter
                and more sharply pointed than a crow&apos;s, and paler,
                particularly towards the base. Behind it the forehead rises
                steeply into a peaked crown, so the head looks angular in
                profile rather than smoothly domed. Add the loose, shaggy thigh
                feathering &mdash; often described as baggy trousers or
                plus-fours &mdash; and an adult rook is usually straightforward.
              </p>
              <p>
                The honest qualification is that this cue does not always work.
                A <strong>juvenile</strong> rook has a fully feathered face: the
                pale skin has not yet developed, the bill base is dark and
                feathered, and a first-year bird can be genuinely hard to
                separate from a carrion crow in the field. Many careful
                observers leave such birds unrecorded rather than force an
                identification. Where the face is no help, fall back on
                supporting features: the slimmer, more pointed bill and more
                peaked crown are often still detectable, the thigh feathering
                may already look loose, the calls differ in tone, and behaviour
                is telling &mdash; a bird in a sizeable flock, especially one
                associating with jackdaws or heading to a communal roost, is far
                more likely to be a rook, whereas a lone bird or a pair holding
                ground is more suggestive of a carrion crow.
              </p>
              <p>
                In flight rooks show fingered wingtips and a tail that tends to
                look slightly rounded or wedge-shaped rather than square-ended,
                and flocks travel in loose, chattering companies. None of these
                structural impressions is infallible on its own; combining
                several, and taking account of the company the bird keeps, is
                more reliable than any single mark.
              </p>
            </>
          ),
        },
        {
          heading: "Appearance",
          body: (
            <>
              <p>
                Adults are black overall with a distinct gloss that shows purple,
                blue or bronze tones in good light, and the plumage can look
                loose and slightly untidy compared with the tight, sleek look of
                a carrion crow. Length is typically around 44&ndash;46 cm, with
                a wingspan usually quoted at roughly 80&ndash;100 cm. Published
                body-mass figures for the species differ enough between
                references and regions that this page gives none rather than
                pick one; males average slightly larger than females, and any
                weight quoted elsewhere should be traced to the reference that
                published it.
              </p>
              <p>
                The legs and feet are black, and the eye is dark. Fresh
                juveniles are duller and browner-toned than adults, with a fully
                feathered face; the bare pale face develops gradually as the
                bird matures, so intermediate birds showing a partly bare bill
                base can be seen. Wear and moult also affect appearance, and
                heavily worn plumage in late summer can look noticeably less
                glossy.
              </p>
            </>
          ),
        },
        {
          heading: "Distribution",
          body: (
            <>
              <p>
                The rook is a Eurasian species with a broad temperate
                distribution, occurring from western Europe &mdash; including
                Britain, Ireland and France &mdash; eastwards across the
                European plain and through the temperate belt of Asia to the
                Far East. It favours lowland agricultural country throughout,
                and is scarce or absent in the far north, in extensive forest,
                and in arid or high-mountain regions.
              </p>
              <p>
                Movements vary strongly by region. Populations in the milder
                oceanic west are largely resident, with local movements to
                feeding grounds and roosts, while birds breeding in the colder
                continental north and east are migratory or partially
                migratory, moving south and west for winter and swelling flocks
                in the receiving areas. Rooks have also been introduced outside
                the native range, with established populations in New Zealand.
                Range maps are revised as monitoring continues, so consult a
                current national or global source for the present picture in any
                given country.
              </p>
            </>
          ),
        },
        {
          heading: "Adaptations",
          body: (
            <>
              <p>
                Several rook traits fit the demands of feeding on open,
                cultivated ground. The long, tapering bill suits probing into
                soil and turf for invertebrates rather than the heavier
                all-purpose bill of some other <em>Corvus</em> species. The bare
                face of adults is frequently explained as a consequence of that
                probing habit &mdash; feathers around the bill base would
                repeatedly become soiled &mdash; and while this explanation is
                widely repeated, it is best treated as a plausible functional
                interpretation rather than a settled fact.
              </p>
              <p>
                Sociality is itself an adaptation to patchy, shifting food
                supplies: flock feeding and communal roosting let information
                about productive fields spread quickly, and colonial nesting
                concentrates vigilance where nests are exposed in bare tree
                crowns. Dietary flexibility buffers the species against seasonal
                shortfalls, and food-caching spreads a temporary surplus across
                time. The behavioural flexibility documented across corvids
                generally &mdash; learning, memory for places and objects, and
                fine manipulation with bill and feet &mdash; supports all of
                this, though the specific abilities studied in captivity should
                not be assumed to describe wild routines.
              </p>
            </>
          ),
        },
        {
          heading: "Life Cycle & Reproduction",
          body: (
            <>
              <p>
                Rooks nest colonially in rookeries built high in the crowns of
                tall trees. Nests are bulky structures of sticks, lined with
                softer material such as grass, moss, leaves, wool or hair, and
                many are repaired and reused in successive seasons rather than
                built from scratch. Colonies range from a few nests to very
                large aggregations, and site fidelity can be high, with some
                rookeries occupied for many years &mdash; though colonies do
                shift when trees are lost or conditions change.
              </p>
              <p>
                The rook is an early breeder by the standards of temperate
                songbirds, with nest repair often under way in late winter and
                laying commonly beginning in early spring in western Europe;
                timing runs later at higher latitudes and in more continental
                climates. Clutches typically contain about three to five eggs.
                Incubation is generally carried out by the female and is commonly
                reported at about sixteen to eighteen days, during which the
                male brings food to her at the nest. Young are fed by both
                parents and usually leave the nest around a month or so after
                hatching, then continue to be fed for a further period while
                they learn to forage. Pairs are typically long-term, and
                first breeding usually follows a year or more of immaturity.
                All of these figures vary with region, season and food supply.
              </p>
            </>
          ),
        },
        {
          heading: "Lifespan",
          body: (
            <>
              <p>
                <strong>In the wild.</strong> As in most birds of this kind,
                mortality is heaviest in the first year of life, and a large
                share of fledged young do not survive to breed. Birds that clear
                that first winter may then live for several years, and ringing
                recoveries have documented individuals surviving well beyond a
                decade. Such long-lived birds are exceptional rather than
                typical, and average figures quoted for wild populations depend
                heavily on how the sample was gathered.
              </p>
              <p>
                <strong>Under human care.</strong> Corvids held in zoos,
                research collections and rehabilitation facilities are buffered
                from predation, weather extremes and food shortages, and
                individuals in such settings have been recorded living longer
                than typical wild birds. Captive longevity records reflect a
                small, selected group of animals in protected conditions and are
                not directly comparable with wild survival estimates; the two
                should never be merged into a single &quot;lifespan&quot;
                figure. This page reports the distinction only and offers no
                guidance on keeping rooks.
              </p>
            </>
          ),
        },
        {
          heading: "Conservation Context",
          body: (
            <>
              <p>
                At the global scale the rook has been assessed as a widespread
                and numerous species, and at the time of writing it is not
                listed in a threatened category on the IUCN Red List. That is a
                snapshot, not a permanent property: Red List assessments are
                periodically reviewed and can change as evidence accumulates,
                and a global assessment can conceal important regional trends.
                Always confirm the current status on the IUCN Red List at
                iucnredlist.org rather than relying on a figure quoted
                elsewhere.
              </p>
              <p>
                Regionally, rook numbers have been reported as declining in
                parts of the range, and national monitoring schemes track
                occupied-nest counts precisely because rookeries are countable
                year on year. Factors discussed in relation to farmland corvids
                include changes in tillage and sowing practice, the availability
                of grassland and stubble, the loss of mature hedgerow and
                roadside trees to disease and removal, and land-use
                intensification. National bird organisations and statutory
                conservation agencies publish the relevant trend data for
                individual countries, and those sources should be preferred over
                general summaries.
              </p>
            </>
          ),
        },
        {
          heading: "What the Name Covers",
          body: (
            <>
              <p>
                &quot;Rook&quot; is a single-species name. It refers to{" "}
                <em>Corvus frugilegus</em> rather than to a group of birds, which
                puts it in a different category from &quot;crow&quot;, a loose group name
                covering many species of <em>Corvus</em>, and from
                &quot;raven&quot;, which is likewise applied across several
                species. If a source uses &quot;crow&quot; without qualification
                in Europe, it often means the carrion crow or hooded crow rather
                than the rook.
              </p>
              <p>
                Regional usage adds confusion. There is no resident rook
                population in the Americas &mdash; the species is recorded there
                only as a rare vagrant, some of it ship-assisted &mdash; so North
                American readers who grew up with &quot;crow&quot; meaning the
                American crow have no local equivalent for this bird; conversely, in parts of Europe the rook is the default
                black corvid of farmland and the crow is the less commonly seen
                one. The rook is also frequently confused with the jackdaw, a
                smaller, greyer-naped corvid with a pale eye that often flies
                and feeds in the same flocks, and with the magpie, which is
                pied and long-tailed and not likely to be mistaken once seen
                well.
              </p>
              <p>
                Finally, the word &quot;rookery&quot; has escaped the species
                entirely. Borrowed from the rook&apos;s tree-top colonies, it is
                now used for the breeding congregations of seals, penguins and
                various seabirds, and for dense historical housing. A rookery in
                a natural-history text therefore does not necessarily involve
                rooks at all.
              </p>
            </>
          ),
        },
      ]}
      similarAnimals={
        <p>
          The closest look-alike is the carrion crow, separated on adult face
          pattern, bill shape, head profile, thigh feathering and sociability
          &mdash; with the important caveat that juvenile rooks lack the face
          cue. The common raven is much larger, with a heavier bill and a
          wedge-shaped tail; the jackdaw is smaller, with a grey nape and a pale
          eye, and often flies in the same flocks; and the magpie is
          unmistakably pied and long-tailed. FaunaHub covers crows, ravens and
          magpies on their own pages.
        </p>
      }
      comparisonCallouts={[
        { href: "/birdwatching", label: "Birdwatching hub" },
        { href: "/animal-intelligence-and-behavior", label: "Intelligence & behaviour hub" },
      ]}
      faqs={[
        {
          question: "How can you tell a rook from a carrion crow?",
          answer:
            "Start with the face: an adult rook shows bare pale skin where a carrion crow shows feathering right up to the bill. Then check the silhouette — an angular, peaked crown and a slimmer, paler bill on the rook against the crow's smooth dome and heavier black bill — and the trousered look given by loose thigh feathering. Company is a useful secondary clue, since rooks are usually in flocks while carrion crows are more often alone or in pairs. None of this works on juveniles, which have feathered bill bases and are genuinely difficult.",
        },
        {
          question: "Why are young rooks so hard to identify?",
          answer:
            "A juvenile rook has a fully feathered face, so the bare pale skin that makes adults distinctive simply is not there yet. In the field a first-year rook can look very like a carrion crow, and many experienced observers leave such birds unidentified. Structure still helps a little: the bill tends to be slimmer and more pointed and the crown more peaked. Voice, flock size and the company the bird keeps are often more reliable than face pattern alone.",
        },
        {
          question: "What is a rookery?",
          answer:
            "A rookery is a breeding colony of rooks, usually a cluster of bulky stick nests built high in the crowns of tall trees, often close to farmland, villages or roadsides. Colonies are noisy and conspicuous, and many are used again in successive years, with nests repaired rather than rebuilt from scratch. Colony size varies widely, from a handful of nests to a great many. Confusingly, the word rookery is also borrowed for the colonies of seals, penguins and some seabirds.",
        },
        {
          question: "What do rooks eat?",
          answer:
            "Rooks are omnivorous and feed largely by walking over open ground and probing into soil and short grass. Soil invertebrates such as earthworms and beetle and cranefly larvae are important, and cereal grain, other seeds and waste from fields are taken as well, especially outside the breeding season. Carrion, scraps and small animals may be eaten opportunistically. The balance shifts with season, weather, soil conditions and region, so no single description covers the whole range of the species.",
        },
        {
          question: "Are rooks intelligent?",
          answer:
            "Rooks belong to the crow family, a group whose problem-solving has been studied a great deal. Captive rooks have performed well in experiments involving tools and physical problems, although wild rooks are not known as habitual tool users, so laboratory performance and everyday behaviour are not the same thing. FaunaHub avoids ranking species by intelligence, because tests measure particular abilities under particular conditions. Treat cognition as a set of documented capacities rather than a score.",
        },
      ]}
      quickFacts={[
        { label: "Scientific name", value: "Corvus frugilegus (a single species)" },
        { label: "Family", value: "Corvidae — crows, ravens, jays and magpies" },
        { label: "Length", value: "Typically about 44–46 cm" },
        { label: "Wingspan", value: "Roughly 80–100 cm; sources vary" },
        { label: "Range", value: "Temperate Eurasia; introduced in New Zealand" },
        { label: "Habitat", value: "Lowland farmland and grassland with tall trees" },
        { label: "Diet", value: "Omnivorous; soil invertebrates, grain and seeds" },
        { label: "Social structure", value: "Highly gregarious; colonial nester (rookeries)" },
      ]}
      relatedLinks={[
        {
          label: "Crow Profile",
          href: "/animals/crow",
          description:
            "The group page for crows. FaunaHub has no separate carrion crow profile, so this page is referenced to the American crow rather than to the European bird the rook is confused with",
        },
        {
          label: "Raven Profile",
          href: "/animals/raven",
          description: "A much larger corvid with a heavier bill and wedge-shaped tail",
        },
        {
          label: "Magpie Profile",
          href: "/animals/magpie",
          description: "The pied, long-tailed corvid of gardens and farmland",
        },
        {
          label: "Bird Encyclopedia",
          href: "/animal-encyclopedia/birds",
          description: "Browse FaunaHub's bird profiles by group",
        },
        {
          label: "Animal Intelligence & Behavior",
          href: "/animal-intelligence-and-behavior",
          description: "How cognition is studied — and why rankings are avoided",
        },
        {
          label: "Birdwatching Hub",
          href: "/birdwatching",
          description: "Field identification, structure and behaviour clues",
        },
        {
          label: "Animal Lifespans",
          href: "/animal-lifespans",
          description: "Why wild and captive longevity figures are not comparable",
        },
        {
          label: "Wildlife Hub",
          href: "/wildlife",
          description: "Ecology, habitats and species groups across FaunaHub",
        },
      ]}
    />
  );
}
