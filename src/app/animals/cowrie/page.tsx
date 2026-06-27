import type { Metadata } from "next";
import AnimalProfileLayout from "@/components/AnimalProfileLayout";
import { ANIMAL_SOURCES } from "@/lib/educational/animal-sources";
import { getAnimalGalleryImages, getAnimalImage, getAnimalOgImage } from "@/lib/images/animal-images";
import { buildArticleMetadata } from "@/lib/metadata";

const PATH = "/animals/cowrie";
const TITLE = "Cowrie: Glossy Sea Snails of Family Cypraeidae";
const DESC =
  "Cowries are marine sea snails (family Cypraeidae) with glossy, egg-shaped shells. Learn their biology, reef habitats, diet, and historic role as shell money.";

export const metadata: Metadata = buildArticleMetadata({
  title: TITLE,
  description: DESC,
  path: PATH,
  publishedTime: "2026-06-27",
  modifiedTime: "2026-06-27",
  ogImage: getAnimalOgImage("cowrie"),
});

export default function CowriePage() {
  return (
    <AnimalProfileLayout
      commonName="Cowrie"
      scientificName="family Cypraeidae"
      pageTitle={TITLE}
      description={DESC}
      path={PATH}
      parentCategory="Marine Animals"
      parentCategoryHref="/animal-encyclopedia/marine-animals"
      tags={["Mollusk","Gastropod","Sea snail"]}
      image={getAnimalImage("cowrie") ?? undefined}
      galleryImages={getAnimalGalleryImages("cowrie")}
      sources={ANIMAL_SOURCES["cowrie"]}
      publishedDate="2026-06-27"
      modifiedDate="2026-06-27"
      overview={
        <>
          <p>
            Cowries are marine gastropod sea snails of the family Cypraeidae, best known for their smooth, glossy, egg-shaped shells with a narrow, toothed, slit-like opening along the underside. Genera such as <em>Monetaria</em> and <em>Cypraea</em> are found mainly in warm tropical and subtropical seas, where they live on coral reefs and shallow seabeds.
          </p>
          <p>
            The high gloss that gives cowrie shells their distinctive shine is produced and maintained by the living animal itself. In life the soft mantle extends up and over the shell, polishing its surface, so a wild cowrie often looks quite different from a bare shell on a beach.
          </p>
          <p>
            Cowries are diverse, and details such as size, coloration, exact range, and ecology vary by species and region. The information here is a general overview, and specific identifications or claims should be checked against authoritative sources such as the World Register of Marine Species, Animal Diversity Web, and Smithsonian Ocean.
          </p>
          <h3>Taxonomy and animal group</h3>
          <p>
            Cowries belong to the family Cypraeidae within the gastropods, the large class of mollusks that also includes other sea snails, land snails, and slugs. They are true marine snails with a single coiled shell, even though the adult shell&#39;s coiling is largely hidden beneath the glossy outer layer. Familiar genera include <em>Monetaria</em>, which contains the small money cowrie (<em>Monetaria moneta</em>) and ring cowrie (<em>Monetaria annulus</em>), and <em>Cypraea</em>. The classification of cowries continues to be refined, so species-level names are best confirmed against current taxonomic references.
          </p>
          <h3>Appearance and recognition</h3>
          <p>
            A cowrie shell is typically smooth, rounded, and egg-shaped, with a domed upper surface and a flattened underside. The opening, or aperture, runs as a long narrow slit along the bottom and is usually lined on both sides with small tooth-like ridges. Coloration and patterning vary widely between species, from plain and pale to spotted, banded, or ringed, as in the ring cowrie. The characteristic gloss comes from the mantle, the soft tissue that in life folds up over the shell from both sides and keeps the surface polished.
          </p>
        </>
      }
      habitat={
        <p>
          Cowries are mostly tropical and subtropical animals, living on coral reefs, rocky shores, and shallow seabeds in warm seas. Many species shelter in crevices, under ledges, or beneath rocks and rubble during the day. The exact habitat, depth, and geographic range differ from species to species, and these details should be checked against authoritative regional sources rather than generalized across the whole family.
        </p>
      }
      diet={
        <p>
          Cowries are grazers that feed on algae and small organisms growing on reef surfaces and rocky substrates. Some species browse on encrusting growth, while others are associated with sponges or other reef organisms, so feeding habits vary across the family. In their reef and shoreline communities, cowries form part of the grazing fauna that helps shape the balance of algae and other growth on hard surfaces.
        </p>
      }
      behavior={
        <p>
          Cowries are generally most active at night, emerging from shelter to graze and retreating to crevices or undersides of rocks by day. When the animal is active, its mantle and a muscular foot extend from the shell, and the mantle may be drawn back over the shell for protection and polishing. Like many marine snails, cowries reproduce by laying eggs, and females of some species are reported to brood their egg masses. Specific life-cycle details vary by species and are best confirmed from authoritative sources.
        </p>
      }
      humanInteraction={
        <p>
          Cowries have a notable place in human culture. Certain small species, especially the money cowrie (<em>Monetaria moneta</em>) and the ring cowrie, were historically used as shell money, serving as currency across parts of Africa, Asia, and the Pacific, and they have also long been used in jewelry, ornamentation, and games. Today cowrie shells remain popular with collectors and in crafts. This page is educational and does not provide collecting, harvesting, or wildlife-handling instructions; rules on collecting shells and live animals vary by location and authority, and such questions should be directed to local authorities. It is best to avoid handling wild individuals.
        </p>
      }
      faqs={[
        {
          question: "Why are cowrie shells so shiny?",
          answer:
            "The gloss comes from the living animal rather than from polishing after collection. In life, the cowrie's soft mantle extends up over both sides of the shell and continuously maintains its smooth, glossy surface. A bare beach shell keeps much of this shine because the glossy outer layer is built into the shell itself.",
        },
        {
          question: "Were cowries really used as money?",
          answer:
            "Yes. Small species such as the money cowrie (Monetaria moneta) and the ring cowrie were used as shell money across parts of Africa, Asia, and the Pacific. Their durability, small size, and consistent shape made them practical as a form of currency, and they remain a well-known example of historical shell money.",
        },
        {
          question: "Where do cowries live?",
          answer:
            "Cowries are mainly tropical and subtropical, living on coral reefs, rocky shores, and shallow seabeds in warm seas. Many shelter in crevices or under rocks by day and graze at night. Exact range and habitat vary by species and should be checked against authoritative regional sources.",
        },
        {
          question: "What do cowries eat?",
          answer:
            "Cowries are grazers, feeding on algae and small organisms on reef and rock surfaces, and some species are associated with sponges or other reef growth. Their diet varies across the family. As part of the grazing fauna, they contribute to the ecological balance of the reef communities where they live.",
        },
      ]}
      quickFacts={[
        { label: "Group", value: "Sea snails (cowries)" },
        { label: "Higher classification", value: "Family Cypraeidae, class Gastropoda, phylum Mollusca" },
        { label: "Diet", value: "Grazers on algae and small reef organisms; varies by species" },
        { label: "Notable trait", value: "Glossy, egg-shaped shell polished by the mantle; toothed slit-like opening" },
        { label: "Habitat", value: "Coral reefs, rocky shores, and shallow seabeds in warm seas" },
        { label: "Distribution", value: "Mainly tropical and subtropical waters; varies by species" },
        { label: "Human interaction", value: "Historically used as shell money; popular with collectors; avoid handling wild individuals" },
        { label: "Conservation status", value: "Varies by species; some assessed" },
      ]}
      relatedLinks={[
        { label: "Cone Snail Profile", href: "/animals/cone-snail", description: "A predatory sea snail" },
        { label: "Sea Slug Profile", href: "/animals/sea-slug", description: "Shell-less marine gastropods" },
        { label: "Whelk Profile", href: "/animals/whelk", description: "A predatory sea snail" },
        { label: "Abalone Profile", href: "/animals/abalone", description: "A large grazing sea snail" },
        { label: "Marine Animals", href: "/animal-encyclopedia/marine-animals" },
      ]}
    />
  );
}
