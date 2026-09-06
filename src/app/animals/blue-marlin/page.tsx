import type { Metadata } from "next";
import AnimalProfileLayout from "@/components/AnimalProfileLayout";
import { ANIMAL_SOURCES } from "@/lib/educational/animal-sources";
import { getAnimalGalleryImages, getAnimalImage, getAnimalOgImage } from "@/lib/images/animal-images";
import { buildArticleMetadata } from "@/lib/metadata";

const PATH = "/animals/blue-marlin";
const TITLE = "Blue Marlin — Profile, Bill, Speed & Open-Ocean Life";
const DESC =
  "Explore the Atlantic blue marlin (Makaira nigricans): an open-ocean billfish that stuns prey with its bill and can warm its own eyes and brain.";

export const metadata: Metadata = buildArticleMetadata({
  title: TITLE,
  description: DESC,
  path: PATH,
  publishedTime: "2026-09-06",
  modifiedTime: "2026-09-06",
  ogImage: getAnimalOgImage("blue-marlin"),
});

export default function BlueMarlinPage() {
  return (
    <AnimalProfileLayout
      commonName="Blue Marlin"
      scientificName="Makaira nigricans"
      pageTitle={TITLE}
      description={DESC}
      path={PATH}
      parentCategory="Fish"
      parentCategoryHref="/animal-encyclopedia/fish"
      tags={["Fish","Billfish","Open Ocean"]}
      image={getAnimalImage("blue-marlin") ?? undefined}
      galleryImages={getAnimalGalleryImages("blue-marlin")}
      sources={ANIMAL_SOURCES["blue-marlin"]}
      publishedDate="2026-09-06"
      modifiedDate="2026-09-06"
      overview={
        <>
        <p>
          The Atlantic blue marlin (<em>Makaira nigricans</em>) is a large, powerful billfish of warm open ocean, with a cobalt-blue back, silvery-white belly and pale vertical bars that can appear and fade as the fish changes colour.
        </p>
        <p>
          Its most obvious feature is the <strong>bill</strong> — a long, rounded, spear-like extension of the upper jaw. Rather than spearing prey, marlin generally use the bill to slash through and stun fish in a school, then return to eat the injured ones.
        </p>
        <p>
          Blue marlin are also among the fishes that can keep parts of the body warmer than the surrounding sea. Specialised tissue warms the <strong>eyes and brain</strong>, which sharpens vision and reaction speed during rapid dives into cold water.
        </p>
        </>
      }
      habitat={
        <>
        <p>
          Blue marlin live in tropical and warm-temperate parts of the Atlantic, in open ocean rather than near coasts. They are strongly associated with warm surface water and with oceanic features — fronts, current edges, seamounts and eddies — where prey concentrates. Females grow substantially larger than males, and the species is highly migratory, crossing entire ocean basins.
        </p>
        </>
      }
      diet={
        <>
        <p>
          Blue marlin feed on schooling fish such as mackerel, tuna and scad, along with squid. They hunt in open water, using speed and the bill to disable prey within a school before feeding. Their high metabolic rate and warm-eyed vision support hunting fast prey in changing light and temperature.
        </p>
        </>
      }
      behavior={
        <>
        <p>
          Blue marlin are usually solitary and cover long distances, following warm water and prey. They are capable of rapid bursts of speed and of striking colour change, with the vertical bars flashing brighter during feeding or excitement — a change driven by pigment cells in the skin. Spawning occurs in warm waters, and females release very large numbers of eggs.
        </p>
        </>
      }
      humanInteraction={
        <>
        <p>
          Blue marlin are prized in recreational big-game fishing and are also taken as bycatch in commercial longline fisheries targeting tuna and swordfish, which is the principal source of fishing mortality. Slow maturity and high fishing pressure make the species vulnerable, and catch-and-release practices and bycatch mitigation are used as management tools. This profile is educational and offers no fishing, handling or gear guidance. Verify current status at the IUCN Red List and NOAA Fisheries.
        </p>
        </>
      }
      faqs={[
        {
          question: "What does a marlin use its bill for?",
          answer:
            "Mostly for stunning prey rather than spearing it. A marlin slashes its bill sideways through a school of fish, injuring several at once, then turns back to eat the disabled ones. The bill also contributes to the streamlined shape that lets the fish move fast through water.",
        },
        {
          question: "Can blue marlin warm their bodies?",
          answer:
            "Partly. Blue marlin have specialised tissue that warms the eyes and brain above the surrounding water temperature. This keeps vision sharp and reactions fast when the fish dives from warm surface water into much colder depths after prey.",
        },
        {
          question: "Why do marlin change colour?",
          answer:
            "Pigment cells in the skin allow rapid change, and the vertical bars along the flanks can brighten and fade within seconds. The change is usually seen during feeding or excitement, and is generally interpreted as signalling — to other marlin, and possibly in ways that affect prey.",
        },
        {
          question: "Are blue marlin threatened?",
          answer:
            "Blue marlin mature slowly and are taken both by recreational fisheries and as bycatch in commercial longline fishing for tuna and swordfish, which makes them vulnerable to fishing pressure. Because assessments change, current status should be verified directly with the IUCN Red List and NOAA Fisheries.",
        },
      ]}
      quickFacts={[
        { label: "Scientific name", value: "Makaira nigricans" },
        { label: "Family", value: "Istiophoridae (billfish)" },
        { label: "Class", value: "Actinopterygii (ray-finned fish)" },
        { label: "Bill", value: "Used to slash and stun prey" },
        { label: "Thermoregulation", value: "Warms eyes and brain" },
        { label: "Size", value: "Females grow much larger than males" },
        { label: "Habitat", value: "Warm open ocean, highly migratory" },
        { label: "Status", value: "Verify current IUCN assessment" },
      ]}
      relatedLinks={[
        { label: "Sailfish Profile", href: "/animals/sailfish", description: "A close billfish relative" },
        { label: "Tuna Profile", href: "/animals/tuna" },
        { label: "Barracuda Profile", href: "/animals/barracuda" },
        { label: "Mackerel Profile", href: "/animals/mackerel" },
        { label: "Fish Encyclopedia", href: "/animal-encyclopedia/fish" },
      ]}
    />
  );
}
