import type { Metadata } from "next";
import ComparisonPageLayout from "@/components/ComparisonPageLayout";
import { COMPARISON_SOURCES } from "@/lib/educational/animal-sources";
import { buildArticleMetadata } from "@/lib/metadata";

const PUBLISHED = "2026-05-12";
const MODIFIED = "2026-05-18";

const title = "Alligator vs Crocodile";
const pageTitle = "Alligator vs Crocodile — Snout, Teeth, Range & Key Differences";
const description =
  "Alligator vs crocodile: how to tell them apart by snout shape, visible teeth, and geographic range. Family Alligatoridae vs family Crocodylidae.";

export const metadata: Metadata = buildArticleMetadata({
  title: pageTitle,
  description,
  path: "/compare/alligator-vs-crocodile",
  publishedTime: PUBLISHED,
  modifiedTime: MODIFIED,
});

export default function AlligatorVsCrocodilePage() {
  return (
    <ComparisonPageLayout
      title={title}
      pageTitle={pageTitle}
      description={description}
      path="/compare/alligator-vs-crocodile"
      labelA="Alligator"
      labelB="Crocodile"
      sources={COMPARISON_SOURCES["alligator-vs-crocodile"]}
      publishedDate={PUBLISHED}
      modifiedDate={MODIFIED}
      quickAnswer={
        <>
          <p>
            Alligators (family Alligatoridae) and crocodiles (family Crocodylidae) are
            different but related groups of crocodilians. The most reliable practical
            differences are snout shape (alligators broader and more U-shaped, crocodiles
            narrower and more V-shaped), the visibility of the fourth lower-jaw tooth when
            the mouth is closed (usually visible in crocodiles, not in alligators), and
            geographic range — alligators are restricted to a small number of regions
            while crocodiles are far more widely distributed.
          </p>
          <p>
            Salinity tolerance also differs: many crocodile species — particularly the
            saltwater crocodile — are more tolerant of brackish and marine habitats than
            alligators, which are predominantly freshwater.
          </p>
        </>
      }
      table={[
        { attribute: "Family", a: "Alligatoridae", b: "Crocodylidae" },
        { attribute: "Living species", a: "Two alligators (American, Chinese) + caimans in same family", b: "Multiple species across several genera" },
        { attribute: "Snout shape", a: "Broader, U-shaped", b: "Narrower, V-shaped" },
        { attribute: "Visible 4th lower tooth", a: "Usually not visible when mouth is closed", b: "Usually visible when mouth is closed" },
        { attribute: "Salinity tolerance", a: "Predominantly freshwater", b: "Often more tolerant of brackish/marine water" },
        { attribute: "Primary range", a: "Southeastern USA; small range in eastern China", b: "Tropical & subtropical Africa, Asia, Australia, Americas" },
        { attribute: "Typical habitat", a: "Freshwater swamps, marshes, slow rivers, lakes", b: "Rivers, wetlands, mangroves, some marine in saltwater crocodile" },
        { attribute: "IUCN Status (varies)", a: "American: lower concern; Chinese: Critically Endangered", b: "Varies sharply by species (verify per species)" },
      ]}
      keyDifferences={[
        {
          heading: "Snout",
          body: "Alligators have a broad, rounded U-shaped snout. Crocodiles have a narrower, more pointed V-shaped snout. This is the most consistent visual diagnostic from above.",
        },
        {
          heading: "Visible teeth",
          body: "When the mouth is closed, crocodiles usually show the fourth tooth of the lower jaw protruding outside the upper lip. In alligators, the upper jaw overlaps and conceals lower teeth when the mouth is closed.",
        },
        {
          heading: "Geographic range",
          body: "Alligators are restricted to the southeastern United States and a small area of eastern China. Crocodiles are far more widely distributed across tropical and subtropical regions worldwide.",
        },
        {
          heading: "Salinity tolerance",
          body: "Many crocodile species — especially the saltwater crocodile — tolerate brackish or marine water due to salt-secreting glands. Alligators are largely confined to freshwater.",
        },
        {
          heading: "Conservation status",
          body: "Status varies sharply by species. The American alligator has recovered substantially; the Chinese alligator is Critically Endangered. Some crocodile species are stable or harvested under management; others are highly threatened.",
        },
      ]}
      similarities={[
        <span key="order">
          Both are crocodilians (order Crocodilia) and share the same general body plan: armored skin, long muscular tail, powerful jaws, and a flattened body adapted for life partly in water.
        </span>,
        <span key="ambush">
          Both are ambush predators that wait for prey at the water&apos;s edge rather than actively pursuing it.
        </span>,
        <span key="nestcare">
          Both groups exhibit notable parental nest care — guarding eggs, assisting hatchlings, and protecting young for some period after hatching.
        </span>,
        <span key="ectotherm">
          Both are ectothermic (reliant on environmental temperature) and thermoregulate by basking and moving between water and shore.
        </span>,
      ]}
      confusionPoints={[
        <span key="caiman">
          Caimans are in family Alligatoridae but are not alligators. They are separate genera native to Central and South America.
        </span>,
        <span key="gharial">
          Gharials (family Gavialidae) are a third living crocodilian family — distinct from both alligators and crocodiles, with a long thin snout adapted for catching fish.
        </span>,
        <span key="size">
          Generalisations about which is larger are misleading because both groups contain large and small species. The saltwater crocodile is generally cited as the largest living crocodilian.
        </span>,
      ]}
      faqs={[
        {
          question: "Are alligators more dangerous than crocodiles?",
          answer:
            "The general pattern in conservation and wildlife literature is that several large crocodile species — especially the Nile crocodile and the saltwater crocodile — are responsible for more documented human fatalities than alligators. Local context matters enormously; regional safety advice should always be followed in any area where these animals occur.",
        },
        {
          question: "Do alligators and crocodiles interbreed?",
          answer:
            "No. Alligators and crocodiles are in different families and are reproductively isolated. They do not hybridise in the wild or in captivity.",
        },
        {
          question: "Where do alligators and crocodiles overlap geographically?",
          answer:
            "Most regions have either crocodiles or alligators, not both. Southern Florida is one of the few places where the American alligator and a crocodile species (the American crocodile) overlap in range.",
        },
        {
          question: "How can a guide reliably tell them apart in the field?",
          answer:
            "Combine three checks: snout shape (U vs V), whether the fourth lower-jaw tooth is visible when the mouth is closed, and what region you are in. Together these are reliable for adult animals; juveniles can be harder to distinguish from above.",
        },
        {
          question: "Is colour a reliable way to tell them apart?",
          answer:
            "Not on its own. Field colour varies with age, water clarity, algae and mud cover, and lighting. Generalisations such as 'alligators are darker' do not hold up across populations. Snout shape, the visible-tooth check, and geographic range are far more reliable than colour.",
        },
      ]}
      relatedLinks={[
        { label: "Alligator Profile", href: "/animals/alligator", description: "American & Chinese alligator overview" },
        { label: "Crocodile Profile", href: "/animals/crocodile", description: "Crocodile species and ecology" },
        { label: "Reptile Encyclopedia", href: "/animal-encyclopedia/reptiles", description: "Browse all reptile profiles" },
        { label: "All Comparisons", href: "/compare" },
      ]}
    />
  );
}
