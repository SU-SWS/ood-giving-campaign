import React from 'react';
import { storyblokEditable } from 'gatsby-source-storyblok';
import { CtaLink, CtaVariantType } from '../Cta';
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
}: SbCtaType) => (
  <CtaLink
    {...storyblokEditable(blok)}
    key={_uid}
    sbLink={link}
    variant={variant}
    srText={srText}
  >
    {label}
  </CtaLink>
);
