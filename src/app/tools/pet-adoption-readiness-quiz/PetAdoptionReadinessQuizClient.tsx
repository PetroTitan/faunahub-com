"use client";

import Link from "next/link";
import { useMemo, useState } from "react";

/**
 * Pet adoption readiness quiz — client component.
 *
 * Stateless on the network: no API calls, no storage, no cookies, no
 * external service. State is held only in React state in the browser tab
 * for the duration of the visit. Resetting clears it.
 */

interface AnswerOption {
  label: string;
  /** Numeric score for the readiness model. 2 = strong yes, 1 = partial,
   * 0 = no. Each option transparently shows the same scale across questions. */
  score: 0 | 1 | 2;
  /** Optional caveat shown below the result if this option is chosen. */
  flag?: string;
}

interface Question {
  id: string;
  title: string;
  helper?: string;
  options: AnswerOption[];
}

const QUESTIONS: Question[] = [
  {
    id: "time",
    title: "Could you give a pet meaningful daily time on most days?",
    helper:
      "Includes feeding, exercise or play, training or enrichment, and quiet attention. The minimum varies by species and individual animal.",
    options: [
      { label: "Yes, daily", score: 2 },
      { label: "Most days, with effort", score: 1 },
      {
        label: "Honestly, no",
        score: 0,
        flag: "Daily time is often the single biggest welfare factor.",
      },
    ],
  },
  {
    id: "long-term",
    title:
      "Are you ready for a commitment that may last 10+ years for many species?",
    options: [
      { label: "Yes, long term", score: 2 },
      { label: "I want to be, but I'm uncertain about life changes", score: 1 },
      {
        label: "Not really",
        score: 0,
        flag: "Many pets outlive short-term life plans.",
      },
    ],
  },
  {
    id: "budget",
    title: "Could you cover the realistic monthly cost of a pet?",
    helper:
      "Food, preventive vet care, supplies, grooming where relevant. The Pet Cost Calculator can help you estimate.",
    options: [
      { label: "Yes, comfortably", score: 2 },
      { label: "Tight but possible", score: 1 },
      {
        label: "Not currently",
        score: 0,
        flag: "Ongoing budget shortfalls are a major welfare risk.",
      },
    ],
  },
  {
    id: "emergency",
    title:
      "Do you have an emergency fund or plan for unexpected veterinary care?",
    options: [
      { label: "Yes — savings or insurance in place", score: 2 },
      { label: "Partially", score: 1 },
      {
        label: "Not yet",
        score: 0,
        flag: "Unexpected vet care is a common cause of difficult decisions.",
      },
    ],
  },
  {
    id: "housing",
    title:
      "Does your housing allow the pet you're considering — including landlord rules and HOA limits?",
    options: [
      { label: "Yes, fully", score: 2 },
      { label: "Need to check", score: 1 },
      { label: "No / unclear", score: 0, flag: "Verify before adopting." },
    ],
  },
  {
    id: "stability",
    title: "Is your household stable in the medium term?",
    helper:
      "Imminent moves, major life changes, or unsettled co-habitation can make adoption harder for everyone.",
    options: [
      { label: "Yes", score: 2 },
      { label: "Mostly", score: 1 },
      {
        label: "Lots changing",
        score: 0,
        flag: "Consider waiting until things settle.",
      },
    ],
  },
  {
    id: "household",
    title:
      "Have everyone in the household — partner, roommates, family — agreed to the adoption?",
    options: [
      { label: "Yes, all on board", score: 2 },
      { label: "Mostly", score: 1 },
      {
        label: "No — reluctance from others",
        score: 0,
        flag: "Household alignment matters for the pet's welfare too.",
      },
    ],
  },
  {
    id: "allergies",
    title:
      "Do you know whether anyone in the household has relevant allergies or sensitivities?",
    options: [
      { label: "Yes — we've tested in person with the species or breed", score: 2 },
      { label: "Not sure", score: 1 },
      {
        label: "Allergies present — unmanaged",
        score: 0,
        flag: "No pet is fully hypoallergenic; in-person testing matters.",
      },
    ],
  },
  {
    id: "kids-pets",
    title:
      "Have you considered children and other pets already in the household?",
    options: [
      { label: "Yes — and have a plan for introductions", score: 2 },
      { label: "Partially", score: 1 },
      {
        label: "Not yet",
        score: 0,
        flag: "Mismatches between resident pets/children and a new animal are a common reason adoptions fail.",
      },
    ],
  },
  {
    id: "travel",
    title: "Do you travel often, or work very long away-from-home hours?",
    options: [
      { label: "No, I'm home most days", score: 2 },
      { label: "Sometimes — I have backup care", score: 1 },
      {
        label: "Yes, frequently",
        score: 0,
        flag: "Plan reliable care before adopting.",
      },
    ],
  },
  {
    id: "activity",
    title: "Can you match the activity level the species/breed needs?",
    helper:
      "Some dogs need substantial daily exercise; some birds and reptiles have very specific environmental needs; cats need play and enrichment too.",
    options: [
      { label: "Yes", score: 2 },
      { label: "I think so", score: 1 },
      {
        label: "Probably not",
        score: 0,
        flag: "Under-exercised or under-stimulated pets often develop welfare problems.",
      },
    ],
  },
  {
    id: "grooming",
    title:
      "Are you ready for the grooming and routine care a chosen species/breed needs?",
    options: [
      { label: "Yes", score: 2 },
      { label: "Open to learning", score: 1 },
      {
        label: "Not really",
        score: 0,
        flag: "Long-coated and high-maintenance breeds need ongoing time and budget.",
      },
    ],
  },
  {
    id: "vet",
    title: "Are you able to find and use a qualified veterinarian for routine and emergency care?",
    options: [
      { label: "Yes — vet identified", score: 2 },
      { label: "Will arrange", score: 1 },
      {
        label: "No / not yet",
        score: 0,
        flag: "Vet access is essential, particularly for exotic species.",
      },
    ],
  },
  {
    id: "backup",
    title: "Do you have a backup plan if something happens to you?",
    helper:
      "Illness, travel, or other life events can disrupt routines. Pets benefit when their humans have planned for the unexpected.",
    options: [
      { label: "Yes", score: 2 },
      { label: "Not formalised yet", score: 1 },
      {
        label: "No",
        score: 0,
        flag: "A simple written plan helps shelters and trusted contacts step in if needed.",
      },
    ],
  },
];

