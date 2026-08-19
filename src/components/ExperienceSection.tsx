import React from 'react';
import { EXPERIENCES } from '../data/portfolioData';
import { SectionHeading } from './SectionHeading';
import { Reveal } from './Reveal';

export const ExperienceSection: React.FC = () => (
  <section id="experience" className="section divider-top">
    <div className="container-page">
      <SectionHeading
        eyebrow="Experience"
        title={
          <>
            Where I have <span className="text-gold-gradient">worked and led</span>
          </>
        }
        description="Telecom infrastructure, student leadership, community work and self-directed engineering projects."
      />

      <ol className="relative mt-12 grid gap-8 border-l border-[var(--hairline)] pl-6 sm:pl-8">
        {EXPERIENCES.map((item, index) => (
          <Reveal as="li" key={item.id} delay={index * 70} className="relative">
            <span
              aria-hidden="true"
              className="absolute -left-[1.85rem] top-2 grid h-3 w-3 place-items-center rounded-full border border-[var(--hairline-strong)] bg-[var(--bg-base)] sm:-left-[2.35rem]"
            >
              <span className="h-1.5 w-1.5 rounded-full bg-[var(--accent)]" />
            </span>

            <div className="card p-5 sm:p-6">
              <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1">
                <h3 className="text-base font-semibold sm:text-lg">{item.role}</h3>
                <span className="font-mono text-[0.7rem] text-accent">{item.period}</span>
              </div>
              <p className="mt-1 text-sm text-body">
                {item.organization}
                {item.location && <span className="text-dim"> · {item.location}</span>}
                <span className="text-dim"> · {item.type}</span>
              </p>

              <ul className="mt-4 grid gap-2">
                {item.description.map((line) => (
                  <li key={line} className="flex gap-2.5 text-sm leading-relaxed text-body">
                    <span
                      aria-hidden="true"
                      className="mt-2 h-1 w-1 shrink-0 rounded-full bg-[var(--accent)]"
                    />
                    {line}
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        ))}
      </ol>
    </div>
  </section>
);
