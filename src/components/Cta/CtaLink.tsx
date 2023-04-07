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

    // Check for internal links
    const isInternal = /^\/(?!\/)/.test(href) || sbLink?.linktype === 'story';

    if (isInternal) {
      return (
        <CtaGatsbyLink {...rest} to={sbLink?.cached_url || href} ref={ref} />
      );
    }

    return (
      <CtaExternalLink {...rest} href={sbLink?.url || sbLink?.cached_url || href} ref={ref} />
    );
  },
);
