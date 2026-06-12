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

const title = "Tuna — Profile, Habitat, Diet & Behavior";
const description =
  "Tuna are fast, powerful open-ocean fish. A group-level overview using bluefin and yellowfin as references: speed, warm-bodied biology, range, and conservation caution.";

export const metadata: Metadata = buildArticleMetadata({
  title,
  description,
  path: "/animals/tuna",
  publishedTime: PUBLISHED,
  modifiedTime: MODIFIED,
  ogImage: getAnimalOgImage("tuna"),
});

export default function TunaPage() {
  return (
    <AnimalProfileLayout
      commonName="Tuna"
      pageTitle={title}
      description={description}
      path="/animals/tuna"
      parentCategory="Fish"
      parentCategoryHref="/animal-encyclopedia/fish"
      tags={["Fish", "Marine", "Open Ocean"]}
      image={getAnimalImage("tuna") ?? undefined}
      galleryImages={getAnimalGalleryImages("tuna")}
      factsHeaderNote="“Tuna” covers several species in the genus Thunnus and relatives. The reference shown is bluefin/yellowfin tuna. Some tuna populations are heavily fished — conservation status varies by species and should be checked against current sources."
      overview={
        <>
          <p>
            Tuna are large, fast-swimming fish of the mackerel family
            (Scombridae), including the bluefin, yellowfin, albacore, and
            skipjack. This page is a group-level overview; the bluefin and
            yellowfin tunas are used as references. Tuna are built for life in
            the open ocean — streamlined, powerful, and capable of long,
            high-speed migrations. Several species are among the most
            commercially valuable fish in the world.
          </p>
        </>
      }
      habitat={
        <>
          <p>
            Tuna are pelagic fish of the open ocean, ranging widely through warm
            and temperate seas around the world. Many undertake long migrations
            across entire ocean basins, following prey and water temperature.
            They are rarely tied to one place, which makes their management an
            international matter. Range and depth vary by species.
          </p>
        </>
      }
      diet={
        <>
          <p>
            Tuna are powerful predators that feed on smaller fish, squid, and
            crustaceans, hunting actively in open water. Their high-speed
            lifestyle demands a lot of energy, supported by an efficient,
            warm-bodied physiology. Diet varies by species and size; this page
            describes general feeding ecology.
          </p>
        </>
      }
      behavior={
        <>
          <p>
            Tuna are remarkable athletes. Unusually among fish, several tuna can
            keep parts of their bodies warmer than the surrounding water, which
            helps power sustained fast swimming. Many travel in schools and cover
            vast distances on migration. They must keep moving to pass water over
            their gills. Behaviour and schooling vary among the tuna species.
          </p>
        </>
      }
      humanInteraction={
        <>
          <p>
            Tuna are hugely important as food and support major global
            fisheries, which has put intense pressure on some species. Certain
            populations — notably some bluefin stocks — have been seriously
            depleted by overfishing, while others are more stable, and management
            efforts aim to rebuild stocks. Because status differs sharply by
            species and population and changes over time, it should be verified
            against current IUCN Red List and government (such as NOAA Fisheries)
            sources rather than assumed.
          </p>
        </>
      }
      extraSections={[
        {
          heading: "Appearance & Recognition",
          body: (
            <>
              <p>
                Tuna have a sleek, torpedo-shaped body built for speed, with a
                crescent-shaped tail, a row of small finlets along the rear of the
                body, and fins that can fold into grooves to reduce drag. They are
                typically dark blue above and silvery below — countershading
                suited to open water. Sizes range from the modest skipjack to the
                massive Atlantic bluefin, one of the largest bony fishes.
              </p>
            </>
          ),
        },
      ]}
      similarAnimals={
        <p>
          Tuna belong to the mackerel family and are open-ocean predators like
          some of the sharks covered on FaunaHub, though tuna are bony fish
          rather than cartilaginous. They share pelagic waters with other
          fast-swimming hunters and with marine mammals such as dolphins.
        </p>
      }
      faqs={[
        {
          question: "Are tuna warm-blooded?",
          answer:
            "Not in the way mammals are, but several tuna species are unusual among fish in being able to keep parts of their body — such as swimming muscles — warmer than the surrounding water. This regional warming helps power their sustained, high-speed swimming.",
        },
        {
          question: "Why must tuna keep swimming?",
          answer:
            "Tuna rely largely on forward motion to pass oxygen-rich water over their gills (ram ventilation), so they keep swimming to breathe. This continuous movement also suits their migratory, open-ocean way of life.",
        },
        {
          question: "Are tuna overfished?",
          answer:
            "Some tuna populations, particularly certain bluefin stocks, have been heavily depleted by fishing, while others are more stable, and management efforts aim to rebuild stocks. Status varies by species and population and changes over time, so check current IUCN and government sources.",
        },
      ]}
      quickFacts={[
        { label: "Group", value: "Tuna (genus Thunnus and relatives)" },
        { label: "Family", value: "Scombridae (mackerel family)" },
        { label: "Type", value: "Open-ocean (pelagic) fish" },
        { label: "Notable trait", value: "Fast swimmers; some keep muscles warm" },
        { label: "Diet", value: "Carnivore (fish, squid, crustaceans)" },
        { label: "Conservation", value: "Varies by species — verify on IUCN/NOAA" },
      ]}
      relatedLinks={[
        { label: "Salmon Profile", href: "/animals/salmon", description: "Another important food fish" },
        { label: "Shark Profile", href: "/animals/shark", description: "A fellow open-ocean predator" },
        { label: "Marine Animals", href: "/animal-encyclopedia/marine-animals" },
        { label: "Fish Encyclopedia", href: "/animal-encyclopedia/fish" },
        { label: "Wildlife Hub", href: "/wildlife" },
      ]}
      sources={ANIMAL_SOURCES.tuna}
      publishedDate={PUBLISHED}
      modifiedDate={MODIFIED}
    />
  );
}
