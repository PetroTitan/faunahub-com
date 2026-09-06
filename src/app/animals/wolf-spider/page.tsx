import type { Metadata } from "next";
import AnimalProfileLayout from "@/components/AnimalProfileLayout";
import { ANIMAL_SOURCES } from "@/lib/educational/animal-sources";
import { getAnimalGalleryImages, getAnimalImage, getAnimalOgImage } from "@/lib/images/animal-images";
import { buildArticleMetadata } from "@/lib/metadata";

const PATH = "/animals/wolf-spider";
const TITLE = "Wolf Spider — Profile, Eyeshine, Hunting & Carrying Young";
const DESC =
  "Explore wolf spiders (Lycosidae): ground-hunting spiders whose eyes shine in torchlight, and whose mothers carry their spiderlings on their backs.";

export const metadata: Metadata = buildArticleMetadata({
  title: TITLE,
  description: DESC,
  path: PATH,
  publishedTime: "2026-09-06",
  modifiedTime: "2026-09-06",
  ogImage: getAnimalOgImage("wolf-spider"),
});

export default function WolfSpiderPage() {
  return (
    <AnimalProfileLayout
      commonName="Wolf Spider"
      scientificName="family Lycosidae"
      pageTitle={TITLE}
      description={DESC}
      path={PATH}
      parentCategory="Insects & Invertebrates"
      parentCategoryHref="/animal-encyclopedia/insects"
      tags={["Arachnid","Spider","Ground Hunter"]}
      image={getAnimalImage("wolf-spider") ?? undefined}
      galleryImages={getAnimalGalleryImages("wolf-spider")}
      sources={ANIMAL_SOURCES["wolf-spider"]}
      factsHeaderNote="“Wolf spider” covers around two and a half thousand species in the family Lycosidae. Habits vary between species, so statements here are general to the family."
      publishedDate="2026-09-06"
      modifiedDate="2026-09-06"
      overview={
        <>
        <p>
          Wolf spiders are the family Lycosidae, a large group of robust, agile, ground-dwelling hunters. The name reflects an old assumption that they hunted in packs; they do not — they are solitary predators that run prey down rather than trapping it.
        </p>
        <p>
          They have eight eyes in three rows, including a prominent pair of large forward-facing eyes. Those eyes contain a reflective layer, the tapetum, which produces a striking <strong>eyeshine</strong>: sweep a torch across grass at night and wolf spiders show as small green points of light.
        </p>
        <p>
          Their most distinctive behaviour is maternal. The female carries her <strong>egg sac attached to her spinnerets</strong>, and once the young hatch they climb onto her abdomen and are <strong>carried on her back</strong> for a period before dispersing — behaviour unusual among spiders.
        </p>
        </>
      }
      habitat={
        <>
        <p>
          Wolf spiders are found worldwide in almost every terrestrial habitat: grassland, meadows, woodland floor, gardens, wetlands, dunes, farmland and inside buildings. Many are wanderers that hunt across open ground; others construct burrows, sometimes with a silk-lined entrance or a turret, from which they ambush passing prey.
        </p>
        </>
      }
      diet={
        <>
        <p>
          Wolf spiders are generalist predators of insects and other invertebrates, including crickets, beetles, flies, other spiders and, in some cases, small vertebrates for the largest species. They hunt by pursuit and pounce, relying on vision and on vibration detected through the substrate, and they do not use webs to capture prey.
        </p>
        </>
      }
      behavior={
        <>
        <p>
          Hunting is active: a wolf spider either stalks and chases prey across the ground or waits at a burrow entrance and lunges. Courtship involves visual signalling with the pedipalps and forelegs alongside substrate vibrations. The female&apos;s care of the egg sac and then the spiderlings is the family&apos;s most recognisable trait, and a female carrying dozens of young on her back is a common sight in grassland.
        </p>
        </>
      }
      humanInteraction={
        <>
        <p>
          Wolf spiders are common in gardens, farmland and grassland where they are significant predators of insects. They are frequently mistaken for more dangerous spiders because of their size, hairiness and speed, but they are not considered medically significant; like most spiders they may bite defensively if trapped against skin. This profile is educational and offers no first-aid, treatment, pest-control or handling guidance — any bite or reaction should be directed to qualified medical professionals or local health authorities.
        </p>
        </>
      }
      faqs={[
        {
          question: "Do wolf spiders hunt in packs?",
          answer:
            "No — the name is misleading. Wolf spiders are solitary hunters. They were named for the assumption that they pursued prey in a pack like wolves, but in fact each spider hunts alone, running down prey or ambushing it from a burrow.",
        },
        {
          question: "Why do wolf spider eyes glow in torchlight?",
          answer:
            "Because of a reflective layer called the tapetum behind the retina, which bounces light back and improves night vision. Shining a torch across grass at night makes wolf spiders show up as small green points — a well-known way of finding them after dark.",
        },
        {
          question: "Do wolf spiders carry their babies?",
          answer:
            "Yes, and it is their most distinctive behaviour. The female carries her egg sac attached to her spinnerets, and after the spiderlings hatch they climb onto her abdomen and ride there for a period before dispersing. Very few spiders show this level of maternal care.",
        },
        {
          question: "Are wolf spiders dangerous?",
          answer:
            "They are not considered medically significant, though like most spiders one may bite defensively if trapped against skin. They are often mistaken for more dangerous species because they are large, hairy and fast. This profile gives no first-aid or handling guidance; any bite or reaction should go to qualified medical professionals or local health authorities.",
        },
      ]}
      quickFacts={[
        { label: "Family", value: "Lycosidae — about 2,500 species" },
        { label: "Class", value: "Arachnida" },
        { label: "Hunting", value: "Solitary pursuit; no capture web" },
        { label: "Eyes", value: "Eight in three rows; reflective tapetum" },
        { label: "Eyeshine", value: "Green points in torchlight at night" },
        { label: "Maternal care", value: "Egg sac carried; young ride on the back" },
        { label: "Habitat", value: "Ground level, almost worldwide" },
        { label: "Boundary", value: "Educational only — no first aid given" },
      ]}
      relatedLinks={[
        { label: "Jumping Spider Profile", href: "/animals/jumping-spider", description: "Another active hunter" },
        { label: "Spider Profile", href: "/animals/spider", description: "Group-level overview" },
        { label: "Tarantula Profile", href: "/animals/tarantula" },
        { label: "Funnel-Web Spider Profile", href: "/animals/funnel-web-spider" },
        { label: "Insects & Invertebrates", href: "/animal-encyclopedia/insects" },
      ]}
    />
  );
}
