'use client';

import React from 'react';
import { type LinkProps } from 'next/link';
import { type CtaCommonProps } from './Cta.types';
import { CtaExternalLink } from './CtaExternalLink';
import { CtaNextLink } from './CtaNextLink';
import { type SbLinkType } from '../Storyblok/Storyblok.types';
import { UrlObject } from 'url';
//import { useAddUtmParams } from '../../hooks/useAddUtmParams';

/**
 * Use this component for CTA links.
 * You can pass in a Storyblok link field sbLink or a href that is internal or external.
 */
export type CtaLinkProps = Omit<LinkProps, 'href'> & React.ComponentPropsWithoutRef<'a'> & CtaCommonProps & {
  sbLink?: SbLinkType;
  href?: string | UrlObject;
};

export const CtaLink = React.forwardRef<HTMLAnchorElement, CtaLinkProps>(
  (props, ref) => {
    const {
      sbLink,
      href = '',
      ...rest
    } = props;

    const {
      id,
      fieldtype,
      linktype,
      cached_url: cachedUrl,
      url,
      email,
      target,
      anchor,
      // External link in Storyblok can have additional custom attributes
      ...sbLinkProps
    } = sbLink || {};

    // Check for internal links
    const isInternal: boolean = linktype === 'story' || /^\/(?!\/)/.test(href);

    let myLink: string = '';

    if (isInternal) {
      myLink = cachedUrl || href;

      if (!myLink?.startsWith('/')) {
        myLink = myLink === 'home' ? '/' : `/${myLink}`;
      }

      if (anchor) {
        myLink = `${myLink}#${anchor}`;
      }
    } else if (linktype === 'email') {
      myLink = `mailto:${email}`;
    } else {
      myLink = url || cachedUrl || href;
    }

    // Add UTM params to internal links
    //const myLinkWithUtm = useAddUtmParams(myLink);
    const myLinkWithUtm = myLink;

    if (isInternal) {
      return (
        <CtaNextLink
          {...rest}
          ref={ref}
          href={myLinkWithUtm}
          target={target || undefined}
        />
      );
    }

    return (
      <CtaExternalLink
        {...rest}
        {...sbLinkProps}
        ref={ref}
        href={myLink}
        target={target || undefined}
      />
    );
  },
);
