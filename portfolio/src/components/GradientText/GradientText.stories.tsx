/**
 * GradientText.stories.tsx
 * -----------------------------------------------------------------------------
 * Stories for <GradientText>: the standalone wordmark, and the in-heading
 * highlight use-case from the hero.
 */

import type { Meta, StoryObj } from '@storybook/react-vite';
import { GradientText } from './GradientText';

const meta = {
  title: 'Primitives/GradientText',
  component: GradientText,
  parameters: { layout: 'centered' },
  tags: ['autodocs'],
  args: { children: 'Gabriel.Bartholomay' },
} satisfies Meta<typeof GradientText>;

export default meta;
type Story = StoryObj<typeof meta>;

/** Default inline span. */
export const Wordmark: Story = {
  render: (args) => <span style={{ fontSize: 24, fontWeight: 700 }}>{<GradientText {...args} />}</span>,
};

/** Rendered as its own block-level heading. */
export const AsHeading: Story = {
  args: { as: 'h1', children: 'Selected works' },
  render: (args) => <GradientText {...args} />,
  decorators: [(Story) => <div style={{ fontSize: 36, fontWeight: 700 }}>{Story()}</div>],
};

/** The hero pattern: one highlighted word inside a plain heading. */
export const HighlightWithinHeading: Story = {
  render: () => (
    <h1 style={{ fontSize: 48, fontWeight: 800, color: '#F1F5F9', maxWidth: 420, lineHeight: 1.1 }}>
      Building digital <GradientText>experiences</GradientText> that matter.
    </h1>
  ),
};
