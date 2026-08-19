/**
 * Harvests the title and description that each static route ALREADY publishes.
 *
 * Every FaunaHub page builds its metadata through `buildMetadata` or
 * `buildArticleMetadata`, so the strings a search result shows are read straight
 * out of the page's own metadata call rather than written a second time for
 * search. Two consequences worth keeping:
 *
 *   - A new page is indexed the moment it exists. There is no second list to
 *     update, so search cannot silently fall behind the site.
 *   - A search snippet can never promise something the page does not say,
 *     because it IS what the page says.
 *
 * The URL is derived from the route directory, not from the `path` argument:
 * roughly a sixth of pages pass `path` as an identifier or a template, and the
 * directory is the canonical truth anyway.
 *
 * Uses the TypeScript compiler that already ships as a devDependency. A regex
 * would mis-read escaped quotes, adjacent-string concatenation and shorthand
 * properties, all of which occur in this repo.
 */
import fs from "node:fs";
import path from "node:path";
import { createRequire } from "node:module";

const require = createRequire(import.meta.url);
/** Resolved from the repo's own devDependency — no new package is introduced. */
const ts = require("typescript");

const METADATA_BUILDERS = /^build(Article)?Metadata$/;

/** Recursively collect every `page.tsx` under `dir`. */
export function findPageFiles(dir, out = []) {
  for (const entry of fs.readdirSync(dir, { withFileTypes: true }).sort((a, b) =>
    a.name.localeCompare(b.name),
  )) {
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) findPageFiles(full, out);
    else if (entry.name === "page.tsx") out.push(full);
  }
  return out;
}

/**
 * Fold a node down to a string, if it provably is one.
 *
 * Returns null for anything that depends on a runtime value — a registry
 * lookup, a function call, an imported constant. Those routes are covered by
 * their registry instead, so guessing here would only risk a wrong string.
 */
function literalValue(node, consts) {
  if (!node) return null;

  if (ts.isStringLiteral(node) || ts.isNoSubstitutionTemplateLiteral(node)) {
    return node.text;
  }
  if (ts.isIdentifier(node)) {
    return consts.has(node.text) ? consts.get(node.text) : null;
  }
  if (ts.isParenthesizedExpression(node)) {
    return literalValue(node.expression, consts);
  }
  if (ts.isBinaryExpression(node) && node.operatorToken.kind === ts.SyntaxKind.PlusToken) {
    const left = literalValue(node.left, consts);
    if (left === null) return null;
    const right = literalValue(node.right, consts);
    if (right === null) return null;
    return left + right;
  }
  if (ts.isTemplateExpression(node)) {
    let out = node.head.text;
    for (const span of node.templateSpans) {
      const value = literalValue(span.expression, consts);
      if (value === null) return null;
      out += value + span.literal.text;
    }
    return out;
  }
  return null;
}

/** Module-scope `const NAME = "literal"` declarations, resolved in order. */
function collectModuleConstants(sourceFile) {
  const consts = new Map();
  for (const statement of sourceFile.statements) {
    if (!ts.isVariableStatement(statement)) continue;
    for (const declaration of statement.declarationList.declarations) {
      if (!ts.isIdentifier(declaration.name)) continue;
      const value = literalValue(declaration.initializer, consts);
      if (typeof value === "string") consts.set(declaration.name.text, value);
    }
  }
  return consts;
}

/**
 * Extract `{ title, description, noindex }` from the first metadata builder
 * call in a page file. Returns null when neither title nor description resolves
 * to a literal.
 */
