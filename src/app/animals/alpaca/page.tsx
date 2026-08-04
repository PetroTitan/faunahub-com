import type { Metadata } from "next";
import AnimalProfileLayout from "@/components/AnimalProfileLayout";
import { ANIMAL_SOURCES } from "@/lib/educational/animal-sources";
import { getAnimalGalleryImages, getAnimalImage, getAnimalOgImage } from "@/lib/images/animal-images";
import { buildArticleMetadata } from "@/lib/metadata";

const PATH = "/animals/alpaca";
const TITLE = "Alpaca: The Fibre Camelid of the High Andes";
const DESC =
  "A natural-history profile of the alpaca (Vicugna pacos), the smaller domesticated South American camelid bred for dense fleece, and how it differs from the llama.";

export const metadata: Metadata = buildArticleMetadata({
  title: TITLE,
  description: DESC,
  path: PATH,
  publishedTime: "2026-08-04",
  modifiedTime: "2026-08-04",
  ogImage: getAnimalOgImage("alpaca"),
});

export default function AlpacaPage() {
  return (
    <AnimalProfileLayout
      commonName="Alpaca"
      scientificName="Vicugna pacos"
      pageTitle={TITLE}
      description={DESC}
      path={PATH}
      parentCategory="Mammals"
      parentCategoryHref="/animal-encyclopedia/mammals"
      tags={["Domestic animals","Camelids","South America"]}
      image={getAnimalImage("alpaca") ?? undefined}
      galleryImages={getAnimalGalleryImages("alpaca")}
      sources={ANIMAL_SOURCES["alpaca"]}
      publishedDate="2026-08-04"
      modifiedDate="2026-08-04"
      overview={
        <>
          <p>
            The alpaca (<em>Vicugna pacos</em>) is a domesticated South American camelid kept above all for its fleece. It is the smaller of the two domesticated South American camelids, noticeably lighter and shorter than the llama, though not the smallest camelid overall — that is the wild vicuna, from which the alpaca is now thought to descend. Unlike the llama, which was developed largely as a pack animal, the alpaca has been shaped over a long period of human selection towards a dense, fine, and evenly grown fibre coat, and that emphasis on fleece is the single clearest thread running through its history.
          </p>
          <p>
            Alpacas are typically compact and short-legged relative to llamas, with a short, blunt face, a heavily fleeced body, and straight, comparatively short ears. Published shoulder heights vary by source: Animal Diversity Web gives roughly 90 to 130 centimetres, while other references quote a narrower band nearer 80 to 100 centimetres, and body mass is commonly reported between about 55 and 65 kilograms with wider figures elsewhere. Sex, fleece type, region, condition and the reference consulted all move these numbers, so they are best treated as approximate ranges rather than fixed measurements.
          </p>
          <h3>Taxonomy and a revision worth flagging</h3>
          <p>
            The alpaca was for a long time classified as <em>Lama pacos</em>, that is, as a member of the same genus as the llama. Genetic work published from the 1990s onward instead placed its ancestry chiefly with the vicuna (<em>Vicugna vicugna</em>) rather than with the guanaco, and the name <em>Vicugna pacos</em> came into wide use as a result. This is a revision that is broadly, though not universally, followed, and the picture is complicated by long-standing crossbreeding between alpacas and llamas, which the two animals do readily. The older name still appears in reference works and older literature, so encountering <em>Lama pacos</em> is not in itself an error, and current authorities such as the IUCN Red List and major taxonomic databases are the appropriate places to check how the name is treated today.
          </p>
          <h3>Telling an alpaca from a llama</h3>
          <p>
            The two domesticated camelids are frequently confused. In general terms the alpaca is the smaller animal, with a shorter and blunter face that is often obscured by fleece, and with short, straight ears. The llama is markedly larger and longer in the leg and neck, carries a longer face, and has distinctive long, curved ears often described as banana-shaped. The alpaca&#39;s fleece is usually denser and finer and covers more of the body, including much of the face and legs; the llama typically carries a coarser outer coat and was bred to carry loads rather than to grow fibre. Crossbred animals blur these distinctions, so identification is best treated as a matter of overall impression rather than a single decisive trait.
          </p>
        </>
      }
      habitat={
        <p>
          The alpaca&#39;s long-standing home is the high Andes, particularly the cold, treeless grasslands and wetland-fed pastures of the puna and altiplano, where elevations are commonly described as being in the range of roughly 3,500 to 4,800 metres. These are demanding environments: thin air, strong ultraviolet exposure, wide swings between daytime and night-time temperature, and forage that is sparse and fibrous for much of the year. Herds are typically associated with damp meadow areas, known regionally as bofedales, that hold green grazing when surrounding slopes are dry. Alpacas kept outside the Andes live in managed pasture rather than in any natural habitat, and their presence in such places reflects human husbandry rather than a self-sustaining wild distribution.
        </p>
      }
      diet={
        <p>
          Alpacas are herbivores that graze on grasses and other low, fibrous vegetation. Like other camelids they are foregut fermenters with a chambered stomach and a microbial fermentation system that extracts nutrients from coarse plant material, and they re-chew cud after feeding. Their split upper lip and mobile mouthparts allow relatively selective cropping of short vegetation. In their Andean setting they are generally regarded as efficient users of poor forage, which is part of why pastoral systems there could be built around them at altitudes where crop farming is difficult. This profile describes what alpacas eat as a matter of biology; it does not offer feeding plans, quantities, or dietary recommendations of any kind. For a broader treatment of how animal diets are described and where the limits of general information lie, see the site&#39;s <a href="/animal-food-and-diet">animal food and diet</a> section.
        </p>
      }
      behavior={
        <>
          <p>
            Alpacas are gregarious and are typically found in groups; they are strongly gregarious and are normally found in groups rather than alone, and the species is generally described as strongly herd-oriented. Communication runs through posture, ear and tail position, and a range of quiet vocalisations, of which a soft hum is the most familiar. Spitting is real but is mostly directed between animals, usually over food, personal space, or social standing, rather than at people; an alarm call, a sharp rhythmic note, may be given when something unfamiliar approaches. A characteristic habit is the use of communal dung piles, with animals in a group returning to the same few latrine sites.
          </p>
          <p>
            Reproduction generally produces a single young, called a cria, after a gestation usually given as around eleven months, though reported figures vary. Camelids are induced ovulators, meaning ovulation is triggered by mating rather than following a fixed cycle, which is one reason breeding in this group behaves differently from that of many other livestock mammals. Crias are typically born during daylight hours and are able to stand and follow the herd within a short period. Because the alpaca is a domesticated animal, the timing and pattern of breeding in practice are governed by human management rather than by wild population dynamics, and no breeding guidance is offered here.
          </p>
        </>
      }
      humanInteraction={
        <p>
          The alpaca has been bound to people for thousands of years, and its fibre has been a valued material in the Andes since long before the Inca period, when finely woven camelid cloth carried considerable social and ceremonial weight. Herding populations declined sharply during and after the Spanish conquest, and much of the surviving alpaca population became concentrated in the higher, more remote pastures, where Andean communities, particularly in what are now Peru and Bolivia, maintained the animals and their fibre traditions. From the nineteenth century onward alpaca fleece entered international textile markets, and in more recent decades breeding stock has been exported to a number of other countries, so alpacas are now kept well outside their region of origin. This profile is educational natural history and is not a guide to keeping alpacas: questions about the health, welfare, husbandry, or care of any individual animal should be directed to a qualified veterinarian and to recognised species-specific welfare and livestock organisations.
        </p>
      }
      extraSections={[
        {
          heading: "Distribution",
          body: (
            <>
              <p>
                As a domesticated animal, the alpaca has no natural range in the sense that a wild species does; where it occurs is a record of where people have kept it. The overwhelming majority of the world&#39;s alpacas are in the high Andes, with the largest concentration usually attributed to Peru and substantial numbers in Bolivia, alongside smaller populations in Chile, Argentina, and Ecuador. Within that region the animals are associated with high plateau pasture rather than with lowland or forested country.
              </p>
              <p>
                That distribution has changed twice over. Archaeological and historical accounts indicate that camelid herding once extended over a considerably wider area of western South America, including lower elevations and coastal zones, and that this range contracted severely after European contact, leaving the high puna as the stronghold. In the opposite direction, exports of breeding animals from the later twentieth century onward established managed alpaca populations in countries including Australia, New Zealand, the United States, and parts of Europe. These outlying groups are entirely dependent on husbandry and should not be read as a natural range expansion. Population totals are reported differently by different national agencies and industry bodies, so specific figures are best taken from those primary sources rather than assumed.
              </p>
            </>
          ),
        },
        {
          heading: "Senses & Adaptations",
          body: (
            <>
              <p>
                Much of what is distinctive about the alpaca is an adaptation to altitude. Camelids of the high Andes are noted for blood with small, oval red cells present at high density, a configuration generally associated with efficient oxygen transport in thin air, and the alpaca is usually discussed as part of that pattern. The fleece itself is a thermal adaptation as much as an economic product: a dense coat buffers an animal against the sharp day-to-night temperature swings of the altiplano, where a warm afternoon can be followed by a hard overnight freeze.
              </p>
              <p>
                The feet are soft, two-toed pads rather than hard hooves, which is often described as gentler on thin high-altitude turf than the feet of many other grazing livestock, though the extent of that difference depends heavily on stocking pressure and local conditions. Vision and hearing are both reasonably acute, and alpacas are typically alert to movement at a distance, which is consistent with an ancestry among open-country prey animals; the ears are mobile and are used both for listening and for social signalling. As with other camelids, the split upper lip and the arrangement of the incisors allow close, selective cropping of short vegetation. For broader background on how such traits are described across the animal world, see <a href="/animal-senses-and-adaptations">animal senses and adaptations</a>.
              </p>
            </>
          ),
        },
        {
          heading: "Lifespan & Life Stages",
          body: (
            <>
              <p>
                <strong>Under human care.</strong> Because essentially all alpacas live under management, the figures usually quoted for the species are husbandry figures. Reported lifespans commonly fall in a band of roughly fifteen to twenty years, with individuals sometimes described as living beyond that; outcomes vary widely with region, herd system, altitude, and individual circumstance, so these numbers should be read as broad tendencies rather than expectations for any given animal. Crias are typically born singly and are precocial, standing and moving with the herd early in life. Weaning is usually described as occurring within the first several months, and animals reach adult size over a period of a few years, with fleece characteristics changing as they mature.
              </p>
              <p>
                <strong>In the wild.</strong> There is no wild alpaca population, so no wild lifespan can be given for the species, and any figure presented as one should be treated with suspicion. The nearest comparison is with the wild camelids of the same region, the vicuna and the guanaco, which face predation, disease, and forage scarcity that managed animals largely do not; lifespans in those wild populations are generally reported as shorter and more variable than the managed figures above, and the two categories should never be merged into a single number. Site-wide context on how such comparisons are handled is set out under <a href="/animal-lifespans">animal lifespans</a>.
              </p>
            </>
          ),
        },
        {
          heading: "Conservation Context",
          body: (
            <>
              <p>
                Domesticated animals are not assessed on the IUCN Red List in the way wild species are, and the alpaca is generally treated in that manner; its continuation depends on herding economies and breeding decisions rather than on the protection of a wild population. That does not make conservation irrelevant to it. Its presumed principal wild ancestor, the vicuna, was heavily reduced by hunting for its fibre in the twentieth century before protection and managed shearing programmes changed that trajectory, and the guanaco has its own separate assessment history. Conservation statuses are reviewed and revised, so none should be treated as permanent; the current position for any of these wild relatives should be checked directly against the IUCN Red List rather than taken from a general profile such as this one.
              </p>
              <p>
                Two further issues are usually raised in discussions of alpaca conservation context. The first is genetic: extensive historical and continuing hybridisation with llamas has blurred the boundary between the two domesticated forms, and there is active interest in identifying and maintaining animals of less mixed ancestry. The second is ecological, concerning grazing pressure on fragile high-altitude pasture and wetland systems, which is a question of land management rather than of the animal&#39;s own status. Related pages on <a href="/endangered-animals">endangered animals</a> cover how threat categories are defined and why they change.
              </p>
            </>
          ),
        },
        {
          heading: "What the Name Covers",
          body: (
            <>
              <p>
                &quot;Alpaca&quot; refers to a single domesticated form, <em>Vicugna pacos</em>, and not to a group of species. It is not a general word for South American camelids: the llama, guanaco, and vicuna are separate animals, and using &quot;alpaca&quot; loosely for any woolly Andean camelid is a common but real error. The word itself comes into English through Spanish from Andean usage, and the related term &quot;paco&quot; survives in the old scientific name and in some regional speech.
              </p>
              <p>
                Within the alpaca, the divisions most often encountered are fleece types rather than subspecies. Huacaya animals carry a crimped, dense, and relatively upright fleece that gives them a rounded appearance; Suri animals carry a fleece that hangs in long, lustrous, twisted locks. These are widely recognised categories in fibre production and are described in terms of coat structure, not as separate taxa. Beyond that, regional herding traditions apply their own names to animals by colour, fleece quality, and age class, and those terms do not map neatly onto scientific categories. Because of the taxonomic revision described above, the same animal may appear in one reference as <em>Vicugna pacos</em> and in another as <em>Lama pacos</em>.
              </p>
            </>
          ),
        },
        {
          heading: "Domestic, Feral and Wild",
          body: (
            <>
              <p>
                <strong>Domestic.</strong> The alpaca is a fully domesticated animal, the product of a long process of selection in the Andes that is generally placed several thousand years in the past. Estimates of when domestication began differ between archaeological studies and are stated with varying confidence, so a single date should not be assumed. What is clear is that the animal as it exists today, with its dense and heavily selected fleece, is a human product and does not correspond to any independent wild population.
              </p>
              <p>
                <strong>Wild ancestor.</strong> Genetic evidence points chiefly to the vicuna (<em>Vicugna vicugna</em>) as the principal wild ancestor, which is the basis for the current name. Hybridisation with the llama, itself generally regarded as domesticated from the guanaco, means many alpacas carry mixed ancestry, and the ancestry question is better described as an area of continuing research than as a closed case.
              </p>
              <p>
                <strong>Feral.</strong> Free-living, self-sustaining feral alpaca populations are not a recognised phenomenon in the way they are for some other livestock; animals that escape management are typically recovered, and the species is not associated with established feral herds. Animals seen loose in the Andes are far more likely to be free-ranging managed stock than genuinely feral. Broader background on this distinction is covered under <a href="/animal-domestication">animal domestication</a> and <a href="/domestic-animals">domestic animals</a>.
              </p>
            </>
          ),
        },
      ]}
      faqs={[
        {
          question: "What is the difference between an alpaca and a llama?",
          answer:
            "Size and purpose are the quickest guides. The alpaca is considerably smaller and more compact, with a short blunt face largely covered in fleece and short straight ears, and it was bred for fibre. The llama is much larger and longer in the neck and leg, with a longer face and distinctive long curved ears, and was developed as a pack animal with a coarser coat. Crossbred animals exist and blur these differences, so judge overall impression rather than one feature.",
        },
        {
          question: "Why is the alpaca called Vicugna pacos and not Lama pacos?",
          answer:
            "The alpaca was long placed in the genus Lama alongside the llama. Genetic studies from the 1990s onward instead indicated that its ancestry lies chiefly with the vicuna, Vicugna vicugna, and the name Vicugna pacos was adopted to reflect that. The revision is broadly but not universally followed, and long-standing hybridisation with llamas complicates the picture, so the older name still appears in reference works without being straightforwardly wrong.",
        },
        {
          question: "Are alpacas wild animals anywhere?",
          answer:
            "No. The alpaca exists only as a domesticated animal, the outcome of thousands of years of selection in the Andes, and there is no wild alpaca population to compare it against. Its wild relatives are separate species: the vicuna, generally regarded as its principal ancestor, and the guanaco, from which the llama is usually derived. Established feral alpaca herds are not a recognised phenomenon, unlike the situation for several other domesticated livestock animals.",
        },
        {
          question: "Where do alpacas live?",
          answer:
            "Overwhelmingly in the high Andes, on the cold treeless grasslands and damp meadows of the puna and altiplano at elevations often described as roughly 3,500 to 4,800 metres. Peru holds the largest share, with substantial numbers in Bolivia and smaller populations in Chile, Argentina, and Ecuador. Exported breeding animals have since established managed populations in countries including Australia, New Zealand, the United States, and parts of Europe, all of which depend entirely on husbandry.",
        },
        {
          question: "Do alpacas really spit at people?",
          answer:
            "Spitting is genuine but is usually misunderstood. It is chiefly a social behaviour directed at other alpacas, arising in disputes over food, personal space, or standing within the group, and it is preceded by clear warning signals such as raised head and flattened ears. Spitting at people occurs but is generally described as less common and as a response to being crowded or handled. Alpacas are also highly herd-oriented and communicate mainly through posture and quiet humming.",
        },
      ]}
      quickFacts={[
        { label: "Scientific name", value: "Vicugna pacos (formerly classified as Lama pacos)" },
        { label: "Animal group", value: "Mammal; domesticated South American camelid (Camelidae, Artiodactyla)" },
        { label: "Shoulder height", value: "Roughly 90-130 cm per ADW; other references quote nearer 80-100 cm" },
        { label: "Body mass", value: "Commonly about 55-65 kg, with wider figures reported elsewhere" },
        { label: "Diet", value: "Herbivore; grasses and fibrous high-altitude vegetation, foregut fermenter" },
        { label: "Typical elevation", value: "High Andean puna and altiplano, often about 3,500-4,800 m" },
        { label: "Lifespan under human care", value: "Commonly around 15-20 years; no wild population exists for comparison" },
        { label: "Conservation status", value: "Domesticated form; not assessed as a wild species by the IUCN Red List" },
      ]}
      relatedLinks={[
        { label: "Llama", href: "/animals/llama", description: "The larger domesticated camelid, bred as a pack animal" },
        { label: "Vicuna", href: "/animals/vicuna", description: "The wild camelid genetic work points to as the alpaca's chief ancestor" },
        { label: "Guanaco", href: "/animals/guanaco", description: "The wild camelid usually regarded as the llama's ancestor" },
        { label: "Animal domestication", href: "/animal-domestication", description: "How wild species became domestic ones, and what that changes" },
        { label: "Animal food and diet", href: "/animal-food-and-diet", description: "How animal diets are described, and the limits of general information" },
        { label: "Domestic animals", href: "/domestic-animals", description: "Companion, livestock and working animals kept apart from wild fauna" },
        { label: "Mammals", href: "/animal-encyclopedia/mammals", description: "The wider mammal encyclopedia" },
      ]}
    />
  );
}
