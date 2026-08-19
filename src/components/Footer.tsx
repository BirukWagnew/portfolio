import React from 'react';
import { ArrowUp } from 'lucide-react';
import { NAV_LINKS, PERSONAL_INFO } from '../data/portfolioData';
import { GithubIcon, LinkedinIcon } from './Icons';

export const Footer: React.FC = () => (
  <footer className="divider-top py-10">
    <div className="container-page">
      <div className="flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <p className="font-display text-sm font-semibold text-strong">
            {PERSONAL_INFO.name}
          </p>
          <p className="mt-1 font-mono text-[0.7rem] text-dim">
            {PERSONAL_INFO.headline}
          </p>
        </div>

        <nav aria-label="Footer" className="flex flex-wrap gap-x-5 gap-y-2">
          {NAV_LINKS.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-sm text-body transition-colors hover:text-accent"
            >
              {link.name}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <a
            href={PERSONAL_INFO.socials.github}
            target="_blank"
            rel="noreferrer noopener"
            aria-label="GitHub profile"
            className="grid h-9 w-9 place-items-center rounded-xl border border-[var(--hairline)] text-body transition-colors hover:border-[var(--hairline-strong)] hover:text-accent"
          >
            <GithubIcon className="h-4 w-4" />
          </a>
          <a
            href={PERSONAL_INFO.socials.linkedin}
            target="_blank"
            rel="noreferrer noopener"
            aria-label="LinkedIn profile"
            className="grid h-9 w-9 place-items-center rounded-xl border border-[var(--hairline)] text-body transition-colors hover:border-[var(--hairline-strong)] hover:text-accent"
          >
            <LinkedinIcon className="h-4 w-4" />
          </a>
          <a
            href="#home"
            aria-label="Back to top"
            className="grid h-9 w-9 place-items-center rounded-xl border border-[var(--hairline)] text-body transition-colors hover:border-[var(--hairline-strong)] hover:text-accent"
          >
            <ArrowUp className="h-4 w-4" />
          </a>
        </div>
      </div>

      <p className="mt-8 font-mono text-[0.68rem] text-dim">
        © {new Date().getFullYear()} {PERSONAL_INFO.name}. Built with React, Tailwind CSS and
        three.js.
      </p>
    </div>
  </footer>
);
