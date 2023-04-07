import React from 'react';
import { storyblokEditable } from 'gatsby-source-storyblok';
import { Logo, LogoVariantType, LogoColorType } from '../Logo';
import { FontSizeType } from '../Typography';

type SbLogoProps = {
  blok: {
    _uid: string;
    type?: LogoVariantType;
    size?: FontSizeType;
    color?: LogoColorType;
  };
};

const SbLogo = ({
  blok: {
    _uid,
    type,
    size,
    color,
  },
  blok,
}: SbLogoProps) => (
  <Logo {...storyblokEditable(blok)} key={_uid} variant={type} size={size} color={color} />
);

export default SbLogo;
