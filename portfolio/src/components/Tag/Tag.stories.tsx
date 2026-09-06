/**
 * Tag.stories.tsx
 * -----------------------------------------------------------------------------
 * Stories for <Tag>: a single pill, and the tech-stack row from a project card.
 */

import type { Meta, StoryObj } from '@storybook/react-vite';
import { Tag } from './Tag';

const meta = {
  title: 'Primitives/Tag',
  component: Tag,
  parameters: { layout: 'centered' },
  tags: ['autodocs'],
  args: { children: 'React' },
} satisfies Meta<typeof Tag>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const DateRange: Story = { args: { children: '2022 - 2023' } };

/** The full stack row from a "Selected works" card. */
export const StackRow: Story = {
  render: () => (
    <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap' }}>
      {['React', 'Next.js', 'PostgreSQL', 'Tailwind'].map((t) => (
        <Tag key={t}>{t}</Tag>
      ))}
    </div>
  ),
};
