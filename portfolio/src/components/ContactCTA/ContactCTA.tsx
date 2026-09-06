/**
 * ContactCTA.tsx
 * -----------------------------------------------------------------------------
 * Closing call-to-action card. Wrap in <Section id="contact"> on the page.
 *
 *   <ContactCTA email="you@example.com" linkedinUrl="https://linkedin.com/in/you" />
 */

import { Card, Title, Subtitle, Actions } from './ContactCTAStyles';
import { Button } from '../Button/Button';
import type { ContactCTAProps } from './ContactCTA.types';

export function ContactCTA({
  title = 'Let’s build something amazing together',
  subtitle = 'Currently open to new opportunities and interesting collaborations',
  email,
  linkedinUrl,
  className,
}: ContactCTAProps) {
  return (
    <Card className={className}>
      <Title>{title}</Title>
      <Subtitle>{subtitle}</Subtitle>

      <Actions>
        <Button variant="primary" icon="email" href={`mailto:${email}`}>
          Send an Email
        </Button>
        <Button
          variant="secondary"
          icon="linkedin"
          href={linkedinUrl}
          target="_blank"
          rel="noreferrer"
        >
          Linkedin
        </Button>
      </Actions>
    </Card>
  );
}

export default ContactCTA;

export type { ContactCTAProps } from './ContactCTA.types';
