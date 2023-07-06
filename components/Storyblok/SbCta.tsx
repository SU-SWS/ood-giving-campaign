import React from 'react';
import { storyblokEditable } from '@storyblok/react/rsc';
import { CtaLink, CtaColorType, CtaVariantType } from '../Cta';
import { IconType } from '../HeroIcon';
import { SbLinkType } from './Storyblok.types';
import { CtaCurveType } from '../Cta';

type SbCtaType = {
  blok: {
    _uid: string;
    link: SbLinkType;
    label: string;
    srText?: string;
    variant?: string;
    curve?: CtaCurveType;
    isLarge?: boolean;
    icon?: IconType;
  };
};

export const SbCta = ({
  blok: {
    link,
    label,
    srText,
    variant,
    curve,
    isLarge,
    icon,
  },
  blok,
}: SbCtaType) => {
  // Split out the color from the variant using the white space
  const ctaVariant = variant?.split(' ')[0] as CtaVariantType;
  const color = variant?.split(' ')[1] as CtaColorType;

  return (
    <CtaLink
      {...storyblokEditable(blok)}
      sbLink={link}
      variant={ctaVariant}
      curve={`${curve}${isLarge && curve ? '-large' : ''}` as CtaCurveType}
      size={isLarge ? 'large' : 'default'}
      color={color}
      srText={srText}
      icon={icon}
    >
      {label}
    </CtaLink>
  );
};
