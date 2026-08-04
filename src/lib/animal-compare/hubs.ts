/**
 * Human-readable labels for the FaunaHub cluster paths that comparison records
 * link out to.
 *
 * Two reasons this exists rather than rendering the raw path as link text:
 *
 *  1. "/small-pets/guinea-pigs" is not meaningful link text. Accessible links
 *     have to make sense read out of context.
 *  2. It gives the test suite a closed set to check. `relatedHubPaths` may only
 *     contain keys from this map, and every key must be a route that actually
 *     exists in `src/app`, so a comparison cannot link to a page that is not
 *     there.
 *
 * Adding a new outbound cluster link means adding it here first.
 */
export const HUB_LABELS: Record<string, string> = {
  "/animal-domestication": "Animal domestication",
  "/animal-encyclopedia": "Animal encyclopedia",
  "/animal-encyclopedia/birds": "Bird encyclopedia",
  "/animal-encyclopedia/mammals": "Mammal encyclopedia",
  "/animal-encyclopedia/reptiles": "Reptile encyclopedia",
  "/animal-intelligence-and-behavior": "Animal intelligence & behavior",
  "/animal-senses-and-adaptations": "Animal senses & adaptations",
  "/animal-taxonomy": "Animal taxonomy",
  "/animal-taxonomy/reptiles-amphibians": "Reptiles & amphibians taxonomy",
  "/aquarium-care": "Aquarium care",
  "/bird-care": "Bird care",
  "/birds": "Birds",
  "/birdwatching": "Birdwatching",
  "/cats": "Cats",
  "/dogs": "Dogs",
  "/domestic-animals": "Domestic animals",
  "/endangered-animals": "Endangered animals",
  "/fauna": "Fauna by region",
  "/fish": "Fish",
  "/reptiles": "Reptiles",
  "/small-pets": "Small pets",
  "/small-pets/guinea-pigs": "Guinea pigs",
  "/small-pets/hamsters": "Hamsters",
  "/small-pets/rabbits": "Rabbits",
  "/wildlife": "Wildlife",
  "/wildlife/pollinators": "Pollinators",
};

export function hubLabel(path: string): string | undefined {
  return HUB_LABELS[path];
}

export function isKnownHubPath(path: string): boolean {
  return path in HUB_LABELS;
}
