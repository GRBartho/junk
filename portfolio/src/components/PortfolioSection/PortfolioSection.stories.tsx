/**
 * PortfolioSection.stories.tsx
 * -----------------------------------------------------------------------------
 * Stories for <PortfolioSection>: the two-card layout from the design, and a
 * single-card fallback.
 */

import type { Meta, StoryObj } from '@storybook/react-vite';
import { PortfolioSection } from './PortfolioSection';
import type { Project } from '../ProjectCard/ProjectCard.types';
import cover from '../../assets/project-gmhut.jpg';

const sample: Project = {
  title: 'GM Hut',
  description:
    'A high-scale e-commerce platform built with Next.js, handling over 50k daily active users with real-time inventory management',
  tags: ['React', 'Next.js', 'PostgreSQL', 'Tailwind'],
  imageSrc: cover,
  imageAlt: 'GM Hut key art',
  liveUrl: 'https://example.com',
  repoUrl: 'https://github.com/GRBartho',
};

const meta = {
  title: 'Sections/PortfolioSection',
  component: PortfolioSection,
  parameters: { layout: 'padded' },
  tags: ['autodocs'],
  args: { projects: [sample, { ...sample, title: 'GM Hut II' }] },
} satisfies Meta<typeof PortfolioSection>;

export default meta;
type Story = StoryObj<typeof meta>;

export const TwoProjects: Story = {};

export const OneProject: Story = { args: { projects: [sample] } };
