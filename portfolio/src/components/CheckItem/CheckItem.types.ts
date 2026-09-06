/**
 * CheckItem.types.ts
 * -----------------------------------------------------------------------------
 * Types for <CheckItem> – an emerald check icon followed by a short label.
 * Four of these make up the checklist in the Technical Arsenal section
 * ("Performance Optimization", "Accessibility", ...).
 */

export interface CheckItemProps {
  /** The capability being highlighted. */
  label: string;
  /** Layout escape hatch. */
  className?: string;
}