export function harvestPageMetadata(file) {
  const source = fs.readFileSync(file, "utf8");
  const sourceFile = ts.createSourceFile(
    file,
    source,
    ts.ScriptTarget.Latest,
    /* setParentNodes */ true,
    ts.ScriptKind.TSX,
  );

  const consts = collectModuleConstants(sourceFile);
  let result = null;

  const visit = (node) => {
    if (
      result === null &&
      ts.isCallExpression(node) &&
      ts.isIdentifier(node.expression) &&
      METADATA_BUILDERS.test(node.expression.text)
    ) {
      const [argument] = node.arguments;
      if (argument && ts.isObjectLiteralExpression(argument)) {
        const found = { title: null, description: null, noindex: false };
        for (const property of argument.properties) {
          let key = null;
          let value = null;

          if (ts.isPropertyAssignment(property)) {
            key = property.name.getText(sourceFile).replace(/["']/g, "");
            if (key === "noindex") {
              found.noindex = property.initializer.kind === ts.SyntaxKind.TrueKeyword;
              continue;
            }
            value = literalValue(property.initializer, consts);
          } else if (ts.isShorthandPropertyAssignment(property)) {
            key = property.name.text;
            value = consts.has(key) ? consts.get(key) : null;
          } else {
            continue;
          }

          if (key === "title") found.title = value;
          if (key === "description") found.description = value;
        }
        if (found.title || found.description) result = found;
      }
    }
    ts.forEachChild(node, visit);
  };

  visit(sourceFile);
  if (result) return result;

  // Fallback: a page that exports a plain `metadata` object rather than going
  // through the shared builders. The homepage does this so it can set an
  // absolute title that bypasses the root layout's "%s | FaunaHub" template.
  return harvestPlainMetadataExport(sourceFile, consts);
}

/**
 * Read `export const metadata = { title, description }`.
 *
 * `title` may be a bare string or Next's `{ absolute }` / `{ default }` form;
 * anything else is left alone rather than guessed at.
 */
function harvestPlainMetadataExport(sourceFile, consts) {
  for (const statement of sourceFile.statements) {
    if (!ts.isVariableStatement(statement)) continue;
    const isExported = statement.modifiers?.some(
      (modifier) => modifier.kind === ts.SyntaxKind.ExportKeyword,
    );
    if (!isExported) continue;

    for (const declaration of statement.declarationList.declarations) {
      if (!ts.isIdentifier(declaration.name) || declaration.name.text !== "metadata") continue;
      const initializer = declaration.initializer;
      if (!initializer || !ts.isObjectLiteralExpression(initializer)) continue;

      const found = { title: null, description: null, noindex: false };
      for (const property of initializer.properties) {
        if (!ts.isPropertyAssignment(property)) continue;
        const key = property.name.getText(sourceFile).replace(/["']/g, "");
        if (key === "description") {
          found.description = literalValue(property.initializer, consts);
        } else if (key === "title") {
          const direct = literalValue(property.initializer, consts);
          if (direct !== null) {
            found.title = direct;
          } else if (ts.isObjectLiteralExpression(property.initializer)) {
            for (const inner of property.initializer.properties) {
              if (!ts.isPropertyAssignment(inner)) continue;
              const innerKey = inner.name.getText(sourceFile).replace(/["']/g, "");
              if (innerKey === "absolute" || innerKey === "default") {
                found.title = literalValue(inner.initializer, consts);
              }
            }
          }
        }
      }
      if (found.title || found.description) return found;
    }
  }
  return null;
}

/**
 * Harvest every STATIC route under `appDir`.
 *
 * Dynamic templates are skipped on purpose: their titles live in the registry
 * their `generateStaticParams` reads, and that registry is a better source than
 * a template ever could be.
 *
 * @returns {{ url: string, file: string, title: string|null, description: string|null, noindex: boolean }[]}
 */
export function harvestStaticRoutes(appDir) {
  const out = [];
  for (const file of findPageFiles(appDir)) {
    const relative = file.slice(appDir.length).replace(/\/page\.tsx$/, "");
    const url = relative === "" ? "/" : relative;
    if (url.includes("[")) continue;

    const meta = harvestPageMetadata(file);
    out.push({
      url,
      file,
      title: meta?.title ?? null,
      description: meta?.description ?? null,
      noindex: meta?.noindex ?? false,
    });
  }
  return out;
}

/**
 * Route templates that contain a dynamic segment, as URL-shaped patterns.
 * Used to prove that every generated URL has a real route SHAPE behind it.
 */
export function findDynamicRouteTemplates(appDir) {
  const out = [];
  for (const file of findPageFiles(appDir)) {
    const relative = file.slice(appDir.length).replace(/\/page\.tsx$/, "");
    if (relative.includes("[")) out.push(relative);
  }
  return out;
}

/* ------------------------------------------------------------------ *
 * Animal profile facts
 *
 * The 642 animal profiles are hand-written pages, not registry records, so the
 * only place their classification lives is the props they pass to
 * `AnimalProfileLayout`. Reading those props is what gives search a complete
 * encyclopedia category (642/642) rather than the 79% the taxonomy registry
 * covers — and it is extraction, not authorship: every value below is a string
 * the page already renders.
 * ------------------------------------------------------------------ */

/** Read a JSX attribute value, if it is a plain string. */
function jsxStringAttribute(initializer) {
  if (!initializer) return null;
  if (ts.isStringLiteral(initializer)) return initializer.text;
  if (
    ts.isJsxExpression(initializer) &&
    initializer.expression &&
    (ts.isStringLiteral(initializer.expression) ||
      ts.isNoSubstitutionTemplateLiteral(initializer.expression))
  ) {
    return initializer.expression.text;
  }
  return null;
}

/** Read a JSX attribute value, if it is an array of plain strings. */
function jsxStringArrayAttribute(initializer) {
  if (
    !initializer ||
    !ts.isJsxExpression(initializer) ||
    !initializer.expression ||
    !ts.isArrayLiteralExpression(initializer.expression)
  ) {
    return null;
  }
  return initializer.expression.elements
    .filter((element) => ts.isStringLiteral(element))
    .map((element) => element.text);
}

/**
 * The encyclopedia category from a `breadcrumbSchema([...])` call.
 *
 * The 27 bespoke profiles that predate `AnimalProfileLayout` carry no
 * `parentCategoryHref` prop, but every one of them still publishes the category
 * in its breadcrumb JSON-LD — the same category a reader sees at the top of the
 * page. Taking it from there closes the gap without touching those 27 pages.
 */
function categoryFromBreadcrumbs(sourceFile) {
  let found = null;
  const visit = (node) => {
    if (
      !found &&
      ts.isCallExpression(node) &&
      ts.isIdentifier(node.expression) &&
      node.expression.text === "breadcrumbSchema" &&
      node.arguments[0] &&
      ts.isArrayLiteralExpression(node.arguments[0])
    ) {
      for (const element of node.arguments[0].elements) {
        if (!ts.isObjectLiteralExpression(element)) continue;
        for (const property of element.properties) {
          if (!ts.isPropertyAssignment(property)) continue;
          if (property.name.getText(sourceFile).replace(/["']/g, "") !== "url") continue;
          const value = literalValue(property.initializer, new Map());
          const match = value?.match(/^https:\/\/faunahub\.com(\/animal-encyclopedia\/[a-z-]+)$/);
          if (match) found = match[1];
        }
      }
    }
    ts.forEachChild(node, visit);
  };
  visit(sourceFile);
  return found;
}

/**
 * Extract the classification an animal profile already publishes.
 *
 * @returns {{ commonName: string|null, scientificName: string|null,
 *             parentCategory: string|null, parentCategoryHref: string|null,
 *             tags: string[] }}
 */
export function harvestAnimalProfileFacts(file) {
  const source = fs.readFileSync(file, "utf8");
  const sourceFile = ts.createSourceFile(
    file,
    source,
    ts.ScriptTarget.Latest,
    true,
    ts.ScriptKind.TSX,
  );

  const facts = {
    commonName: null,
    scientificName: null,
    parentCategory: null,
    parentCategoryHref: null,
    tags: [],
  };

  const visit = (node) => {
    if (ts.isJsxSelfClosingElement(node) || ts.isJsxOpeningElement(node)) {
      for (const attribute of node.attributes.properties) {
        if (!ts.isJsxAttribute(attribute) || !attribute.name) continue;
        const name = attribute.name.getText(sourceFile);
        if (name === "commonName" && facts.commonName === null) {
          facts.commonName = jsxStringAttribute(attribute.initializer);
        } else if (name === "scientificName" && facts.scientificName === null) {
          facts.scientificName = jsxStringAttribute(attribute.initializer);
        } else if (name === "parentCategory" && facts.parentCategory === null) {
          facts.parentCategory = jsxStringAttribute(attribute.initializer);
        } else if (name === "parentCategoryHref" && facts.parentCategoryHref === null) {
          facts.parentCategoryHref = jsxStringAttribute(attribute.initializer);
        } else if (name === "tags" && facts.tags.length === 0) {
          facts.tags = jsxStringArrayAttribute(attribute.initializer) ?? [];
        }
      }
    }
    ts.forEachChild(node, visit);
  };
  visit(sourceFile);

  if (!facts.parentCategoryHref || facts.parentCategoryHref === "/animal-encyclopedia") {
    facts.parentCategoryHref = categoryFromBreadcrumbs(sourceFile) ?? facts.parentCategoryHref;
  }

  return facts;
}
