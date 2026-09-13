/**
 * Re-checks every structured value in the breed registry against its live source.
 *
 *   node scripts/verify-breed-registry.mjs          # check everything
 *   node scripts/verify-breed-registry.mjs --slug labrador-retriever
 *
 * This is the answer to "how do you know the registry is still true?". Breed
 * standards change — the AKC revises trait scales and life-expectancy ranges,
 * the FCI re-publishes standards, CFA accepts new breeds — and a registry that
 * was correct on the day it was written quietly rots.
 *
 * It makes NETWORK REQUESTS, so it is deliberately NOT part of `npm run build`
 * or `npm test`: a build that fails because a registry's marketing page is
 * briefly down is worse than one that ships slightly stale trait bands. Run it
 * before a breed expansion, and whenever a value is questioned.
 *
 * What it compares:
 *
 *   AKC   breed group, height and weight strings, life expectancy, coat
 *         length/type, and the five normalised trait bands
 *   FCI   group number, section, breed number, country of origin, status
 *   CFA   that the breed page still exists and still carries a standard
 *
 * Trait bands are re-derived here from the live 1-5 score using the same
 * `bandFromFivePointScale` the data was built with. That is how the numeric
 * score stays checkable without ever being stored: it lives for one comparison
 * inside this script and is never written anywhere.
 */
import { register } from "node:module";
import { pathToFileURL } from "node:url";
import path from "node:path";

register("./lib/ts-resolve-hooks.mjs", import.meta.url);

const REPO_ROOT = path.resolve(import.meta.dirname, "..");
const lib = (p) => pathToFileURL(path.join(REPO_ROOT, "src/lib", p)).href;

const { BREEDS, getBreedSource } = await import(lib("pet-intelligence/index.ts"));
const { bandFromFivePointScale, AKC_TRAIT_MAP } = await import(
  lib("pet-intelligence/trait-scale.ts")
);

const UA =
  "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120 Safari/537.36";

const slugFilter = (() => {
  const i = process.argv.indexOf("--slug");
  return i === -1 ? null : process.argv[i + 1];
})();

const problems = [];
const checked = { akc: 0, fci: 0, cfa: 0, fife: 0 };

function report(breed, field, expected, actual) {
  problems.push({ breed: breed.id, field, expected, actual });
}

async function fetchText(url) {
  const res = await fetch(url, { headers: { "User-Agent": UA }, redirect: "follow" });
  if (!res.ok) throw new Error(`HTTP ${res.status}`);
  return res.text();
}

function decodeEntities(s) {
  return s
    .replaceAll("&quot;", '"')
    .replaceAll("&#039;", "'")
    .replaceAll("&apos;", "'")
    .replaceAll("&lt;", "<")
    .replaceAll("&gt;", ">")
    .replaceAll("&amp;", "&");
}

/* ---------------------------- AKC ---------------------------- */

async function checkAkc(breed, rec) {
  const html = await fetchText(rec.registryUrl);
  checked.akc += 1;

  const props = html.match(/data-js-component="breedPage" data-js-props="(.*?)"\s*>/s);
  if (!props) {
    report(breed, "akc:page", "a breed props blob", "none found — the page shape changed");
    return;
  }
  const data = JSON.parse(decodeEntities(props[1]));
  const slug = rec.registryUrl.replace(/\/$/, "").split("/").pop();
  const basics = data.settings?.breed_data?.basics?.[slug];
  const traits = data.settings?.breed_data?.traits?.[slug]?.traits;
  if (!basics) {
    report(breed, "akc:basics", "a basics record", `none for "${slug}"`);
    return;
  }

  if (basics.breed_group !== rec.registryGroup) {
    report(breed, "akc:group", rec.registryGroup, basics.breed_group);
  }
  if (String(basics.akc_code) !== String(rec.registryBreedCode)) {
    report(breed, "akc:code", rec.registryBreedCode, basics.akc_code);
  }
  if (rec.recognizedYear && Number(basics.year_recognized) !== rec.recognizedYear) {
    report(breed, "akc:recognizedYear", rec.recognizedYear, basics.year_recognized);
  }

  const height = html.match(/name="height">Height: ([^<]*)</)?.[1];
  const weight = html.match(/name="weight">Weight: ([^<]*)</)?.[1];
  const storedHeights = (breed.measurements?.heightCm ?? []).map((m) => m.statedAs);
  const storedWeights = (breed.measurements?.weightKg ?? []).map((m) => m.statedAs);
  for (const [live, stored, field] of [
    [height, storedHeights, "akc:height"],
    [weight, storedWeights, "akc:weight"],
  ]) {
    if (!live) continue;
    for (const piece of stored) {
      if (!live.includes(piece)) report(breed, field, piece, live);
    }
  }

  if (breed.lifespanYears && basics.life_expectancy !== breed.lifespanYears.statedAs) {
    report(breed, "akc:lifespan", breed.lifespanYears.statedAs, basics.life_expectancy);
  }

  const liveCoat = traits?.coat_length?.selected ?? [];
  if (breed.coat?.statedAs && liveCoat.length) {
    if (!breed.coat.statedAs.includes(liveCoat.join(", "))) {
      report(breed, "akc:coatLength", breed.coat.statedAs, liveCoat.join(", "));
    }
  }

  for (const [akcKey, ourKey] of Object.entries(AKC_TRAIT_MAP)) {
    const score = traits?.[akcKey]?.score;
    const liveBand = typeof score === "number" ? bandFromFivePointScale(score) : undefined;
    const stored = breed.traits[ourKey]?.value;
    if (stored !== liveBand) {
      report(breed, `akc:${ourKey}`, stored ?? "(absent)", liveBand ?? "(absent)");
    }
  }
}

