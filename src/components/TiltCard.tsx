import React, { useCallback, useRef } from 'react';
import { useIsCompactDevice, usePrefersReducedMotion } from '../hooks/usePreferences';

interface TiltCardProps {
  className?: string;
  /** Maximum rotation in degrees on each axis. */
  intensity?: number;
  children: React.ReactNode;
}

/**
 * Subtle pointer-driven 3D tilt. Values are written straight to CSS custom
 * properties inside a rAF so hover never triggers a React re-render, and the
 * effect is skipped entirely on touch devices and for reduced-motion users.
 */
export const TiltCard: React.FC<TiltCardProps> = ({
  className = '',
  intensity = 5,
  children,
}) => {
  const ref = useRef<HTMLDivElement>(null);
  const frame = useRef(0);
  const reducedMotion = usePrefersReducedMotion();
  const compact = useIsCompactDevice();
  const enabled = !reducedMotion && !compact;

  const handlePointerMove = useCallback(
    (event: React.PointerEvent<HTMLDivElement>) => {
      if (!enabled) return;
      const node = ref.current;
      if (!node) return;

      const { clientX, clientY } = event;
      cancelAnimationFrame(frame.current);
      frame.current = requestAnimationFrame(() => {
        const rect = node.getBoundingClientRect();
        const px = (clientX - rect.left) / rect.width;
        const py = (clientY - rect.top) / rect.height;
        node.style.setProperty('--tilt-y', `${(px - 0.5) * intensity * 2}deg`);
        node.style.setProperty('--tilt-x', `${(0.5 - py) * intensity * 2}deg`);
        node.style.setProperty('--pointer-x', `${px * 100}%`);
        node.style.setProperty('--pointer-y', `${py * 100}%`);
      });
    },
    [enabled, intensity],
  );

  const reset = useCallback(() => {
    cancelAnimationFrame(frame.current);
    const node = ref.current;
    if (!node) return;
    node.style.setProperty('--tilt-x', '0deg');
    node.style.setProperty('--tilt-y', '0deg');
  }, []);

  return (
    <div
      ref={ref}
      className={`tilt ${className}`}
      onPointerMove={handlePointerMove}
      onPointerLeave={reset}
    >
      {children}
      <span className="tilt-sheen" aria-hidden="true" />
    </div>
  );
};
