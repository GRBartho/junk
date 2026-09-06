/**
 * ExperienceSectionStyles.ts
 * -----------------------------------------------------------------------------
 * Styled parts for <ExperienceSection>.
 *
 *  - Layout : centered heading, then the job list, 40px gap
 *  - List   : vertical stack of <JobCard>s, 32px gap (matches Figma)
 */

import styled from '@emotion/styled';
import { space } from '../../theme/tokens';

export const Layout = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: ${space[40]};
`;

export const List = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${space[32]};
  width: 100%;
`;
