/**
 * HeroStyles.ts
 * -----------------------------------------------------------------------------
 * Styled parts for <Hero>. Values from the Figma "Hero Section".
 *
 *  - Root     : column on mobile → row (text | image) from `md`
 *  - Copy     : left column, 24px vertical rhythm
 *  - Eyebrow  : emerald, 16px, uppercase
 *  - Heading  : 36px → 48px, extrabold; highlighted word handled by <GradientText>
 *  - Bio      : slate-400, 18px, capped near the design's 515px
 *  - Ctas     : 16px-gap button row, wraps on very small screens
 *  - Figure   : image + soft gradient glow behind it
 *  - Glow     : blurred gradient rectangle, sits behind & slightly offset
 *  - Image    : rounded 15px cover, ~4:3.5 like the design
 */

import styled from '@emotion/styled';
import { font, gradient, media, radius, space, text } from '../../theme/tokens';

export const Root = styled.section`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: ${space[48]};
  padding: ${space[16]} 0;

  ${media.md} {
    flex-direction: row;
    align-items: center;
  }
`;

export const Copy = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${space[24]};
  flex: 1 1 0;
  min-width: 0;
`;

export const Eyebrow = styled.p`
  margin: 0;
  color: ${text.accent};
  font-size: 16px;
  font-weight: ${font.weight.semibold};
  text-transform: uppercase;
  letter-spacing: 0.04em;
`;

export const Heading = styled.h1`
  margin: 0;
  max-width: 16ch;
  color: ${text.strong};
  font-size: 36px;
  font-weight: ${font.weight.extrabold};
  line-height: 1.1;

  ${media.md} {
    font-size: 48px;
  }
`;

export const Bio = styled.p`
  margin: 0;
  max-width: 515px;
  color: ${text.subtle};
  font-size: 16px;
  font-weight: ${font.weight.semibold};
  line-height: 1.5;

  ${media.md} {
    font-size: 18px;
  }
`;

export const Ctas = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: ${space[16]};
`;

export const Figure = styled.div`
  position: relative;
  flex: 0 0 auto;
  width: 100%;
  max-width: 480px;

  ${media.md} {
    width: 480px;
  }
`;

export const Glow = styled.div`
  position: absolute;
  inset: -20px 40px 40px -20px;
  border-radius: ${radius.md}px;
  background: ${gradient.glow};
  filter: blur(25px);
  z-index: 0;
`;

export const Image = styled.img`
  position: relative;
  z-index: 1;
  width: 100%;
  aspect-ratio: 480 / 533;
  object-fit: cover;
  border-radius: ${radius.md}px;
`;
