import { HTMLAttributes } from 'react';
import { cnb } from 'cnbuilder';
import Link from 'next/link';
import { LogoHorizontal } from './LogoHorizontal';
import * as styles from './Logo.styles';

type LogoProps = HTMLAttributes<HTMLElement> & {
  color?: styles.LogoColorType;
  variant?: styles.LogoVariantType;
  isLink?: boolean;
};

export const Logo = ({
  color = 'white',
  variant = 'horizontal',
  isLink,
  className,
  ...rest
}: LogoProps) => {
  const LogoText = (
    <LogoHorizontal color={color} />
  );

  // Must be /home or else the RSC prefetch won't work as there are issues with "/"
  const homeLink = '/home';

  // Render logo as link if isLink is true
  if (isLink) {
    return (
      <Link
        {...rest}
        href={homeLink}
        className={cnb(styles.link(color), className)}
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
