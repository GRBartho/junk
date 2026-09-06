/**
 * CheckItem.stories.tsx
 * -----------------------------------------------------------------------------
 * Stories for <CheckItem>: one item, and the 2×2 grid from Technical Arsenal.
 */

import type { Meta, StoryObj } from '@storybook/react-vite';
import { CheckItem } from './CheckItem';

const meta = {
  title: 'Primitives/CheckItem',
  component: CheckItem,
  parameters: { layout: 'centered' },
  tags: ['autodocs'],
  args: { label: 'Performance Optimization' },
} satisfies Meta<typeof CheckItem>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};

/** The four capabilities as laid out in the design. */
export const ArsenalGrid: Story = {
  render: () => (
    <div
      style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(2, max-content)',
        gap: '24px 40px',
      }}
    >
      <CheckItem label="Performance Optimization" />
      <CheckItem label="Responsive Design" />
      <CheckItem label="Accessibility" />
      <CheckItem label="Scalable Systems" />
    </div>
  ),
};
