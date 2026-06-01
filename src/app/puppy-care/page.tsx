import type { Metadata } from "next";
import EarlyCareHub, {
  type EarlyCareHubConfig,
} from "@/components/puppy-kitten/EarlyCareHub";
import { buildMetadata } from "@/lib/metadata";
import type { SourceLink } from "@/lib/educational/types";

export const metadata: Metadata = buildMetadata({
  title: "Puppy Care — Early-Care Foundation for New Owners",
  description:
    "A calm, practical puppy-care plan: first weeks at home, vet visits, feeding, socialization, home safety, routines, supplies, and when to call a veterinarian. Educational, not veterinary advice.",
  path: "/puppy-care",
});

const SOURCES: SourceLink[] = [
  {
    label: "AVMA — Pet Care Resources",
    url: "https://www.avma.org/resources-tools/pet-owners/petcare",
    type: "veterinary",
    note: "American Veterinary Medical Association consumer pet-care hub",
  },
  {
    label: "AVMA — Vaccinations",
    url: "https://www.avma.org/resources-tools/pet-owners/petcare/vaccinations",
    type: "veterinary",
    note: "General vaccination information; schedules are set by your veterinarian",
  },
  {
    label: "ASPCA — General Dog Care",
    url: "https://www.aspca.org/pet-care/dog-care/general-dog-care",
    type: "veterinary",
    note: "General dog and puppy care guidance",
  },
  {
    label: "Cornell Riney Canine Health Center",
    url: "https://www.vet.cornell.edu/departments-centers-and-institutes/riney-canine-health-center",
    type: "university",
    note: "Cornell University College of Veterinary Medicine — dogs",
  },
  {
    label: "Merck Veterinary Manual",
    url: "https://www.merckvetmanual.com",
    type: "reference",
    note: "Comprehensive veterinary reference",
  },
];

const FAQS = [
  {
    question: "Is this puppy-care content veterinary advice?",
    answer:
      "No. It is educational early-care planning. It does not diagnose, treat, or set vaccine or deworming schedules. For anything about your individual puppy's health, consult a licensed veterinarian.",
  },
  {
    question: "Why don't you publish a vaccine or deworming schedule?",
    answer:
      "Vaccine and deworming timing depends on your puppy's age, health, history, and local disease risk, and is set by your veterinarian. A universal schedule on a webpage could be misleading or unsafe.",
  },
  {
    question: "What's the most important thing in the first weeks?",
    answer:
      "A calm, safe environment, a gentle routine, close supervision, and an early veterinary visit. Watch eating, drinking, toileting, and energy, and contact a vet promptly if anything seems wrong.",
  },
  {
    question: "When should I worry enough to call a vet?",
    answer:
      "Puppies can become ill quickly. Vomiting, diarrhoea, refusal to eat, breathing trouble, collapse, seizures, injury, or suspected poisoning warrant prompt veterinary contact. When in doubt, call.",
  },
];

