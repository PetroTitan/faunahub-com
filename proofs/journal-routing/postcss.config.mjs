/**
 * Declared empty ON PURPOSE, and this file is load-bearing.
 *
 * This proof app uses plain CSS — no Tailwind, no `@apply`, no directives. It
 * therefore lists no PostCSS plugins and does not depend on `tailwindcss`.
 *
 * Without this file, a Vercel build of this directory failed with:
 *
 *     ./src/app/globals.css
 *     Error: Cannot find module 'tailwindcss'
 *       at getPostCssPlugins (.../webpack/config/blocks/css/plugins.js)
 *
 * The FaunaHub repository root carries a `postcss.config.mjs` that declares
 * `tailwindcss` and `autoprefixer`, and on Vercel that config reached this
 * build even though this directory is the configured Root Directory. It does
 * NOT happen with a local `next build` from this directory — verified by
 * probe: a build here with no local config succeeds, and a build with a
 * deliberately invalid local config fails, which shows a local config is read
 * and the parent one is not. The exact resolution difference on Vercel was not
 * reproduced, so this file does not rely on understanding it.
 *
 * An explicit local config is honoured on every platform, so declaring no
 * plugins here settles the question wherever the build runs.
 */
const config = { plugins: {} };
export default config;
