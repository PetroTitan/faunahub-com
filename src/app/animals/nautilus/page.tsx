import type { Metadata } from "next";
import AnimalProfileLayout from "@/components/AnimalProfileLayout";
import { ANIMAL_SOURCES } from "@/lib/educational/animal-sources";
import { getAnimalGalleryImages, getAnimalImage, getAnimalOgImage } from "@/lib/images/animal-images";
import { buildArticleMetadata } from "@/lib/metadata";

const PATH = "/animals/nautilus";
const TITLE = "Nautilus — Profile, Shell, Diet & the “Living Fossil” Cephalopod";
const DESC =
  "Explore the chambered nautilus (Nautilus pompilius): a shelled cephalopod and living fossil with dozens of tentacles, jet propulsion, and a gas-filled spiral shell.";

export const metadata: Metadata = buildArticleMetadata({
  title: TITLE,
  description: DESC,
  path: PATH,
  publishedTime: "2026-06-19",
  modifiedTime: "2026-06-19",
  ogImage: getAnimalOgImage("nautilus"),
});

export default function NautilusPage() {
  return (
    <AnimalProfileLayout
      commonName="Nautilus"
      scientificName="Nautilus pompilius"
      pageTitle={TITLE}
      description={DESC}
      path={PATH}
      parentCategory="Marine Animals"
      parentCategoryHref="/animal-encyclopedia/marine-animals"
      tags={["Marine invertebrate", "Cephalopod", "Living fossil"]}
      image={getAnimalImage("nautilus") ?? undefined}
      galleryImages={getAnimalGalleryImages("nautilus")}
      sources={ANIMAL_SOURCES.nautilus}
      publishedDate="2026-06-19"
      modifiedDate="2026-06-19"
      overview={
        <>
          <p>
            The chambered nautilus (<em>Nautilus pompilius</em>) is a striking
            cephalopod — a relative of octopuses and squid — that, unlike them, lives
            inside a coiled external shell. Often called a &ldquo;living fossil,&rdquo;
            the nautilus belongs to an ancient lineage whose shelled relatives were
            once abundant in the oceans, and its body plan has changed relatively
            little over a very long span of time.
          </p>
          <p>
            Its smooth, spiral shell is divided into gas-filled chambers that the
            animal uses for buoyancy, while the living nautilus occupies only the
            outermost chamber and reaches out with dozens of small tentacles.
          </p>
          <p>
            <strong>Conservation note:</strong> nautiluses have been heavily collected
            for their beautiful shells, which is a conservation concern; the chambered
            nautilus is protected under international trade rules. Verify current status
            at iucnredlist.org.
          </p>
        </>
      }
      habitat={
        <p>
          Nautiluses live in the deep waters of tropical reef slopes in the
          Indo-Pacific, typically along the steep faces of coral reefs. They tend to
          stay in cooler, deeper water by day and move up the slope at night to feed,
          avoiding both very warm shallow water and the greatest depths.
        </p>
      }
      diet={
        <p>
          Nautiluses are mainly scavengers and opportunistic feeders, eating the
          moults and remains of crustaceans and other animals, along with some live
          prey. They locate food largely by smell, sweeping the water with their many
          tentacles, and have a low metabolism that lets them go long periods between
          meals.
        </p>
      }
      behavior={
        <p>
          Like other cephalopods, the nautilus swims by jet propulsion, drawing water
          into the body and expelling it through a funnel to move — usually
          backwards. It adjusts the gas and fluid in its shell chambers to control
          buoyancy. Nautiluses have many more tentacles than octopuses or squid
          (several dozen), but these lack suckers and instead grip with ridges. They
          are long-lived and slow to mature, which adds to their vulnerability.
        </p>
      }
      humanInteraction={
        <p>
          The nautilus&apos;s spiral shell — famous for its elegant proportions — has
          made it a target of the shell trade, and combined with the animal&apos;s
          slow reproduction this has raised real conservation concerns, leading to
          international trade protections. For current status and trade rules, consult
          authoritative sources such as the IUCN Red List.
        </p>
      }
      faqs={[
        {
          question: "Is a nautilus an octopus?",
          answer:
            "Not exactly — but it's a close relative. The nautilus is a cephalopod, the same broad group as octopuses and squid, but it belongs to an ancient, separate lineage and is the only living cephalopod with a full external shell. It also has many more tentacles, and these lack the suckers seen in octopuses and squid.",
        },
        {
          question: "Why is the nautilus called a living fossil?",
          answer:
            "Nautiluses belong to a very old group of shelled cephalopods that were once far more diverse, and the modern nautilus retains a broadly similar body plan to ancient relatives. For that reason it is popularly called a \"living fossil,\" though it is a fully modern, living animal.",
        },
        {
          question: "How does a nautilus float and move?",
          answer:
            "The shell is divided into gas-filled chambers that provide buoyancy, while the animal lives in the outer chamber. To swim, the nautilus uses jet propulsion — drawing in water and expelling it through a funnel — typically moving backwards, and it adjusts shell gas and fluid to rise or sink.",
        },
        {
          question: "Are nautiluses endangered?",
          answer:
            "Nautiluses are of conservation concern, mainly because they have been heavily collected for their shells and they reproduce slowly. The chambered nautilus is protected under international trade rules; current status should be checked against IUCN Red List data.",
        },
      ]}
      quickFacts={[
        { label: "Scientific name", value: "Nautilus pompilius" },
        { label: "Class", value: "Cephalopoda (molluscs)" },
        { label: "Relatives", value: "Octopuses & squid (distant)" },
        { label: "Shell", value: "Coiled, gas-chambered (buoyancy)" },
        { label: "Tentacles", value: "Dozens, without suckers" },
        { label: "Diet", value: "Scavenger & opportunist" },
        { label: "Range", value: "Indo-Pacific reef slopes" },
        { label: "IUCN Status", value: "Concern — protected trade (verify)" },
      ]}
      relatedLinks={[
        { label: "Octopus Profile", href: "/animals/octopus", description: "A shell-less cephalopod relative" },
        { label: "Squid Profile", href: "/animals/squid", description: "Another cephalopod" },
        { label: "Giant Squid Profile", href: "/animals/giant-squid", description: "A deep-sea cephalopod" },
        { label: "Coral Profile", href: "/animals/coral", description: "A fellow reef animal" },
        { label: "Marine Animals", href: "/animal-encyclopedia/marine-animals" },
      ]}
    />
  );
}
