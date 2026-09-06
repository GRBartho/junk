/**
 * SectionHeading.stories.tsx
 * -----------------------------------------------------------------------------
 * Stories for <SectionHeading>: the centered variant (Portfolio / Resume) and
 * the left-aligned variant (Technical Arsenal).
 */

import type { Meta, StoryObj } from '@storybook/react-vite';
import { SectionHeading } from './SectionHeading';

const meta = {
  title: 'Primitives/SectionHeading',
  component: SectionHeading,
  parameters: { layout: 'padded' },
  tags: ['autodocs'],
  argTypes: { align: { control: 'inline-radio', options: ['center', 'left'] } },
  args: {
    eyebrow: 'Portfolio',
    title: 'Selected works',
    subtitle:
      'A collection of projects that define my journey as a developer. From large-scale application to experimental tools',
    align: 'center',
  },
} satisfies Meta<typeof SectionHeading>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Centered: Story = {};

export const LeftAligned: Story = {
  args: {
    eyebrow: 'Expertise',
    title: 'Technical Arsenal',
    subtitle:
      'I focus on the modern web stack to deliver high-quality digital products. My expertise spans across frontend interactivity, robust backend systems, and automated infrastructure.',
    align: 'left',
  },
};

export const NoSubtitle: Story = {
  args: { eyebrow: 'Resume', title: 'Work Experience', subtitle: undefined },
};
