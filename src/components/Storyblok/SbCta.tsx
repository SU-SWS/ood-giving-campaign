import React from 'react';
import { storyblokEditable } from 'gatsby-source-storyblok';
import { CtaLink, CtaColorType, CtaVariantType } from '../Cta';
import { SbLinkType } from './Storyblok.types';

type SbCtaType = {
  blok: {
    _uid: string;
    link: SbLinkType;
    label: string;
    srText?: string;
    variant?: CtaVariantType;
  };
};

export const SbCta = ({
  blok: {
    _uid,
    link,
    label,
    srText,
    variant,
  },
  blok,
}: SbCtaType) => {
  let color: CtaColorType = '';

  if (variant.includes('white')) {
    color = 'white';
  } else if (variant.includes('black')) {
    color = 'black';
  }

  return (
    <CtaLink
      {...storyblokEditable(blok)}
      key={_uid}
      sbLink={link}
      variant={variant}
      color={color}
      srText={srText}
    >
      {label}
    </CtaLink>
  );
};
