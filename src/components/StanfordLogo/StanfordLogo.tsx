import React, { HTMLAttributes, ReactNode } from 'react';
import { dcnb } from 'cnbuilder';
import * as styles from './StanfordLogo.styles';

type StanfordLogoProps = HTMLAttributes<HTMLElement> & {
  color?: styles.LogoColorType;
  type?: 'short' | 'full' | 'stacked';
  isLink?: boolean;
};

export const StanfordLogo = ({
  className,
  color = 'cardinal-red',
  type,
  isLink,
  ...rest
}: StanfordLogoProps) => {
  let logoText: string | ReactNode;

  switch (type) {
    case 'full':
      logoText = 'Stanford University';
      break;

    case 'stacked':
      logoText = (
        <>
          Stanford
          <br />
          University
        </>
      );
      break;

    case 'short':
    default:
      logoText = 'Stanford';
      break;
  }

  // Render logo as link if isLink is true
  if (isLink) {
    return (
      <a
        {...rest}
        href="https://www.stanford.edu"
        className={dcnb(color ? styles.logoColors[color] : '', className)}
      >
        {logoText}
      </a>
    );
  }

  return (
    <div {...rest} className={dcnb(color ? styles.logoColors[color] : '', className)}>
      {logoText}
    </div>
  );
};
