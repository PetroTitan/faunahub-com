import type { Metadata } from "next";
import AnimalProfileLayout from "@/components/AnimalProfileLayout";
import { ANIMAL_SOURCES } from "@/lib/educational/animal-sources";
import {
  getAnimalGalleryImages,
  getAnimalImage,
  getAnimalOgImage,
} from "@/lib/images/animal-images";
import { buildArticleMetadata } from "@/lib/metadata";

const PATH = "/animals/chinchilla";
const PUBLISHED = "2026-08-04";
const MODIFIED = "2026-08-04";

const TITLE = "Chinchilla — Andean Rodents, Dense Fur, Wild vs Domestic";
const DESC =
  "Group-level profile of the wild chinchillas of the high Andes: habitat, diet, behaviour, dense fur, and why the wild species are threatened while domestic chinchillas are common.";

export const metadata: Metadata = buildArticleMetadata({
  title: TITLE,
  description: DESC,
  path: PATH,
  publishedTime: PUBLISHED,
  modifiedTime: MODIFIED,
  ogImage: getAnimalOgImage("chinchilla"),
});

export default function ChinchillaPage() {
  return (
    <AnimalProfileLayout
      commonName="Chinchilla"
      scientificName="genus Chinchilla"
      pageTitle={TITLE}
      description={DESC}
      path={PATH}
      parentCategory="Mammals"
      parentCategoryHref="/animal-encyclopedia/mammals"
      tags={["Mammals", "Rodents", "Andes"]}
      image={getAnimalImage("chinchilla") ?? undefined}
      galleryImages={getAnimalGalleryImages("chinchilla")}
      sources={ANIMAL_SOURCES["chinchilla"]}
      publishedDate="2026-08-04"
      modifiedDate="2026-08-04"
      overview={
        <>
          <p>
            &ldquo;Chinchilla&rdquo; is the common name for the rodents of the genus{" "}
            <em>Chinchilla</em>, in the South American family Chinchillidae, which also
            contains the viscachas. Two living species are generally recognised: the
            long-tailed chinchilla, <em>Chinchilla lanigera</em>, and the short-tailed
            chinchilla, <em>Chinchilla chinchilla</em>. This page is written at group
            level, because most published descriptions of &ldquo;the chinchilla&rdquo;
            blend the two wild species with the domestic form, and the three are not
            interchangeable.
          </p>
          <p>
            Chinchillas are compact, thickset rodents with rounded heads, large dark eyes,
            broad ears, long whiskers and a bushy tail. Adults are commonly reported at
            roughly 22&ndash;38 cm in head and body length and typically somewhere around
            0.4&ndash;0.8 kg, with short-tailed chinchillas usually heavier and stockier
            than long-tailed ones; figures vary by species, sex, region, age and the source
            reporting them, and females are often described as the larger sex. The feature
            that overshadows all others is the coat: many hairs emerge from a single hair
            follicle rather than one, producing a pelage often described as among the
            densest of any land mammal.
          </p>
          <p>
            That coat is also the reason this profile has to hold two facts side by side.
            Domestic chinchillas, kept and farmed worldwide, are abundant. The wild
            chinchillas of the Andes are not. Commercial hunting for fur, beginning in
            earnest in the nineteenth century, removed enormous numbers of animals from the
            mountains, and the surviving wild colonies are scattered and comparatively
            small. Captive abundance is not wild security, and the two situations should
            never be read as one.
          </p>
        </>
      }
      habitat={
        <>
          <p>
            Wild chinchillas are high-altitude specialists. They are associated with arid
            and semi-arid slopes of the Andes and adjacent ranges, in country that is rocky,
            sparsely vegetated, cold at night and strongly exposed to sun and wind by day.
            Elevations are usually described in the thousands of metres above sea level,
            with the short-tailed chinchilla generally reported from higher ground than the
            long-tailed chinchilla; exact bands differ by species, region and source, so
            they are better treated qualitatively than as fixed numbers.
          </p>
          <p>
            Within that landscape the animals depend on structure rather than lushness. Rock
            crevices, boulder fields, scree and burrows under and between rocks provide
            shelter from heat, cold and predators, and colonies are typically tied to
            patches of suitable rock with feeding vegetation nearby. Where those rocky
            refuges are quarried, mined, grazed hard or fragmented, the habitat can look
            superficially intact while no longer supporting chinchillas.
          </p>
        </>
      }
      diet={
        <p>
          Chinchillas are herbivores. In the wild they are reported to feed on the tough,
          fibrous plants available on Andean slopes &mdash; grasses, herbs and forbs, leaves,
          bark, seeds and fruits, with succulent or cactus material taken in drier places
          and seasons. Diet composition shifts with season and site, since high, arid ground
          offers very different plant growth after rain than in a dry month. Like other
          hindgut-fermenting rodents they process high-fibre plant material with the help of
          gut microbes, and re-ingestion of certain soft faecal pellets is a normal part of
          digestion in this group rather than a sign of anything unusual. This page describes
          natural feeding ecology only and gives no feeding quantities, schedules or diets for
          animals kept by people.
        </p>
      }
      behavior={
        <>
          <p>
            Chinchillas are mainly crepuscular and nocturnal, most active around dusk, dawn
            and through the night, and they shelter in rock crevices and burrows during the
            brightest and hottest part of the day. They are social animals, generally
            described as living in colonies of varying size, and they are strikingly agile
            in broken rock, climbing and making powerful jumps between surfaces with the
            help of long hind limbs.
          </p>
          <p>
            Communication appears to be rich for a rodent, with a range of calls reported
            from soft contact sounds to loud alarm and distress calls, alongside scent and
            posture. Predators in the native range include Andean foxes, birds of prey such
            as owls and hawks, and snakes. Anti-predator responses include bolting for cover
            and, distinctively, &ldquo;fur slip&rdquo;, in which a grabbed animal releases a
            patch of fur and escapes. In the wild, chinchillas are also reported to roll in
            fine dust and volcanic ash, a behaviour associated with the condition of that
            extremely dense coat; it is described here as natural behaviour, not as a
            recommendation for animals in human care.
          </p>
        </>
      }
      humanInteraction={
        <>
          <p>
            No animal on this site is more defined by its relationship with people. Andean
            communities used chinchilla fur long before European contact, and the common
            name is usually traced to the Chincha people of the region. From the nineteenth
            century onward, industrial-scale commercial hunting exported very large numbers
            of pelts, and because the pelts are small, enormous numbers of animals were
            taken. Wild populations were reduced to a fraction of their former extent, and
            some areas that once held chinchillas no longer do.
          </p>
          <p>
            Today the main forms of contact are farming for fur, keeping as companion
            animals, use in laboratory hearing research, and conservation work in the small
            number of protected areas that hold wild colonies. Continuing pressures on wild
            animals are usually described as habitat loss and degradation, mining and
            associated infrastructure, livestock grazing, firewood and shrub cutting, and
            residual illegal hunting. International trade is regulated, and the current
            listing status for the genus should be checked against CITES and national law
            rather than assumed from this page.
          </p>
          <p>
            This is a natural-history profile, not a care guide. Any question about the
            health, husbandry, handling or welfare of a chinchilla kept under human care
            should be taken to a qualified veterinarian experienced with small mammals and
            to recognised species-specific welfare organisations.
          </p>
        </>
      }
      extraSections={[
        {
          heading: "Distribution",
          body: (
            <>
              <p>
                The genus is South American and Andean. Historical accounts place
                chinchillas across parts of Chile, Peru, Bolivia and Argentina, over a much
                broader area than they now occupy. The long-tailed chinchilla is generally
                associated with the coastal ranges and Andean foothills of northern Chile,
                while the short-tailed chinchilla is associated with higher Andean ground in
                the region where Chile, Bolivia, Argentina and Peru meet.
              </p>
              <p>
                The change is the important part. Sustained commercial hunting, followed by
                habitat loss and fragmentation, reduced a once-extensive distribution to
                scattered remnant colonies, several of them small and isolated from one
                another. Reports of rediscovered populations do appear from time to time,
                which is a reminder that range maps for these species are provisional. Any
                specific site list or population figure should be taken from current IUCN
                Red List assessments and national wildlife authorities rather than from
                older summaries.
              </p>
            </>
          ),
        },
        {
          heading: "Senses & Adaptations",
          body: (
            <>
              <p>
                The dense coat is the headline adaptation. With many hairs growing from each
                follicle, the pelage traps air efficiently, which is generally interpreted as
                insulation in a habitat with cold nights, strong wind and wide daily
                temperature swings. The same density makes the coat difficult to keep free of
                moisture and oil, which is the usual explanation for dust-rolling behaviour in
                the wild.
              </p>
              <p>
                Chinchillas are built for low light and broken ground: large eyes, long
                whiskers used to judge gaps and surfaces in the dark, and long, muscular hind
                limbs for climbing and jumping among rocks. Hearing is well developed, and the
                chinchilla auditory system has been studied extensively because its range
                overlaps usefully with human hearing &mdash; a research history worth naming
                honestly rather than presenting the animal as simply &ldquo;good at
                hearing&rdquo;. Fur slip, the release of a tuft of fur from the grip of a
                predator, is a further escape adaptation. As always, these traits are
                described as they are currently understood, and interpretations of function
                can be revised.
              </p>
            </>
          ),
        },
        {
          heading: "Lifespan & Life Stages",
          body: (
            <>
              <p>
                Chinchillas have an unusual reproductive pattern for rodents of their size.
                Gestation is long &mdash; commonly reported at more than three months &mdash;
                and litters are small, typically only a small number of young. The young are
                precocial: born furred, with the eyes open, and able to move about far sooner
                than the blind, naked young of many rodents. Weaning follows over a period of
                weeks, and sexual maturity is generally reached within the first year, with
                variation by species, individual and conditions.
              </p>
              <p>
                <strong>In the wild:</strong> lifespan is poorly documented. Wild chinchillas
                are hard to study, and figures quoted for wild longevity are usually
                estimates. As with most small mammals exposed to predators, weather and food
                shortage, average life expectancy in the wild is generally expected to be well
                below the maximum the species can reach.
              </p>
              <p>
                <strong>Under human care:</strong> chinchillas are frequently described as
                long-lived for a rodent, with reported lifespans that can extend beyond a
                decade in some individuals. These figures come from protected conditions with
                no predation and reliable food, and they should not be read back onto wild
                animals. The wild and captive numbers are separate categories of evidence and
                are kept separate here deliberately.
              </p>
            </>
          ),
        },
        {
          heading: "Conservation Context",
          body: (
            <>
              <p>
                Both wild chinchilla species have been assessed as threatened in recent
                assessments, driven by the historical fur trade and, more recently, by habitat
                loss, mining, grazing, shrub cutting and the small, fragmented nature of the
                surviving colonies. Conservation categories are reassessed as new information
                arrives and can move in either direction, so no status is asserted here as
                permanent. For the current category, criteria, range map and assessment date
                for <em>Chinchilla lanigera</em> and <em>Chinchilla chinchilla</em>, consult
                the IUCN Red List entry for each species directly.
              </p>
              <p>
                The central point for readers is the mismatch already noted: a species can be
                numerous in farms and homes on several continents while its wild form is at
                risk in its native range. Domestic populations do not restore wild colonies,
                do not maintain wild genetic diversity in place, and do not protect Andean
                habitat. Anyone tracking the fate of wild chinchillas should follow protected
                area management and Red List assessments rather than the availability of
                domestic animals.
              </p>
            </>
          ),
        },
        {
          heading: "What the Name Covers",
          body: (
            <>
              <p>
                Used precisely, &ldquo;chinchilla&rdquo; means a member of the genus{" "}
                <em>Chinchilla</em>: the long-tailed chinchilla,{" "}
                <em>Chinchilla lanigera</em>, and the short-tailed chinchilla,{" "}
                <em>Chinchilla chinchilla</em>, the latter also encountered in older
                literature under other names such as the Bolivian or royal chinchilla.
                Because the same word is used for the domestic form, a reader can meet three
                different meanings &mdash; two wild species and a domesticated population
                &mdash; in a single article without being told which is meant.
              </p>
              <p>
                Several related or borrowed uses cause confusion. Viscachas, in the same
                family, are close relatives but are not chinchillas. Chinchilla rats, of the
                genus <em>Abrocoma</em>, are a separate group named for a similar coat.
                &ldquo;Chinchilla&rdquo; is also used as a colour or breed name in entirely
                unrelated domestic animals, including certain rabbits and cats, where it
                describes coat appearance and implies no relationship to Andean rodents.
                Regional Spanish usage adds further local names. When a claim about
                &ldquo;chinchillas&rdquo; matters, check which of these the source meant.
              </p>
            </>
          ),
        },
        {
          heading: "Domestic, Feral and Wild",
          body: (
            <>
              <p>
                Domestic chinchillas are a genuinely domesticated population, established
                comparatively recently: they are generally traced to a small founding group
                of animals taken from Chile to North America in the early twentieth century,
                from which farmed and companion populations worldwide are largely descended.
                The wild ancestry is principally the long-tailed chinchilla, but studies and
                breeding histories indicate that many domestic lines carry mixed ancestry
                involving both wild species. That mixing is one reason domestic animals
                cannot be treated as a stand-in for either wild species.
              </p>
              <p>
                The founding population was small, and generations of selection for coat
                colour and fur quality followed, so domestic chinchillas differ from wild
                ones in colour range, size, temperament and tolerance of people. Unlike some
                domestic mammals, chinchillas are not known to have established significant
                feral populations from escapes or releases; the arid, high, rocky conditions
                they evolved in are not widely replicated where they are kept. Their status
                as an animal people may legally keep or trade varies between countries and
                smaller jurisdictions and is not stated here &mdash; check current local law
                and, for questions about the animals themselves, a qualified veterinarian and
                established welfare organisations.
              </p>
            </>
          ),
        },
      ]}
      faqs={[
        {
          question: "Are pet chinchillas the same as wild chinchillas?",
          answer:
            "They share ancestry but not a situation. Domestic chinchillas descend from wild Andean stock, most closely the long-tailed chinchilla, and many lines are thought to carry mixed ancestry from both wild species. Domestic animals are numerous and widely kept, while the wild species survive in scattered Andean populations and are treated as threatened. Abundance under human care is not evidence that the wild animals are secure.",
        },
        {
          question: "Why is chinchilla fur so dense?",
          answer:
            "Chinchilla fur is unusual because many hairs emerge from each follicle rather than one, producing a coat often described as among the densest of any land mammal. That density is generally interpreted as insulation against cold, wind and wide daily temperature swings in the high Andes. The same trait made chinchilla pelts extremely valuable, and commercial hunting for fur is the main reason wild populations collapsed.",
        },
        {
          question: "Are wild chinchillas endangered?",
          answer:
            "Both wild species have been assessed as threatened in recent IUCN Red List assessments, reflecting historic fur hunting and continuing habitat loss, mining pressure and small, fragmented populations. Categories are reviewed and can change, so this profile does not state one as permanent; the current listing for each species should be read directly on the IUCN Red List. The abundance of domestic chinchillas does not affect those wild assessments.",
        },
        {
          question: "Where do wild chinchillas live?",
          answer:
            "Wild chinchillas are high-altitude specialists of the South American Andes, on arid and semi-arid rocky slopes with scattered shrubs, sheltering in crevices and burrows among rocks. Historically they were recorded across parts of Chile, Peru, Bolivia and Argentina; today the remaining wild colonies are far more restricted and patchy, with the long-tailed chinchilla associated mainly with northern Chile and the short-tailed with higher Andean ground.",
        },
        {
          question:
            "What is the difference between long-tailed and short-tailed chinchillas?",
          answer:
            "They are two living species in the genus Chinchilla. The long-tailed chinchilla is generally the smaller and slighter of the two, with a proportionally longer tail and larger ears, and it is the species most often linked to domestic stock. The short-tailed chinchilla is typically stockier and heavier with a shorter tail, smaller ears and a thicker neck, and it tends to occur at higher elevations. Field identification can be difficult.",
        },
      ]}
      quickFacts={[
        { label: "Group", value: "Andean rodents of the genus Chinchilla, family Chinchillidae" },
        {
          label: "Species covered",
          value:
            "Two living wild species: long-tailed (Chinchilla lanigera) and short-tailed (Chinchilla chinchilla)",
        },
        {
          label: "Typical size",
          value:
            "Head and body commonly about 22–38 cm, with a bushy tail; varies by species, sex and region",
        },
        {
          label: "Typical weight",
          value: "Often around 0.4–0.8 kg; short-tailed chinchillas are usually the heavier of the two",
        },
        { label: "Diet", value: "Herbivorous: grasses, herbs, leaves, bark, seeds and fruits; varies by season and site" },
        {
          label: "Activity",
          value: "Mainly crepuscular and nocturnal; typically colonial, sheltering in rock crevices and burrows",
        },
        {
          label: "Notable trait",
          value: "Extremely dense coat, with many hairs emerging from a single follicle",
        },
        {
          label: "Conservation status",
          value: "Wild species assessed as threatened; categories are reviewed, so check the current IUCN Red List entry",
        },
      ]}
      relatedLinks={[
        {
          label: "Mammal Encyclopedia",
          href: "/animal-encyclopedia/mammals",
          description: "Browse other mammal profiles",
        },
        {
          label: "Short-Tailed Chinchilla",
          href: "/endangered-animals/species/short-tailed-chinchilla",
          description: "The wild Andean chinchilla species and its Red List assessment.",
        },
        {
          label: "Endangered Animals",
          href: "/endangered-animals",
          description: "Species assessed as at risk, and why",
        },
        {
          label: "Animal Domestication",
          href: "/animal-domestication",
          description: "How wild species became domestic populations",
        },
        {
          label: "Animal Food & Diet",
          href: "/animal-food-and-diet",
          description: "Feeding ecology, and where care questions belong",
        },
        {
          label: "Domestic Animals",
          href: "/domestic-animals",
          description: "Companion, working and farmed animals",
        },
        {
          label: "Small Pets",
          href: "/small-pets",
          description: "Small domestic mammals covered on FaunaHub",
        },
        {
          label: "Animal Senses & Adaptations",
          href: "/animal-senses-and-adaptations",
          description: "How animals sense and survive their habitats",
        },
      ]}
    />
  );
}
