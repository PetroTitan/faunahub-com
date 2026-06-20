import type { Metadata } from "next";
import AnimalProfileLayout from "@/components/AnimalProfileLayout";
import { ANIMAL_SOURCES } from "@/lib/educational/animal-sources";
import { getAnimalGalleryImages, getAnimalImage, getAnimalOgImage } from "@/lib/images/animal-images";
import { buildArticleMetadata } from "@/lib/metadata";

const PATH = "/animals/frigatebird";
const TITLE = "Frigatebird — Profile, Red Throat Pouch, Soaring & Piracy";
const DESC =
  "Explore frigatebirds (family Fregatidae): huge-winged tropical seabirds where males inflate a scarlet throat pouch, that soar for days and steal food from other birds in mid-air.";

export const metadata: Metadata = buildArticleMetadata({
  title: TITLE,
  description: DESC,
  path: PATH,
  publishedTime: "2026-06-20",
  modifiedTime: "2026-06-20",
  ogImage: getAnimalOgImage("frigatebird"),
});

export default function FrigatebirdPage() {
  return (
    <AnimalProfileLayout
      commonName="Frigatebird"
      scientificName="Fregata magnificens"
      pageTitle={TITLE}
      description={DESC}
      path={PATH}
      parentCategory="Birds"
      parentCategoryHref="/animal-encyclopedia/birds"
      tags={["Bird", "Seabird", "Tropical oceans"]}
      image={getAnimalImage("frigatebird") ?? undefined}
      galleryImages={getAnimalGalleryImages("frigatebird")}
      sources={ANIMAL_SOURCES.frigatebird}
      publishedDate="2026-06-20"
      modifiedDate="2026-06-20"
      overview={
        <>
          <p>
            Frigatebirds (family Fregatidae) are large, lightweight seabirds of tropical
            and subtropical oceans, built almost entirely for soaring flight. They have
            enormous wingspans relative to their body weight — among the largest of any
            bird — long forked tails, and hooked bills. The magnificent frigatebird
            (<em>Fregata magnificens</em>), shown here, is a familiar species; the male is
            famous for the brilliant scarlet throat pouch he inflates like a balloon to
            attract females.
          </p>
          <p>
            Frigatebirds are masters of the air and notorious pirates of the sea, often
            harassing other seabirds to steal their catch — a behaviour called
            kleptoparasitism.
          </p>
          <p>
            <strong>Note:</strong> there are five frigatebird species; details here use the
            magnificent frigatebird as a reference. Treat general statements as approximate
            and verify against authoritative sources.
          </p>
        </>
      }
      habitat={
        <p>
          Frigatebirds range over warm tropical and subtropical oceans worldwide, often
          staying within sight of coasts and islands but ranging far out to sea. They breed
          colonially on remote islands and coastal sites — in mangroves, low trees, or
          bushes — where males display and pairs raise their young.
        </p>
      }
      diet={
        <p>
          Frigatebirds are carnivores that feed mainly on fish (especially flying fish) and
          squid, snatched from at or just above the sea surface without landing — their
          plumage is not very waterproof, so they avoid settling on the water. They also
          take hatchling sea turtles and seabird chicks, scavenge, and famously practise
          piracy, chasing other seabirds and forcing them to drop or disgorge their food.
        </p>
      }
      behavior={
        <p>
          Frigatebirds are extraordinary fliers: their light bodies and vast wings let them
          soar for hours or even days, riding ocean winds and rising air, and tracked birds
          have stayed aloft for weeks at a time. In the breeding colony, the male inflates
          his red gular pouch into a huge scarlet balloon, throws back his head, and rattles
          his bill to court passing females. They are clumsy on land and cannot take off
          easily from water, so they rely on this aerial mastery for almost everything.
        </p>
      }
      humanInteraction={
        <p>
          Frigatebirds are striking, much-photographed seabirds and a highlight of tropical
          coasts and islands (such as the Galápagos). Most species are widespread, but as
          colonial island-nesters they can be vulnerable to disturbance, introduced
          predators, and changes in their ocean food supply, and a couple of species are of
          serious conservation concern. Consult authoritative sources for species-specific
          status.
        </p>
      }
      faqs={[
        {
          question: "Why do male frigatebirds have a red throat pouch?",
          answer:
            "It's a courtship signal. During the breeding season, the male inflates a bright scarlet gular (throat) pouch into a large balloon, displays it to passing females, and rattles his bill and calls. A bigger, brighter pouch helps attract a mate, so the spectacular red balloon is all about courtship.",
        },
        {
          question: "How long can a frigatebird stay in the air?",
          answer:
            "Remarkably long. With huge wings and very light bodies, frigatebirds soar with little effort and can remain airborne for many days at a time; tracking studies have recorded birds staying aloft for weeks during ocean crossings, even sleeping briefly on the wing. They are among the most aerial of all seabirds.",
        },
        {
          question: "Do frigatebirds really steal food from other birds?",
          answer:
            "Yes — it's called kleptoparasitism. Frigatebirds often chase other seabirds in the air, harassing them until they drop or throw up their catch, which the frigatebird then grabs. They also catch their own fish and squid from the sea surface, but piracy is a well-known part of their feeding.",
        },
        {
          question: "Why don't frigatebirds land on the water?",
          answer:
            "Their feathers are not very waterproof and their legs and feet are small, so frigatebirds avoid sitting on the sea — they would struggle to take off again and could become waterlogged. Instead they snatch food from at or just above the surface and spend their time soaring rather than swimming.",
        },
      ]}
      quickFacts={[
        { label: "Reference species", value: "Fregata magnificens (magnificent frigatebird)" },
        { label: "Class", value: "Aves (seabird)" },
        { label: "Diet", value: "Fish & squid; also piracy & scavenging" },
        { label: "Signature trait", value: "Male's inflatable red throat pouch" },
        { label: "Flight", value: "Soars for days; huge wings, light body" },
        { label: "Avoids", value: "Landing on water (not waterproof)" },
        { label: "Range", value: "Tropical & subtropical oceans" },
        { label: "Status", value: "Varies by species (verify)" },
      ]}
      relatedLinks={[
        { label: "Tropicbird Profile", href: "/animals/tropicbird", description: "Another tropical-ocean seabird" },
        { label: "Albatross Profile", href: "/animals/albatross", description: "Another master of ocean soaring" },
        { label: "Pelican Profile", href: "/animals/pelican", description: "A related fish-eating seabird" },
        { label: "Ocean fauna by depth", href: "/fauna/ocean", description: "Open-ocean habitats in context" },
        { label: "Bird Encyclopedia", href: "/animal-encyclopedia/birds" },
      ]}
    />
  );
}
