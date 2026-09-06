/**
 * tokens.ts
 * -----------------------------------------------------------------------------
 * Single source of truth for every design value used across the portfolio.
 *
 * The values here were lifted directly from the Figma file's published
 * variables ("Emerald 400", "Text/Slate 400", "Secondary/Surface Cards", ...)
 * so the UI stays 1:1 with the design. Components never hard-code a hex value –
 * they import from this file, which means a palette change happens in exactly
 * one place.
 *
 * Grouping:
 *   - color      : raw brand / neutral colours
 *   - surface    : background fills for pages, cards and the frosted bars
 *   - border     : stroke colours (already includes the design's low opacity)
 *   - text       : foreground colours by emphasis
 *   - gradient   : the emerald→green→teal brand gradient (used for headings)
 *   - font       : family + numeric weight scale
 *   - radius     : corner radii
 *   - space      : 4px-based spacing scale
 *   - layout     : shared max width + horizontal gutter
 *   - breakpoint : min-width values for media queries (see `media` helper)
 */

/** Raw palette – named exactly like the Figma variables they come from. */
export const color = {
  emerald400: '#34D399',
  emerald500: '#10B981',
  green400: '#4ADE80',
  teal500: '#14B8A6',
  slate100: '#F1F5F9',
  slate300: '#CBD5E1',
  slate400: '#94A3B8',
  slate800: '#1E293B',
  structural: '#064E3B', // "Border/Structural Border"
} as const;

/** Background fills. */
export const surface = {
  /** Page background – "Background/Background". */
  page: '#020D0A',
  /** Slightly lifted panel background – "Secondary/Surface Cards". */
  raised: '#051511',
  /** Translucent emerald glass used by cards, tags and job entries. */
  glass: 'rgba(6, 78, 59, 0.2)',
  /** Frosted bar background for the sticky header / footer. */
  bar: 'rgba(2, 13, 10, 0.8)',
} as const;

/** Stroke colours – opacity is baked in to match the design exactly. */
export const border = {
  /** Hairline emerald outline on cards / panels. */
  subtle: 'rgba(52, 211, 153, 0.1)',
  /** Stronger emerald outline used by pill tags. */
  interactive: 'rgba(16, 185, 129, 0.5)',
  /** Dark structural outline used by the secondary button. */
  structural: 'rgba(6, 78, 59, 0.2)',
} as const;

/** Foreground colours by emphasis. */
export const text = {
  /** Highest contrast – headings and primary copy. */
  strong: color.slate100,
  /** Body copy inside cards. */
  muted: color.slate300,
  /** Secondary / supporting copy and nav links. */
  subtle: color.slate400,
  /** Brand accent – eyebrows, links, list markers. */
  accent: color.emerald400,
} as const;

/** The brand gradient. `text` is tuned for `background-clip: text` headings. */
export const gradient = {
  brand: `linear-gradient(90deg, ${color.emerald400} 0%, ${color.green400} 50%, ${color.teal500} 100%)`,
  /** Soft glow placed behind the hero image. */
  glow: `linear-gradient(90deg, rgba(5, 150, 105, 0.1) 0%, rgba(20, 184, 166, 0.1) 100%)`,
} as const;

/** Typography. The design uses Inter across the board. */
export const font = {
  family: `'Inter', system-ui, -apple-system, 'Segoe UI', Roboto, sans-serif`,
  weight: {
    regular: 400,
    medium: 500,
    semibold: 600,
    bold: 700,
    extrabold: 800,
  },
} as const;

/** Corner radii (px). `pill` is intentionally huge so it always fully rounds. */
export const radius = {
  sm: 2,
  md: 15,
  pill: 100,
} as const;

/**
 * 4px spacing scale. Keys are the pixel value so call sites read naturally:
 * `space[24]` → `24px`.
 */
export const space = {
  2: '2px',
  4: '4px',
  8: '8px',
  10: '10px',
  16: '16px',
  18: '18px',
  22: '22px',
  24: '24px',
  32: '32px',
  40: '40px',
  48: '48px',
  64: '64px',
} as const;

/** Shared page layout constraints. */
export const layout = {
  /** Matches the Figma frame width (1163px). */
  maxWidth: 1160,
  /** Horizontal page gutter on small viewports. */
  gutter: 24,
} as const;

/** Responsive breakpoints (min-width, px). Consume through the `media` helper. */
export const breakpoint = {
  sm: 640,
  md: 900,
  lg: 1200,
} as const;

/**
 * Media-query helper.
 *
 * @example
 *   ${media.md} { flex-direction: row; }
 *   // -> @media (min-width: 900px) { ... }
 */
export const media = {
  sm: `@media (min-width: ${breakpoint.sm}px)`,
  md: `@media (min-width: ${breakpoint.md}px)`,
  lg: `@media (min-width: ${breakpoint.lg}px)`,
  /** "up to" queries for the rare max-width case. */
  belowMd: `@media (max-width: ${breakpoint.md - 1}px)`,
} as const;

/** Convenience bundle so a component can `import { tokens }` in one line. */
export const tokens = {
  color,
  surface,
  border,
  text,
  gradient,
  font,
  radius,
  space,
  layout,
  breakpoint,
  media,
} as const;

export type Tokens = typeof tokens;
