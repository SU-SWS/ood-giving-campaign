'use client';
import React from 'react';
import { LinkProps } from 'next/link';
import { CtaCommonProps } from './Cta.types';
import { CtaExternalLink } from './CtaExternalLink';
import { CtaNextLink } from './CtaNextLink';
import { SbLinkType } from '../Storyblok/Storyblok.types';
//import { useAddUtmParams } from '../../hooks/useAddUtmParams';

/**
 * Use this component for CTA links.
 * You can pass in a Storyblok link field sbLink or a href that is internal or external.
 */
export type CtaLinkProps = Omit<LinkProps, 'href'> & React.ComponentPropsWithoutRef<'a'> & CtaCommonProps & {
  sbLink?: SbLinkType;
  href?: string;
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

    // Open internal links in new tab because passing target="_blank" to NextLink doesn't work at the moment
    const openNextLinkInNewTab = (e: React.MouseEvent<HTMLAnchorElement> | React.KeyboardEvent<HTMLAnchorElement>) => {
      if (target === '_blank') {
        e.preventDefault();
        window.open(cachedUrl || href, '_blank');
      }
    };

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
          onClick={openNextLinkInNewTab}
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
