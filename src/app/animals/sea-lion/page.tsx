import type { Metadata } from "next";
import Link from "next/link";
import AnimalProfileLayout from "@/components/AnimalProfileLayout";
import { ANIMAL_SOURCES } from "@/lib/educational/animal-sources";
import { getAnimalGalleryImages, getAnimalImage, getAnimalOgImage } from "@/lib/images/animal-images";
import { buildArticleMetadata } from "@/lib/metadata";

const PATH = "/animals/sea-lion";
const TITLE = "Sea Lion: Eared Seals (Otariidae), Ear Flaps and Walking Flippers";
const DESC =
  "Sea lions are eared seals in the family Otariidae — a group, not one species. How external ear flaps and forward-rotating hind flippers set them apart from true seals.";

export const metadata: Metadata = buildArticleMetadata({
  title: TITLE,
  description: DESC,
  path: PATH,
  publishedTime: "2026-08-04",
  modifiedTime: "2026-08-04",
  ogImage: getAnimalOgImage("sea-lion"),
});

export default function SeaLionPage() {
  return (
    <AnimalProfileLayout
      commonName="Sea Lion"
      scientificName="family Otariidae"
      pageTitle={TITLE}
      description={DESC}
      path={PATH}
      parentCategory="Marine Animals"
      parentCategoryHref="/animal-encyclopedia/marine-animals"
      tags={["Marine mammals", "Pinnipeds", "Eared seals"]}
      image={getAnimalImage("sea-lion") ?? undefined}
      galleryImages={getAnimalGalleryImages("sea-lion")}
      sources={ANIMAL_SOURCES["sea-lion"]}
      publishedDate="2026-08-04"
      modifiedDate="2026-08-04"
      overview={
        <>
          <p>
            &ldquo;Sea lion&rdquo; is not the name of a single animal. It is a common name applied to several species inside the family Otariidae, the eared seals, and the species most often meant by the phrase are the California sea lion (<em>Zalophus californianus</em>), the Steller or northern sea lion (<em>Eumetopias jubatus</em>) and the South American sea lion (<em>Otaria flavescens</em>). Others are recognised in Australian, New Zealand and Galápagos waters. Otariidae also contains the fur seals, so a sea lion is best understood as one part of a wider eared-seal family rather than as a species in its own right.
          </p>
          <p>
            Two features do most of the work in identifying an otariid in the field. The first is a small external ear flap, a visible cartilaginous pinna on each side of the head, which is where the group name &ldquo;eared seals&rdquo; comes from. The second is the hind limb: an otariid can rotate its hind flippers forward underneath the body so that they carry weight, which allows the animal to stand, walk, climb over broken rock and, when hurried, move in an ungainly bounding gait. Underwater the front flippers are the main engines, long and wing-like, and the animal effectively rows rather than sculls.
          </p>
          <p>
            Those two traits are also the cleanest way to place sea lions among the living pinnipeds, of which three families survive. The true seals of the family Phocidae, covered on the FaunaHub <Link href="/animals/seal">seal profile</Link>, have no external ear flaps and cannot bring the hind flippers forward. The walrus, covered on the <Link href="/animals/walrus">walrus profile</Link>, sits alone in the family Odobenidae and shares the forward-rotating hind limb but not the ear flap. This page is the Otariidae counterpart to those two, and its subject is the eared seals rather than pinnipeds in general.
          </p>
        </>
      }
      habitat={
        <>
          <p>
            Sea lions are animals of productive coastal seas and continental shelves rather than the deep open ocean. Foraging typically takes place over the shelf and shelf break within reach of a shoreline, and the group is generally associated with temperate and subpolar waters, with some species extending into subtropical and tropical seas where cool, nutrient-rich upwelling supports abundant prey. Otariids are absent as breeders from the North Atlantic, which is one reason a European or eastern North American coastal pinniped is usually a phocid rather than a sea lion.
          </p>
          <p>
            Because they can walk, sea lions use land more freely than true seals do, and their terrestrial sites tend to be structurally different: sloping beaches, boulder fields, rock ledges, offshore stacks and islands that a walking animal can climb well above the tide line. Sites used mainly for resting are usually distinguished from breeding rookeries, which are typically returned to seasonally and are often on islands or other places with limited access to land predators and disturbance. The precise habitat used varies by species, sex, age and season, so it is better described in these general terms than as a single fixed profile.
          </p>
        </>
      }
      diet={
        <p>
          Sea lions are carnivores that take mainly fish and cephalopods such as squid and octopus, with crustaceans and other prey appearing in some diets. Composition varies considerably with species, region, season and what happens to be locally abundant, so most authoritative accounts describe otariid diets as opportunistic and shifting rather than fixed. Larger species tend to take proportionally larger prey, and Steller sea lions have occasionally been recorded taking other pinnipeds or seabirds, though such records are generally treated as a minor part of the diet rather than a norm. Prey is usually caught on foraging trips of hours to days and swallowed at sea. Warm-water events that push cool, productive water away from a coast can reduce prey availability and have been linked to poor foraging conditions in some populations.
        </p>
      }
      behavior={
        <>
          <p>
            Sea lions are conspicuously gregarious and noisy, and the sound of a colony is one of the group&apos;s signatures — the California sea lion is known for a repetitive bark, while the Steller sea lion produces a lower growling roar. Animals commonly haul out in dense groups, often piled against one another, and the ability to walk means a hauled-out otariid can move around, jostle for position and climb to sites well above the waterline rather than being confined to the water&apos;s edge.
          </p>
          <p>
            Breeding in the group is typically polygynous and strongly seasonal. Adult males of most species are far larger than females and develop a thickened neck and, in several species, a mane of coarser hair; they generally arrive at rookeries ahead of the females, hold and defend a patch of ground by display, vocal contest and sometimes fighting, and may go without feeding for an extended stretch while doing so. Females give birth on land and mate again within a relatively short period afterwards. Away from the breeding season the social structure is looser and animals disperse to forage, sometimes travelling considerable distances. Details of timing and structure differ from species to species and are best checked against a species-level account.
          </p>
        </>
      }
      humanInteraction={
        <>
          <p>
            Sea lions are among the more visible marine mammals because they use the coast so readily, and in several regions they haul out on harbour walls, navigation buoys, pontoons and working docks, sometimes in numbers large enough to become a local landmark or a local nuisance. Historically, eared seals were hunted extensively for oil, hides and — in the case of the fur seals in particular — for their dense pelts, and several populations were sharply reduced before commercial hunting was wound down. Their responsiveness and dexterity also made sea lions a common display animal in aquaria and travelling shows, a practice that is now widely debated on welfare grounds.
          </p>
          <p>
            Modern points of contact are mostly indirect. Sea lions and fisheries pursue overlapping prey, which creates competition, gear damage and bycatch, and animals may become entangled in fishing gear, packing bands and other debris. Harmful algal blooms are a documented problem in some regions, where the biotoxin domoic acid accumulates in prey fish and has been associated with strandings of California sea lions. Disturbance at rookeries and haul-outs is a further pressure, and in many countries approaching, feeding or harassing marine mammals is regulated — the applicable rules differ by country and jurisdiction and should be checked with the relevant authority. The general guidance offered by marine wildlife agencies is to keep a generous distance, keep dogs away, and report sick, injured or stranded animals to a local marine mammal stranding network rather than intervening.
          </p>
        </>
      }
      extraSections={[
        {
          heading: "Distribution",
          body: (
            <>
              <p>
                As a family, eared seals occur along the Pacific coasts of the Americas and Asia, around southern Africa, Australia and New Zealand, on subantarctic islands and around the Galápagos, but they are absent as breeders from the North Atlantic. Within that pattern the three most commonly cited sea lions divide up neatly: the California sea lion occupies the eastern North Pacific, the Steller sea lion ranges across colder northern Pacific coasts on both the North American and Asian sides, and the South American sea lion is found around much of that continent&apos;s Atlantic and Pacific shorelines.
              </p>
              <p>
                Distribution has not been static. Commercial hunting reduced many otariid populations during the eighteenth, nineteenth and early twentieth centuries, in places emptying colonies entirely, and some ranges have since refilled unevenly after protection — the California sea lion is frequently cited as a population that increased substantially in the later twentieth century. Losses have also been permanent: the Japanese sea lion, formerly of the western North Pacific, is generally regarded as extinct. On shorter timescales, ranges shift with ocean conditions, and warm-water events in the eastern Pacific have been associated with animals moving unusually far north or appearing in unexpected places while following displaced prey.
              </p>
            </>
          ),
        },
        {
          heading: "Senses & Adaptations",
          body: (
            <>
              <p>
                Sea lions are built for a life split between water and rock. The large, stiff front flippers that power swimming double as weight-bearing limbs ashore, and the forward-rotating hind flippers complete a body plan that works, if inelegantly, on land. Insulation comes chiefly from a layer of blubber, supplemented by fur — much denser in the fur seals than in the sea lions — and heat is managed partly through the thinly furred flippers, which can be used to shed or conserve warmth. Hauling out to warm in the sun or to rest between foraging trips is part of the same system.
              </p>
              <p>
                The senses are adapted to hunting in water that is often dim or turbid. The eye is large and adjusted for underwater vision; the whiskers, or vibrissae, are richly innervated and are understood to detect water movement, which is thought to help in tracking prey where sight is limited. Hearing works both in air, where the external ear flap is small but the animal is clearly responsive to airborne calls at crowded rookeries, and underwater. Diving is supported by the general pinniped toolkit — oxygen stored in blood and muscle, a slowed heart rate and redirected circulation during a dive — with depth and duration differing markedly between species, sexes and age classes, so these are better described qualitatively than as single figures.
              </p>
            </>
          ),
        },
        {
          heading: "Lifespan & Life Stages",
          body: (
            <>
              <p>
                Females typically give birth to a single pup at a rookery, generally in a defined breeding season, and twins are rare. Eared seals differ from true seals in how they then feed that pup: rather than nursing intensively while fasting ashore for a short period, otariid mothers alternate — a stretch ashore nursing, then a foraging trip at sea, then a return, with mother and pup relocating each other by call. Because of this, nursing is drawn out, commonly lasting many months and in some species running past a year, and the timing varies by species, region and how well foraging is going. Pups moult their birth coat, learn to swim in shallow water and become progressively independent rather than being weaned abruptly.
              </p>
              <p>
                <strong>In the wild:</strong> reported lifespans for sea lions are typically on the order of about fifteen to twenty-five years, with variation between species and a general pattern of females living longer than males, whose competitive breeding season is physically costly. Males also reach full size and social maturity considerably later than they become sexually mature, so a young adult male is not usually a breeding male.
              </p>
              <p>
                <strong>Under human care:</strong> individuals in zoos and aquaria are protected from predation, hunting and food shortage, and long-lived individuals have been reported to exceed the usual wild figures. Records of this kind describe particular animals in managed conditions and should be kept separate from wild averages rather than quoted as the species norm.
              </p>
            </>
          ),
        },
        {
          heading: "Conservation Context",
          body: (
            <>
              <p>
                There is no single conservation status for &ldquo;the sea lion,&rdquo; and any status given here should be read as a snapshot rather than a permanent fact. Assessments are made species by species — and often population by population — and they are revised as new survey data arrive. Some sea lions are currently assessed as relatively secure, while others carry higher levels of concern, and the picture can differ within one species: the western North Pacific population of the Steller sea lion is a well-documented case of a steep decline through the later twentieth century that was not mirrored across the whole range.
              </p>
              <p>
                The pressures usually discussed for the group are prey availability and competition with fisheries, entanglement and bycatch, disturbance at breeding sites, disease and biotoxin events, pollution, and shifts in ocean conditions that move prey away from established colonies. For the current assessment of any particular species, consult the <a href="https://www.iucnredlist.org/" rel="noopener noreferrer" target="_blank">IUCN Red List</a> and, where relevant, the national wildlife or fisheries agency responsible for that population.
              </p>
            </>
          ),
        },
        {
          heading: "What the Name Covers",
          body: (
            <>
              <p>
                The phrase &ldquo;sea lion&rdquo; sits at group level, not species level. It is a traditional label for the larger, coarser-haired eared seals, as distinct from the fur seals, which typically carry a dense underfur beneath the guard hairs and were the main target of the historical fur trade. That two-way division is convenient in the field but does not map cleanly onto evolutionary relationships, and genetic work has complicated the neat sea-lion-versus-fur-seal arrangement, so the number of species recognised and the genera they are placed in vary between taxonomic authorities.
              </p>
              <p>
                The word &ldquo;seal&rdquo; adds a second layer of ambiguity, since it is used both narrowly for the family Phocidae and loosely for any pinniped, which means a sea lion is often called a seal in everyday speech even though it belongs to a different family. Regional naming varies too: Spanish-speaking South America commonly uses <em>lobo marino</em> or <em>león marino</em>, and English names attached to particular species — northern versus Steller sea lion, for example — are not applied consistently across sources. When precision matters, the scientific name is the reliable identifier, and a current taxonomic reference is the place to confirm which species a given common name is being used for.
              </p>
            </>
          ),
        },
      ]}
      faqs={[
        {
          question: "Is a sea lion a single species?",
          answer:
            "No. Sea lion is a common name covering several species in the family Otariidae, the eared seals. The California sea lion (Zalophus californianus), Steller sea lion (Eumetopias jubatus) and South American sea lion (Otaria flavescens) are among the most frequently cited, and others are recognised in Australian, New Zealand and Galapagos waters. Because the grouping is partly traditional rather than a tidy evolutionary unit, species lists and names vary between authorities, so check a current taxonomic source.",
        },
        {
          question: "How can sea lions walk on land when true seals cannot?",
          answer:
            "Eared seals can rotate their hind flippers forward beneath the body, so the hind limbs bear weight and the animal can stand, walk, clamber over rock and even move at a clumsy bounding gait on land. True seals cannot do this and must haul themselves along on their bellies. In the water the difference reverses: sea lions row mainly with their large front flippers, while true seals drive themselves forward with side-to-side sweeps of the hind flippers.",
        },
        {
          question: "What is the difference between a sea lion and a fur seal?",
          answer:
            "Both belong to Otariidae and share the external ear flaps and rotating hind flippers, so the split is one of degree rather than a hard line. Fur seals typically carry a dense underfur beneath the guard hairs, which is why they were targeted so heavily by the historical fur trade, and they are often smaller with a more pointed muzzle. Sea lions tend to be bulkier with coarser hair. Genetic work has complicated the traditional two-group arrangement.",
        },
        {
          question: "Where do sea lions live?",
          answer:
            "Sea lions are coastal animals of temperate, subpolar and some subtropical seas, and they are absent as breeders from the North Atlantic. The California sea lion occurs along the eastern North Pacific, the Steller sea lion across colder northern Pacific coasts, and the South American sea lion around much of that continent's Atlantic and Pacific shores. Others occur in Australian, New Zealand and Galapagos waters. They need accessible beaches, rocks or islands for breeding and resting.",
        },
        {
          question: "Are sea lions endangered?",
          answer:
            "Status differs sharply between species and between populations of the same species, and assessments are revised as new surveys appear. Some sea lions are currently assessed as relatively secure while others are considered threatened, and the western North Pacific population of the Steller sea lion declined steeply in the later twentieth century. The Japanese sea lion is generally regarded as extinct. Because listings change, check the IUCN Red List and the relevant national authority for the current assessment.",
        },
      ]}
      quickFacts={[
        { label: "Group", value: "Eared seals (family Otariidae); sea lions are one part of that family, alongside the fur seals" },
        { label: "Representative species", value: "California sea lion (Zalophus californianus), Steller sea lion (Eumetopias jubatus), South American sea lion (Otaria flavescens)" },
        { label: "Higher classification", value: "Order Carnivora, clade Pinnipedia; one of three living pinniped families with Phocidae and Odobenidae" },
        { label: "Distinguishing traits", value: "Small external ear flaps; hind flippers that rotate forward so the animal can walk on land" },
        { label: "Size", value: "Highly variable by species and sex; adult males of the largest species can approach roughly a tonne, with females typically a fraction of that" },
        { label: "Diet", value: "Carnivorous; mainly fish and cephalopods, varying with species, region and season" },
        { label: "Typical lifespan", value: "Often reported at about 15-25 years in the wild, varying by species and sex; longer for some individuals under human care" },
        { label: "Conservation status", value: "Varies by species and by population; verify current assessments on the IUCN Red List" },
      ]}
      relatedLinks={[
        { label: "Seal Profile", href: "/animals/seal", description: "True seals (Phocidae) — the family without ear flaps or walking hind flippers" },
        { label: "Walrus Profile", href: "/animals/walrus", description: "Odobenidae, the third living pinniped family" },
        { label: "Marine Animals Encyclopedia", href: "/animal-encyclopedia/marine-animals", description: "Browse other marine mammals and ocean species" },
        { label: "Animal Senses & Adaptations", href: "/animal-senses-and-adaptations", description: "How whiskers, vision and diving physiology work across species" },
        { label: "Animal Lifespans", href: "/animal-lifespans", description: "Why wild and captive lifespan figures differ" },
        { label: "Animal Taxonomy", href: "/animal-taxonomy", description: "How families such as Otariidae fit into wider classification" },
      ]}
    />
  );
}
