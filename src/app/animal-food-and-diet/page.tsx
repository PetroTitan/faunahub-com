import type { Metadata } from "next";
import Link from "next/link";
import FeedingLayout, { Section, FaqBlock } from "@/components/feeding/FeedingLayout";
import { buildMetadata } from "@/lib/metadata";
import { itemListSchema } from "@/lib/schema";
import { DIET_CATEGORIES, FEEDING_GUIDES } from "@/lib/animal-diet-safety";

const PATH = "/animal-food-and-diet";
const MODIFIED = "2026-06-28";
const TITLE =
  "Animal Food and Diet Safety: What Animals Eat and When to Ask a Veterinarian";
const DESC =
  "Educational guides to what different animals naturally eat and how to think about feeding safety — without feeding plans, portions, or treatment. Always consult a veterinarian for a specific animal.";

export const metadata: Metadata = buildMetadata({ title: TITLE, description: DESC, path: PATH });

const HUB_FAQ = [
  {
    question: "Does FaunaHub tell me what or how much to feed my animal?",
    answer:
      "No. FaunaHub explains, in general educational terms, what different animals naturally eat and why feeding safety matters. It does not provide feeding plans, portion sizes, schedules, recipes, or supplement advice. A specific animal's diet should be planned with a qualified veterinarian who knows its species, age, and health.",
  },
  {
    question: "Is a natural diet automatically a safe diet for a pet?",
    answer:
      "Not necessarily. Knowing what a species eats in the wild is useful background, but animals in human care have different needs, and copying a wild diet can be unbalanced or unsafe. Species-specific feeding decisions belong with a veterinarian and authoritative care resources, not a general website.",
  },
  {
    question: "What should I do if I think my pet ate something harmful?",
    answer:
      "Treat it as urgent. Contact a veterinarian, an animal poison-control service, or your local emergency service right away — do not wait and do not try to manage it from a web page. FaunaHub does not provide diagnosis, treatment, or emergency steps.",
  },
  {
    question: "Should I feed wild animals?",
    answer:
      "Feeding wildlife often does more harm than good — it can change natural behaviour, cause dependency, spread disease, and create conflict, and in many places it is discouraged or regulated. FaunaHub explains these risks but gives no instructions on what or how to feed wild animals; questions about local wildlife belong with official wildlife agencies.",
  },
];

