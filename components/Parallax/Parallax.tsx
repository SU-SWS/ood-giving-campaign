'use client';
import {
  useState, useRef, useLayoutEffect, ReactNode,
} from 'react';
import {
  m,
  useScroll,
  useTransform,
  useSpring,
  useReducedMotion,
} from 'framer-motion';

type ParallaxProps = {
  /**
   * The larger the offset, the more apparent the parallax effect.
   * For a realistic effect, use a lower value for the background layer and a higher value for the foreground element.
   */
  offset?: number;
  children: ReactNode;
};

export const Parallax = ({ children, offset }: ParallaxProps) => {
  const prefersReducedMotion = useReducedMotion();
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    // This mean aniimation starts when the top of the image touches the bottom of the viewport,
    // and ends when the bottom of the image touches the top of the viewport.
    offset: ['start end', 'end start'],
  });
  const yRange = useTransform(scrollYProgress, [0, 1], [offset, -offset]);
  const y = useSpring(yRange, { stiffness: 200, damping: 30 });

  const conditionalY = prefersReducedMotion ? 0 : y;

  return (
    <m.div ref={ref} style={{ y: conditionalY }}>
      {children}
    </m.div>
  );
};
