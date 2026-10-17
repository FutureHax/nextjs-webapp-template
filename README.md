# Next.js Web Application Template

[![CI](https://github.com/FutureHax/nextjs-webapp-template/actions/workflows/ci.yml/badge.svg)](https://github.com/FutureHax/nextjs-webapp-template/actions/workflows/ci.yml) [![Release](https://github.com/FutureHax/nextjs-webapp-template/actions/workflows/release.yml/badge.svg)](https://github.com/FutureHax/nextjs-webapp-template/actions/workflows/release.yml) [![Doctor](https://github.com/FutureHax/nextjs-webapp-template/actions/workflows/doctor.yml/badge.svg)](https://github.com/FutureHax/nextjs-webapp-template/actions/workflows/doctor.yml) ![License: All Rights Reserved](https://img.shields.io/badge/license-All%20Rights%20Reserved-red)

UI scaffold for a FutureHax Next.js app: Chakra UI, TypeScript, and the shared commons packages. This template does not include a database, Prisma, Docker, Helm, or a cluster deploy path.

For new product apps that need Auth, Firestore, and Firebase App Hosting, use
[`nextjs-firebase-webapp-template`](https://github.com/FutureHax/nextjs-firebase-webapp-template).

Hello-world UI uses FutureHax commons from **GitHub Packages**:

- `@futurehax/nextjs-common` (env, CMS, links, SEO)
- `@futurehax/nextjs-common-ui` (landing sections, header, footer, login, Full access)

Set `NODE_AUTH_TOKEN` (PAT with `read:packages`, FutureHax SSO) for `npm ci`. See [CONSUMING.md](../nextjs-common/docs/CONSUMING.md).

**Local library verify (recommended):** run the monorepo starter so React stays single-instance:

```bash
cd ../nextjs-common && npm install && npm run dev:starter
# http://localhost:3010
```

Bump commons versions manually (`npm i @futurehax/nextjs-common@latest @futurehax/nextjs-common-ui@latest`). Prefer `apps/starter` when iterating on the libraries.

## Features

- **Next.js 15** with App Router
- **Chakra UI v3** for component library
- **@futurehax/nextjs-common** + **@futurehax/nextjs-common-ui** shared patterns
- **TypeScript** with strict mode
- **React 19** with latest features
- **Zod** for validation
- **Semantic Release** for GitHub versioning (no npm publish)
- **Devcontainer**, **ESLint + Prettier**, **Husky + commitlint**, and **Vitest**

## Quick Start

### 1. Use This Template

Click "Use this template" on GitHub or clone and rename:

```bash
git clone https://github.com/r2DoesInc/nextjs-webapp-template.git my-app
cd my-app
```

### 2. Replace Placeholders

| Placeholder      | Description                   | Example      |
| ---------------- | ----------------------------- | ------------ |
| `{{APP_NAME}}`   | Application name (kebab-case) | `my-web-app` |
| `{{APP_TITLE}}`  | Display title                 | `My Web App` |
| `{{GITHUB_ORG}}` | GitHub org/username           | `FutureHax`  |

```bash
# macOS/Linux
find . -type f \( -name "*.json" -o -name "*.yaml" -o -name "*.yml" -o -name "*.ts" -o -name "*.tsx" -o -name "*.md" -o -name "Taskfile.yml" \) -exec sed -i '' 's/{{APP_NAME}}/my-app/g' {} +
```

### 3. Install and start

```bash
npm install
npm run dev
```

## Project Structure

```
├── .devcontainer/           # Dev container configuration
├── .github/
│   └── workflows/
│       └── ci.yml           # CI pipeline
├── src/
│   ├── app/                 # Next.js App Router
│   ├── components/
│   ├── lib/
│   ├── providers/
│   └── styles/
├── Taskfile.yml
└── package.json
```

## Available Scripts

```bash
npm run dev              # Start dev server
npm run build            # Build for production
npm run start            # Start production server
npm run lint             # Run linter
npm run type-check       # TypeScript checking
npm run test             # Run tests (watch)
npm run test:run         # Run tests once
```

## Deploy

This template does not document a deploy path. It has no Dockerfile, Helm chart, Flux manifests, or Firebase App Hosting config. Add a deploy target in the app you create from it.

## License

MIT

## Local commons packages

`.npmrc` sets `install-links=true` so `file:` deps to `../nextjs-common` are **copied** (not symlinked). That keeps a single React tree for production builds. Re-run `npm install` after changing the commons packages.
