/**
 * NavBar.stories.tsx
 * -----------------------------------------------------------------------------
 * Stories for <NavBar>: the default header, and a narrow-viewport view to
 * check link wrapping.
 */

import type { Meta, StoryObj } from '@storybook/react-vite';
import { NavBar } from './NavBar';

const meta = {
  title: 'Sections/NavBar',
  component: NavBar,
  parameters: { layout: 'fullscreen' },
  tags: ['autodocs'],
  args: { brand: 'Gabriel.Bartholomay' },
} satisfies Meta<typeof NavBar>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const Narrow: Story = {
  parameters: { viewport: { defaultViewport: 'mobile1' } },
};

export const CustomLinks: Story = {
  args: {
    links: [
      { label: 'Work', href: '#work' },
      { label: 'Résumé', href: '#resume' },
      { label: 'Contact', href: '#contact' },
    ],
  },
};
