import React from 'react';
import { cnb } from 'cnbuilder';
import Link from 'next/link';
import { type LinkProps } from 'next/link';
import { CtaContent } from './CtaContent';
import { type CtaCommonProps } from './Cta.types';
import * as styles from './Cta.styles';

export type CtaNextLinkProps = CtaCommonProps & LinkProps & {
  target?: React.HTMLAttributeAnchorTarget;
  className?: string;
};

export const CtaNextLink = React.forwardRef<HTMLAnchorElement, CtaNextLinkProps>((props, ref) => {
  const {
    href = '',
    variant = 'link',
    color,
    size,
    curve,
    icon,
    iconPosition = 'right',
    animate,
    iconProps,
    srText,
    target,
    children,
    className,
    ...rest
  } = props;

  return (
    <Link
      {...rest}
      ref={ref}
      href={href}
      target={target}
      prefetch={false}
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
    </Link>
  );
});
