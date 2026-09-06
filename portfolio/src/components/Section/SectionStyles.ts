/**
 * SectionStyles.ts
 * -----------------------------------------------------------------------------
 * Styled parts for <Section>.
 *
 *  - Band      : the full-width `<section>`; carries the optional background and
 *                the vertical padding (`$spacing`)
 *  - Container : centered, max-width, horizontal gutter – every section's
 *                content lines up on the same grid
 */

import styled from '@emotion/styled';
import { layout, media, space } from '../../theme/tokens';

export const Band = styled.section<{ $spacing: 'normal' | 'loose' }>`
  width: 100%;
  padding-block: ${({ $spacing }) => ($spacing === 'loose' ? space[64] : space[48])};

  ${media.md} {
    padding-block: ${({ $spacing }) => ($spacing === 'loose' ? '96px' : space[64])};
  }
`;

export const Container = styled.div`
  max-width: ${layout.maxWidth}px;
  margin: 0 auto;
  padding-inline: ${layout.gutter}px;

  ${media.md} {
    padding-inline: ${space[40]};
  }
`;
