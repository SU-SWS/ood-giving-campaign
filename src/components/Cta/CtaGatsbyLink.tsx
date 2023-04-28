import React from 'react';
import { Link, GatsbyLinkProps } from 'gatsby';
import { CtaContent } from './CtaContent';
import { getCtaClasses } from './getCtaClasses';
import { CtaCommonProps } from './Cta.types';

export type CtaGatsbyLinkProps = CtaCommonProps & GatsbyLinkProps<{}>;

export const CtaGatsbyLink = (props) => {
  const {
    variant = 'link',
    color,
    size,
    icon,
    iconPosition = 'right',
    animate,
    iconProps,
    srText,
    uppercase,
    children,
    className,
    ...rest
  } = props;

  const ctaClasses = getCtaClasses(variant, color, size, uppercase, className);

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
