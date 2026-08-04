import type { Metadata } from "next";
import AnimalProfileLayout from "@/components/AnimalProfileLayout";
import { ANIMAL_SOURCES } from "@/lib/educational/animal-sources";
import { getAnimalGalleryImages, getAnimalImage, getAnimalOgImage } from "@/lib/images/animal-images";
import { buildArticleMetadata } from "@/lib/metadata";

const PATH = "/animals/gerbil";
const TITLE = "Gerbil: Dry-Country Rodents of the Subfamily Gerbillinae";
const DESC =
  "Gerbils are burrowing rodents of the subfamily Gerbillinae, adapted to arid and semi-arid country. A group-level profile, with the Mongolian gerbil as the familiar reference species.";

export const metadata: Metadata = buildArticleMetadata({
  title: TITLE,
  description: DESC,
  path: PATH,
  publishedTime: "2026-08-04",
  modifiedTime: "2026-08-04",
  ogImage: getAnimalOgImage("gerbil"),
});

export default function GerbilPage() {
  return (
    <AnimalProfileLayout
      commonName="Gerbil"
      scientificName="subfamily Gerbillinae"
      pageTitle={TITLE}
      description={DESC}
      path={PATH}
      parentCategory="Mammals"
      parentCategoryHref="/animal-encyclopedia/mammals"
      tags={["Mammals", "Rodents", "Arid adaptations"]}
      image={getAnimalImage("gerbil") ?? undefined}
      galleryImages={getAnimalGalleryImages("gerbil")}
      sources={ANIMAL_SOURCES["gerbil"]}
      publishedDate="2026-08-04"
      modifiedDate="2026-08-04"
      factsHeaderNote="This is a group-level page for the subfamily Gerbillinae, which covers many species. Where a specific figure is given, the reference species is the Mongolian gerbil (Meriones unguiculatus), the species usually meant when people say “gerbil”."
      overview={
        <>
          <p>
            Gerbils are small burrowing rodents of the subfamily Gerbillinae, part of the large rodent family Muridae. The subfamily is broad, containing on the order of a hundred species depending on which classification is followed, and it includes animals also known as jirds, sand rats and the great gerbil of Central Asia. Most are built along similar lines: a slender body, long hind feet, large dark eyes, and a long tail that is fully furred and usually finished with a small tuft at the tip.
          </p>
          <p>
            The species most people picture is the Mongolian gerbil, <em>Meriones unguiculatus</em>, a steppe and semi-desert animal from eastern Asia that is also the gerbil most often kept by people. It is a useful reference point, but it should not be taken as a stand-in for the whole group. Gerbils range from tiny sand-dwelling species of North African dunes to the much larger great gerbil of Central Asian deserts, and their size, colouring and habits vary accordingly.
          </p>
          <p>
            What unites the subfamily is a set of adaptations to dry country: efficient kidneys that concentrate urine and conserve water, extensive burrow systems that buffer heat and dryness, and, in many species, enlarged ear structures that appear to sharpen the detection of low-frequency sounds. Individual figures in this profile are approximate and vary by species, sex, region and season, and are best checked against authoritative mammal references such as the IUCN Red List, the American Society of Mammalogists, or a national natural history museum.
          </p>
        </>
      }
      habitat={
        <>
          <p>
            Gerbils are, as a group, animals of open and dry landscapes: deserts and their margins, sandy plains and dune fields, gravel flats, dry grasslands, steppe and semi-arid scrub. A few species also occur in more open savanna or in agricultural land that has replaced natural cover. What they generally share is a preference for ground that can be dug and for terrain with sparse vegetation and clear lines of sight, rather than for dense forest or permanently wet habitat.
          </p>
          <p>
            The burrow is the centre of gerbil life. Systems are typically dug with several entrances and connect chambers used for sleeping, for storing food and, in many species, for rearing young. Below ground, temperature swings are gentler and humidity is usually higher than at the surface, which matters a great deal in habitats where daytime heat and low humidity are the main daily pressures. In colonial species the burrow system may be extensive and long-used, with mounds and networks of runs visible on the surface.
          </p>
          <p>
            For the Mongolian gerbil specifically, the native setting is the steppe and semi-desert of eastern Asia, an environment with hot summers, cold winters, and a strongly seasonal supply of seeds and green plant material. Substrate, rainfall and vegetation all influence where a given gerbil species can live, so habitat descriptions at the subfamily level are best kept general.
          </p>
        </>
      }
      diet={
        <>
          <p>
            Gerbils are broadly granivorous and herbivorous, with seeds and grains forming the bulk of the diet in most species. They also take green plant material, roots, tubers, bulbs and fruit where available, and many species will eat insects and other small invertebrates opportunistically. The balance shifts with the season: green growth is more available after rain, while seeds carry the animals through drier periods.
          </p>
          <p>
            Food storage is a recurring theme. Many gerbils carry seeds and plant matter back to burrow chambers and build caches that can be drawn on when surface foraging is poor, and in some Central Asian species these stores can be substantial. A few gerbils are strongly specialised: certain sand rats, for example, are closely associated with salt-tolerant desert plants and take much of their water from succulent leaves rather than from free-standing water.
          </p>
          <p>
            That last point is general to the group. Gerbils in dry habitat obtain a large share of their water from food and from the water released by metabolising it, which is one reason the group can persist where open water is scarce or absent for long stretches. This section describes what gerbils eat in nature; it is not a feeding plan for any animal in human care.
          </p>
        </>
      }
      behavior={
        <>
          <p>
            Many gerbils, including the Mongolian gerbil, are best described as crepuscular, with activity concentrated around dawn and dusk and broken into bouts across the day and night rather than compressed into a single nocturnal shift. This is one of the clearest behavioural contrasts with hamsters, which are generally far more strictly nocturnal. Some desert species shift toward more night activity in the hottest part of the year, so activity pattern is better treated as a tendency than as a fixed rule.
          </p>
          <p>
            Sociality also separates gerbils from many other small rodents. A number of species, the Mongolian gerbil among them, live in family groups that share a burrow system, and colonial living is common across the subfamily. Group members recognise one another partly by scent. Most gerbils carry a sebaceous gland on the belly, typically better developed in males, and animals mark objects and burrow surfaces by dragging the abdomen across them, which helps maintain a shared group odour and mark occupied ground.
          </p>
          <p>
            Communication includes vocal calls and, notably, drumming of the hind feet against the ground. Foot-thumping is used in alarm contexts and in social exchanges, and it travels well through the substrate of open, hard-packed habitat. Gerbils are alert, frequently sitting upright on the hind legs to scan for danger, and they retreat to burrow entrances quickly when disturbed. Digging occupies a large share of their active time, and the behaviour persists strongly even in animals many generations removed from the wild.
          </p>
        </>
      }
      humanInteraction={
        <>
          <p>
            Human contact with gerbils takes several forms. In parts of Africa, the Middle East and Central Asia, gerbils are common wild neighbours of farmland and settlements, where burrowing and seed-taking can bring them into conflict with agriculture. In some Central Asian systems, colonial gerbils are also studied as part of the ecology of wildlife disease, because their long-lived burrow colonies and associated fleas play a role in how certain diseases persist in the landscape. This is a matter for public health authorities and researchers, and nothing on this page should be read as health guidance.
          </p>
          <p>
            The Mongolian gerbil is also familiar in a very different setting: it is one of the small mammals most often kept by people, and it has a long history in laboratory research, particularly in studies of hearing. Its comparatively low-frequency-sensitive ear made it a common model animal, which is one reason its biology is better documented than that of most of its wild relatives.
          </p>
          <p>
            This profile is a natural history reference and does not cover keeping, housing, feeding or health. For any question about the care or wellbeing of a gerbil in human care, consult a qualified veterinarian with experience of small mammals, along with species-specific welfare resources from a recognised animal welfare organisation.
          </p>
        </>
      }
      extraSections={[
        {
          heading: "Distribution",
          body: (
            <>
              <p>
                Gerbillinae is essentially an Old World group. The natural range covers much of Africa, including the Sahara and the drier parts of the north, east and south of the continent, extends through the Middle East and the Arabian Peninsula, and continues across Central Asia into Mongolia and northern China, with species reaching parts of southern Asia and the Indian subcontinent. Gerbils are not native to the Americas, to Australia, or to most of Europe, although a few species reach the drier southeastern fringes of the European range.
              </p>
              <p>
                Within that broad envelope, individual species are often much more restricted. Some are widespread across whole desert systems; others are known from limited areas, particular dune systems or single mountain-edge basins. Distribution maps are also revised as taxonomy changes, since species that were once lumped together may later be separated, which redraws the range attributed to each name.
              </p>
              <p>
                Ranges have shifted in historical time as well. Agricultural expansion, irrigation and grazing have opened new ground for some adaptable species while removing habitat from others, and land-use change is generally reported as the main driver of local increases and declines. Beyond the native range, the Mongolian gerbil is present around the world only through animals kept by people; reports of populations living outside captivity are localised and inconsistently documented, and no broad claim about established wild populations outside the native range should be assumed.
              </p>
            </>
          ),
        },
        {
          heading: "Senses & Adaptations",
          body: (
            <>
              <p>
                The best-known gerbil adaptations concern water. The kidney is unusually effective at reclaiming water before urine is voided, so gerbils produce urine in small volumes and at high concentration. Combined with dietary water and a burrow refuge, this allows many species to live where drinking water is seasonal or effectively absent. The trait is a genuine specialisation of dry-country rodents rather than a general rodent feature, and its degree varies between species.
              </p>
              <p>
                Hearing is the second signature. Many gerbils have enlarged auditory bullae, the bony chambers of the middle ear, a feature shared with several other desert rodents. Enlarged bullae are generally interpreted as improving sensitivity to low-frequency sound, which is thought to help in detecting approaching predators such as owls and snakes across open ground. Vision is well developed for a small rodent, with large eyes set high on the head giving a wide field of view, and the long whiskers and acute sense of smell matter both underground and when foraging in darkness.
              </p>
              <p>
                Several structural details support life on loose ground. The hind legs and feet are long, giving a bounding gait and, in some species, a hopping mode of travel across sand; the soles are furred in a number of desert species, which is generally read as aiding traction and insulation on hot, shifting substrate. The tail is long, fully furred and usually tufted, and functions in balance and counterweighting during quick turns. In many gerbils the tail skin is fragile and can tear away if the tail is seized, which is interpreted as an escape mechanism against predators; the exposed portion is subsequently lost and does not regrow.
              </p>
            </>
          ),
        },
        {
          heading: "Lifespan & Life Stages",
          body: (
            <>
              <p>
                <strong>In the wild.</strong> Gerbils are short-lived animals. Predation by owls, snakes, foxes, small cats and mustelids, together with drought, cold winters and seasonal food shortage, means that turnover in wild populations is rapid and that a large fraction of animals do not survive their first year. Where figures are reported for wild gerbils they are typically well under two years, and they vary substantially by species, by region and between good and poor seasons.
              </p>
              <p>
                <strong>Under human care.</strong> Mongolian gerbils kept by people are commonly reported to live longer than their wild counterparts, often somewhere in the region of about two to four years, with some individuals living longer and others considerably less. The gap between the two settings reflects the removal of predation and seasonal scarcity rather than any change in the animal itself, and figures of this kind are population averages rather than predictions for a particular animal.
              </p>
              <p>
                <strong>Life stages.</strong> Gerbils are born altricial: naked or nearly so, blind, and entirely dependent on the nest. Fur develops over the first couple of weeks, the eyes open at roughly two to three weeks in the Mongolian gerbil, and weaning generally follows within about a month, after which young begin foraging above ground. Litter sizes are typically small to moderate and vary by species, by the age and condition of the mother, and by season. Sexual maturity is reached within the first few months of life in the better-studied species, which is characteristic of small rodents with short lifespans and high predation pressure.
              </p>
            </>
          ),
        },
        {
          heading: "Conservation Context",
          body: (
            <>
              <p>
                Gerbillinae is a large and varied subfamily, and it does not have a single conservation picture. Many gerbils are widespread, tolerant of disturbed and agricultural ground, and are assessed as being at relatively low risk. Others occupy narrow ranges, specialised dune or coastal habitats, or small isolated basins, and are treated with more concern. Some species are poorly surveyed, and for those the honest position is that population size and trend are not well known.
              </p>
              <p>
                Where pressures are identified, they are usually habitat-related: conversion of dry grassland and steppe to cultivation, overgrazing, irrigation schemes that change soil and vegetation, mining and infrastructure across desert basins, and in some regions, control campaigns aimed at rodents regarded as agricultural pests. Climate-driven changes in rainfall are also raised as a factor in arid-zone rodent ecology, though the direction of effect differs between species and regions.
              </p>
              <p>
                No conservation status should be treated as permanent. Assessments are periodically reviewed and can be revised upward or downward as new survey data, taxonomic revisions or threat information arrive. For the current assessment of any particular gerbil species, consult the IUCN Red List of Threatened Species, which publishes species-level assessments and the evidence behind them.
              </p>
            </>
          ),
        },
        {
          heading: "What the Name Covers",
          body: (
            <>
              <p>
                &ldquo;Gerbil&rdquo; is a group name, not the name of one species. It applies to the whole subfamily Gerbillinae, and different members of that subfamily carry different English names. Species of the genus <em>Meriones</em> are frequently called jirds; some desert species are known as sand rats; the large colonial species of Central Asia is called the great gerbil. All of these are gerbils in the taxonomic sense, even where the everyday name does not use the word.
              </p>
              <p>
                In everyday use, especially outside the native range, &ldquo;gerbil&rdquo; almost always means the Mongolian gerbil, <em>Meriones unguiculatus</em>, which is sometimes called the Mongolian jird or the clawed jird. Because that one species dominates the common usage, statements made about &ldquo;gerbils&rdquo; in general are often really statements about that single species, and they may not hold for the rest of the subfamily.
              </p>
              <p>
                Regional naming adds further ambiguity. Local names such as &ldquo;desert rat&rdquo; or &ldquo;desert mouse&rdquo; are applied inconsistently and may refer to gerbils, to jerboas, or to unrelated desert rodents, and the same common name can attach to different animals in different countries. Where identification matters, the scientific name is the reliable reference, and current names are best checked against a recognised mammal taxonomy database.
              </p>
            </>
          ),
        },
        {
          heading: "Domestic, Feral and Wild",
          body: (
            <>
              <p>
                Only one member of the subfamily has any real domestic presence. The Mongolian gerbil, <em>Meriones unguiculatus</em>, is a wild steppe species that was brought into captivity during the twentieth century, initially for research and later as a companion animal, and captive populations descend from a limited number of founder animals. That narrow origin, together with generations of captive breeding, has produced the range of coat colours seen in kept gerbils, of which the sandy agouti coat is closest to the wild type. It is best described as a wild species maintained in captivity for a relatively short time rather than a long-domesticated animal comparable to a dog or a cow.
              </p>
              <p>
                There is no separate wild ancestor to name: the wild form and the kept form are the same species, and wild Mongolian gerbils continue to live across the steppe and semi-desert of Mongolia, northern China and adjacent parts of Russia. Behaviour has changed far less than appearance. Digging, burrow use, scent-marking, foot-drumming and social grouping are all retained, which is one reason the species is often used as a reference point in discussions of how weakly captive breeding alters behaviour over a small number of generations.
              </p>
              <p>
                Feral populations are the least well documented part of the picture. Reports of gerbils living outside captivity beyond the native range are localised and inconsistent, and general claims that the species has established widely elsewhere should not be assumed without a regional source. All other gerbil species remain wild animals with no domestic form. Questions about the care, health or wellbeing of any gerbil in human care belong with a qualified veterinarian and with species-specific welfare resources, not with a natural history reference.
              </p>
            </>
          ),
        },
      ]}
      faqs={[
        {
          question: "What is the difference between a gerbil and a hamster?",
          answer:
            "They are different rodent groups with different biology. The clearest external difference is the tail: gerbils have a long, fully furred tail ending in a small tuft, while hamsters have only a short stub. Gerbils are generally more social and are often found in family groups, whereas the Syrian hamster is solitary. Gerbils also tend to be crepuscular, with activity spread around dawn and dusk, rather than strictly nocturnal.",
        },
        {
          question: "Is a gerbil a single species?",
          answer:
            "No. Gerbil is a common name for the rodent subfamily Gerbillinae, which contains roughly a hundred species depending on the classification followed. Members include the jirds, sand rats and the great gerbil of Central Asia. The animal most people mean is the Mongolian gerbil, Meriones unguiculatus. Because the name spans so many species, general statements about size, range and habits vary widely across the group.",
        },
        {
          question: "How do gerbils survive in dry habitats?",
          answer:
            "Gerbils are adapted to arid and semi-arid country. Their kidneys are highly efficient at reclaiming water, so the urine they produce is very concentrated and comparatively small in volume. Much of the water they need can come from food rather than from drinking. Deep burrow systems add a behavioural layer, since air below ground is usually cooler and more humid than the surface during the heat of the day.",
        },
        {
          question: "How long do gerbils live?",
          answer:
            "Estimates differ by species and by setting, so the two should not be mixed. In the wild, most gerbils are short-lived, with predation, drought and seasonal food shortages meaning many animals do not reach their second year. Mongolian gerbils under human care commonly live longer, often somewhere in the range of about two to four years, with individual variation. Any figure is an average, not a guarantee for one animal.",
        },
        {
          question: "Are gerbils endangered?",
          answer:
            "Most widespread gerbil species have been assessed as being of relatively low concern, but the subfamily is large and assessments differ from species to species. Some gerbils have small ranges or specialised habitats and are treated differently. Statuses are also reviewed and revised over time, so none should be treated as permanent. The IUCN Red List holds the current assessment for each species and is the place to check.",
        },
      ]}
      quickFacts={[
        { label: "Group", value: "Rodents of the subfamily Gerbillinae, within the family Muridae" },
        { label: "Species covered", value: "Roughly a hundred species, depending on the classification followed; includes jirds, sand rats and the great gerbil" },
        { label: "Reference species", value: "Mongolian gerbil (Meriones unguiculatus), the species usually meant by the name" },
        { label: "Size (reference species)", value: "Head and body typically about 10-13 cm, with a tail of broadly similar length; roughly 60-130 g, varying with sex, line and condition" },
        { label: "Distinctive trait", value: "Long, fully furred tail with a tufted tip, unlike the short stub of a hamster" },
        { label: "Activity", value: "Typically crepuscular, in bouts around dawn and dusk, rather than strictly nocturnal" },
        { label: "Key adaptations", value: "Highly water-efficient kidneys and concentrated urine; multi-chambered burrows; enlarged middle-ear chambers in many species" },
        { label: "Conservation status", value: "Varies by species and is periodically revised; check the IUCN Red List for the species in question" },
      ]}
      relatedLinks={[
        { label: "Hamster Profile", href: "/animals/hamster", description: "The other familiar small rodent, and how it differs" },
        { label: "Small Pets", href: "/small-pets", description: "Overview of small companion animals" },
        { label: "Animal Domestication", href: "/animal-domestication", description: "How wild species enter captivity, and what changes" },
        { label: "Animal Food and Diet", href: "/animal-food-and-diet", description: "How diet is described across animal groups" },
        { label: "Senses and Adaptations", href: "/animal-senses-and-adaptations", description: "Water conservation, hearing and other desert traits" },
        { label: "Animal Lifespans", href: "/animal-lifespans", description: "Why wild and captive figures are kept separate" },
        { label: "Mammals Encyclopedia", href: "/animal-encyclopedia/mammals", description: "Browse other mammal profiles" },
      ]}
    />
  );
}
