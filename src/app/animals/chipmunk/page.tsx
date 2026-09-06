import type { Metadata } from "next";
import AnimalProfileLayout from "@/components/AnimalProfileLayout";
import { ANIMAL_SOURCES } from "@/lib/educational/animal-sources";
import { getAnimalGalleryImages, getAnimalImage, getAnimalOgImage } from "@/lib/images/animal-images";
import { buildArticleMetadata } from "@/lib/metadata";

const PATH = "/animals/chipmunk";
const TITLE = "Chipmunk — Profile, Cheek Pouches, Burrows & Diet";
const DESC =
  "Explore chipmunks: small striped ground squirrels that carry food in expandable cheek pouches and pass winter in a burrow on stored seed caches.";

export const metadata: Metadata = buildArticleMetadata({
  title: TITLE,
  description: DESC,
  path: PATH,
  publishedTime: "2026-09-06",
  modifiedTime: "2026-09-06",
  ogImage: getAnimalOgImage("chipmunk"),
});

export default function ChipmunkPage() {
  return (
    <AnimalProfileLayout
      commonName="Chipmunk"
      scientificName="Tamias striatus and relatives"
      pageTitle={TITLE}
      description={DESC}
      path={PATH}
      parentCategory="Mammals"
      parentCategoryHref="/animal-encyclopedia/mammals"
      tags={["Mammal","Rodent","North America"]}
      image={getAnimalImage("chipmunk") ?? undefined}
      galleryImages={getAnimalGalleryImages("chipmunk")}
      sources={ANIMAL_SOURCES.chipmunk}
      factsHeaderNote="“Chipmunk” covers around two dozen species of small striped ground squirrels. The reference species used here is the eastern chipmunk (Tamias striatus); most other chipmunks belong to the genus Neotamias and are western North American or, in one case, Asian."
      publishedDate="2026-09-06"
      modifiedDate="2026-09-06"
      overview={
        <>
        <p>
          Chipmunks are small, striped ground squirrels of the family Sciuridae. They are immediately recognisable from the dark and pale stripes running along the back and, in most species, across the face — a pattern that separates them from other small squirrels.
        </p>
        <p>
          Almost all chipmunks live in North America. The single exception is the Siberian chipmunk of northern Asia. The eastern chipmunk (<em>Tamias striatus</em>) of eastern North America is used here as a familiar reference species; the many western species belong to the genus <em>Neotamias</em>.
        </p>
        <p>
          The chipmunk&apos;s defining tool is a pair of expandable cheek pouches. These let the animal carry a surprising volume of seeds and nuts back to a burrow in a single trip, which is central to how it survives winter.
        </p>
        </>
      }
      habitat={
        <>
        <p>
          Chipmunks occupy deciduous and mixed woodland, forest edges, rocky slopes, hedgerows and suburban gardens. They are ground animals that climb readily but nest below ground, excavating burrow systems with sleeping chambers, storage chambers and multiple entrances that are usually kept inconspicuous.
        </p>
        </>
      }
      diet={
        <>
        <p>
          Chipmunks are omnivorous with a strong seed and nut bias: acorns, beech mast, hazelnuts, conifer seeds, berries, fungi, and green plant material, along with insects, worms, and occasionally eggs or small animals. Rather than fattening heavily for winter, chipmunks hoard — carrying food in their cheek pouches and building large caches underground.
        </p>
        </>
      }
      behavior={
        <>
        <p>
          Chipmunks are mainly solitary and defend a territory around the burrow. They are diurnal and highly alert, giving sharp repeated &apos;chip&apos; calls and lower &apos;chuck&apos; notes that function as alarm signals. In winter they retreat underground and enter torpor, but unlike a true deep hibernator they rouse periodically to feed from stored caches. Because many buried seeds are never retrieved, chipmunks act as seed dispersers for trees.
        </p>
        </>
      }
      humanInteraction={
        <>
        <p>
          Chipmunks are common and familiar around gardens, parks and campsites, where they may become bold near people. They are wild rodents rather than pets, and this profile offers no keeping, handling or wildlife-control guidance; questions about chipmunks in or around buildings are best raised with local wildlife authorities. Their seed-caching helps regenerate woodland.
        </p>
        </>
      }
      faqs={[
        {
          question: "What is the difference between a chipmunk and a squirrel?",
          answer:
            "Chipmunks are a kind of squirrel — small, ground-dwelling members of the family Sciuridae. What sets them apart is the pattern of dark and pale stripes running along the back and usually across the face, their smaller size, and the fact that they nest in burrows rather than in tree nests.",
        },
        {
          question: "Why do chipmunks have such full cheeks?",
          answer:
            "They have expandable cheek pouches used to carry food. A chipmunk fills the pouches with seeds and nuts at a feeding site and empties them into an underground store, which is far more efficient than making many single-item trips and is central to how it gets through winter.",
        },
        {
          question: "Do chipmunks hibernate?",
          answer:
            "Not in the deep, continuous way some mammals do. Chipmunks spend winter underground in torpor, but they rouse periodically to feed from the caches they built up during autumn, rather than living entirely off stored body fat.",
        },
        {
          question: "What do chipmunks eat?",
          answer:
            "Mainly seeds and nuts — acorns, beech mast, hazelnuts and conifer seeds — plus berries, fungi and green plant material. They also take insects, worms and other small animal food, which makes them omnivores rather than strict seed-eaters.",
        },
      ]}
      quickFacts={[
        { label: "Reference species", value: "Eastern chipmunk (Tamias striatus)" },
        { label: "Family", value: "Sciuridae (squirrels)" },
        { label: "Class", value: "Mammalia" },
        { label: "Species", value: "About two dozen; nearly all North American" },
        { label: "Signature feature", value: "Expandable cheek pouches" },
        { label: "Winter", value: "Torpor in a burrow, feeding on caches" },
        { label: "Diet", value: "Omnivore; seed and nut specialist" },
        { label: "Ecological role", value: "Seed disperser" },
      ]}
      relatedLinks={[
        { label: "Squirrel Profile", href: "/animals/squirrel", description: "The wider squirrel family" },
        { label: "Groundhog Profile", href: "/animals/groundhog", description: "A much larger ground squirrel" },
        { label: "Prairie Dog Profile", href: "/animals/prairie-dog", description: "A colonial ground squirrel" },
        { label: "Mouse Profile", href: "/animals/mouse" },
        { label: "Mammal Encyclopedia", href: "/animal-encyclopedia/mammals" },
      ]}
    />
  );
}
