import React from 'react';
import { CtaContent } from './CtaContent';
import { getCtaClasses } from './getCtaClasses';
import { CtaCommonProps } from './Cta.types';

export type CtaExternalLinkProps = React.ComponentPropsWithoutRef<'a'> & CtaCommonProps & {
  href?: string;
};

export const CtaExternalLink = React.forwardRef<HTMLAnchorElement, CtaExternalLinkProps>(
  (props, ref) => {
    const {
      href,
      variant = 'link',
      size,
      icon = 'external',
      iconPosition = 'right',
      animate = 'top-right',
      iconProps,
      srText = '(external link)',
      uppercase,
      children,
      className,
      ...rest
    } = props;

    const ctaClasses = getCtaClasses(variant, size, uppercase, className);

    return (
      <a
        href={href}
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
