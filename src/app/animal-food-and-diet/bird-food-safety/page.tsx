import type { Metadata } from "next";
import FeedingLayout, { Section, FaqBlock } from "@/components/feeding/FeedingLayout";
import { buildMetadata } from "@/lib/metadata";

const PATH = "/animal-food-and-diet/bird-food-safety";
const MODIFIED = "2026-06-28";
const TITLE = "Why There Is No Single \"Bird Diet\"";
const DESC =
  "Bird diets vary enormously by species, so there is no one \"bird diet.\" An educational look at avian feeding biology and why wild-bird feeding carries risks.";

export const metadata: Metadata = buildMetadata({ title: TITLE, description: DESC, path: PATH });

const FAQ = [
    {
      question: "Is there one \"bird diet\" that works for all pet birds?",
      answer:
        "No. Bird species differ enormously in their natural foods and digestive biology, so a single diet does not fit all birds, and a food suited to one kind of bird can be unsuitable for another. Diet varies by species, age, season, and habitat. This page is educational and does not provide feeding plans, portions, or recipes; for a specific bird, consult a qualified avian veterinarian.",
    },
    {
      question: "Which human foods are concerns for pet birds?",
      answer:
        "Avian-care sources commonly flag foods such as avocado, chocolate, caffeine, alcohol, and very salty foods as documented concerns to discuss with an avian veterinarian. This is not a complete list, it is not emergency guidance, and naming these foods does not mean others are automatically safe. If you think a bird ate something harmful, contact a veterinarian, an animal poison-control service, or an emergency service immediately.",
    },
    {
      question: "Should I feed wild birds in my garden?",
      answer:
        "This page does not give wild-bird feeding instructions. Feeding wild birds can carry documented risks, including disease spread at feeding sites, poor nutrition, dependency, habituation, and increased human-wildlife conflict. Whether feeding is appropriate is highly local and situation-dependent, so the right source is your local or national wildlife agency or a recognised conservation or ornithological organisation.",
    },
    {
      question: "What should I do if my bird ate something I'm worried about?",
      answer:
        "Treat it as urgent and do not delay care. Contact a veterinarian, an animal poison-control service, or a local emergency service immediately. This page is educational only and does not provide diagnosis, first aid, or treatment steps. An avian veterinarian is the appropriate professional for decisions about a specific bird's health.",
    },
];

