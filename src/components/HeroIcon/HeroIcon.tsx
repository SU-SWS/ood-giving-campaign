import React from 'react';
import { ClassValue, dcnb } from 'cnbuilder';
import { SrOnlyText } from '../Typography/SrOnlyText';
import { iconMap } from './Heroicon.styles';

export type IconType = keyof typeof iconMap;

export type HeroIconProps = {
  icon?: IconType;
  noBaseStyle?: boolean;
  srText?: string;
  className?: ClassValue;
};

export const HeroIcon = ({
  icon,
  noBaseStyle,
  srText,
  className,
  ...props
}: HeroIconProps & React.ComponentProps<'svg'>) => {
  const Icon = iconMap[icon];

  // Set default base style so icon has reasonable size if used out of the box
  // noBaseStyle boolean allows for user to not attach any base styles if needed
  const baseStyle = noBaseStyle ? '' : iconBaseStyle[icon] || iconBaseStyle.default;
  const heroIconStyle = dcnb('su-transition', baseStyle);

  return (
    <>
      <Icon aria-hidden className={dcnb(heroIconStyle, className)} {...props} />
      {srText && <SrOnlyText>srText</SrOnlyText>}
    </>
  );
};
