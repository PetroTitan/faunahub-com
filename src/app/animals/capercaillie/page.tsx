import type { Metadata } from "next";
import AnimalProfileLayout from "@/components/AnimalProfileLayout";
import { ANIMAL_SOURCES } from "@/lib/educational/animal-sources";
import { getAnimalGalleryImages, getAnimalImage, getAnimalOgImage } from "@/lib/images/animal-images";
import { buildArticleMetadata } from "@/lib/metadata";

const PATH = "/animals/capercaillie";
const TITLE = "Western Capercaillie: The Largest Grouse";
const DESC =
  "The Western Capercaillie is the largest grouse, a forest bird of parts of Europe and northern Asia known for its dramatic spring lekking displays.";

export const metadata: Metadata = buildArticleMetadata({
  title: TITLE,
  description: DESC,
  path: PATH,
  publishedTime: "2026-06-27",
  modifiedTime: "2026-06-27",
  ogImage: getAnimalOgImage("capercaillie"),
});

export default function CapercailliePage() {
  return (
    <AnimalProfileLayout
      commonName="Western Capercaillie"
      scientificName="Tetrao urogallus"
      pageTitle={TITLE}
      description={DESC}
      path={PATH}
      parentCategory="Birds"
      parentCategoryHref="/animal-encyclopedia/birds"
      tags={["Bird","Grouse","Forest"]}
      image={getAnimalImage("capercaillie") ?? undefined}
      galleryImages={getAnimalGalleryImages("capercaillie")}
      sources={ANIMAL_SOURCES["capercaillie"]}
      publishedDate="2026-06-27"
      modifiedDate="2026-06-27"
      overview={
        <>
          <p>
            The Western Capercaillie (<em>Tetrao urogallus</em>) is a large, ground-dwelling forest bird and the biggest member of the grouse group. It is closely tied to old and mature coniferous woodland, where it spends much of its life feeding, displaying, and nesting on the forest floor. The species is best known for the dramatic courtship gatherings of males in spring, when birds assemble at traditional display sites and perform elaborate sequences of calls and postures.
          </p>
          <p>
            Found in parts of Europe and northern Asia, the capercaillie has long held a place in regional folklore and natural history because of its size and its striking seasonal behavior. The International Union for Conservation of Nature (IUCN) Red List assesses the species as Least Concern at the global level, an assessment that can change as conditions are monitored over time. Even so, several European populations are small and of conservation concern, and these are watched closely by researchers and wildlife authorities.
          </p>
          <p>
            This profile offers an educational overview of the bird&#39;s appearance, habitat, diet, behavior, and ecological role. It is not a guide to keeping, approaching, or handling the species, which is a wild forest bird best observed at a respectful distance and left undisturbed, particularly during the sensitive breeding season.
          </p>
          <h3>Taxonomy and animal group</h3>
          <p>
            The Western Capercaillie belongs to the family Phasianidae within the order Galliformes, the group that also includes pheasants, partridges, and other grouse. As a grouse, it is a heavy-bodied, primarily ground-living game bird adapted to cold northern forests, with feathered legs and a stout build suited to a sedentary, terrestrial life. Its scientific name is <em>Tetrao urogallus</em>, and it is the largest species in the grouse group. It should not be confused with the closely related Black Grouse or with the smaller Hazel Grouse, which share parts of its range but differ in size, plumage, and display behavior.
          </p>
          <h3>Appearance and recognition</h3>
          <p>
            Male and female capercaillies differ markedly in appearance, a feature known as sexual dimorphism. Males are large and predominantly dark, with slate-grey to blackish plumage, a glossy greenish sheen on the breast, and a broad tail that they fan upward during display; a patch of bare red skin sits above each eye. Females are considerably smaller and cryptically patterned in mottled brown, rust, and buff tones that blend with the forest floor, with a paler rusty patch on the breast. The species&#39; large size, broad fan-like tail in males, and forest-floor coloration in females are its most reliable identification cues.
          </p>
        </>
      }
      habitat={
        <p>
          The Western Capercaillie is associated with old and mature coniferous forest, and sometimes mixed woodland, across parts of Europe and northern Asia. It tends to favor undisturbed stands with a structured understory, scattered clearings, and an abundance of ground vegetation such as bilberry, which provide both food and cover. Within Europe its occurrence is patchy, with populations concentrated in boreal, montane, and upland forest regions rather than spread evenly across the continent. The species is largely resident where it occurs, and its distribution closely tracks the availability of suitable mature forest habitat.
        </p>
      }
      diet={
        <p>
          The capercaillie&#39;s diet shifts with the seasons. In winter it relies heavily on conifer needles, which are abundant even when snow covers other food sources, and its digestive system is adapted to process this coarse, fibrous material. During the warmer months it broadens its feeding to include berries, buds, shoots, leaves, and other plant matter gathered on or near the forest floor. Young chicks depend more on invertebrates, especially insects, in their early weeks, providing the protein needed for rapid growth before they gradually transition toward the largely plant-based adult diet.
        </p>
      }
      behavior={
        <>
          <p>
            The species is best known for lekking, a behavior in which males gather at traditional display grounds in spring and perform sequences of distinctive calls, postures, and tail-fanning to attract females. These display sites are used year after year and are a focal point of the breeding cycle. After mating, females nest on the ground, typically in concealed sites, and raise the brood alone; chicks are precocial, able to leave the nest and feed themselves soon after hatching. Outside the breeding season the capercaillie is generally quiet and unobtrusive, moving through the forest understory and roosting in trees or on the ground.
          </p>
          <p>
            As a large herbivorous forest bird, the Western Capercaillie is part of the food web of mature northern woodlands, both as a consumer of conifer foliage, berries, and buds and as prey for forest predators, while its eggs and chicks are vulnerable to a range of nest predators. Its strong dependence on old, structurally complex forest makes it a useful indicator of woodland quality, since healthy capercaillie populations often reflect intact, well-connected forest ecosystems. Through its feeding it interacts with the cycles of berry-producing shrubs and other understory plants that characterize its habitat.
          </p>
        </>
      }
      humanInteraction={
        <p>
          The Western Capercaillie is assessed as Least Concern on the IUCN Red List at the global scale, but several European populations are small and of conservation concern, and this status is an ongoing assessment that may be revised as monitoring continues. Pressures often discussed for these populations include the loss and fragmentation of mature forest and disturbance at sensitive sites. This is a wild bird and not a pet; it should be observed quietly from a distance, especially near display grounds and nests during the breeding season. Anyone encountering apparent wildlife conflict, distressed birds, or questions about local populations should contact local wildlife authorities or relevant conservation organizations.
        </p>
      }
      faqs={[
        {
          question: "What is the Western Capercaillie?",
          answer:
            "It is a large, ground-dwelling forest bird and the largest member of the grouse group, scientifically named Tetrao urogallus. It lives in old and mature coniferous and mixed forest in parts of Europe and northern Asia.",
        },
        {
          question: "Why are male capercaillies known for spring displays?",
          answer:
            "In spring, males gather at traditional sites called leks and perform dramatic sequences of calls, postures, and tail-fanning to attract females. These display grounds are often used year after year.",
        },
        {
          question: "What does the Western Capercaillie eat?",
          answer:
            "It feeds mainly on conifer needles in winter and on berries, buds, shoots, and other plant matter in warmer months. Young chicks rely more on invertebrates such as insects during their early weeks.",
        },
        {
          question: "Is the Western Capercaillie endangered?",
          answer:
            "The IUCN Red List assesses the species as Least Concern globally, an assessment that can change over time. However, several European populations are small and of conservation concern and are monitored by wildlife authorities.",
        },
      ]}
      quickFacts={[
        { label: "Scientific name", value: "Tetrao urogallus" },
        { label: "Animal group", value: "Bird (grouse)" },
        { label: "Family or order", value: "Phasianidae; order Galliformes" },
        { label: "Size", value: "Largest grouse; males notably larger than females" },
        { label: "Diet", value: "Conifer needles, berries, buds, shoots, invertebrates" },
        { label: "Habitat", value: "Old and mature coniferous and mixed forest" },
        { label: "Range", value: "Parts of Europe and northern Asia" },
        { label: "Conservation status", value: "Least Concern (IUCN Red List)" },
      ]}
      relatedLinks={[
        { label: "Peacock Profile", href: "/animals/peacock", description: "Another large galliform bird" },
        { label: "Golden Eagle", href: "/animals/golden-eagle", description: "A bird of the same forests and hills" },
        { label: "White Stork", href: "/animals/white-stork", description: "Another large European bird" },
        { label: "European fauna", href: "/fauna/continents/europe", description: "Animals of Europe" },
        { label: "Birds", href: "/animal-encyclopedia/birds" },
      ]}
    />
  );
}
