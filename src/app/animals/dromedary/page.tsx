import type { Metadata } from "next";
import AnimalProfileLayout from "@/components/AnimalProfileLayout";
import { ANIMAL_SOURCES } from "@/lib/educational/animal-sources";
import { getAnimalGalleryImages, getAnimalImage, getAnimalOgImage } from "@/lib/images/animal-images";
import { buildArticleMetadata } from "@/lib/metadata";

const PATH = "/animals/dromedary";
const TITLE = "Dromedary: One-Humped Camel Profile, Adaptations & Range";
const DESC =
  "The dromedary (Camelus dromedarius) is the one-humped camel: a domesticated desert specialist with no wild population and large feral herds in Australia.";

export const metadata: Metadata = buildArticleMetadata({
  title: TITLE,
  description: DESC,
  path: PATH,
  publishedTime: "2026-08-04",
  modifiedTime: "2026-08-04",
  ogImage: getAnimalOgImage("dromedary"),
});

export default function DromedaryPage() {
  return (
    <AnimalProfileLayout
      commonName="Dromedary"
      scientificName="Camelus dromedarius"
      pageTitle={TITLE}
      description={DESC}
      path={PATH}
      parentCategory="Mammals"
      parentCategoryHref="/animal-encyclopedia/mammals"
      tags={["Domestic animals", "Camelids", "Desert adaptations"]}
      image={getAnimalImage("dromedary") ?? undefined}
      galleryImages={getAnimalGalleryImages("dromedary")}
      sources={ANIMAL_SOURCES["dromedary"]}
      publishedDate="2026-08-04"
      modifiedDate="2026-08-04"
      overview={
        <>
          <p>
            The dromedary, <em>Camelus dromedarius</em>, is the single-humped camel of the hot deserts and dry rangelands of North Africa, the Horn of Africa, Arabia, the Middle East and South Asia. It is one of three camel species recognised in the genus <em>Camelus</em>, and this page covers that one species. The broader group &mdash; including the two-humped Bactrian camel and the separate wild Bactrian camel &mdash; is treated on the FaunaHub <a href="/animals/camel">camel group profile</a>; here the focus stays on what is distinctive about <em>C. dromedarius</em> itself.
          </p>
          <p>
            The most obvious feature is the hump: one, not two. That single dorsal hump is a fat store, not a water tank, and its size and firmness change with the animal&apos;s condition &mdash; a well-fed dromedary typically carries a full, upright hump, while an animal that has been working hard on sparse forage may show a slack or partly collapsed one. Beyond the hump, dromedaries are usually taller and longer-legged than Bactrians, with a shorter, finer coat suited to heat rather than to the cold Central Asian winters that shape the two-humped species.
          </p>
          <p>
            A second distinguishing point is status rather than anatomy. There is no surviving wild dromedary population anywhere: the species exists today as domesticated animals kept by people, plus a large free-ranging feral population in Australia descended from imported working camels. Any &quot;wild camel&quot; described as truly wild is a different species, the wild Bactrian camel. Figures for herd sizes, lifespans and physiological limits vary widely between regions and sources, so this profile prefers ranges and qualitative description; readers wanting precise national statistics should consult primary sources such as national agricultural agencies, the FAO, or the IUCN Red List.
          </p>
        </>
      }
      habitat={
        <>
          <p>
            Dromedaries are animals of arid and semi-arid country: sand and gravel deserts, dry steppe, thorn scrub, salt flats and the seasonally dry margins where pastoralists move herds between grazing areas. They tolerate very high daytime air temperatures and intense solar radiation, and they also tolerate the sharp night-time cooling typical of clear desert skies. What limits them is generally not heat but the availability of forage and of periodic drinking water; even a highly drought-tolerant animal must eventually drink.
          </p>
          <p>
            Because the species is domesticated, its distribution largely reflects where people keep and move it rather than a natural range. Herds may be managed in near-continuous movement across rangeland, held near settlements and wells, or, in the Australian case, range freely across desert and semi-desert interior country with no management at all. Habitat descriptions for dromedaries are therefore best read as &quot;where the species does well&quot;, not as a wild species&apos; ecological range.
          </p>
        </>
      }
      diet={
        <p>
          Dromedaries are herbivores that browse and graze on a wide spread of dry-country plants: tough grasses, shrubs, tree foliage, thorny species and salt-tolerant halophytes that many other livestock avoid. Tough, mobile lips and hardened structures inside the mouth allow them to handle spiny material, and they typically feed in a scattered, selective way while moving, taking mouthfuls from many plants rather than stripping one patch. Camelids are foregut fermenters with a compartmentalised stomach, and although they are often called ruminants, their digestive anatomy differs from that of cattle and sheep; they are usually described as pseudoruminants. This efficient fermentation, combined with the ability to reclaim moisture as food and waste pass through, helps them extract nutrition and water from forage of low quality. What an individual eats varies with season, region and how it is managed, and this page describes natural feeding ecology only &mdash; it is not feeding guidance.
        </p>
      }
      behavior={
        <>
          <p>
            Dromedaries are social animals. Under traditional herding they are typically kept in groups, and free-ranging feral animals in Australia are commonly seen in bands of females and young with adult males associating seasonally or ranging separately. They are generally described as calm and tolerant of routine handling by familiar people, but males in the seasonal rut can become notably more assertive and are usually managed differently at that time. In rut, male dromedaries may extrude the dulla, an inflatable soft-palate sac, from the side of the mouth &mdash; a display associated with this species and not seen in the same form across all camelids.
          </p>
          <p>
            Movement is a defining behaviour. Dromedaries walk with a pacing gait, moving both legs on the same side together, which produces the rolling motion familiar to riders. Broad two-toed feet with a wide elastic pad spread the animal&apos;s weight and give good purchase on soft sand. Activity tends to shift with heat: feeding and travel concentrate in the cooler parts of the day, with resting through the hottest hours, often facing into the sun so that less of the body surface is exposed. Vocalisations include a range of groans, rumbles and bellows, most conspicuous during handling, loading and the rut.
          </p>
        </>
      }
      humanInteraction={
        <>
          <p>
            The dromedary&apos;s relationship with people is the reason it still exists. For thousands of years it has been used for riding and pack transport across terrain that defeated wheeled vehicles, and it remains a source of milk, meat, hair and hides in many pastoral economies. Camel racing is a major cultural and sporting tradition in parts of the Arabian Peninsula and beyond, and tourism riding is widespread in North Africa and South Asia. In several arid regions the species also underpins mobile pastoral livelihoods where few other livestock can be sustained.
          </p>
          <p>
            The relationship is not only positive. In Australia, feral dromedaries are treated by land managers and Aboriginal ranger groups as an introduced species with impacts on waterholes, vegetation and infrastructure, and management programmes have been undertaken at various times; that management is debated and has changed over the years. Dromedaries are also a continuing subject of veterinary and public-health research, and questions in that area belong with the relevant animal-health and public-health authorities rather than with a general reference page.
          </p>
          <p>
            This profile is natural history, not husbandry. For any question about the care, health, handling or management of a camel, consult a qualified veterinarian with large-animal or camelid experience, together with recognised species-specific welfare and livestock authorities in the relevant country.
          </p>
        </>
      }
      extraSections={[
        {
          heading: "Distribution",
          body: (
            <>
              <p>
                The dromedary&apos;s present distribution is overwhelmingly a human-made one. Domesticated herds are concentrated across the Arabian Peninsula, the Middle East, North Africa, the Sahel and the Horn of Africa, and eastwards into Iran, Pakistan, India and neighbouring dry regions. Some of the largest national herds are generally reported from the Horn of Africa, though published totals differ substantially between sources and survey years, so a single authoritative number should not be assumed.
              </p>
              <p>
                That footprint has changed markedly over time. The species was moved far beyond its region of origin as a working animal, including introductions to Australia during the nineteenth century for inland exploration and haulage. When motor transport replaced them, released and escaped animals established what is now typically described as the world&apos;s largest free-ranging dromedary population, spread across the arid Australian interior. Smaller historical introductions elsewhere &mdash; including a well-known nineteenth-century experiment in the southwestern United States &mdash; did not produce lasting populations. Meanwhile the ancestral wild population that once existed in Arabia is gone, so the modern map shows domestic herds and one large feral population rather than any natural range.
              </p>
            </>
          ),
        },
        {
          heading: "Senses & Adaptations",
          body: (
            <>
              <p>
                Several dromedary adaptations are worth separating from the myths that surround them. The hump stores <strong>fat</strong>. It is not a water reservoir. Concentrating the body&apos;s fat reserve in one dorsal mass leaves the rest of the body relatively uninsulated, which helps heat escape; metabolising that fat does release some metabolic water, but far less than the animal saves through the water-conserving traits described below, and the hump should not be pictured as a tank.
              </p>
              <p>
                Dromedaries have <strong>oval, elliptical red blood cells</strong>, unusual among mammals, whose shape and membrane properties are associated with the ability to withstand large swings in blood-water content. This matters because the species can <strong>rehydrate rapidly</strong>, taking in a very large volume of water in a single drinking session after a long dry period &mdash; volumes usually described in the tens of litres, with the amount depending on body size, condition and how depleted the animal is. In many mammals such a rapid influx would be dangerous to red blood cells; in camels the cells can swell substantially without rupturing.
              </p>
              <p>
                A third key trait is <strong>tolerance of a fluctuating body temperature</strong>. Rather than holding a near-constant core temperature, a dehydrated dromedary can let body temperature drift upward through the heat of the day by several degrees Celsius and shed that heat overnight, which greatly reduces the water spent on sweating. Reported ranges vary with hydration state, workload and study, so the useful point is the mechanism rather than a fixed figure. Water is conserved further through highly concentrated urine, dry faeces and nasal passages that recover moisture from exhaled air.
              </p>
              <p>
                The senses and outer anatomy are built for blowing sand and glare: nostrils that can be narrowed or closed, a double row of long eyelashes, a translucent third eyelid that can sweep the eye, bushy protective ear openings, and thickened callosities on the chest and leg joints where the animal kneels on hot ground. Broad splayed foot pads spread the load on soft substrate. Vision and smell are both considered well developed, with the species widely reported to detect distant water and vegetation, though the precise limits of that ability are hard to quantify.
              </p>
            </>
          ),
        },
        {
          heading: "Lifespan & Life Stages",
          body: (
            <>
              <p>
                Camelids are long-lived among large herbivores, but the numbers should be read as ranges rather than fixed values, and the two settings below should not be blended.
              </p>
              <p>
                <strong>Free-ranging (feral) animals.</strong> Because no wild dromedary population survives, the closest equivalent to a &quot;wild&quot; figure comes from feral herds such as those in Australia, where individuals live without veterinary attention or supplementary feeding. Lifespans there are shaped by drought, forage availability, injury and management activity, and are generally shorter and much more variable than in managed herds. Reliable population-wide age data are limited.
              </p>
              <p>
                <strong>Under human care.</strong> Working and managed dromedaries are commonly reported to live into their thirties, with some individuals reaching around forty years; outcomes vary widely with workload, nutrition, region and individual health, and any single headline figure will be an approximation.
              </p>
              <p>
                Reproduction typically produces a single calf, with twins rare. Gestation is usually given as roughly twelve to fourteen months, and calves are precocial &mdash; up on their feet within hours and following the herd soon after. Suckling commonly continues for about a year or somewhat longer where the calf is not separated earlier. Sexual maturity is generally reached at about three to five years, with females often maturing earlier than males, and males typically not competing successfully in the rut until they are older and fully grown. Breeding is often seasonal, tied to cooler months and to forage conditions in a given region.
              </p>
            </>
          ),
        },
        {
          heading: "Conservation Context",
          body: (
            <>
              <p>
                Conservation frameworks are built mainly around wild species, and the dromedary sits awkwardly in them: it is a domesticated animal whose ancestral wild population no longer exists. It is therefore not a conservation concern in the usual sense, and its numbers are recorded through agricultural and livestock statistics rather than through wildlife population monitoring. In Australia the feral population is dealt with under introduced-species and land-management policy, which is a different question again from species conservation.
              </p>
              <p>
                Genuine conservation concern in the genus <em>Camelus</em> attaches to the separate wild Bactrian camel, <em>Camelus ferus</em>, a distinct species surviving in small numbers in remote parts of Central Asia. Conservation assessments change as new surveys and reviews are published, so no status should be treated as permanent. For the current listing and assessment of any camel species, consult the IUCN Red List at iucnredlist.org directly, rather than relying on a figure quoted here or elsewhere. The sources listed at the foot of this page are the starting point.
              </p>
            </>
          ),
        },
        {
          heading: "What the Name Covers",
          body: (
            <>
              <p>
                &quot;Dromedary&quot; refers to one species, <em>Camelus dromedarius</em>. It is used interchangeably with &quot;Arabian camel&quot; and &quot;one-humped camel&quot;. In much of the world where the species is kept, everyday speech simply says &quot;camel&quot; and means this animal &mdash; which is why an unqualified mention of camels in a North African or Arabian context is usually about dromedaries, while the same word in a Central Asian context may mean the two-humped Bactrian. The word itself comes from a Greek root associated with running, and in some older and specialist usage &quot;dromedary&quot; is narrowed further to a riding type of one-humped camel rather than the species as a whole.
              </p>
              <p>
                Two wider terms often get confused with it. &quot;Camel&quot; is a group name covering all three species in <em>Camelus</em> and is handled on the <a href="/animals/camel">camel profile</a>. &quot;Camelid&quot; is broader still: it takes in the South American members of the family &mdash; llama, alpaca, guanaco and vicu&ntilde;a &mdash; which are humpless relatives, not camels. A crossbred camel produced from dromedary and Bactrian parents also has regional names in Central Asia, but such hybrids are not a separate species.
              </p>
            </>
          ),
        },
        {
          heading: "Domestic, Feral and Wild",
          body: (
            <>
              <p>
                <strong>Domestic.</strong> The dromedary is a fully domesticated animal. Domestication is generally placed in the Arabian Peninsula region several thousand years ago, but the timing, the number of separate origins and the exact area are still debated among archaeologists and geneticists, and dates quoted with false precision should be treated cautiously.
              </p>
              <p>
                <strong>Wild ancestor.</strong> The wild population from which domestic dromedaries descend is extinct. It is known from archaeological and fossil material rather than from any living herd, which means the species has no wild reference population &mdash; an unusual situation among major domestic animals, and one reason the dromedary is often discussed alongside animals such as the aurochs-derived cattle whose wild forms are also gone.
              </p>
              <p>
                <strong>Feral.</strong> Feral is not the same as wild. Australia&apos;s free-ranging dromedaries are descendants of domesticated imports that escaped or were released; they live independently of people but are not a recovered wild population, and their presence is managed as an introduced-species issue. The only truly wild camel alive today is <em>Camelus ferus</em>, a separate species and not the dromedary&apos;s wild ancestor.
              </p>
            </>
          ),
        },
      ]}
      faqs={[
        {
          question: "Why does a dromedary have one hump and a Bactrian camel two?",
          answer:
            "The dromedary (Camelus dromedarius) carries a single fatty hump, while the Bactrian camel (Camelus bactrianus) carries two. Both are fat stores, so the difference is arrangement rather than function. The dromedary is associated with hot, low-latitude deserts and is typically taller, longer-legged and shorter-coated; the Bactrian belongs to colder Central Asian country and usually grows a much heavier winter coat. Hump size and firmness also change with an individual animal's condition and season.",
        },
        {
          question: "Does a dromedary store water in its hump?",
          answer:
            "No. This is the most persistent camel myth. The hump stores fat, not water. Concentrating fat in one dorsal mass leaves the rest of the body better able to shed heat, and metabolising that fat releases a modest amount of water, but nothing like a reservoir. Real water economy comes from elsewhere: highly concentrated urine, dry faeces, moisture recovered from exhaled air, and tolerance of a body temperature that drifts upward through the day.",
        },
        {
          question: "Are there any wild dromedaries left?",
          answer:
            "Not in the true sense. The ancestral wild population of Camelus dromedarius is extinct, known only from archaeological and fossil material. What exists today is domesticated animals kept across Africa and Asia, plus a large feral population in the Australian interior descended from nineteenth-century imports. Feral is not wild: those animals live independently of people but are not a recovered wild lineage. The only genuinely wild camel species is the separate Camelus ferus of Central Asia.",
        },
        {
          question: "How does a dromedary survive heat and drought?",
          answer:
            "Through several traits working together rather than one trick. A dehydrated dromedary can let its body temperature rise by several degrees through the day and shed that heat overnight, saving the water that sweating would cost. It produces concentrated urine and dry faeces, and recovers moisture from exhaled air. Its oval, elliptical red blood cells are associated with tolerating large swings in blood-water content, which supports the species' ability to rehydrate very rapidly.",
        },
        {
          question: "How much can a dromedary drink at once, and how fast?",
          answer:
            "A depleted dromedary can take in a very large volume in a single session, usually described in the tens of litres, over a short period. The exact amount depends on body size, condition and how dehydrated the animal is, so ranges vary between reports. What makes this notable is that such a rapid influx of water would stress the red blood cells of many mammals; camel red cells are oval and can swell considerably without rupturing.",
        },
      ]}
      quickFacts={[
        { label: "Scientific name", value: "Camelus dromedarius (one of three species in the genus Camelus)" },
        { label: "Humps", value: "One, typically; a fat store rather than a water store" },
        { label: "Status of the species", value: "Domesticated; no surviving wild population, plus a large feral population in Australia" },
        { label: "Typical range", value: "Arid and semi-arid North Africa, the Horn of Africa, Arabia, the Middle East and South Asia" },
        { label: "Diet", value: "Herbivore; typically browses tough, thorny and salt-tolerant desert plants" },
        { label: "Lifespan", value: "Often into the thirties under human care, occasionally about forty; generally shorter and more variable in feral herds" },
        { label: "Reproduction", value: "Usually a single calf; gestation generally given as about twelve to fourteen months" },
        { label: "Notable adaptations", value: "Oval red blood cells, tolerance of a body temperature that swings several degrees, rapid rehydration" },
      ]}
      relatedLinks={[
        { label: "Camel Profile", href: "/animals/camel", description: "The group-level page covering all three camel species" },
        { label: "Animal Domestication", href: "/animal-domestication", description: "How domestication differs from taming and from going feral" },
        { label: "Animal Food & Diet", href: "/animal-food-and-diet", description: "How diets are described on FaunaHub, and where the boundaries are" },
        { label: "Domestic Animals", href: "/domestic-animals", description: "Companion, livestock and working animals kept by people" },
        { label: "Senses & Adaptations", href: "/animal-senses-and-adaptations", description: "How animals sense and cope with extreme environments" },
        { label: "Animal Lifespans", href: "/animal-lifespans", description: "Why wild and managed lifespans are reported separately" },
        { label: "Mammals Encyclopedia", href: "/animal-encyclopedia/mammals", description: "Browse more mammal profiles" },
      ]}
    />
  );
}