/* ---------------------------- FCI ---------------------------- */

async function checkFci(breed, rec) {
  const html = await fetchText(rec.registryUrl);
  checked.fci += 1;
  const span = (id) => {
    const m = html.match(new RegExp(`<span id="ContentPlaceHolder1_${id}"[^>]*>(.*?)</span>`, "s"));
    return m ? m[1].replace(/<[^>]+>/g, "").replace(/\s+/g, " ").trim() : undefined;
  };
  const number = span("NumeroLabel");
  if (number && number !== String(rec.registryBreedCode)) {
    report(breed, "fci:number", rec.registryBreedCode, number);
  }
  const status = span("StatutLabel");
  if (status && !/definitive/i.test(status) && rec.status === "recognized") {
    report(breed, "fci:status", "recognized (definitive)", status);
  }
  const section = span("SectionLabel");
  if (section && rec.registryGroup && !rec.registryGroup.includes(section)) {
    report(breed, "fci:section", rec.registryGroup, section);
  }
  const group = html
    .match(/id="ContentPlaceHolder1_GroupeHyperLink"[^>]*>(.*?)<\/a>/s)?.[1]
    ?.replace(/<[^>]+>/g, "")
    .replace(/\s+/g, " ")
    .trim();
  const groupNo = group?.match(/n°(\d+)/)?.[1];
  const storedNo = rec.registryGroup?.match(/Group (\d+)/)?.[1];
  if (groupNo && storedNo && groupNo !== storedNo) {
    report(breed, "fci:group", `Group ${storedNo}`, `Group ${groupNo}`);
  }
}

/* ---------------------------- CFA ---------------------------- */

/**
 * CFA checks.
 *
 * The first version of this asked only whether the page contained the string
 * "standard" and whether the recognition year appeared ANYWHERE in the HTML.
 * Both were near-vacuous: a Sphynx page contains "2018" nineteen times, so a
 * record claiming the wrong year would have passed. These checks now require
 * the year to appear in a sentence that is actually about recognition, and
 * verify the coat wording and the standard PDF link.
 */
