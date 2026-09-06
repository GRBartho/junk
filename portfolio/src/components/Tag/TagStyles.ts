/**
 * TagStyles.ts
 * -----------------------------------------------------------------------------
 * The single styled pill behind <Tag>. Values come straight from the Figma
 * "Card Tag" component (emerald glass fill, 0.5-opacity emerald border, 15px
 * radius, 4/8 padding, 12px semibold emerald text).
 */

import styled from '@emotion/styled';
import { border, radius, space, text, font } from '../../theme/tokens';

export const Pill = styled.span`
  display: inline-flex;
  align-items: center;
  justify-content: center;

  padding: ${space[4]} ${space[8]};
  border: 1px solid ${border.interactive};
  border-radius: ${radius.md}px;
  background: rgba(6, 78, 59, 0.2);

  color: ${text.accent};
  font-family: ${font.family};
  font-size: 12px;
  font-weight: ${font.weight.semibold};
  line-height: 1.2;
  white-space: nowrap;
`;
