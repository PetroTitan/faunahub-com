import type { Metadata } from "next";
import AnimalProfileLayout from "@/components/AnimalProfileLayout";
import { ANIMAL_SOURCES } from "@/lib/educational/animal-sources";
import { getAnimalGalleryImages, getAnimalImage, getAnimalOgImage } from "@/lib/images/animal-images";
import { buildArticleMetadata } from "@/lib/metadata";

const PATH = "/animals/fire-ant";
const TITLE = "Fire Ant — Profile, Floating Rafts, Mounds & Invasive Spread";
const DESC =
  "Explore the red imported fire ant (Solenopsis invicta): a South American ant that builds dome mounds, rafts on floodwater, and has invaded continents.";

export const metadata: Metadata = buildArticleMetadata({
  title: TITLE,
  description: DESC,
  path: PATH,
  publishedTime: "2026-09-06",
  modifiedTime: "2026-09-06",
  ogImage: getAnimalOgImage("fire-ant"),
});

export default function FireAntPage() {
  return (
    <AnimalProfileLayout
      commonName="Fire Ant"
      scientificName="Solenopsis invicta"
      pageTitle={TITLE}
      description={DESC}
      path={PATH}
      parentCategory="Insects & Invertebrates"
      parentCategoryHref="/animal-encyclopedia/insects"
      tags={["Insect","Ant","Invasive Species"]}
      image={getAnimalImage("fire-ant") ?? undefined}
      galleryImages={getAnimalGalleryImages("fire-ant")}
      sources={ANIMAL_SOURCES["fire-ant"]}
      publishedDate="2026-09-06"
      modifiedDate="2026-09-06"
      overview={
        <>
        <p>
          The red imported fire ant (<em>Solenopsis invicta</em>) is a small reddish-brown ant native to South America and now established across parts of North America, Asia, Australia and beyond. It is one of the most consequential invasive insects in the world.
        </p>
        <p>
          Colonies build distinctive <strong>dome-shaped earth mounds</strong> with no single obvious entrance, and defend them vigorously: disturbing a mound brings workers boiling out onto the intruder. Fire ants both bite to grip and sting, and the sting is the source of the burning sensation behind the name.
        </p>
        <p>
          <strong>Safety note:</strong> fire ant stings are medically significant for some people, and severe allergic reactions can occur. This profile is educational only. It offers no first-aid, treatment, control or eradication guidance — any sting or reaction should be directed to qualified medical professionals or local health authorities, and infestations to the relevant agricultural or biosecurity authority.
        </p>
        </>
      }
      habitat={
        <>
        <p>
          Native to the floodplains of the Paraná River basin in South America, the red imported fire ant now occupies warm regions across the southern United States, parts of Asia and Australia, and elsewhere. It thrives in open, sunny, disturbed ground — pasture, lawns, parks, roadsides, farmland and construction sites — which is one reason it spreads so effectively in human-modified landscapes.
        </p>
        </>
      }
      diet={
        <>
        <p>
          Fire ants are omnivorous and highly opportunistic, taking insects and other invertebrates, seeds, plant material, honeydew from sap-feeding insects, carrion, and human food waste. This dietary flexibility, combined with aggressive colony defence, lets them displace native ants and affect a wide range of ground-dwelling animals.
        </p>
        </>
      }
      behavior={
        <>
        <p>
          The species&apos; most remarkable behaviour is a response to flooding. When water rises, workers link their bodies together to build a <strong>living raft</strong> that floats — trapping air among the ants and carrying the queen and brood on top — so the colony survives on the surface until it reaches dry land. This adaptation comes from the seasonally flooded habitat of its native range and is a large part of why it colonises new areas so successfully. Colonies may have one queen or many, and multi-queen colonies reach very high densities.
        </p>
        </>
      }
      humanInteraction={
        <>
        <p>
          The red imported fire ant is a major invasive species with agricultural, ecological and health consequences: it damages crops and equipment, displaces native invertebrates, affects ground-nesting wildlife, and stings people and livestock. Biosecurity programmes in several countries treat incursions as a priority, and eradication efforts are costly and long-running. This profile is educational and provides no control, pesticide, first-aid or treatment guidance — stings and reactions should be directed to qualified medical professionals, and infestations reported to the relevant biosecurity or agricultural authority.
        </p>
        </>
      }
      faqs={[
        {
          question: "Do fire ants really float?",
          answer:
            "Yes. When floodwater rises, workers link their bodies into a living raft that traps air and floats, carrying the queen and brood on top until the colony reaches dry ground. The behaviour comes from the seasonally flooded South American floodplains where the species evolved, and it helps explain how readily it spreads.",
        },
        {
          question: "Why are fire ants called fire ants?",
          answer:
            "Because of the sting. Fire ants bite to grip the skin and then sting, and the sensation is described as burning — the source of the name. Stings are medically significant for some people. This profile offers no first-aid or treatment guidance; reactions should go to qualified medical professionals or local health authorities.",
        },
        {
          question: "Why are fire ants such a problem outside their native range?",
          answer:
            "Because they combine several traits that suit invasion: an omnivorous diet, aggressive colony defence, a preference for open disturbed ground, rafting behaviour that survives flooding, and in many introduced populations multi-queen colonies that reach very high densities. Together these let them displace native ants and affect a wide range of other animals.",
        },
        {
          question: "What do fire ants eat?",
          answer:
            "Almost anything. They take insects and other invertebrates, seeds, plant material, honeydew from sap-feeding insects, carrion and human food waste. That opportunism is a significant part of why they establish so readily in new places.",
        },
      ]}
      quickFacts={[
        { label: "Scientific name", value: "Solenopsis invicta" },
        { label: "Family", value: "Formicidae (ants)" },
        { label: "Class", value: "Insecta" },
        { label: "Native range", value: "Paraná basin floodplains, South America" },
        { label: "Nest", value: "Dome-shaped earth mound" },
        { label: "Flood response", value: "Living raft of linked workers" },
        { label: "Status", value: "Major invasive species" },
        { label: "Boundary", value: "Educational only — no first aid or control given" },
      ]}
      relatedLinks={[
        { label: "Ant Profile", href: "/animals/ant", description: "Group-level overview" },
        { label: "Army Ant Profile", href: "/animals/army-ant" },
        { label: "Leafcutter Ant Profile", href: "/animals/leafcutter-ant" },
        { label: "Termite Profile", href: "/animals/termite" },
        { label: "Insects & Invertebrates", href: "/animal-encyclopedia/insects" },
      ]}
    />
  );
}
