import React from 'react';
import { dcnb } from 'cnbuilder';
import * as styles from './HeroIcon.styles';

export type HeroIconProps = React.ComponentProps<'svg'> & {
  icon?: styles.IconType;
  // Title for the SVG for accessibility
  title?: string;
  noBaseStyle?: boolean;
  className?: string;
};

export const HeroIcon = ({
  icon,
  title,
  noBaseStyle,
  className,
  ...props
}: HeroIconProps) => {
  const Icon = styles.iconMap[icon];

  // Set default base style so icon has reasonable size if used out of the box
  // noBaseStyle boolean allows for user to not attach any base styles if needed
  const baseStyle = noBaseStyle ? '' : styles.iconBaseStyle[icon] || styles.iconBaseStyle.default;
  const triangleStyle = icon.includes('triangle') ? styles.triangleFill : '';
  const heroIconStyle = dcnb('su-transition', baseStyle, triangleStyle);

  return (
    <Icon
      title={title}
      // If a title for the SVG is provided, unhide the SVG from screen readers
      aria-hidden={!title}
      className={dcnb(heroIconStyle, className)}
      {...props}
    />
  );
};
