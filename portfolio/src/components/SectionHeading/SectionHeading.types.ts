/**
 * SectionHeading.types.ts
 * -----------------------------------------------------------------------------
 * Types for <SectionHeading> – the repeated "eyebrow + title + blurb" block
 * that opens every section (Portfolio, Technical Arsenal, Work Experience).
 */

import type { ReactNode } from 'react';

export interface SectionHeadingProps {
  /** Small uppercase kicker above the title, e.g. "Portfolio". */
  eyebrow: string;
  /** The section title, e.g. "Selected works". */
  title: ReactNode;
  /** Optional supporting sentence under the title. */
  subtitle?: ReactNode;
  /**
   * Horizontal alignment of the block.
   *  - `center` : Portfolio & Work Experience headings
   *  - `left`   : Technical Arsenal heading
   * @default 'center'
   */
  align?: 'center' | 'left';
  /** Layout escape hatch. */
  className?: string;
}
