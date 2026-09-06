/**
 * SkillMatrix.types.ts
 * -----------------------------------------------------------------------------
 * Types for <SkillMatrix> – the bordered "Percentages" panel on the right of
 * the Technical Arsenal section. It stacks a list of <SkillBar>s, alternating
 * their fill colour emerald / teal down the list.
 */

export interface Skill {
  /** Skill name. */
  label: string;
  /** Proficiency 0–100. */
  value: number;
}

export interface SkillMatrixProps {
  /** Skills to plot, top to bottom. */
  skills: Skill[];
  /** Accessible name for the group of bars. @default 'Technical proficiency' */
  ariaLabel?: string;
  /** Layout escape hatch. */
  className?: string;
}