type AnswerMap = Record<string, number>;

interface ResultState {
  label: "Ready with planning notes" | "Almost ready — prepare first" | "Not ready yet — build a plan";
  tone: "ready" | "almost" | "not-yet";
  summary: string;
  steps: string[];
}

function computeResult(scores: AnswerMap): ResultState | null {
  const answered = Object.keys(scores).length;
  if (answered < QUESTIONS.length) return null;
  const total = Object.values(scores).reduce((a, b) => a + b, 0);
  const max = QUESTIONS.length * 2;
  const ratio = total / max;
  if (ratio >= 0.8) {
    return {
      label: "Ready with planning notes",
      tone: "ready",
      summary:
        "Your answers suggest you have most of the foundations in place. Adoption is a major commitment even when readiness is high — keep the planning notes below in mind, and remember this tool is not a substitute for shelter, veterinary, landlord, or legal guidance.",
      steps: [
        "Use the Pet Breed Selector to narrow down household-fit options.",
        "Run the Pet Cost Calculator to estimate the realistic monthly and first-year budget.",
        "Review the Pet Insurance and Vet Care pages so the emergency plan is concrete.",
        "Meet the specific animal in person before deciding.",
      ],
    };
  }
  if (ratio >= 0.5) {
    return {
      label: "Almost ready — prepare first",
      tone: "almost",
      summary:
        "You have several adoption foundations in place, but a few areas would benefit from preparation first. The steps below are not a checklist for approval — they are practical ways to reduce risk for you and the animal.",
      steps: [
        "Strengthen the area where you answered the lowest — time, budget, housing, or vet access.",
        "Build or formalise an emergency vet plan (savings, insurance, or both).",
        "If allergies, household alignment, or travel were uncertain, address them before adopting.",
        "Use the Pet Cost Calculator, Pet Budget Checklist, and Vet Care hub to plan concretely.",
      ],
    };
  }
  return {
    label: "Not ready yet — build a plan",
    tone: "not-yet",
    summary:
      "Right now, adoption could put a lot of strain on you and the animal. This is not a judgement and not a rejection — it is a moment to plan. Many people are not ready at first and become great pet owners later once foundations are in place.",
    steps: [
      "Identify the two or three biggest gaps from your answers above.",
      "Use the Pet Budget Checklist and Pet Cost Calculator to model the real cost.",
      "Consider building experience by fostering, volunteering at a shelter, or pet-sitting friends' animals.",
      "Revisit this quiz later once your situation changes.",
    ],
  };
}

