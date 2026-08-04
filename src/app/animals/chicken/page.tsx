import type { Metadata } from "next";
import AnimalProfileLayout from "@/components/AnimalProfileLayout";
import { ANIMAL_SOURCES } from "@/lib/educational/animal-sources";
import {
  getAnimalGalleryImages,
  getAnimalImage,
  getAnimalOgImage,
} from "@/lib/images/animal-images";
import { buildArticleMetadata } from "@/lib/metadata";

const PATH = "/animals/chicken";
const PUBLISHED = "2026-08-04";
const MODIFIED = "2026-08-04";

const TITLE = "Chicken: Junglefowl Ancestry, Combs, Dust Bathing & Flock Life";
const DESC =
  "The domestic chicken (Gallus gallus domesticus): its junglefowl ancestry, what combs and wattles do, why it dust bathes, how flock structure is described, and its precocial chicks.";

export const metadata: Metadata = buildArticleMetadata({
  title: TITLE,
  description: DESC,
  path: PATH,
  publishedTime: PUBLISHED,
  modifiedTime: MODIFIED,
  ogImage: getAnimalOgImage("chicken"),
});

export default function ChickenPage() {
  return (
    <AnimalProfileLayout
      commonName="Chicken"
      scientificName="Gallus gallus domesticus"
      pageTitle={TITLE}
      description={DESC}
      path={PATH}
      parentCategory="Birds"
      parentCategoryHref="/animal-encyclopedia/birds"
      tags={["Domestic animals", "Birds", "Galliformes"]}
      image={getAnimalImage("chicken") ?? undefined}
      galleryImages={getAnimalGalleryImages("chicken")}
      sources={ANIMAL_SOURCES["chicken"]}
      publishedDate={PUBLISHED}
      modifiedDate={MODIFIED}
      factsHeaderNote="This page is an educational natural-history profile of the domestic chicken. It is not husbandry, feeding or veterinary guidance, and figures given for size, maturity and lifespan are broad ranges that vary by breed, sex, region and setting."
      overview={
        <>
          <p>
            The chicken is a domesticated ground bird of the order Galliformes,
            usually written as <em>Gallus gallus domesticus</em> and generally
            treated as a domesticated form of the red junglefowl,{" "}
            <em>Gallus gallus</em>, a bird of forest edges, scrub and bamboo
            thickets in South and Southeast Asia. Compact-bodied, short-winged
            and heavy-footed, it walks and scratches far more than it flies. The
            fleshy comb above the head and the paired wattles below the bill are
            its most recognisable features, and both vary a great deal with sex,
            breed and individual condition.
          </p>
          <p>
            By any reasonable count the chicken is the most numerous bird on
            Earth, and by a wide margin rather than a narrow one. That is a
            direct consequence of how widely people keep it: unlike almost every
            other bird, its numbers track human settlement rather than any
            natural habitat. Breeds differ enormously in size, plumage, comb
            shape and temperament, so a description of &quot;the chicken&quot;
            is always a description of a very variable domestic animal rather
            than of one uniform wild species.
          </p>
          <p>
            Much of what makes the chicken interesting is behavioural and
            retained from its wild ancestry: scratch-and-peck foraging, dust
            bathing, roosting off the ground at dusk, a varied vocal repertoire,
            precocial chicks that walk and feed themselves within about a day,
            and consistent social relationships within a flock. Specific
            figures for size, maturity and longevity differ so much between
            breeds and settings that they are best treated as ranges and checked
            against authoritative ornithological and animal-science sources.
          </p>
        </>
      }
      habitat={
        <>
          <p>
            The chicken has no natural habitat of its own in the way a wild bird
            does. It lives where people live, from smallholdings and village
            edges to gardens, mixed farmland and managed settings across most of
            the inhabited world, in climates ranging from cold temperate to hot
            and humid. Hardiness varies by breed, and the traits that suit a
            bird to one climate — feather density, body size, comb size — are
            among the features that differ most between regional breeds.
          </p>
          <p>
            Its wild ancestor gives a clearer picture of the habitat the species
            is built for. Red junglefowl are typically associated with forest
            edge, secondary growth, bamboo, scrub and the mosaic of clearings
            and thickets that sits between dense forest and open ground. That is
            a shaded, structurally cluttered environment with loose leaf litter
            to scratch through, dry patches for dust bathing, and branches to
            roost on above the ground. Domestic chickens still behave as though
            they expect those elements, which is why cover, litter and elevated
            roosting places recur in descriptions of their behaviour.
          </p>
          <p>
            Free-living feral populations have also established on some islands
            and in some warm regions where escaped or released birds persist
            without direct human management. These populations are usually local
            and variable, and how self-sustaining any given one is depends on
            climate, predators and continued contact with kept birds.
          </p>
        </>
      }
      diet={
        <p>
          Chickens are omnivorous ground foragers. Left to search for
          themselves, they take a mixed diet of seeds and grains, green shoots
          and leaves, fallen fruit, insects, worms, snails and other small
          invertebrates, and they will investigate almost any small item that
          moves. The characteristic method is scratching: the bird rakes
          backwards with its feet to expose the surface beneath litter or soil,
          steps back, and inspects what has been uncovered. Like other birds
          they have no teeth, so food is swallowed whole and ground in the
          muscular gizzard, commonly assisted by small stones and grit picked up
          while foraging. What an individual bird actually eats depends heavily
          on the setting, the season and what is available. This page describes
          foraging ecology only; it does not offer feeding plans, quantities or
          dietary recommendations for birds in anyone&apos;s care.
        </p>
      }
      behavior={
        <>
          <p>
            Comb and wattles are worth describing first because they do more
            than decorate. Both are unfeathered, fleshy and richly supplied with
            blood vessels. Birds do not sweat, and these bare, well-vascularised
            surfaces are understood to help shed excess heat, which is one
            reason comb size tends to differ between breeds developed in hot and
            in cold regions. They also serve in signalling: comb and wattle
            size, colour and condition differ with sex, age, breed and
            individual state, and they are typically more developed in males.
            Several distinct comb shapes — single, rose, pea and others — are
            recognised in breed descriptions.
          </p>
          <p>
            Dust bathing is a routine maintenance behaviour rather than a
            curiosity. A bird works itself into loose dry soil, sand or litter,
            scratches and wing-flicks the material down through its plumage,
            then stands and shakes it out in a cloud. The behaviour is generally
            associated with managing excess feather lipids and with reducing
            external parasites, and it is often social, with several birds using
            the same hollow in succession or crowding into it together.
          </p>
          <p>
            Flocks show documented social structure. Individuals form consistent
            dominance relationships that are expressed through displacement,
            threat postures and pecks, and priority of access to resources
            tends to follow those relationships. The everyday phrase
            &quot;pecking order&quot; is usually traced back to early
            observations of hens, but it is better understood as documented
            flock structure than as a law of nature: the pattern depends on
            group size, stability, familiarity between birds, sex composition
            and available space, it can be reshuffled when birds join or leave,
            and it is not always a tidy straight line from top to bottom.
          </p>
          <p>
            Other behaviours are equally characteristic. Chickens roost off the
            ground at dusk where they can, a habit inherited from an ancestor
            that slept in branches. They are capable of strong flapping flight
            over short distances — enough to reach a branch, fence or low roof —
            but not of sustained flight, and heavy breeds fly far less than
            light ones. Their vocal repertoire is varied, and researchers have
            described context-specific calls, including alarm calls that differ
            according to the kind of threat, along with food-related calls and
            the contact calls that pass between a hen and her chicks. Broodiness
            — the tendency of a hen to sit and incubate — varies markedly
            between breeds and individuals.
          </p>
        </>
      }
      humanInteraction={
        <>
          <p>
            No bird is more closely bound up with human life. Chickens have
            travelled with people along trade routes and voyaging routes for
            thousands of years, and they appear across a very wide range of
            cultures in ritual, symbolism, timekeeping and folklore, from the
            crowing cock as a marker of dawn to the many regional breeds
            developed for appearance and show. In some regions birds were
            historically kept for fighting, a practice now restricted or
            prohibited in many jurisdictions; the legal position differs by
            country and is not something this page states as fact for any
            particular place.
          </p>
          <p>
            The chicken has also had an outsized role in science. The developing
            chicken embryo has long been one of the standard subjects in
            developmental biology, and studies of fowl behaviour contributed
            early evidence about dominance relationships in animal groups.
            Poultry genetics is likewise one of the better-documented areas of
            domestic-animal research, which is why questions about the
            species&apos; ancestry can be discussed in more detail than for most
            domesticated animals.
          </p>
          <p>
            This profile is educational natural history. Questions about the
            health, handling or welfare of individual birds should go to a
            qualified veterinarian and to species-specific welfare
            organisations, not to a general encyclopedia page.
          </p>
        </>
      }
      extraSections={[
        {
          heading: "Distribution",
          body: (
            <>
              <p>
                The chicken&apos;s original range is the range of its wild
                ancestors: red junglefowl occur across parts of South and
                Southeast Asia, and grey junglefowl in peninsular India. From
                that starting point domestic birds spread with people, moving
                through Asia and into western Eurasia, across Africa, and out
                into the Pacific with island-voyaging communities, before
                reaching the Americas in quantity following European contact.
                The general outline is well established; the precise routes and
                timings are an active research area and specific dates should be
                checked against current scholarship rather than assumed.
              </p>
              <p>
                Today chickens are present essentially wherever people live
                permanently, on every continent except Antarctica. Free-living
                feral flocks persist in some warm regions and on some islands.
                Distribution has therefore changed in a way no wild bird&apos;s
                has: it is governed by human settlement and movement, not by
                climate envelopes or migration routes, and it continues to shift
                as breeds are moved between regions.
              </p>
            </>
          ),
        },
        {
          heading: "Senses & Adaptations",
          body: (
            <>
              <p>
                Vision dominates. The eyes are placed towards the sides of the
                head, giving a wide field of view useful for detecting movement
                while the bird&apos;s attention is on the ground, at the cost of
                the narrow binocular overlap a forward-eyed predator enjoys.
                Like other birds, chickens have more cone types than humans do,
                together with coloured oil droplets in the retina, and are
                generally described as having rich colour vision extending into
                shorter wavelengths than people can see. Ground-feeding birds
                also rely on quick head movements to stabilise the visual scene
                between steps.
              </p>
              <p>
                Beyond vision, the bill and feet do much of the investigative
                work, and the bill tip is sensitive enough to sort small items
                from soil and litter. Hearing supports a varied vocal
                repertoire. Structurally the bird is built for walking and
                scratching rather than flying: strong legs and feet, a heavy
                body relative to wing area, and flight muscle suited to short,
                powerful bursts to reach a roost or escape a threat rather than
                to sustained travel. The bare comb and wattles add a
                thermoregulatory surface in an otherwise well-insulated,
                feather-covered animal.
              </p>
            </>
          ),
        },
        {
          heading: "Lifespan & Life Stages",
          body: (
            <>
              <p>
                Chicks are precocial. Incubation typically runs about three
                weeks, and hatchlings emerge covered in down with their eyes
                open. Within roughly a day they walk, follow the hen and peck at
                small items for themselves; the hen leads them to food, calls
                them, and broods them for warmth rather than carrying meals to a
                nest. Down is gradually replaced by juvenile and then adult
                plumage over the following weeks and months. Young birds are
                usually called pullets and cockerels before they are described
                as hens and roosters, and sexual maturity is commonly reached
                somewhere in the region of five to eight months, varying with
                breed, sex, season and conditions.
              </p>
              <p>
                <strong>Free-living and feral birds:</strong> longevity is
                largely set by predation, disease and weather rather than by any
                internal limit, and feral birds are rarely followed as
                individuals, so figures are poorly documented and best described
                qualitatively. Many do not reach the ages that protected birds
                can.
              </p>
              <p>
                <strong>Birds under human care:</strong> individuals kept in
                protected settings are commonly reported to live several years,
                and some reach roughly a decade or more. These figures differ
                widely by breed, sex, environment and record-keeping quality,
                and reported maxima for exceptional individuals should not be
                read as typical. The two situations are not comparable and
                should not be averaged together.
              </p>
            </>
          ),
        },
        {
          heading: "Conservation Context",
          body: (
            <>
              <p>
                The domestic chicken is not a wild species and is not assessed
                for extinction risk in the way wild birds are; abundance is a
                function of how many people keep it. Conservation attention
                within the domestic form is instead directed at breed diversity,
                since many regional and traditional breeds are held in small
                populations, and national and international livestock
                genetic-resource programmes track that diversity.
              </p>
              <p>
                The wild ancestors are a separate matter. Red junglefowl and
                grey junglefowl are wild birds assessed on the IUCN Red List,
                and one documented concern for wild junglefowl is genetic
                introgression from domestic birds where the two overlap, in
                addition to habitat change and hunting pressure. No conservation
                status is permanent: categories are reassessed as evidence
                changes, so the current listing for any junglefowl species
                should be read directly from the{" "}
                <a
                  href="https://www.iucnredlist.org/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  IUCN Red List
                </a>{" "}
                rather than taken from a secondary page.
              </p>
            </>
          ),
        },
        {
          heading: "What the Name Covers",
          body: (
            <>
              <p>
                &quot;Chicken&quot; refers to the domestic bird as a whole, at
                any age and either sex. English keeps separate words for the
                life stages and sexes: an adult female is a hen, an adult male a
                rooster or cock, young birds are pullets and cockerels, and
                newly hatched birds are chicks. Usage varies by region — cock is
                the older and still standard term in British English, rooster is
                usual in North American English — and a great many breed and
                landrace names sit beneath the single word &quot;chicken&quot;.
              </p>
              <p>
                The scientific naming is not fully settled either. The domestic
                bird is most often written <em>Gallus gallus domesticus</em>,
                treating it as a domesticated form of the red junglefowl,{" "}
                <em>Gallus gallus</em>; some authorities instead use{" "}
                <em>Gallus domesticus</em> as a species name. Both conventions
                appear in reputable sources, and the choice reflects a broader
                disagreement about how domesticated animals should be named
                relative to their wild ancestors.
              </p>
              <p>
                Two further clarifications are worth making. &quot;Fowl&quot; is
                a broader and older word that in different contexts covers
                chickens specifically, gallinaceous birds generally, or birds
                kept by people; and &quot;junglefowl&quot; refers to the wild
                <em> Gallus</em> species of Asia, not to feral chickens, even
                though the two are sometimes confused where their ranges meet.
              </p>
            </>
          ),
        },
        {
          heading: "Domestic, Feral and Wild",
          body: (
            <>
              <p>
                The chicken is a fully domesticated animal, descended chiefly
                from the red junglefowl (<em>Gallus gallus</em>) of South and
                Southeast Asia. Genetic evidence has also indicated a
                contribution from the grey junglefowl (
                <em>Gallus sonneratii</em>) of peninsular India, an
                introgression commonly associated with the yellow skin found in
                many breeds. That grey-junglefowl contribution is best stated
                cautiously: it is a well-discussed finding rather than a settled
                account of the whole genome, and the relative contributions of
                the <em>Gallus</em> species remain under study. Domestication
                took place several thousand years ago, and both its timing and
                whether it happened once or several times are debated, so a
                single confident date should be treated with suspicion.
              </p>
              <p>
                Feral chickens are domestic birds living without direct human
                management, and they are not the same thing as wild junglefowl.
                Feral flocks tend to retain domestic plumage variation and breed
                traits, whereas wild junglefowl are a distinct wild species with
                their own ecology and conservation assessment. Where feral
                chickens and wild junglefowl overlap in Asia the distinction can
                genuinely blur through interbreeding, which is precisely why the
                introgression question matters to people studying wild
                populations.
              </p>
            </>
          ),
        },
      ]}
      faqs={[
        {
          question: "What is the domestic chicken descended from?",
          answer:
            "The domestic chicken is generally regarded as a domesticated form of the red junglefowl (Gallus gallus), a ground-dwelling bird of South and Southeast Asian forest edges and scrub. Genetic work has also suggested a contribution from the grey junglefowl (Gallus sonneratii), often linked to the yellow skin seen in many breeds, though the details are still discussed. The timing and number of domestication events remain debated, so treat any single date cautiously.",
        },
        {
          question: "What are a chicken’s comb and wattles for?",
          answer:
            "The comb on top of the head and the wattles beneath the bill are fleshy, unfeathered and richly supplied with blood vessels. Because birds do not sweat, these bare surfaces are understood to help shed excess heat, and they also function in signalling: their size, colour and condition differ with sex, breed, age and individual state. Combs are typically larger in males, and breed standards recognise several distinct comb shapes.",
        },
        {
          question: "Why do chickens dust bathe?",
          answer:
            "Dust bathing is a routine maintenance behaviour rather than an oddity. A chicken settles into loose dry soil, sand or litter, scratches and wing-flicks the material through its plumage, then stands and shakes it out. Researchers associate the behaviour with managing excess feather oils and with reducing external parasites, and it is often performed socially, with several birds using the same hollow in turn.",
        },
        {
          question: "Is the “pecking order” in a flock real?",
          answer:
            "Groups of chickens do form consistent dominance relationships, and the everyday phrase ‘pecking order’ is usually traced back to early observations of hens. It is better read as documented flock structure than as a fixed law: relationships depend on group size, stability, familiarity, sex composition and available space, they can shift when birds are added or removed, and they are not always a simple straight line from top to bottom.",
        },
        {
          question: "Can newly hatched chicks walk and feed themselves?",
          answer:
            "Chicken chicks are precocial. They hatch covered in down with their eyes open, and within roughly a day they are walking, following the hen and pecking at small items for themselves. The hen leads them to food and broods them for warmth rather than delivering meals to a nest, which is the opposite of the helpless, naked hatchlings produced by many songbirds. Independence develops gradually over the following weeks.",
        },
      ]}
      quickFacts={[
        { label: "Group", value: "Domestic bird; order Galliformes, family Phasianidae" },
        {
          label: "Scientific naming",
          value: "Usually Gallus gallus domesticus; some authorities use Gallus domesticus",
        },
        {
          label: "Wild ancestor",
          value: "Chiefly red junglefowl (Gallus gallus); a grey junglefowl contribution is also proposed",
        },
        {
          label: "Adult weight",
          value: "Extremely variable by breed and sex; typically about 0.5–4.5 kg (roughly 1–10 lb)",
        },
        {
          label: "Diet",
          value: "Omnivorous ground forager: seeds, green plant material, insects and other small invertebrates",
        },
        {
          label: "Notable traits",
          value: "Fleshy comb and wattles; scratch-and-peck foraging; dust bathing; roosting off the ground",
        },
        {
          label: "Young",
          value: "Precocial — down-covered, eyes open, walking and pecking within about a day of hatching",
        },
        {
          label: "Conservation status",
          value: "Domestic form not assessed as a wild species; wild junglefowl are assessed separately — check the IUCN Red List",
        },
      ]}
      relatedLinks={[
        {
          label: "Animal Domestication",
          href: "/animal-domestication",
          description: "How wild species became domestic ones, and what domestication does and does not mean",
        },
        {
          label: "Animal Food & Diet",
          href: "/animal-food-and-diet",
          description: "Educational background on what animals eat, with care questions routed to professionals",
        },
        {
          label: "Domestic Animals",
          href: "/domestic-animals",
          description: "Companion, working and farmed species kept separate from wild fauna",
        },
        {
          label: "Wild Turkey Profile",
          href: "/animals/wild-turkey",
          description: "A large wild galliform of North America, and a useful contrast to the domestic chicken",
        },
        {
          label: "Duck Profile",
          href: "/animals/duck",
          description: "A waterbird group with a very different body plan and foraging style",
        },
        {
          label: "Goose Profile",
          href: "/animals/goose",
          description: "Another widely kept bird, with its own wild ancestry and social behaviour",
        },
        {
          label: "Birds Encyclopedia",
          href: "/animal-encyclopedia/birds",
          description: "Browse bird profiles across the site",
        },
      ]}
    />
  );
}
