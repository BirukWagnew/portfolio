import React, { useEffect, useRef } from 'react';
import { Check, ExternalLink, X } from 'lucide-react';
import type { Project } from '../data/portfolioData';
import { GithubIcon } from './Icons';

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
}

export const ProjectModal: React.FC<ProjectModalProps> = ({ project, onClose }) => {
  const dialogRef = useRef<HTMLDivElement>(null);
  const closeRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (!project) return;

    const previouslyFocused = document.activeElement as HTMLElement | null;
    closeRef.current?.focus();
    document.body.style.overflow = 'hidden';

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        onClose();
        return;
      }
      if (event.key !== 'Tab') return;

      const focusables = dialogRef.current?.querySelectorAll<HTMLElement>(
        'a[href], button:not([disabled])',
      );
      if (!focusables || focusables.length === 0) return;
      const first = focusables[0];
      const last = focusables[focusables.length - 1];

      if (event.shiftKey && document.activeElement === first) {
        event.preventDefault();
        last.focus();
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault();
        first.focus();
      }
    };

    document.addEventListener('keydown', onKeyDown);
    return () => {
      document.removeEventListener('keydown', onKeyDown);
      document.body.style.overflow = '';
      previouslyFocused?.focus();
    };
  }, [project, onClose]);

  if (!project) return null;

  return (
    <div
      className="fixed inset-0 z-100 flex items-end justify-center bg-black/70 p-0 backdrop-blur-sm sm:items-center sm:p-6"
      onClick={onClose}
    >
      <div
        ref={dialogRef}
        role="dialog"
        aria-modal="true"
        aria-labelledby="project-modal-title"
        onClick={(event) => event.stopPropagation()}
        className="animate-[rise_0.35s_var(--ease-smooth)] max-h-[88vh] w-full max-w-2xl overflow-y-auto rounded-t-2xl border border-[var(--hairline)] bg-[var(--surface-solid)] shadow-[var(--shadow-lift)] sm:rounded-2xl"
      >
        <div className="relative aspect-16/9 overflow-hidden border-b border-[var(--hairline)]">
          <img
            src={project.image}
            alt={project.imageAlt}
            className="h-full w-full object-cover"
            loading="lazy"
            decoding="async"
          />
          <button
            ref={closeRef}
            type="button"
            onClick={onClose}
            aria-label="Close project details"
            className="absolute right-3 top-3 grid h-9 w-9 place-items-center rounded-lg border border-[var(--hairline)] bg-[color-mix(in_srgb,var(--bg-base)_80%,transparent)] text-body backdrop-blur transition-colors hover:text-accent"
          >
            <X className="h-4 w-4" />
          </button>
        </div>

        <div className="p-6 sm:p-7">
          <p className="font-mono text-[0.68rem] uppercase tracking-widest text-accent">
            {project.category}
            {project.status ? ` · ${project.status}` : ''}
          </p>
          <h3 id="project-modal-title" className="mt-2 text-2xl font-semibold">
            {project.title}
          </h3>
          <p className="mt-4 text-sm leading-relaxed text-body">{project.longDescription}</p>

          <h4 className="mt-6 font-mono text-[0.68rem] uppercase tracking-widest text-dim">
            Highlights
          </h4>
          <ul className="mt-3 grid gap-2">
            {project.highlights.map((highlight) => (
              <li key={highlight} className="flex gap-2.5 text-sm text-body">
                <Check className="mt-0.5 h-4 w-4 shrink-0 text-accent" aria-hidden="true" />
                {highlight}
              </li>
            ))}
          </ul>

          <ul className="mt-6 flex flex-wrap gap-2">
            {project.tags.map((tag) => (
              <li key={tag} className="chip">
                {tag}
              </li>
            ))}
          </ul>

          <div className="mt-7 flex flex-wrap gap-3 border-t border-[var(--hairline)] pt-6">
            {project.githubUrl && (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noreferrer noopener"
                className="btn btn-secondary"
              >
                <GithubIcon className="h-4 w-4" />
                View source
              </a>
            )}
            {project.liveUrl && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noreferrer noopener"
                className="btn btn-primary"
              >
                <ExternalLink className="h-4 w-4" aria-hidden="true" />
                Live demo
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
