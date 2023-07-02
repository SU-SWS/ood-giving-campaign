'use client';
import React from 'react';
import { CtaContent } from './CtaContent';
import { getCtaClasses } from './getCtaClasses';
import { CtaCommonProps } from './Cta.types';
import { SbLinkType } from '../Storyblok/Storyblok.types';

export type CtaExternalLinkProps = React.ComponentPropsWithoutRef<'a'> & CtaCommonProps & {
  sbLink?: SbLinkType;
  href?: string;
};

export const CtaExternalLink = React.forwardRef<HTMLAnchorElement, CtaExternalLinkProps>(
  (props, ref) => {
    const {
      variant = 'link',
      color = variant !== 'inline' && variant !== 'inlineDark' ? 'white' : '',
      size,
      curve,
      icon,
      iconPosition = 'right',
      animate,
      iconProps,
      srText = '(external link)',
      children,
      className,
      ...rest
    } = props;

    const ctaClasses = getCtaClasses(variant, size || '', curve, color, className);

    return (
      <a
        className={ctaClasses}
        ref={ref as React.ForwardedRef<HTMLAnchorElement>}
        {...rest}
      >
        <CtaContent
          variant={variant}
          icon={icon}
          iconPosition={iconPosition}
          animate={animate}
          iconProps={iconProps}
          srText={srText}
        >
          {children}
        </CtaContent>
      </a>
    );
  },
);
