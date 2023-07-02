import React from 'react';
import { storyblokEditable } from '@storyblok/react/rsc';
import { Logo, LogoVariantType, LogoColorType } from '../Logo';

type SbLogoProps = {
  blok: {
    _uid: string;
    type?: LogoVariantType;
    color?: LogoColorType;
  };
};

export const SbLogo = ({
  blok: {
    _uid,
    type,
    color,
  },
  blok,
}: SbLogoProps) => (
  <Logo {...storyblokEditable(blok)} key={_uid} variant={type} color={color} />
);
