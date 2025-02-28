'use client';

import { useRef } from 'react';
import { useInView, m, useReducedMotion } from 'framer-motion';
import { AnimationMap, type AnimationType } from './AnimationMap';

type AnimateInViewProps = {
  animation?: AnimationType;
  id?: string;
  once?: boolean;
  duration?: number;
  delay?: number;
  children: React.ReactNode;
  className?: string;
};

export const AnimateInView = ({
  animation = 'zoomIn',
  id,
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

  // Don't use Framer Motion m.div if animation is 'none'
  if (animation === 'none') {
    return <div id={id}>{children}</div>;
  }

  const beforeAnimationState = prefersReducedMotion ? 'hiddenReduced' : 'hidden';

  return (
    <m.div
      ref={ref}
      id={id}
      variants={AnimationMap[animation]}
      transition={{
        delay,
        duration,
        ease: 'easeOut',
      }}
      initial={beforeAnimationState}
      animate={isInView ? 'visible' : beforeAnimationState}
      className={className}
      {...props}
    >
      {children}
    </m.div>
  );
};
