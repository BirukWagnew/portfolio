import React from 'react';
import { useReveal } from '../hooks/useReveal';

interface RevealProps extends React.HTMLAttributes<HTMLDivElement> {
  /** Stagger in milliseconds, applied as an animation delay. */
  delay?: number;
  as?: 'div' | 'li' | 'section' | 'article';
}

/** Fades and lifts its children into place the first time they scroll into view. */
export const Reveal: React.FC<RevealProps> = ({
  delay = 0,
  as: Tag = 'div',
  className = '',
  style,
  children,
  ...rest
}) => {
  const ref = useReveal<HTMLDivElement>();

  // createElement keeps the polymorphic tag from widening the ref type
  return React.createElement(
    Tag as 'div',
    {
      ref,
      className: `reveal ${className}`,
      style: { ['--reveal-delay' as string]: `${delay}ms`, ...style },
      ...rest,
    },
    children,
  );
};
