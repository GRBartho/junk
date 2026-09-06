/**
 * PortfolioSection.tsx
 * -----------------------------------------------------------------------------
 * "Selected works" section. Composes <SectionHeading> + a grid of
 * <ProjectCard>s. Wrap it in a <Section id="projects"> on the page.
 *
 *   <PortfolioSection projects={projects} />
 */

import { Layout, Grid } from "./PortfolioSectionStyles";
import { SectionHeading } from "../SectionHeading/SectionHeading";
import { ProjectCard } from "../ProjectCard/ProjectCard";
import type { PortfolioSectionProps } from "./PortfolioSection.types";

export function PortfolioSection({
  eyebrow = "Portfolio",
  title = "Selected works",
  subtitle = "A collection of projects that define my journey as a developer. From large-scale applications to experimental tools.",
  projects,
  className,
}: PortfolioSectionProps) {
  return (
    <Layout className={className}>
      <SectionHeading
        eyebrow={eyebrow}
        title={title}
        subtitle={subtitle}
        align="center"
      />

      <Grid>
        {projects.map((project) => (
          <ProjectCard key={project.title} {...project} />
        ))}
      </Grid>
    </Layout>
  );
}

export default PortfolioSection;

export type { PortfolioSectionProps } from "./PortfolioSection.types";
