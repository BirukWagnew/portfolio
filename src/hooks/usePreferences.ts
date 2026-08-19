import { useEffect, useState } from 'react';

/** Subscribe to a CSS media query, SSR-safe and cleanup-safe. */
export function useMediaQuery(query: string): boolean {
  const [matches, setMatches] = useState(() => {
    if (typeof window === 'undefined' || !window.matchMedia) return false;
    return window.matchMedia(query).matches;
  });

  useEffect(() => {
    if (!window.matchMedia) return;
    const list = window.matchMedia(query);
    const onChange = (event: MediaQueryListEvent) => setMatches(event.matches);
    setMatches(list.matches);
    list.addEventListener('change', onChange);
    return () => list.removeEventListener('change', onChange);
  }, [query]);

  return matches;
}

export const usePrefersReducedMotion = () => useMediaQuery('(prefers-reduced-motion: reduce)');

/** Coarse pointer or narrow viewport — used to scale the 3D scene down. */
export const useIsCompactDevice = () =>
  useMediaQuery('(max-width: 767px), (pointer: coarse)');
