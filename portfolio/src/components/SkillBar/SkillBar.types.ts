/**
 * SkillBar.types.ts
 * -----------------------------------------------------------------------------
 * Types for <SkillBar> – one labelled horizontal proficiency bar. Eight of
 * these stacked make up the chart on the right of the Technical Arsenal
 * section (React, TypeScript, Tailwind CSS, ...).
 */

export interface SkillBarProps {
  /** Skill name shown to the left of the bar. */
  label: string;
  /**
   * Proficiency as a percentage (0–100). Drives the fill width and the
   * `aria-valuenow` on the progressbar role.
   */
  value: number;
  /**
   * Fill colour. The design alternates emerald / teal down the list.
   * @default 'emerald'
   */
  color?: 'emerald' | 'teal';
  /** Layout escape hatch. */
  className?: string;
}
