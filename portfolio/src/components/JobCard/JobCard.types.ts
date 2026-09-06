/**
 * JobCard.types.ts
 * -----------------------------------------------------------------------------
 * Types for <JobCard> – one role in the "Work Experience" list: title, a short
 * status line, a date-range tag, and a few bullet-point highlights.
 */

export interface Job {
  /** Role title, e.g. "Senior FrontEnd Lead". */
  title: string;
  /** Short status / employment-type line, e.g. "Suitable" or "Full-time". */
  status: string;
  /** Date range, rendered in a <Tag>, e.g. "2022 - 2023". */
  period: string;
  /** Achievement bullet points. */
  highlights: string[];
}

export interface JobCardProps extends Job {
  /** Layout escape hatch from the list parent. */
  className?: string;
}
