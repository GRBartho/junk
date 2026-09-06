/**
 * ContactCTAStyles.ts
 * -----------------------------------------------------------------------------
 * Styled parts for <ContactCTA>. Values from the Figma "Job" (contact) frame:
 * emerald-glass card, thicker emerald top border, 15px radius, centered text.
 *
 *  - Card     : centered, max 633px, emerald-glass, accent top border
 *  - Title    : slate-100, 28px → 36px, bold
 *  - Subtitle : slate-400, 12px
 *  - Actions  : 16px-gap button row, centered, wraps on small screens
 */

import styled from '@emotion/styled';
import { border, color, font, media, radius, space, surface, text } from '../../theme/tokens';

export const Card = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: ${space[16]};

  max-width: 633px;
  margin: 0 auto;
  padding: ${space[40]} ${space[24]};
  text-align: center;

  background: ${surface.glass};
  border: 1px solid ${border.subtle};
  border-top: 3px solid ${color.emerald500};
  border-radius: ${radius.md}px;
`;

export const Title = styled.h2`
  margin: 0;
  color: ${text.strong};
  font-family: ${font.family};
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
`;

export const Actions = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: ${space[16]};
  margin-top: ${space[8]};
`;
