import type { Metadata } from "next";
import AnimalProfileLayout from "@/components/AnimalProfileLayout";
import { ANIMAL_SOURCES } from "@/lib/educational/animal-sources";
import { getAnimalGalleryImages, getAnimalImage, getAnimalOgImage } from "@/lib/images/animal-images";
import { buildArticleMetadata } from "@/lib/metadata";

const PATH = "/animals/black-widow";
const TITLE = "Black Widow Spider — Profile, Hourglass Marking & Web Biology";
const DESC =
  "Explore the southern black widow (Latrodectus mactans): a glossy cobweb spider with a red hourglass mark, a serious bite, and an exaggerated reputation.";

export const metadata: Metadata = buildArticleMetadata({
  title: TITLE,
  description: DESC,
  path: PATH,
  publishedTime: "2026-09-06",
  modifiedTime: "2026-09-06",
  ogImage: getAnimalOgImage("black-widow"),
});

export default function BlackWidowPage() {
  return (
    <AnimalProfileLayout
      commonName="Black Widow Spider"
      scientificName="Latrodectus mactans"
      pageTitle={TITLE}
      description={DESC}
      path={PATH}
      parentCategory="Insects & Invertebrates"
      parentCategoryHref="/animal-encyclopedia/insects"
      tags={["Arachnid","Spider","Medically Significant"]}
      image={getAnimalImage("black-widow") ?? undefined}
      galleryImages={getAnimalGalleryImages("black-widow")}
      sources={ANIMAL_SOURCES["black-widow"]}
      factsHeaderNote="“Black widow” is used for several species in the genus Latrodectus. The species described here is the southern black widow (Latrodectus mactans) of North America; relatives include the redback of Australia and the European black widow."
      publishedDate="2026-09-06"
      modifiedDate="2026-09-06"
      overview={
        <>
        <p>
          The southern black widow (<em>Latrodectus mactans</em>) is a glossy black cobweb spider of North America. The mature female is the recognisable one: rounded, shining black, with a red <strong>hourglass marking</strong> on the underside of the abdomen. Males are much smaller, paler and rarely noticed.
        </p>
        <p>
          It belongs to the genus <em>Latrodectus</em>, which also contains the Australian redback and the European black widow. Members of this genus are among the relatively small number of spiders whose bite is considered <strong>medically significant</strong>.
        </p>
        <p>
          <strong>Safety note:</strong> this profile is educational only. It gives no first-aid, treatment or identification-for-safety guidance, and no advice on handling, capturing or removing spiders. Any bite or reaction should be directed to qualified medical professionals or local health authorities, and concerns about spiders around a home belong with local pest or wildlife authorities.
        </p>
        </>
      }
      habitat={
        <>
        <p>
          Southern black widows occupy the southeastern and southern United States, in dry, sheltered, undisturbed places — under rocks and logs, in rodent burrows, among woodpiles, and in and around outbuildings, sheds, garages, meter boxes and stacked materials. They favour dark, protected spaces with something to anchor a web to, and are shy of open, disturbed areas.
        </p>
        </>
      }
      diet={
        <>
        <p>
          Black widows are web predators, feeding on insects and other invertebrates that blunder into their web — beetles, ants, grasshoppers, cockroaches, woodlice and other spiders. Prey is bitten, wrapped in silk and consumed.
        </p>
        </>
      }
      behavior={
        <>
        <p>
          The web is a tangle: an irregular, three-dimensional cobweb of strong silk rather than the neat orb of a garden spider. Anchor lines run down to the ground, and prey that touches them is snared. Black widows are shy and reclusive, generally retreating rather than confronting, and bites usually occur when a spider is pressed against skin. The name comes from cases of females eating the male after mating — a behaviour recorded in the genus but far from universal, and much less routine than the name implies.
        </p>
        </>
      }
      humanInteraction={
        <>
        <p>
          The black widow&apos;s reputation greatly exceeds its behaviour: it is a shy, retiring spider that avoids people, and bites are uncommon relative to how widespread it is. The bite is nevertheless medically significant, and the appropriate response is calm and practical — avoid handling the spider, take care when reaching into undisturbed sheltered spaces, and direct any bite or reaction to qualified medical professionals or local health authorities. Concerns about spiders in living or working spaces are best raised with local pest or wildlife authorities rather than managed by attempting to catch the animal. This profile gives no first-aid, treatment or removal guidance.
        </p>
        </>
      }
      faqs={[
        {
          question: "How do you recognise a black widow?",
          answer:
            "The mature female is glossy black and rounded, with a red hourglass marking on the underside of the abdomen. Males are much smaller, paler and seldom noticed. This profile is educational and is not an identification guide for safety purposes — any spider of concern should be treated as one to leave alone.",
        },
        {
          question: "Do female black widows always eat the male?",
          answer:
            "No. Sexual cannibalism has been recorded in the genus and gave the spider its name, but it is far from a universal outcome and happens much less routinely than the popular image suggests. Males often mate and leave.",
        },
        {
          question: "Is a black widow bite dangerous?",
          answer:
            "The bite is considered medically significant. Black widows are shy and bites are uncommon relative to how widespread they are, generally occurring when the spider is pressed against skin. This profile gives no first-aid or treatment guidance: any bite or reaction should be directed to qualified medical professionals or local health authorities.",
        },
        {
          question: "What kind of web do black widows build?",
          answer:
            "An irregular three-dimensional tangle of strong silk — a cobweb rather than a neat orb web. Anchor lines run down toward the ground, and insects that blunder into them are snared, then bitten and wrapped. Webs are built in dark, sheltered, undisturbed places.",
        },
      ]}
      quickFacts={[
        { label: "Scientific name", value: "Latrodectus mactans" },
        { label: "Family", value: "Theridiidae (cobweb spiders)" },
        { label: "Class", value: "Arachnida" },
        { label: "Female marking", value: "Red hourglass on the underside" },
        { label: "Male", value: "Much smaller and paler" },
        { label: "Web", value: "Irregular three-dimensional tangle" },
        { label: "Bite", value: "Medically significant" },
        { label: "Boundary", value: "Educational only — no first aid given" },
      ]}
      relatedLinks={[
        { label: "Redback Spider Profile", href: "/animals/redback-spider", description: "A close Latrodectus relative" },
        { label: "Funnel-Web Spider Profile", href: "/animals/funnel-web-spider" },
        { label: "Spider Profile", href: "/animals/spider", description: "Group-level overview" },
        { label: "Wolf Spider Profile", href: "/animals/wolf-spider" },
        { label: "Insects & Invertebrates", href: "/animal-encyclopedia/insects" },
      ]}
    />
  );
}
