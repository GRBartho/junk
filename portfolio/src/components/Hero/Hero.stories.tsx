/**
 * Hero.stories.tsx
 * -----------------------------------------------------------------------------
 * Stories for <Hero>: the design's content, plus a mobile view.
 */

import type { Meta, StoryObj } from '@storybook/react-vite';
import { Hero } from './Hero';
import heroImg from '../../assets/hero-retro.jpg';

const meta = {
  title: 'Sections/Hero',
  component: Hero,
  parameters: { layout: 'padded' },
  tags: ['autodocs'],
  args: {
    eyebrow: 'Available for work',
    headingBefore: 'Building digital ',
    headingHighlight: 'experiences',
    headingAfter: ' that matter.',
    bio: 'I’m Gabriel Bartholomay, a Computer Science senior at SVSU and Full-Stack Engineer building fast, accessible web apps with React, TypeScript, Node.js, and Python.',
    primaryCta: { label: 'View Projects', href: '#projects' },
    secondaryCta: { label: 'Get In Touch', href: '#contact' },
    imageSrc: heroImg,
    imageAlt: 'A desk arrayed with retro computers, consoles and cassette tapes lit in pink and blue',
  },
} satisfies Meta<typeof Hero>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const Mobile: Story = {
  parameters: { viewport: { defaultViewport: 'mobile1' } },
};
