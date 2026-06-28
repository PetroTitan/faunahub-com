import type { Metadata } from "next";
import AnimalProfileLayout from "@/components/AnimalProfileLayout";
import { ANIMAL_SOURCES } from "@/lib/educational/animal-sources";
import { getAnimalGalleryImages, getAnimalImage, getAnimalOgImage } from "@/lib/images/animal-images";
import { buildArticleMetadata } from "@/lib/metadata";

const PATH = "/animals/european-otter";
const TITLE = "European Otter: Riverine Mustelid Facts";
const DESC =
  "The European otter (Lutra lutra) is a semi-aquatic mustelid of rivers, wetlands and coasts. Learn its habitat, diet, ecology and Near Threatened status.";

export const metadata: Metadata = buildArticleMetadata({
  title: TITLE,
  description: DESC,
  path: PATH,
  publishedTime: "2026-06-27",
  modifiedTime: "2026-06-27",
  ogImage: getAnimalOgImage("european-otter"),
});

export default function EuropeanOtterPage() {
  return (
    <AnimalProfileLayout
      commonName="European Otter"
      scientificName="Lutra lutra"
      pageTitle={TITLE}
      description={DESC}
      path={PATH}
      parentCategory="Mammals"
      parentCategoryHref="/animal-encyclopedia/mammals"
      tags={["Mammal","Mustelid","Semi-aquatic"]}
      image={getAnimalImage("european-otter") ?? undefined}
      galleryImages={getAnimalGalleryImages("european-otter")}
      sources={ANIMAL_SOURCES["european-otter"]}
      publishedDate="2026-06-27"
      modifiedDate="2026-06-27"
      overview={
        <>
          <p>
            The European otter (<em>Lutra lutra</em>), also widely known as the Eurasian otter, is a semi-aquatic carnivorous mammal closely tied to freshwater and some coastal habitats. As a member of the weasel family, it spends much of its life in and around rivers, lakes and wetlands, where it hunts and rests. Its sleek body, dense fur and webbed feet reflect a life adapted to moving easily between water and land.
          </p>
          <p>
            The species is associated with a broad band of habitats across parts of Europe and Asia, occurring along waterways from small streams to estuaries and stretches of coast. After serious declines in many regions during the twentieth century, linked to water pollution and persecution, populations have recovered in a number of areas where water quality and protection improved. This recovery is uneven, and conditions still vary considerably from place to place.
          </p>
          <p>
            On the IUCN Red List, the European otter is currently assessed as Near Threatened. Such assessments reflect the best available evidence at a point in time and can change as new information emerges or as conditions on the ground shift. The otter is often regarded as an indicator of healthy aquatic systems, and its presence is frequently used as a sign of clean, well-functioning rivers and wetlands.
          </p>
          <h3>Taxonomy and animal group</h3>
          <p>
            The European otter is a mammal in the family Mustelidae, the group that also includes weasels, badgers, martens and other otters. Within that family it belongs to the otter subfamily and the genus <em>Lutra</em>, with the scientific name <em>Lutra lutra</em>. It is one of several otter species worldwide, and should not be confused with marine-focused otters of other genera; the name Eurasian otter is often used to distinguish it by its wide range across parts of Europe and Asia. As a carnivoran mustelid, it is built for an aquatic predatory lifestyle rather than for the burrowing or terrestrial habits of some of its relatives.
          </p>
          <h3>Appearance and recognition</h3>
          <p>
            This otter has a long, streamlined body, a thick muscular tail that tapers toward the tip, and short limbs with webbed feet that aid swimming. Its fur is typically brown above and paler, often greyish or cream, on the throat and underside, and the dense coat traps air to help insulate the animal in cold water. The head is broad and flattened with a blunt muzzle, small ears, and prominent whiskers that help detect prey in murky conditions. Its overall shape, low profile in the water, and trailing wake can help distinguish it from similar-looking semi-aquatic animals at a distance.
          </p>
        </>
      }
      habitat={
        <p>
          The European otter is found in parts of Europe and Asia, where it occurs along rivers, streams, lakes, marshes and other wetlands, and in some areas extends to estuaries and stretches of coastline. It favours places with clean water, abundant prey and bankside cover such as vegetation, tree roots or rocky crevices that offer shelter and resting sites. Its distribution within this broad region is patchy and shaped by local water quality, habitat condition and history, with strong populations in some catchments and sparse or recovering ones in others. It is best described as occurring across parts of its range rather than uniformly throughout any country or continent.
        </p>
      }
      diet={
        <p>
          The diet of the European otter is dominated by fish, which it pursues and captures underwater, but it is an opportunistic predator that also takes amphibians, crustaceans and, less often, aquatic invertebrates, small mammals or birds. The balance of prey shifts with season, location and availability, so individuals in coastal areas may rely more heavily on different species than those in inland rivers. Hunting usually takes place in or near the water, with the otter relying on agility, keen senses and sensitive whiskers to locate and seize prey. Smaller items may be eaten in the water, while larger catches are often brought ashore.
        </p>
      }
      behavior={
        <>
          <p>
            European otters are generally solitary and maintain home ranges along stretches of waterway, using scent marks to communicate with others. They are active across day and night depending on disturbance and habitat, and they rest in sheltered sites known as holts or in dense bankside cover. Females raise their young, called cubs, in a den, caring for them over an extended period during which the cubs gradually learn to swim and hunt before becoming independent. Much of their behaviour centres on patrolling, feeding and grooming, the last of which keeps the insulating fur in good condition.
          </p>
          <p>
            As a predator near the top of freshwater and some coastal food webs, the European otter influences populations of fish and other aquatic prey and is part of the natural balance of these systems. Its dependence on clean water and healthy prey makes it sensitive to pollution and habitat change, which is why it is often treated as an indicator species for the condition of rivers and wetlands. Where otters are present and thriving, it frequently signals functioning aquatic ecosystems with good water quality and connected habitats. In this way the species links the health of waterways to the wider biodiversity they support.
          </p>
        </>
      }
      humanInteraction={
        <p>
          The European otter is a wild animal and not a pet, and it is generally shy and inclined to avoid people. Its recovery in many areas followed reductions in water pollution and improved legal protection, and continued conservation depends on maintaining clean water, suitable habitat and connected waterways. Otters can come into contact with human activities such as fisheries, road networks and waterway management, and any concerns about wildlife conflict are best directed to local wildlife authorities, who can advise within the relevant laws. People observing otters should do so calmly and at a distance, without attempting to feed, handle or disturb them.
        </p>
      }
      faqs={[
        {
          question: "Is the European otter the same as the Eurasian otter?",
          answer:
            "Yes. European otter and Eurasian otter are common names for the same species, Lutra lutra, and both are used to describe its wide range across parts of Europe and Asia.",
        },
        {
          question: "What does the European otter eat?",
          answer:
            "It feeds mainly on fish, and also takes amphibians, crustaceans and occasionally other small aquatic animals. The exact mix of prey varies with season, location and what is locally available.",
        },
        {
          question: "Is the European otter endangered?",
          answer:
            "On the IUCN Red List it is currently assessed as Near Threatened. This is an assessment that reflects current evidence and can change over time as conditions and information change.",
        },
        {
          question: "Are European otters dangerous to people?",
          answer:
            "European otters are wild animals that generally avoid people and are not kept as pets. They should be observed from a distance. Any wildlife conflict concerns should be directed to local wildlife authorities, and any injury from contact with wildlife should be assessed by a qualified medical professional or local health authority.",
        },
      ]}
      quickFacts={[
        { label: "Scientific name", value: "Lutra lutra" },
        { label: "Animal group", value: "Mammal (semi-aquatic carnivore)" },
        { label: "Family", value: "Mustelidae (weasel family)" },
        { label: "Also called", value: "Eurasian otter" },
        { label: "Diet", value: "Mainly fish; also amphibians and crustaceans" },
        { label: "Habitat", value: "Rivers, lakes, wetlands and some coasts" },
        { label: "Range", value: "Parts of Europe and Asia" },
        { label: "Conservation status", value: "Near Threatened (IUCN Red List)" },
      ]}
      relatedLinks={[
        { label: "Otter Profile", href: "/animals/otter", description: "Otters more broadly" },
        { label: "European Badger", href: "/animals/european-badger", description: "Another European mustelid" },
        { label: "Beaver Profile", href: "/animals/beaver", description: "Another freshwater mammal" },
        { label: "European fauna", href: "/fauna/continents/europe", description: "Animals of Europe" },
        { label: "Mammals", href: "/animal-encyclopedia/mammals" },
      ]}
    />
  );
}