const config: EarlyCareHubConfig = {
  species: "puppy",
  intro:
    "Bringing home a puppy is exciting and a lot to manage. This foundation walks through the first weeks, vet planning, feeding, socialization, home safety, routines, and supplies — calmly and without rigid schedules. It is educational planning, not veterinary advice; for your puppy's health, talk to a licensed veterinarian.",
  whenToCallSlug: "when-to-call-a-vet-for-a-puppy",
  whenToCallIntro:
    "Puppies can become seriously ill quickly. Learn the warning signs and escalate early — this is recognition and escalation, not diagnosis.",
  themes: [
    {
      id: "first-weeks",
      title: "First Weeks at Home",
      intro: "A calm arrival, a gentle routine, and close supervision while everyone adjusts.",
      slugs: ["first-week-with-a-puppy"],
      extraLinks: [
        {
          label: "Pet adoption readiness quiz",
          href: "/tools/pet-adoption-readiness-quiz",
          description: "A privacy-safe reflection before and after adoption.",
        },
      ],
    },
    {
      id: "vet-visit",
      title: "Vet Visit Planning",
      intro: "What to bring and what to ask — without rigid vaccine or deworming schedules.",
      slugs: ["puppy-vet-visit-checklist"],
      extraLinks: [
        {
          label: "Vet care hub",
          href: "/vet-care",
          description: "Routine and emergency planning and questions to ask.",
        },
      ],
    },
    {
      id: "feeding",
      title: "Feeding and Water Basics",
      intro: "Build a consistent routine with a puppy-appropriate food — no exact amounts here.",
      slugs: ["puppy-feeding-routine"],
      extraLinks: [
        {
          label: "Puppy feeding basics",
          href: "/pet-nutrition/puppy-feeding-basics",
          description: "Growth-stage feeding from the nutrition hub.",
        },
        {
          label: "Dog food safety",
          href: "/dogs/food",
          description: "What dogs can and cannot eat.",
        },
      ],
    },
    {
      id: "socialization",
      title: "Socialization and Handling",
      intro: "Gentle, positive exposure at your puppy's pace, with vet-guided timing for public outings.",
      slugs: ["puppy-socialization-basics"],
    },
    {
      id: "home-safety",
      title: "Home Safety",
      intro: "Puppy-proof before you need to — prevention is easier than an emergency.",
      slugs: ["puppy-home-safety-checklist"],
      extraLinks: [
        {
          label: "Pet safety & emergencies",
          href: "/pet-safety",
          description: "Poisoning awareness and emergency preparedness.",
        },
      ],
    },
    {
      id: "routine",
      title: "Sleep, Routine, and Enrichment",
      intro: "Plenty of rest, a steady routine, and patient, positive house-training.",
      slugs: ["puppy-sleep-routine", "puppy-potty-training-planning"],
    },
    {
      id: "budget",
      title: "Budget and Supplies Planning",
      intro: "Brand-neutral supplies and an honest budget so the early months go smoothly.",
      slugs: ["puppy-supplies-checklist"],
      extraLinks: [
        {
          label: "Pet cost calculator",
          href: "/tools/pet-cost-calculator",
          description: "Estimate monthly and first-year costs.",
        },
        {
          label: "Pet budget checklist",
          href: "/guides/pet-budget-checklist",
          description: "Plan recurring and one-off costs.",
        },
      ],
    },
  ],
  toolsAndGuides: [
    {
      label: "Puppy & kitten first-week checklist",
      href: "/tools/puppy-kitten-first-week-checklist",
      description: "Build a personalised first-week checklist in your browser — nothing is stored or sent.",
      badge: "Free tool",
    },
    {
      label: "Pet cost calculator",
      href: "/tools/pet-cost-calculator",
      description: "Estimate the monthly, annual, and first-year budget.",
      badge: "Free tool",
    },
    {
      label: "Feeding schedule planner",
      href: "/tools/pet-feeding-schedule-planner",
      description: "Lay out a sample feeding routine template.",
      badge: "Free tool",
    },
    {
      label: "Dogs hub",
      href: "/dogs",
      description: "Breeds, health, food, behavior, costs, and insurance for dogs.",
      badge: "Hub",
    },
    {
      label: "Dog breed profiles",
      href: "/dogs/breeds",
      description: "Temperament and care context to inform early planning.",
      badge: "Hub",
    },
    {
      label: "Dog health hub",
      href: "/dogs/health",
      description: "Cautious symptom-awareness pages for dogs.",
      badge: "Hub",
    },
    {
      label: "Pet insurance",
      href: "/pet-insurance",
      description: "How insurance generally works versus an emergency fund.",
      badge: "Planning hub",
    },
    {
      label: "Pet safety & emergencies",
      href: "/pet-safety",
      description: "Preparedness, poisoning awareness, and escalation.",
      badge: "Related hub",
    },
  ],
  sources: SOURCES,
  faqs: FAQS,
  lastUpdated: "2026-06-01",
};

export default function PuppyCareHubPage() {
  return <EarlyCareHub config={config} />;
}
