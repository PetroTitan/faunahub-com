import type { TaxonomyDifference } from "@/lib/animal-compare/intelligence";

/**
 * How the two animals are actually related.
 *
 * The scientific names come from each animal's own profile page, so a name shown
 * here can never drift from the name shown there. An animal whose profile
 * carries no scientific name — group-level pages, mostly, where a single
 * binomial would be wrong — renders without one rather than with a guess.
 *
 * `summary` is the reviewed taxonomy paragraph verbatim. The relationship label
 * above it is a structural descriptor, not a claim this component composed.
 */
export default function ComparisonTaxonomy({
  taxonomy,
}: {
  taxonomy: TaxonomyDifference;
}) {
  const {
    relationshipLabel,
    summary,
    animalAName,
    animalBName,
    animalAScientificName,
    animalBScientificName,
    caveat,
  } = taxonomy;

  const names: { name: string; scientific?: string; accent: string }[] = [
    { name: animalAName, scientific: animalAScientificName, accent: "#7BAA35" },
    { name: animalBName, scientific: animalBScientificName, accent: "#075FA8" },
  ];

  return (
    <section aria-labelledby="taxonomy-heading" className="pt-8">
      <h2
        id="taxonomy-heading"
        className="text-xl sm:text-2xl font-bold text-[#17211B] mb-3"
      >
        How they are related
      </h2>

      <p className="mb-4">
        <span className="inline-block rounded-full border border-[#CFE0A8] bg-[#EFF4E0] px-3 py-1 text-xs font-semibold uppercase tracking-wider text-[#063F2A]">
          {relationshipLabel}
        </span>
      </p>

      {names.some((n) => n.scientific) && (
        <dl className="mb-4 grid gap-3 sm:grid-cols-2">
          {names.map((n) => (
            <div
              key={n.name}
              className="rounded-xl border border-[#DDE6DD] bg-white px-4 py-3"
              style={{ borderLeftWidth: 4, borderLeftColor: n.accent }}
            >
              <dt className="text-xs font-semibold uppercase tracking-wide text-[#5E6B63]">
                {n.name}
              </dt>
              <dd className="m-0 text-sm text-[#17211B]">
                {n.scientific ? (
                  <ScientificName value={n.scientific} />
                ) : (
                  <span className="text-[#5E6B63]">
                    Group-level name — no single scientific name applies
                  </span>
                )}
              </dd>
            </div>
          ))}
        </dl>
      )}

      <p className="text-base text-[#2C3A2F] leading-relaxed mb-3">{summary}</p>

      {caveat && (
        <p className="rounded-xl bg-[#EFF1EB] p-4 text-sm leading-relaxed text-[#5E6B63]">
          <strong className="font-semibold text-[#17211B]">
            A note on naming:{" "}
          </strong>
          {caveat}
        </p>
      )}
    </section>
  );
}

/** Matches a leading rank word so "genus Rattus" italicises only the taxon. */
const RANK_PREFIX = /^(super|sub|infra)?(family|order|class|phylum|genus|tribe)\s+/i;
/** Multiplication sign in a hybrid formula, which is never italicised. */
const HYBRID_SEPARATOR = /\s+×\s+/;

/**
 * Italicises the taxon name and nothing else.
 *
 * Rank words ("genus", "family") stay roman, and the multiplication sign in a
 * hybrid formula stays roman because it belongs to neither name — italicising
 * the whole string turns "Equus asinus × Equus caballus" into something that
 * reads like a single pseudo-binomial.
 */
function ScientificName({ value }: { value: string }) {
  if (HYBRID_SEPARATOR.test(value)) {
    const parts = value.split(HYBRID_SEPARATOR);
    return (
      <>
        {parts.map((part, index) => (
          <span key={part}>
            {index > 0 && " × "}
            <span className="italic">{part}</span>
          </span>
        ))}
      </>
    );
  }
  const rank = value.match(RANK_PREFIX);
  if (rank) {
    return (
      <>
        {rank[0]}
        <span className="italic">{value.slice(rank[0].length)}</span>
      </>
    );
  }
  return <span className="italic">{value}</span>;
}
