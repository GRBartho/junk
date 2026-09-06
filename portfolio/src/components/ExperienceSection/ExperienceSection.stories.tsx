/**
 * ExperienceSection.stories.tsx
 * -----------------------------------------------------------------------------
 * Stories for <ExperienceSection>: a three-role résumé.
 */

import type { Meta, StoryObj } from '@storybook/react-vite';
import { ExperienceSection } from './ExperienceSection';
import type { Job } from '../JobCard/JobCard.types';

const role: Job = {
  title: 'Senior FrontEnd Lead',
  status: 'Full-time',
  period: '2022 - 2023',
  highlights: [
    'Architected a design system used across 5 major product lines, reducing development time by 30%',
    'Owned the migration to React 19 + Vite with zero production incidents',
    'Set the team’s testing and accessibility standards',
  ],
};

const meta = {
  title: 'Sections/ExperienceSection',
  component: ExperienceSection,
  parameters: { layout: 'padded' },
  tags: ['autodocs'],
  args: {
    jobs: [
      role,
      { ...role, title: 'Frontend Engineer', period: '2020 - 2022' },
      { ...role, title: 'Junior Developer', period: '2019 - 2020' },
    ],
  },
} satisfies Meta<typeof ExperienceSection>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
