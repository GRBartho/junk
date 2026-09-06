/**
 * NavBar.tsx
 * -----------------------------------------------------------------------------
 * Sticky site header. The wordmark links back to the top; each nav link is an
 * in-page anchor to a section id.
 *
 *   <NavBar brand="Gabriel.Bartholomay" />
 */

import { Bar, Inner, Brand, Nav, Link } from './NavBarStyles';
import { GradientText } from '../GradientText/GradientText';
import type { NavBarProps, NavLink } from './NavBar.types';

/** The five sections of this portfolio, used when `links` isn't supplied. */
const DEFAULT_LINKS: NavLink[] = [
  { label: 'About', href: '#about' },
  { label: 'Projects', href: '#projects' },
  { label: 'Skills', href: '#skills' },
  { label: 'Experience', href: '#experience' },
  { label: 'Contact', href: '#contact' },
];

export function NavBar({ brand, links = DEFAULT_LINKS, className }: NavBarProps) {
  return (
    <Bar className={className}>
      <Inner>
        <Brand href="#top" aria-label={`${brand} — back to top`}>
          <GradientText>{brand}</GradientText>
        </Brand>

        <Nav aria-label="Primary">
          {links.map((link) => (
            <Link key={link.href} href={link.href}>
              {link.label}
            </Link>
          ))}
        </Nav>
      </Inner>
    </Bar>
  );
}

export default NavBar;

export type { NavBarProps, NavLink } from './NavBar.types';
