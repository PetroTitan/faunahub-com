import type { Metadata } from "next";
import AnimalProfileLayout from "@/components/AnimalProfileLayout";
import { ANIMAL_SOURCES } from "@/lib/educational/animal-sources";
import { getAnimalGalleryImages, getAnimalImage, getAnimalOgImage } from "@/lib/images/animal-images";
import { buildArticleMetadata } from "@/lib/metadata";

const PATH = "/animals/secretary-bird";
const TITLE = "Secretarybird — Profile, Snake-Stomping Hunter of the Savanna";
const DESC =
  "Explore the secretarybird (Sagittarius serpentarius): a tall, long-legged bird of prey that hunts on foot across African grasslands, stamping on snakes and other prey. Endangered.";

export const metadata: Metadata = buildArticleMetadata({
  title: TITLE,
  description: DESC,
  path: PATH,
  publishedTime: "2026-06-20",
  modifiedTime: "2026-06-20",
  ogImage: getAnimalOgImage("secretary-bird"),
});

export default function SecretaryBirdPage() {
  return (
    <AnimalProfileLayout
      commonName="Secretarybird"
      scientificName="Sagittarius serpentarius"
      pageTitle={TITLE}
      description={DESC}
      path={PATH}
      parentCategory="Birds"
      parentCategoryHref="/animal-encyclopedia/birds"
      tags={["Bird", "Bird of prey", "Savanna"]}
      image={getAnimalImage("secretary-bird") ?? undefined}
      galleryImages={getAnimalGalleryImages("secretary-bird")}
      sources={ANIMAL_SOURCES["secretary-bird"]}
      publishedDate="2026-06-20"
      modifiedDate="2026-06-20"
      overview={
        <>
          <p>
            The secretarybird (<em>Sagittarius serpentarius</em>) is one of the most
            unusual birds of prey — a tall, long-legged raptor that hunts on foot across
            the open grasslands of Africa. It stands over a metre high, with an eagle-like
            head and hooked bill, a crest of long quill-like feathers behind the head, and
            striking black &ldquo;trousers&rdquo; on its long legs. Though it can fly well,
            it spends much of its day striding across the savanna in search of prey.
          </p>
          <p>
            It is most famous for its hunting style: the secretarybird kills snakes and
            other prey by stamping on them with rapid, powerful kicks.
          </p>
          <p>
            <strong>Conservation note:</strong> the secretarybird has declined and is
            assessed as Endangered, mainly from habitat loss and degradation. Verify
            current status at iucnredlist.org.
          </p>
        </>
      }
      habitat={
        <p>
          Secretarybirds live across much of sub-Saharan Africa in open country — savanna,
          grassland, and lightly wooded plains — where there is room to walk and hunt.
          They avoid dense forest and prefer wide, open landscapes, and they roost and
          nest in scattered low trees such as flat-topped acacias.
        </p>
      }
      diet={
        <p>
          Secretarybirds are carnivores that hunt a wide range of ground prey: insects
          (especially grasshoppers and beetles), small mammals such as rodents and hares,
          lizards, birds&apos; eggs and chicks, and snakes — including venomous ones. They
          flush prey by walking briskly through the grass and then dispatch it on the
          ground.
        </p>
      }
      behavior={
        <p>
          The secretarybird&apos;s signature technique is stamping: it strikes prey with
          extremely fast, forceful kicks of its strong feet, delivering blows powerful
          enough to stun or kill snakes and other animals while keeping its head safely
          out of reach. It hunts mostly on foot, covering long distances each day, but
          flies up to roost and to perform a high, undulating courtship display. Pairs
          build large stick nests atop thorny trees.
        </p>
      }
      humanInteraction={
        <p>
          The secretarybird is admired across Africa as a charismatic snake-hunter and
          appears on national emblems, including the coats of arms of South Africa and
          Sudan. Its decline — driven largely by the loss and degradation of grassland
          habitat, along with other pressures — has raised real conservation concern.
          Consult the IUCN Red List for current status.
        </p>
      }
      faqs={[
        {
          question: "How does a secretarybird kill snakes?",
          answer:
            "By stamping. The secretarybird strikes its prey with extremely rapid, powerful kicks of its strong legs and feet, delivering blows hard enough to stun or kill snakes and other animals. Hunting on foot and striking from a distance helps keep its head and body away from a snake's fangs.",
        },
        {
          question: "Is the secretarybird really a bird of prey?",
          answer:
            "Yes. Despite its long legs and ground-walking habits, the secretarybird is a true raptor, with an eagle-like hooked bill and sharp talons. It is unusual mainly in that it hunts mostly on foot across open ground rather than swooping from the air.",
        },
        {
          question: "Why is it called a secretarybird?",
          answer:
            "The name is usually linked to the long, quill-like crest feathers behind its head, said to resemble the quill pens that clerks once tucked behind their ears. (Some suggest the name comes from an Arabic term instead.) Either way, the distinctive head plumes are central to its look.",
        },
        {
          question: "Are secretarybirds endangered?",
          answer:
            "Yes — they are assessed as Endangered. Numbers have fallen, largely because of the loss and degradation of the open grassland they depend on, along with other pressures. Protecting savanna habitat is important for their future, and current status should be checked against the IUCN Red List.",
        },
      ]}
      quickFacts={[
        { label: "Scientific name", value: "Sagittarius serpentarius" },
        { label: "Class", value: "Aves (bird of prey)" },
        { label: "Build", value: "Tall, long-legged; ~1.3 m" },
        { label: "Diet", value: "Carnivore (insects to snakes)" },
        { label: "Hunting style", value: "Stamps prey on foot" },
        { label: "Habitat", value: "African savanna & grassland" },
        { label: "Emblem of", value: "South Africa & Sudan" },
        { label: "IUCN Status", value: "Endangered (verify)" },
      ]}
      relatedLinks={[
        { label: "Eagle Profile", href: "/animals/eagle", description: "A fellow raptor" },
        { label: "Vulture Profile", href: "/animals/vulture", description: "Another large African bird" },
        { label: "Ostrich Profile", href: "/animals/ostrich", description: "Another long-legged savanna bird" },
        { label: "Endangered Animals", href: "/endangered-animals", description: "IUCN Red List categories" },
        { label: "Bird Encyclopedia", href: "/animal-encyclopedia/birds" },
      ]}
    />
  );
}
