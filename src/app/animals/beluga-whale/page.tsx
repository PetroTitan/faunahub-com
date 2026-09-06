import type { Metadata } from "next";
import AnimalProfileLayout from "@/components/AnimalProfileLayout";
import { ANIMAL_SOURCES } from "@/lib/educational/animal-sources";
import { getAnimalGalleryImages, getAnimalImage, getAnimalOgImage } from "@/lib/images/animal-images";
import { buildArticleMetadata } from "@/lib/metadata";

const PATH = "/animals/beluga-whale";
const TITLE = "Beluga Whale — Profile, White Skin, Melon & Arctic Habitat";
const DESC =
  "Explore the beluga (Delphinapterus leucas): the white Arctic whale with a flexible neck and mobile melon, called the canary of the sea for its voice.";

export const metadata: Metadata = buildArticleMetadata({
  title: TITLE,
  description: DESC,
  path: PATH,
  publishedTime: "2026-09-06",
  modifiedTime: "2026-09-06",
  ogImage: getAnimalOgImage("beluga-whale"),
});

export default function BelugaWhalePage() {
  return (
    <AnimalProfileLayout
      commonName="Beluga Whale"
      scientificName="Delphinapterus leucas"
      pageTitle={TITLE}
      description={DESC}
      path={PATH}
      parentCategory="Marine Animals"
      parentCategoryHref="/animal-encyclopedia/marine-animals"
      tags={["Marine Mammal","Arctic","Toothed Whale"]}
      image={getAnimalImage("beluga-whale") ?? undefined}
      galleryImages={getAnimalGalleryImages("beluga-whale")}
      sources={ANIMAL_SOURCES["beluga-whale"]}
      publishedDate="2026-09-06"
      modifiedDate="2026-09-06"
      overview={
        <>
        <p>
          The beluga (<em>Delphinapterus leucas</em>) is a small white toothed whale of Arctic and subarctic seas, and the narwhal&apos;s closest living relative. Adults are uniformly white; calves are born grey or brownish and pale over several years.
        </p>
        <p>
          Belugas have no dorsal fin — replaced by a tough dorsal ridge, an advantage under sea ice — and, unusually among whales, unfused neck vertebrae, which lets them turn the head to the side rather than moving the whole body.
        </p>
        <p>
          The rounded forehead, or <strong>melon</strong>, is a fatty structure used to focus sound for echolocation, and in belugas it is visibly deformable: the animal can change its shape. Belugas are so vocal that whalers called them the &apos;canary of the sea&apos;.
        </p>
        </>
      }
      habitat={
        <>
        <p>
          Belugas live in Arctic and subarctic waters around Alaska, Canada, Greenland, Svalbard and Russia. They are strongly associated with coastal waters, estuaries and river mouths in summer, where large numbers gather to moult, and move to areas of pack ice and open leads in winter. Some populations are highly migratory while others, such as those in the St Lawrence estuary, are resident.
        </p>
        </>
      }
      diet={
        <>
        <p>
          Belugas take a broad diet of fish and invertebrates — cod, salmon, herring, capelin, flatfish, squid, octopus, shrimp and marine worms — varying with region and season. They have relatively few, peg-like teeth and often feed by suction, and they forage both near the surface and on deep dives to the seabed.
        </p>
        </>
      }
      behavior={
        <>
        <p>
          Belugas are highly social and travel in pods that can merge into large aggregations. They are exceptionally vocal, producing whistles, clicks, chirps and creaks used for communication and echolocation, and their flexible neck and mobile facial tissue give them an unusually expressive appearance. Each summer they gather in shallow estuaries to moult, rubbing against gravel to shed the outer skin layer.
        </p>
        </>
      }
      humanInteraction={
        <>
        <p>
          Belugas are hunted for subsistence in parts of the Arctic under management, and are among the whale species most often kept in aquaria — a practice that remains contested. Wild populations face pressures from underwater noise, shipping, contaminants, prey shifts and sea-ice change; some populations, such as Cook Inlet in Alaska, are far more threatened than the species as a whole. Verify current status at the IUCN Red List and NOAA Fisheries.
        </p>
        </>
      }
      faqs={[
        {
          question: "Why are beluga whales white?",
          answer:
            "Adults are white, but they are not born that way. Calves are grey or brownish and lighten gradually over several years until they reach the uniform white of an adult. The colouring is generally linked to life in an environment of ice and light-scattering water.",
        },
        {
          question: "What is the bulge on a beluga's head?",
          answer:
            "It is the melon — a fatty structure used to focus and direct sound for echolocation. What makes the beluga unusual is that the melon is visibly deformable: the animal can change its shape, which is easy to see because there is no beak obscuring it.",
        },
        {
          question: "Why are belugas called the canary of the sea?",
          answer:
            "Because of how much noise they make. Belugas produce an exceptionally varied range of whistles, clicks, chirps and creaks — used both for communication and for echolocation — and whalers who heard them through wooden hulls compared the sound to birdsong.",
        },
        {
          question: "Can belugas turn their heads?",
          answer:
            "Yes, and among whales that is unusual. Most cetaceans have fused neck vertebrae, but a beluga's are unfused, so it can turn its head to the side and up and down. Combined with mobile facial tissue, this gives belugas a much more expressive look than most whales.",
        },
      ]}
      quickFacts={[
        { label: "Scientific name", value: "Delphinapterus leucas" },
        { label: "Family", value: "Monodontidae" },
        { label: "Class", value: "Mammalia" },
        { label: "Closest relative", value: "Narwhal" },
        { label: "Dorsal fin", value: "Absent — replaced by a ridge" },
        { label: "Neck", value: "Unfused vertebrae — head can turn" },
        { label: "Diet", value: "Fish, squid, octopus, crustaceans" },
        { label: "Status", value: "Varies by population — verify" },
      ]}
      relatedLinks={[
        { label: "Narwhal Profile", href: "/animals/narwhal", description: "The beluga's closest relative" },
        { label: "Orca Profile", href: "/animals/orca", description: "A predator of Arctic whales" },
        { label: "Dolphin Profile", href: "/animals/dolphin" },
        { label: "Polar Bear Profile", href: "/animals/polar-bear" },
        { label: "Marine Animals", href: "/animal-encyclopedia/marine-animals" },
      ]}
    />
  );
}
