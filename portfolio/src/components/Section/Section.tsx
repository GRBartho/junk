/**
 * Section.tsx
 * -----------------------------------------------------------------------------
 * Shared wrapper for the page's major sections. Handles the anchor id, the
 * vertical rhythm, the centered container, and an optional full-bleed
 * background band.
 *
 *   <Section id="skills" background={surface.raised} spacing="loose">
 *     …section content…
 *   </Section>
 */

import { Band, Container } from './SectionStyles';
import type { SectionProps } from './Section.types';

export function Section({
  id,
  children,
  background,
  spacing = 'normal',
  ariaLabel,
  className,
}: SectionProps) {
  return (
    <Band
      id={id}
      aria-label={ariaLabel}
      $spacing={spacing}
      // Full-bleed colour is a plain inline style so callers can pass any token.
      style={background ? { background } : undefined}
      className={className}
    >
      <Container>{children}</Container>
    </Band>
  );
}

export default Section;

export type { SectionProps } from './Section.types';
