import type { Metadata } from "next";
import AnimalProfileLayout from "@/components/AnimalProfileLayout";
import { ANIMAL_SOURCES } from "@/lib/educational/animal-sources";
import { getAnimalGalleryImages, getAnimalImage, getAnimalOgImage } from "@/lib/images/animal-images";
import { buildArticleMetadata } from "@/lib/metadata";

const PATH = "/animals/mule";
const TITLE = "Mule: The Donkey-Horse Hybrid That Is Not a Species";
const DESC =
  "A mule is not a species but a first-generation hybrid: a donkey sire crossed with a horse dam. With 63 chromosomes it is effectively always sterile, combining donkey sure-footedness with horse size.";

export const metadata: Metadata = buildArticleMetadata({
  title: TITLE,
  description: DESC,
  path: PATH,
  publishedTime: "2026-08-04",
  modifiedTime: "2026-08-04",
  ogImage: getAnimalOgImage("mule"),
});

export default function MulePage() {
  return (
    <AnimalProfileLayout
      commonName="Mule"
      scientificName="Equus asinus × Equus caballus"
      pageTitle={TITLE}
      description={DESC}
      path={PATH}
      parentCategory="Mammals"
      parentCategoryHref="/animal-encyclopedia/mammals"
      tags={["Domestic animals", "Equids", "Working animals"]}
      image={getAnimalImage("mule") ?? undefined}
      galleryImages={getAnimalGalleryImages("mule")}
      sources={ANIMAL_SOURCES["mule"]}
      publishedDate="2026-08-04"
      modifiedDate="2026-08-04"
      overview={
        <>
          <p>
            A mule is not a species. It is a first-generation hybrid produced when a male donkey, called a jack, is crossed with a female horse, called a mare. Everything else on this page follows from that one fact. A mule has no wild ancestor of its own, no natural range, no evolutionary history separate from its two parent species, and no breeding population anywhere in the world. Each mule is produced afresh from a donkey and a horse, and when that individual dies the cross ends with it.
          </p>
          <p>
            Because the mule is a cross rather than a species, it has no valid scientific name of its own. It is written instead as a hybrid formula, <em>Equus asinus</em> &times; <em>Equus caballus</em>, with the sire species conventionally given first. The reciprocal pairing &mdash; a horse sire with a donkey dam &mdash; produces a different hybrid called a hinny, which is far less common and is not the same animal, although the two names are frequently muddled in everyday use.
          </p>
          <p>
            What makes the mule remarkable is the combination it inherits. Donkeys typically carry 62 chromosomes and horses 64, so a mule carries 63 &mdash; an odd number that prevents chromosomes from pairing normally during meiosis, the cell division that produces sperm and eggs. Mules are therefore effectively always sterile: males are considered universally so, and only a very small number of documented cases of fertile female mules exist. The same crossing that closes off reproduction opens up a working animal that has been valued for thousands of years for endurance, sure-footedness and tolerance of heat and rough ground. One consequence for sourcing is worth stating up front: because a mule is a hybrid and not a species, the species-indexed databases have no mule account at all, and any figure for a mule&apos;s size, working life or population is an average taken across animals whose parents differed. This profile therefore gives ranges and qualitative description rather than single values, and readers wanting a mule-specific reference should go to the Encyclopaedia Britannica article on the hybrid itself rather than to a species database.
          </p>
        </>
      }
      habitat={
        <p>
          A mule has no natural habitat, because it is not a naturally occurring animal. It lives wherever people keep both donkeys and horses and choose to cross them, which in practice means most of the inhabited world: mountain villages and pack trails, dry farmland, canyon and forest routes, plantations, mines and, historically, canal towpaths and military supply lines. What the animal is suited to is a different question from where it is found. Through its donkey sire it inherits a build and a temperament associated with dry, stony, broken country &mdash; narrow upright hooves, careful footing, and comparative tolerance of heat and thin forage &mdash; while its horse dam contributes size, stride and pulling power more usually associated with open ground. That mixture is why mules are so often reported on steep trails, in hot lowlands and on ground where wheeled transport is impractical. Tolerance of any particular climate or terrain varies with the individual, the parents and the conditions it was raised in, and should not be generalised from one region to another.
        </p>
      }
      diet={
        <p>
          Feeding is one of the areas where the two halves of a mule&apos;s ancestry do not average out evenly. Both parent species process forage the same way, so the mule does too, and nothing about the cross alters that shared equid arrangement. What the cross does affect is which end of the equid range the animal sits at, and here the donkey side tends to dominate: mules are widely reported to do well on coarse, fibrous, low-quality material &mdash; dry stems, browse, bark &mdash; that would be poor going for a horse of comparable size, and to need less water for the work done. That inheritance is precisely why mules were adopted on routes and holdings where grazing is thin and water is a logistical problem rather than an assumption. The pattern is a tendency drawn from many working populations, not a rule: workload, climate, the particular parents and the individual animal all shift it. This page describes mule feeding only in general natural-history terms and gives no feeding plans, quantities, schedules or dietary prescriptions.
        </p>
      }
      behavior={
        <>
          <p>
            Mules are social equids that form associations with other mules, with horses and donkeys, and with other livestock they are kept alongside. Strong attachments to particular companions are widely reported, as they are in both parent species, and separation from a close companion is a well-known source of distress. Vocalisation tends to be intermediate and variable: a mule may produce something that begins like a horse&apos;s whinny and finishes closer to a donkey&apos;s bray, and individuals differ considerably.
          </p>
          <p>
            The reputation for stubbornness is really a mismatch of expectations, and it is worth unpicking because it is the single most repeated claim about the animal. Someone who has worked with horses expects a request to produce movement. A mule that judges the footing, the load or the instruction to be doubtful may instead halt and wait, and go on waiting until whatever is unresolved resolves. Read as disobedience, that looks like obstinacy; read as an inherited threat-assessment style, it looks like the donkey half of the animal doing its job. Equids shaped for broken rocky country gain nothing from a bolt reflex, since a panic response on a ledge is the thing most likely to kill them, and the mule&apos;s tendency to check first is the same trait that makes it valued on exactly that ground. The label says more about what the handler expected than about what the animal did.
          </p>
          <p>
            Sure-footedness is the other behavioural signature and is as much about movement as anatomy. Mules are frequently described as placing their feet deliberately, judging distances carefully on broken ground, and being reluctant to hurry over footing they have not tested. Alertness to unfamiliar animals and disturbances is also commonly noted. As with all behaviour descriptions here, these are general tendencies reported across many working populations, not guarantees about any individual animal, and this profile offers no handling or training guidance of any kind.
          </p>
        </>
      }
      humanInteraction={
        <>
          <p>
            The mule exists only because people make it, so its whole story is a human one. Mules have been produced and used for several thousand years across the Mediterranean world, the Near East, North Africa and Asia, and later throughout the Americas after donkeys and horses were carried there by ship. They have carried packs over mountain passes, pulled ploughs and wagons, hauled ore, towed boats along canals, and served in large numbers as army pack animals into the twentieth century, in terrain where vehicles could not follow. In many regions they were valued precisely for the combination described above: horse-scale strength with donkey-scale footing, heat tolerance and forage tolerance.
          </p>
          <p>
            Mechanisation reduced working mule numbers sharply through the twentieth century in industrialised countries, where surviving animals are more often kept for trail riding, driving, pack trips, shows and smallholding work. In much of Latin America, Africa and Asia mules remain working animals in substantial numbers, and international livestock statistics count them separately from horses and donkeys. Working equids are also a long-standing welfare concern in low-income regions, where load, heat, harness fit and access to care shape the animal&apos;s life far more than its parentage does. Questions about the health, care, feeding, handling or management of any individual mule belong with a qualified veterinarian and with recognised equine and working-animal welfare organisations, not with a general encyclopedia.
          </p>
        </>
      }
      extraSections={[
        {
          heading: "Scientific Classification",
          body: (
            <>
              <p>
                The mule sits in the class Mammalia, the order Perissodactyla &mdash; the odd-toed ungulates, alongside rhinoceroses and tapirs &mdash; and the family Equidae, the horse family. Within Equidae all living species belong to the single genus <em>Equus</em>, which is the reason horses, donkeys and zebras can cross at all: they are closely related members of one genus that have diverged in chromosome number without losing the ability to mate and produce offspring.
              </p>
              <p>
                Below family level the classification stops behaving like a species account. A mule is not assigned a binomial, because zoological nomenclature names species and subspecies rather than individual crosses. It is written as a hybrid formula, <em>Equus asinus</em> &times; <em>Equus caballus</em>, with the sire listed first by convention and the multiplication sign left in roman type because it belongs to neither name. A further complication is that the donkey itself is written both as <em>Equus asinus</em> and as <em>Equus africanus asinus</em>, depending on whether an author treats domestic forms as species in their own right, so the mule&apos;s formula appears in more than one style across reputable sources.
              </p>
            </>
          ),
        },
        {
          heading: "Identification",
          body: (
            <>
              <p>
                A mule reads as a mixture, and that mixture is the identification. From the donkey it usually takes long ears &mdash; conspicuously longer than a horse&apos;s, though generally not quite so long in proportion as a donkey&apos;s &mdash; a comparatively large head, a short and often upright mane with little forelock, narrow and upright hooves, and a tail whose long hair is typically concentrated toward the end rather than running the full length as in a horse. From the horse it takes body size, the general proportions of the neck, back and quarters, and the shape of the croup and legs. Against a donkey, a mule usually looks taller, longer-limbed and more horse-like in the body; against a horse, it looks longer-eared, plainer-maned and heavier in the head.
              </p>
              <p>
                Voice is a useful supporting clue rather than a reliable test. Mules are commonly described as producing an intermediate sound, sometimes beginning like a whinny and breaking into something closer to a bray, but individuals vary and the distinction is not clear-cut. Telling a mule from a hinny by appearance alone is harder still: the two are the reciprocal crosses of the same pair of species, and although various rules of thumb circulate about ear length, head shape and size, they are widely reported as unreliable in practice. In most cases the parentage is known from records rather than deduced from the animal.
              </p>
            </>
          ),
        },
        {
          heading: "Appearance",
          body: (
            <>
              <p>
                There is no single mule appearance, because the parents differ so much. Size is influenced strongly by the mare, so mules span roughly the same range that horses do: small mules from pony-sized mares stand well under about 1.2 m at the shoulder, common riding and pack mules often fall somewhere around 1.3&ndash;1.6 m, and mules from heavy draught mares can stand above 1.7 m. Body mass follows the same pattern, commonly somewhere in the region of 300&ndash;600 kg for typical working animals, with miniature and heavy draught types falling well outside that band in either direction. Any figure quoted for &quot;a mule&quot; is really a figure for a particular kind of cross.
              </p>
              <p>
                Coat colour is inherited from both sides and covers most of the range seen in horses and donkeys: bay, brown, black, grey, chestnut, roan and spotted patterns all occur, and light muzzle and eye rings inherited from the donkey side are frequently noted. Some mules show a dark dorsal stripe along the back, a donkey trait. The build is typically described as somewhat narrower through the barrel than a horse of similar height, with a straighter shoulder, a comparatively straight croup and legs whose bone is often described as dense. These are general tendencies across many animals, not diagnostic features of every mule.
              </p>
            </>
          ),
        },
        {
          heading: "Distribution",
          body: (
            <>
              <p>
                Mules occur wherever both parent species are kept and people have reason to cross them, which makes their distribution a map of human practice rather than of ecology. The cross is ancient in the Mediterranean basin, the Near East and North Africa, and long established across Central, South and East Asia. Mules were carried to the Americas from the sixteenth century onward as donkeys and horses arrived by ship, and they became central to transport, mining and agriculture in Mexico, the Andean countries, Brazil and much of the United States, particularly in the American South and in the mountain West.
              </p>
              <p>
                The pattern has shifted since. In heavily mechanised regions of Europe, North America and East Asia, working mule numbers fell steeply through the twentieth century as engines replaced pack and draught animals, and the animals that remain are more often kept for riding, driving, packing and showing than for haulage. In large parts of Latin America, sub-Saharan Africa, North Africa and Asia, mules remain everyday working animals, particularly on steep, remote or poorly roaded ground. National and global totals are compiled by agricultural agencies such as the FAO and revised regularly, so any single number should be read as a snapshot rather than a fixed value. There are no self-sustaining free-living mule populations anywhere, for the simple reason that mules cannot breed.
              </p>
            </>
          ),
        },
        {
          heading: "Adaptations",
          body: (
            <>
              <p>
                Strictly speaking a mule has no adaptations of its own. Adaptation is something that happens to lineages over generations, and the mule has no lineage: it is a one-generation combination of traits that evolved separately in donkeys and in horses. What it has instead is an inherited package, and the interest lies in which parent contributed what. From the donkey side come narrow, upright, hard hooves, a careful and deliberate way of moving over broken ground, comparative tolerance of heat and of coarse, low-quality forage, and the cautious threat response described above. From the horse side come size, stride length and the muscle mass behind pulling and carrying.
              </p>
              <p>
                Layered on top is the phenomenon known as hybrid vigour, or heterosis, in which first-generation crosses between differentiated parent populations sometimes exceed both parents in traits such as growth, robustness and stamina. Mules are among the most frequently cited examples, and they are commonly reported as hardier and longer-working than horses of comparable size while being larger and stronger than donkeys. Hybrid vigour is a real and well-documented biological phenomenon, but its extent varies with the particular parents involved and is easily overstated in popular accounts, so claims that a mule is superior to both parents in every respect should be treated as folklore rather than measurement. Notably, the very outcrossing that produces this vigour is also what produces the mismatched chromosome number that ends the line.
              </p>
            </>
          ),
        },
        {
          heading: "Life Cycle & Reproduction",
          body: (
            <>
              <p>
                A mule begins as a horse pregnancy. The mare carries the hybrid foal for a period typically reported at around eleven to twelve months, close to a normal horse gestation, and a single foal is the norm. Like other equids, mule foals are precocial: they stand and follow the mother within hours of birth, nurse for several months and shift gradually to forage. Growth continues for several years after weaning, and mules are often described as maturing somewhat more slowly than horses, though reported timings vary with the parents, the region and the conditions.
              </p>
              <p>
                Where the life cycle differs absolutely from a species is at the end of it. Donkeys typically carry 62 chromosomes and horses 64, so a mule inherits 63. During meiosis &mdash; the specialised cell division that halves the chromosome number to make sperm and eggs &mdash; chromosomes must pair with matching partners, and an odd number drawn from two differently arranged sets cannot pair cleanly. The process breaks down, and viable gametes are rarely if ever produced. Male mules are considered universally sterile. A very small number of female mules have been documented producing foals, some of them examined genetically, but these are treated as rare exceptions that confirm rather than overturn the rule. The practical consequence is that mules are never a self-sustaining population: every mule that exists was produced by mating a donkey with a horse, and this profile describes that fact without offering any breeding guidance.
              </p>
            </>
          ),
        },
        {
          heading: "Lifespan",
          body: (
            <>
              <p>
                <strong>In the wild:</strong> not applicable, and the reason matters. There is no wild mule population and there never has been, because sterility prevents mules from forming a self-sustaining group. Individual mules that escape or are released may survive for a time alongside feral donkeys or horses, but they cannot found a population, so no wild lifespan figures exist for this hybrid. Any source quoting a &quot;wild&quot; mule lifespan is describing something that does not exist.
              </p>
              <p>
                <strong>Under human care:</strong> mules are long-lived among working animals. Ages into the twenties are commonly reported where conditions are good, thirties are reported for individual animals, and mules are widely described as remaining serviceable at ages at which comparable horses have typically retired. That last comparison is a common observation rather than a precise measurement, and it should be treated as such. Actual longevity varies a great deal with workload, climate, nutrition, veterinary access and the region concerned, and figures drawn from lightly worked animals in wealthy countries describe something quite different from figures drawn from hard-working animals in demanding conditions. The two settings should never be averaged together.
              </p>
            </>
          ),
        },
        {
          heading: "Conservation Context",
          body: (
            <>
              <p>
                Conservation status does not apply to the mule, and that is a statement about categories rather than a gap in the data. The IUCN Red List and comparable schemes assess wild species and populations against extinction risk. A mule is a hybrid of two domestic animals; it has no wild population, no natural range and, because it is sterile, no capacity to form a lineage that could be assessed at all. There is no such thing as an endangered mule, and there is no such thing as a secure one either. Mules are counted in agricultural livestock statistics, but a livestock count is an economic and agricultural measure, not a conservation assessment, and a hybrid is not a breed in the sense used by domestic-breed registers.
              </p>
              <p>
                Real conservation questions in this part of the equid family attach to the wild relatives instead. The domestic donkey&apos;s wild ancestor, the African wild ass (<em>Equus africanus</em>), has been assessed as Critically Endangered, and several other wild equids &mdash; including Asiatic wild asses, Przewalski&apos;s horse and the zebras &mdash; carry their own assessments and their own threats. None of those statuses is permanent: assessments are made at a point in time and revised as survey work, range changes and new pressures emerge. For current listings, rationales and range information, consult the IUCN Red List of Threatened Species directly rather than relying on any summary, including this one.
              </p>
            </>
          ),
        },
        {
          heading: "What the Name Covers",
          body: (
            <>
              <p>
                In strict use, &quot;mule&quot; covers exactly one thing: the offspring of a donkey sire and a horse dam. In loose use it is often stretched to mean any donkey-horse hybrid, which is where confusion begins, because the reciprocal cross &mdash; horse sire, donkey dam &mdash; is properly a hinny, a different and much less common hybrid that has no separate profile here. Both are sterile, both are crosses of the same two species, and both are frequently called mules in casual speech; only the direction of the cross distinguishes them.
              </p>
              <p>
                A set of traditional terms surrounds the animal. The donkey sire is a jack, the horse dam a mare; a female mule is a molly or mare mule, a male a john mule or horse mule, and a young animal is a foal. A person who works with mules is a muleteer, and in Spanish-speaking regions the animal is a mula or macho. None of these words names a species or a breed, and mules are not registered as breeds in the way horse and donkey populations are, although breeder associations and show registries for mules do exist.
              </p>
              <p>
                Several further confusions are worth naming. A mule is not a donkey, and it is not a kind of horse; it is neither parent, and both parents are separate species with their own profiles. Zebras also cross with donkeys and horses, producing sterile hybrids variously called zebroids, zorses and zonkeys, sometimes loosely lumped in with mules; they are different crosses again. And the word itself travels well beyond zoology &mdash; the mule deer is a deer named for its ears, the spinning mule was a textile machine named for being a hybrid of two earlier designs, and &quot;mule&quot; names a backless shoe &mdash; none of which has anything to do with this animal beyond the metaphor of mixture.
              </p>
            </>
          ),
        },
      ]}
      faqs={[
        {
          question: "Is a mule a species?",
          answer:
            "No. A mule is a first-generation hybrid, not a species: it is the offspring of a donkey sire, called a jack, and a horse dam, called a mare. Every mule is produced afresh from those two parent species, because mules do not form breeding populations of their own. The hybrid is written as Equus asinus × Equus caballus, a cross formula rather than a valid species name of its own.",
        },
        {
          question: "Why are mules sterile?",
          answer:
            "Chromosome number. Donkeys typically carry 62 chromosomes and horses 64, so a mule inherits 63, an odd number whose chromosomes cannot pair up cleanly during meiosis, the cell division that produces sperm and eggs. The result is that viable gametes are rarely if ever formed. Male mules are considered universally sterile. A very small number of female mules have been documented producing foals, but these are treated as exceptional cases rather than evidence that mules can reproduce.",
        },
        {
          question: "What is the difference between a mule and a hinny?",
          answer:
            "The direction of the cross. A mule has a donkey sire and a horse dam; a hinny has a horse sire and a donkey dam. Both are sterile hybrids of the same two species, but they are not interchangeable terms. Hinnies are far less common, and the two are often reported as difficult to tell apart reliably by appearance alone, so descriptions of consistent physical differences between them should be treated with caution.",
        },
        {
          question: "Are mules really stubborn?",
          answer:
            "Mostly it reflects what the handler expected rather than what the animal did. Asked to cross footing it distrusts, a mule is inclined to halt and evaluate instead of complying or fleeing, and it may keep waiting while the doubt stands. Someone used to horses reads that pause as refusal. It is more usefully read as the threat-assessment style the donkey sire contributes, which is well matched to steep rocky ground where panicking is the greater hazard — the same disposition that makes mules trusted on those routes in the first place.",
        },
        {
          question: "Does the mule have a conservation status?",
          answer:
            "No, and it is not an oversight. Conservation assessments such as the IUCN Red List apply to wild species and populations, and a mule is a hybrid of two domestic animals with no wild population of its own. Because mules are sterile, they cannot form a self-sustaining lineage to assess. Conservation questions attached to this cross belong to its wild relatives, including the African wild ass, whose status is assessed separately and revised over time.",
        },
      ]}
      quickFacts={[
        { label: "What it is", value: "A first-generation hybrid, not a species; family Equidae, genus Equus" },
        { label: "Parentage", value: "Donkey sire (jack) crossed with horse dam (mare); the reciprocal cross is a hinny" },
        {
          label: "Written as",
          value: "Equus asinus × Equus caballus — a hybrid formula rather than a valid species name",
        },
        { label: "Chromosome number", value: "Typically 63; donkeys usually carry 62 and horses 64" },
        { label: "Fertility", value: "Effectively always sterile; males considered universally so, with a very small number of documented exceptions in females" },
        { label: "Height at the shoulder", value: "Varies with the mare; commonly about 1.3–1.6 m, with pony-sized and draught-sized mules well outside that range" },
        { label: "Weight", value: "Roughly 300–600 kg for typical working animals; miniature and heavy draught types fall outside" },
        { label: "Diet", value: "Herbivore; hindgut fermenter that both grazes and browses, including coarse forage" },
        { label: "Conservation status", value: "Not applicable — hybrids of domestic animals are not assessed as wild species" },
      ]}
      relatedLinks={[
        {
          label: "Donkey Profile",
          href: "/animals/donkey",
          description: "The sire species: the long-eared domestic equid of dry, rugged country",
        },
        {
          label: "Horse Profile",
          href: "/animals/horse",
          description: "The dam species: the domestic equid that gives the mule its size and stride",
        },
        {
          label: "Zebra Profile",
          href: "/animals/zebra",
          description: "The third equid group, which also produces sterile hybrids with donkeys and horses",
        },
        {
          label: "Animal Domestication",
          href: "/animal-domestication",
          description: "How wild species became domestic ones, and why hybrids sit outside that process",
        },
        {
          label: "Domestic Animals",
          href: "/domestic-animals",
          description: "Companion, livestock and working animals kept by people",
        },
        {
          label: "Animal Lifespans",
          href: "/animal-lifespans",
          description: "Why wild and human-care longevity figures should never be averaged together",
        },
        {
          label: "Animal Intelligence and Behavior",
          href: "/animal-intelligence-and-behavior",
          description: "How behaviour such as caution and risk assessment is studied and misread",
        },
        {
          label: "Mammal Encyclopedia",
          href: "/animal-encyclopedia/mammals",
          description: "Browse other mammal profiles",
        },
      ]}
    />
  );
}
