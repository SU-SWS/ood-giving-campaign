'use client';
import { LazyMotion, domMax } from 'framer-motion';

interface LazyMotionProviderProps {
  children: React.ReactNode;
}
const LazyMotionProvider = ({ children }: LazyMotionProviderProps) => {
  return (
    <LazyMotion features={domMax} strict>
      {children}
    </LazyMotion>
  );
};

export default LazyMotionProvider;
