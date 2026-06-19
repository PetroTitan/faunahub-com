import type { Metadata } from "next";
import AnimalProfileLayout from "@/components/AnimalProfileLayout";
import { ANIMAL_SOURCES } from "@/lib/educational/animal-sources";
import { getAnimalGalleryImages, getAnimalImage, getAnimalOgImage } from "@/lib/images/animal-images";
import { buildArticleMetadata } from "@/lib/metadata";

const PATH = "/animals/giant-isopod";
const TITLE = "Giant Isopod — Profile, Deep-Sea Life, Diet & Adaptations";
const DESC =
  "Explore the giant isopod (Bathynomus): a large deep-sea crustacean and distant relative of woodlice, a seafloor scavenger that can survive long periods without food.";

export const metadata: Metadata = buildArticleMetadata({
  title: TITLE,
  description: DESC,
  path: PATH,
  publishedTime: "2026-06-19",
  modifiedTime: "2026-06-19",
  ogImage: getAnimalOgImage("giant-isopod"),
});

export default function GiantIsopodPage() {
  return (
    <AnimalProfileLayout
      commonName="Giant Isopod"
      scientificName="genus Bathynomus"
      pageTitle={TITLE}
      description={DESC}
      path={PATH}
      parentCategory="Marine Animals"
      parentCategoryHref="/animal-encyclopedia/marine-animals"
      tags={["Marine invertebrate", "Crustacean", "Deep sea"]}
      image={getAnimalImage("giant-isopod") ?? undefined}
      galleryImages={getAnimalGalleryImages("giant-isopod")}
      sources={ANIMAL_SOURCES["giant-isopod"]}
      publishedDate="2026-06-19"
      modifiedDate="2026-06-19"
      overview={
        <>
          <p>
            Giant isopods (genus <em>Bathynomus</em>) are large crustaceans of the
            deep sea — distant marine relatives of the woodlice (pill bugs) found in
            gardens. Encased in a segmented, armoured exoskeleton with many legs and
            large compound eyes, they are a striking example of &ldquo;deep-sea
            gigantism,&rdquo; in which some deep-water animals grow far larger than
            their shallow-water relatives.
          </p>
          <p>
            They live on the cold, dark seafloor and are best known as patient
            scavengers that can endure long stretches between meals.
          </p>
          <p>
            <strong>Note:</strong> deep-sea animals are difficult to study, and many
            details of giant isopod biology are still being researched. Figures and
            ranges should be treated as general and verified against authoritative
            marine sources.
          </p>
        </>
      }
      habitat={
        <p>
          Giant isopods live on the floor of deep oceans, generally in cold waters
          well below the sunlit zone, across the Atlantic, Pacific, and Indian Oceans
          depending on the species. They favour soft, muddy bottoms where food sinks
          from the waters above.
        </p>
      }
      diet={
        <p>
          Giant isopods are mainly scavengers, feeding on the carcasses of fish,
          whales, squid, and other animals that fall to the seabed (&ldquo;marine
          snow&rdquo; and larger food falls). Because food is scarce in the deep,
          they can gorge when they find a carcass and then survive remarkably long
          periods without eating.
        </p>
      }
      behavior={
        <p>
          Life in the deep sea is slow and energy-conserving. Giant isopods move
          along the bottom searching for food and can roll up for protection, much
          like their land relatives. Their large eyes help detect the faint light and
          movement of the deep, and they are thought to be long-lived and slow-growing,
          as is typical of deep-sea animals.
        </p>
      }
      humanInteraction={
        <p>
          Giant isopods are rarely encountered by people except through deep-sea
          trawling, research expeditions, and aquarium displays, where their unusual
          appearance makes them popular. They are not currently a major conservation
          focus, but deep-sea habitats overall are increasingly affected by human
          activity. Consult authoritative marine sources for current information.
        </p>
      }
      faqs={[
        {
          question: "Are giant isopods related to woodlice?",
          answer:
            "Yes — distantly. Giant isopods are crustaceans in the same broad group (order Isopoda) as the woodlice or pill bugs found on land. The deep-sea giants are simply far larger marine members of that group, an example of deep-sea gigantism.",
        },
        {
          question: "How can giant isopods survive so long without food?",
          answer:
            "The deep sea offers little food, so giant isopods are adapted to feast when a carcass arrives and then live on those reserves with a very slow metabolism. Individuals in captivity have been recorded going extraordinarily long periods between meals.",
        },
        {
          question: "What do giant isopods eat?",
          answer:
            "Mostly carrion. They scavenge the bodies of fish, whales, squid, and other animals that sink to the seafloor, and they will also take some slow-moving live prey. This scavenging role helps recycle nutrients in the deep sea.",
        },
        {
          question: "How deep do giant isopods live?",
          answer:
            "They are bottom-dwellers of the deep ocean, generally found well below the sunlit surface waters, with the exact depth varying by species. Because the deep sea is hard to study, precise ranges should be checked against current marine references.",
        },
      ]}
      quickFacts={[
        { label: "Group", value: "Genus Bathynomus (order Isopoda)" },
        { label: "Class", value: "Malacostraca (crustaceans)" },
        { label: "Relatives", value: "Woodlice / pill bugs" },
        { label: "Diet", value: "Mainly scavenger (carrion)" },
        { label: "Notable for", value: "Deep-sea gigantism; long fasts" },
        { label: "Habitat", value: "Deep ocean floor" },
        { label: "Range", value: "Atlantic, Pacific & Indian Oceans" },
        { label: "Status", value: "Not well assessed (deep-sea)" },
      ]}
      relatedLinks={[
        { label: "Crab Profile", href: "/animals/crab", description: "Another crustacean group" },
        { label: "Lobster Profile", href: "/animals/lobster", description: "A large crustacean relative" },
        { label: "Ocean fauna by depth", href: "/fauna/ocean", description: "How life changes with depth" },
        { label: "Dumbo Octopus Profile", href: "/animals/dumbo-octopus", description: "Another deep-sea animal" },
        { label: "Marine Animals", href: "/animal-encyclopedia/marine-animals" },
      ]}
    />
  );
}
