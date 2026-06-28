import type { Metadata } from "next";
import AnimalProfileLayout from "@/components/AnimalProfileLayout";
import { ANIMAL_SOURCES } from "@/lib/educational/animal-sources";
import { getAnimalGalleryImages, getAnimalImage, getAnimalOgImage } from "@/lib/images/animal-images";
import { buildArticleMetadata } from "@/lib/metadata";

const PATH = "/animals/wild-turkey";
const TITLE = "Wild Turkey: North America's Forest Bird";
const DESC =
  "Learn about the Wild Turkey (Meleagris gallopavo), a large ground-dwelling bird of North American woodlands, its biology, ecology, and conservation status.";

export const metadata: Metadata = buildArticleMetadata({
  title: TITLE,
  description: DESC,
  path: PATH,
  publishedTime: "2026-06-28",
  modifiedTime: "2026-06-28",
  ogImage: getAnimalOgImage("wild-turkey"),
});

export default function WildTurkeyPage() {
  return (
    <AnimalProfileLayout
      commonName="Wild Turkey"
      scientificName="Meleagris gallopavo"
      pageTitle={TITLE}
      description={DESC}
      path={PATH}
      parentCategory="Birds"
      parentCategoryHref="/animal-encyclopedia/birds"
      tags={["Bird","Galliform","Woodland"]}
      image={getAnimalImage("wild-turkey") ?? undefined}
      galleryImages={getAnimalGalleryImages("wild-turkey")}
      sources={ANIMAL_SOURCES["wild-turkey"]}
      publishedDate="2026-06-28"
      modifiedDate="2026-06-28"
      overview={
        <>
          <p>
            The Wild Turkey (<em>Meleagris gallopavo</em>) is a large, ground-dwelling bird associated with woodlands and forest edges in parts of North America. It is best known for the showy displays of adult males, called toms or gobblers, which fan their tails, swell their wattles, and produce the resonant gobbling calls that carry across spring forests. The species is the wild ancestor of the familiar domestic turkey.
          </p>
          <p>
            Once heavily reduced across portions of its historic range, the Wild Turkey has recovered across much of that range over the past century. Today it is a widely recognized component of many North American woodland and edge habitats. The IUCN Red List currently assesses the species as Least Concern, an assessment that reflects present conditions and can be revised as circumstances change.
          </p>
          <p>
            As an omnivore that forages largely on the ground, the Wild Turkey occupies an interesting place between the forest floor and the canopy: it feeds among leaf litter by day and roosts in trees by night. Its mix of cautious wariness and conspicuous seasonal display has made it one of the more familiar large birds of the continent.
          </p>
          <h3>Taxonomy and animal group</h3>
          <p>
            The Wild Turkey is classified as <em>Meleagris gallopavo</em>, a member of the order Galliformes (the landfowl, which also includes pheasants, grouse, and quail). It is most commonly placed today in the family Phasianidae, although turkeys were historically treated as their own family, the Meleagrididae, and some sources still recognize that grouping or a subfamily-level placement (Meleagridinae); classifications differ among authorities. It is one of two living turkey species in the genus <em>Meleagris</em>, the other being the Ocellated Turkey (<em>Meleagris ocellata</em>) of parts of Central America. Several recognized subspecies of <em>Meleagris gallopavo</em> differ subtly in plumage and regional distribution. The domestic turkey is a domesticated form derived from this wild species.
          </p>
          <h3>Appearance and recognition</h3>
          <p>
            The Wild Turkey is a large bird with a plump body, long legs, and a small, mostly bare head. Plumage is dark overall but iridescent, glinting bronze, copper, green, and gold in good light. Adult males are notably larger than females and bear fleshy ornaments on the head and neck, including wattles and a fleshy projection called a snood, which become more vivid during display. Many males also carry a tuft of bristle-like feathers, known as a beard, on the breast. When displaying, a tom fans its broad tail and puffs its body feathers, while the more cryptically colored hen tends to be smaller and duller, an aid to concealment while nesting.
          </p>
        </>
      }
      habitat={
        <p>
          The Wild Turkey is found in parts of North America, where it is associated with mature woodlands, mixed forests, and the edges where trees meet open ground such as clearings, fields, and grassy margins. It favors landscapes that combine trees for roosting and cover with more open areas for foraging. Its distribution spans varied regions across parts of the continent, and populations have re-established in many areas following historic declines; the species has also been introduced beyond portions of its original range. Rather than occupying every habitat uniformly, it occurs in a patchwork shaped by the availability of suitable forest and edge.
        </p>
      }
      diet={
        <p>
          The Wild Turkey is an omnivore with a varied, opportunistic diet that shifts with the seasons. It forages mainly on the ground, scratching through leaf litter for acorns and other nuts, seeds, berries, buds, leaves, and roots, and it readily takes insects and other small invertebrates when they are available. Hard mast such as acorns is an especially important food where oaks are common, helping the birds build reserves heading into colder months. Young birds, called poults, rely heavily on insects in their early weeks, when the protein supports rapid growth.
        </p>
      }
      behavior={
        <>
          <p>
            Wild Turkeys are social for much of the year, often moving and feeding in flocks whose makeup changes with the seasons. They are strong runners and, despite their size, capable of swift bursts of flight over short distances; at night they typically fly up to roost in trees. In spring, males display and gobble to attract females, gathering in areas where several toms may compete for attention. Females nest on the ground, laying eggs in a concealed scrape and incubating them alone; the precocial poults can walk and feed soon after hatching and follow the hen as she leads them to food.
          </p>
          <p>
            As a large, ground-foraging omnivore, the Wild Turkey plays several roles in North American woodland ecosystems. By feeding on seeds and fruits it can help disperse some plants, while its consumption of insects places it within the broader web of forest-floor food chains. Turkeys are themselves a food source for a range of predators, with eggs and young being especially vulnerable to mammals, reptiles, and other birds. Their scratching and foraging activity disturbs leaf litter, a minor but real influence on the small-scale dynamics of the forest floor.
          </p>
        </>
      }
      humanInteraction={
        <p>
          The Wild Turkey is widely recognized across parts of North America and figures prominently in regional culture and natural history. Its recovery across much of its range is often cited as a notable wildlife conservation outcome, and the IUCN Red List currently assesses it as Least Concern, an assessment that can be revised over time. Although turkeys are generally wary, they sometimes habituate to areas where people are present; a Wild Turkey is a wild bird, not a pet, and should be observed from a respectful distance. Anyone with concerns about turkeys behaving boldly or causing conflict near homes or communities should contact local wildlife authorities for appropriate guidance.
        </p>
      }
      faqs={[
        {
          question: "Is the Wild Turkey the same as a domestic turkey?",
          answer:
            "The Wild Turkey (Meleagris gallopavo) is the wild ancestor of the domestic turkey. Domestic turkeys are a domesticated form of this same species, selectively bred over time, and they differ in appearance and behavior from their wild relatives.",
        },
        {
          question: "Can Wild Turkeys fly?",
          answer:
            "Yes. Despite their large size, Wild Turkeys can fly in strong bursts over short distances and routinely fly up into trees to roost at night, though they spend much of the day on the ground.",
        },
        {
          question: "What is the conservation status of the Wild Turkey?",
          answer:
            "The IUCN Red List currently assesses the Wild Turkey as Least Concern. The species recovered across much of its range after historic declines, though conservation assessments reflect present conditions and can change over time.",
        },
        {
          question: "Why do male turkeys gobble and fan their tails?",
          answer:
            "Adult males, called toms, gobble and fan their tails as part of spring courtship displays, often alongside swollen wattles and puffed body feathers. These displays help attract females and signal to other males.",
        },
      ]}
      quickFacts={[
        { label: "Scientific name", value: "Meleagris gallopavo" },
        { label: "Animal group", value: "Bird (landfowl)" },
        { label: "Family or order", value: "Phasianidae (formerly Meleagrididae); order Galliformes" },
        { label: "Size", value: "Large ground bird; males notably larger than females" },
        { label: "Diet", value: "Omnivore (acorns, seeds, berries, insects)" },
        { label: "Habitat", value: "Woodlands and forest edges" },
        { label: "Range", value: "Found in parts of North America" },
        { label: "Conservation status", value: "Least Concern (IUCN Red List; can change)" },
      ]}
      relatedLinks={[
        { label: "Peacock Profile", href: "/animals/peacock", description: "Another large galliform bird" },
        { label: "Sandhill Crane", href: "/animals/sandhill-crane", description: "Another large North American bird" },
        { label: "Bald Eagle", href: "/animals/bald-eagle", description: "A North American bird of prey" },
        { label: "North American fauna", href: "/fauna/continents/north-america", description: "Animals of North America" },
        { label: "Birds", href: "/animal-encyclopedia/birds" },
      ]}
    />
  );
}
