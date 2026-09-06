/**
 * GradientText.tsx
 * -----------------------------------------------------------------------------
 * Renders its children with the brand gradient clipped to the text.
 *
 * It is polymorphic: pass `as="h1"` (or any element/component) to change the
 * rendered tag without losing the gradient treatment.
 *
 *   <GradientText>Gabriel.Bartholomay</GradientText>
 *   <h1>Building digital <GradientText>experiences</GradientText> that matter.</h1>
 */

import { GradientSpan } from './GradientTextStyles';
import type { GradientTextProps } from './GradientText.types';

export function GradientText({ children, as = 'span', className }: GradientTextProps) {
  // Emotion's `as` prop swaps the underlying element while keeping the styles.
  return (
    <GradientSpan as={as} className={className}>
      {children}
    </GradientSpan>
  );
}

export default GradientText;

export type { GradientTextProps } from './GradientText.types';
