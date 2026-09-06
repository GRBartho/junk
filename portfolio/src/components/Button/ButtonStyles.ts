/**
 * ButtonStyles.ts
 * -----------------------------------------------------------------------------
 * Styled shell for <Button>.
 *
 * A single `Root` styled component covers both the `<button>` and `<a>`
 * renderings (Emotion's `as` prop switches the tag). The `$variant` transient
 * prop selects the fill + border pair straight from the design tokens.
 *
 * Naming: the `$` prefix marks a prop that must NOT be forwarded to the DOM.
 */

import styled from '@emotion/styled';
import { border, color, font, radius, space, text } from '../../theme/tokens';
import type { ButtonVariant } from './Button.types';

/** Fill + border per variant, mirroring the Figma "Button" component set. */
const VARIANTS: Record<ButtonVariant, { background: string; borderColor: string }> = {
  primary: { background: color.emerald500, borderColor: border.subtle },
  secondary: { background: color.slate800, borderColor: border.structural },
};

export const Root = styled.button<{ $variant: ButtonVariant }>`
  /* Layout: icon + label on one line, centred. */
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: ${space[10]};

  padding: ${space[16]};
  border-radius: ${radius.pill}px;
  border: 1px solid ${({ $variant }) => VARIANTS[$variant].borderColor};
  background: ${({ $variant }) => VARIANTS[$variant].background};

  color: ${text.strong};
  font-family: ${font.family};
  font-size: 16px;
  font-weight: ${font.weight.bold};
  line-height: 1;
  white-space: nowrap;
  text-decoration: none;

  cursor: pointer;
  transition:
    transform 0.15s ease,
    filter 0.15s ease,
    box-shadow 0.15s ease;

  &:hover {
    /* Lift slightly and brighten – works for both fills. */
    transform: translateY(-1px);
    filter: brightness(1.08);
    box-shadow: 0 8px 20px -8px rgba(16, 185, 129, 0.45);
  }

  &:active {
    transform: translateY(0);
    filter: brightness(0.96);
  }

  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
    transform: none;
    filter: none;
    box-shadow: none;
  }
`;
