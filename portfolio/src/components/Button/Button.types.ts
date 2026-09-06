/**
 * Button.types.ts
 * -----------------------------------------------------------------------------
 * Types for <Button> – the pill-shaped call-to-action used in the hero
 * ("View Projects" / "Get In Touch") and the contact card ("Send an Email" /
 * "Linkedin").
 *
 * One component covers both the `<button>` and `<a>` cases: pass `href` and it
 * renders an anchor, otherwise a real button.
 */

import type { ButtonHTMLAttributes, AnchorHTMLAttributes, ReactNode } from 'react';
import type { IconName } from '../Icon/Icon.types';

/** Visual treatment. */
export type ButtonVariant =
  /** Solid emerald fill – the primary action. */
  | 'primary'
  /** Dark slate fill – the secondary action. */
  | 'secondary';

interface CommonButtonProps {
  /** Button label. */
  children: ReactNode;
  /** Visual treatment. @default 'primary' */
  variant?: ButtonVariant;
  /** Optional icon rendered before the label (24px, inherits text colour). */
  icon?: IconName;
  /** Extra classes for layout tweaks from a parent. */
  className?: string;
}

/**
 * When `href` is present the component renders an `<a>` and accepts anchor
 * attributes; otherwise it renders a `<button>` and accepts button attributes.
 * The union keeps prop types accurate for whichever element you get.
 */
export type ButtonProps =
  | (CommonButtonProps & { href: string } & Omit<AnchorHTMLAttributes<HTMLAnchorElement>, 'className'>)
  | (CommonButtonProps & { href?: undefined } & Omit<ButtonHTMLAttributes<HTMLButtonElement>, 'className'>);
