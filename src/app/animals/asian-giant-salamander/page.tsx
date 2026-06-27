import type { Metadata } from "next";
import AnimalProfileLayout from "@/components/AnimalProfileLayout";
import { ANIMAL_SOURCES } from "@/lib/educational/animal-sources";
import { getAnimalGalleryImages, getAnimalImage, getAnimalOgImage } from "@/lib/images/animal-images";
import { buildArticleMetadata } from "@/lib/metadata";

const PATH = "/animals/asian-giant-salamander";
const TITLE = "Asian Giant Salamander (Andrias): Facts and Ecology";
const DESC =
  "Asian giant salamanders (genus Andrias) are the largest living amphibians, fully aquatic dwellers of cool, clear streams in parts of East Asia. Learn the facts.";

export const metadata: Metadata = buildArticleMetadata({
  title: TITLE,
  description: DESC,
  path: PATH,
  publishedTime: "2026-06-27",
  modifiedTime: "2026-06-27",
  ogImage: getAnimalOgImage("asian-giant-salamander"),
});

export default function AsianGiantSalamanderPage() {
  return (
    <AnimalProfileLayout
      commonName="Asian Giant Salamander"
      scientificName="genus Andrias"
      pageTitle={TITLE}
      description={DESC}
      path={PATH}
      parentCategory="Reptiles & Amphibians"
      parentCategoryHref="/animal-encyclopedia/reptiles"
      tags={["Amphibian","Salamander","Freshwater"]}
      image={getAnimalImage("asian-giant-salamander") ?? undefined}
      galleryImages={getAnimalGalleryImages("asian-giant-salamander")}
      sources={ANIMAL_SOURCES["asian-giant-salamander"]}
      publishedDate="2026-06-27"
      modifiedDate="2026-06-27"
      overview={
        <>
          <p>
            Asian giant salamanders, members of the genus <em>Andrias</em>, are the largest living amphibians on Earth. They are fully aquatic salamanders adapted to cool, clear, fast-flowing streams and rivers in parts of East Asia. Two well-known forms are the Japanese giant salamander (<em>Andrias japonicus</em>), found in Japan, and the Chinese giant salamander (<em>Andrias davidianus</em>), which is understood to be a species complex distributed across parts of China.
          </p>
          <p>
            These animals are recognizable by their loose, wrinkled folds of skin, which increase surface area and help them absorb oxygen directly from the water, along with tiny eyes and a broad, flattened head. They are nocturnal hunters, taking fish, crustaceans, and insects largely by detecting movement in the dark, slow-moving waters they inhabit.
          </p>
          <p>
            Range and conservation detail for the genus varies considerably between species and populations, and the taxonomy of the Chinese giant salamander in particular continues to be revised. Readers should check current authoritative sources such as the IUCN Red List, Animal Diversity Web, and museum and university zoology references for the most precise and up-to-date information.
          </p>
          <h3>Taxonomy and animal group</h3>
          <p>
            Asian giant salamanders are amphibians in the family Cryptobranchidae, the group of giant aquatic salamanders that also includes the North American hellbender. Within this family, the Asian members are placed in the genus <em>Andrias</em>. They are true salamanders (order Caudata), retaining a tail throughout life and breathing largely through their skin rather than relying on well-developed lungs. The Chinese giant salamander (<em>Andrias davidianus</em>) is now generally regarded as a complex of more than one species rather than a single uniform population, a point reflected in ongoing taxonomic study.
          </p>
          <h3>Appearance and recognition</h3>
          <p>
            The most striking feature of an Asian giant salamander is its sheer size, as the genus contains the largest of all living amphibians. The body is heavy and somewhat flattened, with a broad, rounded head and small, lidless eyes set far apart. Distinctive loose folds and wrinkles of skin run along the flanks; this folded skin increases the surface area available for absorbing oxygen from the surrounding water. Coloration is typically mottled brown, gray, or blotched, providing camouflage against the rocky beds and shaded banks of the streams these salamanders occupy.
          </p>
        </>
      }
      habitat={
        <p>
          Asian giant salamanders are associated with cool, clear, well-oxygenated, fast-flowing streams and rivers in parts of East Asia rather than with the continent as a whole. The Japanese giant salamander (<em>Andrias japonicus</em>) occurs in parts of Japan, while the Chinese giant salamander (<em>Andrias davidianus</em>, a species complex) is associated with river systems in parts of China. They favor rocky stream beds with crevices and undercut banks that offer shelter, and they depend on clean, oxygen-rich water. Because they are sensitive to water quality, their distribution is tied closely to the health of these freshwater habitats.
        </p>
      }
      diet={
        <p>
          These salamanders are carnivorous predators that feed mainly on fish, crustaceans, and aquatic insects, and may also take other small animals encountered in the water. With their small eyes offering limited vision, they rely heavily on detecting movement and vibrations in the water to locate prey. Hunting takes place chiefly at night. A giant salamander often waits motionless and then captures prey with a rapid sideways snap of its broad jaws, swallowing the catch whole.
        </p>
      }
      behavior={
        <>
          <p>
            Asian giant salamanders are largely nocturnal and spend daylight hours sheltering in crevices, beneath rocks, or in undercut stream banks. They are generally slow-moving and sedentary, relying on camouflage and ambush rather than active pursuit. Because they absorb much of their oxygen through their wrinkled skin, they remain in cool, well-oxygenated water and may sway their bodies to move fresh water across the skin folds. Outside of breeding, they tend to lead solitary lives within their stretch of stream.
          </p>
          <p>
            As large aquatic predators, Asian giant salamanders occupy a notable place in the food webs of the East Asian streams and rivers they inhabit, helping regulate populations of fish, crustaceans, and aquatic invertebrates. Their dependence on cool, clean, well-oxygenated water also makes them useful indicators of freshwater habitat health: where giant salamanders persist, the streams are generally clean and intact. Declines in these animals therefore often reflect wider problems affecting Asian freshwater ecosystems, such as pollution, damming, and habitat degradation.
          </p>
        </>
      }
      humanInteraction={
        <p>
          Asian giant salamanders face serious conservation pressures. The Chinese giant salamander (<em>Andrias davidianus</em>) is assessed as Critically Endangered, with overexploitation for food and habitat loss among the major threats; the Japanese giant salamander is also of conservation concern. Demand for giant salamanders as a luxury food has driven heavy collection from the wild and extensive farming, and the movement of farmed animals raises further concerns for wild populations and their genetic integrity. These pressures are best understood as conservation problems rather than as any encouragement to capture, keep, or harvest the animals. People who encounter giant salamanders in the wild should observe from a distance and direct any concerns to local wildlife and conservation authorities.
        </p>
      }
      faqs={[
        {
          question: "Why are Asian giant salamanders considered the largest living amphibians?",
          answer:
            "The genus Andrias includes the largest of all amphibians alive today, growing far beyond the size of typical salamanders and frogs. Their heavy, elongated bodies and aquatic lifestyle set them apart, though exact sizes vary among species and individuals.",
        },
        {
          question: "How do these salamanders breathe underwater?",
          answer:
            "They absorb much of their oxygen directly through their skin, and the loose, wrinkled folds along the body increase the surface area available for this. Because of this, they depend on cool, clean, well-oxygenated water to survive.",
        },
        {
          question: "Why is the Chinese giant salamander endangered?",
          answer:
            "The Chinese giant salamander (Andrias davidianus) is assessed as Critically Endangered, with overexploitation for food and habitat loss cited as major pressures. For current details, consult authoritative sources such as the IUCN Red List.",
        },
        {
          question: "Where in Asia are Asian giant salamanders found?",
          answer:
            "They occur in cool, clear streams and rivers in parts of East Asia rather than across the whole continent. The Japanese giant salamander lives in parts of Japan, and the Chinese giant salamander complex is associated with river systems in parts of China.",
        },
      ]}
      quickFacts={[
        { label: "Group", value: "Amphibians (giant salamanders)" },
        { label: "Higher classification", value: "Family Cryptobranchidae, genus Andrias" },
        { label: "Diet", value: "Carnivorous: fish, crustaceans, aquatic insects" },
        { label: "Notable trait", value: "Largest living amphibians; wrinkled skin aids oxygen uptake" },
        { label: "Habitat", value: "Cool, clear, fast-flowing streams and rivers" },
        { label: "Asia distribution", value: "Parts of East Asia (Japan; parts of China)" },
        { label: "Human interaction", value: "Collected for food; farmed; a conservation concern" },
        { label: "Conservation status", value: "Chinese giant salamander Critically Endangered; others of concern" },
      ]}
      relatedLinks={[
        { label: "Salamander Profile", href: "/animals/salamander", description: "Salamanders more broadly" },
        { label: "Hellbender Profile", href: "/animals/hellbender", description: "A giant American salamander" },
        { label: "Olm Profile", href: "/animals/olm", description: "A cave salamander" },
        { label: "Asian fauna", href: "/fauna/continents/asia", description: "Animals of Asia" },
        { label: "Reptiles & Amphibians", href: "/animal-encyclopedia/reptiles" },
      ]}
    />
  );
}
