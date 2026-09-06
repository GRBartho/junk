/**
 * SkillBarStyles.ts
 * -----------------------------------------------------------------------------
 * Styled parts for <SkillBar>.
 *
 * Layout is a 2-column grid: a fixed-width right-aligned label, then the bar.
 * The label cell carries a right border – when rows are stacked those borders
 * line up into the single vertical divider seen in the design.
 *
 *  - Row      : the grid row, 32px tall
 *  - LabelCell: right-aligned 12px slate label + the divider border
 *  - Track    : full-width faint groove
 *  - Fill     : emerald/teal bar, width = `value%`, animates in
 */

import styled from '@emotion/styled';
import { border, color, font, text } from '../../theme/tokens';

export const Row = styled.div`
  display: grid;
  grid-template-columns: 96px 1fr;
  align-items: center;
  column-gap: 12px;
  height: 32px;
`;

export const LabelCell = styled.span`
  justify-self: end;
  padding-right: 12px;
  border-right: 1px solid ${border.subtle};
  align-self: stretch;
  display: flex;
  align-items: center;

  color: ${text.subtle};
  font-family: ${font.family};
  font-size: 12px;
  line-height: 14px;
  white-space: nowrap;
`;

export const Track = styled.div`
  height: 24px;
  border-radius: 0 2px 2px 0;
  /* Very faint groove so an empty portion still reads as "a bar". */
  background: rgba(52, 211, 153, 0.04);
  overflow: hidden;
`;

export const Fill = styled.div<{ $value: number; $color: 'emerald' | 'teal' }>`
  height: 100%;
  width: ${({ $value }) => Math.min(100, Math.max(0, $value))}%;
  border-radius: 0 2px 2px 0;
  background: ${({ $color }) => ($color === 'teal' ? color.teal500 : color.emerald400)};
  transition: width 0.6s cubic-bezier(0.22, 1, 0.36, 1);

  /* Respect users who prefer no motion. */
  @media (prefers-reduced-motion: reduce) {
    transition: none;
  }
`;
