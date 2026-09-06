/**
 * Icon.tsx
 * -----------------------------------------------------------------------------
 * The portfolio's single icon component. Renders one inline SVG from a small
 * fixed set (see `IconName`). Icons inherit colour from `currentColor` so you
 * style them by setting `color` on the parent.
 *
 * Usage:
 *   <Icon name="github" size={24} title="GitHub" />   // meaningful icon
 *   <Icon name="externalLink" />                        // decorative icon
 */

import type { ReactNode } from 'react';
import { Svg } from './IconStyles';
import type { IconName, IconProps } from './Icon.types';

/**
 * Path data for every glyph, drawn on a 24×24 grid.
 *
 * `stroke` glyphs are outline icons that use the shared stroke attributes on
 * the <svg>; `fill` glyphs (email, linkedin, check) paint solid shapes.
 */
const GLYPHS: Record<IconName, { kind: 'stroke' | 'fill'; content: ReactNode }> = {
  // Arrow breaking out of a framed box – "open in new tab".
  externalLink: {
    kind: 'stroke',
    content: (
      <>
        <path d="M15 3h6v6" />
        <path d="M10 14 21 3" />
        <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
      </>
    ),
  },

  // GitHub Octocat mark, outline style.
  github: {
    kind: 'stroke',
    content: (
      <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 21.13V25" />
    ),
  },

  // Envelope.
  email: {
    kind: 'fill',
    content: (
      <path d="M2 6a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V6Zm2.4.2 7.6 5.3 7.6-5.3A.6.6 0 0 0 19.4 6H4.6a.6.6 0 0 0-.2.2Z" />
    ),
  },

  // LinkedIn "in".
  linkedin: {
    kind: 'fill',
    content: (
      <path d="M6.94 5A1.94 1.94 0 1 1 3.06 5a1.94 1.94 0 0 1 3.88 0ZM3.4 8.4h3.9V21H3.4V8.4Zm6.15 0h3.74v1.72h.05a4.1 4.1 0 0 1 3.7-2c3.95 0 4.68 2.6 4.68 5.98V21h-3.9v-5.6c0-1.34-.02-3.06-1.86-3.06-1.87 0-2.15 1.46-2.15 2.96V21H9.55V8.4Z" />
    ),
  },

  // Filled circle with a tick – always emerald, drawn as two layers below.
  check: {
    kind: 'fill',
    content: (
      <>
        <circle cx="12" cy="12" r="12" fill="currentColor" />
        <path
          d="m7 12.5 3 3 7-7.5"
          fill="none"
          stroke="#051511"
          strokeWidth="2.4"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </>
    ),
  },
};

export function Icon({ name, size = 20, title, ...rest }: IconProps) {
  const glyph = GLYPHS[name];

  // Accessibility: a titled icon is announced as an image; an untitled one is
  // decorative and removed from the accessibility tree entirely.
  const a11y = title
    ? ({ role: 'img', 'aria-label': title } as const)
    : ({ 'aria-hidden': true, focusable: false } as const);

  return (
    <Svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      // Outline glyphs share these; fill glyphs override locally.
      fill={glyph.kind === 'fill' ? 'currentColor' : 'none'}
      stroke={glyph.kind === 'stroke' ? 'currentColor' : undefined}
      strokeWidth={glyph.kind === 'stroke' ? 2 : undefined}
      strokeLinecap="round"
      strokeLinejoin="round"
      {...a11y}
      {...rest}
    >
      {title ? <title>{title}</title> : null}
      {glyph.content}
    </Svg>
  );
}

export default Icon;

// Re-export types so callers can `import { Icon, type IconName } from '.../Icon'`.
export type { IconName, IconProps } from './Icon.types';
