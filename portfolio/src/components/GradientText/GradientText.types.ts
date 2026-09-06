/**
 * GradientText.types.ts
 * -----------------------------------------------------------------------------
 * Types for <GradientText> – text painted with the emerald→green→teal brand
 * gradient via `background-clip: text`.
 *
 * Used for the wordmark ("Gabriel.Bartholomay") and for the highlighted word
 * inside the hero heading ("experiences").
 */

import type { ElementType, ReactNode } from 'react';

export interface GradientTextProps {
  /** The text (or nodes) to paint with the gradient. */
  children: ReactNode;
  /**
   * Which HTML element to render. Lets the same visual be a `<span>` inside a
   * heading, or a block-level `<h1>` on its own.
   * @default 'span'
   */
  as?: ElementType;
  /** Escape hatch for one-off layout tweaks from a parent styled component. */
  className?: string;
}
