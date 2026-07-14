import { createNextConfig } from "./.shared-tooling/eslint/next-app.mjs";

export default await createNextConfig({
  ignores: [
    "chart/**",
    "flux/**",
    // Root Node/CJS tooling configs are not part of the Next app graph.
    "commitlint.config.cjs",
    "release.config.cjs",
    "lint-staged.config.js",
    "next.config.mjs",
    "prisma.config.ts",
  ],
});
