import React from 'react';
import { cnb } from 'cnbuilder';
import { CtaContent } from './CtaContent';
import { type CtaCommonProps } from './Cta.types';
import { type SbLinkType } from '../Storyblok/Storyblok.types';
import * as styles from './Cta.styles';

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

    return (
      <a
        {...rest}
        ref={ref as React.ForwardedRef<HTMLAnchorElement>}
        className={cnb(
          styles.cta,
          styles.ctaVariants[variant],
          styles.ctaSizes[size] || styles.ctaSizes[styles.ctaSizeMap[variant]],
          curve ? styles.ctaCurves[curve] : '',
          color ? styles.ctaColors[color] : '',
          className,
        )}
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
