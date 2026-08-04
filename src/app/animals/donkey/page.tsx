import type { Metadata } from "next";
import AnimalProfileLayout from "@/components/AnimalProfileLayout";
import { ANIMAL_SOURCES } from "@/lib/educational/animal-sources";
import { getAnimalGalleryImages, getAnimalImage, getAnimalOgImage } from "@/lib/images/animal-images";
import { buildArticleMetadata } from "@/lib/metadata";

const PATH = "/animals/donkey";
const TITLE = "Donkey: The Domestic Equid Descended From a Critically Endangered Wild Ass";
const DESC =
  "The donkey (Equus asinus) is a domesticated equid of dry, marginal country: long-eared, sure-footed and loud-voiced, and descended from the African wild ass, which survives in the wild only in tiny numbers.";

export const metadata: Metadata = buildArticleMetadata({
  title: TITLE,
  description: DESC,
  path: PATH,
  publishedTime: "2026-08-04",
  modifiedTime: "2026-08-04",
  ogImage: getAnimalOgImage("donkey"),
});

export default function DonkeyPage() {
  return (
    <AnimalProfileLayout
      commonName="Donkey"
      scientificName="Equus asinus"
      pageTitle={TITLE}
      description={DESC}
      path={PATH}
      parentCategory="Mammals"
      parentCategoryHref="/animal-encyclopedia/mammals"
      tags={["Domestic animals", "Equids", "Working animals"]}
      image={getAnimalImage("donkey") ?? undefined}
      galleryImages={getAnimalGalleryImages("donkey")}
      sources={ANIMAL_SOURCES["donkey"]}
      publishedDate="2026-08-04"
      modifiedDate="2026-08-04"
      overview={
        <>
          <p>
            The donkey (<em>Equus asinus</em>) is a domestic member of the horse family, Equidae, and one of three broad groups of living equids alongside horses and zebras. It is a compact, long-eared animal with a stiff, upright mane that stands rather than falling to one side, usually with little or no forelock over the forehead, and a tail that carries a tuft of long hair at the tip instead of long hair along its whole length. Coat colours are commonly grey, brown or black, and many donkeys show a dark dorsal stripe along the back with a crossing stripe over the shoulders.
          </p>
          <p>
            Donkeys are easy to separate from horses once the differences are known. Compared with a horse of similar size, a donkey has proportionally much longer ears, narrower and more upright hooves, a shorter and coarser mane, and a very different voice: the loud, carrying two-part bray rather than a whinny. Donkeys are also associated with different ground. Where horses are typically pictured on open grassland, donkeys are animals of dry, stony, broken country, and they are noted for being sure-footed on slopes and rough footing that would be awkward for many larger grazers.
          </p>
          <p>
            The most important point about the donkey is a contrast rather than a description. The domestic donkey is abundant and found across much of the world, yet the wild animal it descends from, the African wild ass (<em>Equus africanus</em>) of northeastern Africa, has been assessed as Critically Endangered and survives in the wild only in very small numbers. A familiar farmyard animal and one of the most threatened wild equids are two faces of the same lineage. Figures for size, age and population vary widely by breed, region and source, so this profile prefers ranges and qualitative description; specific numbers should be checked against authoritative references such as the IUCN Red List, the FAO, Encyclopaedia Britannica or Animal Diversity Web.
          </p>
        </>
      }
      habitat={
        <p>
          Donkeys are kept almost everywhere people live, so their &quot;habitat&quot; is largely the landscape their keepers occupy: smallholdings, villages, rangeland, mountain paths and dry farmland. What the animal itself is shaped for is narrower. Its ancestry lies in arid and semi-arid North African country of rock, scrub and sparse grazing, and donkeys are generally regarded as better suited to hot, dry, marginal ground than to cold, wet, heavily grazed pasture. Prolonged wet and cold are often described as poorly matched to a coat that is not strongly water-shedding. Free-roaming and feral donkeys turn up mainly in dry rangelands and deserts where domestic animals have escaped or been released, and the exact conditions any given population tolerates vary with region, breed type and season.
        </p>
      }
      diet={
        <p>
          Donkeys are herbivores and, like other equids, digest plant material by fermentation in an enlarged hindgut rather than in a multi-chambered stomach. In natural-history terms they are best described as mixed feeders that both graze and browse, taking grasses, herbs, and a fair share of coarse, woody and fibrous material such as shrubs, bark and dry stems that many other grazers pass over. This tolerance of low-quality forage is one reason the species is associated with marginal land. Donkeys are also frequently described as efficient with water relative to similar-sized grazers, an ancestral trait of dry-country equids. This page describes what donkeys eat in general terms only; it gives no feeding plans, quantities or dietary prescriptions.
        </p>
      }
      behavior={
        <>
          <p>
            Donkeys are social animals that form associations with other donkeys and, where they live alongside them, with other livestock. Free-roaming populations are usually described as looser and more flexible in grouping than typical horse bands, with pairs and small groups forming and dissolving, though this varies with region, density and how much water and forage are available. Strong bonds between particular individuals are widely reported, and separation from a close companion is a well-known source of distress.
          </p>
          <p>
            The bray is the donkey&apos;s signature. It is loud, two-part and carries across long distances, which makes sense for an animal whose ancestors were scattered thinly over open, dry terrain rather than gathered in dense herds. Donkeys also communicate through ear position, posture and scent.
          </p>
          <p>
            Donkeys have a reputation for stubbornness that is better understood as a difference in threat response. Rather than fleeing first, a donkey confronted with something unfamiliar will often stop, look and assess, and may simply refuse to move until the situation resolves. Horses in the same situation are more likely to bolt. What reads as obstinacy is generally interpreted as caution appropriate to rocky country where headlong flight is dangerous. Donkeys are also known to be alert to intruders, which is one reason some pastoral systems keep them among grazing flocks.
          </p>
        </>
      }
      humanInteraction={
        <>
          <p>
            Few animals have carried more of human history. Donkeys have been used for thousands of years to move loads, people, water and goods, especially in dry regions, mountainous terrain and places where roads are poor or absent. They remain central to daily life for many rural households, where a donkey can be the difference between water fetched and water not fetched. Alongside working roles, donkeys appear in mythology, religious tradition and folklore across the Mediterranean, the Near East, Africa and Asia, and in modern times many live in sanctuaries, on smallholdings or as companion animals.
          </p>
          <p>
            The relationship is not uniformly positive. Working donkeys in low-income regions are frequently the subject of welfare concern, and demand for donkey hides used in some traditional preparations has been reported as a pressure on donkey populations in parts of Africa and Asia, prompting trade restrictions in several countries. Elsewhere, feral donkeys are treated as an introduced species and managed for their effects on native vegetation and water sources. This page is natural history, not guidance: questions about the health, handling, feeding or keeping of a specific donkey belong with a qualified veterinarian and with recognised equine and donkey welfare organisations, not with a general encyclopedia.
          </p>
        </>
      }
      extraSections={[
        {
          heading: "Distribution",
          body: (
            <>
              <p>
                The donkey&apos;s origin lies in northeastern Africa, the range of its wild ancestor. From there, domestic donkeys spread with people: through Egypt and the Near East, around the Mediterranean, into Europe, and eastward across Asia. Because donkeys travel well on poor roads and thrive where fodder is thin, they moved as trade and settlement moved. From the sixteenth century onward they were carried by ship to the Americas, and later to Australia and other regions, so the species is now found on every inhabited continent.
              </p>
              <p>
                That distribution has shifted. In heavily mechanised parts of Europe, North America and East Asia, working donkey numbers fell sharply through the twentieth century as engines replaced pack animals, and many surviving animals there are kept as companions, in sanctuaries or in conservation-grazing schemes. In much of Africa, South Asia, Central Asia and Latin America donkeys remain working animals in large numbers. Layered on top are feral populations descended from escaped or released domestic stock, notably in inland Australia and in the drylands of the southwestern United States and Mexico, where free-roaming donkeys are often called burros. Global and national totals are compiled by agricultural agencies and are revised regularly, so any single figure should be read as a snapshot rather than a fixed value.
              </p>
            </>
          ),
        },
        {
          heading: "Senses & Adaptations",
          body: (
            <>
              <p>
                The donkey&apos;s long ears are its most obvious feature and are usually explained in two ways at once: they gather sound across open country where companions and threats may be far off, and their large surface area is thought to help shed heat in warm climates. Like other equids, donkeys have eyes set high and well to the sides of the head, giving a wide field of view suited to detecting movement while the head is down feeding, with a comparatively narrow zone of overlap in front.
              </p>
              <p>
                Below the neck the adaptations are about ground and scarcity. Donkey hooves are typically narrower, deeper and more upright than a horse&apos;s, and the sure-footedness donkeys are known for on rocky slopes and narrow paths is generally attributed to that foot shape together with careful, deliberate movement. The hindgut-fermenting digestive system handles coarse, fibrous forage, and donkeys are widely described as needing less water than similar-sized grazers and as tolerating dehydration and rapid rehydration comparatively well, both traits consistent with dry-country ancestry. A small anatomical detail separates them from horses: donkeys typically carry the horny growths called chestnuts on the forelegs only, while horses usually have them on all four legs.
              </p>
            </>
          ),
        },
        {
          heading: "Lifespan & Life Stages",
          body: (
            <>
              <p>
                Gestation in donkeys is long for the animal&apos;s size, typically around twelve months and reported across a range of roughly eleven to fourteen months, which is generally longer than in horses. A single foal is the norm. Foals are precocial: they stand and follow the mother within hours of birth, and they nurse for several months before gradually shifting to forage. Sexual maturity is usually reached within the first year or two, but physical growth continues well beyond that, and the timing varies with breed type, nutrition and region.
              </p>
              <p>
                <strong>Under human care:</strong> donkeys are long-lived by livestock standards. Ages into the twenties are common where conditions are good, and thirties and beyond are reported for individual animals, particularly in sanctuaries and companion settings. Records vary and exceptional individuals should not be read as typical.
              </p>
              <p>
                <strong>Feral and free-roaming populations:</strong> there is no truly wild donkey to compare against, since the wild lineage is the African wild ass rather than the domestic animal. For feral donkeys, and for working donkeys in demanding conditions, reported lifespans are considerably shorter and much more variable, shaped by forage, water availability, workload, disease and management. These two settings should not be averaged together; a figure drawn from a sanctuary population describes something quite different from a figure drawn from free-roaming desert animals.
              </p>
            </>
          ),
        },
        {
          heading: "Conservation Context",
          body: (
            <>
              <p>
                The domestic donkey is a domesticated animal and is not the subject of a wild-species conservation assessment in the way a wild mammal is. Its wild ancestor is. The African wild ass (<em>Equus africanus</em>), from the arid Horn of Africa, has been assessed as Critically Endangered, with a very small remaining wild population and pressures reported from hunting, competition with livestock for scarce grazing and water, and interbreeding with free-roaming domestic donkeys, which erodes the distinctness of the wild lineage. That last point matters here: the abundance of the domestic form is itself part of the risk to the wild one.
              </p>
              <p>
                Conservation statuses are assessments made at a point in time and are revised as new survey work and new threats emerge; none of them should be treated as permanent. For the current listing, rationale and range information for the African wild ass and other equids, consult the IUCN Red List of Threatened Species directly rather than relying on a summary. Domestic donkey breeds are tracked separately again, through agricultural and livestock-diversity registers rather than through the Red List, and several regional breeds are recorded as rare.
              </p>
            </>
          ),
        },
        {
          heading: "What the Name Covers",
          body: (
            <>
              <p>
                &quot;Donkey&quot; refers to the domestic animal only. The older English word for the same animal is &quot;ass&quot;, still used in formal and scientific writing, and in Spanish-speaking regions and the American Southwest a donkey, particularly a small or free-roaming one, is often called a burro. Traditional terms distinguish a male (jack), a female (jenny or jennet) and a young animal (foal). None of these names marks a separate species; they are naming conventions for one domestic animal.
              </p>
              <p>
                &quot;Wild ass&quot;, by contrast, does refer to wild species, and it covers more than one. The African wild ass (<em>Equus africanus</em>) is the donkey&apos;s ancestor. The Asiatic wild ass or onager (<em>Equus hemionus</em>) and the kiang (<em>Equus kiang</em>) of the Tibetan Plateau are separate wild species that never gave rise to the domestic donkey. Free-roaming donkeys in Australia or the Americas are feral domestic animals, not wild asses, however wild they look.
              </p>
              <p>
                The scientific name is written in more than one way. Some sources use <em>Equus asinus</em> for the domestic donkey as a species in its own right; others write it as <em>Equus africanus asinus</em>, treating it as a domestic form of the wild species. Both appear in reputable literature, and the difference reflects a general disagreement about how to name domesticated animals rather than any dispute about what the animal is.
              </p>
            </>
          ),
        },
        {
          heading: "Domestic, Feral and Wild",
          body: (
            <>
              <p>
                The donkey is a fully domesticated animal. Archaeological and genetic work points to domestication in northeastern Africa several thousand years ago, from African wild ass stock, with the animal spreading outward from there as a pack and transport animal. There is no wild population of domestic donkeys anywhere; every donkey alive is either kept by people or descended from animals that were.
              </p>
              <p>
                Free-roaming donkeys are therefore feral rather than wild. Feral populations in Australia, the Americas and elsewhere descend from domestic animals and can persist and breed without human help, which is why they are treated in some regions as an introduced species with effects on native plants and water sources. Wild, in the strict sense, applies only to the African wild ass and to the other wild ass species, none of which are the same animal as the donkey in a field.
              </p>
              <p>
                Donkeys also cross with horses, which are a separate species (<em>Equus caballus</em>). A mule is the offspring of a male donkey and a female horse; a hinny results from the reverse pairing. Both are hybrids, not species, and both are effectively sterile, because the two parent species differ in chromosome number and the hybrid cannot reliably produce viable gametes. Very rare exceptions in female mules have been reported, but mules are not a self-sustaining population: each one is produced from a donkey and a horse. Zebras, the third equid group, can also hybridise with donkeys, and those hybrids are likewise sterile.
              </p>
            </>
          ),
        },
      ]}
      faqs={[
        {
          question: "How is a donkey different from a horse?",
          answer:
            "Donkeys and horses are separate species within the genus Equus. A donkey typically has noticeably longer ears, an upright stiff mane with little or no forelock, a tail tufted at the tip rather than long-haired along its length, and narrower, more upright hooves. Donkeys bray rather than whinny, and they are generally associated with dry, rocky, marginal ground, while horses are more often pictured on open grassland.",
        },
        {
          question: "Are mules and hinnies the same as donkeys?",
          answer:
            "No. A mule is the hybrid offspring of a male donkey and a female horse, and a hinny results from the reverse cross. Both are hybrids rather than species, and both are effectively sterile, because donkeys and horses differ in chromosome number, so the hybrid cannot reliably produce viable gametes. Rare exceptions in female mules have been reported, but breeding mules to mules is not a workable way to produce more.",
        },
        {
          question: "Is the donkey endangered?",
          answer:
            "The domestic donkey is a domesticated animal and is not assessed as a wild species on the IUCN Red List. Its wild ancestor, the African wild ass (Equus africanus), is a very different case: it has been assessed as Critically Endangered, with a small remaining wild population in the Horn of Africa. Donkeys are numerous worldwide while the wild lineage behind them is among the most threatened equids. Red List assessments are revised, so check the current entry.",
        },
        {
          question: "Why are donkeys suited to dry, rugged country?",
          answer:
            "Donkeys descend from an ancestor of arid and semi-arid North African country, and much about them reflects that. They are typically sure-footed on broken, rocky ground, take a wide range of coarse plant material as both grazers and browsers, and are described as efficient with water compared with many similar-sized grazers. Their large ears are usually explained as aiding both hearing across open terrain and heat loss. Tolerance varies with region, condition and the individual population concerned.",
        },
        {
          question: "Do donkeys still live as wild animals?",
          answer:
            "Truly wild donkeys, as opposed to domestic ones, do not exist: the donkey is a domesticated form, and the wild lineage is the African wild ass. Free-roaming donkeys are common in several regions, notably parts of Australia and the Americas, but these are feral populations descended from domestic stock rather than wild ancestors. Feral animals can behave much like wild ones, and in some places they are managed for their effects on native vegetation.",
        },
      ]}
      quickFacts={[
        { label: "Group", value: "Equids (horse family, Equidae); domestic species" },
        { label: "Scientific name", value: "Equus asinus, also written Equus africanus asinus" },
        { label: "Wild ancestor", value: "African wild ass (Equus africanus), assessed as Critically Endangered" },
        { label: "Height at the shoulder", value: "ADW gives about 1.1–1.4 m; breeds range from miniature to large draught types" },
        { label: "Weight", value: "Roughly 80–450 kg across types; miniature types far lighter than large draught types" },
        { label: "Diet", value: "Herbivore; grazes and browses, including coarse, fibrous plant material" },
        { label: "Distinctive traits", value: "Long ears, upright mane with little or no forelock, tufted tail, loud two-part bray" },
        { label: "Typical longevity", value: "Commonly into the twenties or beyond under good care; shorter and more variable in feral or hard-working populations" },
      ]}
      relatedLinks={[
        {
          label: "Mule Profile",
          href: "/animals/mule",
          description: "The donkey-horse hybrid this page's own FAQ discusses",
        },
        {
          label: "Horse Profile",
          href: "/animals/horse",
          description: "The other domestic equid, and the closest familiar comparison for a donkey",
        },
        {
          label: "Zebra Profile",
          href: "/animals/zebra",
          description: "The striped wild equids of Africa",
        },
        {
          label: "Animal Domestication",
          href: "/animal-domestication",
          description: "How wild species became domestic ones, and what that process involves",
        },
        {
          label: "Animal Food and Diet",
          href: "/animal-food-and-diet",
          description: "How feeding categories work across the animal world",
        },
        {
          label: "Domestic Animals",
          href: "/domestic-animals",
          description: "Companion, livestock and working animals kept by people",
        },
        {
          label: "Endangered Animals",
          href: "/endangered-animals",
          description: "Red List context, including threatened wild equids",
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
