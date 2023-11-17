'use client';

import { useRef } from 'react';
import { useInView, m, useReducedMotion } from 'framer-motion';
import { AnimationMap, type AnimationType } from './AnimationMap';

type AnimateInViewProps = {
  animation?: AnimationType;
  once?: boolean;
  duration?: number;
  delay?: number;
  children: React.ReactNode;
  className?: string;
};

export const AnimateInView = ({
  animation = 'zoomIn',
  once = true,
  duration = 0.6,
  delay,
  children,
  className,
  ...props
}: AnimateInViewProps) => {
  const ref = useRef<HTMLDivElement>(null);
  const prefersReducedMotion = useReducedMotion();
  const isInView = useInView(ref, { once });

  // Don't animate if the user has "reduced motion" enabled
  if (animation === 'none') {
    return <div>{children}</div>;
  }

  const beforeAnimationState = prefersReducedMotion ? 'hiddenReduced' : 'hidden';

  return (
    <m.div
      ref={ref}
      variants={AnimationMap[animation]}
      transition={{
        delay,
        duration,
        ease: 'easeOut',
      }}
      initial="hidden"
      animate={isInView ? 'visible' : beforeAnimationState}
      className={className}
      {...props}
    >
      {children}
    </m.div>
  );
};
