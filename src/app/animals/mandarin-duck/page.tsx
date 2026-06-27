import type { Metadata } from "next";
import AnimalProfileLayout from "@/components/AnimalProfileLayout";
import { ANIMAL_SOURCES } from "@/lib/educational/animal-sources";
import { getAnimalGalleryImages, getAnimalImage, getAnimalOgImage } from "@/lib/images/animal-images";
import { buildArticleMetadata } from "@/lib/metadata";

const PATH = "/animals/mandarin-duck";
const TITLE = "Mandarin Duck (Aix galericulata): Facts and Profile";
const DESC =
  "Learn about the mandarin duck (Aix galericulata), an ornate East Asian perching duck. Explore its appearance, woodland-pond habitat, diet, and cultural meaning.";

export const metadata: Metadata = buildArticleMetadata({
  title: TITLE,
  description: DESC,
  path: PATH,
  publishedTime: "2026-06-27",
  modifiedTime: "2026-06-27",
  ogImage: getAnimalOgImage("mandarin-duck"),
});

export default function MandarinDuckPage() {
  return (
    <AnimalProfileLayout
      commonName="Mandarin Duck"
      scientificName="Aix galericulata"
      pageTitle={TITLE}
      description={DESC}
      path={PATH}
      parentCategory="Birds"
      parentCategoryHref="/animal-encyclopedia/birds"
      tags={["Bird","Waterfowl","East Asia"]}
      image={getAnimalImage("mandarin-duck") ?? undefined}
      galleryImages={getAnimalGalleryImages("mandarin-duck")}
      sources={ANIMAL_SOURCES["mandarin-duck"]}
      publishedDate="2026-06-27"
      modifiedDate="2026-06-27"
      overview={
        <>
          <p>
            The mandarin duck (<em>Aix galericulata</em>) is a small, strikingly colourful perching duck of East Asia. The breeding male is among the most ornate of all waterfowl, with orange &quot;sail&quot; feathers raised along the back, a flowing crest, and intricate facial and body patterning, while the female is a more subtly mottled grey-brown. As a perching duck, it is well suited to wooded wetlands and nests in tree cavities rather than on open ground.
          </p>
          <p>
            Native to parts of East Asia, the mandarin duck breeds near wooded ponds, lakes, and rivers and feeds on a mix of seeds, plants, and small invertebrates. It is a close relative of the North American wood duck and shares that bird&#39;s habit of nesting high in trees. Introduced and feral populations also occur in parts of Europe, and the species carries strong cultural significance as a symbol of fidelity in East Asia.
          </p>
          <p>
            Range, population, and conservation details can vary by region and over time, so specific figures should be checked against authoritative sources such as the IUCN Red List, Animal Diversity Web, and museum or university zoology references. This profile is educational and not a guide to keeping, capturing, or handling wild birds; concerns about local wildlife should be directed to qualified wildlife authorities.
          </p>
          <h3>Taxonomy and animal group</h3>
          <p>
            The mandarin duck is a waterfowl in the family Anatidae, the group that includes ducks, geese, and swans. Within that family it belongs to the perching ducks, and the genus <em>Aix</em> contains just two species: the mandarin duck (<em>Aix galericulata</em>) of East Asia and its close relative, the North American wood duck (<em>Aix sponsa</em>). Both are distinguished by their ability to perch and nest in trees, a trait less common among typical ground-nesting ducks.
          </p>
          <h3>Appearance and recognition</h3>
          <p>
            The mandarin duck is a small, compact duck, and the breeding male is unmistakable. He shows a sweep of warm orange &quot;sail&quot; feathers that rise vertically from each side of the back, a prominent crest, a reddish bill, and bold patterns of orange, white, green, and chestnut across the face and body. Outside the breeding season, and at all times for the female, the bird is far plainer: the female is a soft mottled grey-brown with a pale ring around the eye and a fine line trailing back from it, providing effective camouflage on the nest. This strong contrast between the ornate male and the cryptic female is typical of many perching ducks.
          </p>
        </>
      }
      habitat={
        <p>
          The mandarin duck is native to parts of East Asia, including China, Japan, Korea, and the Russian Far East, where it favours wooded ponds, lakes, and slow rivers fringed by trees. Because it nests in tree cavities, it depends on mature woodland close to fresh water rather than open marsh. Introduced and feral populations have also become established in parts of Europe, so the bird may be encountered well outside its natural range; native, introduced, and captive presence should be distinguished when interpreting local sightings.
        </p>
      }
      diet={
        <p>
          The mandarin duck is omnivorous and feeds on a mix of plant and animal material. Its diet includes seeds, aquatic and waterside plants, and small invertebrates, with the balance shifting across the seasons. Seeds and plant matter often feature more heavily outside the breeding season, while invertebrates can supplement the diet when available. The bird typically forages in and around shallow, sheltered water and along wooded margins.
        </p>
      }
      behavior={
        <>
          <p>
            Mandarin ducks are agile in trees as well as on water, perching readily and nesting in elevated cavities. After hatching, the ducklings leave the nest hole by dropping to the ground or water below, a behaviour shared with the related wood duck. The species is often seen in pairs or small groups, and the male&#39;s elaborate plumage features prominently in courtship displays. The strong, lasting pair imagery associated with the species is the root of its East Asian reputation as a symbol of devotion.
          </p>
          <p>
            As a tree-nesting waterfowl of wooded wetlands, the mandarin duck links forest and freshwater habitats, relying on mature trees for nest sites and on shallow water for feeding. Through its mixed diet it can play a part in moving seeds and consuming small invertebrates within its wetland surroundings. Its dependence on cavities in older trees makes the presence of intact wooded waterside habitat important to its breeding success across its East Asian range.
          </p>
        </>
      }
      humanInteraction={
        <p>
          The mandarin duck is best known to people through its cultural significance: in East Asia it is a long-standing symbol of fidelity and marital harmony, and it appears widely in art and tradition. Its beauty has also made it a familiar bird in parks and collections, which has contributed to the establishment of feral populations in parts of Europe. The species is not considered globally threatened, but like all wild waterfowl it benefits from the protection of wooded wetland habitat; it is a bird to observe and appreciate at a respectful distance, not to keep or handle, and questions about local birds are best directed to wildlife authorities.
        </p>
      }
      faqs={[
        {
          question: "What is a mandarin duck?",
          answer:
            "The mandarin duck (Aix galericulata) is a small, colourful perching duck native to parts of East Asia. The breeding male is highly ornate, while the female is a mottled grey-brown. It nests in tree cavities near wooded ponds and rivers.",
        },
        {
          question: "Where do mandarin ducks live?",
          answer:
            "They are native to parts of East Asia, including China, Japan, Korea, and the Russian Far East, where they favour wooded ponds, lakes, and rivers. Introduced or feral populations also occur in parts of Europe. Specific range details vary and should be checked against authoritative sources.",
        },
        {
          question: "How is the mandarin duck related to the wood duck?",
          answer:
            "The mandarin duck and the North American wood duck (Aix sponsa) are the two species in the genus Aix. Both are perching ducks that nest in tree cavities, which sets them apart from most ground-nesting ducks.",
        },
        {
          question: "Why is the mandarin duck a cultural symbol?",
          answer:
            "In East Asia the mandarin duck has long been associated with fidelity and marital harmony, and it features in traditional art and folklore. This symbolism is tied to the imagery of pairs of these birds.",
        },
      ]}
      quickFacts={[
        { label: "Group", value: "Birds (waterfowl, perching duck)" },
        { label: "Higher classification", value: "Family Anatidae; genus Aix" },
        { label: "Diet", value: "Omnivorous; seeds, plants, and small invertebrates" },
        { label: "Notable trait", value: "Ornate breeding male with raised orange \"sail\" feathers; nests in tree cavities" },
        { label: "Habitat", value: "Wooded ponds, lakes, and rivers with mature trees" },
        { label: "Asia distribution", value: "Native to parts of East Asia (China, Japan, Korea, Russian Far East)" },
        { label: "Human interaction", value: "Cultural symbol of fidelity; popular in parks and collections" },
        { label: "Conservation status", value: "Not globally threatened; check authoritative sources" },
      ]}
      relatedLinks={[
        { label: "Duck Profile", href: "/animals/duck", description: "Ducks more broadly" },
        { label: "Swan Profile", href: "/animals/swan", description: "Another waterfowl" },
        { label: "Goose Profile", href: "/animals/goose", description: "Another waterfowl" },
        { label: "Asian fauna", href: "/fauna/continents/asia", description: "Animals of Asia" },
        { label: "Birds", href: "/animal-encyclopedia/birds" },
      ]}
    />
  );
}
