/**
 * SiteFooterStyles.ts
 * -----------------------------------------------------------------------------
 * Styled parts for <SiteFooter>. Values from the Figma "Footer".
 *
 *  - Bar     : frosted translucent band, space-between, wraps on small screens
 *  - Brand   : 24px bold wordmark slot (gradient from <GradientText>)
 *  - Tagline : slate-400, 12px
 *  - Social  : 28px-gap row of icon links
 *  - IconLink: 30px slate icon, emerald on hover/focus
 */

import styled from '@emotion/styled';
import { color, font, layout, media, space, surface, text } from '../../theme/tokens';

/** Full-bleed frosted band. */
export const Bar = styled.footer`
  width: 100%;
  background: ${surface.bar};
  backdrop-filter: blur(2px);
  -webkit-backdrop-filter: blur(2px);
  border-top: 1px solid rgba(52, 211, 153, 0.08);
`;

/** Inner row, constrained to the shared page width. */
export const Inner = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-between;
  gap: ${space[16]};

  max-width: ${layout.maxWidth}px;
  margin: 0 auto;
  padding: ${space[16]} ${space[24]};

  ${media.md} {
    padding-inline: ${space[40]};
  }
`;

export const TextGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2px;
`;

export const Brand = styled.span`
  font-size: 24px;
  font-weight: ${font.weight.bold};
  line-height: 1;
`;

export const Tagline = styled.span`
  color: ${text.subtle};
  font-size: 12px;
  font-weight: ${font.weight.semibold};
`;

export const Social = styled.div`
  display: flex;
  align-items: center;
  gap: ${space[24]};

  ${media.sm} {
    gap: 28px;
  }
`;

export const IconLink = styled.a`
  display: inline-flex;
  color: ${text.subtle};
  transition:
    color 0.15s ease,
    transform 0.15s ease;

  &:hover,
  &:focus-visible {
    color: ${color.emerald400};
    transform: translateY(-2px);
  }
`;
