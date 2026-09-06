/**
 * SkillsSection.stories.tsx
 * -----------------------------------------------------------------------------
 * Stories for <SkillsSection>: the full design content, plus a stacked mobile
 * view.
 */

import type { Meta, StoryObj } from '@storybook/react-vite';
import { SkillsSection } from './SkillsSection';
import { surface } from '../../theme/tokens';

const meta = {
  title: 'Sections/SkillsSection',
  component: SkillsSection,
  parameters: { layout: 'fullscreen' },
  tags: ['autodocs'],
  decorators: [
    (Story) => <div style={{ background: surface.raised, padding: 48 }}>{Story()}</div>,
  ],
  args: {
    capabilities: ['Performance Optimization', 'Responsive Design', 'Accessibility', 'Scalable Systems'],
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
} satisfies Meta<typeof SkillsSection>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const Mobile: Story = {
  parameters: { viewport: { defaultViewport: 'mobile1' } },
};
