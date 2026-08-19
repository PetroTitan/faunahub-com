/**
 * Node ESM resolve hook that lets build scripts import the app's own TypeScript
 * registries directly, with no bundler and no new dependency.
 *
 * Node already strips types on load. What it does not do is resolve the two
 * conventions the app source uses:
 *
 *   - the "@/..." path alias configured in tsconfig.json
 *   - extensionless relative imports ("./sources" rather than "./sources.ts")
 *
 * Resolving them here means the search index is generated from the SAME modules
 * route generation reads, rather than from a parallel copy that could drift.
 *
 * Registered by scripts/generate-search-index.mjs via `module.register`.
 */
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath, pathToFileURL } from "node:url";

const SRC_ROOT = path.resolve(fileURLToPath(import.meta.url), "../../../src");

/** Tried in order when a specifier has no usable extension. */
const CANDIDATE_SUFFIXES = ["", ".ts", ".tsx", "/index.ts", "/index.tsx"];

function firstExistingFile(basePath) {
  for (const suffix of CANDIDATE_SUFFIXES) {
    const candidate = basePath + suffix;
    if (fs.existsSync(candidate) && fs.statSync(candidate).isFile()) return candidate;
  }
  return null;
}

export async function resolve(specifier, context, nextResolve) {
  let basePath = null;

  if (specifier.startsWith("@/")) {
    basePath = path.join(SRC_ROOT, specifier.slice(2));
  } else if (specifier.startsWith(".") && context.parentURL?.startsWith("file:")) {
    basePath = path.resolve(path.dirname(fileURLToPath(context.parentURL)), specifier);
  }

  if (basePath) {
    const resolved = firstExistingFile(basePath);
    if (resolved) {
      return { url: pathToFileURL(resolved).href, shortCircuit: true };
    }
  }

  return nextResolve(specifier, context);
}
