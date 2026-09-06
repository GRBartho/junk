/**
 * Hero.types.ts
 * -----------------------------------------------------------------------------
 * Types for <Hero> – the opening section: availability kicker, a large heading
 * with one gradient-highlighted word, a short bio, two CTAs and a glowing
 * portrait/among-the-hardware image.
 */

export interface HeroCta {
  /** Button label. */
  label: string;
  /** Link target (in-page hash, mailto:, or URL). */
  href: string;
}

export interface HeroProps {
  /** Small uppercase kicker, e.g. "Available for work". */
  eyebrow: string;
  /** Heading text before the highlighted word. */
  headingBefore: string;
  /** The gradient-highlighted word/phrase, e.g. "experiences". */
  headingHighlight: string;
  /** Heading text after the highlighted word. */
  headingAfter: string;
  /** Supporting bio paragraph. */
  bio: string;
  /** Primary (solid emerald) call-to-action. */
  primaryCta: HeroCta;
  /** Secondary (slate) call-to-action. */
  secondaryCta: HeroCta;
  /** Hero image URL. */
  imageSrc: string;
  /** Hero image alt text. */
  imageAlt: string;
  /** Layout escape hatch. */
  className?: string;
}
