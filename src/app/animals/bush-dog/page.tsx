import type { Metadata } from "next";
import AnimalProfileLayout from "@/components/AnimalProfileLayout";
import { ANIMAL_SOURCES } from "@/lib/educational/animal-sources";
import { getAnimalGalleryImages, getAnimalImage, getAnimalOgImage } from "@/lib/images/animal-images";
import { buildArticleMetadata } from "@/lib/metadata";

const PATH = "/animals/bush-dog";
const TITLE = "Bush Dog — Profile of South America's Stocky Pack-hunting Canid";
const DESC =
  "Meet the bush dog (Speothos venaticus): a short-legged, otter-like wild dog of Central and South America that hunts in packs near water and barely resembles a typical dog.";

export const metadata: Metadata = buildArticleMetadata({
  title: TITLE,
  description: DESC,
  path: PATH,
  publishedTime: "2026-06-23",
  modifiedTime: "2026-06-23",
  ogImage: getAnimalOgImage("bush-dog"),
});

export default function BushDogPage() {
  return (
    <AnimalProfileLayout
      commonName="Bush Dog"
      scientificName="Speothos venaticus"
      pageTitle={TITLE}
      description={DESC}
      path={PATH}
      parentCategory="Mammals"
      parentCategoryHref="/animal-encyclopedia/mammals"
      tags={["Mammal", "Wild dog", "South America"]}
      image={getAnimalImage("bush-dog") ?? undefined}
      galleryImages={getAnimalGalleryImages("bush-dog")}
      sources={ANIMAL_SOURCES["bush-dog"]}
      publishedDate="2026-06-23"
      modifiedDate="2026-06-23"
      overview={
        <>
          <p>
            The bush dog (<em>Speothos venaticus</em>) is one of the most unusual members of the dog
            family. Stocky and short-legged with a broad face, small ears, and a short tail, it looks more
            like an otter or a large mustelid than a typical canid. Adults weigh only around 5 to 8
            kilograms.
          </p>
          <p>
            Bush dogs range widely but patchily across Central and South America, from Panama to northern
            Argentina, usually near water in forests and wet grasslands. They have partly webbed feet, swim
            and dive well, and are among the most social of wild dogs, living and hunting in cooperative
            packs.
          </p>
          <p>
            Although broadly distributed, the bush dog is uncommon and rarely seen. It is listed as Near
            Threatened on the IUCN Red List, with habitat loss the chief concern.
          </p>
        </>
      }
      habitat={
        <p>
          Bush dogs favour lowland habitats close to water — tropical rainforest, gallery forest, wet
          savanna, and seasonally flooded grassland. Access to water matters: they are strong swimmers and
          often hunt and travel along streams and wetlands. They shelter in burrows, including those dug by
          other animals, and in hollow logs.
        </p>
      }
      diet={
        <p>
          The bush dog is a carnivore that specialises in large rodents — pacas, agoutis, and even
          capybaras far heavier than the dogs themselves. By hunting in packs, bush dogs can pursue and
          overpower prey much bigger than a single animal could tackle, sometimes driving it into water.
          They also take smaller mammals, birds, and reptiles.
        </p>
      }
      behavior={
        <p>
          Bush dogs are highly social and cooperative. Packs move, hunt, and rest together and keep in
          contact through frequent high-pitched squeaks and whines — useful for staying in touch in dense
          vegetation where pack members cannot see one another. They mark territory with scent, and group
          members help raise the pups. This teamwork, more than size or speed, is the key to their hunting
          success.
        </p>
      }
      humanInteraction={
        <p>
          The bush dog is naturally rare and elusive, and its main threat is the loss and fragmentation of
          forest and wetland habitat, along with the decline of the large rodents it depends on. It is
          listed as Near Threatened. Conserving connected tracts of lowland habitat is important for its
          future. Consult the IUCN Red List for current status.
        </p>
      }
      faqs={[
        {
          question: "Is the bush dog really a dog?",
          answer:
            "Yes — despite its otter-like build, the bush dog is a true member of the dog family (Canidae). It is unusual in body shape and lifestyle but is genuinely a wild canid, and it is the only living species in its genus, Speothos.",
        },
        {
          question: "Why do bush dogs hunt in packs?",
          answer:
            "Cooperative hunting lets a small dog tackle prey far larger than itself, such as pacas, agoutis, and capybaras. Working as a group, bush dogs can chase, corner, and overpower big rodents — often using water — that a lone animal could not.",
        },
        {
          question: "Do bush dogs swim?",
          answer:
            "Yes. They have partly webbed feet, swim and dive readily, and often live and hunt near water. This semi-aquatic streak is part of what makes them resemble otters more than typical dogs.",
        },
        {
          question: "Are bush dogs endangered?",
          answer:
            "The bush dog is listed as Near Threatened on the IUCN Red List. It is widespread but naturally scarce, and habitat loss and fragmentation are the main concerns. Check the IUCN Red List for the latest assessment.",
        },
      ]}
      quickFacts={[
        { label: "Scientific name", value: "Speothos venaticus" },
        { label: "Class", value: "Mammalia" },
        { label: "Family", value: "Canidae (only species in Speothos)" },
        { label: "Weight", value: "~5–8 kg" },
        { label: "Range", value: "Panama to northern Argentina" },
        { label: "Habitat", value: "Lowland forest & wet grassland near water" },
        { label: "Social life", value: "Cooperative packs; vocal squeaks" },
        { label: "IUCN status", value: "Near Threatened" },
      ]}
      relatedLinks={[
        { label: "Maned Wolf Profile", href: "/animals/maned-wolf", description: "Another unusual South American canid" },
        { label: "Dhole Profile", href: "/animals/dhole", description: "An Asian pack-hunting wild dog" },
        { label: "Paca Profile", href: "/animals/paca", description: "A large rodent the bush dog hunts" },
        { label: "Fauna by Continent", href: "/fauna/continents", description: "South American mammals in context" },
        { label: "Mammals Encyclopedia", href: "/animal-encyclopedia/mammals" },
      ]}
    />
  );
}
