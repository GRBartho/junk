/**
 * SkillsSection.types.ts
 * -----------------------------------------------------------------------------
 * Types for <SkillsSection> – the "Technical Arsenal" block: a left-aligned
 * heading + capability checklist on the left, the <SkillMatrix> chart on the
 * right.
 */

import type { Skill } from '../SkillMatrix/SkillMatrix.types';

export interface SkillsSectionProps {
  /** Kicker above the title. @default 'Expertise' */
  eyebrow?: string;
  /** Section title. @default 'Technical Arsenal' */
  title?: string;
  /** Supporting paragraph under the title. */
  subtitle?: string;
  /** Short capability labels shown with check icons (rendered in a 2-col grid). */
  capabilities: string[];
  /** Skills plotted in the chart on the right. */
  skills: Skill[];
  /** Layout escape hatch. */
  className?: string;
}
