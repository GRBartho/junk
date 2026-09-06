/**
 * SkillBar.tsx
 * -----------------------------------------------------------------------------
 * One labelled proficiency bar. Exposes the ARIA `progressbar` role so screen
 * readers announce "React, 95%".
 *
 *   <SkillBar label="React" value={95} color="emerald" />
 */

import { Row, LabelCell, Track, Fill } from './SkillBarStyles';
import type { SkillBarProps } from './SkillBar.types';

export function SkillBar({ label, value, color = 'emerald', className }: SkillBarProps) {
  // Clamp once so both the a11y value and the visual fill agree.
  const clamped = Math.min(100, Math.max(0, Math.round(value)));

  return (
    <Row className={className}>
      <LabelCell>{label}</LabelCell>
      <Track
        role="progressbar"
        aria-label={label}
        aria-valuenow={clamped}
        aria-valuemin={0}
        aria-valuemax={100}
      >
        <Fill $value={clamped} $color={color} />
      </Track>
    </Row>
  );
}

export default SkillBar;

export type { SkillBarProps } from './SkillBar.types';
