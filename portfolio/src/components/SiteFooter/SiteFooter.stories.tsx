/**
 * SiteFooter.stories.tsx
 * -----------------------------------------------------------------------------
 * Stories for <SiteFooter>: the default bar and a narrow view (wrapping).
 */

import type { Meta, StoryObj } from '@storybook/react-vite';
import { SiteFooter } from './SiteFooter';

const meta = {
  title: 'Sections/SiteFooter',
  component: SiteFooter,
  parameters: { layout: 'fullscreen' },
  tags: ['autodocs'],
  args: {
    brand: 'Gabriel.Bartholomay',
    email: 'gabrielbartholomay@gmail.com',
    githubUrl: 'https://github.com/GRBartho',
    linkedinUrl: 'https://www.linkedin.com/in/gabriel-bartholomay',
  },
} satisfies Meta<typeof SiteFooter>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const Narrow: Story = {
  parameters: { viewport: { defaultViewport: 'mobile1' } },
};
