import type { Metadata } from "next";
import AnimalProfileLayout from "@/components/AnimalProfileLayout";
import { ANIMAL_SOURCES } from "@/lib/educational/animal-sources";
import { getAnimalGalleryImages, getAnimalImage, getAnimalOgImage } from "@/lib/images/animal-images";
import { buildArticleMetadata } from "@/lib/metadata";

const PATH = "/animals/king-cobra";
const TITLE = "King Cobra: The World's Longest Venomous Snake";
const DESC =
  "Learn about the king cobra (Ophiophagus hannah), the world's longest venomous snake, found in forests across parts of South and Southeast Asia.";

export const metadata: Metadata = buildArticleMetadata({
  title: TITLE,
  description: DESC,
  path: PATH,
  publishedTime: "2026-06-27",
  modifiedTime: "2026-06-27",
  ogImage: getAnimalOgImage("king-cobra"),
});

export default function KingCobraPage() {
  return (
    <AnimalProfileLayout
      commonName="King Cobra"
      scientificName="Ophiophagus hannah"
      pageTitle={TITLE}
      description={DESC}
      path={PATH}
      parentCategory="Reptiles & Amphibians"
      parentCategoryHref="/animal-encyclopedia/reptiles"
      tags={["Reptile","Snake","Venomous"]}
      image={getAnimalImage("king-cobra") ?? undefined}
      galleryImages={getAnimalGalleryImages("king-cobra")}
      sources={ANIMAL_SOURCES["king-cobra"]}
      publishedDate="2026-06-27"
      modifiedDate="2026-06-27"
      overview={
        <>
          <p>
            The king cobra (<em>Ophiophagus hannah</em>) is the world&#39;s longest venomous snake, found in forests across parts of South and Southeast Asia. Its scientific name means &quot;snake-eater&quot;, reflecting its specialised diet of other snakes. Despite its imposing length and its place in regional folklore, it is generally shy and tends to avoid people when given the chance.
          </p>
          <p>
            One of its most remarkable traits is reproductive: the king cobra is famous as the only snake known to build a nest for its eggs, which the female then guards. This combination of behaviours, together with its size and snake-eating habits, makes it a distinctive subject in herpetology and a species of considerable scientific interest.
          </p>
          <p>
            Range, habitat preferences, and conservation details for the king cobra vary across its wide distribution and should always be checked against authoritative sources such as the IUCN Red List and peer-reviewed zoology. The king cobra is venomous and can be dangerous; it should never be approached or handled. Anyone concerned about a snakebite should contact qualified medical professionals or local health authorities, and wildlife conflicts should be referred to local wildlife authorities.
          </p>
          <h3>Taxonomy and animal group</h3>
          <p>
            The king cobra belongs to the elapid family of snakes, a group that includes cobras, mambas, and their relatives. Although its common name includes the word &quot;cobra&quot;, it is a distinct species placed in its own genus, <em>Ophiophagus</em>, and is not a member of the genus <em>Naja</em> that contains the true cobras. The genus name <em>Ophiophagus</em> translates roughly as &quot;snake-eater&quot;, underscoring how its biology sets it apart from the true cobras.
          </p>
          <h3>Appearance and recognition</h3>
          <p>
            The king cobra is best known for its length, being recognised as the longest of the venomous snakes. Like other cobras, it can raise the forward part of its body off the ground and spread a hood when alert, though its hood is generally narrower than that of the true cobras. Colouration varies across its range and with age, and individuals may appear in shades of olive, brown, tan, or black, sometimes with paler banding. Its overall build is comparatively slender for its length.
          </p>
        </>
      }
      habitat={
        <p>
          The king cobra occurs across parts of South and Southeast Asia, where it is associated mainly with forests, including dense lowland and hill forests, and areas near water. It is not distributed continent-wide across Asia, and its presence is tied to suitable forested habitat within its range. Precise distribution differs from region to region, so specific country or local records should be confirmed against authoritative sources rather than assumed across the whole continent.
        </p>
      }
      diet={
        <p>
          As its scientific name suggests, the king cobra specialises in eating other snakes, a dietary focus that is unusual and gives the species its &quot;snake-eater&quot; name. It may take a variety of other snakes, including both non-venomous and venomous species, and is also reported to consume certain other reptiles such as lizards. This specialised diet shapes much of its behaviour and ecology and distinguishes it from many other large snakes that take a broader range of prey.
        </p>
      }
      behavior={
        <>
          <p>
            Despite its size and reputation, the king cobra is generally shy and tends to avoid encounters with people, usually retreating when it can. When threatened, it may raise the front of its body, spread its hood, and produce a low hiss as a warning. Its most distinctive behaviour is nesting: the king cobra is the only snake known to build a nest of gathered vegetation for its eggs, and the female guards the nest during incubation, a level of parental care that is rare among snakes.
          </p>
          <p>
            By specialising in other snakes as prey, the king cobra occupies an unusual ecological role as a predator of predators within forest food webs across parts of South and Southeast Asia. Its presence is linked to the populations of the snakes it feeds on, and it forms part of the broader balance of forest reptile communities in the regions where it lives. As a large, wide-ranging forest predator, it is one of the more conspicuous components of the herpetofauna in suitable Asian forests.
          </p>
        </>
      }
      humanInteraction={
        <p>
          The king cobra holds a prominent place in the culture and folklore of several Asian regions, and it draws strong scientific and public interest because of its size, diet, and nesting behaviour. It is venomous and can be dangerous, and wild king cobras should never be approached, provoked, or handled. The species is listed as Vulnerable by the IUCN, with habitat loss and persecution among the pressures it faces. Anyone with concerns about a snakebite should seek qualified medical professionals or local health authorities without delay, and any conflict involving a wild king cobra should be reported to local wildlife authorities, who are equipped to respond safely.
        </p>
      }
      faqs={[
        {
          question: "Is the king cobra a type of true cobra?",
          answer:
            "No. Although it is called a cobra, the king cobra (Ophiophagus hannah) is a distinct species placed in its own genus, Ophiophagus, and is not a member of the genus Naja that contains the true cobras. It belongs to the same broad elapid family as the true cobras but is classified separately.",
        },
        {
          question: "Why is the king cobra called a \"snake-eater\"?",
          answer:
            "Its scientific name, Ophiophagus, means \"snake-eater\", and the species specialises in eating other snakes. This unusual dietary focus, which can include both non-venomous and venomous snakes as well as some other reptiles, is one of the features that sets it apart from many other large snakes.",
        },
        {
          question: "Is it true that king cobras build nests?",
          answer:
            "Yes. The king cobra is famous as the only snake known to build a nest for its eggs. The female gathers vegetation into a nest and then guards it during incubation, a level of parental care that is rare among snakes.",
        },
        {
          question: "What should I do if I encounter a king cobra in the wild?",
          answer:
            "Keep a safe distance and do not approach, provoke, or attempt to handle the snake, as it is venomous and can be dangerous. Report the situation to local wildlife authorities, who can respond safely. Anyone concerned about a snakebite should contact qualified medical professionals or local health authorities.",
        },
      ]}
      quickFacts={[
        { label: "Group", value: "Snake (elapid)" },
        { label: "Higher classification", value: "Genus Ophiophagus, family Elapidae; distinct from true cobras (Naja)" },
        { label: "Diet", value: "Specialises in eating other snakes; also some other reptiles" },
        { label: "Notable trait", value: "World's longest venomous snake; the only snake known to build a nest for its eggs" },
        { label: "Habitat", value: "Forests, including lowland and hill forests, often near water" },
        { label: "Asia distribution", value: "Found in forests across parts of South and Southeast Asia; not continent-wide" },
        { label: "Human interaction", value: "Generally shy and avoids people; venomous and should never be approached or handled" },
        { label: "Conservation status", value: "Vulnerable (IUCN); habitat loss and persecution are pressures" },
      ]}
      relatedLinks={[
        { label: "Cobra Profile", href: "/animals/cobra", description: "True cobras (genus Naja)" },
        { label: "Mamba Profile", href: "/animals/mamba", description: "Another large venomous elapid" },
        { label: "Krait Profile", href: "/animals/krait", description: "An Asian venomous snake" },
        { label: "Asian fauna", href: "/fauna/continents/asia", description: "Animals of Asia" },
        { label: "Reptiles & Amphibians", href: "/animal-encyclopedia/reptiles" },
      ]}
    />
  );
}
