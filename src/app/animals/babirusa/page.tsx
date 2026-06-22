import type { Metadata } from "next";
import AnimalProfileLayout from "@/components/AnimalProfileLayout";
import { ANIMAL_SOURCES } from "@/lib/educational/animal-sources";
import { getAnimalGalleryImages, getAnimalImage, getAnimalOgImage } from "@/lib/images/animal-images";
import { buildArticleMetadata } from "@/lib/metadata";

const PATH = "/animals/babirusa";
const TITLE = "Babirusa — Profile, the 'Deer-Pig' Whose Tusks Curl Through Its Snout";
const DESC =
  "Explore babirusas (genus Babyrousa): bizarre wild pigs of Indonesia's Sulawesi region whose males grow upper tusks that pierce through the snout and curve back toward the skull.";

export const metadata: Metadata = buildArticleMetadata({
  title: TITLE,
  description: DESC,
  path: PATH,
  publishedTime: "2026-06-22",
  modifiedTime: "2026-06-22",
  ogImage: getAnimalOgImage("babirusa"),
});

export default function BabirusaPage() {
  return (
    <AnimalProfileLayout
      commonName="Babirusa"
      scientificName="genus Babyrousa"
      pageTitle={TITLE}
      description={DESC}
      path={PATH}
      parentCategory="Mammals"
      parentCategoryHref="/animal-encyclopedia/mammals"
      tags={["Mammal", "Wild pig", "Indonesia"]}
      image={getAnimalImage("babirusa") ?? undefined}
      galleryImages={getAnimalGalleryImages("babirusa")}
      sources={ANIMAL_SOURCES.babirusa}
      publishedDate="2026-06-22"
      modifiedDate="2026-06-22"
      overview={
        <>
          <p>
            The babirusa (genus <em>Babyrousa</em>) is one of the strangest pigs in the world — a wild pig
            of Sulawesi and nearby islands in Indonesia, with a nearly hairless, greyish body and, in the
            males, an extraordinary set of tusks. The name means &ldquo;pig-deer&rdquo; in Malay, a nod to
            those tusks, which in males of some forms grow so dramatically that the upper pair actually
            pierces through the top of the snout and curves back over the face toward the forehead.
          </p>
          <p>
            No other mammal has tusks quite like this. Because the upper canines turn upward and grow
            through the skin of the muzzle rather than out of the mouth, an old male&apos;s tusks can curl
            into striking arcs — and, if never worn down, could in theory keep growing back toward the skull.
          </p>
          <p>
            <strong>Note:</strong> &ldquo;babirusa&rdquo; covers a few species; details here describe the
            group broadly (only males grow the famous tusks). Treat general statements as approximate and
            verify against authoritative sources.
          </p>
        </>
      }
      habitat={
        <p>
          Babirusas live only in Indonesia — on Sulawesi and a few surrounding islands — in tropical
          rainforest, often in moist areas near rivers, lakes, and swamps. They are tied to forest and
          waterside habitats, where they forage and wallow, and their small island ranges make them
          especially vulnerable to habitat loss.
        </p>
      }
      diet={
        <p>
          Babirusas are omnivores with a relatively simple, non-rooting feeding style compared with other
          pigs: they eat fruit, leaves, nuts, fungi, and other plant matter, along with invertebrates and
          small animals. Unlike typical pigs, they do not dig and root in the soil with their snouts to
          nearly the same degree, partly reflecting differences in their stomach and snout. They are fond of
          fallen fruit and visit mineral-rich sites to supplement their diet.
        </p>
      }
      behavior={
        <p>
          The males&apos; remarkable tusks are the babirusa&apos;s signature. The upper canines grow upward
          and backward, emerging through the top of the snout, while the lower canines also curve up; their
          exact function is debated, but they appear to be used in display and as protection for the face
          during male contests rather than as effective weapons (they are fairly brittle). Babirusas are
          generally social, with females and young in small groups and males more solitary, and they are
          good swimmers, sometimes crossing water between areas. They wallow in mud like other pigs and are
          active by day.
        </p>
      }
      humanInteraction={
        <p>
          Babirusas are of conservation concern, threatened by habitat loss from logging and farming and by
          hunting for their meat, and their restricted island ranges leave little buffer; some forms are
          considered endangered. They are protected in Indonesia and are a flagship for Sulawesi&apos;s
          wildlife, kept and bred in zoos worldwide. Their bizarre tusks have long featured in local art and
          culture. Consult the IUCN Red List for species-specific status.
        </p>
      }
      faqs={[
        {
          question: "Why do a babirusa's tusks grow through its snout?",
          answer:
            "In males, the upper canine teeth are rotated so they grow upward and backward, piercing through the skin on top of the snout instead of emerging from the mouth, then curving back toward the forehead. It's a unique arrangement found in no other mammal, and it gives old males their astonishing curled 'antler-like' tusks — the reason the name means 'pig-deer.'",
        },
        {
          question: "What are the babirusa's tusks for?",
          answer:
            "Their exact purpose is debated. The tusks appear to be used mainly in display and possibly to protect the face during fights between males, rather than as effective stabbing weapons — they're relatively brittle. Only males grow them, supporting the idea that they signal status and play a role in male-to-male contests.",
        },
        {
          question: "Is a babirusa a true pig?",
          answer:
            "Yes — it's a genuine member of the pig family, but a very distinctive one, found only on Sulawesi and nearby Indonesian islands. It differs from typical pigs in its nearly hairless body, its less soil-rooting feeding style and stomach, and of course the males' extraordinary tusks, making it one of the most unusual pigs alive.",
        },
        {
          question: "Are babirusas endangered?",
          answer:
            "Babirusas are of conservation concern, with some forms considered endangered. They're threatened by habitat loss from logging and agriculture and by hunting for meat, and their small island ranges make them especially vulnerable. They're legally protected in Indonesia. Check the IUCN Red List for the status of a given species.",
        },
      ]}
      quickFacts={[
        { label: "Group", value: "Genus Babyrousa (babirusas)" },
        { label: "Class", value: "Mammalia (wild pig)" },
        { label: "Name meaning", value: "'Pig-deer' (Malay)" },
        { label: "Signature trait", value: "Males' upper tusks pierce & curl over the snout" },
        { label: "Diet", value: "Omnivore (fruit, plants, invertebrates); little rooting" },
        { label: "Range", value: "Sulawesi & nearby islands, Indonesia" },
        { label: "Skills", value: "Good swimmer; wallows in mud" },
        { label: "Status", value: "Of conservation concern (verify)" },
      ]}
      relatedLinks={[
        { label: "Wild Boar Profile", href: "/animals/wild-boar", description: "A widespread true pig" },
        { label: "Warthog Profile", href: "/animals/warthog", description: "Another tusked wild pig" },
        { label: "Peccary Profile", href: "/animals/peccary", description: "A pig-like New World relative" },
        { label: "Endangered Animals", href: "/endangered-animals", description: "IUCN Red List categories" },
        { label: "Mammals Encyclopedia", href: "/animal-encyclopedia/mammals" },
      ]}
    />
  );
}
