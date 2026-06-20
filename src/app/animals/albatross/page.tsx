import type { Metadata } from "next";
import AnimalProfileLayout from "@/components/AnimalProfileLayout";
import { ANIMAL_SOURCES } from "@/lib/educational/animal-sources";
import { getAnimalGalleryImages, getAnimalImage, getAnimalOgImage } from "@/lib/images/animal-images";
import { buildArticleMetadata } from "@/lib/metadata";

const PATH = "/animals/albatross";
const TITLE = "Albatross — Profile, Wingspan, Diet & Conservation";
const DESC =
  "Explore albatrosses (family Diomedeidae): ocean-wandering seabirds with the largest wingspans of any living bird, able to glide vast distances — and among the most threatened birds.";

export const metadata: Metadata = buildArticleMetadata({
  title: TITLE,
  description: DESC,
  path: PATH,
  publishedTime: "2026-06-20",
  modifiedTime: "2026-06-20",
  ogImage: getAnimalOgImage("albatross"),
});

export default function AlbatrossPage() {
  return (
    <AnimalProfileLayout
      commonName="Albatross"
      scientificName="family Diomedeidae"
      pageTitle={TITLE}
      description={DESC}
      path={PATH}
      parentCategory="Birds"
      parentCategoryHref="/animal-encyclopedia/birds"
      tags={["Bird", "Seabird", "Conservation priority"]}
      image={getAnimalImage("albatross") ?? undefined}
      galleryImages={getAnimalGalleryImages("albatross")}
      sources={ANIMAL_SOURCES.albatross}
      publishedDate="2026-06-20"
      modifiedDate="2026-06-20"
      overview={
        <>
          <p>
            Albatrosses (family Diomedeidae) are large ocean-going seabirds renowned for
            having the greatest wingspans of any living bird — the wandering albatross
            (<em>Diomedea exulans</em>), shown here, is the record-holder. Built for
            life on the wind, albatrosses can glide enormous distances over the open
            ocean with barely a wingbeat, circling the southern seas and ranging across
            entire oceans.
          </p>
          <p>
            They come to land only to breed, on remote islands, where they form
            long-lasting pair bonds and raise a single chick slowly over many months.
          </p>
          <p>
            <strong>Conservation note:</strong> albatrosses are among the most threatened
            of all bird groups, with many species at risk, largely from being caught
            accidentally on fishing gear (bycatch) and from threats at breeding islands.
            Verify each species&apos; status at iucnredlist.org.
          </p>
        </>
      }
      habitat={
        <p>
          Albatrosses live across the open oceans, especially the windy Southern Ocean
          and the North Pacific, spending most of their lives at sea far from land. They
          breed on isolated oceanic islands, returning to the same colonies and often the
          same partners year after year.
        </p>
      }
      diet={
        <p>
          Albatrosses feed mainly on squid, fish, and krill, taken from the sea surface
          or by shallow plunges, and they also scavenge. They can detect food by smell
          across the water and often follow ships and feed on natural &ldquo;food
          falls&rdquo; at sea, which unfortunately also draws them toward fishing
          operations.
        </p>
      }
      behavior={
        <p>
          Albatrosses are masters of efficient flight, using a technique called dynamic
          soaring to harvest energy from wind gradients over the waves, letting them
          travel huge distances at little cost. They are long-lived and slow-breeding,
          with elaborate courtship dances and strong, often lifelong pair bonds. A pair
          typically raises just one chick at a time, investing months of care.
        </p>
      }
      humanInteraction={
        <p>
          Albatrosses have long featured in seafaring lore as omens of the open ocean.
          Today their greatest threat is accidental capture on longline and trawl
          fishing gear, along with introduced predators and plastic at breeding islands.
          International efforts to reduce bycatch are central to their conservation. For
          current, species-specific status, consult the IUCN Red List.
        </p>
      }
      faqs={[
        {
          question: "How big is an albatross's wingspan?",
          answer:
            "Albatrosses have the largest wingspans of any living bird, and the wandering albatross holds the record — its long, narrow wings can span several metres. These wings are built for gliding rather than flapping, letting the bird ride the ocean winds for hours.",
        },
        {
          question: "How do albatrosses fly so far without tiring?",
          answer:
            "They use \"dynamic soaring,\" exploiting the difference in wind speed at different heights above the waves to gain energy with almost no flapping. This lets albatrosses glide for enormous distances very efficiently, covering thousands of kilometres on a single foraging trip.",
        },
        {
          question: "Why are albatrosses endangered?",
          answer:
            "Albatrosses are among the most threatened bird groups, mainly because they are accidentally hooked or entangled on longline and trawl fishing gear (bycatch), and because introduced predators and other threats harm them at their island breeding colonies. Their slow breeding makes recovery difficult.",
        },
        {
          question: "Do albatrosses mate for life?",
          answer:
            "Largely, yes. Albatrosses form strong, often lifelong pair bonds, reinforced by elaborate courtship displays, and typically return to the same partner and colony each breeding season to raise a single chick together over many months.",
        },
      ]}
      quickFacts={[
        { label: "Group", value: "Family Diomedeidae" },
        { label: "Reference species", value: "Diomedea exulans (wandering albatross)" },
        { label: "Class", value: "Aves" },
        { label: "Claim to fame", value: "Largest wingspan of any living bird" },
        { label: "Diet", value: "Squid, fish, krill; scavenges" },
        { label: "Flight", value: "Dynamic soaring (very efficient)" },
        { label: "Breeding", value: "Remote islands; one slow-reared chick" },
        { label: "IUCN Status", value: "Many threatened (verify by species)" },
      ]}
      relatedLinks={[
        { label: "Seagull Profile", href: "/animals/seagull", description: "Another seabird group" },
        { label: "Pelican Profile", href: "/animals/pelican", description: "A large coastal seabird" },
        { label: "Penguin Profile", href: "/animals/penguin", description: "A flightless southern seabird" },
        { label: "Endangered Animals", href: "/endangered-animals", description: "IUCN Red List categories" },
        { label: "Bird Encyclopedia", href: "/animal-encyclopedia/birds" },
      ]}
    />
  );
}