const FOLLOW_UP_LINKS = [
  { href: "/tools/pet-breed-selector", label: "Pet Breed Selector" },
  { href: "/tools/pet-cost-calculator", label: "Pet Cost Calculator" },
  { href: "/guides/pet-budget-checklist", label: "Pet Budget Checklist" },
  { href: "/pet-insurance", label: "Pet Insurance" },
  { href: "/vet-care", label: "Vet Care" },
  { href: "/guides/best-pets-for-beginners", label: "Best pets for beginners" },
  { href: "/guides/low-maintenance-pets", label: "Low-maintenance pets" },
];

export default function PetAdoptionReadinessQuizClient() {
  const [answers, setAnswers] = useState<AnswerMap>({});
  const [submitted, setSubmitted] = useState(false);

  const allAnswered = Object.keys(answers).length === QUESTIONS.length;
  const result = useMemo(
    () => (submitted ? computeResult(answers) : null),
    [submitted, answers],
  );

  const flags = useMemo(() => {
    if (!submitted) return [];
    return QUESTIONS.flatMap((q) => {
      const score = answers[q.id];
      const opt = q.options.find((o) => o.score === score);
      return opt?.flag ? [{ title: q.title, flag: opt.flag }] : [];
    });
  }, [submitted, answers]);

  function setAnswer(qid: string, score: number) {
    setAnswers((prev) => ({ ...prev, [qid]: score }));
  }

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (!allAnswered) return;
    setSubmitted(true);
    if (typeof window !== "undefined") {
      // Scroll to result on submit for visibility on long forms.
      requestAnimationFrame(() => {
        document
          .getElementById("quiz-result")
          ?.scrollIntoView({ behavior: "smooth", block: "start" });
      });
    }
  }

  function reset() {
    setAnswers({});
    setSubmitted(false);
  }

  const progress = Object.keys(answers).length;
  const progressPct = Math.round((progress / QUESTIONS.length) * 100);

  return (
    <section
      aria-labelledby="quiz-heading"
      className="not-prose mt-10 mb-12"
    >
      <h2
        id="quiz-heading"
        className="text-2xl sm:text-3xl font-bold text-[#17211B] mb-2"
      >
        Quick adoption-readiness check
      </h2>
      <p className="text-sm text-[#5E6B63] mb-6 max-w-2xl">
        {QUESTIONS.length} short questions. Your answers stay in your browser
        only — nothing is sent to a server or stored.
      </p>

      <form onSubmit={handleSubmit} className="space-y-6">
        <div
          role="progressbar"
          aria-valuemin={0}
          aria-valuemax={QUESTIONS.length}
          aria-valuenow={progress}
          aria-label="Quiz progress"
          className="rounded-full bg-[#EFF1EB] h-2 overflow-hidden"
        >
          <div
            className="h-full bg-[#7BAA35] transition-[width] duration-300"
            style={{ width: `${progressPct}%` }}
          />
        </div>
        <p className="text-xs text-[#8A958E]">
          {progress} of {QUESTIONS.length} answered
        </p>

        <ol className="space-y-5">
          {QUESTIONS.map((q, idx) => {
            const selected = answers[q.id];
            return (
              <li
                key={q.id}
                className="border border-[#DDE6DD] rounded-xl bg-white p-5 shadow-sm"
              >
                <fieldset>
                  <legend className="text-base font-semibold text-[#17211B]">
                    <span className="text-[#063F2A] mr-2">{idx + 1}.</span>
                    {q.title}
                  </legend>
                  {q.helper && (
                    <p className="text-xs text-[#5E6B63] mt-1 leading-relaxed">
                      {q.helper}
                    </p>
                  )}
                  <div className="mt-4 grid gap-2">
                    {q.options.map((opt) => {
                      const id = `${q.id}-${opt.score}`;
                      const isSelected = selected === opt.score;
                      return (
                        <label
                          key={id}
                          htmlFor={id}
                          className={`flex items-start gap-3 cursor-pointer rounded-lg border px-3 py-2.5 text-sm transition focus-within:ring-2 focus-within:ring-[#7BAA35] focus-within:ring-offset-1 ${
                            isSelected
                              ? "border-[#063F2A] bg-[#EFF4E0]"
                              : "border-[#DDE6DD] bg-white hover:border-[#CFE0A8]"
                          }`}
                        >
                          <input
                            id={id}
                            type="radio"
                            name={q.id}
                            value={opt.score}
                            checked={isSelected}
                            onChange={() => setAnswer(q.id, opt.score)}
                            className="mt-1 accent-[#063F2A]"
                          />
                          <span className="text-[#17211B]">{opt.label}</span>
                        </label>
                      );
                    })}
                  </div>
                </fieldset>
              </li>
            );
          })}
        </ol>

        <div className="flex flex-wrap items-center gap-3 pt-2">
          <button
            type="submit"
            disabled={!allAnswered}
            className="btn-primary disabled:opacity-50 disabled:cursor-not-allowed"
          >
            See result
          </button>
          {submitted && (
            <button
              type="button"
              onClick={reset}
              className="btn-secondary"
            >
              Reset
            </button>
          )}
          {!allAnswered && (
            <span className="text-xs text-[#8A958E]">
              Answer all {QUESTIONS.length} questions to see the result.
            </span>
          )}
        </div>
      </form>

      {result && (
        <div
          id="quiz-result"
          aria-live="polite"
          className={`mt-10 rounded-xl border-l-4 p-6 ${
            result.tone === "ready"
              ? "border-l-[#7BAA35] bg-[#EFF4E0]/60"
              : result.tone === "almost"
                ? "border-l-[#D9A50A] bg-[#FBF1D4]"
                : "border-l-[#A04E2A] bg-[#FBE8D9]"
          }`}
        >
          <p className="text-xs uppercase tracking-wider text-[#5E6B63]">
            Result
          </p>
          <h3 className="text-xl sm:text-2xl font-semibold text-[#17211B] mt-1">
            {result.label}
          </h3>
          <p className="text-sm text-[#2C3A2F] mt-3 leading-relaxed">
            {result.summary}
          </p>
          <p className="text-xs text-[#5E6B63] mt-2 italic">
            FaunaHub does not approve or reject anyone for pet adoption.
            Real adoption decisions can depend on local shelter policies,
            housing rules, household circumstances, veterinary guidance,
            long-term budget, and the needs of the individual animal.
          </p>

          <ul className="mt-5 space-y-2 text-sm text-[#17211B]">
            {result.steps.map((s) => (
              <li key={s} className="flex items-start gap-2">
                <span className="text-[#063F2A] mt-[2px]">•</span>
                <span>{s}</span>
              </li>
            ))}
          </ul>

          {flags.length > 0 && (
            <details className="mt-5 text-sm">
              <summary className="cursor-pointer text-[#063F2A] font-medium">
                Areas you flagged ({flags.length})
              </summary>
              <ul className="mt-3 space-y-2 text-[#2C3A2F]">
                {flags.map((f) => (
                  <li
                    key={f.title}
                    className="border-l-2 border-l-[#DDE6DD] pl-3"
                  >
                    <p className="text-xs text-[#8A958E]">{f.title}</p>
                    <p>{f.flag}</p>
                  </li>
                ))}
              </ul>
            </details>
          )}

          <div className="mt-6">
            <p className="text-xs uppercase tracking-wider text-[#5E6B63] mb-2">
              Useful next steps on FaunaHub
            </p>
            <div className="flex flex-wrap gap-2">
              {FOLLOW_UP_LINKS.map((l) => (
                <Link
                  key={l.href}
                  href={l.href}
                  className="text-xs px-3 py-1.5 rounded-full border border-[#DDE6DD] bg-white text-[#2C3A2F] hover:border-[#7BAA35] hover:text-[#063F2A] hover:no-underline transition"
                >
                  {l.label} →
                </Link>
              ))}
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
