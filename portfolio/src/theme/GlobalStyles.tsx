/**
 * GlobalStyles.tsx
 * -----------------------------------------------------------------------------
 * App-wide base styles, rendered once near the root of the tree (and again by
 * the Storybook preview so components look identical in isolation).
 *
 * Responsibilities:
 *   - load the Inter web font
 *   - a tiny modern reset (box-sizing, margin, media defaults)
 *   - paint the dark page background and default text colour/'font
 *   - normalise links, lists and buttons so components start from zero
 *
 * Implementation: Emotion's <Global> so the CSS lives with the theme and picks
 * up the same tokens every component uses.
 */

import { Global, css } from '@emotion/react';
import { color, font, surface, text } from './tokens';

/** The actual CSS. Kept as a standalone const so tests can assert on it. */
const globalCss = css`
  /* Inter – the typeface used throughout the Figma design. */
  @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&display=swap');

  *,
  *::before,
  *::after {
    box-sizing: border-box;
  }

  html,
  body,
  #root {
    height: 100%;
  }

  body {
    margin: 0;
    background: ${surface.page};
    color: ${text.subtle};
    font-family: ${font.family};
    font-weight: ${font.weight.regular};
    line-height: 1.5;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-rendering: optimizeLegibility;
  }

  /* Components opt in to their own colours; start from a clean slate. */
  h1,
  h2,
  h3,
  h4,
  p {
    margin: 0;
  }

  a {
    color: inherit;
    text-decoration: none;
  }

  ul,
  ol {
    margin: 0;
    padding: 0;
    list-style: none;
  }

  button {
    font: inherit;
    color: inherit;
    background: none;
    border: none;
    padding: 0;
    cursor: pointer;
  }

  img {
    max-width: 100%;
    display: block;
  }

  /* Keyboard focus is always visible and on-brand. */
  :focus-visible {
    outline: 2px solid ${color.emerald400};
    outline-offset: 2px;
    border-radius: 2px;
  }

  ::selection {
    background: ${color.emerald400};
    color: ${surface.page};
  }
`;

/**
 * Drop `<GlobalStyles />` once at the top of the app (and in the Storybook
 * preview). It renders nothing visible – it only injects the CSS above.
 */
export function GlobalStyles() {
  return <Global styles={globalCss} />;
}

export default GlobalStyles;
