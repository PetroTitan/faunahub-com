import type { Metadata } from "next";
import AnimalProfileLayout from "@/components/AnimalProfileLayout";
import { ANIMAL_SOURCES } from "@/lib/educational/animal-sources";
import { getAnimalGalleryImages, getAnimalImage, getAnimalOgImage } from "@/lib/images/animal-images";
import { buildArticleMetadata } from "@/lib/metadata";

const PATH = "/animals/remora";
const TITLE = "Remora — Profile, the Hitchhiking Fish with a Suction Disc";
const DESC =
  "Explore remoras (family Echeneidae): 'sharksucker' fish with a flat suction disc on the head that lets them hitch rides on sharks, rays, turtles, and whales — a free lift and a free meal.";

export const metadata: Metadata = buildArticleMetadata({
  title: TITLE,
  description: DESC,
  path: PATH,
  publishedTime: "2026-06-21",
  modifiedTime: "2026-06-21",
  ogImage: getAnimalOgImage("remora"),
});

export default function RemoraPage() {
  return (
    <AnimalProfileLayout
      commonName="Remora"
      scientificName="Echeneis naucrates"
      pageTitle={TITLE}
      description={DESC}
      path={PATH}
      parentCategory="Fish"
      parentCategoryHref="/animal-encyclopedia/fish"
      tags={["Fish", "Marine", "Hitchhiker"]}
      image={getAnimalImage("remora") ?? undefined}
      galleryImages={getAnimalGalleryImages("remora")}
      sources={ANIMAL_SOURCES.remora}
      publishedDate="2026-06-21"
      modifiedDate="2026-06-21"
      overview={
        <>
          <p>
            Remoras (family Echeneidae), often called sharksuckers, are slender marine fish
            with an extraordinary adaptation: a flat, oval, ridged suction pad on top of the
            head — actually a modified dorsal fin — that works like a powerful sucker. With
            it, a remora can attach itself firmly to a much larger animal and ride along,
            hitchhiking across the ocean. The live sharksucker (<em>Echeneis naucrates</em>),
            shown here, is a common example.
          </p>
          <p>
            By latching onto sharks, rays, sea turtles, whales, and even boats and divers,
            remoras get free transport, protection, and easy meals — without having to swim
            constantly themselves.
          </p>
          <p>
            <strong>Note:</strong> there are several remora species; details here use the live
            sharksucker as a reference. Treat general statements as approximate and verify
            against authoritative sources.
          </p>
        </>
      }
      habitat={
        <p>
          Remoras live in warm tropical and subtropical oceans worldwide, in open water and
          around reefs — usually wherever their large host animals are found. Because they
          travel attached to wide-ranging hosts such as sharks and turtles, individual
          remoras can cover great distances across the sea.
        </p>
      }
      diet={
        <p>
          Remoras have a flexible, opportunistic diet centred on their hosts. They feed on
          scraps from the host&apos;s meals, on its external parasites (such as copepods),
          and on its sloughed skin and faeces, and they also catch small free-swimming prey
          and plankton. This mix of cleaning and scavenging is part of why hosts often
          tolerate them.
        </p>
      }
      behavior={
        <p>
          The remora&apos;s suction disc has rows of movable, slat-like ridges that it can
          raise to create suction and grip a host&apos;s skin tightly, yet it can release and
          reposition easily; the faster the host swims, the firmer the hold becomes. The
          relationship is generally seen as commensal — the remora benefits from transport,
          shelter, and food, while the host is largely unaffected and may even gain from
          having parasites removed. Remoras can also detach and swim freely, and some
          aggregate around feeding sharks. Their hitchhiking lifestyle saves them the energy
          of constant swimming.
        </p>
      }
      humanInteraction={
        <p>
          Remoras are familiar to divers and snorkelers, sometimes attaching to people or
          boats, and they feature in the folklore and traditional fishing of some cultures
          (where tethered remoras were reportedly used to help catch turtles). They are
          harmless to humans and are not of major conservation concern, though they depend on
          healthy populations of their host animals. Consult authoritative sources for
          details.
        </p>
      }
      faqs={[
        {
          question: "How does a remora stick to a shark?",
          answer:
            "With a special suction disc on top of its head — a modified dorsal fin made of movable, slat-like ridges. The remora raises these ridges to create suction and grip the host's skin, and the faster the host swims, the tighter the hold. It can also relax the disc to release and move to a new spot whenever it wants.",
        },
        {
          question: "Does the remora harm the animal it rides on?",
          answer:
            "Usually not much. The relationship is generally considered commensal: the remora gains transport, protection, and food, while the host is largely unaffected. In fact, by eating parasites and dead skin off the host, a remora may even do it a small favour, which is one reason hosts tolerate the hitchhikers.",
        },
        {
          question: "What do remoras eat?",
          answer:
            "Mostly food connected to their hosts: scraps from the host's meals, external parasites picked off its skin, and sloughed skin and faeces, plus small free-swimming prey and plankton. This combination of scavenging and cleaning lets remoras feed while travelling along for free.",
        },
        {
          question: "Can remoras swim on their own?",
          answer:
            "Yes. Although they're famous for hitchhiking, remoras are perfectly capable of swimming freely and will detach to move between hosts, feed, or rest. Riding on a larger animal is mainly an energy-saving strategy — it spares them the effort of constant swimming and brings food and protection with it.",
        },
      ]}
      quickFacts={[
        { label: "Group", value: "Family Echeneidae (sharksuckers)" },
        { label: "Reference species", value: "Echeneis naucrates (live sharksucker)" },
        { label: "Class", value: "Actinopterygii (ray-finned fish)" },
        { label: "Signature trait", value: "Head suction disc (modified fin)" },
        { label: "Lifestyle", value: "Hitchhikes on large marine animals" },
        { label: "Diet", value: "Scraps, parasites, small prey" },
        { label: "Relationship", value: "Mostly commensal with hosts" },
        { label: "Range", value: "Warm oceans worldwide" },
      ]}
      relatedLinks={[
        { label: "Shark Profile", href: "/animals/shark", description: "A favourite remora host" },
        { label: "Sea Turtle Profile", href: "/animals/sea-turtle", description: "Another common host" },
        { label: "Ray Profile", href: "/animals/ray", description: "Another large host animal" },
        { label: "Ocean fauna by depth", href: "/fauna/ocean", description: "Open-ocean habitats in context" },
        { label: "Fish Encyclopedia", href: "/animal-encyclopedia/fish" },
      ]}
    />
  );
}
