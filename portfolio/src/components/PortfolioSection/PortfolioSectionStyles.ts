/**
 * PortfolioSectionStyles.ts
 * -----------------------------------------------------------------------------
 * Styled parts for <PortfolioSection>.
 *
 *  - Layout : vertical stack – heading then grid, 40px gap (matches Figma)
 *  - Grid   : 1 column on mobile → 2 columns from `md`, 40px gutter
 */

import styled from '@emotion/styled';
import { media, space } from '../../theme/tokens';

export const Layout = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: ${space[40]};
`;

export const Grid = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: ${space[40]};
  width: 100%;

  ${media.md} {
    grid-template-columns: repeat(2, 1fr);
  }
`;
