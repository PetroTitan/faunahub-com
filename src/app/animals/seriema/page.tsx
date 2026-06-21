import type { Metadata } from "next";
import AnimalProfileLayout from "@/components/AnimalProfileLayout";
import { ANIMAL_SOURCES } from "@/lib/educational/animal-sources";
import { getAnimalGalleryImages, getAnimalImage, getAnimalOgImage } from "@/lib/images/animal-images";
import { buildArticleMetadata } from "@/lib/metadata";

const PATH = "/animals/seriema";
const TITLE = "Seriema — Profile, Snake-Hunting Grassland Bird & Lineage";
const DESC =
  "Explore seriemas (family Cariamidae): tall, long-legged South American grassland birds that hunt snakes and lizards on foot — the last living relatives of an extinct group of 'terror birds'.";

export const metadata: Metadata = buildArticleMetadata({
  title: TITLE,
  description: DESC,
  path: PATH,
  publishedTime: "2026-06-21",
  modifiedTime: "2026-06-21",
  ogImage: getAnimalOgImage("seriema"),
});

export default function SeriemaPage() {
  return (
    <AnimalProfileLayout
      commonName="Seriema"
      scientificName="Cariama cristata"
      pageTitle={TITLE}
      description={DESC}
      path={PATH}
      parentCategory="Birds"
      parentCategoryHref="/animal-encyclopedia/birds"
      tags={["Bird", "Grassland", "South America"]}
      image={getAnimalImage("seriema") ?? undefined}
      galleryImages={getAnimalGalleryImages("seriema")}
      sources={ANIMAL_SOURCES.seriema}
      publishedDate="2026-06-21"
      modifiedDate="2026-06-21"
      overview={
        <>
          <p>
            Seriemas (family Cariamidae) are tall, long-legged birds of South American
            grasslands and open woodland. The red-legged seriema
            (<em>Cariama cristata</em>), shown here, stands knee-high to a person, with
            long legs, a hooked bill, a bushy crest at the base of the bill, and striking
            reddish legs. Although they can fly, seriemas spend most of their time striding
            and running across open country, hunting on foot.
          </p>
          <p>
            Remarkably, seriemas are the closest living relatives of the extinct
            &ldquo;terror birds&rdquo; (phorusrhacids) — giant flightless predatory birds
            that once dominated South America — making them a living link to that lost group.
          </p>
          <p>
            <strong>Note:</strong> there are two seriema species; details here use the
            red-legged seriema as a reference. Treat general statements as approximate and
            verify against authoritative sources.
          </p>
        </>
      }
      habitat={
        <p>
          Seriemas live in grasslands, savannas, cerrado, and open woodland of central and
          eastern South America, including Brazil, Argentina, Paraguay, Bolivia, and Uruguay.
          They favour open country with scattered trees and bushes, where they can hunt over
          the ground and retreat to cover or low trees to roost.
        </p>
      }
      diet={
        <p>
          Seriemas are carnivores that hunt a wide range of prey on the ground: insects and
          other invertebrates, lizards, snakes (including venomous ones), frogs, rodents, and
          small birds, plus some plant matter. They are known for tackling snakes, and they
          sometimes kill larger prey by seizing it and beating it against the ground or hard
          surfaces.
        </p>
      }
      behavior={
        <p>
          Seriemas hunt by walking and running across open ground, striking at prey with the
          hooked bill and strong feet. They have an enlarged, sickle-shaped claw on the second
          toe — an echo of their predatory ancestry — though they use it less dramatically
          than their extinct giant relatives did. Their loud, yelping, far-carrying calls are
          a characteristic sound of the South American plains. Seriemas are often seen in
          pairs, nest in low trees or bushes, and prefer to run from danger, taking flight
          only reluctantly.
        </p>
      }
      humanInteraction={
        <p>
          Seriemas are conspicuous, well-loved birds of the open country and are sometimes
          even kept around farms, where their loud alarm calls and snake-hunting make them
          useful. They are widespread and not generally of conservation concern, though they
          depend on open grassland and savanna habitats. Consult authoritative sources for
          current status.
        </p>
      }
      faqs={[
        {
          question: "Are seriemas related to the extinct 'terror birds'?",
          answer:
            "Yes — they are the closest living relatives of the phorusrhacids, or 'terror birds,' a group of large, mostly flightless predatory birds that were top hunters in ancient South America. Seriemas are much smaller, but as the surviving members of that broader lineage they offer a living glimpse of it.",
        },
        {
          question: "Do seriemas really hunt snakes?",
          answer:
            "Yes. Seriemas are ground-hunting carnivores that take snakes — including venomous ones — along with lizards, insects, rodents, and small birds. They sometimes subdue prey by grabbing it and beating it against the ground or a hard surface to stun or kill it before swallowing.",
        },
        {
          question: "Can seriemas fly?",
          answer:
            "They can, but they rarely do for long. Seriemas are built for life on foot, striding and running across open grassland to hunt and escape danger, and they generally take flight only briefly — for example to reach a roost in a low tree. They are essentially terrestrial birds.",
        },
        {
          question: "What is the special claw on a seriema's foot?",
          answer:
            "Seriemas have an enlarged, sickle-shaped claw on the second toe, recalling their fierce extinct relatives. While they don't use it as dramatically as the 'terror birds' presumably did, it's a notable feature linked to their predatory heritage and ground-hunting lifestyle.",
        },
      ]}
      quickFacts={[
        { label: "Reference species", value: "Cariama cristata (red-legged seriema)" },
        { label: "Class", value: "Aves (family Cariamidae)" },
        { label: "Claim to fame", value: "Closest living kin of 'terror birds'" },
        { label: "Diet", value: "Carnivore (insects to snakes & rodents)" },
        { label: "Hunting style", value: "On foot; beats prey on the ground" },
        { label: "Flight", value: "Mostly runs; rarely flies" },
        { label: "Habitat", value: "South American grassland & savanna" },
        { label: "Status", value: "Widespread (verify)" },
      ]}
      relatedLinks={[
        { label: "Secretarybird Profile", href: "/animals/secretary-bird", description: "An African on-foot snake hunter (unrelated)" },
        { label: "Roadrunner Profile", href: "/animals/roadrunner", description: "Another running, prey-hunting bird" },
        { label: "Ostrich Profile", href: "/animals/ostrich", description: "A large long-legged ground bird" },
        { label: "Birdwatching", href: "/birdwatching", description: "Tips for observing birds" },
        { label: "Bird Encyclopedia", href: "/animal-encyclopedia/birds" },
      ]}
    />
  );
}
