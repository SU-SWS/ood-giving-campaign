'use client';
import { GoogleTagManager } from '@next/third-parties/google';
import { useEffect } from 'react';
import useUTMs from '@/hooks/useUTMs';
const GTM_ID = 'GTM-5RGQ5DD';

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

/**
 *
 * @returns GTAG script
 */
export const GTAG = () => {
  if (process.env.CONTEXT && ['production', 'branch-deploy'].includes(process.env.CONTEXT)) {
    return (
      <GoogleTagManager gtmId={GTM_ID} />
    );
  }
  return null;
};
