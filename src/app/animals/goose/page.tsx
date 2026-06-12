import type { Metadata } from "next";
import AnimalProfileLayout from "@/components/AnimalProfileLayout";
import { ANIMAL_SOURCES } from "@/lib/educational/animal-sources";
import {
  getAnimalGalleryImages,
  getAnimalImage,
  getAnimalOgImage,
} from "@/lib/images/animal-images";
import { buildArticleMetadata } from "@/lib/metadata";

const PUBLISHED = "2026-06-12";
const MODIFIED = "2026-06-12";

const title = "Goose — Profile, Habitat, Diet & Behavior";
const description =
  "Geese are large waterfowl in the family Anatidae. A group-level overview using the greylag goose as a reference species: grazing diet, flocking, and migration.";

export const metadata: Metadata = buildArticleMetadata({
  title,
  description,
  path: "/animals/goose",
  publishedTime: PUBLISHED,
  modifiedTime: MODIFIED,
  ogImage: getAnimalOgImage("goose"),
});

export default function GoosePage() {
  return (
    <AnimalProfileLayout
      commonName="Goose"
      pageTitle={title}
      description={description}
      path="/animals/goose"
      parentCategory="Birds"
      parentCategoryHref="/animal-encyclopedia/birds"
      tags={["Bird", "Waterfowl", "Herbivore"]}
      image={getAnimalImage("goose") ?? undefined}
      galleryImages={getAnimalGalleryImages("goose")}
      factsHeaderNote="“Goose” covers several large waterfowl species. The reference species below is the greylag goose (Anser anser), wild ancestor of most domestic geese. Other geese and domestic breeds differ."
      overview={
        <>
          <p>
            Geese are large waterfowl in the family Anatidae, between ducks and
            swans in size and grouped mainly in the genera <em>Anser</em> (grey
            geese) and <em>Branta</em> (black geese). This page is a
            group-level overview; the greylag goose (<em>Anser anser</em>) is
            used as a familiar reference species and is the wild ancestor of
            most domestic geese. Geese are known for grazing, strong flocking,
            and long migrations.
          </p>
        </>
      }
      habitat={
        <>
          <p>
            Geese are associated with wetlands, grasslands, farmland, and
            water bodies such as lakes and rivers, often grazing on open land
            near water. Many species are strongly migratory, breeding at high
            latitudes and wintering farther south, and some have adapted well
            to parks, reservoirs, and agricultural land. Ranges vary by
            species and region.
          </p>
        </>
      }
      diet={
        <>
          <p>
            Geese are largely herbivorous and feed by grazing on grasses,
            sedges, roots, and leaves, as well as grain and aquatic plants.
            Their bills are adapted for cropping vegetation. Diet shifts
            seasonally and regionally with the availability of forage, and
            large flocks feeding on farmland can sometimes bring them into
            conflict with agriculture.
          </p>
        </>
      }
      behavior={
        <>
          <p>
            Geese are highly social and gather in flocks outside the breeding
            season, frequently flying in V-formations that are thought to save
            energy on long migrations. They are well known for forming strong
            pair bonds and for being protective and territorial when nesting.
            Loud honking calls help keep flocks in contact and serve as alarm
            signals.
          </p>
        </>
      }
      humanInteraction={
        <>
          <p>
            People encounter geese as migratory wildlife, as park and farmland
            birds, and as domestic poultry kept for eggs, meat, and as
            &quot;watch&quot; animals. Conservation status varies by species —
            many geese are common and some populations have grown, while others
            face pressures, so status should be checked against current IUCN
            Red List data. Wild geese are wildlife; domestic geese are a
            separate, domesticated context.
          </p>
        </>
      }
      extraSections={[
        {
          heading: "Appearance & Recognition",
          body: (
            <>
              <p>
                Geese are large, heavy-bodied waterbirds with long necks
                (shorter than swans), webbed feet, and stout bills suited to
                grazing. Grey geese such as the greylag are largely grey-brown
                with an orange or pink bill, while black geese such as the
                Canada goose have dark necks and contrasting markings. Sexes
                generally look alike, unlike many ducks. Domestic geese are
                often larger and frequently white.
              </p>
            </>
          ),
        },
      ]}
      similarAnimals={
        <p>
          Geese share the family Anatidae with ducks and swans. They are larger
          and longer-necked than ducks but shorter-necked than swans. The duck
          is a close relative covered separately on FaunaHub.
        </p>
      }
      faqs={[
        {
          question: "Why do geese fly in a V-formation?",
          answer:
            "Geese often migrate in V-formations. The leading birds create air movement that is thought to reduce the effort for those behind, helping the flock conserve energy over long distances, while the formation also helps the birds keep visual contact.",
        },
        {
          question: "Are domestic geese the same as wild geese?",
          answer:
            "Most domestic geese descend from the wild greylag goose (some Asian breeds from the swan goose). Domestic breeds are often larger and may be white, and they are kept as poultry, while wild geese remain migratory wildlife. This page is a general overview, not care advice.",
        },
        {
          question: "Why can geese be aggressive near their nests?",
          answer:
            "Geese form strong pair bonds and defend their nests and goslings vigorously. During the breeding season they may hiss, honk, and display to drive away perceived threats. Keeping a respectful distance from nesting geese is generally advised.",
        },
      ]}
      quickFacts={[
        { label: "Group", value: "Geese (family Anatidae)" },
        { label: "Reference species", value: "Greylag goose (Anser anser)" },
        { label: "Class", value: "Aves" },
        { label: "Diet", value: "Mainly herbivorous (grazer)" },
        { label: "Habitat", value: "Wetlands, grassland, farmland" },
        { label: "Social structure", value: "Flocking; strong pair bonds" },
        { label: "Conservation", value: "Varies by species — verify on IUCN Red List" },
      ]}
      relatedLinks={[
        { label: "Duck Profile", href: "/animals/duck", description: "A close waterfowl relative" },
        { label: "Eagle Profile", href: "/animals/eagle" },
        { label: "Animal Encyclopedia — Birds", href: "/animal-encyclopedia/birds" },
        { label: "Animal Encyclopedia", href: "/animal-encyclopedia" },
      ]}
      sources={ANIMAL_SOURCES.goose}
      publishedDate={PUBLISHED}
      modifiedDate={MODIFIED}
    />
  );
}
