import type { Metadata } from "next";
import AnimalProfileLayout from "@/components/AnimalProfileLayout";
import { ANIMAL_SOURCES } from "@/lib/educational/animal-sources";
import { getAnimalGalleryImages, getAnimalImage, getAnimalOgImage } from "@/lib/images/animal-images";
import { buildArticleMetadata } from "@/lib/metadata";

const PATH = "/animals/goliath-birdeater";
const TITLE = "Goliath Birdeater: World's Largest Tarantula";
const DESC =
  "Learn about the Goliath birdeater (Theraphosa blondi), the world's largest spider by mass, a burrowing rainforest tarantula of northern South America.";

export const metadata: Metadata = buildArticleMetadata({
  title: TITLE,
  description: DESC,
  path: PATH,
  publishedTime: "2026-06-28",
  modifiedTime: "2026-06-28",
  ogImage: getAnimalOgImage("goliath-birdeater"),
});

export default function GoliathBirdeaterPage() {
  return (
    <AnimalProfileLayout
      commonName="Goliath Birdeater"
      scientificName="Theraphosa blondi"
      pageTitle={TITLE}
      description={DESC}
      path={PATH}
      parentCategory="Insects & Invertebrates"
      parentCategoryHref="/animal-encyclopedia/insects"
      tags={["Arachnid","Tarantula","Rainforest"]}
      image={getAnimalImage("goliath-birdeater") ?? undefined}
      galleryImages={getAnimalGalleryImages("goliath-birdeater")}
      sources={ANIMAL_SOURCES["goliath-birdeater"]}
      publishedDate="2026-06-28"
      modifiedDate="2026-06-28"
      overview={
        <>
          <p>
            The Goliath birdeater (<em>Theraphosa blondi</em>) is a large tarantula often described as the biggest spider in the world by body mass. It belongs to the broad group of New World tarantulas and is associated with humid forest floors in parts of northern South America, where it shelters in burrows. Despite its dramatic name and reputation, it is a shy, ground-dwelling ambush hunter rather than the aggressive creature that popular media sometimes suggests.
          </p>
          <p>
            The common name is misleading. Although early accounts described a spider feeding on a bird, the Goliath birdeater rarely takes birds at all. Its everyday diet is made up mostly of invertebrates and occasional small vertebrates that it encounters near its burrow. Understanding this helps separate the animal from the sensational stories often attached to it.
          </p>
          <p>
            This profile is educational only. The Goliath birdeater can produce irritating hairs and is capable of biting, but it is not regarded as deadly to people. It is best understood as one of the more remarkable invertebrates of the South American rainforest, notable for its size, its burrowing habits, and its role as a forest-floor predator.
          </p>
          <h3>Taxonomy and animal group</h3>
          <p>
            The Goliath birdeater is an arachnid, not an insect, placed in the order Araneae and the family Theraphosidae, the family that contains the tarantulas. Its scientific name is <em>Theraphosa blondi</em>, and it is one of several large-bodied species in the genus <em>Theraphosa</em>. As a tarantula it has eight legs, two main body sections (a fused head-and-thorax region and an abdomen), and fang-bearing mouthparts called chelicerae. It is an invertebrate, meaning it lacks an internal skeleton and instead relies on a hardened external cuticle for support.
          </p>
          <h3>Appearance and recognition</h3>
          <p>
            This is a heavy, robustly built tarantula with a dense covering of brown to reddish-brown hairs over its legs and body, giving it a velvety appearance. Its great bulk, rather than its leg length alone, is what earns it recognition as the largest spider by mass, and mature individuals are noticeably stout and broad. Like other New World tarantulas it carries fine urticating (irritating) hairs on its abdomen, which it can release defensively. Its eight eyes are small and clustered, and the prominent chelicerae and fangs are visible at the front of the body, used for subduing prey.
          </p>
        </>
      }
      habitat={
        <p>
          The Goliath birdeater is found in parts of northern South America, where it occurs in humid lowland and rainforest environments. It is a burrowing species associated with the forest floor, typically sheltering in burrows that it may dig itself or take over from other animals, often near root systems or in damp, shaded ground. Its distribution is tied to warm, moist tropical habitats rather than to any single country, and like many rainforest invertebrates its precise range is patchy and shaped by suitable soil and humidity. It should be understood as occurring in parts of this region, not across the entire continent.
        </p>
      }
      diet={
        <p>
          Despite its name, the Goliath birdeater rarely eats birds. It is primarily a predator of invertebrates and will also take small vertebrates that it encounters near its burrow, such as small amphibians or other ground-dwelling animals. As an ambush hunter, it generally waits near the burrow entrance and seizes prey that comes within reach, using its fangs to immobilize it before feeding. Like other spiders, it cannot chew and instead relies on digestive fluids to break down its food before consuming the liquefied contents.
        </p>
      }
      behavior={
        <>
          <p>
            The Goliath birdeater is largely solitary and nocturnal, spending daylight hours within its burrow and becoming active to hunt or move under cover of darkness. When disturbed it may adopt a defensive posture, flick urticating hairs from its abdomen, or produce a hissing sound by rubbing leg structures together, behaviors that serve as warnings rather than signs of pursuit. Females can live for many years and periodically molt to grow, shedding the old cuticle, while males typically have shorter adult lifespans. Reproduction involves the female producing an egg sac, which she guards within or near the burrow until the spiderlings emerge.
          </p>
          <p>
            As a forest-floor predator, the Goliath birdeater helps regulate populations of the invertebrates and small animals it feeds on, contributing to the balance of the rainforest&#39;s ground-level food web. Its burrows can also influence the immediate soil environment and may provide microhabitats used by other organisms. In turn, the spider and its eggs and young serve as a food source for other rainforest predators. Like many large invertebrates, it is part of a complex web of interactions that links the small animals of the forest floor to larger ecological processes.
          </p>
        </>
      }
      humanInteraction={
        <p>
          The Goliath birdeater&#39;s name and size give it a fearsome reputation, but it is not considered deadly to people. It can deliver a bite and can release urticating hairs that irritate skin, eyes, or airways, so it is best observed from a distance and never handled. This profile does not provide handling, capture, keeping, or first-aid guidance; anyone who experiences a bite, skin reaction, or other symptoms should seek advice from qualified medical professionals or local health authorities. Concerns about wildlife encounters are best directed to local wildlife authorities. The species has not been assessed by the IUCN Red List, so no formal global conservation status is assigned to it; like many rainforest invertebrates, its long-term outlook is linked to the health of its forest habitat.
        </p>
      }
      faqs={[
        {
          question: "Does the Goliath birdeater actually eat birds?",
          answer:
            "Only rarely. Despite its name, it feeds mostly on invertebrates and occasionally on small vertebrates it encounters near its burrow, and birds are not a normal part of its diet.",
        },
        {
          question: "Is the Goliath birdeater dangerous to humans?",
          answer:
            "It is not considered deadly to people. It can bite and can release irritating hairs, so it should be observed from a distance and never handled, and any bite or reaction should be discussed with qualified medical professionals.",
        },
        {
          question: "Why is it called the largest spider in the world?",
          answer:
            "It is generally regarded as the largest spider by body mass because of its heavy, bulky build. Some other spiders may have a greater leg span, but the Goliath birdeater is exceptionally robust and heavy.",
        },
        {
          question: "What is the Goliath birdeater's conservation status?",
          answer:
            "It has not been assessed by the IUCN Red List, so it has no formal global conservation category. As with many rainforest invertebrates, its future is tied to the condition of its forest habitat.",
        },
      ]}
      quickFacts={[
        { label: "Scientific name", value: "Theraphosa blondi" },
        { label: "Animal group", value: "Invertebrate (arachnid, tarantula)" },
        { label: "Family/order", value: "Theraphosidae; order Araneae" },
        { label: "Size", value: "Among the largest spiders by body mass; heavy, bulky build" },
        { label: "Diet", value: "Mostly invertebrates and occasional small vertebrates" },
        { label: "Habitat", value: "Humid rainforest floor; lives in burrows" },
        { label: "Range", value: "Found in parts of northern South America" },
        { label: "Conservation status", value: "Not assessed by the IUCN Red List" },
      ]}
      relatedLinks={[
        { label: "Tarantula", href: "/animals/tarantula", description: "Tarantulas more broadly" },
        { label: "Spider", href: "/animals/spider", description: "Spiders more broadly" },
        { label: "Amazonian Giant Centipede", href: "/animals/amazonian-giant-centipede", description: "Another large Amazon invertebrate" },
        { label: "South American fauna", href: "/fauna/continents/south-america", description: "Animals of South America" },
        { label: "Insects & Invertebrates", href: "/animal-encyclopedia/insects" },
      ]}
    />
  );
}
