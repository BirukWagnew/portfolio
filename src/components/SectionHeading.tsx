import React from 'react';
import { Reveal } from './Reveal';

interface SectionHeadingProps {
  eyebrow: string;
  title: React.ReactNode;
  description?: string;
  align?: 'left' | 'center';
}

export const SectionHeading: React.FC<SectionHeadingProps> = ({
  eyebrow,
  title,
  description,
  align = 'left',
}) => (
  <Reveal
    className={`max-w-2xl ${align === 'center' ? 'mx-auto text-center' : ''}`}
  >
    <span className="eyebrow">
      <span aria-hidden="true" className="h-px w-6 bg-current opacity-60" />
      {eyebrow}
    </span>
    <h2 className="mt-4 text-3xl sm:text-4xl font-semibold leading-tight">{title}</h2>
    {description && (
      <p className="mt-4 text-base leading-relaxed text-body">{description}</p>
    )}
  </Reveal>
);
