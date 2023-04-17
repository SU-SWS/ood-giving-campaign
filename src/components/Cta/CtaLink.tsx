/* eslint-disable @typescript-eslint/no-unused-vars */
import React from 'react';
import { GatsbyLinkProps } from 'gatsby';
import { CtaCommonProps } from './Cta.types';
import { CtaExternalLink } from './CtaExternalLink';
import { CtaGatsbyLink } from './CtaGatsbyLink';
import { SbLinkType } from '../Storyblok/Storyblok.types';
import { useAddUtmParams } from '../../hooks/useAddUtmParams';

/**
 * Use this component for CTA links.
 * You can pass in a Storyblok link field sbLink or a href that is internal or external.
 */
export type CtaLinkProps = Omit<GatsbyLinkProps<{}>, 'to'> & React.ComponentPropsWithoutRef<'a'> & CtaCommonProps & {
  sbLink?: SbLinkType;
};

export const CtaLink = React.forwardRef<HTMLAnchorElement, CtaLinkProps>(
  (props, ref) => {
    const {
      sbLink,
      href,
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
    const isInternal: boolean = /^\/(?!\/)/.test(href) || linktype === 'story';

    // Open internal links in new tab because passing target="_blank" to GatsbyLink doesn't work at the moment
    const openGatsbyLinkInNewTab = (e) => {
      if (target === '_blank') {
        e.preventDefault();
        window.open(cachedUrl || href, '_blank');
      }
    };

    let myLink: string = '';

    if (isInternal) {
      myLink = cachedUrl || href;

      if (anchor) {
        myLink = `${myLink}#${anchor}`;
      }
    } else {
      myLink = url || cachedUrl || `mailto:${email}` || href;
    }

    // Add UTM params to internal links
    const myLinkWithUtm = useAddUtmParams(myLink);

    if (isInternal) {
      return (
        <CtaGatsbyLink
          {...rest}
          ref={ref}
          to={myLinkWithUtm}
          target={target || undefined}
          onClick={openGatsbyLinkInNewTab}
        />
      );
    }

    return (
      <CtaExternalLink
        {...rest}
        {...sbLinkProps}
        ref={ref}
        href={myLinkWithUtm}
        target={target || undefined}
      />
    );
  },
);
