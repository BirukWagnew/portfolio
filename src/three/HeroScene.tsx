import { useEffect, useRef, useState } from 'react';
import { Canvas } from '@react-three/fiber';
import { PipelineScene } from './PipelineScene';
import { useIsCompactDevice } from '../hooks/usePreferences';

/**
 * WebGL wrapper for the hero pipeline. Rendering is paused whenever the hero
 * leaves the viewport or the tab is hidden, so the GPU stays idle while the
 * visitor reads the rest of the page.
 */
export default function HeroScene() {
  const container = useRef<HTMLDivElement>(null);
  const scroll = useRef(0);
  const [active, setActive] = useState(true);
  const compact = useIsCompactDevice();

  useEffect(() => {
    const node = container.current;
    if (!node) return;

    const observer = new IntersectionObserver(
      ([entry]) => setActive(entry.isIntersecting && !document.hidden),
      { threshold: 0.01 },
    );
    observer.observe(node);

    const onVisibility = () => setActive(!document.hidden);
    document.addEventListener('visibilitychange', onVisibility);

    return () => {
      observer.disconnect();
      document.removeEventListener('visibilitychange', onVisibility);
    };
  }, []);

  useEffect(() => {
    let frame = 0;
    const onScroll = () => {
      cancelAnimationFrame(frame);
      frame = requestAnimationFrame(() => {
        scroll.current = Math.min(1, window.scrollY / Math.max(1, window.innerHeight));
      });
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
    return () => {
      window.removeEventListener('scroll', onScroll);
      cancelAnimationFrame(frame);
    };
  }, []);

  return (
    <div ref={container} className="absolute inset-0" aria-hidden="true">
      <Canvas
        frameloop={active ? 'always' : 'never'}
        dpr={compact ? [1, 1.25] : [1, 1.75]}
        camera={{ position: [0, 0, 7.5], fov: 45 }}
        gl={{ antialias: !compact, powerPreference: 'high-performance', alpha: true }}
      >
        <PipelineScene quality={compact ? 'low' : 'high'} scrollRef={scroll} />
      </Canvas>
    </div>
  );
}
