import type { Metadata } from "next";
import AnimalProfileLayout from "@/components/AnimalProfileLayout";
import { ANIMAL_SOURCES } from "@/lib/educational/animal-sources";
import { getAnimalGalleryImages, getAnimalImage, getAnimalOgImage } from "@/lib/images/animal-images";
import { buildArticleMetadata } from "@/lib/metadata";

const PATH = "/animals/groundhog";
const TITLE = "Groundhog (Woodchuck) — Profile, Burrows & True Hibernation";
const DESC =
  "Explore the groundhog or woodchuck (Marmota monax): a large burrowing ground squirrel of North America, and one of the few true hibernators among them.";

export const metadata: Metadata = buildArticleMetadata({
  title: TITLE,
  description: DESC,
  path: PATH,
  publishedTime: "2026-09-06",
  modifiedTime: "2026-09-06",
  ogImage: getAnimalOgImage("groundhog"),
});

export default function GroundhogPage() {
  return (
    <AnimalProfileLayout
      commonName="Groundhog"
      scientificName="Marmota monax"
      pageTitle={TITLE}
      description={DESC}
      path={PATH}
      parentCategory="Mammals"
      parentCategoryHref="/animal-encyclopedia/mammals"
      tags={["Mammal","Rodent","North America"]}
      image={getAnimalImage("groundhog") ?? undefined}
      galleryImages={getAnimalGalleryImages("groundhog")}
      sources={ANIMAL_SOURCES.groundhog}
      publishedDate="2026-09-06"
      modifiedDate="2026-09-06"
      overview={
        <>
        <p>
          The groundhog (<em>Marmota monax</em>), also called the woodchuck, is a large, heavy-bodied ground squirrel of North America and one of the biggest members of the squirrel family. It is a marmot — a group of stout, burrowing rodents mostly associated with mountains, though the groundhog is a lowland exception.
        </p>
        <p>
          Groundhogs are chunky and short-legged, with coarse grizzled brown fur, small ears and strong claws suited to digging. They are far more solitary than prairie dogs and far more strongly tied to a single burrow system.
        </p>
        <p>
          Unlike chipmunks, which rouse through winter to feed on stored food, the groundhog is a <strong>true hibernator</strong>: it fattens heavily in late summer and autumn, then sleeps through winter on its body reserves with a deeply lowered body temperature and heart rate.
        </p>
        </>
      }
      habitat={
        <>
        <p>
          Groundhogs live across much of eastern and central North America, from the eastern United States north into Canada and Alaska. They favour woodland edges, hedgerows, meadows, pasture and roadside banks — places where open feeding ground meets cover. Burrows are extensive, with several entrances, separate chambers, and a distinct winter chamber below the frost line.
        </p>
        </>
      }
      diet={
        <>
        <p>
          Groundhogs are herbivores, feeding on grasses, clover, dandelions, plantain, garden vegetables, fruit and the leaves and bark of some woody plants. Feeding is concentrated in the growing season, and animals put on substantial fat reserves before entering hibernation.
        </p>
        </>
      }
      behavior={
        <>
        <p>
          Groundhogs are diurnal, largely solitary outside the breeding season, and closely tied to their burrows, rarely straying far from an entrance. They sit up on their haunches to scan for danger and give a sharp whistle when alarmed — the origin of the nickname &apos;whistlepig&apos;. Despite their bulk they climb trees and swim when they need to. Abandoned groundhog burrows are used by many other animals, from foxes and skunks to rabbits and snakes.
        </p>
        </>
      }
      humanInteraction={
        <>
        <p>
          The groundhog is best known outside biology through Groundhog Day, a North American folk tradition with no predictive value for weather. In practical terms groundhogs are often in tension with gardeners and farmers because of their feeding and digging. This profile is educational only and gives no wildlife-control, trapping or handling guidance; such questions should go to local wildlife authorities. The species is common and widespread; verify current status at the IUCN Red List.
        </p>
        </>
      }
      faqs={[
        {
          question: "Is a groundhog the same as a woodchuck?",
          answer:
            "Yes — two names for the same animal, Marmota monax. 'Woodchuck' has nothing to do with wood or chucking; it is generally traced to an Algonquian name for the animal that English speakers reshaped into familiar words.",
        },
        {
          question: "Do groundhogs really hibernate?",
          answer:
            "Yes. The groundhog is a true hibernator, which sets it apart from chipmunks. It builds heavy fat reserves in late summer and autumn, retreats to a winter chamber below the frost line, and passes the winter with a greatly lowered body temperature, heart rate and breathing rate.",
        },
        {
          question: "What do groundhogs eat?",
          answer:
            "They are herbivores. The diet is mainly grasses, clover, dandelions and other soft green plants, along with fruit, garden vegetables and some bark and leaves of woody plants. They feed heavily through the growing season to build the fat they need for winter.",
        },
        {
          question: "Are groundhogs related to prairie dogs?",
          answer:
            "Yes — both are burrowing ground squirrels in the family Sciuridae. Groundhogs are marmots and are typically solitary, tied to one burrow system, whereas prairie dogs are smaller and live in large social colonies.",
        },
      ]}
      quickFacts={[
        { label: "Scientific name", value: "Marmota monax" },
        { label: "Also called", value: "Woodchuck, whistlepig" },
        { label: "Family", value: "Sciuridae (squirrels)" },
        { label: "Class", value: "Mammalia" },
        { label: "Group", value: "A marmot — but a lowland one" },
        { label: "Winter", value: "True hibernation on body fat" },
        { label: "Diet", value: "Herbivore — grasses, clover, forbs" },
        { label: "Social", value: "Largely solitary" },
      ]}
      relatedLinks={[
        { label: "Prairie Dog Profile", href: "/animals/prairie-dog", description: "A colonial ground squirrel" },
        { label: "Chipmunk Profile", href: "/animals/chipmunk", description: "A small striped relative" },
        { label: "Beaver Profile", href: "/animals/beaver", description: "Another large North American rodent" },
        { label: "Hibernation & Torpor", href: "/animal-senses-and-adaptations/hibernation-and-torpor", description: "How animals pass the winter" },
        { label: "Mammal Encyclopedia", href: "/animal-encyclopedia/mammals" },
      ]}
    />
  );
}
