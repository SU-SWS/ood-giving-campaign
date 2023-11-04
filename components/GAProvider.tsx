'use client';
import { useEffect } from 'react';
import { setCookie, getCookie } from 'cookies-next';

export default function GAProvider({ children }: { children: React.ReactNode }) {
  const cookieName = 'SU-GC-UTMs';

  useEffect(() => {
    if (typeof window == 'undefined') {
      return;
    }

    const urlParams = new URLSearchParams(window.location.search);
    const utm_source = urlParams.get('utm_source') || undefined;
    const utm_medium = urlParams.get('utm_medium') || undefined;
    const utm_campaign = urlParams.get('utm_campaign') || undefined;
    const utm_content = urlParams.get('utm_content') || undefined;
    const utm_term = urlParams.get('utm_term') || undefined;
    const UTMs = {
      utm_source,
      utm_medium,
      utm_campaign,
      utm_content,
      utm_term,
    };

    // UTM source is required.
    if (UTMs.utm_source) {
      setCookie(cookieName, JSON.stringify(UTMs), {
        expires: new Date(Date.now() + 1000 * 60 * 60 * 24 * 30),
        path: '/',
      });
    }

    // Listen to all of the click events and add the UTM params to the outgoing location.
    document.addEventListener('click', (e) => {
      const cookie = getCookie(cookieName);
      if (!cookie) { return;}

      const utms = JSON.parse(cookie);
      if (!utms) { return;}

      // Get the element that was clicked on and make sure it is a link.
      const activeElement = document.activeElement;
      const isLink = activeElement && activeElement.tagName === 'A';
      if (!isLink) { return;}

      // Make sure it has an href.
      const href = activeElement.getAttribute('href');
      if (!href) { return;}

      // check if the href is an external link.
      if (!href.startsWith('http')) { return; }
      if (href.startsWith(window.location.origin)) { return; }

      // Add the UTM params to the href before heading out.
      const url = new URL(href);
      !!utms.utm_source && !url.searchParams.get('utm_source') && url.searchParams.set('utm_source', utms.utm_source);
      !!utms.utm_medium && !url.searchParams.get('utm_medium') && url.searchParams.set('utm_medium', utms.utm_medium);
      !!utms.utm_campaign && !url.searchParams.get('utm_campaign') && url.searchParams.set('utm_campaign', utms.utm_campaign);
      !!utms.utm_content && !url.searchParams.get('utm_content') && url.searchParams.set('utm_content', utms.utm_content);
      !!utms.utm_term && !url.searchParams.get('utm_term') && url.searchParams.set('utm_term', utms.utm_term);

      // Take over the click event and send the user to the new location.
      e.preventDefault();
      window.location.replace(url);
    });


  }, []);

  // Pass through children.
  return children;
};
