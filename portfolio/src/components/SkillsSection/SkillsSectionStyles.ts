/**
 * SkillsSectionStyles.ts
 * -----------------------------------------------------------------------------
 * Styled parts for <SkillsSection>. Values from the Figma "Technical Arsenal".
 *
 *  - Layout    : column on mobile → row (copy | chart) from `md`, 64px gap
 *  - Copy      : left column, capped at 478px, 22px vertical rhythm
 *  - CheckGrid : 2-column grid of <CheckItem>s, 24px row / 40px column gap
 *  - ChartCol  : right column; the <SkillMatrix> grows to fill it
 */

import styled from '@emotion/styled';
import { media, space } from '../../theme/tokens';

export const Layout = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${space[48]};

  ${media.md} {
    flex-direction: row;
    align-items: center;
    gap: ${space[64]};
  }
`;

export const Copy = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${space[22]};
  flex: 1 1 0;
  min-width: 0;

  ${media.md} {
    max-width: 478px;
  }
`;

export const CheckGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, minmax(0, max-content));
  gap: ${space[24]} ${space[40]};
`;

export const ChartCol = styled.div`
  flex: 1 1 0;
  min-width: 0;

  ${media.md} {
    max-width: 460px;
  }
`;
