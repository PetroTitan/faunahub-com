import type { Metadata } from "next";
import AnimalProfileLayout from "@/components/AnimalProfileLayout";
import { ANIMAL_SOURCES } from "@/lib/educational/animal-sources";
import { getAnimalGalleryImages, getAnimalImage, getAnimalOgImage } from "@/lib/images/animal-images";
import { buildArticleMetadata } from "@/lib/metadata";

const PATH = "/animals/saiga";
const TITLE = "Saiga — Profile, the Ice-Age Antelope with a Trunk-Like Nose";
const DESC =
  "Explore the saiga (Saiga tatarica): a migratory Central Asian steppe antelope with an extraordinary bulbous nose — an Ice Age survivor that crashed to near-extinction and is now recovering.";

export const metadata: Metadata = buildArticleMetadata({
  title: TITLE,
  description: DESC,
  path: PATH,
  publishedTime: "2026-06-22",
  modifiedTime: "2026-06-22",
  ogImage: getAnimalOgImage("saiga"),
});

export default function SaigaPage() {
  return (
    <AnimalProfileLayout
      commonName="Saiga"
      scientificName="Saiga tatarica"
      pageTitle={TITLE}
      description={DESC}
      path={PATH}
      parentCategory="Mammals"
      parentCategoryHref="/animal-encyclopedia/mammals"
      tags={["Mammal", "Antelope", "Central Asia"]}
      image={getAnimalImage("saiga") ?? undefined}
      galleryImages={getAnimalGalleryImages("saiga")}
      sources={ANIMAL_SOURCES.saiga}
      publishedDate="2026-06-22"
      modifiedDate="2026-06-22"
      overview={
        <>
          <p>
            The saiga (<em>Saiga tatarica</em>) is a medium-sized antelope of the Central Asian steppes,
            instantly recognised by its bizarre, oversized, downward-pointing nose — a soft, bulbous,
            trunk-like snout unlike that of any other antelope. A genuine survivor from the Ice Age, the
            saiga once shared the mammoth steppe with woolly rhinos and mammoths, and it still roams the open
            grasslands in migratory herds. Males grow translucent, ringed, amber-coloured horns; females are
            hornless.
          </p>
          <p>
            That remarkable nose is a piece of survival engineering: it warms and moistens icy winter air
            before it reaches the lungs, and filters out the dust kicked up by the herd during hot, dry
            summers — adaptations to the saiga&apos;s harsh, extreme steppe home.
          </p>
          <p>
            <strong>Conservation note:</strong> the saiga suffered catastrophic declines (including
            mass die-offs) and was long Critically Endangered, but intensive protection has driven a
            notable recovery in recent years. Verify the current status at authoritative sources.
          </p>
        </>
      }
      habitat={
        <p>
          Saigas live in the dry steppes, semi-deserts, and grasslands of Central Asia — chiefly Kazakhstan,
          with populations in Russia, Mongolia, and Uzbekistan. They are animals of vast open country,
          undertaking long seasonal migrations across the steppe in large herds in search of grazing and to
          avoid harsh weather, which makes them dependent on wide, connected landscapes.
        </p>
      }
      diet={
        <p>
          The saiga is a herbivore that grazes on a range of steppe plants — grasses, herbs, and shrubs —
          including some that are tough or toxic to other animals. As migratory grazers moving in big herds,
          saigas play an important role in the steppe ecosystem, shaping the vegetation and cycling nutrients
          across the grasslands.
        </p>
      }
      behavior={
        <p>
          Saigas are social, herd-living, and migratory, gathering in large numbers and travelling long
          distances across the steppe with the seasons. They are fast runners, built to cover open ground and
          flee predators such as wolves. Breeding is highly synchronised: females often give birth within a
          short window, and saigas are notable for frequently bearing twins, which helps populations rebound
          quickly when conditions are good. The strange nose is the saiga&apos;s hallmark adaptation —
          conditioning and filtering the air for life in a land of freezing winters and dusty summers.
        </p>
      }
      humanInteraction={
        <p>
          The saiga&apos;s recent history is a dramatic conservation story: poaching (especially of males for
          their horns) and devastating mass die-offs from disease pushed it to the brink, yet sustained
          anti-poaching efforts and protection have allowed a strong recovery in places, particularly in
          Kazakhstan. It remains dependent on continued protection, secure migration routes, and disease
          monitoring. As a wild migratory animal, it is not suited to captivity as a pet. Consult the IUCN Red
          List for current status.
        </p>
      }
      faqs={[
        {
          question: "What is the saiga's weird nose for?",
          answer:
            "The saiga's bulbous, downward-pointing snout is a survival adaptation to the extreme steppe climate. It warms and humidifies frigid winter air before it reaches the lungs, and in the hot, dry summers it filters out the dust raised by the moving herd. So the odd 'trunk-like' nose is really an all-season air conditioner and dust filter.",
        },
        {
          question: "Is the saiga really an Ice Age survivor?",
          answer:
            "Yes. The saiga is a relict of the Ice Age mammoth steppe, once roaming alongside woolly mammoths and woolly rhinos. While those giants died out, the saiga survived into the present on the Central Asian grasslands, making it a living link to that vanished world.",
        },
        {
          question: "Why did saiga numbers crash, and are they recovering?",
          answer:
            "Saigas were hit hard by poaching — especially of males for their horns — and by catastrophic mass die-offs caused by disease, which together pushed the species to the edge and a Critically Endangered status. Thanks to intensive anti-poaching work and protection, populations (notably in Kazakhstan) have rebounded strongly in recent years, though continued safeguarding is essential. Always check the IUCN Red List for the latest status.",
        },
        {
          question: "Do saigas migrate?",
          answer:
            "Yes — they're long-distance migrants of the open steppe, gathering in large herds and travelling great distances with the seasons to find grazing and escape harsh weather. This reliance on wide, connected landscapes is part of why secure migration routes matter so much for their conservation.",
        },
      ]}
      quickFacts={[
        { label: "Scientific name", value: "Saiga tatarica" },
        { label: "Class", value: "Mammalia (antelope)" },
        { label: "Signature trait", value: "Bulbous, trunk-like nose (warms & filters air)" },
        { label: "Heritage", value: "Ice Age 'mammoth steppe' survivor" },
        { label: "Horns", value: "Males only (amber, ringed); females hornless" },
        { label: "Behaviour", value: "Migratory herds; often twins" },
        { label: "Range", value: "Central Asian steppes (esp. Kazakhstan)" },
        { label: "Status", value: "Recovering after near-extinction (verify)" },
      ]}
      relatedLinks={[
        { label: "Bison Profile", href: "/animals/bison", description: "Another large grazing herd animal" },
        { label: "Deer Profile", href: "/animals/deer", description: "Other hoofed grazers/browsers" },
        { label: "Markhor Profile", href: "/animals/markhor", description: "Another Central Asian hoofed mammal" },
        { label: "Endangered Animals", href: "/endangered-animals", description: "IUCN Red List categories" },
        { label: "Mammals Encyclopedia", href: "/animal-encyclopedia/mammals" },
      ]}
    />
  );
}
