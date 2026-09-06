/**
 * SkillMatrix.tsx
 * -----------------------------------------------------------------------------
 * Bordered panel that plots a list of skills as horizontal bars. Colours
 * alternate emerald / teal exactly like the design.
 *
 *   <SkillMatrix skills={[{ label: 'React', value: 95 }, …]} />
 */

import { Panel } from './SkillMatrixStyles';
import { SkillBar } from '../SkillBar/SkillBar';
import type { SkillMatrixProps } from './SkillMatrix.types';

export function SkillMatrix({
  skills,
  ariaLabel = 'Technical proficiency',
  className,
}: SkillMatrixProps) {
  return (
    <Panel className={className} role="group" aria-label={ariaLabel}>
      {skills.map((skill, i) => (
        <SkillBar
          key={skill.label}
          label={skill.label}
          value={skill.value}
          // Even rows emerald, odd rows teal – the design's pattern.
          color={i % 2 === 0 ? 'emerald' : 'teal'}
        />
      ))}
    </Panel>
  );
}

export default SkillMatrix;

export type { Skill, SkillMatrixProps } from './SkillMatrix.types';
