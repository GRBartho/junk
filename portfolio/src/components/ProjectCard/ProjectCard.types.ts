/**
 * ProjectCard.types.ts
 * -----------------------------------------------------------------------------
 * Types for <ProjectCard> – one entry in the "Selected works" grid: a cover
 * image, a row of tech tags, a title + blurb, and a footer with a live-demo
 * link and a repo link.
 */

export interface Project {
  /** Project name, e.g. "GM Hut". */
  title: string;
  /** One or two sentence description. */
  description: string;
  /** Tech-stack labels rendered as <Tag>s. */
  tags: string[];
  /** Cover image URL (imported asset or remote). */
  imageSrc: string;
  /** Alt text for the cover image. */
  imageAlt: string;
  /** Optional live-demo URL. When omitted the "Live Demo" link is hidden. */
  liveUrl?: string;
  /** Optional source-repository URL. When omitted the GitHub icon is hidden. */
  repoUrl?: string;
}

export interface ProjectCardProps extends Project {
  /** Layout escape hatch from the grid parent. */
  className?: string;
}
