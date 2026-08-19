import React, { useMemo, useState } from 'react';
import { ArrowUpRight, ExternalLink } from 'lucide-react';
import { PROJECTS } from '../data/portfolioData';
import type { Project } from '../data/portfolioData';
import { ProjectModal } from './ProjectModal';
import { SectionHeading } from './SectionHeading';
import { Reveal } from './Reveal';
import { TiltCard } from './TiltCard';
import { GithubIcon } from './Icons';

const FILTERS = ['All', 'Cloud & DevOps', 'Full-Stack'] as const;
type Filter = (typeof FILTERS)[number];

export const ProjectsSection: React.FC = () => {
  const [filter, setFilter] = useState<Filter>('All');
  const [selected, setSelected] = useState<Project | null>(null);

  const projects = useMemo(
    () => (filter === 'All' ? PROJECTS : PROJECTS.filter((p) => p.category === filter)),
    [filter],
  );

  return (
    <section id="projects" className="section divider-top">
      <div className="container-page">
        <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <SectionHeading
            eyebrow="Projects"
            title={
              <>
                Things I have <span className="text-gold-gradient">built and shipped</span>
              </>
            }
            description="Full-stack products and the infrastructure work around them."
          />

          <Reveal delay={80}>
            <div
              role="tablist"
              aria-label="Filter projects by category"
              className="flex flex-wrap gap-2"
            >
              {FILTERS.map((option) => (
                <button
                  key={option}
                  type="button"
                  role="tab"
                  aria-selected={filter === option}
                  onClick={() => setFilter(option)}
                  className={`rounded-full border px-3.5 py-1.5 font-mono text-[0.7rem] transition-colors ${
                    filter === option
                      ? 'border-[var(--hairline-strong)] bg-[var(--accent-soft)] text-accent'
                      : 'border-[var(--hairline)] text-body hover:text-strong'
                  }`}
                >
                  {option}
                </button>
              ))}
            </div>
          </Reveal>
        </div>

        <ul className="mt-12 grid gap-6 md:grid-cols-2">
          {projects.map((project, index) => (
            <Reveal as="li" key={project.id} delay={index * 70}>
              <TiltCard intensity={4} className="h-full">
                <article className="card flex h-full flex-col overflow-hidden">
                  <div className="relative aspect-16/10 overflow-hidden border-b border-[var(--hairline)] bg-[var(--bg-sunken)]">
                    <img
                      src={project.image}
                      alt={project.imageAlt}
                      loading="lazy"
                      decoding="async"
                      width={800}
                      height={500}
                      className="h-full w-full object-cover transition-transform duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] hover:scale-[1.04]"
                    />
                    <div
                      aria-hidden="true"
                      className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[var(--bg-base)] via-transparent to-transparent opacity-70"
                    />
                    <div className="absolute left-3 top-3 flex gap-2">
                      <span className="rounded-full border border-[var(--hairline)] bg-[color-mix(in_srgb,var(--bg-base)_75%,transparent)] px-2.5 py-1 font-mono text-[0.65rem] text-body backdrop-blur">
                        {project.category}
                      </span>
                      {project.status && (
                        <span className="rounded-full border border-[var(--hairline-strong)] bg-[var(--accent-soft)] px-2.5 py-1 font-mono text-[0.65rem] text-accent backdrop-blur">
                          {project.status}
                        </span>
                      )}
                    </div>
                  </div>

                  <div className="flex flex-1 flex-col p-6">
                    <h3 className="text-lg font-semibold">
                      <button
                        type="button"
                        onClick={() => setSelected(project)}
                        className="group inline-flex items-center gap-1.5 text-left transition-colors hover:text-accent"
                        aria-haspopup="dialog"
                      >
                        {project.title}
                        <ArrowUpRight
                          className="h-4 w-4 text-dim transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                          aria-hidden="true"
                        />
                      </button>
                    </h3>

                    <p className="mt-2 text-sm leading-relaxed text-body">
                      {project.description}
                    </p>

                    <ul className="mt-4 flex flex-wrap gap-1.5">
                      {project.tags.map((tag) => (
                        <li
                          key={tag}
                          className="rounded-md border border-[var(--hairline)] px-2 py-0.5 font-mono text-[0.65rem] text-dim"
                        >
                          {tag}
                        </li>
                      ))}
                    </ul>

                    <div className="mt-6 flex items-center gap-2 border-t border-[var(--hairline)] pt-4">
                      <button
                        type="button"
                        onClick={() => setSelected(project)}
                        className="btn btn-ghost px-2 text-xs"
                      >
                        Details
                      </button>
                      <span className="flex-1" />
                      {project.githubUrl && (
                        <a
                          href={project.githubUrl}
                          target="_blank"
                          rel="noreferrer noopener"
                          aria-label={`${project.title} source on GitHub`}
                          className="grid h-9 w-9 place-items-center rounded-lg border border-[var(--hairline)] text-body transition-colors hover:border-[var(--hairline-strong)] hover:text-accent"
                        >
                          <GithubIcon className="h-4 w-4" />
                        </a>
                      )}
                      {project.liveUrl && (
                        <a
                          href={project.liveUrl}
                          target="_blank"
                          rel="noreferrer noopener"
                          aria-label={`${project.title} live demo`}
                          className="grid h-9 w-9 place-items-center rounded-lg border border-[var(--hairline-strong)] bg-[var(--accent-soft)] text-accent transition-colors hover:brightness-125"
                        >
                          <ExternalLink className="h-4 w-4" />
                        </a>
                      )}
                    </div>
                  </div>
                </article>
              </TiltCard>
            </Reveal>
          ))}
        </ul>

        <ProjectModal project={selected} onClose={() => setSelected(null)} />
      </div>
    </section>
  );
};
