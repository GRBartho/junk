/**
 * SkillMatrix.stories.tsx
 * -----------------------------------------------------------------------------
 * Stories for <SkillMatrix>: the eight-skill chart from the design, and a
 * shorter list.
 */

import type { Meta, StoryObj } from '@storybook/react-vite';
import { SkillMatrix } from './SkillMatrix';

const meta = {
  title: 'Components/SkillMatrix',
  component: SkillMatrix,
  parameters: { layout: 'padded' },
  tags: ['autodocs'],
  args: {
    skills: [
      { label: 'React', value: 95 },
      { label: 'TypeScript', value: 92 },
      { label: 'Tailwind CSS', value: 90 },
      { label: 'Node.js', value: 88 },
      { label: 'GraphQL', value: 82 },
      { label: 'AWS', value: 80 },
      { label: 'Docker', value: 78 },
      { label: 'UI/UX Design', value: 74 },
    ],
  },
  decorators: [(Story) => <div style={{ maxWidth: 440 }}>{Story()}</div>],
} satisfies Meta<typeof SkillMatrix>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const ShortList: Story = {
  args: {
    skills: [
      { label: 'React', value: 95 },
      { label: 'Node.js', value: 85 },
      { label: 'Python', value: 80 },
    ],
  },
};
