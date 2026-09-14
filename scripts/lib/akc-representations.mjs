/**
 * The same AKC fact, published in more than one place.
 *
 * WHAT THIS RECOVERS, AND WHAT IT CANNOT
 *
 * 24 of 219 AKC breed pages stopped publishing `breed_data.basics` — the object
 * that carried breed group, AKC code, year recognized and life expectancy. The
 * pages still answer 200 and still carry the breed; the container is simply
 * gone. Everything that cited it went unverified.
 *
 * Two of those facts are published elsewhere on the SAME page, and were all
 * along:
 *
 *   breed group   settings.current_breed_group.name
 *   AKC code      settings.breed_data.colors|markings[].akc_code
 *
 * Measured on three control pages that still have basics, both agree with the
 * basics value exactly (beagle 404, labrador 108, chihuahua 503), and on the
 * pages without basics both are stable across three fetches. So this is one
 * fact in two representations, not a guess from a second-best source.
 *
 * The rest — year recognized, life expectancy, coat length, trait bands —
 * appears NOWHERE else on the page and in no official endpoint the page names.
 * `breedlist.json` carries `group: null` for all 297 entries. Those fields stay
 * unverified and are reported as such. Recovering two fields does not make a
 * record CLEAN, and this module deliberately cannot express "close enough".
 *
 * A FIELD WITH TWO REPRESENTATIONS THAT DISAGREE IS NOT A FIELD WITH A VALUE.
 *
 * When basics is present, both representations exist. If they ever diverge,
 * picking either would mean verifying a published record against whichever copy
 * happened to agree with it. `resolveField` refuses instead.
 */

/** Read every akc_code the page attaches to this breed's colour/marking rows. */
function codesFromColourRecords(breedData, key) {
  const found = new Set();
  for (const group of ["colors", "markings"]) {
    const holder = breedData?.[group];
    if (!holder || typeof holder !== "object") continue;
    // Prefer the breed's own key; fall back to the sole key when there is one.
    const keys = Object.prototype.hasOwnProperty.call(holder, key)
      ? [key]
      : Object.keys(holder).length === 1
        ? Object.keys(holder)
        : [];
    for (const k of keys) {
      for (const row of holder[k]?.[group] ?? []) {
        if (row?.akc_code !== undefined && row.akc_code !== null && row.akc_code !== "") {
          found.add(String(row.akc_code));
        }
      }
    }
  }
  return [...found];
}

/**
 * Every representation of every field this page publishes.
 *
 * `basics` may be absent; each field is collected independently so that losing
 * the container costs exactly the fields it carried alone.
 *
 * @param {object} settings the breedPage props `settings` object
 * @param {string|null} key the resolved basics key, when there is one
 * @param {object|null} basics the resolved basics record, when there is one
 */
export function akcRepresentations(settings, key, basics) {
  const breedData = settings?.breed_data ?? {};
  const reps = { group: [], code: [], year: [], lifespan: [] };

  if (basics) {
    if (basics.breed_group !== undefined && basics.breed_group !== null) {
      reps.group.push({ value: String(basics.breed_group), from: "breed_data.basics.breed_group" });
    }
    if (basics.akc_code !== undefined && basics.akc_code !== null) {
      reps.code.push({ value: String(basics.akc_code), from: "breed_data.basics.akc_code" });
    }
    if (basics.year_recognized !== undefined && basics.year_recognized !== null) {
      reps.year.push({ value: String(basics.year_recognized), from: "breed_data.basics.year_recognized" });
    }
    if (basics.life_expectancy !== undefined && basics.life_expectancy !== null) {
      reps.lifespan.push({
        value: String(basics.life_expectancy),
        from: "breed_data.basics.life_expectancy",
      });
    }
  }

  const groupName = settings?.current_breed_group?.name;
  if (typeof groupName === "string" && groupName.trim()) {
    reps.group.push({ value: groupName.trim(), from: "settings.current_breed_group.name" });
  }

  const codes = codesFromColourRecords(breedData, key ?? settings?.current_breed ?? "");
  if (codes.length === 1) {
    reps.code.push({ value: codes[0], from: "breed_data.colors/markings[].akc_code" });
  } else if (codes.length > 1) {
    // Several different codes attached to one breed's rows: the page is not
    // telling us one thing, and the ambiguity must not collapse into a pick.
    reps.code.push({ value: null, from: `breed_data.colors/markings[].akc_code (${codes.length} differing: ${codes.join(", ")})` });
  }

  return reps;
}

/**
 * One value, or an honest reason there is not one.
 *
 * @returns {{state: "value", value: string, from: string[]}
 *   | {state: "unsupported"}
 *   | {state: "conflict", detail: string}}
 */
export function resolveField(representations) {
  const reps = representations ?? [];
  if (reps.length === 0) return { state: "unsupported" };
  if (reps.some((r) => r.value === null)) {
    return {
      state: "conflict",
      detail: reps.map((r) => r.from).join(" vs "),
    };
  }
  const values = [...new Set(reps.map((r) => r.value))];
  if (values.length > 1) {
    return {
      state: "conflict",
      detail: reps.map((r) => `${r.from}="${r.value}"`).join(" vs "),
    };
  }
  return { state: "value", value: values[0], from: reps.map((r) => r.from) };
}

/**
 * A stable name for "this page is missing these things in this way".
 *
 * Aggregation is only honest if the failures really are the same failure, so
 * the fingerprint is built from what the page actually contains and what that
 * cost — never from how many breeds happened to hit it.
 */
export function templateFingerprint(settings, unsupportedFields) {
  const keys = Object.keys(settings?.breed_data ?? {}).sort();
  return `breed_data:[${keys.join(",")}] unverified:[${[...unsupportedFields].sort().join(",")}]`;
}
