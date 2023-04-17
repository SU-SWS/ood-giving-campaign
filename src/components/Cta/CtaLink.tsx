/* eslint-disable @typescript-eslint/no-unused-vars */
import React from 'react';
import { GatsbyLinkProps } from 'gatsby';
import { CtaCommonProps } from './Cta.types';
import { CtaExternalLink } from './CtaExternalLink';
import { CtaGatsbyLink } from './CtaGatsbyLink';
import { SbLinkType } from '../Storyblok/Storyblok.types';

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
      target,
      anchor,
      // External link in Storyblok can have additional custom attributes
      ...sbLinkProps
    } = sbLink || {};

    // Check for internal links
    const isInternal = /^\/(?!\/)/.test(href) || linktype === 'story';

    // Open internal links in new tab because passing target="_blank" to GatsbyLink doesn't work at the moment
    const openGatsbyLinkInNewTab = () => {
      if (target === '_blank') {
        window.open(cachedUrl || href, '_blank');
      }
    };

    if (isInternal) {
      let toLink: string = cachedUrl;

      if (sbLink?.anchor) {
        toLink = `${toLink}#${anchor}`;
      }

      return (
        <CtaGatsbyLink
          {...rest}
          ref={ref}
          to={toLink || href}
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
        href={url || cachedUrl || href}
        target={target || undefined}
      />
    );
  },
);
