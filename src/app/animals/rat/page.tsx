import type { Metadata } from "next";
import AnimalProfileLayout from "@/components/AnimalProfileLayout";
import { ANIMAL_SOURCES } from "@/lib/educational/animal-sources";
import {
  getAnimalGalleryImages,
  getAnimalImage,
  getAnimalOgImage,
} from "@/lib/images/animal-images";
import { buildArticleMetadata } from "@/lib/metadata";

const PATH = "/animals/rat";
const PUBLISHED = "2026-08-04";
const MODIFIED = "2026-08-04";

const TITLE = "Rat — Brown Rat, Black Rat, and What the Genus Rattus Covers";
const DESC =
  "Group-level profile of the rats of the genus Rattus: the brown rat Rattus norvegicus and black rat Rattus rattus, how a rat differs from a mouse by proportion, and why wild, commensal and domestic rats are not the same animal.";

export const metadata: Metadata = buildArticleMetadata({
  title: TITLE,
  description: DESC,
  path: PATH,
  publishedTime: PUBLISHED,
  modifiedTime: MODIFIED,
  ogImage: getAnimalOgImage("rat"),
});

export default function RatPage() {
  return (
    <AnimalProfileLayout
      commonName="Rat"
      scientificName="genus Rattus"
      pageTitle={TITLE}
      description={DESC}
      path={PATH}
      parentCategory="Mammals"
      parentCategoryHref="/animal-encyclopedia/mammals"
      tags={["Mammals", "Rodents", "Commensal species"]}
      image={getAnimalImage("rat") ?? undefined}
      galleryImages={getAnimalGalleryImages("rat")}
      sources={ANIMAL_SOURCES["rat"]}
      publishedDate={PUBLISHED}
      modifiedDate={MODIFIED}
      overview={
        <>
          <p>
            Used strictly, &ldquo;rat&rdquo; means a member of the genus{" "}
            <em>Rattus</em>, a group of medium-sized Old World rodents in the family
            Muridae that contains several dozen recognised species. Two of them account
            for almost everything written about rats in English. The brown rat,{" "}
            <em>Rattus norvegicus</em>, is the animal usually meant by the bare word and
            is also the ancestor of the fancy rat and of the laboratory rat. The black
            rat,{" "}
            <em>Rattus rattus</em>, is the slimmer, longer-tailed, more arboreal species
            that travelled the world&apos;s sea routes long before its relative did. This
            profile is written at group level and takes those two as its reference points.
          </p>
          <p>
            The remaining species of <em>Rattus</em> are far less familiar. Most are
            native to South and Southeast Asia, New Guinea and the islands of the
            Indo-Pacific, and many are restricted to a single island, mountain range or
            forest type. They are ordinary wild rodents in ordinary wild habitats, and
            almost none of the popular associations attached to the word describe them at
            all. Any claim about &ldquo;rats&rdquo; that is really a claim about
            commensal brown rats in cities should not be carried across to them.
          </p>
          <p>
            Three contexts run through this page and are kept deliberately apart.{" "}
            <strong>Wild rats</strong> live independently of people, as most species in
            the genus do. <strong>Commensal rats</strong> are populations of the brown
            and black rat living in and around human buildings, farms, stores, sewers and
            ships, exploiting what human activity makes available without being bred or
            managed by anyone. <strong>Domestic rats</strong> &mdash; the fancy rat kept
            as a companion animal and the laboratory rat used in research &mdash; are
            populations of <em>Rattus norvegicus</em> shaped by many generations of
            selection under human care. What is true of one of these is very often untrue
            of the others.
          </p>
        </>
      }
      habitat={
        <>
          <p>
            The genus as a whole is a genus of terrestrial and scansorial forest and
            grassland rodents. Wild species of <em>Rattus</em> occupy tropical and
            subtropical forest, montane forest, bamboo, scrub, grassland, marsh edges and
            cultivated land across Asia, New Guinea, Australia &mdash; including temperate
            south-eastern Australia and Tasmania, where the bush rat and the swamp rat are
            widespread native species &mdash; and the Indo-Pacific islands, and different
            species partition those habitats by
            elevation, structure and moisture. Several are described as strongly
            associated with intact forest and are seldom found near people.
          </p>
          <p>
            The brown rat is best understood as a ground-dwelling generalist that has
            attached itself to human landscapes. It is a capable digger and typically
            occupies burrow systems in banks, embankments, waste ground, hedgerows and
            beneath structures, and it is strongly associated with water and with damp,
            low-lying situations; it swims readily. The black rat is the more
            three-dimensional animal of the two, more inclined to climb and to nest above
            ground &mdash; in roof spaces, palm crowns, tree cavities and dense
            vegetation. Where the two overlap, that vertical difference is often the
            clearest way they divide up the same site.
          </p>
          <p>
            Both species also live independently of buildings in parts of their range, in
            field margins, riverbanks, coastal scrub, plantations and island habitats.
            Whether a given population is commensal, seasonally commensal or fully
            free-living varies with region, climate and season, and populations can shift
            between those patterns rather than belonging permanently to one.
          </p>
        </>
      }
      diet={
        <>
          <p>
            Rats are omnivorous generalists, and that flexibility is central to what the
            genus is. Wild species are usually described as taking seeds, fruit, nuts,
            shoots, roots, fungi and invertebrates, with the balance shifting through the
            year as different foods become available. The brown rat is the broadest feeder
            of the two familiar species and is reported taking grain and seed, fruit,
            invertebrates, small vertebrates, eggs, carrion, fish and refuse. The black
            rat is generally described as more strongly frugivorous and granivorous, with
            a marked reliance on fruit, seed and nuts where it lives arboreally.
          </p>
          <p>
            Brown rats are noted for how they approach unfamiliar food. Individuals
            commonly sample a small amount of something new and then leave it, returning
            later if nothing follows &mdash; a cautious pattern often discussed under the
            heading of neophobia, and one reason the species is a difficult subject for
            simple assumptions about feeding. Young rats also appear to be influenced by
            what other members of their group have recently eaten, which is generally
            interpreted as social transmission of food preference.
          </p>
          <p>
            Continuously growing incisors mean that gnawing is a routine part of a
            rat&apos;s life and is not confined to food. This section describes feeding
            ecology as it is observed in the wild and in commensal settings. It is not a
            feeding guide, and any question about what an animal under human care should
            be given belongs with a qualified veterinarian rather than with a
            natural-history page.
          </p>
        </>
      }
      behavior={
        <>
          <p>
            Rats are typically most active at night and around dusk, though commensal
            animals can shift their activity in response to disturbance, lighting and the
            rhythms of the places they live in. They move along established routes and
            follow walls, edges and pipes rather than crossing open ground, and both
            familiar species are strong climbers, with the black rat the more confident of
            the two. Brown rats swim and dive well; black rats generally do so less
            readily.
          </p>
          <p>
            Social organisation is complex and varies with species and circumstance. Brown
            rats are commonly described as living in colonies built around related
            females, with burrow systems shared and defended, dominance relationships
            among males, and considerable tolerance between familiar animals alongside
            hostility toward strangers. Scent does much of the work: urine marks,
            glandular secretions and individual odour carry information about identity,
            group membership, status and reproductive condition. Rats also produce a wide
            range of vocalisations, many of them ultrasonic and inaudible to people, in
            social, exploratory and distress contexts.
          </p>
          <p>
            The brown rat is one of the most heavily studied mammals in behavioural
            science, and it is worth being careful about what that literature shows.
            Rats learn quickly, navigate familiar space well, and are frequently reported
            engaging in social behaviours such as grooming, huddling and rough-and-tumble
            play. Much of that work was done on domesticated laboratory animals in
            controlled conditions, and how far each finding extends to wild rats is a live
            question rather than a settled one. FaunaHub does not rank animals by
            intelligence, and none of this should be read as such a ranking.
          </p>
        </>
      }
      humanInteraction={
        <>
          <p>
            Few wild mammals have travelled further with people. The black rat appears to
            have spread west out of Asia along ancient trade and shipping routes, becoming
            established around the Mediterranean and then across much of Europe; the brown
            rat followed far later, expanding widely through Europe and onward by sea from
            roughly the eighteenth century. Both now reach nearly everywhere people have
            gone. That relationship is commensal rather than domestic: these are wild
            animals exploiting human environments, not animals bred, tamed or managed by
            anyone.
          </p>
          <p>
            The practical consequences of that association are long documented &mdash;
            loss and contamination of stored food, gnawing damage to materials and
            fittings, and a role in the ecology of a number of pathogens, including a
            historically important part in the transmission cycles of plague. Guidance on
            rodents in buildings, and on any health question associated with them, is the
            province of public-health authorities and qualified professionals; none is
            offered here.
          </p>
          <p>
            A separate relationship is domestic and scientific. Wild-caught brown rats
            taken into captivity in nineteenth-century Britain &mdash; largely from the
            stock assembled for rat-baiting, a blood sport of the period &mdash; produced
            the first tame colour varieties, and those animals became both the fancy rat
            kept as a companion and exhibition animal and the foundation of the
            laboratory rat. From around the turn of the twentieth century standardised
            laboratory lines, many of them albino, were developed from that domestic
            material, and the brown rat went on to become one of the principal mammalian
            model organisms in biomedical research. Any question about the health,
            handling, housing or welfare of a rat kept under human care should go to a
            qualified veterinarian with small-mammal experience and to recognised
            species-specific welfare organisations.
          </p>
        </>
      }
      extraSections={[
        {
          heading: "Scientific Classification",
          body: (
            <>
              <p>
                Rats in the strict sense belong to the kingdom Animalia, phylum Chordata,
                class Mammalia, order Rodentia, family Muridae, subfamily Murinae, genus{" "}
                <em>Rattus</em>. Muridae is the largest family of mammals, and Murinae
                &mdash; the Old World rats and mice &mdash; is its largest subfamily,
                which is why so many superficially similar rodents across Africa, Eurasia
                and Australasia sit close to <em>Rattus</em> without belonging to it.
              </p>
              <p>
                The genus contains several dozen accepted species, and the exact number
                changes as populations are reassessed with genetic evidence; species
                boundaries within some Southeast Asian and New Guinean groups are still
                being revised, so different references may give different totals. The two
                species treated as reference points here are the brown rat,{" "}
                <em>Rattus norvegicus</em>, and the black rat, <em>Rattus rattus</em>.
                The house mouse, <em>Mus musculus</em>, sits in the same subfamily but a
                different genus, which is why rats and mice look related without being
                interchangeable.
              </p>
              <p>
                For any named species, current classification, synonymy and range are best
                taken from an authoritative taxonomic database or the IUCN Red List
                assessment for that species rather than generalised from a group-level
                page such as this one.
              </p>
            </>
          ),
        },
        {
          heading: "Identification",
          body: (
            <>
              <p>
                The single most useful identification skill here is telling a rat from a
                mouse, and it is done on <strong>proportion, not absolute size</strong>.
                A half-grown rat is roughly the size of an adult mouse, and that is where
                nearly every real-world misidentification happens. Judging by length or
                weight alone will therefore fail exactly when it matters.
              </p>
              <p>
                Four proportional features separate them reliably. A rat has{" "}
                <strong>ears that look small relative to the head</strong>, while a
                mouse&apos;s ears look conspicuously large for its head. A rat has a{" "}
                <strong>heavier, blunter muzzle</strong>; a mouse&apos;s face tapers to a
                fine point. A rat has a <strong>thicker, coarser, more obviously scaly
                tail</strong>, whereas a mouse&apos;s tail is slender and finer. And a rat
                has <strong>noticeably larger hind feet</strong> in proportion to its
                body. Taken together, these give a young rat a chunky, heavy-footed,
                blunt-faced look that an adult mouse does not have, however similar the
                two may be in overall length.
              </p>
              <p>
                Separating the two familiar rats from each other also rests on proportion.
                The black rat is the slimmer, finer-boned animal, with larger and thinner
                ears, a more pointed face, and a tail that is usually longer than its head
                and body combined. The brown rat is heavier and more thickset, with
                smaller ears set closer to the head and a tail usually shorter than its
                head and body. Coat colour is an unreliable guide in both directions, and
                the English names are actively misleading on this point.
              </p>
            </>
          ),
        },
        {
          heading: "Appearance",
          body: (
            <>
              <p>
                Rats have the general murine build: a compact head, a pointed but
                substantial muzzle, prominent dark eyes, long vibrissae, short limbs, and
                a long, sparsely haired, ring-scaled tail. The fur is typically a
                grizzled mixture of dark and lighter hairs on the upperparts, with paler
                and often greyish or buff underparts, and the pelage is usually coarser
                than a mouse&apos;s.
              </p>
              <p>
                Adult brown rats are commonly reported at somewhere around 20&ndash;27 cm
                in head and body length, with a tail a little shorter than that, and body
                weights most often given in the region of about 200&ndash;500 g. Black
                rats are typically lighter and slimmer, frequently reported at roughly
                16&ndash;22 cm in head and body with a longer tail, and weights commonly
                in the region of about 75&ndash;230 g. All of these figures shift
                substantially with sex, age, season, food supply, population and whether
                the animals are free-living or held under human care, and exceptionally
                large individuals attract attention precisely because they are unusual.
                Treat any single quoted number as an approximation.
              </p>
              <p>
                Coat colour varies more than the names suggest. Brown rats range from
                grizzled grey-brown through warm agouti to dark, and black rats occur both
                in a dark grey-black form and in browner forms with paler underparts, so
                a dark rat is not necessarily a black rat. Domestic fancy rats depart
                further still, with a wide range of selected colours, markings and coat
                types &mdash; including the albino form long associated with laboratory
                lines &mdash; none of which occurs commonly in wild populations.
              </p>
            </>
          ),
        },
        {
          heading: "Distribution",
          body: (
            <>
              <p>
                The natural range of the genus is Asian and Indo-Pacific. Most species of{" "}
                <em>Rattus</em> are native to South and Southeast Asia, southern China,
                New Guinea, Australia and the archipelagos between them, and a good number
                are island endemics with very small ranges. The Australian native species
                are not confined to the tropical north: <em>Rattus fuscipes</em>, the bush
                rat, runs down the eastern seaboard into Victoria and reappears in
                south-western Western Australia, and <em>Rattus lutreolus</em>, the swamp
                rat, reaches Tasmania. The brown rat is
                generally traced to north-eastern Asia, and the black rat to the Indian
                subcontinent and adjacent Southeast Asia, though the details of both
                origins continue to be refined.
              </p>
              <p>
                What happened next is a story about ships rather than about biology. The
                black rat moved west with maritime and overland trade over a long period,
                becoming widespread around the Mediterranean and through much of Europe,
                and subsequently reached the Americas, Africa, Australia and a very large
                number of islands with European seafaring. The brown rat expanded much
                later, spreading through Europe and then worldwide by sea, and in many
                temperate regions it has displaced the black rat from buildings while the
                black rat has persisted in warmer climates, ports and roof spaces.
              </p>
              <p>
                Between them the two species now occur on every continent except
                Antarctica, in association with people, and on thousands of islands that
                previously had no ground-dwelling mammals at all. That distribution is not
                a natural range: it is a map of human transport, settlement and storage
                laid over the world. By contrast, the great majority of{" "}
                <em>Rattus</em> species have never left their native ranges, and current
                range maps for any of them should be taken from the IUCN Red List entry
                for that species.
              </p>
            </>
          ),
        },
        {
          heading: "Adaptations",
          body: (
            <>
              <p>
                Rats are built for close-quarters, low-light living. Smell is the dominant
                sense, used for individual and colony recognition, for marking routes, for
                assessing reproductive condition and for finding food. Touch is almost as
                important: long whiskers are swept rhythmically across surfaces, allowing
                an animal to follow a wall or tunnel confidently in complete darkness.
                Hearing extends well above the human range, which is why so much rat
                communication is inaudible to us. Vision is generally described as suited
                to detecting movement in dim light rather than to fine detail or rich
                colour, and the eyes sit high and to the side for a wide field of view.
              </p>
              <p>
                Physically, the genus combines a compact, compressible body with strong
                claws, a long balancing tail and considerable climbing ability. Rats can
                pass through openings that look far too small for them, but the mechanism
                is usually misdescribed: a rat cannot collapse its skeleton, and like other
                rodents it retains collar bones. The limiting dimension is the width of the
                skull, and a gap the head fits through is one the rest of the body can
                generally be worked through as well. Ever-growing incisors carry hard
                enamel on the front face with softer dentine behind, so gnawing wears the
                two at different rates and maintains a chisel edge, letting a rat open hard
                seeds and much tougher material besides. A large caecum supports the digestion of plant
                material, and the digestive anatomy of rats is such that they are unable
                to vomit &mdash; a well-documented peculiarity of the group that is often
                linked to their cautious sampling of unfamiliar food.
              </p>
              <p>
                Behavioural flexibility may be the most important adaptation of all in the
                two commensal species: a broad diet, tolerance of disturbed habitats,
                rapid reproduction, and a wary, exploratory approach to change together
                explain far more about their success alongside people than any single
                physical trait. As with all functional interpretations, these explanations
                reflect current understanding and may be refined.
              </p>
            </>
          ),
        },
        {
          heading: "Life Cycle & Reproduction",
          body: (
            <>
              <p>
                Reproduction in the brown and black rat is rapid where conditions allow.
                Gestation is short &mdash; commonly reported at around three weeks &mdash;
                and litters typically contain several young, often somewhere in the range
                of about six to twelve, with smaller and larger litters both recorded.
                Females can produce several litters in a year, and in warm, sheltered,
                food-rich sites breeding may continue through much of the year, while in
                colder or drier regions it is tightly seasonal. Reported figures vary
                between studies, sites and populations.
              </p>
              <p>
                Young rats are altricial. They are born blind, deaf and effectively
                hairless in a nest, develop fur over the following days, open their eyes
                within a couple of weeks or so, and are generally weaned at around three
                to four weeks. Sexual maturity typically arrives within a few months and
                can come sooner where food is abundant. That combination of short
                gestation, large litters, early maturity and repeated breeding is why rat
                populations can build and crash quickly when conditions change.
              </p>
              <p>
                In the less familiar wild species of the genus, reproductive patterns are
                far more variable and in several cases poorly documented, with smaller
                litters and more strongly seasonal breeding reported for some forest
                species. This section describes reproductive ecology as it is observed. It
                is not breeding guidance, and nothing here should be read as instruction
                for animals under human care.
              </p>
            </>
          ),
        },
        {
          heading: "Lifespan",
          body: (
            <>
              <p>
                <strong>In the wild and in commensal settings:</strong> rat lifespans are
                short. Free-living brown and black rats are generally reported to average
                well under a year, with predation by owls, birds of prey, foxes,
                mustelids, snakes, monitor lizards and domestic cats, together with cold,
                food shortage, competition and disease, removing the great majority before
                a second breeding season. A minority of individuals live appreciably
                longer. These figures are estimates drawn from trapping and
                mark-recapture work and differ between studies, seasons and sites.
              </p>
              <p>
                <strong>Under human care:</strong> rats held in protected conditions,
                including fancy rats and laboratory animals, are commonly described as
                living somewhere in the region of about two to three years, with
                individuals occasionally exceeding that. These figures come from
                environments without predators, with reliable food and with veterinary
                oversight, and they vary with line, sex and the conditions in which the
                animals are kept.
              </p>
              <p>
                The two sets of numbers are kept apart on purpose. Captive longevity
                describes what a rat can live to in the absence of the pressures that
                actually end wild lives, and reading it back onto free-living animals
                &mdash; or the reverse &mdash; produces a misleading picture of both.
              </p>
            </>
          ),
        },
        {
          heading: "Conservation Context",
          body: (
            <>
              <p>
                The brown rat and the black rat are both extremely widespread and have
                been assessed in recent years as being of least concern. Conservation
                categories are reassessed as new information arrives and can move in
                either direction, so nothing on this page should be treated as a permanent
                status; for the current category, criteria, range and assessment date for{" "}
                <em>Rattus norvegicus</em>, <em>Rattus rattus</em> or any other species,
                consult the IUCN Red List entry for that species directly.
              </p>
              <p>
                The security of those two says nothing about the genus as a whole. A
                substantial number of <em>Rattus</em> species are narrow-range island or
                montane endemics, and several have been assessed in threatened categories
                or are considered extinct, chiefly through habitat loss and the arrival of
                introduced predators and competitors on small islands. The commensal
                success of two species has, in effect, obscured the vulnerability of many
                of their relatives.
              </p>
              <p>
                The genus also sits on the other side of the conservation ledger.
                Introduced brown and black rats are among the most consequential invasive
                mammals on islands worldwide, associated with declines and extinctions of
                seabirds, land birds, reptiles, invertebrates and plants that evolved
                without ground predators, and island rat-eradication projects are
                undertaken as conservation work by national agencies and conservation
                organisations. Abundance and conservation concern are not opposites, and
                an animal can be both a species of least concern in its own right and a
                serious threat somewhere it does not belong.
              </p>
            </>
          ),
        },
        {
          heading: "What the Name Covers",
          body: (
            <>
              <p>
                In its strict sense, &ldquo;rat&rdquo; means a species of{" "}
                <em>Rattus</em>. In everyday use it is a description of size and shape
                applied to a great many rodents that are not in the genus at all: woodrats
                and pack rats of the Americas, kangaroo rats, bamboo rats, cane rats,
                giant pouched rats, and the muskrat, which is a large aquatic relative of
                the voles. The distinction is not merely pedantic: the rats trained for
                landmine and tuberculosis detection, often reported simply as
                &ldquo;detection rats&rdquo;, are African giant pouched rats of the genus{" "}
                <em>Cricetomys</em>, not <em>Rattus</em> at all. The naked mole-rat is
                another clear case &mdash; it is not <em>Rattus</em>, is not closely
                related to it, and belongs to a quite different branch of the rodent family
                tree; FaunaHub covers that species on its own page. A number of unrelated
                animals outside Rodentia have also picked up &ldquo;rat&rdquo; in their
                common names.
              </p>
              <p>
                Regional naming adds more confusion. <em>Rattus norvegicus</em> is called
                the brown rat, common rat, sewer rat, street rat and Norway rat, the last
                a historical misnomer since the species did not originate in Norway.{" "}
                <em>Rattus rattus</em> is called the black rat, ship rat, roof rat and
                house rat, and, as noted above, it is frequently not black. Because both
                names promise a colour the animal may not have, colour is the worst
                available basis for identifying either.
              </p>
              <p>
                Two other confusions are worth naming. The first is{" "}
                <strong>rat and mouse</strong>: they are different genera in the same
                subfamily, separated in the field by proportion rather than size, and a
                juvenile rat passed off as an adult mouse is the standard error &mdash;
                see the Identification section above. The second is{" "}
                <strong>wild and domestic</strong>: the fancy rat and the laboratory rat
                are the same species as the brown rat but descend from wild-caught animals
                taken into captivity in the nineteenth century, largely from rat-baiting
                stock, and later from standardised laboratory lines. Generations of
                selection have changed coat, colour, size, temperament, reproductive
                pattern and physiology, and a statement about one of these populations
                often does not describe the other. Whether rats may be kept, bred, sold or
                used in research varies between countries and smaller jurisdictions and is
                not stated here; check current local law.
              </p>
            </>
          ),
        },
      ]}
      faqs={[
        {
          question: "How do you tell a rat from a mouse?",
          answer:
            "Read the parts against each other rather than measuring the whole animal. On a rat the ears look small beside a heavy, blunt muzzle, the tail is thick with visible scale rings, and the hind feet are broad. On a mouse the face tapers to a fine point, the ears look outsized for the head, and the tail is slender. Because the two overlap in weight while a rat is still growing, size on its own settles nothing, and fur colour is unreliable in both.",
        },
        {
          question: "Is a mole-rat a kind of rat?",
          answer:
            "No. Despite the name, African mole-rats — including the naked mole-rat, Heterocephalus glaber — are not members of the genus Rattus and are not closely related to it. They belong to a quite different branch of the rodent family tree, live underground in Africa, and differ from true rats in body plan, biology and social organisation. FaunaHub covers them separately. The word rat inside a common name is a shape description, not a statement of ancestry.",
        },
        {
          question: "Are pet fancy rats the same animal as wild rats?",
          answer:
            "They are the same species as the brown rat, Rattus norvegicus, but not the same animal in any practical sense. Fancy rats descend from wild-caught brown rats taken into captivity in the nineteenth century, largely from rat-baiting stock, and later from laboratory lines bred for standardised genetics. Many generations of selection have changed coat, colour, size, temperament and physiology, so findings about one population should not be read across to the other.",
        },
        {
          question: "How long do rats live?",
          answer:
            "The two settings should never be merged. Free-living brown and black rats are generally reported to live well under a year on average, with predation, weather, food shortage, competition and disease removing most animals before a second breeding season; a minority survive appreciably longer. Rats kept under human care, protected from predators and with reliable food, are commonly described as living somewhere around two to three years, varying with line, sex and conditions.",
        },
        {
          question: "Why is the black rat sometimes not black?",
          answer:
            "Coat colour is a poor guide to species in this genus. Black rats, Rattus rattus, occur in dark grey-black and in browner, paler-bellied forms, while brown rats, Rattus norvegicus, range from grizzled grey-brown to dark. Reliable separation rests on proportion instead: the black rat is the slimmer animal, with larger, thinner ears and a tail usually longer than its head and body, whereas the brown rat is heavier with a shorter tail.",
        },
      ]}
      quickFacts={[
        {
          label: "Group",
          value:
            "Rats of the genus Rattus, family Muridae; several dozen species, most of them Asian and Indo-Pacific",
        },
        {
          label: "Reference species",
          value:
            "Brown rat (Rattus norvegicus), the animal usually meant, and black rat (Rattus rattus)",
        },
        {
          label: "Typical size",
          value:
            "Brown rat head and body commonly about 20–27 cm with a slightly shorter tail; black rat typically smaller at roughly 16–22 cm with a longer tail",
        },
        {
          label: "Typical weight",
          value:
            "Brown rats most often reported around 200–500 g, black rats around 75–230 g; varies with sex, age, season, site and whether the animals are free-living or held under human care",
        },
        {
          label: "Diet",
          value:
            "Omnivorous generalists: seeds, grain, fruit, shoots, fungi, invertebrates, small vertebrates, eggs and carrion; commensal animals also take stored and discarded human food",
        },
        {
          label: "Activity",
          value:
            "Mainly nocturnal and crepuscular; brown rats burrow and swim well, black rats climb and nest above ground",
        },
        {
          label: "Notable trait",
          value:
            "Told from a mouse by proportion, not size: proportionally small ears, a blunt heavy muzzle, a thick scaly tail and large hind feet",
        },
        {
          label: "Life stages",
          value:
            "Altricial young; gestation typically about three weeks, litters often around six to twelve, weaning near three to four weeks",
        },
        {
          label: "Conservation status",
          value:
            "Brown and black rat both widespread and assessed as least concern in recent assessments; several narrow-range Rattus species are threatened or extinct — check the current IUCN Red List entry per species",
        },
      ]}
      relatedLinks={[
        {
          label: "Mouse Profile",
          href: "/animals/mouse",
          description: "The small murids the rat is most often confused with",
        },
        {
          label: "Naked Mole-Rat Profile",
          href: "/animals/mole-rat",
          description: "An unrelated African rodent that only shares the name",
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
          label: "Animal Senses & Adaptations",
          href: "/animal-senses-and-adaptations",
          description: "How animals sense and survive their habitats",
        },
        {
          label: "Animal Lifespans",
          href: "/animal-lifespans",
          description: "Why wild and captive lifespans differ",
        },
        {
          label: "Small Pets",
          href: "/small-pets",
          description: "Small domestic mammals covered on FaunaHub",
        },
      ]}
    />
  );
}
