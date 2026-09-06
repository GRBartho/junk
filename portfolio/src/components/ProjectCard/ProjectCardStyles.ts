/**
 * ProjectCardStyles.ts
 * -----------------------------------------------------------------------------
 * Styled parts for <ProjectCard>. Values taken from the Figma "PortfolioCard".
 *
 *  - Card       : rounded, emerald-hairline border, clips the image corners;
 *                 lifts on hover
 *  - Cover      : 16:9 image area, object-fit cover
 *  - Body       : emerald-glass panel, 16px padding, 24px vertical rhythm
 *  - TagRow     : 8px-gap wrap row of <Tag>s
 *  - TitleBlock : title + description, 8px gap
 *  - Title      : slate-100, 20px, bold
 *  - Desc       : slate-400, 12px
 *  - Divider    : 1px hairline separating body from footer
 *  - Footer     : space-between row – live-demo link + repo icon
 *  - LiveLink   : slate-400, 14px bold, turns emerald on hover
 *  - RepoLink   : slate-400 icon button, turns emerald on hover
 */

import styled from '@emotion/styled';
import { border, color, font, radius, space, surface, text } from '../../theme/tokens';

export const Card = styled.article`
  display: flex;
  flex-direction: column;
  overflow: hidden;
  border: 1px solid ${border.subtle};
  border-radius: ${radius.md}px;
  background: ${surface.glass};
  transition:
    transform 0.2s ease,
    border-color 0.2s ease,
    box-shadow 0.2s ease;

  &:hover {
    transform: translateY(-4px);
    border-color: ${border.interactive};
    box-shadow: 0 24px 48px -24px rgba(16, 185, 129, 0.35);
  }
`;

export const Cover = styled.div`
  aspect-ratio: 1920 / 1080;
  width: 100%;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    display: block;
  }
`;

export const Body = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${space[24]};
  padding: ${space[16]};
`;

export const TagRow = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: ${space[8]};
`;

export const TitleBlock = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${space[8]};
`;

export const Title = styled.h3`
  margin: 0;
  color: ${text.strong};
  font-family: ${font.family};
  font-size: 20px;
  font-weight: ${font.weight.bold};
`;

export const Desc = styled.p`
  margin: 0;
  color: ${text.subtle};
  font-size: 12px;
  line-height: 1.5;
`;

export const Divider = styled.div`
  height: 1px;
  width: 100%;
  background: rgba(6, 78, 59, 0.4);
`;

export const Footer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const LiveLink = styled.a`
  display: inline-flex;
  align-items: center;
  gap: ${space[8]};
  color: ${text.subtle};
  font-size: 14px;
  font-weight: ${font.weight.bold};
  transition: color 0.15s ease;

  &:hover {
    color: ${color.emerald400};
  }
`;

export const RepoLink = styled.a`
  display: inline-flex;
  color: ${text.subtle};
  transition: color 0.15s ease;

  &:hover {
    color: ${color.emerald400};
  }
`;
