import React from 'react';
import { storyblokEditable } from 'gatsby-source-storyblok';
import {
  CtaLink, CtaColorType, CtaVariantType, CtaCurveType,
} from '../Cta';
import { IconType } from '../HeroIcon';
import { SbLinkType } from './Storyblok.types';

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
    _uid,
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
      key={_uid}
      sbLink={link}
      variant={ctaVariant}
      curve={curve}
      size={isLarge ? 'large' : 'default'}
      color={color}
      srText={srText}
      icon={icon}
    >
      {label}
    </CtaLink>
  );
};
