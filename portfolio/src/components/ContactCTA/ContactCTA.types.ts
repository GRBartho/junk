/**
 * ContactCTA.types.ts
 * -----------------------------------------------------------------------------
 * Types for <ContactCTA> – the closing call-to-action card: "Let's build
 * something amazing together" with an email button and a LinkedIn button.
 */

export interface ContactCTAProps {
  /** Headline. @default "Let’s build something amazing together" */
  title?: string;
  /** Sub-line under the headline. */
  subtitle?: string;
  /** Email address for the "Send an Email" button (turned into a mailto: link). */
  email: string;
  /** LinkedIn profile URL for the secondary button. */
  linkedinUrl: string;
  /** Layout escape hatch. */
  className?: string;
}
