import type { Metadata } from "next";
import AnimalProfileLayout from "@/components/AnimalProfileLayout";
import { ANIMAL_SOURCES } from "@/lib/educational/animal-sources";
import { getAnimalGalleryImages, getAnimalImage, getAnimalOgImage } from "@/lib/images/animal-images";
import { buildArticleMetadata } from "@/lib/metadata";

const PATH = "/animals/scarlet-ibis";
const TITLE = "Scarlet Ibis: Vivid Wetland Wading Bird";
const DESC =
  "The scarlet ibis is a vivid red wading bird of coastal wetlands in parts of northern South America, with a long down-curved bill and diet-derived colour.";

export const metadata: Metadata = buildArticleMetadata({
  title: TITLE,
  description: DESC,
  path: PATH,
  publishedTime: "2026-06-28",
  modifiedTime: "2026-06-28",
  ogImage: getAnimalOgImage("scarlet-ibis"),
});

export default function ScarletIbisPage() {
  return (
    <AnimalProfileLayout
      commonName="Scarlet Ibis"
      scientificName="Eudocimus ruber"
      pageTitle={TITLE}
      description={DESC}
      path={PATH}
      parentCategory="Birds"
      parentCategoryHref="/animal-encyclopedia/birds"
      tags={["Bird","Wading bird","Wetland"]}
      image={getAnimalImage("scarlet-ibis") ?? undefined}
      galleryImages={getAnimalGalleryImages("scarlet-ibis")}
      sources={ANIMAL_SOURCES["scarlet-ibis"]}
      publishedDate="2026-06-28"
      modifiedDate="2026-06-28"
      overview={
        <>
          <p>
            The scarlet ibis (<em>Eudocimus ruber</em>) is one of the most strikingly coloured wading birds in the world, recognised by its vivid scarlet-red plumage and long, slender, down-curved bill. It is associated with coastal wetlands, mudflats, and mangrove systems in parts of northern South America and the Caribbean, where it probes soft ground and shallow water for small prey.
          </p>
          <p>
            Its remarkable red colour is not produced by the bird itself but comes from carotenoid pigments in its food, particularly crustaceans and other small animals. Birds that consume more of these pigments tend to display the most intense colouration, while younger individuals are duller and develop their full red tones gradually as they mature.
          </p>
          <p>
            Closely tied to the cultural identity of the region, the scarlet ibis is recognised as one of the national birds of Trinidad and Tobago. On the IUCN Red List it is currently assessed as Least Concern, an evaluation that can change over time as habitats and populations are monitored.
          </p>
          <h3>Taxonomy and animal group</h3>
          <p>
            The scarlet ibis is a bird, <em>Eudocimus ruber</em>, belonging to the family Threskiornithidae, the group that includes ibises and spoonbills. In many modern treatments this family is placed within the order Pelecaniformes, though older classifications place ibises in the Ciconiiformes. It is closely related to the white ibis (<em>Eudocimus albus</em>), and some researchers have suggested the two may form a single complex, although they are usually treated as distinct species. As an ibis, it is part of a long-legged wading bird lineage characterised by down-curved bills suited to probing.
          </p>
          <h3>Appearance and recognition</h3>
          <p>
            Adult scarlet ibises are unmistakable, with body plumage in brilliant shades of scarlet to orange-red, typically tipped with small areas of black at the outer wing feathers. The bill is long, slender, and gently curved downward, and the legs are long and suited to wading. Juveniles look very different, showing greyish, brown, and white tones that are gradually replaced by red as the bird matures and as carotenoid pigments accumulate from its diet. In flight, flocks form distinctive lines or V-shaped formations of intense colour.
          </p>
        </>
      }
      habitat={
        <p>
          The scarlet ibis is associated with coastal and lowland wetlands in parts of northern South America, as well as parts of the Caribbean. It occurs in environments such as mangrove forests, mudflats, estuaries, tidal lagoons, and shallow marshes, where soft sediments support the small animals it feeds on. Its distribution is tied to these wetland and coastal systems rather than to inland or upland regions across the continent, and populations are linked to suitable feeding and nesting habitat rather than spread uniformly through any single country.
        </p>
      }
      diet={
        <p>
          The scarlet ibis feeds primarily on small aquatic and intertidal animals, including crustaceans such as crabs and shrimp, along with aquatic insects, molluscs, and other small invertebrates. It forages by probing soft mud and shallow water with its sensitive down-curved bill, often detecting prey by touch rather than sight. The carotenoid pigments found in many of these prey items, especially crustaceans, are responsible for the bird&#39;s characteristic red colouration, which is why diet plays such a central role in its appearance.
        </p>
      }
      behavior={
        <>
          <p>
            Scarlet ibises are highly social and are often seen feeding, roosting, and flying together in flocks that can be large where habitat is suitable. They typically nest in colonies in trees and mangroves, frequently alongside other wading birds such as herons and egrets, building nests over or near water. Breeding pairs cooperate in raising young, which hatch with dull plumage and depend on parental care before gradually developing adult colouration. Many populations move locally in response to tides, water levels, and the availability of feeding grounds.
          </p>
          <p>
            As a wetland forager, the scarlet ibis plays a role in the food webs of coastal and estuarine ecosystems, helping to regulate populations of crustaceans, insects, and other small invertebrates in the mud and shallows. Its colonial nesting alongside other waterbirds contributes to the structure of mixed wading-bird communities. Because it depends on healthy mangroves, mudflats, and wetlands, its presence is often regarded as one indicator of the condition of these coastal habitats.
          </p>
        </>
      }
      humanInteraction={
        <p>
          The scarlet ibis is a celebrated bird in the region and is one of the national birds of Trinidad and Tobago, where its colonies are a focus of cultural pride and wildlife appreciation. The main long-term concerns for the species relate to the protection of mangroves and coastal wetlands and to disturbance of nesting colonies, rather than to its current global status, which the IUCN Red List assesses as Least Concern; this assessment can be revised as monitoring continues. Anyone encountering nesting colonies or wildlife management questions should defer to local wildlife authorities and protected-area guidelines, observing birds from a respectful distance.
        </p>
      }
      faqs={[
        {
          question: "Why is the scarlet ibis red?",
          answer:
            "Its red colour comes from carotenoid pigments in its diet, especially crustaceans such as crabs and shrimp. Birds that consume more of these pigments tend to show the most intense red plumage, while young birds are duller until the pigments accumulate.",
        },
        {
          question: "Where is the scarlet ibis found?",
          answer:
            "It is associated with coastal wetlands, mudflats, and mangroves in parts of northern South America and parts of the Caribbean. Its range is tied to these coastal and lowland habitats rather than spread across an entire continent.",
        },
        {
          question: "Is the scarlet ibis endangered?",
          answer:
            "On the IUCN Red List it is currently assessed as Least Concern. This is a changeable assessment, and local populations still depend on the protection of mangroves and coastal wetlands.",
        },
        {
          question: "What does the scarlet ibis eat?",
          answer:
            "It feeds mainly on small aquatic and intertidal animals such as crustaceans, insects, molluscs, and other invertebrates. It probes soft mud and shallow water with its long, down-curved bill, often locating prey by touch.",
        },
      ]}
      quickFacts={[
        { label: "Scientific name", value: "Eudocimus ruber" },
        { label: "Animal group", value: "Bird (wading bird / ibis)" },
        { label: "Family / order", value: "Threskiornithidae; Pelecaniformes (modern treatments)" },
        { label: "Size", value: "Roughly 56-61 cm in body length" },
        { label: "Diet", value: "Crustaceans, insects, and other small invertebrates" },
        { label: "Habitat", value: "Coastal wetlands, mudflats, and mangroves" },
        { label: "Range", value: "Parts of northern South America and the Caribbean" },
        { label: "Conservation status", value: "Least Concern (IUCN Red List; changeable)" },
      ]}
      relatedLinks={[
        { label: "Flamingo", href: "/animals/flamingo", description: "Another colourful wading bird" },
        { label: "Pelican", href: "/animals/pelican", description: "A coastal waterbird" },
        { label: "Stork", href: "/animals/stork", description: "Another wading bird" },
        { label: "South American fauna", href: "/fauna/continents/south-america", description: "Animals of South America" },
        { label: "Birds", href: "/animal-encyclopedia/birds" },
      ]}
    />
  );
}
