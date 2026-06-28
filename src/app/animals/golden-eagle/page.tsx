import type { Metadata } from "next";
import AnimalProfileLayout from "@/components/AnimalProfileLayout";
import { ANIMAL_SOURCES } from "@/lib/educational/animal-sources";
import { getAnimalGalleryImages, getAnimalImage, getAnimalOgImage } from "@/lib/images/animal-images";
import { buildArticleMetadata } from "@/lib/metadata";

const PATH = "/animals/golden-eagle";
const TITLE = "Golden Eagle: Mountain Raptor of Open Uplands";
const DESC =
  "The Golden Eagle (Aquila chrysaetos) is a large dark-brown bird of prey of mountains and open uplands. Learn its diet, behavior, ecology and conservation.";

export const metadata: Metadata = buildArticleMetadata({
  title: TITLE,
  description: DESC,
  path: PATH,
  publishedTime: "2026-06-27",
  modifiedTime: "2026-06-27",
  ogImage: getAnimalOgImage("golden-eagle"),
});

export default function GoldenEaglePage() {
  return (
    <AnimalProfileLayout
      commonName="Golden Eagle"
      scientificName="Aquila chrysaetos"
      pageTitle={TITLE}
      description={DESC}
      path={PATH}
      parentCategory="Birds"
      parentCategoryHref="/animal-encyclopedia/birds"
      tags={["Bird","Bird of prey","Mountain"]}
      image={getAnimalImage("golden-eagle") ?? undefined}
      galleryImages={getAnimalGalleryImages("golden-eagle")}
      sources={ANIMAL_SOURCES["golden-eagle"]}
      publishedDate="2026-06-27"
      modifiedDate="2026-06-27"
      overview={
        <>
          <p>
            The Golden Eagle (<em>Aquila chrysaetos</em>) is one of the most widely recognized large birds of prey, named for the warm golden feathers across the back of its head and neck. It is a powerful hunter of open landscapes, most often associated with mountains, foothills and unforested upland country where it soars on broad wings in search of prey.
          </p>
          <p>
            Found in parts of Europe, Asia, North America and North Africa, the Golden Eagle occupies a wide range of climates and elevations. Despite its broad distribution, it tends to favor wild, sparsely settled terrain, and individual pairs may hold large home ranges that they use across many years.
          </p>
          <p>
            On the IUCN Red List, the Golden Eagle is currently assessed as Least Concern. This is an assessment that reflects available evidence at the time of evaluation and can change as new data emerge or as conditions shift across the species&#39; range.
          </p>
          <h3>Taxonomy and animal group</h3>
          <p>
            The Golden Eagle, <em>Aquila chrysaetos</em>, is a bird in the family Accipitridae, which includes hawks, kites, harriers and many other eagles, within the order Accipitriformes. As a member of the genus <em>Aquila</em>, it belongs to the group often referred to as the booted or true eagles, distinguished in part by feathering that extends down the legs to the toes. Several subspecies are recognized across its range, differing in subtle features such as size and plumage tone, though all share the genus&#39; characteristic build and proportions.
          </p>
          <h3>Appearance and recognition</h3>
          <p>
            Adult Golden Eagles are large raptors with predominantly dark-brown plumage, set off by the golden to tawny feathers on the nape and crown that give the species its name. They have a strong hooked bill, powerful feathered legs, and large talons suited to grasping prey. In flight, the long broad wings and relatively long tail create a distinctive silhouette, and birds often hold their wings in a slight upward V while soaring. Younger birds can show white patches at the base of the tail and in the wings, markings that gradually fade as they mature over several years.
          </p>
        </>
      }
      habitat={
        <p>
          The Golden Eagle is associated with mountains and open upland country, including moorland, tundra, steppe, semi-desert and rugged hill terrain across parts of Europe, Asia, North America and North Africa. It generally favors open or lightly wooded landscapes that provide both hunting space and elevated nesting sites such as cliffs or large trees. Within Europe, it occurs in parts of the continent rather than throughout it, with strongholds in mountainous and remote regions; some northern populations are partly migratory while many birds remain resident year-round. Its distribution reflects a preference for wild, low-disturbance habitat rather than a uniform presence across any single region.
        </p>
      }
      diet={
        <p>
          Golden Eagles are predatory birds that hunt a range of mammals and birds, with their diet varying by region and season. Medium-sized mammals such as hares, rabbits, marmots and ground squirrels are frequently taken where available, along with birds including grouse and other ground-dwelling species. They hunt largely by soaring or flying low over open terrain and stooping on prey, and they will also feed on carrion, particularly in winter when live prey is scarce. This flexible feeding ecology helps the species persist across the many different environments it occupies.
        </p>
      }
      behavior={
        <>
          <p>
            Golden Eagles are typically seen alone or in pairs, and established pairs often maintain a strong, long-term bond and defend a territory together. They build large nests, known as eyries, on cliffs or in tall trees, frequently reusing and adding to the same structure over successive years until it becomes substantial in size. The species generally lays a small clutch, and the young are cared for over an extended nestling period before fledging. Courtship and territorial behavior can include striking aerial displays, and young birds often disperse to find their own ranges as they reach maturity.
          </p>
          <p>
            As a large apex predator, the Golden Eagle plays an important role in the ecosystems of mountains and open country, influencing populations of the mammals and birds it hunts. By scavenging carrion as well as hunting live prey, it also contributes to the removal of carcasses from the landscape. Its broad geographic range and adaptable diet make it an ecologically significant presence in many upland and remote habitats, where the health of its populations can reflect broader conditions in the surrounding environment.
          </p>
        </>
      }
      humanInteraction={
        <p>
          The Golden Eagle holds long-standing cultural significance in many regions and is widely valued as a symbol of wild landscapes. As a large wild raptor, it is best observed from a distance and should never be approached, disturbed at the nest, or treated as a pet; concerns about an injured bird or wildlife conflict should be directed to local wildlife authorities. Although currently assessed as Least Concern on the IUCN Red List, the species can be affected locally by factors such as habitat change, disturbance and collisions with structures, and it is protected by law in many countries. Conservation efforts often focus on safeguarding nesting habitat and reducing human-caused threats across the areas where it occurs.
        </p>
      }
      faqs={[
        {
          question: "Where do Golden Eagles live?",
          answer:
            "Golden Eagles are found in parts of Europe, Asia, North America and North Africa, where they favor mountains and open upland country such as moorland, tundra and rugged hill terrain. They tend to prefer wild, sparsely settled landscapes and do not occur uniformly throughout any single region.",
        },
        {
          question: "What do Golden Eagles eat?",
          answer:
            "They hunt a range of mammals and birds, including hares, rabbits, marmots, ground squirrels and grouse, with the exact diet varying by region and season. They will also feed on carrion, especially in winter when live prey is harder to find.",
        },
        {
          question: "Is the Golden Eagle endangered?",
          answer:
            "The Golden Eagle is currently assessed as Least Concern on the IUCN Red List, an evaluation that reflects available evidence and can change over time. Local populations can still be affected by habitat change, disturbance and other human-caused threats.",
        },
        {
          question: "Are Golden Eagles dangerous to people?",
          answer:
            "Golden Eagles are wild raptors that generally avoid people and are not considered a danger when left undisturbed; they should be observed from a distance and never approached at the nest or kept as pets. Concerns about an injured bird or wildlife conflict should be reported to local wildlife authorities.",
        },
      ]}
      quickFacts={[
        { label: "Scientific name", value: "Aquila chrysaetos" },
        { label: "Animal group", value: "Bird (raptor / bird of prey)" },
        { label: "Family or order", value: "Accipitridae, order Accipitriformes" },
        { label: "Size", value: "Large eagle with long, broad wings and a long tail" },
        { label: "Diet", value: "Carnivore: mammals and birds, plus carrion" },
        { label: "Habitat", value: "Mountains and open upland country" },
        { label: "Range", value: "Parts of Europe, Asia, North America and North Africa" },
        { label: "Conservation status", value: "Least Concern (IUCN Red List)" },
      ]}
      relatedLinks={[
        { label: "Eagle Profile", href: "/animals/eagle", description: "Eagles more broadly" },
        { label: "Barn Owl", href: "/animals/barn-owl", description: "Another bird of prey" },
        { label: "Vulture Profile", href: "/animals/vulture", description: "Another large raptor" },
        { label: "European fauna", href: "/fauna/continents/europe", description: "Animals of Europe" },
        { label: "Birds", href: "/animal-encyclopedia/birds" },
      ]}
    />
  );
}
