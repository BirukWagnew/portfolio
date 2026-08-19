import React from 'react';
import { PIPELINE_NODES } from '../data/portfolioData';

/**
 * Static, dependency-free stand-in for the WebGL hero shown while the 3D
 * chunk loads, when motion is reduced, or when WebGL is unavailable.
 */
export const PipelineFallback: React.FC = () => (
  <div className="absolute inset-0 flex items-center justify-center px-6" aria-hidden="true">
    <div className="relative w-full max-w-sm">
      <div className="absolute inset-x-6 top-1/2 h-px -translate-y-1/2 bg-gradient-to-r from-transparent via-[var(--accent)]/45 to-transparent" />
      <ul className="relative grid gap-4">
        {PIPELINE_NODES.map((node, index) => (
          <li
            key={node.label}
            className="flex items-center gap-3"
            style={{ marginInlineStart: `${Math.abs(2 - index) * 1.5}rem` }}
          >
            <span className="grid h-9 w-9 place-items-center rounded-xl border border-[var(--hairline-strong)] bg-[var(--accent-soft)]">
              <span className="h-2 w-2 rounded-full bg-[var(--accent)]" />
            </span>
            <span className="font-mono text-xs tracking-wide text-body">{node.label}</span>
          </li>
        ))}
      </ul>
    </div>
  </div>
);
