import type { Metadata } from "next";
import AnimalProfileLayout from "@/components/AnimalProfileLayout";
import { ANIMAL_SOURCES } from "@/lib/educational/animal-sources";
import { getAnimalGalleryImages, getAnimalImage, getAnimalOgImage } from "@/lib/images/animal-images";
import { buildArticleMetadata } from "@/lib/metadata";

const PATH = "/animals/stag-beetle";
const TITLE = "Stag Beetle: One of Europe's Largest Beetles";
const DESC =
  "Learn about the stag beetle (Lucanus cervus), one of Europe's largest beetles, its deadwood-dependent larvae, behaviour, ecology and Near Threatened status.";

export const metadata: Metadata = buildArticleMetadata({
  title: TITLE,
  description: DESC,
  path: PATH,
  publishedTime: "2026-06-27",
  modifiedTime: "2026-06-27",
  ogImage: getAnimalOgImage("stag-beetle"),
});

export default function StagBeetlePage() {
  return (
    <AnimalProfileLayout
      commonName="Stag Beetle"
      scientificName="Lucanus cervus"
      pageTitle={TITLE}
      description={DESC}
      path={PATH}
      parentCategory="Insects & Invertebrates"
      parentCategoryHref="/animal-encyclopedia/insects"
      tags={["Insect","Beetle","Deadwood"]}
      image={getAnimalImage("stag-beetle") ?? undefined}
      galleryImages={getAnimalGalleryImages("stag-beetle")}
      sources={ANIMAL_SOURCES["stag-beetle"]}
      publishedDate="2026-06-27"
      modifiedDate="2026-06-27"
      overview={
        <>
          <p>
            The stag beetle (<em>Lucanus cervus</em>) is among the largest beetles found in parts of Europe, and is best known for the enlarged, antler-like jaws of the males. These structures give the species both its common and scientific names, recalling the branching antlers of a stag. Despite its imposing appearance, it is a harmless insect whose dramatic features serve mainly in contests between rival males rather than in any threat to people.
          </p>
          <p>
            Much of the stag beetle&#39;s life is spent unseen. Its larvae develop over several years inside decaying wood, feeding on the soft, rotting tissue of dead stumps, logs and buried roots. Because of this dependence on deadwood, the beetle is closely tied to woodlands, parks and gardens where old or fallen timber remains. Adults are comparatively short-lived and are most often noticed during warm summer evenings when they emerge and fly.
          </p>
          <p>
            The stag beetle has declined in parts of its range, a trend often linked to the loss of decaying wood from managed landscapes. It has been assessed by the IUCN Red List (in a European context) as Near Threatened, an evaluation that reflects current understanding and can be revised as new information emerges.
          </p>
          <h3>Taxonomy and animal group</h3>
          <p>
            The stag beetle, <em>Lucanus cervus</em>, is an insect in the family Lucanidae, a group commonly known as stag beetles, within the order Coleoptera, the beetles. Lucanidae are recognised by the often-enlarged mandibles of the males, and <em>Lucanus cervus</em> is one of the most familiar European members of the family. As a beetle, it is an invertebrate with the typical beetle body plan of hardened forewings (elytra) covering membranous flight wings. It should be distinguished from superficially similar large beetles, such as certain longhorn or rhinoceros beetles, which belong to separate families.
          </p>
          <h3>Appearance and recognition</h3>
          <p>
            Adult stag beetles have a glossy, dark body, with the head and thorax usually black and the wing cases (elytra) a chestnut to reddish-brown. The most striking feature is the difference between the sexes: males bear greatly enlarged, antler-like mandibles that can make them appear considerably longer, while females have much smaller jaws and a more uniformly robust head. Males are typically among the larger individuals and rank among the biggest beetles in Europe, though body size varies. The legs are sturdy, and in flight the beetle holds its body at a steep angle, giving it a heavy, deliberate appearance.
          </p>
        </>
      }
      habitat={
        <p>
          The stag beetle is associated with broadleaved woodland, wood pasture, hedgerows, parks and mature gardens in parts of Europe, where it tends to occur in lowland areas rather than across the entire continent. Its presence is strongly tied to the availability of decaying wood, including old stumps, fallen logs and buried dead roots, which the larvae require. The species is recorded across parts of western, central and southern Europe, with a distribution that is patchy and locally concentrated where suitable deadwood habitat persists. It tends to favour warmer, well-drained sites and is sensitive to the removal of dead and dying timber.
        </p>
      }
      diet={
        <p>
          The diet differs markedly between life stages. The larvae are the main feeding stage, consuming decaying wood over a period of several years and relying on fungi and microorganisms that help break down the timber. Adults, by contrast, feed little and do not need woody material; they take liquids such as tree sap and the juices of soft, fallen fruit, which provide energy for their short active period. This shift means the species&#39; feeding ecology is centred on the slow processing of deadwood by the larvae rather than on adult foraging.
        </p>
      }
      behavior={
        <>
          <p>
            Stag beetles spend the great majority of their life cycle as larvae developing within rotting wood, a stage that commonly lasts several years before pupation. Adults emerge in the warmer months and are relatively short-lived, with activity concentrated in summer. Males are frequently seen flying on warm evenings in search of mates, and they use their enlarged mandibles to wrestle with rival males, attempting to grip and lever opponents away rather than to inflict serious harm. Females are often more ground-dwelling and seek out suitable decaying wood in which to lay their eggs, continuing the cycle.
          </p>
          <p>
            As a deadwood specialist, the stag beetle plays a part in the natural decay cycle of woodland. By feeding on rotting timber, the larvae contribute to the breakdown of dead wood and the return of nutrients to the soil, supporting the wider community of organisms that depend on decaying material. The beetle is one of many species that rely on what is sometimes called saproxylic habitat, and its presence is often regarded as a sign of woodland or parkland that retains old and decaying wood. Adults and larvae also serve as food for various birds and other predators.
          </p>
        </>
      }
      humanInteraction={
        <p>
          The stag beetle is harmless to people. Although the large jaws of a male can deliver a pinch if the insect is handled, it is not dangerous and poses no real threat, and it should not be sensationalised. The species is best appreciated by observing it where it occurs and leaving it undisturbed. Declines in parts of its range have been linked to the loss of decaying wood, and the IUCN Red List has assessed it (in a European context) as Near Threatened, an evaluation that can change over time. Concerns about an injury should be directed to a qualified medical professional or local health authority, and questions about local wildlife or a beetle found in distress can be raised with local wildlife authorities.
        </p>
      }
      faqs={[
        {
          question: "Is the stag beetle dangerous to humans?",
          answer:
            "No. The stag beetle is harmless to people, and although a male's large jaws can give a pinch if the insect is handled, it is not dangerous. It is best simply observed and left undisturbed, and any concern about an injury can be directed to a qualified medical professional.",
        },
        {
          question: "Why do male stag beetles have such large jaws?",
          answer:
            "The enlarged, antler-like mandibles of males are used mainly in contests with rival males, who wrestle and try to lever one another away. They are a feature of competition rather than a tool for harming people.",
        },
        {
          question: "Where do stag beetles live?",
          answer:
            "Stag beetles are associated with broadleaved woodland, parks and mature gardens in parts of Europe, particularly where decaying wood is present. Their distribution is patchy and tied to suitable deadwood habitat rather than spread evenly across the continent.",
        },
        {
          question: "What is the conservation status of the stag beetle?",
          answer:
            "The IUCN Red List has assessed the stag beetle (in a European context) as Near Threatened, reflecting declines in parts of its range that are often linked to the loss of decaying wood. This is an assessment that can be revised as new information becomes available.",
        },
      ]}
      quickFacts={[
        { label: "Scientific name", value: "Lucanus cervus" },
        { label: "Animal group", value: "Invertebrate (insect, beetle)" },
        { label: "Family or order", value: "Lucanidae; order Coleoptera" },
        { label: "Size", value: "One of the largest beetles in Europe; males enlarged by antler-like jaws" },
        { label: "Diet", value: "Larvae eat decaying wood; adults feed little (tree sap, fruit juices)" },
        { label: "Habitat", value: "Broadleaved woodland, parks and gardens with deadwood" },
        { label: "Range", value: "Found in parts of Europe; patchy and locally concentrated" },
        { label: "Conservation status", value: "Near Threatened (IUCN Red List)" },
      ]}
      relatedLinks={[
        { label: "Beetle Profile", href: "/animals/beetle", description: "Beetles more broadly" },
        { label: "Dung Beetle", href: "/animals/dung-beetle", description: "Another beetle" },
        { label: "Ant Profile", href: "/animals/ant", description: "Another woodland insect" },
        { label: "European fauna", href: "/fauna/continents/europe", description: "Animals of Europe" },
        { label: "Insects & Invertebrates", href: "/animal-encyclopedia/insects" },
      ]}
    />
  );
}
