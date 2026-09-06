/**
 * SectionHeading.tsx
 * -----------------------------------------------------------------------------
 * Renders the eyebrow / title / subtitle trio that introduces each section.
 * Purely presentational.
 *
 *   <SectionHeading
 *     eyebrow="Portfolio"
 *     title="Selected works"
 *     subtitle="A collection of projects that define my journey as a developer."
 *   />
 */

import { Root, Eyebrow, Title, Subtitle } from './SectionHeadingStyles';
import type { SectionHeadingProps } from './SectionHeading.types';

export function SectionHeading({
  eyebrow,
  title,
  subtitle,
  align = 'center',
  className,
}: SectionHeadingProps) {
  return (
    <Root $align={align} className={className}>
      <Eyebrow>{eyebrow}</Eyebrow>
      <Title>{title}</Title>
      {subtitle ? <Subtitle>{subtitle}</Subtitle> : null}
    </Root>
  );
}

export default SectionHeading;

export type { SectionHeadingProps } from './SectionHeading.types';
