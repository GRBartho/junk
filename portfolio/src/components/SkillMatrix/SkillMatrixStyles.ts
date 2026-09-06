/**
 * SkillMatrixStyles.ts
 * -----------------------------------------------------------------------------
 * The single styled panel behind <SkillMatrix>: emerald-glass fill, hairline
 * emerald border, 15px radius, 24/32 padding – matching the Figma
 * "Percentages" frame. The <SkillBar> rows provide their own internal rhythm.
 */

import styled from '@emotion/styled';
import { border, radius, space, surface } from '../../theme/tokens';

export const Panel = styled.div`
  display: flex;
  flex-direction: column;
  padding: ${space[24]} ${space[32]};
  border: 1px solid ${border.subtle};
  border-radius: ${radius.md}px;
  background: ${surface.glass};
`;
