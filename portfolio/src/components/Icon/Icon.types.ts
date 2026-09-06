/**
 * Icon.types.ts
 * -----------------------------------------------------------------------------
 * Types for <Icon>, the project's single inline-SVG icon set.
 *
 * The Figma design ships its icons as small raster PNGs. We redraw them as
 * crisp, theme-aware vectors here so they scale to any size and inherit
 * `currentColor` from their parent.
 */

import type { SVGProps } from 'react';

/**
 * Every glyph the portfolio uses. Add a new key here and a matching entry in
 * `GLYPHS` (Icon.tsx) to extend the set.
 *
 *  - `check`         filled circle + tick, used by the skills checklist
 *  - `externalLink`  arrow-out-of-box, used by "Live Demo" links
 *  - `github`        GitHub mark (outline), used in card footers & site footer
 *  - `email`         envelope, used by the contact button & footer
 *  - `linkedin`      LinkedIn glyph, used by the contact button & footer
 */
export type IconName = 'check' | 'externalLink' | 'github' | 'email' | 'linkedin';

export interface IconProps extends Omit<SVGProps<SVGSVGElement>, 'name'> {
  /** Which glyph to render. */
  name: IconName;
  /**
   * Rendered width & height in pixels (icons are always square).
   * @default 20
   */
  size?: number;
  /**
   * Accessible label. When provided the SVG is exposed to assistive tech with
   * `role="img"`; when omitted the icon is treated as decorative and hidden.
   */
  title?: string;
}
