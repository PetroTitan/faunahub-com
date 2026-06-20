import type { Metadata } from "next";
import AnimalProfileLayout from "@/components/AnimalProfileLayout";
import { ANIMAL_SOURCES } from "@/lib/educational/animal-sources";
import { getAnimalGalleryImages, getAnimalImage, getAnimalOgImage } from "@/lib/images/animal-images";
import { buildArticleMetadata } from "@/lib/metadata";

const PATH = "/animals/mandrill";
const TITLE = "Mandrill — Profile, the World's Largest Monkey & Diet";
const DESC =
  "Explore the mandrill (Mandrillus sphinx): the largest monkey, a forest-dwelling African primate famous for the male's brilliant red-and-blue face and huge social groups. Vulnerable.";

export const metadata: Metadata = buildArticleMetadata({
  title: TITLE,
  description: DESC,
  path: PATH,
  publishedTime: "2026-06-20",
  modifiedTime: "2026-06-20",
  ogImage: getAnimalOgImage("mandrill"),
});

export default function MandrillPage() {
  return (
    <AnimalProfileLayout
      commonName="Mandrill"
      scientificName="Mandrillus sphinx"
      pageTitle={TITLE}
      description={DESC}
      path={PATH}
      parentCategory="Mammals"
      parentCategoryHref="/animal-encyclopedia/mammals"
      tags={["Mammal", "Primate", "Africa"]}
      image={getAnimalImage("mandrill") ?? undefined}
      galleryImages={getAnimalGalleryImages("mandrill")}
      sources={ANIMAL_SOURCES.mandrill}
      publishedDate="2026-06-20"
      modifiedDate="2026-06-20"
      overview={
        <>
          <p>
            The mandrill (<em>Mandrillus sphinx</em>) is the largest monkey in the world, a
            powerful, ground-dwelling primate of the rainforests of west-central Africa.
            Males are unmistakable, with a long muzzle ridged in vivid blue and a scarlet
            stripe down the centre, plus matching bright colours on the rump — one of the
            most flamboyant colour displays of any mammal. Females and young are far plainer.
          </p>
          <p>
            Mandrills are related to baboons and, like them, are intelligent and intensely
            social, sometimes gathering in enormous groups called hordes that can number in
            the hundreds.
          </p>
          <p>
            <strong>Conservation note:</strong> the mandrill is assessed as Vulnerable,
            threatened by habitat loss and hunting for bushmeat. Verify current status at
            iucnredlist.org.
          </p>
        </>
      }
      habitat={
        <p>
          Mandrills live in the tropical rainforests and forest-savanna mosaics of
          west-central Africa, including parts of Cameroon, Gabon, Equatorial Guinea, and
          the Republic of the Congo. They spend much of their time foraging on the forest
          floor but climb trees to feed and to sleep safely at night.
        </p>
      }
      diet={
        <p>
          Mandrills are omnivores with a broad diet: fruit, seeds, nuts, leaves, roots, and
          fungi, along with insects, other invertebrates, and small vertebrates. They use
          large cheek pouches to gather and carry food while foraging, and their strong jaws
          handle hard items such as nuts and seeds.
        </p>
      }
      behavior={
        <p>
          Mandrills are famous for their social life: they live in groups led by females,
          and these can merge into hordes that are among the largest stable gatherings of
          any primate. A dominant male&apos;s colours are brightest, and brighter colour
          signals higher status — research links the intensity of the red and blue to
          dominance and hormones. Mandrills communicate with calls, facial expressions, and
          scent, and they generally avoid people, retreating into dense forest.
        </p>
      }
      humanInteraction={
        <p>
          Mandrills are charismatic and well known from their vivid faces, but in the wild
          they are declining, mainly because of deforestation and intensive hunting for
          bushmeat. Their large hordes can make them vulnerable to hunters. Protecting
          forest and managing hunting are key to their future. Consult the IUCN Red List for
          current status.
        </p>
      }
      faqs={[
        {
          question: "Is the mandrill a baboon?",
          answer:
            "It is closely related to baboons but is not a true baboon — mandrills are placed in their own genus (Mandrillus), alongside the drill. They share a robust, ground-foraging, highly social lifestyle with baboons, which is why they are often compared to them.",
        },
        {
          question: "Why do male mandrills have such colourful faces?",
          answer:
            "The vivid blue ridges and red stripe (mirrored on the rump) are signals of status. Research shows the brightest-coloured males tend to be the most dominant, and colour intensity is linked to hormones and social rank. The display helps mediate competition and attract females, so colour is a kind of visual rank badge.",
        },
        {
          question: "How big do mandrills get?",
          answer:
            "Mandrills are the largest of all monkeys. Males are much bigger than females and can be strikingly heavy and powerful for a monkey, with large canine teeth. This large size, combined with the male's coloration, makes them very distinctive.",
        },
        {
          question: "Are mandrills endangered?",
          answer:
            "They are assessed as Vulnerable. The main threats are the loss of their rainforest habitat and heavy hunting for bushmeat, with their large group sizes sometimes making them easier targets. Forest protection and hunting management are important, and current status should be checked against the IUCN Red List.",
        },
      ]}
      quickFacts={[
        { label: "Scientific name", value: "Mandrillus sphinx" },
        { label: "Class", value: "Mammalia (Old World monkey)" },
        { label: "Claim to fame", value: "World's largest monkey" },
        { label: "Relatives", value: "Baboons (close kin)" },
        { label: "Diet", value: "Omnivore (fruit, seeds, insects, small prey)" },
        { label: "Society", value: "Huge female-led 'hordes'" },
        { label: "Range", value: "West-central African forests" },
        { label: "IUCN Status", value: "Vulnerable (verify)" },
      ]}
      relatedLinks={[
        { label: "Gorilla Profile", href: "/animals/gorilla", description: "A fellow Central African primate" },
        { label: "Chimpanzee Profile", href: "/animals/chimpanzee", description: "Another intelligent African primate" },
        { label: "Gibbon Profile", href: "/animals/gibbon", description: "A small ape" },
        { label: "Endangered Animals", href: "/endangered-animals", description: "IUCN Red List categories" },
        { label: "Mammal Encyclopedia", href: "/animal-encyclopedia/mammals" },
      ]}
    />
  );
}
