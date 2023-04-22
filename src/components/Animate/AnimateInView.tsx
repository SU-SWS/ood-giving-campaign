import React, { useRef } from 'react';
import { useInView, m } from 'framer-motion';

type AnimateInViewProps = {
  once?: boolean;
  children: React.ReactNode;
};

export const AnimateInView = ({
  once = true,
  children,
  ...props
}: AnimateInViewProps) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once });

  const variants = {
    hidden: {
      opacity: 0,
      scale: 0.8,
    },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 1, ease: [0.17, 0.55, 0.55, 1], delay: 0.2 },
    },
  };

  return (
    <m.div
      ref={ref}
      variants={variants}
      initial="hidden"
      animate={isInView ? 'visible' : 'hidden'}
      {...props}
    >
      {children}
    </m.div>
  );
};
