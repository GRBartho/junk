/**
 * IconStyles.ts
 * -----------------------------------------------------------------------------
 * Styled primitive for <Icon>.
 *
 * There is almost nothing to style – an icon is a bare <svg> that should sit on
 * the text baseline and never shrink inside a flex row. Colour is deliberately
 * NOT set here: every glyph paints with `currentColor` (or its own hard-coded
 * accent, in the case of `check`) so the parent controls it.
 */

import styled from '@emotion/styled';

/** `<svg>` wrapper: fixed square, no flex shrink, aligned to the text. */
export const Svg = styled.svg`
  flex-shrink: 0;
  display: inline-block;
  vertical-align: middle;
`;
