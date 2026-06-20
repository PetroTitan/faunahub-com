import type { Metadata } from "next";
import AnimalProfileLayout from "@/components/AnimalProfileLayout";
import { ANIMAL_SOURCES } from "@/lib/educational/animal-sources";
import { getAnimalGalleryImages, getAnimalImage, getAnimalOgImage } from "@/lib/images/animal-images";
import { buildArticleMetadata } from "@/lib/metadata";

const PATH = "/animals/oxpecker";
const TITLE = "Oxpecker — Profile, Life on Big Mammals & Diet";
const DESC =
  "Explore oxpeckers (genus Buphagus): African birds that ride on large mammals, feeding on ticks, insects, and blood — a relationship that is part cleaning service, part parasite.";

export const metadata: Metadata = buildArticleMetadata({
  title: TITLE,
  description: DESC,
  path: PATH,
  publishedTime: "2026-06-20",
  modifiedTime: "2026-06-20",
  ogImage: getAnimalOgImage("oxpecker"),
});

export default function OxpeckerPage() {
  return (
    <AnimalProfileLayout
      commonName="Oxpecker"
      scientificName="Buphagus erythrorhynchus"
      pageTitle={TITLE}
      description={DESC}
      path={PATH}
      parentCategory="Birds"
      parentCategoryHref="/animal-encyclopedia/birds"
      tags={["Bird", "Africa", "Symbiosis"]}
      image={getAnimalImage("oxpecker") ?? undefined}
      galleryImages={getAnimalGalleryImages("oxpecker")}
      sources={ANIMAL_SOURCES.oxpecker}
      publishedDate="2026-06-20"
      modifiedDate="2026-06-20"
      overview={
        <>
          <p>
            Oxpeckers are African birds (genus <em>Buphagus</em>, two species: red-billed
            and yellow-billed) that famously spend much of their lives clinging to the
            bodies of large mammals — buffalo, giraffes, antelopes, zebras, rhinos, and
            cattle. The red-billed oxpecker (<em>Buphagus erythrorhynchus</em>), shown
            here, has sharp claws and a stiff tail for gripping a moving host and a strong
            bill for picking food directly from its hide.
          </p>
          <p>
            Their relationship with big mammals is a classic — and surprisingly
            complicated — example of how species interact: partly helpful, partly
            self-serving.
          </p>
          <p>
            <strong>Note:</strong> the balance of benefit versus cost in this relationship
            is still debated by scientists; treat simple &ldquo;cleaner bird&rdquo; claims
            as approximate and verify against authoritative sources.
          </p>
        </>
      }
      habitat={
        <p>
          Oxpeckers live in savanna, grassland, and open woodland across sub-Saharan
          Africa — wherever there are large mammals to feed on. Their distribution closely
          follows that of suitable host animals, including both wildlife and livestock, so
          they are common in game reserves and on rangelands.
        </p>
      }
      diet={
        <p>
          Oxpeckers feed mainly on what they find on their hosts: ticks (especially
          engorged ones), biting flies, lice, and other insects, along with dead skin and
          earwax. Notably, they also drink blood — pecking at wounds and sometimes keeping
          them open — which complicates the idea that they are purely helpful to their
          hosts.
        </p>
      }
      behavior={
        <p>
          Oxpeckers forage by scuttling over a host&apos;s body, even into the ears and
          around the eyes, using a scissoring or plucking bill action to gather parasites
          and tissue. They also act as an early-warning system: when alarmed they fly up
          and call, alerting the host (and other animals) to danger such as approaching
          predators. They nest in tree holes, often lining the nest with hair plucked from
          mammals, and roost on their hosts at times.
        </p>
      }
      humanInteraction={
        <p>
          Oxpeckers are a favourite sight on African safaris and are often described as
          helpful tick-removers for both wildlife and livestock. The reality is more
          nuanced: while they do eat many ticks and other pests, their blood-feeding and
          wound-tending can be costly to hosts, so the relationship sits somewhere between
          mutualism and parasitism. Both species are currently widespread. Consult
          authoritative sources for details.
        </p>
      }
      faqs={[
        {
          question: "Do oxpeckers help the animals they ride on?",
          answer:
            "Partly. Oxpeckers eat large numbers of ticks, flies, and other parasites and act as an early-warning system against predators, which benefits their hosts. But they also drink blood and may keep wounds open to feed, which harms the host. So the relationship is a debated mix of mutualism and parasitism, not a simple cleaning service.",
        },
        {
          question: "What do oxpeckers eat?",
          answer:
            "They feed mostly on things found on large mammals: ticks (especially blood-filled ones), biting flies, lice, dead skin, and earwax — and they also drink blood from wounds. This diet ties them closely to the bodies of their hosts.",
        },
        {
          question: "Which animals do oxpeckers ride on?",
          answer:
            "A wide range of large African mammals, including buffalo, giraffes, antelopes, zebras, rhinoceroses, hippos, and domestic cattle. Oxpeckers spend much of their time clinging to these hosts, using sharp claws and a stiff tail to hold on as the animal moves.",
        },
        {
          question: "How do oxpeckers cling to a moving animal?",
          answer:
            "They are well adapted for it: strong feet with sharp curved claws grip the hide, and a stiff tail props them up like a woodpecker's, letting them scramble securely over a host's body — even upside down or around the head — while it walks and runs.",
        },
      ]}
      quickFacts={[
        { label: "Group", value: "Genus Buphagus (two species)" },
        { label: "Reference species", value: "Buphagus erythrorhynchus (red-billed)" },
        { label: "Class", value: "Aves" },
        { label: "Diet", value: "Ticks, insects, dead skin — and blood" },
        { label: "Lifestyle", value: "Rides on large mammals" },
        { label: "Relationship", value: "Mix of mutualism & parasitism" },
        { label: "Range", value: "Sub-Saharan Africa" },
        { label: "Status", value: "Widespread (verify)" },
      ]}
      relatedLinks={[
        { label: "Weaver Profile", href: "/animals/weaver", description: "Another African bird" },
        { label: "Rhinoceros Profile", href: "/animals/rhinoceros", description: "A common oxpecker host" },
        { label: "Giraffe Profile", href: "/animals/giraffe", description: "Another favoured host" },
        { label: "Birdwatching", href: "/birdwatching", description: "Tips for observing birds" },
        { label: "Bird Encyclopedia", href: "/animal-encyclopedia/birds" },
      ]}
    />
  );
}
