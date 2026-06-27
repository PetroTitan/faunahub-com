import type { Metadata } from "next";
import AnimalProfileLayout from "@/components/AnimalProfileLayout";
import { ANIMAL_SOURCES } from "@/lib/educational/animal-sources";
import { getAnimalGalleryImages, getAnimalImage, getAnimalOgImage } from "@/lib/images/animal-images";
import { buildArticleMetadata } from "@/lib/metadata";

const PATH = "/animals/tsetse-fly";
const TITLE = "Tsetse Fly (Glossina): Biology and African Range";
const DESC =
  "Learn about the tsetse fly (genus Glossina), a blood-feeding African insect, its biology, unusual reproduction, ecology, and public-health context.";

export const metadata: Metadata = buildArticleMetadata({
  title: TITLE,
  description: DESC,
  path: PATH,
  publishedTime: "2026-06-27",
  modifiedTime: "2026-06-27",
  ogImage: getAnimalOgImage("tsetse-fly"),
});

export default function TsetseFlyPage() {
  return (
    <AnimalProfileLayout
      commonName="Tsetse Fly"
      scientificName="genus Glossina"
      pageTitle={TITLE}
      description={DESC}
      path={PATH}
      parentCategory="Insects & Invertebrates"
      parentCategoryHref="/animal-encyclopedia/insects"
      tags={["Insect","Fly","African"]}
      image={getAnimalImage("tsetse-fly") ?? undefined}
      galleryImages={getAnimalGalleryImages("tsetse-fly")}
      sources={ANIMAL_SOURCES["tsetse-fly"]}
      publishedDate="2026-06-27"
      modifiedDate="2026-06-27"
      overview={
        <>
          <p>
            Tsetse flies are blood-feeding flies of the genus <em>Glossina</em>, found in parts of sub-Saharan Africa. Unlike many biting insects in which only females take blood, both male and female tsetse flies feed on the blood of vertebrate animals. This habit, combined with their ability to carry certain parasites, has made them one of the more closely studied insect groups on the African continent.
          </p>
          <p>
            Tsetse flies are of considerable medical and economic importance because some species can transmit single-celled trypanosome parasites. These parasites can cause African sleeping sickness (human African trypanosomiasis) in people and a related disease called nagana in livestock. The presence of tsetse flies has influenced patterns of land use and livestock-keeping across parts of Africa for a very long time.
          </p>
          <p>
            Range, species composition, and disease risk vary considerably from region to region, and the details given here should be checked against authoritative sources such as the IUCN Red List, Animal Diversity Web, and public-health institutions. Tsetse flies are associated with a public-health concern: any questions about illness, bites, or disease should be directed to qualified medical professionals or local health authorities.
          </p>
          <h3>Taxonomy and animal group</h3>
          <p>
            Tsetse flies belong to the genus <em>Glossina</em>, a group of true flies within the insect order Diptera. As insects, they have a three-part body of head, thorax, and abdomen, a single pair of functional wings, and mouthparts adapted for piercing skin and drawing blood. The genus includes a number of species that differ in appearance, preferred habitat, and the animals they feed on. They are placed among the higher flies and are distinct from mosquitoes and other biting Diptera, though like those groups some members can act as carriers of disease-causing organisms.
          </p>
          <h3>Appearance and recognition</h3>
          <p>
            Adult tsetse flies are sturdy, brownish flies, generally a little larger than a common housefly, though size varies by species. A characteristic feature is the way the wings fold flat and fully overlap over the abdomen at rest, one atop the other like the blades of a closed pair of scissors. The mouthparts form a forward-projecting proboscis used for piercing skin and feeding on blood. At close range, fine branched hairs on the antennae and a distinctive wing-vein pattern help separate tsetse flies from other similar-looking flies.
          </p>
        </>
      }
      habitat={
        <p>
          Tsetse flies occur across parts of sub-Saharan Africa, where they are native; they are not generally established outside the continent. Within Africa their distribution is patchy rather than continuous, and different species are tied to different settings — some to moist riverine and forest-edge vegetation, others to drier savanna woodland. Because they depend on shade, suitable resting sites, and available host animals, their presence can shift over relatively short distances. The precise range varies by region and species and should be confirmed against authoritative distribution maps.
        </p>
      }
      diet={
        <p>
          Tsetse flies feed exclusively on blood, and notably both sexes do so, rather than only the females as in many other biting flies. They obtain blood meals from a range of vertebrate hosts, which depending on the species and setting may include wild mammals, livestock, and at times people. The blood meal provides the nutrition needed for survival and reproduction. Their dependence on living hosts is central both to their biology and to their role in moving certain parasites between animals.
        </p>
      }
      behavior={
        <>
          <p>
            Tsetse flies are active fliers that locate hosts using cues such as movement, shape, and odor. Their reproduction is unusual among insects: rather than laying many eggs, a female nourishes a single larva inside her body, one at a time. She gives birth to a fully developed larva that is ready to pupate almost immediately, burrowing into the soil to complete development before emerging as an adult. Because each female produces relatively few offspring over her life, tsetse populations grow more slowly than those of many other flies.
          </p>
          <p>
            As blood-feeders, tsetse flies are part of the web of interactions linking insects, wild mammals, and the parasites they carry across parts of African savanna and woodland. Their role as carriers of trypanosomes has had a broad ecological and historical footprint: in areas where the flies and these parasites are present, keeping cattle and other livestock has historically been difficult, which in turn has shaped how land has been used and, in some places, left wildlife habitat comparatively undisturbed. This interplay between fly, parasite, livestock, and land use is a recurring theme in the ecology of the regions where <em>Glossina</em> occurs.
          </p>
        </>
      }
      humanInteraction={
        <p>
          Tsetse flies are significant to people mainly through their link to disease in humans and livestock, which has affected health, agriculture, and settlement patterns across parts of Africa. This profile presents that link as biology and public-health context only. It is not medical guidance: anyone concerned about a bite, possible illness, or sleeping sickness should consult qualified medical professionals or local health authorities, and questions about fly management in a given area are best directed to the relevant agricultural or public-health authorities. No treatment, diagnosis, or control instructions are offered here.
        </p>
      }
      faqs={[
        {
          question: "What is a tsetse fly?",
          answer:
            "A tsetse fly is a blood-feeding fly of the genus Glossina, found in parts of sub-Saharan Africa. Unusually, both males and females feed on the blood of vertebrate animals.",
        },
        {
          question: "Why are tsetse flies considered important?",
          answer:
            "Some tsetse species can transmit trypanosome parasites that cause African sleeping sickness in people and nagana in livestock. This has shaped land use and livestock-keeping across parts of Africa. Any health concerns should be directed to qualified medical professionals or local health authorities.",
        },
        {
          question: "How do tsetse flies reproduce?",
          answer:
            "Their reproduction is unusual: a female nourishes a single larva inside her body and gives birth to it ready to pupate, rather than laying many eggs. As a result, populations grow comparatively slowly.",
        },
        {
          question: "Where are tsetse flies found?",
          answer:
            "Tsetse flies are native to parts of sub-Saharan Africa, where their distribution is patchy and varies by species and habitat. Exact ranges should be checked against authoritative distribution sources.",
        },
      ]}
      quickFacts={[
        { label: "Group", value: "Biting flies (genus Glossina)" },
        { label: "Higher classification", value: "Insects, order Diptera (true flies)" },
        { label: "Diet", value: "Blood of vertebrates; both sexes feed" },
        { label: "Notable trait", value: "Female bears a single larva ready to pupate" },
        { label: "Habitat", value: "Riverine, forest-edge, and savanna woodland; varies by species" },
        { label: "Africa distribution", value: "Parts of sub-Saharan Africa; patchy, varies by region" },
        { label: "Human interaction", value: "Linked to sleeping sickness and livestock nagana; a public-health concern" },
        { label: "Conservation status", value: "Varies / not well assessed" },
      ]}
      relatedLinks={[
        { label: "Dung Beetle Profile", href: "/animals/dung-beetle", description: "Another African insect" },
        { label: "Termite Profile", href: "/animals/termite", description: "A key African insect" },
        { label: "Wasp Profile", href: "/animals/wasp", description: "Another insect" },
        { label: "African fauna", href: "/fauna/continents/africa", description: "Animals of Africa" },
        { label: "Insects & Invertebrates", href: "/animal-encyclopedia/insects" },
      ]}
    />
  );
}
