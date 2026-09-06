import type { Metadata } from "next";
import AnimalProfileLayout from "@/components/AnimalProfileLayout";
import { ANIMAL_SOURCES } from "@/lib/educational/animal-sources";
import { getAnimalGalleryImages, getAnimalImage, getAnimalOgImage } from "@/lib/images/animal-images";
import { buildArticleMetadata } from "@/lib/metadata";

const PATH = "/animals/prairie-dog";
const TITLE = "Prairie Dog — Profile, Colonies, Burrows & Grassland Role";
const DESC =
  "Explore prairie dogs (Cynomys): colonial burrowing ground squirrels of North American grasslands, their alarm calls, and their keystone role.";

export const metadata: Metadata = buildArticleMetadata({
  title: TITLE,
  description: DESC,
  path: PATH,
  publishedTime: "2026-09-06",
  modifiedTime: "2026-09-06",
  ogImage: getAnimalOgImage("prairie-dog"),
});

export default function PrairieDogPage() {
  return (
    <AnimalProfileLayout
      commonName="Prairie Dog"
      scientificName="genus Cynomys"
      pageTitle={TITLE}
      description={DESC}
      path={PATH}
      parentCategory="Mammals"
      parentCategoryHref="/animal-encyclopedia/mammals"
      tags={["Mammal","Rodent","Grassland"]}
      image={getAnimalImage("prairie-dog") ?? undefined}
      galleryImages={getAnimalGalleryImages("prairie-dog")}
      sources={ANIMAL_SOURCES["prairie-dog"]}
      factsHeaderNote="“Prairie dog” covers five species in the genus Cynomys. The reference species used here is the black-tailed prairie dog (Cynomys ludovicianus), the most widespread and most studied."
      publishedDate="2026-09-06"
      modifiedDate="2026-09-06"
      overview={
        <>
        <p>
          Prairie dogs are stout, short-tailed, burrowing ground squirrels of North American grasslands. Despite the name they are rodents, not dogs; the name comes from the sharp barking alarm call early settlers heard across the plains.
        </p>
        <p>
          There are five species in the genus <em>Cynomys</em>. The black-tailed prairie dog (<em>C. ludovicianus</em>) is the most widespread and the usual reference for the group. All are highly social and live in extensive burrow systems.
        </p>
        <p>
          Prairie dogs are widely described as a <strong>keystone species</strong> of the shortgrass and mixed-grass prairie: their digging, grazing and burrows shape the vegetation and provide shelter and prey for a long list of other grassland animals.
        </p>
        </>
      }
      habitat={
        <>
        <p>
          Prairie dogs live in open, short and mixed-grass prairie and high desert grassland across central and western North America, from southern Canada into northern Mexico. They avoid tall vegetation that blocks the clear sightlines they rely on for predator detection, and their colonies — historically called &apos;towns&apos; — can extend across large areas of open ground.
        </p>
        </>
      }
      diet={
        <>
        <p>
          Prairie dogs are chiefly herbivorous, grazing grasses, forbs, roots and seeds, and taking some insects. Their clipping and grazing keeps vegetation short around the colony, which both maintains visibility and alters the plant community in ways that other grassland species respond to.
        </p>
        </>
      }
      behavior={
        <>
        <p>
          Prairie dogs are intensely social, living in family groups within larger colonies and greeting one another with a distinctive contact behaviour that looks like a kiss. Their alarm calls are unusually elaborate for a rodent and have been the subject of extensive research into how much information such calls carry. A striking &apos;jump-yip&apos; display — rearing up and calling — spreads contagiously through a colony. Burrows include separate chambers and raised entrance mounds that help with drainage and lookout.
        </p>
        </>
      }
      humanInteraction={
        <>
        <p>
          Prairie dog colonies once covered vast areas of the North American plains and are now greatly reduced through habitat conversion, control programmes and disease, particularly introduced sylvatic plague. Because so many grassland animals depend on their burrows — including the black-footed ferret, burrowing owl and various snakes and invertebrates — their decline has consequences well beyond the species itself. This profile offers no wildlife-control or handling guidance; status varies by species and should be checked against the IUCN Red List.
        </p>
        </>
      }
      faqs={[
        {
          question: "Are prairie dogs actually dogs?",
          answer:
            "No. They are rodents — burrowing ground squirrels in the family Sciuridae, genus Cynomys. The name comes from their sharp barking alarm call, which early settlers on the North American plains compared to a dog's bark.",
        },
        {
          question: "Why are prairie dogs called a keystone species?",
          answer:
            "Because far more grassland species depend on them than their numbers alone would suggest. Their burrows shelter animals such as burrowing owls and snakes, their grazing shapes the plant community, and they are important prey — most famously for the black-footed ferret, which specialises on them.",
        },
        {
          question: "Do prairie dogs really have a complex language?",
          answer:
            "Their alarm calls are unusually elaborate for a rodent and have been studied closely for how much information they convey about a threat. Researchers continue to debate how best to interpret that, so it is fair to call the calls complex and informative — but not to describe them as a language in the human sense.",
        },
        {
          question: "What is the jump-yip display?",
          answer:
            "A prairie dog rears up on its hind legs, throws its forelegs into the air and gives a two-part call. The display often spreads contagiously through neighbours across a colony, and is generally interpreted as a social and territorial signal rather than a straightforward alarm.",
        },
      ]}
      quickFacts={[
        { label: "Reference species", value: "Black-tailed prairie dog (C. ludovicianus)" },
        { label: "Genus", value: "Cynomys — five species" },
        { label: "Family", value: "Sciuridae (squirrels)" },
        { label: "Class", value: "Mammalia" },
        { label: "Social unit", value: "Family groups within large colonies" },
        { label: "Habitat", value: "Short and mixed-grass prairie" },
        { label: "Ecological role", value: "Keystone species of the grasslands" },
        { label: "Status", value: "Varies by species — verify" },
      ]}
      relatedLinks={[
        { label: "Groundhog Profile", href: "/animals/groundhog", description: "A large, solitary ground squirrel" },
        { label: "Chipmunk Profile", href: "/animals/chipmunk", description: "A small striped ground squirrel" },
        { label: "Meerkat Profile", href: "/animals/meerkat", description: "Another highly social burrower" },
        { label: "Bison Profile", href: "/animals/bison", description: "A fellow grassland grazer" },
        { label: "Mammal Encyclopedia", href: "/animal-encyclopedia/mammals" },
      ]}
    />
  );
}
