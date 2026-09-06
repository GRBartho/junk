/**
 * SkillsSection.tsx
 * -----------------------------------------------------------------------------
 * "Technical Arsenal" section. Left: heading + capability checklist. Right:
 * the <SkillMatrix> proficiency chart. Wrap in <Section id="skills"> with the
 * raised background on the page.
 *
 *   <SkillsSection capabilities={[...]} skills={[...]} />
 */

import { Layout, Copy, CheckGrid, ChartCol } from './SkillsSectionStyles';
import { SectionHeading } from '../SectionHeading/SectionHeading';
import { CheckItem } from '../CheckItem/CheckItem';
import { SkillMatrix } from '../SkillMatrix/SkillMatrix';
import type { SkillsSectionProps } from './SkillsSection.types';

export function SkillsSection({
  eyebrow = 'Expertise',
  title = 'Technical Arsenal',
  subtitle = 'I focus on the modern web stack to deliver high-quality digital products. My expertise spans across frontend interactivity, robust backend systems, and automated infrastructure.',
  capabilities,
  skills,
  className,
}: SkillsSectionProps) {
  return (
    <Layout className={className}>
      <Copy>
        <SectionHeading eyebrow={eyebrow} title={title} subtitle={subtitle} align="left" />

        <CheckGrid>
          {capabilities.map((label) => (
            <CheckItem key={label} label={label} />
          ))}
        </CheckGrid>
      </Copy>

      <ChartCol>
        <SkillMatrix skills={skills} ariaLabel={`${title} — proficiency by technology`} />
      </ChartCol>
    </Layout>
  );
}

export default SkillsSection;

export type { SkillsSectionProps } from './SkillsSection.types';
