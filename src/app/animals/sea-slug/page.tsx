import type { Metadata } from "next";
import AnimalProfileLayout from "@/components/AnimalProfileLayout";
import { ANIMAL_SOURCES } from "@/lib/educational/animal-sources";
import { getAnimalGalleryImages, getAnimalImage, getAnimalOgImage } from "@/lib/images/animal-images";
import { buildArticleMetadata } from "@/lib/metadata";

const PATH = "/animals/sea-slug";
const TITLE = "Sea Slug: Sea Hares and Shell-less Marine Snails";
const DESC =
  "Sea slug is a broad name for shell-less marine gastropods like the sea hare Aplysia. Learn about their appearance, habitat, diet, behavior, and ecology.";

export const metadata: Metadata = buildArticleMetadata({
  title: TITLE,
  description: DESC,
  path: PATH,
  publishedTime: "2026-06-27",
  modifiedTime: "2026-06-27",
  ogImage: getAnimalOgImage("sea-slug"),
});

export default function SeaSlugPage() {
  return (
    <AnimalProfileLayout
      commonName="Sea Slug"
      scientificName="marine gastropods (sea hares, nudibranchs & kin)"
      pageTitle={TITLE}
      description={DESC}
      path={PATH}
      parentCategory="Marine Animals"
      parentCategoryHref="/animal-encyclopedia/marine-animals"
      tags={["Mollusk","Gastropod","Marine invertebrate"]}
      image={getAnimalImage("sea-slug") ?? undefined}
      galleryImages={getAnimalGalleryImages("sea-slug")}
      sources={ANIMAL_SOURCES["sea-slug"]}
      publishedDate="2026-06-27"
      modifiedDate="2026-06-27"
      overview={
        <>
          <p>
            &quot;Sea slug&quot; is a broad, informal common name for many marine gastropod molluscs that, as adults, have no shell or only a small, often internal one. Rather than a single scientific group, it covers several unrelated lineages, including the sea hares (<em>Aplysia</em>), the often vividly coloured nudibranchs, sap-sucking sea slugs, sea angels, and others. The reference animal for this page is the sea hare <em>Aplysia</em>, a large, soft-bodied herbivore that grazes on algae in shallow coastal waters.
          </p>
          <p>
            Sea hares are among the better-studied sea slugs. <em>Aplysia</em> is widely known in neuroscience because it has unusually large nerve cells, which have made it a valuable subject for research into how nervous systems work. When disturbed, many sea hares can release a cloud of purple ink, and a number of sea slug lineages are chemically defended in various ways.
          </p>
          <p>
            Because &quot;sea slug&quot; spans many separate groups, details of biology, range, and behaviour vary widely by species and region. The information here is general and educational; specific claims should always be checked against authoritative sources such as the World Register of Marine Species (WoRMS), Smithsonian Ocean, and Animal Diversity Web.
          </p>
          <h3>Taxonomy and animal group</h3>
          <p>
            Sea slugs are not a single taxonomic unit but an informal grouping of marine gastropod molluscs that, as adults, lack an external shell or have only a small or internal one. The name brings together several distinct lineages, including the sea hares (<em>Aplysia</em>), the sap-sucking sea slugs, sea angels, and the brightly coloured nudibranchs. On FaunaHub, nudibranchs are covered in their own separate profile; this page focuses on the broader category and uses the sea hare <em>Aplysia</em> as its reference example. All of these animals are gastropods, the same broad class that includes land snails and many marine snails with full shells.
          </p>
          <h3>Appearance and recognition</h3>
          <p>
            Sea hares such as <em>Aplysia</em> are large, soft-bodied sea slugs, with some species reaching a substantial size for a gastropod. They have a rounded, fleshy body and a pair of rolled tentacles on the head called rhinophores that resemble a hare&#39;s ears, which is the origin of the common name. Many have wing-like flaps of tissue, called parapodia, along the back, and a small internal shell remnant rather than an external shell. Colours and patterns differ between species; the spotted sea hare <em>Aplysia dactylomela</em>, for example, carries dark rings and blotches on a paler background. Other sea slug lineages look very different, ranging from translucent swimming forms to the elaborately coloured nudibranchs.
          </p>
        </>
      }
      habitat={
        <p>
          Sea slugs live mostly on shallow seabeds, rocky reefs, and among seaweed in coastal marine waters. Sea hares like <em>Aplysia</em> are typically found where the algae they feed on grow well, including tidal and subtidal zones. Different sea slug lineages occupy a wide range of marine settings, from shoreline pools to the open water column in the case of sea angels. Distribution varies by species and region, so any specific range should be confirmed against authoritative sources rather than assumed from the group as a whole.
        </p>
      }
      diet={
        <p>
          Diet varies considerably across the sea slug lineages. Sea hares such as <em>Aplysia</em> are herbivores that graze on algae and seaweed, and their colour can be influenced by the algae they eat. Other sea slugs have very different feeding habits: some sap-sucking species pierce algal cells and consume their contents, while nudibranchs and certain other groups feed on sponges, hydroids, or other small invertebrates. In their habitats, grazing sea slugs help shape algal communities and form part of the wider marine food web.
        </p>
      }
      behavior={
        <p>
          Sea slugs move by gliding on a muscular foot, and some, including certain sea hares, can swim for short distances by flapping their parapodia. When disturbed, many sea hares release a cloud of purple ink, which is thought to help deter or confuse predators, and a number of sea slug lineages rely on chemical defences. Like many gastropods, sea hares are hermaphrodites, with individuals able to function as both sexes, and they lay large, tangled masses of eggs. <em>Aplysia</em> is especially well known in neuroscience because its very large, accessible nerve cells have made it a long-standing model for studying learning and the nervous system.
        </p>
      }
      humanInteraction={
        <p>
          For most people, sea slugs are best known as fascinating subjects for observation, photography, and scientific study, with <em>Aplysia</em> in particular playing an important role in neuroscience research. Because \&quot;sea slug\&quot; covers many unrelated species, generalisations about safety are unreliable: some marine slugs are chemically defended, so risk varies by species and region, and wild individuals are best left undisturbed rather than handled. For any bite, sting, envenomation, poisoning, or allergy concern, contact a qualified medical professional or local health authority. This page is educational and does not provide medical, food-safety, harvesting, treatment, or aquarium-care advice, and these animals should not be treated as pets.
        </p>
      }
      faqs={[
        {
          question: "Is a sea slug the same as a nudibranch?",
          answer:
            "Not exactly. \"Sea slug\" is a broad, informal name covering several unrelated groups of shell-less or reduced-shell marine gastropods, and nudibranchs are just one of those groups. Sea hares (Aplysia), sap-sucking sea slugs, and sea angels are also sea slugs. FaunaHub covers nudibranchs in their own separate profile.",
        },
        {
          question: "Why is the sea hare important in scientific research?",
          answer:
            "The sea hare Aplysia has unusually large and accessible nerve cells, which makes its nervous system easier to study than that of many animals. Because of this, it has been a long-standing model in neuroscience for research into learning and how nervous systems work. This research focus is one reason Aplysia is among the better-known sea slugs.",
        },
        {
          question: "Why do sea hares release purple ink?",
          answer:
            "When disturbed, many sea hares can release a cloud of purple ink into the water. This is generally understood as a defensive response that may help deter or confuse potential predators. The exact details vary by species and should be checked against authoritative sources.",
        },
        {
          question: "Are sea slugs dangerous to people?",
          answer:
            "It depends on the species. Sea slugs include many unrelated lineages, and some are chemically defended, so risk varies by species and region rather than being uniform across the whole group. It is best to avoid handling wild individuals, and for any sting, envenomation, or allergy concern you should contact a qualified medical professional or local health authority.",
        },
      ]}
      quickFacts={[
        { label: "Group", value: "Sea slugs (shell-less or reduced-shell marine gastropods)" },
        { label: "Higher classification", value: "Class Gastropoda; an informal grouping of several lineages, with the sea hare Aplysia as the reference" },
        { label: "Diet", value: "Varies by group; sea hares (Aplysia) are algae-grazing herbivores" },
        { label: "Notable trait", value: "Aplysia has very large nerve cells used in neuroscience; many sea hares release purple ink" },
        { label: "Habitat", value: "Shallow seabeds, reefs, and seaweed in coastal marine waters" },
        { label: "Distribution", value: "Marine waters worldwide; specific ranges vary by species and region" },
        { label: "Human interaction", value: "Studied and observed; avoid handling wild individuals; not a pet" },
        { label: "Conservation status", value: "Varies by species; not uniformly assessed across the group" },
      ]}
      relatedLinks={[
        { label: "Nudibranch Profile", href: "/animals/nudibranch", description: "Colourful sea slugs (a subset)" },
        { label: "Cowrie Profile", href: "/animals/cowrie", description: "A glossy-shelled sea snail" },
        { label: "Snail Profile", href: "/animals/snail", description: "Gastropods more broadly" },
        { label: "Ocean fauna by depth", href: "/fauna/ocean", description: "How marine life changes with depth" },
        { label: "Marine Animals", href: "/animal-encyclopedia/marine-animals" },
      ]}
    />
  );
}
