import type { Metadata } from "next";
import AnimalProfileLayout from "@/components/AnimalProfileLayout";
import { ANIMAL_SOURCES } from "@/lib/educational/animal-sources";
import { getAnimalGalleryImages, getAnimalImage, getAnimalOgImage } from "@/lib/images/animal-images";
import { buildArticleMetadata } from "@/lib/metadata";

const PATH = "/animals/coati";
const TITLE = "Coati — Profile, the Raccoon Relative with the Upturned Snout";
const DESC =
  "Explore coatis (genera Nasua & Nasuella): long-snouted, ring-tailed American mammals of the raccoon family, where females and young roam in lively, sociable bands.";

export const metadata: Metadata = buildArticleMetadata({
  title: TITLE,
  description: DESC,
  path: PATH,
  publishedTime: "2026-06-21",
  modifiedTime: "2026-06-21",
  ogImage: getAnimalOgImage("coati"),
});

export default function CoatiPage() {
  return (
    <AnimalProfileLayout
      commonName="Coati"
      scientificName="Nasua narica"
      pageTitle={TITLE}
      description={DESC}
      path={PATH}
      parentCategory="Mammals"
      parentCategoryHref="/animal-encyclopedia/mammals"
      tags={["Mammal", "Americas", "Sociable"]}
      image={getAnimalImage("coati") ?? undefined}
      galleryImages={getAnimalGalleryImages("coati")}
      sources={ANIMAL_SOURCES.coati}
      publishedDate="2026-06-21"
      modifiedDate="2026-06-21"
      overview={
        <>
          <p>
            Coatis are slender, active mammals of the Americas, easily recognised by their
            long, flexible, upturned snout and a long ringed tail usually carried straight up
            like a flag. They belong to the raccoon family (Procyonidae) and are close
            relatives of the raccoon and kinkajou. The white-nosed coati
            (<em>Nasua narica</em>), shown here, ranges from the southern United States through
            Central America; other coatis live across much of South America.
          </p>
          <p>
            Coatis are famously busy, inquisitive animals. Unusually for the raccoon family,
            they are mainly active by day, and the females and youngsters live together in
            chatty, roving bands — a sociable lifestyle quite unlike their solitary raccoon
            cousins.
          </p>
          <p>
            <strong>Note:</strong> &ldquo;coati&rdquo; covers several species; details here use
            the white-nosed coati as a reference. Treat general statements as approximate and
            verify against authoritative sources.
          </p>
        </>
      }
      habitat={
        <p>
          Coatis live in a wide range of wooded habitats across the Americas — tropical and
          subtropical forests, woodlands, scrub, and mountain forests — from the southwestern
          United States and Mexico through Central America and much of South America. They are
          equally at home on the ground and in the trees, foraging on the forest floor and
          climbing to rest, feed, and sleep.
        </p>
      }
      diet={
        <p>
          Coatis are omnivores with a varied, opportunistic diet. They use that long, sensitive
          snout to root through leaf litter and soil for invertebrates — insects, grubs,
          spiders, and the like — and they also eat fruit, small vertebrates, eggs, and other
          foods. Strong claws help them dig and tear into rotten wood, and their flexible nose
          and nimble paws make them skilled foragers in both the litter and the canopy.
        </p>
      }
      behavior={
        <p>
          Coati social life is distinctive: adult females and their young live in cohesive
          bands that can number from a handful to a couple of dozen animals, foraging and
          travelling together with much chattering and tail-signalling, while adult males are
          generally solitary and join the bands mainly to breed. They are mostly diurnal, agile
          climbers, and use their upturned tails to keep the group in visual contact through
          vegetation. Coatis are alert and vocal, with a variety of calls to coordinate the
          band and warn of danger. They are wild animals and, despite looking tame where used
          to people, can scratch or bite.
        </p>
      }
      humanInteraction={
        <p>
          Coatis are common and adaptable, and in some parks and tourist areas they become bold
          around people and food — which is best discouraged, since feeding wild coatis is
          unhealthy for them and can lead to bites or scratches. They are hunted in places and
          affected by habitat loss, but overall remain widespread. Observe them at a respectful
          distance and never hand-feed them. Consult the IUCN Red List for species-specific
          status.
        </p>
      }
      faqs={[
        {
          question: "Is a coati related to the raccoon?",
          answer:
            "Yes — closely. Coatis are members of the raccoon family (Procyonidae), so the raccoon and the kinkajou are among their nearest relatives. You can see the family resemblance in the ringed tail and clever, dexterous paws, though the coati's long upturned snout and daytime, group-living habits set it apart.",
        },
        {
          question: "Why do coatis hold their tails up?",
          answer:
            "The upright, ringed tail acts like a flag. As coatis forage through tall grass and undergrowth in their bands, holding the tail straight up helps group members keep each other in sight and stay together. It's a simple but effective way to maintain contact in dense vegetation.",
        },
        {
          question: "Do coatis live in groups?",
          answer:
            "The females and young do. Unlike their mostly solitary raccoon relatives, female coatis and their offspring live in sociable, roving bands of several to a couple of dozen animals, foraging and travelling together. Adult males are generally solitary and associate with the bands mainly during the breeding season.",
        },
        {
          question: "What do coatis eat?",
          answer:
            "Almost anything. Coatis are omnivores that use their long, flexible snouts to snuffle through leaf litter and soil for insects, grubs, and other invertebrates, and they also eat fruit, small animals, and eggs. This varied, opportunistic diet helps them thrive in many different habitats.",
        },
      ]}
      quickFacts={[
        { label: "Reference species", value: "Nasua narica (white-nosed coati)" },
        { label: "Class", value: "Mammalia (raccoon family)" },
        { label: "Relatives", value: "Raccoon, kinkajou" },
        { label: "Signature traits", value: "Upturned snout; upright ringed tail" },
        { label: "Diet", value: "Omnivore (invertebrates, fruit)" },
        { label: "Society", value: "Female-and-young bands; solitary males" },
        { label: "Activity", value: "Mainly diurnal" },
        { label: "Range", value: "Southern US to South America" },
      ]}
      relatedLinks={[
        { label: "Raccoon Profile", href: "/animals/raccoon", description: "Its close family relative" },
        { label: "Kinkajou Profile", href: "/animals/kinkajou", description: "Another procyonid" },
        { label: "Capybara Profile", href: "/animals/capybara", description: "Another sociable American mammal" },
        { label: "Fauna by Continent", href: "/fauna/continents", description: "American fauna in context" },
        { label: "Mammals Encyclopedia", href: "/animal-encyclopedia/mammals" },
      ]}
    />
  );
}
