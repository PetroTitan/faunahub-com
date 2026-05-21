import type { Metadata } from "next";
import AnimalProfileLayout from "@/components/AnimalProfileLayout";
import { ANIMAL_SOURCES } from "@/lib/educational/animal-sources";
import {
  getAnimalGalleryImages,
  getAnimalImage,
  getAnimalOgImage,
} from "@/lib/images/animal-images";
import { buildArticleMetadata } from "@/lib/metadata";

const PUBLISHED = "2026-05-21";
const MODIFIED = "2026-05-21";

const title = "Frog — Overview of Frog Species, Habitat & Behavior";
const description =
  "Frogs (order Anura): tailless amphibians with a global distribution. Reference species the red-eyed tree frog, with cautious overview of biology and conservation.";

export const metadata: Metadata = buildArticleMetadata({
  title,
  description,
  path: "/animals/frog",
  publishedTime: PUBLISHED,
  modifiedTime: MODIFIED,
  ogImage: getAnimalOgImage("frog"),
});

export default function FrogPage() {
  return (
    <AnimalProfileLayout
      commonName="Frog"
      pageTitle={title}
      description={description}
      path="/animals/frog"
      parentCategory="Amphibians"
      parentCategoryHref="/animal-encyclopedia"
      tags={["Amphibian", "Anura", "Indicator Species"]}
      image={getAnimalImage("frog") ?? undefined}
      galleryImages={getAnimalGalleryImages("frog")}
      factsHeaderNote='Frogs are amphibians, not reptiles. The reference image is a red-eyed tree frog (Agalychnis callidryas). Other anuran species differ substantially.'
      overview={
        <>
          <p>
            Frogs are tailless amphibians of the order Anura — a very
            diverse group of more than 7,000 described species. The order
            includes both &quot;frogs&quot; and &quot;toads&quot; in common
            usage; the distinction is informal rather than strictly
            taxonomic. Frogs typically have moist permeable skin,
            externally-fertilised eggs laid in or near water, and a
            distinctive larval (tadpole) stage that metamorphoses into the
            adult form.
          </p>
        </>
      }
      habitat={
        <>
          <p>
            Anurans occupy a remarkable range of habitats — tropical
            rainforest canopy, temperate ponds and streams, arid scrub
            (with extreme adaptations), and even some intertidal zones.
            Most species require access to standing or slow-moving water
            at some stage of the life cycle. Habitat loss, water-quality
            decline, and emerging diseases are major conservation pressures
            across the group.
          </p>
        </>
      }
      diet={
        <>
          <p>
            Adult frogs are typically carnivorous, eating insects and
            other small invertebrates; very large species may take small
            vertebrate prey. Tadpoles of most species are herbivores or
            detritivores feeding on algae, plant material, and biofilm,
            though several lineages have predatory or even carnivorous
            tadpoles.
          </p>
        </>
      }
      behavior={
        <>
          <p>
            Many frog species communicate using species-specific
            advertisement calls produced by males during the breeding
            season. Calls can carry remarkable distances and are commonly
            used in the field to identify species and survey populations.
            Anti-predator strategies include cryptic colouration, startling
            warning colours in toxic species, leaping escape, and
            distasteful or actively toxic skin secretions in groups such as
            poison dart frogs.
          </p>
        </>
      }
      humanInteraction={
        <>
          <p>
            Frogs are considered ecological indicator species: their
            permeable skin and dependence on aquatic environments make them
            sensitive to pollution and habitat change. Several diseases —
            most notably chytridiomycosis caused by <em>Batrachochytrium
            dendrobatidis</em> (Bd) and <em>B. salamandrivorans</em> (Bsal)
            — have devastated amphibian populations globally over recent
            decades. Some frog species are kept as pets in specialised
            terraria; the welfare and conservation context is best
            navigated with an exotic-animal veterinarian and reputable
            herpetological sources.
          </p>
        </>
      }
      similarAnimals={
        <p>
          Other amphibians include salamanders and newts (order Caudata)
          and the limbless, burrowing caecilians (order Gymnophiona).
          Despite shared common ground with reptiles in popular culture,
          amphibians and reptiles are separate vertebrate classes with
          different reproductive biology and skin anatomy.
        </p>
      }
      faqs={[
        {
          question: "Are frogs reptiles?",
          answer:
            "No. Frogs are amphibians (class Amphibia), not reptiles (class Reptilia). They differ in skin anatomy, egg biology, larval stage, and other characters. Amphibians are typically more dependent on moisture and water than reptiles.",
        },
        {
          question: "What is the difference between frogs and toads?",
          answer:
            "The distinction is informal. 'Toad' is often applied to anurans with drier, warty skin and a more terrestrial habit — particularly members of family Bufonidae — while 'frog' is used for smoother-skinned, more aquatic species. Both belong to the order Anura.",
        },
        {
          question: "Are frogs really declining worldwide?",
          answer:
            "Yes — many amphibian populations have declined significantly over recent decades. Causes include habitat loss, water-quality decline, climate change, UV-B radiation effects, and emerging fungal diseases such as chytridiomycosis. Specific status varies sharply by species.",
        },
        {
          question: "Can I keep a frog as a pet?",
          answer:
            "Some species are commonly kept under controlled terrarium conditions, but pet ownership of frogs requires species-appropriate humidity, temperature, water quality, and feeding regimes, plus access to an exotic-animal veterinarian. Wild capture should be avoided, and several species are protected by national or international law.",
        },
      ]}
      quickFacts={[
        { label: "Reference species (image)", value: "Red-eyed tree frog (Agalychnis callidryas)" },
        { label: "Order", value: "Anura" },
        { label: "Class", value: "Amphibia" },
        { label: "Diet", value: "Larvae often herbivorous; adults usually carnivorous" },
        { label: "Habitat", value: "Diverse; most species need water at some life stage" },
        { label: "Notable trait", value: "Sensitive permeable skin — used as ecological indicator" },
        { label: "Conservation status", value: "Varies by species; many in decline (verify per species)" },
      ]}
      relatedLinks={[
        { label: "Turtle Profile", href: "/animals/turtle" },
        { label: "Snake Profile", href: "/animals/snake" },
        { label: "Reptiles Hub (includes herp content)", href: "/animal-encyclopedia/reptiles" },
        { label: "Wildlife Hub", href: "/wildlife" },
      ]}
      sources={ANIMAL_SOURCES.frog}
      publishedDate={PUBLISHED}
      modifiedDate={MODIFIED}
    />
  );
}
