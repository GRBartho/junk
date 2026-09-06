/**
 * Tag.tsx
 * -----------------------------------------------------------------------------
 * Tiny presentational pill. No behaviour – it just renders its children in the
 * emerald "chip" style.
 *
 *   <Tag>React</Tag>
 *   <Tag>2022 - 2023</Tag>
 */

import { Pill } from './TagStyles';
import type { TagProps } from './Tag.types';

export function Tag({ children, className }: TagProps) {
  return <Pill className={className}>{children}</Pill>;
}

export default Tag;

export type { TagProps } from './Tag.types';
