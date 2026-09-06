/**
 * ExperienceSection.tsx
 * -----------------------------------------------------------------------------
 * "Work Experience" section. Centered <SectionHeading> over a stack of
 * <JobCard>s. Wrap in <Section id="experience"> on the page.
 *
 *   <ExperienceSection jobs={jobs} />
 */

import { Layout, List } from './ExperienceSectionStyles';
import { SectionHeading } from '../SectionHeading/SectionHeading';
import { JobCard } from '../JobCard/JobCard';
import type { ExperienceSectionProps } from './ExperienceSection.types';

export function ExperienceSection({
  eyebrow = 'Resume',
  title = 'Work Experience',
  jobs,
  className,
}: ExperienceSectionProps) {
  return (
    <Layout className={className}>
      <SectionHeading eyebrow={eyebrow} title={title} align="center" />

      <List>
        {jobs.map((job) => (
          <JobCard key={`${job.title}-${job.period}`} {...job} />
        ))}
      </List>
    </Layout>
  );
}

export default ExperienceSection;

export type { ExperienceSectionProps } from './ExperienceSection.types';