export default function AnimalFoodAndDietHub() {
  const itemList = FEEDING_GUIDES.map((g, i) => ({
    name: g.title,
    url: `https://faunahub.com${g.path}`,
    position: i + 1,
  }));
  const related = FEEDING_GUIDES.map((g) => ({ label: g.title, href: g.path }));

  return (
    <FeedingLayout
      crumbs={[{ name: "Animal Food & Diet", href: PATH }]}
      kicker="Diet & feeding safety"
      h1="Animal food & diet safety"
      modified={MODIFIED}
      intro={
        <p>
          Different animals eat very different things, and what is healthy for one can be useless or
          dangerous for another. These guides explain, in plain educational terms, what animals
          naturally eat and how to think about feeding safety — while pointing every animal-specific
          decision to a qualified veterinarian. They are not feeding plans, and not emergency guidance.
        </p>
      }
      related={related}
      faq={HUB_FAQ}
    >
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(itemListSchema(itemList)) }}
      />

      <Section id="scope" title="Educational scope and the veterinary boundary">
        <p>
          FaunaHub is an educational resource. This cluster describes natural diets and general
          feeding-safety ideas; it does not diagnose, treat, or prescribe, and it never gives portion
          sizes, schedules, recipes, dosages, or &ldquo;what to do if your pet ate X&rdquo; steps. For
          a specific animal, a qualified veterinarian is the right source. For a suspected poisoning or
          ingestion, contact a veterinarian, an animal poison-control service, or a local emergency
          service immediately. This boundary comes directly from our{" "}
          <Link href="/animal-research-sources/animal-care-and-veterinary-boundaries">care &amp; veterinary boundaries</Link>{" "}
          guide.
        </p>
      </Section>

      <Section id="natural-vs-care" title="Natural diets vs feeding animals in human care">
        <p>
          Knowing what a species eats in the wild is valuable background, but it is not a recipe for
          feeding an animal at home. Animals in human care can have different activity, life stage, and
          health needs, and a diet that works in the wild may be impossible to reproduce safely or may
          leave out things a captive animal needs. Treat natural-diet information as ecology, and treat
          a particular animal&apos;s diet as a question for a veterinarian.
        </p>
      </Section>

      <Section id="species-matters" title="Why species-specific nutrition matters">
        <p>
          Nutritional needs are species-specific. Cats are obligate carnivores; rabbits are
          fibre-dependent herbivores; bird and reptile diets vary enormously from one species to the
          next. Because of this, there is rarely a single answer that fits &ldquo;pets&rdquo; or even
          &ldquo;birds&rdquo; as a whole, and a food that is fine for one animal can be a serious
          concern for another.
        </p>
      </Section>

      <Section id="ecology" title="What animals eat — natural feeding categories">
        <p>
          A quick ecological overview. These categories describe how animals feed in nature; diet also
          shifts with age, season, and habitat. See{" "}
          <Link href="/animal-food-and-diet/what-animals-eat">what animals eat</Link> for more.
        </p>
        <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4 list-none p-0 m-0 not-prose">
          {DIET_CATEGORIES.map((c) => (
            <li key={c.key} className="card p-4 h-full">
              <h3 className="text-base font-semibold text-[#17211B] mb-1">{c.label}</h3>
              <p className="text-sm text-[#2C3A2F] leading-snug">{c.description}</p>
              <p className="text-xs text-[#5E6B63] mt-1.5">Examples: {c.animalExamples}</p>
            </li>
          ))}
        </ul>
      </Section>

      <Section id="guides" title="Feeding-safety guides">
        <p>Educational, boundary-first guides — each routes animal-specific decisions to a veterinarian.</p>
        <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4 list-none p-0 m-0 not-prose">
          {FEEDING_GUIDES.map((g) => (
            <li key={g.slug}>
              <Link href={g.path} className="card p-5 h-full flex flex-col gap-1.5 hover:shadow-md hover:border-[#CFE0A8] transition-all group hover:no-underline">
                <span className="text-base font-semibold text-[#17211B] group-hover:text-[#063F2A] transition-colors">{g.title}</span>
                <span className="text-sm text-[#2C3A2F] leading-snug">{g.summary}</span>
                <span className="text-xs text-[#5E6B63] leading-snug"><span className="font-medium">Boundary:</span> {g.riskBoundary}</span>
              </Link>
            </li>
          ))}
        </ul>
      </Section>

      <Section id="dogs-cats" title="Dogs and cats">
        <p>
          Dogs are omnivores and cats are obligate carnivores, and some everyday human foods are
          documented concerns for them. FaunaHub already covers these on dedicated pages —{" "}
          <Link href="/dogs/food">dog food safety</Link> and{" "}
          <Link href="/cats/food">cat food safety</Link> — written as general education, not feeding
          plans. For any specific concern, including a suspected ingestion, contact a veterinarian or
          an animal poison-control service rather than relying on a web page.
        </p>
      </Section>

      <Section id="livestock" title="Livestock and working animals">
        <p>
          Livestock and working animals such as cattle, sheep, goats, and horses have specialised
          dietary needs that depend on species, age, workload, and management system. FaunaHub does not
          provide feed formulations or livestock-management instructions; those decisions belong with a
          veterinarian or a qualified agricultural adviser. For the history of how these animals became
          domestic, see{" "}
          <Link href="/animal-domestication/livestock-domestication">livestock domestication</Link>.
        </p>
      </Section>

      <Section id="sources" title="How FaunaHub checks animal diet sources">
        <p>
          Diet and toxicity information is drawn from veterinary and institutional sources and kept
          cautious and general. The{" "}
          <Link href="/animal-research-sources">animal research sources</Link> cluster explains how we
          choose and read sources, the{" "}
          <Link href="/animal-research-sources/how-faunahub-uses-sources">source workflow</Link> covers
          our checks, and the{" "}
          <Link href="/animal-research-sources/animal-care-and-veterinary-boundaries">care &amp; veterinary boundaries</Link>{" "}
          guide sets the line between education and advice.
        </p>
      </Section>

      <FaqBlock faq={HUB_FAQ} />
    </FeedingLayout>
  );
}
