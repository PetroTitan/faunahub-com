import type { Metadata } from "next";
import SourcePageLayout, { Section, FaqBlock } from "@/components/research/SourcePageLayout";
import { buildMetadata } from "@/lib/metadata";
import { sourcesByFamily } from "@/lib/research-sources";

const PATH = "/animal-research-sources/animal-care-and-veterinary-boundaries";
const MODIFIED = "2026-06-28";
const TITLE = "Animal Care & Veterinary Boundaries: What This Site Is Not";
const DESC =
  "Where educational animal content ends and professional advice begins. FaunaHub does not give veterinary diagnosis, dosage, treatment, or emergency instructions — those belong with qualified professionals.";

export const metadata: Metadata = buildMetadata({ title: TITLE, description: DESC, path: PATH });

const FAQ = [
  {
    question: "Can FaunaHub tell me how to treat my animal?",
    answer:
      "No. FaunaHub is educational and does not diagnose, prescribe, or provide treatment, dosage, or emergency instructions. A specific animal's health needs an examination by a qualified veterinarian, who can account for its species, age, history, and condition.",
  },
  {
    question: "Where should I go in an animal emergency?",
    answer:
      "Contact a veterinarian or an animal poison-control service directly. These are staffed by professionals who can act on the specifics of your situation. A general educational website cannot, and should not, substitute for that.",
  },
  {
    question: "Will FaunaHub publish feeding plans or toxic-food lists later?",
    answer:
      "If FaunaHub adds food-safety content in the future, it will be general, source-backed safety education only — not species-specific diet plans, quantities, or treatment guidance — and it will continue to direct animal-specific decisions to a qualified veterinarian.",
  },
];

export default function VeterinaryBoundariesPage() {
  const sources = sourcesByFamily("veterinary-boundary");
  return (
    <SourcePageLayout
      crumbs={[
        { name: "Animal Research Sources", href: "/animal-research-sources" },
        { name: "Animal-care & veterinary boundaries", href: PATH },
      ]}
      kicker="Care boundaries"
      h1="Animal-care & veterinary boundaries"
      modified={MODIFIED}
      note={
        <>
          <h2 className="text-sm font-semibold text-[#063F2A] uppercase tracking-wider mb-2">
            Not veterinary advice
          </h2>
          <p className="text-sm sm:text-base text-[#2C3A2F] leading-relaxed">
            FaunaHub is educational. It does not provide veterinary diagnosis, treatment, dosage,
            feeding plans, or emergency instructions, and it is not a substitute for a qualified
            veterinarian or an official wildlife authority. This page explains those boundaries; it is
            not itself medical, veterinary, legal, or regulatory advice.
          </p>
        </>
      }
      intro={
        <p>
          Educational animal content and professional animal care are different things. This page sets
          the boundary FaunaHub keeps: we explain biology and ecology, and we point animal-specific
          decisions to the qualified people and agencies who can make them safely.
        </p>
      }
      related={[
        { label: "Animal Research Sources", href: "/animal-research-sources" },
        { label: "How FaunaHub uses sources", href: "/animal-research-sources/how-faunahub-uses-sources" },
        { label: "Animal Food & Diet Safety", href: "/animal-food-and-diet" },
        { label: "Editorial Policy", href: "/editorial-policy" },
        { label: "Domestic & Companion Animals", href: "/domestic-animals" },
        { label: "Wildlife & Biodiversity", href: "/wildlife" },
      ]}
      faq={FAQ}
    >
      <Section id="educational" title="Educational, not veterinary">
        <p>
          FaunaHub describes what animals are and how they live. It does not diagnose conditions,
          recommend medicines or dosages, design treatment or feeding plans, or give emergency
          protocols. Those decisions depend on the individual animal and require a professional who can
          examine it — something no general website can replace.
        </p>
      </Section>

      <Section id="who" title="Who to consult instead">
        <p>
          For an animal&apos;s health, a qualified veterinarian is the right professional. Professional
          bodies and emergency services — for example{" "}
          {sources.map((s, i) => (
            <span key={s.id}>
              <a href={s.url} target="_blank" rel="noopener noreferrer">{s.name}</a>
              {i < sources.length - 1 ? ", " : ""}
            </span>
          ))}{" "}
          — can help locate care or respond to urgent situations. For wild-animal conflicts, injured
          wildlife, or invasive species, the relevant official wildlife authority is the right contact.
          FaunaHub points to these rather than standing in for them.
        </p>
      </Section>

      <Section id="toxicity" title="How toxicity and safety can be discussed">
        <p>
          General safety education — for instance, that some foods or animals can be harmful — can be
          presented carefully and with sources. What FaunaHub does not do is turn that into
          instructions: no dosages, no &ldquo;treat it at home&rdquo; steps, no species-specific
          quantities. If a page touches toxicity, it frames the issue and routes urgent or
          animal-specific questions to a veterinarian or a poison-control service.
        </p>
      </Section>

      <Section id="future" title="A boundary for future content">
        <p>
          FaunaHub may later add feeding-safety or care-related explainers. This page is the standing
          boundary for that work: such content will remain general, source-backed safety education,
          will avoid diagnosis, dosage, treatment, and emergency guidance, and will keep directing
          animal-specific decisions to qualified professionals and official agencies.
        </p>
      </Section>

      <FaqBlock faq={FAQ} />
    </SourcePageLayout>
  );
}
