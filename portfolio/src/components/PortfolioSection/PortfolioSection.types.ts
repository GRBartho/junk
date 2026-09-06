/**
 * PortfolioSection.types.ts
 * -----------------------------------------------------------------------------
 * Types for <PortfolioSection> – the "Selected works" block: a centered
 * heading over a responsive grid of <ProjectCard>s.
 */

import type { Project } from '../ProjectCard/ProjectCard.types';

export interface PortfolioSectionProps {
  /** Kicker above the title. @default 'Portfolio' */
  eyebrow?: string;
  /** Section title. @default 'Selected works' */
  title?: string;
  /** Supporting sentence under the title. */
  subtitle?: string;
  /** Projects to display. */
  projects: Project[];
  /** Layout escape hatch. */
  className?: string;
}
