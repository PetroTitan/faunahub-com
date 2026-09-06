import type { Metadata } from "next";
import AnimalProfileLayout from "@/components/AnimalProfileLayout";
import { ANIMAL_SOURCES } from "@/lib/educational/animal-sources";
import { getAnimalGalleryImages, getAnimalImage, getAnimalOgImage } from "@/lib/images/animal-images";
import { buildArticleMetadata } from "@/lib/metadata";

const PATH = "/animals/locust";
const TITLE = "Desert Locust — Profile, Swarming Phase Change & Ecology";
const DESC =
  "Explore the desert locust (Schistocerca gregaria): a grasshopper that changes body, colour and behaviour when crowded, turning solitary into swarming.";

export const metadata: Metadata = buildArticleMetadata({
  title: TITLE,
  description: DESC,
  path: PATH,
  publishedTime: "2026-09-06",
  modifiedTime: "2026-09-06",
  ogImage: getAnimalOgImage("locust"),
});

export default function LocustPage() {
  return (
    <AnimalProfileLayout
      commonName="Desert Locust"
      scientificName="Schistocerca gregaria"
      pageTitle={TITLE}
      description={DESC}
      path={PATH}
      parentCategory="Insects & Invertebrates"
      parentCategoryHref="/animal-encyclopedia/insects"
      tags={["Insect","Orthopteran","Swarming"]}
      image={getAnimalImage("locust") ?? undefined}
      galleryImages={getAnimalGalleryImages("locust")}
      sources={ANIMAL_SOURCES.locust}
      publishedDate="2026-09-06"
      modifiedDate="2026-09-06"
      overview={
        <>
        <p>
          The desert locust (<em>Schistocerca gregaria</em>) is a grasshopper — but one with an extraordinary property. A locust is not a separate kind of insect from a grasshopper; it is a grasshopper species capable of switching between two entirely different forms.
        </p>
        <p>
          In its <strong>solitary phase</strong> the desert locust is a shy, green or sandy, cryptically coloured insect that avoids others of its kind. When crowding triggers the change, it enters the <strong>gregarious phase</strong>: the insects turn yellow and black, become stockier, grow longer wings, become far more active, and actively seek each other out.
        </p>
        <p>
          The trigger is remarkably specific — repeated contact, particularly touching of the hind legs, as animals are pushed together on shrinking patches of vegetation after rain. The transformation is called phase polyphenism, and it turns a harmless insect into the basis of a swarm.
        </p>
        </>
      }
      habitat={
        <>
        <p>
          Desert locusts inhabit dry and semi-arid regions across North and West Africa, the Sahel, the Arabian Peninsula and into southwest Asia. In the solitary phase they live at low density across a vast area of desert and scrub. Rainfall drives the cycle: good rains produce a flush of vegetation, allowing rapid breeding, and as that vegetation dries the insects are forced together, which sets the phase change in motion.
        </p>
        </>
      }
      diet={
        <>
        <p>
          Desert locusts are herbivores that feed on a wide range of green plants — leaves, shoots, stems, flowers, seeds and bark. It is this generalist appetite combined with swarm density that makes them agriculturally significant, since a swarm consumes vegetation without regard to whether it is crop or wild plant.
        </p>
        </>
      }
      behavior={
        <>
        <p>
          Phase change is the defining behaviour. Gregarious nymphs form dense marching bands on the ground; winged adults form swarms that can travel long distances on the wind, crossing seas and deserts. Solitary-phase locusts, by contrast, are nocturnal, cryptic and actively avoid each other. The change is reversible: as densities fall, subsequent generations revert toward the solitary form.
        </p>
        </>
      }
      humanInteraction={
        <>
        <p>
          The desert locust is one of the most economically significant insects in the world, and locust plagues are documented across thousands of years of history in the regions it occupies. Modern management focuses on monitoring breeding areas after rainfall and intervening early, coordinated internationally, because a swarm is far harder to address than an emerging outbreak. This profile is educational and offers no pest-control, pesticide or treatment guidance — such matters are handled by national plant protection authorities and international agencies.
        </p>
        </>
      }
      faqs={[
        {
          question: "What is the difference between a locust and a grasshopper?",
          answer:
            "A locust is a grasshopper — specifically, one of the few grasshopper species that can change phase. Under crowding it transforms in colour, body shape, physiology and behaviour, switching from a solitary insect that avoids others into a gregarious one that forms bands and swarms. Most grasshoppers cannot do this.",
        },
        {
          question: "What triggers a locust swarm?",
          answer:
            "Crowding. When rainfall produces a flush of vegetation, locusts breed rapidly; as the vegetation dries they are forced together onto shrinking green patches. Repeated physical contact — particularly touching of the hind legs — triggers the change from solitary to gregarious phase, and dense bands and swarms follow.",
        },
        {
          question: "Do locusts change colour?",
          answer:
            "Yes, dramatically. Solitary-phase desert locusts are green or sandy and cryptic; gregarious-phase individuals become bright yellow and black. Along with colour they change in body proportions, wing length, activity level and behaviour toward other locusts.",
        },
        {
          question: "Is the phase change permanent?",
          answer:
            "No — it is reversible. As population density falls, subsequent generations shift back toward the solitary form. This is why locust management concentrates on detecting and addressing outbreaks early, before densities rise far enough to sustain the gregarious phase.",
        },
      ]}
      quickFacts={[
        { label: "Scientific name", value: "Schistocerca gregaria" },
        { label: "Family", value: "Acrididae (short-horned grasshoppers)" },
        { label: "Class", value: "Insecta" },
        { label: "Key trait", value: "Phase polyphenism — solitary/gregarious" },
        { label: "Trigger", value: "Crowding; contact on the hind legs" },
        { label: "Solitary phase", value: "Green or sandy, cryptic, avoids others" },
        { label: "Gregarious phase", value: "Yellow and black, active, swarming" },
        { label: "Range", value: "North/West Africa, Arabia, SW Asia" },
      ]}
      relatedLinks={[
        { label: "Grasshopper Profile", href: "/animals/grasshopper", description: "Group-level overview" },
        { label: "Cricket Profile", href: "/animals/cricket" },
        { label: "Katydid Profile", href: "/animals/katydid" },
        { label: "Termite Profile", href: "/animals/termite" },
        { label: "Insects & Invertebrates", href: "/animal-encyclopedia/insects" },
      ]}
    />
  );
}
