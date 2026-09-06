/**
 * CheckItemStyles.ts
 * -----------------------------------------------------------------------------
 * Styled parts for <CheckItem>.
 *
 *  - Row       : icon + label on one line, 8px gap (matches Figma "Check Mark")
 *  - IconSlot  : forces the emerald accent onto the check glyph via colour
 *  - Label     : slate-300, 12px
 */

import styled from '@emotion/styled';
import { color, font, text } from '../../theme/tokens';

export const Row = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
`;

/** The check icon paints with `currentColor`; pin that to emerald here. */
export const IconSlot = styled.span`
  display: inline-flex;
  color: ${color.emerald400};
`;

export const Label = styled.span`
  color: ${text.muted};
  font-family: ${font.family};
  font-size: 12px;
  font-weight: ${font.weight.regular};
  white-space: nowrap;
`;
