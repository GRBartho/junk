/**
 * ProjectCard.tsx
 * -----------------------------------------------------------------------------
 * A single project in the "Selected works" grid.
 *
 *   <ProjectCard
 *     title="GM Hut"
 *     description="A high-scale e-commerce platform…"
 *     tags={['React', 'Next.js', 'PostgreSQL', 'Tailwind']}
 *     imageSrc={cover}
 *     imageAlt="GM Hut dashboard"
 *     liveUrl="https://example.com"
 *     repoUrl="https://github.com/user/gm-hut"
 *   />
 */

import {
  Card,
  Cover,
  Body,
  TagRow,
  TitleBlock,
  Title,
  Desc,
  Divider,
  Footer,
  LiveLink,
  RepoLink,
} from './ProjectCardStyles';
import { Tag } from '../Tag/Tag';
import { Icon } from '../Icon/Icon';
import type { ProjectCardProps } from './ProjectCard.types';

export function ProjectCard({
  title,
  description,
  tags,
  imageSrc,
  imageAlt,
  liveUrl,
  repoUrl,
  className,
}: ProjectCardProps) {
  return (
    <Card className={className}>
      <Cover>
        {/* Explicit dimensions keep the 16:9 box stable before the image loads. */}
        <img src={imageSrc} alt={imageAlt} width={1920} height={1080} loading="lazy" />
      </Cover>

      <Body>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
          <TagRow>
            {tags.map((t) => (
              <Tag key={t}>{t}</Tag>
            ))}
          </TagRow>

          <TitleBlock>
            <Title>{title}</Title>
            <Desc>{description}</Desc>
          </TitleBlock>
        </div>

        <Divider />

        <Footer>
          {/* Live-demo link is only rendered when a URL exists. */}
          {liveUrl ? (
            <LiveLink href={liveUrl} target="_blank" rel="noreferrer">
              Live Demo
              <Icon name="externalLink" size={20} />
            </LiveLink>
          ) : (
            <span />
          )}

          {repoUrl ? (
            <RepoLink href={repoUrl} target="_blank" rel="noreferrer" aria-label={`${title} source on GitHub`}>
              <Icon name="github" size={24} title={`${title} source on GitHub`} />
            </RepoLink>
          ) : null}
        </Footer>
      </Body>
    </Card>
  );
}

export default ProjectCard;

export type { Project, ProjectCardProps } from './ProjectCard.types';
