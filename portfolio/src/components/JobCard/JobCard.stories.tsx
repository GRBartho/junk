/**
 * JobCard.stories.tsx
 * -----------------------------------------------------------------------------
 * Stories for <JobCard>: a populated role, and one with a single highlight.
 */

import type { Meta, StoryObj } from '@storybook/react-vite';
import { JobCard } from './JobCard';

const meta = {
  title: 'Components/JobCard',
  component: JobCard,
  parameters: { layout: 'padded' },
  tags: ['autodocs'],
  args: {
    title: 'Senior FrontEnd Lead',
    status: 'Full-time',
    period: '2022 - 2023',
    highlights: [
      'Architected a design system used across 5 major product lines, reducing development time by 30%',
      'Led the migration of a legacy dashboard to React + TypeScript with zero downtime',
      'Mentored 4 engineers and established the team’s code-review and testing practices',
    ],
  },
  decorators: [(Story) => <div style={{ maxWidth: 720 }}>{Story()}</div>],
} satisfies Meta<typeof JobCard>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const SingleHighlight: Story = {
  args: { highlights: ['Shipped the public marketing site and cut LCP from 4.1s to 1.3s'] },
};
