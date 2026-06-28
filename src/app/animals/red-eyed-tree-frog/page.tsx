import type { Metadata } from "next";
import AnimalProfileLayout from "@/components/AnimalProfileLayout";
import { ANIMAL_SOURCES } from "@/lib/educational/animal-sources";
import { getAnimalGalleryImages, getAnimalImage, getAnimalOgImage } from "@/lib/images/animal-images";
import { buildArticleMetadata } from "@/lib/metadata";

const PATH = "/animals/red-eyed-tree-frog";
const TITLE = "Red-Eyed Tree Frog: Facts, Habitat & Behavior";
const DESC =
  "Meet the red-eyed tree frog (Agalychnis callidryas), an arboreal Central American amphibian with red eyes and blue flanks. A calm, factual guide.";

export const metadata: Metadata = buildArticleMetadata({
  title: TITLE,
  description: DESC,
  path: PATH,
  publishedTime: "2026-06-28",
  modifiedTime: "2026-06-28",
  ogImage: getAnimalOgImage("red-eyed-tree-frog"),
});

export default function RedEyedTreeFrogPage() {
  return (
    <AnimalProfileLayout
      commonName="Red-eyed Tree Frog"
      scientificName="Agalychnis callidryas"
      pageTitle={TITLE}
      description={DESC}
      path={PATH}
      parentCategory="Reptiles & Amphibians"
      parentCategoryHref="/animal-encyclopedia/reptiles"
      tags={["Amphibian","Frog","Arboreal"]}
      image={getAnimalImage("red-eyed-tree-frog") ?? undefined}
      galleryImages={getAnimalGalleryImages("red-eyed-tree-frog")}
      sources={ANIMAL_SOURCES["red-eyed-tree-frog"]}
      publishedDate="2026-06-28"
      modifiedDate="2026-06-28"
      overview={
        <>
          <p>
            The red-eyed tree frog (<em>Agalychnis callidryas</em>) is one of the most recognisable amphibians in the world, a small, vividly coloured frog of Central American rainforests. By day it rests folded against a leaf with its limbs tucked in and its eyes closed, appearing almost entirely leaf-green. When disturbed it can suddenly reveal bright red eyes, orange feet and blue-and-yellow flanks, a burst of colour that has made it a favourite subject of nature photography and a familiar emblem of tropical rainforest conservation.
          </p>
          <p>
            It is an arboreal (tree-dwelling) species, spending most of its life in the vegetation above forest pools and streams. Adults are nocturnal hunters of small invertebrates, while the species&#39; breeding behaviour, in which eggs are laid on leaves overhanging water and the hatching tadpoles drop into the pool below, is among the better-studied life histories of any tropical frog.
          </p>
          <p>
            Despite its dramatic appearance, the red-eyed tree frog is not a dangerously poisonous frog and is not a venomous animal. Its sudden colours are thought to startle rather than harm. This profile is an educational overview of the wild animal and its biology; it is not a care, keeping, or handling guide.
          </p>
          <h3>Taxonomy and animal group</h3>
          <p>
            The red-eyed tree frog is an amphibian, not a reptile. It belongs to the order Anura (frogs and toads) within the class Amphibia. Its scientific name is <em>Agalychnis callidryas</em>, placing it in the genus <em>Agalychnis</em>, a group of Central and South American leaf frogs traditionally grouped within the family Phyllomedusidae (the leaf frogs), which is closely related to the tree frog family Hylidae and has at times been treated as a subfamily within it. The common name &quot;tree frog&quot; is applied across several frog families and refers to a climbing way of life rather than a single lineage, so not every animal called a tree frog is a close relative of <em>Agalychnis callidryas</em>. The species was formally described in the 19th century; consult a current taxonomic database such as AmphibiaWeb for the most up-to-date classification.
          </p>
          <h3>Appearance and recognition</h3>
          <p>
            Adults are small and slender, with females typically larger than males. The dominant body colour is a bright leaf-green, sometimes with pale spots, which provides excellent camouflage against foliage when the frog is at rest. The most famous features appear when the animal is alert or moving: large, protruding eyes with vivid red irises and vertically slit pupils, orange or reddish toes, and flanks marked with blue and cream barring. The toes end in expanded, disc-shaped pads that grip smooth leaves and bark. When the frog folds itself down against a leaf to sleep, it covers these bright areas, so the conspicuous colours are normally hidden and only flash into view in motion or when the frog is disturbed.
          </p>
        </>
      }
      habitat={
        <p>
          The red-eyed tree frog is found in parts of the humid lowland and lower-montane rainforests of Central America, generally from southern Mexico through Central America to around Panama, with the exact distribution varying by region and source; this is not a complete range map. It is strongly associated with warm, wet forest near ponds, swamps, and slow streams, where standing or still water is available for breeding. Individuals spend the day resting on the undersides of leaves in the canopy and understorey and move through the vegetation at night. Like most amphibians, the species depends on moisture and on suitable breeding water, which makes it sensitive to the drying or clearing of its forest habitat.
        </p>
      }
      diet={
        <p>
          Adult red-eyed tree frogs are carnivores that feed mainly on insects and other small invertebrates, such as crickets, moths, flies, and similar prey, which they capture at night with a quick flick of a sticky tongue. Prey size is limited by the frog&#39;s own small body. The aquatic tadpole stage feeds very differently from the adult, taking in fine particles and organic matter suspended in or settled within the breeding pool before metamorphosis. This shift from a water-feeding larva to an insect-eating adult is typical of frogs in general.
        </p>
      }
      behavior={
        <>
          <p>
            The species is nocturnal, resting motionless and camouflaged by day and becoming active after dark to feed and, in the breeding season, to call and mate. A widely studied feature of its behaviour is deimatic, or startle, display: when a resting frog is disturbed, it can abruptly open its red eyes and reveal its orange feet and blue flanks. The leading interpretation is that this momentary flash of colour can startle or confuse a predator, buying a fraction of a second for the frog to leap to safety, after which it again becomes a plain green leaf-shape. Males produce calls during the breeding season, and breeding activity often intensifies with rainfall.
          </p>
          <p>
            The red-eyed tree frog has a distinctive reproductive ecology. Females lay clutches of eggs in a jelly mass on leaves that overhang a pond or pool, often with a male clasped on the back. When the eggs hatch, the emerging tadpoles slide and drop from the leaf into the water below, where they complete development before metamorphosing into froglets. Researchers have documented that the embryos can hatch early in response to threats, an example of environmentally cued hatching. Within the forest food web the frog is both predator and prey: it helps control insect populations while serving as food for snakes, birds, and other animals. As a moisture-dependent amphibian, it is also part of the broader group of species often regarded as indicators of environmental health.
          </p>
        </>
      }
      humanInteraction={
        <p>
          The red-eyed tree frog is best known to people as a symbol of tropical rainforests and a popular subject in photography, documentaries, and educational materials. It is a wild animal rather than a pet, and the most useful way for the public to support it is by appreciating it in its natural setting and supporting habitat conservation. This profile does not provide guidance on catching, handling, or keeping the species. Anyone with a specific concern, such as questions about wildlife encountered in the field, should contact local wildlife authorities or qualified professionals, and reputable scientific resources such as AmphibiaWeb and the IUCN Red List are good starting points for further, species-specific information.
        </p>
      }
      extraSections={[
        {
          heading: "Skin secretions & toxins",
          body: (
            <p>
              The red-eyed tree frog is not venomous and is not considered a dangerously poisonous species. Like many amphibians, its skin contains glands that produce secretions and small peptide compounds, which are part of normal amphibian skin biology and can help protect against microbes or moisture loss, but it is not one of the highly toxic frogs such as the poison-dart frogs of the family Dendrobatidae. Its principal defences are camouflage and the sudden display of bright colours rather than chemical toxicity. This is a general biological description only and is not medical, handling, or first-aid information; questions about any wildlife contact should be directed to a qualified professional or health authority.
            </p>
          ),
        },
        {
          heading: "Conservation context",
          body: (
            <p>
              The red-eyed tree frog has generally been assessed by the IUCN as a widespread species of Least Concern, reflecting its broad distribution and presence in many protected areas. Conservation assessments can change over time, however, and amphibians as a group face serious global pressures from habitat loss, pollution, climate change, and disease, including the chytrid fungus that has affected many frog species. For the current listing and the most recent population information for this species, consult the IUCN Red List at iucnredlist.org. Maintaining intact, moist rainforest with breeding water is the most important factor for the long-term security of local populations.
            </p>
          ),
        },
      ]}
      faqs={[
        {
          question: "Is the red-eyed tree frog poisonous or dangerous to people?",
          answer:
            "No. The red-eyed tree frog is not venomous and is not regarded as a dangerously poisonous species. Like most amphibians its skin produces ordinary secretions, but it is not in the same toxic category as poison-dart frogs. Its main defences are camouflage and a startling flash of colour, not chemical toxicity. This is general biology only, not medical or handling advice.",
        },
        {
          question: "Why does the red-eyed tree frog have such bright red eyes?",
          answer:
            "The vivid red eyes are linked to a startle, or deimatic, display. When the frog is disturbed it can suddenly open its eyes and reveal its red, orange and blue colours, which may briefly confuse a predator and give the frog a chance to leap away before settling back into its plain green resting form.",
        },
        {
          question: "How do red-eyed tree frogs lay their eggs?",
          answer:
            "Females lay clutches of eggs in a jelly mass on leaves overhanging a pond or pool, often while a male clasps the back. When the eggs hatch, the tadpoles drop from the leaf into the water below to continue developing. The embryos can even hatch early if threatened, an example of environmentally cued hatching.",
        },
        {
          question: "Is the red-eyed tree frog endangered?",
          answer:
            "It has generally been assessed by the IUCN as a widespread species of Least Concern. That said, assessments can change and amphibians worldwide face pressures from habitat loss and disease, so the current listing should always be checked on the IUCN Red List at iucnredlist.org.",
        },
      ]}
      quickFacts={[
        { label: "Scientific name", value: "Agalychnis callidryas" },
        { label: "Group", value: "Frog (amphibian, order Anura)" },
        { label: "Range", value: "Parts of Central American rainforests, southern Mexico to around Panama; varies by region (not a complete range map)" },
        { label: "Habitat", value: "Humid lowland and lower-montane rainforest near ponds and pools" },
        { label: "Diet", value: "Carnivore: insects and small invertebrates; tadpoles feed in water" },
        { label: "Conservation", value: "Generally assessed by the IUCN as Least Concern; verify current status on the IUCN Red List" },
      ]}
      relatedLinks={[
        { label: "Reptiles & Amphibians", href: "/animal-taxonomy/reptiles-amphibians", description: "Snakes, lizards, turtles, crocodilians, frogs & salamanders" },
        { label: "Tree Frog", href: "/animals/tree-frog", description: "Tree frogs as a group" },
        { label: "Poison Dart Frog", href: "/animals/poison-dart-frog", description: "Another rainforest frog" },
        { label: "Glass Frog", href: "/animals/glass-frog", description: "A translucent rainforest frog" },
        { label: "Reptiles & Amphibians", href: "/animal-encyclopedia/reptiles" },
      ]}
    />
  );
}
