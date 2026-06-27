import type { Metadata } from "next";
import AnimalProfileLayout from "@/components/AnimalProfileLayout";
import { ANIMAL_SOURCES } from "@/lib/educational/animal-sources";
import { getAnimalGalleryImages, getAnimalImage, getAnimalOgImage } from "@/lib/images/animal-images";
import { buildArticleMetadata } from "@/lib/metadata";

const PATH = "/animals/asian-black-bear";
const TITLE = "Asian Black Bear (Ursus thibetanus): The Moon Bear";
const DESC =
  "Learn about the Asian black bear (Ursus thibetanus), or moon bear: its crescent chest mark, forest range across parts of Asia, diet, and conservation status.";

export const metadata: Metadata = buildArticleMetadata({
  title: TITLE,
  description: DESC,
  path: PATH,
  publishedTime: "2026-06-27",
  modifiedTime: "2026-06-27",
  ogImage: getAnimalOgImage("asian-black-bear"),
});

export default function AsianBlackBearPage() {
  return (
    <AnimalProfileLayout
      commonName="Asian Black Bear"
      scientificName="Ursus thibetanus"
      pageTitle={TITLE}
      description={DESC}
      path={PATH}
      parentCategory="Mammals"
      parentCategoryHref="/animal-encyclopedia/mammals"
      tags={["Mammal","Bear","Forest"]}
      image={getAnimalImage("asian-black-bear") ?? undefined}
      galleryImages={getAnimalGalleryImages("asian-black-bear")}
      sources={ANIMAL_SOURCES["asian-black-bear"]}
      publishedDate="2026-06-27"
      modifiedDate="2026-06-27"
      overview={
        <>
          <p>
            The Asian black bear (<em>Ursus thibetanus</em>) is a medium-large bear known for the pale, crescent-shaped patch of fur on its chest, which gives rise to its common nickname, the moon bear. It is a forest-dwelling species associated with wooded and mountainous regions across parts of South, East, and Southeast Asia, including the Himalayas. Strong and agile, it is an accomplished climber and spends considerable time in trees feeding and resting.
          </p>
          <p>
            Largely omnivorous, the Asian black bear feeds on a broad mix of plant and animal matter that shifts with the seasons, from fruit and nuts to insects and vegetation. Like many bears, it plays a meaningful part in its forest ecosystems, particularly through seed dispersal and foraging activity. The species is listed as Vulnerable on the IUCN Red List, with pressures that include habitat loss and exploitation.
          </p>
          <p>
            Range, population, and conservation details can vary by region and over time, so specific claims should always be checked against authoritative sources such as the IUCN Red List, Animal Diversity Web, and reputable museum or university zoology references. As a large wild bear, it warrants calm respect rather than alarm; any wildlife-conflict or safety concerns should be directed to local wildlife authorities.
          </p>
          <h3>Taxonomy and animal group</h3>
          <p>
            The Asian black bear belongs to the bear family, Ursidae, within the order Carnivora, and carries the scientific name <em>Ursus thibetanus</em>. It sits among the so-called black bears in the genus <em>Ursus</em> and is distinct from the American black bear (<em>Ursus americanus</em>), though the two share a broadly similar build and omnivorous habits. Several regional subspecies have been described across its wide Asian distribution, reflecting variation in size and coat across different parts of its range.
          </p>
          <h3>Appearance and recognition</h3>
          <p>
            The Asian black bear is a sturdily built, medium-large bear with predominantly black fur, large rounded ears, and the distinctive pale crescent or V-shaped marking across its chest that inspires the name moon bear. Its ears appear comparatively large for its head, and the fur around the neck and shoulders can look thick or ruff-like. As an able climber, it has strong, curved claws suited to gripping bark, and its overall proportions reflect a life that includes substantial time spent in trees as well as on the ground.
          </p>
        </>
      }
      habitat={
        <p>
          The Asian black bear is associated with forested and mountainous landscapes across parts of South, East, and Southeast Asia, including the Himalayas. It occupies a range of wooded habitats, from temperate broadleaf and mixed forests to more rugged hill and mountain terrain, and its presence shifts seasonally as food availability changes with altitude and time of year. Because its distribution spans many countries and varied terrain, precise local range boundaries differ from place to place and are best confirmed against authoritative range maps.
        </p>
      }
      diet={
        <p>
          This bear is largely omnivorous, with a diet dominated by plant material but supplemented by animal matter. It feeds on fruit, nuts, and vegetation, takes insects such as ants and bees along with their larvae and honey, and may consume some other animal matter when available. Its foraging is strongly seasonal, tracking the ripening of fruits and the abundance of nuts and other resources, and its climbing ability lets it reach food in the forest canopy that many ground-bound animals cannot.
        </p>
      }
      behavior={
        <>
          <p>
            Asian black bears are skilled climbers and spend much of their time foraging in trees as well as on the forest floor. They are generally solitary outside of mothers with cubs, and their activity patterns can vary with location and season. In colder, more seasonal parts of their range, individuals may den and enter periods of winter dormancy, while in milder regions activity may continue more steadily through the year. Much of their behavior centers on locating seasonal food sources across a wide home range.
          </p>
          <p>
            As a large omnivore, the Asian black bear contributes to the ecology of Asian forests in several ways, notably through seed dispersal as it consumes fruit and moves across the landscape, and through its foraging on insects and vegetation. By ranging widely between lowland and montane habitats, it links different parts of the forest ecosystem. Healthy bear populations are often regarded as indicators of relatively intact forest, making the species relevant to broader conservation in the mountainous and wooded regions of Asia where it occurs.
          </p>
        </>
      }
      humanInteraction={
        <p>
          Human interactions with the Asian black bear span conservation concern and occasional conflict. The species is listed as Vulnerable by the IUCN, and major pressures include habitat loss and exploitation, including the bear bile trade, which is a significant conservation issue rather than an acceptable use. As a large wild animal, it should be observed only from a safe distance and never approached, fed, or treated as anything other than wild; people who encounter a bear or experience any wildlife conflict should contact local wildlife authorities, who are equipped to respond appropriately. FaunaHub does not provide handling, approach, or conflict-management instructions.
        </p>
      }
      faqs={[
        {
          question: "Why is the Asian black bear called the moon bear?",
          answer:
            "The nickname comes from the pale, crescent or moon-shaped patch of fur on its chest, which stands out against its otherwise dark coat. This marking is one of the most recognizable features of Ursus thibetanus.",
        },
        {
          question: "Where is the Asian black bear found?",
          answer:
            "It is associated with forested and mountainous regions across parts of South, East, and Southeast Asia, including the Himalayas. Precise range boundaries vary by country and region and are best confirmed against authoritative sources such as the IUCN Red List.",
        },
        {
          question: "What does the Asian black bear eat?",
          answer:
            "It is largely omnivorous, eating fruit, nuts, insects, and vegetation, along with some animal matter. Its diet shifts seasonally as different food sources become available across its range.",
        },
        {
          question: "Is the Asian black bear endangered?",
          answer:
            "It is listed as Vulnerable on the IUCN Red List. Pressures include habitat loss and exploitation, including the bear bile trade, which conservationists treat as a serious threat to the species.",
        },
      ]}
      quickFacts={[
        { label: "Group", value: "Bears (mammals)" },
        { label: "Higher classification", value: "Family Ursidae, genus Ursus" },
        { label: "Diet", value: "Largely omnivorous: fruit, nuts, insects, vegetation, some animal matter" },
        { label: "Notable trait", value: "Pale crescent chest mark (the moon bear); skilled climber" },
        { label: "Habitat", value: "Forested and mountainous regions, including the Himalayas" },
        { label: "Asia distribution", value: "Found in parts of South, East, and Southeast Asia" },
        { label: "Human interaction", value: "Conservation concern, including the bile trade; observe wild bears only from a distance" },
        { label: "Conservation status", value: "Vulnerable (IUCN)" },
      ]}
      relatedLinks={[
        { label: "Sun Bear Profile", href: "/animals/sun-bear", description: "Another Asian forest bear" },
        { label: "Bear Profile", href: "/animals/bear", description: "Bears more broadly" },
        { label: "Panda Profile", href: "/animals/panda", description: "An Asian bear" },
        { label: "Asian fauna", href: "/fauna/continents/asia", description: "Animals of Asia" },
        { label: "Mammals", href: "/animal-encyclopedia/mammals" },
      ]}
    />
  );
}
