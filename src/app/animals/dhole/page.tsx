import type { Metadata } from "next";
import AnimalProfileLayout from "@/components/AnimalProfileLayout";
import { ANIMAL_SOURCES } from "@/lib/educational/animal-sources";
import { getAnimalGalleryImages, getAnimalImage, getAnimalOgImage } from "@/lib/images/animal-images";
import { buildArticleMetadata } from "@/lib/metadata";

const PATH = "/animals/dhole";
const TITLE = "Dhole — Profile, the Whistling Asiatic Wild Dog That Hunts in Packs";
const DESC =
  "Explore the dhole (Cuon alpinus): a rusty-red, pack-living Asiatic wild dog famous for whistling calls and cooperative hunts — an endangered predator of Asia's forests.";

export const metadata: Metadata = buildArticleMetadata({
  title: TITLE,
  description: DESC,
  path: PATH,
  publishedTime: "2026-06-22",
  modifiedTime: "2026-06-22",
  ogImage: getAnimalOgImage("dhole"),
});

export default function DholePage() {
  return (
    <AnimalProfileLayout
      commonName="Dhole"
      scientificName="Cuon alpinus"
      pageTitle={TITLE}
      description={DESC}
      path={PATH}
      parentCategory="Mammals"
      parentCategoryHref="/animal-encyclopedia/mammals"
      tags={["Mammal", "Wild dog", "Endangered"]}
      image={getAnimalImage("dhole") ?? undefined}
      galleryImages={getAnimalGalleryImages("dhole")}
      sources={ANIMAL_SOURCES.dhole}
      publishedDate="2026-06-22"
      modifiedDate="2026-06-22"
      overview={
        <>
          <p>
            The dhole (<em>Cuon alpinus</em>), also called the Asiatic wild dog or whistling dog, is a
            rusty-red, pack-living wild canine of Asia. About the size of a border collie but more
            athletic, it has a fox-like reddish coat, a bushy black-tipped tail, and rounded ears. The
            dhole is the only living member of its own genus, set slightly apart from wolves, dogs, and
            jackals, and it is one of Asia&apos;s most social and capable pack predators.
          </p>
          <p>
            Dholes are famous for their voices — they keep in touch with an eerie array of whistles,
            screams, and clucks, the whistling earning them the nickname &ldquo;whistling dog&rdquo; — and
            for hunting cooperatively in well-coordinated packs that can bring down prey far larger than
            themselves.
          </p>
          <p>
            <strong>Conservation note:</strong> the dhole is classified as Endangered, with declining
            populations. Verify current status at authoritative sources.
          </p>
        </>
      }
      habitat={
        <p>
          Dholes live across parts of South, Southeast, and Central/East Asia, in a wide range of forested
          and upland habitats — from tropical and dry forests to alpine meadows and steppe — wherever there
          is enough prey and cover. Their range has contracted greatly, and they now survive in scattered,
          mostly protected areas. Packs roam large territories.
        </p>
      }
      diet={
        <p>
          The dhole is a carnivore that hunts mainly medium to large hoofed prey — various deer and wild
          pigs — along with smaller animals, working together as a pack to chase and overpower prey through
          stamina and teamwork. Dholes are remarkable endurance hunters that can run prey to exhaustion, and
          a pack can tackle animals many times an individual&apos;s size.
        </p>
      }
      behavior={
        <p>
          Dholes are intensely social, living in packs that cooperate closely in hunting, raising pups, and
          defending territory. They communicate with a rich repertoire of sounds — the signature whistles,
          plus screams, mews, and clucks — that help coordinate the pack in dense forest. They are bold and
          highly cooperative: the whole pack helps feed and guard the pups, and members share food. Dholes
          are mostly active by day, especially around dawn and dusk, and they are strong swimmers that may
          drive prey into water. Despite old reputations, they are not a danger to people.
        </p>
      }
      humanInteraction={
        <p>
          The dhole is Endangered and declining, threatened by habitat loss and fragmentation, depletion of
          its wild prey, persecution, and diseases caught from domestic dogs. It survives largely in
          protected areas across Asia and depends on intact forests with healthy prey populations and on
          coexistence with people. As a wild pack predator it is not suited to captivity as a pet. Consult
          the IUCN Red List for current status.
        </p>
      }
      faqs={[
        {
          question: "Why is the dhole called the 'whistling dog'?",
          answer:
            "Because of its distinctive calls. Dholes keep in contact using an eerie range of sounds, including clear whistles, along with screams, mews, and clucks. The whistling, which helps pack members coordinate and regroup in dense forest, is so characteristic that it earned the dhole the nickname 'whistling dog.'",
        },
        {
          question: "Is a dhole a type of wolf or wild dog?",
          answer:
            "It's a wild member of the dog family, but a distinctive one: the dhole is the only living species in its own genus (Cuon), set somewhat apart from wolves, domestic dogs, jackals, and foxes. So while it's a 'wild dog,' it's not a wolf and not closely interchangeable with them — it has its own lineage and traits, like extra-cooperative pack hunting.",
        },
        {
          question: "How do dholes hunt?",
          answer:
            "As a coordinated pack, relying on teamwork and stamina. Dholes chase medium-to-large prey such as deer and wild pigs, often running them to exhaustion, and together a pack can overpower animals far larger than a single dhole. They communicate with whistles and other calls to stay coordinated during the hunt, and the pack shares the food afterward.",
        },
        {
          question: "Are dholes dangerous to people?",
          answer:
            "No. Despite some old, exaggerated reputations, dholes are not a threat to humans and generally avoid people. They're shy of humans and far more endangered than dangerous. The real story is conservation: the dhole is an Endangered predator that needs protected forests and healthy prey to survive.",
        },
      ]}
      quickFacts={[
        { label: "Scientific name", value: "Cuon alpinus" },
        { label: "Class", value: "Mammalia (wild dog; own genus)" },
        { label: "Also called", value: "Asiatic wild dog, whistling dog" },
        { label: "Voice", value: "Whistles, screams, clucks (coordinate the pack)" },
        { label: "Hunting", value: "Cooperative pack; endurance chases" },
        { label: "Social", value: "Highly social; whole pack raises pups" },
        { label: "Range", value: "S, SE & C/E Asia (much reduced)" },
        { label: "Status", value: "Endangered (verify)" },
      ]}
      relatedLinks={[
        { label: "Wolf Profile", href: "/animals/wolf", description: "Another pack-hunting canid" },
        { label: "Coyote Profile", href: "/animals/coyote", description: "Another adaptable wild dog" },
        { label: "Hyena Profile", href: "/animals/hyena", description: "Another social predator (not a canid)" },
        { label: "Endangered Animals", href: "/endangered-animals", description: "IUCN Red List categories" },
        { label: "Mammals Encyclopedia", href: "/animal-encyclopedia/mammals" },
      ]}
    />
  );
}
