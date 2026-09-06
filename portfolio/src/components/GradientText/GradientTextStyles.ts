/**
 * GradientTextStyles.ts
 * -----------------------------------------------------------------------------
 * The one styled element behind <GradientText>.
 *
 * Technique: set the brand gradient as the background, clip it to the shape of
 * the glyphs (`background-clip: text`) and make the actual text transparent so
 * the gradient shows through. `inline` keeps it flowing inside a heading.
 */

import styled from '@emotion/styled';
import { gradient } from '../../theme/tokens';

export const GradientSpan = styled.span`
  display: inline;
  background-image: ${gradient.brand};
  background-clip: text;
  -webkit-background-clip: text;
  color: transparent;
  -webkit-text-fill-color: transparent;
  /* Inherit weight/size/line-height from whatever context it sits in. */
  font: inherit;
  letter-spacing: inherit;
`;
