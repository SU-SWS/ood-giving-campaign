import React from 'react';
import { cnb } from 'cnbuilder';
import Link from 'next/link';
import { type LinkProps } from 'next/link';
import { CtaContent } from './CtaContent';
import { type CtaCommonProps } from './Cta.types';
import { marginTops, marginBottoms } from '@/utilities/datasource';
import * as styles from './Cta.styles';
import { getSlugPrefix } from '@/utilities/getSlugPrefix';

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
    mt,
    mb,
    children,
    className,
    ...rest
  } = props;

  // Normalize the href and strip the slug prefix.
  const prefix = getSlugPrefix();
  const path = href.toString();
  const hrefParts = path.split('/');

  // Remove empty strings from the array.
  const cleanParts = hrefParts.filter((s:string) => s.length);

  // If the first part of the URL is the slug prefix, remove it.
  if (cleanParts[0] === prefix) {
    cleanParts.shift();
  }

  const strippedHref = `/${cleanParts.join('/')}`;

  return (
    <Link
      {...rest}
      ref={ref}
      href={strippedHref}
      target={target}
      className={cnb(
        styles.cta,
        styles.ctaVariants[variant],
        styles.ctaSizes[size] || styles.ctaSizes[styles.ctaSizeMap[variant]],
        curve ? styles.ctaCurves[curve] : '',
        color ? styles.ctaColors[color] : '',
        mt ? marginTops[mt] : '',
        mb ? marginBottoms[mb] : '',
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
