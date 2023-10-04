'use client';
import { LazyMotion, domMax } from 'framer-motion';

interface LazyMotionProviderProps {
  children: React.ReactNode;
}
const LazyMotionProvider = ({ children }: LazyMotionProviderProps) => {
  return (
    <LazyMotion features={domMax}>
      {children}
    </LazyMotion>
  );
};

export default LazyMotionProvider;