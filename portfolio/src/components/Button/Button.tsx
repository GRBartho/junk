/**
 * Button.tsx
 * -----------------------------------------------------------------------------
 * Pill call-to-action. Renders a real <button> by default, or an <a> when you
 * pass `href` (handy for "mailto:" / external profile links in the design).
 *
 *   <Button variant="primary" icon="email" href="mailto:me@example.com">
 *     Send an Email
 *   </Button>
 *
 *   <Button variant="secondary" onClick={scrollToContact}>Get In Touch</Button>
 */

import { Root } from './ButtonStyles';
import { Icon } from '../Icon/Icon';
import type { ButtonProps } from './Button.types';

export function Button(props: ButtonProps) {
  const { children, variant = 'primary', icon, className, ...rest } = props;

  // Shared children for either element.
  const content = (
    <>
      {icon ? <Icon name={icon} size={24} /> : null}
      <span>{children}</span>
    </>
  );

  if ('href' in props && props.href != null) {
    // Anchor rendering. `rest` is already narrowed to anchor attributes.
    return (
      <Root as="a" $variant={variant} className={className} {...(rest as object)}>
        {content}
      </Root>
    );
  }

  // Button rendering. Default `type="button"` so it never submits a form.
  return (
    <Root type="button" $variant={variant} className={className} {...(rest as object)}>
      {content}
    </Root>
  );
}

export default Button;

export type { ButtonProps, ButtonVariant } from './Button.types';
