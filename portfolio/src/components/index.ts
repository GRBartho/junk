/**
 * components/index.ts
 * -----------------------------------------------------------------------------
 * Barrel export for the portfolio component library. Import from here so call
 * sites stay tidy:
 *
 *   import { Hero, PortfolioSection, SiteFooter } from './components';
 *
 * Each component lives in its own folder with four files:
 *   <Name>.tsx          – the component
 *   <Name>Styles.ts     – its Emotion styled parts
 *   <Name>.types.ts     – its prop/data types
 *   <Name>.stories.tsx  – its Storybook stories
 */

// Primitives ---------------------------------------------------------------
export { Icon } from './Icon/Icon';
export type { IconName, IconProps } from './Icon/Icon.types';

export { GradientText } from './GradientText/GradientText';
export type { GradientTextProps } from './GradientText/GradientText.types';

export { Button } from './Button/Button';
export type { ButtonProps, ButtonVariant } from './Button/Button.types';

export { Tag } from './Tag/Tag';
export type { TagProps } from './Tag/Tag.types';

export { SectionHeading } from './SectionHeading/SectionHeading';
export type { SectionHeadingProps } from './SectionHeading/SectionHeading.types';

export { Section } from './Section/Section';
export type { SectionProps } from './Section/Section.types';

export { CheckItem } from './CheckItem/CheckItem';
export type { CheckItemProps } from './CheckItem/CheckItem.types';

export { SkillBar } from './SkillBar/SkillBar';
export type { SkillBarProps } from './SkillBar/SkillBar.types';

// Composed components -----------------------------------------------------
export { ProjectCard } from './ProjectCard/ProjectCard';
export type { Project, ProjectCardProps } from './ProjectCard/ProjectCard.types';

export { JobCard } from './JobCard/JobCard';
export type { Job, JobCardProps } from './JobCard/JobCard.types';

export { SkillMatrix } from './SkillMatrix/SkillMatrix';
export type { Skill, SkillMatrixProps } from './SkillMatrix/SkillMatrix.types';

// Page sections ----------------------------------------------------------
export { NavBar } from './NavBar/NavBar';
export type { NavBarProps, NavLink } from './NavBar/NavBar.types';

export { Hero } from './Hero/Hero';
export type { HeroProps, HeroCta } from './Hero/Hero.types';

export { PortfolioSection } from './PortfolioSection/PortfolioSection';
export type { PortfolioSectionProps } from './PortfolioSection/PortfolioSection.types';

export { SkillsSection } from './SkillsSection/SkillsSection';
export type { SkillsSectionProps } from './SkillsSection/SkillsSection.types';

export { ExperienceSection } from './ExperienceSection/ExperienceSection';
export type { ExperienceSectionProps } from './ExperienceSection/ExperienceSection.types';

export { ContactCTA } from './ContactCTA/ContactCTA';
export type { ContactCTAProps } from './ContactCTA/ContactCTA.types';

export { SiteFooter } from './SiteFooter/SiteFooter';
export type { SiteFooterProps } from './SiteFooter/SiteFooter.types';
