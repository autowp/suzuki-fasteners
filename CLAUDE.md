# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## What this is

A single-page Angular 21 app that publishes a searchable/sortable registry of Suzuki
fastener part numbers. Deployed to GitHub Pages as a static, localized (en/ru) site:
<https://autowp.github.io/suzuki-fasteners/>. There is no backend — the entire dataset
lives in `src/app/data.ts`.

## Commands

```bash
npm start                                 # ng serve, dev server on :4200 (English)
ng serve --configuration ru               # dev server in Russian
npm run build                             # production build, emits dist/en and dist/ru
npm run lint                              # ESLint + Prettier (also lints HTML templates)
ng deploy --base-href=/suzuki-fasteners/  # publish dist to the gh-pages branch
ng extract-i18n --output-path src/locale  # regenerate src/locale/messages.xlf
```

No test runner is configured (no `tsconfig.spec.json`, no `test` target). Don't add
`.spec.ts` files expecting them to run.

## Architecture

- **`src/app/data.ts`** is the point of the project. It exports the `Item` interface,
  the `FastenerType` enum, the localized `fastenerTypeName` lookup, and `data: Item[]`
  — the full list of fasteners. Almost every commit is an edit to this file. Only `code`
  is required on an `Item`; everything else is optional. Superseded part numbers use
  `replacements: string[]` to point at the current variant(s) (often `…A` / `…B` suffixes
  that differ only by `color`).
- **`src/app/app.ts` + `app.html` + `app.css`** — one standalone root component `App`,
  no child components. `app.routes.ts` is intentionally empty; the Router exists only to
  hold UI state in query params: `s` (search) and `sort` (e.g. `code_asc`, `type_desc`).
- **Reactive pipeline** in `app.ts`: `search$` / `sort$` derive from `queryParamMap`;
  `data$` filters `data` by code then sorts. Search matching runs both sides through
  `stripCode()` (removes whitespace/`_`/`-`, lowercases) so `09125-08015` and
  `0912508015` match. Sorting is via the generic `compareValues()` helper.
- **Photos**: `public/photo/*.webp`, referenced by bare filename in `Item.photo`.
  `public/` is copied to the output root, so the template loads them from `photo/…`.
- Styling is Bootstrap 5 + `@ng-bootstrap/ng-bootstrap` + bootstrap-icons, pulled in via
  `angular.json` `styles`. The `.decryption` block in `app.html` is a hand-maintained,
  partly-guessed legend for how Suzuki part-number segments encode head type / thread /
  length / finish.

## i18n

Source locale is `en`; Russian lives in `src/locale/messages.ru.xlf`. The build sets
`i18nMissingTranslation: "error"`, so any new `i18n` attribute or `$localize` string
**will fail the production build until it has a `<target>` in `messages.ru.xlf`**.
Workflow: add the marked string → `ng extract-i18n --output-path src/locale` → copy the
new `<trans-unit>` into `messages.ru.xlf` and fill in `<target>`.

## Conventions

- Commit messages: `feat: <part-number>[, <part-number>…]` when adding/updating entries,
  `fix: <part-number>` for corrections, `feat: bump dependencies` for dependency bumps.
- Prettier (config in `package.json`): 100-col, single quotes, Angular parser for HTML.
  Enforced through ESLint — run `npm run lint` before committing.
- TypeScript is strict with extras (`noPropertyAccessFromIndexSignature`,
  `noImplicitOverride`, `noImplicitReturns`); templates are strict too. Component code
  uses native private fields (`#route`, `#router`) and `inject()`.
