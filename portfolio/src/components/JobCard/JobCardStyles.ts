/**
 * JobCardStyles.ts
 * -----------------------------------------------------------------------------
 * Styled parts for <JobCard>. Values from the Figma "Job" component.
 *
 *  - Card       : emerald-glass panel, hairline border, 16px padding, 16px gap
 *  - Header     : title/status on the left, date <Tag> on the right
 *  - TitleGroup : stacked title + status, 4px gap
 *  - Title      : slate-100, 20px, bold
 *  - Status     : emerald-400, 16px, bold
 *  - List       : bullet list, 8px gap
 *  - Item       : emerald marker + slate-100 12px text
 */

import styled from '@emotion/styled';
import { border, color, font, radius, space, surface, text } from '../../theme/tokens';

export const Card = styled.article`
  display: flex;
  flex-direction: column;
  gap: ${space[16]};
  padding: ${space[16]};
  border: 1px solid ${border.subtle};
  border-top-width: 3px;
  border-radius: ${radius.md}px;
  background: ${surface.glass};
`;

export const Header = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  gap: ${space[16]};
`;

export const TitleGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${space[4]};
`;

export const Title = styled.h3`
  margin: 0;
  color: ${text.strong};
  font-family: ${font.family};
  font-size: 20px;
  font-weight: ${font.weight.bold};
`;

export const Status = styled.p`
  margin: 0;
  color: ${color.emerald400};
  font-size: 16px;
  font-weight: ${font.weight.bold};
`;

export const List = styled.ul`
  display: flex;
  flex-direction: column;
  gap: ${space[8]};
  margin: 0;
  padding: 0;
  list-style: none;
`;

export const Item = styled.li`
  position: relative;
  padding-left: 18px;
  color: ${text.strong};
  font-size: 12px;
  font-weight: ${font.weight.semibold};
  line-height: 1.5;

  /* Custom emerald bullet so the marker colour matches the design. */
  &::before {
    content: '';
    position: absolute;
    left: 4px;
    top: 0.5em;
    width: 4px;
    height: 4px;
    border-radius: 50%;
    background: ${color.emerald400};
  }
`;
