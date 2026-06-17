# Directory Structure

```
.cursor/
  rules/
    issue-workflow.mdc (49 lines)
    tdd-workflow.mdc (38 lines)
  hooks.json (1 lines)
.devcontainer/
  devcontainer.json (36 lines)
.github/
  workflows/
    ci.yml (121 lines)
    doctor.yml (12 lines)
    release.yml (48 lines)
  CODEOWNERS (2 lines)
  dependabot.yml (40 lines)
.husky/
  commit-msg (1 lines)
  pre-commit (1 lines)
.shared-tooling/
  .github/
    workflows/
      ci.yml (39 lines)
      release.yml (35 lines)
  .husky/
    commit-msg (1 lines)
    pre-commit (1 lines)
  commitlint/
    base.ts (28 lines)
    foundry-module.ts (29 lines)
  eslint/
    foundry-module-extended.mjs (11 lines)
    foundry-module.mjs (57 lines)
    globals.mjs (52 lines)
    next-app.mjs (52 lines)
    node-base.mjs (47 lines)
    typescript.mjs (32 lines)
  husky/
    commit-msg.sh (5 lines)
    pre-commit.sh (11 lines)
    pre-push.sh (40 lines)
  lint-staged/
    full.js (16 lines)
    minimal.js (4 lines)
    node-base.js (6 lines)
  prettier/
    base.json (3 lines)
  release/
    build-module.js (58 lines)
    foundry-module-plugin.cjs (277 lines)
    inject-patrons.js (264 lines)
    install-dev.sh (72 lines)
    install-prod.sh (66 lines)
  releaserc/
    foundry-module.js (107 lines)
    next-app.js (95 lines)
    node-base.js (83 lines)
  rules/
    next-app/
      next-app-spec.mdc (46 lines)
  scripts/
    batch-migrate.sh (106 lines)
    migrate-project.sh (183 lines)
    open-prs.sh (82 lines)
  skills/
    next-app/
      writing-nextjs-app-spec/
        SKILL.md (37 lines)
  taskfile/
    foundry-module.yml (259 lines)
    next-app.yml (83 lines)
    node-base.yml (118 lines)
  .git (1 lines)
  .releaserc.js (2 lines)
  commitlint.config.ts (1 lines)
  eslint.config.mjs (2 lines)
  LICENSE (17 lines)
  lint-staged.config.js (1 lines)
  package.json (35 lines)
  README.md (213 lines)
  Taskfile.yml (12 lines)
chart/
  {{APP_NAME}}/
    base/
      values.yaml (93 lines)
    dev/
      values.yaml (61 lines)
    prod/
      values.yaml (77 lines)
    staging/
      values.yaml (61 lines)
    templates/
      _helpers.tpl (62 lines)
      certificate.yaml (17 lines)
      deployment.yaml (102 lines)
      gateway.yaml (54 lines)
      hpa.yaml (32 lines)
      poddisruptionbudget.yaml (18 lines)
      secret-provider.yaml (32 lines)
      service.yaml (15 lines)
      serviceaccount.yaml (16 lines)
    .helmignore (13 lines)
    Chart.yaml (16 lines)
    README.md (84 lines)
docs/
  DEPLOYMENT.md (228 lines)
  GCP_SETUP.md (138 lines)
  KUBERNETES_SETUP.md (174 lines)
  SECRET_MANAGEMENT.md (163 lines)
flux/
  dev/
    helmrelease.yaml (69 lines)
    ocirepository.yaml (14 lines)
  prod/
    helmrelease.yaml (73 lines)
    ocirepository.yaml (14 lines)
  staging/
    helmrelease.yaml (69 lines)
    ocirepository.yaml (14 lines)
  gitrepository.yaml (13 lines)
prisma/
  migrations/
    .gitkeep (0 lines)
  schema.prisma (81 lines)
  seed.ts (110 lines)
public/
  icons/
    .gitkeep (0 lines)
  .gitkeep (0 lines)
  manifest.json (21 lines)
scripts/
  publish-release.sh (35 lines)
src/
  app/
    global-error.tsx (36 lines)
    layout.tsx (62 lines)
    page.tsx (81 lines)
    robots.ts (12 lines)
    sitemap.ts (14 lines)
  lib/
    db.ts (13 lines)
    utils.test.ts (54 lines)
    utils.ts (45 lines)
  providers/
    ChakraProviders.tsx (14 lines)
  styles/
    global.css (37 lines)
  env.ts (48 lines)
  theme.ts (35 lines)
.dockerignore (45 lines)
.envrc (6 lines)
.eslintrc.json (10 lines)
.gitignore (49 lines)
.gitmodules (3 lines)
.prettierignore (12 lines)
.prettierrc (12 lines)
.releaserc.js (2 lines)
CHANGELOG.md (30 lines)
commitlint.config.cjs (24 lines)
commitlint.config.ts (1 lines)
docker-bake.hcl (55 lines)
Dockerfile (81 lines)
eslint.config.mjs (2 lines)
LICENSE (21 lines)
lint-staged.config.js (1 lines)
next-doctor-report.json (436 lines)
next.config.mjs (12 lines)
package.json (104 lines)
README.md (202 lines)
release.config.cjs (51 lines)
Taskfile.yml (12 lines)
tsconfig.json (56 lines)
vitest.config.ts (16 lines)
```