export default function BirdFoodSafetyPage() {
  return (
    <FeedingLayout
      crumbs={[
        { name: "Animal Food & Diet", href: "/animal-food-and-diet" },
        { name: "Bird food safety", href: PATH },
      ]}
      kicker="Pet food safety"
      h1={"Bird diet & food safety"}
      modified={MODIFIED}
      intro={
        <>
          <p>
            Birds are one of the most dietarily diverse groups of animals on Earth, and that diversity is exactly why the phrase &quot;bird diet&quot; can be misleading. A seed-eating parrot, a foraging chicken, a dabbling duck, and a nectar-sipping hummingbird are all birds, yet their natural foods, digestive systems, and nutritional needs differ profoundly. A food or feeding approach suited to one kind of bird can be inappropriate, or even harmful, for another. This page is an educational overview of that biological variation and of the documented risks around bird feeding.
          </p>
          <p>
            This guide is general natural-history and safety-literacy information, not veterinary advice. It does not provide feeding plans, portions, schedules, recipes, or supplement guidance, and it offers no instructions for feeding wild birds. For decisions about a specific pet bird&#39;s diet or health, the right source is a qualified avian veterinarian, and for questions about wild birds, your local or national wildlife agency.
          </p>
        </>
      }
      related={[
    { label: "Animal Food & Diet", href: "/animal-food-and-diet" },
    { label: "Parrot", href: "/animals/parrot" },
    { label: "Why feeding wildlife is risky", href: "/animal-food-and-diet/wildlife-feeding-risks" },
    { label: "Wildlife & Biodiversity", href: "/wildlife" },
    { label: "Care & veterinary boundaries", href: "/animal-research-sources/animal-care-and-veterinary-boundaries" },
      ]}
      faq={FAQ}
    >
      <Section id="s0" title={"Why there is no single \"bird diet\""}>
        <p>
          Across the roughly ten thousand living bird species, feeding strategies span nearly every food source available. Some birds are primarily seed and grain eaters, others specialise in fruit, nectar, insects, fish, or even other vertebrates, and many shift their diet across the seasons and life stages. Because of this, no one set of foods, and no single way of feeding, applies to &quot;birds&quot; as a category. Diet is shaped by species, age, season, and habitat, all at once.
        </p>
        <p>
          These differences are not cosmetic; they reflect distinct anatomy and physiology. Bill shape, gut length, the presence or absence of a crop and muscular gizzard, and the way nutrients are processed all evolved alongside a species&#39; natural food. That is why understanding what a particular kind of bird eats in the wild is a question of biology, and why translating that into care for an individual bird is a job for an avian veterinarian rather than a generic rule of thumb.
        </p>
      </Section>
      <Section id="s1" title={"Four familiar birds, four very different feeders"}>
        <p>
          Parrots (order <em>Psittaciformes</em>) are a large and varied group; many are seed, nut, and fruit foragers in the wild, with strong, dexterous bills and, in some species, specialised needs that companion-bird owners commonly discuss with an avian vet. Chickens (<em>Gallus gallus domesticus</em>) are ground-foraging omnivores that scratch for seeds, plants, and invertebrates. Treating these two as nutritionally interchangeable would ignore deep differences in their natural foraging biology.
        </p>
        <p>
          Waterfowl such as ducks (family <em>Anatidae</em>) are adapted to feeding in and around water, dabbling or diving for plants, seeds, and aquatic invertebrates. Hummingbirds (family <em>Trochilidae</em>) are at the far end of the spectrum: tiny, high-metabolism birds that feed heavily on floral nectar and small insects, with energy demands unlike almost any other animal. The point of placing them side by side is not to compare menus but to show that &quot;bird&quot; describes a body plan and a class, not a diet.
        </p>
        <p>
          Because these natural diets differ so much, a food that is unremarkable for one species can be unsuitable for another. This is general biology, not a feeding instruction, and it is one reason that species-specific questions belong with a veterinarian who works with that kind of bird.
        </p>
      </Section>
      <Section id="s2" title={"Human foods and pet birds: documented concerns, not a checklist"}>
        <p>
          For companion birds, veterinary and avian-welfare organisations note that certain human foods are documented concerns and are commonly discussed with owners. Widely cited examples include avocado, chocolate, caffeine, alcohol, and very salty foods. These are mentioned here only as topics to raise with an avian veterinarian, not as a complete list, and naming them is not a safety ranking of anything else.
        </p>
        <p>
          This page deliberately gives no amounts, no symptom checklists presented as diagnosis, and no treatment or first-aid steps. &quot;Documented concern&quot; simply means a food that avian-care sources flag for discussion; it is not a statement that any other food is automatically fine. Nutritional needs and sensitivities also vary by species, age, and individual health, which is exactly why a generic list cannot substitute for professional guidance.
        </p>
        <p>
          If you are worried that a bird may have eaten something harmful, treat it as urgent: contact a veterinarian, an animal poison-control service, or a local emergency service right away. Do not wait, and do not rely on a web page to decide whether a situation is serious.
        </p>
      </Section>
      <Section id="s3" title={"Why feeding wild birds carries real risks"}>
        <p>
          Feeding wild birds is a separate question from caring for a pet bird, and it comes with its own well-documented downsides. When birds gather at feeding sites, the crowding and shared surfaces can help diseases spread between individuals and even between species, which is one reason wildlife agencies sometimes ask the public to pause feeding during outbreaks.
        </p>
        <p>
          Other documented concerns include poor nutrition from foods that do not match a species&#39; needs, dependency and habituation that can alter natural foraging and movement, unnatural aggregation of animals, and increased human-wildlife conflict. Feeding can also draw birds into hazards such as roads, predators, or windows. For these reasons this page gives no instructions on what or how to feed wild birds.
        </p>
        <p>
          Guidance on wild birds is also highly local: conditions, species, regulations, and current disease situations differ from place to place. The appropriate source is your local or national wildlife agency or a recognised ornithological or conservation organisation, which can advise on what, if anything, is appropriate in your area.
        </p>
      </Section>
      <Section id="s4" title={"Where to get reliable, bird-specific answers"}>
        <p>
          For anything specific to a pet bird, including diet, nutrition, and health, consult a qualified avian veterinarian who can account for the species, the individual animal, and its circumstances. For urgent concerns about a bird that may have eaten something harmful, contact a veterinarian, an animal poison-control service, or an emergency service immediately rather than searching for answers online.
        </p>
        <p>
          For wild birds, rely on official and reputable sources such as government wildlife agencies and established ornithological and conservation bodies. Using species-appropriate, professionally informed sources is the most reliable way to avoid the harms that come from treating all birds as if they shared one diet.
        </p>
      </Section>
      <FaqBlock faq={FAQ} />
    </FeedingLayout>
  );
}
