/**
 * NavBarStyles.ts
 * -----------------------------------------------------------------------------
 * Styled parts for <NavBar>.
 *
 *  - Bar     : sticky, frosted (blur + translucent bar colour), space-between
 *  - Brand   : 24px bold wordmark slot (gradient comes from <GradientText>)
 *  - Nav     : right-side link row; wraps and shrinks on small screens
 *  - Link    : slate-400, 14px, uppercase; emerald on hover/focus
 */

import styled from '@emotion/styled';
import { color, font, layout, media, space, surface, text } from '../../theme/tokens';

/** Full-bleed frosted band; pins to the top of the viewport. */
export const Bar = styled.header`
  position: sticky;
  top: 0;
  z-index: 100;

  width: 100%;
  background: ${surface.bar};
  backdrop-filter: blur(2px);
  -webkit-backdrop-filter: blur(2px);
  border-bottom: 1px solid rgba(52, 211, 153, 0.08);
`;

/** Inner row, constrained to the shared page width. */
export const Inner = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-between;
  gap: ${space[8]} ${space[16]};

  max-width: ${layout.maxWidth}px;
  margin: 0 auto;
  padding: ${space[16]} ${space[24]};

  ${media.md} {
    flex-wrap: nowrap;
    padding-inline: ${space[40]};
  }
`;

export const Brand = styled.a`
  font-size: 24px;
  font-weight: ${font.weight.bold};
  line-height: 1;
  white-space: nowrap;
`;

export const Nav = styled.nav`
  display: flex;
  flex-wrap: wrap;
  gap: 12px 14px;

  ${media.sm} {
    gap: ${space[24]};
  }
`;

export const Link = styled.a`
  color: ${text.subtle};
  font-size: 12px;
  font-weight: ${font.weight.medium};
  text-transform: uppercase;
  letter-spacing: 0.03em;
  transition: color 0.15s ease;

  &:hover,
  &:focus-visible {
    color: ${color.emerald400};
  }

  ${media.sm} {
    font-size: 14px;
  }
`;
