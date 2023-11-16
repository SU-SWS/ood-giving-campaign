'use client';
import { useEffect } from 'react';
import useUTMs from '@/hooks/useUTMs';

export default function GAProvider({ children }: { children: React.ReactNode }) {
  const { setUTMCookie, deleteUTMCookie } = useUTMs();

  useEffect(() => {
    if (typeof window === 'undefined') {
      return;
    }
    setUTMCookie();
    return () => {
      deleteUTMCookie();
    };
  }, [setUTMCookie, deleteUTMCookie]);

  // Pass through children.
  return children;
};
