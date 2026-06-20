import type { Metadata } from "next";
import AnimalProfileLayout from "@/components/AnimalProfileLayout";
import { ANIMAL_SOURCES } from "@/lib/educational/animal-sources";
import { getAnimalGalleryImages, getAnimalImage, getAnimalOgImage } from "@/lib/images/animal-images";
import { buildArticleMetadata } from "@/lib/metadata";

const PATH = "/animals/shoebill";
const TITLE = "Shoebill — Profile, Giant Bill, Diet & Behavior";
const DESC =
  "Explore the shoebill (Balaeniceps rex): a tall, prehistoric-looking bird of African swamps with a massive shoe-shaped bill, famed for standing statue-still to ambush lungfish. Vulnerable.";

export const metadata: Metadata = buildArticleMetadata({
  title: TITLE,
  description: DESC,
  path: PATH,
  publishedTime: "2026-06-20",
  modifiedTime: "2026-06-20",
  ogImage: getAnimalOgImage("shoebill"),
});

export default function ShoebillPage() {
  return (
    <AnimalProfileLayout
      commonName="Shoebill"
      scientificName="Balaeniceps rex"
      pageTitle={TITLE}
      description={DESC}
      path={PATH}
      parentCategory="Birds"
      parentCategoryHref="/animal-encyclopedia/birds"
      tags={["Bird", "Wetland", "Africa"]}
      image={getAnimalImage("shoebill") ?? undefined}
      galleryImages={getAnimalGalleryImages("shoebill")}
      sources={ANIMAL_SOURCES.shoebill}
      publishedDate="2026-06-20"
      modifiedDate="2026-06-20"
      overview={
        <>
          <p>
            The shoebill (<em>Balaeniceps rex</em>) is a tall, slate-grey wetland bird of
            central and eastern Africa, famous for its enormous bill shaped like a wooden
            shoe — broad, hooked, and edged with sharp cutting margins. Standing well over a
            metre tall with a piercing stare, the shoebill has a strikingly prehistoric,
            almost dinosaur-like presence, and it is one of the most sought-after birds for
            wildlife watchers.
          </p>
          <p>
            It is a patient ambush hunter, often standing motionless for long stretches
            before striking at prey with a sudden, powerful lunge.
          </p>
          <p>
            <strong>Conservation note:</strong> the shoebill is assessed as Vulnerable,
            threatened by wetland loss, disturbance, and the illegal bird trade. Verify
            current status at iucnredlist.org.
          </p>
        </>
      }
      habitat={
        <p>
          Shoebills live in large freshwater swamps and marshes of central and eastern
          Africa, particularly in extensive papyrus and reed wetlands, including parts of
          South Sudan, Uganda, Zambia, and neighbouring countries. They depend on
          undisturbed wetland with shallow water and dense vegetation where their main prey
          lives.
        </p>
      }
      diet={
        <p>
          Shoebills are carnivores specialising in fish, with a strong preference for
          lungfish, along with catfish, eels, and other aquatic prey such as frogs, water
          snakes, and even baby crocodiles or turtles. The huge, sharp-edged bill is built
          to seize and hold large, slippery prey, and to decapitate or crush it.
        </p>
      }
      behavior={
        <p>
          The shoebill is the ultimate patient ambush hunter: it stands utterly still,
          sometimes for very long periods, watching the water, then strikes with an
          explosive forward lunge — a behaviour sometimes called &ldquo;collapsing&rdquo;
          onto the prey. It is largely solitary and quiet, but at the nest it may clatter
          its bill loudly, like a stork. Shoebills nest on the ground or on floating
          vegetation in remote wetland, usually raising just one chick successfully.
        </p>
      }
      humanInteraction={
        <p>
          The shoebill&apos;s extraordinary looks make it a star attraction for birders and
          a symbol of African wetlands, but it is threatened by the draining and
          degradation of those wetlands, human disturbance at nests, and capture for the
          illegal trade in live birds. Protecting large, undisturbed swamps is key to its
          survival. Consult the IUCN Red List for current status.
        </p>
      }
      faqs={[
        {
          question: "Why does the shoebill have such a huge bill?",
          answer:
            "Its massive, shoe-shaped bill — broad, hooked, and sharp-edged — is a specialised tool for catching big, slippery prey like lungfish. The bird can seize and grip large fish, and the cutting edges help it decapitate or subdue prey before swallowing. The bill's size and shape are what give the shoebill its name.",
        },
        {
          question: "What does a shoebill eat?",
          answer:
            "Mostly fish, with a strong preference for lungfish, plus catfish, eels, frogs, water snakes, and sometimes baby crocodiles or turtles. The shoebill hunts these in swampy shallows, using patience and a powerful strike rather than active pursuit.",
        },
        {
          question: "How does a shoebill hunt?",
          answer:
            "By ambush. A shoebill will stand completely still for long periods, watching the water, then launch a sudden, explosive lunge onto its prey — sometimes almost toppling forward in the process. This 'wait and strike' style suits its swampy habitat and large prey.",
        },
        {
          question: "Is the shoebill endangered?",
          answer:
            "It is assessed as Vulnerable. The main threats are the loss and degradation of the wetlands it depends on, disturbance at its nests, and capture for the illegal live-bird trade. Conserving large, undisturbed swamps is essential, and current status should be checked against the IUCN Red List.",
        },
      ]}
      quickFacts={[
        { label: "Scientific name", value: "Balaeniceps rex" },
        { label: "Class", value: "Aves" },
        { label: "Height", value: "Often over 1.1 m tall" },
        { label: "Diet", value: "Carnivore (esp. lungfish)" },
        { label: "Hunting style", value: "Motionless ambush, then lunges" },
        { label: "Habitat", value: "African freshwater swamps" },
        { label: "Signature trait", value: "Huge shoe-shaped bill" },
        { label: "IUCN Status", value: "Vulnerable (verify)" },
      ]}
      relatedLinks={[
        { label: "Stork Profile", href: "/animals/stork", description: "A tall wading relative" },
        { label: "Heron Profile", href: "/animals/heron", description: "Another patient wetland hunter" },
        { label: "Pelican Profile", href: "/animals/pelican", description: "Another big-billed waterbird" },
        { label: "Endangered Animals", href: "/endangered-animals", description: "IUCN Red List categories" },
        { label: "Bird Encyclopedia", href: "/animal-encyclopedia/birds" },
      ]}
    />
  );
}
