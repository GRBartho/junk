/**
 * SiteFooter.types.ts
 * -----------------------------------------------------------------------------
 * Types for <SiteFooter> – the frosted footer bar: gradient wordmark + tagline
 * on the left, a row of social icon links on the right.
 */

export interface SiteFooterProps {
  /** Brand text shown with the gradient treatment. */
  brand: string;
  /** Small line under the wordmark, e.g. "Built with React". */
  tagline?: string;
  /** Email address (turned into a mailto: link). */
  email: string;
  /** GitHub profile URL. */
  githubUrl: string;
  /** LinkedIn profile URL. */
  linkedinUrl: string;
  /** Layout escape hatch. */
  className?: string;
}
