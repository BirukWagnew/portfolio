import React, { useEffect, useRef, useState } from 'react';
import { Menu, Moon, Sun, X } from 'lucide-react';
import { NAV_LINKS, PERSONAL_INFO } from '../data/portfolioData';
import { useTheme } from '../ThemeContext';

const SECTION_IDS = NAV_LINKS.map((link) => link.href.slice(1));

export const Navbar: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [active, setActive] = useState(SECTION_IDS[0]);
  const { theme, toggleTheme } = useTheme();
  const menuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // active link tracking without a scroll handler
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
        if (visible) setActive(visible.target.id);
      },
      { rootMargin: '-45% 0px -50% 0px', threshold: [0, 0.25, 0.5, 1] },
    );

    for (const id of SECTION_IDS) {
      const section = document.getElementById(id);
      if (section) observer.observe(section);
    }
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!menuOpen) return;
    const onKey = (event: KeyboardEvent) => {
      if (event.key === 'Escape') setMenuOpen(false);
    };
    document.addEventListener('keydown', onKey);
    return () => document.removeEventListener('keydown', onKey);
  }, [menuOpen]);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'border-b border-[var(--hairline)] bg-[color-mix(in_srgb,var(--bg-base)_82%,transparent)] backdrop-blur-xl'
          : 'border-b border-transparent'
      }`}
    >
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-3 focus:z-50 focus:rounded-lg focus:bg-[var(--surface-solid)] focus:px-3 focus:py-2 focus:text-sm"
      >
        Skip to content
      </a>

      <div className="container-page">
        <div className={`flex items-center justify-between transition-all ${scrolled ? 'py-3' : 'py-5'}`}>
          <a href="#home" className="group flex items-center gap-2.5">
            <span className="grid h-9 w-9 place-items-center rounded-xl border border-[var(--hairline-strong)] bg-[var(--accent-soft)] font-display text-sm font-bold text-accent">
              BW
            </span>
            <span className="hidden flex-col leading-tight sm:flex">
              <span className="font-display text-sm font-semibold text-strong">
                {PERSONAL_INFO.name}
              </span>
              <span className="font-mono text-[0.65rem] tracking-wide text-dim">
                Cloud &amp; DevOps Engineer
              </span>
            </span>
          </a>

          <nav aria-label="Primary" className="hidden items-center gap-1 md:flex">
            {NAV_LINKS.map((link) => {
              const isActive = active === link.href.slice(1);
              return (
                <a
                  key={link.name}
                  href={link.href}
                  aria-current={isActive ? 'page' : undefined}
                  className={`relative rounded-lg px-3 py-2 text-sm transition-colors ${
                    isActive ? 'text-strong' : 'text-body hover:text-strong'
                  }`}
                >
                  {link.name}
                  <span
                    aria-hidden="true"
                    className={`absolute inset-x-3 -bottom-0.5 h-px origin-center bg-[var(--accent)] transition-transform duration-300 ${
                      isActive ? 'scale-x-100' : 'scale-x-0'
                    }`}
                  />
                </a>
              );
            })}
          </nav>

          <div className="flex items-center gap-2">
            <button
              type="button"
              onClick={toggleTheme}
              aria-label={theme === 'dark' ? 'Switch to light theme' : 'Switch to dark theme'}
              className="grid h-9 w-9 place-items-center rounded-xl border border-[var(--hairline)] bg-[var(--surface)] text-body transition-colors hover:border-[var(--hairline-strong)] hover:text-accent"
            >
              {theme === 'dark' ? <Moon className="h-4 w-4" /> : <Sun className="h-4 w-4" />}
            </button>

            <a href="#contact" className="btn btn-primary hidden md:inline-flex">
              Hire me
            </a>

            <button
              type="button"
              onClick={() => setMenuOpen((open) => !open)}
              aria-expanded={menuOpen}
              aria-controls="mobile-menu"
              aria-label={menuOpen ? 'Close menu' : 'Open menu'}
              className="grid h-9 w-9 place-items-center rounded-xl border border-[var(--hairline)] bg-[var(--surface)] text-body md:hidden"
            >
              {menuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>
        </div>
      </div>

      <div
        id="mobile-menu"
        ref={menuRef}
        hidden={!menuOpen}
        className="border-t border-[var(--hairline)] bg-[color-mix(in_srgb,var(--bg-base)_96%,transparent)] backdrop-blur-xl md:hidden"
      >
        <nav aria-label="Mobile" className="container-page grid gap-1 py-4">
          {NAV_LINKS.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              className={`rounded-lg px-3 py-3 text-base transition-colors ${
                active === link.href.slice(1)
                  ? 'bg-[var(--accent-soft)] text-strong'
                  : 'text-body hover:text-strong'
              }`}
            >
              {link.name}
            </a>
          ))}
          <a
            href="#contact"
            onClick={() => setMenuOpen(false)}
            className="btn btn-primary mt-2"
          >
            Hire me
          </a>
        </nav>
      </div>
    </header>
  );
};
