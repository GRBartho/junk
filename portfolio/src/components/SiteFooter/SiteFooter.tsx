/**
 * SiteFooter.tsx
 * -----------------------------------------------------------------------------
 * Frosted footer bar with the wordmark, a tagline, and social icon links.
 *
 *   <SiteFooter
 *     brand="Gabriel.Bartholomay"
 *     email="you@example.com"
 *     githubUrl="https://github.com/you"
 *     linkedinUrl="https://linkedin.com/in/you"
 *   />
 */

import { Bar, Inner, TextGroup, Brand, Tagline, Social, IconLink } from './SiteFooterStyles';
import { GradientText } from '../GradientText/GradientText';
import { Icon } from '../Icon/Icon';
import type { SiteFooterProps } from './SiteFooter.types';

export function SiteFooter({
  brand,
  tagline = 'Built with React',
  email,
  githubUrl,
  linkedinUrl,
  className,
}: SiteFooterProps) {
  return (
    <Bar className={className}>
      <Inner>
        <TextGroup>
          <Brand>
            <GradientText>{brand}</GradientText>
          </Brand>
          <Tagline>{tagline}</Tagline>
        </TextGroup>

        <Social>
          <IconLink href={`mailto:${email}`} aria-label="Email">
            <Icon name="email" size={26} title="Email" />
          </IconLink>
          <IconLink href={githubUrl} target="_blank" rel="noreferrer" aria-label="GitHub">
            <Icon name="github" size={26} title="GitHub" />
          </IconLink>
          <IconLink href={linkedinUrl} target="_blank" rel="noreferrer" aria-label="LinkedIn">
            <Icon name="linkedin" size={26} title="LinkedIn" />
          </IconLink>
        </Social>
      </Inner>
    </Bar>
  );
}

export default SiteFooter;

export type { SiteFooterProps } from './SiteFooter.types';
