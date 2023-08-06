import React from 'react';
import Link from 'next/link';
import { type LinkProps } from 'next/link';
import { CtaContent } from './CtaContent';
import { getCtaClasses } from './getCtaClasses';
import { type CtaCommonProps } from './Cta.types';
import * as styles from './Cta.styles';
import * as types from './Cta.types';

export type CtaNextLinkProps = CtaCommonProps & LinkProps & {
  target?: React.HTMLAttributeAnchorTarget;
  className?: string;
};

export const CtaNextLink = React.forwardRef<HTMLAnchorElement, CtaNextLinkProps>((props, ref) => {
  const {
    href,
    variant = 'link',
    color,
    size = styles.ctaSizeMap[variant] as types.CtaSizeType,
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

  const ctaClasses = getCtaClasses(variant, size, curve, color, className);

  return (
    <Link {...rest} href={href} ref={ref} target={target} className={ctaClasses}>
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
