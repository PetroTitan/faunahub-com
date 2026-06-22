import type { Metadata } from "next";
import AnimalProfileLayout from "@/components/AnimalProfileLayout";
import { ANIMAL_SOURCES } from "@/lib/educational/animal-sources";
import { getAnimalGalleryImages, getAnimalImage, getAnimalOgImage } from "@/lib/images/animal-images";
import { buildArticleMetadata } from "@/lib/metadata";

const PATH = "/animals/roller";
const TITLE = "Roller — Profile, the Jewel-Coloured Birds of the Tumbling Flight";
const DESC =
  "Explore rollers (family Coraciidae): brilliantly coloured Old World birds named for the males' acrobatic, rolling courtship flights — bold perch-hunters of insects and small prey.";

export const metadata: Metadata = buildArticleMetadata({
  title: TITLE,
  description: DESC,
  path: PATH,
  publishedTime: "2026-06-22",
  modifiedTime: "2026-06-22",
  ogImage: getAnimalOgImage("roller"),
});

export default function RollerPage() {
  return (
    <AnimalProfileLayout
      commonName="Roller"
      scientificName="family Coraciidae"
      pageTitle={TITLE}
      description={DESC}
      path={PATH}
      parentCategory="Birds"
      parentCategoryHref="/animal-encyclopedia/birds"
      tags={["Bird", "Colourful", "Old World"]}
      image={getAnimalImage("roller") ?? undefined}
      galleryImages={getAnimalGalleryImages("roller")}
      sources={ANIMAL_SOURCES.roller}
      publishedDate="2026-06-22"
      modifiedDate="2026-06-22"
      overview={
        <>
          <p>
            Rollers (family Coraciidae) are stocky, strong-billed birds of the warmer parts of the
            Old World, famous for their spectacular colours — dazzling combinations of blue,
            turquoise, lilac, green, and brown. The lilac-breasted roller
            (<em>Coracias caudatus</em>) of Africa, shown here, is a justly celebrated example and a
            favourite of safari-goers. Their name does not come from the colours, though, but from
            behaviour: in courtship, males perform dramatic aerial displays, rolling and tumbling
            through the air.
          </p>
          <p>
            Bold and conspicuous, rollers typically perch in the open on a prominent branch, pole,
            or wire, watching for prey on the ground below before swooping down to seize it.
          </p>
          <p>
            <strong>Note:</strong> &ldquo;roller&rdquo; covers several species; details here use the
            lilac-breasted roller as a reference. Treat general statements as approximate and verify
            against authoritative sources.
          </p>
        </>
      }
      habitat={
        <p>
          Rollers live across Africa, southern Europe, the Middle East, Asia, and into Australasia,
          mostly in warm, open habitats — savanna, woodland edge, bushland, farmland, and open
          country with scattered trees — that give them perches and clear views for hunting. The
          lilac-breasted roller is a characteristic bird of African savanna, often seen on a bare
          branch surveying the grassland.
        </p>
      }
      diet={
        <p>
          Rollers are carnivores that feed mainly on large insects — such as grasshoppers, beetles,
          and locusts — along with spiders, scorpions, small reptiles, amphibians, and other small
          prey. They are classic perch-hunters: a roller watches from an exposed lookout, then
          drops or dashes onto prey spotted on the ground, often returning to the same perch to feed.
          They are quick to take advantage of insects flushed by fires or grazing animals.
        </p>
      }
      behavior={
        <p>
          The roller&apos;s name comes from its courtship flight: the male climbs and then plunges
          and tumbles through the air in a rolling, rocking display, often calling raucously, to
          impress a mate and advertise his territory. Rollers are bold and often aggressive in
          defending their nests, even mobbing much larger birds. They are typically seen alone or in
          pairs, perched conspicuously, and they nest in holes — tree cavities, old woodpecker
          holes, or holes in banks and buildings. Their brilliant plumage flashes especially
          vividly in flight, when patches of bright blue on the wings are revealed.
        </p>
      }
      humanInteraction={
        <p>
          Rollers are admired worldwide for their beauty and are a highlight of African safaris;
          the lilac-breasted roller is especially iconic. Many rollers are common, but some — such as
          the European roller, a long-distance migrant — have declined in places due to habitat
          loss, pesticide use (which reduces their insect prey), and loss of nest sites, prompting
          conservation efforts. Maintaining open habitats, nest holes, and healthy insect
          populations helps them. Consult the IUCN Red List for species-specific status.
        </p>
      }
      faqs={[
        {
          question: "Why are they called 'rollers'?",
          answer:
            "The name comes from the males' courtship flight, not their colours. A displaying male roller flies up and then plunges, rocking and tumbling — 'rolling' — through the air, often while calling loudly, to attract a mate and defend his territory. This acrobatic rolling display gives the whole family its name.",
        },
        {
          question: "Why is the lilac-breasted roller so colourful?",
          answer:
            "Like many rollers, it sports a brilliant mix of colours — lilac, turquoise, blue, green, and brown — that play roles in mate attraction and species recognition, and flash especially vividly in flight. There's no difference in this dazzle between the sexes in the lilac-breasted roller, and its beauty has made it one of the most photographed birds in Africa.",
        },
        {
          question: "What do rollers eat?",
          answer:
            "Mostly large insects — grasshoppers, beetles, locusts — plus spiders, scorpions, small reptiles, amphibians, and other small prey. Rollers are perch-hunters: they watch from an exposed lookout and swoop down to grab prey on the ground, often making the most of insects flushed out by fires or grazing herds.",
        },
        {
          question: "Where do rollers nest?",
          answer:
            "In holes. Rollers are cavity nesters, using tree hollows, old woodpecker holes, or holes in earth banks and buildings. They're bold defenders of their nests, sometimes mobbing much larger birds that come too close. Loss of suitable nest holes is one of the pressures facing some roller species.",
        },
      ]}
      quickFacts={[
        { label: "Group", value: "Family Coraciidae (rollers)" },
        { label: "Reference species", value: "Coracias caudatus (lilac-breasted roller)" },
        { label: "Class", value: "Aves (near kingfishers & bee-eaters)" },
        { label: "Name from", value: "Males' rolling, tumbling courtship flight" },
        { label: "Diet", value: "Insects & small prey (perch-hunter)" },
        { label: "Nests", value: "In holes (cavities, banks)" },
        { label: "Range", value: "Africa, S Europe, Asia, Australasia" },
        { label: "Status", value: "Many common; some declining (verify)" },
      ]}
      relatedLinks={[
        { label: "Bee-eater Profile", href: "/animals/bee-eater", description: "Close, colourful relatives" },
        { label: "Kingfisher Profile", href: "/animals/kingfisher", description: "Another related perch-hunter" },
        { label: "Hoopoe Profile", href: "/animals/hoopoe", description: "Another striking Old World bird" },
        { label: "Fauna by Continent", href: "/fauna/continents", description: "African savanna fauna in context" },
        { label: "Birds Encyclopedia", href: "/animal-encyclopedia/birds" },
      ]}
    />
  );
}
