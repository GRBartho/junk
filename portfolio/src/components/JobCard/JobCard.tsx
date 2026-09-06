/**
 * JobCard.tsx
 * -----------------------------------------------------------------------------
 * One role in the Work Experience list. Presentational.
 *
 *   <JobCard
 *     title="Senior FrontEnd Lead"
 *     status="Full-time"
 *     period="2022 - 2023"
 *     highlights={['Architected a design system used across 5 product lines…']}
 *   />
 */

import { Card, Header, TitleGroup, Title, Status, List, Item } from './JobCardStyles';
import { Tag } from '../Tag/Tag';
import type { JobCardProps } from './JobCard.types';

export function JobCard({ title, status, period, highlights, className }: JobCardProps) {
  return (
    <Card className={className}>
      <Header>
        <TitleGroup>
          <Title>{title}</Title>
          <Status>{status}</Status>
        </TitleGroup>
        <Tag>{period}</Tag>
      </Header>

      <List>
        {highlights.map((h, i) => (
          <Item key={i}>{h}</Item>
        ))}
      </List>
    </Card>
  );
}

export default JobCard;

export type { Job, JobCardProps } from './JobCard.types';
