import type { Metadata } from "next";
import AnimalProfileLayout from "@/components/AnimalProfileLayout";
import { ANIMAL_SOURCES } from "@/lib/educational/animal-sources";
import {
  getAnimalGalleryImages,
  getAnimalImage,
  getAnimalOgImage,
} from "@/lib/images/animal-images";
import { buildArticleMetadata } from "@/lib/metadata";

const PUBLISHED = "2026-06-12";
const MODIFIED = "2026-06-12";

const title = "Moose — Profile, Habitat, Diet & Behavior";
const description =
  "Moose (Alces alces): the largest living deer. An educational overview of its northern forest habitat, browsing diet, antlers, and solitary behaviour.";

export const metadata: Metadata = buildArticleMetadata({
  title,
  description,
  path: "/animals/moose",
  publishedTime: PUBLISHED,
  modifiedTime: MODIFIED,
  ogImage: getAnimalOgImage("moose"),
});

export default function MoosePage() {
  return (
    <AnimalProfileLayout
      commonName="Moose"
      scientificName="Alces alces"
      pageTitle={title}
      description={description}
      path="/animals/moose"
      parentCategory="Mammals"
      parentCategoryHref="/animal-encyclopedia/mammals"
      tags={["Mammal", "Deer Family", "Herbivore"]}
      image={getAnimalImage("moose") ?? undefined}
      galleryImages={getAnimalGalleryImages("moose")}
      factsHeaderNote="The moose (called elk in Europe) is the largest living member of the deer family. Ranges and conservation status vary by region and should be checked against current specialist sources."
      overview={
        <>
          <p>
            The moose (<em>Alces alces</em>), known as the &quot;elk&quot; in
            Europe, is the largest living member of the deer family, Cervidae.
            It is a tall, long-legged browser of northern forests across North
            America, northern Europe, and Asia. Adult males grow large,
            broad, palmate antlers that are shed and regrown each year. Moose
            are generally solitary, in contrast to the herding habits of many
            other deer.
          </p>
        </>
      }
      habitat={
        <>
          <p>
            Moose inhabit cool, northern forest and woodland, often near lakes,
            rivers, wetlands, and willow thickets that provide both food and
            water. They are well adapted to cold and snow and are strong
            swimmers. Their range spans the boreal and mixed forests of the
            Northern Hemisphere; specific distribution and local abundance vary
            by region and should be checked against current wildlife-agency
            sources.
          </p>
        </>
      }
      diet={
        <>
          <p>
            Moose are herbivorous browsers. They feed on leaves, twigs, bark,
            and buds of trees and shrubs such as willow, birch, and aspen, and
            in summer also feed heavily on aquatic vegetation, sometimes
            wading or submerging to reach it. Their long legs and mobile lips
            suit browsing tall and underwater plants. Diet shifts seasonally
            with plant availability.
          </p>
        </>
      }
      behavior={
        <>
          <p>
            Moose are typically solitary outside the breeding season, unlike
            herd-forming deer. During the autumn rut, bulls compete for access
            to females and may spar with their antlers. Moose are usually
            wary, but they are very large and powerful animals that can become
            defensive, particularly cows with calves or animals that feel
            cornered. Wildlife agencies advise observing moose only from a safe
            distance.
          </p>
        </>
      }
      humanInteraction={
        <>
          <p>
            Moose are an iconic species of northern wildernesses and are
            valued for wildlife watching and, in some regions, regulated
            hunting. They can also feature in vehicle collisions where roads
            cross their range. Population trends differ between regions — some
            are stable or increasing while others have declined — and
            conservation status should be verified against current IUCN Red
            List and regional wildlife-agency data rather than assumed.
          </p>
        </>
      }
      extraSections={[
        {
          heading: "Appearance & Recognition",
          body: (
            <>
              <p>
                Moose are unmistakable: very tall at the shoulder, with long
                legs, a high humped back, a long pendulous muzzle, and a flap
                of skin called a &quot;bell&quot; hanging beneath the throat.
                Coat colour is dark brown to almost black. Only bulls grow
                antlers, which in mature animals are broad and flattened
                (palmate) and can be very wide. Cows lack antlers and are
                somewhat smaller.
              </p>
            </>
          ),
        },
      ]}
      similarAnimals={
        <p>
          The moose is the largest member of the deer family, which also
          includes the deer covered separately on FaunaHub, as well as elk
          (wapiti), caribou/reindeer, and roe deer. Confusingly, &quot;elk&quot;
          refers to the moose in Europe but to a different species (the wapiti)
          in North America.
        </p>
      }
      faqs={[
        {
          question: "Is a moose the same as an elk?",
          answer:
            "It depends on where you are. In Europe, \"elk\" is the standard name for the moose (Alces alces). In North America, \"elk\" usually refers to a different, smaller deer, the wapiti. To avoid confusion, the name \"moose\" is used internationally for Alces alces.",
        },
        {
          question: "Why do moose have such large antlers?",
          answer:
            "Only bull moose grow antlers, which are shed and regrown each year. The large, palmate antlers are used in displays and contests between males during the autumn rut. Antler size is influenced by age and condition.",
        },
        {
          question: "Are moose dangerous to people?",
          answer:
            "Moose are usually wary, but they are very large, powerful wild animals. They can become defensive — especially cows with calves or animals that feel threatened — so wildlife agencies advise keeping a safe distance and never approaching or feeding them.",
        },
      ]}
      quickFacts={[
        { label: "Scientific name", value: "Alces alces" },
        { label: "Family", value: "Cervidae (deer family)" },
        { label: "Class", value: "Mammalia" },
        { label: "Diet", value: "Herbivore (browser)" },
        { label: "Antlers", value: "Bulls only; shed and regrown yearly" },
        { label: "Social structure", value: "Largely solitary" },
        { label: "Habitat", value: "Northern forests and wetlands" },
        { label: "Conservation", value: "Varies by region — verify on IUCN Red List" },
      ]}
      relatedLinks={[
        { label: "Deer Profile", href: "/animals/deer", description: "The wider deer family" },
        { label: "Bear Profile", href: "/animals/bear" },
        { label: "Wolf Profile", href: "/animals/wolf" },
        { label: "Animal Encyclopedia — Mammals", href: "/animal-encyclopedia/mammals" },
        { label: "Wildlife Hub", href: "/wildlife" },
      ]}
      sources={ANIMAL_SOURCES.moose}
      publishedDate={PUBLISHED}
      modifiedDate={MODIFIED}
    />
  );
}
