import { existsSync, readFileSync } from "node:fs";
import { describe, expect, it } from "vitest";

const forbiddenDeps = [
  "@prisma/adapter-pg",
  "@prisma/client",
  "prisma",
  "prisma-field-encryption",
  "pg",
  "@types/pg",
  "semantic-release-helm3",
];

const forbiddenPaths = [
  "Dockerfile",
  ".dockerignore",
  "docker-bake.hcl",
  "prisma",
  "prisma.config.ts",
  "src/lib/db.ts",
  "chart",
  "flux",
  "scripts/publish-release.sh",
  "docs/DATABASE_SETUP.md",
  "docs/DEPLOYMENT.md",
  "docs/GCP_SETUP.md",
  "docs/KUBERNETES_SETUP.md",
  "docs/SECRET_MANAGEMENT.md",
];

describe("template stack", () => {
  it("does not depend on Prisma, Postgres, or Helm release tooling", () => {
    const pkg = JSON.parse(readFileSync("package.json", "utf8")) as {
      dependencies?: Record<string, string>;
      devDependencies?: Record<string, string>;
      scripts?: Record<string, string>;
    };
    const deps = { ...pkg.dependencies, ...pkg.devDependencies };
    for (const name of forbiddenDeps) {
      expect(deps[name], name).toBeUndefined();
    }
    for (const script of ["db:generate", "db:push", "db:migrate", "db:migrate:deploy", "db:seed", "db:studio"]) {
      expect(pkg.scripts?.[script], script).toBeUndefined();
    }
  });

  it("does not ship Prisma, Docker, or Helm files", () => {
    for (const path of forbiddenPaths) {
      expect(existsSync(path), path).toBe(false);
    }
  });
});
