import type { Metadata } from "next";
import AnimalProfileLayout from "@/components/AnimalProfileLayout";
import { ANIMAL_SOURCES } from "@/lib/educational/animal-sources";
import { getAnimalGalleryImages, getAnimalImage, getAnimalOgImage } from "@/lib/images/animal-images";
import { buildArticleMetadata } from "@/lib/metadata";

const PATH = "/animals/tiger-salamander";
const TITLE = "Tiger Salamander — Profile, Burrowing Amphibian & Life Cycle";
const DESC =
  "Explore the tiger salamander (Ambystoma tigrinum): one of the largest land salamanders in North America — a burrowing, blotched amphibian and close relative of the axolotl.";

export const metadata: Metadata = buildArticleMetadata({
  title: TITLE,
  description: DESC,
  path: PATH,
  publishedTime: "2026-06-21",
  modifiedTime: "2026-06-21",
  ogImage: getAnimalOgImage("tiger-salamander"),
});

export default function TigerSalamanderPage() {
  return (
    <AnimalProfileLayout
      commonName="Tiger Salamander"
      scientificName="Ambystoma tigrinum"
      pageTitle={TITLE}
      description={DESC}
      path={PATH}
      parentCategory="Reptiles & Amphibians"
      parentCategoryHref="/animal-encyclopedia/reptiles"
      tags={["Amphibian", "Salamander", "North America"]}
      image={getAnimalImage("tiger-salamander") ?? undefined}
      galleryImages={getAnimalGalleryImages("tiger-salamander")}
      sources={ANIMAL_SOURCES["tiger-salamander"]}
      publishedDate="2026-06-21"
      modifiedDate="2026-06-21"
      overview={
        <>
          <p>
            The tiger salamander (<em>Ambystoma tigrinum</em>) is one of the largest
            land-dwelling salamanders in North America — a sturdy, broad-headed amphibian
            with smooth, moist skin marked by yellow or olive blotches and bars on a dark
            background, the pattern that gives it its name. It belongs to the mole
            salamanders (genus <em>Ambystoma</em>), the same group as the famous axolotl, and
            like them it spends much of its life hidden underground.
          </p>
          <p>
            Tiger salamanders are rarely seen because they live in burrows and emerge mainly
            on damp nights and to breed, returning to ponds to lay their eggs.
          </p>
          <p>
            <strong>Note:</strong> the tiger salamander group includes several closely
            related forms; details here use Ambystoma tigrinum broadly. Treat general
            statements as approximate and verify against authoritative sources.
          </p>
        </>
      }
      habitat={
        <p>
          Tiger salamanders are widespread across much of North America, from open grassland
          and forest to farmland and semi-arid areas, wherever there is suitable soil for
          burrowing and ponds or other still water for breeding. The adults live mostly
          underground in burrows (their own or those of other animals), while the larvae
          develop in water.
        </p>
      }
      diet={
        <p>
          Tiger salamanders are carnivores. Adults eat worms, insects, slugs, and other
          invertebrates, and large individuals may take small vertebrates such as other
          amphibians. The aquatic larvae are voracious predators of aquatic invertebrates and
          smaller larvae, and where crowded, some larvae can even develop into cannibalistic
          forms with larger heads.
        </p>
      }
      behavior={
        <p>
          Tiger salamanders are mostly nocturnal and secretive, spending the day in burrows
          and coming out on rainy or humid nights to feed. They breed by migrating to ponds,
          often after rains, where females lay eggs that hatch into gilled aquatic larvae;
          these usually transform into terrestrial adults, though in some populations and
          conditions individuals may keep their gills and stay aquatic (neoteny), as their
          axolotl relatives do permanently. Tiger salamanders can be long-lived for an
          amphibian.
        </p>
      }
      humanInteraction={
        <p>
          Tiger salamanders are harmless and ecologically useful, eating pest invertebrates,
          and they are familiar to many people who find them after rains or as pond larvae.
          Like all amphibians they are sensitive to pollution, habitat loss, road deaths, and
          disease, and the movement of larvae as fishing bait can spread sickness — so they
          should not be relocated. Consult AmphibiaWeb and the IUCN Red List for current
          status.
        </p>
      }
      faqs={[
        {
          question: "Is the tiger salamander related to the axolotl?",
          answer:
            "Yes, closely. Both belong to the mole salamander genus Ambystoma. The key difference is in their life cycle: tiger salamanders usually transform from gilled aquatic larvae into land-living adults, while the axolotl normally keeps its gills and stays aquatic for life (a condition called neoteny). Some tiger salamanders can also remain aquatic under certain conditions.",
        },
        {
          question: "How big do tiger salamanders get?",
          answer:
            "Tiger salamanders are among the largest land salamanders in North America, with sturdy bodies that can reach a substantial size for an amphibian. Their broad heads, robust build, and bold yellow-on-dark blotches make them distinctive when they do appear above ground.",
        },
        {
          question: "Where do tiger salamanders spend their time?",
          answer:
            "Mostly underground. Adult tiger salamanders live in burrows and are rarely seen, emerging mainly on damp or rainy nights to feed and migrating to ponds to breed. Their larvae, by contrast, live in the water until they transform. This hidden, burrowing lifestyle is why many people only encounter them after rains.",
        },
        {
          question: "What do tiger salamanders eat?",
          answer:
            "They are carnivores. Adults eat worms, insects, slugs, and other invertebrates, and big ones may take small vertebrates. The aquatic larvae are hungry predators of small water creatures, and in crowded conditions some larvae even become cannibals with enlarged heads.",
        },
      ]}
      quickFacts={[
        { label: "Scientific name", value: "Ambystoma tigrinum" },
        { label: "Class", value: "Amphibia (mole salamander)" },
        { label: "Relatives", value: "Axolotl (same genus)" },
        { label: "Diet", value: "Carnivore (worms, insects, small prey)" },
        { label: "Lifestyle", value: "Burrowing; breeds in ponds" },
        { label: "Larvae", value: "Aquatic; usually transform to adults" },
        { label: "Range", value: "Much of North America" },
        { label: "Status", value: "Verify (amphibian — sensitive)" },
      ]}
      relatedLinks={[
        { label: "Axolotl Profile", href: "/animals/axolotl", description: "Its permanently aquatic relative" },
        { label: "Fire Salamander Profile", href: "/animals/fire-salamander", description: "Another striking salamander" },
        { label: "Hellbender Profile", href: "/animals/hellbender", description: "A giant aquatic salamander" },
        { label: "Fauna by Continent", href: "/fauna/continents", description: "North American fauna in context" },
        { label: "Reptiles & Amphibians", href: "/animal-encyclopedia/reptiles" },
      ]}
    />
  );
}
