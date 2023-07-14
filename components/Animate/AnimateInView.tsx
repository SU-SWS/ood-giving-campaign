'use client';
import { useRef } from 'react';
import { useInView, m, useReducedMotion } from 'framer-motion';
import { AnimationMap, AnimationType } from './AnimationMap';

type AnimateInViewProps = {
  animation?: AnimationType;
  once?: boolean;
  duration?: number;
  delay?: number;
  children: React.ReactNode;
};

export const AnimateInView = ({
  animation = 'zoomIn',
  once = true,
  duration = 0.5,
  delay,
  children,
  ...props
}: AnimateInViewProps) => {
  const ref = useRef(null);
  const prefersReducedMotion = useReducedMotion();
  const isInView = useInView(ref, { once });

  // Don't animate if the user has "reduced motion" enabled
  if (prefersReducedMotion || animation === 'none') {
    return <div>{children}</div>;
  }

  return (
    <m.div
      ref={ref}
      variants={AnimationMap[animation]}
      transition={{
        delay,
        duration,
        ease: 'easeInOut',
      }}
      initial="hidden"
      animate={isInView ? 'visible' : 'hidden'}
      {...props}
    >
      {children}
    </m.div>
  );
};
