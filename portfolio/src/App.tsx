/**
 * App.tsx
 * -----------------------------------------------------------------------------
 * The whole page. This file is deliberately thin: it renders global styles,
 * then stacks the section components from `./components`, feeding each one the
 * content it needs from `./content/site`.
 *
 * Structure (matches the Figma "Main Page" frame):
 *   NavBar
 *   ├─ #about       Hero
 *   ├─ #projects    PortfolioSection
 *   ├─ #skills      SkillsSection      (on the raised surface colour)
 *   ├─ #experience  ExperienceSection
 *   └─ #contact     ContactCTA
 *   SiteFooter
 */

import { GlobalStyles } from './theme/GlobalStyles';
import { surface } from './theme/tokens';
import {
  NavBar,
  Section,
  Hero,
  PortfolioSection,
  SkillsSection,
  ExperienceSection,
  ContactCTA,
  SiteFooter,
} from './components';
import { profile, hero, projects, expertise, jobs, contact } from './content/site';

export function App() {
  return (
    <>
      {/* Injects the Inter font, reset and dark page background. */}
      <GlobalStyles />

      {/* Anchor target for the wordmark's "back to top" link. */}
      <span id="top" />

      <NavBar brand={profile.brand} />

      <main>
        {/* The hero doubles as the "About" section. */}
        <Section id="about" ariaLabel="Introduction">
          <Hero {...hero} />
        </Section>

        <Section id="projects" ariaLabel="Selected works">
          <PortfolioSection projects={projects} />
        </Section>

        {/* Full-bleed raised band, exactly like the design's "Hover Card". */}
        <Section id="skills" background={surface.raised} spacing="loose" ariaLabel="Technical arsenal">
          <SkillsSection
            eyebrow={expertise.eyebrow}
            title={expertise.title}
            subtitle={expertise.subtitle}
            capabilities={[...expertise.capabilities]}
            skills={[...expertise.skills]}
          />
        </Section>

        <Section id="experience" ariaLabel="Work experience">
          <ExperienceSection jobs={jobs} />
        </Section>

        <Section id="contact" ariaLabel="Contact">
          <ContactCTA
            title={contact.title}
            subtitle={contact.subtitle}
            email={profile.email}
            linkedinUrl={profile.linkedinUrl}
          />
        </Section>
      </main>

      <SiteFooter
        brand={profile.brand}
        email={profile.email}
        githubUrl={profile.githubUrl}
        linkedinUrl={profile.linkedinUrl}
      />
    </>
  );
}

export default App;
