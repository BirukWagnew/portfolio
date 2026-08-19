import React from 'react';
import {
  Cloud,
  Code2,
  GraduationCap,
  Network,
  Sparkles,
  Users,
  type LucideIcon,
} from 'lucide-react';
import { ABOUT_HIGHLIGHTS, EDUCATION, PERSONAL_INFO } from '../data/portfolioData';
import { SectionHeading } from './SectionHeading';
import { Reveal } from './Reveal';

const ICONS: Record<string, LucideIcon> = {
  GraduationCap,
  Cloud,
  Code2,
  Network,
  Users,
  Sparkles,
};

export const About: React.FC = () => (
  <section id="about" className="section divider-top">
    <div className="container-page">
      <SectionHeading
        eyebrow="About"
        title={
          <>
            Infrastructure thinking, <span className="text-gold-gradient">product instincts</span>
          </>
        }
        description={PERSONAL_INFO.intro}
      />

      <div className="mt-12 grid gap-10 lg:grid-cols-12">
        <Reveal className="lg:col-span-5">
          <div className="card p-6 sm:p-7">
            <p className="text-base leading-relaxed text-body">
              I finished my BSc in Information Technology at Wollo University with a
              foundation split across networking, systems and software. Since then my work
              has concentrated on the operational side of software: packaging applications
              into containers, wiring pipelines that build and deploy them, and running
              them on GCP and AWS.
            </p>
            <p className="mt-4 text-base leading-relaxed text-body">
              Because I also build the applications themselves — React front-ends, Node and
              Express APIs, MongoDB data models — I design infrastructure around how
              software is actually written and shipped, not around a diagram.
            </p>

            <dl className="mt-7 grid grid-cols-2 gap-4 border-t border-[var(--hairline)] pt-6">
              <div>
                <dt className="font-mono text-[0.68rem] uppercase tracking-widest text-dim">
                  Degree
                </dt>
                <dd className="mt-1 text-sm text-strong">{EDUCATION.degree}</dd>
              </div>
              <div>
                <dt className="font-mono text-[0.68rem] uppercase tracking-widest text-dim">
                  University
                </dt>
                <dd className="mt-1 text-sm text-strong">
                  {EDUCATION.institution}, {EDUCATION.graduationYear}
                </dd>
              </div>
              <div>
                <dt className="font-mono text-[0.68rem] uppercase tracking-widest text-dim">
                  Based in
                </dt>
                <dd className="mt-1 text-sm text-strong">{PERSONAL_INFO.location}</dd>
              </div>
              <div>
                <dt className="font-mono text-[0.68rem] uppercase tracking-widest text-dim">
                  Focus
                </dt>
                <dd className="mt-1 text-sm text-strong">Cloud · DevOps · Full-Stack</dd>
              </div>
            </dl>
          </div>
        </Reveal>

        <ul className="grid gap-4 sm:grid-cols-2 lg:col-span-7">
          {ABOUT_HIGHLIGHTS.map((item, index) => {
            const Icon = ICONS[item.iconName] ?? Sparkles;
            return (
              <Reveal as="li" key={item.title} delay={index * 60}>
                <div className="card h-full p-5">
                  <span className="grid h-9 w-9 place-items-center rounded-lg border border-[var(--hairline-strong)] bg-[var(--accent-soft)] text-accent">
                    <Icon className="h-4 w-4" aria-hidden="true" />
                  </span>
                  <h3 className="mt-4 text-base font-semibold">{item.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-body">{item.body}</p>
                </div>
              </Reveal>
            );
          })}
        </ul>
      </div>
    </div>
  </section>
);
