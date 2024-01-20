'use client';
import Script from 'next/script';
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
      <Script id="google-tag-manager" strategy="afterInteractive">
      {`
        (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
        new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
        j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
        'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
        })(window,document,'script','dataLayer','${GTM_ID}');
      `}
    </Script>
    );
  }
  return null;
};
