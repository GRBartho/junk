/**
 * Button.stories.tsx
 * -----------------------------------------------------------------------------
 * Stories for <Button>: both variants, with/without an icon, and the anchor
 * rendering.
 */

import type { Meta, StoryObj } from '@storybook/react-vite';
import { fn } from 'storybook/test';
import { Button } from './Button';

const meta = {
  title: 'Primitives/Button',
  component: Button,
  parameters: { layout: 'centered' },
  tags: ['autodocs'],
  argTypes: {
    variant: { control: 'inline-radio', options: ['primary', 'secondary'] },
    icon: {
      control: 'select',
      options: [undefined, 'email', 'linkedin', 'externalLink', 'github'],
    },
  },
  args: { children: 'View Projects', variant: 'primary', onClick: fn() },
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {};

export const Secondary: Story = {
  args: { variant: 'secondary', children: 'Get In Touch' },
};

export const WithIcon: Story = {
  args: { icon: 'email', children: 'Send an Email' },
};

/** The two hero buttons side by side, exactly as they appear in the design. */
export const HeroPair: Story = {
  render: () => (
    <div style={{ display: 'flex', gap: 16 }}>
      <Button variant="primary">View Projects</Button>
      <Button variant="secondary">Get In Touch</Button>
    </div>
  ),
};

/** Rendered as a link (note: `onClick` control does not apply here). */
export const AsLink: Story = {
  args: {
    children: 'Linkedin',
    variant: 'secondary',
    icon: 'linkedin',
    href: 'https://www.linkedin.com',
    target: '_blank',
    rel: 'noreferrer',
  },
};

export const Disabled: Story = {
  args: { children: 'Unavailable', disabled: true },
};
