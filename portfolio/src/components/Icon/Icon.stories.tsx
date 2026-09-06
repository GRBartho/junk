/**
 * Icon.stories.tsx
 * -----------------------------------------------------------------------------
 * Storybook coverage for <Icon>:
 *   - Playground   : interactive controls for `name` / `size` / `title`
 *   - Gallery      : every glyph at a glance
 *   - InheritsColor: proof that icons follow `currentColor`
 */

import type { Meta, StoryObj } from '@storybook/react-vite';
import { Icon } from './Icon';
import type { IconName } from './Icon.types';

const ALL_NAMES: IconName[] = ['check', 'externalLink', 'github', 'email', 'linkedin'];

const meta = {
  title: 'Primitives/Icon',
  component: Icon,
  parameters: { layout: 'centered' },
  tags: ['autodocs'],
  argTypes: {
    name: { control: 'select', options: ALL_NAMES },
    size: { control: { type: 'range', min: 12, max: 96, step: 2 } },
    title: { control: 'text' },
  },
  args: { name: 'github', size: 32 },
} satisfies Meta<typeof Icon>;

export default meta;
type Story = StoryObj<typeof meta>;

/** Tweak the props live. */
export const Playground: Story = {};

/** Contact-sheet of the whole set. */
export const Gallery: Story = {
  render: () => (
    <div style={{ display: 'flex', gap: 32, color: '#F1F5F9', flexWrap: 'wrap' }}>
      {ALL_NAMES.map((name) => (
        <div key={name} style={{ display: 'grid', gap: 8, justifyItems: 'center', fontSize: 12 }}>
          <Icon name={name} size={28} title={name} />
          <code style={{ color: '#94A3B8' }}>{name}</code>
        </div>
      ))}
    </div>
  ),
};

/** Each column sets its own `color`; the icon simply follows. */
export const InheritsColor: Story = {
  render: () => (
    <div style={{ display: 'flex', gap: 24 }}>
      <span style={{ color: '#34D399' }}>
        <Icon name="check" size={28} />
      </span>
      <span style={{ color: '#94A3B8' }}>
        <Icon name="externalLink" size={28} />
      </span>
      <span style={{ color: '#F1F5F9' }}>
        <Icon name="linkedin" size={28} />
      </span>
    </div>
  ),
};
