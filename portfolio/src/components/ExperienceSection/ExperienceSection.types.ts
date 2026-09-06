/**
 * ExperienceSection.types.ts
 * -----------------------------------------------------------------------------
 * Types for <ExperienceSection> – the "Work Experience" block: a centered
 * heading over a stack of <JobCard>s.
 */

import type { Job } from '../JobCard/JobCard.types';

export interface ExperienceSectionProps {
  /** Kicker above the title. @default 'Resume' */
  eyebrow?: string;
  /** Section title. @default 'Work Experience' */
  title?: string;
  /** Roles to list, most recent first. */
  jobs: Job[];
  /** Layout escape hatch. */
  className?: string;
}
