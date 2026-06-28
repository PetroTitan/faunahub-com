import type { Metadata } from "next";
import AnimalProfileLayout from "@/components/AnimalProfileLayout";
import { ANIMAL_SOURCES } from "@/lib/educational/animal-sources";
import { getAnimalGalleryImages, getAnimalImage, getAnimalOgImage } from "@/lib/images/animal-images";
import { buildArticleMetadata } from "@/lib/metadata";

const PATH = "/animals/white-stork";
const TITLE = "White Stork: Europe's Migratory Wading Bird";
const DESC =
  "Learn about the White Stork (Ciconia ciconia), a large white-and-black wading bird that nests in parts of Europe and migrates to sub-Saharan Africa.";

export const metadata: Metadata = buildArticleMetadata({
  title: TITLE,
  description: DESC,
  path: PATH,
  publishedTime: "2026-06-27",
  modifiedTime: "2026-06-27",
  ogImage: getAnimalOgImage("white-stork"),
});

export default function WhiteStorkPage() {
  return (
    <AnimalProfileLayout
      commonName="White Stork"
      scientificName="Ciconia ciconia"
      pageTitle={TITLE}
      description={DESC}
      path={PATH}
      parentCategory="Birds"
      parentCategoryHref="/animal-encyclopedia/birds"
      tags={["Bird","Wading bird","Migratory"]}
      image={getAnimalImage("white-stork") ?? undefined}
      galleryImages={getAnimalGalleryImages("white-stork")}
      sources={ANIMAL_SOURCES["white-stork"]}
      publishedDate="2026-06-27"
      modifiedDate="2026-06-27"
      overview={
        <>
          <p>
            The White Stork (<em>Ciconia ciconia</em>) is a large, long-legged wading bird widely recognized for its white plumage, black flight feathers, and bright red bill and legs. It is one of the most familiar birds across parts of Europe, often seen striding through meadows and wetlands or perched on a bulky stick nest atop a rooftop, chimney, or utility pole. Its close association with human settlements has made it a long-standing presence in rural landscapes and folklore.
          </p>
          <p>
            A defining feature of the species is its long-distance migration. Birds that breed in parts of Europe undertake seasonal journeys to wintering grounds in sub-Saharan Africa, and some populations are also associated with parts of Asia. These migrations follow established flyways and rely on rising warm air for soaring flight, which helps the birds cover great distances with limited effort.
          </p>
          <p>
            The White Stork is assessed as Least Concern on the IUCN Red List. As with all assessments, this status reflects current understanding and can change over time as new information becomes available.
          </p>
          <h3>Taxonomy and animal group</h3>
          <p>
            The White Stork belongs to the family Ciconiidae, the storks, within the order Ciconiiformes. It is a true stork, distinct from herons, egrets, and cranes despite a broadly similar tall, long-legged build. The scientific name <em>Ciconia ciconia</em> places it in the genus <em>Ciconia</em>, which includes several other stork species. It is most easily distinguished from its close relative the Black Stork (<em>Ciconia nigra</em>) by its largely white body and its tendency to nest in open, often human-associated settings rather than secluded forests.
          </p>
          <h3>Appearance and recognition</h3>
          <p>
            Adult White Storks are large birds with predominantly white plumage offset by black flight feathers on the wings, a contrast most visible when the wings are spread in flight. The long, straight bill and the long legs are a vivid red, and the eyes are set in a small patch of dark skin. Males and females look broadly similar, though males are often slightly larger on average. In flight the bird holds its neck outstretched rather than tucked, distinguishing it from herons, and its broad wings and trailing legs give it a distinctive silhouette as it soars.
          </p>
        </>
      }
      habitat={
        <p>
          The White Stork is associated with open and semi-open landscapes such as wet meadows, marshes, pastures, river valleys, and agricultural areas that offer shallow water and abundant prey. Breeding populations occur in parts of Europe, where the birds frequently nest on rooftops, poles, and other elevated structures near settlements. Outside the breeding season many birds migrate to wintering grounds in sub-Saharan Africa, and the species is also associated with parts of Asia. It is important to distinguish the European breeding range from the migratory and wintering range; the bird is not found uniformly across the entire continent, and its distribution shifts seasonally.
        </p>
      }
      diet={
        <p>
          The White Stork is an opportunistic carnivore that forages by walking steadily across open ground and shallow water, watching for movement and seizing prey with its bill. Its diet includes insects and other invertebrates, amphibians such as frogs, small mammals, reptiles, earthworms, and occasionally fish or the eggs and young of other animals. The composition of the diet varies with season and location, and birds often gather in numbers where food is temporarily plentiful, such as in freshly mown or flooded fields.
        </p>
      }
      behavior={
        <>
          <p>
            White Storks are generally silent birds that communicate largely through bill-clattering, a rattling sound made by rapidly snapping the bill, often as part of greeting displays at the nest. They typically form pairs during the breeding season and return to reuse and add to the same large stick nest year after year, so that nests can grow substantial over time. Both parents share incubation of the eggs and the feeding of the young, which remain in the nest for several weeks before fledging. Outside the breeding season the birds become more gregarious, traveling and feeding in flocks, and they are well known for soaring on thermals during migration.
          </p>
          <p>
            As a mid-level predator of insects, amphibians, small mammals, and other small animals, the White Stork plays a role in regulating the populations of the prey it consumes within wetland and grassland ecosystems. Its presence is often linked to healthy, insect-rich open habitats, and changes in stork numbers can reflect broader conditions in farmland and wetland environments. The large nests it builds may also be used by smaller birds, which sometimes nest within the stork&#39;s nest structure.
          </p>
        </>
      }
      humanInteraction={
        <p>
          The White Stork has a long history of cultural significance and tolerance of human settlements, frequently nesting on buildings and other structures in rural areas. It is currently assessed as Least Concern on the IUCN Red List, though this assessment can change, and local populations may be influenced by changes in farming practices, wetland drainage, and collisions with power lines. The species is wild and should be observed from a distance; people who encounter an injured stork or a nest that raises safety or property concerns should contact local wildlife authorities rather than attempting to handle the bird themselves.
        </p>
      }
      faqs={[
        {
          question: "Where do White Storks live?",
          answer:
            "White Storks breed in parts of Europe, often nesting on rooftops and poles near human settlements, and many migrate to wintering grounds in sub-Saharan Africa. The species is also associated with parts of Asia, and its distribution shifts seasonally.",
        },
        {
          question: "What do White Storks eat?",
          answer:
            "They are opportunistic carnivores that feed on insects, amphibians, small mammals, reptiles, earthworms, and occasionally fish or the young of other animals. The diet varies with season and location.",
        },
        {
          question: "Are White Storks endangered?",
          answer:
            "The White Stork is assessed as Least Concern on the IUCN Red List. This is an assessment based on current information and can change over time as conditions and data are updated.",
        },
        {
          question: "Do White Storks really nest on rooftops?",
          answer:
            "Yes, White Storks commonly build large stick nests on rooftops, chimneys, poles, and other elevated structures in parts of Europe, and they often reuse and add to the same nest over many years.",
        },
      ]}
      quickFacts={[
        { label: "Scientific name", value: "Ciconia ciconia" },
        { label: "Animal group", value: "Bird (wading bird)" },
        { label: "Family", value: "Ciconiidae (storks)" },
        { label: "Size", value: "Large; long neck, bill, and legs" },
        { label: "Diet", value: "Carnivore: insects, amphibians, small mammals, more" },
        { label: "Habitat", value: "Wet meadows, marshes, pastures, farmland" },
        { label: "Range", value: "Breeds in parts of Europe; winters in sub-Saharan Africa" },
        { label: "Conservation status", value: "Least Concern (IUCN Red List)" },
      ]}
      relatedLinks={[
        { label: "Stork Profile", href: "/animals/stork", description: "Storks more broadly" },
        { label: "Heron Profile", href: "/animals/heron", description: "Another tall wading bird" },
        { label: "Marabou Stork", href: "/animals/marabou-stork", description: "An African stork" },
        { label: "European fauna", href: "/fauna/continents/europe", description: "Animals of Europe" },
        { label: "Birds", href: "/animal-encyclopedia/birds" },
      ]}
    />
  );
}
