/**
 * SkillBar.stories.tsx
 * -----------------------------------------------------------------------------
 * Stories for <SkillBar>: a single bar with live controls, and the full
 * alternating-colour stack from the design.
 */

import type { Meta, StoryObj } from '@storybook/react-vite';
import { SkillBar } from './SkillBar';

const meta = {
  title: 'Primitives/SkillBar',
  component: SkillBar,
  parameters: { layout: 'padded' },
  tags: ['autodocs'],
  argTypes: {
    value: { control: { type: 'range', min: 0, max: 100, step: 1 } },
    color: { control: 'inline-radio', options: ['emerald', 'teal'] },
  },
  args: { label: 'React', value: 95, color: 'emerald' },
} satisfies Meta<typeof SkillBar>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};

const STACK: { label: string; value: number }[] = [
  { label: 'React', value: 95 },
  { label: 'TypeScript', value: 92 },
  { label: 'Tailwind CSS', value: 90 },
  { label: 'Node.js', value: 88 },
  { label: 'GraphQL', value: 82 },
  { label: 'AWS', value: 80 },
  { label: 'Docker', value: 78 },
  { label: 'UI/UX Design', value: 74 },
];

/** All eight skills, colours alternating like the Figma chart. */
export const FullStack: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', maxWidth: 420 }}>
      {STACK.map((s, i) => (
        <SkillBar key={s.label} label={s.label} value={s.value} color={i % 2 ? 'teal' : 'emerald'} />
      ))}
    </div>
  ),
};
