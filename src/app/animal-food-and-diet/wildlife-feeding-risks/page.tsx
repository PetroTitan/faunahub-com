import type { Metadata } from "next";
import FeedingLayout, { Section, FaqBlock } from "@/components/feeding/FeedingLayout";
import { buildMetadata } from "@/lib/metadata";

const PATH = "/animal-food-and-diet/wildlife-feeding-risks";
const MODIFIED = "2026-06-28";
const TITLE = "Why Feeding Wildlife Can Be Harmful";
const DESC =
  "An educational look at why feeding wild animals can change behaviour, spread disease, and harm ecosystems, with no feeding advice and routing to agencies.";

export const metadata: Metadata = buildMetadata({ title: TITLE, description: DESC, path: PATH });

const FAQ = [
    {
      question: "Is it ever okay to feed wild animals?",
      answer:
        "This page does not give feeding instructions or tell you it is safe to feed wildlife. Many places discourage or regulate it because of the behaviour, disease, conflict, and ecosystem risks described above. Whether anything is appropriate in your area, and under what rules, is a question for your local or official wildlife agency.",
    },
    {
      question: "I found an injured or orphaned wild animal. What should I do?",
      answer:
        "Do not attempt to feed or treat it based on a webpage. Contact a licensed wildlife rehabilitator or your local or official wildlife agency, who can advise on the safe and legal next steps for your area. If there is an immediate threat to human safety, contact local emergency or animal-control services.",
    },
    {
      question: "Why won't this page say what is safe to feed wildlife?",
      answer:
        "Because diet varies enormously by species, age, season, and habitat, and because feeding wild animals carries documented risks and is often discouraged or regulated. Responsible guidance is to let wild animals find their own food and route specific questions to wildlife professionals, so this page offers no foods, amounts, or methods.",
    },
    {
      question: "What if my pet ate something while we were outdoors?",
      answer:
        "This is a pet-health question, not a wildlife one. For any concern that a companion animal has eaten something harmful, contact a qualified veterinarian or an animal poison-control service immediately. This is general education, not emergency guidance, and you should never delay veterinary care.",
    },
];

export default function WildlifeFeedingRisksPage() {
  return (
    <FeedingLayout
      crumbs={[
        { name: "Animal Food & Diet", href: "/animal-food-and-diet" },
        { name: "Wildlife feeding risks", href: PATH },
      ]}
      kicker="Wildlife"
      h1={"Why feeding wildlife is risky"}
      modified={MODIFIED}
      intro={
        <>
          <p>
            Offering food to wild animals can feel kind, but ecologists and wildlife agencies widely document that it often does more harm than good. This page is general education about why feeding wildlife is risky, drawing on natural history, ecology, and animal-welfare literacy.
          </p>
          <p>
            This is not advice on what or how to feed wild animals, and it is not encouragement to feed them. It contains no feeding plans, amounts, or schedules. In many places feeding wildlife is actively discouraged or regulated, and questions about specific situations belong with your local or official wildlife agency.
          </p>
        </>
      }
      related={[
    { label: "Animal Food & Diet", href: "/animal-food-and-diet" },
    { label: "Wildlife & Biodiversity", href: "/wildlife" },
    { label: "Animal Research Sources", href: "/animal-research-sources" },
    { label: "Endangered Animals", href: "/endangered-animals" },
    { label: "Care & veterinary boundaries", href: "/animal-research-sources/animal-care-and-veterinary-boundaries" },
      ]}
      faq={FAQ}
    >
      <Section id="s0" title={"It can change natural behaviour and create dependency"}>
        <p>
          Wild animals are adapted to find their own food across a home range, often travelling, foraging, and timing their activity to natural cycles. When a reliable human food source appears, individuals may shorten their foraging, gather at the source, and adjust their daily routines around it. Over time some animals come to rely on these handouts.
        </p>
        <p>
          Dependency is a documented concern because human-provided food can be seasonal, inconsistent, or suddenly removed, leaving animals that have shifted their behaviour poorly prepared. Young animals that learn to seek people instead of natural food may carry those habits forward, which is one reason ecologists treat altered behaviour as a real welfare issue rather than a harmless one.
        </p>
      </Section>
      <Section id="s1" title={"Animals gathering at one spot can spread disease"}>
        <p>
          When food draws many animals to a single location, individuals that would normally be more spread out come into close, repeated contact. Wildlife-health researchers note that this kind of unnatural aggregation can make it easier for diseases and parasites to pass between animals, and shared or contaminated feeding sites can become points where pathogens concentrate.
        </p>
        <p>
          Some wildlife diseases also have implications for other animals and, in certain cases, for people. Because disease ecology is complex and varies by species and region, questions about wildlife disease are best directed to official wildlife-health authorities rather than resolved through feeding.
        </p>
      </Section>
      <Section id="s2" title={"Human food is often poor nutrition for wild species"}>
        <p>
          Diet varies enormously across wild animals and shifts with species, age, season, and habitat. What a foraging songbird, a waterfowl such as a duck, a fox, or a deer is adapted to eat differs greatly, and human foods such as bread or processed snacks do not match those natural diets. As general biology, no single food suits the many different wild species people encounter.
        </p>
        <p>
          Wildlife biologists describe nutritional problems and poor body condition in animals that consume large amounts of unsuitable human food. This page does not say which foods are appropriate or how to feed, because the safe and responsible answer in most places is simply to let wild animals find their own food. For any concern about a specific animal&#39;s condition, contact a local wildlife agency or a licensed wildlife rehabilitator.
        </p>
      </Section>
      <Section id="s3" title={"Habituation raises dangerous human-wildlife conflict"}>
        <p>
          Animals that learn to associate people with food can lose their natural wariness, a process called habituation. Habituated animals may approach people, homes, vehicles, or campsites, and larger or bolder species can become assertive or even dangerous when they expect food. Bears, raccoons, coyotes, and some primates and large birds are frequently cited examples in agency guidance.
        </p>
        <p>
          Conflict often ends badly for the animal. Wildlife that becomes a persistent safety problem may be relocated or, in some cases, killed, which is part of why agencies summarise the risk with the saying that a fed animal can become a problem animal. Reducing conflict is a core reason feeding is discouraged.
        </p>
      </Section>
      <Section id="s4" title={"Feeding can ripple through whole ecosystems"}>
        <p>
          Effects are not limited to the individual animal that takes the food. Concentrated feeding can locally boost some species over others, attract pests or invasive species, alter predator and prey dynamics, and change how animals use the landscape. These shifts can disadvantage native plants and animals that depend on natural balances.
        </p>
        <p>
          Because ecosystems are interconnected, a change that seems small at one feeding spot can have wider consequences. This is why feeding wildlife is treated as an ecological question, managed by conservation and wildlife professionals, rather than a personal one.
        </p>
      </Section>
      <Section id="s5" title={"Where to take questions instead"}>
        <p>
          For injured, sick, orphaned, or nuisance wild animals, and for any questions about local rules, contact your local or official wildlife agency or a licensed wildlife rehabilitator. They can advise on the law in your area and on what, if anything, should be done, and many regions specifically discourage or regulate feeding wildlife.
        </p>
        <p>
          If a wild animal poses an immediate threat to human safety, contact local emergency or animal-control services. For pet or companion-animal feeding and health questions, including any concern that an animal has eaten something harmful, consult a qualified veterinarian or an animal poison-control service promptly; never delay veterinary care. This page is educational only and is not veterinary, emergency, or wildlife-management advice.
        </p>
      </Section>
      <FaqBlock faq={FAQ} />
    </FeedingLayout>
  );
}
