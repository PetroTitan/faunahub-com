import type { Metadata } from "next";
import AnimalProfileLayout from "@/components/AnimalProfileLayout";
import { ANIMAL_SOURCES } from "@/lib/educational/animal-sources";
import { getAnimalGalleryImages, getAnimalImage, getAnimalOgImage } from "@/lib/images/animal-images";
import { buildArticleMetadata } from "@/lib/metadata";

const PATH = "/animals/caecilian";
const TITLE = "Caecilian: Limbless Burrowing Amphibians";
const DESC =
  "Caecilians (order Gymnophiona) are limbless, mostly burrowing amphibians of wet tropics — not worms or snakes. Learn their biology, habitat, and ecology.";

export const metadata: Metadata = buildArticleMetadata({
  title: TITLE,
  description: DESC,
  path: PATH,
  publishedTime: "2026-06-28",
  modifiedTime: "2026-06-28",
  ogImage: getAnimalOgImage("caecilian"),
});

export default function CaecilianPage() {
  return (
    <AnimalProfileLayout
      commonName="Caecilian"
      scientificName="order Gymnophiona"
      pageTitle={TITLE}
      description={DESC}
      path={PATH}
      parentCategory="Reptiles & Amphibians"
      parentCategoryHref="/animal-encyclopedia/reptiles"
      tags={["Amphibian","Gymnophiona","Limbless"]}
      image={getAnimalImage("caecilian") ?? undefined}
      galleryImages={getAnimalGalleryImages("caecilian")}
      sources={ANIMAL_SOURCES["caecilian"]}
      publishedDate="2026-06-28"
      modifiedDate="2026-06-28"
      overview={
        <>
          <p>
            Caecilians are a group of limbless amphibians that make up the order <em>Gymnophiona</em>, the least familiar of the three living amphibian lineages — the other two being frogs and toads (order Anura) and salamanders and newts (order Caudata). Their long, segmented-looking bodies and burrowing habits give them a superficial resemblance to earthworms or small snakes, but this similarity is a case of convergent evolution rather than close relationship. Caecilians are true amphibians, not worms (which are invertebrates) and not snakes (which are reptiles).
          </p>
          <p>
            Most caecilians live hidden in moist tropical soils, leaf litter, and the banks of streams, which is one reason they are so rarely seen even where they are common. Their anatomy reflects a life spent pushing through soil or sediment: a compact skull, reduced or skin-covered eyes, and a distinctive pair of small sensory tentacles on the head that help them sense their surroundings in the dark. A handful of lineages are aquatic as adults rather than soil-dwelling, but the burrowing body plan dominates the order.
          </p>
          <p>
            Because <em>Gymnophiona</em> contains roughly 200 described species spread across multiple families and several continents, this profile describes the group as a whole. Individual species differ widely in size, range, reproductive strategy, and conservation outlook, so any single statistic or status given here should be read as a general pattern rather than a precise figure for every caecilian.
          </p>
          <h3>Taxonomy and animal group</h3>
          <p>
            Caecilians form the order <em>Gymnophiona</em> (sometimes called Apoda), one of the three living orders within the class Amphibia. They are amphibians, clearly distinct from the limbless reptiles (snakes and certain lizards) and from segmented worms, which they only superficially resemble. The order is divided among several families — examples include <em>Caeciliidae</em>, <em>Ichthyophiidae</em>, <em>Typhlonectidae</em>, <em>Dermophiidae</em>, and <em>Rhinatrematidae</em> — and contains on the order of 200 described species, with new ones still being described. Because classification within the order continues to be revised as researchers study DNA and anatomy, family-level and species-level groupings should be treated as the current scientific consensus rather than a fixed scheme. This page does not assign one taxonomic rank or status to every member of the order.
          </p>
          <h3>Appearance and recognition</h3>
          <p>
            A caecilian&#39;s most striking feature is the absence of legs: the body is a smooth, elongated cylinder, typically ringed by grooves called annuli that give a segmented appearance somewhat like an earthworm. Coloration ranges from drab grey, brown, and black to surprisingly bright blues, purples, and yellows in some species. Adult body length varies enormously across the order, from small species only a few centimetres long to large aquatic and soil-dwelling forms reaching well over a metre. The head is usually compact and wedge- or shovel-shaped, an adaptation that helps with burrowing. Eyes are reduced and in many species are covered by skin or even bone, so vision plays a limited role. A defining feature unique to the group is a pair of small, retractable sensory tentacles positioned between the eye and the nostril, which appear to help detect chemical and tactile cues underground.
          </p>
        </>
      }
      habitat={
        <p>
          Caecilians are found in parts of the wet tropics and subtropics, including regions of Central and South America, sub-Saharan Africa, the Seychelles, and South and Southeast Asia; they are generally absent from cooler temperate zones and from Australia. This is a broad pattern across the order, not a complete or precise range map, and the distribution of any individual species is much narrower. Most species are fossorial, living in damp soil, leaf litter, rotting wood, and the moist margins of forests and streams where they can burrow and stay hidden. A smaller number of species, such as members of <em>Typhlonectidae</em>, are aquatic and inhabit streams and slow water bodies. Moisture is the common thread: like other amphibians, caecilians depend on damp conditions and permeable skin, so they are closely tied to humid microhabitats.
        </p>
      }
      diet={
        <p>
          Caecilians are predators that feed on a range of small soil-dwelling and aquatic animals. Their diet commonly includes earthworms, insect larvae, termites, and other invertebrates, and larger species may take small vertebrates. They locate prey largely by chemical and tactile senses rather than sight, using the sensory tentacles and a keen sense of smell to navigate their dark environment. The jaws of caecilians are notably powerful for their size and bear small, recurved teeth suited to gripping slippery prey such as worms. In aquatic species, prey is taken in the water column or along stream beds. As with most amphibians, the specific prey items vary by species, body size, and the local availability of food.
        </p>
      }
      behavior={
        <>
          <p>
            Caecilians are secretive and largely solitary, spending most of their lives underground or in sediment, which makes their behavior difficult to observe in the wild. They move through soil with a distinctive concertina-like or undulating motion, and the reinforced, often blunt head is used to push and compact the surrounding earth. Reproduction is varied and unusually elaborate for amphibians: some species lay eggs, while many give birth to live young, and fertilization is internal — a trait that sets them apart from most frogs and salamanders. One of the most remarkable behaviors documented in the group is dermatophagy, in which the young of certain species feed on a specially modified, nutrient-rich outer layer of the mother&#39;s skin during their early development. This intensive parental investment is exceptional among amphibians and is one reason caecilians attract scientific attention well out of proportion to how often they are seen.
          </p>
          <p>
            As burrowing predators of soil invertebrates, caecilians occupy a role in tropical ecosystems that is comparable in some ways to that of other fossorial animals: they help regulate populations of worms, insect larvae, and other small soil fauna, and in turn serve as prey for snakes, birds, and other predators that can reach them. Their tunneling and movement through soil may contribute, on a small scale, to the mixing and aeration of the substrate, though their ecological influence is still not fully quantified because they are hard to study. Like other amphibians, their permeable skin and dependence on moist conditions make them sensitive to changes in soil humidity, water quality, and habitat structure, which gives them potential value as indicators of environmental change in the humid tropics where they live.
          </p>
        </>
      }
      humanInteraction={
        <p>
          Caecilians are rarely encountered by people because they spend their lives hidden in soil, leaf litter, and stream sediment, and they are not aggressive toward humans. Most people who do see one come across it after heavy rain or while digging in tropical gardens or agricultural soil. There is no need to handle a caecilian, and this page does not offer handling, capture, or removal instructions; observing quietly and letting the animal continue on its way is appropriate. They are wild animals rather than pets, and nothing here should be read as guidance on keeping them. If you have a specific concern about wildlife on your property, contact local wildlife authorities or a qualified professional, and direct any health-related questions to medical professionals.
        </p>
      }
      extraSections={[
        {
          heading: "Skin secretions",
          body: (
            <p>
              Caecilians are not venomous in the way that, for example, vipers are: they do not have fangs that inject venom into prey or predators. Like many amphibians, however, their skin contains glands, and researchers have documented skin secretions in some species that appear to have defensive or noxious properties. There has also been scientific interest in dental glands in certain caecilians and whether their secretions play a chemical role, but this remains an area of ongoing study rather than a settled fact about the whole order. In general terms, caecilians are best understood as secretive burrowers that rely on hiding and their skin chemistry for defense rather than on any offensive venom. This page does not provide medical, first-aid, or potency information; questions about any animal secretion and human health should go to qualified medical professionals.
            </p>
          ),
        },
        {
          heading: "Conservation context",
          body: (
            <p>
              Because <em>Gymnophiona</em> spans roughly 200 species across several families and continents, there is no single conservation status that applies to the whole order, and this page does not assign one. Individual species range widely in their assessed status: some are reasonably widespread, while others are localized, poorly known, or considered at risk. Many caecilians are classified by the IUCN as Data Deficient, reflecting how little is known about their distributions and population trends rather than confirmed security. For amphibians generally, documented pressures include habitat loss, changes in land use, pollution, and disease, and these can affect caecilians in tropical regions. For the current listing of any particular species, consult the IUCN Red List, which is regularly updated as new information becomes available.
            </p>
          ),
        },
      ]}
      faqs={[
        {
          question: "Is a caecilian a worm, a snake, or an amphibian?",
          answer:
            "A caecilian is an amphibian. It belongs to the order Gymnophiona, alongside frogs and salamanders as one of the three living amphibian groups. Its long, limbless body looks like an earthworm or a small snake, but that resemblance is convergent evolution: worms are invertebrates and snakes are reptiles, while caecilians are true amphibians with permeable skin and amphibian biology.",
        },
        {
          question: "Why do caecilians have such tiny eyes?",
          answer:
            "Caecilians live mostly underground or in sediment, where vision is of little use. Over evolutionary time their eyes became reduced, and in many species they are covered by skin or bone. Instead of relying on sight, caecilians use a strong sense of smell and a unique pair of small sensory tentacles on the head to detect chemical and tactile cues in the dark.",
        },
        {
          question: "What is dermatophagy in caecilians?",
          answer:
            "Dermatophagy is a parental-care behavior seen in some caecilian species, in which the young feed on a specially modified, nutrient-rich outer layer of the mother's skin during early development. It is an unusual and intensive form of parental investment for an amphibian, and it is one of the features that makes caecilian reproduction a focus of scientific study.",
        },
        {
          question: "Are caecilians dangerous to people?",
          answer:
            "Caecilians are not aggressive toward humans and are rarely encountered because they live hidden in soil and sediment. They are not venomous in the way vipers are, though, like many amphibians, some have skin secretions that may be noxious. They are wild animals, not pets, and this page does not provide handling or medical advice; direct any health concerns to qualified medical professionals.",
        },
      ]}
      quickFacts={[
        { label: "Scientific group", value: "Order Gymnophiona (caecilians)" },
        { label: "Group", value: "Amphibian (not a worm or snake)" },
        { label: "Range", value: "Parts of the wet tropics in the Americas, Africa, the Seychelles, and South/Southeast Asia; varies by species" },
        { label: "Habitat", value: "Moist tropical soils, leaf litter, and stream margins; some species aquatic" },
        { label: "Diet", value: "Earthworms, insect larvae, and other small invertebrates; larger species may take small vertebrates" },
        { label: "Conservation", value: "No single status for the order; many species Data Deficient — consult the IUCN Red List for current listings" },
      ]}
      relatedLinks={[
        { label: "Reptiles & Amphibians", href: "/animal-taxonomy/reptiles-amphibians", description: "Snakes, lizards, turtles, crocodilians, frogs & salamanders" },
        { label: "Salamander", href: "/animals/salamander", description: "Another amphibian group" },
        { label: "Frog", href: "/animals/frog", description: "Frogs and toads" },
        { label: "Newt", href: "/animals/newt", description: "Semi-aquatic amphibians" },
        { label: "Reptiles & Amphibians", href: "/animal-encyclopedia/reptiles" },
      ]}
    />
  );
}
