/**
 * CheckItem.tsx
 * -----------------------------------------------------------------------------
 * A single "✓ capability" line. Presentational.
 *
 *   <CheckItem label="Accessibility" />
 */

import { Row, IconSlot, Label } from './CheckItemStyles';
import { Icon } from '../Icon/Icon';
import type { CheckItemProps } from './CheckItem.types';

export function CheckItem({ label, className }: CheckItemProps) {
  return (
    <Row className={className}>
      <IconSlot>
        <Icon name="check" size={20} />
      </IconSlot>
      <Label>{label}</Label>
    </Row>
  );
}

export default CheckItem;

export type { CheckItemProps } from './CheckItem.types';
