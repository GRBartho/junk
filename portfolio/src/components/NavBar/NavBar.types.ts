/**
 * NavBar.types.ts
 * -----------------------------------------------------------------------------
 * Types for <NavBar> – the sticky frosted header: gradient wordmark on the
 * left, in-page anchor links on the right.
 */

export interface NavLink {
  /** Visible label, e.g. "Projects". */
  label: string;
  /** Target – usually an in-page hash like "#projects". */
  href: string;
}

export interface NavBarProps {
  /** Brand text shown with the gradient treatment. */
  brand: string;
  /** Navigation links. Defaults to the five sections of this portfolio. */
  links?: NavLink[];
  /** Layout escape hatch. */
  className?: string;
}
