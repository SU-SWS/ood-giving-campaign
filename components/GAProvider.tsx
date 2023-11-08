'use client';
import { useEffect } from 'react';
import { setCookie, getCookie } from 'cookies-next';

export default function GAProvider({ children }: { children: React.ReactNode }) {
  const cookieName = 'SU-GC-UTMs';

  useEffect(() => {
    if (typeof window === 'undefined') {
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

    // UTM source is a required param for GA to work.
    if (utm_source) {
      setCookie(cookieName, UTMs, {
        path: '/',
        domain: window.location.hostname,
        secure: window.location.protocol === 'https' ? true : false,
        httpOnly: false,
        sameSite: 'strict',
      });
    }

    // Function to get the active anchor element that was clicked on if there is one.
    const getActiveElement = (event: MouseEvent) => {

      const target = event.target;
      if (target instanceof Element === false) { return null; }

      // If the target is a link.
      if (target.tagName === 'A') { return target; }

      // Start with the parent element of the target
      let parentElement = (target as HTMLElement).parentElement;

      // Loop through the parent elements until an anchor element is found or parent becomes null
      while (parentElement !== null) {
        // Check if the current parent element is an anchor element
        if (parentElement.tagName === 'A') {
          return parentElement; // Found an anchor element, so return it
        }

        parentElement = parentElement.parentElement; // Move up to the next parent element
      }

      return null; // No anchor element found in the parent elements
    };

    // Listen to all of the click events and add the UTM params to the outgoing location.
    document.addEventListener('click', (e) => {
      const cookie = getCookie(cookieName);
      if (!cookie) { return;}

      const utms = JSON.parse(cookie);
      if (!utms.utm_source) { return;}

      // Get the element that was clicked on and make sure it is a link.
      const activeElement = document.activeElement !== document.body ? document.activeElement : getActiveElement(e);
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
