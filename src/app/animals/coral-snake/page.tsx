import type { Metadata } from "next";
import AnimalProfileLayout from "@/components/AnimalProfileLayout";
import { ANIMAL_SOURCES } from "@/lib/educational/animal-sources";
import { getAnimalGalleryImages, getAnimalImage, getAnimalOgImage } from "@/lib/images/animal-images";
import { buildArticleMetadata } from "@/lib/metadata";

const PATH = "/animals/coral-snake";
const TITLE = "Coral Snake — Bands, Venom & Mimicry";
const DESC =
  "Coral snakes (Micrurus and Micruroides) are banded, secretive New World elapids. A calm, educational overview of their biology, venom, mimicry, and ecology.";

export const metadata: Metadata = buildArticleMetadata({
  title: TITLE,
  description: DESC,
  path: PATH,
  publishedTime: "2026-06-28",
  modifiedTime: "2026-06-28",
  ogImage: getAnimalOgImage("coral-snake"),
});

export default function CoralSnakePage() {
  return (
    <AnimalProfileLayout
      commonName="Coral Snake"
      scientificName="Micrurus / Micruroides"
      pageTitle={TITLE}
      description={DESC}
      path={PATH}
      parentCategory="Reptiles & Amphibians"
      parentCategoryHref="/animal-encyclopedia/reptiles"
      tags={["Reptile","Snake","Venomous"]}
      image={getAnimalImage("coral-snake") ?? undefined}
      galleryImages={getAnimalGalleryImages("coral-snake")}
      sources={ANIMAL_SOURCES["coral-snake"]}
      publishedDate="2026-06-28"
      modifiedDate="2026-06-28"
      overview={
        <>
          <p>
            New World coral snakes are slender, brightly banded elapids placed mainly in the genera <em>Micrurus</em> and <em>Micruroides</em> (family Elapidae). They are best known for bold rings of red, black, and yellow or white, and for a secretive, mostly hidden way of life. This is a group-level educational overview rather than a profile of a single species.
          </p>
          <p>
            Coral snakes are venomous, but they are reclusive and not inherently aggressive. They spend much of their time concealed under leaf litter, logs, or soil, and bites on people are rare and generally defensive. Risk varies by species, situation, and location.
          </p>
          <p>
            This page is educational only. It does not provide medical, first-aid, handling, identification-for-handling, or pet-keeping guidance, and the famous colour rhyme is discussed only as a point of biology — not as a way to judge whether a snake is safe.
          </p>
          <h3>Taxonomy and animal group</h3>
          <p>
            Coral snakes belong to the family Elapidae, the same family that includes cobras, mambas, and sea snakes. In the Americas, the group is divided chiefly between the large genus <em>Micrurus</em> (many species, often called New World coral snakes) and the smaller genus <em>Micruroides</em>, which includes the western or Sonoran coral snake (<em>Micruroides euryxanthus</em>). Confusingly, unrelated snakes in the Old World genus <em>Calliophis</em> and its relatives are also called &quot;coral snakes,&quot; so the common name spans more than one lineage; this profile focuses on the New World <em>Micrurus</em> and <em>Micruroides</em> groups. Because so many species are involved, specific traits vary, and details should be checked against authoritative taxonomic and regional sources.
          </p>
          <h3>Appearance and recognition</h3>
          <p>
            Most New World coral snakes are slim, smooth-scaled snakes with a rounded, blunt head that is barely distinct from the neck, and small eyes. Their hallmark is a pattern of contrasting rings, often red, black, and yellow or white, encircling the body — a classic example of aposematic (warning) colouration. Band arrangement, width, and exact colours differ from species to species and region to region, so pattern alone is not a reliable field guide and should never be used to decide whether a snake is harmless. Several harmless snakes, such as certain kingsnakes and milksnakes, share strikingly similar banded patterns, which is the basis of the mimicry discussed below.
          </p>
        </>
      }
      habitat={
        <p>
          Coral snakes are found in parts of the Americas, with many <em>Micrurus</em> species across Central and South America and into the southern United States, while <em>Micruroides</em> occurs in parts of the southwestern United States and Mexico. They occupy a range of habitats depending on species, including tropical and subtropical forest, woodland, scrub, grassland, and the margins of human-modified areas. Many are fossorial or semi-fossorial, sheltering beneath leaf litter, rocks, logs, and loose soil. This is a general description and not a complete range map; distributions vary by species and region.
        </p>
      }
      diet={
        <p>
          Coral snakes are carnivores, and many species are notable for preying on other elongate animals — frequently other snakes (including smaller coral snakes), as well as lizards such as skinks, and sometimes amphibians or other small prey. Their slender bodies and relatively small heads suit a diet of narrow, elongate prey that can be swallowed whole. They subdue prey using venom delivered through fixed front fangs, a feature shared with other elapids. Specific prey preferences differ among the many species in the group.
        </p>
      }
      behavior={
        <>
          <p>
            Coral snakes are generally shy, secretive, and most active at twilight or after dark, or after rain, spending much of their time hidden underground or beneath cover. When threatened, some species perform startle displays rather than striking immediately — for example, hiding the head and raising and curling the tail to present a confusing decoy, or thrashing the body. These are defensive behaviours that help the snake avoid escalation. Because they are so cryptic, coral snakes are often encountered far less than their range and abundance might suggest.
          </p>
          <p>
            As mid-level predators of small reptiles and other snakes, coral snakes form part of the food web in the ecosystems they inhabit, and their bright warning colouration is itself an important piece of natural history. Coral snakes are a textbook example of aposematism, where conspicuous colours advertise that an animal is defended. They are also central to studies of Batesian mimicry, in which harmless species such as some kingsnakes and milksnakes resemble the warning pattern of a defended model. The well-known colour rhyme (&quot;red touches yellow…&quot; and its variants) is a folk reference to this mimicry; it is unreliable across regions and species and is mentioned here only as biology, never as a rule for identifying or safely approaching any snake.
          </p>
        </>
      }
      humanInteraction={
        <p>
          Coral snakes are reclusive and generally avoid people, and most are encountered only rarely because of their hidden, burrowing habits. They are venomous wild animals that are best observed from a distance and left undisturbed, and pattern-based &quot;rules&quot; should not be used to judge any snake as safe. They are not pets, and this page offers no handling, capture, identification-for-handling, or keeping advice. For any snakebite or medical concern, contact qualified medical professionals or local health authorities; for questions about snakes around a home or property, contact local wildlife authorities or qualified professionals.
        </p>
      }
      extraSections={[
        {
          heading: "Venom",
          body: (
            <p>
              Coral snakes are venomous, not poisonous: they inject venom through fangs rather than being toxic to touch or eat. As elapids, their venom is generally described as having neurotoxic components that act on the nervous system, which is a different emphasis from the tissue-damaging venoms typical of many vipers. Because the group contains many species, venom composition and significance vary considerably. They are reclusive snakes with a relatively small mouth and fangs, and bites on people are uncommon and typically defensive. This profile does not provide venom potency figures, bite or death statistics, danger rankings, or any first-aid or medical guidance; any concern about a snakebite or venom should be directed to qualified medical professionals or local health authorities.
            </p>
          ),
        },
        {
          heading: "Conservation context",
          body: (
            <p>
              Because &quot;coral snake&quot; covers many species across two New World genera, there is no single conservation status for the group. Some species are widespread, while others have restricted ranges or face pressures such as habitat loss; statuses are assessed individually and can change over time. For the current listing of a particular species, consult authoritative sources such as the IUCN Red List (iucnredlist.org) and regional wildlife agencies rather than relying on a single overall label.
            </p>
          ),
        },
      ]}
      faqs={[
        {
          question: "Are coral snakes venomous or poisonous?",
          answer:
            "They are venomous, meaning they inject venom through fangs; they are not poisonous, since they are not toxic merely to touch or eat. As members of the family Elapidae, their venom is generally described as having neurotoxic components. They are reclusive, and bites on people are rare and usually defensive. This profile gives no potency figures or medical advice — any snakebite concern should go to qualified medical professionals or local health authorities.",
        },
        {
          question: "What is the coral snake colour rhyme, and is it reliable?",
          answer:
            "The rhyme (for example, \"red touches yellow…\" and its variants) is a folk reference to mimicry between coral snakes and look-alikes such as some kingsnakes and milksnakes. It is a point of biology, not a safety tool: band colours and patterns vary by species and region, and the rhyme does not hold reliably everywhere. It should never be used to decide whether a snake is harmless or safe to approach.",
        },
        {
          question: "What do coral snakes eat?",
          answer:
            "Coral snakes are carnivores, and many species specialise in other elongate animals such as smaller snakes (including other coral snakes) and lizards like skinks, with some taking amphibians or other small prey. Their slim bodies suit swallowing narrow prey whole, and they use venom delivered through fixed front fangs to subdue it.",
        },
        {
          question: "Are all coral snakes the same species?",
          answer:
            "No. \"Coral snake\" covers many species, mainly in the New World genera Micrurus and Micruroides, plus unrelated Old World snakes (such as Calliophis) that share the name. Traits like band pattern, size, and range differ among them, so this is a group-level overview rather than a single-species profile.",
        },
      ]}
      quickFacts={[
        { label: "Scientific group", value: "Micrurus & Micruroides (family Elapidae)" },
        { label: "Group", value: "Snake (elapid)" },
        { label: "Range", value: "Parts of the Americas; varies by species (not a full range map)" },
        { label: "Habitat", value: "Forest, scrub, grassland; often burrowing under cover" },
        { label: "Diet", value: "Carnivore — often other snakes and lizards" },
        { label: "Conservation", value: "Varies by species; consult the IUCN Red List (changeable)" },
      ]}
      relatedLinks={[
        { label: "Reptiles & Amphibians", href: "/animal-taxonomy/reptiles-amphibians", description: "Snakes, lizards, turtles, crocodilians, frogs & salamanders" },
        { label: "Snake", href: "/animals/snake", description: "Snakes more broadly" },
        { label: "Cobra", href: "/animals/cobra", description: "Related elapid snakes" },
        { label: "Krait", href: "/animals/krait", description: "Another elapid" },
        { label: "Reptiles & Amphibians", href: "/animal-encyclopedia/reptiles" },
      ]}
    />
  );
}
