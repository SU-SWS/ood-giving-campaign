import React, { useRef } from 'react';
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
  duration = 1,
  delay = 0.3,
  children,
  ...props
}: AnimateInViewProps) => {
  const ref = useRef(null);
  const prefersReducedMotion = useReducedMotion();
  const isInView = useInView(ref, { once });

  // Don't animate if the user has "reduced motion" enabled
  if (prefersReducedMotion) {
    return <div>children</div>;
  }

  return (
    <m.div
      ref={ref}
      variants={AnimationMap[animation]}
      transition={{
        duration,
        ease: [0.17, 0.55, 0.55, 1],
        delay,
      }}
      initial="hidden"
      animate={isInView ? 'visible' : 'hidden'}
      {...props}
    >
      {children}
    </m.div>
  );
};
