/**
 * Section.types.ts
 * -----------------------------------------------------------------------------
 * Types for <Section> – the shared page-section wrapper. It provides the
 * anchor id, consistent vertical padding, and a centered max-width container,
 * and optionally paints a full-bleed background colour (used by the Skills
 * section, which sits on the raised surface colour).
 */

import type { ReactNode } from 'react';

export interface SectionProps {
  /** Anchor id for in-page navigation (e.g. "projects"). */
  id?: string;
  /** Section content. */
  children: ReactNode;
  /**
   * Optional full-bleed background colour. The coloured band spans the whole
   * viewport width while the content stays within the page container.
   */
  background?: string;
  /**
   * Vertical padding size.
   *  - `normal` : default rhythm between sections
   *  - `loose`  : extra breathing room (used by the Skills band)
   * @default 'normal'
   */
  spacing?: 'normal' | 'loose';
  /** Accessible label, when the section has no visible heading of its own. */
  ariaLabel?: string;
  /** Layout escape hatch. */
  className?: string;
}
