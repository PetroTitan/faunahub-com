import type { Metadata } from "next";
import AnimalProfileLayout from "@/components/AnimalProfileLayout";
import { ANIMAL_SOURCES } from "@/lib/educational/animal-sources";
import { getAnimalGalleryImages, getAnimalImage, getAnimalOgImage } from "@/lib/images/animal-images";
import { buildArticleMetadata } from "@/lib/metadata";

const PATH = "/animals/pitta";
const TITLE = "Pitta — Profile, the 'Jewel-Thrushes' That Hop on the Forest Floor";
const DESC =
  "Explore pittas (family Pittidae): dazzlingly multicoloured, short-tailed ground birds of Old World forests — shy 'jewel-thrushes' that hop in the leaf litter hunting worms and insects.";

export const metadata: Metadata = buildArticleMetadata({
  title: TITLE,
  description: DESC,
  path: PATH,
  publishedTime: "2026-06-22",
  modifiedTime: "2026-06-22",
  ogImage: getAnimalOgImage("pitta"),
});

export default function PittaPage() {
  return (
    <AnimalProfileLayout
      commonName="Pitta"
      scientificName="family Pittidae"
      pageTitle={TITLE}
      description={DESC}
      path={PATH}
      parentCategory="Birds"
      parentCategoryHref="/animal-encyclopedia/birds"
      tags={["Bird", "Forest floor", "Old World"]}
      image={getAnimalImage("pitta") ?? undefined}
      galleryImages={getAnimalGalleryImages("pitta")}
      sources={ANIMAL_SOURCES.pitta}
      publishedDate="2026-06-22"
      modifiedDate="2026-06-22"
      overview={
        <>
          <p>
            Pittas (family Pittidae) are plump, short-tailed, long-legged ground birds of the forests
            of Africa, Asia, and Australasia, famous for their breathtaking colours. Many combine
            patches of brilliant blue, green, red, black, white, and gold on a compact body, earning
            them the nickname &ldquo;jewel-thrushes.&rdquo; Despite this dazzle, pittas are
            notoriously shy and elusive, spending their time hopping over the dim forest floor, so they
            are far more often heard — through clear, whistled calls — than seen.
          </p>
          <p>
            With their stout build, upright stance, and stumpy tails, pittas hop briskly through the
            leaf litter on strong legs, probing and flicking aside debris to find their prey.
          </p>
          <p>
            <strong>Note:</strong> &ldquo;pitta&rdquo; covers a family of species; details here
            describe the group broadly. Treat general statements as approximate and verify against
            authoritative sources.
          </p>
        </>
      }
      habitat={
        <p>
          Pittas live in forests across the Old World tropics and subtropics — the greatest variety in
          Southeast Asia, with others in South Asia, Africa, and Australasia. Most favour the floor of
          humid rainforest, monsoon forest, and dense thickets, often near water, where deep leaf
          litter and shade suit their secretive, ground-foraging lifestyle. Some are migratory, moving
          seasonally between regions.
        </p>
      }
      diet={
        <p>
          Pittas are insectivores and feed largely on earthworms, snails, insects, and other small
          invertebrates gleaned from the forest floor. They hop along, flicking aside leaves and
          probing the soil and litter to uncover prey, and some are known to smash snails against a
          favoured stone or root to break the shell — a bit like a thrush&apos;s &ldquo;anvil.&rdquo;
        </p>
      }
      behavior={
        <p>
          Pittas are secretive, mostly solitary, and tied to the ground, hopping over the litter on
          their long legs and bobbing or flicking their short tails. Their bright colours, surprisingly,
          help camouflage them in the dappled, broken light of the forest floor, and they freeze or slip
          quietly into cover when disturbed, which is why they can be so hard to glimpse. They are most
          active and vocal around dawn and dusk, giving clear, far-carrying whistled calls that are
          often the best way to detect them. Pittas build domed nests on or near the ground, and several
          species migrate at night, sometimes colliding with lights and buildings on the way.
        </p>
      }
      humanInteraction={
        <p>
          Pittas are among the most sought-after birds for birdwatchers, who prize a glimpse of these
          elusive &ldquo;jewels,&rdquo; and ecotourism around them can support forest conservation.
          Because they depend on intact forest floor, deforestation and habitat loss are the main
          threats, and some species — especially restricted-range or migratory ones — are of
          conservation concern, while others remain reasonably common; trapping for the cage-bird trade
          also affects some. Conserving forest helps them. Consult the IUCN Red List for species-specific
          status.
        </p>
      }
      faqs={[
        {
          question: "Why are pittas called 'jewel-thrushes'?",
          answer:
            "Because of their stunning, jewel-like colours combined with a thrush-like, ground-hopping lifestyle. Many pittas wear brilliant patches of blue, green, red, black, white, and gold on a compact body, so a glimpse of one on the dim forest floor really does look like a moving gem — hence the affectionate nickname.",
        },
        {
          question: "If pittas are so colourful, why are they hard to see?",
          answer:
            "Partly because their bright colours actually break up their outline in the dappled, shifting light of the forest floor, and partly because they're shy, mostly solitary ground birds that freeze or slip into cover when disturbed. They're most active at dawn and dusk and are usually detected by their clear whistled calls rather than by sight.",
        },
        {
          question: "What do pittas eat?",
          answer:
            "Mainly earthworms, snails, insects, and other small invertebrates, which they find by hopping over the forest floor and flicking aside leaf litter or probing the soil. Some pittas even smash snails against a favourite stone or root to crack the shell, much like a thrush using an 'anvil.'",
        },
        {
          question: "Where do pittas live?",
          answer:
            "In forests across the Old World tropics and subtropics — with the greatest variety in Southeast Asia, plus species in South Asia, Africa, and Australasia. Most live on the floor of humid rainforest and dense thickets, often near water. Some are migratory, travelling at night between breeding and wintering areas.",
        },
      ]}
      quickFacts={[
        { label: "Group", value: "Family Pittidae (pittas)" },
        { label: "Nickname", value: "'Jewel-thrushes'" },
        { label: "Class", value: "Aves (perching birds)" },
        { label: "Look", value: "Plump, short-tailed, brilliantly coloured" },
        { label: "Lifestyle", value: "Shy ground-hoppers of the forest floor" },
        { label: "Diet", value: "Worms, snails, insects" },
        { label: "Detected by", value: "Clear whistled calls (rarely seen)" },
        { label: "Range", value: "Old World tropics (esp. SE Asia)" },
      ]}
      relatedLinks={[
        { label: "Broadbill Profile", href: "/animals/broadbill", description: "Related colourful Old World forest birds" },
        { label: "Antpitta Profile", href: "/animals/antpitta", description: "Unrelated New World forest-floor look-alikes" },
        { label: "Trogon Profile", href: "/animals/trogon", description: "Another jewel-toned tropical bird" },
        { label: "Fauna by Continent", href: "/fauna/continents", description: "Old World tropical fauna in context" },
        { label: "Birds Encyclopedia", href: "/animal-encyclopedia/birds" },
      ]}
    />
  );
}
