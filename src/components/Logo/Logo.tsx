import React, { HTMLAttributes } from 'react';
import { dcnb } from 'cnbuilder';
import { Link } from 'gatsby';
import { LogoHorizontal } from './LogoHorizontal';
import { FontSizeType } from '../Typography';
import * as styles from './Logo.styles';
import { useAddUtmParams } from '../../hooks/useAddUtmParams';

type LogoProps = HTMLAttributes<HTMLElement> & {
  color?: styles.LogoColorType;
  variant?: styles.LogoVariantType;
  size?: FontSizeType;
  isLink?: boolean;
};

export const Logo = ({
  color = 'black',
  variant = 'horizontal',
  size = 5,
  isLink,
  className,
  ...rest
}: LogoProps) => {
  const LogoText = (
    <LogoHorizontal title="Stanford On Purpose" />
  );

  const homeLink = useAddUtmParams('/');

  // Render logo as link if isLink is true
  if (isLink) {
    return (
      <Link
        {...rest}
        to={homeLink}
        className={dcnb(styles.link, className)}
      >
        {LogoText}
      </Link>
    );
  }

  return (
    <div {...rest} className={className}>
      {LogoText}
    </div>
  );
};
