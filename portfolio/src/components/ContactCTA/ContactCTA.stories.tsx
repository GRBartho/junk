/**
 * ContactCTA.stories.tsx
 * -----------------------------------------------------------------------------
 * Stories for <ContactCTA>: the default card and a custom-copy variant.
 */

import type { Meta, StoryObj } from '@storybook/react-vite';
import { ContactCTA } from './ContactCTA';

const meta = {
  title: 'Sections/ContactCTA',
  component: ContactCTA,
  parameters: { layout: 'padded' },
  tags: ['autodocs'],
  args: {
    email: 'gabrielbartholomay@gmail.com',
    linkedinUrl: 'https://www.linkedin.com/in/gabriel-bartholomay',
  },
} satisfies Meta<typeof ContactCTA>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const CustomCopy: Story = {
  args: {
    title: 'Have a project in mind?',
    subtitle: 'I reply to every message within a day or two.',
  },
};
