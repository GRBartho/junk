# Gabriel Bartholomay — Portfolio

A single-page developer portfolio built from a Figma design with **React 19 + Vite +
TypeScript**, styled with **Emotion**, and documented in **Storybook**.

## Scripts

| Command                  | What it does                                        |
| ------------------------ | -------------------------------------------------- |
| `npm run dev`            | Vite dev server (the site)                          |
| `npm run build`          | Type-check (`tsc -b`) then production build         |
| `npm run preview`        | Serve the production build locally                  |
| `npm run storybook`      | Storybook dev server on port 6006                   |
| `npm run build-storybook`| Static Storybook build                             |
| `npm run lint`           | ESLint                                              |

## Project layout

```
src/
  theme/
    tokens.ts          Design tokens (colours, spacing, type…) — lifted from the
                       Figma variables. The single source of truth.
    GlobalStyles.tsx   Inter font, reset, dark page background (Emotion <Global>).
  content/
    site.ts            All page copy & data in one editable place.
  components/
    <Name>/            One folder per component, four files each (see below).
    index.ts           Barrel export for the whole library.
  App.tsx              Assembles the sections into the page. Deliberately thin.
  main.tsx             React entry point.
```

## Component convention

Every custom component lives in its own folder with **four files**:

| File                 | Purpose                                                              |
| -------------------- | ------------------------------------------------------------------- |
| `<Name>.tsx`         | The component. JSX + behaviour only — no inline styles.             |
| `<Name>Styles.ts`    | Emotion `styled` parts. All visual CSS lives here.                  |
| `<Name>.types.ts`    | Props and data types.                                              |
| `<Name>.stories.tsx` | Storybook stories.                                                 |

> Note on extensions: the component and stories files carry `.tsx` (not `.ts`)
> because they contain JSX, which TypeScript only allows in `.tsx` files. Styles
> and types are pure `.ts`.

### The library

**Primitives** — `Icon`, `GradientText`, `Button`, `Tag`, `SectionHeading`,
`Section`, `CheckItem`, `SkillBar`

**Composed** — `ProjectCard`, `JobCard`, `SkillMatrix`

**Page sections** — `NavBar`, `Hero`, `PortfolioSection`, `SkillsSection`,
`ExperienceSection`, `ContactCTA`, `SiteFooter`

Each has a Storybook entry under **Primitives / Components / Sections**.

## Editing content

Open `src/content/site.ts`. Everything the page shows — bio, projects, skills,
jobs, contact links — is a plain object there. `App.tsx` just wires those objects
into the section components. The résumé bullet points and skill percentages are
placeholders carried over from the design; swap them for real content.
