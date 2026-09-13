import Link from "next/link";
import {
  ORDINAL_LABEL,
  basisLabel,
  formatLifespan,
  formatMeasurement,
  getBreedSource,
  getRegistry,
  type Breed,
  type Measurement,
  type OrdinalTraitKey,
} from "@/lib/pet-intelligence";

/**
 * The sourced half of a breed page.
 *
 * Everything rendered here traces to a registry, and the component is built so
 * that a reader can tell that WITHOUT reading carefully: measured values sit in
 * bordered tables with the registry's own wording beside them, and each block
 * names the registry it came from. The prose sections around it look different
 * because they are different.
 *
 * Three things this component deliberately does not do:
 *
 *  - It never prints a numeric rating. Trait bands render as words, because no
 *    number exists on the record to print (see lib/pet-intelligence/types.ts).
 *  - It never fills a gap. A breed with no measurements renders an explanation
 *    of why there are none, not an empty table and not an estimate.
 *  - It never reconciles registries that disagree. Both rows stay.
 */

/** Sentence-cases a controlled-vocabulary value for display. */
function label(value: string): string {
  return value.charAt(0).toUpperCase() + value.slice(1);
}

const TRAIT_ROWS: { key: OrdinalTraitKey; label: string; means: string }[] = [
  {
    key: "exerciseNeeds",
    label: "Exercise needs",
    means: "Relative routine activity demand — not athleticism, and not fitness.",
  },
  {
    key: "groomingNeeds",
    label: "Grooming needs",
    means: "Relative frequency of coat maintenance — not how easy the breed is overall.",
  },
  {
    key: "shedding",
    label: "Shedding",
    means: "Relative volume of hair shed. Not an allergy signal — no breed is hypoallergenic.",
  },
  {
    key: "trainability",
    label: "Trainability",
    means: "How readily the breed is described as responding to structured training — not intelligence.",
  },
  {
    key: "vocality",
    label: "Vocality",
    means: "Relative frequency of vocalising — not a behaviour problem.",
  },
];

function SourceRef({ id }: { id: string }) {
  const source = getBreedSource(id);
  if (!source) return null;
  return (
    <a
      href={source.url}
      target="_blank"
      rel="noopener noreferrer"
      className="underline decoration-dotted underline-offset-2 text-[#063F2A]"
    >
      {source.organization}
    </a>
  );
}

