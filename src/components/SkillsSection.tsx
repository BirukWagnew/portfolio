import React from 'react';
import { Cloud, Code2, Network, Terminal, type LucideIcon } from 'lucide-react';
import { SKILL_CATEGORIES } from '../data/portfolioData';
import { SectionHeading } from './SectionHeading';
import { Reveal } from './Reveal';
import { TiltCard } from './TiltCard';

const ICONS: Record<string, LucideIcon> = { Cloud, Terminal, Code2, Network };

export const SkillsSection: React.FC = () => (
  <section id="skills" className="section divider-top">
    <div className="container-page">
      <SectionHeading
        eyebrow="Skills"
        title={
          <>
            The stack I <span className="text-gold-gradient">build and run</span> systems with
          </>
        }
        description="Grouped by where they sit in the delivery chain — from the platform underneath to the application on top."
      />

      <div className="mt-12 grid gap-5 md:grid-cols-2">
        {SKILL_CATEGORIES.map((category, index) => {
          const Icon = ICONS[category.iconName] ?? Code2;
          return (
            <Reveal key={category.id} delay={index * 70}>
              <TiltCard intensity={3} className="h-full">
                <div className="card h-full p-6 sm:p-7">
                  <div className="flex items-center gap-3">
                    <span className="grid h-10 w-10 place-items-center rounded-xl border border-[var(--hairline-strong)] bg-[var(--accent-soft)] text-accent">
                      <Icon className="h-4.5 w-4.5" aria-hidden="true" />
                    </span>
                    <div>
                      <h3 className="text-lg font-semibold">{category.name}</h3>
                      <p className="font-mono text-[0.68rem] text-dim">
                        {category.skills.length} technologies
                      </p>
                    </div>
                  </div>

                  <p className="mt-4 text-sm leading-relaxed text-body">{category.blurb}</p>

                  <ul className="mt-5 flex flex-wrap gap-2">
                    {category.skills.map((skill) => (
                      <li key={skill.name}>
                        <span className="chip" title={skill.note}>
                          <span
                            aria-hidden="true"
                            className="h-1.5 w-1.5 rounded-full bg-[var(--accent)]"
                          />
                          {skill.name}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              </TiltCard>
            </Reveal>
          );
        })}
      </div>
    </div>
  </section>
);
