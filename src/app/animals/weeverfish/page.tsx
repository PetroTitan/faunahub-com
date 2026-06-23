import type { Metadata } from "next";
import AnimalProfileLayout from "@/components/AnimalProfileLayout";
import { ANIMAL_SOURCES } from "@/lib/educational/animal-sources";
import { getAnimalGalleryImages, getAnimalImage, getAnimalOgImage } from "@/lib/images/animal-images";
import { buildArticleMetadata } from "@/lib/metadata";

const PATH = "/animals/weeverfish";
const TITLE = "Weeverfish — Profile of the Venomous Fish That Hides in the Sand";
const DESC =
  "Meet the weeverfish (Trachinidae): a small, sand-burying coastal fish with venomous spines that is among the most venomous fish in temperate European waters — and a hazard to barefoot beachgoers.";

export const metadata: Metadata = buildArticleMetadata({
  title: TITLE,
  description: DESC,
  path: PATH,
  publishedTime: "2026-06-23",
  modifiedTime: "2026-06-23",
  ogImage: getAnimalOgImage("weeverfish"),
});

export default function WeeverfishPage() {
  return (
    <AnimalProfileLayout
      commonName="Weeverfish"
      scientificName="Trachinus & Echiichthys"
      pageTitle={TITLE}
      description={DESC}
      path={PATH}
      parentCategory="Fish"
      parentCategoryHref="/animal-encyclopedia/fish"
      tags={["Fish", "Venomous", "Coastal", "Marine"]}
      image={getAnimalImage("weeverfish") ?? undefined}
      galleryImages={getAnimalGalleryImages("weeverfish")}
      sources={ANIMAL_SOURCES.weeverfish}
      publishedDate="2026-06-23"
      modifiedDate="2026-06-23"
      overview={
        <>
          <p>
            Weeverfish (family Trachinidae) are small, elongated coastal fish of the eastern Atlantic,
            Mediterranean, Black, and North Seas. The best known are the greater weever
            (<em>Trachinus draco</em>) and the lesser weever (<em>Echiichthys vipera</em>). They spend much
            of their time buried in sand on shallow seabeds, with just the eyes and the tip of a spiny fin
            exposed.
          </p>
          <p>
            Weevers are venomous. They carry sharp spines — in the first dorsal fin and on the gill covers —
            that are equipped with venom, and they are widely regarded as among the most venomous fish in
            temperate European seas. The venom is a defence, not a hunting tool.
          </p>
          <p>
            <strong>Safety note:</strong> weeverfish stings are very painful. Because the fish lies hidden in
            shallow sand, people are most often stung by stepping on one in the shallows or handling a caught
            fish. Do not handle weeverfish, take care wading on sandy shores where they occur, and seek
            professional medical advice or attention if stung. This page is educational and does not provide
            first-aid or medical treatment instructions.
          </p>
        </>
      }
      habitat={
        <p>
          Weeverfish live on sandy and muddy seabeds, mostly in shallow coastal waters but ranging into
          deeper water. The lesser weever in particular favours shallow sandy areas close to shore,
          including the zone where people swim and wade. They lie buried in the sediment during the day and
          may be more active at night.
        </p>
      }
      diet={
        <p>
          Weeverfish are ambush predators. Buried in the sand with only the eyes and mouth area exposed,
          they wait for small fish, shrimps, and other crustaceans to pass within reach, then dart out to
          seize them. Their venomous spines are used for defence against larger predators, not for catching
          this prey.
        </p>
      }
      behavior={
        <p>
          The weever&apos;s whole lifestyle is built around concealment. By burying itself it stays hidden
          from both prey and predators, and its upward-facing eyes and mouth let it watch and strike from
          below the surface. If a predator — or a foot — disturbs it, the erect, venom-bearing spines provide
          a powerful deterrent. Weevers are not aggressive and do not chase people; stings are a defensive
          response to being trodden on or handled.
        </p>
      }
      humanInteraction={
        <p>
          Weeverfish matter to people mainly as a coastal hazard and, in some areas, as a food fish caught
          by anglers and in trawls. Most stings happen by accident — stepping on a buried lesser weever in
          shallow water, or handling a fish when removing it from a net or line. <strong>If stung, seek
          professional medical advice or attention.</strong> The safest approach is prevention: avoid
          touching weeverfish and take care when wading on sandy shores where they are known to occur.
        </p>
      }
      faqs={[
        {
          question: "Are weeverfish venomous or poisonous?",
          answer:
            "Weeverfish are venomous: they have sharp spines in the first dorsal fin and on the gill covers that deliver venom when something presses against them. The venom is a defence. They are considered among the most venomous fish in temperate European waters.",
        },
        {
          question: "How do people usually get stung?",
          answer:
            "Most stings are accidents. Because weevers lie buried in shallow sand, swimmers and waders may step on one, and anglers can be stung while handling a caught fish. The fish does not attack people — the sting is purely defensive.",
        },
        {
          question: "What should I do if I am stung by a weeverfish?",
          answer:
            "Weeverfish stings are very painful. Seek professional medical advice or attention. This page is educational and does not give first-aid or medical treatment instructions; follow guidance from qualified medical professionals or local health authorities.",
        },
        {
          question: "Why do weeverfish bury themselves in the sand?",
          answer:
            "Burying hides the weever from both prey and predators. With only its eyes and mouth showing, it can ambush passing fish and crustaceans from below while staying out of sight — and its venomous spines deter anything that disturbs it.",
        },
      ]}
      quickFacts={[
        { label: "Family", value: "Trachinidae (weeverfishes)" },
        { label: "Examples", value: "Greater weever, lesser weever" },
        { label: "Class", value: "Actinopterygii (ray-finned fish)" },
        { label: "Range", value: "NE Atlantic, Mediterranean, Black & North Seas" },
        { label: "Habitat", value: "Sandy/muddy seabeds, often shallow" },
        { label: "Venom", value: "Spines in dorsal fin & gill covers (defensive)" },
        { label: "Hazard", value: "Painful stings; never handle" },
        { label: "Feeding", value: "Buried ambush predator" },
      ]}
      relatedLinks={[
        { label: "Stonefish Profile", href: "/animals/stonefish", description: "A highly venomous, camouflaged fish" },
        { label: "Lionfish Profile", href: "/animals/lionfish", description: "Another venomous-spined fish" },
        { label: "Flounder Profile", href: "/animals/flounder", description: "Another fish that lies hidden on the seabed" },
        { label: "Fish Encyclopedia", href: "/animal-encyclopedia/fish", description: "More fish profiles" },
        { label: "Marine Animals", href: "/animal-encyclopedia/marine-animals" },
      ]}
    />
  );
}
