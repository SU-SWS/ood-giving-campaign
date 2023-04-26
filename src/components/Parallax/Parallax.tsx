import React, {
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

/**
 * Using guide from https://samuelkraft.com/blog/spring-parallax-framer-motion-guide
 */
export const Parallax = ({ children, offset = 60 }: ParallaxProps) => {
  const prefersReducedMotion = useReducedMotion();
  const { scrollY } = useScroll();
  const [elementTop, setElementTop] = useState(0);
  const [clientHeight, setClientHeight] = useState(0);
  const ref = useRef(null);

  useLayoutEffect(() => {
    const element = ref.current;
    const onResize = () => {
      const topOfElement = (element?.getBoundingClientRect()?.top ?? 0) + window.scrollY || window.pageYOffset;
      setElementTop(topOfElement);
      setClientHeight(window.innerHeight);
    };
    onResize();
    window.addEventListener('resize', onResize);
    return () => window.removeEventListener('resize', onResize);
  }, [ref]);

  const initial = elementTop - clientHeight;
  const final = elementTop + offset;

  const yRange = useTransform(scrollY, [initial, final], [offset, -offset]);
  const y = useSpring(yRange, { stiffness: 400, damping: 90 });

  // Don't parallax if the user has "reduced motion" enabled
  if (prefersReducedMotion) {
    return <div>{children}</div>;
  }

  return (
    <m.div ref={ref} style={{ y }}>
      {children}
    </m.div>
  );
};
