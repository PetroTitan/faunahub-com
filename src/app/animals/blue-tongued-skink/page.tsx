import type { Metadata } from "next";
import AnimalProfileLayout from "@/components/AnimalProfileLayout";
import { ANIMAL_SOURCES } from "@/lib/educational/animal-sources";
import { getAnimalGalleryImages, getAnimalImage, getAnimalOgImage } from "@/lib/images/animal-images";
import { buildArticleMetadata } from "@/lib/metadata";

const PATH = "/animals/blue-tongued-skink";
const TITLE = "Blue-tongued Skink: Tiliqua Lizard Facts";
const DESC =
  "Learn about blue-tongued skinks (genus Tiliqua), large short-legged lizards of parts of Australia and New Guinea named for their blue tongue display.";

export const metadata: Metadata = buildArticleMetadata({
  title: TITLE,
  description: DESC,
  path: PATH,
  publishedTime: "2026-06-28",
  modifiedTime: "2026-06-28",
  ogImage: getAnimalOgImage("blue-tongued-skink"),
});

export default function BlueTonguedSkinkPage() {
  return (
    <AnimalProfileLayout
      commonName="Blue-tongued Skink"
      scientificName="Tiliqua (several species)"
      pageTitle={TITLE}
      description={DESC}
      path={PATH}
      parentCategory="Reptiles & Amphibians"
      parentCategoryHref="/animal-encyclopedia/reptiles"
      tags={["Reptile","Skink","Australia"]}
      image={getAnimalImage("blue-tongued-skink") ?? undefined}
      galleryImages={getAnimalGalleryImages("blue-tongued-skink")}
      sources={ANIMAL_SOURCES["blue-tongued-skink"]}
      publishedDate="2026-06-28"
      modifiedDate="2026-06-28"
      overview={
        <>
          <p>
            Blue-tongued skinks are a group of large, stout, short-legged lizards in the genus <em>Tiliqua</em>, instantly recognizable for the bright blue tongue they reveal in a startling defensive display. The common name &quot;blue-tongued skink&quot; is not one species but covers several species within the genus, found across parts of Australia, New Guinea and some nearby islands. Because the name spans multiple species, generalizations about size, color and habitat should be treated cautiously, as details differ from one species to another.
          </p>
          <p>
            These reptiles are ground-dwelling members of the skink family and are notable for their relatively heavy bodies, smooth scales and reduced limbs. They move with a characteristic slow, deliberate gait and rely more on bluff displays and camouflage than on speed to avoid predators. As omnivores, they feed on a varied mix of plant and animal matter, which contributes to their adaptability across a range of habitats.
          </p>
          <p>
            Conservation status varies among the species grouped under this name. Several are assessed by the IUCN Red List as Least Concern, while some other species are considered threatened. Rather than applying a single category to the whole group, it is more accurate to say that status is assessed species by species and can change as new information becomes available.
          </p>
          <h3>Taxonomy and animal group</h3>
          <p>
            Blue-tongued skinks belong to the genus <em>Tiliqua</em>, part of the skink family Scincidae within the order Squamata (lizards and snakes). The genus contains several recognized species, and the common name &quot;blue-tongued skink&quot; is applied broadly across them rather than to a single animal. Because of this, the scientific reference is best given at the genus level, <em>Tiliqua</em>, with individual species carrying their own specific names. They are sometimes called blue-tongued lizards or simply &quot;blueys&quot; in everyday Australian usage, but these informal labels can refer to more than one species.
          </p>
          <h3>Appearance and recognition</h3>
          <p>
            Most blue-tongued skinks share a recognizable body plan: a broad, somewhat flattened head, a thick body, a relatively short tail and short legs that look small for their bulk. Scales are typically smooth and overlapping, often patterned in bands or blotches of brown, gray, silver or orange tones that vary among species and populations. The feature that gives the group its name is the broad, vividly blue tongue, which is normally hidden but is extended conspicuously when the animal feels threatened. Exact size, coloration and markings differ from one species to another, so identification often depends on local context and the particular species involved.
          </p>
        </>
      }
      habitat={
        <p>
          Blue-tongued skinks are associated with parts of Australia, New Guinea and some nearby islands, with different species occupying different regions rather than the group spanning any area uniformly. Across these areas they are found in a variety of terrestrial habitats, which may include woodlands, grasslands, scrub, semi-arid country and, for some species, areas modified by people. They are generally ground-dwellers that shelter under logs, rocks, leaf litter or dense vegetation. Because the name covers several species, any statement about distribution should be read as applying to particular species in particular regions, not to all of Australia or to the whole region.
        </p>
      }
      diet={
        <p>
          As omnivores, blue-tongued skinks consume a broad diet that combines plant and animal material. Depending on the species and what is available, this can include a range of invertebrates such as snails, insects and other small creatures, along with fruits, flowers, leaves and other vegetation. Their relatively powerful jaws allow them to crush hard-shelled prey like snails. This flexible, opportunistic feeding likely helps them persist across varied habitats and seasonal changes in food supply.
        </p>
      }
      behavior={
        <>
          <p>
            Blue-tongued skinks are typically slow-moving and spend much of their active time foraging on the ground or basking to regulate body temperature, as reptiles rely on external warmth. When confronted, rather than fleeing quickly, many will adopt a defensive posture, open the mouth and flash the blue tongue while hissing or flattening the body to appear larger, a bluff that can deter predators. Many species in the genus give birth to live young rather than laying eggs, though reproductive details vary among species. Outside of such encounters they are generally unobtrusive and often go unnoticed in the wild.
          </p>
          <p>
            Within their habitats, blue-tongued skinks act as both consumers and prey, contributing to local food webs. By eating invertebrates such as snails and insects, they can help regulate those populations, while their consumption of fruits and plant matter may play a small role in moving seeds. As sizable, ground-dwelling lizards, they in turn serve as food for larger predators, including birds of prey, snakes and other animals. Their omnivorous, adaptable habits make them a familiar part of the reptile communities in the regions where they occur.
          </p>
        </>
      }
      humanInteraction={
        <p>
          Blue-tongued skinks are often encountered in gardens and around homes in some regions, where they are generally harmless to people and may help control garden invertebrates. Their dramatic tongue display is a bluff rather than a sign of danger, and they are not venomous, though any wild animal may bite or scratch if cornered and is best observed without handling. Anyone who finds an injured skink, or has concerns about a wild reptile, should contact local wildlife authorities rather than intervening directly. Conservation outlook differs by species: many are assessed by the IUCN Red List as Least Concern, while some are considered threatened, and these assessments may be revised as new data emerge. This profile is educational and does not provide guidance on keeping these animals.
        </p>
      }
      faqs={[
        {
          question: "Is a blue-tongued skink one species?",
          answer:
            "No. \"Blue-tongued skink\" refers to several species within the genus Tiliqua, not a single animal, so details like size, color and conservation status vary among them.",
        },
        {
          question: "Why do blue-tongued skinks have a blue tongue?",
          answer:
            "The bright blue tongue is used in a defensive display: when threatened, the skink opens its mouth and flashes the tongue to startle or deter potential predators. It is a bluff and not a sign that the animal is dangerous to people.",
        },
        {
          question: "Are blue-tongued skinks dangerous or venomous?",
          answer:
            "They are not venomous and are generally harmless to people. Like any wild animal, one may bite if cornered, so they are best observed without handling; concerns about an injured or unusual reptile should go to local wildlife authorities.",
        },
        {
          question: "What do blue-tongued skinks eat?",
          answer:
            "They are omnivores with a varied diet that can include snails, insects and other invertebrates along with fruits, flowers and other plant material, depending on the species and what is available.",
        },
      ]}
      quickFacts={[
        { label: "Scientific name", value: "Tiliqua (several species)" },
        { label: "Animal group", value: "Reptile (lizard)" },
        { label: "Family/order", value: "Scincidae; Squamata" },
        { label: "Size", value: "Large, stout skinks; size varies by species" },
        { label: "Diet", value: "Omnivorous (invertebrates and plant matter)" },
        { label: "Habitat", value: "Terrestrial; woodlands, grasslands, scrub and modified areas" },
        { label: "Range", value: "Parts of Australia, New Guinea and nearby islands" },
        { label: "Conservation status", value: "Varies by species (IUCN Red List); many Least Concern, some threatened" },
      ]}
      relatedLinks={[
        { label: "Skink", href: "/animals/skink", description: "Skinks more broadly" },
        { label: "Gecko", href: "/animals/gecko", description: "Another lizard" },
        { label: "Frilled Lizard", href: "/animals/frilled-lizard", description: "Another Australian lizard" },
        { label: "Oceania fauna", href: "/fauna/continents/oceania", description: "Animals of Oceania" },
        { label: "Reptiles & Amphibians", href: "/animal-encyclopedia/reptiles" },
      ]}
    />
  );
}
