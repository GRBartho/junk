/**
 * Section.stories.tsx
 * -----------------------------------------------------------------------------
 * Stories for <Section>: the plain wrapper and the full-bleed background band.
 */

import type { Meta, StoryObj } from '@storybook/react-vite';
import { Section } from './Section';
import { surface } from '../../theme/tokens';

const meta = {
  title: 'Primitives/Section',
  component: Section,
  parameters: { layout: 'fullscreen' },
  tags: ['autodocs'],
  args: {
    id: 'demo',
    children: (
      <p style={{ color: '#F1F5F9' }}>
        Section content is centered inside a {`${surface.raised}`}-wide container.
      </p>
    ),
  },
} satisfies Meta<typeof Section>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Plain: Story = {};

export const FullBleedBackground: Story = {
  args: { background: surface.raised, spacing: 'loose' },
};
