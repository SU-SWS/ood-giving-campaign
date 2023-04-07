import React, { HTMLAttributes } from 'react';
import { dcnb } from 'cnbuilder';
import { Link } from 'gatsby';
import { FlexBox } from '../FlexBox';
import { StanfordLogo } from '../StanfordLogo';
import { Text } from '../Typography';
import * as styles from './Logo.styles';

type LogoProps = HTMLAttributes<HTMLElement> & {
  color?: 'black' | 'white';
  variant?: styles.LogoVariantType;
  isLink?: boolean;
};

export const Logo = ({
  color = 'black',
  variant = 'horizontal',
  isLink,
  className,
  ...rest
}: LogoProps) => {
  const LogoText = (
    <FlexBox>
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
    </FlexBox>
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
