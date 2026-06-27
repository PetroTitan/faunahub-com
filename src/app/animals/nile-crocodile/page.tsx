import type { Metadata } from "next";
import AnimalProfileLayout from "@/components/AnimalProfileLayout";
import { ANIMAL_SOURCES } from "@/lib/educational/animal-sources";
import { getAnimalGalleryImages, getAnimalImage, getAnimalOgImage } from "@/lib/images/animal-images";
import { buildArticleMetadata } from "@/lib/metadata";

const PATH = "/animals/nile-crocodile";
const TITLE = "Nile Crocodile: Africa's Large Waterway Reptile";
const DESC =
  "The Nile crocodile (Crocodylus niloticus) is a large crocodilian of African rivers and wetlands. Learn about its biology, behaviour, ecology and role.";

export const metadata: Metadata = buildArticleMetadata({
  title: TITLE,
  description: DESC,
  path: PATH,
  publishedTime: "2026-06-27",
  modifiedTime: "2026-06-27",
  ogImage: getAnimalOgImage("nile-crocodile"),
});

export default function NileCrocodilePage() {
  return (
    <AnimalProfileLayout
      commonName="Nile Crocodile"
      scientificName="Crocodylus niloticus"
      pageTitle={TITLE}
      description={DESC}
      path={PATH}
      parentCategory="Reptiles & Amphibians"
      parentCategoryHref="/animal-encyclopedia/reptiles"
      tags={["Reptile","Crocodilian","African rivers"]}
      image={getAnimalImage("nile-crocodile") ?? undefined}
      galleryImages={getAnimalGalleryImages("nile-crocodile")}
      sources={ANIMAL_SOURCES["nile-crocodile"]}
      publishedDate="2026-06-27"
      modifiedDate="2026-06-27"
      overview={
        <>
          <p>
            The Nile crocodile (<em>Crocodylus niloticus</em>) is one of the largest crocodilians and a familiar reptile of rivers, lakes, and wetlands across parts of sub-Saharan Africa, including the Nile basin. As an ambush predator, it spends long periods motionless at the water&#39;s edge or partly submerged, taking prey that ranges from fish and birds to mammals. Larger individuals function as powerful apex predators of the waterways they inhabit.
          </p>
          <p>
            Beyond its predatory reputation, the species shows surprisingly complex behaviour. Females build and guard nests, attend their eggs through incubation, and help hatchlings reach the water, and adults engage in elaborate basking and social interactions along shared stretches of shoreline. These traits make the Nile crocodile an important subject for the study of reptile parental care and thermoregulation.
          </p>
          <p>
            Distribution and conservation status both vary by region, and the details here should be checked against authoritative sources such as the IUCN Red List, the Animal Diversity Web, or museum and university zoology references. The Nile crocodile is a genuine danger to people in some areas and is involved in human-wildlife conflict; concerns about a specific animal, a waterway, or a bite should be directed to local wildlife authorities and qualified medical or emergency professionals.
          </p>
          <h3>Taxonomy and animal group</h3>
          <p>
            The Nile crocodile is a crocodilian, a member of the reptile order Crocodylia that also includes other crocodiles, alligators, caimans, and gharials. Within this group it belongs to the genus <em>Crocodylus</em>, the &quot;true crocodiles,&quot; and carries the scientific name <em>Crocodylus niloticus</em>. Crocodilians are archosaurs, the same broad lineage that includes birds, and they retain many ancient features. Like all reptiles, the Nile crocodile is ectothermic, relying on its environment and behaviour to regulate body temperature.
          </p>
          <h3>Appearance and recognition</h3>
          <p>
            The Nile crocodile is a large, heavily built reptile with a long, broad snout, powerful jaws, and a muscular, laterally flattened tail used for swimming. Its body is covered in tough, scaled skin, with raised bony plates called osteoderms along the back that provide protection and help with heat exchange during basking. Coloration is generally dark olive to grey-brown, often with darker banding that is more pronounced in younger animals and helps with camouflage in murky water. The eyes, ears, and nostrils sit high on the head, allowing the animal to see, hear, and breathe while the rest of its body remains submerged. Adults reach substantial sizes, with the largest individuals counting among the biggest crocodilians.
          </p>
        </>
      }
      habitat={
        <p>
          The Nile crocodile is associated with freshwater habitats across parts of sub-Saharan Africa, including rivers, lakes, swamps, and other wetlands, as well as the Nile basin for which it is named. Its occurrence varies considerably by region rather than spanning the whole continent uniformly, and local populations depend on suitable water, basking sites, and nesting banks. The species can tolerate a range of conditions and is sometimes found in brackish or estuarine waters near the coast. Range details differ between regions and over time, so distribution claims should be confirmed against authoritative sources such as the IUCN Red List.
        </p>
      }
      diet={
        <p>
          The Nile crocodile is a carnivorous, opportunistic predator whose diet shifts with age and size. Young crocodiles feed largely on insects, small fish, amphibians, and other small prey, while larger individuals take fish, birds, reptiles, and mammals of increasing size. It is primarily an ambush hunter, waiting near the water&#39;s edge and using a sudden lunge to seize prey, which it may then pull into the water. Crocodiles cannot chew, so they often grip and twist to break apart larger food items. Feeding is intermittent, and the species can endure long periods between meals.
        </p>
      }
      behavior={
        <>
          <p>
            Much of a Nile crocodile&#39;s day is spent thermoregulating, basking on banks to warm up and returning to the water or shade to cool down, sometimes resting with the mouth open. The species shows notable social behaviour, including dominance interactions and shared basking sites. Reproduction involves the female digging a nest in a bank or sandy area and laying a clutch of eggs, which she guards through incubation. Nest temperature influences the sex of the developing young, a trait seen in many reptiles. Females are attentive parents: they may help hatchlings emerge, carry them gently toward the water, and guard them for a period after hatching, behaviour that is unusual among reptiles and well documented in this species.
          </p>
          <p>
            As a large predator, the Nile crocodile plays an important ecological role in many African freshwater systems. By preying on fish, birds, and mammals, and by scavenging carcasses, it helps shape prey populations and contributes to nutrient cycling within and around its wetlands. Crocodile nesting banks, basking areas, and the channels they keep open can influence the wider habitat, and the species is part of long food chains that connect aquatic and terrestrial life. Its presence is often regarded as a sign of a functioning African waterway, though the strength of these ecological effects varies from place to place.
          </p>
        </>
      }
      humanInteraction={
        <p>
          The Nile crocodile has a long and complex relationship with people across its African range. It is a real danger to humans in some areas and is involved in human-wildlife conflict, particularly where people use the same waters for daily needs as crocodiles inhabit. This is a genuine safety concern, but it is best understood calmly: risk varies by location, season, and individual animal, and it is not a reason for sensationalism. Anyone facing a problem with a specific crocodile or a dangerous stretch of water should contact local wildlife authorities, and any bite or injury is a medical emergency that should be handled by qualified medical and emergency professionals. Historically the species was hunted for its skin, which contributed to declines in some regions; overall it is not considered globally threatened, though status varies locally and should be checked against the IUCN Red List.
        </p>
      }
      faqs={[
        {
          question: "Where is the Nile crocodile found?",
          answer:
            "It occurs in freshwater rivers, lakes, swamps, and wetlands across parts of sub-Saharan Africa, including the Nile basin. Its distribution varies by region rather than covering the whole continent uniformly, so specific range details should be checked against sources such as the IUCN Red List.",
        },
        {
          question: "What does the Nile crocodile eat?",
          answer:
            "It is a carnivorous, opportunistic ambush predator. Young animals eat insects, small fish, and amphibians, while larger individuals take fish, birds, reptiles, and mammals. Feeding is intermittent, and crocodiles can go long periods between meals.",
        },
        {
          question: "Is the Nile crocodile dangerous to people?",
          answer:
            "It can be a genuine danger to people in some areas and is involved in human-wildlife conflict, though risk varies by location and individual. Concerns about a specific animal or waterway should be directed to local wildlife authorities, and any injury is a medical emergency for qualified professionals.",
        },
        {
          question: "Are Nile crocodiles good parents?",
          answer:
            "For a reptile, yes, they show notable parental care. Females build and guard nests, attend the eggs through incubation, and often help hatchlings reach the water and guard them for a time afterward, behaviour that is well documented in the species.",
        },
      ]}
      quickFacts={[
        { label: "Group", value: "Crocodilian (reptile)" },
        { label: "Higher classification", value: "Order Crocodylia; genus Crocodylus" },
        { label: "Diet", value: "Carnivorous; fish, birds, and mammals (opportunistic ambush predator)" },
        { label: "Notable trait", value: "Large apex predator with attentive female parental care" },
        { label: "Habitat", value: "Freshwater rivers, lakes, swamps, and wetlands" },
        { label: "Africa distribution", value: "Parts of sub-Saharan Africa and the Nile basin; varies by region" },
        { label: "Human interaction", value: "Involved in human-wildlife conflict; historically hunted for skins" },
        { label: "Conservation status", value: "Not considered globally threatened overall; varies by region (check IUCN)" },
      ]}
      relatedLinks={[
        { label: "Crocodile Profile", href: "/animals/crocodile", description: "Crocodiles more broadly" },
        { label: "Gharial Profile", href: "/animals/gharial", description: "A fish-eating crocodilian" },
        { label: "Hippopotamus Profile", href: "/animals/hippopotamus", description: "Shares African waterways" },
        { label: "African fauna", href: "/fauna/continents/africa", description: "Animals of Africa" },
        { label: "Reptiles & Amphibians", href: "/animal-encyclopedia/reptiles" },
      ]}
    />
  );
}
