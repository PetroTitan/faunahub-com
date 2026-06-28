import type { Metadata } from "next";
import AnimalProfileLayout from "@/components/AnimalProfileLayout";
import { ANIMAL_SOURCES } from "@/lib/educational/animal-sources";
import { getAnimalGalleryImages, getAnimalImage, getAnimalOgImage } from "@/lib/images/animal-images";
import { buildArticleMetadata } from "@/lib/metadata";

const PATH = "/animals/burmese-python";
const TITLE = "Burmese Python: Facts, Range & Ecology";
const DESC =
  "The Burmese python (Python bivittatus) is a large non-venomous constrictor native to South and Southeast Asia, and an introduced population in Florida.";

export const metadata: Metadata = buildArticleMetadata({
  title: TITLE,
  description: DESC,
  path: PATH,
  publishedTime: "2026-06-28",
  modifiedTime: "2026-06-28",
  ogImage: getAnimalOgImage("burmese-python"),
});

export default function BurmesePythonPage() {
  return (
    <AnimalProfileLayout
      commonName="Burmese Python"
      scientificName="Python bivittatus"
      pageTitle={TITLE}
      description={DESC}
      path={PATH}
      parentCategory="Reptiles & Amphibians"
      parentCategoryHref="/animal-encyclopedia/reptiles"
      tags={["Reptile","Snake","Constrictor"]}
      image={getAnimalImage("burmese-python") ?? undefined}
      galleryImages={getAnimalGalleryImages("burmese-python")}
      sources={ANIMAL_SOURCES["burmese-python"]}
      publishedDate="2026-06-28"
      modifiedDate="2026-06-28"
      overview={
        <>
          <p>
            The Burmese python (<em>Python bivittatus</em>) is one of the largest snake species in the world, a heavy-bodied, non-venomous constrictor native to South and Southeast Asia. It is recognizable by its tan to grayish-brown background colour overlaid with dark, irregular blotches edged in black, a pattern that helps it blend into leaf litter and dappled forest floors. Like all pythons, it kills prey by constriction rather than venom.
          </p>
          <p>
            This species is widely known for two very different reasons. In its native range it is a notable component of regional ecosystems and is assessed by the IUCN as Vulnerable, facing pressures from habitat loss and harvesting. Separately, an introduced and now well-established population in the Florida Everglades has become a significant conservation and wildlife-management concern, where the snake is treated as an invasive species. This profile covers the animal&#39;s biology and both situations from an educational standpoint and does not provide any handling, removal, or keeping guidance.
          </p>
          <p>
            The Burmese python is a semi-aquatic, largely nocturnal animal that swims and climbs well. It is often discussed alongside the closely related Indian python (<em>Python molurus</em>), from which it was formally separated as a distinct species. Reports of very large individuals have made it a frequent subject of zoological and natural-history writing.
          </p>
          <h3>Taxonomy and animal group</h3>
          <p>
            The Burmese python belongs to the family Pythonidae, the pythons, within the order Squamata (scaled reptiles) — it is a reptile, not an amphibian. Its scientific name is <em>Python bivittatus</em>. It was long treated as a subspecies of the Indian python, under the name <em>Python molurus bivittatus</em>, and some sources (including parts of the management literature) still use that combination. It is now widely recognized as a distinct species, <em>Python bivittatus</em>, a change generally dated to around 2009. As a python, it is non-venomous and dispatches prey by constriction. Always consult current taxonomic and conservation databases, as classifications and names can be revised.
          </p>
          <h3>Appearance and recognition</h3>
          <p>
            This is a large, thick-bodied snake. In the wild it commonly reaches roughly 3 to 5 metres (about 10 to 16 feet), and exceptionally large individuals have been reported beyond that; reliable maximum lengths approach about 5.7 to 5.8 metres. Its base colour is typically tan, yellowish-brown, or grayish, marked along the back and sides with large, dark brown blotches bordered in black, often described as resembling a giraffe-like or map-like pattern. The head is relatively small for the body and frequently bears a dark, arrowhead- or spearpoint-shaped marking, with a light line running from near the nostril through the eye. Heat-sensing pits line the lips, helping the snake detect warm-bodied prey.
          </p>
        </>
      }
      habitat={
        <p>
          In its native South and Southeast Asian range, the Burmese python is found in parts of a variety of habitats, including grasslands, marshes and swamps, river valleys, rocky foothills, woodlands, and forest with open clearings. It is strongly associated with water, is a capable swimmer, and can remain submerged for extended periods; younger snakes also climb readily. In Florida, the introduced population is concentrated in the wetlands, sawgrass marshes, hardwood hammocks, and canal systems of the greater Everglades region of the southern part of the state. These descriptions indicate general habitat associations and are not a complete or precise range map; distribution varies by region and is documented in detail by sources such as the IUCN and USGS.
        </p>
      }
      diet={
        <p>
          The Burmese python is a carnivore that feeds mainly on mammals and birds, and may also take reptiles and amphibians; the size of prey generally increases as the snake grows. It is an ambush (&quot;sit-and-wait&quot;) predator that seizes prey with backward-curving teeth and then coils around it, killing by constriction rather than venom. In the Florida Everglades, studies led by the U.S. Geological Survey have documented an unusually broad diet spanning many native bird, mammal, and reptile species, including large prey such as white-tailed deer in some cases. This wide diet is part of why the introduced population is considered so disruptive to native wildlife.
        </p>
      }
      behavior={
        <>
          <p>
            Burmese pythons are generally solitary and largely nocturnal, spending much of their time concealed in vegetation, leaf litter, burrows, or water. They are not inherently aggressive toward people; like most snakes, any defensive behaviour is a response to feeling threatened or cornered, and they typically rely on camouflage and stillness to avoid detection. They are strong swimmers and, especially when young, agile climbers. Activity and movement can shift with temperature and season, and individuals may bask to warm themselves. As ambush predators, they can remain motionless for long periods while waiting for prey to pass within reach.
          </p>
          <p>
            In its native range, the Burmese python functions as a large predator of small to mid-sized vertebrates and is itself prey for larger predators when young. Its reproduction is notable: females are oviparous, laying clutches that commonly number in the dozens of eggs, and a female will coil around the clutch and brood it, twitching or shivering her muscles to generate warmth until the eggs hatch — an unusual form of maternal care among snakes. In Florida, the same biological traits that make the species successful — large size, broad diet, high reproductive output, and cryptic habits — have contributed to a dramatic ecological impact. USGS research has linked the established python population to sharp declines in native mammals such as raccoons, opossums, bobcats, and rabbits across parts of the Everglades, making it a textbook example of how an introduced predator can reshape a food web.
          </p>
        </>
      }
      humanInteraction={
        <p>
          For most people, a Burmese python is something seen in a zoo, museum, or documentary rather than in the wild. In its native range and in Florida alike, the calm, educational approach is the same: observe any large snake only from a distance and do not approach, touch, or attempt to move it. These are wild animals, not pets, and this profile offers no guidance on keeping, handling, capturing, or removing them. Anyone with concerns about a snake encounter, a possible bite, or an invasive-species sighting should contact local wildlife authorities or qualified professionals, and any medical worry should go to qualified medical professionals or local health authorities.
        </p>
      }
      extraSections={[
        {
          heading: "Is it venomous?",
          body: (
            <p>
              The Burmese python is non-venomous and is not poisonous. It has no venom glands or fangs and does not inject toxins; it subdues prey purely by constriction, using its muscular body to restrain animals it has seized. It is also not toxic to touch or eat in the sense of carrying a defensive poison. Because it is a large, powerful constrictor, it is still a wild animal that should be observed only from a respectful distance and never handled. This profile gives no first-aid, medical, or handling information; any concern about an encounter or injury should be directed to qualified medical professionals or local wildlife authorities.
            </p>
          ),
        },
        {
          heading: "Conservation context",
          body: (
            <p>
              In its native South and Southeast Asian range, the Burmese python has been assessed by the IUCN as Vulnerable, with documented pressures including habitat loss and harvesting; assessments note population decline as a basis for that listing. The introduced Florida population is a separate matter — there the species is managed as an invasive animal because of its impact on native wildlife, and agencies such as the U.S. Geological Survey study its biology and possible management tools. Conservation status and management designations can change over time, so consult the IUCN Red List and relevant wildlife agencies for the current listing and the latest information. This is framed as a conservation and management issue, with no removal, hunting, or control instructions provided here.
            </p>
          ),
        },
      ]}
      faqs={[
        {
          question: "Is the Burmese python venomous?",
          answer:
            "No. The Burmese python is non-venomous and not poisonous. It has no venom and subdues prey entirely by constriction, coiling around an animal it has seized. It is still a large wild animal and should never be approached or handled.",
        },
        {
          question: "Where do Burmese pythons live?",
          answer:
            "They are native to parts of South and Southeast Asia, where they occur in habitats such as grasslands, marshes, river valleys, and forests. A separate introduced population is established in the wetlands of the Florida Everglades. These are general associations, not a precise range map.",
        },
        {
          question: "Why are Burmese pythons a problem in Florida?",
          answer:
            "An introduced population has become established in the Everglades and is treated as an invasive species. U.S. Geological Survey research links it to steep declines in native mammals such as raccoons, opossums, and bobcats, making it a significant conservation and wildlife-management concern.",
        },
        {
          question: "What is the conservation status of the Burmese python?",
          answer:
            "In its native range, the IUCN has assessed it as Vulnerable, citing pressures like habitat loss and harvesting. Status can change, so check the current IUCN Red List. Its invasive status in Florida is a separate management designation, not a conservation listing.",
        },
      ]}
      quickFacts={[
        { label: "Scientific name", value: "Python bivittatus (family Pythonidae)" },
        { label: "Group", value: "Snake (reptile)" },
        { label: "Range", value: "Native to parts of South and Southeast Asia; introduced in Florida, USA (varies by region)" },
        { label: "Habitat", value: "Grasslands, marshes, swamps, river valleys, woodlands; strongly associated with water" },
        { label: "Diet", value: "Carnivore; mainly mammals and birds, killed by constriction (non-venomous)" },
        { label: "Conservation", value: "Assessed by IUCN as Vulnerable in its native range; check the Red List for current status" },
      ]}
      relatedLinks={[
        { label: "Reptiles & Amphibians", href: "/animal-taxonomy/reptiles-amphibians", description: "Snakes, lizards, turtles, crocodilians, frogs & salamanders" },
        { label: "Python", href: "/animals/python", description: "Pythons as a group" },
        { label: "Reticulated Python", href: "/animals/reticulated-python", description: "Another giant python" },
        { label: "Anaconda", href: "/animals/anaconda", description: "A giant constrictor" },
        { label: "Reptiles & Amphibians", href: "/animal-encyclopedia/reptiles" },
      ]}
    />
  );
}
