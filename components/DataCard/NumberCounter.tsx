'use client';
import React, { useState, useEffect, useRef } from 'react';
import { m, useInView } from 'framer-motion';

type NumberCounterProps = {
  number: number;
  duration?: number;
};

export const NumberCounter = ({ number, duration = 2.5 }: NumberCounterProps) => {
  const [count, setCount] = useState(1);
  const ref = useRef(null);
  const isInView = useInView(ref);
  // Multiply duration by 1000 to convert to milliseconds
  const interval = Math.floor(duration * 1000 / number);

  useEffect(() => {
    if (isInView && count < number) {
      const timer = setTimeout(() => setCount(count + 1), interval);
      return () => clearTimeout(timer);
    }
    return () => {};
  }, [count, number, isInView, interval]);

  return (
    <m.span animate={{ opacity: count > 0 ? 1 : 0 }} ref={ref}>
      {count}
    </m.span>
  );
};
