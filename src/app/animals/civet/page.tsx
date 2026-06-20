import type { Metadata } from "next";
import AnimalProfileLayout from "@/components/AnimalProfileLayout";
import { ANIMAL_SOURCES } from "@/lib/educational/animal-sources";
import { getAnimalGalleryImages, getAnimalImage, getAnimalOgImage } from "@/lib/images/animal-images";
import { buildArticleMetadata } from "@/lib/metadata";

const PATH = "/animals/civet";
const TITLE = "Civet — Profile, Habitat, Diet & Behavior";
const DESC =
  "Explore civets (family Viverridae): cat-like nocturnal mammals of Africa and Asia, using the African civet as a reference — secretive omnivores with a distinctive scent gland.";

export const metadata: Metadata = buildArticleMetadata({
  title: TITLE,
  description: DESC,
  path: PATH,
  publishedTime: "2026-06-20",
  modifiedTime: "2026-06-20",
  ogImage: getAnimalOgImage("civet"),
});

export default function CivetPage() {
  return (
    <AnimalProfileLayout
      commonName="Civet"
      scientificName="family Viverridae"
      pageTitle={TITLE}
      description={DESC}
      path={PATH}
      parentCategory="Mammals"
      parentCategoryHref="/animal-encyclopedia/mammals"
      tags={["Mammal", "Viverridae", "Nocturnal"]}
      image={getAnimalImage("civet") ?? undefined}
      galleryImages={getAnimalGalleryImages("civet")}
      sources={ANIMAL_SOURCES.civet}
      publishedDate="2026-06-20"
      modifiedDate="2026-06-20"
      overview={
        <>
          <p>
            Civets are small-to-medium, cat-like mammals of the family Viverridae, found
            across Africa and southern Asia. Despite a superficially feline look, they are
            not cats; they belong to their own group of carnivorans. The African civet
            (<em>Civettictis civetta</em>), shown here, is a large, boldly marked example
            with a black-and-white patterned coat, a crest of fur along the back, and a
            masked face.
          </p>
          <p>
            Civets are mostly nocturnal, secretive, and solitary, and many are skilled
            climbers. They are best known to people for their musky scent secretion and,
            in some species, an unusual link to coffee.
          </p>
          <p>
            <strong>Note:</strong> &ldquo;civet&rdquo; covers many different species with
            varied diets and habits; details here use the African civet as a reference.
            Treat general statements as approximate and verify against authoritative
            sources.
          </p>
        </>
      }
      habitat={
        <p>
          Civets live in a range of habitats depending on the species — forests,
          woodlands, savannas, and areas near water — across sub-Saharan Africa and
          South and Southeast Asia. The African civet favours well-vegetated areas with
          good cover and is often associated with grasslands and forest edges.
        </p>
      }
      diet={
        <p>
          Most civets are omnivores with a broad, opportunistic diet. The African civet
          eats insects, small vertebrates (including rodents, reptiles, and birds),
          eggs, carrion, fruit, and other plant matter. This flexibility lets civets
          exploit whatever food is seasonally available.
        </p>
      }
      behavior={
        <p>
          Civets are typically nocturnal and solitary, marking their territories with a
          strong-smelling secretion from a perineal scent gland. This substance, historically
          called &ldquo;civet,&rdquo; was once harvested for the perfume industry — a use
          that raised serious animal-welfare concerns and has largely been replaced by
          synthetics. Some Asian palm civets are also linked to &ldquo;civet coffee,&rdquo;
          made from beans that have passed through the animal&apos;s gut, an industry
          likewise criticised on welfare grounds.
        </p>
      }
      humanInteraction={
        <p>
          People have long used the civet&apos;s scent secretion in perfumery and, more
          recently, kept civets for &ldquo;civet coffee&rdquo; production — practices that
          have drawn welfare criticism. Civets also feature in the wildlife trade and were
          studied during disease-outbreak investigations. Many species remain fairly
          common, but some face habitat loss and hunting pressure. Consult authoritative
          sources for species-specific status.
        </p>
      }
      faqs={[
        {
          question: "Is a civet a type of cat?",
          answer:
            "No. Civets only look somewhat cat-like; they belong to the family Viverridae, a separate group of carnivorans that also includes genets. They are more closely related to mongooses than to true cats, and differ in their teeth, scent glands, and overall biology.",
        },
        {
          question: "What is \"civet\" in perfume?",
          answer:
            "Civets produce a strong-smelling, musky secretion from a scent gland, historically called civet, which was collected and used as a fixative in perfumery. Because harvesting it raised animal-welfare concerns, the perfume industry now largely uses synthetic substitutes instead.",
        },
        {
          question: "What is civet coffee?",
          answer:
            "Civet coffee (such as kopi luwak) is made from coffee beans that have been eaten and passed through the digestive tract of certain palm civets. It is marketed as a luxury product, but the practice — especially where civets are caged for it — has been widely criticised on animal-welfare grounds.",
        },
        {
          question: "What do civets eat?",
          answer:
            "Most civets are opportunistic omnivores. The African civet, for example, eats insects, small animals such as rodents and reptiles, eggs, carrion, and a good deal of fruit and plant matter, adjusting its diet to whatever is available.",
        },
      ]}
      quickFacts={[
        { label: "Group", value: "Family Viverridae" },
        { label: "Reference species", value: "Civettictis civetta (African civet)" },
        { label: "Class", value: "Mammalia" },
        { label: "Relatives", value: "Genets, mongooses (not cats)" },
        { label: "Diet", value: "Omnivore (opportunistic)" },
        { label: "Activity", value: "Mainly nocturnal & solitary" },
        { label: "Known for", value: "Musky scent gland; \"civet coffee\"" },
        { label: "Status", value: "Varies by species (verify)" },
      ]}
      relatedLinks={[
        { label: "Genet Profile", href: "/animals/genet", description: "A slimmer viverrid relative" },
        { label: "Mongoose Profile", href: "/animals/mongoose", description: "A close relative in a sister family" },
        { label: "Meerkat Profile", href: "/animals/meerkat", description: "A social mongoose" },
        { label: "Fauna by Continent", href: "/fauna/continents", description: "African & Asian fauna in context" },
        { label: "Mammal Encyclopedia", href: "/animal-encyclopedia/mammals" },
      ]}
    />
  );
}
