import type { Metadata } from "next";
import AnimalProfileLayout from "@/components/AnimalProfileLayout";
import { ANIMAL_SOURCES } from "@/lib/educational/animal-sources";
import { getAnimalGalleryImages, getAnimalImage, getAnimalOgImage } from "@/lib/images/animal-images";
import { buildArticleMetadata } from "@/lib/metadata";

const PATH = "/animals/wolffish";
const TITLE = "Wolffish — Profile, the Fanged Fish with Antifreeze in Its Blood";
const DESC =
  "Explore wolffish (genus Anarhichas): big, blunt-faced cold-water fish with fearsome fangs and crushing teeth for eating shellfish — and natural antifreeze proteins that keep their blood flowing.";

export const metadata: Metadata = buildArticleMetadata({
  title: TITLE,
  description: DESC,
  path: PATH,
  publishedTime: "2026-06-22",
  modifiedTime: "2026-06-22",
  ogImage: getAnimalOgImage("wolffish"),
});

export default function WolffishPage() {
  return (
    <AnimalProfileLayout
      commonName="Wolffish"
      scientificName="genus Anarhichas"
      pageTitle={TITLE}
      description={DESC}
      path={PATH}
      parentCategory="Fish"
      parentCategoryHref="/animal-encyclopedia/fish"
      tags={["Fish", "Marine", "Cold water"]}
      image={getAnimalImage("wolffish") ?? undefined}
      galleryImages={getAnimalGalleryImages("wolffish")}
      sources={ANIMAL_SOURCES.wolffish}
      publishedDate="2026-06-22"
      modifiedDate="2026-06-22"
      overview={
        <>
          <p>
            Wolffish (genus <em>Anarhichas</em>) are large, heavy-bodied, eel-like fish of cold northern
            seas, named for the wolfish set of fangs at the front of their jaws. Behind those prominent
            canine-like front teeth lie rows of strong, blunt crushing and grinding teeth, all of which the
            wolffish puts to use cracking open the hard-shelled animals it eats. The Atlantic wolffish
            (<em>Anarhichas lupus</em>), shown here, is the best known, with a blunt, almost dog-like face
            and a long, tapering body.
          </p>
          <p>
            Living in chilly waters where temperatures can dip below the freezing point of ordinary body
            fluids, wolffish produce natural antifreeze proteins in their blood that stop ice crystals from
            forming, letting them thrive in the cold.
          </p>
          <p>
            <strong>Note:</strong> &ldquo;wolffish&rdquo; covers a few Anarhichas species; details here use
            the Atlantic wolffish as a reference. Treat general statements as approximate and verify against
            authoritative sources.
          </p>
        </>
      }
      habitat={
        <p>
          Wolffish live in cold waters of the North Atlantic and North Pacific, typically on the seabed at
          moderate to considerable depths, around rocky reefs, boulder fields, and cold, hard bottoms where
          their shellfish prey is abundant. The Atlantic wolffish favours rocky habitats on continental
          shelves, often sheltering in crevices and dens.
        </p>
      }
      diet={
        <p>
          Wolffish are carnivores specialising in hard-shelled prey: sea urchins, crabs, clams, mussels,
          whelks, and other molluscs and echinoderms, which they crush with their formidable teeth. The
          front fangs grip and wrench prey loose, while the heavy back teeth grind shells to pieces — so
          effective that wolffish help control sea urchin numbers, which in turn benefits kelp and other
          seabed habitats. They replace and regrow their worn teeth.
        </p>
      }
      behavior={
        <p>
          Wolffish are generally solitary, sedentary bottom-dwellers that lurk among rocks and in crevices,
          ambushing or seeking out shellfish across the seafloor. Their standout adaptation is biochemical:
          they make antifreeze (glycoprotein) molecules that circulate in the blood and bind to tiny ice
          crystals, preventing them from growing — a vital trick for a fish living near freezing. Unusually
          for fish, Atlantic wolffish have internal fertilisation, and the male guards the large clutch of
          eggs for months until they hatch, a notable degree of parental care. Despite their fierce-looking
          fangs, wolffish are not aggressive toward people and use their teeth on shellfish, not swimmers.
        </p>
      }
      humanInteraction={
        <p>
          Wolffish are caught for food (sometimes sold as &ldquo;ocean catfish&rdquo;) and have been heavily
          affected by trawling and bycatch, and because they are slow-growing, late-maturing, and tied to
          specific rocky habitats and egg-guarding sites, some populations — including the Atlantic wolffish
          in parts of its range — have declined and are of conservation concern, with protections in some
          areas. As an important predator of sea urchins, the wolffish also matters for healthy seabed
          ecosystems. Consult authoritative sources for current status.
        </p>
      }
      faqs={[
        {
          question: "Why does the wolffish have such big fangs?",
          answer:
            "Its fearsome front fangs, backed by rows of strong crushing and grinding teeth, are tools for eating hard-shelled prey. The fangs grip and wrench animals like sea urchins, crabs, and clams loose, while the heavy back teeth crush their shells. So the 'wolfish' teeth are for cracking shellfish, not for attacking other fish or people.",
        },
        {
          question: "How does a wolffish survive in near-freezing water?",
          answer:
            "It makes natural antifreeze. Wolffish produce special antifreeze (glycoprotein) molecules that circulate in their blood and latch onto tiny ice crystals, stopping them from growing. This keeps their body fluids flowing even in seawater cold enough to freeze ordinary blood, letting them live in chilly northern seas.",
        },
        {
          question: "Are wolffish dangerous to people?",
          answer:
            "Not really. Despite their intimidating, fanged faces, wolffish are not aggressive toward humans and use their powerful teeth on shellfish, not swimmers or divers. They're generally shy, sedentary bottom-dwellers; a large one could bite if seriously provoked or handled, but they pose no real threat in the wild.",
        },
        {
          question: "Do wolffish look after their eggs?",
          answer:
            "Yes — unusually for fish. Atlantic wolffish have internal fertilisation, and the male then guards the large clutch of eggs for months until they hatch. This extended parental care, combined with slow growth and late maturity, is part of why some wolffish populations are vulnerable to overfishing and habitat disturbance.",
        },
      ]}
      quickFacts={[
        { label: "Group", value: "Genus Anarhichas (wolffish)" },
        { label: "Reference species", value: "Anarhichas lupus (Atlantic wolffish)" },
        { label: "Class", value: "Actinopterygii (ray-finned fish)" },
        { label: "Teeth", value: "Front fangs + crushing/grinding teeth (eats shellfish)" },
        { label: "Cold trick", value: "Antifreeze proteins in the blood" },
        { label: "Parenting", value: "Internal fertilisation; male guards eggs" },
        { label: "Habitat", value: "Cold North Atlantic/Pacific seabeds & reefs" },
        { label: "Status", value: "Some populations declined/protected (verify)" },
      ]}
      relatedLinks={[
        { label: "Moray Eel Profile", href: "/animals/moray-eel", description: "Another fanged, eel-shaped fish" },
        { label: "Cod relatives — Cod Profile", href: "/animals/cod", description: "Another cold-water fishery fish" },
        { label: "Lionfish Profile", href: "/animals/lionfish", description: "Another distinctive reef predator" },
        { label: "Ocean fauna by depth", href: "/fauna/ocean", description: "Cold seabed habitats in context" },
        { label: "Fish Encyclopedia", href: "/animal-encyclopedia/fish" },
      ]}
    />
  );
}