async function checkCfa(breed, rec) {
  const html = await fetchText(rec.registryUrl);
  checked.cfa += 1;

  const text = html
    .replace(/<(script|style|nav|header|footer)[^>]*>[\s\S]*?<\/\1>/gi, " ")
    .replace(/<[^>]+>/g, " ")
    .replace(/&nbsp;/g, " ")
    .replace(/\s+/g, " ");

  if (!/\/wp-content\/uploads\/[^"' ]*standard[^"' ]*\.pdf/i.test(html)) {
    report(breed, "cfa:standard", "a linked breed standard PDF", "no standard PDF on the page");
  }

  if (rec.recognizedYear) {
    // The year must appear in a sentence about recognition, not merely anywhere.
    const sentences = text.split(/(?<=[.!?])\s+/);
    const supported = sentences.some(
      (sentence) =>
        sentence.includes(String(rec.recognizedYear)) &&
        /championship|recognis|recogniz|accepted|granted|status/i.test(sentence),
    );
    if (!supported) {
      report(
        breed,
        "cfa:recognizedYear",
        rec.recognizedYear,
        "no sentence on the page ties that year to recognition",
      );
    }
  }

  if (rec.registryGroup && !new RegExp(rec.registryGroup, "i").test(text)) {
    report(breed, "cfa:group", rec.registryGroup, "class no longer named on the page");
  }

  // The coat wording is quoted verbatim on the page, so it must still be there.
  if (breed.coat?.statedAs && breed.coat.sourceId === `cfa-${breed.slug}`) {
    const needle = breed.coat.statedAs.replace(/\s+/g, " ").slice(0, 60);
    if (!text.replace(/[\u2018\u2019]/g, "'").includes(needle.replace(/[\u2018\u2019]/g, "'"))) {
      report(breed, "cfa:coat", needle, "quoted coat wording not found on the page");
    }
  }

  // Any weight FaunaHub records from the profile page must still be published.
  for (const m of breed.measurements?.weightKg ?? []) {
    if (m.sourceId !== `cfa-${breed.slug}`) continue;
    const needle = m.statedAs.replace(/[\u2018\u2019]/g, "'").slice(0, 50);
    if (!text.replace(/[\u2018\u2019]/g, "'").includes(needle)) {
      report(breed, "cfa:weight", m.statedAs, "quoted weight wording not found on the page");
    }
  }
}

/**
 * FIFe publishes every breed on ONE page, so it is fetched once and reused.
 *
 * These 35 records were checked by nothing. `fife` was absent from the dispatch
 * below — the string does not appear anywhere in this file — so each FiFe
 * recognition fell through the if/else chain, still paid its 900 ms rate-limit
 * sleep, and the run then printed "registry agrees with every source it cites"
 * and exited 0. A verifier that reports green on data it never read is worse
 * than no verifier, because it is believed.
 */
let fifeListing = null;
async function fifeText() {
  if (fifeListing === null) {
    const html = await fetchText("https://fifeweb.org/cats/breeds/");
    fifeListing = html
      .replace(/<(script|style)[^>]*>[\s\S]*?<\/\1>/gi, " ")
      .replace(/<[^>]+>/g, " ")
      .replace(/&#8211;|&ndash;/g, "-")
      .replace(/&nbsp;/g, " ")
      .replace(/\s+/g, " ");
  }
  return fifeListing;
}

async function checkFife(breed, rec) {
  const text = await fifeText();
  checked.fife += 1;

  if (!text || text.length < 5000) {
    // The page shape changed or the fetch returned a stub. Say so rather than
    // letting every comparison below pass because there is nothing to compare.
    report(breed, "fife:page", "fifeweb.org/cats/breeds/", "breed listing could not be read");
    return;
  }

  const code = rec.registryBreedCode;
  if (!code) {
    report(breed, "fife:code", "(none stored)", "FIFe record stores no breed code");
    return;
  }
  /*
   * FIFe splits five breeds into longhair and shorthair codes, and FaunaHub
   * stores the pair as one string ("ACL/ACS", "KBL/KBS", "LPL/LPS", "OLH/OSH",
   * "SRL/SRS"). Searching for the combined string found nothing and reported
   * all five as delisted — a checker defect that would have read as five data
   * errors. Each half is looked up on its own, and the first one FIFe lists
   * carries the status and category for the record.
   */
  const parts = code.split("/").map((part) => part.trim()).filter(Boolean);
  const missing = parts.filter((part) => text.search(new RegExp(`\\b${part}\\b`)) < 0);
  if (missing.length > 0) {
    report(breed, "fife:code", code, `no longer listed by FIFe: ${missing.join(", ")}`);
    return;
  }
  const at = text.search(new RegExp(`\\b${parts[0]}\\b`));

  /*
   * READ FIFe'S OWN WORDING, NOT THE CODE'S POSITION.
   *
   * The first version of this check split the page on the heading
   * "Preliminary Recognised Breeds and Varieties" and treated every code after
   * it as preliminary. That phrase also appears as a NAVIGATION LINK near the
   * top of the page, at character 1,474 of 8,504 — so the split landed before
   * the fully recognised lists and the check reported the Turkish Van, a FIFe
   * category 1 breed since 1988, as preliminary on its first run.
   *
   * FIFe states the status inline instead: "LYO - Lykoi Preliminary recognised
   * breed in category 4 (2023-2027)", against "TUV - Turkish Van Breed Profile
   * Breed Standard" for a fully recognised one. Reading that sentence needs no
   * assumption about page order.
   */
  /*
   * "in" IS LOAD-BEARING. FIFe's section heading reads "Preliminary Recognised
   * Breeds and Varieties", and a case-insensitive test for "preliminary
   * recognised breed" matches it — so any code within 220 characters of that
   * heading read as preliminary. The Sphynx, 110 characters above it, did.
   * The inline statement always continues "...breed in category 4", which the
   * heading never does.
   */
  const near = text.slice(at, at + 220);
  const isPreliminary = /Preliminary recognised (?:breed|variety) in /i.test(near);
  const claimsPreliminary = /preliminary/i.test(rec.registryGroup ?? "");

  if (isPreliminary && !claimsPreliminary) {
    report(breed, "fife:status", rec.registryGroup, `FIFe states ${code} is preliminary recognised`);
  }
  if (!isPreliminary && claimsPreliminary) {
    report(breed, "fife:status", rec.registryGroup, `FIFe does not state ${code} is preliminary`);
  }

  /*
   * The category is inline for a preliminary breed and in the SECTION HEADING
   * for a fully recognised one ("Fully Recognised Breeds - Category 2"), so a
   * fully recognised breed's category comes from the nearest heading above it.
   */
  const stored = (rec.registryGroup ?? "").match(/category (\d)/i);
  if (stored) {
    let live = null;
    if (isPreliminary) {
      const inline = near.match(/recognised (?:breed|variety) in category (\d)/i);
      live = inline ? inline[1] : null;
    } else {
      const headings = [...text.matchAll(/Fully Recognised Breeds\s*[\u2013-]\s*Category (\d)/gi)];
      const above = headings.filter((h) => h.index < at).pop();
      live = above ? above[1] : null;
    }
    if (live === null) {
      report(breed, "fife:category", `category ${stored[1]}`, "could not read a category for this code");
    } else if (live !== stored[1]) {
      report(breed, "fife:category", `category ${stored[1]}`, `FIFe places ${code} in category ${live}`);
    }
  }
}

/* ---------------------------- run ---------------------------- */

const targets = BREEDS.filter((b) => !slugFilter || b.slug === slugFilter);
if (slugFilter && targets.length === 0) {
  console.error(`no breed with slug "${slugFilter}"`);
  process.exit(2);
}

for (const breed of targets) {
  for (const rec of breed.recognition) {
    if (!rec.registryUrl) continue;
    try {
      if (rec.registryId === "akc") await checkAkc(breed, rec);
      else if (rec.registryId === "fci") await checkFci(breed, rec);
      else if (rec.registryId === "cfa") await checkCfa(breed, rec);
      else if (rec.registryId === "fife") await checkFife(breed, rec);
      // EXHAUSTIVE. A registry with no checker used to fall through in silence
      // while the summary still claimed every source had been verified.
      else report(breed, `${rec.registryId}:unchecked`, rec.registryUrl, "no checker for this registry");
    } catch (error) {
      report(breed, `${rec.registryId}:fetch`, rec.registryUrl, String(error.message));
    }
    await new Promise((r) => setTimeout(r, 900));
  }
  // Every cited source must still resolve to a record, network aside.
  for (const id of breed.sources) {
    if (!getBreedSource(id)) report(breed, "source", id, "no such source record");
  }
  process.stdout.write(".");
}

process.stdout.write("\n\n");
console.log(
  `checked ${targets.length} breeds — ${checked.akc} AKC, ${checked.fci} FCI, ` +
    `${checked.cfa} CFA, ${checked.fife} FIFe records`,
);

if (problems.length === 0) {
  console.log("registry agrees with every source it cites.");
  process.exit(0);
}

console.log(`\n${problems.length} disagreement(s):\n`);
for (const p of problems) {
  console.log(`  ${p.breed}  ${p.field}`);
  console.log(`      stored: ${p.expected}`);
  console.log(`      live:   ${p.actual}`);
}
console.log(
  "\nA disagreement is not automatically an error — a registry may have revised its\n" +
    "standard, in which case the fix is to update the record AND its reviewedAt date.\n" +
    "It is an error if the registry never said what the record claims.",
);
process.exit(1);
