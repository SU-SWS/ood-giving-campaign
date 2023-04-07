import React from 'react';
import { CtaExternalLink } from './CtaExternalLink';
import { CtaButton, CtaButtonProps } from './CtaButton';
import { CtaGatsbyLink } from './CtaGatsbyLink';
import { CtaProps, isAnchor, isLink } from './Cta.types';

/**
 * Button, link button or CTA link
 *
*/
export const Cta = React.forwardRef<HTMLButtonElement | HTMLAnchorElement, CtaProps>(
  (props, ref) => {
    if (isAnchor(props)) {
      return (
        <CtaExternalLink {...props} ref={ref as React.ForwardedRef<HTMLAnchorElement>} />
      );
    }

    if (isLink(props)) {
      return (
        <CtaGatsbyLink {...props} />
      );
    }

    return (
      <CtaButton {...props as CtaButtonProps} ref={ref as React.ForwardedRef<HTMLButtonElement>} />
    );
  },
);
