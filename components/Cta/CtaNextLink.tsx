'use client';
import React from 'react';
import Link from 'next/link';
import { LinkProps } from 'next/link';
import { CtaContent } from './CtaContent';
import { getCtaClasses } from './getCtaClasses';
import { CtaCommonProps } from './Cta.types';

export type CtaNextLinkProps = CtaCommonProps & LinkProps & {
  className: string;
};

export const CtaNextLink = (props: CtaNextLinkProps) => {
  const {
    variant = 'link',
    color,
    size,
    curve,
    icon,
    iconPosition = 'right',
    animate,
    iconProps,
    srText,
    children,
    className,
    ...rest
  } = props;

  const ctaClasses = getCtaClasses(variant, size, curve, color, className);

  return (
    <Link
      className={ctaClasses}
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
    </Link>
  );
};
