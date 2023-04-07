import React, { HTMLAttributes } from 'react';
import { dcnb } from 'cnbuilder';
import { Link } from 'gatsby';
import { StanfordLogo } from '../StanfordLogo';
import { Text, FontSizeType } from '../Typography';
import * as styles from './Logo.styles';

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
    <Text size={size} className={styles.textWrapper(variant)}>
      <StanfordLogo color={color} type="short" className={styles.stanford(variant)} />
      <Text
        font="druk"
        uppercase
        leading="trim"
        color={color}
        className={styles.onPurpose(variant)}
      >
        On<br className={variant === 'horizontal' ? 'su-hidden' : ''} />
        <span className="su-ml-02em">Purpose</span>
      </Text>
    </Text>
  );

  // Render logo as link if isLink is true
  if (isLink) {
    return (
      <Link
        {...rest}
        to="/"
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
