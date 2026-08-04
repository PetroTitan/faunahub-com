import type { Metadata } from "next";
import AnimalProfileLayout from "@/components/AnimalProfileLayout";
import { ANIMAL_SOURCES } from "@/lib/educational/animal-sources";
import {
  getAnimalGalleryImages,
  getAnimalImage,
  getAnimalOgImage,
} from "@/lib/images/animal-images";
import { buildArticleMetadata } from "@/lib/metadata";

const PATH = "/animals/mouse";
const PUBLISHED = "2026-08-04";
const MODIFIED = "2026-08-04";

const TITLE = "Mouse — House Mouse, Wood Mouse, and What the Name Covers";
const DESC =
  "Group-level profile of the small rodents called mice: the house mouse Mus musculus, the wild European wood mouse, how mice differ from rats and voles, and why wild, commensal and laboratory mice are not the same thing.";

export const metadata: Metadata = buildArticleMetadata({
  title: TITLE,
  description: DESC,
  path: PATH,
  publishedTime: PUBLISHED,
  modifiedTime: MODIFIED,
  ogImage: getAnimalOgImage("mouse"),
});

export default function MousePage() {
  return (
    <AnimalProfileLayout
      commonName="Mouse"
      scientificName="Mus musculus and relatives"
      pageTitle={TITLE}
      description={DESC}
      path={PATH}
      parentCategory="Mammals"
      parentCategoryHref="/animal-encyclopedia/mammals"
      tags={["Mammals", "Rodents", "Commensal species"]}
      image={getAnimalImage("mouse") ?? undefined}
      galleryImages={getAnimalGalleryImages("mouse")}
      sources={ANIMAL_SOURCES["mouse"]}
      publishedDate="2026-08-04"
      modifiedDate="2026-08-04"
      overview={
        <>
          <p>
            &ldquo;Mouse&rdquo; is a common name for a body plan rather than a single
            species: a small rodent with a fine, pointed muzzle, prominent rounded ears,
            large dark eyes, long whiskers, and a slender, sparsely haired tail that is
            often about as long as the head and body together. Most of the animals the word
            is applied to belong to the family Muridae, and the reference point for this
            page is the house mouse, <em>Mus musculus</em>. Because a great deal of writing
            about &ldquo;the mouse&rdquo; silently merges several very different animals and
            situations, this profile is written at group level and keeps those threads
            apart.
          </p>
          <p>
            Adult house mice are commonly reported at roughly 7&ndash;10 cm in head and body
            length, with a tail of broadly similar length, and typically somewhere around
            12&ndash;30 g in weight. Those ranges shift with population, sex, season, food
            supply and whether the animals are living free in the field, alongside people,
            or under human care, so any single figure quoted for &ldquo;a mouse&rdquo;
            should be read as an approximation. The wood mouse, <em>Apodemus sylvaticus</em>
            , is a comparable size but is usually described as having proportionally larger
            eyes, larger ears and longer hind feet, with warmer sandy-brown upperparts
            contrasting more sharply with pale underparts.
          </p>
          <p>
            Three contexts run through this page and are deliberately not blended.{" "}
            <strong>Wild mice</strong> live independently of people &mdash; the wood mouse
            of European woodland and farmland is the example used here, and it is the
            species shown in the gallery photograph on this page.{" "}
            <strong>Commensal mice</strong> are house mice living in, on and around human
            buildings, farms, stores and ships, feeding on what human activity makes
            available. <strong>Laboratory and fancy mice</strong> are domesticated
            populations derived from the house mouse and bred under human care for many
            generations. What is true of one of these is frequently not true of the others.
          </p>
        </>
      }
      habitat={
        <>
          <p>
            Wild mice occupy a wide spread of terrestrial habitats. The wood mouse is
            associated above all with woodland, scrub, hedgerows, field margins, rough
            grassland and gardens across much of Europe, sheltering in burrow systems dug
            among roots and banks, in leaf litter, under logs and stones, and sometimes in
            outbuildings when weather turns hard. It is an agile, wide-ranging animal that
            moves through structurally complex cover rather than open ground where it is
            exposed.
          </p>
          <p>
            The house mouse is best understood as a habitat generalist that has become
            closely tied to human landscapes. Free-living house-mouse populations do occur
            in field, grassland, scrub and coastal habitats in various parts of the world,
            while commensal populations live inside and beneath structures &mdash;
            buildings, grain stores, farm complexes, transport containers and ships &mdash;
            where temperature, shelter and food are comparatively steady. Whether a given
            population is commensal, seasonally commensal or fully free-living varies by
            region and climate, and populations can shift between these patterns rather than
            belonging permanently to one.
          </p>
        </>
      }
      diet={
        <>
          <p>
            Mice are generalist feeders with a strong bias toward seeds. Wood mice are
            usually described as taking seeds, nuts, tree fruits, buds, seedlings, fungi and
            a substantial quantity of invertebrates, with the balance shifting through the
            year as different foods become available; caching seeds in scattered stores is
            widely reported for the genus. Commensal house mice take grain, seed, stored
            products and discarded human food, along with plant material and invertebrates
            where they can reach them, and free-living house mice feed more like other small
            granivorous rodents.
          </p>
          <p>
            Continuously growing incisors mean that gnawing is a routine part of a
            mouse&apos;s life and is not confined to food; damage to packaging, insulation
            and stored material is a consequence of that biology rather than an appetite for
            those materials. This section describes feeding ecology in the wild and in
            commensal settings. It is not a feeding guide, and questions about what any
            animal under human care should be given belong with a qualified veterinarian
            rather than with a natural-history page.
          </p>
        </>
      }
      behavior={
        <>
          <p>
            Mice are typically most active at night and around dusk and dawn, though
            commensal house mice can shift their activity in response to disturbance,
            lighting and the rhythms of the buildings they live in. They are agile climbers
            and jumpers, use established routes and edges rather than crossing open space,
            and investigate change in their surroundings cautiously, with individuals and
            populations differing markedly in how readily they approach something new.
          </p>
          <p>
            Social organisation varies with species and circumstance. House mice in stable,
            resource-rich sites are often described as living in family-based groups with a
            dominant male defending an area, while animals in unstable or crowded conditions
            show different arrangements; wood mice are generally reported as more solitary
            and wider-ranging, with overlapping home ranges that change with season and food
            supply. Scent is central to all of this: urine marks, glandular secretions and
            individual odour carry information about identity, status and reproductive
            condition. Mice also produce vocalisations, many of them ultrasonic and
            inaudible to people, in a range of social contexts.
          </p>
          <p>
            Reproduction is rapid where conditions allow. Litters of several young are
            usual, more than one litter in a season is common, and breeding may continue
            through much of the year in warm, sheltered, food-rich sites while being tightly
            seasonal in colder or drier ones. This is a description of reproductive ecology
            as it is observed, not guidance on breeding animals.
          </p>
        </>
      }
      humanInteraction={
        <>
          <p>
            Few wild mammals have a longer or closer association with people than the house
            mouse. Its spread has tracked agriculture, storage and trade for thousands of
            years, and it continues to move with cargo, vehicles and shipping today. That
            relationship is commensal rather than domestic: the animals exploit human
            environments without being bred, tamed or managed by people. The practical
            consequences are well documented &mdash; loss and contamination of stored food,
            gnawing damage to materials and fittings, and a role in the ecology of certain
            pathogens. Guidance on rodents in buildings, and on any health question
            associated with them, is the province of public-health authorities and qualified
            professionals; none is offered here.
          </p>
          <p>
            Wild mice such as the wood mouse are also part of everyday encounters at the
            edges of gardens, farmland and woodland, where they are important prey for owls,
            other birds of prey, foxes, mustelids, snakes and domestic cats, and where they
            act as seed dispersers and seed predators. Their abundance underpins a
            considerable part of the temperate food web.
          </p>
          <p>
            A third relationship is scientific and domestic. The house mouse gave rise to the
            laboratory mouse, the most widely used mammalian model organism in biomedical
            research, and to the fancy mouse kept and bred as a companion and exhibition
            animal. Both are populations shaped by human selection, held in conditions
            unlike anything wild, and governed by regulatory and welfare frameworks that
            differ between countries and are not summarised here. Any question about the
            health, handling, housing or welfare of a mouse kept under human care should go
            to a qualified veterinarian with small-mammal experience and to recognised
            species-specific welfare organisations.
          </p>
        </>
      }
      extraSections={[
        {
          heading: "Distribution",
          body: (
            <>
              <p>
                The house mouse is routinely described as one of the most widely distributed
                mammals on Earth, second in reach only to humans and, arguably, the commensal
                rats. Its origin is generally traced to parts of southern and central Asia,
                from where it expanded first with early agriculture and settlement and then,
                far more rapidly, with maritime trade. It is now present on every continent
                in association with people, including research stations in the far south, and
                on a very large number of islands, many of which had no land mammals before
                ships arrived.
              </p>
              <p>
                That change is the interesting part of the story. The modern range is not a
                natural one: it is a map of human transport, storage and settlement laid over
                the world. Where mice have arrived on islands they can become a conservation
                problem in their own right, and on some South Atlantic and sub-Antarctic
                islands introduced mice have been documented attacking and killing the chicks
                of ground-nesting seabirds &mdash; behaviour recorded in specific island
                systems rather than typical of mice generally.
              </p>
              <p>
                The wood mouse has a different pattern: a naturally wide distribution across
                much of Europe, extending into north-western Africa and parts of western
                Asia, with closely related <em>Apodemus</em> species occupying neighbouring
                regions and often difficult to separate in the field. Other rodents called
                mice range from continent-wide generalists to species confined to a single
                mountain range or island. Current range maps for any named species should be
                taken from the IUCN Red List assessment for that species rather than
                generalised from this page.
              </p>
            </>
          ),
        },
        {
          heading: "Senses & Adaptations",
          body: (
            <>
              <p>
                Mice are built around nocturnal, close-quarters living. Smell is the dominant
                sense: scent is used for individual and group recognition, for marking
                routes and territories, for assessing reproductive condition, and for
                detecting food and predators. Touch is nearly as important, with long
                vibrissae sweeping the space ahead of the animal so that it can move
                confidently along walls, roots and burrow tunnels in complete darkness.
                Hearing extends well above the human range, which is why so much mouse
                communication is inaudible to us. Vision is generally described as suited to
                movement and low light rather than to fine detail or rich colour.
              </p>
              <p>
                The physical adaptations follow from small size. A slight build allows
                passage through gaps that look far too small for the animal &mdash; the
                limiting dimension is the width of the skull rather than any ability to
                collapse the skeleton, which mice, like other rodents, cannot do; strong
                claws and a long tail used for balance support climbing and jumping; and
                ever-growing incisors carry hard enamel on the front face with softer
                dentine behind, so constant gnawing wears the two unevenly and maintains a
                chisel edge that opens seeds, nuts and much tougher material. Being small also means losing
                heat quickly, which is one reason mice build insulated nests, huddle, and in
                cold regions favour sheltered sites &mdash; including human buildings. Wood
                mice have a further escape mechanism: the skin of the tail tip can be shed if
                the tail is seized, and the exposed portion is subsequently lost rather than
                regrown. As with all functional interpretations, these explanations reflect
                current understanding and may be refined.
              </p>
            </>
          ),
        },
        {
          heading: "Lifespan & Life Stages",
          body: (
            <>
              <p>
                Young mice are altricial: born blind, deaf and effectively hairless in a
                nest, they develop quickly, growing fur, opening the eyes and becoming mobile
                over the following weeks, with weaning generally reported within about three
                weeks or so. Sexual maturity typically arrives early &mdash; often within a
                couple of months, and sooner in favourable conditions &mdash; which, combined
                with short gestation and repeated litters, is why mouse populations can grow
                and crash quickly when food supply changes.
              </p>
              <p>
                <strong>In the wild and in commensal settings:</strong> longevity is short.
                Most free-living mice are generally considered unlikely to survive a full
                year, with predation, cold, food shortage, competition and disease removing
                the great majority before a second breeding season; a minority of individuals
                live appreciably longer. Figures for wild longevity are estimates drawn from
                trapping and mark-recapture work and vary between studies, seasons and sites.
              </p>
              <p>
                <strong>Under human care:</strong> house mice kept in protected conditions,
                including laboratory and fancy mice, are commonly reported to live somewhere
                in the region of one to three years, with the figure varying by strain, sex,
                and the conditions in which the animals are held. These numbers come from
                environments without predators and with reliable food, and they should not be
                read back onto wild or commensal animals. The two categories of evidence are
                kept separate here on purpose.
              </p>
            </>
          ),
        },
        {
          heading: "Conservation Context",
          body: (
            <>
              <p>
                The house mouse is among the most abundant and widespread mammals in the
                world and has been assessed in recent years as being of least concern; the
                wood mouse is likewise widespread and common across its European range.
                Conservation categories are reassessed as new information arrives and can
                move in either direction, so nothing on this page should be treated as a
                permanent status. For the current category, criteria, range and assessment
                date for <em>Mus musculus</em>, <em>Apodemus sylvaticus</em> or any other
                species, consult the IUCN Red List entry for that species directly.
              </p>
              <p>
                Two qualifications matter. First, the security of these two species says
                nothing about mice as a whole: a substantial number of small rodents called
                mice &mdash; particularly native species in Australia and on islands &mdash;
                are assessed as threatened, and some are considered extinct. Second, an
                abundant species can itself be a conservation problem. Where house mice have
                been introduced to islands they can affect native plants, invertebrates and
                seabirds, and eradication or control programmes on such islands are conducted
                as conservation work. Abundance and conservation concern are not opposites.
              </p>
            </>
          ),
        },
        {
          heading: "What the Name Covers",
          body: (
            <>
              <p>
                &ldquo;Mouse&rdquo; is a description of size and shape, not a branch of the
                family tree. Used strictly, it most often means the house mouse and its
                close relatives in the genus <em>Mus</em>. Used loosely, it is attached to
                small rodents across several families and continents: the wood mice and field
                mice of the genus <em>Apodemus</em> in Eurasia, the deer mice of the genus{" "}
                <em>Peromyscus</em> in the Americas, various Australian native mice, and
                many others. Some animals called mice are not even rodents &mdash; several
                small Australian marsupials carry &ldquo;mouse&rdquo; in their common names
                &mdash; and dormice belong to a separate family altogether.
              </p>
              <p>
                Regional usage compounds this. In Britain, &ldquo;field mouse&rdquo; usually
                means the wood mouse; in North America the same phrase may be applied to a
                deer mouse or, loosely and incorrectly, to a vole. Because of that, a
                statement about &ldquo;mice&rdquo; in one country&apos;s writing may not
                describe the animal a reader in another country has in mind, and it is worth
                establishing which species a source meant before carrying a claim across.
              </p>
              <p>
                Two comparisons are worth stating plainly.{" "}
                <strong>Mouse versus rat:</strong> the two sit in separate genera,{" "}
                <em>Mus</em> and <em>Rattus</em>, and are told apart by proportion rather
                than by size &mdash; the rat profile covers that comparison in full.{" "}
                <strong>Mouse versus vole:</strong> voles are close relatives with a blunt,
                rounded face, small eyes, small ears often half buried in fur, and a tail
                clearly shorter than the head and body, while mice have pointed muzzles,
                prominent ears, large eyes and a long tail of roughly body length.
              </p>
            </>
          ),
        },
        {
          heading: "Domestic, Feral and Wild",
          body: (
            <>
              <p>
                The domestic mouse &mdash; the fancy mouse kept as a companion and exhibition
                animal, and the laboratory mouse used in research &mdash; is a domesticated
                population derived from the house mouse, <em>Mus musculus</em>, which remains
                a living, abundant wild and commensal animal. There is no lost wild ancestor
                here, and no separate species: the domestic form is the same species shaped
                by selection under human care. Deliberate breeding of colour and coat
                varieties has a long history, with documented traditions in East Asia and
                organised fancy-mouse breeding in Europe from the nineteenth century, and
                laboratory stocks were subsequently developed from that domestic material
                into standardised inbred and outbred lines.
              </p>
              <p>
                Commensal is not the same as domestic, and the distinction is the single most
                useful idea on this page. A house mouse living in a grain store is a wild
                animal exploiting a human environment; it has not been bred, selected or
                managed, and it behaves accordingly. A fancy or laboratory mouse comes from
                generations of selection and differs from wild animals in coat, size,
                temperament, reproductive pattern and physiology. Escaped domestic mice do
                not generally establish distinctive feral populations of their own, since
                house mice are already present across most of the range where they would
                escape, and any such animals are absorbed into or replaced by existing
                populations.
              </p>
              <p>
                Wild house-mouse populations are themselves complex, and are commonly divided
                into several subspecies groups whose boundaries, hybrid zones and history are
                still actively studied &mdash; another reason to be careful about
                generalising from one population to all mice. Whether mice may be kept,
                bred, sold or used in research varies between countries and smaller
                jurisdictions and is not stated here; check current local law. For anything
                concerning the health, handling or welfare of a mouse under human care,
                consult a qualified veterinarian experienced with small mammals and
                recognised species-specific welfare organisations.
              </p>
            </>
          ),
        },
      ]}
      faqs={[
        {
          question: "What is the difference between a mouse and a rat?",
          answer:
            "In the strict sense the two belong to different genera, Mus and Rattus, within the same subfamily. FaunaHub sets out the full identification treatment — proportion, head shape, hind feet and the juvenile-rat trap — on the rat profile at /animals/rat.",
        },
        {
          question: "How do you tell a mouse from a vole?",
          answer:
            "Voles are close relatives with a very different outline. A vole has a blunt, rounded face, small ears that are often partly hidden in the fur, small eyes and a tail that is clearly shorter than its head and body. A mouse has a pointed muzzle, prominent ears, large dark eyes and a long, sparsely haired tail of roughly body length. Voles are also generally stockier, and are usually seen in grassland rather than inside buildings.",
        },
        {
          question: "Are house mice and wood mice the same animal?",
          answer:
            "No. They are separate species in different genera. The house mouse, Mus musculus, is the animal most people mean by mouse and is the one that most often lives in and around buildings. The wood mouse, Apodemus sylvaticus, is a wild European species of woodland, hedgerow and farmland, and typically has larger eyes and ears, a longer hind foot and warmer, more contrasting sandy-brown fur with a paler underside. The gallery photograph on this page shows a wood mouse.",
        },
        {
          question: "Are laboratory and pet mice the same species as house mice?",
          answer:
            "They descend from the house mouse, but they are not wild animals. Laboratory mice and pet fancy mice come from populations bred under human care for many generations, selected for coat colour, temperament or standardised genetics. That history has changed their appearance, behaviour and biology in ways that make them poor stand-ins for wild or commensal mice. Findings from one context should not be assumed to describe another, which is why this profile keeps the three separate.",
        },
        {
          question: "How long do mice live?",
          answer:
            "It depends entirely on the setting, and the two figures should not be mixed. In the wild, most small mice live well under a year: predation, cold, food shortage and disease remove the great majority before a second breeding season, though a few individuals survive longer. Under human care, protected from predators and with reliable food, house mice are commonly reported to live somewhere between about one and three years, varying with strain, sex and conditions.",
        },
      ]}
      quickFacts={[
        {
          label: "Group",
          value:
            "Small rodents called mice, mostly in the family Muridae; representative species the house mouse (Mus musculus)",
        },
        {
          label: "Also covered",
          value:
            "Wood mouse (Apodemus sylvaticus), a wild European species and the animal shown in the gallery photograph",
        },
        {
          label: "Typical size",
          value:
            "House mouse head and body commonly about 7–10 cm, with a tail of broadly similar length; varies by population, sex and species",
        },
        {
          label: "Typical weight",
          value:
            "Often around 12–30 g in house mice; wood mice are frequently similar or a little heavier, varying with season and site",
        },
        {
          label: "Diet",
          value:
            "Generalist, seed-biased: seeds, grain, nuts, plant material, fungi and invertebrates; commensal house mice also take stored and discarded human food",
        },
        {
          label: "Activity",
          value:
            "Mainly nocturnal and crepuscular; agile climbers and jumpers that typically follow cover and edges rather than open ground",
        },
        {
          label: "Notable trait",
          value:
            "Pointed muzzle, proportionally large ears and a long, sparsely haired tail — the features that separate mice from voles at a glance",
        },
        {
          label: "Conservation status",
          value:
            "House mouse and wood mouse both widespread and assessed as least concern in recent assessments; categories are reviewed, so check the current IUCN Red List entry per species",
        },
      ]}
      relatedLinks={[
        {
          label: "Rat Profile",
          href: "/animals/rat",
          description: "The genus Rattus, and the full rat-versus-mouse identification treatment",
        },
        {
          label: "Mammal Encyclopedia",
          href: "/animal-encyclopedia/mammals",
          description: "Browse other mammal profiles",
        },
        {
          label: "Animal Taxonomy",
          href: "/animal-taxonomy",
          description: "How common names map onto scientific groups",
        },
        {
          label: "Animal Domestication",
          href: "/animal-domestication",
          description: "How wild species became domestic populations",
        },
        {
          label: "Animal Food & Diet",
          href: "/animal-food-and-diet",
          description: "Feeding ecology, and where care questions belong",
        },
        {
          label: "Small Pets",
          href: "/small-pets",
          description: "Small domestic mammals covered on FaunaHub",
        },
        {
          label: "Animal Senses & Adaptations",
          href: "/animal-senses-and-adaptations",
          description: "How animals sense and survive their habitats",
        },
        {
          label: "Animal Lifespans",
          href: "/animal-lifespans",
          description: "Why wild and captive lifespans differ",
        },
      ]}
    />
  );
}