function MeasurementTable({
  rows,
  unit,
  caption,
}: {
  rows: readonly Measurement[];
  unit: string;
  caption: string;
}) {
  return (
    <div className="overflow-x-auto">
      <table className="w-full text-sm border-collapse">
        <caption className="sr-only">{caption}</caption>
        <thead>
          <tr className="text-left text-[#5E6B63]">
            <th scope="col" className="py-1.5 pr-3 font-medium">
              Measured
            </th>
            <th scope="col" className="py-1.5 pr-3 font-medium">
              Converted
            </th>
            <th scope="col" className="py-1.5 font-medium">
              As published
            </th>
          </tr>
        </thead>
        <tbody className="divide-y divide-[#EAF0EA]">
          {rows.map((m) => (
            <tr key={`${basisLabel(m.basis)}-${m.statedAs}`}>
              <th scope="row" className="py-2 pr-3 font-medium text-[#17211B] whitespace-nowrap">
                {basisLabel(m.basis)}
              </th>
              <td className="py-2 pr-3 text-[#17211B] whitespace-nowrap">
                {formatMeasurement(m, unit)}
              </td>
              <td className="py-2 text-[#5E6B63]">{m.statedAs}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

function Panel({
  title,
  children,
  note,
}: {
  title: string;
  children: React.ReactNode;
  note?: string;
}) {
  return (
    <section className="border border-[#DDE6DD] rounded-xl bg-white overflow-hidden">
      <h3 className="text-sm font-semibold text-[#063F2A] uppercase tracking-wider px-4 sm:px-5 py-2.5 bg-[#EFF4E0] border-b border-[#DDE6DD] m-0">
        {title}
      </h3>
      <div className="px-4 sm:px-5 py-4">{children}</div>
      {note && (
        <p className="px-4 sm:px-5 pb-4 -mt-1 text-xs leading-relaxed text-[#5E6B63]">{note}</p>
      )}
    </section>
  );
}

export default function BreedAttributes({ breed }: { breed: Breed }) {
  const heights = breed.measurements?.heightCm ?? [];
  const weights = breed.measurements?.weightKg ?? [];
  const hasMeasurements = heights.length > 0 || weights.length > 0;
  const traits = TRAIT_ROWS.filter((row) => breed.traits[row.key]);
  const speciesWord = breed.species === "dog" ? "dog" : "cat";

  return (
    <div className="not-prose my-8 space-y-4">
      <div className="flex flex-wrap items-baseline gap-x-3 gap-y-1">
        <h2 className="text-xl sm:text-2xl font-bold text-[#17211B] m-0">
          Registry facts &amp; measurements
        </h2>
        <p className="text-xs text-[#5E6B63] m-0">
          Every value below is published by a named registry and linked to it.
        </p>
      </div>

      <Panel title="Recognition">
        <ul className="space-y-3 m-0 list-none p-0">
          {breed.recognition.map((rec) => {
            const registry = getRegistry(rec.registryId);
            return (
              <li key={rec.registryId} className="text-sm">
                <div className="flex flex-wrap items-baseline gap-x-2">
                  <span className="font-semibold text-[#17211B]">
                    {registry?.shortName ?? rec.registryId}
                  </span>
                  <span className="tag">{rec.status}</span>
                  {rec.recognizedYear && (
                    <span className="text-xs text-[#5E6B63]">since {rec.recognizedYear}</span>
                  )}
                </div>
                {rec.registryGroup && (
                  <p className="text-[#2C3A2F] mt-0.5 mb-0">
                    {rec.registryGroup}
                    {rec.registryBreedCode ? ` · breed no. ${rec.registryBreedCode}` : ""}
                  </p>
                )}
                {rec.registryUrl && (
                  <a
                    href={rec.registryUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs underline decoration-dotted underline-offset-2 text-[#063F2A]"
                  >
                    {registry?.name ?? rec.registryId} entry →
                  </a>
                )}
              </li>
            );
          })}
        </ul>
      </Panel>

      {(breed.originCountries?.length || breed.originNote) && (
        <Panel title="Origin">
          <p className="text-sm text-[#17211B] m-0">{breed.originCountries?.join(" · ")}</p>
          {breed.originNote && (
            <p className="text-sm text-[#5E6B63] mt-2 mb-0 leading-relaxed">{breed.originNote}</p>
          )}
        </Panel>
      )}

      {hasMeasurements ? (
        <Panel
          title="Published size"
          note="Converted figures are rounded; the registry's own wording is shown so nothing implies precision the standard does not have."
        >
          {heights.length > 0 && (
            <div className="mb-4">
              <p className="text-xs font-semibold uppercase tracking-wide text-[#8A958E] mb-1">
                Height
              </p>
              <MeasurementTable rows={heights} unit="cm" caption={`${breed.name} height`} />
            </div>
          )}
          {weights.length > 0 && (
            <div>
              <p className="text-xs font-semibold uppercase tracking-wide text-[#8A958E] mb-1">
                Weight
              </p>
              <MeasurementTable rows={weights} unit="kg" caption={`${breed.name} weight`} />
            </div>
          )}
          {breed.sizeClass && (
            <p className="text-xs text-[#5E6B63] mt-3 mb-0">
              FaunaHub size band:{" "}
              <strong className="text-[#17211B] font-medium">{label(breed.sizeClass)}</strong> — derived
              from the published weight above, not asserted separately.
            </p>
          )}
        </Panel>
      ) : (
        <Panel title="Published size">
          <p className="text-sm text-[#5E6B63] m-0 leading-relaxed">
            No numeric size is published for this breed. Cat breed standards describe size
            qualitatively rather than by height or weight, so FaunaHub records none rather than
            estimating one. See the{" "}
            <Link
              href="/cats/breeds"
              className="underline decoration-dotted underline-offset-2 text-[#063F2A]"
            >
              Cat Breed Center
            </Link>{" "}
            for how this affects filtering.
          </p>
        </Panel>
      )}

      {breed.coat?.length && (
        <Panel title="Coat">
          <p className="text-sm text-[#17211B] m-0">
            <strong className="font-medium">{label(breed.coat.length)}</strong>
            {breed.coat.types?.length ? ` · ${breed.coat.types.join(", ")}` : ""}
          </p>
          {breed.coat.statedAs && (
            <p className="text-sm text-[#5E6B63] mt-1.5 mb-0 leading-relaxed">
              As published: “{breed.coat.statedAs}”
              {breed.coat.sourceId && (
                <>
                  {" — "}
                  <SourceRef id={breed.coat.sourceId} />
                </>
              )}
            </p>
          )}
        </Panel>
      )}

      {traits.length > 0 && (
        <Panel
          title="Trait bands"
          note="Three levels, never a score. Registry trait scales are editorial judgements rather than measurements, so FaunaHub publishes the band and not a number. These describe the breed as a registry describes it — not the animal in front of you."
        >
          <dl className="m-0 divide-y divide-[#EAF0EA]">
            {traits.map((row) => {
              const trait = breed.traits[row.key];
              if (!trait) return null;
              return (
                <div key={row.key} className="py-2.5 first:pt-0 last:pb-0">
                  <div className="flex items-baseline justify-between gap-3">
                    <dt className="text-sm font-medium text-[#17211B]">{row.label}</dt>
                    <dd className="text-sm font-semibold text-[#063F2A] m-0 whitespace-nowrap">
                      {ORDINAL_LABEL[trait.value]}
                    </dd>
                  </div>
                  <p className="text-xs text-[#5E6B63] mt-0.5 mb-0 leading-relaxed">{row.means}</p>
                </div>
              );
            })}
          </dl>
        </Panel>
      )}

      {breed.lifespanYears && (
        <Panel title="Published lifespan">
          <p className="text-sm text-[#17211B] m-0">{formatLifespan(breed.lifespanYears)}</p>
          <p className="text-xs text-[#5E6B63] mt-1.5 mb-0 leading-relaxed">
            A breed-level range published as “{breed.lifespanYears.statedAs}” by{" "}
            <SourceRef id={breed.lifespanYears.sourceId} />. It is not a prediction about any
            individual {speciesWord}; lifespan for a specific animal depends on genetics, care, and
            health history, and is a question for a veterinarian.
          </p>
        </Panel>
      )}
    </div>
  );
}
