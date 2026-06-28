import type { Metadata } from "next";
import AnimalProfileLayout from "@/components/AnimalProfileLayout";
import { ANIMAL_SOURCES } from "@/lib/educational/animal-sources";
import { getAnimalGalleryImages, getAnimalImage, getAnimalOgImage } from "@/lib/images/animal-images";
import { buildArticleMetadata } from "@/lib/metadata";

const PATH = "/animals/nectar-bat";
const TITLE = "Nectar Bat: Night Pollinator Profile";
const DESC =
  "Nectar bats (e.g. Glossophaginae) feed on nectar with long tongues and can pollinate night-blooming plants like agave and some cacti in specific regions.";

export const metadata: Metadata = buildArticleMetadata({
  title: TITLE,
  description: DESC,
  path: PATH,
  publishedTime: "2026-06-28",
  modifiedTime: "2026-06-28",
  ogImage: getAnimalOgImage("nectar-bat"),
});

export default function NectarBatPage() {
  return (
    <AnimalProfileLayout
      commonName="Nectar Bat"
      scientificName="Glossophaginae and other nectar-feeding bats"
      pageTitle={TITLE}
      description={DESC}
      path={PATH}
      parentCategory="Mammals"
      parentCategoryHref="/animal-encyclopedia/mammals"
      tags={["Mammal","Bat","Pollinator"]}
      image={getAnimalImage("nectar-bat") ?? undefined}
      galleryImages={getAnimalGalleryImages("nectar-bat")}
      sources={ANIMAL_SOURCES["nectar-bat"]}
      publishedDate="2026-06-28"
      modifiedDate="2026-06-28"
      overview={
        <>
          <p>
            &quot;Nectar bat&quot; is a common name for several lineages of small bats that feed largely on floral nectar and pollen, using elongated snouts and remarkably long, often brush- or bristle-tipped tongues to reach into flowers. The best-known examples are the New World nectar bats of the subfamily Glossophaginae (within the leaf-nosed bat family <em>Phyllostomidae</em>), found in parts of the Americas. Several Old World fruit bats (family <em>Pteropodidae</em>) have independently evolved similar nectar-feeding habits, a case of convergent evolution rather than close kinship.
          </p>
          <p>
            Because they visit flowers at night, nectar bats are associated with a pollination syndrome sometimes called chiropterophily: pale, night-opening, often musky or fermented-smelling blossoms that produce copious dilute nectar. In the regions where they occur, some nectar bats are considered important pollinators of particular plants, including certain agaves, columnar cacti, and some wild relatives of cultivated plants. Their exact role varies a great deal by bat species, plant species, and locality.
          </p>
          <p>
            This profile treats nectar-feeding bats as an ecological group rather than a single species. Statements here are general, and details differ widely among the many species involved. For the status, range, or biology of any particular bat, consult authoritative species-level references.
          </p>
          <h3>Taxonomy and animal group</h3>
          <p>
            Nectar bat is not a single taxonomic unit but a feeding-based label spanning more than one group. The classic New World nectar bats belong to the subfamily Glossophaginae, part of the large leaf-nosed bat family <em>Phyllostomidae</em>, within the order Chiroptera. Familiar genera include <em>Glossophaga</em>, <em>Leptonycteris</em>, <em>Anoura</em>, and <em>Choeronycteris</em>. In the Old World, a number of nectar-feeding fruit bats in the family <em>Pteropodidae</em> (for example <em>Macroglossus</em> and <em>Eonycteris</em>) fill broadly similar roles, but they are only distantly related to the New World forms. The resemblance in tongue and snout structure reflects convergent evolution toward a nectar diet rather than shared recent ancestry, so the term covers several independent lineages.
          </p>
          <h3>Appearance and recognition</h3>
          <p>
            Nectar bats are generally small, with slender, elongated muzzles that give the face a distinctive narrow profile compared with insect-eating or fruit-eating relatives. Their defining feature is the tongue, which is long and tipped with hair-like papillae or bristles that help mop up nectar; in some species the tongue can be extended a striking distance relative to body length. Teeth are often reduced, fitting a soft, liquid diet. Fur is typically brown or grayish, and wings are adapted for the agile, hovering or near-hovering flight used to feed at flowers. New World glossophagines usually bear the small fleshy nose-leaf characteristic of the leaf-nosed bat family, while Old World nectar-feeding pteropodids lack that structure and have larger eyes. Exact size, coloration, and tongue length vary widely among species.
          </p>
        </>
      }
      habitat={
        <p>
          As a group, nectar bats are tied to warm, largely tropical and subtropical regions where suitable night-blooming flowers are available through the year or seasonally. New World nectar bats of the subfamily Glossophaginae occur across parts of the Americas, ranging through Central and South America, with some species reaching into arid environments of the southern United States and Mexico, where they are associated with agaves and columnar cacti. Old World nectar-feeding fruit bats occur in parts of Africa, South and Southeast Asia, and nearby islands. Within these broad regions they use a variety of settings, including dry scrub, forest, and edges of cultivated land, roosting in caves, hollows, foliage, or buildings depending on the species. Ranges differ greatly from one species to the next; treat any single description as approximate and verify against species-level sources.
        </p>
      }
      diet={
        <p>
          Nectar bats feed mainly on floral nectar and pollen, which supply sugars and, from pollen, an important share of their protein. They hover at or briefly cling to flowers and lap nectar with the long, brush-tipped tongue, swallowing pollen that adheres to the face and fur or is groomed off later. Many species are dietary generalists in practice and also take some insects, and the New World nectar bats, being part of a family that includes fruit-eaters, often eat fruit as well, especially when flowers are scarce. The balance among nectar, pollen, insects, and fruit shifts with season, locality, and species. This flexible feeding makes some nectar bats important visitors to a range of plants while leaving them less rigidly dependent on any single flower than the popular image suggests.
        </p>
      }
      behavior={
        <>
          <p>
            Nectar bats are nocturnal, emerging after dark to forage at flowers and returning to roosts by day. Foraging involves agile flight and, in many species, brief hovering at blossoms; individuals may visit many flowers in a night and move considerable distances between feeding sites. Some species are highly maneuverable, using echolocation (in the New World forms) together with vision and a keen sense of smell to locate flowers, while Old World nectar-feeding fruit bats rely more on sight and scent. Roosting and social behavior vary: some gather in colonies in caves, others shelter in smaller groups in foliage or hollows. Several species in arid regions undertake seasonal movements that track the blooming of food plants, so their presence in a given area can be strongly seasonal. Reproductive timing in many species is linked to periods of peak flowering.
          </p>
          <p>
            Beyond their visits to flowers, nectar bats are woven into the wider ecology of the warm regions they inhabit. By moving among widely spaced plants, some species can carry pollen over distances that benefit plants growing in sparse or patchy populations, such as scattered desert columnar cacti and agaves. Where they also eat fruit, the same bats can help disperse seeds, contributing to plant regeneration. As consumers, they are in turn prey for owls, snakes, and other predators, and their roosts can support associated organisms. The strength and importance of these roles differ by species and place, and they form part of larger networks involving many other nectar feeders, fruit eaters, and pollinators rather than standing alone.
          </p>
        </>
      }
      humanInteraction={
        <p>
          Nectar bats are shy, wild, nocturnal animals that feed at flowers and generally avoid people; they are not pets and are not kept or managed like honey bees. Most live out of sight, and casual encounters are uncommon. As with any wild mammal, bats are best observed at a distance and not handled. If you find an injured, grounded, or roosting bat, or have a question about bats near a home, contact your local wildlife authority, a licensed wildlife rehabilitator, or another qualified professional rather than attempting to deal with the animal yourself. This page is educational and does not offer guidance on handling, removing, attracting, or keeping bats; for any health-related concern, consult a qualified medical or public-health professional.
        </p>
      }
      extraSections={[
        {
          heading: "Pollination role",
          body: (
            <p>
              In the regions where they occur, some nectar bats can act as effective pollinators, and for certain plants their role is genuinely well established. As a bat moves between night-opening flowers to feed, pollen carried on its face and fur can be transferred to the next blossom. Particular nectar bats are documented as significant pollinators of some agaves and columnar cacti in arid parts of the Americas, and various night-blooming plants in the Old World tropics rely substantially on bat visits. Even so, pollination is an ecological interaction, not an automatic outcome: not every flower visit results in pollination, the contribution varies by bat species, plant, and locality, and many flowers are visited by several kinds of animals. It is most accurate to say that nectar bats are important pollinators of some plants in specific places, rather than to generalize the role to all bats, all flowers, or all regions.
            </p>
          ),
        },
        {
          heading: "Conservation context",
          body: (
            <p>
              Conservation status differs greatly among the many bats that feed on nectar, so no single category applies to the group as a whole. Some species are widespread and currently of low concern, while others have more restricted ranges or face pressures such as habitat loss or roost disturbance, and a few have drawn particular conservation attention. Population trends, where known, also vary by species and region. Because these assessments change over time, this profile does not assign a status to nectar bats collectively; for any specific species, consult the IUCN Red List and other authoritative sources for the current, attributed status and trend.
            </p>
          ),
        },
      ]}
      faqs={[
        {
          question: "Are all nectar bats the same kind of bat?",
          answer:
            "No. \"Nectar bat\" is a feeding-based common name covering more than one group. The best-known are the New World nectar bats of the subfamily Glossophaginae (family Phyllostomidae) in the Americas, while several Old World fruit bats (family Pteropodidae) feed on nectar too. The two are only distantly related, and their similar tongues and snouts reflect convergent evolution toward a nectar diet.",
        },
        {
          question: "Do nectar bats really pollinate plants?",
          answer:
            "In the regions where they occur, some nectar bats can act as effective pollinators, and for certain plants their role is well established — for example some agaves and columnar cacti in arid parts of the Americas. However, pollination varies by bat species, plant, and place, and not every flower visit results in pollination, so it is best not to generalize the role to all bats or all flowers.",
        },
        {
          question: "What do nectar bats eat?",
          answer:
            "Mainly floral nectar and pollen, lapped up with a long, brush-tipped tongue; pollen also provides much of their protein. Many also take some insects, and the New World species often eat fruit as well, especially when flowers are scarce. The mix shifts with season, locality, and species.",
        },
        {
          question: "Where do nectar bats live?",
          answer:
            "They are found in warm, mostly tropical and subtropical regions. New World nectar bats range across parts of the Americas, including into arid areas of Mexico and the southern United States, while Old World nectar-feeding fruit bats occur in parts of Africa and South and Southeast Asia. Ranges differ widely by species, so any single description is approximate.",
        },
      ]}
      quickFacts={[
        { label: "Scientific group", value: "New World subfamily Glossophaginae (Phyllostomidae); plus nectar-feeding Old World Pteropodidae" },
        { label: "Pollinator group", value: "Bat (nectar-feeding bats)" },
        { label: "Pollination role", value: "Can pollinate some night-blooming plants (e.g. agave, certain cacti); varies by species and region" },
        { label: "Range", value: "Warm regions of the Americas (New World) and parts of Africa and Asia (Old World); varies by species" },
        { label: "Diet / feeding", value: "Mainly nectar and pollen; also insects and, in some, fruit" },
        { label: "Conservation note", value: "Varies by species; no single status for the group — check the IUCN Red List for current, attributed status" },
      ]}
      relatedLinks={[
        { label: "Pollinators", href: "/wildlife/pollinators", description: "Bees, butterflies, birds, bats, flies & beetles" },
        { label: "Bat", href: "/animals/bat", description: "Bats as a group" },
        { label: "Hummingbird", href: "/animals/hummingbird", description: "A nectar-feeding bird" },
        { label: "Bee", href: "/animals/bee", description: "An insect pollinator" },
        { label: "Mammals", href: "/animal-encyclopedia/mammals" },
      ]}
    />
  );
}
