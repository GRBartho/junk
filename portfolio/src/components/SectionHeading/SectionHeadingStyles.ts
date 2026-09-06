/**
 * SectionHeadingStyles.ts
 * -----------------------------------------------------------------------------
 * Styled parts for <SectionHeading>.
 *
 *  - Root     : vertical stack; `$align` flips alignment between center/left
 *  - Eyebrow  : emerald, 16px, uppercase kicker
 *  - Title    : slate-100, 36px, bold (28px on small screens)
 *  - Subtitle : slate-400, 12px, capped at 478px like the design
 */

import styled from '@emotion/styled';
import { font, media, text } from '../../theme/tokens';

export const Root = styled.div<{ $align: 'center' | 'left' }>`
  display: flex;
  flex-direction: column;
  gap: 8px;
  align-items: ${({ $align }) => ($align === 'center' ? 'center' : 'flex-start')};
  text-align: ${({ $align }) => $align};
`;

export const Eyebrow = styled.p`
  margin: 0;
  color: ${text.accent};
  font-size: 16px;
  font-weight: ${font.weight.semibold};
  text-transform: uppercase;
  letter-spacing: 0.04em;
`;

export const Title = styled.h2`
  margin: 0;
  color: ${text.strong};
  font-size: 28px;
  font-weight: ${font.weight.bold};
  line-height: 1.15;

  ${media.md} {
    font-size: 36px;
  }
`;

export const Subtitle = styled.p`
  margin: 0;
  max-width: 478px;
  color: ${text.subtle};
  font-size: 12px;
  font-weight: ${font.weight.semibold};
  line-height: 1.5;
`;
