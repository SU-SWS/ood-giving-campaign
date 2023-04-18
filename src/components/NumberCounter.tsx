import React, { useState, useEffect, useRef } from 'react';
import { m, useInView } from 'framer-motion';
import { Text } from './Typography';

/**
 * TODO: This is a POC. Will add types and props if client decides we need this.
 */
export const NumberCounter = ({ number, duration = 2500, afterText = '' }) => {
  const [count, setCount] = useState(1);
  const ref = useRef(null);
  const isInView = useInView(ref);
  const interval = duration / number;

  useEffect(() => {
    if (isInView && count < number) {
      const timer = setTimeout(() => setCount(count + 1), interval);
      return () => clearTimeout(timer);
    }
    return () => {};
  }, [count, number, isInView, interval]);

  return (
    <m.span animate={{ opacity: count > 0 ? 1 : 0 }} ref={ref}>
      <Text size={8} weight="bold" align="center" className="su-text-robins-egg">{count}{afterText}</Text>
    </m.span>
  );
};
