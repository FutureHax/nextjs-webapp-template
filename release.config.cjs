// Base: .shared-tooling/releaserc/next-app.js
const { createReleaseConfig } = require("./.shared-tooling/releaserc/next-app.js");

module.exports = createReleaseConfig({
  branch: "main",
});
