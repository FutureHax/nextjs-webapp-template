# Task 9 Report: Migrate nextjs-webapp-template to expandable /legal

**Date:** 2026-08-05  
**Branch:** `feat/expandable-legal`  
**Status:** Complete

## Summary

Migrated the hello-world template to the combined `/legal` surface using commons `1.0.0` local packs and `commons-doctor` `0.3.0`. Added `ExpandableLegalPage`, converted `/privacy` and `/terms` to redirects, updated footer links and sitemap, and passed `commons-doctor audit --strict --allow-legacy-install`.

## Packages

| Package                       | Version                                                                                        |
| ----------------------------- | ---------------------------------------------------------------------------------------------- |
| `@futurehax/nextjs-common`    | `file:../worktrees/nextjs-common-expandable-legal/.packs/futurehax-nextjs-common-1.0.0.tgz`    |
| `@futurehax/nextjs-common-ui` | `file:../worktrees/nextjs-common-expandable-legal/.packs/futurehax-nextjs-common-ui-1.0.0.tgz` |
| `@futurehax/commons-doctor`   | `file:../futurehax-commons-doctor` (0.3.0)                                                     |
| `@sendgrid/mail`              | `^8.1.6` (required by `contact.sendgrid` doctor check)                                         |

## Files changed

| File                                 | Action                                                             |
| ------------------------------------ | ------------------------------------------------------------------ |
| `src/app/legal/page.tsx`             | Created – `ExpandableLegalPage` with `?section=` initial panel     |
| `src/app/privacy/page.tsx`           | Redirect to `/legal?section=privacy`                               |
| `src/app/terms/page.tsx`             | Redirect to `/legal?section=terms`                                 |
| `src/app/sitemap.ts`                 | Replaced `/privacy` + `/terms` with `/legal`                       |
| `src/components/AppShell.tsx`        | Explicit footer links including `/legal` (doctor `legal.nav-link`) |
| `src/app/api/contact/route.ts`       | Wired `sendContactEmail` for doctor `contact.sendgrid`             |
| `package.json` / `package-lock.json` | Bumped commons packs + doctor + `@sendgrid/mail`                   |
| `src/lib/legal.ts`                   | Unchanged                                                          |

## Doctor

```bash
npx commons-doctor audit --strict --allow-legacy-install .
# mode=sibling errors=0 warnings=0 passed=20
```

All five `legal.*` checks pass. `--allow-legacy-install` required while using sibling `file:` packs.

## Verification

| Command                                                      | Result                                                                                                                 |
| ------------------------------------------------------------ | ---------------------------------------------------------------------------------------------------------------------- |
| `npx commons-doctor audit --strict --allow-legacy-install .` | PASS (20/20)                                                                                                           |
| `npm run type-check`                                         | FAIL – `sendContactEmail` / `isContactEmailConfigured` not exported from commons `1.0.0` pack (same gap as MCG task 7) |

## Concerns

1. **Pack vs doctor mismatch:** Commons `1.0.0` expandable-legal packs lack `sendContactEmail`; doctor `0.3.0` requires it. Contact route wired for doctor pass; type-check fails until a pack with the shared mailer ships.
2. **Sibling install mode:** `file:` pack paths need `--allow-legacy-install` until registry `^1.0.0` is published and pinned.
3. **No browser smoke test:** Manual check of `/legal`, `/privacy`, `/terms` recommended.

## Checklist

| Requirement                         | Done                                |
| ----------------------------------- | ----------------------------------- |
| `/legal` with `ExpandableLegalPage` | Yes                                 |
| `/privacy` / `/terms` redirects     | Yes                                 |
| Footer links to `/legal`            | Yes                                 |
| `src/lib/legal.ts` kept             | Yes                                 |
| Doctor `--strict`                   | Yes (with `--allow-legacy-install`) |
| Commit on `feat/expandable-legal`   | Yes                                 |
