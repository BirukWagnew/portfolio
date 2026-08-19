import React, { Suspense, lazy, useEffect, useState } from 'react';
import { ArrowRight, Download, Mail, MapPin } from 'lucide-react';
import { PERSONAL_INFO, PIPELINE_NODES } from '../data/portfolioData';
import { GithubIcon, LinkedinIcon } from './Icons';
import { PipelineFallback } from './PipelineFallback';
import { Reveal } from './Reveal';
import { usePrefersReducedMotion } from '../hooks/usePreferences';

// three.js only ships to visitors that will actually see the animation
const HeroScene = lazy(() => import('../three/HeroScene'));

function supportsWebGL(): boolean {
  try {
    const canvas = document.createElement('canvas');
    return Boolean(
      window.WebGLRenderingContext &&
        (canvas.getContext('webgl') || canvas.getContext('experimental-webgl')),
    );
  } catch {
    return false;
  }
}

export const Hero: React.FC = () => {
  const reducedMotion = usePrefersReducedMotion();
  const [webglReady, setWebglReady] = useState(false);

  useEffect(() => {
    setWebglReady(supportsWebGL());
  }, []);

  const showScene = webglReady && !reducedMotion;

  return (
    <section id="home" className="relative overflow-hidden pt-28 pb-20 sm:pt-32 lg:pt-36 lg:pb-28">
      <div className="grid-backdrop pointer-events-none absolute inset-0" aria-hidden="true" />
      <div
        className="glow-warm pointer-events-none absolute -top-32 right-[-10%] h-[34rem] w-[34rem] rounded-full blur-3xl"
        aria-hidden="true"
      />

      <div className="container-page relative">
        <div className="grid items-center gap-12 lg:grid-cols-12 lg:gap-8">
          <div className="lg:col-span-6 xl:col-span-7">
            <Reveal>
              <p className="inline-flex items-center gap-2 rounded-full border border-[var(--hairline)] bg-[var(--surface)] px-3 py-1.5 font-mono text-[0.7rem] tracking-wide text-body">
                <span className="pulse-dot h-1.5 w-1.5 rounded-full bg-[var(--accent)]" />
                {PERSONAL_INFO.availability}
              </p>
            </Reveal>

            <Reveal delay={80}>
              <h1 className="mt-6 text-4xl font-semibold leading-[1.05] sm:text-5xl xl:text-6xl">
                {PERSONAL_INFO.name}
              </h1>
              <p className="mt-4 text-lg font-medium sm:text-xl">
                <span className="text-gold-gradient">Cloud &amp; DevOps Engineer</span>
                <span className="mx-2 text-dim">/</span>
                <span className="text-strong">Full-Stack Developer</span>
              </p>
            </Reveal>

            <Reveal delay={160}>
              <p className="mt-6 max-w-xl text-base leading-relaxed text-body sm:text-lg">
                {PERSONAL_INFO.tagline}
              </p>
              <p className="mt-4 flex flex-wrap items-center gap-x-3 gap-y-2 font-mono text-xs text-dim">
                <span className="inline-flex items-center gap-1.5">
                  <MapPin className="h-3.5 w-3.5" aria-hidden="true" />
                  {PERSONAL_INFO.location}
                </span>
                <span aria-hidden="true">·</span>
                <span>BSc Information Technology, Wollo University 2026</span>
              </p>
            </Reveal>

            <Reveal delay={240}>
              <div className="mt-9 flex flex-wrap items-center gap-3">
                <a href="#projects" className="btn btn-primary">
                  View My Projects
                  <ArrowRight className="h-4 w-4" aria-hidden="true" />
                </a>
                <a href="#contact" className="btn btn-secondary">
                  <Mail className="h-4 w-4" aria-hidden="true" />
                  Contact Me
                </a>
                <a
                  href={PERSONAL_INFO.resumeUrl}
                  download
                  className="btn btn-ghost hairline border"
                >
                  <Download className="h-4 w-4" aria-hidden="true" />
                  Download CV
                </a>
              </div>
            </Reveal>

            <Reveal delay={300}>
              <div className="mt-8 flex items-center gap-3">
                <a
                  href={PERSONAL_INFO.socials.github}
                  target="_blank"
                  rel="noreferrer noopener"
                  aria-label="GitHub profile"
                  className="grid h-10 w-10 place-items-center rounded-xl border border-[var(--hairline)] bg-[var(--surface)] text-body transition-colors hover:border-[var(--hairline-strong)] hover:text-accent"
                >
                  <GithubIcon className="h-4 w-4" />
                </a>
                <a
                  href={PERSONAL_INFO.socials.linkedin}
                  target="_blank"
                  rel="noreferrer noopener"
                  aria-label="LinkedIn profile"
                  className="grid h-10 w-10 place-items-center rounded-xl border border-[var(--hairline)] bg-[var(--surface)] text-body transition-colors hover:border-[var(--hairline-strong)] hover:text-accent"
                >
                  <LinkedinIcon className="h-4 w-4" />
                </a>
                <span className="ml-1 font-mono text-[0.7rem] text-dim">
                  {PERSONAL_INFO.email}
                </span>
              </div>
            </Reveal>
          </div>

          <div className="lg:col-span-6 xl:col-span-5">
            <Reveal delay={200}>
              <div className="relative h-[320px] sm:h-[400px] lg:h-[460px]">
                {showScene ? (
                  <Suspense fallback={<PipelineFallback />}>
                    <HeroScene />
                  </Suspense>
                ) : (
                  <PipelineFallback />
                )}
              </div>

              <ul className="mt-2 flex flex-wrap items-center justify-center gap-x-2 gap-y-2 font-mono text-[0.68rem] tracking-wide text-dim">
                {PIPELINE_NODES.map((node, index) => (
                  <li key={node.label} className="flex items-center gap-2">
                    <span>{node.label}</span>
                    {index < PIPELINE_NODES.length - 1 && (
                      <span aria-hidden="true" className="text-accent opacity-60">
                        →
                      </span>
                    )}
                  </li>
                ))}
              </ul>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
};
