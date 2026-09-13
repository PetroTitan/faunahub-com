/**
 * Registers the repo's TypeScript resolve hooks for `npm test`.
 *
 * Node's test runner strips types natively but does not know the "@/" path
 * alias from tsconfig, so a test that imports a real app module — a route's
 * generateStaticParams, or src/app/sitemap.ts — fails to resolve.
 *
 * That mattered enough to wire up: the breed parity tests used to grep route
 * and sitemap SOURCE TEXT, and an adversarial review defeated three of them by
 * making the code wrong in ways the regex still matched (deleting the breed
 * routes from the sitemap's return array; appending `.slice(0, 3)` to
 * generateStaticParams). Executing the real functions is the only parity check
 * worth having, and this hook is what makes it possible.
 */
import { register } from "node:module";
register("./ts-resolve-hooks.mjs", import.meta.url);
