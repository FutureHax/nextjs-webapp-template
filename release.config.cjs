// Base: .shared-tooling/releaserc/next-app.js
const { createReleaseConfig } = require("./.shared-tooling/releaserc/next-app.js");

module.exports = createReleaseConfig({
  branch: "main",
  chartPath: "chart/{{APP_NAME}}",
  extraAssets: ["chart/{{APP_NAME}}/base/values.yaml", "flux/prod/helmrelease.yaml"],
  extraPlugins: [
    [
      "@semantic-release/exec",
      {
        prepareCmd:
          'sed -i "s/tag:.*/tag: ${nextRelease.version}/" chart/{{APP_NAME}}/base/values.yaml && sed -i "s/tag: \\"[0-9.]*\\"/tag: \\"${nextRelease.version}\\"/" flux/prod/helmrelease.yaml',
        publishCmd: "./scripts/publish-release.sh ${nextRelease.version}",
      },
    ],
  ],
});
