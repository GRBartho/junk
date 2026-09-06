/**
 * Tag.types.ts
 * -----------------------------------------------------------------------------
 * Types for <Tag> – the small emerald pill used for tech labels on project
 * cards ("React", "Next.js", ...) and for the date range on job entries
 * ("2022 - 2023").
 */

import type { ReactNode } from 'react';

export interface TagProps {
  /** Pill contents – usually a short word or a date range. */
  children: ReactNode;
  /** Layout escape hatch from a parent styled component. */
  className?: string;
}
