import type { Metadata } from "next";
import AnimalProfileLayout from "@/components/AnimalProfileLayout";
import { ANIMAL_SOURCES } from "@/lib/educational/animal-sources";
import { getAnimalGalleryImages, getAnimalImage, getAnimalOgImage } from "@/lib/images/animal-images";
import { buildArticleMetadata } from "@/lib/metadata";

const PATH = "/animals/sandgrouse";
const TITLE = "Sandgrouse — Profile, the Desert Birds That Carry Water in Their Feathers";
const DESC =
  "Explore sandgrouse (family Pteroclidae): plump, camouflaged desert birds whose males soak up water in specially adapted belly feathers and fly it back to their thirsty chicks.";

export const metadata: Metadata = buildArticleMetadata({
  title: TITLE,
  description: DESC,
  path: PATH,
  publishedTime: "2026-06-22",
  modifiedTime: "2026-06-22",
  ogImage: getAnimalOgImage("sandgrouse"),
});

export default function SandgrousePage() {
  return (
    <AnimalProfileLayout
      commonName="Sandgrouse"
      scientificName="family Pteroclidae"
      pageTitle={TITLE}
      description={DESC}
      path={PATH}
      parentCategory="Birds"
      parentCategoryHref="/animal-encyclopedia/birds"
      tags={["Bird", "Desert", "Old World"]}
      image={getAnimalImage("sandgrouse") ?? undefined}
      galleryImages={getAnimalGalleryImages("sandgrouse")}
      sources={ANIMAL_SOURCES.sandgrouse}
      publishedDate="2026-06-22"
      modifiedDate="2026-06-22"
      overview={
        <>
          <p>
            Sandgrouse (family Pteroclidae) are plump, pigeon-like ground birds of the deserts, dry plains,
            and steppes of Africa, Asia, and southern Europe. Superbly camouflaged in intricate patterns of
            sandy browns, greys, and buff, they blend almost invisibly into the bare, stony, or sandy ground
            they inhabit. Strong, fast fliers on pointed wings, they are built for crossing vast dry
            landscapes between feeding and drinking sites.
          </p>
          <p>
            Sandgrouse are famous for one of the most remarkable adaptations in the bird world: the male&apos;s
            belly feathers are specially structured to soak up and hold water like a sponge. He flies to a
            waterhole, wades in to saturate these feathers, then carries the water — sometimes over great
            distances — back to the nest, where the chicks drink straight from his plumage.
          </p>
          <p>
            <strong>Note:</strong> &ldquo;sandgrouse&rdquo; covers a family of species; details here describe
            the group broadly. Treat general statements as approximate and verify against authoritative
            sources.
          </p>
        </>
      }
      habitat={
        <p>
          Sandgrouse live in arid and semi-arid open country across Africa, the Middle East, Central and South
          Asia, and parts of southern Europe — deserts, semi-deserts, dry grasslands, steppe, and stony
          plains. They favour open ground with sparse vegetation, often far from water, which is exactly why
          their water-transport ability is so important.
        </p>
      }
      diet={
        <p>
          Sandgrouse are mainly seed-eaters, feeding on the small, dry seeds of desert plants, which they
          gather in large numbers by walking over the ground; they also take some green shoots and
          invertebrates. A dry, seed-heavy diet creates a strong need for water, so sandgrouse make regular
          flights — often at dawn or dusk and sometimes in large flocks — to drink at waterholes, frequently
          travelling long distances to do so.
        </p>
      }
      behavior={
        <p>
          Sandgrouse are gregarious and well adapted to harsh, dry conditions. Their patterned plumage gives
          superb camouflage on open ground, and they are powerful, swift fliers that commute long distances
          between feeding and drinking areas, gathering at waterholes in sometimes huge flocks at set times of
          day. The family&apos;s signature adaptation is water transport: a male&apos;s specially modified
          belly feathers absorb and retain water when he wades into a pool, and he then carries it back so his
          flightless chicks, which cannot yet travel to water themselves, can drink from his soaked feathers —
          a rare and ingenious form of parental care. Sandgrouse nest on the ground in a simple scrape, with
          well-camouflaged eggs.
        </p>
      }
      humanInteraction={
        <p>
          Sandgrouse are admired for their beauty and their extraordinary water-carrying behaviour, and they
          are hunted as game birds in some regions. Most species remain reasonably common across their wide
          ranges, though they can be affected by habitat change, hunting pressure, and disturbance at the
          waterholes they depend on. Protecting access to clean water sources matters for them. Consult the
          IUCN Red List for species-specific status.
        </p>
      }
      faqs={[
        {
          question: "Do sandgrouse really carry water in their feathers?",
          answer:
            "Yes — it's one of the most remarkable adaptations in birds. A male sandgrouse has specially structured belly feathers that soak up and hold water like a sponge. He wades into a waterhole to saturate them, then flies back to the nest — sometimes over long distances — where his chicks drink the water directly from his soaked plumage. It lets the young get water even though they can't yet fly to a waterhole.",
        },
        {
          question: "Why do sandgrouse need to travel so far for water?",
          answer:
            "Because they eat a dry, seed-heavy diet in arid country, sandgrouse need to drink regularly, but water is often scarce and far away in the desert. So they make daily flights — frequently at dawn or dusk, often in large flocks — to reach waterholes, sometimes covering considerable distances each way. Their fast, strong flight is built for exactly these commutes.",
        },
        {
          question: "Are sandgrouse related to grouse or pigeons?",
          answer:
            "Neither closely. Despite the name, sandgrouse aren't true grouse; they belong to their own family (Pteroclidae). They're somewhat pigeon-like in shape and are generally considered more closely related to that broad group than to game-bird grouse. The 'grouse' in the name simply reflects a superficial resemblance.",
        },
        {
          question: "How do sandgrouse avoid predators in the open desert?",
          answer:
            "Mainly through camouflage and flight. Their intricately patterned, sandy plumage blends almost perfectly with bare desert ground, so they're very hard to spot when still, and they sit tight to avoid detection. If flushed, they're fast, powerful fliers that can quickly put distance between themselves and danger.",
        },
      ]}
      quickFacts={[
        { label: "Group", value: "Family Pteroclidae (sandgrouse)" },
        { label: "Reference genus", value: "Pterocles" },
        { label: "Class", value: "Aves" },
        { label: "Signature trait", value: "Males carry water in belly feathers" },
        { label: "Diet", value: "Mainly seeds (needs regular water)" },
        { label: "Look", value: "Plump, superbly camouflaged; fast fliers" },
        { label: "Habitat", value: "Deserts & dry plains of the Old World" },
        { label: "Not a", value: "True grouse (own family)" },
      ]}
      relatedLinks={[
        { label: "Courser Profile", href: "/animals/courser", description: "Another fast desert ground bird" },
        { label: "Thick-knee Profile", href: "/animals/thick-knee", description: "Another cryptic open-country bird" },
        { label: "Roadrunner Profile", href: "/animals/roadrunner", description: "Another dryland running bird" },
        { label: "Fauna by Continent", href: "/fauna/continents", description: "Desert fauna in context" },
        { label: "Birds Encyclopedia", href: "/animal-encyclopedia/birds" },
      ]}
    />
  );
}
