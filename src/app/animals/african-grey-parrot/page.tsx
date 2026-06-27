import type { Metadata } from "next";
import AnimalProfileLayout from "@/components/AnimalProfileLayout";
import { ANIMAL_SOURCES } from "@/lib/educational/animal-sources";
import { getAnimalGalleryImages, getAnimalImage, getAnimalOgImage } from "@/lib/images/animal-images";
import { buildArticleMetadata } from "@/lib/metadata";

const PATH = "/animals/african-grey-parrot";
const TITLE = "African Grey Parrot: Facts, Habitat, and Conservation";
const DESC =
  "Learn about the African grey parrot (Psittacus erithacus), a rainforest bird known for vocal mimicry and cognition, and why it is listed as Endangered.";

export const metadata: Metadata = buildArticleMetadata({
  title: TITLE,
  description: DESC,
  path: PATH,
  publishedTime: "2026-06-27",
  modifiedTime: "2026-06-27",
  ogImage: getAnimalOgImage("african-grey-parrot"),
});

export default function AfricanGreyParrotPage() {
  return (
    <AnimalProfileLayout
      commonName="African Grey Parrot"
      scientificName="Psittacus erithacus"
      pageTitle={TITLE}
      description={DESC}
      path={PATH}
      parentCategory="Birds"
      parentCategoryHref="/animal-encyclopedia/birds"
      tags={["Bird","Parrot","Endangered"]}
      image={getAnimalImage("african-grey-parrot") ?? undefined}
      galleryImages={getAnimalGalleryImages("african-grey-parrot")}
      sources={ANIMAL_SOURCES["african-grey-parrot"]}
      publishedDate="2026-06-27"
      modifiedDate="2026-06-27"
      overview={
        <>
          <p>
            The African grey parrot (<em>Psittacus erithacus</em>) is a medium-sized grey parrot of the rainforests of western and central Africa, easily recognised by its pale grey plumage and bright red tail. It is renowned for its exceptional vocal mimicry and problem-solving ability, and is among the most studied birds in animal-cognition research.
          </p>
          <p>
            In the wild, African grey parrots form flocks and feed on fruits, seeds, and nuts, with oil-palm fruit being a notable food source. They nest in tree cavities within forested landscapes. The species is listed as Endangered, and capture of wild birds for the international pet trade, together with habitat loss, is a major driver of its decline. It is protected under CITES, and this profile is educational and does not recommend keeping one as a pet.
          </p>
          <p>
            Range and conservation details can shift as forests change and as research continues, so specific distribution and status figures should always be checked against authoritative sources such as the IUCN Red List, CITES, and peer-reviewed zoology. This is an educational profile and not advice on keeping, capturing, or handling wild birds.
          </p>
          <h3>Taxonomy and animal group</h3>
          <p>
            The African grey parrot belongs to the parrot family (order Psittaciformes), a group of hook-billed, often highly social birds found across many tropical regions. As <em>Psittacus erithacus</em>, it sits among the true parrots and is closely associated in popular and scientific accounts with its reputation for learning and imitation. Like other parrots, it has zygodactyl feet (two toes pointing forward and two back) that aid in climbing and manipulating food.
          </p>
          <h3>Appearance and recognition</h3>
          <p>
            This is a medium-sized parrot with predominantly soft grey plumage that varies in shade across the body, paler around the face and darker on the wings. Its most distinctive feature is a bright red tail, which contrasts sharply with the grey body. The bill is dark and strongly hooked, and the bare facial skin around the eye is pale. Overall the bird presents a restrained, elegant colour scheme compared with many brightly coloured parrots.
          </p>
        </>
      }
      habitat={
        <p>
          The African grey parrot is associated with the lowland rainforests of parts of western and central Africa, where it depends on forest trees for both food and nesting cavities. Its native range lies within these humid forested regions rather than across the whole continent, and distribution varies by area as suitable forest habitat changes. Because habitat loss is a recognised pressure on the species, its presence in any given locality should be confirmed against current authoritative range maps rather than assumed.
        </p>
      }
      diet={
        <p>
          In the wild, the African grey parrot feeds on fruits, seeds, and nuts, with oil-palm fruit noted as an especially important food. Its strong, hooked bill allows it to crack hard shells and manipulate awkward items, and flocks may move through the forest canopy in search of fruiting and seeding trees. As with many parrots, this fruit- and seed-based diet links the bird closely to the health and productivity of its forest habitat.
        </p>
      }
      behavior={
        <>
          <p>
            African grey parrots are highly social, forming flocks and using a varied range of calls. The species is celebrated for exceptional vocal mimicry and problem-solving, qualities that have made it a frequent subject of animal-cognition research. Pairs nest in tree cavities, relying on mature forest trees with suitable hollows. This combination of strong social bonds, advanced learning, and cavity-nesting shapes much of the bird&#39;s natural life.
          </p>
          <p>
            As a fruit- and seed-eating bird of western and central African rainforests, the African grey parrot is part of the forest community that processes and moves plant material through its feeding. Its reliance on tree cavities for nesting ties its breeding success to the presence of mature forest, and its broad diet connects it to many fruiting and seeding trees. These ecological links mean that pressures on African forests can affect the parrot, and that the parrot&#39;s status can in turn reflect the condition of those forests.
          </p>
        </>
      }
      humanInteraction={
        <p>
          The African grey parrot is popular in the international pet trade because of its striking mimicry and intelligence, but the capture of wild birds for that trade, alongside habitat loss, is a major driver of the species&#39; decline. It is listed as Endangered and is protected under CITES. This profile presents that relationship as a serious conservation concern, not as a recommendation to keep, capture, or handle one. Questions about legal protection, trade, or wild populations are best directed to recognised conservation and wildlife authorities such as those administering CITES and the IUCN.
        </p>
      }
      faqs={[
        {
          question: "Why is the African grey parrot considered Endangered?",
          answer:
            "It is listed as Endangered largely because of capture of wild birds for the international pet trade combined with habitat loss. It is protected under CITES, and current details should be checked against the IUCN Red List and CITES.",
        },
        {
          question: "What does the African grey parrot eat in the wild?",
          answer:
            "Wild African grey parrots feed on fruits, seeds, and nuts, with oil-palm fruit being a notable food source. Their strong hooked bill helps them open hard items as they forage in the forest canopy.",
        },
        {
          question: "Why is the African grey parrot famous in research?",
          answer:
            "It is renowned for exceptional vocal mimicry and problem-solving and is among the most studied birds in animal-cognition research, which has made it a well-known subject in studies of bird intelligence.",
        },
        {
          question: "Where does the African grey parrot live?",
          answer:
            "It is associated with lowland rainforests of parts of western and central Africa, where it relies on forest trees for food and on tree cavities for nesting. Specific range should be confirmed against authoritative sources.",
        },
      ]}
      quickFacts={[
        { label: "Group", value: "Parrot (bird)" },
        { label: "Higher classification", value: "Order Psittaciformes; Psittacus erithacus" },
        { label: "Diet", value: "Fruits, seeds, and nuts, including oil-palm fruit" },
        { label: "Notable trait", value: "Exceptional vocal mimicry and problem-solving; bright red tail" },
        { label: "Habitat", value: "Lowland rainforest; nests in tree cavities" },
        { label: "Africa distribution", value: "Parts of western and central Africa; varies by region" },
        { label: "Human interaction", value: "Popular in the pet trade; wild capture is a conservation concern" },
        { label: "Conservation status", value: "Endangered (IUCN); CITES-protected" },
      ]}
      relatedLinks={[
        { label: "Parrot Profile", href: "/animals/parrot", description: "Parrots more broadly" },
        { label: "Hornbill Profile", href: "/animals/hornbill", description: "Another African forest bird" },
        { label: "Kakapo Profile", href: "/animals/kakapo", description: "An endangered parrot" },
        { label: "African fauna", href: "/fauna/continents/africa", description: "Animals of Africa" },
        { label: "Endangered Animals", href: "/endangered-animals", description: "Conservation status & the Red List" },
      ]}
    />
  );
}
