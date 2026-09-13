/**
 * Breed registries FaunaHub is able to cite, and the access reality behind each.
 *
 * A registry appears here only if it was actually reached, or actually tried
 * and refused. `machineReadable: false` with `accessNotes` is a RESULT, not a
 * placeholder — it records that a request was made on a stated date and what
 * came back, so a later session does not re-litigate a settled attempt or,
 * worse, assume the registry simply was not considered.
 *
 * Access control-tested 2026-09-13, identical desktop user agent for each:
 *
 *   fci.be                 200  breed pages and standard PDFs both readable
 *   akc.org                200  breed pages carry a structured props blob
 *   cfa.org                200  breed pages + an XML sitemap that enumerates them
 *   tica.org               403  refuses automated requests
 *   gccfcats.org           403  refuses automated requests
 *   thekennelclub.org.uk   301  redirects; not followed up this sprint
 *
 * Re-tested 2026-09-13 for the mass expansion:
 *
 *   fifeweb.org            200  /breeds/ redirects to /cats/breeds/, which the
 *                               foundation recorded as a 404 because it probed
 *                               the pre-redirect path. 50 fully recognised
 *                               breeds with official codes and categories.
 *   akc.org                200  wp-json/json/v2/breedlist.json enumerates all
 *                               297 breed pages — the endpoint the paginated
 *                               HTML listings could not provide.
 *   tica.org               403  still refuses
 *   gccfcats.org           403  still refuses
 *
 * Two traps this table exists to record, both found by control-testing rather
 * than by reading a page and believing it:
 *
 *  1. AKC group listing pages (/dog-breeds/sporting/ etc.) return exactly 31
 *     unique breed links EACH — because they are paginated and about 14 of
 *     those links are shared navigation. Seven different groups returning the
 *     same count is the tell. They cannot be used to enumerate a group.
 *  2. CFA's /breeds/ page yields only 12 breeds, all A-B, for the same reason.
 *     Its XML sitemap yields 45 and is the enumeration path that works.
 *
 * Neither registry is wrong; a listing page that lazy-loads is normal. What
 * would have been wrong is publishing "the Sporting Group has 31 breeds".
 */
import type { BreedRegistry } from "./types.ts";

export const BREED_REGISTRIES: readonly BreedRegistry[] = [
  {
    id: "fci",
    name: "Fédération Cynologique Internationale",
    shortName: "FCI",
    url: "https://www.fci.be/en/Nomenclature/",
    species: "dog",
    scope:
      "International federation of national canine organisations. Its nomenclature is the reference used by member and contract-partner countries across Europe, South America, and Asia; it is not the authority in the United States or the United Kingdom, which run their own registries.",
    groupingModel:
      "Ten numbered groups, subdivided into sections, organised by original function and type (e.g. Group 8 — Retrievers, Flushing Dogs, Water Dogs). A breed also carries an FCI breed number and a country of patronage, which is the country responsible for the standard rather than necessarily the country of origin.",
    machineReadable: true,
  },
  {
    id: "akc",
    name: "American Kennel Club",
    shortName: "AKC",
    url: "https://www.akc.org/dog-breeds/",
    species: "dog",
    scope:
      "The principal purebred dog registry of the United States. Recognition is a US institutional decision and says nothing about whether other registries accept the breed.",
    groupingModel:
      "Seven competition groups (Sporting, Hound, Working, Terrier, Toy, Non-Sporting, Herding), plus two tiers BELOW full recognition that are listed alongside them and are easy to mistake for groups: the Miscellaneous Class, and the Foundation Stock Service. A breed in FSS is recorded, not recognised.",
    machineReadable: true,
  },
  {
    id: "cfa",
    name: "The Cat Fanciers' Association",
    shortName: "CFA",
    url: "https://cfa.org/breeds/",
    species: "cat",
    scope:
      "A pedigree cat registry, headquartered in the United States and operating internationally. Its championship list is narrower than some other cat registries' lists, so a breed absent from CFA is not thereby a breed nobody recognises.",
    groupingModel:
      "Breeds are accepted into competition classes rather than function groups; Championship is the full tier, with Miscellaneous and Provisional classes beneath it. CFA publishes a written standard per breed as a PDF.",
    machineReadable: true,
  },
  {
    id: "fife",
    name: "Fédération Internationale Féline",
    shortName: "FIFe",
    url: "https://fifeweb.org/cats/breeds/",
    species: "cat",
    scope:
      "A federation of national cat registries, primarily European. Its recognised list differs from CFA's, so a breed recognised by one and not the other is a real difference between two authorities rather than a contradiction.",
    groupingModel:
      "Breeds are filed in four categories (1-4) and carry a three-letter code (e.g. MCO Maine Coon). FIFe sometimes splits by coat length what CFA treats as one breed — the American Curl, LaPerm, Selkirk Rex and Oriental are each TWO FIFe breeds and one CFA breed.",
    machineReadable: true,
  },
  {
    id: "tica",
    name: "The International Cat Association",
    shortName: "TICA",
    url: "https://tica.org/breeds/",
    species: "cat",
    scope:
      "A large international cat registry with its own recognition tiers, generally accepting a wider breed list than CFA.",
    groupingModel:
      "Tiered recognition running from Registration Only through Preliminary and Advanced New Breed to Championship.",
    machineReadable: false,
    accessNotes:
      "tica.org returned HTTP 403 to automated requests on 2026-09-13. No TICA recognition is asserted for any breed in this registry: FaunaHub could not read the source, and a recognition claim nobody verified is a fabricated one. Absence of a TICA record on a breed means exactly this and nothing about TICA's actual position.",
  },
];

const BY_ID = new Map(BREED_REGISTRIES.map((r) => [r.id, r]));

export function getRegistry(id: string): BreedRegistry | undefined {
  return BY_ID.get(id);
}

/** Registries FaunaHub may cite a recognition status from. */
export function citableRegistryIds(): string[] {
  return BREED_REGISTRIES.filter((r) => r.machineReadable).map((r) => r.id);
}
