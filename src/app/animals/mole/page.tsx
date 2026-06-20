import type { Metadata } from "next";
import AnimalProfileLayout from "@/components/AnimalProfileLayout";
import { ANIMAL_SOURCES } from "@/lib/educational/animal-sources";
import { getAnimalGalleryImages, getAnimalImage, getAnimalOgImage } from "@/lib/images/animal-images";
import { buildArticleMetadata } from "@/lib/metadata";

const PATH = "/animals/mole";
const TITLE = "Mole — Profile, Tunnelling, Diet & Senses";
const DESC =
  "Explore moles (family Talpidae): small, powerful burrowing mammals with spade-like front paws and velvety fur that spend almost their whole lives digging through soil.";

export const metadata: Metadata = buildArticleMetadata({
  title: TITLE,
  description: DESC,
  path: PATH,
  publishedTime: "2026-06-20",
  modifiedTime: "2026-06-20",
  ogImage: getAnimalOgImage("mole"),
});

export default function MolePage() {
  return (
    <AnimalProfileLayout
      commonName="Mole"
      scientificName="family Talpidae"
      pageTitle={TITLE}
      description={DESC}
      path={PATH}
      parentCategory="Mammals"
      parentCategoryHref="/animal-encyclopedia/mammals"
      tags={["Mammal", "Burrower", "Insectivore"]}
      image={getAnimalImage("mole") ?? undefined}
      galleryImages={getAnimalGalleryImages("mole")}
      sources={ANIMAL_SOURCES.mole}
      publishedDate="2026-06-20"
      modifiedDate="2026-06-20"
      overview={
        <>
          <p>
            Moles are small, burrowing mammals (family Talpidae) supremely adapted for a
            life spent underground. The European mole (<em>Talpa europaea</em>), shown
            here, is a classic example: a cylindrical, velvety-furred body, tiny eyes,
            no external ears, and enormous spade-like front paws turned outward for
            digging. Moles are powerful excavators that move huge amounts of soil.
          </p>
          <p>
            Although the molehills they push up can frustrate gardeners, moles play a real
            role in aerating soil and controlling soil invertebrates, and they are
            fascinating examples of adaptation to underground life.
          </p>
          <p>
            <strong>Note:</strong> there are many mole species with somewhat different
            habits; treat general statements as approximate and verify against
            authoritative sources.
          </p>
        </>
      }
      habitat={
        <p>
          Moles live in soils across much of Europe, Asia, and North America (depending
          on the species), in grassland, woodland, farmland, and gardens — wherever the
          ground is suitable for digging and rich in food. They spend nearly all their
          lives in extensive tunnel systems and are rarely seen above ground.
        </p>
      }
      diet={
        <p>
          Moles are carnivores that feed mainly on earthworms, along with insect larvae
          and other soil invertebrates that fall into or are encountered in their
          tunnels. They have a high metabolism and must eat frequently; remarkably, some
          moles store living earthworms (immobilised by a bite) in special larders for
          later.
        </p>
      }
      behavior={
        <p>
          A mole&apos;s tunnels act as both home and trap — the animal patrols them to
          collect prey that falls in. Moles have very poor eyesight but an excellent
          sense of touch and smell; the star-nosed mole of North America has an
          extraordinary, highly sensitive nose. They are mostly solitary and active in
          shifts of digging and resting around the clock.
        </p>
      }
      humanInteraction={
        <p>
          Moles are familiar through their molehills and tunnels, which can disturb lawns
          and fields, but they also benefit soil by mixing and aerating it and by eating
          some pest invertebrates. They are generally harmless to people. Consult
          authoritative sources for species-specific details.
        </p>
      }
      faqs={[
        {
          question: "Are moles blind?",
          answer:
            "Not completely, but their eyesight is very poor. Moles have tiny eyes, often hidden in fur, that can probably detect little more than light and dark — enough for an animal that lives in the dark underground. They rely far more on touch and smell than on vision.",
        },
        {
          question: "What do moles eat?",
          answer:
            "Mainly earthworms, plus insect larvae and other soil invertebrates. Moles have a fast metabolism and need to eat often; some even keep living earthworms in a larder, immobilised by a bite, as a food store.",
        },
        {
          question: "Are molehills bad for the garden?",
          answer:
            "Molehills and tunnels can disturb lawns and disrupt plant roots, which is why moles are often seen as a nuisance. On the other hand, their digging aerates and mixes the soil and they eat some pest grubs, so their overall effect is mixed rather than purely harmful.",
        },
        {
          question: "How do moles dig so fast?",
          answer:
            "Moles have powerful shoulders and large, outward-facing front paws shaped like spades, with an extra thumb-like bone that widens the digging surface. This lets them push through soil with a breaststroke-like motion at surprising speed, building extensive tunnel systems.",
        },
      ]}
      quickFacts={[
        { label: "Group", value: "Family Talpidae" },
        { label: "Reference species", value: "Talpa europaea (European mole)" },
        { label: "Class", value: "Mammalia" },
        { label: "Diet", value: "Carnivore (mainly earthworms)" },
        { label: "Adaptations", value: "Spade-like paws; velvety fur" },
        { label: "Eyesight", value: "Very poor; relies on touch & smell" },
        { label: "Lifestyle", value: "Burrowing, mostly solitary" },
        { label: "Status", value: "Varies by species (verify)" },
      ]}
      relatedLinks={[
        { label: "Hedgehog Profile", href: "/animals/hedgehog", description: "Another small insectivore" },
        { label: "Earthworm Profile", href: "/animals/earthworm", description: "The mole's main prey" },
        { label: "Aardvark Profile", href: "/animals/aardvark", description: "A much larger burrowing mammal" },
        { label: "Fauna by Continent", href: "/fauna/continents", description: "Soil-dwelling fauna in context" },
        { label: "Mammal Encyclopedia", href: "/animal-encyclopedia/mammals" },
      ]}
    />
  );
}
