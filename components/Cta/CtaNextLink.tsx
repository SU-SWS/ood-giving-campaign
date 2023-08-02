import React from 'react';
import Link from 'next/link';
import { LinkProps } from 'next/link';
import { CtaContent } from './CtaContent';
import { getCtaClasses } from './getCtaClasses';
import { CtaCommonProps } from './Cta.types';

export type CtaNextLinkProps = CtaCommonProps & LinkProps & {
  target?: React.HTMLAttributeAnchorTarget;
  className?: string;
};

export const CtaNextLink = React.forwardRef<HTMLAnchorElement, CtaNextLinkProps>((props, ref) => {
  const {
    href,
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
    onClick,
    children,
    className,
    ...rest
  } = props;

  const ctaClasses = getCtaClasses(variant, size, curve, color, className);

  return (
    <Link href={href} passHref legacyBehavior {...rest}>
      <a ref={ref} target={target} onClick={onClick} className={ctaClasses}>
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
    </Link>
  );
});
