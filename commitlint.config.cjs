// Base: .shared-tooling/commitlint/base.ts
const base = require("./.shared-tooling/commitlint/base.ts");
const baseConfig = base.default ?? base;

module.exports = {
  ...baseConfig,
  rules: {
    ...baseConfig.rules,
    "subject-case": [2, "always", "lower-case"],
    "header-max-length": [2, "always", 100],
  },
};
