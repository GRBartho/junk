/**
 * ProjectCard.stories.tsx
 * -----------------------------------------------------------------------------
 * Stories for <ProjectCard>: the full card, and a minimal card with no links.
 */

import type { Meta, StoryObj } from '@storybook/react-vite';
import { ProjectCard } from './ProjectCard';
import cover from '../../assets/project-gmhut.jpg';

const meta = {
  title: 'Components/ProjectCard',
  component: ProjectCard,
  parameters: { layout: 'centered' },
  tags: ['autodocs'],
  args: {
    title: 'GM Hut',
    description:
      'A high-scale e-commerce platform built with Next.js, handling over 50k daily active users with real-time inventory management',
    tags: ['React', 'Next.js', 'PostgreSQL', 'Tailwind'],
    imageSrc: cover,
    imageAlt: 'GM Hut marketing artwork',
    liveUrl: 'https://example.com',
    repoUrl: 'https://github.com/GRBartho',
  },
  decorators: [(Story) => <div style={{ width: 486, maxWidth: '90vw' }}>{Story()}</div>],
} satisfies Meta<typeof ProjectCard>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};

/** Links omitted – footer collapses gracefully. */
export const NoLinks: Story = {
  args: { liveUrl: undefined, repoUrl: undefined },
};
