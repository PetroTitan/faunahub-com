import type { Metadata } from "next";
import AnimalProfileLayout from "@/components/AnimalProfileLayout";
import { ANIMAL_SOURCES } from "@/lib/educational/animal-sources";
import { getAnimalGalleryImages, getAnimalImage, getAnimalOgImage } from "@/lib/images/animal-images";
import { buildArticleMetadata } from "@/lib/metadata";

const PATH = "/animals/osprey";
const TITLE = "Osprey: The Fish-Hunting Raptor That Is Not an Eagle";
const DESC =
  "The osprey (Pandion haliaetus) is the only living member of the family Pandionidae, a near-cosmopolitan raptor built almost entirely around catching live fish.";

export const metadata: Metadata = buildArticleMetadata({
  title: TITLE,
  description: DESC,
  path: PATH,
  publishedTime: "2026-08-04",
  modifiedTime: "2026-08-04",
  ogImage: getAnimalOgImage("osprey"),
});

export default function OspreyPage() {
  return (
    <AnimalProfileLayout
      commonName="Osprey"
      scientificName="Pandion haliaetus"
      pageTitle={TITLE}
      description={DESC}
      path={PATH}
      parentCategory="Birds"
      parentCategoryHref="/animal-encyclopedia/birds"
      tags={["Birds", "Raptors", "Fish specialists"]}
      image={getAnimalImage("osprey") ?? undefined}
      galleryImages={getAnimalGalleryImages("osprey")}
      sources={ANIMAL_SOURCES["osprey"]}
      publishedDate="2026-08-04"
      modifiedDate="2026-08-04"
      overview={
        <>
          <p>
            The osprey, <em>Pandion haliaetus</em>, is a large fish-eating bird of prey that stands apart from every other living raptor. It is placed in its own family, Pandionidae, and on most checklists is the only living species in its genus, <em>Pandion</em>. That isolation is the single most important fact about the bird: although it is often called a &quot;fish eagle&quot; or &quot;fish hawk&quot;, it is neither an eagle nor a true hawk, and it is not a member of Accipitridae, the family that gathers the eagles, kites, buzzards and harriers. It is, however, their nearest living relative — Pandionidae is generally recovered as the sister family to Accipitridae, so the osprey sits just outside that group rather than far from it.
          </p>
          <p>
            What the osprey has instead is a body reorganised around one job. It hunts live fish taken at or near the water surface, and almost everything distinctive about it — a reversible outer toe, spiny gripping pads on the soles of the feet, nostrils that can be closed, and unusually dense, oily plumage — is a response to the mechanical problem of repeatedly striking water feet-first and lifting a slippery, struggling animal out of it. Other raptors take fish opportunistically; the osprey is built for very little else.
          </p>
          <p>
            It is also one of the most widely distributed birds in the world, found on every continent except Antarctica wherever there is fishable water — though that global presence is not all breeding presence, since in South America the osprey occurs as a non-breeding visitor rather than as an established breeder. That range, combined with its position at the top of an aquatic food chain, made it an early and visible casualty of organochlorine pesticide contamination in the middle of the twentieth century, and later one of the more visible recoveries. Figures given below are broad and approximate: measurements, timings and population trends vary by sex, subspecies, region and season, and specific values should be checked against authoritative ornithological sources.
          </p>
        </>
      }
      habitat={
        <>
          <p>
            The osprey is tied to water rather than to any particular climate or vegetation. It occurs along sea coasts, estuaries, tidal flats, lagoons, mangrove shores, large rivers, lakes, reservoirs and even large fish ponds, in the tropics and well into the cool temperate north. The limiting factors are typically water clear and shallow enough that fish can be seen and reached near the surface, and an adequate supply of tall, open nesting structures — dead or open-crowned trees, cliff ledges, rocky islets, and in many regions artificial poles and platforms — within reach of that water.
          </p>
          <p>
            Distribution is near-cosmopolitan. Breeding populations occur across much of North America, Europe and northern Asia, around parts of the Mediterranean and Red Sea, in Australasia, and on numerous islands; non-breeding birds winter widely across Central and South America, Africa, southern and southeast Asia and Australia. Northern populations are typically long-distance migrants, and satellite tracking has documented individual journeys spanning continents and sea crossings. Populations at lower latitudes are often largely resident. Because migratory and resident populations overlap seasonally in many places, the osprey can be present in a given region at very different densities depending on the time of year.
          </p>
        </>
      }
      diet={
        <>
          <p>
            The osprey is one of the most specialised feeders among raptors: live fish make up the great majority of its diet, commonly reported as well over ninety percent by most accounts. It is not fussy about which fish, and the species taken vary enormously by region and season — it tends to catch whatever is locally abundant and swims near the surface, from marine mullet, flatfish and menhaden to freshwater trout, suckers, carp and tilapia. Fish of roughly hand-to-forearm length are typical, though both smaller and considerably larger prey are recorded.
          </p>
          <p>
            Non-fish prey is documented but genuinely occasional rather than routine: small birds, rodents, reptiles, amphibians and, rarely, carrion have all been reported, usually where fish are hard to reach because of ice, turbidity or storm. These records are a footnote to the diet, not an alternative strategy.
          </p>
          <p>
            The hunting method is distinctive. Birds quarter over water at moderate height, often pausing to hover on beating wings before folding and plunging feet-first, sometimes submerging briefly. Not every strike succeeds, and success rates reported in field studies vary widely with water conditions and individual experience. A bird that connects will typically rise heavily, shake water from its plumage in flight, and then shift the fish so that it is carried head-forward — an arrangement generally interpreted as reducing drag.
          </p>
        </>
      }
      behavior={
        <>
          <p>
            Outside the breeding season ospreys are largely solitary or loosely associated, though they gather where fish are concentrated and may roost communally on migration. They are conspicuous birds, hunting in the open over water in daylight, and are often detected first by a sharp series of whistled calls given near the nest or in disputes.
          </p>
          <p>
            Nests are the most obvious sign of osprey presence. They are large open platforms of sticks, built on a tall, exposed support with a clear approach — a broken-topped tree, a cliff, a rocky stack, or, very widely today, utility poles, channel markers, communication masts and purpose-built posts. A pair typically returns to the same structure in successive years and adds material each season, so long-used nests can become very bulky. Pairs are commonly described as long-term, but the bond is often mediated by fidelity to the nest site itself as much as to the partner.
          </p>
          <p>
            Ospreys tolerate nesting far closer to one another than most large raptors do, and in favourable places — small islands, sheltered coasts, clusters of artificial platforms — they form loose breeding groups. Defence is generally focused on the immediate nest rather than a large hunting territory, since fish stocks are usually too mobile and too widely spread to be worth defending. Piracy is a regular feature of their world: ospreys are frequently robbed of their catch by larger fish-eating raptors, notably sea eagles, and by gulls and skuas at the coast.
          </p>
        </>
      }
      humanInteraction={
        <>
          <p>
            The osprey&apos;s modern history is unusually entangled with human activity. Because it feeds high in an aquatic food chain, it accumulated organochlorine pesticide residues efficiently, and it declined sharply across parts of North America and Europe during the mid-twentieth century. It has since become one of the raptors most likely to nest on human structures, and the widespread provision of artificial nest platforms — originally often a response to birds nesting on live utility poles — has allowed it to recolonise areas where suitable natural nest trees had been lost.
          </p>
          <p>
            That visibility has made it a favourite of birdwatchers, and nest cameras at long-established sites have given the species a public following that few raptors enjoy. Its position as a top aquatic predator also makes it useful to researchers as a sentinel for contaminants in rivers, lakes and coastal waters, since what is in the fish eventually shows up in the birds and their eggs.
          </p>
          <p>
            Conflicts are real but narrow. Ospreys are unwelcome at some commercial fish farms and stocked fisheries, and nests on live electrical infrastructure create hazards for both birds and equipment; both situations are handled through regulated, region-specific management by utilities and wildlife authorities rather than by individuals. Ospreys are not kept as pets, and captive individuals are almost always non-releasable birds held under permit in licensed rehabilitation or education facilities. Any question about the health or welfare of an individual bird belongs with a qualified veterinarian and a licensed wildlife rehabilitation or raptor-welfare organisation, not with a general reference page.
          </p>
        </>
      }
      extraSections={[
        {
          heading: "Scientific Classification",
          body: (
            <>
              <ul>
                <li>Kingdom: Animalia</li>
                <li>Phylum: Chordata</li>
                <li>Class: Aves</li>
                <li>Order: Accipitriformes</li>
                <li>Family: Pandionidae</li>
                <li>
                  Genus: <em>Pandion</em>
                </li>
                <li>
                  Species: <em>Pandion haliaetus</em>
                </li>
              </ul>
              <p>
                The family Pandionidae contains only <em>Pandion</em>, and on most checklists <em>Pandion</em> contains only the osprey and its subspecies, which makes Pandionidae a monotypic family — one genus holding one species. That is a statement about the family rather than about the bird, and it depends on the checklist followed: authorities that treat the Australasian form as a separate species, the eastern osprey <em>Pandion cristatus</em>, recognise two species in the genus rather than one. Older classifications placed the osprey in a broadly defined Falconiformes that contained all the diurnal raptors, and some placed it inside Accipitridae itself; modern treatments generally recognise Pandionidae as a distinct family within Accipitriformes, sister to the accipitrid hawks and eagles.
              </p>
              <p>
                Several subspecies are usually recognised across the global range, distinguished mainly by size, plumage tone and breast markings, and the Australasian form is treated by some authorities as a separate species, the Eastern Osprey. Taxonomic treatments differ between checklists, so the number of subspecies and the species limits quoted for the osprey depend on which authority is being followed.
              </p>
              <p>
                The genus name honours Pandion, a figure from Greek mythology, following a naming convention common in older ornithology; it carries no descriptive meaning.
              </p>
            </>
          ),
        },
        {
          heading: "Identification",
          body: (
            <>
              <p>
                Because it shares habitat with fish-eating eagles and is often reported as one, the most useful identification features are the ones that separate it from an eagle rather than the ones that describe it in isolation.
              </p>
              <ul>
                <li>
                  <strong>Underparts:</strong> clean white below in most plumages. Adult bald eagles are dark-bodied with a white head and tail; juvenile bald eagles are mottled dark; golden eagles are dark brown throughout. A large raptor over water that looks white underneath is far more likely to be an osprey.
                </li>
                <li>
                  <strong>Carpal patches:</strong> a dark patch at the bend of each wing — the carpal, or wrist — stands out against the pale underwing. This is one of the most reliable features at long range.
                </li>
                <li>
                  <strong>Wing shape:</strong> long, narrow wings held with a distinct downward bow and a kink at the wrist, so the silhouette reads gull-like or shallow-M rather than plank-flat. Bald eagles soar on flat wings; golden eagles hold a slight raised dihedral.
                </li>
                <li>
                  <strong>Head pattern:</strong> a mostly white head crossed by a dark stripe running through the eye and back onto the nape, giving a masked look. No eagle shows this.
                </li>
                <li>
                  <strong>Behaviour:</strong> hovering over open water and plunging feet-first is characteristic. Eagles occasionally snatch fish from the surface but rarely hover in this sustained way.
                </li>
                <li>
                  <strong>Build:</strong> slimmer and typically smaller than bald or golden eagles, with a proportionally slighter bill and head.
                </li>
              </ul>
              <p>
                Against smaller raptors, the osprey&apos;s size and habitat usually settle it. Buteo hawks are broader-winged and shorter-tailed and are rarely seen fishing; falcons have pointed wings, and although some hover, they typically do so over land and hunt very differently.
              </p>
            </>
          ),
        },
        {
          heading: "Appearance",
          body: (
            <>
              <p>
                The osprey is dark brown above and largely white below, with a white crown and face broken by the dark eye stripe. The underwing is pale and heavily marked, with the dark carpal patches and a barred flight-feather pattern. The eye is typically yellow in adults; young birds often show paler, buff-fringed feathers on the upperparts, giving a scaled appearance, and an orange-toned eye that changes with age.
              </p>
              <p>
                Females are typically larger than males, as in most raptors, and often show a heavier band of brown streaking across the upper breast — sometimes called a necklace. This is a useful tendency rather than a rule: the marking is variable, some males show it, and some females show very little, so it should not be used alone to sex a bird.
              </p>
              <p>
                Reported measurements vary by sex, subspecies and source, but broadly: total length of roughly 50 to 66 cm (about 20 to 26 inches), wingspan of roughly 1.4 to 1.8 m (about 4.5 to 6 feet), and body mass of roughly 1.2 to 2 kg (about 2.5 to 4.5 pounds). Birds from tropical and island populations tend toward the smaller end of these ranges.
              </p>
              <p>
                The feet are the giveaway at close range. The toes are strongly built and roughly even in length, the talons are deeply and evenly curved with a rounded cross-section, and the soles are noticeably rough. In eagles and other accipitrids the rear talon is conspicuously longer than the others and the toes are fixed in a three-forward, one-back arrangement.
              </p>
            </>
          ),
        },
        {
          heading: "Distribution",
          body: (
            <>
              <p>
                Few birds are as widely spread. The osprey is found on every continent except Antarctica and is recorded across an enormous latitudinal span, from boreal lakes and northern coasts to tropical mangroves and offshore islands. Breeding range and overall range are not the same thing here: the bird breeds across much of North America, Eurasia, Australasia and parts of Africa, while in South America it occurs as a non-breeding visitor. Its distribution is best pictured as a map of fishable water rather than a map of habitat types.
              </p>
              <p>
                Broadly, breeding populations occur through much of North America, across Europe and northern Asia, patchily around the Mediterranean, Red Sea and adjacent coasts, and across Australasia and many Pacific and Indian Ocean islands. Non-breeding and wintering birds occur widely through Central and South America, sub-Saharan Africa, South and Southeast Asia and Australia. Substantial gaps exist — arid continental interiors far from water, and regions where suitable nest sites have been removed — so the range is extensive but not continuous.
              </p>
              <p>
                Migration links these areas. Populations breeding at high latitudes generally move long distances to winter in the tropics or the southern hemisphere, following coastlines, river systems and narrow sea crossings. Many young birds do not return north in their first spring, instead remaining on or near the wintering grounds through what would otherwise be their first breeding season, and returning to breeding areas at around two to three years old. As a result, the birds present in a northern wetland in summer and a tropical estuary in winter may belong to the same population.
              </p>
            </>
          ),
        },
        {
          heading: "Adaptations",
          body: (
            <>
              <p>
                The osprey is a useful example of how thoroughly a single feeding technique can reshape an animal. Its specialisations cluster around three problems: gripping a slippery fish, surviving repeated entry into water, and lifting a heavy load out of it.
              </p>
              <ul>
                <li>
                  <strong>Reversible outer toe:</strong> the outermost toe can be rotated backwards, so the foot closes on prey with two toes forward and two back rather than the three-and-one arrangement usual among the diurnal raptors. A reversible outer toe is not unique in birds — owls have one too — but among the daytime birds of prey it is an osprey speciality. The grip therefore comes from both sides of the fish rather than mostly from below, which is far more secure on a smooth, rounded, actively struggling body.
                </li>
                <li>
                  <strong>Spicules:</strong> the pads of the toes are covered in dense spicules — short, spiny scales that project from the skin. They function much like the studs on a grip surface, biting into slick scales and mucus. Spicules are not unique to the osprey — they are documented in the fish-taking sea eagles of <em>Haliaeetus</em> as well — but they are more strongly developed here than in raptors that take fish only occasionally.
                </li>
                <li>
                  <strong>Closable nostrils:</strong> the nostrils are slit-like and can be closed by a valve-like arrangement, keeping water out during the moment of impact and submersion.
                </li>
                <li>
                  <strong>Dense, oily plumage:</strong> the body feathers are unusually dense and heavily oiled compared with those of other raptors, which limits waterlogging during repeated immersion. The plumage is water-resistant rather than truly waterproof, and birds shake vigorously in flight after a dive to shed water.
                </li>
                <li>
                  <strong>Curved, evenly matched talons:</strong> the talons are rounded in cross-section and strongly hooked, suited to holding rather than to the puncturing strike of an eagle or the killing bite of a falcon.
                </li>
                <li>
                  <strong>Long, angled wings:</strong> the bowed wing shape combines the lift needed to rise from water with a heavy load and the manoeuvrability needed to hover and fold into a dive.
                </li>
              </ul>
              <p>
                Vision is also central. Ospreys locate fish from the air through a reflective, refracting water surface, and the accuracy of the strike suggests strong correction for the way water bends light — an aspect of raptor sensory biology that continues to be studied.
              </p>
            </>
          ),
        },
        {
          heading: "Life Cycle & Reproduction",
          body: (
            <>
              <p>
                Breeding is seasonal and timed to local fish availability, so it falls in the northern spring and summer for migratory populations and at other times of year for resident ones. Returning birds typically reoccupy an existing nest, and courtship commonly involves an undulating display flight by the male, often carrying a fish or nest material, accompanied by persistent calling.
              </p>
              <p>
                Clutches are usually small, with about two to four eggs being typical and three common; the eggs are laid at intervals of a couple of days, so hatching is staggered. Incubation is shared but generally falls mainly to the female and lasts roughly five to six weeks. Through incubation and early brooding the male does most or all of the fishing, delivering catches to the nest — a division of labour that makes breeding success closely dependent on his hunting.
              </p>
              <p>
                Because hatching is staggered, the first-hatched chick has a size advantage, and in poor fishing years the youngest chick is the most likely to be lost. Nestlings typically fledge at roughly seven to eight weeks but remain dependent on the adults for food for some weeks afterwards while they learn to fish, which is a difficult skill with a long learning curve.
              </p>
              <p>
                Most birds do not breed in their first years. Many spend their first potential breeding season on or near the wintering grounds, returning to breeding areas at around two to three years old, and then wait longer still before nesting: first breeding is generally reported at three to five years, most commonly three or four. Returning north and breeding are separate milestones and the same figure should not be used for both. All of these timings are approximations that shift with latitude, food supply, weather and the experience of the individual pair.
              </p>
            </>
          ),
        },
        {
          heading: "Lifespan",
          body: (
            <>
              <p>
                <strong>In the wild.</strong> Mortality is heavily concentrated in the first year, as it is in most raptors: inexperienced birds face a demanding migration and must master a difficult hunting technique. Birds that clear that first period and recruit into a breeding population can be long-lived by the standards of a bird of this size, commonly persisting for several years to well over a decade. Ringing and banding recoveries include individuals recorded at ages in their twenties, but these are exceptional records rather than an expectation, and average life expectancy across all fledged birds is far lower than the maximum. Reported figures differ between study populations and depend heavily on how many marked birds were followed and for how long.
              </p>
              <p>
                <strong>Under human care.</strong> Ospreys are not ordinarily kept, so there is no substantial body of captive longevity data comparable to that available for many zoo species. The few individuals held long-term are typically non-releasable birds in licensed rehabilitation or education facilities, and their records are too sparse and too particular to support a general captive lifespan figure. Wild and captive figures should never be quoted interchangeably.
              </p>
            </>
          ),
        },
        {
          heading: "Conservation Context",
          body: (
            <>
              <p>
                The osprey is the standard textbook case of pesticide impact on a top predator. From roughly the 1950s through the early 1970s, organochlorine pesticides — DDT above all, acting through its persistent breakdown product DDE — moved up aquatic food chains and concentrated in fish-eating birds. The effect most clearly documented was eggshell thinning and consequent breeding failure, and osprey numbers fell steeply across parts of North America and Europe, in some regions to a small fraction of earlier levels. The osprey declined alongside other fish-eating birds affected in the same way.
              </p>
              <p>
                Recovery followed restrictions on DDT use in the United States in the early 1970s and comparable measures in many other countries around the same period, reinforced by legal protection of birds and nests and by the deliberate provision of artificial nesting platforms in areas short of natural nest trees. Breeding success improved and populations rebuilt substantially across many monitored regions over the following decades. The recovery was real and well documented, but it was not uniform: it has been strongest where monitoring, protection and nest provision were sustained, and weaker or absent elsewhere.
              </p>
              <p>
                Current pressures are different in character. They include contaminants that still accumulate in aquatic systems, loss of tall open nest sites, disturbance at nests, entanglement in discarded fishing line and other debris incorporated into nest material, collision and electrocution risk on infrastructure, and changes in fish availability driven by fisheries and water management. Some regional and national populations remain small or localised even where the global picture looks comfortable.
              </p>
              <p>
                Recent global assessments have placed the osprey in a low category of extinction risk, but conservation status is a periodically revised judgement, not a permanent property of a species, and a reassuring global assessment can conceal declining or threatened populations at national and regional scale. This page deliberately gives no population figure. For the current global listing, the assessment date and the underlying rationale, consult the IUCN Red List directly, and check national or regional red lists for the status where you are.
              </p>
            </>
          ),
        },
        {
          heading: "What the Name Covers",
          body: (
            <>
              <p>
                &quot;Osprey&quot; refers to a single species, <em>Pandion haliaetus</em>, not to a group. This is unusual on a site where many bird names — eagle, hawk, falcon, vulture — cover assemblages spanning multiple genera, families or even orders. The only complication is subspecific: several regional forms are recognised, and the Australasian population is treated by some authorities as a separate species, the Eastern Osprey, so a strict reading of what &quot;osprey&quot; covers depends on the checklist being used.
              </p>
              <p>
                The English name has a tangled history. It is generally traced back through Old French to Latin, with the medieval Latin form <em>ossifraga</em>, meaning roughly bone-breaker, often cited — a word originally applied to a different bird altogether. The derivation is debated, and it tells you nothing useful about the osprey itself.
              </p>
              <p>
                Regional and vernacular names are more misleading than helpful. &quot;Fish hawk&quot;, &quot;sea hawk&quot; and &quot;river hawk&quot; are widely used in English-speaking North America, and &quot;fish eagle&quot; appears in several regions. All of them attach the osprey to groups it does not belong to. It is not a hawk in the sense of <em>Accipiter</em> or <em>Buteo</em>, and it is not an eagle.
              </p>
              <p>
                The most common confusions worth naming:
              </p>
              <ul>
                <li>
                  <strong>Sea eagles and fish eagles.</strong> Members of the genus <em>Haliaeetus</em>, including the bald eagle and the African fish eagle, are genuine eagles in the family Accipitridae that also take fish. They are bulkier, dark-bodied, flat-winged in flight, and lack the reversible outer toe. They share the spiny foot pads, which are a general fish-gripping adaptation rather than an osprey peculiarity. They also frequently rob ospreys of their catches.
                </li>
                <li>
                  <strong>Juvenile bald eagles.</strong> Mottled brown young bald eagles are regularly reported as ospreys and the reverse. The clean white underparts and dark carpal patches of an osprey, and its bowed wing profile, separate the two.
                </li>
                <li>
                  <strong>Large gulls.</strong> At a distance and against bright sky over water, the osprey&apos;s kinked, gull-like wing profile invites confusion, which is why the dark carpal patches are so useful.
                </li>
                <li>
                  <strong>The species name.</strong> The epithet <em>haliaetus</em> derives from words meaning sea eagle, and closely resembles the eagle genus <em>Haliaeetus</em>. The similarity is a historical artefact of naming, not evidence of relationship.
                </li>
              </ul>
            </>
          ),
        },
      ]}
      faqs={[
        {
          question: "Is the osprey an eagle?",
          answer:
            "No. Despite names like fish eagle and fish hawk, the osprey is not an eagle and not a true hawk. It sits in its own family, Pandionidae, and on most checklists is the only living species in the genus Pandion — though authorities that split the Australasian eastern osprey, Pandion cristatus, recognise two. Either way it is outside Accipitridae, the family holding the eagles, kites and hawks, even though that family is its closest living relative. The resemblance to a fish eagle is ecological rather than genealogical: several separate raptor lineages converged on fishing. In the field, its white underparts, dark wrist patches and bowed, gull-like wings separate it from any eagle.",
        },
        {
          question: "How does an osprey hold on to a slippery fish?",
          answer:
            "Three features work together. The outer toe is reversible, so the foot can shift from three toes forward and one back to two forward and two back, closing around the prey from both sides. The pads of the toes carry dense spicules, short spiny scales that bite into slick scales and skin. The talons are strongly curved and roughly even in length, unlike the long rear talon of eagles. Birds also commonly carry fish head-first, which is usually read as reducing drag in flight.",
        },
        {
          question: "What happened to ospreys during the DDT era?",
          answer:
            "From roughly the 1950s to the early 1970s, organochlorine pesticides, DDT in particular through its persistent breakdown product DDE, accumulated in aquatic food chains and were linked to eggshell thinning and widespread breeding failure in fish-eating birds. Osprey numbers fell sharply across parts of North America and Europe. Following restrictions on DDT use in the United States in the early 1970s and in many other countries around the same period, together with legal protection and the spread of artificial nest platforms, breeding success and numbers recovered substantially in many monitored regions.",
        },
        {
          question: "Where do ospreys live?",
          answer:
            "The osprey is among the most widely distributed birds in the world, found on every continent except Antarctica and wintering across much of the tropics and the southern hemisphere. Its breeding range is narrower than its overall range: it nests across much of North America, Eurasia, Australasia and parts of Africa, but occurs in South America only as a non-breeding visitor. It is tied to water rather than to any one climate, using coasts, estuaries, lakes, reservoirs, large rivers and lagoons where the water is clear enough to spot fish near the surface. Northern populations are typically long-distance migrants, while some subtropical and island populations are largely resident. Exact ranges vary by population and season.",
        },
        {
          question: "How long do ospreys live?",
          answer:
            "Wild figures and captive figures should not be mixed. In the wild, mortality in the first year is high, as in most raptors; birds that survive to breed often live several years to well over a decade, and ringing recoveries include individuals recorded in their twenties. Those long-lived birds are exceptional rather than typical. Ospreys are not ordinarily kept by people, so there is no comparable body of captive longevity data; the few long-term captive birds are usually non-releasable individuals in licensed facilities.",
        },
      ]}
      quickFacts={[
        { label: "Scientific name", value: "Pandion haliaetus" },
        { label: "Family", value: "Pandionidae — sole living family and genus" },
        { label: "Group", value: "Fish-specialist raptor; not an eagle or a true hawk" },
        { label: "Length", value: "Typically about 50-66 cm (roughly 20-26 in)" },
        { label: "Wingspan", value: "Typically about 1.4-1.8 m (roughly 4.5-6 ft)" },
        { label: "Weight", value: "Typically about 1.2-2 kg; females usually larger than males" },
        { label: "Diet", value: "Almost entirely live fish; other prey genuinely occasional" },
        {
          label: "Distribution",
          value:
            "Near-cosmopolitan; found on every continent except Antarctica, though non-breeding only in South America",
        },
        { label: "Conservation status", value: "Recently assessed at low global risk; verify the current IUCN listing" },
      ]}
      relatedLinks={[
        {
          label: "Bald Eagle Profile",
          href: "/animals/bald-eagle",
          description: "A true sea eagle that also fishes — and often robs ospreys",
        },
        {
          label: "Golden Eagle Profile",
          href: "/animals/golden-eagle",
          description: "An upland Aquila eagle for shape and size comparison",
        },
        {
          label: "Eagle Profile",
          href: "/animals/eagle",
          description: "What the word eagle covers across several lineages",
        },
        {
          label: "Hawk Profile",
          href: "/animals/hawk",
          description: "Why fish hawk is a misleading name for this bird",
        },
        {
          label: "Falcon Profile",
          href: "/animals/falcon",
          description: "Pointed-winged raptors placed in a separate order",
        },
        {
          label: "Vulture Profile",
          href: "/animals/vulture",
          description: "Another case of unrelated birds sharing one common name",
        },
        {
          label: "Bird Encyclopedia",
          href: "/animal-encyclopedia/birds",
          description: "Browse bird profiles across the encyclopedia",
        },
        {
          label: "Animal Senses & Adaptations",
          href: "/animal-senses-and-adaptations",
          description: "How structures like spicules and closable nostrils fit into adaptation",
        },
      ]}
    />
  );
}
