/**
 * Hero.tsx
 * -----------------------------------------------------------------------------
 * The opening section. Composes <GradientText> (heading highlight) and two
 * <Button>s over a glowing hero image.
 *
 *   <Hero
 *     eyebrow="Available for work"
 *     headingBefore="Building digital "
 *     headingHighlight="experiences"
 *     headingAfter=" that matter."
 *     bio="I'm Gabriel Bartholomay, a Computer Science senior…"
 *     primaryCta={{ label: 'View Projects', href: '#projects' }}
 *     secondaryCta={{ label: 'Get In Touch', href: '#contact' }}
 *     imageSrc={hero}
 *     imageAlt="A desk of retro computers and consoles"
 *   />
 */

import { Root, Copy, Eyebrow, Heading, Bio, Ctas, Figure, Glow, Image } from './HeroStyles';
import { GradientText } from '../GradientText/GradientText';
import { Button } from '../Button/Button';
import type { HeroProps } from './Hero.types';

export function Hero({
  eyebrow,
  headingBefore,
  headingHighlight,
  headingAfter,
  bio,
  primaryCta,
  secondaryCta,
  imageSrc,
  imageAlt,
  className,
}: HeroProps) {
  return (
    <Root className={className}>
      <Copy>
        <Eyebrow>{eyebrow}</Eyebrow>

        <Heading>
          {headingBefore}
          <GradientText>{headingHighlight}</GradientText>
          {headingAfter}
        </Heading>

        <Bio>{bio}</Bio>

        <Ctas>
          <Button variant="primary" href={primaryCta.href}>
            {primaryCta.label}
          </Button>
          <Button variant="secondary" href={secondaryCta.href}>
            {secondaryCta.label}
          </Button>
        </Ctas>
      </Copy>

      <Figure>
        {/* Decorative blurred gradient behind the photo. */}
        <Glow aria-hidden />
        <Image src={imageSrc} alt={imageAlt} width={480} height={533} />
      </Figure>
    </Root>
  );
}

export default Hero;

export type { HeroProps, HeroCta } from './Hero.types';
